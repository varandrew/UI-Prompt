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
  translucent: {
    id: 'translucent',
    label: { 'zh-cn': '半透明', 'en-US': 'Translucent' },
    color: '#1ABC9C',
    description: 'tags.visual.translucent.description'
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
 * 优先从 i18n 档案獲取翻譯，如果沒有則使用 categoryMetadata.js 的預设值
 */
export const getTagLabel = (tagId, language = 'zh-cn') => {
  // 確定标籤屬於哪個类別
  let categoryName = null;
  for (const [catName, category] of Object.entries(allTags)) {
    if (category[tagId]) {
      categoryName = catName;
      break;
    }
  }
  
  if (!categoryName) {
    return tagId;
  }
  
  // 先嘗試从 i18n 档案獲取翻譯
  const i18nKey = `tags.${categoryName}.${tagId}.label`;
  const i18nLabel = getTranslation(i18nKey, language);
  
  // 如果 i18n 档案中有翻譯，使用它
  if (i18nLabel && i18nLabel !== i18nKey && typeof i18nLabel === 'string') {
    return i18nLabel;
  }
  
  // 否則使用 categoryMetadata.js 的預设值
  const category = allTags[categoryName];
  if (category && category[tagId]) {
    return category[tagId].label[language] || category[tagId].label['zh-cn'];
  }
  
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
