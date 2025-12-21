/**
 * Upload Card Component
 * Card component for displaying uploads in the gallery
 * @module components/community/UploadCard
 */

import { memo, useState } from 'react';
import { Eye, Heart, Code, Clock, User } from 'lucide-react';
import { useSharedIntersectionObserver } from '../../hooks/useSharedIntersectionObserver';

/**
 * Format relative time
 */
function formatRelativeTime(dateString, language) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) {
    return language === 'zh-CN' ? '刚刚' : 'Just now';
  } else if (diffMins < 60) {
    return language === 'zh-CN' ? `${diffMins}分钟前` : `${diffMins}m ago`;
  } else if (diffHours < 24) {
    return language === 'zh-CN' ? `${diffHours}小时前` : `${diffHours}h ago`;
  } else if (diffDays < 30) {
    return language === 'zh-CN' ? `${diffDays}天前` : `${diffDays}d ago`;
  } else {
    return date.toLocaleDateString(language === 'zh-CN' ? 'zh-CN' : 'en-US', {
      month: 'short',
      day: 'numeric',
    });
  }
}

/**
 * Render mode badge
 */
const RENDER_MODE_BADGES = {
  html: { label: 'HTML', color: 'bg-orange-500/20 text-orange-400' },
  jsx: { label: 'JSX', color: 'bg-cyan-500/20 text-cyan-400' },
  'react-jsx': { label: 'React', color: 'bg-blue-500/20 text-blue-400' },
};

/**
 * Upload Card Component
 */
function UploadCardComponent({ upload, language, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Lazy loading with intersection observer
  const cardRef = useSharedIntersectionObserver(
    () => setIsVisible(true),
    { threshold: 0.1, rootMargin: '100px' }
  );

  // Extract display values
  const title = upload.title?.[language] || upload.title?.['en-US'] || upload.title?.['zh-CN'] || 'Untitled';
  const description = upload.description?.[language] || upload.description?.['en-US'] || upload.description?.['zh-CN'] || '';
  const authorName = upload.author_name || 'Anonymous';
  const createdAt = upload.created_at;
  const viewCount = upload.view_count || 0;
  const likeCount = upload.like_count || 0;
  const renderMode = upload.render_mode || 'html';
  const tags = upload.tags || [];
  const thumbnailPath = upload.thumbnail_path;

  const renderModeBadge = RENDER_MODE_BADGES[renderMode] || RENDER_MODE_BADGES.html;

  return (
    <article
      ref={cardRef}
      onClick={onClick}
      className="group relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Thumbnail / Preview area */}
      <div className="aspect-video bg-gray-900 relative overflow-hidden">
        {isVisible && (
          <>
            {thumbnailPath && !imageError ? (
              <img
                src={thumbnailPath}
                alt={title}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : (
              // Placeholder when no thumbnail
              <div className="w-full h-full flex items-center justify-center">
                <Code size={48} className="text-gray-600" />
              </div>
            )}

            {/* Loading shimmer */}
            {thumbnailPath && !imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-shimmer" />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Render mode badge */}
            <div className="absolute top-3 right-3">
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${renderModeBadge.color}`}>
                {renderModeBadge.label}
              </span>
            </div>
          </>
        )}

        {/* Skeleton when not visible */}
        {!isVisible && (
          <div className="w-full h-full bg-gray-800 animate-pulse" />
        )}
      </div>

      {/* Content area */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-white font-medium line-clamp-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-400 text-sm line-clamp-2">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded text-xs"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-0.5 text-gray-500 text-xs">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer: Author and stats */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
          {/* Author and time */}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <User size={12} />
            <span className="truncate max-w-20">{authorName}</span>
            <span>•</span>
            <Clock size={12} />
            <span>{formatRelativeTime(createdAt, language)}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-gray-500 text-xs">
            <span className="flex items-center gap-1">
              <Eye size={12} />
              {viewCount}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={12} />
              {likeCount}
            </span>
          </div>
        </div>
      </div>

      {/* Click ripple effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-0 group-active:opacity-10 bg-white transition-opacity" />
      </div>
    </article>
  );
}

export const UploadCard = memo(UploadCardComponent);
export default UploadCard;
