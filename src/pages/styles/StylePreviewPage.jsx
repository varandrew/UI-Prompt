import { Suspense, useMemo, useCallback, useEffect, useState, useRef } from 'react';
import { useLoaderData, useSearchParams, Await } from 'react-router-dom';

import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../../components/prompt';
import { PreviewPromptGenerator } from '../../utils/promptGenerator';
import { previewLogger as logger } from '../../utils/logger';
import { resolveI18nValue } from '../../utils/i18n/resolveI18nValue';
import { LoadingDots } from '../../components/ui';
import {
  DataVisualizationPreview,
  LoadingOverlay,
  PreviewPageHeader,
  usePreviewPageState,
  useAsyncPreviewLoader
} from '../../components/preview';
import {
  SEOHead,
  generatePageSchema,
  BASE_URL,
  LANG_TO_URL,
} from '../../components/seo';

// Extended utility
import { buildPreviewHTML } from '../../components/preview/utils/buildPreviewHTML';
import { buildEmptyStateHTML } from '../../components/preview/utils/emptyStateTemplate';

/**
 * Preview page skeleton shown while style data is loading
 * This appears immediately thanks to deferred data loading
 */
function PreviewSkeleton({ title }) {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col">
      {/* Header skeleton */}
      <div className="h-14 border-b border-gray-200 dark:border-gray-700 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse">
            {title && <span className="sr-only">{title}</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="flex-1 flex items-center justify-center">
        <LoadingDots size="large" />
      </div>
    </div>
  );
}

/**
 * Main preview content component (receives loaded style data)
 */
