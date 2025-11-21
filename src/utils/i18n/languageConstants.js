/**
 * 語言代碼常量
 * 統一管理所有語言代碼，避免硬編碼
 */

// 支持的語言代碼
export const LANGUAGES = {
  ZH_CN: 'zh-CN',
  EN_US: 'en-US',
  // 兼容小写格式（用於数据文件）
  ZH_CN_LOWER: 'zh-cn'
};

// 默認語言
export const DEFAULT_LANGUAGE = LANGUAGES.ZH_CN;

// 所有支持的語言列表
export const SUPPORTED_LANGUAGES = [LANGUAGES.ZH_CN, LANGUAGES.EN_US];

// 語言代碼別名映射（用於兼容不同格式）
export const LANGUAGE_ALIASES = {
  [LANGUAGES.ZH_CN]: [LANGUAGES.ZH_CN, LANGUAGES.ZH_CN_LOWER],
  [LANGUAGES.EN_US]: [LANGUAGES.EN_US]
};

/**
 * 獲取語言代碼的所有可能別名
 * @param {string} language - 語言代碼
 * @returns {string[]} 所有可能的別名
 */
export function getLanguageAliases(language) {
  if (language === LANGUAGES.ZH_CN || language === LANGUAGES.ZH_CN_LOWER) {
    return LANGUAGE_ALIASES[LANGUAGES.ZH_CN];
  }
  if (language === LANGUAGES.EN_US) {
    return LANGUAGE_ALIASES[LANGUAGES.EN_US];
  }
  return [language];
}

/**
 * 标準化語言代碼（將所有變体統一為标準格式）
 * @param {string} language - 語言代碼
 * @returns {string} 标準化的語言代碼
 */
export function normalizeLanguageCode(language) {
  if (language === LANGUAGES.ZH_CN_LOWER) {
    return LANGUAGES.ZH_CN;
  }
  if (SUPPORTED_LANGUAGES.includes(language)) {
    return language;
  }
  return DEFAULT_LANGUAGE;
}

/**
 * 检查是否為有效的語言代碼
 * @param {string} language - 語言代碼
 * @returns {boolean} 是否有效
 */
export function isValidLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language) || language === LANGUAGES.ZH_CN_LOWER;
}

