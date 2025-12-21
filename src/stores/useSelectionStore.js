import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

/**
 * 選中狀態管理 Store
 *
 * 職責:
 * - 管理當前選中的組件 ID
 * - 支持未來多選功能擴展
 * - 提供選中狀態查詢方法
 *
 * 🚀 性能優化：
 * - 使用並行的 Set (_selectionSet) 實現 O(1) 多選查詢
 * - Zustand selectors 支持細粒度訂閱
 */

// External Set for O(1) multiSelection lookup (Immer doesn't support Set in state)
let _selectionSet = new Set();

export const useSelectionStore = create(
  immer((set, get) => ({
    // ========== State ==========

    selectedComponentId: null,
    multiSelection: [], // 預留:多選功能

    // ========== Actions ==========

    /**
     * 選中組件
     * @param {string} componentId - 組件 ID
     */
    selectComponent: (componentId) => set((state) => {
      state.selectedComponentId = componentId;
      state.multiSelection = componentId ? [componentId] : [];
      // Sync external Set
      _selectionSet.clear();
      if (componentId) _selectionSet.add(componentId);
    }),

    /**
     * 清除選中狀態
     */
    clearSelection: () => set((state) => {
      state.selectedComponentId = null;
      state.multiSelection = [];
      // Sync external Set
      _selectionSet.clear();
    }),

    /**
     * 切換多選 (預留功能)
     * @param {string} componentId - 組件 ID
     */
    toggleMultiSelect: (componentId) => set((state) => {
      // O(1) check using Set
      if (_selectionSet.has(componentId)) {
        _selectionSet.delete(componentId);
        const index = state.multiSelection.indexOf(componentId);
        if (index !== -1) state.multiSelection.splice(index, 1);
      } else {
        _selectionSet.add(componentId);
        state.multiSelection.push(componentId);
      }

      // 更新主選中狀態
      state.selectedComponentId = state.multiSelection[0] || null;
    }),

    /**
     * 添加到多選 (預留功能)
     * @param {string} componentId - 組件 ID
     */
    addToSelection: (componentId) => set((state) => {
      // O(1) check using Set
      if (!_selectionSet.has(componentId)) {
        _selectionSet.add(componentId);
        state.multiSelection.push(componentId);
      }
    }),

    /**
     * 从多選中移除 (預留功能)
     * @param {string} componentId - 組件 ID
     */
    removeFromSelection: (componentId) => set((state) => {
      // O(1) check using Set
      if (_selectionSet.has(componentId)) {
        _selectionSet.delete(componentId);
        const index = state.multiSelection.indexOf(componentId);
        if (index !== -1) state.multiSelection.splice(index, 1);
      }

      // 更新主選中狀態
      if (state.selectedComponentId === componentId) {
        state.selectedComponentId = state.multiSelection[0] || null;
      }
    }),

    /**
     * 全選 (預留功能)
     * @param {string[]} componentIds - 所有組件 ID
     */
    selectAll: (componentIds) => set((state) => {
      state.multiSelection = [...componentIds];
      state.selectedComponentId = componentIds[0] || null;
      // Sync external Set
      _selectionSet = new Set(componentIds);
    }),

    // ========== Getters ==========

    /**
     * 检查組件是否被選中
     * @param {string} componentId - 組件 ID
     * @returns {boolean}
     */
    isSelected: (componentId) => {
      return get().selectedComponentId === componentId;
    },

    /**
     * 检查組件是否在多選中 (預留功能)
     * @param {string} componentId - 組件 ID
     * @returns {boolean}
     */
    isInMultiSelection: (componentId) => {
      // O(1) lookup using external Set
      return _selectionSet.has(componentId);
    },

    /**
     * 獲取選中的組件数量
     * @returns {number}
     */
    getSelectionCount: () => {
      return get().multiSelection.length;
    },

    /**
     * 獲取所有選中的組件 ID
     * @returns {string[]}
     */
    getSelectedIds: () => {
      return [...get().multiSelection];
    },

    // ========== Utils ==========

    /**
     * 重置選中狀態
     */
    reset: () => {
      _selectionSet.clear();
      return set({
        selectedComponentId: null,
        multiSelection: []
      });
    }
  }))
);

// ========== Selectors ==========
// Fine-grained selectors for optimal re-render performance

export const selectSelectedId = (state) => state.selectedComponentId;
export const selectMultiSelection = (state) => state.multiSelection;
export const selectSelectionCount = (state) => state.multiSelection.length;

// Parameterized selectors (factory functions)
export const selectIsSelected = (id) => (state) => state.selectedComponentId === id;
export const selectIsInMultiSelection = (id) => () => _selectionSet.has(id);
