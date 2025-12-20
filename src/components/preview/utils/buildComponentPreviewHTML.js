/**
 * buildComponentPreviewHTML - 組件預覽 HTML 構建工具
 *
 * 為組件變體構建完整的 HTML 文檔。
 * 與 buildPreviewHTML 不同，此函數：
 * - 不需要異步加載（變體內容是內聯的）
 * - 簡化的參數接口
 * - 專為組件預覽優化
 */

import { cachedSanitize } from '../../../utils/sanitizeCache';
import appCssUrl from '../../../index.css?url';

// 工具按鈕交互腳本（用於 paint-toolbox 等組件）
const INTERACTIVE_SCRIPT = `(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();`;

/**
 * 提取 HTML 中的 script 標籤內容
 * @param {string} html - 原始 HTML
 * @returns {Object} { cleanHtml: string, scripts: string[] }
 */
function extractScripts(html) {
  if (!html) return { cleanHtml: '', scripts: [] };

  const scripts = [];
  // 匹配所有 <script>...</script> 標籤（支持多行）
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = scriptRegex.exec(html)) !== null) {
    const scriptContent = match[1].trim();
    if (scriptContent) {
      scripts.push(scriptContent);
    }
  }

  // 移除 script 標籤，保留其他 HTML
  const cleanHtml = html.replace(scriptRegex, '').trim();

  return { cleanHtml, scripts };
}

const LOADING_HTML = `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading...</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
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
  <div class="minimalism-loader" aria-label="Loading">
    <div class="minimalism-loader-dot"></div>
    <div class="minimalism-loader-dot"></div>
    <div class="minimalism-loader-dot"></div>
  </div>
</body>
</html>`;

/**
 * 構建組件預覽 HTML 文檔
 *
 * @param {Object} options - 構建選項
 * @param {string} options.demoHTML - 組件 HTML 內容
 * @param {string} options.customStyles - 自定義 CSS 樣式
 * @param {string} options.displayTitle - 顯示標題（用於頁面 title）
 * @param {string} options.language - 語言代碼 (en-US | zh-CN)
 * @param {boolean} [options.includeTailwindCdn=false] - 是否注入 Tailwind CDN（預設關閉以提升切換速度）
 * @returns {string} 完整的 HTML 文檔
 */
export function buildComponentPreviewHTML({
  demoHTML = '',
  customStyles = '',
  displayTitle = 'Component Preview',
  language = 'en-US',
  includeTailwindCdn = false
}) {
  const langAttr = language || 'en-US';

  // 先提取 script 標籤內容（避免被 DOMPurify 移除）
  const { cleanHtml, scripts } = extractScripts(demoHTML || '');

  // 清理 HTML 和 CSS（DOMPurify 會移除 script 標籤，所以我們先提取了）
  const sanitizedHTML = cachedSanitize(cleanHtml, 'html');
  const sanitizedStyles = cachedSanitize(customStyles || '', 'css');

  // 構建組件 script 部分（將提取的 scripts 合併）
  const componentScripts = scripts.length > 0
    ? scripts.map(s => `<script>${s}</script>`).join('\n  ')
    : '';

  return `<!DOCTYPE html>
<html lang="${langAttr}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${displayTitle}</title>
  ${includeTailwindCdn ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    /* Reset and base styles */
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 2rem;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: #f9fafb;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body {
        background: #111827;
        color: #f9fafb;
      }
    }
    /* Custom styles */
    ${sanitizedStyles}
  </style>
</head>
<body class="preview-fullscreen">
  <div class="component-preview-container">
    ${sanitizedHTML}
  </div>
  <script>${INTERACTIVE_SCRIPT}</script>
  ${componentScripts}
</body>
</html>`;
}

/**
 * 組件預覽載入中 HTML（用於變體內容還沒到時，避免空白 iframe）
 *
 * @param {Object} options
 * @param {string} [options.language='en-US']
 * @returns {string}
 */
export function buildComponentLoadingHTML({ language = 'en-US' } = {}) {
  const langAttr = language || 'en-US';
  return LOADING_HTML.replace('lang="en-US"', `lang="${langAttr}"`);
}

/**
 * 構建組件預覽的空狀態 HTML
 *
 * @param {Object} options - 構建選項
 * @param {string} options.displayTitle - 顯示標題
 * @param {string} options.language - 語言代碼
 * @returns {string} 空狀態 HTML 文檔
 */
export function buildComponentEmptyStateHTML({
  displayTitle = 'Component Preview',
  language = 'en-US'
}) {
  const langAttr = language || 'en-US';
  const isZh = String(langAttr).toLowerCase().startsWith('zh');

  const title = isZh ? '暫無預覽內容' : 'No Preview Available';
  const hint = isZh
    ? '此組件變體尚未提供預覽 HTML。'
    : 'This component variant does not have preview HTML yet.';

  return `<!DOCTYPE html>
<html lang="${langAttr}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${displayTitle}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .empty-state {
      text-align: center;
      padding: 3rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 1rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      max-width: 400px;
      animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .empty-state-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    .empty-state-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
    }
    .empty-state-hint {
      font-size: 1rem;
      color: #6b7280;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="empty-state">
    <div class="empty-state-icon">📦</div>
    <h2 class="empty-state-title">${title}</h2>
    <p class="empty-state-hint">${hint}</p>
  </div>
</body>
</html>`;
}

export default buildComponentPreviewHTML;
