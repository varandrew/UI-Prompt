import { useState, useEffect, useRef, useMemo } from 'react';
import { loadPreview, batchPreloadPreviews, isPreviewIdValid } from '../../../utils/previewLoader';
import { compileJSX } from '../../../utils/jsxCompiler';
import { previewLogger as logger } from '../../../utils/logger';

/**
 * Custom hook for managing async preview loading with cache and multi-mode support
 *
 * Supports three rendering modes:
 * 1. React JSX: Compiles JSX to ES5 code using Sucrase, stores in compiledCode
 * 2. Preact JSX: Stores raw JSX for Preact runtime rendering
 * 3. HTML: Stores static HTML and CSS
 *
 * @param {Object} params - Hook parameters
 * @param {Array} params.previewsList - Array of preview objects
 * @param {number} params.activeIndex - Current active preview index
 * @param {string} params.fullPagePreviewId - Full page preview ID for fallback
 * @param {string} params.styleId - Style ID for ultimate fallback
 * @param {boolean} params.isReactPreview - Whether this is a React component preview (skips async loading)
 * @param {Function} params.setIsLoading - Parent's loading state setter
 *
 * @returns {Object} Hook state and utilities
 * @returns {Object|null} asyncPreview - Loaded preview content {html?, jsx?, styles, renderMode?, compiledCode?, componentName?, error?}
 * @returns {string|null} asyncPreviewId - Current loaded preview ID
 * @returns {boolean} isLoadingPreview - Preview-specific loading state
 * @returns {Object|null} currentPreview - Current preview object from previewsList
 * @returns {string|null} currentPreviewId - Computed preview ID for current preview
 * @returns {Object} previewCacheRef - Ref to preview cache for external access
 */
