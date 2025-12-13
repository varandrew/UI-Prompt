// 分类系統元数据配置
// Category System Metadata Configuration

import { getTranslation } from "../../utils/i18n/translations";

/**
 * 主分类定義
 * Primary Categories Definition
 */
export const primaryCategories = {
  core: {
    id: 'core',
    key: 'core',
    label: { 'zh-cn': '核心风格', 'en-US': 'Core' },
    icon: '',
    order: 1,
    description: {
      'zh-cn': '历史上具有重要影响力的核心设计风格',
      'en-US': 'Historically influential core design styles'
    }
  },
  visualDesign: {
    id: 'visualDesign',
    key: 'visualDesign',
    label: { 'zh-cn': '视觉设计', 'en-US': 'Visual Design' },
    icon: '',
    order: 2,
    description: {
      'zh-cn': '以视觉特征和技术效果为主的设计风格',
      'en-US': 'Design styles focused on visual characteristics and technical effects'
    }
  },
  typography: {
    id: 'typography',
    key: 'typography',
    label: { 'zh-cn': '排版', 'en-US': 'Typography' },
    icon: '',
    order: 3,
    description: {
      'zh-cn': '以排版和字体为核心的设计风格',
      'en-US': 'Design styles centered on typography and fonts'
    }
  },
  retro: {
    id: 'retro',
    key: 'retro',
    label: { 'zh-cn': '复古', 'en-US': 'Retro' },
    icon: '',
    order: 4,
    description: {
      'zh-cn': '受复古美学和艺术运动启发的风格',
      'en-US': 'Styles inspired by retro aesthetics and art movements'
    }
  },
  layout: {
    id: 'layout',
    key: 'layout',
    label: { 'zh-cn': '布局', 'en-US': 'Layout' },
    icon: '',
    order: 5,
    description: {
      'zh-cn': '以布局结构和空间组织为特点的风格',
      'en-US': 'Styles characterized by layout structure and spatial organization'
    }
  },
  interaction: {
    id: 'interaction',
    key: 'interaction',
    label: { 'zh-cn': '交互', 'en-US': 'Interaction' },
    icon: '',
    order: 6,
    description: {
      'zh-cn': '以互动方式和未来技术为核心的风格',
      'en-US': 'Styles centered on interaction paradigms and future technologies'
    }
  }
};

/**
 * 次級标籤定義 - 時代特徵
 * Secondary Tags - Era Characteristics
 */
export const eraTags = {
  classic: {
    id: 'classic',
    label: { 'zh-cn': '经典时代', 'en-US': 'Classic Era' },
    color: '#8B4513',
    description: 'tags.era.classic.description'
  },
  retro: {
    id: 'retro',
    label: { 'zh-cn': '复古怀旧', 'en-US': 'Retro Revival' },
    color: '#FF6B9D',
    description: 'tags.era.retro.description'
  },
  contemporary: {
    id: 'contemporary',
    label: { 'zh-cn': '当代流行', 'en-US': 'Contemporary' },
    color: '#4ECDC4',
    description: 'tags.era.contemporary.description'
  },
  futuristic: {
    id: 'futuristic',
    label: { 'zh-cn': '未来前沿', 'en-US': 'Futuristic' },
    color: '#9B59B6',
    description: 'tags.era.futuristic.description'
  }
};

/**
 * 次級标籤定義 - 視覺特性
 * Secondary Tags - Visual Characteristics
 */
