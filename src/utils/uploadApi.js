/**
 * Supabase API Client for User Uploads
 * Handles all API operations for the community upload feature
 * @module utils/uploadApi
 */

import { createClient } from '@supabase/supabase-js';
import { asyncTryCatch } from './errorHandler';

// ============================================
// Configuration
// ============================================

/**
 * Supabase configuration
 * These values should be set via environment variables
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

/**
 * Check if Supabase is configured
 */
export const isSupabaseConfigured = () => {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
};

/**
 * Create Supabase client
 * Returns null if not configured (graceful degradation)
 */
let supabaseClient = null;

export const getSupabaseClient = () => {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase is not configured. Upload features will be disabled.');
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
  }

  return supabaseClient;
};

// ============================================
// Types
// ============================================

/**
 * @typedef {Object} Upload
 * @property {string} id - Upload UUID
 * @property {Date} created_at - Creation timestamp
 * @property {Date} updated_at - Last update timestamp
 * @property {string} author_id - Author's user ID (nullable)
 * @property {string} author_name - Author's display name
 * @property {Object} title - Bilingual title {zh-CN, en-US}
 * @property {Object} description - Bilingual description
 * @property {string} html_content - HTML content
 * @property {string} css_content - CSS content
 * @property {string} js_content - JS content
 * @property {string} jsx_content - JSX content
 * @property {string} render_mode - 'html' | 'jsx' | 'react-jsx'
 * @property {string} category - Category name
 * @property {string[]} tags - Tag array
 * @property {number} view_count - View count
 * @property {number} like_count - Like count
 * @property {string} status - 'draft' | 'published' | 'moderated' | 'deleted'
 */

/**
 * @typedef {Object} UploadListParams
 * @property {string} [search] - Search query
 * @property {string} [category] - Filter by category
 * @property {string[]} [tags] - Filter by tags
 * @property {'created_at' | 'view_count' | 'like_count'} [sortBy] - Sort field
 * @property {'asc' | 'desc'} [sortOrder] - Sort direction
 * @property {number} [pageSize] - Items per page
 * @property {number} [page] - Page number (0-indexed)
 */

/**
 * @typedef {Object} CreateUploadData
 * @property {Object} title - Bilingual title
 * @property {Object} [description] - Bilingual description
 * @property {string} [html_content] - HTML content
 * @property {string} [css_content] - CSS content
 * @property {string} [js_content] - JS content
 * @property {string} [jsx_content] - JSX content
 * @property {string} [render_mode] - Render mode
 * @property {string} [category] - Category
 * @property {string[]} [tags] - Tags
 * @property {string} [author_name] - Author name
 */

// ============================================
// API Functions
// ============================================

/**
 * Fetch list of uploads with filtering and pagination
 * @param {UploadListParams} params - List parameters
 * @returns {Promise<{data: Upload[], total: number, error: Error|null}>}
 */
export async function fetchUploads(params = {}) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { data: [], total: 0, error: new Error('Supabase not configured') };
  }

  const {
    search = null,
    category = null,
    tags = null,
    sortBy = 'created_at',
    sortOrder = 'desc',
    pageSize = 20,
    page = 0,
  } = params;

  return asyncTryCatch(async () => {
    // Use RPC function for complex search
    if (search || tags) {
      const { data, error } = await supabase.rpc('search_uploads', {
        search_query: search,
        filter_category: category,
        filter_tags: tags,
        sort_by: sortBy,
        sort_order: sortOrder,
        page_size: pageSize,
        page_offset: page * pageSize,
      });

      if (error) throw error;

      const total = data?.[0]?.total_count ?? 0;
      return {
        data: data || [],
        total: Number(total),
        error: null,
      };
    }

    // Simple query without search
    let query = supabase
      .from('uploads')
      .select('*', { count: 'exact' })
      .eq('status', 'published');

    if (category) {
      query = query.eq('category', category);
    }

    query = query
      .order(sortBy, { ascending: sortOrder === 'asc' })
      .range(page * pageSize, (page + 1) * pageSize - 1);

    const { data, count, error } = await query;

    if (error) throw error;

    return {
      data: data || [],
      total: count || 0,
      error: null,
    };
  }, { data: [], total: 0, error: null });
}

/**
 * Fetch a single upload by ID
 * @param {string} id - Upload UUID
 * @returns {Promise<{data: Upload|null, error: Error|null}>}
 */
