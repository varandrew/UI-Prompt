import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';
import {
  findComponentById,
  removeComponentFromTree,
  collectAllComponentIds
} from './utils/componentHelpers';
import { createDefaultProps } from './utils/defaultProps';
import { useHistoryStore } from './useHistoryStore';
import { useViewportStore } from './useViewportStore';

/**
 * 画布与組件管理 Store
 *
 * 職責:
 * - 管理組件樹結構 (层級关係)
 * - 管理組件屬性映射表 (扁平結構)
 * - 提供組件 CRUD 操作
 * - 處理組件移動和嵌套
 */

const initialComponentTree = {
  id: 'root',
  componentType: 'Page',
  children: []
};

const initialComponentProps = {
  'root': {
    id: 'root',
    baseProps: {
      style: {
        minHeight: '100vh',
        backgroundColor: '#FFFFFF'
      }
    },
    layoutProps: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
};

export const useCanvasStore = create(
  immer((set, get) => {
    // ========== RAF 批次器（節流/合併同幀多次更新） ==========
    let rafScheduled = false;
    const batched = {
      base: new Map(), // id -> partialBaseProps
      layout: new Map(), // id -> partialLayout
      styleResp: new Map(), // id -> { bp -> partial }
      layoutResp: new Map() // id -> { bp -> partial }
    };

    const flushBatched = () => {
      const haveUpdates = batched.base.size || batched.layout.size || batched.styleResp.size || batched.layoutResp.size;
      if (!haveUpdates) return;

      // 建立快照（在 flush 前記一次）
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = {
          componentTree: JSON.parse(JSON.stringify(get().componentTree)),
          componentProps: JSON.parse(JSON.stringify(get().componentProps))
        };
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:batchedUpdates');
      } catch {
        // Ignore snapshot errors
      }

      set((state) => {
        // Base props
        batched.base.forEach((partial, id) => {
          const p = state.componentProps[id];
          if (!p) return;
          p.baseProps = { ...(p.baseProps || {}), ...partial };
        });
        // Layout
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

      // 清空批次
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

    // 封裝加入批次的 API
    const enqueueBaseProps = (id, partialBaseProps) => {
      const prev = batched.base.get(id) || {};
      batched.base.set(id, { ...prev, ...partialBaseProps });
      scheduleFlush();
    };
    const enqueueLayout = (id, partialLayout) => {
      const prev = batched.layout.get(id) || {};
      batched.layout.set(id, { ...prev, ...partialLayout });
      scheduleFlush();
    };
    const enqueueRespStyle = (id, bp, partial) => {
      const m = batched.styleResp.get(id) || {};
      m[bp] = { ...(m[bp] || {}), ...partial };
      batched.styleResp.set(id, m);
      scheduleFlush();
    };
    const enqueueRespLayout = (id, bp, partial) => {
      const m = batched.layoutResp.get(id) || {};
      m[bp] = { ...(m[bp] || {}), ...partial };
      batched.layoutResp.set(id, m);
      scheduleFlush();
    };

    return {
    // ========== State ==========

    componentTree: initialComponentTree,
    componentProps: initialComponentProps,

    // ========== 組件樹操作 Actions ==========

    /**
     * 添加組件到父容器
     * @param {string} parentId - 父組件 ID
     * @param {string} componentType - 組件类型
     * @param {number|null} position - 插入位置 (null 表示末尾)
     * @returns {string|null} 新組件的 ID
     */
    addComponent: (parentId, componentType, position = null) => {
      // 快照：變更前（供撤銷）
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas ? get().exportCanvas() : {
          componentTree: JSON.parse(JSON.stringify(get().componentTree)),
          componentProps: JSON.parse(JSON.stringify(get().componentProps))
        };
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:addComponent');
      } catch {
        // Ignore snapshot errors
      }

      let newComponentId = null;

      set((state) => {
        const parent = findComponentById(state.componentTree, parentId);

        if (!parent) {
          console.error(`Parent component ${parentId} not found`);
          return;
        }

        // 創建新組件
        const newComponent = {
          id: nanoid(),
          componentType,
          children: []
        };

        newComponentId = newComponent.id;

        // 添加到父組件
        if (position === null || position >= parent.children.length) {
          parent.children.push(newComponent);
        } else {
          parent.children.splice(Math.max(0, position), 0, newComponent);
        }

        // 初始化 Props
        state.componentProps[newComponent.id] = createDefaultProps(componentType);
      });

      return newComponentId;
    },

    /**
     * 移動組件到新位置
     * @param {string} componentId - 組件 ID
     * @param {string} newParentId - 新父組件 ID
     * @param {number} newPosition - 新位置索引
     */
    moveComponent: (componentId, newParentId, newPosition) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:moveComponent');
      } catch {
        // Ignore snapshot errors
      }

      return set((state) => {
      // 防止將組件移動到自己的子組件中
      const descendantIds = collectAllComponentIds(
        findComponentById(state.componentTree, componentId) || { children: [] }
      );

      if (descendantIds.includes(newParentId)) {
        console.warn('Cannot move component to its own descendant');
        return;
      }

      // 从舊位置移除
      const component = removeComponentFromTree(state.componentTree, componentId);
      if (!component) {
        console.error(`Component ${componentId} not found`);
        return;
      }

      // 添加到新位置
      const newParent = findComponentById(state.componentTree, newParentId);
      if (newParent) {
        newParent.children.splice(newPosition, 0, component);
      }    });
    },

    /**
     * 刪除組件及其所有子組件
     * @param {string} componentId - 組件 ID
     * @returns {boolean} 是否刪除成功
     */
    deleteComponent: (componentId) => {
      if (componentId === 'root') {
        console.warn('Cannot delete root component');
        return false;
      }

      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:deleteComponent');
      } catch {
        // Ignore snapshot errors
      }

      let success = false;

      set((state) => {
        // 收集所有要刪除的 ID (包括子組件)
        const component = findComponentById(state.componentTree, componentId);
        if (!component) {
          console.error(`Component ${componentId} not found`);
          return;
        }

        const idsToDelete = collectAllComponentIds(component);

        // 从樹中移除
        const removed = removeComponentFromTree(state.componentTree, componentId);
        if (!removed) return;

        // 从 Props 映射中移除所有相关 Props
        idsToDelete.forEach(id => {
          delete state.componentProps[id];
        });

        success = true;
      });

      return success;
    },

    /**
     * 複製組件 (深拷貝)
     * @param {string} componentId - 組件 ID
     * @param {string} targetParentId - 目标父組件 ID
     * @returns {string|null} 新組件的 ID
     */
    duplicateComponent: (componentId, targetParentId) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:duplicateComponent');
      } catch {
        // Ignore snapshot errors
      }

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

        // 遞歸複製組件及其子組件
        const duplicateRecursive = (comp, originalProps) => {
          const newId = nanoid();
          const newComp = {
            ...comp,
            id: newId,
            children: comp.children?.map(child =>
              duplicateRecursive(child, state.componentProps[child.id])
            ) || []
          };

          // 複製 Props
          state.componentProps[newId] = JSON.parse(JSON.stringify(originalProps));
          state.componentProps[newId].id = newId;

          return newComp;
        };

        const duplicated = duplicateRecursive(component, props);
        parent.children.push(duplicated);
        newComponentId = duplicated.id;
      });

      return newComponentId;
    },

    // ========== 屬性更新 Actions ==========

    /**
     * 更新基礎屬性
     * @param {string} componentId - 組件 ID
     * @param {Object} newProps - 新屬性 (深度合併)
     */
    updateBaseProps: (componentId, newProps) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:updateBaseProps');
      } catch {
        // Ignore snapshot errors
      }

      return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      props.baseProps = {
        ...props.baseProps,
        ...newProps,
        // 深度合併 style 和 content
        style: { ...props.baseProps?.style, ...newProps.style },
        content: { ...props.baseProps?.content, ...newProps.content }
      };    });
    },

    /**
     * 更新佈局屬性
     * @param {string} componentId - 組件 ID
     * @param {Object} newLayoutProps - 新佈局屬性
     */
    updateLayoutProps: (componentId, newLayoutProps) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:updateLayoutProps');
      } catch {
        // Ignore snapshot errors
      }

      return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      props.layoutProps = {
        ...props.layoutProps,
        ...newLayoutProps
      };    });
    },

    /**
     * 批次设置子組件的 flex-grow
     * @param {string} parentId - 父組件 ID
     * @param {number} weight - flex-grow 值
     */
    updateChildrenFlexGrow: (parentId, weight) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:updateChildrenFlexGrow');
      } catch {
        // Ignore snapshot errors
      }

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
      });    });
    },

    /**
     * 更新響應式覆蓋
     * @param {string} componentId - 組件 ID
     * @param {string} breakpoint - 斷點 (tablet/mobile)
     * @param {Object} overrideProps - 覆蓋屬性
     */
    updateResponsiveOverride: (componentId, breakpoint, overrideProps) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:updateResponsiveOverride');
      } catch {
        // Ignore snapshot errors
      }

      return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      if (!props.responsiveOverrides) {
        props.responsiveOverrides = {};
      }

      props.responsiveOverrides[breakpoint] = {
        ...props.responsiveOverrides[breakpoint],
        ...overrideProps
      };    });
    },

    /**
     * 更新響應式佈局覆蓋
     * @param {string} componentId - 組件 ID
     * @param {string} breakpoint - 斷點
     * @param {Object} overrideLayoutProps - 覆蓋佈局屬性
     */
    updateResponsiveLayoutOverride: (componentId, breakpoint, overrideLayoutProps) => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:updateResponsiveLayoutOverride');
      } catch {
        // Ignore snapshot errors
      }

      return set((state) => {
      const props = state.componentProps[componentId];
      if (!props) return;

      if (!props.responsiveLayoutOverrides) {
        props.responsiveLayoutOverrides = {};
      }

      props.responsiveLayoutOverrides[breakpoint] = {
        ...props.responsiveLayoutOverrides[breakpoint],
        ...overrideLayoutProps
      };    });
    },

    // ========== Getters ==========

    /**
     * 獲取組件完整数据 (Tree + Props)
     * @param {string} componentId - 組件 ID
     * @returns {Object|null}
     */
    getComponent: (componentId) => {
      const state = get();
      const tree = findComponentById(state.componentTree, componentId);
      const props = state.componentProps[componentId];

      return tree && props ? { ...tree, ...props } : null;
    },

    /**
     * 獲取組件樹節點
     * @param {string} componentId - 組件 ID
     * @returns {Object|null}
     */
    getComponentTree: (componentId) => {
      return findComponentById(get().componentTree, componentId);
    },

    /**
     * 獲取組件屬性
     * @param {string} componentId - 組件 ID
     * @returns {Object|null}
     */
    getComponentProps: (componentId) => {
      return get().componentProps[componentId] || null;
    },

    /**
     * 獲取所有組件 ID 列表
     * @returns {string[]}
     */
    getAllComponentIds: () => {
      return collectAllComponentIds(get().componentTree);
    },

    /**
     * 检查組件是否存在
     * @param {string} componentId - 組件 ID
     * @returns {boolean}
     */
    hasComponent: (componentId) => {
      return findComponentById(get().componentTree, componentId) !== null;
    },

    // ========== Utils ==========

    /**
     * 重置画布
     */
    reset: () => {
      // 快照：變更前
      try {
        const history = useHistoryStore.getState();
        const canvasSnap = get().exportCanvas();
        const viewportSnap = useViewportStore.getState().exportSettings();
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:reset');
      } catch {
        // Ignore snapshot errors
      }

      return set({
        componentTree: JSON.parse(JSON.stringify(initialComponentTree)),
        componentProps: JSON.parse(JSON.stringify(initialComponentProps))
      });
    },

    /**
     * 导入画布数据
     * @param {Object} canvasData - { componentTree, componentProps }
     */
    importCanvas: (canvasData) => set((state) => {
      if (canvasData.componentTree) {
        state.componentTree = canvasData.componentTree;
      }
      if (canvasData.componentProps) {
        state.componentProps = canvasData.componentProps;
      }
    }),

    /**
     * 导出画布数据
     * @returns {Object} { componentTree, componentProps }
     */
    exportCanvas: () => {
      const state = get();
      return {
        componentTree: JSON.parse(JSON.stringify(state.componentTree)),
        componentProps: JSON.parse(JSON.stringify(state.componentProps))
      };
    },

    // ========== Throttled 更新 API（RAF 批次合併） ==========

    /**
     * 節流更新基礎屬性（同幀合併）
     * @param {string} componentId - 組件 ID
     * @param {Object} newProps - 新屬性
     */
    updateBasePropsThrottled: (componentId, newProps) => {
      enqueueBaseProps(componentId, newProps);
    },

    /**
     * 節流更新佈局屬性（同幀合併）
     * @param {string} componentId - 組件 ID
     * @param {Object} newLayoutProps - 新佈局屬性
     */
    updateLayoutPropsThrottled: (componentId, newLayoutProps) => {
      enqueueLayout(componentId, newLayoutProps);
    },

    /**
     * 節流更新響應式覆蓋（同幀合併）
     * @param {string} componentId - 組件 ID
     * @param {string} breakpoint - 斷點
     * @param {Object} overrideProps - 覆蓋屬性
     */
    updateResponsiveOverrideThrottled: (componentId, breakpoint, overrideProps) => {
      enqueueRespStyle(componentId, breakpoint, overrideProps);
    },

    /**
     * 節流更新響應式佈局覆蓋（同幀合併）
     * @param {string} componentId - 組件 ID
     * @param {string} breakpoint - 斷點
     * @param {Object} overrideLayoutProps - 覆蓋佈局屬性
     */
    updateResponsiveLayoutOverrideThrottled: (componentId, breakpoint, overrideLayoutProps) => {
      enqueueRespLayout(componentId, breakpoint, overrideLayoutProps);
    },

    /**
     * 以整體替換画布（供基準測試/profiler 使用）
     * @param {Object} canvas - { componentTree, componentProps }
     */
    replaceCanvas: (canvas) => set((state) => {
      state.componentTree = canvas.componentTree;
      state.componentProps = canvas.componentProps;
    })
  }})
);
