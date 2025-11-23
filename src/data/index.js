// 统一数据导出文件
// 这个文件聚合所有风格和组件数据,提供给新的菜单页面使用

/**
 * 稳定的空数組引用，用於防止 React useMemo 無限循環
 * 使用 Object.freeze() 確保引用永遠不變
 */
const EMPTY_ARRAY = Object.freeze([]);

// 导入風格数据 (只使用 7 個核心分类)
import {
  visualTemplateStyles
} from './styles/templates/visual';
import {
  layoutTemplateStyles
} from './styles/templates/layout';
import {
  interactionTemplateStyles
} from './styles/templates/interaction';

// ✨ 統一匯入 core templates 配置陣列
import { coreTemplateConfigs } from './styles/templates/core';
import { retroTemplateStyles, arcadeCRTConfig } from './styles/templates/retro';



// 导入組件数据 (新路徑: components/)
import { navigationComponents } from './components/navigationComponents';
import { formComponents } from './components/formComponents';
import { dataDisplayComponents } from './components/dataDisplayComponents';
import { feedbackComponents } from './components/feedbackComponents';
import { advancedComponents } from './components/advancedComponents';
import { inputComponents } from './components/inputComponents';
import { interactiveComponents } from './components/interactiveComponents';
import { specialComponents } from './components/specialComponents';
import { visualEffectsComponents } from './components/visualEffectsComponents';

// 导入标籤增強系統 (新路徑: metadata/)
import { enhanceStyles } from './metadata/styleTagsMapping';

// 將 core templates 依「设計流派」聚合為核心卡片
// 使用专門的 demoUI, customStyles, description, customPrompt 导出（而非第一個模板）
const createFamilyCard = (familyId, name, demoUI, customStyles, description, customPrompt, templatesArray) => {
  // 收集所有模板的预览项
  const allPreviews = [];

  if (templatesArray && templatesArray.length > 0) {
    templatesArray.forEach((template) => {
      // 如果模板有 previews 数组，展开所有预览项
      if (template.previews && Array.isArray(template.previews) && template.previews.length > 0) {
        allPreviews.push(...template.previews);
      }
      // 如果模板没有 previews 但有 fullPageHTML，创建一个预览项
      // this condition should be removed in the future
      else if (template.fullPageHTML) {
        allPreviews.push({
          id: template.id,
          // 確保 name 是字符串（i18n key 會被 PreviewSelector 翻譯）
          name: typeof template.title === 'string' ? template.title : (template.title?.['zh-CN'] || template.title?.['en-US'] || template.id),
          // 如果 description 是 i18n key，也保持為字符串格式
          description: typeof template.description === 'string' ? template.description : (template.description?.['zh-CN'] || template.description?.['en-US'] || ''),
          type: 'full',
          html: template.fullPageHTML,
          styles: template.fullPageStyles,
          // 將模板級的 Prompt 信息一併掛載到預覽上，方便 Preview 使用
          customPrompt: template.customPrompt,
          stylePrompt: template.stylePrompt,
        });
      }
    });
  }

  return {
    id: familyId,
    title: name,
    description: description,
    demoHTML: demoUI,
    customStyles: customStyles,
    customPrompt: customPrompt,  // ✨ 使用 family 級別的 customPrompt
    // 保留模板数組以供預覽和詳細页面使用
    templates: templatesArray || [],
    // 合并所有预览项
    previews: allPreviews.length > 0 ? allPreviews : undefined,
    // 如果有第一個模板，繼承其他屬性（如 fullPageHTML, stylePrompt 等）
    ...(templatesArray && templatesArray[0] ? {
      fullPageHTML: templatesArray[0].fullPageHTML,
      fullPageStyles: templatesArray[0].fullPageStyles,
      demoBoxClass: templatesArray[0].demoBoxClass,
      demoBoxStyle: templatesArray[0].demoBoxStyle,
      stylePrompt: templatesArray[0].stylePrompt,      // ✨ 繼承風格 Prompt（詳細版）
      // ❌ 移除：customPrompt: templatesArray[0].customPrompt（改用 family 級別）
    } : {})
  };
};

// 創建分类首卡（用於展示該分类的 demo UI）
// const createCategoryCard = (categoryId, name, demoUI, customStyles, description) => {
//   return {
//     id: `${categoryId}-demo`,
//     title: name,
//     description: description,
//     demoHTML: demoUI,
//     customStyles: customStyles,
//     // 标記為分类首卡
//     isCategoryCard: true,
//   };
// };

