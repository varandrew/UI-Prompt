/**
 * useProgressiveStyleLoad - 漸進式風格數據加載 Hook
 *
 * 🚀 性能優化：
 * - 首屏：加載 styles-index-meta.json (475B) → <50ms
 * - 漸進：按大小順序加載分片 → layout(5KB) → interaction(17KB) → core(126KB) → retro(134KB) → visual(785KB)
 * - 預期：首屏顯示 <100ms，完整數據 <2s
 *
 * 與 loadStyleMetadataOnly 的區別：
 * - loadStyleMetadataOnly: 單個 1MB JSON → 阻塞首屏
 * - useProgressiveStyleLoad: 分片加載 → 漸進顯示
 *
 * @module hooks/useProgressiveStyleLoad
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import { createLogger } from '../utils/logger';
import { buildPublicPath } from '../data/loaders/config/pathHelper.js';
import { enhanceStyles } from '../data/metadata/styleTagsMapping';

const logger = createLogger('ProgressiveStyleLoad');

// 分類加載優先級（按文件大小，小的優先）
const CATEGORY_PRIORITY = ['layout', 'interaction', 'core', 'retro', 'visual'];

// 分類路徑映射
const CATEGORY_PATHS = {
  core: '/',
  visual: '/styles/visual',
  retro: '/styles/retro',
  layout: '/layouts',
  interaction: '/interactions'
};

/**
 * 加載元數據索引（輕量，包含分類名和數量）
 * @returns {Promise<Object>} 元數據對象
 */
async function loadMetaIndex() {
  const response = await fetch(buildPublicPath('data/styles-index-meta.json'));
  if (!response.ok) {
    throw new Error(`Failed to fetch meta index: ${response.status}`);
  }
  return response.json();
}

/**
 * 加載單個分類分片
 * @param {string} categoryId - 分類 ID
 * @returns {Promise<Object>} 分片數據
 */
async function loadCategoryShard(categoryId) {
  const response = await fetch(buildPublicPath(`data/styles-index/${categoryId}.json`));
  if (!response.ok) {
    throw new Error(`Failed to fetch shard ${categoryId}: ${response.status}`);
  }
  return response.json();
}

/**
 * Load missing manifest report (optional)
 * @returns {Promise<Object|null>} Report JSON or null when not available
 */
