import { Suspense, useMemo, useCallback } from 'react';
import { useLoaderData, useSearchParams, Await } from 'react-router-dom';

import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import { PreviewPromptGenerator } from '../../utils/promptGenerator';
import { DataVisualizationPreview } from '../../components/preview/DataVisualizationPreview';
import { previewLogger as logger } from '../../utils/logger';
import { resolveI18nValue } from '../../utils/i18n/resolveI18nValue';
import { LoadingOverlay } from '../../components/preview/LoadingOverlay';
import { LoadingDots } from '../../components/ui/LoadingDots';

// Extracted hooks
import { usePreviewPageState } from '../../components/preview/hooks/usePreviewPageState';
import { useAsyncPreviewLoader } from '../../components/preview/hooks/useAsyncPreviewLoader';

// Extracted components
import { PreviewPageHeader } from '../../components/preview/PreviewPageHeader';

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
  const [searchParams] = useSearchParams();
  const { language, t } = useLanguage();
  const perfMode = searchParams.get('perf') === '1';

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
    language
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
    setIsLoading,
    language
  });

  // ========== Build preview HTML using extended utility ==========
  const previewHTML = useMemo(() => {
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
      perfMode
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
    perfMode
  ]);

  // ========== Generate prompt content ==========
  const promptContent = useMemo(() => {
    try {
      return PreviewPromptGenerator.generate(
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
    } catch (error) {
      logger.error('Error generating prompt:', error);
      return '';
    }
  }, [style, activeIndex, previewsList, currentPreview, language]);

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

  // ========== Derived values ==========
  const isDataVisualization = currentPreview?.type === 'data-visualization';

  // ========== Render ==========
  return (
    <>
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
          ) : (
            <iframe
              key={`${style.id}:${activeIndex}:${asyncPreview ? 'ready' : 'loading'}`}
              title={`${displayTitle} - Preview`}
              srcDoc={previewHTML}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
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
