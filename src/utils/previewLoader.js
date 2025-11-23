// 預覽內容動態加載器
// 按需加載完整页面 HTML/CSS，避免首屏打包
// 作者: UI Style 架構优化階段 3.1

/**
 * 預覽加載器映射表
 * 將預覽 ID 映射到對應的動態 import 函数
 * 每個加載器返回 { html, styles } 對象
 */
const previewLoaders = {
  // === Core Styles ===
  'minimalism-saas': () => import('../data/styles/templates/core/minimalism/minimalismFullPage').then(m => ({
    html: m.minimalismFullPageHTML,
    styles: m.minimalismFullPageStyles
  })),
  'minimalism-portfolio': () => import('../data/styles/templates/core/minimalism/minimalismPortfolioFullPage').then(m => ({
    html: m.minimalismPortfolioFullPageHTML,
    styles: m.minimalismPortfolioFullPageStyles
  })),
  'minimalism-japanese': () => import('../data/styles/templates/core/minimalism/minimalismFullPage').then(m => ({
    html: m.minimalismJapaneseFullPageHTML,
    styles: m.minimalismJapaneseFullPageStyles
  })),
  'minimalism-simple': () => import('../data/styles/templates/core/minimalism/minimalismSimpleFullPage').then(m => ({
    html: m.minimalismSimpleFullPageHTML,
    styles: m.minimalismSimpleFullPageStyles
  })),
  'skeuomorphism-tech-company': () => import('../data/styles/templates/core/skeuomorphism/skeuomorphismTechCompanyFullPage').then(m => ({
    html: m.skeuomorphismTechCompanyFullPageHTML,
    styles: m.skeuomorphismTechCompanyFullPageStyles
  })),
  'skeuomorphism-home-office': () => import('../data/styles/templates/core/skeuomorphism/skeuomorphismHomeOfficeFullPage').then(m => ({
    html: m.skeuomorphismHomeOfficeFullPageHTML,
    styles: m.skeuomorphismHomeOfficeFullPageStyles
  })),
  'skeuomorphism-vintage-library': () => import('../data/styles/templates/core/skeuomorphism/skeuomorphismVintageLibraryFullPage').then(m => ({
    html: m.vintageLibraryFullPageHTML,
    styles: m.vintageLibraryFullPageStyles
  })),
  'flat-design-creative': () => import('../data/styles/templates/core/flatDesign/flatDesignCreativePortfolioFullPage').then(m => ({
    html: m.flatDesignCreativePortfolioFullPageHTML,
    styles: m.flatDesignCreativePortfolioFullPageStyles
  })),
  'flat-design-ecommerce': () => import('../data/styles/templates/core/flatDesign/flatDesignEcommerceFullPage').then(m => ({
    html: m.flatDesignEcommerceFullPageHTML,
    styles: m.flatDesignEcommerceFullPageStyles
  })),

  // === Visual Styles ===
  'neo-brutalism': () => import('../data/styles/templates/visual/neoBrutalism/BrutalismFullPage').then(m => ({
    html: m.brutalismFullPageHTML,
    styles: m.brutalismFullPageStyles
  })),
  'glassmorphism': () => import('../data/styles/templates/visual/translucent/glassmorphism/GlassmorphismFullPage').then(m => ({
    html: m.glassmorphismFullPageHTML,
    styles: m.glassmorphismFullPageStyles
  })),
  'neumorphism': () => import('../data/styles/templates/visual/neomorphism/neomorphismFullPage').then(m => ({
    html: m.neomorphismFullPageHTML,
    styles: m.neomorphismFullPageStyles
  })),
  'soft-ui-light': () => import('../data/styles/templates/visual/softUI/softUILightFullPage').then(m => ({
    html: m.softUILightFullPageHTML,
    styles: m.softUILightFullPageStyles
  })),
  'soft-ui-dark': () => import('../data/styles/templates/visual/softUI/softUIDarkFullPage').then(m => ({
    html: m.softUIDarkFullPageHTML,
    styles: m.softUIDarkFullPageStyles
  })),
  // 修正：對齊實際导出名稱（無 FullPage 後綴）
  'cyberpunk-gaming-store': () => import('../data/styles/templates/visual/neonCyberpunk/cyberpunkGamingStoreFullPage').then(m => ({
    html: m.cyberpunkGamingStoreHTML,
    styles: m.cyberpunkGamingStoreStyles
  })),
  'cyberpunk-matrix-terminal': () => import('../data/styles/templates/visual/neonCyberpunk/cyberpunkMatrixTerminalFullPage').then(m => ({
    html: m.cyberpunkMatrixTerminalHTML,
    styles: m.cyberpunkMatrixTerminalStyles
  })),
  'cyberpunk': () => import('../data/styles/templates/visual/neonCyberpunk/cyberpunkFullPage').then(m => ({
    html: m.cyberpunkFullPageHTML,
    styles: m.cyberpunkFullPageStyles
  })),
  'neon-noir': () => import('../data/styles/templates/visual/neonNoir/neonNoirFullPage').then(m => ({
    html: m.neonNoirFullPageHTML,
    styles: m.neonNoirFullPageStyles
  })),
  'visual-nature-liquid-dashboard': () => import('../data/styles/templates/visual/nature/liquid/LiquidFullPage').then(m => ({
    html: m.fullPageHTML,
    styles: m.fullPageStyles
  })),
  'visual-nature-liquid-flow-home-office': () => import('../data/styles/templates/visual/nature/liquid/LiquidFlowHomeOffice').then(m => ({
    html: m.liquidFlowHomeOfficeHTML,
    styles: ''
  })),
  'visual-nature-liquid-ocean-office': () => import('../data/styles/templates/visual/nature/liquid/LiquidOceanOffice').then(m => ({
    html: m.liquidOceanOfficeHTML,
    styles: ''
  })),
  'holographic-foil': () => import('../data/styles/templates/visual/holographicFoil/holographicFoilFullPage').then(m => ({
    html: m.holographicFoilFullPageHTML,
    styles: m.holographicFoilFullPageStyles
  })),
  'vaporwave': () => import('../data/styles/templates/visual/vaporwave/vaporwaveFullPage').then(m => ({
    html: m.vaporwaveFullPageHTML,
    styles: m.vaporwaveFullPageStyles
  })),
  'kawaii-minimal': () => import('../data/styles/templates/visual/kawaiiMinimal/kawaiiMinimalFullPage').then(m => ({
    html: m.kawaiiMinimalFullPageHTML,
    styles: m.kawaiiMinimalFullPageStyles
  })),

  // === Modern Styles ===
  'dark-mode': () => import('../data/styles/templates/visual/darkMode/darkModeFullPage').then(m => ({
    html: m.darkModeFullPageHTML,
    styles: m.darkModeFullPageStyles
  })),
  'outline-style': () => import('../data/styles/templates/visual/outlineStyle/BusinessDemo').then(m => ({
    html: m.fullPageHTML,
    styles: m.fullPageStyles
  })),
  'outline-style-elearning': () => import('../data/styles/templates/visual/outlineStyle/ElearningDemo').then(m => ({
    html: m.outlineStyleElearningHTML,
    styles: m.outlineStyleElearningStyles
  })),
  'utility-first': () => import('../data/styles/templates/visual/utilityFirst/utilityFirstFullPage').then(m => ({
    html: m.utilityFirstFullPageHTML,
    styles: m.utilityFirstFullPageStyles
  })),
  // Brutalism Templates (Modern category)
  'modern-brutalism-project-mgmt': () => import('../data/styles/templates/visual/brutalism/brutalismFullPage').then(m => ({
    html: m.brutalismFullPageHTML,
    styles: m.brutalismFullPageStyles
  })),
  'modern-brutalism-dev-workspace': () => import('../data/styles/templates/visual/brutalism/brutalismFullPage').then(m => ({
    html: m.brutalismFullPageHTML,
    styles: m.brutalismFullPageStyles
  })),
  // Accessibility Templates (Modern category)
  'modern-accessibility-high-contrast': () => import('../data/styles/templates/visual/accessibility/accessibilityHighContrastFullPage').then(m => ({
    html: m.accessibilityHighContrastFullPageHTML,
    styles: m.accessibilityHighContrastFullPageStyles
  })),

  // === Visual Tech Styles ===
  // Phase 3 Batch 1: 新增 VisualTech 風格加載器
  'gradients': () => import('../data/styles/templates/visual/gradients/gradientsFullPage').then(m => ({
    html: m.gradientsFullPageHTML,
    styles: m.gradientsFullPageStyles
  })),
  'data-visualization': () => import('../data/styles/templates/visual/dataVisualization/dataVisualizationFullPage').then(m => ({
    html: m.dataVisualizationFullPageHTML,
    styles: m.dataVisualizationFullPageStyles
  })),
  'scroll-narrative': () => import('../data/styles/templates/visual/scrollNarrative/FullPageDemo').then(m => ({
    html: m.fullPageHTML,
    styles: m.fullPageStyles
  })),
  'bento-grids': () => import('../data/styles/templates/visual/bentoGrids/bentoGridsFullPage').then(m => ({
    html: m.bentoGridsFullPageHTML,
    styles: m.bentoGridsFullPageStyles
  })),

  'paper-cutout': () => import('../data/styles/templates/visual/paperCutout/paperCutoutFullPage').then(m => ({
    html: m.paperCutoutFullPageHTML,
    styles: m.paperCutoutFullPageStyles
  })),
  'hand-drawn-sketch': () => import('../data/styles/templates/visual/handDrawnSketch/handDrawnSketchFullPage').then(m => ({
    html: m.handDrawnSketchFullPageHTML,
    styles: m.handDrawnSketchFullPageStyles
  })),
  'hand-drawn-sketch-components': () => import('../data/styles/templates/visual/handDrawnSketch/handDrawnSketchComponentsFullPage').then(m => ({
    html: m.handDrawnSketchComponentsFullPageHTML,
    styles: m.handDrawnSketchComponentsFullPageStyles
  })),
  'monochrome': () => import('../data/styles/templates/visual/monochrome/monochromeFullPage').then(m => ({
    html: m.monochromeFullPageHTML,
    styles: m.monochromeFullPageStyles
  })),
  'duotone': () => import('../data/styles/templates/visual/gradient/duotone/DuotoneFullPage').then(m => ({
    html: m.duotoneFullPageHTML,
    styles: m.duotoneFullPageStyles
  })),
  'wabi-sabi': () => import('../data/styles/templates/visual/wabiSabi/wabiSabiFullPage').then(m => ({
    html: m.wabiSabiFullPageHTML,
    styles: m.wabiSabiFullPageStyles
  })),

  // === Retro Styles ===
  'retro-os95': () => import('../data/styles/templates/retro/retroOS/retroOS95FullPage').then(m => ({
    html: m.retroOS95FullPageHTML,
    styles: m.retroOS95FullPageStyles
  })),
  'retro-vintage': () => import('../data/styles/templates/retro/vintageNewspaperRetro/vintageNewspaperFullPage').then(m => ({
    html: m.retroVintageFullPageHTML,
    styles: m.retroVintageFullPageStyles
  })),
  'retro-computing-platform': () => import('../data/styles/templates/retro/retroFuturism/retroFutureFullPage').then(m => ({
    html: m.retroFutureFullPageHTML,
    styles: m.retroFutureFullPageStyles
  })),
  'art-deco': () => import('../data/styles/templates/retro/artDeco/artDecoLuxuryFullPage').then(m => ({
    html: m.artDecoLuxuryFullPageHTML,
    styles: m.artDecoLuxuryFullPageStyles
  })),
  'memphis': () => import('../data/styles/templates/visual/memphis/memphisFullPage').then(m => ({
    html: m.memphisFullPageHTML,
    styles: m.memphisFullPageStyles
  })),
  'brutalism': () => import('../data/styles/templates/visual/brutalism/brutalismFullPage').then(m => ({
    html: m.brutalismFullPageHTML,
    styles: m.brutalismFullPageStyles
  })),
  'y2k': () => import('../data/styles/templates/visual/y2k/y2kFullPage').then(m => ({
    html: m.y2kFullPageHTML,
    styles: m.y2kFullPageStyles
  })),
  'frutiger-aero': () => import('../data/styles/templates/retro/frutigerAero/frutigerAeroOSFullPage').then(m => ({
    html: m.frutigerAeroOSFullPageHTML,
    styles: m.frutigerAeroOSFullPageStyles
  })),

  // === Metro/Fluent Styles ===
  'fluent2': () => import('../data/styles/templates/core/fluent2/fluent2FullPage').then(m => ({
    html: m.fluent2AcrylicFullPageHTML,
    styles: m.fluent2AcrylicFullPageStyles
  })),
  'fluent2-productivity': () => import('../data/styles/templates/core/fluent2/fluent2ProductivityFullPage').then(m => ({
    html: m.fluent2ProductivityFullPageHTML,
    styles: m.fluent2ProductivityFullPageStyles
  })),
  'fluent2-settings': () => import('../data/styles/templates/core/fluent2/fluent2SettingsFullPage').then(m => ({
    html: m.fluent2SettingsFullPageHTML,
    styles: m.fluent2SettingsFullPageStyles
  })),
  'fluent2-notification': () => import('../data/styles/templates/core/fluent2/fluent2NotificationFullPage').then(m => ({
    html: m.fluent2NotificationFullPageHTML,
    styles: m.fluent2NotificationFullPageStyles
  })),

  // === Additional Styles ===
  'scandi': () => import('../data/styles/templates/visual/scandi/scandiFullPage').then(m => ({
    html: m.scandiFullPageHTML,
    styles: m.scandiFullPageStyles
  }))
};

