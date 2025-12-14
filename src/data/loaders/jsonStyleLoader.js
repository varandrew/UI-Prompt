/**
 * JSON 風格數據加載器
 * 從遷移後的 JSON + HTML 文件讀取數據
 */

import registry from '../styles/_registry.json';
import { isValidPreactJSX, detectJSXMode, validateJSX } from '../../utils/jsxPreprocessor';

/**
 * ID 映射表：URL 簡稱 → 實際資料夾名
 * 用於解決 JS 配置 ID 與資料夾名稱不一致的問題
 *
 * 擴展覆蓋：
 * - Core families (10)
 * - Visual families (87)
 * - Retro families (9)
 * - Interaction & Layout (3)
 */
const FAMILY_ID_MAP = {
  // ========== Core Design Systems ==========
  'flat': 'flatDesign',
  'flatdesign': 'flatDesign',
  'material': 'materialDesign',
  'materialdesign': 'materialDesign',
  'skeuo': 'skeuomorphism',
  'minimal': 'minimalism',
  'softui': 'softUI',
  'soft-ui': 'softUI',

  // ========== Visual Design Families ==========
  // 3D & Dimensional
  '3d': '3dElements',
  '3delements': '3dElements',
  'cube': 'cube3d',
  'cube3d': 'cube3d',

  // Glass & Translucent Effects
  'glass': 'glassmorphism',
  'aurora': 'auroraGlass',
  'auroraglass': 'auroraGlass',

  // Morphism Variants
  'clay': 'claymorphism',

  // Neon & Glow Effects
  'neon': 'neon',
  'cyberpunk': 'neonCyberpunk',
  'neoncyberpunk': 'neonCyberpunk',
  'noir': 'neonNoir',
  'neonnoir': 'neonNoir',
  'glow': 'glow',
  'spotlight': 'spotlight',

  // Gradient Effects
  'gradient': 'gradient',
  'gradients': 'gradients',
  'duotone': 'duotone',

  // Nature & Organic
  'natural': 'natural',
  'nature': 'nature',
  'organic': 'organic',
  'biophilic': 'biophilic',
  'wabi': 'wabiSabi',
  'wabisabi': 'wabiSabi',
  'liquid': 'liquid',
  'wave': 'wave',

  // Textures & Materials
  'fabric': 'fabric',
  'grain': 'grain',
  'leather': 'leather',
  'paper': 'paperCutout',
  'paper-cutout': 'paperCutout',
  'papercutout': 'paperCutout',

  // Particles & Effects
  'particle': 'particle',
  'smoke': 'smoke',
  'kinetic': 'kinetic',
  'ambient': 'ambient',

  // Data & Visualization
  'genart': 'generativeArt',
  'generative': 'generativeArt',
  'generativeart': 'generativeArt',

  // Modern Styles
  'scifi': 'sciFiHud',
  'scifihud': 'sciFiHud',
  'hud': 'sciFiHud',
  'holo': 'holographic',
  'holographic': 'holographic',
  'holofoil': 'holographicFoil',
  'holographicfoil': 'holographicFoil',
  'kawaii': 'kawaiiMinimal',
  'kawaiiminimal': 'kawaiiMinimal',

  // Brutalism & Anti-Design
  'brutal': 'brutalism',
  'neo-brutal': 'neoBrutalism',
  'neobrutalism': 'neoBrutalism',
  'anti': 'antiDesign',
  'antidesign': 'antiDesign',

  // Aesthetic Styles
  'scandi': 'scandi',
  'memphis': 'memphis',
  'vaporwave': 'vaporwave',
  'vapor': 'vaporwave',
  'y2k': 'y2k',
  'solarpunk': 'solarpunk',
  'solar': 'solarpunk',

  // Technical Styles
  'sketch': 'handDrawnSketch',
  'hand-drawn': 'handDrawnSketch',
  'handdrawn': 'handDrawnSketch',
  'outline': 'outlineStyle',
  'outlinestyle': 'outlineStyle',
  'utility': 'utilityFirst',
  'utility-first': 'utilityFirst',
  'utilityfirst': 'utilityFirst',

  // Lighting & Atmosphere
  'light': 'light',
  'dark': 'darkMode',
  'darkmode': 'darkMode',
  'liminal': 'liminalSpace',
  'liminalspace': 'liminalSpace',

  // Accessibility
  'a11y': 'accessibility',

  // Scroll & Interaction
  'scroll': 'scrollNarrative',
  'scrollnarrative': 'scrollNarrative',

  // Misc Visual
  'industrial': 'industrial',
  'monochrome': 'monochrome',
  'mono': 'monochrome',

  // ========== Retro & Vintage ==========
  'arcade': 'arcadeCRT',
  'arcadecrt': 'arcadeCRT',
  'crt': 'arcadeCRT',
  'artdeco': 'artDeco',
  'art-deco': 'artDeco',
  'deco': 'artDeco',
  'academia': 'darkAcademia',
  'darkacademia': 'darkAcademia',
  'dark-academia': 'darkAcademia',
  'digital': 'digitalRetro',
  'digitalretro': 'digitalRetro',
  'frutiger': 'frutigerAero',
  'frutigeraero': 'frutigerAero',
  'aero': 'frutigerAero',
  'retrofuture': 'retroFuturism',
  'retro-future': 'retroFuturism',
  'retrofuturism': 'retroFuturism',
  // 兼容模板 ID 首段（retro-futurism-dos）
  'futurism': 'retroFuturism',
  'retroos': 'retroOS',
  'retro-os': 'retroOS',
  'os': 'retroOS',
  'swiss': 'swissDesign',
  'swissdesign': 'swissDesign',
  'vintage': 'vintageNewspaperRetro',
  'vintagenewspaper': 'vintageNewspaperRetro',
  'vintage-newspaper': 'vintageNewspaperRetro',
  'newspaper-retro': 'vintageNewspaperRetro',

  // ========== Interaction Patterns ==========
  'mouse': 'mouseTracking',
  'mousetracking': 'mouseTracking',
  'mouse-tracking': 'mouseTracking',

  // ========== Layout Systems ==========
  'layout': 'layoutStyles',
  'layoutstyles': 'layoutStyles',
  'bento': 'bentoGrids',
  'bento-grid': 'bentoGrids',
  'bentogrids': 'bentoGrids',
  'bentogrid': 'bentoGrids'
};

