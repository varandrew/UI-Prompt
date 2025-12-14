/**
 * Canvas Store - Props Actions
 * Component property update operations
 */
import { findComponentById } from '../../utils/componentHelpers';

/**
 * Creates props actions for the canvas store
 * @param {Function} set - Zustand set function
 * @param {Function} get - Zustand get function
 * @param {Object} snapshotHelper - Snapshot helper with takeSnapshot method
 * @returns {Object} Props action methods
 */
export const createPropsActions = (set, get, snapshotHelper) => ({
  /**
   * Update base props (deep merge for style and content)
   * @param {string} componentId - Component ID
   * @param {Object} newProps - New props to merge
   */
  updateBaseProps: (componentId, newProps) => {
    snapshotHelper.takeSnapshot('canvas:updateBaseProps');

    return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      props.baseProps = {
        ...props.baseProps,
        ...newProps,
        style: { ...props.baseProps?.style, ...newProps.style },
        content: { ...props.baseProps?.content, ...newProps.content }
      };
    });
  },

  /**
   * Update layout props
   * @param {string} componentId - Component ID
   * @param {Object} newLayoutProps - New layout props to merge
   */
  updateLayoutProps: (componentId, newLayoutProps) => {
    snapshotHelper.takeSnapshot('canvas:updateLayoutProps');

    return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      props.layoutProps = {
        ...props.layoutProps,
        ...newLayoutProps
      };
    });
  },

  /**
   * Batch update children flex-grow
   * @param {string} parentId - Parent component ID
   * @param {number} weight - flex-grow value
   */
  updateChildrenFlexGrow: (parentId, weight) => {
    snapshotHelper.takeSnapshot('canvas:updateChildrenFlexGrow');

    return set((state) => {
      const parent = findComponentById(state.componentTree, parentId);
      if (!parent || !parent.children || parent.children.length === 0) return;

      const validWeight = Number.isFinite(weight) ? weight : 0;

      parent.children.forEach((child) => {
        const childProps = state.componentProps[child.id];
        if (!childProps) return;

        if (!childProps.baseProps) childProps.baseProps = {};
        if (!childProps.baseProps.style) childProps.baseProps.style = {};
        childProps.baseProps.style.flexGrow = validWeight;
      });
    });
  },

  /**
   * Update responsive style override
   * @param {string} componentId - Component ID
   * @param {string} breakpoint - Breakpoint (tablet/mobile)
   * @param {Object} overrideProps - Override props to merge
   */
  updateResponsiveOverride: (componentId, breakpoint, overrideProps) => {
    snapshotHelper.takeSnapshot('canvas:updateResponsiveOverride');

    return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      if (!props.responsiveOverrides) {
        props.responsiveOverrides = {};
      }

      props.responsiveOverrides[breakpoint] = {
        ...props.responsiveOverrides[breakpoint],
        ...overrideProps
      };
    });
  },

  /**
   * Update responsive layout override
   * @param {string} componentId - Component ID
   * @param {string} breakpoint - Breakpoint
   * @param {Object} overrideLayoutProps - Override layout props to merge
   */
  updateResponsiveLayoutOverride: (componentId, breakpoint, overrideLayoutProps) => {
    snapshotHelper.takeSnapshot('canvas:updateResponsiveLayoutOverride');

    return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      if (!props.responsiveLayoutOverrides) {
        props.responsiveLayoutOverrides = {};
      }

      props.responsiveLayoutOverrides[breakpoint] = {
        ...props.responsiveLayoutOverrides[breakpoint],
        ...overrideLayoutProps
      };
    });
  }
});
