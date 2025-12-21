/**
 * Canvas Store - Main Entry Point
 *
 * Manages component tree structure and properties for the visual editor.
 * Refactored to use modular action creators for better maintainability.
 *
 * @module useCanvasStore
 */

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// State
import { initialComponentTree, initialComponentProps } from './canvas/state';

// Middleware
import { createRafBatcher } from './canvas/middleware/rafBatcher';

// Actions
import { createTreeActions } from './canvas/actions/treeActions';
import { createPropsActions } from './canvas/actions/propsActions';
import { createGetterActions } from './canvas/actions/getterActions';
import { createIOActions } from './canvas/actions/ioActions';

/**
 * Canvas Store
 *
 * Responsibilities:
 * - Manage component tree structure (hierarchical relationships)
 * - Manage component properties mapping (flat structure)
 * - Provide component CRUD operations
 * - Handle component movement and nesting
 * - Provide RAF-batched throttled updates for performance
 */
export const useCanvasStore = create(
  immer((set, get) => {
    // Initialize middleware
    const rafBatcher = createRafBatcher(set);

    // Create action modules
    const treeActions = createTreeActions(set);
    const propsActions = createPropsActions(set);
    const getterActions = createGetterActions(get);
    const ioActions = createIOActions(set, get, {
      initialComponentTree,
      initialComponentProps
    });

    return {
      // ========== State ==========
      componentTree: initialComponentTree,
      componentProps: initialComponentProps,

      // ========== Tree Actions ==========
      // addComponent, moveComponent, deleteComponent, duplicateComponent
      ...treeActions,

      // ========== Props Actions ==========
      // updateBaseProps, updateLayoutProps, updateChildrenFlexGrow,
      // updateResponsiveOverride, updateResponsiveLayoutOverride
      ...propsActions,

      // ========== Getter Actions ==========
      // getComponent, getComponentTree, getComponentProps,
      // getAllComponentIds, hasComponent
      ...getterActions,

      // ========== IO Actions ==========
      // reset, importCanvas, exportCanvas, replaceCanvas
      ...ioActions,

      // ========== Throttled Update API (RAF Batched) ==========

      /**
       * Throttled update for base props (batched in same frame)
       * @param {string} componentId - Component ID
       * @param {Object} newProps - New props to merge
       */
      updateBasePropsThrottled: (componentId, newProps) => {
        rafBatcher.enqueueBaseProps(componentId, newProps);
      },

      /**
       * Throttled update for layout props (batched in same frame)
       * @param {string} componentId - Component ID
       * @param {Object} newLayoutProps - New layout props to merge
       */
      updateLayoutPropsThrottled: (componentId, newLayoutProps) => {
        rafBatcher.enqueueLayout(componentId, newLayoutProps);
      },

      /**
       * Throttled update for responsive style override (batched in same frame)
       * @param {string} componentId - Component ID
       * @param {string} breakpoint - Breakpoint (tablet/mobile)
       * @param {Object} overrideProps - Override props to merge
       */
      updateResponsiveOverrideThrottled: (componentId, breakpoint, overrideProps) => {
        rafBatcher.enqueueRespStyle(componentId, breakpoint, overrideProps);
      },

      /**
       * Throttled update for responsive layout override (batched in same frame)
       * @param {string} componentId - Component ID
       * @param {string} breakpoint - Breakpoint
       * @param {Object} overrideLayoutProps - Override layout props to merge
       */
      updateResponsiveLayoutOverrideThrottled: (componentId, breakpoint, overrideLayoutProps) => {
        rafBatcher.enqueueRespLayout(componentId, breakpoint, overrideLayoutProps);
      }
    };
  })
);

// ========== Selectors ==========
// Fine-grained selectors for optimal re-render performance

export const selectComponentTree = (state) => state.componentTree;
export const selectComponentProps = (state) => state.componentProps;

// Parameterized selectors (factory functions)
export const selectComponentById = (id) => (state) => state.componentProps[id];
export const selectComponentChildren = (id) => (state) => {
  const props = state.componentProps[id];
  return props?.children || [];
};
