/**
 * Performance Optimizer - Core Web Vitals Enhancement
 *
 * This module provides utilities to optimize Core Web Vitals:
 * - LCP (Largest Contentful Paint): Loading performance
 * - INP (Interaction to Next Paint): Responsiveness
 * - CLS (Cumulative Layout Shift): Visual stability
 *
 * @module performanceOptimizer
 */

/**
 * Yield to the main thread to prevent long tasks from blocking INP
 * Use this in loops or heavy computations to keep the UI responsive
 *
 * Example usage:
 * ```javascript
 * async function processItems(items) {
 *   for (let i = 0; i < items.length; i++) {
 *     processItem(items[i]);
 *     if (i % 10 === 0) await yieldToMain(); // Yield every 10 items
 *   }
 * }
 * ```
 *
 * @returns {Promise<void>} Resolves after yielding to the main thread
 */
export function yieldToMain() {
  // Use scheduler.yield if available (Chrome 115+)
  if ('scheduler' in globalThis && 'yield' in globalThis.scheduler) {
    return globalThis.scheduler.yield();
  }

  // Fallback: Use setTimeout(0) to yield to the event loop
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

/**
 * Run a task when the browser is idle (won't block INP)
 * Use this for non-critical work that can be deferred
 *
 * @param {Function} callback - The function to run when idle
 * @param {Object} options - requestIdleCallback options
 * @param {number} options.timeout - Maximum time to wait before forcing execution (ms)
 * @returns {number|null} The idle callback ID, or null if not supported
 */
export function runWhenIdle(callback, options = { timeout: 2000 }) {
  if (typeof window === 'undefined') {
    // SSR: run immediately
    callback();
    return null;
  }

  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }

  // Fallback: use setTimeout
  setTimeout(callback, 1);
  return null;
}

/**
 * Cancel an idle callback
 *
 * @param {number|null} id - The idle callback ID to cancel
 */
export function cancelIdle(id) {
  if (id === null || typeof window === 'undefined') return;

  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  }
}

/**
 * Process items in chunks to avoid blocking the main thread
 * This is useful for rendering large lists or processing data
 *
 * @param {Array} items - Items to process
 * @param {Function} processor - Function to process each item
 * @param {Object} options - Processing options
 * @param {number} options.chunkSize - Number of items per chunk (default: 10)
 * @param {number} options.yieldInterval - Yield after this many chunks (default: 1)
 * @returns {Promise<Array>} Processed results
 */
export async function processInChunks(items, processor, options = {}) {
  const { chunkSize = 10, yieldInterval = 1 } = options;
  const results = [];
  let chunkCount = 0;

  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    const chunkResults = chunk.map(processor);
    results.push(...chunkResults);

    chunkCount++;
    if (chunkCount % yieldInterval === 0) {
      await yieldToMain();
    }
  }

  return results;
}

/**
 * Debounce a function to prevent rapid fire calls (helps with INP)
 *
 * @param {Function} func - Function to debounce
 * @param {number} wait - Debounce delay in ms
 * @param {boolean} immediate - Execute on leading edge
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 100, immediate = false) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(this, args);
  };
}

/**
 * Throttle a function to limit execution rate (helps with scroll/resize handlers)
 *
 * @param {Function} func - Function to throttle
 * @param {number} limit - Minimum time between calls in ms
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 100) {
  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Preload a critical image for better LCP
 *
 * @param {string} src - Image URL
 * @param {Object} options - Preload options
 * @param {string} options.as - Resource type (default: 'image')
 * @param {string} options.type - MIME type (e.g., 'image/webp')
 * @param {string} options.fetchpriority - Fetch priority ('high', 'low', 'auto')
 * @returns {HTMLLinkElement|null} The created link element
 */
export function preloadImage(src, options = {}) {
  if (typeof document === 'undefined') return null;

  const { as = 'image', type, fetchpriority = 'high' } = options;

  // Check if already preloaded
  const existing = document.querySelector(`link[rel="preload"][href="${src}"]`);
  if (existing) return existing;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  link.fetchPriority = fetchpriority;

  if (type) {
    link.type = type;
  }

  document.head.appendChild(link);
  return link;
}

/**
 * Create a placeholder with fixed dimensions to prevent CLS
 *
 * @param {number} width - Width in pixels
 * @param {number} height - Height in pixels
 * @returns {Object} Style object for the placeholder
 */
export function createPlaceholderStyle(width, height) {
  return {
    width: '100%',
    aspectRatio: `${width} / ${height}`,
    backgroundColor: '#f3f4f6',
    position: 'relative',
  };
}

/**
 * Observe when an element is about to enter the viewport
 * Use this for lazy loading to preload just before the element is visible
 *
 * @param {Element} element - Element to observe
 * @param {Function} callback - Called when element is about to be visible
 * @param {Object} options - IntersectionObserver options
 * @param {string} options.rootMargin - Margin around root (default: '200px')
 * @returns {Function} Cleanup function to disconnect observer
 */
export function observeNearViewport(element, callback, options = {}) {
  if (typeof IntersectionObserver === 'undefined' || !element) {
    // Fallback: run callback immediately
    callback();
    return () => {};
  }

  const { rootMargin = '200px' } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    { rootMargin }
  );

  observer.observe(element);

  return () => observer.disconnect();
}

/**
 * Measure and log a performance timing
 *
 * @param {string} name - Name of the measurement
 * @param {Function} fn - Function to measure
 * @returns {Promise<*>} Result of the function
 */
export async function measurePerformance(name, fn) {
  if (typeof performance === 'undefined') {
    return fn();
  }

  const startMark = `${name}-start`;
  const endMark = `${name}-end`;

  performance.mark(startMark);
  const result = await fn();
  performance.mark(endMark);

  performance.measure(name, startMark, endMark);

  if (import.meta.env?.DEV) {
    const measure = performance.getEntriesByName(name)[0];
    // eslint-disable-next-line no-console
    console.log(`[Perf] ${name}: ${measure.duration.toFixed(2)}ms`);
  }

  return result;
}

/**
 * Check if the user prefers reduced motion
 *
 * @returns {boolean} True if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get connection quality for adaptive loading
 *
 * @returns {Object} Connection info
 */
export function getConnectionQuality() {
  if (typeof navigator === 'undefined' || !navigator.connection) {
    return { effectiveType: '4g', saveData: false };
  }

  return {
    effectiveType: navigator.connection.effectiveType || '4g',
    saveData: navigator.connection.saveData || false,
    downlink: navigator.connection.downlink,
    rtt: navigator.connection.rtt,
  };
}

/**
 * Should load high quality assets based on connection
 *
 * @returns {boolean} True if high quality assets should be loaded
 */
export function shouldLoadHighQuality() {
  const { effectiveType, saveData } = getConnectionQuality();

  if (saveData) return false;
  if (['slow-2g', '2g'].includes(effectiveType)) return false;

  return true;
}

export default {
  yieldToMain,
  runWhenIdle,
  cancelIdle,
  processInChunks,
  debounce,
  throttle,
  preloadImage,
  createPlaceholderStyle,
  observeNearViewport,
  measurePerformance,
  prefersReducedMotion,
  getConnectionQuality,
  shouldLoadHighQuality,
};
