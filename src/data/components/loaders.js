// 動態載入資料的 Loader，避免首屏一次性載入所有分类資料
// 提供：
// - loadStyleCategories(): 只載入風格类別資料（委派給 src/data/index 的 styleCategories）
// - loadComponentCategories(): 只載入組件类別資料
// - getStylesStatsAsync() / getComponentsStatsAsync(): 統計資訊（動態載入後計算）

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
// 注意：具体「core 只保留 4 張卡片」等資料結構，統一在 src/data/index.js 的 styleCategories 中維護。
export async function loadStyleCategories(forceRefresh = false) {
  if (!forceRefresh && __styleCategoriesCache) return __styleCategoriesCache;
  if (!forceRefresh && __styleCategoriesPromise) return __styleCategoriesPromise;

  __styleCategoriesPromise = (async () => {
    // 集中从 src/data/index 載入已組合好的 styleCategories
    const dataMod = await import('../index');
    const result = dataMod.styleCategories || [];

    __styleCategoriesCache = result;
    __styleCategoriesPromise = null;
    return result;
  })();

  return __styleCategoriesPromise;
}

// 組件类別載入器
export async function loadComponentCategories(forceRefresh = false) {
  if (!forceRefresh && __componentCategoriesCache) return __componentCategoriesCache;
  if (!forceRefresh && __componentCategoriesPromise) return __componentCategoriesPromise;

  __componentCategoriesPromise = (async () => {
    const [
      navigationMod,
      formMod,
      dataDisplayMod,
      feedbackMod,
      advancedMod,
      inputMod,
      interactiveMod,
      specialMod,
    ] = await Promise.all([
      import('./navigationComponents'),
      import('./formComponents'),
      import('./dataDisplayComponents'),
      import('./feedbackComponents'),
      import('./advancedComponents'),
      import('./inputComponents'),
      import('./interactiveComponents'),
      import('./specialComponents'),
    ]);

    const result = [
      { id: 'navigation', key: 'navigation', path: '/components/navigation', data: navigationMod.navigationComponents, icon: '' },
      { id: 'forms', key: 'forms', path: '/components/forms', data: formMod.formComponents, icon: '' },
      { id: 'dataDisplay', key: 'dataDisplay', path: '/components/data', data: dataDisplayMod.dataDisplayComponents, icon: '' },
      { id: 'feedback', key: 'feedback', path: '/components/feedback', data: feedbackMod.feedbackComponents, icon: '' },
      { id: 'advanced', key: 'advanced', path: '/components/advanced', data: advancedMod.advancedComponents, icon: '' },
      { id: 'input', key: 'inputEnhanced', path: '/components/input', data: inputMod.inputComponents, icon: '' },
      { id: 'interactive', key: 'interactive', path: '/components/interactive', data: interactiveMod.interactiveComponents, icon: '' },
      { id: 'special', key: 'specialViews', path: '/components/special', data: specialMod.specialComponents, icon: '' },
    ];

    __componentCategoriesCache = result;
    __componentCategoriesPromise = null;
    return result;
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

