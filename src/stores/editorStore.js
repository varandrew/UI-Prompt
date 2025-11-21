import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';
import { useHistoryStore } from './useHistoryStore';

/**
 * 交互式 UI 布局編輯器 - 核心狀態管理（含性能优化）
 *
 * 架構设計:
 * - 單向数据流 (UDF): State → View → Event → Update
 * - 正規化数据模型: componentTree (层級关係) + componentProps (扁平映射)
 * - Desktop-first 響應式策略: baseProps + responsiveOverrides
 *
 * 性能优化:
 * - RAF 批次/節流更新 API（Throttled）
 * - 批次快照（一次 flush 記一次）
 */

// 初始狀態
const initialState = {
  // 全局设置
  globalSettings: {
    activeViewport: 'desktop', // 'desktop' | 'tablet' | 'mobile' | 'custom'
    customWidth: null,
    customHeight: null,
    gridSize: 8,
    snapToGrid: true,
  },

  // 画布狀態
  canvasState: {
    // 組件樹 (仅层級关係,無樣式数据)
    componentTree: {
      id: 'root',
      componentType: 'Page',
      children: []
    },

    // 組件屬性映射表 (扁平結構,高效更新)
    componentProps: {
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
    }
  },

  // 選中狀態
  selectedComponentId: null,

  // 剪貼板
  clipboard: null,

  // 撤銷/重做歷史 (由 temporal middleware 管理)
  history: {
    past: [],
    future: []
  }
};

// 工具函数: 在樹中查找組件
const findComponentById = (tree, id) => {
  if (tree.id === id) return tree;
  for (const child of tree.children || []) {
    const found = findComponentById(child, id);
    if (found) return found;
  }
  return null;
};

// 工具函数: 生成默認 Props
const createDefaultProps = (componentType) => {
  const defaults = {
    Button: {
      baseProps: {
        content: { text: '按鈕' },
        style: {
          padding: 0,
          margin: 0,
          backgroundColor: '#3B82F6',
          color: '#FFFFFF',
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 500
        },
        aria: { role: 'button', label: '按鈕' }
      }
    },
    Text: {
      baseProps: {
        content: { text: '文本內容' },
        style: {
          fontSize: 16,
          color: '#000000',
          lineHeight: 1.5,
          margin: 0,
          padding: 0
        }
      }
    },
    Image: {
      baseProps: {
        content: {
          src: 'https://media.istockphoto.com/id/492190130/photo/white-spitz-dog-lying-on-colored-background.jpg?s=612x612&w=0&k=20&c=uKgK-OBd8W-CgWjnl5MDhm2BvwcsVRifCQufGAIz52s=',
          alt: '圖片描述',
          placeholder: 'https://media.istockphoto.com/id/492190130/photo/white-spitz-dog-lying-on-colored-background.jpg?s=612x612&w=0&k=20&c=uKgK-OBd8W-CgWjnl5MDhm2BvwcsVRifCQufGAIz52s='
        },
        style: {
          width: 400,
          height: 300,
          objectFit: 'cover',
          margin: 0,
          padding: 0
        }
      }
    },
    Card: {
      baseProps: {
        style: {
          padding: 0,
          margin: 0,
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          backgroundColor: '#FFFFFF'
        }
      },
      layoutProps: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    },
    Flex: {
      layoutProps: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
    },
    Grid: {
      layoutProps: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16
      }
    }
  };

  return {
    id: nanoid(),
    ...(defaults[componentType] || {}),
    responsiveOverrides: {},
    responsiveLayoutOverrides: {}
  };
};

