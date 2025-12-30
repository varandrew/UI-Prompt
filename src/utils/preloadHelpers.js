/**
 * Smart Preload Helpers
 * Provides utilities for intelligent content prefetching
 * to reduce perceived loading time
 *
 * OPTIMIZATION: Preload first preview content at route level
 * to eliminate waterfall delays (saves 300-500ms)
 *
 * @module utils/preloadHelpers
 */

import { previewLogger as logger } from './logger';
import { buildContentPath } from '../data/loaders/config/pathHelper.js';
import { isUiStyleAppIndexHtml } from './isUiStyleAppIndexHtml';

/**
 * In-flight preload promises to prevent duplicate requests
 * @type {Map<string, Promise>}
 */
const preloadPromises = new Map();

/**
 * Preloaded content cache (separate from main preview cache)
 * Used by route loaders to pass content to components
 * @type {Map<string, Object>}
 */
const preloadedContent = new Map();

/**
 * Fetch text content with timeout and error handling
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in ms (default: 5000)
 * @returns {Promise<string|null>}
 */
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) return null;

    const text = await response.text();

    // Guard against Vite SPA fallback
    const isHtmlFallback = text.trim().toLowerCase().startsWith('<!doctype') ||
                          text.trim().toLowerCase().startsWith('<html');
    const isNonHtmlFile = url.endsWith('.css') || url.endsWith('.jsx') || url.endsWith('.js');

    if (isHtmlFallback && (isNonHtmlFile || isUiStyleAppIndexHtml(text))) {
      return null;
    }

    return text;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name !== 'AbortError') {
      logger.warn(`Preload fetch failed: ${url}`, error.message);
    }
    return null;
  }
}

/**
 * Preload first preview content for a style family
 * Called by route loader to start content fetch before component mount
 *
 * OPTIMIZATION: This runs in parallel with manifest and style loading,
 * so when the component mounts, the first preview is already available
 *
 * @param {string} category - Category ID (e.g., 'visual', 'retro')
 * @param {string} familyId - Family ID (e.g., 'glassmorphism')
 * @param {string} [previewId] - Optional specific preview ID to preload
 * @returns {Promise<Object|null>} Preloaded content or null
 */
export async function preloadFirstPreviewContent(category, familyId, previewId = null) {
  // Build cache key
  const cacheKey = previewId || `${category}-${familyId}`;

  // Check if already preloaded
  if (preloadedContent.has(cacheKey)) {
    logger.debug(`Preload cache hit: ${cacheKey}`);
    return preloadedContent.get(cacheKey);
  }

  // Check if preload is in progress
  if (preloadPromises.has(cacheKey)) {
    logger.debug(`Preload in progress: ${cacheKey}`);
    return preloadPromises.get(cacheKey);
  }

  // Start preload
  const preloadPromise = (async () => {
    // Skip if no previewId OR if it's a family-level ID (only 2 parts: category-familyId)
    // Valid template IDs have 3+ parts: category-familyId-templateName
    // Examples:
    //   - "core-skeuomorphism" (2 parts) → skip, let FamilyLoader handle
    //   - "core-skeuomorphism-analog-synthesizer" (3 parts) → valid, preload
    //   - "visual-glassmorphism-glassmorphism-landing" (4 parts) → valid, preload
    const previewIdParts = previewId ? previewId.split('-') : [];
    if (!previewId || previewIdParts.length < 3) {
      logger.debug(`Family-level or missing previewId: ${previewId || 'null'}, skipping preload (FamilyLoader will handle)`);
      return null;
    }

    // Use the provided previewId as templateId (it's a full template ID)
    const templateId = previewId;
    const basePath = buildContentPath(`styles/${category}/${familyId}/${templateId}`);

    logger.debug(`Preloading first preview: ${basePath}`);

    try {
      // PARALLEL: Fetch all possible files at once
      const [fullpageJsx, demoJsx, fullpageHtml, fullpageCss] = await Promise.all([
        fetchWithTimeout(`${basePath}/fullpage.jsx`),
        fetchWithTimeout(`${basePath}/demo.jsx`),
        fetchWithTimeout(`${basePath}/fullpage.html`),
        fetchWithTimeout(`${basePath}/fullpage.css`)
      ]);

      // Determine content type and build result
      let result = null;

      // Priority 1: fullpage.jsx
      if (fullpageJsx) {
        result = {
          jsx: fullpageJsx,
          styles: fullpageCss || '',
          source: 'fullpage.jsx',
          preloaded: true
        };
      }
      // Priority 2: demo.jsx
      else if (demoJsx) {
        result = {
          jsx: demoJsx,
          styles: fullpageCss || '',
          source: 'demo.jsx',
          preloaded: true
        };
      }
      // Priority 3: HTML
      else if (fullpageHtml) {
        result = {
          html: fullpageHtml,
          styles: fullpageCss || '',
          source: 'fullpage.html',
          preloaded: true
        };
      }

      if (result) {
        preloadedContent.set(cacheKey, result);
        logger.debug(`Preload complete: ${cacheKey} (${result.source})`);
      } else {
        logger.warn(`Preload empty: ${cacheKey}`);
      }

      return result;
    } catch (error) {
      logger.error(`Preload failed: ${cacheKey}`, error);
      return null;
    } finally {
      // Clean up in-flight tracking
      preloadPromises.delete(cacheKey);
    }
  })();

  // Track in-flight promise
  preloadPromises.set(cacheKey, preloadPromise);

  return preloadPromise;
}