/**
 * 內存緩存，避免重複加載相同預覽
 */
const previewCache = new Map();

/**
 * 動態加載預覽內容
 * @param {string} previewId - 預覽ID，對應 previewLoaders 中的鍵
 * @returns {Promise<{html: string, styles: string}>} 預覽內容
 */
export async function loadPreview(previewId) {
  // 检查緩存
  if (previewCache.has(previewId)) {
    return previewCache.get(previewId);
  }

  // 检查加載器是否存在
  const loader = previewLoaders[previewId];
  if (!loader) {
    console.warn(`Preview loader not found: ${previewId}`);
    return { html: '', styles: '' };
  }

  try {
    // 動態加載
    const content = await loader();

    // 驗證內容格式
    const result = {
      html: content.html || '',
      styles: content.styles || ''
    };

    // 緩存結果
    previewCache.set(previewId, result);

    console.log(`✅ Preview loaded: ${previewId} (${result.html.length} chars)`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to load preview ${previewId}:`, error);
    return { html: '', styles: '' };
  }
}

/**
 * 預加載預覽內容（不等待結果）
 * 用於提升用戶体驗，在用戶可能需要之前就開始加載
 * @param {string} previewId - 預覽ID
 */
export function preloadPreview(previewId) {
  if (previewCache.has(previewId)) {
    return; // 已經加載或正在加載
  }

  const loader = previewLoaders[previewId];
  if (loader) {
    // 觸發加載但不等待結果
    loader().then(content => {
      previewCache.set(previewId, {
        html: content.html || '',
        styles: content.styles || ''
      });
      console.log(`🚀 Preview preloaded: ${previewId}`);
    }).catch(error => {
      console.warn(`⚠️ Preload failed for ${previewId}:`, error);
    });
  }
}

/**
 * 批量預加載多個預覽
 * @param {string[]} previewIds - 預覽ID数組
 * @param {number} delay - 每個預覽之間的延遲 (ms)
 */
export function batchPreloadPreviews(previewIds, delay = 100) {
  previewIds.forEach((previewId, index) => {
    setTimeout(() => {
      preloadPreview(previewId);
    }, index * delay);
  });
}

/**
 * 清除預覽緩存
 * 用於內存管理或強制重新加載
 */
export function clearPreviewCache() {
  previewCache.clear();
  console.log('🗑️ Preview cache cleared');
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
 * @returns {string[]}
 */
export function getAvailablePreviewIds() {
  return Object.keys(previewLoaders);
}

/**
 * 检查預覽ID是否可用
 * @param {string} previewId
 * @returns {boolean}
 */
export function isPreviewIdValid(previewId) {
  return previewId in previewLoaders;
}
