/**
 * Canvas Store - Tree Actions
 * Component tree CRUD operations (add, move, delete, duplicate)
 */
import { nanoid } from 'nanoid';
import {
  findComponentById,
  removeComponentFromTree,
  collectAllComponentIds
} from '../../utils/componentHelpers';
import { createDefaultProps } from '../../utils/defaultProps';

/**
 * Creates tree actions for the canvas store
 * @param {Function} set - Zustand set function
 * @param {Function} get - Zustand get function
 * @param {Object} snapshotHelper - Snapshot helper with takeSnapshot method
 * @returns {Object} Tree action methods
 */
export const createTreeActions = (set, get, snapshotHelper) => ({
  /**
   * Add component to parent container
   * @param {string} parentId - Parent component ID
   * @param {string} componentType - Component type
   * @param {number|null} position - Insert position (null = end)
   * @returns {string|null} New component ID or null
   */
  addComponent: (parentId, componentType, position = null) => {
    snapshotHelper.takeSnapshot('canvas:addComponent');

    let newComponentId = null;

    set((state) => {
      const parent = findComponentById(state.componentTree, parentId);
      if (!parent) {
        console.error(`Parent component ${parentId} not found`);
        return;
      }

      const newComponent = {
        id: nanoid(),
        componentType,
        children: []
      };

      newComponentId = newComponent.id;

      if (position === null || position >= parent.children.length) {
        parent.children.push(newComponent);
      } else {
        parent.children.splice(Math.max(0, position), 0, newComponent);
      }

      state.componentProps[newComponent.id] = createDefaultProps(componentType);
    });

    return newComponentId;
  },

  /**
   * Move component to new position
   * @param {string} componentId - Component ID
   * @param {string} newParentId - New parent component ID
   * @param {number} newPosition - New position index
   */
  moveComponent: (componentId, newParentId, newPosition) => {
    snapshotHelper.takeSnapshot('canvas:moveComponent');

    return set((state) => {
      // Prevent moving component into its own descendant
      const descendantIds = collectAllComponentIds(
        findComponentById(state.componentTree, componentId) || { children: [] }
      );

      if (descendantIds.includes(newParentId)) {
        console.warn('Cannot move component to its own descendant');
        return;
      }

      // Remove from old position
      const component = removeComponentFromTree(state.componentTree, componentId);
      if (!component) {
        console.error(`Component ${componentId} not found`);
        return;
      }

      // Add to new position
      const newParent = findComponentById(state.componentTree, newParentId);
      if (newParent) {
        newParent.children.splice(newPosition, 0, component);
      }
    });
  },

  /**
   * Delete component and all its children
   * @param {string} componentId - Component ID
   * @returns {boolean} Success status
   */
  deleteComponent: (componentId) => {
    if (componentId === 'root') {
      console.warn('Cannot delete root component');
      return false;
    }

    snapshotHelper.takeSnapshot('canvas:deleteComponent');

    let success = false;

    set((state) => {
      const component = findComponentById(state.componentTree, componentId);
      if (!component) {
        console.error(`Component ${componentId} not found`);
        return;
      }

      const idsToDelete = collectAllComponentIds(component);

      const removed = removeComponentFromTree(state.componentTree, componentId);
      if (!removed) return;

      idsToDelete.forEach(id => {
        delete state.componentProps[id];
      });

      success = true;
    });

    return success;
  },

  /**
   * Duplicate component (deep copy)
   * @param {string} componentId - Component ID to duplicate
   * @param {string} targetParentId - Target parent component ID
   * @returns {string|null} New component ID or null
   */
  duplicateComponent: (componentId, targetParentId) => {
    snapshotHelper.takeSnapshot('canvas:duplicateComponent');

    let newComponentId = null;

    set((state) => {
      const component = findComponentById(state.componentTree, componentId);
      const props = state.componentProps[componentId];

      if (!component || !props) {
        console.error(`Component ${componentId} not found`);
        return;
      }

      const parent = findComponentById(state.componentTree, targetParentId);
      if (!parent) {
        console.error(`Parent ${targetParentId} not found`);
        return;
      }

      // Recursive duplication
      const duplicateRecursive = (comp, originalProps) => {
        const newId = nanoid();
        const newComp = {
          ...comp,
          id: newId,
          children: comp.children?.map(child =>
            duplicateRecursive(child, state.componentProps[child.id])
          ) || []
        };

        state.componentProps[newId] = JSON.parse(JSON.stringify(originalProps));
        state.componentProps[newId].id = newId;

        return newComp;
      };

      const duplicated = duplicateRecursive(component, props);
      parent.children.push(duplicated);
      newComponentId = duplicated.id;
    });

    return newComponentId;
  }
});
