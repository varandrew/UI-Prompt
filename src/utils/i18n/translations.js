import zhCN from '../../i18n/zh-CN.js';
import enUS from '../../i18n/en-US.js';
import { LANGUAGES, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, normalizeLanguageCode } from './languageConstants.js';

const translations = {
  [LANGUAGES.ZH_CN]: zhCN,
  [LANGUAGES.EN_US]: enUS
};


/**
 * 
 * 獲取當前語言
 */
function getCurrentLanguage() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored && Object.keys(translations).includes(stored)) {
      return stored;
    }
  }
  return DEFAULT_LANGUAGE;
}

/**
 * 獲取指定語言的翻譯数据
 */
function getTranslations(lang = getCurrentLanguage()) {
  const normalizedLang = normalizeLanguageCode(lang);
  return translations[normalizedLang] || translations[DEFAULT_LANGUAGE];
}

// 防護機制：防止無限遞歸
let translationCallDepth = 0;
const MAX_TRANSLATION_DEPTH = 3;

/**
 * 通過鍵值路徑獲取翻譯
 * @param {string} key - 翻譯鍵值，支持點分隔路徑如 'nav.home'
 * @param {string} language - 語言代碼
 * @returns {string} 翻譯結果
 */
function getTranslation(key, language = getCurrentLanguage()) {
  // 防止無限遞歸
  if (translationCallDepth >= MAX_TRANSLATION_DEPTH) {
    console.warn(`Translation depth exceeded for key: ${key}`);
    return key;
  }

  translationCallDepth++;
  try {
    return getTranslationSafe(key, language);
  } finally {
    translationCallDepth--;
  }
}

/**
 * 安全的翻譯查找函数
 */
function getTranslationSafe(key, language) {
  const langData = getTranslations(language);

  if (!key) return '';

  // 支持點分隔路徑
  const keys = key.split('.');
  let result = langData;
  let path = '';

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    path += (i > 0 ? '.' : '') + k;

    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      // 嘗試直接查找完整 key（但避免遞歸調用）
      result = langData[key];
      // 若完整 key 不存在，嘗試以最後一段鍵名作為回退（因歷史資料常以扁平鍵保存）
      if (!result) {
        const lastSeg = keys[keys.length - 1];
        result = langData[lastSeg];
      }
      break;
    }
  }

  // 如果找到翻譯，直接返回
  if (typeof result === 'string' && result.length > 0) {
    return result;
  }

  // 英文模式的简化回退策略（擴充：支援 *Title/*Desc 後綴）
  if (language === LANGUAGES.EN_US) {
    const segs = key.split('.');
    const last = segs[segs.length - 1] || '';
    const prev = segs[segs.length - 2] || '';

    // 允許最後一段鍵名以這些詞為結尾（例如 metroFluentTitle / neoBrutalismDesc）
    const endsWithNameLike = /(title|name|label|heading)$/i.test(last);
    const endsWithDescLike = /(description|desc|subtitle|summary)$/i.test(last);

    // 將 camelCase / kebab-case / snake_case 轉為 Title Case
    const toTitleCase = (str) =>
      str
        .replace(/[-_]+/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (l) => l.toUpperCase());

    if (endsWithNameLike) {
      // 取最後一段去除後綴作為标題基底；若去除後為空則回退到上一段
      const base = last.replace(/(title|name|label|heading)$/i, '') || prev;
      if (base) return toTitleCase(base);
    }

    if (endsWithDescLike) {
      // 描述缺失時不返回 key，避免污染 UI
      return '';
    }

    // 原規則：當最後一段恰為标題关鍵詞時，使用上一段
    const isNameLike = /^(title|name|label|heading)$/i.test(last);
    const isDescLike = /^(description|desc|subtitle|summary)$/i.test(last);

    if (isNameLike && prev) {
      return toTitleCase(prev);
    }
    if (isDescLike) {
      return '';
    }
    return key;
  }

  // 其他語言時，简化的回退到 zh-CN
  if (language !== LANGUAGES.ZH_CN) {
    const zhData = translations[LANGUAGES.ZH_CN] || {};
    const segs = key.split('.');
    let cur = zhData;

    for (const s of segs) {
      if (cur && typeof cur === 'object' && s in cur) {
        cur = cur[s];
      } else {
        // 直接查找，不再嘗試遞歸
        cur = zhData[key] || key;
        break;
      }
    }
    if (typeof cur === 'string') return cur;
  }

  const finalResult = result || key;

  // 🔍 仅在開發環境下，當翻譯失敗時輸出错誤日誌
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    // 检查是否翻譯失敗（返回值等於原始 key）
    if (finalResult === key && typeof key === 'string') {
      // 只報告真正的 i18n 鍵（以命名空間開頭）
      const isI18nKey = /^(styles|nav|common|ui|demo|pages|buttons|filter|toast|preview|prompt|data|errors)\./i.test(key);
      if (isI18nKey) {
        console.warn(`[i18n] ❌ Translation missing: "${key}" (${language})`);
      }
    }
  }

  return finalResult;
}