// 將 core templates 依「设計流派」聚合為核心卡片
// 使用資料結構來简化創建過程
const coreTemplateFamilies = coreTemplateConfigs.map(config =>
  createFamilyCard(
    config.id,
    config.name,
    config.demoUI,
    config.customStyles,
    config.description,
    config.customPrompt,  // ✨ 傳遞 family 級別的 customPrompt
    config.templates
  )
);

// 风格分类配置 (7 個核心分类)
export const styleCategories = [
  {
    id: 'core',
    key: 'core',
    path: '/',
    data: enhanceStyles(coreTemplateFamilies),
    icon: ''
  },
  {
    id: 'visual',
    key: 'visual',
    path: '/styles/visual',
    // ✅ 已包含 modern, visualTech, kawaii, saaS 等所有視覺風格
    data: enhanceStyles([
      ...visualTemplateStyles
    ]),
    icon: ''
  },
  {
    id: 'retro',
    key: 'retro',
    path: '/styles/retro',
    // ✅ 已包含 arcade, darkAcademia, trending2025 等所有復古風格
    data: enhanceStyles([
      ...retroTemplateStyles,
      // ✨ arcadeCRT 家族卡片（类似 core 風格）
      createFamilyCard(
        arcadeCRTConfig.id,
        arcadeCRTConfig.name,
        arcadeCRTConfig.demoUI,
        arcadeCRTConfig.customStyles,
        arcadeCRTConfig.description,
        arcadeCRTConfig.customPrompt,
        arcadeCRTConfig.templates
      )
    ]),
    icon: ''
  },
  {
    id: 'layout',
    key: 'layout',
    path: '/layouts',
    data: enhanceStyles([
      ...layoutTemplateStyles
    ]),
    icon: '📐'
  },
  {
    id: 'interaction',
    key: 'interaction',
    path: '/interactions',
    data: enhanceStyles([
      ...interactionTemplateStyles
    ]),
    icon: ''
  }
];

// 组件分类配置
export const componentCategories = [
  {
    id: 'navigation',
    key: 'navigation',
    path: '/components/navigation',
    data: navigationComponents,
    icon: ''
  },
  {
    id: 'forms',
    key: 'forms',
    path: '/components/forms',
    data: formComponents,
    icon: ''
  },
  {
    id: 'dataDisplay',
    key: 'dataDisplay',
    path: '/components/data',
    data: dataDisplayComponents,
    icon: ''
  },
  {
    id: 'feedback',
    key: 'feedback',
    path: '/components/feedback',
    data: feedbackComponents,
    icon: ''
  },
  {
    id: 'advanced',
    key: 'advanced',
    path: '/components/advanced',
    data: advancedComponents,
    icon: ''
  },
  {
    id: 'input',
    key: 'inputEnhanced',
    path: '/components/input',
    data: inputComponents,
    icon: ''
  },
  {
    id: 'interactive',
    key: 'interactive',
    path: '/components/interactive',
    data: interactiveComponents,
    icon: ''
  },
  {
    id: 'special',
    key: 'specialViews',
    path: '/components/special',
    data: specialComponents,
    icon: ''
  },
  {
    id: 'visualEffects',
    key: 'visualEffects',
    path: '/components/visual-effects',
    data: visualEffectsComponents,
    icon: '✨'
  }
];

// 获取所有风格数据 (扁平化数组)
export const getAllStyles = () => {
  return styleCategories.flatMap(category =>
    category.data.map(item => ({
      ...item,
      category: category.id,
      categoryKey: category.key,
      previews: item.previews || EMPTY_ARRAY  // ✨ 統一添加默認值，防止 useMemo 無限循環
    }))
  );
};

// 获取所有组件数据 (扁平化数组)
export const getAllComponents = () => {
  return componentCategories.flatMap(category =>
    category.data.map(item => ({
      ...item,
      category: category.id,
      categoryKey: category.key,
      previews: item.previews || EMPTY_ARRAY  // ✨ 統一添加默認值，保持一致性
    }))
  );
};

// 获取风格统计信息
export const getStylesStats = () => {
  return {
    total: styleCategories.reduce((sum, cat) => sum + cat.data.length, 0),
    categories: styleCategories.map(cat => ({
      id: cat.id,
      key: cat.key,
      count: cat.data.length,
      icon: cat.icon
    }))
  };
};

// 获取组件统计信息
export const getComponentsStats = () => {
  return {
    total: componentCategories.reduce((sum, cat) => sum + cat.data.length, 0),
    categories: componentCategories.map(cat => ({
      id: cat.id,
      key: cat.key,
      count: cat.data.length,
      icon: cat.icon
    }))
  };
};
