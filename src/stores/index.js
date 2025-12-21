/**
 * Store 統一导出文件
 *
 * 提供:
 * - 所有 Store 的导出
 * - 工具函数导出
 */

// ========== Stores ==========
export { useViewportStore } from './useViewportStore';
export { useSelectionStore } from './useSelectionStore';
export { useCanvasStore } from './useCanvasStore';

// ========== Selectors ==========
// Selection Store Selectors
export {
  selectSelectedId,
  selectMultiSelection,
  selectSelectionCount,
  selectIsSelected,
  selectIsInMultiSelection
} from './useSelectionStore';

// Viewport Store Selectors
export {
  selectActiveViewport,
  selectGridSize,
  selectSnapToGrid,
  selectCustomWidth,
  selectCustomHeight,
  selectCustomDimensions,
  selectViewportSettings
} from './useViewportStore';

// Canvas Store Selectors
export {
  selectComponentTree,
  selectComponentProps,
  selectComponentById,
  selectComponentChildren
} from './useCanvasStore';

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