export function useAsyncPreviewLoader({
  previewsList,
  activeIndex,
  fullPagePreviewId,
  styleId,
  isReactPreview,
  setIsLoading
}) {
  // Cache ref to store loaded previews and avoid redundant network requests
  const previewCacheRef = useRef({});

  // Async preview state
  const [asyncPreview, setAsyncPreview] = useState(null);
  const [asyncPreviewId, setAsyncPreviewId] = useState(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  // Compute current preview object from previewsList
  const currentPreview = useMemo(() => {
    if (!previewsList || previewsList.length === 0) return null;
    const index = Math.min(activeIndex, previewsList.length - 1);
    return previewsList[index] || previewsList[0];
  }, [previewsList, activeIndex]);

  // Compute current preview ID with fallback chain
  const currentPreviewId = useMemo(() => {
    return currentPreview?.previewId || fullPagePreviewId || currentPreview?.id || styleId || null;
  }, [currentPreview, fullPagePreviewId, styleId]);

  // Effect 1: Batch preload all preview IDs to reduce switching latency
  useEffect(() => {
    // Skip preloading for React preview mode (no async loading needed)
    if (isReactPreview) return;

    const ids = new Set();

    // Collect all preview IDs from previewsList
    previewsList.forEach((preview) => {
      const candidate = preview?.previewId || preview?.id;
      if (candidate && isPreviewIdValid(candidate)) {
        ids.add(candidate);
      }
    });

    // Add fullPagePreviewId if valid
    if (fullPagePreviewId && isPreviewIdValid(fullPagePreviewId)) {
      ids.add(fullPagePreviewId);
    }

    // Fallback to style.id for single-preview styles
    if (ids.size === 0 && styleId && isPreviewIdValid(styleId)) {
      ids.add(styleId);
    }

    // Batch preload with 150ms delay between requests
    if (ids.size > 0) {
      batchPreloadPreviews(Array.from(ids), 150);
    }
  }, [previewsList, fullPagePreviewId, styleId, isReactPreview]);

  // Effect 2: Main async loading logic - loads preview content based on activeIndex
  useEffect(() => {
    // Async loading with cleanup flag to prevent state updates after unmount
    let cancelled = false;

    /**
     * Fallback compiler for React JSX when remote loading fails
     * Compiles local demoJSX to avoid being stuck on "loading"
     *
     * @returns {Promise<boolean>} True if compilation succeeded or was handled
     */
    const compileReactFallback = async () => {
      if (!(currentPreview?.renderMode === 'react-jsx' && currentPreview?.demoJSX)) {
        return false;
      }

      try {
        const result = await compileJSX(currentPreview.demoJSX, { mode: 'react' });
        if (cancelled) return true;

        const previewData = {
          renderMode: 'react-jsx',
          compiledCode: result.code,
          componentName: result.componentName,
          styles: currentPreview.styles || currentPreview.fullPageStyles || ''
        };

        const cacheKey = currentPreviewId;

        setAsyncPreviewId(cacheKey);
        setAsyncPreview(previewData);
        if (cacheKey) {
          previewCacheRef.current[cacheKey] = previewData;
        }
        setIsLoading(false);
        return true;
      } catch (error) {
        if (cancelled) return true;
        logger.error('[React JSX] Fallback compilation error:', error);
        setAsyncPreview({
          renderMode: 'react-jsx',
          error: error.message,
          styles: currentPreview?.styles || currentPreview?.fullPageStyles || ''
        });
        setIsLoading(false);
        return false;
      }
    };

    // Check if preview is already cached
    if (currentPreviewId && previewCacheRef.current[currentPreviewId]) {
      setAsyncPreviewId(currentPreviewId);
      setAsyncPreview(previewCacheRef.current[currentPreviewId]);
      setIsLoading(false);
      setIsLoadingPreview(false);
      return;
    }

    // Check if current preview matches already loaded content
    if (currentPreviewId && asyncPreviewId === currentPreviewId && asyncPreview) {
      setIsLoading(false);
      setIsLoadingPreview(false);
      return;
    }

    // Reset previous async state
    setAsyncPreviewId(currentPreviewId || null);
    setAsyncPreview(null);

    // No previewId - check if React JSX mode needs local compilation
    if (!currentPreviewId) {
      if (currentPreview?.renderMode === 'react-jsx' && currentPreview?.demoJSX) {
        setIsLoadingPreview(true);
        compileJSX(currentPreview.demoJSX, { mode: 'react' })
          .then(result => {
            setAsyncPreview({
              renderMode: 'react-jsx',
              compiledCode: result.code,
              componentName: result.componentName,
              styles: currentPreview.styles || ''
            });
            setIsLoadingPreview(false);
            setIsLoading(false);
          })
          .catch(error => {
            logger.error('[React JSX] Compilation error:', error);
            setAsyncPreview({
              renderMode: 'react-jsx',
              compiledCode: '',
              error: error.message,
              styles: currentPreview.styles || ''
            });
            setIsLoadingPreview(false);
            setIsLoading(false);
          });
        return;
      }

      // No async content needed - close loading states
      setIsLoadingPreview(false);
      setIsLoading(false);
      return;
    }

    setIsLoadingPreview(true);
    loadPreview(currentPreviewId)
      .then(async (content) => {
        if (cancelled) return;
        setAsyncPreviewId(currentPreviewId);

        // Handle React JSX mode: compile JSX to ES5 code
        if (content.renderMode === 'react-jsx' && content.jsx) {
          try {
            const result = await compileJSX(content.jsx, { mode: 'react' });
            const previewData = {
              renderMode: 'react-jsx',
              compiledCode: result.code,
              componentName: result.componentName,
              styles: content.styles || ''
            };

            setAsyncPreview(previewData);
            setIsLoading(false);
            previewCacheRef.current[currentPreviewId] = previewData;
          } catch (error) {
            logger.error('[React JSX] Compilation error:', error);
            setAsyncPreview({
              renderMode: 'react-jsx',
              error: error.message,
              styles: content.styles || ''
            });
            setIsLoading(false);
          }
        }
        // Handle Preact JSX mode: store raw JSX
        else if (content.renderMode === 'jsx' && content.jsx) {
          const previewData = {
            jsx: content.jsx,
            demoJSX: content.demoJSX || content.jsx,
            styles: content.styles || '',
            renderMode: 'jsx'
          };

          setAsyncPreview(previewData);
          setIsLoading(false);
          previewCacheRef.current[currentPreviewId] = previewData;
        }
        // Handle HTML mode: store static HTML and styles
        else {
          const previewData = {
            html: content.html || '',
            styles: content.styles || ''
          };

          setAsyncPreview(previewData);
          setIsLoading(false);
          previewCacheRef.current[currentPreviewId] = previewData;
        }

        // If loaded content is empty, attempt React JSX fallback compilation
        const hasHtmlContent = typeof content.html === 'string' && content.html.trim().length > 0;
        const hasStylesContent = typeof content.styles === 'string' && content.styles.trim().length > 0;
        if (!content.renderMode && !hasHtmlContent && !hasStylesContent) {
          const handled = await compileReactFallback();
          if (!handled) {
            setAsyncPreview({ html: '', styles: '' });
            setIsLoading(false);
          }
        }
      })
      .catch(async (err) => {
        logger.error(`Preview loading failed: ${currentPreviewId}`, err);
        if (!cancelled) {
          const handled = await compileReactFallback();
          if (!handled) {
            setAsyncPreview({ html: '', styles: '' });
            setIsLoading(false);
          }
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoadingPreview(false);
      });

    // Cleanup function to cancel async operations
    return () => {
      cancelled = true;
    };
  }, [
    activeIndex,
    previewsList,
    fullPagePreviewId,
    currentPreview,
    currentPreviewId,
    asyncPreviewId,
    asyncPreview,
    setIsLoading
  ]);

  return {
    asyncPreview,
    asyncPreviewId,
    isLoadingPreview,
    currentPreview,
    currentPreviewId,
    previewCacheRef
  };
}