export const useEditorStore = create(
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
        const ed = get();
        const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
        const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
        history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:batchedUpdates');
      } catch {
        // Ignore snapshot errors
      }

      set((state) => {
        // Base props
        batched.base.forEach((partial, id) => {
          const p = state.canvasState.componentProps[id];
          if (!p) return;
          p.baseProps = { ...(p.baseProps || {}), ...partial };
        });
        // Layout
        batched.layout.forEach((partial, id) => {
          const p = state.canvasState.componentProps[id];
          if (!p) return;
          p.layoutProps = { ...(p.layoutProps || {}), ...partial };
        });
        // Responsive style overrides
        batched.styleResp.forEach((bpMap, id) => {
          const p = state.canvasState.componentProps[id];
          if (!p) return;
          p.responsiveOverrides = p.responsiveOverrides || {};
          Object.entries(bpMap).forEach(([bp, partial]) => {
            p.responsiveOverrides[bp] = { ...(p.responsiveOverrides[bp] || {}), ...partial };
          });
        });
        // Responsive layout overrides
        batched.layoutResp.forEach((bpMap, id) => {
          const p = state.canvasState.componentProps[id];
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
      ...initialState,

      /**
       * 以整体替換画布（供基準/測試使用）
       */
      replaceCanvas: (canvas) => set((state) => {
        state.canvasState = {
          componentTree: canvas.componentTree,
          componentProps: canvas.componentProps
        };
      }),

      // ========== 全局设置 ==========
      setViewport: (viewport, customDimensions = {}) => set((state) => {
        state.globalSettings.activeViewport = viewport;
        if (viewport === 'custom') {
          state.globalSettings.customWidth = customDimensions.width || null;
          state.globalSettings.customHeight = customDimensions.height || null;
        }
      }),

      // ========== 組件樹 CRUD ==========
      addComponent: (parentId, componentType, position = null) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:addComponent');
        } catch {
          // Ignore snapshot errors
        }

        let newComponentId = null;
        set((state) => {
          const parent = findComponentById(state.canvasState.componentTree, parentId);
          if (!parent) return;
          const newComponent = { id: nanoid(), componentType, children: [] };
          newComponentId = newComponent.id;
          if (position === null || position >= (parent.children?.length || 0)) parent.children.push(newComponent);
          else parent.children.splice(Math.max(0, position), 0, newComponent);
          state.canvasState.componentProps[newComponent.id] = createDefaultProps(componentType);
        });
        return newComponentId;
      },

      moveComponent: (componentId, newParentId, newPosition) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:moveComponent');
        } catch {
          // Ignore snapshot errors
        }

        return set((state) => {
          const collectAllComponentIds = (node) => {
            const list = [];
            const dfs = (n) => { if (!n) return; list.push(n.id); (n.children || []).forEach(dfs); };
            dfs(node);
            return list;
          };
          const removeComponentFromTree = (root, targetId) => {
            if (!root || !root.children) return null;
            const idx = root.children.findIndex((c) => c.id === targetId);
            if (idx !== -1) return root.children.splice(idx, 1)[0];
            for (const child of root.children) {
              const res = removeComponentFromTree(child, targetId);
              if (res) return res;
            }
            return null;
          };

          const descendantIds = collectAllComponentIds(findComponentById(state.canvasState.componentTree, componentId) || { children: [] });
          if (descendantIds.includes(newParentId)) return;

          const component = removeComponentFromTree(state.canvasState.componentTree, componentId);
          if (!component) return;
          const newParent = findComponentById(state.canvasState.componentTree, newParentId);
          if (newParent) newParent.children.splice(newPosition, 0, component);
        });
      },

      /**
       * 交換同父節點位置
       */
      swapComponents: (idA, idB) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:swapComponents');
        } catch {
          // Ignore snapshot errors
        }

        set((state) => {
          const findParentAndIndex = (tree, targetId) => {
            if (!tree || !tree.children) return null;
            const idx = tree.children.findIndex((c) => c.id === targetId);
            if (idx !== -1) return { parentId: tree.id, index: idx, parentNode: tree };
            for (const child of tree.children) {
              const res = findParentAndIndex(child, targetId);
              if (res) return res;
            }
            return null;
          };
          const a = findParentAndIndex(state.canvasState.componentTree, idA);
          const b = findParentAndIndex(state.canvasState.componentTree, idB);
          if (!a || !b) return;
          if (a.parentId !== b.parentId) return; // 仅允許同父交换
          const arr = a.parentNode.children;
          const tmp = arr[a.index];
          arr[a.index] = arr[b.index];
          arr[b.index] = tmp;
        });
      },

      deleteComponent: (componentId) => {
        if (componentId === 'root') return false;
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'canvas:deleteComponent');
        } catch {
          // Ignore snapshot errors
        }

        let removed = false;
        set((state) => {
          const remove = (node, id) => {
            if (!node || !node.children) return false;
            const idx = node.children.findIndex((c) => c.id === id);
            if (idx !== -1) { node.children.splice(idx, 1); return true; }
            return node.children.some((c) => remove(c, id));
          };
          removed = remove(state.canvasState.componentTree, componentId);
          if (removed) delete state.canvasState.componentProps[componentId];
        });
        return removed;
      },

      // ========== 選中 ==========
      selectComponent: (componentId) => set((state) => { state.selectedComponentId = componentId; }),

      // ========== 屬性更新 ==========
      updateBaseProps: (componentId, newProps) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:updateBaseProps');
        } catch {
          // Ignore snapshot errors
        }
        return set((state) => {
          const props = state.canvasState.componentProps[componentId];
          if (!props) return;
          props.baseProps = { ...props.baseProps, ...newProps };
        });
      },

      // Throttled 版本（同幀合併）
      updateBasePropsThrottled: (componentId, newProps) => {
        enqueueBaseProps(componentId, newProps);
      },

      updateChildrenFlexGrow: (parentId, weight) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:updateChildrenFlexGrow');
        } catch {
          // Ignore snapshot errors
        }
        return set((state) => {
          const parent = findComponentById(state.canvasState.componentTree, parentId);
          if (!parent || !parent.children || parent.children.length === 0) return;
          const w = Number.isFinite(weight) ? weight : 0;
          parent.children.forEach((child) => {
            const childProps = state.canvasState.componentProps[child.id];
            if (!childProps) return;
            if (!childProps.baseProps) childProps.baseProps = {};
            if (!childProps.baseProps.style) childProps.baseProps.style = {};
            childProps.baseProps.style.flexGrow = w;
          });
        });
      },

      updateResponsiveOverride: (componentId, breakpoint, overrideProps) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:updateResponsiveOverride');
        } catch {
          // Ignore snapshot errors
        }
        return set((state) => {
          const props = state.canvasState.componentProps[componentId];
          if (!props) return;
          if (!props.responsiveOverrides) props.responsiveOverrides = {};
          props.responsiveOverrides[breakpoint] = { ...(props.responsiveOverrides[breakpoint] || {}), ...overrideProps };
        });
      },

      updateResponsiveOverrideThrottled: (componentId, breakpoint, overrideProps) => {
        enqueueRespStyle(componentId, breakpoint, overrideProps);
      },

      updateLayoutProps: (componentId, newLayoutProps) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:updateLayoutProps');
        } catch {
          // Ignore snapshot errors
        }
        return set((state) => {
          const props = state.canvasState.componentProps[componentId];
          if (!props) return;
          props.layoutProps = { ...props.layoutProps, ...newLayoutProps };
        });
      },

      updateLayoutPropsThrottled: (componentId, newLayoutProps) => {
        enqueueLayout(componentId, newLayoutProps);
      },

      updateResponsiveLayoutOverride: (componentId, breakpoint, overrideLayoutProps) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:updateResponsiveLayoutOverride');
        } catch {
          // Ignore snapshot errors
        }
        return set((state) => {
          const props = state.canvasState.componentProps[componentId];
          if (!props) return;
          if (!props.responsiveLayoutOverrides) props.responsiveLayoutOverrides = {};
          props.responsiveLayoutOverrides[breakpoint] = { ...(props.responsiveLayoutOverrides[breakpoint] || {}), ...overrideLayoutProps };
        });
      },

      updateResponsiveLayoutOverrideThrottled: (componentId, breakpoint, overrideLayoutProps) => {
        enqueueRespLayout(componentId, breakpoint, overrideLayoutProps);
      },

      // ========== 剪貼板 ==========
      copyComponent: (componentId) => set((state) => {
        const component = findComponentById(state.canvasState.componentTree, componentId);
        if (component) { state.clipboard = JSON.parse(JSON.stringify(component)); }
      }),

      pasteComponent: (parentId) => {
        try {
          const history = useHistoryStore.getState();
          const ed = get();
          const canvasSnap = JSON.parse(JSON.stringify(ed.canvasState));
          const viewportSnap = JSON.parse(JSON.stringify(ed.globalSettings));
          history.autoSnapshot({ canvasState: canvasSnap, viewportState: viewportSnap }, 'editor:pasteComponent');
        } catch {
          // Ignore paste errors
        }
        let newId = null;
        set((state) => {
          if (!state.clipboard) return;
          const parent = findComponentById(state.canvasState.componentTree, parentId);
          if (!parent) return;
          const cloneWithNewIds = (node) => ({
            id: nanoid(),
            componentType: node.componentType,
            children: (node.children || []).map(cloneWithNewIds)
          });
          const cloned = cloneWithNewIds(state.clipboard);
          parent.children.push(cloned);
          // 初始化屬性（简化：只為根克隆節點生成默認屬性）
          state.canvasState.componentProps[cloned.id] = createDefaultProps(cloned.componentType);
          newId = cloned.id;
        });
        return newId;
      },

      exportProject: () => {
        const state = get();
        return {
          version: '1.0',
          globalSettings: state.globalSettings,
          canvasState: state.canvasState,
          exportedAt: new Date().toISOString()
        };
      },

      reset: () => set(initialState)
    };
  })
);
