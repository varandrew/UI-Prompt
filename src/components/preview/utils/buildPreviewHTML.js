/**
 * buildPreviewHTML - 預覽 HTML 構建工具
 *
 * 提供：
 * - HTML 清理和標準化
 * - 外部資源移除
 * - 預覽文檔構建
 */

import DOMPurify from 'dompurify';
import { getDemoHTML } from '../../../utils/i18n/demoI18n';
import appCssUrl from '../../../index.css?url';
import { generateReactIframeHTML } from '../../../utils/reactRuntime';
import { generatePreactIframeHTML } from '../../../utils/preactRuntime';
import { preprocessJSX } from '../../../utils/jsxPreprocessor';

// ========== 工具函數 ==========

/**
 * 將 Markdown 章節標記做最小轉換，並清理純文字色彩說明
 * @param {string} html - 原始 HTML
 * @returns {string} 處理後的 HTML
 */
export function normalizeMarkdownHeadings(html) {
  if (!html) return html;

  let out = html;

  // 1) 將 Markdown 標題轉為 H3
  out = out
    .replace(/(^|\n)##\s*配色方案/g, '$1<h3 class="md-section-title">配色方案</h3>')
    .replace(/(^|\n)##\s*Color\s*Scheme/g, '$1<h3 class="md-section-title">Color Scheme</h3>');

  // 2) 清理：移除緊接在「配色方案/Color Scheme」標題後的純文字描述
  out = out.replace(/(^|\n)##\s*(配色方案|Color\s*Scheme)[\t ]*\n[\s\S]*?(?=(\n\s*<|$))/g, '$1');
  out = out.replace(/<h3[^>]*md-section-title[^>]*>(配色方案|Color\s*Scheme)<\/h3>\s*([^<]+)(?=(\s*<|$))/g, '');

  return out;
}

/**
 * 移除外部資源（避免因無網路或被阻擋導致預覽卡住）
 * @param {string} html - 原始 HTML
 * @returns {string} 處理後的 HTML
 */
export function stripExternalAssets(html) {
  if (!html) return html;
  try {
    const allowlist = /(cdn\.tailwindcss\.com)/i;
    return html
      // 移除外部腳本（保留 tailwind CDN），並過濾 Vite HMR
      .replace(/<script[^>]+src=["']([^"']+)["'][^>]*>\s*<\/script>/gi, (match, src) => {
        if (allowlist.test(src)) return match;
        if (/\/@vite\//i.test(src)) return '';
        if (/https?:\/\//i.test(src)) return '';
        return match;
      })
      // 移除外部樣式連結（保留白名單）
      .replace(/<link[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/gi, (match, href) => {
        if (allowlist.test(href)) return match;
        return '';
      })
      // 移除相對路徑的 HMR 腳本/樣式
      .replace(/<script[^>]+src=["']\/@vite\/[^"']*["'][^>]*><\/script>/gi, '')
      .replace(/<link[^>]+href=["']\/@vite\/[^"']*["'][^>]*>/gi, '');
  } catch {
    return html;
  }
}

/**
 * 從 HTML 中提取隱藏的完整頁面內容
 * @param {string} html - 原始 HTML
 * @returns {string} 提取的內容
 */
export function extractFullPageContent(html) {
  if (!html) return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
  const hiddenElements = doc.querySelectorAll('[style*="display: none"]');

  if (hiddenElements.length > 0) {
    const fullPageElement = hiddenElements[0];
    fullPageElement.removeAttribute('style');
    return fullPageElement.outerHTML;
  }

  return html;
}

/**
 * 檢測 HTML 是否為完整的獨立文檔
 * 完整文檔包含 <!DOCTYPE> 或 <html> 開頭標記
 * @param {string} html - HTML 內容
 * @returns {boolean} 是否為完整文檔
 */
export function isCompleteHTMLDocument(html) {
  if (!html || typeof html !== 'string') return false;

  const trimmed = html.trim().toLowerCase();
  return (
    trimmed.startsWith('<!doctype') ||
    trimmed.startsWith('<html') ||
    /^<html[\s>]/i.test(html.trim())
  );
}

/**
 * 檢測完整 HTML 文檔是否有外部 CSS 連結需要內嵌
 * @param {string} html - HTML 內容
 * @returns {boolean} 是否有外部 CSS 連結
 */
export function hasExternalCSSLink(html) {
  if (!html || typeof html !== 'string') return false;
  // 匹配相對路徑的 CSS 連結（如 href="fullpage.css" 或 href="./styles.css"）
  // 不匹配 CDN 連結（如 https:// 開頭）
  return /<link[^>]+rel=["']stylesheet["'][^>]+href=["'](?!https?:\/\/)([^"']+\.css)["'][^>]*>/i.test(html) ||
         /<link[^>]+href=["'](?!https?:\/\/)([^"']+\.css)["'][^>]+rel=["']stylesheet["'][^>]*>/i.test(html);
}

/**
 * 將外部 CSS 連結替換為內嵌樣式
 * @param {string} html - 包含外部 CSS 連結的 HTML
 * @param {string} styles - CSS 樣式內容
 * @returns {string} 處理後的 HTML
 */
export function inlineExternalCSS(html, styles) {
  if (!html || !styles) return html;

  // 移除相對路徑的外部 CSS 連結
  let result = html.replace(
    /<link[^>]+rel=["']stylesheet["'][^>]+href=["'](?!https?:\/\/)([^"']+\.css)["'][^>]*>/gi,
    ''
  ).replace(
    /<link[^>]+href=["'](?!https?:\/\/)([^"']+\.css)["'][^>]+rel=["']stylesheet["'][^>]*>/gi,
    ''
  );

  // 在 </head> 之前插入內嵌樣式
  if (result.includes('</head>')) {
    result = result.replace('</head>', `<style>\n${styles}\n</style>\n</head>`);
  } else if (result.includes('<body')) {
    // 如果沒有 </head>，在 <body> 之前插入
    result = result.replace('<body', `<style>\n${styles}\n</style>\n<body`);
  }

  return result;
}

// ========== 交互腳本 ==========

// 工具按鈕交互腳本（用於 paint-toolbox 等組件）
const INTERACTIVE_SCRIPT = `(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();`;

// ========== JSX 渲染支援 ==========

/**
 * 構建 React JSX 加載中頁面
 * @param {string} language - 語言代碼
 * @param {string} loadingText - 加載提示文字
 * @returns {string} 加載頁面 HTML
 */
export function buildReactLoadingHTML(language, loadingText) {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <title>${loadingText}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #0b0b0f;
    }
    .minimalism-loader {
      display: flex;
      gap: 10px;
    }
    .minimalism-loader-dot {
      width: 10px;
      height: 10px;
      border-radius: 2px;
      background: #e5e7eb;
      animation: pulse 1s ease-in-out infinite;
    }
    .minimalism-loader-dot:nth-child(2) { animation-delay: 0.15s; }
    .minimalism-loader-dot:nth-child(3) { animation-delay: 0.3s; }
    @keyframes pulse {
      0%, 100% { opacity: 0.3; transform: translateY(0); }
      50% { opacity: 1; transform: translateY(-6px); }
    }
  </style>
</head>
<body>
  <div class="minimalism-loader" aria-label="${loadingText}">
    <div class="minimalism-loader-dot"></div>
    <div class="minimalism-loader-dot"></div>
    <div class="minimalism-loader-dot"></div>
  </div>
</body>
</html>`;
}

/**
 * 構建 React JSX 錯誤頁面
 * @param {string} language - 語言代碼
 * @param {object|string} error - 錯誤對象或消息
 * @returns {string} 錯誤頁面 HTML
 */
export function buildReactErrorHTML(language, error) {
  const errorMessage = typeof error === 'string' ? error : (error?.message || 'Unknown compilation error');
  const errorStack = typeof error === 'object' ? error.stack : '';

  const title = language === 'zh-CN' ? '編譯錯誤' : 'Compilation Error';
  const headerText = language === 'zh-CN' ? 'React JSX 編譯失敗' : 'React JSX Compilation Failed';

  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a1a;
      color: #e5e5e5;
      line-height: 1.6;
    }
    .error-container {
      max-width: 800px;
      margin: 0 auto;
      background: #2a2a2a;
      border-radius: 8px;
      padding: 24px;
      border-left: 4px solid #ef4444;
    }
    .error-header {
      color: #ef4444;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .error-icon {
      font-size: 24px;
    }
    .error-message {
      background: #1a1a1a;
      padding: 16px;
      border-radius: 4px;
      font-family: 'SF Mono', Monaco, 'Cascadia Code', Consolas, monospace;
      font-size: 14px;
      white-space: pre-wrap;
      word-break: break-word;
      color: #fca5a5;
      margin-bottom: 16px;
    }
    .error-stack {
      background: #1a1a1a;
      padding: 12px;
      border-radius: 4px;
      font-family: 'SF Mono', Monaco, monospace;
      font-size: 12px;
      color: #9ca3af;
      white-space: pre-wrap;
      word-break: break-word;
      overflow-x: auto;
      max-height: 300px;
      overflow-y: auto;
    }
    .error-hint {
      color: #9ca3af;
      font-size: 14px;
      margin-top: 16px;
      padding: 12px;
      background: #1a1a1a;
      border-radius: 4px;
      border-left: 3px solid #f59e0b;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <div class="error-header">
      <span class="error-icon">⚠️</span>
      <span>${headerText}</span>
    </div>
    <div class="error-message">${DOMPurify.sanitize(errorMessage)}</div>
    ${errorStack ? `<div class="error-stack">${DOMPurify.sanitize(errorStack)}</div>` : ''}
    <div class="error-hint">
      ${language === 'zh-CN'
        ? '請檢查 JSX 代碼語法是否正確，確保所有導入的組件都已定義。'
        : 'Please check your JSX syntax and ensure all imported components are defined.'}
    </div>
  </div>
</body>
</html>`;
}

/**
 * 構建 React JSX 預覽 HTML
 * @param {Object} options - 構建選項
 * @param {string} options.compiledCode - 編譯後的 JavaScript 代碼
 * @param {string} options.componentName - 組件名稱
 * @param {string} options.styles - CSS 樣式
 * @param {string} options.title - 頁面標題
 * @returns {string} 完整的 React 預覽 HTML
 */
export function buildReactJSXPreview({ compiledCode, componentName = 'App', styles = '', title = 'React Preview' }) {
  return generateReactIframeHTML({
    compiledCode,
    componentName,
    customStyles: styles,
    title,
    mountId: 'root',
    theme: 'light'
  });
}

/**
 * 構建 Preact JSX 預覽 HTML
 * @param {Object} options - 構建選項
 * @param {string} options.jsx - JSX 源代碼
 * @param {string} options.styles - CSS 樣式
 * @param {string} options.title - 頁面標題
 * @returns {string} 完整的 Preact 預覽 HTML
 */
export function buildPreactJSXPreview({ jsx, styles = '', title = 'Preact Preview' }) {
  // Preprocess JSX to fix escape sequences
  const { code: processedJSX, errors, warnings } = preprocessJSX(jsx);

  if (errors.length > 0) {
    console.error('[Preact JSX] Preprocessing errors:', errors);
  }

  if (warnings.length > 0) {
    console.warn('[Preact JSX] Preprocessing warnings:', warnings);
  }

  // Wrap JSX code with Preact runtime initialization
  const wrappedCode = `
    (function() {
      'use strict';

      // Import Preact hooks into local scope
      const { h, render, Fragment, Component } = window.preact;
      const { useState, useEffect, useRef, useMemo, useCallback } = window.preact;

      // User JSX code
      ${processedJSX}

      // Render the component
      try {
        const container = document.getElementById('root');
        if (container && typeof DemoComponent !== 'undefined') {
          render(h(DemoComponent, null), container);
        } else if (container) {
          container.innerHTML = '<div class="runtime-error"><strong>Component Not Found:</strong> DemoComponent was not defined in the code.</div>';
        }
      } catch (error) {
        const container = document.getElementById('root');
        if (container) {
          container.innerHTML = '<div class="runtime-error"><strong>Render Error:</strong> ' + (error.message || 'Unknown error') + '</div>';
        }
        console.error('[Preact JSX] Render error:', error);
      }
    })();
  `;

  return generatePreactIframeHTML({
    compiledCode: wrappedCode,
    customStyles: styles,
    title,
    mountId: 'root',
    theme: 'light'
  });
}

// ========== HTML 構建器 ==========

/**
 * 處理並清理 HTML 內容
 * @param {string} html - 原始 HTML
 * @param {string} language - 語言代碼
 * @returns {string} 清理後的 HTML
 */
function processHTML(html, language) {
  const processed = getDemoHTML(html || '', language);
  const normalized = stripExternalAssets(normalizeMarkdownHeadings(processed));
  return DOMPurify.sanitize(normalized);
}

/**
 * 清理 CSS 樣式
 * @param {string} styles - 原始 CSS
 * @returns {string} 清理後的 CSS
 */
function sanitizeStyles(styles) {
  return DOMPurify.sanitize(styles || '');
}

/**
 * 構建完整的 HTML 文檔
 * @param {Object} options - 構建選項
 * @returns {string} 完整的 HTML 文檔
 */
function buildHTMLDocument({
  title,
  language,
  styles,
  content,
  bodyClass = 'preview-fullscreen'
}) {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${styles}
  </style>
</head>
<body class="${bodyClass}">
  ${content}
  <script>${INTERACTIVE_SCRIPT}</script>
</body>
</html>`;
}

/**
 * 構建加載中骨架頁面
 * @param {string} language - 語言代碼
 * @param {string} loadingText - 加載提示文字
 * @returns {string} 骨架頁面 HTML
 */
function buildLoadingHTML(language, loadingText) {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${loadingText}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;} .center{display:flex;align-items:center;justify-content:center;height:60vh;color:#666}</style>
</head>
<body><div class="center">${loadingText}</div>
  <script>${INTERACTIVE_SCRIPT}</script>
</body>
</html>`;
}

// ========== 主構建函數 ==========

/**
 * 構建預覽 HTML
 *
 * @param {Object} options - 構建選項
 * @param {Object} options.previewContent - 異步加載的預覽內容 { html, styles }
 * @param {Array} options.previewsList - 預覽列表
 * @param {number} options.activeIndex - 當前活躍索引
 * @param {string} options.fullPagePreviewId - 完整頁面預覽 ID
 * @param {string} options.fullPageHTML - 完整頁面 HTML
 * @param {string} options.fullPageStyles - 完整頁面樣式
 * @param {string} options.htmlContent - 卡片級 HTML 內容
 * @param {string} options.customStyles - 自定義樣式
 * @param {string} options.language - 語言代碼
 * @param {string} options.displayTitle - 顯示標題
 * @param {Function} options.t - 翻譯函數
 * @param {Object} options.asyncPreview - 異步加載的預覽對象（支持 renderMode）
 * @param {string} options.asyncPreviewId - 異步預覽 ID
 * @param {boolean} options.isLoadingPreview - 是否正在加載預覽
 * @param {Object} options.previewCacheRef - 預覽緩存引用
 * @returns {string} 完整的預覽 HTML 文檔
 */
export function buildPreviewHTML({
  previewContent,
  previewsList,
  activeIndex,
  fullPagePreviewId,
  fullPageHTML,
  fullPageStyles,
  htmlContent,
  customStyles,
  language,
  displayTitle,
  t,
  asyncPreview,
  asyncPreviewId, // eslint-disable-line no-unused-vars -- Reserved for future async preview caching
  isLoadingPreview,
  previewCacheRef // eslint-disable-line no-unused-vars -- Reserved for future preview cache optimization
}) {
  // ========== JSX 渲染模式處理 ==========
  // 優先處理 asyncPreview 的 JSX 渲染模式
  if (asyncPreview) {
    const { renderMode, compiledCode, componentName, error, jsx, styles, html } = asyncPreview;

    // 1a. React JSX 模式 - 使用編譯後的代碼
    if (renderMode === 'react-jsx') {
      // 如果有編譯錯誤，顯示錯誤頁面
      if (error) {
        return buildReactErrorHTML(language, error);
      }

      // 如果有編譯後的代碼，渲染 React 預覽
      if (compiledCode) {
        return buildReactJSXPreview({
          compiledCode,
          componentName: componentName || 'App',
          styles: styles || customStyles || '',
          title: t('preview.fullTitle', { title: displayTitle }),
          language
        });
      }

      // 如果正在加載，顯示加載頁面
      if (isLoadingPreview) {
        return buildReactLoadingHTML(language, t('loading') || 'Loading...');
      }
    }

    // 1b. Preact JSX 模式 - 使用原始 JSX 代碼
    if (renderMode === 'jsx' && jsx) {
      return buildPreactJSXPreview({
        jsx,
        styles: styles || customStyles || '',
        title: t('preview.fullTitle', { title: displayTitle }),
        language
      });
    }

    // 1c. HTML 模式 - asyncPreview 中有 HTML 內容但沒有 renderMode
    if (html || styles) {
      // 如果 HTML 是完整的獨立文檔（包含 <!DOCTYPE> 或 <html>），特殊處理
      // 不要通過 buildHTMLDocument 重新包裝，否則會丟失內嵌的 <style> 和 <script>
      if (html && isCompleteHTMLDocument(html)) {
        // 如果有外部 CSS 連結，需要將 CSS 內嵌
        if (hasExternalCSSLink(html) && styles) {
          return inlineExternalCSS(html, styles);
        }
        // 沒有外部 CSS 連結，直接返回完整 HTML
        return html;
      }

      return buildHTMLDocument({
        title: t('preview.fullTitle', { title: displayTitle }),
        language,
        styles: sanitizeStyles(styles || ''),
        content: processHTML(html || '', language)
      });
    }
  }

  // ========== 標準 HTML 渲染模式 ==========
  // 2. 優先使用異步加載的內容
  if (previewContent && (previewContent.html || previewContent.styles)) {
    // 如果 HTML 是完整的獨立文檔，特殊處理
    if (previewContent.html && isCompleteHTMLDocument(previewContent.html)) {
      if (hasExternalCSSLink(previewContent.html) && previewContent.styles) {
        return inlineExternalCSS(previewContent.html, previewContent.styles);
      }
      return previewContent.html;
    }

    return buildHTMLDocument({
      title: t('preview.fullTitle', { title: displayTitle }),
      language,
      styles: sanitizeStyles(previewContent.styles),
      content: processHTML(previewContent.html, language)
    });
  }

  // 3. 使用多預覽列表
  if (previewsList && previewsList.length > 0) {
    const current = previewsList[Math.min(activeIndex, previewsList.length - 1)];

    // 3a. 若需要異步加載但內容尚未到位，顯示骨架頁面
    if ((current?.previewId || fullPagePreviewId) && !previewContent) {
      return buildLoadingHTML(language, t('loading'));
    }

    // 3b. 解析當前預覽的 HTML 和樣式
    let previewHTML = current.html || '';
    let previewStyles = current.styles || '';

    // 佔位符回退
    if (previewHTML.includes('使用原有的 demoHTML')) {
      previewHTML = htmlContent || '';
    }
    if (previewStyles.includes('使用原有的 customStyles') || previewStyles.includes('fullPageStyles')) {
      previewStyles = `${fullPageStyles || ''}\n${customStyles || ''}`.trim();
    }

    // 如果沒有 HTML，嘗試使用 fullPageHTML 或提取隱藏內容
    if (!previewHTML) {
      if (fullPageHTML) {
        previewHTML = fullPageHTML;
        previewStyles = fullPageStyles || customStyles || '';
      } else {
        previewHTML = extractFullPageContent(htmlContent);
        previewStyles = customStyles || '';
      }
    }

    const titleKey = current.type === 'full' ? 'preview.fullTitle' : 'preview.title';

    // 如果 HTML 是完整的獨立文檔，特殊處理
    if (previewHTML && isCompleteHTMLDocument(previewHTML)) {
      if (hasExternalCSSLink(previewHTML) && previewStyles) {
        return inlineExternalCSS(previewHTML, previewStyles);
      }
      return previewHTML;
    }

    return buildHTMLDocument({
      title: t(titleKey, { title: displayTitle }),
      language,
      styles: sanitizeStyles(previewStyles),
      content: processHTML(previewHTML, language)
    });
  }

  // 4. 使用完整頁面 HTML
  if (fullPageHTML) {
    // 如果 HTML 是完整的獨立文檔，特殊處理
    if (isCompleteHTMLDocument(fullPageHTML)) {
      if (hasExternalCSSLink(fullPageHTML) && fullPageStyles) {
        return inlineExternalCSS(fullPageHTML, fullPageStyles);
      }
      return fullPageHTML;
    }

    return buildHTMLDocument({
      title: t('preview.fullTitle', { title: displayTitle }),
      language,
      styles: sanitizeStyles(fullPageStyles),
      content: processHTML(fullPageHTML, language)
    });
  }

  // 5. 後備：從 htmlContent 提取隱藏內容
  const extractedContent = extractFullPageContent(htmlContent);

  return buildHTMLDocument({
    title: t('preview.title', { title: displayTitle }),
    language,
    styles: sanitizeStyles(customStyles),
    content: processHTML(extractedContent, language)
  });
}

export default buildPreviewHTML;
