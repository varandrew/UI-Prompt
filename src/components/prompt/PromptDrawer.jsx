import { useEffect, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useToast } from '../../hooks/useToast';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Toast } from '../ui/Toast';

export function PromptDrawer({ isOpen, onClose, title, content }) {
  const { t } = useLanguage();
  const { showToast, hideToast, toastState } = useToast();
  const { copy: copyToClipboard } = useCopyToClipboard({
    onSuccess: () => showToast(),
    onError: (err) => {
      console.error('Copy failed:', err);
      showToast({ translationKey: 'toast.error' });
    }
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 動態統計 Prompt 長度（字数与字元数）
  const { wordCount, charCount } = useMemo(() => {
    if (!content || typeof content !== 'string') {
      return { wordCount: 0, charCount: 0 };
    }
    const trimmed = content.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    return {
      wordCount: words,
      charCount: trimmed.length,
    };
  }, [content]);

  const handleCopy = async () => {
    await copyToClipboard(content);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[84]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-[min(38rem,100%)] h-full bg-white dark:bg-gray-900 shadow-2xl z-[85] transform transition-transform duration-300">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h4 className="font-semibold text-black dark:text-white">{title}</h4>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1 text-sm rounded border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('buttons.copy')}
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 text-sm rounded border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('buttons.close')}
            </button>
          </div>
        </div>
        <div className="px-4 pt-1 pb-0 text-[11px] text-gray-500 dark:text-gray-400 flex justify-end">
          {t('prompt.lengthLabel', {
            words: wordCount,
            chars: charCount,
          })}
        </div>
        <div className="p-4">
          {content ? (
            <textarea
              value={content}
              readOnly
              className="w-full h-[70vh] text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded p-3 leading-6 font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          ) : (
            <div className="w-full h-[70vh] flex items-center justify-center text-gray-400 dark:text-gray-500 border border-gray-300 dark:border-gray-700 rounded">
              <div className="text-center">
                <p className="text-lg mb-2">🎨</p>
                <p className="text-sm">{t('prompt.notDefined')}</p>
                <p className="text-xs mt-2 text-gray-300 dark:text-gray-600">{t('prompt.notDefinedHint')}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast 通知 */}
      <Toast
        show={toastState.show}
        onClose={hideToast}
        message={toastState.message}
        translationKey={toastState.translationKey}
        duration={toastState.duration}
      />
    </>
  );
}
