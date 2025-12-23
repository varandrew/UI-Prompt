// ✅ 重構：預覽內容動態加載器（統一映射架構）
// 從 public/data/content/ 動態加載 HTML/CSS
// FAMILY_ID_MAP 統一從 familyIdMap.js 導入
// previewIdMapping 從 build-time 生成的 JSON 動態加載

import { previewLogger as logger } from './logger';
import { isValidPreactJSX, detectJSXMode, validateJSX } from './jsxPreprocessor';
import { FAMILY_ID_MAP, resolveAlias } from '../data/loaders/config/familyIdMap.js';
import { buildPublicPath, buildContentPath } from '../data/loaders/config/pathHelper.js';
import { LRUCache } from './LRUCache';

/**
 * 內存緩存，避免重複加載相同預覽
 * OPTIMIZATION: 使用 LRU 限制大小，避免 OOM
 */
const previewCache = new LRUCache(100);

/**
 * 已知的分類列表
 */
const KNOWN_CATEGORIES = ['core', 'visual', 'retro', 'interaction', 'layout'];

/**
 * Preview ID Map - 從 build-time JSON 動態加載
 * OPTIMIZATION: Now supports category-based sharded loading
 * Instead of loading all 49KB at once, loads only needed ~8KB shard
 * @type {Map<string, {category: string, familyId: string, templateId: string}>|null}
 */
let previewIdMap = null;

/**
 * Loaded shard categories tracking
 * @type {Set<string>}
 */
const loadedShards = new Set();

/**
 * 載入狀態追蹤
 */
let mapLoadPromise = null;

/**
 * Shard load promises (per category)
 * @type {Map<string, Promise>}
 */
const shardLoadPromises = new Map();

/**
 * Load a specific category shard
 * OPTIMIZATION: Only loads ~8KB per category instead of full 49KB map
 * @param {string} category - Category to load (core, visual, retro, etc.)
 * @returns {Promise<void>}
 */
async function loadCategoryShard(category) {
  // Already loaded
  if (loadedShards.has(category)) {
    return;
  }

  // Loading in progress
  if (shardLoadPromises.has(category)) {
    return shardLoadPromises.get(category);
  }

  const loadPromise = (async () => {
    try {
      const response = await fetch(buildPublicPath(`data/preview-id-map-${category}.json`));

      if (response.ok) {
        const data = await response.json();

        // Merge into main map
        if (!previewIdMap) {
          previewIdMap = new Map();
        }

        for (const [key, value] of Object.entries(data)) {
          previewIdMap.set(key, value);
        }

        loadedShards.add(category);
        logger.debug(`Loaded shard: ${category} (${Object.keys(data).length} entries)`);
      }
    } catch (error) {
      logger.warn(`Failed to load shard ${category}:`, error.message);
    } finally {
      shardLoadPromises.delete(category);
    }
  })();

  shardLoadPromises.set(category, loadPromise);
  return loadPromise;
}

/**
 * 動態加載 preview ID map
 * OPTIMIZATION: First tries sharded loading, falls back to full map
 * @param {string} [preferredCategory] - Optional category to load first
 * @returns {Promise<Map>}
 */
async function loadPreviewIdMap(preferredCategory = null) {
  // 已加載完整 map，直接返回
  if (previewIdMap && previewIdMap.size > 0 && !preferredCategory) {
    return previewIdMap;
  }

  // If category specified, try loading just that shard first
  if (preferredCategory && KNOWN_CATEGORIES.includes(preferredCategory)) {
    await loadCategoryShard(preferredCategory);
    if (previewIdMap && previewIdMap.size > 0) {
      return previewIdMap;
    }
  }

  // 正在加載中，返回現有 Promise
  if (mapLoadPromise) {
    return mapLoadPromise;
  }

  // 開始加載完整 map (fallback)
  mapLoadPromise = (async () => {
    try {
      const response = await fetch(buildPublicPath('data/preview-id-map.json'));

      if (response.ok) {
        const data = await response.json();
        previewIdMap = new Map(Object.entries(data));
        logger.debug(`Loaded preview ID map: ${previewIdMap.size} entries`);
        return previewIdMap;
      }

      logger.warn('preview-id-map.json not found, using empty map');
    } catch (error) {
      logger.warn('Failed to load preview-id-map.json:', error.message);
    }

    // Fallback: 空 Map，將使用動態解析
    previewIdMap = new Map();
    return previewIdMap;
  })();

  return mapLoadPromise;
}

