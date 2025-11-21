import { useState, useCallback } from 'react';

/**
 * useToast Hook - 管理 Toast 訊息框狀態
 *
 * @returns {object} { showToast, hideToast, toastState }
 *
 * 使用示例:
 * const { showToast, toastState } = useToast();
 * showToast('操作成功！');
 * showToast(); // 使用默認翻譯鍵
 */
export function useToast() {
  const [toastState, setToastState] = useState({
    show: false,
    message: null,
    translationKey: 'toast.copied',
    duration: 2500
  });

  /**
   * 显示 Toast
   * @param {string|object} options - 訊息字符串或配置對象
   */
  const showToast = useCallback((options = {}) => {
    // 如果傳入字符串,視為自定義訊息
    if (typeof options === 'string') {
      setToastState({
        show: true,
        message: options,
        translationKey: 'toast.copied',
        duration: 2500
      });
    } else {
      // 傳入對象,支援完整配置
      setToastState({
        show: true,
        message: options.message || null,
        translationKey: options.translationKey || 'toast.copied',
        duration: options.duration || 2500
      });
    }
  }, []);

  /**
   * 隱藏 Toast
   */
  const hideToast = useCallback(() => {
    setToastState((prev) => ({
      ...prev,
      show: false
    }));
  }, []);

  return {
    showToast,
    hideToast,
    toastState
  };
}
