/**
 * 翻譯文件驗證工具
 * 检測重複鍵值、路徑一致性等問題
 */

/**
 * 检測對象中的重複鍵值（忽略嵌套情況下的正常重複）
 * @param {object} obj - 要检查的對象
 * @param {string} path - 當前路徑
 * @returns {Array} 重複鍵值列表
 */
function findDuplicateKeys(obj, path = '') {
  const duplicates = [];
  const seenKeys = new Set();

  for (const key in obj) {
    const currentPath = path ? `${path}.${key}` : key;

    if (seenKeys.has(key)) {
      duplicates.push({
        key,
        path: currentPath,
        message: `Duplicate key "${key}" found at path "${currentPath}"`
      });
    } else {
      seenKeys.add(key);
    }

    // 遞迴检查嵌套對象
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const nestedDuplicates = findDuplicateKeys(obj[key], currentPath);
      duplicates.push(...nestedDuplicates);
    }
  }

  return duplicates;
}

/**
 * 驗證翻譯文件
 * @param {object} translations - 翻譯對象
 * @param {string} fileName - 文件名
 * @returns {object} 驗證結果
 */
export function validateTranslations(translations, fileName = '') {
  const results = {
    fileName,
    valid: true,
    errors: [],
    warnings: [],
    duplicateKeys: []
  };

  try {
    // 检測重複鍵值
    const duplicates = findDuplicateKeys(translations);
    if (duplicates.length > 0) {
      results.valid = false;
      results.duplicateKeys = duplicates;
      results.errors.push(`Found ${duplicates.length} duplicate keys`);
    }

    // 检查 messageBox 的期望結構
    if (translations.ui && translations.ui.messageBox) {
      const messageBox = translations.ui.messageBox;
      const requiredFields = ['defaultTitle', 'defaultDescription'];

      for (const field of requiredFields) {
        if (!messageBox[field]) {
          results.warnings.push(`Missing required field: ui.messageBox.${field}`);
        }
      }
    } else {
      results.warnings.push('Missing ui.messageBox structure');
    }

  } catch (error) {
    results.valid = false;
    results.errors.push(`Validation error: ${error.message}`);
  }

  return results;
}

/**
 * 驗證多個翻譯文件的一致性
 * @param {object} translations - { 'zh-CN': {}, 'en-US': {} }
 * @returns {object} 一致性检查結果
 */
export function validateTranslationConsistency(translations) {
  const results = {
    valid: true,
    errors: [],
    warnings: [],
    missingKeys: {}
  };

  const languages = Object.keys(translations);
  if (languages.length < 2) {
    results.warnings.push('Need at least 2 languages for consistency check');
    return results;
  }

  // 獲取所有鍵值路徑
  function getAllKeys(obj, path = '') {
    const keys = new Set();

    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      keys.add(currentPath);

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        const nestedKeys = getAllKeys(obj[key], currentPath);
        for (const nestedKey of nestedKeys) {
          keys.add(nestedKey);
        }
      }
    }

    return keys;
  }

  // 收集所有語言的鍵值
  const allKeysPerLanguage = {};
  for (const lang of languages) {
    allKeysPerLanguage[lang] = getAllKeys(translations[lang]);
  }

  // 找出所有唯一鍵值
  const allUniqueKeys = new Set();
  for (const keys of Object.values(allKeysPerLanguage)) {
    for (const key of keys) {
      allUniqueKeys.add(key);
    }
  }

  // 检查每個鍵值在所有語言中是否存在
  for (const key of allUniqueKeys) {
    const missingInLanguages = [];

    for (const lang of languages) {
      if (!allKeysPerLanguage[lang].has(key)) {
        missingInLanguages.push(lang);
      }
    }

    if (missingInLanguages.length > 0) {
      if (!results.missingKeys[key]) {
        results.missingKeys[key] = [];
      }
      results.missingKeys[key] = missingInLanguages;

      if (missingInLanguages.length === languages.length - 1) {
        results.errors.push(`Key "${key}" missing in most languages: ${missingInLanguages.join(', ')}`);
        results.valid = false;
      } else {
        results.warnings.push(`Key "${key}" missing in: ${missingInLanguages.join(', ')}`);
      }
    }
  }

  return results;
}

/**
 * 检測原始 JavaScript 文件中的語法错誤
 * @param {string} fileContent - 文件內容
 * @returns {object} 語法检查結果
 */
export function validateJSSyntax(fileContent) {
  const results = {
    valid: true,
    errors: []
  };

  try {
    // 简單的語法检查 - 检測明显的問題
    const duplicateKeyRegex = /(\w+):\s*{[^}]*},?\s*\1:/g;
    const matches = fileContent.match(duplicateKeyRegex);

    if (matches) {
      results.valid = false;
      results.errors.push(`Potential duplicate keys detected: ${matches.join(', ')}`);
    }

    // 检查未閉合的括號
    const openBraces = (fileContent.match(/{/g) || []).length;
    const closeBraces = (fileContent.match(/}/g) || []).length;

    if (openBraces !== closeBraces) {
      results.valid = false;
      results.errors.push(`Mismatched braces: ${openBraces} opening, ${closeBraces} closing`);
    }

  } catch (error) {
    results.valid = false;
    results.errors.push(`Syntax validation error: ${error.message}`);
  }

  return results;
}