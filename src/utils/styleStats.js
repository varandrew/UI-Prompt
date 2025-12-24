/**
 * Style Statistics Utility
 *
 * Provides dynamic style counting based on the registry.
 */

import registry from '../data/styles/_registry.json';

/**
 * Get the total count of style families across all categories
 * @returns {number} Total number of style families
 */
export const getTotalStyleCount = () => {
  if (!registry?.categories) {
    console.warn('Registry not loaded or invalid structure');
    return 0;
  }

  return Object.values(registry.categories).reduce((total, category) => {
    const familiesCount = Array.isArray(category.families) ? category.families.length : 0;
    return total + familiesCount;
  }, 0);
};

/**
 * Get style count by category
 * @returns {Object} Object with category names as keys and counts as values
 */
export const getStyleCountByCategory = () => {
  if (!registry?.categories) {
    return {};
  }

  return Object.entries(registry.categories).reduce((acc, [key, category]) => {
    acc[key] = Array.isArray(category.families) ? category.families.length : 0;
    return acc;
  }, {});
};

/**
 * Get formatted style count string (e.g., "70+", "100+")
 * @param {number} roundTo - Round down to nearest multiple (default: 10)
 * @returns {string} Formatted count string with "+"
 */
export const getFormattedStyleCount = (roundTo = 10) => {
  const total = getTotalStyleCount();
  const rounded = Math.floor(total / roundTo) * roundTo;
  return `${rounded}+`;
};

/**
 * Get style statistics summary
 * @returns {Object} Object containing total, byCategory, and formatted string
 */
export const getStyleStats = () => {
  const total = getTotalStyleCount();
  const byCategory = getStyleCountByCategory();
  const formatted = getFormattedStyleCount();

  return {
    total,
    byCategory,
    formatted
  };
};

// Export default for convenience
export default {
  getTotalStyleCount,
  getStyleCountByCategory,
  getFormattedStyleCount,
  getStyleStats
};
