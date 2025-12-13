// 動態載入資料的 Loader，避免首屏一次性載入所有分类資料
// 提供：
// - loadStyleCategories(): 從 JSON manifest 載入風格类別資料
// - loadComponentCategories(): 從 JSON 載入組件类別資料
// - getStylesStatsAsync() / getComponentsStatsAsync(): 統計資訊（動態載入後計算）
//
// ⚡ 重要變更：全部改用 JSON 加載，不再從 JS 文件 import

import { loadFullFamily } from '../loaders/jsonStyleLoader';
import { loadComponentRegistry, loadCategoryComponents } from '../loaders/jsonComponentLoader';
import { enhanceStyles } from '../metadata/styleTagsMapping';

// Category 路徑映射
const CATEGORY_PATHS = {
  core: '/',
  visual: '/styles/visual',
  retro: '/styles/retro',
  layout: '/layouts',
  interaction: '/interactions'
};

// 简易記憶体快取层（页面存活期間）
let __styleCategoriesCache = null;
let __styleCategoriesPromise = null;
let __componentCategoriesCache = null;
let __componentCategoriesPromise = null;

/**
 * 清理所有快取（仅限記憶体、页面生命週期內）
 */
export function clearLoadersCache() {
  __styleCategoriesCache = null;
  __styleCategoriesPromise = null;
  __componentCategoriesCache = null;
  __componentCategoriesPromise = null;
}

// 風格类別載入器
// ⚡ 新架構：優先使用預構建索引（build-time），fallback 到動態加載（dev-time）
export async function loadStyleCategories(forceRefresh = false) {
  // Fast path: return cached result if available
  if (!forceRefresh && __styleCategoriesCache) return __styleCategoriesCache;

  // Race condition fix: reuse existing in-flight promise
  if (!forceRefresh && __styleCategoriesPromise) return __styleCategoriesPromise;

  // Create new loading promise
  __styleCategoriesPromise = (async () => {
    try {
      // 🚀 優先使用預構建索引（build-time optimization）
      try {
        const response = await fetch('/data/styles-index.json');
        if (response.ok) {
          const index = await response.json();
          console.log('✅ [Performance] Using prebuilt styles index (fast path)');

          // ⚡ 新策略：索引只做元數據快取，仍然為每個 family 補全完整內容
          const result = await Promise.all(
            Object.entries(index.categories).map(async ([categoryId, cat]) => {
              const families = Array.isArray(cat.families) ? cat.families : [];

              const fullFamilies = await Promise.all(
                families.map(async (familyMeta) => {
                  const familyId =
                    familyMeta.familyId ||
                    (typeof familyMeta.id === 'string' && familyMeta.id.startsWith(`${categoryId}-`)
                      ? familyMeta.id.replace(`${categoryId}-`, '')
                      : familyMeta.id);
                  if (!familyId) return null;
                  try {
                    const full = await loadFullFamily(categoryId, familyId);
                    return full
                      ? {
                          // full data 優先（含 demoHTML/customStyles/previews 等）
                          ...full,
                          // 兼容索引元資料（如 templatesCount、tags）
                          ...familyMeta,
                          id: full.id || familyMeta.id,
                          familyId: full.familyId || familyId,
                          primaryCategory: full.primaryCategory || categoryId,
                          category: full.category || categoryId
                        }
                      : null;
                  } catch (err) {
                    console.warn(`[loadStyleCategories] 索引快取加載 family 失敗: ${categoryId}/${familyId}`, err);
                    return null;
                  }
                })
              );

              const validFamilies = fullFamilies.filter(Boolean);

              return {
                id: categoryId,
                key: categoryId,
                path: CATEGORY_PATHS[categoryId] || `/${categoryId}`,
                data: enhanceStyles(validFamilies), // 仍然進行標籤增強
                icon: ''
              };
            })
          );

          // Cache successful result
          __styleCategoriesCache = result;
          return result;
        }
      } catch (indexError) {
        console.warn('⚠️ Prebuilt index not available, falling back to dynamic loading:', indexError.message);
      }

      // ⏱️ Fallback: 動態加載（dev mode 或構建索引未生成時）
      console.log('🔄 [Dev Mode] Loading styles dynamically...');

      // 載入 registry
      const registryMod = await import('../styles/_registry.json');
      const registry = registryMod.default || registryMod;
      const categories = registry.categories;

      const result = [];

      // 並行加載所有 categories
      for (const [categoryId, categoryConfig] of Object.entries(categories)) {
        // 並行加載該 category 下所有 families
        const familyPromises = categoryConfig.families.map(async (familyId) => {
          try {
            const family = await loadFullFamily(categoryId, familyId);
            return family;
          } catch (error) {
            console.warn(`載入 family 失敗: ${categoryId}/${familyId}`, error);
            return null;
          }
        });

        const families = await Promise.all(familyPromises);
        const validFamilies = families.filter(Boolean);

        result.push({
          id: categoryId,
          key: categoryId,
          path: CATEGORY_PATHS[categoryId] || `/${categoryId}`,
          data: enhanceStyles(validFamilies),
          icon: ''
        });
      }

      // Cache successful result
      __styleCategoriesCache = result;
      return result;
    } catch (error) {
      // Propagate error to caller instead of swallowing it
      console.error('載入 styleCategories 失敗:', error);
      throw error;
    } finally {
      // Clear promise reference after settlement (success or failure)
      // This allows retry on next call if error occurred
      __styleCategoriesPromise = null;
    }
  })();

  return __styleCategoriesPromise;
}

