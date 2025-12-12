import { useEffect, useState, useMemo, useCallback } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { CodeEditor } from '../../components/code/CodeEditor';
import { LivePreview } from '../../components/code/LivePreview';
import { CodeEditorToolbar } from '../../components/code/CodeEditorToolbar';
import { getDemoHTML } from '../../utils/i18n/demoI18n';
import { loadPreview } from '../../utils/previewLoader';
import appCssUrl from '../../index.css?url';

/**
 * 代碼編輯器頁面
 * - 支持實時編輯 HTML/CSS 並預覽
 * - 分割視圖：左側編輯器，右側預覽
 * - Tab 切換：HTML / CSS / Full Code
 */
export function CodeEditorPage() {
  const { style } = useLoaderData();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();

  // 編輯器狀態
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsxCode, setJsxCode] = useState('');  // ✨ 新增：JSX 代碼狀態
  const [activeTab, setActiveTab] = useState('html');
  const [theme, setTheme] = useState('vs-dark');
  const [splitRatio, setSplitRatio] = useState(50);
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [originalCode, setOriginalCode] = useState({ html: '', css: '', jsx: '' });  // ✨ 新增 jsx

  // 預覽索引
  const [activeIndex, setActiveIndex] = useState(0);

  // 提取風格數據
  const {
    id,
    title,
    demoHTML = '',
    customStyles = '',
    fullPageHTML = '',
    fullPageStyles = '',
    fullPagePreviewId = '',
    previews = [],
    demoJSX = '',      // ✨ 新增：JSX 代碼
    renderMode = ''    // ✨ 新增：渲染模式
  } = style;

  // 標題多語處理：支援物件或翻譯鍵
  const resolveTitle = useCallback((rawTitle) => {
    if (!rawTitle) return '';
    if (typeof rawTitle === 'string') {
      return rawTitle.includes('.') ? t(rawTitle) : rawTitle;
    }
    if (typeof rawTitle === 'object') {
      return rawTitle[language] || rawTitle['en-US'] || rawTitle['zh-CN'] || Object.values(rawTitle)[0] || '';
    }
    return String(rawTitle);
  }, [t, language]);

  const displayTitle = resolveTitle(title);

  const previewsList = useMemo(() => {
    return Array.isArray(previews) ? previews : [];
  }, [previews]);

  // 獲取默認預覽索引
  const getDefaultIndex = useCallback(() => {
    if (previewsList && previewsList.length > 0) {
      return 0;
    }
    return 0;
  }, [previewsList]);

  // 從 URL 讀取初始索引
  useEffect(() => {
    const urlPreviewIndex = searchParams.get('previewIndex');
    if (urlPreviewIndex !== null) {
      const index = parseInt(urlPreviewIndex, 10);
      if (!isNaN(index) && index >= 0 && index < previewsList.length) {
        setActiveIndex(index);
      } else {
        setActiveIndex(getDefaultIndex());
      }
    } else {
      setActiveIndex(getDefaultIndex());
    }
    setIsLoading(true);
  }, [searchParams, previewsList, getDefaultIndex]);

  // 載入代碼內容
  useEffect(() => {
    const loadCode = async () => {
      setIsLoading(true);

      let html = '';
      let css = '';

      // 優先從 previewId 異步加載，添加安全邊界檢查
      const current = (previewsList && previewsList.length > 0)
        ? previewsList[Math.min(activeIndex, previewsList.length - 1)] || previewsList[0]
        : null;
      const previewId = current?.previewId || fullPagePreviewId;

      if (previewId) {
        try {
          const { html: asyncHtml, styles: asyncStyles } = await loadPreview(previewId);
          html = asyncHtml || '';

          // 檢測是否為完整 HTML 文檔
          const isCompleteDoc = html.trim().startsWith('<!DOCTYPE') ||
                                /^<html[\s>]/i.test(html.trim());

          if (isCompleteDoc) {
            // 完整文檔：保持 HTML 原樣，CSS 使用外部加載的 styles
            // 不要從 HTML 中提取/移除 <style> 標籤，因為文檔可能包含 Tailwind 配置等重要腳本
            css = asyncStyles || '';
          } else {
            // HTML 片段：如果 styles 為空，嘗試從 HTML 中提取 <style> 內容
            if (!asyncStyles && asyncHtml) {
              const styleMatch = asyncHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
              if (styleMatch) {
                css = styleMatch[1].trim();
                // 從 HTML 中移除 <style> 標籤，避免重複
                html = asyncHtml.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();
              } else {
                css = asyncStyles || '';
              }
            } else {
              css = asyncStyles || '';
            }
          }
        } catch (err) {
          console.error('Failed to load preview:', err);
        }
      }

      // 回退到靜態數據
      if (!html) {
        if (current && current.html) {
          const rawHTML = current.html;

          // 檢測是否為完整 HTML 文檔
          const isCompleteDoc = rawHTML.trim().startsWith('<!DOCTYPE') ||
                                /^<html[\s>]/i.test(rawHTML.trim());

          if (isCompleteDoc) {
            // 完整文檔：保持 HTML 原樣，使用獨立的 CSS
            html = rawHTML;
            css = current.styles || customStyles || '';
          } else {
            // HTML 片段：正常處理
            html = rawHTML;
            css = current.styles || customStyles || '';

            // 如果 css 仍為空但 html 包含 <style>，提取它
            if (!css) {
              const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
              if (styleMatch) {
                css = styleMatch[1].trim();
                html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();
              }
            }
          }
        } else if (fullPageHTML) {
          html = fullPageHTML;
          css = fullPageStyles || customStyles || '';
        } else {
          html = demoHTML;
          css = customStyles;
        }
      }

      // 應用語言處理
      html = getDemoHTML(html, language);

      // ✨ 新增：處理 JSX 代碼
      let jsx = '';
      if (current && current.demoJSX) {
        jsx = current.demoJSX;
      } else if (demoJSX) {
        jsx = demoJSX;
      }

      setHtmlCode(html);
      setCssCode(css);
      setJsxCode(jsx);  // ✨ 新增
      setOriginalCode({ html, css, jsx });  // ✨ 新增 jsx
      setIsLoading(false);
    };

    loadCode();
  }, [activeIndex, previewsList, fullPagePreviewId, fullPageHTML, fullPageStyles, demoHTML, customStyles, demoJSX, language]);

  // 構建完整預覽 HTML
  const buildFullHTML = useCallback(() => {
    // 檢測 htmlCode 是否已經是完整文檔
    const isCompleteDoc = htmlCode.trim().startsWith('<!DOCTYPE') ||
                          /^<html[\s>]/i.test(htmlCode.trim());

    if (isCompleteDoc) {
      // 檢測文檔中是否已有 Tailwind CDN
      const hasTailwind = htmlCode.includes('cdn.tailwindcss.com');
      // 檢測文檔中是否已有 appCss
      const hasAppCss = htmlCode.includes(appCssUrl);
      // 檢測文檔中是否已有 <style> 標籤
      const hasInlineStyle = /<style[^>]*>[\s\S]*?<\/style>/i.test(htmlCode);

      // 構建需要注入的內容
      let injection = '';
      if (!hasTailwind) {
        injection += `  <script src="https://cdn.tailwindcss.com"></script>\n`;
      }
      if (!hasAppCss) {
        injection += `  <link rel="stylesheet" href="${appCssUrl}">\n`;
      }

      // 如果文檔中已有內嵌樣式，且有額外 CSS 編輯器內容需要注入
      if (cssCode && !hasInlineStyle) {
        // 沒有內嵌樣式，需要注入 CSS
        return htmlCode.replace(
          /<\/head>/i,
          `${injection}  <style>
${cssCode}
  </style>
</head>`
        );
      } else if (cssCode && hasInlineStyle) {
        // 有內嵌樣式，在現有樣式之後追加額外 CSS（如果有的話）
        // 注意：cssCode 來自外部 CSS 文件，可能為空
        if (injection) {
          return htmlCode.replace(/<\/head>/i, `${injection}</head>`);
        }
        return htmlCode;
      } else {
        // 沒有額外 CSS，只添加缺失的資源
        if (injection) {
          return htmlCode.replace(/<\/head>/i, `${injection}</head>`);
        }
        return htmlCode;
      }
    }

    // 否則構建完整文檔（HTML 片段的情況）
    return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${displayTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
${cssCode}
  </style>
</head>
<body class="preview-fullscreen">
${htmlCode}
</body>
</html>`;
  }, [htmlCode, cssCode, language, displayTitle]);

  // 處理代碼變更
  const handleCodeChange = useCallback((value) => {
    if (activeTab === 'html') {
      setHtmlCode(value);
    } else if (activeTab === 'css') {
      setCssCode(value);
    } else if (activeTab === 'jsx') {  // ✨ 新增：JSX 處理
      setJsxCode(value);
    } else if (activeTab === 'full') {
      // 從完整代碼中提取 HTML 和 CSS
      const styleMatch = value.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      const bodyMatch = value.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

      if (styleMatch) {
        setCssCode(styleMatch[1].trim());
      }
      if (bodyMatch) {
        setHtmlCode(bodyMatch[1].trim());
      }
    }
  }, [activeTab]);

  // 獲取當前編輯器內容
  const currentCode = useMemo(() => {
    switch (activeTab) {
      case 'html':
        return htmlCode;
      case 'css':
        return cssCode;
      case 'jsx':  // ✨ 新增
        return jsxCode;
      case 'full':
        return buildFullHTML();
      default:
        return htmlCode;
    }
  }, [activeTab, htmlCode, cssCode, jsxCode, buildFullHTML]);

  // 獲取當前語言
  const currentLanguage = useMemo(() => {
    switch (activeTab) {
      case 'html':
      case 'full':
        return 'html';
      case 'css':
        return 'css';
      case 'jsx':  // ✨ 新增：JSX 使用 javascript 語言模式
        return 'javascript';
      default:
        return 'html';
    }
  }, [activeTab]);

  // 重置代碼
  const handleReset = useCallback(() => {
    setHtmlCode(originalCode.html);
    setCssCode(originalCode.css);
    setJsxCode(originalCode.jsx);  // ✨ 新增
  }, [originalCode]);

  // 複製代碼
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      return true;
    } catch (err) {
      console.error('Copy failed:', err);
      return false;
    }
  }, [currentCode]);

  // 下載代碼
  const handleDownload = useCallback(() => {
    const blob = new Blob([buildFullHTML()], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id || 'style'}-preview.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [buildFullHTML, id]);

  // ESC 鍵返回
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        navigate(-1);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navigate]);

  // ✨ 動態 Tab 選項（根據是否有 JSX 代碼）
  const tabs = useMemo(() => {
    // 檢查當前預覽或風格是否有 JSX 代碼
    const current = previewsList && previewsList.length > 0
      ? previewsList[Math.min(activeIndex, previewsList.length - 1)]
      : null;

    const isJSXMode = (current && current.renderMode === 'jsx') || (current && current.demoJSX) || renderMode === 'jsx';

    // ✨ 如果是 JSX 模式，只顯示 JSX 標籤
    if (isJSXMode) {
      return [{ id: 'jsx', label: 'JSX' }];
    }

    // 非 JSX 模式：顯示 HTML, CSS, Full Code
    return [
      { id: 'html', label: 'HTML' },
      { id: 'css', label: 'CSS' },
      { id: 'full', label: t('codeEditor.fullCode') || 'Full Code' }
    ];
  }, [previewsList, activeIndex, demoJSX, renderMode, t]);

  // ✨ 當進入 JSX 模式時，自動切換到 JSX 標籤
  useEffect(() => {
    const current = previewsList && previewsList.length > 0
      ? previewsList[Math.min(activeIndex, previewsList.length - 1)]
      : null;
    const isJSXMode = (current && current.renderMode === 'jsx') || (current && current.demoJSX) || renderMode === 'jsx';

    if (isJSXMode && activeTab !== 'jsx') {
      setActiveTab('jsx');
    } else if (!isJSXMode && activeTab === 'jsx') {
      // 如果不是 JSX 模式但當前是 jsx 標籤，切換到 html
      setActiveTab('html');
    }
  }, [previewsList, activeIndex, renderMode, activeTab]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* 頂部工具欄 */}
      <CodeEditorToolbar
        title={displayTitle}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onThemeToggle={() => setTheme(t => t === 'vs-dark' ? 'light' : 'vs-dark')}
        onCopy={handleCopy}
        onReset={handleReset}
        onDownload={handleDownload}
        isVertical={isVertical}
        onLayoutToggle={() => setIsVertical(v => !v)}
        onClose={() => navigate(-1)}
        t={t}
      />

      {/* 主體區域：編輯器 + 預覽 */}
      <div className={`flex-1 flex ${isVertical ? 'flex-col' : 'flex-row'} overflow-hidden`}>
        {/* 編輯器面板 */}
        <div
          className={`${isVertical ? '' : ''} bg-gray-900 overflow-hidden`}
          style={{
            [isVertical ? 'height' : 'width']: `${splitRatio}%`,
            minWidth: isVertical ? '100%' : '300px',
            minHeight: isVertical ? '200px' : '100%'
          }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              {t('loading')}
            </div>
          ) : (
            <CodeEditor
              value={currentCode}
              language={currentLanguage}
              theme={theme}
              onChange={handleCodeChange}
              readOnly={activeTab === 'full'}
            />
          )}
        </div>

        {/* 分割線 */}
        <div
          className={`${isVertical ? 'h-1 w-full cursor-row-resize' : 'w-1 h-full cursor-col-resize'} bg-gray-700 hover:bg-blue-500 transition-colors`}
          onMouseDown={(e) => {
            e.preventDefault();
            const startPos = isVertical ? e.clientY : e.clientX;
            const startRatio = splitRatio;

            const handleMouseMove = (e) => {
              const container = e.target.closest('.flex-1');
              if (!container) return;

              const containerSize = isVertical ? window.innerHeight - 56 : window.innerWidth;
              const currentPos = isVertical ? e.clientY : e.clientX;
              const delta = currentPos - startPos;
              const newRatio = startRatio + (delta / containerSize * 100);
              setSplitRatio(Math.max(20, Math.min(80, newRatio)));
            };

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />

        {/* 預覽面板 */}
        <div
          className="bg-white overflow-hidden"
          style={{
            [isVertical ? 'height' : 'width']: `${100 - splitRatio}%`,
            minWidth: isVertical ? '100%' : '300px',
            minHeight: isVertical ? '200px' : '100%'
          }}
        >
          <LivePreview
            html={htmlCode}
            css={cssCode}
            jsx={jsxCode}                                     // ✨ 新增
            renderMode={renderMode || (jsxCode ? 'jsx' : 'html')}  // ✨ 新增
            language={language}
            title={displayTitle}
            appCssUrl={appCssUrl}
          />
        </div>
      </div>
    </div>
  );
}
