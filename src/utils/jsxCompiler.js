/**
 * JSX 編譯器工具
 * 使用 Sucrase 將 JSX 轉換為可執行的 JavaScript
 * 支持 Preact h() 和 React JSX 兩種模式
 *
 * OPTIMIZATION v2: Pre-compiled JSX support
 * - Loads pre-compiled JSX from build-time cache (instant)
 * - Falls back to runtime compilation (backwards compatible)
 * - Lazy loads Sucrase only when needed (saves 300KB on initial load)
 * - Uses IndexedDB for persistent browser cache
 */

import { detectJSXMode } from './jsxPreprocessor';
import { getCached, setCached, isIndexedDBAvailable } from './indexedDBCache';
import { buildPublicPath } from '../data/loaders/config/pathHelper.js';
import { LRUCache } from './LRUCache';

// 編譯結果緩存 (memory) - 使用 LRU 限制大小，避免 OOM
const compilationCache = new LRUCache(100);

// Pre-compiled index cache
let precompiledIndex = null;
let precompiledIndexPromise = null;

// Lazy-loaded Sucrase transform function
let sucraseTransform = null;
let sucraseLoadPromise = null;

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
 * Load pre-compiled JSX index
 * OPTIMIZATION: Load index once, cache for future lookups
 * @returns {Promise<Object|null>}
 */
async function loadPrecompiledIndex() {
  // Return cached index
  if (precompiledIndex) {
    return precompiledIndex;
  }

  // Return in-progress load
  if (precompiledIndexPromise) {
    return precompiledIndexPromise;
  }

  precompiledIndexPromise = (async () => {
    try {
      const response = await fetch(buildPublicPath('data/compiled-jsx-index.json'));

      if (response.ok) {
        const data = await response.json();
        precompiledIndex = data;
        return data;
      }
    } catch {
      // Silently fail - will use runtime compilation
    }

    precompiledIndex = { files: {} };
    return precompiledIndex;
  })();

  return precompiledIndexPromise;
}

/**
 * Lazy load Sucrase transform function
 * OPTIMIZATION: Only loads 300KB Sucrase library when actually needed
 * @returns {Promise<Function>}
 */
async function loadSucrase() {
  // Return cached transform
  if (sucraseTransform) {
    return sucraseTransform;
  }

  // Return in-progress load
  if (sucraseLoadPromise) {
    return sucraseLoadPromise;
  }

  sucraseLoadPromise = (async () => {
    const { transform } = await import('sucrase');
    sucraseTransform = transform;
    return transform;
  })();

  return sucraseLoadPromise;
}

/**
 * Load pre-compiled JSX from build cache
 * OPTIMIZATION: Instant load without runtime compilation
 *
 * @param {string} previewId - Preview ID (e.g., 'visual-glassmorphism-landing')
 * @param {'fullpage' | 'demo'} type - JSX file type
 * @returns {Promise<{code: string, componentName: string, lucideIcons: string[], mode: string}|null>}
 */
export async function loadPrecompiledJSX(previewId, type = 'fullpage') {
  const cacheKey = `${previewId}:${type}`;

  // Check memory cache first
  if (compilationCache.has(cacheKey)) {
    return compilationCache.get(cacheKey);
  }

  // Check IndexedDB cache
  if (isIndexedDBAvailable()) {
    const cached = await getCached(`precompiled:${cacheKey}`);
    if (cached) {
      compilationCache.set(cacheKey, cached);
      return cached;
    }
  }

  // Load pre-compiled index
  const index = await loadPrecompiledIndex();

  if (!index || !index.files || !index.files[cacheKey]) {
    return null;
  }

  const entry = index.files[cacheKey];

  try {
    // Fetch pre-compiled file
    const response = await fetch(buildPublicPath(`data/compiled-jsx/${entry.file}`));

    if (!response.ok) {
      return null;
    }

    const compiled = await response.json();

    // Cache in memory
    compilationCache.set(cacheKey, compiled);

    // Cache in IndexedDB for persistence
    if (isIndexedDBAvailable()) {
      setCached(`precompiled:${cacheKey}`, compiled);
    }

    return compiled;
  } catch {
    return null;
  }
}

/**
 * Check if pre-compiled version exists for a preview
 * @param {string} previewId
 * @param {'fullpage' | 'demo'} type
 * @returns {Promise<boolean>}
 */