/**
 * 動態解析 preview ID（當 previewIdMap 中沒有對應映射時）
 * @param {string} previewId
 * @returns {{category: string, familyId: string, templateId: string}|null}
 */
function resolvePreviewIdDynamically(previewId) {
  const parts = previewId.split('-');

  // Pattern 1: category-familyId-templateId (e.g., "visual-glassmorphism-landing")
  if (parts.length >= 3 && KNOWN_CATEGORIES.includes(parts[0])) {
    const category = parts[0];
    const familyIdPart = parts[1];
    const familyId = resolveAlias(familyIdPart);

    return {
      category,
      familyId,
      templateId: previewId // 使用完整 ID 作為 templateId
    };
  }

  // Pattern 2: category-familyId (e.g., "visual-glassmorphism")
  if (parts.length === 2 && KNOWN_CATEGORIES.includes(parts[0])) {
    const category = parts[0];
    const familyIdPart = parts[1];
    const familyId = resolveAlias(familyIdPart);

    return {
      category,
      familyId,
      templateId: familyId // 使用 familyId 作為默認 templateId
    };
  }

  // Pattern 3: familyId only (e.g., "glassmorphism")
  const resolvedFamilyId = resolveAlias(previewId);
  if (resolvedFamilyId !== previewId || FAMILY_ID_MAP[previewId.toLowerCase()]) {
    // 找到了別名映射，但需要推斷 category
    // 這裡返回 null，讓調用方處理
    return null;
  }

  return null;
}

/**
 * 從 public/data/content/ 動態加載預覽內容
 * 支持 HTML、Preact JSX 和 React JSX 三種格式
 * 優化：並行加載所有文件以減少 waterfall 延遲
 * @param {string} category - 分類 (core/visual/retro/interaction/layout)
 * @param {string} familyId - 家族 ID
 * @param {string} templateId - 模板 ID
 * @returns {Promise<{html?: string, jsx?: string, styles: string, renderMode?: string, jsxMode?: string}>}
 */
