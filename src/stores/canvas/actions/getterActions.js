/**
 * Canvas Store - Getter Actions
 * Read-only methods for querying component data
 */
import { findComponentById, collectAllComponentIds } from '../../utils/componentHelpers';

/**
 * Creates getter actions for the canvas store
 * @param {Function} get - Zustand get function
 * @returns {Object} Getter action methods
 */
export const createGetterActions = (get) => ({
  /**
   * Get complete component data (Tree + Props)
   * @param {string} componentId - Component ID
   * @returns {Object|null} Combined tree node and props, or null if not found
   */
  getComponent: (componentId) => {
    const state = get();
    const tree = findComponentById(state.componentTree, componentId);
    const props = state.componentProps[componentId];
    return tree && props ? { ...tree, ...props } : null;
  },

  /**
   * Get component tree node only
   * @param {string} componentId - Component ID
   * @returns {Object|null} Tree node or null
   */
  getComponentTree: (componentId) => {
    return findComponentById(get().componentTree, componentId);
  },

  /**
   * Get component props only
   * @param {string} componentId - Component ID
   * @returns {Object|null} Props object or null
   */
  getComponentProps: (componentId) => {
    return get().componentProps[componentId] || null;
  },

  /**
   * Get all component IDs in the tree
   * @returns {string[]} Array of all component IDs
   */
  getAllComponentIds: () => {
    return collectAllComponentIds(get().componentTree);
  },

  /**
   * Check if a component exists
   * @param {string} componentId - Component ID
   * @returns {boolean} True if component exists
   */
  hasComponent: (componentId) => {
    return findComponentById(get().componentTree, componentId) !== null;
  }
});
