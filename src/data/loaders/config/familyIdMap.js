/**
 * Family ID 映射配置
 * 用於解決 URL 簡稱與實際資料夾名稱不一致的問題
 *
 * 擴展覆蓋：
 * - Core families (10)
 * - Visual families (87)
 * - Retro families (9)
 * - Interaction & Layout (3)
 */

/**
 * ID 映射表：URL 簡稱 → 實際資料夾名
 */
export const FAMILY_ID_MAP = {
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
  'texture-leather': 'leather',  // visual-texture-leather → leather folder
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
 */
export const STYLE_OVERRIDES = {
  // Soft UI：使用小型卡片預覽，避免整頁模板被壓縮
  'softUI': {
    preferDemo: true,
    forceCardStyle: true
  }
  // 未來可以在此添加更多風格的覆蓋配置
  // 'anotherFamily': { preferDemo: true }
};

/**
 * 將字串規範化用於匹配（移除非字母數字並轉小寫）
 * @param {string} value - 原始字串
 * @returns {string} 規範化後的字串
 */
export const normalizeId = (value = '') => value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

/**
 * 解析別名為實際 Family ID
 * @param {string} alias - 別名或 Family ID
 * @returns {string} 實際的 Family ID
 */
export const resolveAlias = (alias) => {
  if (!alias) return '';
  const normalized = normalizeId(alias);
  return FAMILY_ID_MAP[normalized] || FAMILY_ID_MAP[alias] || alias;
};

export default {
  FAMILY_ID_MAP,
  STYLE_OVERRIDES,
  normalizeId,
  resolveAlias
};
