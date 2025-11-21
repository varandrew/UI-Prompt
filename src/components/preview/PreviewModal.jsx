import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../prompt/PromptDrawer';
import { PreviewPromptGenerator } from '../../utils/promptGenerator';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { PreviewSelector } from './PreviewSelector';
import { hasMultiplePreviews } from '../../utils/previewsHelper';
import { DataVisualizationPreview } from './DataVisualizationPreview';
import { LANGUAGES } from "../../utils/i18n/languageConstants";
// ✅ 階段 3.1: 导入預覽加載器
import { loadPreview } from '../../utils/previewLoader';

// 預覽模態框：支援單一或多個預覽
// ✅ 階段 3.1: 新增 fullPagePreviewId 參数支持異步加載
// 新增參数 previews: Array<{ id, name, type: 'full'|'inline'|'data-visualization', html, styles, previewId }>
import appCssUrl from '../../index.css?url';

export function PreviewModal({
  isOpen,
  onClose,
  title,
  description = '',
  htmlContent,
  customStyles = '',
  fullPageHTML = '',
  fullPageStyles = '',
  fullPagePreviewId = '',  // ✅ 階段 3.1: 新增動態加載 ID
  previews,
  colorScheme = null,
  variant = null,
  // ✨ 新增：自定義風格 Prompt 支持
  stylePrompt = null
}) {
  const { t, language } = useLanguage();
  const isReactPreview = !!(variant && variant.reactComponent);

  // 處理 title：確保始終是字符串，只使用 i18n
  // 如果 title 是對象（i18n 格式），提取對應語言的文本
  // 如果 title 是字符串，可能是 i18n 鍵，嘗試翻譯；否則直接使用
  let displayTitle = '';
  
  if (typeof title === 'object' && title !== null && !Array.isArray(title)) {
    // 對象格式：直接提取對應語言的值
    displayTitle = title[language] || title[LANGUAGES.ZH_CN_LOWER] || title[LANGUAGES.ZH_CN] || title[LANGUAGES.EN_US] || '';
  } else if (typeof title === 'string') {
    // 字符串格式：可能是 i18n 鍵，嘗試翻譯
    const translated = t(title);
    // 如果翻譯結果与原值不同，說明是有效的 i18n 鍵
    displayTitle = translated !== title ? translated : title;
  }
  
  // 強制轉換為字符串，確保不會显示 [object Object]
  displayTitle = String(displayTitle || '');
  
  // 處理 description：確保始終是字符串
  let displayDescription = '';
  if (typeof description === 'object' && description !== null && !Array.isArray(description)) {
    displayDescription = description[language] || description[LANGUAGES.ZH_CN_LOWER] || description[LANGUAGES.ZH_CN] || description[LANGUAGES.EN_US] || '';
  } else if (typeof description === 'string') {
    const translated = t(description);
    displayDescription = translated !== description ? translated : description;
  }
  displayDescription = String(displayDescription || '');

  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // ✅ 階段 3.1: 異步預覽加載狀態
   
  const [previewContent, setPreviewContent] = useState(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  // Normalize previews to a stable array reference to avoid effect loops
  const previewsList = Array.isArray(previews) ? previews : [];
  const previewsKey = `${previewsList.length}:${previewsList.map(p => p?.id ?? '').join('|')}`;

  // 將資料中的 Markdown 章節标記 (如 "## 配色方案") 做最小轉換，並清理純文字色彩說明，避免在預覽中显示
  const normalizeMarkdownHeadings = (html) => {
    if (!html) return html;

    let out = html;

    // 1) 將 Markdown 标題轉為 H3（保底轉換）
    out = out
      .replace(/(^|\n)##\s*配色方案/g, '$1<h3 class="md-section-title">配色方案</h3>')
      .replace(/(^|\n)##\s*Color\s*Scheme/g, '$1<h3 class="md-section-title">Color Scheme</h3>');

    // 2) 清理：移除緊接在「配色方案/Color Scheme」标題後的純文字描述（通常包含多個色碼），直到遇到下一個 HTML 标籤
    // Markdown 形式
    out = out.replace(/(^|\n)##\s*(配色方案|Color\s*Scheme)[\t ]*\n[\s\S]*?(?=(\n\s*<|$))/g, '$1');
    // 已轉為 H3 的形式
    out = out.replace(/<h3[^>]*md-section-title[^>]*>(配色方案|Color\s*Scheme)<\/h3>\s*([^<]+)(?=(\s*<|$))/g, '');

    return out;
  };

  // 移除外部資源（避免因無网路或被阻擋导致預覽卡在載入）
  const stripExternalAssets = (html) => {
    if (!html) return html;
    try {
      return html
        // 移除外部腳本（例如 unpkg、CDN 等）
        .replace(/<script[^>]+src=["']https?:\/\/[^"']+["'][^>]*>\s*<\/script>/gi, '')
        // 移除外部樣式連結
        .replace(/<link[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/gi, '');
    } catch {
      return html;
    }
  };

  // 找到第一個 full 类型預覽的索引作為默認值
  const getDefaultIndex = () => {
    if (previewsList && previewsList.length > 0) {
      const firstFullIndex = previewsList.findIndex(p => p.type === 'full');
      return firstFullIndex >= 0 ? firstFullIndex : 0;
    }
    return 0;
  };

  const [activeIndex, setActiveIndex] = useState(getDefaultIndex());

  // ✅ 階段 3.1: 異步預覽加載邏輯
  useEffect(() => {
    if (!isOpen) return;

    const currentPreview = previewsList[Math.min(activeIndex, previewsList.length - 1)];
    const previewId = currentPreview?.previewId || fullPagePreviewId;

    // 如果有 previewId，進行異步加載
    if (previewId) {
      setIsLoadingPreview(true);
      setPreviewContent(null);

      loadPreview(previewId)
        .then(content => {
          setPreviewContent(content);
          console.log(`✅ Preview content loaded for: ${previewId}`);
        })
        .catch(error => {
          console.error(`❌ Failed to load preview ${previewId}:`, error);
          setPreviewContent({ html: '', styles: '' });
        })
        .finally(() => {
          setIsLoadingPreview(false);
        });
    } else {
      // 沒有 previewId，清空異步內容
      setPreviewContent(null);
      setIsLoadingPreview(false);
    }
  }, [isOpen, activeIndex, fullPagePreviewId, previewsKey]);

  // 當打開或預覽內容集合變化時重置索引与載入狀態
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(getDefaultIndex());
      setIsLoading(true);
    }
  }, [isOpen, previewsKey]);

  // 切換預覽索引時，先显示 Loading 覆蓋，待 iframe onLoad 再关閉
  useEffect(() => {
    if (!isOpen) return;
    setIsLoading(true);
  }, [isOpen, activeIndex]);

  // 載入逾時後备：若 iframe onLoad 未觸發，最長 2 秒自動隱藏 Loading，避免無网路資源导致卡住
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildPreviewHTML = () => {
    // ✅ 階段 3.1: 优先使用異步加載的內容（且內容非空）
    if (previewContent && (previewContent.html || previewContent.styles)) {
      const processedHTML = getDemoHTML(previewContent.html || '', language);
      const normalizedHTML = stripExternalAssets(normalizeMarkdownHeadings(processedHTML));
      const sanitizedHTML = DOMPurify.sanitize(normalizedHTML);
      const sanitizedStyles = DOMPurify.sanitize(previewContent.styles || '');

      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.fullTitle', { title: displayTitle })}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${sanitizedStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${sanitizedHTML}
  <script>(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();</script>
</body>
</html>`;
    }

    // 若提供多個預覽，优先採用
    if (previewsList && previewsList.length > 0) {
      const current = previewsList[Math.min(activeIndex, previewsList.length - 1)];
      // 若當前預覽需要異步載入內容（有 previewId 或傳入 fullPagePreviewId），且內容尚未到位，
      // 返回一個简單骨架页面，避免先渲染到回退內容，导致错誤画面閃現。
      if ((current?.previewId || fullPagePreviewId) && !previewContent) {
        return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('loading')}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;} .center{display:flex;align-items:center;justify-content:center;height:60vh;color:#666}</style>
</head>
<body><div class="center">${t('loading')}</div>  <script>(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();</script>
</body>
</html>`;
      }

let previewHTML = current.html || '';
      let previewStyles = current.styles || '';
      // 佔位符回退：若預覽提供「使用原有的 demoHTML/樣式」註解，使用父級內容
      if (previewHTML && previewHTML.includes('使用原有的 demoHTML')) {
        // 使用卡片层級的 demoHTML 作為預覽內容
        previewHTML = htmlContent || '';
      }
      if (previewStyles && (previewStyles.includes('使用原有的 customStyles') || previewStyles.includes('fullPageStyles'))) {
        // 合併 fullPageStyles 与 customStyles 作為預覽樣式
        previewStyles = `${fullPageStyles || ''}
${customStyles || ''}`.trim();
      }

      if (!previewHTML) {
        // 如果沒有提供 html，嘗試使用 fullPageHTML
        if (fullPageHTML) {
          previewHTML = fullPageHTML;
          previewStyles = fullPageStyles || customStyles || '';
        } else {
          // 从 htmlContent 提取隱藏的完整页面
          const extractFullPageContent = (html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
            const hiddenElements = doc.querySelectorAll('[style*="display: none"]');

            if (hiddenElements.length > 0) {
              const fullPageElement = hiddenElements[0];
              fullPageElement.removeAttribute('style');
              return fullPageElement.outerHTML;
            }
            return html;
          };
          previewHTML = extractFullPageContent(htmlContent);
          previewStyles = customStyles || '';
        }
      }

      const processedHTML = getDemoHTML(previewHTML, language);
      const normalizedHTML = stripExternalAssets(normalizeMarkdownHeadings(processedHTML));
      // 使用 DOMPurify 清理 HTML 和 CSS，防止 XSS 攻擊
      const sanitizedHTML = DOMPurify.sanitize(normalizedHTML);
      const sanitizedStyles = DOMPurify.sanitize(previewStyles || '');

      if (current.type === 'full') {
        return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.fullTitle', { title: displayTitle })}</title>
  <!-- 优先使用本地樣式，確保離线可用；CDN 作為後备 -->
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${sanitizedStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${sanitizedHTML}
  <script>(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();</script>
</body>
</html>`;
      }

      // inline 类型：嵌入小型区塊
      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.title', { title: displayTitle })}</title>
  <!-- 优先使用本地樣式，確保離线可用；CDN 作為後备 -->
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${sanitizedStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${sanitizedHTML}
  <script>(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();</script>
</body>
</html>`;
    }

    // 如果有完整页面HTML,优先使用
    if (fullPageHTML) {
      console.log('✅ 使用 fullPageHTML，長度:', fullPageHTML.length);
      // Process fullPageHTML for i18n
      const processedHTML = getDemoHTML(fullPageHTML, language);
      const normalizedHTML = stripExternalAssets(normalizeMarkdownHeadings(processedHTML));
      // 使用 DOMPurify 清理 HTML 和 CSS，防止 XSS 攻擊
      const sanitizedHTML = DOMPurify.sanitize(normalizedHTML);
      const sanitizedStyles = DOMPurify.sanitize(fullPageStyles || '');

    return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.fullTitle', { title: displayTitle })}</title>
  <!-- 优先使用本地樣式，確保離线可用；CDN 作為後备 -->
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${sanitizedStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${sanitizedHTML}
  <script>(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();</script>
</body>
</html>`;
    }

    // 否则使用原有的逻辑 (小型demo)
    // 只在開發模式下显示警告，因為不是所有組件都有 fullPageHTML
    if (import.meta.env?.DEV) {
      console.log('ℹ️ 使用标準預覽模式（fullPageHTML 為空，這是正常的）');
    }
    // 提取完整页面内容(隐藏的部分)
    const extractFullPageContent = (html) => {
      // 创建临时DOM解析器
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');

      // 查找带有 style="display: none;" 的元素
      const hiddenElements = doc.querySelectorAll('[style*="display: none"]');

      if (hiddenElements.length > 0) {
        // 如果找到隐藏的完整页面,返回其内容
        const fullPageElement = hiddenElements[0];
        fullPageElement.removeAttribute('style'); // 移除 display: none
        return fullPageElement.outerHTML;
      }

      // 如果没有找到隐藏内容,返回原始内容
      return html;
    };

    const extractedPreviewContent = extractFullPageContent(htmlContent);
    // Apply i18n replacement for inline demo content
    const processedPreviewContent = getDemoHTML(extractedPreviewContent, language);
    const normalizedPreviewContent = stripExternalAssets(normalizeMarkdownHeadings(processedPreviewContent));
    // 使用 DOMPurify 清理 HTML 和 CSS，防止 XSS 攻擊
    const sanitizedPreviewHTML = DOMPurify.sanitize(normalizedPreviewContent);
    const sanitizedCustomStyles = DOMPurify.sanitize(customStyles || '');

    return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.title', { title: displayTitle })}</title>
  <!-- 优先使用本地樣式，確保離线可用；CDN 作為後备 -->
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${sanitizedCustomStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${sanitizedPreviewHTML}
  <script>(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();</script>
</body>
</html>`;
  };

  // Generate preview prompts in the current language
  // 獲取當前預覽的詳細信息
  const currentPreview = previewsList && previewsList.length > 0 ? previewsList[activeIndex] : null;
  // 處理 description: 如果是對象則直接使用語言鍵,如果是字符串則使用 t() 翻譯
  const previewDescription = currentPreview?.description
    ? (typeof currentPreview.description === 'object'
        ? currentPreview.description[language]
        : t(currentPreview.description))
    : '';
  const previewFeatures = currentPreview?.features || [];
  // 优先使用 preview 的 colorScheme，如果沒有則使用主風格對象的 colorScheme
  const previewColorScheme = currentPreview?.colorScheme?.[language] || colorScheme?.[language] || '';

  // ✨ 構建 Prompt 內容（生成成本可接受，直接計算以避免 hooks 次数受條件渲染影響）
  const styleObject = {
    title: displayTitle,
    description: displayDescription,
    stylePrompt,
    fullPageHTML: previewsList && previewsList.length > 0
      ? (previewsList[activeIndex]?.html || previewsList[0]?.html || '')
      : (fullPageHTML || htmlContent),
    demoHTML: htmlContent
  };

  const promptContent = PreviewPromptGenerator.generate(
    styleObject,
    displayDescription,
    styleObject.fullPageHTML,
    language,
    previewDescription,
    previewFeatures,
    previewColorScheme,
    currentPreview  // ✨ 傳遞當前激活的預覽對象
  );

  // Check if current preview is data visualization type
  const isDataVisualization = currentPreview?.type === 'data-visualization';

  // If data visualization, use specialized component
  if (isDataVisualization) {
    return (
      <DataVisualizationPreview
        isOpen={isOpen}
        onClose={onClose}
        style={{
          title: displayTitle,
          description: displayDescription
        }}
        initialScenario={currentPreview?.scenario}
      />
    );
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div className="bg-white h-full w-full flex flex-col">
          <header className="border-b p-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-white gap-3 md:gap-2">
            <h3 className="text-lg font-semibold">{t('preview.header', { title: displayTitle })}</h3>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch md:items-center w-full md:w-auto">
              {/* 預覽選擇器 - 使用新的 PreviewSelector 組件 */}
              {hasMultiplePreviews(previewsList) && (
                <div className="w-full md:w-auto md:mr-2">
                  <PreviewSelector
                    previews={previewsList}
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                    variant="auto"
                  />
                </div>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPrompt(true)}
                  className="flex-1 md:flex-none px-4 py-2 text-sm rounded border hover:bg-gray-100 transition-colors"
                >
                  {t('buttons.prompt')}
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 md:flex-none px-4 py-2 text-sm rounded border hover:bg-gray-100 transition-colors"
                >
                  ✕ {t('buttons.close')}
                </button>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-auto custom-scrollbar relative">
            {/* ✅ 階段 3.1: 整合異步加載狀態 */}
            {!isReactPreview && (isLoading || isLoadingPreview) && (
              <div className="absolute inset-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-center">
                <div className="minimalism-loader">
                  <div className="minimalism-loader-dot"></div>
                  <div className="minimalism-loader-dot"></div>
                  <div className="minimalism-loader-dot"></div>
                </div>
                {/* ✅ 显示加載狀態 */}
                {isLoadingPreview && (
                  <div className="mt-4 text-sm text-gray-600">
                    {t('preview.loadingContent')} ...
                  </div>
                )}
              </div>
            )}

            {isReactPreview ? (
              (() => { const ReactComp = variant.reactComponent; return (
                <div className="w-full h-full overflow-auto p-4"><ReactComp autoStart={true} mode="full" /></div>
              )})()
            ) : (
              <iframe
                key={`${displayTitle}:${activeIndex}:${previewContent ? 'ready' : 'loading'}`}
                title={t('preview.header', { title: displayTitle })}
                srcDoc={buildPreviewHTML()}
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            )}
          </div>
        </div>
      </div>

      {/* Prompt 抽屉 */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={t('preview.promptTitle', { title: displayTitle })}
        content={promptContent}
      />
    </>
  );
}