export const visualTags = {
  flat: {
    id: 'flat',
    label: { 'zh-cn': '扁平化', 'en-US': 'Flat' },
    color: '#3498DB',
    description: 'tags.visual.flat.description'
  },
  depth: {
    id: 'depth',
    label: { 'zh-cn': '立体深度', 'en-US': 'Depth' },
    color: '#E74C3C',
    description: 'tags.visual.depth.description'
  },
  bold: {
    id: 'bold',
    label: { 'zh-cn': '粗犷大胆', 'en-US': 'Bold' },
    color: '#E67E22',
    description: 'tags.visual.bold.description'
  },
  minimal: {
    id: 'minimal',
    label: { 'zh-cn': '极简主义', 'en-US': 'Minimal' },
    color: '#95A5A6',
    description: 'tags.visual.minimal.description'
  },
  colorful: {
    id: 'colorful',
    label: { 'zh-cn': '多彩缤纷', 'en-US': 'Colorful' },
    color: '#F39C12',
    description: 'tags.visual.colorful.description'
  },
  organic: {
    id: 'organic',
    label: { 'zh-cn': '有机流动', 'en-US': 'Organic' },
    color: '#27AE60',
    description: 'tags.visual.organic.description'
  },
  geometric: {
    id: 'geometric',
    label: { 'zh-cn': '几何规整', 'en-US': 'Geometric' },
    color: '#2C3E50',
    description: 'tags.visual.geometric.description'
  },
  neon: {
    id: 'neon',
    label: { 'zh-cn': '霓虹', 'en-US': 'Neon' },
    color: '#00FF00',
    description: 'tags.visual.neon.description'
  },
  clean: {
    id: 'clean',
    label: { 'zh-cn': '简洁', 'en-US': 'Clean' },
    color: '#F5F5F5',
    description: 'tags.visual.clean.description'
  },
  animated: {
    id: 'animated',
    label: { 'zh-cn': '动画', 'en-US': 'Animated' },
    color: '#FF1493',
    description: 'tags.visual.animated.description'
  },
  gradient: {
    id: 'gradient',
    label: { 'zh-cn': '渐变', 'en-US': 'Gradient' },
    color: '#FF6347',
    description: 'tags.visual.gradient.description'
  },
  translucent: {
    id: 'translucent',
    label: { 'zh-cn': '半透明', 'en-US': 'Translucent' },
    color: '#87CEEB',
    description: 'tags.visual.translucent.description'
  },
  natural: {
    id: 'natural',
    label: { 'zh-cn': '自然', 'en-US': 'Natural' },
    color: '#8FBC8F',
    description: 'tags.visual.natural.description'
  }
};

/**
 * 次級标籤定義 - 技術手法
 * Secondary Tags - Technical Approach
 */
export const technicalTags = {
  effectDriven: {
    id: 'effectDriven',
    label: { 'zh-cn': '效果驱动', 'en-US': 'Effect-driven' },
    color: '#9C27B0',
    description: 'tags.technical.effectDriven.description'
  },
  aiPowered: {
    id: 'aiPowered',
    label: { 'zh-cn': 'AI驱动', 'en-US': 'AI-powered' },
    color: '#673AB7',
    description: 'tags.technical.aiPowered.description'
  },
  motionBased: {
    id: 'motionBased',
    label: { 'zh-cn': '动效驱动', 'en-US': 'Motion-based' },
    color: '#FF5722',
    description: 'tags.technical.motionBased.description'
  },
  dataDriven: {
    id: 'dataDriven',
    label: { 'zh-cn': '数据驱动', 'en-US': 'Data-driven' },
    color: '#009688',
    description: 'tags.technical.dataDriven.description'
  },
  codeHeavy: {
    id: 'codeHeavy',
    label: { 'zh-cn': '技术复杂', 'en-US': 'Code-heavy' },
    color: '#607D8B',
    description: 'tags.technical.codeHeavy.description'
  },
  themeVariant: {
    id: 'themeVariant',
    label: { 'zh-cn': '主题变体', 'en-US': 'Theme Variant' },
    color: '#795548',
    description: 'tags.technical.themeVariant.description'
  },
  experimental: {
    id: 'experimental',
    label: { 'zh-cn': '实验性', 'en-US': 'Experimental' },
    color: '#E91E63',
    description: 'tags.technical.experimental.description'
  }
};

/**
 * 次級标籤定義 - 使用場景
 * Secondary Tags - Use Cases
 */