export async function hasPrecompiledJSX(previewId, type = 'fullpage') {
  const index = await loadPrecompiledIndex();
  const cacheKey = `${previewId}:${type}`;
  return !!(index && index.files && index.files[cacheKey]);
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
 * OPTIMIZATION v2: Uses lazy-loaded Sucrase (only loads when needed)
 * OPTIMIZATION v3: Tries pre-compiled JSX first (instant load, skips Sucrase entirely)
 *
 * @param {string} jsxCode - JSX 代碼
 * @param {Object} options - 編譯選項
 * @param {boolean} options.useCache - 是否使用緩存
 * @param {string} options.componentName - 組件名稱（用於包裝）
 * @param {'react' | 'preact-h' | null} options.mode - 指定模式（null 為自動檢測）
 * @param {string} options.previewId - 預覽 ID，用於查找預編譯版本
 * @param {'fullpage' | 'demo'} options.type - JSX 文件類型
 * @returns {Promise<string | { code: string, componentName: string, mode: string }>}
 */
export async function compileJSX(jsxCode, options = {}) {
  const {
    useCache = true,
    componentName = 'App',
    mode = null,  // 'react' | 'preact-h' | null (auto-detect)
    previewId = null,  // OPTIMIZATION v3: Preview ID for pre-compiled lookup
    type = 'fullpage'  // OPTIMIZATION v3: JSX file type
  } = options;

  // OPTIMIZATION v3: Try pre-compiled JSX first (instant load, ~200-300ms savings)
  if (previewId) {
    const precompiled = await loadPrecompiledJSX(previewId, type);
    if (precompiled) {
      // Cache in memory for future use
      const cacheKey = `${precompiled.mode}:precompiled:${previewId}:${type}`;
      compilationCache.set(cacheKey, precompiled);
      return precompiled;
    }
  }

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

  // Check IndexedDB cache for persistent caching
  if (useCache && isIndexedDBAvailable()) {
    const cached = await getCached(`compile:${cacheKey}`);
    if (cached) {
      compilationCache.set(cacheKey, cached);
      return cached;
    }
  }

  try {
    // OPTIMIZATION: Lazy load Sucrase only when needed (saves 300KB on initial load)
    const transform = await loadSucrase();

    // ========================================
    // React JSX 模式 (新)
    // ========================================
    if (detectedMode === 'react') {
      // 提取 lucide-react 圖標列表（在移除 import 之前）
      const lucideIconsMatch = jsxCode.match(/import\s+\{([\s\S]+?)\}\s+from\s+['"]lucide-react['"]/);
      const lucideIcons = lucideIconsMatch
        ? lucideIconsMatch[1]
            .split(',')
            .map(name => name.trim())
            .filter(name => name && !/^(type|typeof)\s/.test(name))
        : [];

      // 預處理：移除 React imports（運行時會提供）
      // 使用 [\s\S] 替代 [^}] 以支持多行 import 語句
      let processedCode = jsxCode
        .replace(/import\s+React\s*,?\s*\{[\s\S]*?\}\s*from\s+['"]react['"];?\n?/g, '')
        .replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '')
        .replace(/import\s+\{[\s\S]+?\}\s+from\s+['"]react['"];?\n?/g, '');

      // 預處理：移除 lucide-react imports（運行時會提供）
      // 使用 [\s\S] 替代 [^}] 以支持多行 import 語句
      processedCode = processedCode
        .replace(/import\s+\{[\s\S]+?\}\s+from\s+['"]lucide-react['"];?\n?/g, '');

      // 預處理：移除其他常用庫的 imports（如果運行時提供）
      // 支持的庫列表可以在這裡擴展
      processedCode = processedCode
        .replace(/import\s+\{[\s\S]+?\}\s+from\s+['"]@lucide\/react['"];?\n?/g, '');

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
        mode: 'react',
        lucideIcons  // 新增：包含圖標列表
      };

      // 緩存結果（LRU 自動管理大小，無需手動清理）
      if (useCache) {
        compilationCache.set(cacheKey, compiledResult);

        // OPTIMIZATION: Persist to IndexedDB for cross-session caching
        if (isIndexedDBAvailable()) {
          setCached(`compile:${cacheKey}`, compiledResult);
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

    // 緩存結果（LRU 自動管理大小，無需手動清理）
    if (useCache) {
      compilationCache.set(cacheKey, compiledCode);

      // OPTIMIZATION: Persist to IndexedDB for cross-session caching
      if (isIndexedDBAvailable()) {
        setCached(`compile:${cacheKey}`, compiledCode);
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

  const compiled = await compileJSX(jsxCode, { ...options, componentName });

  // 處理返回值類型：可能是字串（舊版 Preact 模式）或對象（新版 React 模式）
  const { code, componentName: nameFromResult, mode, lucideIcons = [] } =
    typeof compiled === 'string'
      ? { code: compiled, componentName, mode: 'preact', lucideIcons: [] }
      : compiled;

  const finalComponentName = nameFromResult || componentName;

  // React 模式：使用 React/Preact 兼容包裝
  // React.createElement 編譯的代碼可以在 Preact runtime 中運行
  if (mode === 'react') {
    // 生成 Lucide icons 的解構語句
    const lucideDestructure = lucideIcons.length > 0
      ? `const { ${lucideIcons.join(', ')} } = window.LucideReact || {};`
      : '';

    return `
(function() {
  // React hooks 從 window.preact 中解構（Preact runtime 已設置好映射）
  const {
    useState, useEffect, useRef, useMemo, useCallback, useReducer,
    useContext, useLayoutEffect, useImperativeHandle, useDebugValue,
    useId, useDeferredValue, useTransition, useSyncExternalStore,
    useInsertionEffect, createContext, memo, forwardRef, lazy,
    Suspense, Fragment, createElement, cloneElement, createRef,
    Component, PureComponent, Children, isValidElement
  } = window.preact || {};

  // Lucide React icons - 只解構實際使用的圖標
  ${lucideDestructure}

  ${code}

  // 渲染組件（使用 Preact 的 render 和 h）
  const container = document.getElementById('${mountId}');
  if (container && typeof ${finalComponentName} !== 'undefined') {
    const { h, render } = window.preact || {};
    if (h && render) {
      render(h(${finalComponentName}, null), container);
    }
  }
})();
`;
  }

  // Preact 模式：包裝為完整的可執行模塊
  return `
(function() {
  const { h, render, Fragment, useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, createContext } = window.preact;
  const { useSignal } = window.preactSignals || {};

  ${code}

  // 渲染組件
  const container = document.getElementById('${mountId}');
  if (container) {
    render(h(${finalComponentName}, null), container);
  }
})();
`;
}

export default {
  containsJSX,
  isReactComponent,
  compileJSX,
  compileForIframe,
  // OPTIMIZATION v2: Pre-compiled JSX support
  loadPrecompiledJSX,
  hasPrecompiledJSX
};
