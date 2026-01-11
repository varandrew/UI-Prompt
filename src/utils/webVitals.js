/**
 * Web Vitals Monitoring
 * Tracks Core Web Vitals metrics for SEO and performance insights
 *
 * Metrics tracked:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity (deprecated, use INP)
 * - INP (Interaction to Next Paint): Responsiveness
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): Initial render
 * - TTFB (Time to First Byte): Server response time
 */

/**
 * Send metrics to analytics service with enhanced debugging
 * @param {Object} metric - Web Vitals metric object
 */
function sendToAnalytics(metric) {
  const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);
  const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';

  // Development: Enhanced debugging with element identification
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(
      `[Web Vitals] ${emoji} ${metric.name}:`,
      value,
      `(${metric.rating})`
    );

    // LCP: Identify the largest content element for optimization
    if (metric.name === 'LCP' && metric.entries?.[0]) {
      const entry = metric.entries[0];
      // eslint-disable-next-line no-console
      console.log(`  └─ LCP Element:`, {
        tagName: entry.element?.tagName || 'unknown',
        id: entry.element?.id || '(no id)',
        className: entry.element?.className?.slice?.(0, 50) || '(no class)',
        size: entry.size,
        url: entry.url || '(no url)',
        loadTime: Math.round(entry.loadTime || 0),
        renderTime: Math.round(entry.renderTime || 0),
      });
    }

    // CLS: Identify layout shift sources for debugging
    if (metric.name === 'CLS' && metric.entries) {
      const significantShifts = metric.entries.filter(e => e.value > 0.01);
      if (significantShifts.length > 0) {
        // eslint-disable-next-line no-console
        console.log(`  └─ CLS Sources (${significantShifts.length} shifts):`);
        significantShifts.forEach((entry, i) => {
          const sources = entry.sources || [];
          // eslint-disable-next-line no-console
          console.log(`     ${i + 1}. shift: ${entry.value.toFixed(4)}`, {
            hadRecentInput: entry.hadRecentInput,
            elements: sources.map(s => ({
              tagName: s.node?.tagName || 'unknown',
              id: s.node?.id || '(no id)',
              previousRect: `${s.previousRect?.width}x${s.previousRect?.height}`,
              currentRect: `${s.currentRect?.width}x${s.currentRect?.height}`,
            })),
          });
        });
      }
    }

    // INP: Identify slow interactions
    if (metric.name === 'INP' && metric.entries?.[0]) {
      const entry = metric.entries[0];
      // eslint-disable-next-line no-console
      console.log(`  └─ INP Interaction:`, {
        target: entry.target?.tagName || 'unknown',
        interactionType: entry.interactionType || 'unknown',
        processingStart: Math.round(entry.processingStart || 0),
        processingEnd: Math.round(entry.processingEnd || 0),
      });
    }

    return;
  }

  // Production: Send to Google Analytics 4 (if configured)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      value,
      event_label: metric.id,
      metric_rating: metric.rating,
      non_interaction: true,
    });
  }
}

/**
 * Report handler that processes each Web Vitals metric
 * @param {Object} metric - The metric to report
 */
function reportWebVitals(metric) {
  // Only report in browser environment
  if (typeof window === 'undefined') return;

  sendToAnalytics(metric);
}

/**
 * Initialize Web Vitals monitoring
 * Call this function once in your app entry point (main.jsx)
 * Uses dynamic import for graceful degradation if web-vitals is not installed
 */
export async function initWebVitals() {
  // Only initialize in browser
  if (typeof window === 'undefined') return;

  try {
    const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals');

    // Core Web Vitals (Google's key metrics)
    onLCP(reportWebVitals);  // Largest Contentful Paint
    onINP(reportWebVitals);  // Interaction to Next Paint
    onCLS(reportWebVitals);  // Cumulative Layout Shift

    // Additional helpful metrics
    onFCP(reportWebVitals);  // First Contentful Paint
    onTTFB(reportWebVitals); // Time to First Byte

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('[Web Vitals] Monitoring initialized');
    }
  } catch {
    // web-vitals package not installed, skip monitoring
    if (import.meta.env.DEV) {
      console.warn('[Web Vitals] Package not installed, monitoring disabled. Run: npm install web-vitals');
    }
  }
}

/**
 * Get performance recommendations based on current metrics
 * @returns {Object} Recommendations object
 */
export function getPerformanceRecommendations() {
  if (typeof window === 'undefined' || !window.performance) {
    return { available: false };
  }

  const navigation = performance.getEntriesByType('navigation')[0];

  if (!navigation) {
    return { available: false };
  }

  return {
    available: true,
    metrics: {
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      ttfb: navigation.responseStart - navigation.requestStart,
      download: navigation.responseEnd - navigation.responseStart,
      domInteractive: navigation.domInteractive - navigation.fetchStart,
      domComplete: navigation.domComplete - navigation.fetchStart,
      loadComplete: navigation.loadEventEnd - navigation.fetchStart,
    },
  };
}

export default initWebVitals;
