import React, { useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * MessageBox (Minimal, Accessible, TailwindCSS)
 * - No icons/SVG, minimal shadow, strong focus-visible styles
 * - Keyboard: ESC to close, Tab focus trap, overlay click to close
 * - Variants: info | success | warning | error (border color)
 */
export function MessageBox({
  open,
  onOpenChange,
  variant = 'info',
  title,
  description,
  confirmText,
  cancelText,
  showCancel = true,
  onConfirm,
}) {
  const { t } = useLanguage();
  
  // 使用 i18n 翻譯作為預设值
  const defaultTitle = title || t('ui.messageBox.defaultTitle');
  const defaultDescription = description || t('ui.messageBox.defaultDescription');
  const defaultConfirmText = confirmText || t('buttons.confirm');
  const defaultCancelText = cancelText || t('buttons.cancel');
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const variantClass = useMemo(() => {
    switch (variant) {
      case 'success':
        return 'border-l-4 border-green-600';
      case 'warning':
        return 'border-l-4 border-yellow-600';
      case 'error':
        return 'border-l-4 border-red-600';
      case 'info':
      default:
        return 'border-l-4 border-blue-600';
    }
  }, [variant]);

  // Restore / set initial focus
  useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement;
      // init focus to close button
      closeBtnRef.current?.focus();
    } else {
      // restore focus
      if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
        lastFocusedRef.current.focus();
      }
    }
  }, [open]);

  // ESC close - 移除 onOpenChange 依賴，避免不必要的重新執行
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') {
        onOpenChange?.(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]); // 移除 onOpenChange 依賴

  // Simple focus trap within dialog - 確保事件監聽器正確清理
  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    if (!root) return;

    function onKeydown(e) {
      if (e.key !== 'Tab') return;
      const currentRoot = dialogRef.current;
      if (!currentRoot) return;
      const focusable = currentRoot.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const list = Array.prototype.slice.call(focusable).filter((el) => !el.hasAttribute('disabled'));
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    root.addEventListener('keydown', onKeydown);
    return () => {
      // 確保清理時使用正確的 root 元素
      root.removeEventListener('keydown', onKeydown);
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className={[
          'fixed inset-0 bg-black/50 transition-opacity duration-150',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={() => onOpenChange?.(false)}
      />

      {/* Dialog container */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="messagebox-title"
        aria-describedby="messagebox-desc"
        className={[
          'fixed inset-0 flex items-end sm:items-center justify-center transition-all duration-150 ease-out',
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 sm:translate-y-0 sm:scale-[0.98] pointer-events-none',
        ].join(' ')}
      >
        <div
          ref={dialogRef}
          className={[
            'w-[calc(100%-2rem)] sm:max-w-md md:max-w-lg rounded-lg bg-white border border-gray-200 shadow-sm ring-1 ring-black/5',
            variantClass,
          ].join(' ')}
        >
          <header className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2 flex items-start justify-between gap-3">
            <h2 id="messagebox-title" className="text-base font-semibold text-gray-900">
              {defaultTitle}
            </h2>
            <button
              ref={closeBtnRef}
              className="rounded-md px-2 py-1 text-gray-500 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
              aria-label={t('buttons.close')}
              onClick={() => onOpenChange?.(false)}
            >
              {t('buttons.close')}
            </button>
          </header>

          <main id="messagebox-desc" className="px-4 sm:px-5 py-3 text-gray-700">
            {defaultDescription}
          </main>

          <footer className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 flex gap-3 justify-end">
            {showCancel && (
              <button
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
                onClick={() => onOpenChange?.(false)}
              >
                {defaultCancelText}
              </button>
            )}
            <button
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
              onClick={() => {
                onConfirm?.();
                onOpenChange?.(false);
              }}
            >
              {defaultConfirmText}
            </button>
          </footer>
        </div>
      </section>
    </>
  );
}
