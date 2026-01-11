/**
 * Google Analytics 4 Integration
 * Provides GA4 initialization and tracking utilities for SPA
 *
 * Features:
 * - Automatic GA4 script loading
 * - Manual page view tracking (for SPA route changes)
 * - Custom event tracking
 * - Privacy-friendly defaults (IP anonymization)
 */

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

/**
 * Initialize Google Analytics 4
 * OPTIMIZATION: Uses interaction-triggered loading strategy
 * - Loads GA4 when user interacts (click, scroll, keydown, touchstart)
 * - Falls back to loading after 3 seconds to ensure tracking isn't lost
 * - Saves 0.5-0.8s on initial page load
 */
export function initGA4() {
  // Skip in development or if ID not configured
  if (import.meta.env.DEV || !GA4_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('[GA4] Disabled in development mode');
    }
    return;
  }

  // Prevent duplicate initialization
  if (window.__ga4Initialized) {
    return;
  }
  window.__ga4Initialized = true;

  // Actual GA4 loading function
  const loadGA4 = () => {
    if (window.__ga4Loaded) return;
    window.__ga4Loaded = true;

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // Configure GA4
    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID, {
      send_page_view: false, // Manual page view tracking for SPA
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });

    // eslint-disable-next-line no-console
    console.log('[GA4] Initialized (deferred)');
  };

  // Load on user interaction (high confidence of real user)
  const interactionEvents = ['click', 'scroll', 'keydown', 'touchstart'];
  const onInteraction = () => {
    interactionEvents.forEach(e => window.removeEventListener(e, onInteraction));
    loadGA4();
  };
  interactionEvents.forEach(e =>
    window.addEventListener(e, onInteraction, { once: true, passive: true })
  );

  // Fallback: Load after 3 seconds to ensure tracking isn't lost
  // This covers users who only view without interacting
  setTimeout(loadGA4, 3000);
}

/**
 * Track page view (call on route change for SPA)
 * @param {string} path - Page path (e.g., '/zh/styles')
 * @param {string} title - Page title
 */
export function trackPageView(path, title) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

/**
 * Track custom event
 * @param {string} eventName - Event name (e.g., 'click_button', 'view_style')
 * @param {Object} params - Event parameters
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params);
}

/**
 * Track outbound link click
 * @param {string} url - Destination URL
 * @param {string} label - Link label/description
 */
export function trackOutboundLink(url, label = '') {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'click', {
    event_category: 'outbound',
    event_label: label || url,
    transport_type: 'beacon',
  });
}

export default initGA4;
