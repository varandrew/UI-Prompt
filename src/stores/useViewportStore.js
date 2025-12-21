import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

/**
 * 視口与网格管理 Store
 *
 * 職責:
 * - 管理當前視口模式 (desktop/tablet/mobile/custom)
 * - 管理自定義視口尺寸
 * - 管理网格设置 (网格大小、吸附開关)
 */

export const useViewportStore = create(
  immer((set, get) => ({
    // ========== State ==========

    activeViewport: 'desktop', // 'desktop' | 'tablet' | 'mobile' | 'custom'
    customWidth: null,
    customHeight: null,
    gridSize: 8,
    snapToGrid: true,

    // ========== Actions ==========

    /**
     * 设置視口模式
     * @param {string} viewport - 視口类型
     * @param {Object} customDimensions - 自定義尺寸 { width, height }
     */
    setViewport: (viewport, customDimensions = {}) => set((state) => {
      // 若狀態未改變則不觸發更新（避免不必要的通知/可能的循環）
      const sameViewport = state.activeViewport === viewport;
      const nextW = customDimensions.width ?? null;
      const nextH = customDimensions.height ?? null;
      const sameCustomDims = (state.customWidth ?? null) === nextW && (state.customHeight ?? null) === nextH;

      if (sameViewport) {
        if (viewport !== 'custom' || sameCustomDims) {
          // 完全沒有變化 → no-op
          return;
        }
      }

      state.activeViewport = viewport;
      if (viewport === 'custom') {
        state.customWidth = nextW;
        state.customHeight = nextH;
      } else {
        // 切換為非 custom 時，清空自定義尺寸以保持一致性
        state.customWidth = null;
        state.customHeight = null;
      }
    }),

    /**
     * 设置自定義視口尺寸
     * @param {number} width - 寬度
     * @param {number} height - 高度
     */
    setCustomDimensions: (width, height) => set((state) => {
      const w = width ?? null;
      const h = height ?? null;
      const unchanged = (state.customWidth ?? null) === w && (state.customHeight ?? null) === h && state.activeViewport === 'custom';
      if (unchanged) return; // 無實際變更則不更新

      state.customWidth = w;
      state.customHeight = h;
      // 任一尺寸有效即切到 custom 視口
      if (w != null || h != null) {
        state.activeViewport = 'custom';
      }
    }),

    /**
     * 设置网格大小
     * @param {number} size - 网格大小
     */
    setGridSize: (size) => set((state) => {
      state.gridSize = Math.max(1, size);
    }),

    /**
     * 切換网格吸附
     */
    toggleSnapToGrid: () => set((state) => {
      state.snapToGrid = !state.snapToGrid;
    }),

    /**
     * 设置网格吸附狀態
     * @param {boolean} enabled - 是否啟用
     */
    setSnapToGrid: (enabled) => set((state) => {
      state.snapToGrid = enabled;
    }),

    // ========== Getters ==========

    /**
     * 獲取當前視口尺寸
     * @returns {Object} { width, height }
     */
    getCurrentViewportSize: () => {
      const state = get();
      const presets = {
        desktop: { width: 1440, height: 900 },
        tablet: { width: 768, height: 1024 },
        mobile: { width: 375, height: 667 }
      };

      if (state.activeViewport === 'custom') {
        return {
          width: state.customWidth || 1440,
          height: state.customHeight || 900
        };
      }

      return presets[state.activeViewport] || presets.desktop;
    },

    /**
     * 重置為默認设置
     */
    reset: () => set({
      activeViewport: 'desktop',
      customWidth: null,
      customHeight: null,
      gridSize: 8,
      snapToGrid: true
    }),

    /**
     * 导入设置
     * @param {Object} settings - 设置對象
     */
    importSettings: (settings) => set((state) => {
      if (settings.activeViewport && state.activeViewport !== settings.activeViewport) {
        state.activeViewport = settings.activeViewport;
      }
      if (settings.customWidth !== undefined && state.customWidth !== settings.customWidth) {
        state.customWidth = settings.customWidth;
      }
      if (settings.customHeight !== undefined && state.customHeight !== settings.customHeight) {
        state.customHeight = settings.customHeight;
      }
      if (settings.gridSize && state.gridSize !== settings.gridSize) {
        state.gridSize = settings.gridSize;
      }
      if (settings.snapToGrid !== undefined && state.snapToGrid !== settings.snapToGrid) {
        state.snapToGrid = settings.snapToGrid;
      }
    }),

    /**
     * 导出设置
     * @returns {Object} 设置對象
     */
    exportSettings: () => {
      const state = get();
      return {
        activeViewport: state.activeViewport,
        customWidth: state.customWidth,
        customHeight: state.customHeight,
        gridSize: state.gridSize,
        snapToGrid: state.snapToGrid
      };
    }
  }))
);

// ========== Selectors ==========
// Fine-grained selectors for optimal re-render performance

export const selectActiveViewport = (state) => state.activeViewport;
export const selectGridSize = (state) => state.gridSize;
export const selectSnapToGrid = (state) => state.snapToGrid;
export const selectCustomWidth = (state) => state.customWidth;
export const selectCustomHeight = (state) => state.customHeight;

// Composite selectors
export const selectCustomDimensions = (state) => ({
  width: state.customWidth,
  height: state.customHeight
});

export const selectViewportSettings = (state) => ({
  activeViewport: state.activeViewport,
  gridSize: state.gridSize,
  snapToGrid: state.snapToGrid
});