/**
 * 風格預覽覆蓋配置
 * 用於解決特定風格需要不同預覽行為的問題
 *
 * 配置項說明：
 * - preferDemo: 優先使用 demoHTML 而非 fullPageHTML
 * - fallbackToDemo: 當 fullPageHTML 為空時 fallback 到 demoHTML
 * - forceCardStyle: 強制使用卡片樣式（customStyles）而非頁面樣式
 *
 * 修復 Issue #15: 將硬編碼邏輯改為配置驅動
 */
const STYLE_OVERRIDES = {
  // Soft UI：使用小型卡片預覽，避免整頁模板被壓縮
  'softUI': {
    preferDemo: true,
    forceCardStyle: true
  }
  // 未來可以在此添加更多風格的覆蓋配置
  // 'anotherFamily': { preferDemo: true }
};

// 將字串規範化用於匹配（移除非字母數字並轉小寫）
const normalizeId = (value = '') => value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

/**
 * 動態導入 Family Manifest
 * @param {string} category - 分類 ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (skeuomorphism, flatDesign, etc.)
 * @returns {Promise<Object>} Family manifest 對象
 */
export async function loadFamilyManifest(category, familyId) {
  try {
    const manifest = await import(`../styles/generated/${category}/${familyId}/manifest.json`);
    return manifest.default || manifest;
  } catch (error) {
    console.warn(`無法加載 Family manifest: ${category}/${familyId}`, error);
    return null;
  }
}

/**
 * 動態導入 Template Manifest
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} Template manifest 對象
 */
export async function loadTemplateManifest(category, familyId, templateId) {
  try {
    const manifest = await import(`../styles/generated/${category}/${familyId}/${templateId}.json`);
    return manifest.default || manifest;
  } catch {
    // 模板 JSON 已刪除，返回基本結構（從 public/data/content/ 加載實際內容）
    return { id: templateId };
  }
}

/**
 * 動態加載 HTML/CSS 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} 內容對象 { demoHTML, customStyles, fullPageHTML, fullPageStyles }
 */
