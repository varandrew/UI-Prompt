import { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * Toast 訊息框組件 - 極简主義風格
 *
 * @param {boolean} show - 控制显示/隱藏
 * @param {function} onClose - 关閉回調
 * @param {string} message - 自定義訊息 (可選,优先於翻譯鍵)
 * @param {string} translationKey - 翻譯鍵 (默認: 'toast.copied')
 * @param {number} duration - 自動关閉時間 (毫秒,默認 2500)
 */
export function Toast({
  show,
  onClose,
  message = null,
  translationKey = 'toast.copied',
  duration = 2500
}) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // 等待淡出動画完成
  }, [onClose]);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [show, duration, handleClose]);

  if (!show) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed top-4 left-4 z-[100] pointer-events-none transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div
        className={`pointer-events-auto bg-white shadow-2xl rounded-lg px-6 py-4 min-w-[320px] max-w-md flex items-center gap-4 transform transition-all duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* 成功圖标 */}
        <div
          className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-green-600 font-bold text-xl"
          aria-hidden="true"
        >
          ✓
        </div>

        {/* 文字訊息 */}
        <p className="flex-1 text-gray-800 text-sm font-medium leading-tight">
          {message || t(translationKey)}
        </p>

        {/* 关閉按鈕 */}
        <button
          type="button"
          onClick={handleClose}
          className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
          aria-label={t('common.close')}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
