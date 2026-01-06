/**
 * Component Statistics Utility
 *
 * Provides dynamic component counting based on the registry.
 */

import registry from '../data/components/_registry.json';

/**
 * Get the total count of components across all categories
 * @returns {number} Total number of components
 */
export const getTotalComponentCount = () => {
  if (!registry?.categories) {
    console.warn('Component registry not loaded or invalid structure');
    return 0;
  }

  return Object.values(registry.categories).reduce((total, category) => {
    const componentsCount = Array.isArray(category.components) ? category.components.length : 0;
    return total + componentsCount;
  }, 0);
};

/**
 * Get component count by category
 * @returns {Object} Object with category names as keys and counts as values
 */
export const getComponentCountByCategory = () => {
  if (!registry?.categories) {
    return {};
  }

  return Object.entries(registry.categories).reduce((acc, [key, category]) => {
    acc[key] = Array.isArray(category.components) ? category.components.length : 0;
    return acc;
  }, {});
};

/**
 * Get formatted component count string (e.g., "20+", "30+")
 * @param {number} roundTo - Round down to nearest multiple (default: 10)
 * @returns {string} Formatted count string with "+"
 */
export const getFormattedComponentCount = (roundTo = 10) => {
  const total = getTotalComponentCount();
  const rounded = Math.floor(total / roundTo) * roundTo;
  return `${rounded}+`;
};

/**
 * Get component statistics summary
 * @returns {Object} Object containing total, byCategory, and formatted string
 */
export const getComponentStats = () => {
  const total = getTotalComponentCount();
  const byCategory = getComponentCountByCategory();
  const formatted = getFormattedComponentCount();

  return {
    total,
    byCategory,
    formatted
  };
};

// Export default for convenience
export default {
  getTotalComponentCount,
  getComponentCountByCategory,
  getFormattedComponentCount,
  getComponentStats
};
