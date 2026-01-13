import { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { cachedSanitize } from '../../utils/sanitizeCache';
import appCssUrl from '../../index.css?url';
import { createLogger } from '../../utils/logger';

const logger = createLogger('IframeRenderer');

/**
 * IframeRenderer - iframe HTML 渲染組件
 *
 * 職責：
 * - 清理和消毒 HTML/CSS
 * - 渲染內容到隔離的 iframe
 * - 支持多種佈局模式
 * - 初始化基本交互功能
 * - 支持延遲加載
 *
 * @param {Object} props
 * @param {string} props.demoHTML - 必需：演示 HTML 內容
 * @param {string} props.customStyles - 必需：自定義 CSS 樣式
 * @param {string} props.id - 必需：風格 ID（用於 iframe title）
 * @param {string} props.language - 必需：當前語言（zh-CN | en-US）
 * @param {string} props.layoutMode - 可選：佈局模式（'centered' | 'fullWidth' | 'fullPage'）
 * @param {string} props.demoBoxClass - 可選：demo 容器的 CSS class
 * @param {object} props.demoBoxStyle - 可選：demo 容器的內聯樣式
 * @param {boolean} props.isVisible - 可選：是否可見（用於延遲加載）
 * @param {function} props.onIframeLoad - 可選：iframe 加載完成回調
 * @param {boolean} props.enableInteractivity - 可選：是否啟用交互（默認 true）
 */
export function IframeRenderer({
  demoHTML,
  customStyles = '',
  id,
  language,
  layoutMode = 'centered',
  demoBoxClass = 'bg-gray-50 dark:bg-gray-900',
  demoBoxStyle = {},
  isVisible = true,
  onIframeLoad,
  enableInteractivity = true,
  allowInlineScripts = false
}) {
  const iframeRef = useRef(null);

  /**
   * 移除外部資源（script src 和 link href）
   * 防止從外部加載潛在的惡意內容
   */
  const stripExternalAssets = (html) => {
   if (!html) return html;
    try {
      const allowlist = /(cdn\.tailwindcss\.com|cdn\.jsdelivr\.net\/npm\/tailwindcss|fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome)/i;
      return html
        .replace(/<script[^>]+src=["']([^"']+)["'][^>]*>\s*<\/script>/gi, (match, src) => {
          if (allowlist.test(src)) return match;
          if (/\/@vite\//i.test(src)) return '';
          if (/https?:\/\//i.test(src)) return '';
          return match; // 保留相對路徑或內聯
        })
        .replace(/<link[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/gi, (match, href) => {
          if (allowlist.test(href)) return match;
          return '';
        })
        .replace(/<script[^>]+src=["']\/@vite\/[^"']*["'][^>]*><\/script>/gi, '')
        .replace(/<link[^>]+href=["']\/@vite\/[^"']*["'][^>]*>/gi, '');
    } catch {
      return html;
    }
  };

  /**
   * 提取允許重新注入的外部資源（目前僅允許 Tailwind CDN）
   * 先記錄來源，再經過消毒流程，最後在 iframe head 內注回
   */
  const extractAllowedExternalAssets = (html) => {
    if (!html) return { scripts: [], links: [] };
    const allowlist = /(cdn\.tailwindcss\.com|cdn\.jsdelivr\.net\/npm\/tailwindcss|fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome)/i;
    const scripts = [];
    const links = [];

    try {
      html.replace(/<script[^>]+src=["']([^"']+)["'][^>]*>\s*<\/script>/gi, (match, src) => {
        if (allowlist.test(src)) scripts.push(src);
        return match;
      });
      html.replace(/<link[^>]+href=["']([^"']+)["'][^>]*>/gi, (match, href) => {
        if (allowlist.test(href)) links.push(href);
        return match;
      });
    } catch {
      // 忽略提取失敗，返回已收集的資源
    }

    return {
      scripts: Array.from(new Set(scripts)),
      links: Array.from(new Set(links))
    };
  };

  /**
   * 提取 <body> 標籤內的內容
   * 如果沒有 body 標籤，則清理 doctype/html/head 標籤
   */
  const extractBodyInner = (html) => {
    if (!html) return '';
    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (match) return match[1];
    return html
      .replace(/<!doctype[^>]*>/i, '')
      .replace(/<\/?html[^>]*>/gi, '')
      .replace(/<\/?head[^>]*>[\s\S]*?<\/?head>/gi, '')
      .replace(/<\/?body[^>]*>/gi, '');
  };

  /**
   * 提取內聯 <style> 標籤中的 CSS
   * 返回：{ html: 去除 style 標籤的 HTML, styles: 提取的 CSS }
   */
  const extractInlineStyles = (html) => {
    if (!html) return { html: '', styles: '' };
    const styles = [];
    const without = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
      styles.push(css || '');
      return '';
    });
    return { html: without, styles: styles.join('\n') };
  };

  /**
   * 提取內聯 <script> 標籤（不含 src）
   * - 預設 DOMPurify 會移除 script，導致動畫/互動失效
   * - allowInlineScripts=true 時，先提取後再在 iframe document 內重新注入
   */
  const extractInlineScripts = (html) => {
    if (!html) return { html: '', scripts: [] };
    const scripts = [];
    const without = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (match, attrs = '', code = '') => {
      // 保留外部腳本（由 extractAllowedExternalAssets + externalAssetsHTML 處理）
      if (/src\s*=/i.test(attrs)) return '';

      const typeMatch = String(attrs).match(/type\s*=\s*["']([^"']+)["']/i);
      const type = (typeMatch?.[1] || '').toLowerCase();
      const isJsType = !type || type.includes('javascript') || type === 'module';
      if (!isJsType) return '';

      const trimmed = String(code || '').trim();
      if (!trimmed) return '';

      scripts.push({ attrs, code: trimmed });
      return '';
    });

    return { html: without, scripts };
  };

  /**
   * 消毒 CSS，移除潛在的安全風險
   * - 移除 @import 外部資源
   * - 移除 url(javascript:...) 注入
   */
  const sanitizeCss = (css) => {
    if (!css) return '';
    return css
      .replace(/@import[^;]*https?:[^;]*;/gi, '')
      .replace(/url\(("|')?javascript:[^)]*\)/gi, '');
  };

  /**
   * 渲染 HTML 到 iframe
   */
  useEffect(() => {
    if (!isVisible) return; // 延遲加載：只有可見時才執行

    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // Track cleanup function for event listeners
    let cleanupFn = null;

    // 步驟 1: 清理 HTML
    const { scripts: externalScripts, links: externalLinks } = extractAllowedExternalAssets(demoHTML);
    const noExternal = stripExternalAssets(demoHTML || '');
    const { html: noStyleHtml, styles: inlineStyles } = extractInlineStyles(noExternal);
    const bodyInner = extractBodyInner(noStyleHtml);

    // 允許內聯腳本時：先提取，避免被 DOMPurify 移除
    const { html: bodyWithoutScripts, scripts: inlineScripts } = allowInlineScripts
      ? extractInlineScripts(bodyInner)
      : { html: bodyInner, scripts: [] };

    const sanitizedHTML = cachedSanitize(bodyWithoutScripts || '', 'html');
    const combinedStyles = sanitizeCss(`${inlineStyles || ''}\n${customStyles || ''}`);
    const hasTailwindScript = externalScripts.some((src) => /tailwindcss\.com/i.test(src));
    const hasTailwindCss = externalLinks.some((href) => /tailwindcss/i.test(href));
    const hasFontAwesome = externalLinks.some((href) => /font-awesome/i.test(href));
    const hasGoogleFonts = externalLinks.some((href) => /fonts\.googleapis\.com/i.test(href));
    const externalAssetsHTML = [
      ...(hasTailwindScript && !hasTailwindCss
        ? ['<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.10/dist/tailwind.min.css" />']
        : []),
      ...(hasFontAwesome
        ? []
        : ['<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />']),
      ...(hasGoogleFonts
        ? []
        : ['<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Rajdhani:wght@500;600;700&display=swap" />']),
      ...externalLinks.map((href) => `<link rel="stylesheet" href="${href}" />`),
      ...externalScripts.map((src) => `<script src="${src}"></script>`)
    ].join('\n');

    const inlineScriptsHTML = (allowInlineScripts && inlineScripts.length > 0)
      ? inlineScripts
        .map(({ attrs, code }) => `<script${attrs || ''}>\n${code}\n</script>`)
        .join('\n')
      : '';

    // 步驟 2: 檢測佈局模式
    const isFullWidthLayout =
      layoutMode === 'fullWidth' ||
      layoutMode === 'fullPage' ||
      customStyles.includes('grid-container') ||
      customStyles.includes('masonry-container');

    // 步驟 3: 生成完整 HTML 文檔
    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
${externalAssetsHTML}
<link rel="stylesheet" href="${appCssUrl}" />
<style>
  html, body { margin: 0; padding: 0; height: 100%; }
  *, *::before, *::after { box-sizing: border-box; }
  /* demo 容器，根據 layoutMode 調整顯示方式 */
  .demo-root {
    height: 100%;
    ${isFullWidthLayout
      ? 'display: block; width: 100%; padding: 0;'
      : 'display: flex; align-items: center; justify-content: center; padding: 24px;'
    }
  }
  ${combinedStyles}
</style>
</head>
<body>
  <div class="demo-root">${sanitizedHTML}</div>
  ${inlineScriptsHTML}
</body>
</html>`;

    // 步驟 4: 注入 iframe
    try {
      doc.open();
      doc.write(html);
      doc.close();

      // 步驟 5: 初始化交互 (inline with cleanup tracking)
      if (enableInteractivity) {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            // 工具箱切換：.paint-toolbox 內 .tool-button 單選 active
            // 使用 bubble phase (false) 而非 capture phase 以提升性能
            const handleToolClick = (e) => {
              const btn = e.target.closest?.('.tool-button');
              if (!btn) return;
              const container = btn.closest?.('.paint-toolbox');
              if (!container) return;

              // 使用 requestAnimationFrame 批次處理 DOM 更新
              requestAnimationFrame(() => {
                container.querySelectorAll?.('.tool-button.active')?.forEach((el) => el.classList.remove('active'));
                btn.classList.add('active');
              });
            };

            const initInteractivity = () => {
              iframeDoc.addEventListener('click', handleToolClick, false);
              // Store cleanup function
              cleanupFn = () => {
                iframeDoc.removeEventListener('click', handleToolClick, false);
              };
            };

            if (iframeDoc.readyState === 'complete' || iframeDoc.readyState === 'interactive') {
              initInteractivity();
            } else {
              iframeDoc.addEventListener('DOMContentLoaded', initInteractivity, { once: true });
            }
          }
        } catch {
          // 忽略 iframe 內初始互動失敗，不影響主要渲染
        }
      }

      // 步驟 6: 觸發加載完成回調
      if (onIframeLoad) {
        onIframeLoad(iframe);
      }
    } catch (error) {
      logger.error('Failed to write iframe document', error);
    }

    // Cleanup: remove event listeners when component unmounts or deps change
    return () => {
      if (cleanupFn) {
        cleanupFn();
      }
    };
  }, [isVisible, demoHTML, customStyles, layoutMode, enableInteractivity, onIframeLoad, allowInlineScripts]);

  // 如果不可見，顯示佔位符
  if (!isVisible) {
    return (
      <div className={`demo-box relative z-10 ${demoBoxClass}`} style={demoBoxStyle}>
        <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-zinc-200 dark:border-zinc-700 border-t-zinc-400 dark:border-t-zinc-500 rounded-full animate-spin"></div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">{language === 'zh-CN' ? '加载中...' : 'Loading...'}</span>
          </div>
        </div>
      </div>
    );
  }

  // 渲染 iframe
  return (
    <div className={`demo-box relative z-10 ${demoBoxClass}`} style={{ minHeight: '300px', ...demoBoxStyle }}>
      <iframe
        ref={iframeRef}
        title={`${language === 'zh-CN' ? 'UI 样式预览' : 'UI Style Preview'}: ${id}`}
        className="relative w-full h-full border-0 z-10"
        style={{ minHeight: '300px' }}
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
  );
}

// PropTypes 定義
IframeRenderer.propTypes = {
  /** 演示 HTML 內容 */
  demoHTML: PropTypes.string.isRequired,
  /** 自定義 CSS 樣式 */
  customStyles: PropTypes.string,
  /** 風格 ID（用於 iframe title） */
  id: PropTypes.string.isRequired,
  /** 當前語言 */
  language: PropTypes.oneOf(['zh-CN', 'en-US']).isRequired,
  /** 佈局模式 */
  layoutMode: PropTypes.oneOf(['centered', 'fullWidth', 'fullPage']),
  /** demo 容器的 CSS class */
  demoBoxClass: PropTypes.string,
  /** demo 容器的內聯樣式 */
  demoBoxStyle: PropTypes.object,
  /** 是否可見（用於延遲加載） */
  isVisible: PropTypes.bool,
  /** iframe 加載完成回調 */
  onIframeLoad: PropTypes.func,
  /** 是否啟用交互 */
  enableInteractivity: PropTypes.bool,
  /** 是否允許 demo 內的內聯腳本（動畫/互動） */
  allowInlineScripts: PropTypes.bool
};

// OPTIMIZATION Phase 4: Memoize IframeRenderer to prevent re-renders
// Component only updates when demoHTML, customStyles, or key props change
export default memo(IframeRenderer);
