import { useMemo, useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { compileForIframe, containsJSX } from '../../utils/jsxCompiler';
import { generatePreactIframeHTML } from '../../utils/preactRuntime';

/**
 * 實時預覽組件
 * - iframe 隔離渲染
 * - 防抖更新
 * - 錯誤邊界
 * - ✨ 支持 JSX 編譯預覽
 */
export function LivePreview({
  html = '',
  css = '',
  jsx = '',           // ✨ 新增：JSX 代碼
  renderMode = '',    // ✨ 新增：渲染模式 ('html' | 'jsx')
  language = 'zh-CN',
  title = 'Preview',
  appCssUrl = ''
}) {
  const [debouncedHtml, setDebouncedHtml] = useState(html);
  const [debouncedCss, setDebouncedCss] = useState(css);
  const [debouncedJsx, setDebouncedJsx] = useState(jsx);
  const [compileError, setCompileError] = useState(null);
  const [compiledJsxDoc, setCompiledJsxDoc] = useState('');

  // 防抖更新 HTML/CSS（500ms）
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedHtml(html);
      setDebouncedCss(css);
    }, 500);
    return () => clearTimeout(timer);
  }, [html, css]);

  // 防抖更新 JSX（800ms，因為編譯需要更多時間）
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedJsx(jsx);
    }, 800);
    return () => clearTimeout(timer);
  }, [jsx]);

  // ✨ JSX 編譯效果
  useEffect(() => {
    // 如果不是 JSX 模式或沒有 JSX 代碼，跳過
    if (renderMode !== 'jsx' || !debouncedJsx) {
      setCompiledJsxDoc('');
      setCompileError(null);
      return;
    }

    let cancelled = false;

    const compileJsx = async () => {
      try {
        setCompileError(null);

        // 檢測代碼是否需要編譯（是否包含 JSX 語法）
        const needsCompilation = containsJSX(debouncedJsx);

        let executableCode;
        if (needsCompilation) {
          // 使用 Sucrase 編譯 JSX
          executableCode = await compileForIframe(debouncedJsx, {
            componentName: 'DemoComponent',
            mountId: 'root'
          });
        } else {
          // 代碼已經是 h() 格式，直接包裝
          executableCode = wrapPreactCode(debouncedJsx);
        }

        if (cancelled) return;

        // 生成 Preact 運行時 HTML
        const fullHTML = generatePreactIframeHTML({
          compiledCode: executableCode,
          customStyles: debouncedCss,
          title: title,
          mountId: 'root'
        });

        setCompiledJsxDoc(fullHTML);
      } catch (error) {
        if (cancelled) return;

        console.error('JSX compilation error:', error);
        setCompileError(error.message || '編譯錯誤');

        // 顯示錯誤頁面
        setCompiledJsxDoc(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      background: #1e1e1e;
      color: #f48771;
    }
    .error-container {
      background: #2d2020;
      border: 1px solid #f48771;
      border-radius: 8px;
      padding: 16px;
    }
    .error-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .error-message {
      font-size: 14px;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .error-hint {
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px solid #444;
      color: #888;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <div class="error-title">
      <span>⚠️</span>
      <span>JSX 編譯錯誤</span>
    </div>
    <div class="error-message">${escapeHtml(error.message || '未知錯誤')}</div>
    <div class="error-hint">
      💡 提示：檢查 JSX 語法是否正確，確保組件函數命名為 DemoComponent
    </div>
  </div>
</body>
</html>
        `);
      }
    };

    compileJsx();

    return () => {
      cancelled = true;
    };
  }, [debouncedJsx, debouncedCss, renderMode, title]);

  // 構建 HTML 預覽文檔
  const htmlPreviewDoc = useMemo(() => {
    // 檢測是否為完整 HTML 文檔
    const isCompleteDoc = debouncedHtml.trim().startsWith('<!DOCTYPE') ||
                          /^<html[\s>]/i.test(debouncedHtml.trim());

    if (isCompleteDoc) {
      // 完整文檔：直接使用，保留所有原始內容（Google Fonts、Tailwind 配置等）
      // 只需確保有 appCss 連結（如果需要的話）
      let doc = debouncedHtml;

      // 如果文檔中沒有 appCssUrl，在 </head> 前注入
      if (appCssUrl && !doc.includes(appCssUrl)) {
        doc = doc.replace(/<\/head>/i, `  <link rel="stylesheet" href="${appCssUrl}">\n</head>`);
      }

      return doc;
    }

    // HTML 片段：構建完整文檔
    // ✅ CSS 基本安全處理：移除潛在的 </style> 標籤注入
    const safeCss = debouncedCss.replace(/<\/style>/gi, '');

    // 消毒 HTML
    const sanitizedHtml = DOMPurify.sanitize(debouncedHtml, {
      ADD_TAGS: ['style', 'link', 'script'],
      ADD_ATTR: ['class', 'id', 'style', 'data-*', 'aria-*', 'role', 'tabindex', 'href', 'src']
    });

    return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  ${appCssUrl ? `<link rel="stylesheet" href="${appCssUrl}">` : ''}
  <style>
    /* 重置基礎樣式 */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    /* 用戶自定義樣式 */
    ${safeCss}
  </style>
</head>
<body class="preview-fullscreen">
  ${sanitizedHtml}
</body>
</html>`;
  }, [debouncedHtml, debouncedCss, language, title, appCssUrl]);

  // 決定使用哪個預覽文檔
  const previewDoc = useMemo(() => {
    if (renderMode === 'jsx' && debouncedJsx && compiledJsxDoc) {
      return compiledJsxDoc;
    }
    return htmlPreviewDoc;
  }, [renderMode, debouncedJsx, compiledJsxDoc, htmlPreviewDoc]);

  return (
    <div className="h-full w-full relative">
      {/* 編譯錯誤提示條 */}
      {compileError && renderMode === 'jsx' && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-red-900 text-white text-xs px-3 py-2 flex items-center gap-2">
          <span>⚠️</span>
          <span className="truncate">編譯錯誤：{compileError}</span>
        </div>
      )}

      <iframe
        title={title}
        srcDoc={previewDoc}
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
  );
}

/**
 * 包裝已編譯的 Preact 代碼（h() 格式）
 * 不需要 Sucrase 編譯，直接包裝為可執行模塊
 */
function wrapPreactCode(code) {
  return `
(function() {
  const { h, render, Fragment, useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, createContext, Component } = window.preact;

  ${code}

  // 渲染組件
  const container = document.getElementById('root');
  if (container && typeof DemoComponent !== 'undefined') {
    render(h(DemoComponent, null), container);
  } else if (container) {
    container.innerHTML = '<div style="padding:20px;color:#888;">No DemoComponent found</div>';
  }
})();
`;
}

/**
 * HTML 字符串轉義
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
