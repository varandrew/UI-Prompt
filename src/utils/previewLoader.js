// ✅ 重構：預覽內容動態加載器（新架構）
// 從 public/data/content/ 動態加載 HTML/CSS，不再依賴 templates/ 目錄
// 作者: UI Style 架構优化階段 3.2

import { previewLogger as logger } from './logger';
import { isValidPreactJSX, detectJSXMode, validateJSX } from './jsxPreprocessor';

/**
 * 內存緩存，避免重複加載相同預覽
 */
const previewCache = new Map();

/**
 * 已知的分類列表
 */
const KNOWN_CATEGORIES = ['core', 'visual', 'retro', 'interaction', 'layout'];

/**
 * Family ID 映射（與 jsonStyleLoader 保持一致）
 * 用於將簡短 ID 轉換為實際資料夾名
 */
const FAMILY_ID_MAP = {
  // Core
  'flat': 'flatDesign',
  'flatdesign': 'flatDesign',
  'material': 'materialDesign',
  'materialdesign': 'materialDesign',
  'skeuo': 'skeuomorphism',
  'minimal': 'minimalism',
  'softui': 'softUI',
  'soft-ui': 'softUI',
  // Visual
  'glass': 'glassmorphism',
  'clay': 'claymorphism',
  'cyberpunk': 'neonCyberpunk',
  'neoncyberpunk': 'neonCyberpunk',
  'noir': 'neonNoir',
  'neonnoir': 'neonNoir',
  'brutal': 'brutalism',
  'neo-brutal': 'neoBrutalism',
  'neobrutalism': 'neoBrutalism',
  'paper': 'paperCutout',
  'papercutout': 'paperCutout',
  'sketch': 'handDrawnSketch',
  'handdrawn': 'handDrawnSketch',
  'wabi': 'wabiSabi',
  'wabisabi': 'wabiSabi',
  'scifi': 'sciFiHud',
  'scifihud': 'sciFiHud',
  'holo': 'holographic',
  'holofoil': 'holographicFoil',
  'kawaii': 'kawaiiMinimal',
  'kawaiiminimal': 'kawaiiMinimal',
  'genart': 'generativeArt',
  'generativeart': 'generativeArt',
  'fabric': 'fabric',
  'bento': 'bentoGrids',
  'bentogrids': 'bentoGrids',
  'scroll': 'scrollNarrative',
  'scrollnarrative': 'scrollNarrative',
  'outline': 'outlineStyle',
  'outlinestyle': 'outlineStyle',
  'utility': 'utilityFirst',
  'utilityfirst': 'utilityFirst',
  'dark': 'darkMode',
  'darkmode': 'darkMode',
  'liminal': 'liminalSpace',
  'liminalspace': 'liminalSpace',
  // Retro
  'arcade': 'arcadeCRT',
  'arcadecrt': 'arcadeCRT',
  'crt': 'arcadeCRT',
  'artdeco': 'artDeco',
  'deco': 'artDeco',
  'academia': 'darkAcademia',
  'darkacademia': 'darkAcademia',
  'digital': 'digitalRetro',
  'digitalretro': 'digitalRetro',
  'frutiger': 'frutigerAero',
  'frutigeraero': 'frutigerAero',
  'aero': 'frutigerAero',
  'retrofuture': 'retroFuturism',
  'retrofuturism': 'retroFuturism',
  'retroos': 'retroOS',
  'os': 'retroOS',
  'swiss': 'swissDesign',
  'swissdesign': 'swissDesign',
  'vintage': 'vintageNewspaperRetro',
  'vintagenewspaper': 'vintageNewspaperRetro',
  // Interaction & Layout
  'mouse': 'mouseTracking',
  'mousetracking': 'mouseTracking',
  'layout': 'layoutStyles',
  'layoutstyles': 'layoutStyles'
};

/**
 * PreviewId 到 (category, familyId, templateId) 的映射表
 * 這個映射表用於將舊的 previewId 轉換為新的文件路徑
 *
 * 格式: { previewId: { category, familyId, templateId } }
 */