async function loadContentFromPublic(category, familyId, templateId) {
  const basePath = buildContentPath(`styles/${category}/${familyId}/${templateId}`);

  /**
   * Helper to check if content is actually index.html from SPA fallback
   * @param {string|null} content - Fetched content
   * @param {boolean} isHtmlFile - Whether this is expected to be an HTML file
   * @returns {string|null} - Original content or null if it's SPA fallback
   */
  const filterSpaFallback = (content, isHtmlFile = false) => {
    if (!content) return null;
    const trimmed = content.trim().toLowerCase();

    // For non-HTML files (CSS, JSX, JS), any HTML content is a fallback
    if (!isHtmlFile) {
      if (trimmed.startsWith('<!doctype') || trimmed.startsWith('<html')) {
        logger.warn(`SPA fallback detected, ignoring HTML response`);
        return null;
      }
      return content;
    }

    // For HTML files, detect Vite's index.html using STRICT markers only
    // Note: <div id="root"></div> alone is NOT sufficient - many valid templates
    // (e.g., Steampunk with React + Babel Standalone) legitimately use this pattern
    const isViteIndexHtml = content.includes('/@vite/client') ||
                           content.includes('/src/main.jsx');
    if (isViteIndexHtml) {
      logger.warn(`SPA fallback detected (index.html), ignoring for HTML file`);
      return null;
    }

    return content;
  };

  try {
    // 並行加載所有可能的文件（避免 sequential waterfall）
    const [fullpageJsxResponse, demoJsxResponse, htmlResponse, cssResponse] =
      await Promise.all([
        fetch(`${basePath}/fullpage.jsx`).catch(() => null),
        fetch(`${basePath}/demo.jsx`).catch(() => null),
        fetch(`${basePath}/fullpage.html`).catch(() => null),
        fetch(`${basePath}/fullpage.css`).catch(() => null)
      ]);

    // 並行提取文本內容
    const [fullpageJsxRaw, demoJsxRaw, htmlRaw, stylesRaw] = await Promise.all([
      fullpageJsxResponse?.ok ? fullpageJsxResponse.text() : null,
      demoJsxResponse?.ok ? demoJsxResponse.text() : null,
      htmlResponse?.ok ? htmlResponse.text() : null,
      cssResponse?.ok ? cssResponse.text() : null
    ]);

    // Filter out SPA fallback responses
    const fullpageJsx = filterSpaFallback(fullpageJsxRaw, false);
    const demoJsx = filterSpaFallback(demoJsxRaw, false);
    const styles = filterSpaFallback(stylesRaw, false);
    const html = filterSpaFallback(htmlRaw, true); // HTML file needs special handling

    // 處理 JSX，優先級：fullpage.jsx > demo.jsx
    const jsxCandidates = [
      { code: fullpageJsx, source: 'fullpage.jsx' },
      { code: demoJsx, source: 'demo.jsx' }
    ].filter((c) => c.code);

    for (const { code: jsxCode, source } of jsxCandidates) {
      const looksLikeHTML = /^\s*</.test(jsxCode) && /<html|<body|<!doctype/i.test(jsxCode);

      if (!looksLikeHTML) {
        const jsxMode = detectJSXMode(jsxCode);

        if (jsxMode === 'preact-h') {
          const validPreact = isValidPreactJSX(jsxCode);
          if (validPreact) {
            logger.debug(`Loaded Preact JSX template from ${basePath}/${source}`);
            return { jsx: jsxCode, styles: styles || '', renderMode: 'jsx', jsxMode: 'preact-h' };
          }
        } else if (jsxMode === 'react') {
          const validation = validateJSX(jsxCode, 'react');
          if (validation.valid) {
            logger.debug(`Loaded React JSX template from ${basePath}/${source}`);
            return { jsx: jsxCode, styles: styles || '', renderMode: 'react-jsx', jsxMode: 'react' };
          } else {
            logger.warn(`React JSX validation failed: ${basePath}/${source}`, validation.errors);
          }
        }
      }

      logger.warn(`${source} is not valid JSX, trying next: ${basePath}`, {
        length: jsxCode?.length || 0,
        looksLikeHTML,
        jsxMode: detectJSXMode(jsxCode)
      });
    }

    // 降級到 HTML 模式（已在上面並行加載）
    return { html: html || '', styles: styles || '' };
  } catch (error) {
    logger.error(`Failed to load content from ${basePath}:`, error);
    return { html: '', styles: '' };
  }
}

/**
 * 動態加載預覽內容
 * 支持 HTML 和 JSX 兩種格式
 * @param {string} previewId - 預覽ID
 * @returns {Promise<{html?: string, jsx?: string, styles: string, renderMode?: string}>}
 */