export async function loadTemplateContent(category, familyId, templateId) {
  // 使用 public 資料夾路徑（Vite 會正確服務這些靜態文件）
  const basePath = `/data/content/styles/${category}/${familyId}/${templateId}`;

  const fetchText = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
      return '';
    } catch {
      return '';
    }
  };

  const [demoHtml, demoCss, fullPageHtml, fullPageCss] = await Promise.all([
    fetchText(`${basePath}/demo.html`),
    fetchText(`${basePath}/demo.css`),
    fetchText(`${basePath}/fullpage.html`),
    fetchText(`${basePath}/fullpage.css`)
  ]);

  // ========================================
  // JSX 文件加載（優先級：fullpage.jsx > demo.jsx）
  // 支持 Preact h() 和 React JSX 兩種模式
  // ========================================
  let fullPageJsx = await fetchText(`${basePath}/fullpage.jsx`);
  let demoJsx = '';
  let renderMode = undefined;
  let jsxMode = null;

  // 優先嘗試 fullpage.jsx
  if (fullPageJsx) {
    jsxMode = detectJSXMode(fullPageJsx);

    if (jsxMode === 'preact-h') {
      if (isValidPreactJSX(fullPageJsx)) {
        renderMode = 'jsx';
      } else {
        console.warn(`[loadTemplateContent] Preact JSX 驗證失敗，改用 HTML 模式: ${basePath}`);
        fullPageJsx = '';
      }
    } else if (jsxMode === 'react') {
      const validation = validateJSX(fullPageJsx, 'react');
      if (validation.valid) {
        renderMode = 'react-jsx';
        console.log(`[loadTemplateContent] 檢測到 React JSX 模式: ${basePath}`);
      } else {
        console.warn(`[loadTemplateContent] React JSX 驗證失敗: ${basePath}`, validation.errors);
        fullPageJsx = '';
      }
    } else {
      console.debug(`[loadTemplateContent] 無法識別 JSX 模式，改用 HTML: ${basePath}`);
      fullPageJsx = '';
    }
  }

  // 如果 fullpage.jsx 不存在或無效，嘗試 demo.jsx
  if (!fullPageJsx) {
    demoJsx = await fetchText(`${basePath}/demo.jsx`);

    if (demoJsx) {
      jsxMode = detectJSXMode(demoJsx);

      if (jsxMode === 'preact-h') {
        if (isValidPreactJSX(demoJsx)) {
          renderMode = 'jsx';
          console.log(`[loadTemplateContent] 使用 demo.jsx (Preact): ${basePath}`);
        } else {
          console.warn(`[loadTemplateContent] demo.jsx Preact 驗證失敗: ${basePath}`);
          demoJsx = '';
        }
      } else if (jsxMode === 'react') {
        const validation = validateJSX(demoJsx, 'react');
        if (validation.valid) {
          renderMode = 'react-jsx';
          console.log(`[loadTemplateContent] 使用 demo.jsx (React): ${basePath}`);
        } else {
          console.warn(`[loadTemplateContent] demo.jsx React 驗證失敗: ${basePath}`, validation.errors);
          demoJsx = '';
        }
      } else {
        demoJsx = '';
      }
    }
  }

  // 確定最終使用的 JSX 內容
  const effectiveJsx = fullPageJsx || demoJsx;

  return {
    demoHTML: demoHtml,
    customStyles: demoCss,
    fullPageHTML: fullPageHtml,
    fullPageStyles: fullPageCss,
    fullPageJSX: effectiveJsx,
    ...(effectiveJsx ? { demoJSX: effectiveJsx } : {}),
    // 提供 renderMode 和 jsxMode 信息
    ...(renderMode ? { renderMode } : {}),
    ...(jsxMode ? { jsxMode } : {})
  };
}

/**
 * 動態加載 Preview 級別的內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} previewId - Preview ID (e.g., 'dashboard', 'home-office')
 * @returns {Promise<Object>} 內容對象 { fullPageHTML, fullPageStyles, fullPageScript, fullPageJSX }
 */
export async function loadPreviewContent(category, familyId, previewId) {
  // 使用 public 資料夾路徑
  const basePath = `/data/content/styles/${category}/${familyId}/${previewId}`;

  const fetchText = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
      return '';
    } catch {
      return '';
    }
  };

  // 先嘗試 JSX，再回退 HTML
  // ========================================
  // JSX 文件加載（優先級：fullpage.jsx > demo.jsx）
  // ========================================
  const [fullPageHtml, fullPageCss, fullPageJs, fullPageJsxRaw, demoJsxRaw] = await Promise.all([
    fetchText(`${basePath}/fullpage.html`),
    fetchText(`${basePath}/fullpage.css`),
    fetchText(`${basePath}/fullpage.js`),
    fetchText(`${basePath}/fullpage.jsx`),
    fetchText(`${basePath}/demo.jsx`)
  ]);

  // 校驗 JSX 有效性，支持 Preact h() 和 React JSX 兩種模式
  let fullPageJsx = '';
  let renderMode = undefined;
  let jsxMode = null;

  // 優先嘗試 fullpage.jsx
  if (fullPageJsxRaw) {
    jsxMode = detectJSXMode(fullPageJsxRaw);

    if (jsxMode === 'preact-h' && isValidPreactJSX(fullPageJsxRaw)) {
      fullPageJsx = fullPageJsxRaw;
      renderMode = 'jsx';
    } else if (jsxMode === 'react') {
      const validation = validateJSX(fullPageJsxRaw, 'react');
      if (validation.valid) {
        fullPageJsx = fullPageJsxRaw;
        renderMode = 'react-jsx';
      }
    }
  }

  // 如果 fullpage.jsx 不存在或無效，嘗試 demo.jsx
  if (!fullPageJsx && demoJsxRaw) {
    jsxMode = detectJSXMode(demoJsxRaw);

    if (jsxMode === 'preact-h' && isValidPreactJSX(demoJsxRaw)) {
      fullPageJsx = demoJsxRaw;
      renderMode = 'jsx';
      console.log(`[loadPreviewContent] 使用 demo.jsx (Preact): ${basePath}`);
    } else if (jsxMode === 'react') {
      const validation = validateJSX(demoJsxRaw, 'react');
      if (validation.valid) {
        fullPageJsx = demoJsxRaw;
        renderMode = 'react-jsx';
        console.log(`[loadPreviewContent] 使用 demo.jsx (React): ${basePath}`);
      }
    }
  }

  return {
    fullPageHTML: fullPageHtml,
    fullPageStyles: fullPageCss,
    fullPageScript: fullPageJs,
    fullPageJSX: fullPageJsx,
    ...(fullPageJsx ? { demoJSX: fullPageJsx } : {}),
    ...(renderMode ? { renderMode } : {}),
    ...(jsxMode ? { jsxMode } : {})
  };
}

