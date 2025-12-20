import { useState, useEffect, useRef } from 'react';
import { CACHE_SIZES } from '../utils/constants';

/**
 * Simple LRU (Least Recently Used) Cache
 * Prevents unbounded memory growth in long sessions
 */
class LRUCache {
  constructor(maxSize = 50) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return undefined;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }

  has(key) {
    return this.cache.has(key);
  }

  clear() {
    this.cache.clear();
  }
}

/**
 * 全局內容快取（頁面生命週期）
 * 使用 LRU 策略，最多快取 50 個組件（防止記憶體無限增長）
 */
const contentCache = new LRUCache(CACHE_SIZES?.COMPONENT || 50);

/**
 * 進行中的 Promise 快取（防止並發重複請求）
 */
const pendingPromises = new Map();

/**
 * useLazyComponentContent - 延遲載入組件 demo HTML/CSS 內容
 *
 * 此 hook 與 useSharedIntersectionObserver 配合使用，
 * 當 ComponentCard 進入 viewport 且沒有初始內容時才載入 demo。
 *
 * @param {string} categoryId - 分類 ID (buttons, forms, etc.)
 * @param {string} componentId - 組件 ID
 * @param {string} [variantId] - 變體 ID (可選，默認載入第一個變體)
 * @param {boolean} shouldLoad - 是否應該開始載入（通常與 isVisible 連動）
 * @returns {Object} { demoHTML, customStyles, isLoaded, isLoading, error }
 *
 * @example
 * const { demoHTML, customStyles, isLoaded } = useLazyComponentContent(
 *   'buttons',
 *   'primary-button',
 *   'default',
 *   isVisible && !initialDemoHTML
 * );
 */
export function useLazyComponentContent(categoryId, componentId, variantId, shouldLoad) {
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
    if (!shouldLoad || isLoaded || loadAttemptedRef.current || !componentId || !categoryId) {
      return;
    }

    // 標記已嘗試載入（防止重複觸發）
    loadAttemptedRef.current = true;

    const effectiveVariantId = variantId || 'default';
    const cacheKey = `${categoryId}/${componentId}/${effectiveVariantId}`;

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

    // 動態載入 loader 模組（減少初始 bundle 大小）
    const loadPromise = import('../data/loaders/jsonComponentLoader.js')
      .then(module => module.loadVariantContent(categoryId, componentId, effectiveVariantId))
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
        console.warn(`[useLazyComponentContent] 載入失敗: ${cacheKey}`, err);
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
  }, [categoryId, componentId, variantId, shouldLoad, isLoaded]);

  return {
    demoHTML: content.demoHTML,
    customStyles: content.customStyles,
    isLoaded,
    isLoading,
    error
  };
}

/**
 * 清理組件內容快取（用於調試或強制重載）
 */
export function clearComponentContentCache() {
  contentCache.clear();
  pendingPromises.clear();
}

export default useLazyComponentContent;
