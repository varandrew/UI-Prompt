/**
 * React 18 Runtime for iframe injection
 * Mirrors preactRuntime.js structure but uses React instead
 *
 * This module generates complete HTML documents with React 18 runtime
 * for rendering user-provided React JSX components inside iframes.
 *
 * @author UI Style Architecture
 */

// React 18 CDN URLs (production minified)
const REACT_CDN = 'https://unpkg.com/react@18/umd/react.production.min.js';
const REACT_DOM_CDN = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';

// Lucide React Icons CDN (UMD build - exposes global.LucideReact)
const LUCIDE_REACT_CDN = 'https://unpkg.com/lucide-react@0.459.0/dist/umd/lucide-react.min.js';

/**
 * Generate complete HTML document with React 18 runtime for iframe
 *
 * @param {Object} options - Configuration options
 * @param {string} options.compiledCode - Compiled JavaScript code (from compileJSX with mode='react')
 * @param {string} options.componentName - Name of the component function to render
 * @param {string} options.customStyles - CSS styles to inject
 * @param {string} options.title - Document title
 * @param {string} options.mountId - ID of the root element to mount to
 * @param {string} options.theme - Theme ('light' or 'dark')
 * @returns {string} Complete HTML document string
 */
export function generateReactIframeHTML(options = {}) {
  const {
    compiledCode = '',
    componentName = 'App',
    customStyles = '',
    title = 'React Preview',
    mountId = 'root',
    theme = 'light',
    perfMode = false
  } = options;

  return `<!DOCTYPE html>
<html lang="en" class="${theme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(title)}</title>

  <!-- Tailwind CSS (for utility classes) -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- React 18 Runtime (Production) -->
  <script src="${REACT_CDN}" crossorigin="anonymous"></script>
  <script src="${REACT_DOM_CDN}" crossorigin="anonymous"></script>

  <!-- Polyfill: lucide-react UMD expects window.react (lowercase) -->
  <script>window.react = window.React;</script>

  <!-- Lucide React Icons (depends on React, must load after) -->
  <script src="${LUCIDE_REACT_CDN}" crossorigin="anonymous"></script>

  <style>
    /* Base Reset */
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      min-height: 100vh;
      line-height: 1.5;
    }

    /* Mount Container */
    #${mountId} {
      min-height: 100vh;
    }

    /* Error Display */
    .react-runtime-error {
      background: #fee2e2;
      border: 1px solid #ef4444;
      color: #dc2626;
      padding: 16px 20px;
      border-radius: 8px;
      margin: 16px;
      font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
      font-size: 14px;
      white-space: pre-wrap;
      word-break: break-word;
      line-height: 1.6;
    }

    .react-runtime-error strong {
      display: block;
      margin-bottom: 8px;
      font-size: 15px;
    }

    /* Dark mode error */
    .dark .react-runtime-error {
      background: #450a0a;
      border-color: #dc2626;
      color: #fca5a5;
    }

    /* Custom Styles */
    ${customStyles}
  </style>
</head>
<body class="${theme}">
  <div id="${mountId}"></div>

  <!-- Global Error Handler -->
  <script>
    window.onerror = function(message, source, lineno, colno, error) {
      var container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = '<div class="react-runtime-error"><strong>Runtime Error:</strong>' +
          message + (lineno ? ' (line ' + lineno + ')' : '') + '</div>';
      }
      console.error('[React Runtime]', message, error);
      return true;
    };

    window.onunhandledrejection = function(event) {
      var container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = '<div class="react-runtime-error"><strong>Unhandled Promise Rejection:</strong>' +
          (event.reason ? event.reason.message || event.reason : 'Unknown error') + '</div>';
      }
      console.error('[React Runtime] Unhandled rejection:', event.reason);
    };
  </script>

  ${perfMode ? `
  <script>
    (function() {
      try {
        var maxFps = 30;
        var minInterval = 1000 / maxFps;
        var lastTime = 0;

        var origRAF = window.requestAnimationFrame && window.requestAnimationFrame.bind(window);
        var origCAF = window.cancelAnimationFrame && window.cancelAnimationFrame.bind(window);
        if (!origRAF) return;

        var nextId = 1;
        var callbacks = new Map();
        var handles = new Map();

        function schedule(id) {
          var cb = callbacks.get(id);
          if (!cb) return;
          if (document.hidden) return;

          var handle = origRAF(function(ts) {
            var cbInner = callbacks.get(id);
            if (!cbInner) return;

            if (document.hidden) {
              handles.delete(id);
              return;
            }

            if (ts - lastTime < minInterval) {
              handles.delete(id);
              schedule(id);
              return;
            }

            lastTime = ts;
            handles.delete(id);
            callbacks.delete(id);
            try {
              cbInner(ts);
            } catch (err) {
              setTimeout(function() { throw err; });
            }
          });

          handles.set(id, handle);
        }

        window.requestAnimationFrame = function(cb) {
          if (typeof cb !== 'function') return origRAF(cb);
          var id = nextId++;
          callbacks.set(id, cb);
          schedule(id);
          return id;
        };

        window.cancelAnimationFrame = function(id) {
          var handle = handles.get(id);
          if (handle && origCAF) {
            try { origCAF(handle); } catch (_) {}
          }
          handles.delete(id);
          callbacks.delete(id);
        };

        function pauseAll() {
          if (!origCAF) return;
          handles.forEach(function(handle) {
            try { origCAF(handle); } catch (_) {}
          });
          handles.clear();
        }

        function resumeAll() {
          callbacks.forEach(function(_, id) {
            if (!handles.has(id)) schedule(id);
          });
        }

        document.addEventListener('visibilitychange', function() {
          if (document.hidden) pauseAll();
          else resumeAll();
        });
      } catch (_) {}
    })();
  </script>
  ` : ''}

  <!-- User Component Code -->
  <script>
    (function() {
      'use strict';

      try {
        // ========================================
        // ReactComponentDeps 命名空間
        // 整合 Gemini + Codex 審查建議
        // - 集中管理 React/Lucide 依賴
        // - 動態支持所有 1500+ Lucide 圖標
        // - 回填到全域但不覆蓋已存在的符號
        // ========================================
        var deps = window.ReactComponentDeps = {};

        // React hooks
        Object.assign(deps, {
          useState: React.useState,
          useEffect: React.useEffect,
          useRef: React.useRef,
          useMemo: React.useMemo,
          useCallback: React.useCallback,
          useReducer: React.useReducer,
          useContext: React.useContext,
          useLayoutEffect: React.useLayoutEffect,
          useImperativeHandle: React.useImperativeHandle,
          useDebugValue: React.useDebugValue,
          useId: React.useId,
          useDeferredValue: React.useDeferredValue,
          useTransition: React.useTransition,
          useSyncExternalStore: React.useSyncExternalStore,
          useInsertionEffect: React.useInsertionEffect
        });

        // React APIs
        Object.assign(deps, {
          createContext: React.createContext,
          memo: React.memo,
          forwardRef: React.forwardRef,
          lazy: React.lazy,
          Suspense: React.Suspense,
          Fragment: React.Fragment,
          createElement: React.createElement,
          cloneElement: React.cloneElement,
          createRef: React.createRef,
          Component: React.Component,
          PureComponent: React.PureComponent,
          Children: React.Children,
          isValidElement: React.isValidElement
        });

        // Lucide React Icons - 動態添加所有圖標到 deps
        var lucide = window.LucideReact || {};
        Object.keys(lucide).forEach(function(key) {
          // 添加以大寫字母開頭的圖標（可以是函數或對象）
          // 注意：lucide-react 0.459.0+ 將圖標導出為對象而非函數
          var value = lucide[key];
          var isValidIcon = /^[A-Z]/.test(key) &&
                           (typeof value === 'function' ||
                            (typeof value === 'object' && value !== null));

          if (isValidIcon && key !== 'Icon' && key !== 'IconNode') {
            deps[key] = value;
          }
        });

        // 需要強制覆蓋的 Lucide 圖標名稱（這些名稱與瀏覽器原生 API 衝突）
        // Web Locks API: window.Lock
        // 其他可能衝突的名稱: Bluetooth, USB, etc.
        var forceOverrideNames = ['Lock', 'Bluetooth', 'USB', 'Storage', 'Screen', 'Navigator'];

        // 將依賴回填到全域
        // 對於 Lucide 圖標：強制覆蓋可能與原生 API 衝突的名稱
        // 對於其他依賴：保持原本行為（不覆蓋已存在的符號）
        Object.keys(deps).forEach(function(key) {
          var isLucideIcon = lucide && (key in lucide);
          var shouldForceOverride = forceOverrideNames.indexOf(key) !== -1;

          if (isLucideIcon && shouldForceOverride) {
            // 強制覆蓋衝突的 Lucide 圖標
            window[key] = deps[key];
          } else if (!(key in window)) {
            // 不覆蓋已存在的符號
            window[key] = deps[key];
          }
        });

        // 為了確保基本 hooks 在局部作用域可用（compiledCode 可能使用）
        var useState = deps.useState;
        var useEffect = deps.useEffect;
        var useRef = deps.useRef;
        var useMemo = deps.useMemo;
        var useCallback = deps.useCallback;
        var useReducer = deps.useReducer;
        var useContext = deps.useContext;
        var useLayoutEffect = deps.useLayoutEffect;
        var useId = deps.useId;
        var Fragment = deps.Fragment;
        var createElement = deps.createElement;
        var memo = deps.memo;
        var forwardRef = deps.forwardRef;
        var createContext = deps.createContext;

        // User compiled code
        ${compiledCode}

        // 顯式暴露組件到全域作用域（解決嚴格模式下的函數聲明作用域問題）
        // 這確保即使在 IIFE 中定義的組件也能被後續的渲染代碼訪問
        if (typeof ${componentName} !== 'undefined') {
          window.${componentName} = ${componentName};
        }

        // Render component
        var container = document.getElementById('${mountId}');
        if (container && typeof window.${componentName} !== 'undefined') {
          var root = ReactDOM.createRoot(container);
          root.render(React.createElement(window.${componentName}, null));
        } else if (container) {
          container.innerHTML = '<div class="react-runtime-error"><strong>Component Not Found:</strong>' +
            'The component "${componentName}" was not defined in the code.</div>';
        }

      } catch (error) {
        var container = document.getElementById('${mountId}');
        if (container) {
          container.innerHTML = '<div class="react-runtime-error"><strong>Execution Error:</strong>' +
            (error.message || 'Unknown error') + '</div>';
        }
        console.error('[React Runtime] Execution error:', error);
      }
    })();
  </script>
</body>
</html>`;
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Get React CDN URLs (for external use if needed)
 * @returns {{ react: string, reactDom: string }}
 */
export function getReactCDNUrls() {
  return {
    react: REACT_CDN,
    reactDom: REACT_DOM_CDN
  };
}

export default {
  generateReactIframeHTML,
  getReactCDNUrls
};