export async function fetchUploadById(id) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { data, error } = await supabase
      .from('uploads')
      .select('*')
      .eq('id', id)
      .eq('status', 'published')
      .single();

    if (error) throw error;

    return { data, error: null };
  }, { data: null, error: null });
}

/**
 * Create a new upload
 * @param {CreateUploadData} uploadData - Upload data
 * @returns {Promise<{data: Upload|null, error: Error|null}>}
 */
export async function createUpload(uploadData) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    // Get current user (may be null for anonymous)
    const { data: { user } } = await supabase.auth.getUser();

    const insertData = {
      ...uploadData,
      author_id: user?.id || null,
      author_name: uploadData.author_name || user?.email?.split('@')[0] || 'Anonymous',
      status: 'published',
    };

    const { data, error } = await supabase
      .from('uploads')
      .insert(insertData)
      .select()
      .single();

    if (error) throw error;

    return { data, error: null };
  }, { data: null, error: null });
}

/**
 * Update an existing upload
 * @param {string} id - Upload UUID
 * @param {Partial<CreateUploadData>} updates - Fields to update
 * @returns {Promise<{data: Upload|null, error: Error|null}>}
 */
export async function updateUpload(id, updates) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { data, error } = await supabase
      .from('uploads')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return { data, error: null };
  }, { data: null, error: null });
}

/**
 * Delete an upload
 * @param {string} id - Upload UUID
 * @returns {Promise<{success: boolean, error: Error|null}>}
 */
export async function deleteUpload(id) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { success: false, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    // Soft delete by updating status
    const { error } = await supabase
      .from('uploads')
      .update({ status: 'deleted' })
      .eq('id', id);

    if (error) throw error;

    return { success: true, error: null };
  }, { success: false, error: null });
}

/**
 * Toggle like on an upload
 * @param {string} uploadId - Upload UUID
 * @param {string} [anonymousId] - Anonymous identifier (hashed IP or localStorage ID)
 * @returns {Promise<{liked: boolean, error: Error|null}>}
 */
export async function toggleLike(uploadId, anonymousId = null) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { liked: false, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { data: { user } } = await supabase.auth.getUser();

    // Check if already liked
    let existingLike;
    if (user) {
      const { data } = await supabase
        .from('upload_likes')
        .select('id')
        .eq('upload_id', uploadId)
        .eq('user_id', user.id)
        .single();
      existingLike = data;
    } else if (anonymousId) {
      const { data } = await supabase
        .from('upload_likes')
        .select('id')
        .eq('upload_id', uploadId)
        .eq('anonymous_id', anonymousId)
        .single();
      existingLike = data;
    }

    if (existingLike) {
      // Unlike
      const { error } = await supabase
        .from('upload_likes')
        .delete()
        .eq('id', existingLike.id);

      if (error) throw error;
      return { liked: false, error: null };
    } else {
      // Like
      const insertData = {
        upload_id: uploadId,
        user_id: user?.id || null,
        anonymous_id: user ? null : anonymousId,
      };

      const { error } = await supabase
        .from('upload_likes')
        .insert(insertData);

      if (error) throw error;
      return { liked: true, error: null };
    }
  }, { liked: false, error: null });
}

/**
 * Check if user has liked an upload
 * @param {string} uploadId - Upload UUID
 * @param {string} [anonymousId] - Anonymous identifier
 * @returns {Promise<boolean>}
 */
export async function checkLiked(uploadId, anonymousId = null) {
  const supabase = getSupabaseClient();
  if (!supabase) return false;

  return asyncTryCatch(async () => {
    const { data: { user } } = await supabase.auth.getUser();

    let query = supabase
      .from('upload_likes')
      .select('id')
      .eq('upload_id', uploadId);

    if (user) {
      query = query.eq('user_id', user.id);
    } else if (anonymousId) {
      query = query.eq('anonymous_id', anonymousId);
    } else {
      return false;
    }

    const { data } = await query.single();
    return Boolean(data);
  }, false);
}

/**
 * Record a view on an upload
 * @param {string} uploadId - Upload UUID
 * @param {Object} metadata - View metadata
 * @returns {Promise<void>}
 */
