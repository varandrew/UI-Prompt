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
 * Send metrics to analytics service
 * @param {Object} metric - Web Vitals metric object
 */
function sendToAnalytics(metric) {
  // Development: Log to console
  if (import.meta.env.DEV) {
    const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
    // eslint-disable-next-line no-console
    console.log(
      `[Web Vitals] ${emoji} ${metric.name}:`,
      Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      `(${metric.rating})`
    );
    return;
  }

  // Production: Send to Google Analytics 4 (if configured)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
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
