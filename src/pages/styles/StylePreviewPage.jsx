import { useMemo, useCallback } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import { PreviewPromptGenerator } from '../../utils/promptGenerator';
import { DataVisualizationPreview } from '../../components/preview/DataVisualizationPreview';
import { previewLogger as logger } from '../../utils/logger';

// Extracted hooks
import { usePreviewPageState } from '../../components/preview/hooks/usePreviewPageState';
import { useAsyncPreviewLoader } from '../../components/preview/hooks/useAsyncPreviewLoader';

// Extracted components
import { PreviewPageHeader } from '../../components/preview/PreviewPageHeader';
import { LoadingOverlay } from '../../components/preview/LoadingOverlay';

// Extended utility
import { buildPreviewHTML } from '../../components/preview/utils/buildPreviewHTML';
import { buildEmptyStateHTML } from '../../components/preview/utils/emptyStateTemplate';

/**
 * StylePreviewPage - Independent style preview page
 *
 * Features:
 * - URL sharing support (e.g., /styles/preview/glassmorphism)
 * - Browser history navigation
 * - Multiple preview switching
 * - React component preview support
 * - Three rendering modes: HTML, Preact JSX, React JSX
 *
 * Architecture:
 * - State management: usePreviewPageState hook
 * - Async loading: useAsyncPreviewLoader hook
 * - HTML building: buildPreviewHTML utility
 * - Header UI: PreviewPageHeader component
 */
export function StylePreviewPage() {
  // ========== 1. Data from loader ==========
  const { style } = useLoaderData();
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();

  // ========== 2. Extract style properties ==========
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

  // ========== 3. Resolve display title ==========
  const displayTitle = useMemo(() => {
    if (!title) return '';
    if (typeof title === 'string') {
      return title;
    }
    if (typeof title === 'object') {
      return title['en-US'] || title['zh-CN'] || '';
    }
    return String(title);
  }, [title]);

  // ========== 4. Stabilize previews list ==========
  const previewsList = useMemo(
    () => (Array.isArray(previews) ? previews : []),
    [previews]
  );

  // ========== 5. Check if React preview ==========
  const isReactPreview = !!(variant && variant.reactComponent);

  // ========== 6. Use extracted page state hook ==========
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

  // ========== 7. Use extracted async loader hook ==========
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

  // ========== 8. Build preview HTML using extended utility ==========
  const previewHTML = useMemo(() => {
    // Check if we have any content to display
    const hasAsyncContent = asyncPreview && (
      asyncPreview.html ||
      asyncPreview.styles ||
      asyncPreview.jsx ||
      asyncPreview.compiledCode
    );
    const hasPreviewsList = previewsList && previewsList.length > 0;
    const hasFullPageHTML = fullPageHTML && fullPageHTML.trim().length > 0;

    // Show empty state when:
    // 1. No async content loaded
    // 2. No previews list available
    // 3. No fullPageHTML available
    // Note: demoHTML alone is NOT sufficient for preview page - it's only for StyleCard
    // Styles with only demoHTML (component demos) should show "no template" message
    if (!hasAsyncContent && !hasPreviewsList && !hasFullPageHTML) {
      return buildEmptyStateHTML({
        displayTitle,
        language
      });
    }

    // Build preview HTML with all available data
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
      displayTitle
    });
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
    previewCacheRef,
    language
  ]);

  // ========== 9. Generate prompt content ==========
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

  // ========== 10. Event handlers ==========
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

  // ========== 11. Derived values ==========
  const isDataVisualization = currentPreview?.type === 'data-visualization';

  // ========== 12. Render ==========
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
          />
        )}

        <div className="flex-1 overflow-auto custom-scrollbar relative">
          <LoadingOverlay
            isVisible={!isReactPreview && (isLoading || isLoadingPreview)}
          />

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
 * Wrapper with error boundary support
 * This export maintains compatibility with the router configuration
 */
export function StylePreviewPageWithErrorBoundary() {
  return <StylePreviewPage />;
}