/**
 * 動態加載 Family 級別的內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @returns {Promise<Object>} Family 內容對象
 */
export async function loadFamilyContent(category, familyId) {
  // 使用 public 資料夾路徑
  const basePath = `/data/content/styles/${category}/${familyId}`;

  const fetchText = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
      return '';
    } catch {
      return '';
    }
  };

  const [demoHtml, demoCss] = await Promise.all([
    fetchText(`${basePath}/demo.html`),
    fetchText(`${basePath}/demo.css`)
  ]);

  return {
    demoHTML: demoHtml,
    customStyles: demoCss
  };
}

/**
 * 動態加載 Prompt 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID (可選，不傳則加載 Family 級別)
 * @returns {Promise<Object>} Prompt 對象 { customPrompt, stylePrompt }
 */
export async function loadTemplatePrompts(category, familyId, templateId = null) {
  // 使用 public 資料夾路徑
  const basePath = templateId
    ? `/data/prompts/styles/${category}/${familyId}/${templateId}`
    : `/data/prompts/styles/${category}/${familyId}`;

  const fetchText = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
      return '';
    } catch {
      return '';
    }
  };

  const [customMd, styleMd] = await Promise.all([
    fetchText(`${basePath}/custom.md`),
    fetchText(`${basePath}/style.md`)
  ]);

  return {
    customPrompt: parsePromptMd(customMd),
    stylePrompt: parsePromptMd(styleMd)
  };
}

/**
 * 動態加載 Preview 專屬的 Prompt 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} previewId - Preview ID (e.g., 'dashboard', 'home-office')
 * @returns {Promise<Object>} Prompt 對象 { customPrompt, stylePrompt }
 */
export async function loadPreviewPrompts(category, familyId, previewId) {
  // 使用 public 資料夾路徑
  const basePath = `/data/prompts/styles/${category}/${familyId}/${previewId}`;

  const fetchText = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
      return '';
    } catch {
      return '';
    }
  };

  const [customMd, styleMd] = await Promise.all([
    fetchText(`${basePath}/custom.md`),
    fetchText(`${basePath}/style.md`)
  ]);

  return {
    customPrompt: parsePromptMd(customMd),
    stylePrompt: parsePromptMd(styleMd)
  };
}

/**
 * 解析 Markdown 格式的 Prompt 為雙語對象
 * @param {string} md - Markdown 內容
 * @returns {Object} 雙語對象 { 'zh-CN': '...', 'en-US': '...' }
 */
