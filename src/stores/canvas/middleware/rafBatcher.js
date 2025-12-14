/**
 * RAF Batcher for Canvas Store
 * Handles requestAnimationFrame-based batching for throttled updates
 * Merges multiple updates in the same frame into a single state update
 */

/**
 * Creates a RAF batcher for throttled canvas updates
 * @param {Function} set - Zustand set function
 * @param {Function} get - Zustand get function
 * @param {Object} snapshotHelper - Snapshot helper with takeSnapshot method
 * @returns {Object} Batcher API with enqueue methods
 */
export const createRafBatcher = (set, get, snapshotHelper) => {
  let rafScheduled = false;
  const batched = {
    base: new Map(),      // id -> partialBaseProps
    layout: new Map(),    // id -> partialLayout
    styleResp: new Map(), // id -> { bp -> partial }
    layoutResp: new Map() // id -> { bp -> partial }
  };

  const flushBatched = () => {
    const haveUpdates = batched.base.size || batched.layout.size ||
                        batched.styleResp.size || batched.layoutResp.size;
    if (!haveUpdates) return;

    // Take snapshot before flush
    snapshotHelper.takeSnapshot('canvas:batchedUpdates');

    set((state) => {
      // Base props
      batched.base.forEach((partial, id) => {
        const p = state.componentProps[id];
        if (!p) return;
        p.baseProps = { ...(p.baseProps || {}), ...partial };
      });

      // Layout props
      batched.layout.forEach((partial, id) => {
        const p = state.componentProps[id];
        if (!p) return;
        p.layoutProps = { ...(p.layoutProps || {}), ...partial };
      });

      // Responsive style overrides
      batched.styleResp.forEach((bpMap, id) => {
        const p = state.componentProps[id];
        if (!p) return;
        p.responsiveOverrides = p.responsiveOverrides || {};
        Object.entries(bpMap).forEach(([bp, partial]) => {
          p.responsiveOverrides[bp] = { ...(p.responsiveOverrides[bp] || {}), ...partial };
        });
      });

      // Responsive layout overrides
      batched.layoutResp.forEach((bpMap, id) => {
        const p = state.componentProps[id];
        if (!p) return;
        p.responsiveLayoutOverrides = p.responsiveLayoutOverrides || {};
        Object.entries(bpMap).forEach(([bp, partial]) => {
          p.responsiveLayoutOverrides[bp] = { ...(p.responsiveLayoutOverrides[bp] || {}), ...partial };
        });
      });
    });

    // Clear batches
    batched.base.clear();
    batched.layout.clear();
    batched.styleResp.clear();
    batched.layoutResp.clear();
  };

  const scheduleFlush = () => {
    if (rafScheduled) return;
    rafScheduled = true;
    requestAnimationFrame(() => {
      rafScheduled = false;
      flushBatched();
    });
  };

  return {
    /**
     * Enqueue base props update (throttled)
     * @param {string} id - Component ID
     * @param {Object} partialBaseProps - Partial base props to merge
     */
    enqueueBaseProps: (id, partialBaseProps) => {
      const prev = batched.base.get(id) || {};
      batched.base.set(id, { ...prev, ...partialBaseProps });
      scheduleFlush();
    },

    /**
     * Enqueue layout props update (throttled)
     * @param {string} id - Component ID
     * @param {Object} partialLayout - Partial layout props to merge
     */
    enqueueLayout: (id, partialLayout) => {
      const prev = batched.layout.get(id) || {};
      batched.layout.set(id, { ...prev, ...partialLayout });
      scheduleFlush();
    },

    /**
     * Enqueue responsive style override update (throttled)
     * @param {string} id - Component ID
     * @param {string} bp - Breakpoint (tablet/mobile)
     * @param {Object} partial - Partial style override to merge
     */
    enqueueRespStyle: (id, bp, partial) => {
      const m = batched.styleResp.get(id) || {};
      m[bp] = { ...(m[bp] || {}), ...partial };
      batched.styleResp.set(id, m);
      scheduleFlush();
    },

    /**
     * Enqueue responsive layout override update (throttled)
     * @param {string} id - Component ID
     * @param {string} bp - Breakpoint
     * @param {Object} partial - Partial layout override to merge
     */
    enqueueRespLayout: (id, bp, partial) => {
      const m = batched.layoutResp.get(id) || {};
      m[bp] = { ...(m[bp] || {}), ...partial };
      batched.layoutResp.set(id, m);
      scheduleFlush();
    }
  };
};