export async function recordView(uploadId, metadata = {}) {
  const supabase = getSupabaseClient();
  if (!supabase) return;

  // Fire and forget - don't block on view recording
  supabase
    .from('upload_views')
    .insert({
      upload_id: uploadId,
      viewer_ip_hash: metadata.ipHash || null,
      user_agent: metadata.userAgent || null,
      referer: metadata.referer || null,
    })
    .then(() => {})
    .catch((err) => console.warn('Failed to record view:', err));
}

/**
 * Report an upload for moderation
 * @param {string} uploadId - Upload UUID
 * @param {Object} report - Report details
 * @param {string} report.reason - Report reason
 * @param {string} [report.description] - Additional description
 * @returns {Promise<{success: boolean, error: Error|null}>}
 */
export async function reportUpload(uploadId, report) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { success: false, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('upload_reports')
      .insert({
        upload_id: uploadId,
        reporter_id: user?.id || null,
        reason: report.reason,
        description: report.description || null,
      });

    if (error) throw error;

    return { success: true, error: null };
  }, { success: false, error: null });
}

/**
 * Get popular tags
 * @param {number} limit - Maximum number of tags to return
 * @returns {Promise<string[]>}
 */
export async function getPopularTags(limit = 20) {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  return asyncTryCatch(async () => {
    // This would ideally use a materialized view or cached aggregation
    const { data, error } = await supabase
      .from('uploads')
      .select('tags')
      .eq('status', 'published')
      .limit(100);

    if (error) throw error;

    // Count tag frequencies
    const tagCounts = {};
    for (const row of data || []) {
      for (const tag of row.tags || []) {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      }
    }

    // Sort by frequency and return top N
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([tag]) => tag);
  }, []);
}

/**
 * Get categories with counts
 * @returns {Promise<{category: string, count: number}[]>}
 */
export async function getCategoryCounts() {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  return asyncTryCatch(async () => {
    const { data, error } = await supabase
      .from('uploads')
      .select('category')
      .eq('status', 'published');

    if (error) throw error;

    // Count categories
    const counts = {};
    for (const row of data || []) {
      counts[row.category] = (counts[row.category] || 0) + 1;
    }

    return Object.entries(counts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }, []);
}

// ============================================
// Storage Functions (for large files)
// ============================================

/**
 * Upload a large file to Supabase Storage
 * @param {string} bucket - Storage bucket name
 * @param {string} path - File path in bucket
 * @param {Blob|File} file - File to upload
 * @returns {Promise<{url: string|null, error: Error|null}>}
 */
export async function uploadFile(bucket, path, file) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { url: null, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    return { url: publicUrl, error: null };
  }, { url: null, error: null });
}

/**
 * Delete a file from Supabase Storage
 * @param {string} bucket - Storage bucket name
 * @param {string} path - File path in bucket
 * @returns {Promise<{success: boolean, error: Error|null}>}
 */
export async function deleteFile(bucket, path) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { success: false, error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) throw error;

    return { success: true, error: null };
  }, { success: false, error: null });
}

// ============================================
// Auth Functions
// ============================================

/**
 * Get current user
 * @returns {Promise<{user: Object|null, error: Error|null}>}
 */
export async function getCurrentUser() {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { user: null, error: null };
  }

  return asyncTryCatch(async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  }, { user: null, error: null });
}

/**
 * Sign in with OAuth provider
 * @param {'github' | 'google'} provider - OAuth provider
 * @returns {Promise<{error: Error|null}>}
 */
export async function signInWithProvider(provider) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { error: new Error('Supabase not configured') };
  }

  return asyncTryCatch(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) throw error;
    return { error: null };
  }, { error: null });
}

/**
 * Sign out
 * @returns {Promise<{error: Error|null}>}
 */
export async function signOut() {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { error: null };
  }

  return asyncTryCatch(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  }, { error: null });
}

// ============================================
// Exports
// ============================================

export default {
  // Configuration
  isSupabaseConfigured,
  getSupabaseClient,

  // CRUD
  fetchUploads,
  fetchUploadById,
  createUpload,
  updateUpload,
  deleteUpload,

  // Interactions
  toggleLike,
  checkLiked,
  recordView,
  reportUpload,

  // Metadata
  getPopularTags,
  getCategoryCounts,

  // Storage
  uploadFile,
  deleteFile,

  // Auth
  getCurrentUser,
  signInWithProvider,
  signOut,
};
