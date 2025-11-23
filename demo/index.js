// Aggregator for core templates
import skeuomorphismTemplates, { name as skeuomorphismName } from './skeuomorphism'
import flatDesignTemplates, { name as flatDesignName } from './flatDesign'
import materialDesignTemplates, { name as materialDesignName } from './materialDesign'
import minimalismTemplates, { name as minimalismName } from './minimalism'

// 供其他模組按「設計流派」分組使用（如 4 張核心卡片）
export { skeuomorphismTemplates, flatDesignTemplates, materialDesignTemplates, minimalismTemplates }

// Export name constants for style card names
export { 
  skeuomorphismName, 
  flatDesignName, 
  materialDesignName, 
  minimalismName 
}

// 預設仍提供展平後的模板列表，方便需要逐一展示模板的場景
export const coreTemplateStyles = [
  ...skeuomorphismTemplates,
  ...flatDesignTemplates,
  ...materialDesignTemplates,
  ...minimalismTemplates,
]

export default coreTemplateStyles
