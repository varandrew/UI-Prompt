-- ============================================
-- UI Style Prompt - User Uploads Schema
-- Version: 1.0.0
-- ============================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Main uploads table
-- ============================================
CREATE TABLE IF NOT EXISTS uploads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Author info (nullable for anonymous uploads)
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name VARCHAR(100) DEFAULT 'Anonymous' NOT NULL,
  author_avatar_url TEXT,

  -- Bilingual metadata (JSONB for flexibility)
  title JSONB NOT NULL DEFAULT '{"zh-CN": "", "en-US": ""}',
  description JSONB DEFAULT '{"zh-CN": "", "en-US": ""}',

  -- Content storage (inline for small files, < 64KB)
  html_content TEXT,
  css_content TEXT,
  js_content TEXT,
  jsx_content TEXT,

  -- Storage paths for large files (> 64KB)
  html_path TEXT,
  css_path TEXT,
  js_path TEXT,
  jsx_path TEXT,

  -- Preview configuration
  thumbnail_path TEXT,
  render_mode VARCHAR(20) DEFAULT 'html' NOT NULL,
  -- Possible values: 'html', 'jsx', 'react-jsx'

  -- Classification
  category VARCHAR(50) DEFAULT 'community' NOT NULL,
  tags TEXT[] DEFAULT '{}',

  -- Statistics
  view_count INTEGER DEFAULT 0 NOT NULL,
  like_count INTEGER DEFAULT 0 NOT NULL,
  fork_count INTEGER DEFAULT 0 NOT NULL,

  -- Forking relationship
  forked_from UUID REFERENCES uploads(id) ON DELETE SET NULL,

  -- Status management
  status VARCHAR(20) DEFAULT 'published' NOT NULL,
  -- Possible values: 'draft', 'published', 'moderated', 'deleted'

  is_featured BOOLEAN DEFAULT FALSE NOT NULL,
  moderation_reason TEXT,

  -- Constraints
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'moderated', 'deleted')),
  CONSTRAINT valid_render_mode CHECK (render_mode IN ('html', 'jsx', 'react-jsx')),
  CONSTRAINT title_not_empty CHECK (
    (title->>'zh-CN' IS NOT NULL AND title->>'zh-CN' != '') OR
    (title->>'en-US' IS NOT NULL AND title->>'en-US' != '')
  )
);

-- ============================================
-- Likes tracking table
-- ============================================
CREATE TABLE IF NOT EXISTS upload_likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  upload_id UUID NOT NULL REFERENCES uploads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  -- For anonymous likes, store hashed IP
  anonymous_id VARCHAR(64),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Ensure one like per user/anonymous per upload
  CONSTRAINT unique_user_like UNIQUE NULLS NOT DISTINCT (upload_id, user_id),
  CONSTRAINT unique_anonymous_like UNIQUE NULLS NOT DISTINCT (upload_id, anonymous_id),
  -- At least one identifier must be present
  CONSTRAINT has_identifier CHECK (user_id IS NOT NULL OR anonymous_id IS NOT NULL)
);

-- ============================================
-- Views tracking table (for analytics)
-- ============================================
CREATE TABLE IF NOT EXISTS upload_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  upload_id UUID NOT NULL REFERENCES uploads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  viewer_ip_hash VARCHAR(64),
  user_agent TEXT,
  referer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================
-- Reports table (for content moderation)
-- ============================================
CREATE TABLE IF NOT EXISTS upload_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  upload_id UUID NOT NULL REFERENCES uploads(id) ON DELETE CASCADE,
  reporter_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reporter_ip_hash VARCHAR(64),
  reason VARCHAR(50) NOT NULL,
  -- Possible values: 'spam', 'malicious', 'inappropriate', 'copyright', 'other'
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending' NOT NULL,
  -- Possible values: 'pending', 'reviewed', 'resolved', 'dismissed'
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  CONSTRAINT valid_reason CHECK (reason IN ('spam', 'malicious', 'inappropriate', 'copyright', 'other')),
  CONSTRAINT valid_report_status CHECK (status IN ('pending', 'reviewed', 'resolved', 'dismissed'))
);

-- ============================================
-- Indexes for performance
-- ============================================

