/**
 * JSON 組件數據加載器
 * 從遷移後的 JSON + HTML 文件讀取組件數據
 *
 * 設計模式：與 jsonStyleLoader.js 對齊
 * - 5 層 fallback 機制
 * - 內存快取 + Promise 去重
 * - 並行加載優化
 */

// ========== 常量與快取 ==========

// 獲取 BASE_URL（支持子路徑部署）
const BASE_URL = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

// 內存快取
const componentCache = new Map();
const manifestCache = new Map();
let registryCache = null;
let registryPromise = null;

/**
 * 清理所有快取
 */
export function clearComponentCache() {
  componentCache.clear();
  manifestCache.clear();
  registryCache = null;
  registryPromise = null;
}

// ========== 工具函數 ==========

/**
 * 安全的 fetch 文本
 */
async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    }
    return '';
  } catch {
    return '';
  }
}

/**
 * 安全的 fetch JSON
 */
async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch {
    return null;
  }
}

// ========== Registry 加載 ==========

/**
 * 加載組件 Registry
 * @returns {Promise<Object>} Registry 對象
 */
export async function loadComponentRegistry() {
  // Fast path: 使用快取
  if (registryCache) return registryCache;

  // Race condition 防護
  if (registryPromise) return registryPromise;

  registryPromise = (async () => {
    try {
      // 動態導入 registry
      const module = await import('../components/_registry.json');
      registryCache = module.default || module;
      return registryCache;
    } catch (error) {
      console.error('載入組件 registry 失敗:', error);
      throw error;
    } finally {
      registryPromise = null;
    }
  })();

  return registryPromise;
}

/**
 * 獲取可用的組件分類列表
 * @returns {Promise<string[]>} 分類 ID 列表
 */
export async function getAvailableComponentCategories() {
  const registry = await loadComponentRegistry();
  return Object.keys(registry.categories);
}

/**
 * 獲取分類配置
 * @param {string} categoryId - 分類 ID
 * @returns {Promise<Object|null>} 分類配置
 */
export async function getCategoryConfig(categoryId) {
  const registry = await loadComponentRegistry();
  return registry.categories[categoryId] || null;
}

// ========== Manifest 加載 ==========

/**
 * 加載組件 Manifest
 * @param {string} category - 分類 ID
 * @param {string} componentId - 組件 ID
 * @returns {Promise<Object|null>} Manifest 對象
 */
export async function loadComponentManifest(category, componentId) {
  const cacheKey = `${category}/${componentId}`;

  // Fast path
  if (manifestCache.has(cacheKey)) {
    return manifestCache.get(cacheKey);
  }

  try {
    // 動態導入（支持開發環境）
    const module = await import(`../components/generated/${category}/${componentId}/manifest.json`);
    const manifest = module.default || module;

    manifestCache.set(cacheKey, manifest);
    return manifest;
  } catch {
    // 回退到 fetch（使用 BASE_URL 支持子路徑部署）
    const manifest = await fetchJSON(`${BASE_URL}/data/components/generated/${category}/${componentId}/manifest.json`);
    if (manifest) {
      manifestCache.set(cacheKey, manifest);
    }
    return manifest;
  }
}

// ========== Content 加載 (5 層 Fallback) ==========

/**
 * 加載變體內容 (HTML/CSS)
 * 實現 5 層 fallback 機制
 *
 * @param {string} category - 分類 ID
 * @param {string} componentId - 組件 ID
 * @param {string} variantId - 變體 ID
 * @returns {Promise<Object>} { demoHTML, customStyles }
 */
export async function loadVariantContent(category, componentId, variantId) {
  const basePath = `${BASE_URL}/data/content/components/${category}/${componentId}`;

  // Level 1: Variant-specific content
  const [variantHtml, variantCss] = await Promise.all([
    fetchText(`${basePath}/${variantId}/demo.html`),
    fetchText(`${basePath}/${variantId}/demo.css`)
  ]);

  // 使用更寬鬆的檢查（有內容即可，不限制長度）
  if (variantHtml && variantHtml.trim().length > 0) {
    return {
      demoHTML: variantHtml,
      customStyles: variantCss
    };
  }

  // Level 2: Component-level default
  const [defaultHtml, defaultCss] = await Promise.all([
    fetchText(`${basePath}/default/demo.html`),
    fetchText(`${basePath}/default/demo.css`)
  ]);

  if (defaultHtml && defaultHtml.trim().length > 0) {
    return {
      demoHTML: defaultHtml,
      customStyles: defaultCss
    };
  }

  // Level 3: Category-level default
  const categoryBasePath = `${BASE_URL}/data/content/components/${category}`;
  const [categoryHtml, categoryCss] = await Promise.all([
    fetchText(`${categoryBasePath}/default/demo.html`),
    fetchText(`${categoryBasePath}/default/demo.css`)
  ]);

  if (categoryHtml && categoryHtml.trim().length > 0) {
    return {
      demoHTML: categoryHtml,
      customStyles: categoryCss
    };
  }

  // Level 4: Embedded in manifest
  const manifest = await loadComponentManifest(category, componentId);
  if (manifest) {
    const variant = manifest.variants?.find(v => v.id === variantId);
    if (variant?.demoHTML) {
      return {
        demoHTML: variant.demoHTML,
        customStyles: variant.customStyles || ''
      };
    }
  }

  // Level 5: Empty fallback
  return {
    demoHTML: '',
    customStyles: ''
  };
}

// ========== Prompt 加載 ==========

/**
 * 加載變體 Prompt
 * @param {string} category - 分類 ID
 * @param {string} componentId - 組件 ID
 * @param {string} variantId - 變體 ID (可選)
 * @returns {Promise<Object>} { customPrompt, stylePrompt }
 */
