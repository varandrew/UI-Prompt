/**
 * Snapshot Middleware for Canvas Store
 *
 * Centralizes history snapshot logic to eliminate code duplication across canvas actions.
 * This middleware provides a reusable helper that captures the current state of both the
 * canvas (component tree + props) and viewport settings for undo/redo functionality.
 *
 * Usage:
 * ```javascript
 * const snapshotHelper = createSnapshotHelper(get);
 * snapshotHelper.takeSnapshot('action:name');
 * ```
 */

import { useHistoryStore } from '../../useHistoryStore';
import { useViewportStore } from '../../useViewportStore';

/**
 * Creates a snapshot helper for the canvas store
 *
 * This helper centralizes the snapshot logic that was previously duplicated
 * 11 times across different canvas actions. It safely captures both canvas
 * and viewport state, handling errors gracefully.
 *
 * @param {Function} get - Zustand get function to access current store state
 * @returns {Object} Snapshot helper with takeSnapshot method
 *
 * @example
 * // Inside a Zustand store
 * const snapshotHelper = createSnapshotHelper(get);
 *
 * // Before mutating state
 * snapshotHelper.takeSnapshot('canvas:addComponent');
 */
export const createSnapshotHelper = (get) => ({
  /**
   * Takes a snapshot of the current canvas and viewport state
   *
   * This method:
   * 1. Deep clones the current component tree and props
   * 2. Exports the current viewport settings
   * 3. Stores both in the history store for undo/redo
   * 4. Silently ignores any errors during snapshot (non-blocking)
   *
   * @param {string} actionName - Name of the action for history tracking
   *                               Format: 'canvas:actionName' (e.g., 'canvas:addComponent')
   *
   * @example
   * // Before adding a component
   * takeSnapshot('canvas:addComponent');
   *
   * // Before moving a component
   * takeSnapshot('canvas:moveComponent');
   */
  takeSnapshot: (actionName) => {
    try {
      // Get history store instance
      const history = useHistoryStore.getState();

      // Deep clone canvas state to prevent reference issues
      const canvasSnap = {
        componentTree: JSON.parse(JSON.stringify(get().componentTree)),
        componentProps: JSON.parse(JSON.stringify(get().componentProps))
      };

      // Export current viewport settings
      const viewportSnap = useViewportStore.getState().exportSettings();

      // Store snapshot in history for undo/redo
      history.autoSnapshot(
        {
          canvasState: canvasSnap,
          viewportState: viewportSnap
        },
        actionName
      );
    } catch {
      // Silently ignore snapshot errors to prevent blocking the main action
      // Errors might occur if:
      // - History store is not initialized
      // - State contains non-serializable objects
      // - Memory constraints during deep cloning
    }
  }
});