export const useCaseTags = {
  enterprise: {
    id: 'enterprise',
    label: { 'zh-cn': '企业应用', 'en-US': 'Enterprise' },
    color: '#34495E',
    description: 'tags.useCase.enterprise.description'
  },
  creative: {
    id: 'creative',
    label: { 'zh-cn': '创意展示', 'en-US': 'Creative' },
    color: '#E91E63',
    description: 'tags.useCase.creative.description'
  },
  ecommerce: {
    id: 'ecommerce',
    label: { 'zh-cn': '电商零售', 'en-US': 'E-commerce' },
    color: '#4CAF50',
    description: 'tags.useCase.ecommerce.description'
  },
  gaming: {
    id: 'gaming',
    label: { 'zh-cn': '游戏娱乐', 'en-US': 'Gaming' },
    color: '#FF9800',
    description: 'tags.useCase.gaming.description'
  },
  content: {
    id: 'content',
    label: { 'zh-cn': '内容媒体', 'en-US': 'Content' },
    color: '#00BCD4',
    description: 'tags.useCase.content.description'
  },
  saas: {
    id: 'saas',
    label: { 'zh-cn': 'SaaS产品', 'en-US': 'SaaS' },
    color: '#3F51B5',
    description: 'tags.useCase.saas.description'
  }
};

/**
 * 所有标籤集合
 * All Tags Collection
 */
export const allTags = {
  era: eraTags,
  visual: visualTags,
  technical: technicalTags,
  useCase: useCaseTags
};

/**
 * 分类 ID 別名映射
 * Category ID alias mapping
 * 處理不同命名約定之間的映射（例如 'visual' -> 'visualDesign'）
 */
const categoryAliasMap = {
  'visual': 'visualDesign',
  'visualDesign': 'visualDesign'
};

/**
 * 統一標籤翻譯映射表
 * Unified Tag Translation Mapping
 * 用於處理所有在 styleTagsMapping.js 中使用但在主標籤分類中未定義的標籤
 */