export async function loadVariantPrompts(category, componentId, variantId = null) {
  // 優先級: variant > component > category
  const paths = [
    variantId ? `${BASE_URL}/data/prompts/components/${category}/${componentId}/${variantId}` : null,
    `${BASE_URL}/data/prompts/components/${category}/${componentId}`,
    `${BASE_URL}/data/prompts/components/${category}`
  ].filter(Boolean);

  for (const basePath of paths) {
    const [customPrompt, stylePrompt] = await Promise.all([
      fetchText(`${basePath}/custom.md`),
      fetchText(`${basePath}/style.md`)
    ]);

    if (customPrompt || stylePrompt) {
      return {
        customPrompt: customPrompt ? {
          'zh-CN': customPrompt,
          'en-US': customPrompt
        } : null,
        stylePrompt: stylePrompt ? {
          'zh-CN': stylePrompt,
          'en-US': stylePrompt
        } : null
      };
    }
  }

  return {
    customPrompt: null,
    stylePrompt: null
  };
}

// ========== 完整組件加載 ==========

/**
 * 加載完整組件（包含所有變體）
 * @param {string} category - 分類 ID
 * @param {string} componentId - 組件 ID
 * @returns {Promise<Object|null>} 完整組件對象
 */
export async function loadFullComponent(category, componentId) {
  const cacheKey = `full:${category}/${componentId}`;

  // Fast path
  if (componentCache.has(cacheKey)) {
    return componentCache.get(cacheKey);
  }

  // 加載 manifest
  const manifest = await loadComponentManifest(category, componentId);
  if (!manifest) {
    console.warn(`組件 manifest 不存在: ${category}/${componentId}`);
    return null;
  }

  // 安全檢查：確保 variants 是數組
  const manifestVariants = Array.isArray(manifest.variants) ? manifest.variants : [];

  // 並行加載所有變體內容
  const variantPromises = manifestVariants.map(async (variantMeta) => {
    const [content, prompts] = await Promise.all([
      loadVariantContent(category, componentId, variantMeta.id),
      loadVariantPrompts(category, componentId, variantMeta.id)
    ]);

    return {
      ...variantMeta,
      ...content,
      ...prompts
    };
  });

  const variants = await Promise.all(variantPromises);

  // 組裝完整組件
  const fullComponent = {
    id: manifest.id,
    category: manifest.category,
    title: manifest.component.name,
    description: manifest.component.description,
    tags: manifest.component.tags,
    relatedComponents: manifest.component.relatedComponents,
    variants
  };

  componentCache.set(cacheKey, fullComponent);
  return fullComponent;
}

// ========== 主入口函數 ==========

/**
 * 從 JSON 加載組件
 * 支持路徑格式: 'navigation/breadcrumbs' 或 'navigation/breadcrumbs/minimalism'
 *
 * @param {string} componentPath - 組件路徑
 * @returns {Promise<Object|null>} 組件對象
 */
export async function loadComponentFromJSON(componentPath) {
  const parts = componentPath.split('/').filter(Boolean);

  if (parts.length < 2) {
    console.error('無效的組件路徑:', componentPath);
    return null;
  }

  const [category, componentId, variantId] = parts;

  // 加載完整組件
  const component = await loadFullComponent(category, componentId);
  if (!component) {
    return null;
  }

  // 如果指定了變體，添加 selectedVariant
  if (variantId) {
    const selectedVariant = component.variants.find(v => v.id === variantId);
    return {
      ...component,
      selectedVariant: selectedVariant || null
    };
  }

  return component;
}

// ========== 批量加載 ==========

/**
 * 批量預加載組件
 * @param {string[]} componentPaths - 組件路徑列表
 * @returns {Promise<Object[]>} 組件對象列表
 */
export async function batchPreloadComponents(componentPaths) {
  return Promise.all(
    componentPaths.map(path => loadComponentFromJSON(path))
  );
}

/**
 * 加載分類下的所有組件
 * @param {string} categoryId - 分類 ID
 * @returns {Promise<Object[]>} 組件對象列表
 */
export async function loadCategoryComponents(categoryId) {
  const registry = await loadComponentRegistry();
  const categoryConfig = registry.categories[categoryId];

  if (!categoryConfig) {
    console.warn(`分類不存在: ${categoryId}`);
    return [];
  }

  const componentIds = categoryConfig.components || [];

  // 並行加載所有組件
  const components = await Promise.all(
    componentIds.map(id => loadFullComponent(categoryId, id))
  );

  return components.filter(Boolean);
}

// ========== 統計函數 ==========

/**
 * 獲取組件統計信息
 * @returns {Promise<Object>} { total, categories }
 */
export async function getComponentStats() {
  const registry = await loadComponentRegistry();
  const categories = registry.categories;

  let total = 0;
  const categoryStats = [];

  for (const [id, config] of Object.entries(categories)) {
    const count = config.components?.length || 0;
    total += count;
    categoryStats.push({
      id,
      key: config.key,
      name: config.name,
      count
    });
  }

  return {
    total,
    categories: categoryStats
  };
}

// ========== 默認導出 ==========

export default {
  // Registry
  loadComponentRegistry,
  getAvailableComponentCategories,
  getCategoryConfig,

  // Manifest
  loadComponentManifest,

  // Content
  loadVariantContent,
  loadVariantPrompts,

  // Full Component
  loadFullComponent,
  loadComponentFromJSON,

  // Batch
  batchPreloadComponents,
  loadCategoryComponents,

  // Stats
  getComponentStats,

  // Cache
  clearComponentCache
};