function StylePreviewContent({ style }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, t } = useLanguage();
  const iframeRef = useRef(null);
  const isLoadingPreviewRef = useRef(false);
  const [iframeInstanceKey, setIframeInstanceKey] = useState(0);
  // 🛡️ 防止無限重置迴圈
  const resetCountRef = useRef(0);
  const MAX_RESET_COUNT = 5;
  const [previewError, setPreviewError] = useState(null);
  const perfParam = searchParams.get('perf'); // '1' | '0' | null
  const perfMode = perfParam === '1';
  const twParam = searchParams.get('tw'); // '1' | '0' | null
  const includeTailwindCdn = twParam === '1';
  const isChromium = useMemo(() => {
    const ua = navigator?.userAgent || '';
    return (
      /Chrome\//.test(ua) &&
      !/Edg\//.test(ua) &&
      !/OPR\//.test(ua) &&
      !/Brave\//.test(ua) &&
      !/SamsungBrowser\//.test(ua)
    );
  }, []);

  // ========== Extract style properties ==========
  const {
    title,
    description = '',
    demoHTML = '',
    customStyles = '',
    fullPageHTML = '',
    fullPageStyles = '',
    fullPagePreviewId = '',
    previews = [],
    variant = null,
    defaultPreviewId = ''
  } = style;

  // ========== Resolve display title ==========
  const displayTitle = resolveI18nValue(title, language, t);

  // ========== Stabilize previews list ==========
  // Note: Array.isArray() is extremely fast (nanoseconds), so useMemo is not needed
  // despite ESLint warning. The cost of memoization exceeds the cost of the check.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const previewsList = Array.isArray(previews) ? previews : [];

  // ========== Check if React preview ==========
  const isReactPreview = !!(variant && variant.reactComponent);

  // ========== Use extracted page state hook ==========
  const {
    showPrompt,
    setShowPrompt,
    isLoading,
    setIsLoading,
    activeIndex,
    setActiveIndex,
    isFullPageMode
  } = usePreviewPageState({
    styleId: style.id,
    previewsList,
    defaultPreviewId,
    searchParams,
    language,
    isLoadingPreviewRef
  });

  // ========== Use extracted async loader hook ==========
  const {
    asyncPreview,
    asyncPreviewId,
    isLoadingPreview,
    currentPreview,
    previewCacheRef
  } = useAsyncPreviewLoader({
    previewsList,
    activeIndex,
    fullPagePreviewId,
    styleId: style.id,
    isReactPreview,
    language
  });

  // Keep a ref for timeout/fallback logic (avoid premature overlay dismissal while async preview loads)
  isLoadingPreviewRef.current = isLoadingPreview;

  // ========== Derived values ==========
  const isDataVisualization = currentPreview?.type === 'data-visualization';
  const isIframePreview = !isDataVisualization && !isReactPreview;
  const is3dElementsFamily = style?.id === 'visual-3dElements';
  const autoPerfCandidate = perfParam === null && isChromium && is3dElementsFamily;
  const effectivePerfMode = perfMode || autoPerfCandidate;

  // ========== Chrome: auto-enable perf mode for heavy template ==========
  useEffect(() => {
    if (!autoPerfCandidate) return;
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newParams.get('perf') === null) newParams.set('perf', '1');
      return newParams;
    }, { replace: true });
  }, [autoPerfCandidate, setSearchParams]);

  // Toggle performance mode by updating URL params
  const handleTogglePerfMode = useCallback(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      const current = newParams.get('perf'); // '1' | '0' | null
      const effectivePerf = current === '1' || (current === null && autoPerfCandidate);
      newParams.set('perf', effectivePerf ? '0' : '1');
      return newParams;
    });
  }, [setSearchParams, autoPerfCandidate]);

  // ========== Build preview HTML using extended utility ==========
  const nextPreviewHTML = useMemo(() => {
    const hasAsyncContent = asyncPreview && (
      asyncPreview.html ||
      asyncPreview.styles ||
      asyncPreview.jsx ||
      asyncPreview.compiledCode
    );
    const hasPreviewsList = previewsList && previewsList.length > 0;
    const hasFullPageHTML = fullPageHTML && fullPageHTML.trim().length > 0;

    if (!hasAsyncContent && !hasPreviewsList && !hasFullPageHTML) {
      return buildEmptyStateHTML({
        displayTitle,
        language
      });
    }

    return buildPreviewHTML({
      asyncPreview,
      asyncPreviewId,
      isLoadingPreview,
      previewCacheRef,
      previewsList,
      activeIndex,
      fullPagePreviewId,
      fullPageHTML,
      fullPageStyles,
      htmlContent: demoHTML,
      customStyles,
      displayTitle,
      suppressLoadingUI: true,
      language,
      perfMode: effectivePerfMode,
      includeTailwindCdn
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps -- previewCacheRef is stable (useRef)
  }, [
    asyncPreview,
    asyncPreviewId,
    isLoadingPreview,
    previewsList,
    activeIndex,
    fullPagePreviewId,
    fullPageHTML,
    fullPageStyles,
    demoHTML,
    customStyles,
    displayTitle,
    language,
    effectivePerfMode,
    includeTailwindCdn
  ]);

  // ========== Avoid iframe churn while async content loads ==========
  // Keep the last committed srcDoc during async loading. Overlay遮罩會覆蓋舊內容，
  // 並透過注入 freeze CSS 降低舊頁面動畫/特效開銷，避免「先 blank 再真正內容」造成的雙重重載。
  const [iframeSrcDoc, setIframeSrcDoc] = useState(() => nextPreviewHTML);

  // Prevent accidental navigation inside preview iframe (e.g., clicking a template menu that links to app routes),
  // which can cause nested app rendering and duplicated preview headers.
  //
  // 🛡️ Security considerations:
  // - Block all absolute URLs that could navigate away from srcDoc
  // - Allow hash-only navigation (#anchor) for in-page scrolling
  // - Allow safe pseudo-protocols (mailto:, tel:)
  // - Block javascript: to prevent XSS (though sandbox already helps)
  // - Log blocked navigations for debugging
  const installIframeNavigationGuard = useCallback((doc) => {
    try {
      const root = doc?.documentElement;
      if (!root) return;
      if (root.getAttribute('data-ui-style-nav-guard') === '1') return;
      root.setAttribute('data-ui-style-nav-guard', '1');

      doc.addEventListener(
        'click',
        (event) => {
          const target = event?.target;
          const anchor = target?.closest?.('a[href]');
          if (!anchor) return;

          const href = anchor.getAttribute('href') || '';
          if (!href) return;

          // Allow hash-only navigation (in-page anchors)
          if (href.startsWith('#')) return;

          // Allow safe pseudo-protocols
          if (/^(mailto:|tel:)/i.test(href)) return;

          // Block javascript: protocol (XSS prevention, defense in depth)
          if (/^javascript:/i.test(href)) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }

          // Block data: protocol (potential XSS vector)
          if (/^data:/i.test(href)) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }

          // Block absolute URLs (http://, https://, //, /)
          // These would navigate the iframe away from srcDoc
          const isAbsoluteUrl = /^(https?:)?\/\//i.test(href) || href.startsWith('/');
          if (isAbsoluteUrl) {
            logger.debug('Blocked absolute URL navigation in preview iframe', { href });
            event.preventDefault();
            event.stopPropagation();
            return;
          }

          // Block relative URLs that could escape preview context
          // (any non-hash href at this point is a relative path)
          logger.debug('Blocked relative URL navigation in preview iframe', { href });
          event.preventDefault();
          event.stopPropagation();
        },
        true
      );

      doc.addEventListener(
        'submit',
        (event) => {
          // Block all form submissions - they would navigate the iframe
          logger.debug('Blocked form submission in preview iframe');
          event.preventDefault();
          event.stopPropagation();
        },
        true
      );

      // 🛡️ Additional protection: intercept window.open calls
      try {
        const iframeWindow = doc.defaultView;
        if (iframeWindow && iframeWindow.open) {
          const originalOpen = iframeWindow.open;
          iframeWindow.open = function(...args) {
            logger.debug('Blocked window.open in preview iframe', { url: args[0] });
            // Return null to indicate popup was blocked
            return null;
          };
          // Store reference for potential cleanup
          iframeWindow.__originalOpen = originalOpen;
        }
      } catch {
        // Cross-origin restriction or sandbox limitation - acceptable
      }

      // 🛡️ Task 1: 攔截 window.location 賦值
      try {
        const iframeWindow = doc.defaultView;
        if (iframeWindow) {
          const locationDescriptor = Object.getOwnPropertyDescriptor(iframeWindow, 'location');
          if (locationDescriptor && locationDescriptor.configurable !== false) {
            Object.defineProperty(iframeWindow, 'location', {
              get: locationDescriptor.get,
              set: (value) => {
                logger.warn('Blocked location assignment in preview iframe', { value });
                // 靜默忽略，不拋出錯誤
              },
              configurable: true
            });
          }
        }
      } catch {
        // Sandbox 或跨域限制 - 可接受
      }
    } catch {
      // Best-effort: ignore
    }
  }, []);

  const handleIframeLoad = useCallback(() => {
    try {
      const href = iframeRef.current?.contentWindow?.location?.href;
      // 🚀 Task 3: 簡化 isSrcDoc 邏輯為正則表達式
      // srcDoc documents should remain on about:srcdoc; any other URL means navigation escaped.
      const isSrcDoc = /^about:(srcdoc|blank)($|#)/.test(href || '');

      if (!isSrcDoc && typeof href === 'string') {
        // 🛡️ Task 2: 重置次數上限防止無限迴圈
        resetCountRef.current += 1;
        if (resetCountRef.current > MAX_RESET_COUNT) {
          logger.error('Exceeded maximum iframe reset attempts', { count: resetCountRef.current, href });
          setPreviewError('Preview failed to load after multiple attempts');
          setIsLoading(false);
          return;
        }
        logger.warn('Preview iframe navigated away from srcDoc, resetting', { href, attempt: resetCountRef.current });
        setIsLoading(true);
        setIframeInstanceKey((prev) => (prev + 1) % 10000); // 上界限制
        return;
      }

      // 🎉 成功加載，重置計數器
      resetCountRef.current = 0;
      setPreviewError(null);

      const doc = iframeRef.current?.contentDocument;
      if (doc) installIframeNavigationGuard(doc);
    } catch {
      // Best-effort: ignore
    }

    setIsLoading(false);
  }, [installIframeNavigationGuard, setIsLoading]);

  useEffect(() => {
    if (!isIframePreview) return;
    if (isLoadingPreview) return;

    // 若內容沒有變化（例如某些情況 activeIndex 變更但 previewId 相同），避免遮罩卡住
    if (iframeSrcDoc === nextPreviewHTML) {
      if (isLoading) setIsLoading(false);
      return;
    }

    // 確保遮罩在 iframe 重新載入期間保持顯示
    if (!isLoading) setIsLoading(true);
    setIframeSrcDoc(nextPreviewHTML);
  }, [isIframePreview, isLoadingPreview, nextPreviewHTML, iframeSrcDoc, isLoading, setIsLoading]);

  useEffect(() => {
    if (!isIframePreview) return;
    if (!isLoadingPreview) return;

    try {
      const doc = iframeRef.current?.contentDocument;
      if (!doc) return;

      const STYLE_ID = 'ui-style-freeze-style';
      let styleEl = doc.getElementById(STYLE_ID);

      if (!styleEl) {
        styleEl = doc.createElement('style');
        styleEl.id = STYLE_ID;
        styleEl.setAttribute('data-ui-style', 'freeze');
        const head = doc.head || doc.getElementsByTagName('head')?.[0] || null;
        (head || doc.documentElement).appendChild(styleEl);
      }

      // 專注於「降低舊內容的成本」，而不是保持外觀（反正有 LoadingOverlay 覆蓋）
      styleEl.textContent = `
        * , *::before, *::after {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
        * {
          -webkit-backdrop-filter: none !important;
          backdrop-filter: none !important;
          filter: none !important;
        }
      `.trim();
    } catch {
      // Best-effort: ignore
    }
  }, [isIframePreview, isLoadingPreview]);

  // ========== Generate prompt content (lazy) ==========
  const [promptContent, setPromptContent] = useState('');
  const [stylePromptContent, setStylePromptContent] = useState('');
  const [customPromptContent, setCustomPromptContent] = useState('');
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);

  useEffect(() => {
    setPromptContent('');
    setStylePromptContent('');
    setCustomPromptContent('');
    setIsGeneratingPrompt(false);
  }, [style.id, activeIndex, language]);

  useEffect(() => {
    if (!showPrompt) return;

    let cancelled = false;
    setIsGeneratingPrompt(true);

    const timeoutId = window.setTimeout(() => {
      if (cancelled) return;
      try {
        // 分別提取 stylePrompt 和 customPrompt
        // 優先使用 currentPreview 的 prompt，其次使用 style 的 prompt
        const extractedStylePrompt =
          currentPreview?.stylePrompt?.[language] ||
          style?.stylePrompt?.[language] ||
          '';

        const extractedCustomPrompt =
          currentPreview?.customPrompt?.[language] ||
          style?.customPrompt?.[language] ||
          '';

        // 保持向後兼容的 promptContent
        const generated = PreviewPromptGenerator.generate(
          style,
          style.description || '',
          previewsList?.[activeIndex]?.html ||
            style.fullPageHTML ||
            style.demoHTML ||
            '',
          language,
          '', // previewDescription
          [], // previewFeatures
          '', // previewColorScheme
          currentPreview
        );

        if (!cancelled) {
          setPromptContent(generated);
          setStylePromptContent(extractedStylePrompt);
          setCustomPromptContent(extractedCustomPrompt);
        }
      } catch (error) {
        logger.error('Error generating prompt:', error);
        if (!cancelled) {
          setPromptContent('');
          setStylePromptContent('');
          setCustomPromptContent('');
        }
      } finally {
        if (!cancelled) setIsGeneratingPrompt(false);
      }
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [showPrompt, style, activeIndex, previewsList, currentPreview, language]);

  // ========== Event handlers ==========
  const handleOpenFullPageWindow = useCallback(() => {
    try {
      const hasSearch = window.location.search?.length > 0;
      const separator = hasSearch ? '&' : '?';
      const targetUrl = `${window.location.href}${separator}full=1&previewIndex=${activeIndex}`;
      window.open(targetUrl, '_blank', 'noopener');
    } catch (error) {
      logger.error('Failed to open full-page preview', error);
    }
  }, [activeIndex]);

  // ========== SEO Meta Data ==========
  const langPrefix = LANG_TO_URL[language] || 'zh';
  const styleId = style.familyId || style.id;
  const resolvedDescription = resolveI18nValue(description, language, t);

  // Generate SEO description - combine style title with description
  const seoDescription = resolvedDescription
    ? `${displayTitle} - ${resolvedDescription.slice(0, 120)}${resolvedDescription.length > 120 ? '...' : ''}`
    : language === 'zh-CN'
      ? `${displayTitle} UI 设计风格 - 获取专业 AI 生成提示词，包含完整代码示例和实时预览`
      : `${displayTitle} UI Design Style - Get professional AI prompts with complete code examples and live preview`;

  // Generate unified JSON-LD schema using @graph (2025/2026 best practice)
  // This consolidates all structured data into a single script tag with:
  // - Organization schema (with @id for referencing)
  // - WebSite schema (with search action)
  // - CreativeWork schema (style details)
  // - HowTo schema (usage instructions)
  // - BreadcrumbList schema
  const pageJsonLd = useMemo(
    () => generatePageSchema(
      'styleDetail',
      {
        style: {
          ...style,
          name: displayTitle,
          description: resolvedDescription,
        },
        breadcrumbs: [
          {
            name: language === 'zh-CN' ? '首页' : 'Home',
            url: `${BASE_URL}/${langPrefix}`,
          },
          {
            name: language === 'zh-CN' ? '风格库' : 'Styles',
            url: `${BASE_URL}/${langPrefix}/styles`,
          },
          {
            name: displayTitle,
            url: `${BASE_URL}/${langPrefix}/styles/preview/${styleId}`,
          },
        ],
      },
      language
    ),
    [style, displayTitle, resolvedDescription, language, langPrefix, styleId]
  );

  // ========== Render ==========
  return (
    <>
      {/* SEO Head - Dynamic meta tags for this style */}
      <SEOHead
        title={displayTitle}
        description={seoDescription}
        keywords={`${displayTitle},UI设计,AI提示词,${style.tags?.join(',') || 'CSS,前端设计'}`}
        path={`/styles/preview/${styleId}`}
        language={language}
        ogType="article"
        jsonLd={pageJsonLd}
      />

      <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col">
        {!isFullPageMode && (
          <PreviewPageHeader
            displayTitle={displayTitle}
            styleId={style.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            previewsList={previewsList}
            isReactPreview={isReactPreview}
            isLoadingPreview={isLoadingPreview}
            setShowPrompt={setShowPrompt}
            onOpenFullPage={handleOpenFullPageWindow}
            promptContent={promptContent}
            language={language}
            perfMode={effectivePerfMode}
            onTogglePerfMode={handleTogglePerfMode}
          />
        )}

        <div className="flex-1 overflow-auto custom-scrollbar relative">
          {!isDataVisualization && !isReactPreview && (
            <LoadingOverlay isVisible={isLoading || isLoadingPreview} />
          )}
          {isDataVisualization ? (
            <DataVisualizationPreview
              isOpen={true}
              onClose={() => window.close()}
              style={{ title: displayTitle, description }}
              initialScenario={currentPreview?.scenario}
            />
          ) : isReactPreview ? (
            <div className="w-full h-full overflow-auto p-4">
              {variant.reactComponent && (
                <variant.reactComponent autoStart={true} mode="full" />
              )}
            </div>
          ) : previewError ? (
            // 🛡️ 顯示預覽錯誤（超過重置上限時）
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8 max-w-md">
                <div className="mb-4 text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Preview Error
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {previewError}
                </p>
                <button
                  onClick={() => {
                    resetCountRef.current = 0;
                    setPreviewError(null);
                    setIsLoading(true);
                    setIframeInstanceKey((prev) => (prev + 1) % 10000);
                  }}
                  className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <iframe
              title={`${displayTitle} - Preview`}
              ref={iframeRef}
              srcDoc={iframeSrcDoc}
              className="w-full h-full border-0"
              key={`style-preview:${style.id}:${iframeInstanceKey}`}
              onLoad={handleIframeLoad}
              onError={(e) => {
                setIsLoading(false);
                logger.error('iframe error:', e);
              }}
              sandbox="allow-same-origin allow-scripts allow-forms"
            />
          )}
        </div>
      </div>

      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={`${displayTitle} - Prompt`}
        content={promptContent}
        stylePrompt={stylePromptContent}
        customPrompt={customPromptContent}
        isGenerating={isGeneratingPrompt}
      />
    </>
  );
}

/**
 * StylePreviewPage - Independent style preview page with streaming data loading
 *
 * Features:
 * - URL sharing support (e.g., /styles/preview/glassmorphism)
 * - Browser history navigation
 * - Multiple preview switching
 * - React component preview support
 * - Three rendering modes: HTML, Preact JSX, React JSX
 * - Deferred data loading for fast Time to First Paint
 *
 * Architecture:
 * - Uses React Router's defer/Await for streaming data
 * - Shows skeleton immediately while style data loads
 * - State management: usePreviewPageState hook
 * - Async loading: useAsyncPreviewLoader hook
 * - HTML building: buildPreviewHTML utility
 * - Header UI: PreviewPageHeader component
 */
export function StylePreviewPage() {
  const loaderData = useLoaderData();
  const { language, t } = useLanguage();

  // Handle both deferred and non-deferred loader data
  // Deferred: { styleMetadata, style: Promise }
  // Non-deferred: { style: Object }
  const isDeferred = 'styleMetadata' in loaderData && 'style' in loaderData;

  // Calculate skeleton title - use empty string when not deferred
  const skeletonTitle = !isDeferred
    ? ''
    : resolveI18nValue(loaderData.styleMetadata.title, language, t);

  if (!isDeferred) {
    // Legacy non-deferred path (for backwards compatibility)
    return <StylePreviewContent style={loaderData.style} />;
  }

  // Deferred path: show skeleton while style loads
  const { style } = loaderData;

  return (
    <Suspense fallback={<PreviewSkeleton title={skeletonTitle} />}>
      <Await
        resolve={style}
        errorElement={
          <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-xl font-bold text-red-600 mb-2">Failed to load preview</h2>
              <p className="text-gray-600 dark:text-gray-400">Please try refreshing the page.</p>
            </div>
          </div>
        }
      >
        {(loadedStyle) => {
          // Handle null/undefined style (loadStyleFromJSON may return null)
          if (!loadedStyle) {
            return (
              <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8 max-w-md">
                  <div className="mb-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Style Not Found
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This style could not be loaded. It may not exist or is still being prepared.
                  </p>
                  <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            );
          }
          return <StylePreviewContent style={loadedStyle} />;
        }}
      </Await>
    </Suspense>
  );
}

// Export as default for createLazyRoute compatibility
export default StylePreviewPage;