export const universalTagTranslations = {
  // Visual characteristics (already in visualTags, but adding fallbacks)
  flat: { 'zh-cn': '扁平化', 'en-US': 'Flat' },
  depth: { 'zh-cn': '立体深度', 'en-US': 'Depth' },
  bold: { 'zh-cn': '粗犷大胆', 'en-US': 'Bold' },
  minimal: { 'zh-cn': '极简主义', 'en-US': 'Minimal' },
  colorful: { 'zh-cn': '多彩缤纷', 'en-US': 'Colorful' },
  organic: { 'zh-cn': '有机流动', 'en-US': 'Organic' },
  geometric: { 'zh-cn': '几何规整', 'en-US': 'Geometric' },
  neon: { 'zh-cn': '霓虹', 'en-US': 'Neon' },
  clean: { 'zh-cn': '简洁', 'en-US': 'Clean' },
  animated: { 'zh-cn': '动画', 'en-US': 'Animated' },
  gradient: { 'zh-cn': '渐变', 'en-US': 'Gradient' },
  translucent: { 'zh-cn': '半透明', 'en-US': 'Translucent' },
  natural: { 'zh-cn': '自然', 'en-US': 'Natural' },
  vibrant: { 'zh-cn': '鲜艳', 'en-US': 'Vibrant' },
  transparent: { 'zh-cn': '透明', 'en-US': 'Transparent' },
  textured: { 'zh-cn': '纹理', 'en-US': 'Textured' },
  soft: { 'zh-cn': '柔和', 'en-US': 'Soft' },

  // Era and style characteristics
  retro: { 'zh-cn': '复古怀旧', 'en-US': 'Retro' },
  contemporary: { 'zh-cn': '当代流行', 'en-US': 'Contemporary' },
  futuristic: { 'zh-cn': '未来前沿', 'en-US': 'Futuristic' },
  vintage: { 'zh-cn': '复古', 'en-US': 'Vintage' },
  classic: { 'zh-cn': '经典', 'en-US': 'Classic' },
  timeless: { 'zh-cn': '永恒', 'en-US': 'Timeless' },
  nostalgic: { 'zh-cn': '怀旧', 'en-US': 'Nostalgic' },
  modern: { 'zh-cn': '现代', 'en-US': 'Modern' },

  // Use cases and purposes
  creative: { 'zh-cn': '创意展示', 'en-US': 'Creative' },
  enterprise: { 'zh-cn': '企业应用', 'en-US': 'Enterprise' },
  ecommerce: { 'zh-cn': '电商零售', 'en-US': 'E-commerce' },
  gaming: { 'zh-cn': '游戏娱乐', 'en-US': 'Gaming' },
  content: { 'zh-cn': '内容媒体', 'en-US': 'Content' },
  saas: { 'zh-cn': 'SaaS产品', 'en-US': 'SaaS' },
  professional: { 'zh-cn': '专业应用', 'en-US': 'Professional' },
  playful: { 'zh-cn': '趣味', 'en-US': 'Playful' },
  elegant: { 'zh-cn': '优雅', 'en-US': 'Elegant' },
  artistic: { 'zh-cn': '艺术', 'en-US': 'Artistic' },

  // Specific style names and themes
  cyberpunk: { 'zh-cn': '赛博朋克', 'en-US': 'Cyberpunk' },
  vaporwave: { 'zh-cn': '蒸汽波', 'en-US': 'Vaporwave' },
  brutalism: { 'zh-cn': '粗野主义', 'en-US': 'Brutalism' },
  brutalist: { 'zh-cn': '粗野主义', 'en-US': 'Brutalist' },
  brutal: { 'zh-cn': '粗野', 'en-US': 'Brutal' },
  industrial: { 'zh-cn': '工业', 'en-US': 'Industrial' },
  tech: { 'zh-cn': '科技', 'en-US': 'Tech' },
  technical: { 'zh-cn': '技术', 'en-US': 'Technical' },
  skeuomorphism: { 'zh-cn': '拟物化', 'en-US': 'Skeuomorphism' },
  skeuomorphic: { 'zh-cn': '拟物化', 'en-US': 'Skeuomorphic' },
  claymorphism: { 'zh-cn': '黏土态', 'en-US': 'Claymorphism' },
  clay: { 'zh-cn': '黏土', 'en-US': 'Clay' },
  glass: { 'zh-cn': '玻璃态', 'en-US': 'Glass' },
  frosted: { 'zh-cn': '毛玻璃', 'en-US': 'Frosted' },
  minimalism: { 'zh-cn': '极简主义', 'en-US': 'Minimalism' },
  typography: { 'zh-cn': '排版', 'en-US': 'Typography' },
  editorial: { 'zh-cn': '编辑', 'en-US': 'Editorial' },
  newspaper: { 'zh-cn': '报纸', 'en-US': 'Newspaper' },
  print: { 'zh-cn': '印刷', 'en-US': 'Print' },
  scandi: { 'zh-cn': '北欧', 'en-US': 'Scandi' },

  // Technical and effect-driven
  effectDriven: { 'zh-cn': '效果驱动', 'en-US': 'Effect-driven' },
  effect: { 'zh-cn': '效果', 'en-US': 'Effect' },
  motionBased: { 'zh-cn': '动效驱动', 'en-US': 'Motion-based' },
  motion: { 'zh-cn': '动效', 'en-US': 'Motion' },
  animation: { 'zh-cn': '动画', 'en-US': 'Animation' },
  dataDriven: { 'zh-cn': '数据驱动', 'en-US': 'Data-driven' },
  codeHeavy: { 'zh-cn': '技术复杂', 'en-US': 'Code-heavy' },
  experimental: { 'zh-cn': '实验性', 'en-US': 'Experimental' },
  interactive: { 'zh-cn': '交互', 'en-US': 'Interactive' },
  aiPowered: { 'zh-cn': 'AI驱动', 'en-US': 'AI-powered' },
  generative: { 'zh-cn': '生成式', 'en-US': 'Generative' },

  // Nature and organic elements
  biophilic: { 'zh-cn': '生物相关', 'en-US': 'Biophilic' },
  nature: { 'zh-cn': '自然', 'en-US': 'Nature' },
  flora: { 'zh-cn': '植物', 'en-US': 'Flora' },
  wave: { 'zh-cn': '波浪', 'en-US': 'Wave' },
  particle: { 'zh-cn': '粒子', 'en-US': 'Particle' },
  liquid: { 'zh-cn': '液体', 'en-US': 'Liquid' },
  smoke: { 'zh-cn': '烟雾', 'en-US': 'Smoke' },

  // Color and appearance
  dark: { 'zh-cn': '深色', 'en-US': 'Dark' },
  color: { 'zh-cn': '彩色', 'en-US': 'Color' },
  bw: { 'zh-cn': '黑白', 'en-US': 'Black & White' },
  monochrome: { 'zh-cn': '单色', 'en-US': 'Monochrome' },
  duotone: { 'zh-cn': '双色', 'en-US': 'Duotone' },
  rainbow: { 'zh-cn': '彩虹', 'en-US': 'Rainbow' },
  warm: { 'zh-cn': '暖色', 'en-US': 'Warm' },
  calm: { 'zh-cn': '平静', 'en-US': 'Calm' },
  light: { 'zh-cn': '明亮', 'en-US': 'Light' },
  mono: { 'zh-cn': '单色', 'en-US': 'Mono' },

  // Shape and form
  rounded: { 'zh-cn': '圆润', 'en-US': 'Rounded' },
  sharp: { 'zh-cn': '锐利', 'en-US': 'Sharp' },
  shadow: { 'zh-cn': '阴影', 'en-US': 'Shadow' },
  bento: { 'zh-cn': '便当盒', 'en-US': 'Bento' },
  layered: { 'zh-cn': '分层', 'en-US': 'Layered' },
  glow: { 'zh-cn': '发光', 'en-US': 'Glow' },

  // Font and text characteristics
  serif: { 'zh-cn': '衬线', 'en-US': 'Serif' },
  monospace: { 'zh-cn': '等宽', 'en-US': 'Monospace' },
  script: { 'zh-cn': '手写体', 'en-US': 'Script' },
  handwritten: { 'zh-cn': '手写', 'en-US': 'Handwritten' },

  // Specific design styles
  arcade: { 'zh-cn': '街机', 'en-US': 'Arcade' },
  crt: { 'zh-cn': 'CRT', 'en-US': 'CRT' },
  pixel: { 'zh-cn': '像素', 'en-US': 'Pixel' },
  pixelArt: { 'zh-cn': '像素艺术', 'en-US': 'Pixel Art' },
  digital: { 'zh-cn': '数字', 'en-US': 'Digital' },
  sketch: { 'zh-cn': '素描', 'en-US': 'Sketch' },
  paperCutout: { 'zh-cn': '纸切艺术', 'en-US': 'Paper Cutout' },
  memphis: { 'zh-cn': '孟菲斯', 'en-US': 'Memphis' },
  kawaii: { 'zh-cn': '可爱', 'en-US': 'Kawaii' },
  glassmorphic: { 'zh-cn': '玻璃态', 'en-US': 'Glassmorphic' },
  claymation: { 'zh-cn': '黏土动画', 'en-US': 'Claymation' },
  hud: { 'zh-cn': 'HUD', 'en-US': 'HUD' },
  immersive: { 'zh-cn': '沉浸式', 'en-US': 'Immersive' },
  liminal: { 'zh-cn': '异空间', 'en-US': 'Liminal' },
  kinetic: { 'zh-cn': '动态', 'en-US': 'Kinetic' },

  // Brand and accessibility
  brand: { 'zh-cn': '品牌', 'en-US': 'Brand' },
  accessible: { 'zh-cn': '无障碍', 'en-US': 'Accessible' },

  // Additional descriptors
  simple: { 'zh-cn': '简单', 'en-US': 'Simple' },
  complex: { 'zh-cn': '复杂', 'en-US': 'Complex' },
  dramatic: { 'zh-cn': '戏剧性', 'en-US': 'Dramatic' },
  dreamlike: { 'zh-cn': '梦幻', 'en-US': 'Dreamlike' },
  friendly: { 'zh-cn': '友好', 'en-US': 'Friendly' },
  business: { 'zh-cn': '商务', 'en-US': 'Business' },
  corporate: { 'zh-cn': '企业', 'en-US': 'Corporate' },
  authoritative: { 'zh-cn': '权威', 'en-US': 'Authoritative' },
  education: { 'zh-cn': '教育', 'en-US': 'Education' },
  travel: { 'zh-cn': '旅游', 'en-US': 'Travel' },
  workspace: { 'zh-cn': '工作区', 'en-US': 'Workspace' },
  aesthetic: { 'zh-cn': '美学', 'en-US': 'Aesthetic' },
  strong: { 'zh-cn': '强大', 'en-US': 'Strong' },
  tactile: { 'zh-cn': '触觉', 'en-US': 'Tactile' },
  fabric: { 'zh-cn': '织物', 'en-US': 'Fabric' },
  paper: { 'zh-cn': '纸张', 'en-US': 'Paper' },
  art: { 'zh-cn': '艺术', 'en-US': 'Art' },
  aurora: { 'zh-cn': '极光', 'en-US': 'Aurora' },
  holographic: { 'zh-cn': '全息', 'en-US': 'Holographic' },
  leather: { 'zh-cn': '皮革', 'en-US': 'Leather' },
  texture: { 'zh-cn': '纹理', 'en-US': 'Texture' },
  grain: { 'zh-cn': '谷物', 'en-US': 'Grain' },
  grid: { 'zh-cn': '网格', 'en-US': 'Grid' },
  scroll: { 'zh-cn': '滚动', 'en-US': 'Scroll' },
  object: { 'zh-cn': '对象', 'en-US': 'Object' },
  string: { 'zh-cn': '字符串', 'en-US': 'String' },
  harmonious: { 'zh-cn': '和谐', 'en-US': 'Harmonious' },
  luxury: { 'zh-cn': '奢华', 'en-US': 'Luxury' },
  maximalism: { 'zh-cn': '极大主义', 'en-US': 'Maximalism' },
  new: { 'zh-cn': '新颖', 'en-US': 'New' },
  traditional: { 'zh-cn': '传统', 'en-US': 'Traditional' },
  utilitarian: { 'zh-cn': '实用主义', 'en-US': 'Utilitarian' },
  informal: { 'zh-cn': '非正式', 'en-US': 'Informal' },
  game: { 'zh-cn': '游戏', 'en-US': 'Game' },
  future: { 'zh-cn': '未来', 'en-US': 'Future' },
  academic: { 'zh-cn': '学术', 'en-US': 'Academic' },
  interaction: { 'zh-cn': '交互', 'en-US': 'Interaction' },
  material: { 'zh-cn': '材质', 'en-US': 'Material' },
  layout: { 'zh-cn': '布局', 'en-US': 'Layout' },
  core: { 'zh-cn': '核心', 'en-US': 'Core' },
  visual: { 'zh-cn': '视觉', 'en-US': 'Visual' }
};