export async function loadPreview(previewId) {
  // 檢查緩存
  if (previewCache.has(previewId)) {
    logger.debug(`Preview cache hit: ${previewId}`);
    return previewCache.get(previewId);
  }

  // 確保 previewIdMap 已加載
  const idMap = await loadPreviewIdMap();

  // 查找映射 (O(1) lookup)
  let mapping = idMap.get(previewId);

  // 如果沒有找到，嘗試動態解析
  if (!mapping) {
    mapping = resolvePreviewIdDynamically(previewId);

    if (!mapping) {
      logger.warn(`Preview ID not found in mapping: ${previewId}`);
      return { html: '', styles: '' };
    }

    logger.debug(`Preview ID resolved dynamically: ${previewId}`);
  }

  const { category, familyId, templateId } = mapping;
  logger.debug(`Loading preview: ${previewId} → ${category}/${familyId}/${templateId}`);

  try {
    // 從 public/ 動態加載（支持 HTML 和 JSX）
    const content = await loadContentFromPublic(category, familyId, templateId);

    // 根據內容類型構建結果
    let result;
    if (content.renderMode === 'react-jsx' && content.jsx) {
      result = {
        jsx: content.jsx,
        demoJSX: content.jsx,
        styles: content.styles || '',
        renderMode: 'react-jsx',
        jsxMode: 'react'
      };
      logger.success(`Preview loaded (React JSX): ${previewId}`);
    } else if (content.renderMode === 'jsx' && content.jsx) {
      result = {
        jsx: content.jsx,
        demoJSX: content.jsx,
        styles: content.styles || '',
        renderMode: 'jsx',
        jsxMode: 'preact-h'
      };
      logger.success(`Preview loaded (Preact JSX): ${previewId}`);
    } else {
      result = {
        html: content.html || '',
        styles: content.styles || ''
      };
      logger.success(`Preview loaded (HTML): ${previewId}`);
    }

    // 緩存結果
    previewCache.set(previewId, result);

    return result;
  } catch (error) {
    logger.error(`Failed to load preview ${previewId}:`, error);
    return { html: '', styles: '' };
  }
}

/**
 * 預加載預覽內容（不等待結果）
 * @param {string} previewId - 預覽ID
 */
export function preloadPreview(previewId) {
  if (previewCache.has(previewId)) {
    return;
  }

  loadPreview(previewId).catch(error => {
    logger.warn(`Preload failed for ${previewId}:`, error);
  });
}

// Track active batch preload for cancellation
let activeBatchController = null;

/**
 * 批量預加載多個預覽（支持取消）
 * @param {string[]} previewIds - 預覽ID數組
 * @param {number} delay - 每個預覽之間的延遲 (ms)
 * @returns {AbortController} - 用於取消預加載的控制器
 */
export function batchPreloadPreviews(previewIds, delay = 100) {
  // Cancel any existing batch preload
  if (activeBatchController) {
    activeBatchController.abort();
  }

  const controller = new AbortController();
  activeBatchController = controller;
  const timeoutIds = [];

  previewIds.forEach((previewId, index) => {
    const timeoutId = setTimeout(() => {
      if (!controller.signal.aborted) {
        preloadPreview(previewId);
      }
    }, index * delay);
    timeoutIds.push(timeoutId);
  });

  // Cleanup timeouts on abort
  controller.signal.addEventListener('abort', () => {
    timeoutIds.forEach(clearTimeout);
  });

  return controller;
}

/**
 * 取消當前進行中的批量預加載
 */
export function cancelBatchPreload() {
  if (activeBatchController) {
    activeBatchController.abort();
    activeBatchController = null;
  }
}

/**
 * 清除預覽緩存
 */
export function clearPreviewCache() {
  previewCache.clear();
  logger.debug('Preview cache cleared');
}

/**
 * 獲取緩存統計信息
 * @returns {{size: number, keys: string[]}}
 */
export function getCacheStats() {
  return {
    size: previewCache.size,
    keys: Array.from(previewCache.keys())
  };
}

/**
 * 獲取所有可用的預覽ID
 * @returns {Promise<string[]>}
 */
export async function getAvailablePreviewIds() {
  const idMap = await loadPreviewIdMap();
  return Array.from(idMap.keys());
}

/**
 * 檢查預覽ID是否可用
 * @param {string} previewId
 * @returns {Promise<boolean>}
 */
export async function isPreviewIdValid(previewId) {
  const idMap = await loadPreviewIdMap();
  return idMap.has(previewId) || resolvePreviewIdDynamically(previewId) !== null;
}

// Re-export FAMILY_ID_MAP for backward compatibility
export { FAMILY_ID_MAP };

/**
 * Preload preview ID map at app initialization
 * Call this early to avoid on-demand loading latency
 * @returns {Promise<Map>}
 */
export function preloadPreviewIdMap() {
  return loadPreviewIdMap();
}

// Auto-preload preview ID map when module loads in browser
// This eliminates the 100-200ms latency on first preview load
if (typeof window !== 'undefined') {
  loadPreviewIdMap();
}
