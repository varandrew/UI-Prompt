// Demo HTML i18n Helper
// This utility helps translate demo HTML content based on language

import { getTranslation } from './translations.js';
import { DEFAULT_LANGUAGE } from './languageConstants';

/**
 * Replace translation placeholders in demo HTML with actual translations
 * @param {string} html - HTML string with {{key}} placeholders
 * @param {object} translations - Translation key-value pairs
 * @returns {string} - HTML with translations applied
 */
export function interpolateDemoHTML(html, translations) {
  if (!html || !translations) return html;
  
  let result = html;
  Object.entries(translations).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  });
  
  return result;
}

/**
 * Get language-specific demo HTML with i18n support
 * @param {object|string} demoHTML - Either a string or an object with language keys
 * @param {string} language - Current language ('zh-CN' or 'en-US')
 * @returns {string} - Language-specific HTML
 */
export function getDemoHTML(demoHTML, language = DEFAULT_LANGUAGE) {
  // If demoHTML is a string, process it for i18n placeholders
  if (typeof demoHTML === 'string') {
    return processDemoHTMLI18n(demoHTML, language);
  }

  // If demoHTML is an object with language keys, return the appropriate one
  if (typeof demoHTML === 'object' && demoHTML !== null) {
    const langHTML = demoHTML[language] || demoHTML[DEFAULT_LANGUAGE] || '';
    return processDemoHTMLI18n(langHTML, language);
  }

  return '';
}

/**
 * Process demo HTML for i18n placeholders
 * @param {string} html - HTML string with {{t:key}} placeholders and data-i18n attributes
 * @param {string} language - Current language
 * @returns {string} - HTML with translations applied
 */
function processDemoHTMLI18n(html, language) {
  if (!html) return html;

  let result = html;

  // 1. Replace {{t:key}} placeholders with actual translations
  const tRegex = /\{\{t:([^}]+)\}\}/g;
  result = result.replace(tRegex, (match, key) => {
    return getTranslation(key.trim(), language) || match;
  });

  // 2. Process data-i18n attributes
  result = processDataI18nAttributes(result, language);

  return result;
}

/**
 * Process HTML elements with data-i18n attributes
 * @param {string} html - HTML string with data-i18n attributes
 * @param {string} language - Current language
 * @returns {string} - HTML with data-i18n content replaced
 */
function processDataI18nAttributes(html, language) {
  if (!html) return html;

  // 匹配帶有 data-i18n 屬性的标籤及其內容
  // 支持自閉合标籤和帶內容的标籤
  const regex = /<([a-z][a-z0-9]*)\b[^>]*?\bdata-i18n=["']([^"']+)["'][^>]*?(?:>([\s\S]*?)<\/\1>|\/?>)/gi;

  return html.replace(regex, (match, tagName, i18nKey, innerContent) => {
    const translation = getTranslation(i18nKey.trim(), language);

    // 如果找到翻譯,替換內容
    if (translation && translation !== i18nKey) {
      // 如果是自閉合标籤或沒有內容
      if (innerContent === undefined) {
        // 保持原樣(例如 input, button 等可能使用 value 或 placeholder)
        return match;
      }
      // 替換标籤內的文本內容
      const tagWithoutContent = match.substring(0, match.lastIndexOf('>') - innerContent.length - tagName.length - 2);
      return `${tagWithoutContent}>${translation}</${tagName}>`;
    }

    return match;
  });
}

/**
 * Create demo HTML with i18n support
 * @param {object} config - Configuration object
 * @param {string} config.template - HTML template with {{key}} placeholders
 * @param {object} config.translations - Object with language-specific translations
 * @param {string} language - Current language
 * @returns {string} - Translated HTML
 */
export function createDemoHTML({ template, translations }, language = DEFAULT_LANGUAGE) {
  const langTranslations = translations[language] || translations[DEFAULT_LANGUAGE] || {};
  return interpolateDemoHTML(template, langTranslations);
}

export default {
  interpolateDemoHTML,
  getDemoHTML,
  createDemoHTML,
  processDemoHTMLI18n,
  processDataI18nAttributes
};