const previewIdMapping = {
  // === Core Styles ===
  'minimalism-saas': { category: 'core', familyId: 'minimalism', templateId: 'saasLanding' },
  'minimalism-portfolio': { category: 'core', familyId: 'minimalism', templateId: 'portfolio' },
  'minimalism-japanese': { category: 'core', familyId: 'minimalism', templateId: 'japaneseStyle' },
  'minimalism-simple': { category: 'core', familyId: 'minimalism', templateId: 'simpleLanding' },
  // 修正：模板目錄命名改為 kebab-case，確保對應 public/data/content 路徑
  'saas-landing': { category: 'core', familyId: 'minimalism', templateId: 'saas-landing' },
  'core-minimalism-japanese-style': { category: 'core', familyId: 'minimalism', templateId: 'core-minimalism-japanese-style' },
  'core-minimalism-portfolio': { category: 'core', familyId: 'minimalism', templateId: 'core-minimalism-portfolio' },

  'skeuomorphism-tech-company': { category: 'core', familyId: 'skeuomorphism', templateId: 'techCorpHomepage' },
  'skeuomorphism-vintage-library': { category: 'core', familyId: 'skeuomorphism', templateId: 'vintageLibraryLanding' },
  // 新格式：完整 ID (category-familyId-templateId)
  'core-skeuomorphism-tech-corp-homepage': { category: 'core', familyId: 'skeuomorphism', templateId: 'core-skeuomorphism-tech-corp-homepage' },
  'core-skeuomorphism-vintage-library-landing': { category: 'core', familyId: 'skeuomorphism', templateId: 'core-skeuomorphism-vintage-library-landing' },
  'core-skeuomorphism-analog-synthesizer': { category: 'core', familyId: 'skeuomorphism', templateId: 'core-skeuomorphism-analog-synthesizer' },
  'analog-synthesizer-main': { category: 'core', familyId: 'skeuomorphism', templateId: 'core-skeuomorphism-analog-synthesizer' },
  'core-skeuomorphism-product-landing': { category: 'core', familyId: 'skeuomorphism', templateId: 'core-skeuomorphism-product-landing' },

  'flat-design-creative': { category: 'core', familyId: 'flatDesign', templateId: 'creativePortfolio' },
  'flat-design-ecommerce': { category: 'core', familyId: 'flatDesign', templateId: 'ecommerceLanding' },
  'core-flat-design': { category: 'core', familyId: 'flatDesign', templateId: 'core-flat-design' },
  'core-flat-design-ecommerce-landing': { category: 'core', familyId: 'flatDesign', templateId: 'core-flat-design-ecommerce-landing' },
  'core-flatDesign': { category: 'core', familyId: 'flatDesign', templateId: 'core-flatDesign' },

  // MaterialDesign
  'core-material-design': { category: 'core', familyId: 'materialDesign', templateId: 'core-material-design' },
  'core-materialYouAndroidSettings': { category: 'core', familyId: 'materialDesign', templateId: 'core-materialYouAndroidSettings' },
  'core-materialDesign-principles': { category: 'core', familyId: 'materialDesign', templateId: 'core-materialDesign-principles' },

  // Memphis (core)
  'core-memphis-memphis-creative': { category: 'core', familyId: 'memphis', templateId: 'core-memphis-memphis-creative' },
  'memphis-creative': { category: 'core', familyId: 'memphis', templateId: 'memphis-creative' },

  // Typography (core)
  'kinetic': { category: 'core', familyId: 'typography', templateId: 'kinetic' },
  'typographyFirst': { category: 'core', familyId: 'typography', templateId: 'typographyFirst' },
  'core-typography': { category: 'core', familyId: 'typography', templateId: 'typographyFirst' },
  'core-typography-kinetic': { category: 'core', familyId: 'typography', templateId: 'kinetic' },
  'core-typography-typographyFirst': { category: 'core', familyId: 'typography', templateId: 'typographyFirst' },

  // Fluent 2 - 使用 kebab-case 與實際資料夾對齊，避免 404
  'fluent2': { category: 'core', familyId: 'fluent2', templateId: 'fluent2-productivity' },
  'fluent2-productivity': { category: 'core', familyId: 'fluent2', templateId: 'fluent2-productivity' },
  'fluent2-settings': { category: 'core', familyId: 'fluent2', templateId: 'fluent2-settings' },
  'fluent2-notification': { category: 'core', familyId: 'fluent2', templateId: 'fluent2-Notification' },
  // 兼容 Manifest 實際 ID（大小寫維持）
  'fluent2-Notification': { category: 'core', familyId: 'fluent2', templateId: 'fluent2-Notification' },

  // === Visual Styles ===
  'neo-brutalism': { category: 'visual', familyId: 'neoBrutalism', templateId: 'projectManagement' },
  'glassmorphism': { category: 'visual', familyId: 'glassmorphism', templateId: 'glassmorphism-v1' },
  'soft-ui-light': { category: 'visual', familyId: 'softUI', templateId: 'softUILight' },
  'soft-ui-dark': { category: 'visual', familyId: 'softUI', templateId: 'softUIDark' },

  'cyberpunk-gaming-store': { category: 'visual', familyId: 'neonCyberpunk', templateId: 'gamingStore' },
  'cyberpunk-matrix-terminal': { category: 'visual', familyId: 'neonCyberpunk', templateId: 'matrixTerminal' },
  'cyberpunk': { category: 'visual', familyId: 'neonCyberpunk', templateId: 'cyberpunkLanding' },

  'neon-noir': { category: 'visual', familyId: 'neonNoir', templateId: 'neonNoir-v1' },

  'visual-nature-liquid-dashboard': { category: 'visual', familyId: 'nature', templateId: 'liquidDashboard' },
  'visual-nature-liquid-flow-home-office': { category: 'visual', familyId: 'nature', templateId: 'liquidFlowHomeOffice' },
  'visual-nature-liquid-ocean-office': { category: 'visual', familyId: 'nature', templateId: 'liquidOceanOffice' },

  'holographic-foil': { category: 'visual', familyId: 'holographicFoil', templateId: 'holographicFoil-v1' },
  'vaporwave': { category: 'visual', familyId: 'vaporwave', templateId: 'vaporwave-v1' },
  'kawaii-minimal': { category: 'visual', familyId: 'kawaiiMinimal', templateId: 'kawaiiMinimal-v1' },

  'dark-mode': { category: 'visual', familyId: 'darkMode', templateId: 'darkMode-dashboard' },
  'outline-style': { category: 'visual', familyId: 'outlineStyle', templateId: 'businessDemo' },
  'outline-style-elearning': { category: 'visual', familyId: 'outlineStyle', templateId: 'elearningDemo' },
  'utility-first': { category: 'visual', familyId: 'utilityFirst', templateId: 'utilityFirst-v1' },

  'modern-brutalism-project-mgmt': { category: 'visual', familyId: 'brutalism', templateId: 'projectManagement' },
  'modern-brutalism-dev-workspace': { category: 'visual', familyId: 'brutalism', templateId: 'devWorkspace' },

  'gradients': { category: 'visual', familyId: 'gradient', templateId: 'gradients-v1' },

  // 3D Elements (visual/tech)
  'visual-tech-3d-elements': { category: 'visual', familyId: '3dElements', templateId: 'visual-tech-3d-elements' },
  '3dElements': { category: 'visual', familyId: '3dElements', templateId: '3dElements' },

  // Accessibility
  'accessibilityHighContrast': { category: 'visual', familyId: 'accessibility', templateId: 'accessibilityHighContrast' },
  'modern-accessibility-high-contrast': { category: 'visual', familyId: 'accessibility', templateId: 'modern-accessibility-high-contrast' },
  'visual-accessibility-basic': { category: 'visual', familyId: 'accessibility', templateId: 'visual-accessibility-basic' },

  // Ambient
  'visual-ambient-default': { category: 'visual', familyId: 'ambient', templateId: 'visual-ambient-default' },

  // AntiDesign
  'antiDesign': { category: 'visual', familyId: 'antiDesign', templateId: 'antiDesign' },
  'visual-tech-anti-design': { category: 'visual', familyId: 'antiDesign', templateId: 'visual-tech-anti-design' },
  'visual-antiDesign-studio': { category: 'visual', familyId: 'antiDesign', templateId: 'visual-antiDesign-studio' },

  // BentoGrids
  'bentoGrids': { category: 'visual', familyId: 'bentoGrids', templateId: 'bentoGrids' },
  'visual-tech-bento-grids': { category: 'visual', familyId: 'bentoGrids', templateId: 'visual-tech-bento-grids' },

  // Biophilic
  'visual-biophilic-biophilic': { category: 'visual', familyId: 'biophilic', templateId: 'visual-biophilic-biophilic' },

  // Claymorphism
  'visual-claymorphism-claymorphism-dashboard': { category: 'visual', familyId: 'claymorphism', templateId: 'visual-claymorphism-claymorphism-dashboard' },
  'visual-claymorphism-claymorphism-ecommerce': { category: 'visual', familyId: 'claymorphism', templateId: 'visual-claymorphism-claymorphism-ecommerce' },
  'visual-claymorphism-design-system': { category: 'visual', familyId: 'claymorphism', templateId: 'visual-claymorphism-design-system' },

  // DarkMode
  'darkMode': { category: 'visual', familyId: 'darkMode', templateId: 'darkMode' },
  'visual-darkMode-darkMode-dashboard': { category: 'visual', familyId: 'darkMode', templateId: 'visual-darkMode-darkMode-dashboard' },

  // Fabric
  'visual-fabric-woven-weft': { category: 'visual', familyId: 'fabric', templateId: 'visual-fabric-woven-weft' },

  // Grain
  'visual-grain': { category: 'visual', familyId: 'grain', templateId: 'visual-grain' },

  // GenerativeArt
  'generativeArt': { category: 'visual', familyId: 'generativeArt', templateId: 'generativeArt' },
  'visual-tech-generative-art': { category: 'visual', familyId: 'generativeArt', templateId: 'visual-tech-generative-art' },

  // Glassmorphism (additional)
  'Glassmorphism': { category: 'visual', familyId: 'glassmorphism', templateId: 'Glassmorphism' },
  'Landing': { category: 'visual', familyId: 'glassmorphism', templateId: 'Landing' },
  'visual-glassmorphism-glassmorphism-landing': { category: 'visual', familyId: 'glassmorphism', templateId: 'visual-glassmorphism-glassmorphism-landing' },
  'visual-glassmorphism-glassmorphism-music': { category: 'visual', familyId: 'glassmorphism', templateId: 'visual-glassmorphism-glassmorphism-music' },

  // Glow
  'visual-glow-luminous-cards': { category: 'visual', familyId: 'glow', templateId: 'visual-glow-luminous-cards' },

  // Gradients (additional) - 'gradients' key 已在上方定義
  'visual-tech-gradients': { category: 'visual', familyId: 'gradients', templateId: 'visual-tech-gradients' },

  // HandDrawnSketch (additional)
  'handDrawnSketch': { category: 'visual', familyId: 'handDrawnSketch', templateId: 'handDrawnSketch' },
  'handDrawnSketchComponents': { category: 'visual', familyId: 'handDrawnSketch', templateId: 'handDrawnSketchComponents' },
  'visual-handDrawnSketch': { category: 'visual', familyId: 'handDrawnSketch', templateId: 'visual-handDrawnSketch' },
  'visual-handDrawnSketch-notebook': { category: 'visual', familyId: 'handDrawnSketch', templateId: 'visual-handDrawnSketch-notebook' },

  // Holographic
  'visual-holographic-aurora-panel': { category: 'visual', familyId: 'holographic', templateId: 'visual-holographic-aurora-panel' },

  // HolographicFoil (additional)
  'holographicFoil': { category: 'visual', familyId: 'holographicFoil', templateId: 'holographicFoil' },
  'visual-holographicFoil-holographicFoil-landing': { category: 'visual', familyId: 'holographicFoil', templateId: 'visual-holographicFoil-holographicFoil-landing' },

  // KawaiiMinimal (additional)
  'visual-kawaiiMinimal': { category: 'visual', familyId: 'kawaiiMinimal', templateId: 'visual-kawaiiMinimal' },

  // Leather
  'visual-texture-leather-vintage-journal': { category: 'visual', familyId: 'leather', templateId: 'visual-texture-leather-vintage-journal' },

  // Light
  'Ambient': { category: 'visual', familyId: 'light', templateId: 'Ambient' },
  'spotlight': { category: 'visual', familyId: 'light', templateId: 'spotlight' },

  // LiminalSpace
  'liminalSpaceMuseum': { category: 'visual', familyId: 'liminalSpace', templateId: 'liminalSpaceMuseum' },
  'liminalSpaceVacant': { category: 'visual', familyId: 'liminalSpace', templateId: 'liminalSpaceVacant' },
  'visual-liminalSpace-digital-museum': { category: 'visual', familyId: 'liminalSpace', templateId: 'visual-liminalSpace-digital-museum' },
  'visual-liminalSpace-vacant-space': { category: 'visual', familyId: 'liminalSpace', templateId: 'visual-liminalSpace-vacant-space' },

  // Liquid
  'visual-liquid-visual-nature-liquid-flow-home-office': { category: 'visual', familyId: 'liquid', templateId: 'visual-liquid-visual-nature-liquid-flow-home-office' },

  // Memphis (visual) - 下方還有 'memphis' 定義，保留此處作為主定義
  'visual-memphis-memphis-creative': { category: 'visual', familyId: 'memphis', templateId: 'visual-memphis-memphis-creative' },

  // Natural
  'naturalDefault': { category: 'visual', familyId: 'natural', templateId: 'naturalDefault' },

  // Nature (additional)
  'Liquid': { category: 'visual', familyId: 'nature', templateId: 'Liquid' },
  'Particle': { category: 'visual', familyId: 'nature', templateId: 'Particle' },

  // NeoBrutalism (additional)
  'Brutalism': { category: 'visual', familyId: 'neoBrutalism', templateId: 'Brutalism' },
  'visual-neoBrutalism-brutalism': { category: 'visual', familyId: 'neoBrutalism', templateId: 'visual-neoBrutalism-brutalism' },
  'visual-neoBrutalism-neo-brutalism': { category: 'visual', familyId: 'neoBrutalism', templateId: 'visual-neoBrutalism-neo-brutalism' },

  // NeonCyberpunk (additional) - 'cyberpunk' key 已在上方定義
  'cyberpunkGamingStore': { category: 'visual', familyId: 'neonCyberpunk', templateId: 'cyberpunkGamingStore' },
  'cyberpunkMatrixTerminal': { category: 'visual', familyId: 'neonCyberpunk', templateId: 'cyberpunkMatrixTerminal' },
  'visual-neon-cyberpunk': { category: 'visual', familyId: 'neonCyberpunk', templateId: 'visual-neon-cyberpunk' },

  // Neon (new)
  'visual-neon': { category: 'visual', familyId: 'neon', templateId: 'visual-neon' },

  // NeonNoir (additional)
  'neonNoir': { category: 'visual', familyId: 'neonNoir', templateId: 'neonNoir' },
  'visual-neon-noir': { category: 'visual', familyId: 'neonNoir', templateId: 'visual-neon-noir' },
  'visual-neonNoir-nightcity-fm': { category: 'visual', familyId: 'neonNoir', templateId: 'visual-neonNoir-nightcity-fm' },

  // Organic
  'visual-organic-flow-workspace': { category: 'visual', familyId: 'organic', templateId: 'visual-organic-flow-workspace' },

  // OutlineStyle (additional)
  'visual-outlineStyle-outline-business': { category: 'visual', familyId: 'outlineStyle', templateId: 'visual-outlineStyle-outline-business' },
  'visual-outlineStyle-outline-elearning': { category: 'visual', familyId: 'outlineStyle', templateId: 'visual-outlineStyle-outline-elearning' },

  // PaperCutout (additional)
  'paperCutout': { category: 'visual', familyId: 'paperCutout', templateId: 'paperCutout' },
  'visual-paperCutout-paperCutout-showcase': { category: 'visual', familyId: 'paperCutout', templateId: 'visual-paperCutout-paperCutout-showcase' },

  // Scandi (additional) - 下方還有 'scandi' 定義
  'visual-scandi-scandi-interior': { category: 'visual', familyId: 'scandi', templateId: 'visual-scandi-scandi-interior' },

  // SciFiHud
  'dashboard': { category: 'visual', familyId: 'sciFiHud', templateId: 'dashboard' },
  'home-office': { category: 'visual', familyId: 'sciFiHud', templateId: 'home-office' },
  'visual-tech-sci-fi-hud': { category: 'visual', familyId: 'sciFiHud', templateId: 'visual-tech-sci-fi-hud' },

  // ScrollNarrative (additional)
  'parallax-story-experience': { category: 'visual', familyId: 'scrollNarrative', templateId: 'parallax-story-experience' },
  'product-feature-showcase': { category: 'visual', familyId: 'scrollNarrative', templateId: 'product-feature-showcase' },
  'product-launch-timeline': { category: 'visual', familyId: 'scrollNarrative', templateId: 'product-launch-timeline' },
  'vision-launch-narrative': { category: 'visual', familyId: 'scrollNarrative', templateId: 'vision-launch-narrative' },

  // Smoke
  'Smoke': { category: 'visual', familyId: 'smoke', templateId: 'Smoke' },

  // SoftUI (additional)
  'visual-softUI-softUI-dark': { category: 'visual', familyId: 'softUI', templateId: 'visual-softUI-softUI-dark' },
  'visual-softUI-softUI-light': { category: 'visual', familyId: 'softUI', templateId: 'visual-softUI-softUI-light' },

  // Solarpunk
  'solarpunk-eco-marketplace': { category: 'visual', familyId: 'solarpunk', templateId: 'solarpunk-eco-marketplace' },
  'visual-nature-solarpunk': { category: 'visual', familyId: 'solarpunk', templateId: 'visual-nature-solarpunk' },

  // UtilityFirst (additional)
  'modern-utility-first': { category: 'visual', familyId: 'utilityFirst', templateId: 'modern-utility-first' },
  'utilityFirst': { category: 'visual', familyId: 'utilityFirst', templateId: 'utilityFirst' },

  // Vaporwave (additional) - 'vaporwave' key 已在上方定義
  'visual-vaporwave-vaporwave-aesthetic': { category: 'visual', familyId: 'vaporwave', templateId: 'visual-vaporwave-vaporwave-aesthetic' },
  'visual-vaporwave-vaporwave-dreams': { category: 'visual', familyId: 'vaporwave', templateId: 'visual-vaporwave-vaporwave-dreams' },

  // Y2K (additional) - 'y2k' key 已在下方定義
  'visual-y2k': { category: 'visual', familyId: 'y2k', templateId: 'visual-y2k' },
  'visual-y2k-creative-store': { category: 'visual', familyId: 'y2k', templateId: 'visual-y2k-creative-store' },

  'scroll-narrative': { category: 'visual', familyId: 'scrollNarrative', templateId: 'scrollNarrative-v1' },
  'bento-grids': { category: 'visual', familyId: 'bentoGrids', templateId: 'bentoGrids-v1' },

  'paper-cutout': { category: 'visual', familyId: 'paperCutout', templateId: 'paperCutout-v1' },
  'hand-drawn-sketch': { category: 'visual', familyId: 'handDrawnSketch', templateId: 'handDrawnSketch-v1' },
  'hand-drawn-sketch-components': { category: 'visual', familyId: 'handDrawnSketch', templateId: 'handDrawnSketchComponents' },
  'monochrome': { category: 'visual', familyId: 'monochrome', templateId: 'monochrome' },
  'visual-monochrome': { category: 'visual', familyId: 'monochrome', templateId: 'visual-monochrome' },
  'portfolio-showcase': { category: 'visual', familyId: 'monochrome', templateId: 'portfolio-showcase' },
  'duotone': { category: 'visual', familyId: 'gradient', templateId: 'duotone' },
  'visual-duotone': { category: 'visual', familyId: 'duotone', templateId: 'visual-duotone-brand-identity' },
  'visual-duotone-brand-identity': { category: 'visual', familyId: 'duotone', templateId: 'visual-duotone-brand-identity' },
  'wabi-sabi': { category: 'visual', familyId: 'wabiSabi', templateId: 'wabiSabi-v1' },
  'visual-wabiSabi-wabiSabi-zen': { category: 'visual', familyId: 'wabiSabi', templateId: 'visual-wabiSabi-wabiSabi-zen' },
  'visual-wabiSabi-wabiSabi-zen-website': { category: 'visual', familyId: 'wabiSabi', templateId: 'visual-wabiSabi-wabiSabi-zen-website' },
  'memphis': { category: 'visual', familyId: 'memphis', templateId: 'memphis-v1' },
  'brutalism': { category: 'visual', familyId: 'brutalism', templateId: 'brutalism-v1' },
  'y2k': { category: 'visual', familyId: 'y2k', templateId: 'y2k-v1' },
  'scandi': { category: 'visual', familyId: 'scandi', templateId: 'scandi-v1' },

  // Industrial Design
  'visual-industrial': { category: 'visual', familyId: 'industrial', templateId: 'industrial-strataos-dashboard' },
  'industrial-strataos-dashboard': { category: 'visual', familyId: 'industrial', templateId: 'industrial-strataos-dashboard' },
  'industrial-nexus-control': { category: 'visual', familyId: 'industrial', templateId: 'industrial-nexus-control' },
  'visual-industrial-analog-synth': { category: 'visual', familyId: 'industrial', templateId: 'visual-industrial-analog-synth' },

  // === Retro Styles ===
  'retro-os95': { category: 'retro', familyId: 'retroOS', templateId: 'os95' },
  'retro-vintage': { category: 'retro', familyId: 'vintageNewspaperRetro', templateId: 'vintageNewspaper' },
  'retro-computing-platform': { category: 'retro', familyId: 'retroFuturism', templateId: 'computingPlatform' },
  'art-deco': { category: 'retro', familyId: 'artDeco', templateId: 'luxuryHotel' },
  'frutiger-aero': { category: 'retro', familyId: 'frutigerAero', templateId: 'osInterface' },
  // Arcade CRT 系列
  'retro-arcadeCRT-arcade-hall': { category: 'retro', familyId: 'arcadeCRT', templateId: 'retro-arcadeCRT-arcade-hall' },
  'retro-arcadeCRT-cyberpunk-control': { category: 'retro', familyId: 'arcadeCRT', templateId: 'retro-arcadeCRT-cyberpunk-control' },
  'arcadeHall': { category: 'retro', familyId: 'arcadeCRT', templateId: 'arcadeHall' },
  'cyberpunkControl': { category: 'retro', familyId: 'arcadeCRT', templateId: 'cyberpunkControl' },

  // ArtDeco
  'artDecoLuxury': { category: 'retro', familyId: 'artDeco', templateId: 'artDecoLuxury' },
  'retro-art-deco-luxury': { category: 'retro', familyId: 'artDeco', templateId: 'retro-art-deco-luxury' },

  // DarkAcademia
  'darkAcademiaLibrary': { category: 'retro', familyId: 'darkAcademia', templateId: 'darkAcademiaLibrary' },
  'retro-dark-academia-library': { category: 'retro', familyId: 'darkAcademia', templateId: 'retro-dark-academia-library' },

  // DigitalRetro
  'retro-digitalRetro-pixel-art': { category: 'retro', familyId: 'digitalRetro', templateId: 'retro-digitalRetro-pixel-art' },

  // FrutigerAero
  'frutigerAeroOS': { category: 'retro', familyId: 'frutigerAero', templateId: 'frutigerAeroOS' },
  'retro-frutiger-aero-os': { category: 'retro', familyId: 'frutigerAero', templateId: 'retro-frutiger-aero-os' },

  // Newspaper
  'modernEditorialTemplates': { category: 'retro', familyId: 'newspaper', templateId: 'modernEditorialTemplates' },
  'vintageRetroTemplates': { category: 'retro', familyId: 'newspaper', templateId: 'vintageRetroTemplates' },

  // RetroFuturism
  'retro-futurism-dos': { category: 'retro', familyId: 'retroFuturism', templateId: 'retro-futurism-dos' },
  'retroFuture': { category: 'retro', familyId: 'retroFuturism', templateId: 'retroFuture' },

  // RetroOS
  'retro-os-windows95': { category: 'retro', familyId: 'retroOS', templateId: 'retro-os-windows95' },
  'retroOS95': { category: 'retro', familyId: 'retroOS', templateId: 'retroOS95' },

  // SwissDesign
  'retro-swiss-design': { category: 'retro', familyId: 'swissDesign', templateId: 'retro-swiss-design' },
  'swissDesign': { category: 'retro', familyId: 'swissDesign', templateId: 'swissDesign' },

  // === Interaction Styles ===
  'interaction-mouse-tracking': { category: 'interaction', familyId: 'mouseTracking', templateId: 'interaction-mouse-tracking' }
};

