/**
 * localStorage 安全操作工具
 *
 * 提供：
 * - 類型安全的讀取和寫入
 * - 自動驗證和回退
 * - JSON 序列化支持
 * - 錯誤處理
 */

import { createLogger } from '../logger';

const logger = createLogger('LocalStorage');

/**
 * 安全地從 localStorage 讀取值
 *
 * @param {string} key - 存儲鍵
 * @param {*} defaultValue - 默認值（讀取失敗時返回）
 * @param {Object} options - 選項
 * @param {Function} options.validator - 驗證函數，返回 true/false
 * @param {boolean} options.parseJSON - 是否解析 JSON（默認 false）
 * @returns {*} 讀取的值或默認值
 */
export function getStorageItem(key, defaultValue, options = {}) {
  const { validator, parseJSON = false } = options;

  // 確保在客戶端執行
  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultValue;
  }

  try {
    const stored = localStorage.getItem(key);

    // 如果沒有存儲值，返回默認值
    if (stored === null || stored === undefined) {
      return defaultValue;
    }

    // 解析 JSON（如果需要）
    let value = stored;
    if (parseJSON) {
      try {
        value = JSON.parse(stored);
      } catch (parseError) {
        logger.warn(`Failed to parse JSON for key "${key}":`, parseError);
        return defaultValue;
      }
    }

    // 驗證值（如果提供了驗證器）
    if (validator && typeof validator === 'function') {
      if (!validator(value)) {
        logger.warn(`Validation failed for localStorage key "${key}", using default`);
        return defaultValue;
      }
    }

    return value;
  } catch (error) {
    logger.error(`Failed to read localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * 安全地寫入值到 localStorage
 *
 * @param {string} key - 存儲鍵
 * @param {*} value - 要存儲的值
 * @param {Object} options - 選項
 * @param {boolean} options.stringify - 是否 JSON 序列化（默認 false）
 * @returns {boolean} 是否成功
 */
export function setStorageItem(key, value, options = {}) {
  const { stringify = false } = options;

  // 確保在客戶端執行
  if (typeof window === 'undefined' || !window.localStorage) {
    return false;
  }

  try {
    const valueToStore = stringify ? JSON.stringify(value) : String(value);
    localStorage.setItem(key, valueToStore);
    return true;
  } catch (error) {
    logger.error(`Failed to write localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * 安全地移除 localStorage 項
 *
 * @param {string} key - 存儲鍵
 * @returns {boolean} 是否成功
 */
export function removeStorageItem(key) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return false;
  }

  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    logger.error(`Failed to remove localStorage key "${key}":`, error);
    return false;
  }
}

// ========== 預定義驗證器 ==========

/**
 * 創建白名單驗證器
 * @param {Array} allowedValues - 允許的值列表
 * @returns {Function} 驗證函數
 */
export function createWhitelistValidator(allowedValues) {
  return (value) => allowedValues.includes(value);
}

/**
 * 創建對象 Schema 驗證器
 * @param {Object} schema - Schema 定義 { key: 'type' | validator }
 * @returns {Function} 驗證函數
 */
export function createSchemaValidator(schema) {
  return (value) => {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    for (const [key, typeOrValidator] of Object.entries(schema)) {
      const fieldValue = value[key];

      if (typeof typeOrValidator === 'function') {
        if (!typeOrValidator(fieldValue)) {
          return false;
        }
      } else if (typeof typeOrValidator === 'string') {
         
        if (typeof fieldValue !== typeOrValidator) {
          return false;
        }
      }
    }

    return true;
  };
}

// ========== 常用驗證器 ==========

export const validators = {
  /** 驗證語言代碼 */
  language: createWhitelistValidator(['zh-CN', 'en-US']),

  /** 驗證深色模式 */
  darkMode: createWhitelistValidator(['light', 'dark', 'system']),

  /** 驗證布爾值字符串 */
  booleanString: createWhitelistValidator(['true', 'false']),

  /** 驗證非空字符串 */
  nonEmptyString: (value) => typeof value === 'string' && value.length > 0,

  /** 驗證正整數 */
  positiveInteger: (value) => Number.isInteger(value) && value > 0,

  /** 驗證日期字符串（ISO 格式） */
  isoDateString: (value) => {
    if (typeof value !== 'string') return false;
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
};

export default {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
  createWhitelistValidator,
  createSchemaValidator,
  validators
};