// 組件类別載入器 - 使用 JSON 架構
export async function loadComponentCategories(forceRefresh = false) {
  // Fast path: return cached result if available
  if (!forceRefresh && __componentCategoriesCache) return __componentCategoriesCache;

  // Race condition fix: reuse existing in-flight promise
  if (!forceRefresh && __componentCategoriesPromise) return __componentCategoriesPromise;

  // Create new loading promise
  __componentCategoriesPromise = (async () => {
    try {
      // 從 JSON registry 加載
      const registry = await loadComponentRegistry();
      const categories = registry.categories;

      // 並行加載所有分類的組件
      const entries = Object.entries(categories);
      const categoryPromises = entries.map(async ([categoryId, config]) => {
        try {
          const components = await loadCategoryComponents(categoryId);
          return {
            id: categoryId,
            key: config.key,
            path: config.path || `/components/${categoryId}`,
            data: components,
            icon: ''
          };
        } catch (error) {
          console.warn(`載入組件分類失敗: ${categoryId}`, error);
          return {
            id: categoryId,
            key: config.key,
            path: config.path || `/components/${categoryId}`,
            data: [],
            icon: ''
          };
        }
      });

      const result = await Promise.all(categoryPromises);

      // Cache successful result
      __componentCategoriesCache = result;
      return result;
    } catch (error) {
      // Propagate error to caller instead of swallowing it
      console.error('載入 componentCategories 失敗:', error);
      throw error;
    } finally {
      // Clear promise reference after settlement (success or failure)
      // This allows retry on next call if error occurred
      __componentCategoriesPromise = null;
    }
  })();

  return __componentCategoriesPromise;
}

// 統計：動態載入後計算数量与分类
export async function getStylesStatsAsync() {
  const cats = await loadStyleCategories();
  return {
    total: cats.reduce((sum, c) => sum + (c.data?.length || 0), 0),
    categories: cats.map((c) => ({ id: c.id, key: c.key, count: c.data?.length || 0, icon: c.icon })),
  };
}

export async function getComponentsStatsAsync() {
  const cats = await loadComponentCategories();
  return {
    total: cats.reduce((sum, c) => sum + (c.data?.length || 0), 0),
    categories: cats.map((c) => ({ id: c.id, key: c.key, count: c.data?.length || 0, icon: c.icon })),
  };
}

export default {
  loadStyleCategories,
  loadComponentCategories,
  getStylesStatsAsync,
  getComponentsStatsAsync,
};

