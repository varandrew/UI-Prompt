import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

/**
 * 選中狀態管理 Store
 *
 * 職責:
 * - 管理當前選中的組件 ID
 * - 支持未來多選功能擴展
 * - 提供選中狀態查詢方法
 */

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
    }),

    /**
     * 清除選中狀態
     */
    clearSelection: () => set((state) => {
      state.selectedComponentId = null;
      state.multiSelection = [];
    }),

    /**
     * 切換多選 (預留功能)
     * @param {string} componentId - 組件 ID
     */
    toggleMultiSelect: (componentId) => set((state) => {
      const index = state.multiSelection.indexOf(componentId);
      if (index === -1) {
        state.multiSelection.push(componentId);
      } else {
        state.multiSelection.splice(index, 1);
      }

      // 更新主選中狀態
      state.selectedComponentId = state.multiSelection[0] || null;
    }),

    /**
     * 添加到多選 (預留功能)
     * @param {string} componentId - 組件 ID
     */
    addToSelection: (componentId) => set((state) => {
      if (!state.multiSelection.includes(componentId)) {
        state.multiSelection.push(componentId);
      }
    }),

    /**
     * 从多選中移除 (預留功能)
     * @param {string} componentId - 組件 ID
     */
    removeFromSelection: (componentId) => set((state) => {
      const index = state.multiSelection.indexOf(componentId);
      if (index !== -1) {
        state.multiSelection.splice(index, 1);
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
      return get().multiSelection.includes(componentId);
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
    reset: () => set({
      selectedComponentId: null,
      multiSelection: []
    })
  }))
);