// Convert to Map for better performance (O(1) lookup for 630+ entries)
const previewIdMap = new Map(Object.entries(previewIdMapping));

/**
 * 從 public/data/content/ 動態加載預覽內容
 * 支持 HTML、Preact JSX 和 React JSX 三種格式
 * @param {string} category - 分類 (core/visual/retro/interaction/layout)
 * @param {string} familyId - 家族 ID
 * @param {string} templateId - 模板 ID
 * @returns {Promise<{html?: string, jsx?: string, styles: string, renderMode?: string, jsxMode?: string}>} 預覽內容
 */
async function loadContentFromPublic(category, familyId, templateId) {
  const basePath = `/data/content/styles/${category}/${familyId}/${templateId}`;

  try {
    // ========================================
    // 優先嘗試加載 JSX 文件：fullpage.jsx > demo.jsx
    // 支持 Preact h() 和 React JSX 兩種模式
    // ========================================
    const jsxPaths = ['fullpage.jsx', 'demo.jsx'];

    for (const jsxFile of jsxPaths) {
      const jsxResponse = await fetch(`${basePath}/${jsxFile}`).catch(() => null);

      if (jsxResponse && jsxResponse.ok) {
        const jsxCode = await jsxResponse.text();
        // 若 JSX 文件實際回傳的是 HTML（如 SPA fallback），則跳過
        const looksLikeHTML = /^\s*</.test(jsxCode) && /<html|<body|<!doctype/i.test(jsxCode);

        if (!looksLikeHTML) {
          // 檢測 JSX 模式：'react' | 'preact-h' | null
          const jsxMode = detectJSXMode(jsxCode);

          if (jsxMode === 'preact-h') {
            // Preact JSX 模式
            const validPreact = isValidPreactJSX(jsxCode);
            if (validPreact) {
              const cssResponse = await fetch(`${basePath}/fullpage.css`).catch(() => null);
              const styles = cssResponse && cssResponse.ok ? await cssResponse.text() : '';

              logger.debug(`Loaded Preact JSX template from ${basePath}/${jsxFile}`);
              return { jsx: jsxCode, styles, renderMode: 'jsx', jsxMode: 'preact-h' };
            }
          } else if (jsxMode === 'react') {
            // React JSX 模式
            const validation = validateJSX(jsxCode, 'react');
            if (validation.valid) {
              const cssResponse = await fetch(`${basePath}/fullpage.css`).catch(() => null);
              const styles = cssResponse && cssResponse.ok ? await cssResponse.text() : '';

              logger.debug(`Loaded React JSX template from ${basePath}/${jsxFile}`);
              return { jsx: jsxCode, styles, renderMode: 'react-jsx', jsxMode: 'react' };
            } else {
              logger.warn(`React JSX 驗證失敗: ${basePath}/${jsxFile}`, validation.errors);
            }
          }
        }

        logger.warn(`${jsxFile} 不是有效的 JSX，嘗試下一個文件: ${basePath}`, {
          length: jsxCode?.length || 0,
          looksLikeHTML,
          jsxMode: detectJSXMode(jsxCode)
        });
      }
    }

    // 降級到 HTML 模式
    const [htmlResponse, cssResponse] = await Promise.all([
      fetch(`${basePath}/fullpage.html`).catch(() => null),
      fetch(`${basePath}/fullpage.css`).catch(() => null)
    ]);

    const html = htmlResponse && htmlResponse.ok
      ? await htmlResponse.text()
      : '';

    const styles = cssResponse && cssResponse.ok
      ? await cssResponse.text()
      : '';

    return { html, styles };
  } catch (error) {
    logger.error(`Failed to load content from ${basePath}:`, error);
    return { html: '', styles: '' };
  }
}