/**
 * 應用翻譯到對象
 * 兼容兩種簽名：
 * - applyTranslations(obj, language)
 * - applyTranslations(obj, /* prefix(已棄用) * / language)
 * 第二種常見於舊代碼誤把 prefix 放在第二參，真正語言在第三參；此處仅解析語言，忽略 prefix。
 */
function applyTranslations(obj, maybeLangOrPrefix, maybeLang) {
  // 決定語言：优先第三參（舊簽名），否則第二參（新簽名）
  let language = typeof maybeLang === 'string' ? maybeLang : maybeLangOrPrefix;

  // 只接受有效的語言代碼
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    language = getCurrentLanguage();
  }

  function translateValue(value, key = '') {
    if (typeof value === 'string') {
      // 仅嘗試當作 i18n 鍵查詢；查無則回傳原字串（例如 HTML/demo 內容）
      // 检查是否看起來像 i18n 鍵（以 data. 或类似的命名空間開頭）
      const looksLikeI18nKey = /^(data|styles|nav|common|ui|demo|pages|buttons|filter|toast|preview|prompt)\./.test(value);
      
      if (looksLikeI18nKey) {
        const translated = getTranslation(value, language);
        // 如果翻譯結果与原值不同且不是空字串，返回翻譯結果
        // 如果翻譯結果是空字串，說明翻譯存在但未填写，返回原值（避免显示空字串）
        // 如果翻譯結果与原值相同，說明沒找到翻譯，返回原值
        if (translated !== value && translated && typeof translated === 'string' && translated.trim() !== '') {
          return translated;
        }
      }
      // 不是 i18n 鍵或翻譯無效，返回原值
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((item, idx) => translateValue(item, `${key}[${idx}]`));
    }
    if (value && typeof value === 'object') {
      // 检測 i18n 對象格式：{ 'zh-CN': '...', 'zh-cn': '...', 'en-US': '...' }
      // 對於文本字段（title, description, name 等），自動提取當前語言的文本
      const isTextField = ['title', 'description', 'name', 'label', 'heading', 'subtitle'].includes(key.toLowerCase());
      const isI18nObject = LANGUAGES.ZH_CN in value || LANGUAGES.ZH_CN_LOWER in value || LANGUAGES.EN_US in value;

      if (isTextField && isI18nObject) {
        // 直接返回當前語言的文本字符串
        // 支持 'zh-CN' 和 'zh-cn' 兩種格式
        // 首先嘗試當前語言的精確匹配，然後嘗試大小写變体
        let result = value[language];
        if (!result && language === LANGUAGES.ZH_CN) {
          result = value[LANGUAGES.ZH_CN_LOWER];
        } else if (!result && language === LANGUAGES.ZH_CN_LOWER) {
          result = value[LANGUAGES.ZH_CN];
        }
        // 如果還是沒有，則回退到中文或英文
        if (!result) {
          result = value[LANGUAGES.ZH_CN] || value[LANGUAGES.ZH_CN_LOWER] || value[LANGUAGES.EN_US] || '';
        }
        return result;
      }
      
      // 其他對象类型繼續遞歸處理
      const translatedObj = {};
      for (const [k, v] of Object.entries(value)) {
        translatedObj[k] = translateValue(v, k);
      }
      return translatedObj;
    }
    return value;
  }

  // 處理数組或對象，从根級別開始翻譯
  if (Array.isArray(obj)) {
    return obj.map((item, idx) => translateValue(item, `[${idx}]`));
  }
  if (obj && typeof obj === 'object') {
    const translatedObj = {};
    for (const [k, v] of Object.entries(obj)) {
      translatedObj[k] = translateValue(v, k);
    }
    return translatedObj;
  }
  return translateValue(obj, '');
}

/**
 * 翻譯HTML中的佔位符
 * @param {string} html - 包含 {{t:key}} 佔位符的HTML
 * @param {string} language - 語言代碼
 */
function translateHTML(html, language = getCurrentLanguage()) {
  if (!html || typeof html !== 'string') return html;

  const targetLanguage = language || getCurrentLanguage();
  return html.replace(/\{\{t:([^}]+)\}\}/g, (match, rawKey) => {
    const key = rawKey.trim();
    const v = getTranslation(key, targetLanguage);
    return v || match;
  });
}

export default {
  getTranslation,
  getTranslations,
  applyTranslations,
  translateHTML,
  getCurrentLanguage
};

export {
  getTranslation,
  getTranslations,
  applyTranslations,
  translateHTML,
  getCurrentLanguage
};
