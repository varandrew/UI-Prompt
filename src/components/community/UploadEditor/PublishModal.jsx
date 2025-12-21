/**
 * Publish Modal Component
 * Pre-publish confirmation dialog with metadata summary
 * @module components/community/UploadEditor/PublishModal
 */

import { memo, useState, useCallback } from 'react';
import { X, AlertCircle, Check, Loader2, Tag, Folder, Code, User } from 'lucide-react';

/**
 * Publish Modal Component
 */
function PublishModalComponent({
  title,
  description,
  tags,
  category,
  isEditMode,
  isSaving,
  validationErrors,
  onPublish,
  onClose,
  t,
  language,
}) {
  const [agreed, setAgreed] = useState(false);
  const [publishResult, setPublishResult] = useState(null);

  const handlePublish = useCallback(async () => {
    const result = await onPublish();
    setPublishResult(result);

    if (result.success) {
      // Close modal after short delay on success
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  }, [onPublish, onClose]);

  const displayTitle = title[language] || title['en-US'] || title['zh-CN'] || '';
  const displayDescription = description[language] || description['en-US'] || description['zh-CN'] || '';

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">
            {isEditMode
              ? (t('community.editor.updateTemplate') || 'Update Template')
              : (t('community.editor.publishTemplate') || 'Publish Template')}
          </h3>
          <button
            onClick={onClose}
            disabled={isSaving}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          {/* Validation errors */}
          {validationErrors.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-medium">
                <AlertCircle size={18} />
                <span>{t('community.editor.validationErrors') || 'Please fix the following errors:'}</span>
              </div>
              <ul className="list-disc list-inside text-red-400/80 text-sm space-y-1">
                {validationErrors.map((err, i) => (
                  <li key={i}>{err.message}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Publish result */}
          {publishResult && (
            <div
              className={`rounded-lg p-4 ${
                publishResult.success
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
            >
              <div className={`flex items-center gap-2 font-medium ${
                publishResult.success ? 'text-green-400' : 'text-red-400'
              }`}>
                {publishResult.success ? <Check size={18} /> : <AlertCircle size={18} />}
                <span>
                  {publishResult.success
                    ? (t('community.editor.publishSuccess') || 'Published successfully!')
                    : (publishResult.error || 'Publish failed')}
                </span>
              </div>
            </div>
          )}

          {/* Template summary */}
          {!publishResult?.success && (
            <>
              <div className="bg-gray-900 rounded-lg p-4 space-y-3">
                {/* Title */}
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    {t('community.editor.title') || 'Title'}
                  </div>
                  <div className="text-white font-medium">
                    {displayTitle || (
                      <span className="text-red-400 italic">
                        {t('community.editor.titleRequired') || 'Title is required'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {displayDescription && (
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      {t('community.editor.description') || 'Description'}
                    </div>
                    <div className="text-gray-300 text-sm line-clamp-2">
                      {displayDescription}
                    </div>
                  </div>
                )}

                {/* Category */}
                <div className="flex items-center gap-2">
                  <Folder size={14} className="text-gray-400" />
                  <span className="text-gray-300 text-sm capitalize">{category}</span>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={14} className="text-gray-400" />
                    {tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 5 && (
                      <span className="text-gray-500 text-xs">
                        +{tags.length - 5} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Content policy agreement */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-800"
                />
                <span className="text-gray-300 text-sm">
                  {language === 'zh-CN' ? (
                    <>
                      我确认此内容不包含恶意代码、版权侵权内容或不当材料，并同意
                      <a href="/terms" className="text-blue-400 hover:underline">服务条款</a>
                      。
                    </>
                  ) : (
                    <>
                      I confirm this content does not contain malicious code, copyright-infringing content, or inappropriate material, and I agree to the{' '}
                      <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a>.
                    </>
                  )}
                </span>
              </label>
            </>
          )}
        </div>

        {/* Footer */}
        {!publishResult?.success && (
          <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-700">
            <button
              onClick={onClose}
              disabled={isSaving}
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              {t('cancel') || 'Cancel'}
            </button>
            <button
              onClick={handlePublish}
              disabled={!agreed || isSaving || !displayTitle || validationErrors.length > 0}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-colors ${
                !agreed || isSaving || !displayTitle || validationErrors.length > 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSaving ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>{t('saving') || 'Saving...'}</span>
                </>
              ) : (
                <>
                  <Check size={16} />
                  <span>
                    {isEditMode
                      ? (t('community.editor.update') || 'Update')
                      : (t('community.editor.publish') || 'Publish')}
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export const PublishModal = memo(PublishModalComponent);
export default PublishModal;
