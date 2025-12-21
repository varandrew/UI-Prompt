/**
 * Upload Preview Page
 * Full-page preview for user-uploaded templates
 * @module pages/community/UploadPreviewPage
 */

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { LivePreview } from '../../components/code/LivePreview';
import { fetchUploadById, recordView, toggleLike, checkLiked } from '../../utils/uploadApi';
import {
  X,
  Code,
  Heart,
  Share2,
  ExternalLink,
  Edit,
  Eye,
  Clock,
  User,
  Tag,
  Copy,
  Check,
  Loader2,
} from 'lucide-react';
import appCssUrl from '../../index.css?url';

/**
 * Format date
 */
function formatDate(dateString, language) {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'zh-CN' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Upload Preview Page Component
 */
export function UploadPreviewPage() {
  const navigate = useNavigate();
  const { uploadId } = useParams();
  const { t, language } = useLanguage();

  // State
  const [upload, setUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('html');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { copy: copyToClipboard, copied } = useCopyToClipboard();

  // Load upload data
  useEffect(() => {
    if (!uploadId) return;

    setIsLoading(true);
    fetchUploadById(uploadId).then(({ data, error }) => {
      if (data) {
        setUpload(data);
        setLikeCount(data.like_count || 0);
        // Record view (fire and forget)
        recordView(uploadId);
        // Check if liked
        checkLiked(uploadId).then(setIsLiked);
      } else {
        setError(error?.message || 'Upload not found');
      }
      setIsLoading(false);
    });
  }, [uploadId]);

  // Handle like toggle
  const handleLike = useCallback(async () => {
    const { liked } = await toggleLike(uploadId);
    setIsLiked(liked);
    setLikeCount((prev) => (liked ? prev + 1 : prev - 1));
  }, [uploadId]);

  // Handle copy code
  const handleCopyCode = useCallback(async () => {
    const codeMap = {
      html: upload?.html_content,
      css: upload?.css_content,
      js: upload?.js_content,
      jsx: upload?.jsx_content,
    };

    const code = codeMap[activeCodeTab];
    if (code) {
      await copyToClipboard(code);
    }
  }, [upload, activeCodeTab, copyToClipboard]);

  // Handle share
  const handleShare = useCallback(async (type) => {
    const url = window.location.href;
    const title = upload?.title?.[language] || upload?.title?.['en-US'] || 'UI Template';

    switch (type) {
      case 'copy':
        await copyToClipboard(url);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        break;
    }
    setShowShareMenu(false);
  }, [upload, language, copyToClipboard]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showCode) {
          setShowCode(false);
        } else if (showShareMenu) {
          setShowShareMenu(false);
        } else {
          navigate(-1);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navigate, showCode, showShareMenu]);

  // Extract display values
  const displayTitle = upload?.title?.[language] || upload?.title?.['en-US'] || upload?.title?.['zh-CN'] || 'Untitled';
  const displayDescription = upload?.description?.[language] || upload?.description?.['en-US'] || upload?.description?.['zh-CN'] || '';
  const authorName = upload?.author_name || 'Anonymous';
  const createdAt = upload?.created_at;
  const viewCount = upload?.view_count || 0;
  const tags = upload?.tags || [];
  const renderMode = upload?.render_mode || 'html';

  // Available code tabs
  const codeTabs = useMemo(() => {
    const tabs = [];
    if (upload?.html_content) tabs.push({ id: 'html', label: 'HTML' });
    if (upload?.css_content) tabs.push({ id: 'css', label: 'CSS' });
    if (upload?.js_content) tabs.push({ id: 'js', label: 'JavaScript' });
    if (upload?.jsx_content) tabs.push({ id: 'jsx', label: 'JSX' });
    return tabs;
  }, [upload]);

  // Get current code
  const currentCode = useMemo(() => {
    const codeMap = {
      html: upload?.html_content,
      css: upload?.css_content,
      js: upload?.js_content,
      jsx: upload?.jsx_content,
    };
    return codeMap[activeCodeTab] || '';
  }, [upload, activeCodeTab]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
        <Loader2 size={32} className="text-blue-400 animate-spin" />
      </div>
    );
  }

  if (error || !upload) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-lg mb-4">{error || 'Upload not found'}</div>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
          >
            {t('back') || 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 shrink-0">
        {/* Left: Title and metadata */}
        <div className="flex items-center gap-4">
          <h1 className="text-white font-medium truncate max-w-md">
            {displayTitle}
          </h1>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <User size={14} />
              {authorName}
            </span>
            {createdAt && (
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {formatDate(createdAt, language)}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {viewCount}
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Like button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              isLiked
                ? 'bg-red-500/20 text-red-400'
                : 'text-gray-400 hover:text-red-400 hover:bg-gray-700'
            }`}
          >
            <Heart size={16} className={isLiked ? 'fill-current' : ''} />
            <span>{likeCount}</span>
          </button>

          {/* Code button */}
          <button
            onClick={() => setShowCode(!showCode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              showCode
                ? 'bg-blue-500/20 text-blue-400'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Code size={16} />
            <span>{t('community.viewCode') || 'Code'}</span>
          </button>

          {/* Share button */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <Share2 size={16} />
              <span>{t('share') || 'Share'}</span>
            </button>

            {showShareMenu && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                >
                  <Copy size={14} />
                  {t('copyLink') || 'Copy Link'}
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Facebook
                </button>
              </div>
            )}
          </div>

          {/* Edit button (if author) */}
          {/* TODO: Check if current user is author */}

          {/* Close button */}
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors ml-2"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Preview area */}
        <div className={`flex-1 bg-white overflow-hidden ${showCode ? 'w-1/2' : 'w-full'}`}>
          <LivePreview
            html={upload.html_content || ''}
            css={upload.css_content || ''}
            js={upload.js_content || ''}
            jsx={upload.jsx_content || ''}
            renderMode={renderMode}
            language={language}
            title={displayTitle}
            appCssUrl={appCssUrl}
          />
        </div>

        {/* Code panel */}
        {showCode && (
          <div className="w-1/2 bg-gray-900 border-l border-gray-700 flex flex-col">
            {/* Code tabs */}
            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
              <div className="flex items-center gap-1">
                {codeTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCodeTab(tab.id)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      activeCodeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                <span className="text-sm">{copied ? (t('copied') || 'Copied!') : (t('copy') || 'Copy')}</span>
              </button>
            </div>

            {/* Code content */}
            <div className="flex-1 overflow-auto p-4">
              <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">
                {currentCode || (t('community.noCode') || 'No code available')}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Bottom info bar */}
      <footer className="h-12 bg-gray-800 border-t border-gray-700 flex items-center justify-between px-4 shrink-0">
        {/* Tags */}
        <div className="flex items-center gap-2">
          {tags.length > 0 && (
            <>
              <Tag size={14} className="text-gray-400" />
              <div className="flex gap-1.5">
                {tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 5 && (
                  <span className="text-gray-500 text-xs">+{tags.length - 5}</span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Description */}
        {displayDescription && (
          <p className="text-gray-400 text-sm truncate max-w-md">
            {displayDescription}
          </p>
        )}
      </footer>
    </div>
  );
}

export default UploadPreviewPage;
