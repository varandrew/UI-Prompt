import { useState, useEffect, useCallback } from 'react';

/**
 * useWindowSize - Hook for tracking window dimensions
 *
 * Provides responsive window size tracking with debounced updates
 * to minimize re-renders during resize events.
 *
 * @param {number} debounceMs - Debounce delay for resize events (default: 100ms)
 * @returns {{ width: number, height: number }}
 *
 * @example
 * const { width, height } = useWindowSize();
 * const dynamicHeight = Math.max(400, height - 112);
 */
export function useWindowSize(debounceMs = 100) {
  const [size, setSize] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  }));

  const handleResize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    // Handle SSR
    if (typeof window === 'undefined') return;

    // Set initial size
    handleResize();

    // Debounced resize handler
    let timeoutId;
    const debouncedHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, debounceMs);
    };

    window.addEventListener('resize', debouncedHandler);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedHandler);
    };
  }, [handleResize, debounceMs]);

  return size;
}

/**
 * Calculate dynamic list height based on window size
 * Accounts for header (64px) and padding (48px)
 *
 * @param {number} windowHeight - Current window height
 * @param {number} offset - Total offset to subtract (default: 112)
 * @param {number} minHeight - Minimum height (default: 400)
 * @returns {number}
 */
export function calculateListHeight(windowHeight, offset = 112, minHeight = 400) {
  return Math.max(minHeight, windowHeight - offset);
}

export default useWindowSize;
