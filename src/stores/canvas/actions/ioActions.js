/**
 * Canvas Store - IO Actions
 * Import/Export/Reset operations
 */

/**
 * Creates IO actions for the canvas store
 * @param {Function} set - Zustand set function
 * @param {Function} get - Zustand get function
 * @param {Object} snapshotHelper - Snapshot helper with takeSnapshot method
 * @param {Object} initialState - Initial state { initialComponentTree, initialComponentProps }
 * @returns {Object} IO action methods
 */
export const createIOActions = (set, get, snapshotHelper, initialState) => ({
  /**
   * Reset canvas to initial state
   */
  reset: () => {
    snapshotHelper.takeSnapshot('canvas:reset');
    return set({
      componentTree: JSON.parse(JSON.stringify(initialState.initialComponentTree)),
      componentProps: JSON.parse(JSON.stringify(initialState.initialComponentProps))
    });
  },

  /**
   * Import canvas data
   * @param {Object} canvasData - { componentTree, componentProps }
   */
  importCanvas: (canvasData) => set((state) => {
    if (canvasData.componentTree) {
      state.componentTree = canvasData.componentTree;
    }
    if (canvasData.componentProps) {
      state.componentProps = canvasData.componentProps;
    }
  }),

  /**
   * Export canvas data (deep copy)
   * @returns {Object} { componentTree, componentProps }
   */
  exportCanvas: () => {
    const state = get();
    return {
      componentTree: JSON.parse(JSON.stringify(state.componentTree)),
      componentProps: JSON.parse(JSON.stringify(state.componentProps))
    };
  },

  /**
   * Replace canvas entirely (for profiler/benchmark use)
   * @param {Object} canvas - { componentTree, componentProps }
   */
  replaceCanvas: (canvas) => set((state) => {
    state.componentTree = canvas.componentTree;
    state.componentProps = canvas.componentProps;
  })
});
