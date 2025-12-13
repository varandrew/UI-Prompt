import { useEffect, useRef, useCallback } from 'react';

// Shared observer instance across all components
let sharedObserver = null;
const observerRegistry = new WeakMap();

/**
 * Shared IntersectionObserver hook for efficient visibility detection
 *
 * Instead of creating one observer per component, this hook uses a single
 * shared observer instance to monitor all elements, reducing memory usage
 * and improving performance when many elements are observed.
 *
 * @param {Function} onVisible - Callback when element becomes visible
 * @param {Object} options - IntersectionObserver options (optional)
 * @returns {Object} - React ref to attach to the element
 */
export function useSharedIntersectionObserver(onVisible, options = {}) {
  const elementRef = useRef(null);
  const callbackRef = useRef(onVisible);

  // Update callback ref when onVisible changes
  useEffect(() => {
    callbackRef.current = onVisible;
  }, [onVisible]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create shared observer on first use
    if (!sharedObserver) {
      const defaultOptions = {
        rootMargin: '200px',
        threshold: 0.01,
        ...options
      };

      sharedObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = observerRegistry.get(entry.target);
            if (callback) {
              callback(true);
              // Unobserve after first intersection (one-time trigger)
              sharedObserver.unobserve(entry.target);
              observerRegistry.delete(entry.target);
            }
          }
        });
      }, defaultOptions);
    }

    // Register callback and start observing
    observerRegistry.set(element, callbackRef.current);
    sharedObserver.observe(element);

    // Cleanup on unmount
    return () => {
      if (element && sharedObserver) {
        sharedObserver.unobserve(element);
        observerRegistry.delete(element);
      }
    };
  }, []); // Empty deps - setup once per component

  return elementRef;
}

/**
 * Get statistics about the shared observer (for debugging)
 */
export function getObserverStats() {
  return {
    hasSharedObserver: !!sharedObserver,
    registrySize: observerRegistry ? 'WeakMap (size not accessible)' : 0
  };
}
