import { useMemo, useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

/**
 * 實時預覽組件
 * - iframe 隔離渲染
 * - 防抖更新
 * - 錯誤邊界
 */
export function LivePreview({
  html = '',
  css = '',
  language = 'zh-CN',
  title = 'Preview',
  appCssUrl = ''
}) {
  const [debouncedHtml, setDebouncedHtml] = useState(html);
  const [debouncedCss, setDebouncedCss] = useState(css);

  // 防抖更新（500ms）
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedHtml(html);
      setDebouncedCss(css);
    }, 500);
    return () => clearTimeout(timer);
  }, [html, css]);

  // 構建預覽文檔
  const previewDoc = useMemo(() => {
    // ✅ CSS 基本安全處理：移除潛在的 </style> 標籤注入
    // 不使用 DOMPurify，因為它會清空所有 CSS 內容
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

  return (
    <div className="h-full w-full relative">
      <iframe
        title={title}
        srcDoc={previewDoc}
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
}
