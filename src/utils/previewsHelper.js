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
 * 检查是否有多個預覽
 *
 * @param {Object[]} previews - 預覽陣列
 * @returns {boolean} 是否有多個預覽
 */
export function hasMultiplePreviews(previews) {
  return Array.isArray(previews) && previews.length > 1;
}
