// 風格工具函数
// 用於風格数据查找、預覽內容提取和相关風格推薦

import { getAllStyles } from '../data';

// 將任何輸入安全轉為字串，避免後續 .match/.test 因型別错誤
const ensureString = (v) => {
  if (v == null) return '';
  if (Array.isArray(v)) return v.join('');
  return (typeof v === 'string') ? v : String(v);
};

/**
 * 生成風格預覽页面的 URL
 * @param {string} styleId - 風格的唯一識別符
 * @returns {string} 預覽页面 URL
 */
export const getStylePreviewUrl = (styleId) => {
  // ⭐ DEBUG: 驗證輸入的 styleId
  console.log(`[getStylePreviewUrl] Input: "${styleId}" (${styleId?.length} chars)`);

  if (!styleId) return '/styles';

  // 確保 styleId 是 URL-safe 的
  const safeStyleId = encodeURIComponent(styleId);
  console.log(`[getStylePreviewUrl] Encoded: "${safeStyleId}"`);
  return `/styles/preview/${safeStyleId}`;
};

/**
 * 从 URL 參数中提取並解碼 styleId
 * @param {string} urlStyleId - 來自 URL 的 styleId
 * @returns {string} 解碼後的 styleId
 */
export const decodeStyleId = (urlStyleId) => {
  if (!urlStyleId) return '';

  try {
    return decodeURIComponent(urlStyleId);
  } catch (error) {
    console.warn('無法解碼 styleId:', urlStyleId, error);
    return urlStyleId;
  }
};

/**
 * 根据 styleId 查找風格数据
 * @param {string} styleId - 風格的唯一識別符
 * @returns {Object|null} 風格数据或 null (如果未找到)
 */
export const findStyleById = (styleId) => {
  if (!styleId) return null;

  const allStyles = getAllStyles();
  return allStyles.find(style => style.id === styleId) || null;
};

/**
 * 獲取風格的預覽內容 (HTML + CSS)
 * @param {Object} style - 風格数据對象
 * @param {string} previewId - 特定預覽 ID (可選，用於多預覽風格)
 * @returns {Object} 包含 html 和 styles 的對象
 */
export const getStylePreviewContent = (style, previewId = null) => {
  if (!style) {
    return {
      html: '<div class="error-message">風格不存在</div>',
      styles: '.error-message { color: red; text-align: center; padding: 50px; }'
    };
  }

  // 如果有指定的 previewId 且風格支持多預覽
  if (previewId && style.previews && style.previews.length > 0) {
    const preview = style.previews.find(p => p.id === previewId);
    if (preview) {
      return {
        html: ensureString(preview.html || extractFullPageContent(style.demoHTML) || style.demoHTML),
        styles: ensureString(preview.styles || style.fullPageStyles || style.customStyles || '')
      };
    }
  }

  // 返回主要的預覽內容
  return {
    html: ensureString(style.fullPageHTML || extractFullPageContent(style.demoHTML) || style.demoHTML),
    styles: ensureString(style.fullPageStyles || style.customStyles || '')
  };
};

/**
 * 獲取風格的預覽內容 (HTML + CSS)
 * @param {Object} style - 風格数据對象
 * @param {string} previewId - 特定預覽 ID (可選，用於多預覽風格)
 * @returns {Object} 包含 html 和 styles 的對象
 */

/**
 * 从 demoHTML 中提取隱藏的完整页面內容
 * @param {string} demoHTML - 卡片展示的 HTML
 * @returns {string|null} 提取的完整页面 HTML 或 null
 */
export const extractFullPageContent = (demoHTML) => {
  if (!demoHTML) return null;

  // 查找隱藏的完整页面內容 (通常有 display: none 樣式)
  const fullPageMatch = demoHTML.match(/<div[^>]*class="[^"]*full-page[^"]*"[^>]*>([\s\S]*?)<\/div>/);

  if (fullPageMatch) {
    // 移除 display: none 樣式
    return fullPageMatch[0].replace(/style="[^"]*display:\s*none[^"]*"/g, '');
  }

  return null;
};
