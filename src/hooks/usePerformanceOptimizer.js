/**
 * usePerformanceOptimizer Hook
 *
 * React hook for Core Web Vitals optimization.
 * Provides utilities to improve INP, LCP, and CLS metrics.
 *
 * @module usePerformanceOptimizer
 */

import { useCallback, useEffect, useRef } from 'react';
import {
  yieldToMain,
  runWhenIdle,
  cancelIdle,
  debounce,
  throttle,
  observeNearViewport,
  getConnectionQuality,
  shouldLoadHighQuality,
  prefersReducedMotion,
} from '../utils/performanceOptimizer';

/**
 * Hook for yielding to main thread in event handlers
 * Use this for expensive operations triggered by user interaction
 *
 * @returns {Function} Wrapped handler that yields to main thread
 *
 * @example
 * const handleClick = useYieldingHandler(async () => {
 *   // Expensive operation
 *   await processData();
 * });
 */
export function useYieldingHandler(handler) {
  return useCallback(
    async (...args) => {
      // Yield before heavy work to ensure UI remains responsive
      await yieldToMain();
      return handler(...args);
    },
    [handler]
  );
}

/**
 * Hook for deferring non-critical work until idle
 *
 * @param {Function} callback - Work to defer
 * @param {Object} options - Options
 * @param {number} options.timeout - Max wait time (default: 2000ms)
 * @param {Array} deps - Dependencies array
 *
 * @example
 * useIdleCallback(() => {
 *   // Non-critical analytics or logging
 *   trackPageView();
 * }, { timeout: 3000 }, [pageId]);
 */
export function useIdleCallback(callback, options = {}, deps = []) {
  const idleIdRef = useRef(null);

  useEffect(() => {
    idleIdRef.current = runWhenIdle(callback, options);

    return () => {
      if (idleIdRef.current !== null) {
        cancelIdle(idleIdRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Hook for debounced callbacks (helps with INP on rapid fire events)
 *
 * @param {Function} callback - Function to debounce
 * @param {number} delay - Debounce delay in ms
 * @param {Array} deps - Dependencies array
 * @returns {Function} Debounced callback
 *
 * @example
 * const debouncedSearch = useDebouncedCallback(
 *   (query) => fetchSearchResults(query),
 *   300,
 *   []
 * );
 */
export function useDebouncedCallback(callback, delay = 100, deps = []) {
  const callbackRef = useRef(callback);

  // Update ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay),
    [delay, ...deps]
  );
}

/**
 * Hook for throttled callbacks (helps with scroll/resize handlers)
 *
 * @param {Function} callback - Function to throttle
 * @param {number} limit - Throttle limit in ms
 * @param {Array} deps - Dependencies array
 * @returns {Function} Throttled callback
 *
 * @example
 * const throttledScroll = useThrottledCallback(
 *   () => updateScrollPosition(),
 *   100,
 *   []
 * );
 */
export function useThrottledCallback(callback, limit = 100, deps = []) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    throttle((...args) => callbackRef.current(...args), limit),
    [limit, ...deps]
  );
}

/**
 * Hook for preloading content when element approaches viewport
 *
 * @param {Function} onApproaching - Callback when element is about to be visible
 * @param {Object} options - IntersectionObserver options
 * @returns {React.RefObject} Ref to attach to the element
 *
 * @example
 * const ref = usePreloadOnApproach(() => {
 *   // Preload image or data
 *   preloadImage('/heavy-image.jpg');
 * });
 *
 * return <div ref={ref}>Content</div>;
 */
export function usePreloadOnApproach(onApproaching, options = {}) {
  const elementRef = useRef(null);
  const cleanupRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    cleanupRef.current = observeNearViewport(
      elementRef.current,
      onApproaching,
      options
    );

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [onApproaching, options]);

  return elementRef;
}

/**
 * Hook for adaptive loading based on connection quality
 *
 * @returns {Object} Connection info and quality flags
 *
 * @example
 * const { shouldLoadHQ, saveData, effectiveType } = useAdaptiveLoading();
 *
 * return shouldLoadHQ ? <HighQualityImage /> : <LowQualityImage />;
 */
export function useAdaptiveLoading() {
  const connection = getConnectionQuality();

  return {
    ...connection,
    shouldLoadHQ: shouldLoadHighQuality(),
    reducedMotion: prefersReducedMotion(),
  };
}

/**
 * Hook for tracking long tasks (helps identify INP issues)
 * Only active in development mode
 *
 * @param {string} componentName - Name of the component for logging
 */
export function useLongTaskMonitor(componentName) {
  useEffect(() => {
    if (import.meta.env?.PROD) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn(
            `[Long Task] ${componentName}: ${entry.duration.toFixed(0)}ms`,
            entry
          );
        }
      }
    });

    try {
      observer.observe({ type: 'longtask', buffered: true });
    } catch {
      // Long task observation not supported
    }

    return () => observer.disconnect();
  }, [componentName]);
}

/**
 * Combined hook for common performance optimizations
 *
 * @param {Object} options - Configuration options
 * @returns {Object} Performance utilities
 *
 * @example
 * const {
 *   handleClick,
 *   debouncedSearch,
 *   connection,
 * } = usePerformanceOptimizer({
 *   onClick: () => doExpensiveWork(),
 *   onSearch: (q) => search(q),
 *   searchDebounce: 300,
 * });
 */
export function usePerformanceOptimizer(options = {}) {
  const {
    onClick,
    onSearch,
    onScroll,
    searchDebounce = 300,
    scrollThrottle = 100,
  } = options;

  const handleClick = useYieldingHandler(onClick || (() => {}));
  const debouncedSearch = useDebouncedCallback(onSearch || (() => {}), searchDebounce);
  const throttledScroll = useThrottledCallback(onScroll || (() => {}), scrollThrottle);
  const connection = useAdaptiveLoading();

  return {
    handleClick: onClick ? handleClick : undefined,
    debouncedSearch: onSearch ? debouncedSearch : undefined,
    throttledScroll: onScroll ? throttledScroll : undefined,
    connection,
    yieldToMain,
    runWhenIdle,
  };
}

export default usePerformanceOptimizer;