/**
 * Get preloaded content if available
 * @param {string} cacheKey - Cache key (previewId or category-familyId)
 * @returns {Object|null} Preloaded content or null
 */
export function getPreloadedContent(cacheKey) {
  return preloadedContent.get(cacheKey) || null;
}

/**
 * Check if content is preloaded
 * @param {string} cacheKey - Cache key
 * @returns {boolean}
 */
export function isContentPreloaded(cacheKey) {
  return preloadedContent.has(cacheKey);
}

/**
 * Clear preloaded content cache
 * Call this on route change to free memory
 */
export function clearPreloadedContent() {
  preloadedContent.clear();
  preloadPromises.clear();
  logger.debug('Preloaded content cache cleared');
}

/**
 * Preload adjacent previews for smooth navigation
 * Called after main preview loads to prefetch neighbors
 *
 * @param {Array<{previewId: string}>} previewsList - List of previews
 * @param {number} currentIndex - Currently active index
 * @param {string} category - Category ID
 * @param {string} familyId - Family ID
 */
export function preloadAdjacentPreviews(previewsList, currentIndex, category, familyId) {
  if (!previewsList || previewsList.length <= 1) return;

  // Preload previous and next previews
  const indices = [currentIndex - 1, currentIndex + 1].filter(
    (i) => i >= 0 && i < previewsList.length && i !== currentIndex
  );

  indices.forEach((index) => {
    const preview = previewsList[index];
    const previewId = preview?.previewId || preview?.id;

    // OPTIMIZATION: Check both caches to prevent duplicate requests
    if (previewId && !preloadedContent.has(previewId) && !preloadPromises.has(previewId)) {
      // Use requestIdleCallback for non-critical preloading
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => {
          preloadFirstPreviewContent(category, familyId, previewId);
        }, { timeout: 2000 });
      } else {
        // Fallback with setTimeout
        setTimeout(() => {
          preloadFirstPreviewContent(category, familyId, previewId);
        }, 100);
      }
    }
  });
}

/**
 * Get preload statistics for debugging
 * @returns {{preloaded: number, inFlight: number, keys: string[]}}
 */
export function getPreloadStats() {
  return {
    preloaded: preloadedContent.size,
    inFlight: preloadPromises.size,
    keys: Array.from(preloadedContent.keys())
  };
}

export default {
  preloadFirstPreviewContent,
  getPreloadedContent,
  isContentPreloaded,
  clearPreloadedContent,
  preloadAdjacentPreviews,
  getPreloadStats
};
