/**
 * previewsHelper.js - 預覽相关的輔助工具函数
 *
 * 提供标準化的預覽配置管理功能
 */

/**
 * 預覽类型枚舉
 */
export const PreviewType = {
  FULL: 'full',      // 完整页面預覽
  INLINE: 'inline'   // 內嵌区塊預覽
};

/**
 * 創建預覽配置對象
 *
 * @param {Object} options - 預覽選項
 * @param {string} options.id - 唯一标識符
 * @param {string} options.name - 显示名稱
 * @param {string} options.html - HTML 內容
 * @param {string} [options.type='full'] - 預覽类型
 * @param {string} [options.styles=''] - CSS 樣式
 * @param {string} [options.description=''] - 描述 (用於 tooltip)
 * @returns {Object} 标準化的預覽配置對象
 */
export function createPreview(options) {
  if (!options.id) {
    throw new Error('Preview id is required');
  }
  if (!options.name) {
    throw new Error('Preview name is required');
  }
  if (!options.html) {
    throw new Error('Preview html is required');
  }

  return {
    id: options.id,
    name: options.name,
    type: options.type || PreviewType.FULL,
    html: options.html,
    styles: options.styles || '',
    description: options.description || ''
  };
}

/**
 * 驗證預覽配置是否有效
 *
 * @param {Object|Object[]} previews - 預覽配置或配置陣列
 * @returns {boolean} 是否有效
 */
export function validatePreviews(previews) {
  if (!previews) {
    return false;
  }

  // 單個預覽對象
  if (!Array.isArray(previews)) {
    return validateSinglePreview(previews);
  }

  // 預覽陣列
  if (previews.length === 0) {
    return false;
  }

  return previews.every(validateSinglePreview);
}

/**
 * 驗證單個預覽配置
 *
 * @param {Object} preview - 預覽配置
 * @returns {boolean} 是否有效
 */
function validateSinglePreview(preview) {
  if (!preview || typeof preview !== 'object') {
    return false;
  }

  // 必需字段检查
  if (!preview.id || !preview.name || !preview.html) {
    return false;
  }

  // 类型检查
  if (preview.type && !Object.values(PreviewType).includes(preview.type)) {
    console.warn(`Invalid preview type: ${preview.type}. Expected 'full' or 'inline'.`);
    return false;
  }

  return true;
}

/**
 * 从多個預覽中提取特定类型
 *
 * @param {Object[]} previews - 預覽陣列
 * @param {string} type - 預覽类型
 * @returns {Object[]} 篩選後的預覽陣列
 */
export function filterPreviewsByType(previews, type) {
  if (!Array.isArray(previews)) {
    return [];
  }

  return previews.filter(preview => preview.type === type);
}

/**
 * 根据 ID 查找預覽
 *
 * @param {Object[]} previews - 預覽陣列
 * @param {string} id - 預覽 ID
 * @returns {Object|null} 找到的預覽對象或 null
 */
export function findPreviewById(previews, id) {
  if (!Array.isArray(previews) || !id) {
    return null;
  }

  return previews.find(preview => preview.id === id) || null;
}

/**
 * 獲取預覽的索引
 *
 * @param {Object[]} previews - 預覽陣列
 * @param {string} id - 預覽 ID
 * @returns {number} 預覽索引,找不到返回 -1
 */
export function getPreviewIndex(previews, id) {
  if (!Array.isArray(previews) || !id) {
    return -1;
  }

  return previews.findIndex(preview => preview.id === id);
}

/**
 * 批量創建預覽配置
 *
 * @param {Object[]} optionsArray - 預覽選項陣列
 * @returns {Object[]} 标準化的預覽配置陣列
 */
export function createPreviews(optionsArray) {
  if (!Array.isArray(optionsArray)) {
    throw new Error('Expected an array of preview options');
  }

  return optionsArray.map(options => createPreview(options));
}

/**
 * 合併預覽配置
 *
 * @param {Object} preview - 基礎預覽配置
 * @param {Object} overrides - 覆蓋選項
 * @returns {Object} 合併後的預覽配置
 */
export function mergePreview(preview, overrides) {
  if (!validateSinglePreview(preview)) {
    throw new Error('Invalid base preview configuration');
  }

  return {
    ...preview,
    ...overrides,
    // 確保必需字段不被覆蓋為空值
    id: overrides.id || preview.id,
    name: overrides.name || preview.name,
    html: overrides.html || preview.html
  };
}

/**
 * 為預覽添加默認樣式
 *
 * @param {Object[]} previews - 預覽陣列
 * @param {string} defaultStyles - 默認樣式
 * @returns {Object[]} 添加樣式後的預覽陣列
 */
export function addDefaultStyles(previews, defaultStyles) {
  if (!Array.isArray(previews)) {
    return [];
  }

  return previews.map(preview => ({
    ...preview,
    styles: preview.styles || defaultStyles
  }));
}

/**
 * 检查是否有多個預覽
 *
 * @param {Object[]} previews - 預覽陣列
 * @returns {boolean} 是否有多個預覽
 */
export function hasMultiplePreviews(previews) {
  return Array.isArray(previews) && previews.length > 1;
}

/**
 * 獲取預覽的显示名稱
 *
 * @param {Object} preview - 預覽對象
 * @param {number} index - 預覽索引 (作為备選)
 * @param {string} [language='en-US'] - 語言代碼
 * @returns {string} 显示名稱
 */
export function getPreviewDisplayName(preview, index, language = 'en-US') {
  if (!preview) {
    return `Preview ${index + 1}`;
  }

  if (!preview.name) {
    return `P${index + 1}`;
  }

  let result = '';
  
  // 如果 name 是對象（i18n 格式），提取對應語言的文本
  if (typeof preview.name === 'object' && preview.name !== null && !Array.isArray(preview.name)) {
    result = preview.name[language] || preview.name['zh-cn'] || preview.name['en-US'] || '';
  }
  // 如果 name 是字符串，直接返回
  else if (typeof preview.name === 'string') {
    result = preview.name;
  }
  
  // 確保返回值始終是字符串，避免显示 [object Object]
  return String(result || `P${index + 1}`);
}
