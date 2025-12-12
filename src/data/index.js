// 统一数据导出文件
// ⚡ 重要變更：不再從 templates/ 直接 import，改用 generated/ JSON 加載
// 這樣可以實現按需加載，減少首屏 bundle 體積

/**
 * 稳定的空数組引用，用於防止 React useMemo 無限循環
 * 使用 Object.freeze() 確保引用永遠不變
 */
const EMPTY_ARRAY = Object.freeze([]);

// ❌ 移除：不再從 templates/ 直接導入風格數據
// import { visualTemplateStyles } from './styles/templates/visual';
// import { layoutTemplateStyles } from './styles/templates/layout';
// import { interactionTemplateStyles } from './styles/templates/interaction';
// import { coreTemplateConfigs } from './styles/templates/core';
// import { retroTemplateStyles, arcadeCRTConfig } from './styles/templates/retro';

// ❌ 移除：組件數據改用 JSON 動態加載（見 components/loaders.js）
// import { navigationComponents } from './components/navigationComponents';
// import { dataDisplayComponents } from './components/dataDisplayComponents';
// import { feedbackComponents } from './components/feedbackComponents';
// import { advancedComponents } from './components/advancedComponents';
// import { inputComponents } from './components/inputComponents';
// import { interactiveComponents } from './components/interactiveComponents';
// import { specialComponents } from './components/specialComponents';
// import { visualEffectsComponents } from './components/visualEffectsComponents';

// 导入 JSON 數據加載器
import {
  loadFamilyManifest,
  loadTemplateManifest,
  loadTemplateContent,
  loadFamilyContent,
  loadTemplatePrompts,
  loadFullFamily,
  parseStyleId
} from './loaders/jsonStyleLoader';

// ============================================
// ⚡ 風格數據現在通過 JSON 異步加載
// 使用 loadStyleCategories() 從 components/loaders.js 獲取
// ============================================

// ❌ 移除：createFamilyCard 和 coreTemplateFamilies（不再需要）
// 這些邏輯已經移到 jsonStyleLoader.js 中處理

// ⚠️ styleCategories 現在是空數組
// 請使用 loadStyleCategories() 異步獲取數據
// 這個空數組僅用於向後兼容，避免舊代碼崩潰
export const styleCategories = [];

// 導出異步加載函數
export { loadStyleCategories } from './components/loaders';

// ⚠️ componentCategories 現在是空數組
// 請使用 loadComponentCategories() 異步獲取數據
// 這個空數組僅用於向後兼容，避免舊代碼崩潰
export const componentCategories = [];

// 導出異步加載函數
export { loadComponentCategories } from './components/loaders';

// 获取所有风格数据 (扁平化数组)
// ⚠️ 這個函數現在是異步的
export const getAllStyles = async () => {
  const { loadStyleCategories } = await import('./components/loaders');
  const categories = await loadStyleCategories();
  return categories.flatMap(category =>
    (category.data || []).map(item => ({
      ...item,
      category: category.id,
      categoryKey: category.key,
      previews: item.previews || EMPTY_ARRAY
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
// ⚠️ 這個函數現在是異步的
export const getStylesStats = async () => {
  const { loadStyleCategories } = await import('./components/loaders');
  const categories = await loadStyleCategories();
  return {
    total: categories.reduce((sum, cat) => sum + (cat.data?.length || 0), 0),
    categories: categories.map(cat => ({
      id: cat.id,
      key: cat.key,
      count: cat.data?.length || 0,
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

// ============================================
// 新增：JSON 架構異步加載函數
// ============================================

/**
 * 異步加載風格數據（從 JSON 架構）
 * @param {string} styleId - 風格 ID
 * @returns {Promise<Object>} 風格數據對象
 */
export async function loadStyleFromJSON(styleId) {
  const { category, familyId, templateId } = parseStyleId(styleId);

  if (!category || !familyId) {
    console.warn(`無效的 styleId: ${styleId}`);
    return null;
  }

  try {
    // 加載 Family
    const family = await loadFullFamily(category, familyId);
    if (!family) return null;

    // 如果有 templateId，找到對應的 template
    if (templateId) {
      const template = family.templates?.find(t => t.id === templateId || t.id === styleId);
      if (template) {
        return {
          ...family,
          ...template,
          templates: family.templates,
          previews: family.previews  // ⭐ 保留 family 的 previews（用於顯示預覽切換器）
        };
      }
    }

    return family;
  } catch (error) {
    console.error(`加載風格失敗: ${styleId}`, error);
    return null;
  }
}

/**
 * 從現有數據中查找風格（異步，使用 JSON 加載）
 * @param {string} styleId - 風格 ID
 * @returns {Promise<Object|null>} 風格數據對象
 */
export async function findStyleById(styleId) {
  const allStyles = await getAllStyles();

  // 1. 直接匹配 ID
  let style = allStyles.find(s => s.id === styleId);
  if (style) {
    return style;
  }

  // 2. 在 templates 中查找
  for (const s of allStyles) {
    if (s.templates) {
      const template = s.templates.find(t => t.id === styleId);
      if (template) {
        return {
          ...s,
          ...template,
          parentId: s.id,
          parentTitle: s.title
        };
      }
    }
  }

  // 3. 在 previews 中查找
  for (const s of allStyles) {
    if (s.previews) {
      const preview = s.previews.find(p => p.id === styleId);
      if (preview) {
        return {
          ...s,
          ...preview,
          parentId: s.id,
          parentTitle: s.title,
          isPreview: true
        };
      }
    }
  }

  return null;
}

/**
 * 混合加載：優先使用 JSON 加載，findStyleById 作為備選
 * ⚡ 新架構：JSON 是主要數據源
 * @param {string} styleId - 風格 ID
 * @returns {Promise<Object>} 風格數據對象
 */
export async function loadStyleHybrid(styleId) {
  // 1. 優先嘗試 JSON 加載
  try {
    const jsonStyle = await loadStyleFromJSON(styleId);
    if (jsonStyle && (jsonStyle.demoHTML || jsonStyle.fullPageHTML)) {
      return jsonStyle;
    }
  } catch (error) {
    console.warn(`JSON 加載失敗 (${styleId}):`, error.message);
  }

  // 2. 嘗試從緩存的 styleCategories 查找
  try {
    const cachedStyle = await findStyleById(styleId);
    if (cachedStyle && (cachedStyle.demoHTML || cachedStyle.fullPageHTML)) {
      return cachedStyle;
    }
  } catch (error) {
    console.warn(`緩存查找失敗 (${styleId}):`, error.message);
  }

  // 3. 都失敗了
  console.warn(`無法找到風格: ${styleId}`);
  return null;
}

// 導出加載器函數以供其他模塊使用
export {
  loadFamilyManifest,
  loadTemplateManifest,
  loadTemplateContent,
  loadFamilyContent,
  loadTemplatePrompts,
  loadFullFamily,
  parseStyleId
};
