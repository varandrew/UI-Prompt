import { useEffect, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * MinimalismModal - 極简主義確認對話框組件
 *
 * @param {boolean} open - 是否显示 Modal
 * @param {string} title - 标題文本
 * @param {string} message - 消息內容
 * @param {string} confirmText - 確認按鈕文本
 * @param {string} cancelText - 取消按鈕文本
 * @param {Function} onConfirm - 確認回調
 * @param {Function} onCancel - 取消回調
 * @param {Function} onOpenChange - 開关狀態變化回調
 */
export function MinimalismModal({
  open = false,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  onOpenChange
}) {
  const { t } = useLanguage();
  
  // 使用 i18n 翻譯作為預设值
  const defaultTitle = title || t('ui.messageBox.defaultTitle');
  const defaultMessage = message || t('ui.messageBox.defaultDescription');
  const defaultConfirmText = confirmText || t('buttons.confirm');
  const defaultCancelText = cancelText || t('buttons.cancel');
  const overlayRef = useRef(null);
  const confirmButtonRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  // ESC 鍵关閉
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  // 焦點陷阱
  useEffect(() => {
    if (!open) return;

    // 聚焦到確認按鈕
    confirmButtonRef.current?.focus();

    // 焦點循環邏輯
    const focusableElements = [
      closeButtonRef.current,
      cancelButtonRef.current,
      confirmButtonRef.current
    ].filter(Boolean);

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [open]);

  // 阻止背景滾動
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange?.(false);
  };

  const handleOverlayClick = (e) => {
    // 點擊遮罩层关閉（不包括 Modal 內容区域）
    if (e.target === overlayRef.current) {
      handleCancel();
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-minimalism-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="modal-minimalism-content">
        <button
          ref={closeButtonRef}
          className="modal-minimalism-close"
          onClick={handleCancel}
          aria-label={t('buttons.close')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h3 id="modal-title" className="text-2xl font-light mb-4 text-black">
          {defaultTitle}
        </h3>

        <p id="modal-description" className="text-gray-600 text-sm mb-6 leading-relaxed">
          {defaultMessage}
        </p>

        <div className="flex gap-3 justify-end">
          <button
            ref={cancelButtonRef}
            className="px-5 py-2 text-sm text-gray-700 hover:text-black transition-colors"
            onClick={handleCancel}
          >
            {defaultCancelText}
          </button>
          <button
            ref={confirmButtonRef}
            className="px-5 py-2 text-sm bg-black text-white hover:bg-gray-800 transition-colors"
            onClick={handleConfirm}
          >
            {defaultConfirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
