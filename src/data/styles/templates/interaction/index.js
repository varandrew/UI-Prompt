// Aggregator for Interaction templates (互動風格聚合器)
// 統一从 mouseTracking 子模板匯出分类层級資訊与模板列表
import {
  interactionTemplateStyles,
  name,
  demoUI,
  customStyles,
  description,
} from './mouseTracking'

// 分类名稱 (i18n key)
export { name }

// 用於分类卡片展示的 Demo UI 与樣式
export { demoUI, customStyles }

// 分类描述 (i18n key)
export { description }

// 互動風格模板列表
export { interactionTemplateStyles }

// 預设导出完整模板陣列，与其他風格分类保持一致
export default interactionTemplateStyles