async function loadMissingReport() {
  const response = await fetch(buildPublicPath('data/styles-index-missing.json'));
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to fetch missing report: ${response.status}`);
  }
  return response.json();
}

/**
 * 將分片數據轉換為標準分類格式
 * @param {Object} shard - 分片數據
 * @returns {Object} 標準分類對象
 */
function transformShardToCategory(shard) {
  const categoryId = shard.category;
  const families = Array.isArray(shard.families) ? shard.families : [];

  return {
    id: categoryId,
    key: categoryId,
    path: CATEGORY_PATHS[categoryId] || `/${categoryId}`,
    data: families.map(familyMeta => {
      const familyId =
        familyMeta.familyId ||
        (typeof familyMeta.id === 'string' && familyMeta.id.startsWith(`${categoryId}-`)
          ? familyMeta.id.replace(`${categoryId}-`, '')
          : familyMeta.id);

      // 生成 previews 佔位符
      const previewsPlaceholder = familyMeta.templatesCount > 0
        ? Array.from({ length: familyMeta.templatesCount }, (_, i) => ({
            id: `template-${i + 1}`,
            name: `Template ${i + 1}`,
            _placeholder: true
          }))
        : [];

      return {
        id: familyMeta.id,
        familyId: familyId,
        title: familyMeta.title,
        description: familyMeta.description,
        tags: familyMeta.tags || [],
        templatesCount: familyMeta.templatesCount || 0,
        primaryCategory: familyMeta.primaryCategory || categoryId,
        category: categoryId,
        demoHTML: null,
        customStyles: null,
        customPrompt: familyMeta.customPrompt || null,
        stylePrompt: familyMeta.stylePrompt || null,
        previews: previewsPlaceholder,
        _needsContentLoad: true
      };
    }),
    icon: ''
  };
}

/**
 * 生成骨架分類（用於首屏顯示）
 * @param {Object} meta - 元數據對象
 * @returns {Array} 骨架分類數組
 */
function generateSkeletonCategories(meta) {
  return Object.entries(meta.categories).map(([categoryId, catMeta]) => ({
    id: categoryId,
    key: categoryId,
    path: CATEGORY_PATHS[categoryId] || `/${categoryId}`,
    data: [], // 空數據，等待分片加載
    _skeleton: true,
    _count: catMeta.count,
    icon: ''
  }));
}

/**
 * useProgressiveStyleLoad - 漸進式風格數據加載 Hook
 *
 * @param {Object} options - 配置選項
 * @param {boolean} [options.loadOnMount=true] - 是否在掛載時自動加載
 * @returns {Object} 狀態和操作
 */
export function useProgressiveStyleLoad(options = {}) {
  const { loadOnMount = true } = options;

  // 狀態
  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState(new Set());
  const [isInitialLoading, setIsInitialLoading] = useState(loadOnMount);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [loadProgress, setLoadProgress] = useState({ loaded: 0, total: 5 });
  const [missingReport, setMissingReport] = useState(null);

  // Refs
  const mountedRef = useRef(true);
  const loadingRef = useRef(false);

  // Cleanup
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  /**
   * 更新單個分類數據
   */
  const updateCategory = useCallback((categoryId, categoryData) => {
    if (!mountedRef.current) return;

    setCategories(prev => {
      // 找到並替換對應分類
      const idx = prev.findIndex(c => c.id === categoryId);
      if (idx === -1) {
        // 新分類，添加到末尾
        return [...prev, categoryData];
      }
      // 替換現有分類
      const updated = [...prev];
      updated[idx] = categoryData;
      return updated;
    });

    setLoadedCategories(prev => new Set([...prev, categoryId]));
    setLoadProgress(prev => ({ ...prev, loaded: prev.loaded + 1 }));
  }, []);

  /**
   * 主加載邏輯
   */
  const load = useCallback(async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    setIsInitialLoading(true);
    setIsError(false);
    setError(null);
    setLoadProgress({ loaded: 0, total: CATEGORY_PRIORITY.length });
    setMissingReport(null);

    try {
      // Step 1: 加載元數據（<50ms）
      const startTime = performance.now();
      const [meta, report] = await Promise.all([
        loadMetaIndex(),
        loadMissingReport().catch(() => null)
      ]);
      const metaTime = performance.now() - startTime;
      logger.info(`Meta index loaded in ${metaTime.toFixed(0)}ms`);

      if (!mountedRef.current) return;

      setMissingReport(report);

      // Step 2: 生成骨架分類並立即顯示
      const skeletonCategories = generateSkeletonCategories(meta);
      setCategories(skeletonCategories);
      setIsInitialLoading(false);

      // Step 3: 按優先級加載分片
      const shardPromises = CATEGORY_PRIORITY.map(async (categoryId) => {
        try {
          const shardStartTime = performance.now();
          const shard = await loadCategoryShard(categoryId);
          const shardTime = performance.now() - shardStartTime;

          if (!mountedRef.current) return;

          // 轉換並增強數據
          const category = transformShardToCategory(shard);
          const enhancedCategory = {
            ...category,
            data: enhanceStyles(category.data)
          };

          // 立即更新該分類
          updateCategory(categoryId, enhancedCategory);

          logger.info(`Shard ${categoryId} loaded in ${shardTime.toFixed(0)}ms (${shard.families?.length || 0} families)`);
        } catch (shardError) {
          logger.warn(`Failed to load shard ${categoryId}:`, shardError.message);
          // 單個分片失敗不影響其他分片
        }
      });

      // 等待所有分片加載完成
      await Promise.all(shardPromises);

      if (!mountedRef.current) return;

      setIsFullyLoaded(true);
      const totalTime = performance.now() - startTime;
      logger.success(`All shards loaded in ${totalTime.toFixed(0)}ms`);

    } catch (err) {
      if (!mountedRef.current) return;

      logger.error('Progressive load failed:', err);
      setIsError(true);
      setError(err);
    } finally {
      loadingRef.current = false;
      if (mountedRef.current) {
        setIsInitialLoading(false);
      }
    }
  }, [updateCategory]);

  /**
   * 重試加載
   */
  const retry = useCallback(() => {
    setCategories([]);
    setLoadedCategories(new Set());
    setIsFullyLoaded(false);
    load();
  }, [load]);

  // 初始加載
  useEffect(() => {
    if (loadOnMount) {
      load();
    }
  }, [loadOnMount, load]);

  // 計算加載狀態
  const isLoading = isInitialLoading;
  const isPartiallyLoaded = loadedCategories.size > 0 && !isFullyLoaded;

  // 返回與 useRemoteCategories 兼容的接口
  return {
    // 核心數據
    data: categories,

    // 加載狀態
    isLoading,
    isPartiallyLoaded,
    isFullyLoaded,
    isError,
    error,

    // 進度信息
    loadProgress,
    loadedCategories: Array.from(loadedCategories),

    // 操作
    retry,
    refresh: retry,

    // Optional report
    missingReport
  };
}

export default useProgressiveStyleLoad;