/**
 * 獲取标籤颜色
 * Get tag color by tag ID
 */
export const getTagColor = (tagId) => {
  for (const category of Object.values(allTags)) {
    if (category[tagId]) {
      return category[tagId].color;
    }
  }
  return '#95A5A6'; // 默認灰色
};

/**
 * 獲取标籤标籤
 * Get tag label by tag ID and language
 * 優先順序：
 * 1. universalTagTranslations（統一翻譯表）
 * 2. i18n 檔案翻譯
 * 3. allTags 中的預設值
 * 4. 原始 tagId
 */
export const getTagLabel = (tagId, language = 'zh-cn') => {
  // 將語言代碼標準化為小寫，以支持 'zh-CN' 和 'zh-cn'
  const normalizedLang = language.toLowerCase() === 'en-us' ? 'en-US' : 'zh-cn';

  // 1️⃣ 優先使用統一標籤翻譯表
  if (universalTagTranslations[tagId]) {
    return universalTagTranslations[tagId][normalizedLang] || universalTagTranslations[tagId]['zh-cn'];
  }

  // 2️⃣ 嘗試從 i18n 檔案獲取翻譯
  let categoryName = null;
  for (const [catName, category] of Object.entries(allTags)) {
    if (category[tagId]) {
      categoryName = catName;
      break;
    }
  }

  if (categoryName) {
    const i18nKey = `tags.${categoryName}.${tagId}.label`;
    const i18nLabel = getTranslation(i18nKey, language);

    if (i18nLabel && i18nLabel !== i18nKey && typeof i18nLabel === 'string') {
      return i18nLabel;
    }
  }

  // 3️⃣ 使用 allTags 中的預設值
  if (categoryName) {
    const category = allTags[categoryName];
    if (category && category[tagId]) {
      return category[tagId].label[normalizedLang] || category[tagId].label['zh-cn'];
    }
  }

  // 4️⃣ 返回原始 tagId
  return tagId;
};

