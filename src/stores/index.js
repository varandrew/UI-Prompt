/**
 * Store 統一导出文件
 *
 * 提供:
 * - 所有 Store 的导出
 * - 工具函数导出
 * - Store 協調工具
 */

// ========== Stores ==========
// 本档案內需直接使用各個 store，因此必須显式引入（仅重新导出不會产生本地綁定）
import { useViewportStore } from './useViewportStore';
import { useSelectionStore } from './useSelectionStore';
import { useClipboardStore } from './useClipboardStore';
import { useCanvasStore } from './useCanvasStore';
import { useHistoryStore } from './useHistoryStore';
import { useProjectStore } from './useProjectStore';

// 對外仍保留原有导出
export { useViewportStore } from './useViewportStore';
export { useSelectionStore } from './useSelectionStore';
export { useClipboardStore } from './useClipboardStore';
export { useCanvasStore } from './useCanvasStore';
export { useHistoryStore } from './useHistoryStore';
export { useProjectStore } from './useProjectStore';

// 向後兼容:保留舊的 editorStore 导出
export { useEditorStore } from './editorStore';

// ========== Utils ==========
export {
  findComponentById,
  removeComponentFromTree,
  collectAllComponentIds,
  isDescendant,
  getComponentPath,
  deepCloneComponent
} from './utils/componentHelpers';

export {
  createDefaultProps,
  getDefaultLayoutProps,
  getDefaultStyle
} from './utils/defaultProps';

// ========== 組合 Hooks ==========

/**
 * 組合 Hook: 獲取所有編輯器相关的 Store
 * @returns {Object} 所有 Store 的實例
 */
export const useEditorStores = () => {
  const viewport = useViewportStore();
  const selection = useSelectionStore();
  const clipboard = useClipboardStore();
  const canvas = useCanvasStore();
  const history = useHistoryStore();
  const project = useProjectStore();

  return {
    viewport,
    selection,
    clipboard,
    canvas,
    history,
    project
  };
};

/**
 * 組合 Hook: 獲取所有 Store 的数据快照
 * @returns {Object} 所有 Store 的當前狀態
 */
export const useEditorSnapshot = () => {
  const viewportState = useViewportStore();
  const selectionState = useSelectionStore();
  const clipboardState = useClipboardStore();
  const canvasState = useCanvasStore();
  const historyState = useHistoryStore();
  const projectState = useProjectStore();

  return {
    viewportState,
    selectionState,
    clipboardState,
    canvasState,
    historyState,
    projectState
  };
};

// ========== Store 協調工具 ==========

/**
 * 重置所有 Store
 */
export const resetAllStores = () => {
  useCanvasStore.getState().reset();
  useViewportStore.getState().reset();
  useSelectionStore.getState().reset();
  useClipboardStore.getState().reset();
  useHistoryStore.getState().clearHistory();
  useProjectStore.getState().resetProject();
};

/**
 * 导出完整項目数据
 * @returns {Object} 項目数据
 */
export const exportCompleteProject = () => {
  const canvasState = useCanvasStore.getState();
  const viewportState = useViewportStore.getState();
  const selectionState = useSelectionStore.getState();
  const clipboardState = useClipboardStore.getState();
  const projectState = useProjectStore.getState();

  return projectState.exportProject({
    canvasState,
    viewportState,
    selectionState,
    clipboardState
  });
};

/**
 * 导入完整項目数据
 * @param {Object} projectData - 項目数据
 */
export const importCompleteProject = (projectData) => {
  const { canvasState, globalSettings, selectionState } = projectData;

  // 重置所有 Store
  resetAllStores();

  // 导入数据
  if (canvasState) {
    useCanvasStore.getState().importCanvas(canvasState);
  }

  if (globalSettings) {
    useViewportStore.getState().importSettings(globalSettings);
  }

  if (selectionState) {
    useSelectionStore.getState().selectComponent(selectionState);
  }

  // 更新項目元数据
  useProjectStore.getState().importProject(projectData);

  // 标記為已保存
  useProjectStore.getState().markAsSaved();
};

// ========== 跨 Store 操作輔助函数 ==========

/**
 * 複製組件 (整合 Canvas + Clipboard)
 * @param {string} componentId - 組件 ID
 */
export const copyComponentCrosStore = (componentId) => {
  const canvasStore = useCanvasStore.getState();
  const clipboardStore = useClipboardStore.getState();

  const component = canvasStore.getComponentTree(componentId);
  const props = canvasStore.getComponentProps(componentId);

  if (component && props) {
    clipboardStore.copyComponent(component, props);
  }
};

/**
 * 粘貼組件 (整合 Canvas + Clipboard)
 * @param {string} parentId - 父組件 ID
 * @returns {string|null} 新組件的 ID
 */
export const pasteComponentCrossStore = (parentId) => {
  const canvasStore = useCanvasStore.getState();
  const clipboardStore = useClipboardStore.getState();

  const clipboardData = clipboardStore.getClipboardForPaste();
  if (!clipboardData) return null;

  const { tree, props } = clipboardData;

  // 添加組件樹到画布
  const parent = canvasStore.getComponentTree(parentId);
  if (!parent) return null;

  // 手動添加組件樹結構
  parent.children.push(tree);

  // 添加所有組件的 Props
  const state = useCanvasStore.getState();
  Object.assign(state.componentProps, props);

  return tree.id;
};

/**
 * 刪除組件並清除選中 (整合 Canvas + Selection)
 * @param {string} componentId - 組件 ID
 * @returns {boolean} 是否刪除成功
 */
export const deleteComponentCrossStore = (componentId) => {
  const canvasStore = useCanvasStore.getState();
  const selectionStore = useSelectionStore.getState();

  const success = canvasStore.deleteComponent(componentId);

  if (success && selectionStore.selectedComponentId === componentId) {
    selectionStore.clearSelection();
  }

  return success;
};

// ========== DevTools 支持 ==========

if (typeof window !== 'undefined') {
  // 在開發環境下暴露 Store 到全局對象，避免未綁定變数造成错誤
  if (import.meta.env.DEV) {
    try {
      const devStores = {};
      if (typeof useViewportStore !== 'undefined') devStores.viewport = useViewportStore;
      if (typeof useSelectionStore !== 'undefined') devStores.selection = useSelectionStore;
      if (typeof useClipboardStore !== 'undefined') devStores.clipboard = useClipboardStore;
      if (typeof useCanvasStore !== 'undefined') devStores.canvas = useCanvasStore;
      if (typeof useHistoryStore !== 'undefined') devStores.history = useHistoryStore;
      if (typeof useProjectStore !== 'undefined') devStores.project = useProjectStore;

      // 輔助工具固定可用（為同档案內定義）
      devStores.resetAll = resetAllStores;
      devStores.export = exportCompleteProject;
      devStores.import = importCompleteProject;

      window.__EDITOR_STORES__ = devStores;
      console.log('[DevTools] Editor stores available at window.__EDITOR_STORES__');
    } catch (e) {
      // 任何初始化時的引用错誤都不應阻止應用啟動
      console.warn('[DevTools] Failed to init editor stores devtools:', e);
    }
  }

  // 设置項目 Store 回調（不依賴即時綁定）
  window.projectStoreCallbacks = {
    onNewProject: (project) => {
      resetAllStores();
      console.log('[Project] New project created:', project.name);
    },
    onImportProject: (projectData) => {
      importCompleteProject(projectData);
      console.log('[Project] Project imported');
    }
  };
}
