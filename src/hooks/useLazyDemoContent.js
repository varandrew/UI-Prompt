import { useState, useEffect, useRef } from 'react';
import { loadFamilyContent } from '../data/loaders/jsonStyleLoader';

/**
 * 全局內容快取（頁面生命週期）
 * 避免重複載入相同 family 的 demo 內容
 */
const contentCache = new Map();

/**
 * 進行中的 Promise 快取（防止並發重複請求）
 */
const pendingPromises = new Map();

/**
 * useLazyDemoContent - 延遲載入 demo HTML/CSS 內容
 *
 * 此 hook 與 useSharedIntersectionObserver 配合使用，
 * 當 StyleCard 進入 viewport 時才載入 demo 內容，
 * 大幅減少首屏載入時間。
 *
 * @param {string} categoryId - 分類 ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (skeuomorphism, flatDesign, etc.)
 * @param {boolean} shouldLoad - 是否應該開始載入（通常與 isVisible 連動）
 * @returns {Object} { demoHTML, customStyles, isLoaded, isLoading, error }
 *
 * @example
 * const { demoHTML, customStyles, isLoaded } = useLazyDemoContent(
 *   'core',
 *   'skeuomorphism',
 *   isVisible && !initialDemoHTML
 * );
 */
export function useLazyDemoContent(categoryId, familyId, shouldLoad) {
  const [content, setContent] = useState({
    demoHTML: null,
    customStyles: null
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 用於防止 race condition 和 unmount 後的 setState
  const mountedRef = useRef(true);
  const loadAttemptedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // 條件檢查：只在需要時載入
    if (!shouldLoad || isLoaded || loadAttemptedRef.current || !familyId) {
      return;
    }

    // 標記已嘗試載入（防止重複觸發）
    loadAttemptedRef.current = true;

    const cacheKey = `${categoryId}/${familyId}`;

    // 檢查記憶體快取
    if (contentCache.has(cacheKey)) {
      const cached = contentCache.get(cacheKey);
      setContent(cached);
      setIsLoaded(true);
      return;
    }

    // 檢查是否有進行中的請求
    if (pendingPromises.has(cacheKey)) {
      pendingPromises.get(cacheKey).then(data => {
        if (mountedRef.current) {
          setContent(data);
          setIsLoaded(true);
        }
      }).catch(err => {
        if (mountedRef.current) {
          setError(err);
          setIsLoaded(true);
        }
      });
      return;
    }

    // 開始新的載入
    setIsLoading(true);

    const loadPromise = loadFamilyContent(categoryId, familyId)
      .then(data => {
        // 存入快取
        contentCache.set(cacheKey, data);
        pendingPromises.delete(cacheKey);

        if (mountedRef.current) {
          setContent(data);
          setIsLoaded(true);
          setIsLoading(false);
        }

        return data;
      })
      .catch(err => {
        console.warn(`[useLazyDemoContent] 載入失敗: ${cacheKey}`, err);
        pendingPromises.delete(cacheKey);

        if (mountedRef.current) {
          setError(err);
          setIsLoaded(true);
          setIsLoading(false);
        }

        throw err;
      });

    // 存入進行中的 Promise
    pendingPromises.set(cacheKey, loadPromise);
  }, [categoryId, familyId, shouldLoad, isLoaded]);

  return {
    demoHTML: content.demoHTML,
    customStyles: content.customStyles,
    isLoaded,
    isLoading,
    error
  };
}

/**
 * 清理 demo 內容快取（用於調試或強制重載）
 */
export function clearDemoContentCache() {
  contentCache.clear();
  pendingPromises.clear();
}

/**
 * 預載入多個 family 的 demo 內容
 * @param {Array<{categoryId: string, familyId: string}>} families
 * @returns {Promise<void>}
 */
export async function preloadDemoContent(families) {
  const loadPromises = families.map(({ categoryId, familyId }) => {
    const cacheKey = `${categoryId}/${familyId}`;

    // 跳過已快取的
    if (contentCache.has(cacheKey)) return Promise.resolve();

    return loadFamilyContent(categoryId, familyId)
      .then(data => {
        contentCache.set(cacheKey, data);
      })
      .catch(err => {
        console.warn(`[preloadDemoContent] 預載入失敗: ${cacheKey}`, err);
      });
  });

  await Promise.all(loadPromises);
}

export default useLazyDemoContent;