/**
 * 獲取主分类配置
 * Get primary category configuration
 */
export const getCategoryConfig = (categoryId) => {
  // 處理分类 ID 別名映射
  const normalizedCategoryId = categoryAliasMap[categoryId] || categoryId;
  return primaryCategories[normalizedCategoryId] || primaryCategories[categoryId] || null;
};

/**
 * 獲取所有主分类（按順序）
 * Get all primary categories (ordered)
 */
export const getAllPrimaryCategories = () => {
  return Object.values(primaryCategories).sort((a, b) => a.order - b.order);
};

/**
 * 獲取分类标籤
 * Get category label by category ID and language
 * 优先从 i18n 档案獲取翻譯，如果沒有則使用 categoryMetadata.js 的預设值
 */
export const getCategoryLabel = (categoryId, language = 'zh-cn') => {
  // 處理分类 ID 別名映射
  const normalizedCategoryId = categoryAliasMap[categoryId] || categoryId;
  const category = primaryCategories[normalizedCategoryId];
  
  // 先嘗試从 i18n 档案的 nav 区塊獲取翻譯（优先使用原始 ID，然後嘗試标準化 ID）
  let i18nKey = `nav.${categoryId}`;
  let i18nLabel = getTranslation(i18nKey, language);
  
  // 如果原始 ID 沒有找到翻譯，嘗試使用标準化 ID
  if (!i18nLabel || i18nLabel === i18nKey || typeof i18nLabel !== 'string') {
    i18nKey = `nav.${normalizedCategoryId}`;
    i18nLabel = getTranslation(i18nKey, language);
  }
  
  // 如果 i18n 档案中有翻譯，使用它
  if (i18nLabel && i18nLabel !== i18nKey && typeof i18nLabel === 'string') {
    return i18nLabel;
  }
  
  // 如果找不到分类，嘗試直接使用原始 ID
  if (!category) {
    const fallbackCategory = primaryCategories[categoryId];
    if (!fallbackCategory) {
      // 如果還是找不到，返回原始 ID（可能是一個有效的分类但未在 primaryCategories 中定義）
      return categoryId;
    }
    // 使用 fallback category 的預设值
    return fallbackCategory.label[language] || fallbackCategory.label['zh-cn'];
  }
  
  // 否則使用 categoryMetadata.js 的預设值
  return category.label[language] || category.label['zh-cn'];
};