function parsePromptMd(md) {
  if (!md || md.trim() === '') {
    return { 'zh-CN': '', 'en-US': '' };
  }

  // 提取中文版本
  const zhMatch = md.match(/## 中文版本[^\n]*\n([\s\S]*?)(?=\n---\n|\n## English|$)/);
  // 提取英文版本
  const enMatch = md.match(/## English Version[^\n]*\n([\s\S]*?)$/);

  return {
    'zh-CN': zhMatch ? zhMatch[1].trim() : '',
    'en-US': enMatch ? enMatch[1].trim() : ''
  };
}

/**
 * 加載完整的 Family 數據（包含所有 Templates）
 *
 * @param {string} category - 分類 ID (core, visual, retro, interaction, layout)
 * @param {string} familyId - Family ID (e.g., skeuomorphism, glassmorphism)
 * @returns {Promise<Object>} 完整的 Family 數據，包含所有 templates 和 previews
 *
 * ## 數據加載流程
 *
 * 1. **Family Manifest** - 從 generated/{category}/{familyId}/manifest.json 加載
 * 2. **Family Content** - 從 public/data/content/{category}/{familyId}/demo.html|css 加載
 * 3. **Family Prompts** - 從 public/data/prompts/{category}/{familyId}/custom.md|style.md 加載
 * 4. **Templates Loop** - 並行加載所有 manifest.templates 中列出的模板
 *    - Template Manifest: generated/{category}/{familyId}/{templateId}.json
 *    - Template Content: public/data/content/{category}/{familyId}/{templateId}/*
 *    - Template Prompts: public/data/prompts/{category}/{familyId}/{templateId}/*
 *
 * ## Preview 處理優先級（由高到低）
 *
 * Preview 決定了風格預覽頁面顯示的內容，採用以下 5 層 fallback 策略：
 *
 * **Level 1: manifest.previews 嵌入內容**
 * - 條件: templateManifest.previews 存在且 preview.html 是非空字符串
 * - 來源: Template JSON 文件中直接嵌入的 HTML/CSS
 * - 適用: 預覽內容需要特殊處理或與 fullPage 不同時
 *
 * **Level 2: manifest.previews 引用 + templateContent**
 * - 條件: templateManifest.previews 存在但 preview.html 為空或路徑
 * - 來源: 從 public/data/content/ fetch 的 fullPageHTML/fullPageStyles
 * - 適用: manifest 定義了 preview 結構，但內容來自文件系統
 *
 * **Level 3: 自動生成 preview（無 manifest.previews）**
 * - 條件: 沒有 manifest.previews，但 templateContent.fullPageHTML > 100 chars
 * - 來源: 動態生成的 preview 對象，使用 fullPageHTML 作為內容
 * - 適用: 大多數標準模板，無需特殊 preview 配置
 *
 * **Level 4: Family 級別 preview 合併**
 * - 行為: 如果 Family 沒有 previews，合併所有 templates 的 previews
 * - 目的: Family 預覽頁可以顯示所有子模板的預覽切換器
 * - 觸發: result.previews 為空且 templates 有 previews
 *
 * **Level 5: Fallback 到 demoHTML**
 * - 條件: 以上都失敗，使用第一個 template 的 demo 內容
 * - 來源: templates[0].demoHTML 或 templates[0].fullPageHTML
 * - 適用: 最後的保底方案
 *
 * @example
 * // 加載 core/skeuomorphism family
 * const family = await loadFullFamily('core', 'skeuomorphism');
 * console.log(family.templates.length); // 模板數量
 * console.log(family.previews.length);  // 可預覽的數量
 */
export async function loadFullFamily(category, familyId) {
  console.log(`[loadFullFamily] 開始加載: ${category}/${familyId}`);

  // 1. 加載 Family Manifest
  const manifest = await loadFamilyManifest(category, familyId);
  if (!manifest) {
    console.warn(`[loadFullFamily] Manifest 加載失敗: ${category}/${familyId}`);
    return null;
  }
  console.log(`[loadFullFamily] Manifest 已加載:`, manifest.id, '模板數:', manifest.templates?.length || 0);

  // 2. 加載 Family 級別內容
  let familyContent = await loadFamilyContent(category, familyId);
  console.log(`[loadFullFamily] Family 內容:`, familyContent.demoHTML ? `${familyContent.demoHTML.length} chars` : '(empty)');

  const familyPrompts = await loadTemplatePrompts(category, familyId, null);
  console.log(`[loadFullFamily] Family Prompts 已加載`);

  // 3. 加載所有 Templates
  // ⚠️ 修復：優先使用 manifest.templates，降級到 manifest.styles
  const templateIds = manifest.templates || manifest.styles || [];
  console.log(`[loadFullFamily] 開始加載 ${templateIds.length} 個模板...`);
  const templates = await Promise.all(
    templateIds.map(async (styleEntry) => {
      // styleEntry 可能是字符串或對象 {id, title, type}
      const templateId = typeof styleEntry === 'string' ? styleEntry : styleEntry.id;
      // ⭐ 從 manifest.templates 中的對象獲取 title（優先）
      const entryTitle = typeof styleEntry === 'object' ? styleEntry.title : null;

      console.log(`[loadFullFamily] 加載模板: ${templateId}`);
      const templateManifest = await loadTemplateManifest(category, familyId, templateId);
      const templateContent = await loadTemplateContent(category, familyId, templateId);
      const templatePrompts = await loadTemplatePrompts(category, familyId, templateId);

      console.log(`[loadFullFamily] 模板 ${templateId} 內容:`,
        templateContent.demoHTML ? `${templateContent.demoHTML.length} chars` : '(empty)',
        'fullPageHTML:', templateContent.fullPageHTML ? `${templateContent.fullPageHTML.length} chars` : '(empty)',
        'fullPageJSX:', templateContent.fullPageJSX ? `${templateContent.fullPageJSX.length} chars` : '(empty)');

      // ⭐ 合併 title：優先使用 entryTitle（來自 manifest.templates），其次 templateManifest.title
      const resolvedTitle = entryTitle || templateManifest?.title || templateId;

      // ========================================================
      // Preview 處理邏輯 (Level 1-3)
      // 參見函數頭部的 JSDoc 了解完整的 5 層優先級說明
      // ========================================================
      let processedPreviews = [];

      // Level 1 & 2: manifest.previews 存在時的處理
      // 檢查 manifest 中是否有 previews（且不為空）
      if (templateManifest?.previews && Array.isArray(templateManifest.previews) && templateManifest.previews.length > 0) {
        // ⭐ 異步加載每個 preview 的內容（從各自的目錄）
        processedPreviews = await Promise.all(templateManifest.previews.map(async (preview) => {
          // ✅ 嘗試從 preview 專屬目錄加載內容 (e.g., /data/content/visual/sciFiHud/dashboard/)
          const previewContent = await loadPreviewContent(category, familyId, preview.id);

          // ✅ 嘗試加載 preview 專屬的 prompts (e.g., /data/prompts/visual/sciFiHud/dashboard/)
          const previewPrompts = await loadPreviewPrompts(category, familyId, preview.id);

          // 檢測是否為 JSX 模式（優先級：存在 JSX 內容 → renderMode 配置）
          const jsxContent = previewContent.fullPageJSX
            || templateContent.fullPageJSX
            || previewContent.demoJSX
            || templateContent.demoJSX
            || ((typeof preview.demoJSX === 'string' && preview.demoJSX.length > 0) ? preview.demoJSX : '');
          const isJSX = !!jsxContent
            || previewContent.renderMode === 'jsx'
            || templateContent.renderMode === 'jsx'
            || preview.renderMode === 'jsx';

          // JSX 模式：優先使用從文件加載的 fullPageJSX
          const demoJSX = isJSX ? (jsxContent || '') : '';

          // HTML 模式：優先使用 preview 專屬內容，其次 templateContent，最後 JSON 內嵌
          let html = previewContent.fullPageHTML
            || templateContent.fullPageHTML
            || templateContent.demoHTML
            || ((typeof preview.html === 'string' && preview.html.length > 0) ? preview.html : '');

          let styles = previewContent.fullPageStyles
            || templateContent.fullPageStyles
            || templateContent.customStyles
            || ((typeof preview.styles === 'string' && preview.styles.length > 0) ? preview.styles : '');

          // 加載 preview 的 JS 腳本（如果存在）
          const script = previewContent.fullPageScript || '';

          // 應用風格覆蓋配置（Issue #15: 配置驅動取代硬編碼）
          const override = STYLE_OVERRIDES[familyId];
          if (override && templateContent.demoHTML) {
            // preferDemo: 優先使用 demoHTML
            if (override.preferDemo) {
              html = templateContent.demoHTML;
            }
            // forceCardStyle: 強制使用卡片樣式
            if (override.forceCardStyle) {
              styles = templateContent.customStyles || styles;
            }
          }

          return {
            ...preview,
            // JSX 模式下傳遞 demoJSX 和 renderMode
            ...(isJSX && demoJSX ? {
              demoJSX,
              renderMode: 'jsx',
              styles,
              html: ''  // JSX 模式下清空 HTML
            } : {
              html,
              styles
            }),
            previewId: preview.previewId || preview.id,
            ...(script ? { script } : {}),
            // ✅ 傳遞 preview 專屬的 prompts（優先），降級到 template 級別
            customPrompt: previewPrompts.customPrompt || templatePrompts.customPrompt,
            stylePrompt: previewPrompts.stylePrompt || templatePrompts.stylePrompt
          };
        }));
        const firstPreview = processedPreviews[0];
        const contentType = firstPreview?.renderMode === 'jsx' ? 'JSX' : 'HTML';
        const contentLength = firstPreview?.renderMode === 'jsx' ? firstPreview?.demoJSX?.length : firstPreview?.html?.length;
        console.log(`[loadFullFamily] 模板 ${templateId} 從 manifest 處理了 ${processedPreviews.length} 個 previews, ${contentType}: ${contentLength || 0} chars`);
      }
      // Level 3A: 自動生成 JSX preview
      else if (templateContent.fullPageJSX && templateContent.fullPageJSX.length > 100) {
        processedPreviews = [{
          id: templateId.replace(/^.*-/, ''),  // 從 template ID 提取簡短 ID
          name: resolvedTitle,  // ⭐ 使用 resolvedTitle 而非 templateManifest?.title
          type: 'fullpage',
          renderMode: templateContent.renderMode || 'jsx',  // ⭐ 使用 templateContent 的 renderMode（支持 react-jsx）
          jsxMode: templateContent.jsxMode,  // ⭐ 傳遞 jsxMode 信息
          demoJSX: templateContent.fullPageJSX,
          styles: templateContent.fullPageStyles || templateContent.customStyles || '',
          previewId: templateId
        }];
        console.log(`[loadFullFamily] 模板 ${templateId} 自動生成 preview, JSX: ${templateContent.fullPageJSX.length} chars, mode: ${templateContent.renderMode || 'jsx'}`);
      }
      // Level 3B: 自動生成 preview（無 manifest.previews 但有 fullPageHTML）
      else if (templateContent.fullPageHTML && templateContent.fullPageHTML.length > 100) {
        processedPreviews = [{
          id: templateId.replace(/^.*-/, ''),  // 從 template ID 提取簡短 ID
          name: resolvedTitle,  // ⭐ 使用 resolvedTitle 而非 templateManifest?.title
          type: 'fullpage',
          html: templateContent.fullPageHTML,
          styles: templateContent.fullPageStyles || templateContent.customStyles || '',
          previewId: templateId
        }];
        console.log(`[loadFullFamily] 模板 ${templateId} 自動生成 preview, HTML: ${templateContent.fullPageHTML.length} chars`);
      }
      // ✅ Level 3C: 回退到 demoHTML（當沒有 fullPageHTML 或長度不足時）
      else if (templateContent.demoHTML && templateContent.demoHTML.length > 0) {
        processedPreviews = [{
          id: templateId.replace(/^.*-/, ''),
          name: resolvedTitle,
          type: 'demo',  // 標記為 demo 類型
          html: templateContent.demoHTML,
          styles: templateContent.customStyles || '',
          previewId: templateId,
          isIncomplete: true  // 標記為不完整內容
        }];
        console.log(`[loadFullFamily] 模板 ${templateId} 回退到 demoHTML: ${templateContent.demoHTML.length} chars（標記為不完整）`);
      }
      // Level 4: 無 preview 數據：processedPreviews 保持為空數組

      return {
        id: templateId,
        title: resolvedTitle,  // ⭐ 確保 title 被正確設置
        ...templateManifest,
        ...templateContent,
        ...templatePrompts,
        // ⭐ 用處理後的 previews 覆蓋原來的引用對象
        ...(processedPreviews.length > 0 ? { previews: processedPreviews } : {})
      };
    })
  );
  console.log(`[loadFullFamily] 所有模板加載完成`);

  // 4. 如果 Family 級別沒有 demoHTML，使用第一個 Template 的內容
  if (!familyContent.demoHTML && templates.length > 0) {
    const firstTemplate = templates[0];
    familyContent = {
      demoHTML: firstTemplate.demoHTML || firstTemplate.fullPageHTML || '',
      customStyles: firstTemplate.customStyles || firstTemplate.fullPageStyles || ''
    };
    console.log(`[loadFullFamily] 使用第一個模板的內容作為 Family 內容`);
  }

  // ⚠️ 修復：manifest.family 現在是對象 { name: {...}, description: {...} }
  // 需要正確提取 title 和 description
  const familyMeta = manifest.family || {};
  const familyTitle = familyMeta.name || familyMeta;  // 兼容舊格式（字符串）
  const familyDesc = familyMeta.description || {};

  const result = {
    // 優先使用 manifest.id，否則從 category + familyId 構建
    id: manifest.id || `${category}-${familyId}`,
    category: manifest.category || category,
    familyId: familyId,  // 使用傳入的 familyId 參數
    // title 優先從 familyContent 獲取，否則從 manifest.family.name
    title: familyContent?.title || familyTitle,
    // description 從 manifest.family.description 獲取
    description: familyDesc,
    ...familyContent,
    ...familyPrompts,
    templates
  };

  // ========================================================
  // Level 4: Family 級別 preview 合併
  // 如果 Family 沒有 previews，從所有 templates 合併
  // 這使得 Family 預覽頁可以顯示模板切換器
  // 支持 HTML 和 JSX 兩種格式
  // ========================================================
  if (!result.previews && templates.length > 0) {
    const allPreviews = [];

    templates.forEach(t => {
      if (t.previews && t.previews.length > 0) {
        t.previews.forEach(preview => {
          // 支持 HTML 和 JSX 兩種格式
          const hasContent = preview.html?.length > 100 || preview.demoJSX?.length > 100;
          if (hasContent) {
            allPreviews.push({
              ...preview,
              // 添加模板信息以便識別來源
              templateId: t.id,
              templateTitle: t.title || t.id,
              // 確保有 name 屬性供 PreviewSelector 顯示
              name: preview.name || t.title || t.id,
              // ✅ 傳遞 template 級別的 Prompt 到 preview（優先使用 preview 自身的，降級到 template 級別）
              customPrompt: preview.customPrompt || t.customPrompt,
              stylePrompt: preview.stylePrompt || t.stylePrompt
            });
          }
        });
      }
    });

    // Level 5 隱含在這裡：如果 allPreviews 為空，
    // result.fullPageHTML 會使用 familyContent 或 templates[0] 的內容
    // (在上面的 "如果 Family 級別沒有 demoHTML" 區塊處理)
    if (allPreviews.length > 0) {
      result.previews = allPreviews;
      // 使用第一個 preview 作為默認的 fullPageHTML（支持 JSX）
      const firstPreview = allPreviews[0];
      if (firstPreview.renderMode === 'jsx' && firstPreview.demoJSX) {
        // JSX 模式：傳遞 demoJSX 和 renderMode
        result.demoJSX = firstPreview.demoJSX;
        result.renderMode = 'jsx';
        result.fullPageStyles = firstPreview.styles || '';
      } else {
        // HTML 模式
        result.fullPageHTML = firstPreview.html;
        result.fullPageStyles = firstPreview.styles || '';
      }
      console.log(`[loadFullFamily] 合併了 ${allPreviews.length} 個 previews 來自 ${templates.length} 個模板`);
    }
  }

  console.log(`[loadFullFamily] 加載完成: ${result.id}, demoHTML: ${result.demoHTML?.length || 0} chars, fullPageHTML: ${result.fullPageHTML?.length || 0} chars, previews: ${result.previews?.length || 0}, 模板: ${templates.length}`);
  // ⭐ DEBUG: 驗證 ID 完整性
  console.log(`[loadFullFamily] Final ID: "${result.id}" (${result.id?.length} chars)`);
  return result;
}

/**
 * 加載整個分類的所有 Families
 * @param {string} category - 分類 ID
 * @returns {Promise<Array>} Family 數據數組
 */
export async function loadCategory(category) {
  // 這需要一個 category 索引文件來知道有哪些 families
  // 暫時返回空數組，需要另外實現
  console.warn(`loadCategory(${category}) 尚未完整實現`);
  return [];
}

/**
 * 獲取所有可用的分類
 * @returns {Array<string>} 分類 ID 數組
 */
export function getAvailableCategories() {
  return ['core', 'visual', 'retro', 'layout', 'interaction'];
}

/**
 * 根據 style ID 解析分類和 family
 * @param {string} styleId - 風格 ID (如 'core-skeuomorphism-tech-corp-homepage')
 * @returns {Object} { category, familyId, templateId }
 */
export function parseStyleId(styleId) {
  if (!styleId) return { category: '', familyId: '', templateId: '' };

  const parts = styleId.split('-');
  if (parts.length < 2) return { category: '', familyId: '', templateId: '' };

  const category = parts[0];
  const remainder = styleId.replace(new RegExp(`^${category}-`), '');
  const remainderParts = remainder.split('-').filter(Boolean);
  const firstSegment = remainderParts[0] || '';
  const mappedFirst = FAMILY_ID_MAP[firstSegment] || firstSegment;

  // 嘗試利用 registry 中的 family 列表進行模糊匹配，解決像 visual-tech-3d-elements 這類多段 ID
  const normalizedStyle = normalizeId(remainder);
  const categoryEntry = registry?.categories?.[category];

  // ✅ 首選：直接使用樣式 ID 去掉分類後的首段作為 family（支援別名映射，如 os → retroOS）
  // 但若 registry 找到更長的 family 匹配，會以 registry 為準（修復 dark-academia 等多段 family）
  let familyId = mappedFirst || '';
  let currentFamilyNorm = normalizeId(familyId);

  if (categoryEntry?.families?.length) {
    let bestMatch = { id: '', norm: '' };

    // 檢查首段推導出的 family 是否在 registry 中存在
    const isCurrentFamilyValid = categoryEntry.families.some((famId) => {
      const resolvedFam = FAMILY_ID_MAP[famId] || famId;
      return normalizeId(resolvedFam) === currentFamilyNorm;
    });

    const considerCandidate = (candidateId) => {
      const norm = normalizeId(candidateId);
      if (!norm) return;
      // 避免過短別名（如 os）誤匹配到尾段（如 futurism-dos）
      if (norm.length <= 2 && normalizedStyle !== norm && !normalizedStyle.startsWith(norm)) return;
      if (!normalizedStyle.includes(norm)) return;
      if (norm.length > bestMatch.norm.length) {
        bestMatch = { id: candidateId, norm };
      }
    };

    // 1) 使用 registry 定義的 family id
    categoryEntry.families.forEach((famId) => {
      considerCandidate(FAMILY_ID_MAP[famId] || famId);
    });

    // 2) 使用映射表別名
    Object.entries(FAMILY_ID_MAP).forEach(([alias, real]) => {
      considerCandidate(alias);
      considerCandidate(real);
    });

    if (bestMatch.id) {
      // 將別名映射為真正的 familyId（例如 url 中的 `os` → `retroOS`）
      const resolvedBest = FAMILY_ID_MAP[bestMatch.id] || bestMatch.id;
      const bestNorm = bestMatch.norm || normalizeId(resolvedBest);

      // 若目前 familyId 为空，或首段 family 不在 registry 中，或 bestMatch 更長更精準，則覆蓋。
      if (!familyId || !isCurrentFamilyValid || bestNorm.length > currentFamilyNorm.length) {
        familyId = resolvedBest;
        currentFamilyNorm = bestNorm;
      }
    }
  }

  // 後備：仍無法解析時，退回第二段為 family
  if (!familyId) {
    const rawFamilyId = parts[1];
    familyId = FAMILY_ID_MAP[rawFamilyId] || rawFamilyId;
  }

  const templateId = (familyId && styleId !== `${category}-${familyId}`) ? styleId : '';

  console.log(`[parseStyleId] ${styleId} → category=${category || '(none)'}, familyId=${familyId || '(none)'}, templateId=${templateId || '(none)'}`);

  return { category, familyId, templateId };
}

export default {
  loadFamilyManifest,
  loadTemplateManifest,
  loadTemplateContent,
  loadPreviewContent,
  loadFamilyContent,
  loadTemplatePrompts,
  loadFullFamily,
  loadCategory,
  getAvailableCategories,
  parseStyleId
};