/**
 * 動態加載預覽內容
 * 支持 HTML 和 JSX 兩種格式
 * @param {string} previewId - 預覽ID
 * @returns {Promise<{html?: string, jsx?: string, styles: string, renderMode?: string}>} 預覽內容
 */
export async function loadPreview(previewId) {
  // 檢查緩存
  if (previewCache.has(previewId)) {
    logger.debug(`Preview cache hit: ${previewId}`);
    return previewCache.get(previewId);
  }

  // 查找映射 (using Map for O(1) lookup)
  const mapping = previewIdMap.get(previewId);
  if (!mapping) {
    logger.warn(`Preview ID not found in mapping: ${previewId}`);
    return { html: '', styles: '' };
  }

  const { category, familyId, templateId } = mapping;
  logger.debug(`Loading preview: ${previewId} → ${category}/${familyId}/${templateId}`);

  try {
    // 從 public/ 動態加載（支持 HTML 和 JSX）
    const content = await loadContentFromPublic(category, familyId, templateId);

    // 根據內容類型構建結果
    let result;
    if (content.renderMode === 'react-jsx' && content.jsx) {
      // React JSX 模式
      result = {
        jsx: content.jsx,
        demoJSX: content.jsx,
        styles: content.styles || '',
        renderMode: 'react-jsx',
        jsxMode: 'react'
      };
      logger.success(`Preview loaded (React JSX): ${previewId} (${result.jsx.length} chars JSX, ${result.styles.length} chars CSS)`);
    } else if (content.renderMode === 'jsx' && content.jsx) {
      // Preact JSX 模式
      result = {
        jsx: content.jsx,
        demoJSX: content.jsx,  // 兼容 StylePreviewPage 的 demoJSX 屬性
        styles: content.styles || '',
        renderMode: 'jsx',
        jsxMode: 'preact-h'
      };
      logger.success(`Preview loaded (Preact JSX): ${previewId} (${result.jsx.length} chars JSX, ${result.styles.length} chars CSS)`);
    } else {
      // HTML 模式
      result = {
        html: content.html || '',
        styles: content.styles || ''
      };
      logger.success(`Preview loaded (HTML): ${previewId} (${result.html.length} chars HTML, ${result.styles.length} chars CSS)`);
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
 * 用於提升用戶體驗，在用戶可能需要之前就開始加載
 * @param {string} previewId - 預覽ID
 */
export function preloadPreview(previewId) {
  if (previewCache.has(previewId)) {
    return; // 已經加載
  }

  loadPreview(previewId).catch(error => {
    logger.warn(`Preload failed for ${previewId}:`, error);
  });
}

/**
 * 批量預加載多個預覽
 * @param {string[]} previewIds - 預覽ID數組
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
 * @returns {string[]}
 */
export function getAvailablePreviewIds() {
  return Object.keys(previewIdMapping);
}

/**
 * 檢查預覽ID是否可用
 * @param {string} previewId
 * @returns {boolean}
 */
export function isPreviewIdValid(previewId) {
  return previewId in previewIdMapping;
}
