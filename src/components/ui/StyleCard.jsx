import { useState, useMemo, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';
import { PromptButton } from '../prompt/PromptButton';
import { PromptDrawer } from '../prompt/PromptDrawer';
import { PreviewButton } from '../preview/PreviewButton';
import { PreviewModal } from '../preview/PreviewModal';
import { PromptGenerator } from '../../utils/promptGenerator';
import { useLanguage } from '../../hooks/useLanguage';
import { TagGroup, CategoryBadge } from './TagChip';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { getStylePreviewUrl } from '../../utils/styleHelper';
import { LANGUAGES } from "../../utils/i18n/languageConstants";
import appCssUrl from '../../index.css?url';
// JSX 編譯和 Preact 運行時
import { containsJSX, compileForIframe } from '../../utils/jsxCompiler';
import { generatePreactIframeHTML } from '../../utils/preactRuntime';
// 🆕 模板元數據（用於顯示 NEW 徽章）
import templateMetadata from '../../data/metadata/templateMetadata.json';
import { getCategoryLabel } from '../../data/metadata/categoryMetadata';

export function StyleCard({
  title,
  description,
  demoHTML,
  customStyles = '',
  fullPageHTML = '',
  fullPageStyles = '',
  fullPagePreviewId = '', // ✅ 階段 3.1: 新增動態加載 ID
  demoBoxClass = 'bg-gray-50',
  demoBoxStyle = '',
  // 新增的标籤相关屬性
  tags = [],
  onTagClick,
  // 可選：多預覽
  previews = [],
  // 配色方案
  colorScheme = null,
  // React 組件預覽 (用於交互式組件)
  variant = null,
  // 新增：風格 ID (用於数据識別)
  id = null,
   // 主分類與所有分類（用於顯示分類徽章）
  primaryCategory = null,
  categories = [],
  // 新增：佈局模式 (控制 iframe 容器的显示方式)
  layoutMode = 'centered', // 'centered' | 'fullWidth' | 'fullPage'
  // ✨ 新增：自定義 Prompt 支持
  customPrompt = null, // 简短 Prompt（用於 StyleCard）
  stylePrompt = null, // 風格 Prompt（用於 PreviewModal）
  // 🆕 新增：JSX/React 預覽支持
  demoJSX = null, // JSX 代碼字符串（會自動編譯並用 Preact 渲染）
  renderMode = 'auto' // 'auto' | 'html' | 'jsx' - auto 會自動檢測代碼類型
}) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { language, t } = useLanguage();
  const iframeRef = useRef(null);
  const cardRef = useRef(null);

  // 🚀 性能优化：延遲載入 iframe
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // 🆕 JSX 編譯狀態
  const [, setJsxCompileError] = useState(null);
  const [isCompiling, setIsCompiling] = useState(false);

  // 語系對應的 demo HTML 須先計算，供 iframe 注入使用
  const currentDemoHTML = getDemoHTML(demoHTML, language);

  // 🆕 判斷是否使用 JSX 渲染模式
  const shouldUseJSX = useMemo(() => {
    if (renderMode === 'html') return false;
    if (renderMode === 'jsx') return true;
    // auto 模式：優先使用 demoJSX，否則檢測 demoHTML 是否包含 JSX
    if (demoJSX) return true;
    return renderMode === 'auto' && currentDemoHTML && containsJSX(currentDemoHTML);
  }, [renderMode, demoJSX, currentDemoHTML]);

  // 🚀 性能优化：IntersectionObserver 監測卡片可見性
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true); // 一旦載入就不再重置，避免重複創建 iframe
          }
        });
      },
      {
        rootMargin: '200px', // 提前 200px 開始載入，改善用戶体驗
        threshold: 0.01 // 只需 1% 可見即觸發
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  // 在 iframe 中渲染 demo，避免自定義 CSS 外溢影響全域（如 Header/Menu）
  // 🚀 性能优化：只在卡片可見時才創建和渲染 iframe
  // 🆕 支持 JSX 編譯和 Preact 渲染
  useEffect(() => {
    if (!isVisible) return; // 关鍵：延遲載入，只有可見時才執行
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // 🆕 JSX 渲染路徑
    if (shouldUseJSX) {
      const jsxSource = demoJSX || currentDemoHTML;
      setIsCompiling(true);
      setJsxCompileError(null);

      compileForIframe(jsxSource, { componentName: 'DemoComponent' })
        .then((compiledCode) => {
          const fullHTML = generatePreactIframeHTML({
            compiledCode,
            customStyles,
            title: `JSX Preview - ${id || 'demo'}`,
            mountId: 'root'
          });

          try {
            doc.open();
            doc.write(fullHTML);
            doc.close();
          } catch (e) {
            console.error('iframe write error:', e);
          }
        })
        .catch((error) => {
          setJsxCompileError(error.message);
          // 顯示錯誤信息
          const errorHTML = `
            <!doctype html>
            <html>
            <head>
              <style>
                body { margin: 16px; font-family: monospace; }
                .error { background: #fee2e2; border: 1px solid #ef4444;
                         color: #dc2626; padding: 16px; border-radius: 8px; }
              </style>
            </head>
            <body>
              <div class="error">
                <strong>JSX 編譯錯誤:</strong><br/>
                ${error.message}
              </div>
            </body>
            </html>
          `;
          try {
            doc.open();
            doc.write(errorHTML);
            doc.close();
          } catch (e) {
            console.error('Error display failed:', e);
          }
        })
        .finally(() => {
          setIsCompiling(false);
        });

      return; // JSX 路徑處理完畢，不執行後面的 HTML 渲染
    }

    // 原有的 HTML 渲染路徑

    // 對 demoHTML 進行清理与樣式抽取，避免外部資源与 style 樣式被剝除
    const stripExternalAssets = (html) => {
      if (!html) return html;
      try {
        return html
          .replace(/<script[^>]+src=["']https?:\/\/[^"']+["'][^>]*>\s*<\/script>/gi, '')
          .replace(/<link[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/gi, '');
      } catch {
        return html;
      }
    };

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

    const extractInlineStyles = (html) => {
      if (!html) return { html: '', styles: '' };
      const styles = [];
      const without = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
        styles.push(css || '');
        return '';
      });
      return { html: without, styles: styles.join('\n') };
    };

    const sanitizeCss = (css) => {
      if (!css) return '';
      return css
        .replace(/@import[^;]*https?:[^;]*;/gi, '')
        .replace(/url\(("|')?javascript:[^)]*\)/gi, '');
    };

    const noExternal = stripExternalAssets(currentDemoHTML || '');
    const { html: noStyleHtml, styles: inlineStyles } = extractInlineStyles(noExternal);
    const bodyInner = extractBodyInner(noStyleHtml);
    const sanitizedHTML = DOMPurify.sanitize(bodyInner || '');
    const combinedStyles = sanitizeCss(`${inlineStyles || ''}\n${customStyles || ''}`);

    // 检測是否需要全寬佈局（明確指定或自動检測）
    const isFullWidthLayout = layoutMode === 'fullWidth' ||
                              layoutMode === 'fullPage' ||
                              customStyles.includes('grid-container') ||
                              customStyles.includes('masonry-container');

    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="${appCssUrl}" />
<style>
  html, body { margin: 0; padding: 0; height: 100%; }
  *, *::before, *::after { box-sizing: border-box; }
  /* demo 容器，根据 layoutMode 調整显示方式 */
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
</body>
</html>`;

    try {
      doc.open();
      doc.write(html);
      doc.close();

      // 在 iframe 內部初始化最小互動：
      // - 支援「paint-toolbox」中的工具按鈕切換 active 狀態
      // - 採用事件委派，避免逐一綁定
      const initInteractivity = () => {
        try {
          const d = iframe.contentDocument || iframe.contentWindow?.document;
          if (!d) return;
          // 工具箱切換：.paint-toolbox 內 .tool-button 單選 active
          d.addEventListener('click', (e) => {
            const btn = e.target.closest?.('.tool-button');
            if (!btn) return;
            const container = btn.closest?.('.paint-toolbox');
            if (!container) return;
            container.querySelectorAll?.('.tool-button.active')?.forEach((el) => el.classList.remove('active'));
            btn.classList.add('active');
          }, true);
        } catch {
          // 忽略 iframe 內初始互動失敗，不影響主要渲染
        }
      };

      if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
        initInteractivity();
      } else {
        doc.addEventListener('DOMContentLoaded', initInteractivity, { once: true });
      }
    } catch {
      // Ignore write errors
    }
  }, [isVisible, currentDemoHTML, customStyles, layoutMode, shouldUseJSX, demoJSX, id]);

  const renderText = (value) => {
    let result = '';

    // 如果值是對象（i18n 對象格式，如 { 'zh-cn': '...', 'zh-CN': '...', 'en-US': '...' }）
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // 首先嘗試當前語言的精確匹配，然後嘗試大小写變体
      result = value[language];
      if (!result && language === LANGUAGES.ZH_CN) {
        result = value[LANGUAGES.ZH_CN_LOWER];
      } else if (!result && language === LANGUAGES.ZH_CN_LOWER) {
        result = value[LANGUAGES.ZH_CN];
      }
      // 如果還是沒有，則回退到中文或英文
      if (!result) {
        result = value[LANGUAGES.ZH_CN] || value[LANGUAGES.ZH_CN_LOWER] || value[LANGUAGES.EN_US] || '';
      }
    }
    // 如果值以 'raw:' 開頭，移除前綴並直接返回
    else if (typeof value === 'string' && value.toLowerCase().startsWith('raw:')) {
      result = value.slice(4);
    }
    // 如果值看起來已經是翻譯後的內容（包含中文字符），則直接返回
    else if (typeof value === 'string' && /[\u4e00-\u9fff]/.test(value)) {
      result = value;
    }
    // 如果值包含點號，可能是翻譯鍵，嘗試翻譯
    else if (typeof value === 'string' && value.includes('.')) {
      const translation = t(value);
      // 如果翻譯結果与原值相同，說明翻譯鍵不存在，直接返回原值
      result = translation !== value ? translation : value;
    }
    // 其他情況嘗試翻譯
    else if (typeof value === 'string') {
      result = t(value);
    }

    // 確保返回值始終是字符串，避免显示 [object Object]
    return String(result || '');
  };

  const handleGetPrompt = () => {
    setShowPrompt(true);
  };

  const handlePreview = () => {
    if (id) {
      // 在新标签页中打开预览页面
      const previewUrl = getStylePreviewUrl(id);
      const fullUrl = window.location.origin + previewUrl;
      window.open(fullUrl, '_blank');
    } else {
      // 後备方案：模態框預覽（當沒有 id 時）
      console.warn('StyleCard: 缺少 id 屬性，使用模態框預覽');
      setShowPreview(true);
    }
  };

  const displayTitle = renderText(title);
  const displayDescription = renderText(description);

  // 🔖 主分類與次級分類徽章資料
  const primaryCategoryLabel = useMemo(() => {
    if (!primaryCategory) return null;
    try {
      return getCategoryLabel(primaryCategory, language);
    } catch {
      return null;
    }
  }, [primaryCategory, language]);

  const secondaryCategories = useMemo(() => {
    if (!categories || categories.length === 0) return [];
    // 過濾掉主分類本身，避免重覆顯示
    return categories.filter((catId) => !!catId && catId !== primaryCategory);
  }, [categories, primaryCategory]);

  // ✨ 構建 style 對象以支持自定義 Prompt
  const styleObject = useMemo(() => ({
    title: displayTitle,
    description: displayDescription,
    customPrompt,
    stylePrompt,
    demoHTML,
    fullPageHTML
  }), [displayTitle, displayDescription, customPrompt, stylePrompt, demoHTML, fullPageHTML]);

  // ✨ 使用 useMemo 避免每次渲染都重新生成 Prompt（性能优化）
  const promptContent = useMemo(() => {
    return PromptGenerator.generate(
      styleObject,
      { mode: 'card' },
      language
    );
  }, [styleObject, language]);
  
  // 解析 demoBoxStyle：支援多宣告、移除分號、kebab 轉 camelCase
  const parseStyleString = (str) => {
    if (!str || typeof str !== 'string') return {};
    const toCamel = (k) => (k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
    return str
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
      .reduce((acc, decl) => {
        const idx = decl.indexOf(':');
        if (idx === -1) return acc;
        let key = decl.slice(0, idx).trim();
        let value = decl.slice(idx + 1).trim();
        if (!key) return acc;
        // 去除值末尾分號与多餘空白
        if (value.endsWith(';')) value = value.slice(0, -1).trim();
        key = toCamel(key);
        acc[key] = value;
        return acc;
      }, {});
  };

  const demoBoxInlineStyle = useMemo(() => parseStyleString(demoBoxStyle), [demoBoxStyle]);

  // 🆕 檢測是否顯示 NEW 徽章（使用智能包含匹配）
  const metadata = useMemo(() => {
    if (!id || !templateMetadata?.templates) return null;

    // 策略 1: 精確匹配（最快，優先使用）
    if (templateMetadata.templates[id]) {
      return templateMetadata.templates[id];
    }

    // 策略 2: 雙向模糊匹配 - 查找包含關係（雙向）
    // 例如：id='flatDesign' ↔ key='core-flatDesign'（key 包含 id）
    // 例如：id='visual-neo-brutalism' ↔ key='visual-brutalism'（id 包含 key）
    const allKeys = Object.keys(templateMetadata.templates);
    const matchedKey = allKeys.find(key => {
      const keyLower = key.toLowerCase();
      const idLower = id.toLowerCase();
      return keyLower.includes(idLower) || idLower.includes(keyLower);
    });

    return matchedKey ? templateMetadata.templates[matchedKey] : null;
  }, [id]);

  const isNew = useMemo(() => {
    if (!metadata) return false;
    return metadata.isNew === true;
  }, [metadata]);

  const updatedAt = useMemo(() => {
    if (!metadata?.updatedAt) return null;
    try {
      const date = new Date(metadata.updatedAt);
      return date.toLocaleDateString(language === 'zh-CN' ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return null;
    }
  }, [metadata, language]);

  return (
    <>
      <div ref={cardRef} className="minimal-card bg-white rounded-lg overflow-hidden relative">
        {/* 🆕 NEW 徽章：顯示在卡片右上角 */}
        {isNew && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              {t('common.new') || 'NEW'}
            </span>
          </div>
        )}

        {/* 演示区：改為 iframe 沙箱，隔離自定義 CSS 對全域的影響 */}
        <div className={`demo-box ${demoBoxClass}`} style={demoBoxInlineStyle}>
          {!isVisible ? (
            // 🚀 性能优化：佔位符，避免初始載入時創建所有 iframe
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                <span className="text-sm text-gray-400">{t('common.loading') || 'Loading...'}</span>
              </div>
            </div>
          ) : isCompiling ? (
            // 🆕 JSX 編譯中的指示器
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                <span className="text-sm text-blue-500">Compiling JSX...</span>
              </div>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              title={`style-demo-${id || displayTitle}`}
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          )}
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {/* 标題和分类徽章 */}
          <div className="flex flex-col gap-2 mb-2">
            {(primaryCategoryLabel || (secondaryCategories && secondaryCategories.length > 0)) && (
              <div className="flex flex-wrap items-center gap-2">
                {primaryCategoryLabel && (
                  <CategoryBadge
                    label={primaryCategoryLabel}
                    primary={true}
                  />
                )}
                {secondaryCategories.map((catId) => (
                  <CategoryBadge
                    key={catId}
                    label={getCategoryLabel(catId, language)}
                    primary={false}
                  />
                ))}
              </div>
            )}
            <h3 className="text-xl font-semibold flex-1">{displayTitle}</h3>
          </div>

          <p className="text-gray-600 text-sm mb-3">{displayDescription}</p>

          {/* 标籤組 */}
          {tags && tags.length > 0 && (
            <div className="mb-4">
              <TagGroup
                tags={tags}
                language={language}
                size="sm"
                clickable={!!onTagClick}
                onTagClick={onTagClick}
                maxDisplay={4}
              />
            </div>
          )}

          {/* 🆕 最近更新時間 */}
          {updatedAt && (
            <div className="mb-3">
              <p className="text-xs text-gray-400">
                {t('common.lastUpdated') || 'Last Updated'}: {updatedAt}
              </p>
            </div>
          )}

          {/* 按钮组 - 底部统一列 */}
          <div className="flex items-center justify-center gap-2">
            <PromptButton onClick={handleGetPrompt} />
            <div className="flex gap-1">
              <PreviewButton onClick={handlePreview} />
            </div>
          </div>
        </div>
      </div>

      {/* Prompt 抽屉 */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={displayTitle}
        content={promptContent}
      />

      {/* Preview 模态框 */}
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        title={displayTitle}
        description={displayDescription}
        htmlContent={demoHTML}
        customStyles={customStyles}
        fullPageHTML={fullPageHTML}
        fullPageStyles={fullPageStyles}
        fullPagePreviewId={fullPagePreviewId}
        previews={previews}
        colorScheme={colorScheme}
        variant={variant}
        stylePrompt={stylePrompt}
      />
    </>
  );
}
