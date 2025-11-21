import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';
import { deepCloneComponent } from './utils/componentHelpers';

/**
 * 剪貼板管理 Store
 *
 * 職責:
 * - 管理組件複製/剪切/粘貼操作
 * - 支持跨項目複製 (导出/导入)
 * - 預留剪貼板歷史功能
 */

export const useClipboardStore = create(
  immer((set, get) => ({
    // ========== State ==========

    clipboard: null, // { tree, props }
    clipboardHistory: [], // 預留:剪貼板歷史

    // ========== Actions ==========

    /**
     * 複製組件到剪貼板
     * @param {Object} component - 組件樹節點
     * @param {Object} props - 組件屬性
     */
    copyComponent: (component, props) => set((state) => {
      if (!component) return;

      state.clipboard = {
        tree: deepCloneComponent(component),
        props: deepCloneComponent(props),
        copiedAt: new Date().toISOString()
      };

      // 添加到歷史記录 (最多保留 10 個)
      state.clipboardHistory.unshift(state.clipboard);
      if (state.clipboardHistory.length > 10) {
        state.clipboardHistory.pop();
      }
    }),

    /**
     * 剪切組件 (複製後需要手動刪除)
     * @param {Object} component - 組件樹節點
     * @param {Object} props - 組件屬性
     */
    cutComponent: (component, props) => {
      get().copyComponent(component, props);
      // 注意:實際刪除操作由調用方處理,避免跨 Store 依賴
    },

    /**
     * 獲取剪貼板內容 (用於粘貼)
     * @returns {Object|null} { tree, props, newIds }
     */
    getClipboardForPaste: () => {
      const state = get();
      if (!state.clipboard) return null;

      // 深拷貝並重新生成 ID
      const { tree, props } = state.clipboard;
      const idMap = new Map(); // 舊 ID -> 新 ID 映射

      const regenerateIds = (component) => {
        const newId = nanoid();
        idMap.set(component.id, newId);

        return {
          ...component,
          id: newId,
          children: component.children?.map(regenerateIds) || []
        };
      };

      const newTree = regenerateIds(tree);

      // 重新映射 Props
      const newProps = {};
      for (const [oldId, newId] of idMap.entries()) {
        if (props[oldId]) {
          newProps[newId] = deepCloneComponent(props[oldId]);
          newProps[newId].id = newId;
        }
      }

      return {
        tree: newTree,
        props: newProps,
        idMap // 返回 ID 映射表,供調用方使用
      };
    },

    /**
     * 清除剪貼板
     */
    clearClipboard: () => set((state) => {
      state.clipboard = null;
    }),

    /**
     * 从歷史記录恢復 (預留功能)
     * @param {number} index - 歷史記录索引
     */
    restoreFromHistory: (index) => set((state) => {
      if (index >= 0 && index < state.clipboardHistory.length) {
        state.clipboard = state.clipboardHistory[index];
      }
    }),

    /**
     * 清除剪貼板歷史
     */
    clearHistory: () => set((state) => {
      state.clipboardHistory = [];
    }),

    // ========== Getters ==========

    /**
     * 检查剪貼板是否有內容
     * @returns {boolean}
     */
    hasClipboard: () => {
      return get().clipboard !== null;
    },

    /**
     * 獲取剪貼板元数据
     * @returns {Object|null}
     */
    getClipboardInfo: () => {
      const { clipboard } = get();
      if (!clipboard) return null;

      return {
        componentType: clipboard.tree?.componentType,
        copiedAt: clipboard.copiedAt,
        hasChildren: (clipboard.tree?.children?.length || 0) > 0
      };
    },

    /**
     * 獲取剪貼板歷史記录
     * @returns {Array}
     */
    getHistory: () => {
      return get().clipboardHistory.map((item, index) => ({
        index,
        componentType: item.tree?.componentType,
        copiedAt: item.copiedAt
      }));
    },

    // ========== Utils ==========

    /**
     * 重置剪貼板
     */
    reset: () => set({
      clipboard: null,
      clipboardHistory: []
    }),

    /**
     * 导出剪貼板 (用於跨項目複製)
     * @returns {string} JSON 字符串
     */
    exportClipboard: () => {
      const { clipboard } = get();
      if (!clipboard) return null;

      return JSON.stringify({
        version: '1.0',
        clipboard,
        exportedAt: new Date().toISOString()
      });
    },

    /**
     * 导入剪貼板 (用於跨項目複製)
     * @param {string} jsonString - JSON 字符串
     */
    importClipboard: (jsonString) => set((state) => {
      try {
        const data = JSON.parse(jsonString);
        if (data.clipboard) {
          state.clipboard = data.clipboard;
        }
      } catch (error) {
        console.error('Failed to import clipboard:', error);
      }
    })
  }))
);