-- uploads table indexes
CREATE INDEX IF NOT EXISTS idx_uploads_status ON uploads(status);
CREATE INDEX IF NOT EXISTS idx_uploads_category ON uploads(category);
CREATE INDEX IF NOT EXISTS idx_uploads_created_at ON uploads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_uploads_updated_at ON uploads(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_uploads_view_count ON uploads(view_count DESC);
CREATE INDEX IF NOT EXISTS idx_uploads_like_count ON uploads(like_count DESC);
CREATE INDEX IF NOT EXISTS idx_uploads_author_id ON uploads(author_id);
CREATE INDEX IF NOT EXISTS idx_uploads_forked_from ON uploads(forked_from);
CREATE INDEX IF NOT EXISTS idx_uploads_is_featured ON uploads(is_featured) WHERE is_featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_uploads_tags ON uploads USING GIN(tags);

-- Full-text search index (English + Chinese)
CREATE INDEX IF NOT EXISTS idx_uploads_title_search ON uploads USING GIN(
  to_tsvector('english', COALESCE(title->>'en-US', ''))
);

-- upload_likes indexes
CREATE INDEX IF NOT EXISTS idx_upload_likes_upload_id ON upload_likes(upload_id);
CREATE INDEX IF NOT EXISTS idx_upload_likes_user_id ON upload_likes(user_id);

-- upload_views indexes
CREATE INDEX IF NOT EXISTS idx_upload_views_upload_id ON upload_views(upload_id);
CREATE INDEX IF NOT EXISTS idx_upload_views_created_at ON upload_views(created_at DESC);

-- upload_reports indexes
CREATE INDEX IF NOT EXISTS idx_upload_reports_upload_id ON upload_reports(upload_id);
CREATE INDEX IF NOT EXISTS idx_upload_reports_status ON upload_reports(status);

-- ============================================
-- Triggers
-- ============================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_uploads_updated_at
  BEFORE UPDATE ON uploads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Auto-increment like_count on like/unlike
CREATE OR REPLACE FUNCTION update_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE uploads SET like_count = like_count + 1 WHERE id = NEW.upload_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE uploads SET like_count = like_count - 1 WHERE id = OLD.upload_id;
  END IF;
  RETURN NULL;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_upload_like_count
  AFTER INSERT OR DELETE ON upload_likes
  FOR EACH ROW
  EXECUTE FUNCTION update_like_count();

-- Auto-increment view_count (with deduplication logic in application)
CREATE OR REPLACE FUNCTION increment_view_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE uploads SET view_count = view_count + 1 WHERE id = NEW.upload_id;
  RETURN NULL;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_upload_view_count
  AFTER INSERT ON upload_views
  FOR EACH ROW
  EXECUTE FUNCTION increment_view_count();

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable RLS
ALTER TABLE uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE upload_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE upload_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE upload_reports ENABLE ROW LEVEL SECURITY;

-- uploads: Anyone can read published uploads
CREATE POLICY "Public can view published uploads"
  ON uploads FOR SELECT
  USING (status = 'published');

-- uploads: Authors can view their own uploads (any status)
CREATE POLICY "Authors can view own uploads"
  ON uploads FOR SELECT
  USING (auth.uid() = author_id);

-- uploads: Anyone can create uploads (anonymous or authenticated)
CREATE POLICY "Anyone can create uploads"
  ON uploads FOR INSERT
  WITH CHECK (TRUE);

-- uploads: Only authors can update their uploads
CREATE POLICY "Authors can update own uploads"
  ON uploads FOR UPDATE
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- uploads: Only authors can delete their uploads
CREATE POLICY "Authors can delete own uploads"
  ON uploads FOR DELETE
  USING (auth.uid() = author_id);

-- upload_likes: Anyone can read likes
CREATE POLICY "Public can view likes"
  ON upload_likes FOR SELECT
  USING (TRUE);

-- upload_likes: Anyone can create likes
CREATE POLICY "Anyone can create likes"
  ON upload_likes FOR INSERT
  WITH CHECK (TRUE);

-- upload_likes: Users can delete their own likes
CREATE POLICY "Users can delete own likes"
  ON upload_likes FOR DELETE
  USING (auth.uid() = user_id OR user_id IS NULL);

-- upload_views: Anyone can create views
CREATE POLICY "Anyone can create views"
  ON upload_views FOR INSERT
  WITH CHECK (TRUE);

-- upload_views: Only admins can read views (for analytics)
CREATE POLICY "Only admins can view analytics"
  ON upload_views FOR SELECT
  USING (FALSE); -- Disable public access, enable via service key

-- upload_reports: Anyone can create reports
CREATE POLICY "Anyone can create reports"
  ON upload_reports FOR INSERT
  WITH CHECK (TRUE);

-- upload_reports: Only admins can read/update reports
CREATE POLICY "Only admins can manage reports"
  ON upload_reports FOR SELECT
  USING (FALSE); -- Disable public access, enable via service key

-- ============================================
-- Helper Functions
-- ============================================

-- Function to get upload with resolved content
CREATE OR REPLACE FUNCTION get_upload_with_content(upload_uuid UUID)
RETURNS TABLE (
  id UUID,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  author_id UUID,
  author_name VARCHAR,
  title JSONB,
  description JSONB,
  html_content TEXT,
  css_content TEXT,
  js_content TEXT,
  jsx_content TEXT,
  render_mode VARCHAR,
  category VARCHAR,
  tags TEXT[],
  view_count INTEGER,
  like_count INTEGER,
  status VARCHAR
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    u.id,
    u.created_at,
    u.updated_at,
    u.author_id,
    u.author_name,
    u.title,
    u.description,
    u.html_content,
    u.css_content,
    u.js_content,
    u.jsx_content,
    u.render_mode,
    u.category,
    u.tags,
    u.view_count,
    u.like_count,
    u.status
  FROM uploads u
  WHERE u.id = upload_uuid AND u.status = 'published';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to search uploads
CREATE OR REPLACE FUNCTION search_uploads(
  search_query TEXT DEFAULT NULL,
  filter_category VARCHAR DEFAULT NULL,
  filter_tags TEXT[] DEFAULT NULL,
  sort_by VARCHAR DEFAULT 'created_at',
  sort_order VARCHAR DEFAULT 'desc',
  page_size INTEGER DEFAULT 20,
  page_offset INTEGER DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  created_at TIMESTAMPTZ,
  author_name VARCHAR,
  title JSONB,
  description JSONB,
  render_mode VARCHAR,
  category VARCHAR,
  tags TEXT[],
  view_count INTEGER,
  like_count INTEGER,
  thumbnail_path TEXT,
  total_count BIGINT
) AS $$
DECLARE
  total BIGINT;
BEGIN
  -- Get total count first
  SELECT COUNT(*) INTO total
  FROM uploads u
  WHERE u.status = 'published'
    AND (filter_category IS NULL OR u.category = filter_category)
    AND (filter_tags IS NULL OR u.tags && filter_tags)
    AND (search_query IS NULL OR
         to_tsvector('english', COALESCE(u.title->>'en-US', '')) @@ plainto_tsquery('english', search_query) OR
         u.title->>'zh-CN' ILIKE '%' || search_query || '%' OR
         u.title->>'en-US' ILIKE '%' || search_query || '%');

  RETURN QUERY
  SELECT
    u.id,
    u.created_at,
    u.author_name,
    u.title,
    u.description,
    u.render_mode,
    u.category,
    u.tags,
    u.view_count,
    u.like_count,
    u.thumbnail_path,
    total AS total_count
  FROM uploads u
  WHERE u.status = 'published'
    AND (filter_category IS NULL OR u.category = filter_category)
    AND (filter_tags IS NULL OR u.tags && filter_tags)
    AND (search_query IS NULL OR
         to_tsvector('english', COALESCE(u.title->>'en-US', '')) @@ plainto_tsquery('english', search_query) OR
         u.title->>'zh-CN' ILIKE '%' || search_query || '%' OR
         u.title->>'en-US' ILIKE '%' || search_query || '%')
  ORDER BY
    CASE WHEN sort_by = 'created_at' AND sort_order = 'desc' THEN u.created_at END DESC,
    CASE WHEN sort_by = 'created_at' AND sort_order = 'asc' THEN u.created_at END ASC,
    CASE WHEN sort_by = 'view_count' AND sort_order = 'desc' THEN u.view_count END DESC,
    CASE WHEN sort_by = 'view_count' AND sort_order = 'asc' THEN u.view_count END ASC,
    CASE WHEN sort_by = 'like_count' AND sort_order = 'desc' THEN u.like_count END DESC,
    CASE WHEN sort_by = 'like_count' AND sort_order = 'asc' THEN u.like_count END ASC
  LIMIT page_size
  OFFSET page_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- Sample data (for development)
-- ============================================
-- INSERT INTO uploads (title, description, html_content, css_content, category, tags)
-- VALUES
-- (
--   '{"zh-CN": "示例模板", "en-US": "Sample Template"}',
--   '{"zh-CN": "这是一个示例模板", "en-US": "This is a sample template"}',
--   '<div class="sample">Hello World</div>',
--   '.sample { color: blue; }',
--   'community',
--   ARRAY['sample', 'demo']
-- );
