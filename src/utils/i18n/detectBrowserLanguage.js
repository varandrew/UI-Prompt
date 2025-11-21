import { LANGUAGES } from './languageConstants';

/**
 * 检測瀏覽器語言並映射到支持的語言代碼
 *
 * 检測邏輯：
 * - 任何中文變体 (zh-TW, zh-CN, zh-HK, zh) → 'zh-CN' (简体中文)
 * - 其他所有語言 → 'en-US' (英文，默認)
 *
 * @returns {string} 'zh-CN' 或 'en-US'
 */
export function detectBrowserLanguage() {
  // 獲取瀏覽器語言设置
  // navigator.language 是主要語言，navigator.userLanguage 用於舊版 IE
  const browserLang = navigator.language || navigator.userLanguage || '';

  // 轉換為小写以便進行不区分大小写的比較
  const normalizedLang = browserLang.toLowerCase();

  // 检查是否為任何中文變体
  // 匹配: zh, zh-CN, zh-TW, zh-HK, zh-SG 等
  if (normalizedLang.startsWith('zh')) {
    return LANGUAGES.ZH_CN;  // 返回 'zh-CN'
  }

  // 其他所有情況默認返回英文
  return LANGUAGES.EN_US;  // 返回 'en-US'
}

/**
 * 獲取所有瀏覽器語言偏好列表
 * 用於調試或未來可能的增強功能
 *
 * @returns {string[]} 語言代碼数組
 */
export function getBrowserLanguages() {
  return navigator.languages || [navigator.language] || ['en-US'];
}
