/**
 * JSX 編譯器工具
 * 使用 Sucrase 將 JSX 轉換為可執行的 JavaScript
 * 支持 Preact h() 和 React JSX 兩種模式
 */

import { detectJSXMode } from './jsxPreprocessor';

// 編譯結果緩存
const compilationCache = new Map();

/**
 * 生成簡單的 hash 用於緩存 key
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

/**
 * 檢測代碼是否包含 JSX 語法
 */
export function containsJSX(code) {
  if (!code || typeof code !== 'string') return false;

  // 先移除 <style> 和 <script> 標籤內容，避免 CSS/JS 中的 {} 觸發誤判
  const codeWithoutStyleScript = code
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  // 檢測常見的 JSX 模式
  const jsxPatterns = [
    /<[A-Z][a-zA-Z]*[\s/>]/,  // 組件標籤 <ComponentName
    /<\/[A-Z][a-zA-Z]*>/,      // 組件關閉標籤 </ComponentName>
    /return\s*\(\s*</,          // return (<
    /=>\s*\(\s*</,              // => (<
    /=>\s*</,                   // => <
    /useState\s*\(/,            // React hooks
    /useEffect\s*\(/,
    /useRef\s*\(/,
    /useMemo\s*\(/,
    /useCallback\s*\(/
  ];

  // 移除了 /\{.*?\}/ 模式，因為它會錯誤匹配 CSS 中的 {}
  return jsxPatterns.some(pattern => pattern.test(codeWithoutStyleScript));
}

/**
 * 檢測代碼是否是完整的 React 組件
 */
export function isReactComponent(code) {
  if (!code || typeof code !== 'string') return false;

  const componentPatterns = [
    /function\s+[A-Z][a-zA-Z]*\s*\(/,  // function ComponentName(
    /const\s+[A-Z][a-zA-Z]*\s*=.*=>/,   // const ComponentName = () =>
    /class\s+[A-Z][a-zA-Z]*\s+extends/  // class ComponentName extends
  ];

  return componentPatterns.some(pattern => pattern.test(code));
}

/**
 * 使用 Sucrase 編譯 JSX
 * 動態加載編譯器以減少首次加載時間
 * 支持 Preact h() 和 React JSX 兩種模式
 *
 * @param {string} jsxCode - JSX 代碼
 * @param {Object} options - 編譯選項
 * @param {boolean} options.useCache - 是否使用緩存
 * @param {string} options.componentName - 組件名稱（用於包裝）
 * @param {'react' | 'preact-h' | null} options.mode - 指定模式（null 為自動檢測）
 * @returns {Promise<string | { code: string, componentName: string, mode: string }>}
 */
export async function compileJSX(jsxCode, options = {}) {
  const {
    useCache = true,
    componentName = 'App',
    mode = null  // 'react' | 'preact-h' | null (auto-detect)
  } = options;

  if (!jsxCode || typeof jsxCode !== 'string') {
    throw new Error('無效的 JSX 代碼');
  }

  // 自動檢測 JSX 模式
  const detectedMode = mode || detectJSXMode(jsxCode);

  // 檢查緩存（包含模式信息）
  const cacheKey = `${detectedMode}:${simpleHash(jsxCode)}`;
  if (useCache && compilationCache.has(cacheKey)) {
    return compilationCache.get(cacheKey);
  }

  try {
    // 動態加載 Sucrase
    const { transform } = await import('sucrase');

    // ========================================
    // React JSX 模式 (新)
    // ========================================
    if (detectedMode === 'react') {
      // 預處理：移除 React imports（運行時會提供）
      let processedCode = jsxCode
        .replace(/import\s+React\s*,?\s*\{[^}]*\}\s*from\s+['"]react['"];?\n?/g, '')
        .replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '')
        .replace(/import\s+\{[^}]+\}\s+from\s+['"]react['"];?\n?/g, '');

      // 預處理：移除 lucide-react imports（運行時會提供）
      processedCode = processedCode
        .replace(/import\s+\{[^}]+\}\s+from\s+['"]lucide-react['"];?\n?/g, '');

      // 預處理：移除其他常用庫的 imports（如果運行時提供）
      // 支持的庫列表可以在這裡擴展
      processedCode = processedCode
        .replace(/import\s+\{[^}]+\}\s+from\s+['"]@lucide\/react['"];?\n?/g, '');

      // 提取組件名稱（從 export default function）
      const exportMatch = processedCode.match(/export\s+default\s+function\s+(\w+)/);
      const extractedName = exportMatch ? exportMatch[1] : componentName;

      // 移除 export default（我們會直接調用組件）
      processedCode = processedCode.replace(/export\s+default\s+function\s+/, 'function ');

      // 使用 React.createElement pragma 編譯
      const result = transform(processedCode, {
        transforms: ['jsx'],
        jsxPragma: 'React.createElement',
        jsxFragmentPragma: 'React.Fragment',
        production: true
      });

      const compiledResult = {
        code: result.code,
        componentName: extractedName,
        mode: 'react'
      };

      // 緩存結果
      if (useCache) {
        compilationCache.set(cacheKey, compiledResult);
        if (compilationCache.size > 100) {
          const firstKey = compilationCache.keys().next().value;
          compilationCache.delete(firstKey);
        }
      }

      return compiledResult;
    }

    // ========================================
    // Preact h() 模式 (原有邏輯)
    // ========================================
    let wrappedCode = jsxCode;

    // 如果代碼不是完整的組件，嘗試包裝它
    if (!isReactComponent(jsxCode) && containsJSX(jsxCode)) {
      wrappedCode = `
function ${componentName}() {
  ${jsxCode}
}
`;
    }

    // 使用 Sucrase 轉換 JSX（Preact h() pragma）
    const result = transform(wrappedCode, {
      transforms: ['jsx', 'imports'],
      jsxPragma: 'h',
      jsxFragmentPragma: 'Fragment',
      production: true
    });

    const compiledCode = result.code;

    // 緩存結果
    if (useCache) {
      compilationCache.set(cacheKey, compiledCode);

      // 限制緩存大小
      if (compilationCache.size > 100) {
        const firstKey = compilationCache.keys().next().value;
        compilationCache.delete(firstKey);
      }
    }

    return compiledCode;

  } catch (error) {
    // 增強錯誤信息
    const enhancedError = new Error(
      `JSX 編譯錯誤 (${detectedMode || 'unknown'} mode): ${error.message}`
    );
    enhancedError.originalError = error;
    enhancedError.sourceCode = jsxCode;
    enhancedError.mode = detectedMode;

    throw enhancedError;
  }
}

/**
 * 編譯並包裝為可在 iframe 中執行的完整代碼
 */
export async function compileForIframe(jsxCode, options = {}) {
  const {
    componentName = 'App',
    mountId = 'root'
  } = options;

  const compiledCode = await compileJSX(jsxCode, { ...options, componentName });

  // 包裝為完整的可執行模塊
  return `
(function() {
  const { h, render, Fragment, useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, createContext } = window.preact;
  const { useSignal } = window.preactSignals || {};

  ${compiledCode}

  // 渲染組件
  const container = document.getElementById('${mountId}');
  if (container) {
    render(h(${componentName}, null), container);
  }
})();
`;
}

/**
 * 清除編譯緩存
 */
export function clearCompilationCache() {
  compilationCache.clear();
}

/**
 * 獲取緩存統計信息
 */
export function getCacheStats() {
  return {
    size: compilationCache.size,
    keys: Array.from(compilationCache.keys())
  };
}

export default {
  containsJSX,
  isReactComponent,
  compileJSX,
  compileForIframe,
  clearCompilationCache,
  getCacheStats
};
