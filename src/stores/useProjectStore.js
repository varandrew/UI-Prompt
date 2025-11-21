import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

/**
 * 項目管理 Store
 *
 * 職責:
 * - 管理項目元数据
 * - 協調所有 Store 的数据导入/导出
 * - 處理項目保存和加載
 * - 支持多項目管理 (預留)
 */

export const useProjectStore = create(
  immer((set, get) => ({
    // ========== State ==========

    projectMeta: {
      name: 'Untitled Project',
      version: '1.0',
      createdAt: null,
      modifiedAt: null,
      author: '',
      description: '',
      tags: []
    },

    currentProjectId: null, // 預留:多項目 ID
    projects: [], // 預留:項目列表
    isDirty: false, // 項目是否有未保存的更改

    // ========== Actions ==========

    /**
     * 更新項目元数据
     * @param {Object} meta - 元数据
     */
    updateProjectMeta: (meta) => set((state) => {
      state.projectMeta = {
        ...state.projectMeta,
        ...meta,
        modifiedAt: new Date().toISOString()
      };
      state.isDirty = true;
    }),

    /**
     * 设置項目名稱
     * @param {string} name - 項目名稱
     */
    setProjectName: (name) => set((state) => {
      state.projectMeta.name = name;
      state.projectMeta.modifiedAt = new Date().toISOString();
      state.isDirty = true;
    }),

    /**
     * 标記項目為已保存
     */
    markAsSaved: () => set((state) => {
      state.isDirty = false;
      state.projectMeta.modifiedAt = new Date().toISOString();
    }),

    /**
     * 标記項目為已修改
     */
    markAsDirty: () => set((state) => {
      state.isDirty = true;
    }),

    /**
     * 导入完整項目数据
     * @param {Object} projectData - 項目数据
     */
    importProject: (projectData) => {
      const { projectMeta } = projectData;

      set((state) => {
        // 更新項目元数据
        state.projectMeta = {
          ...state.projectMeta,
          ...projectMeta,
          modifiedAt: new Date().toISOString()
        };

        // 重置臟标記
        state.isDirty = false;
      });

      // 這里需要通知其他 Store 导入数据
      // 由於我們要避免循環依賴，使用事件總线或回調方式
      if (typeof window !== 'undefined' && window.projectStoreCallbacks) {
        window.projectStoreCallbacks.onImportProject?.(projectData);
      }
    },

    /**
     * 导出完整項目数据
     * @param {Object} storesData - 各個 Store 的数据
     * @returns {Object} 項目数据
     */
    exportProject: (storesData) => {
      const state = get();
      const { canvasState, viewportState, selectionState, clipboardState } = storesData;

      return {
        version: '1.0',
        formatVersion: '1.0',
        projectMeta: {
          ...state.projectMeta,
          exportedAt: new Date().toISOString()
        },
        globalSettings: viewportState.exportSettings(),
        canvasState: canvasState.exportCanvas(),
        selectionState: selectionState.selectedComponentId,
        clipboardState: clipboardState.exportClipboard(),
        exportedAt: new Date().toISOString()
      };
    },

    /**
     * 創建新項目
     * @param {Object} options - 選項
     */
    createNewProject: (options = {}) => {
      const newProject = {
        name: options.name || 'Untitled Project',
        version: '1.0',
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
        author: options.author || '',
        description: options.description || '',
        tags: options.tags || []
      };

      set((state) => {
        state.projectMeta = newProject;
        state.isDirty = false;
      });

      // 通知其他 Store 重置
      if (typeof window !== 'undefined' && window.projectStoreCallbacks) {
        window.projectStoreCallbacks.onNewProject?.(newProject);
      }
    },

    /**
     * 重置項目到初始狀態
     */
    resetProject: () => {
      get().createNewProject({
        name: 'Untitled Project'
      });
    },

    // ========== 預留:多項目管理 ==========

    /**
     * 保存項目到列表 (預留)
     * @param {Object} project - 項目数据
     */
    saveProjectToList: (project) => set((state) => {
      const existingIndex = state.projects.findIndex(p => p.id === project.id);
      if (existingIndex !== -1) {
        state.projects[existingIndex] = { ...project, savedAt: new Date().toISOString() };
      } else {
        state.projects.push({
          ...project,
          id: project.id || Date.now().toString(),
          createdAt: new Date().toISOString(),
          savedAt: new Date().toISOString()
        });
      }
    }),

    /**
     * 切換當前項目 (預留)
     * @param {string} projectId - 項目 ID
     */
    switchProject: (projectId) => {
      const project = get().projects.find(p => p.id === projectId);
      if (project) {
        // 切換前需要先保存當前項目
        if (get().isDirty) {
          // 觸發保存確認
          console.log('Project has unsaved changes');
          return false;
        }

        set((state) => {
          state.currentProjectId = projectId;
          state.projectMeta = project.meta;
          state.isDirty = false;
        });

        return true;
      }
      return false;
    },

    // ========== 獲取器 ==========

    /**
     * 獲取項目简要信息
     * @returns {Object}
     */
    getProjectInfo: () => {
      const state = get();
      return {
        name: state.projectMeta.name,
        version: state.projectMeta.version,
        isDirty: state.isDirty,
        createdAt: state.projectMeta.createdAt,
        modifiedAt: state.projectMeta.modifiedAt
      };
    },

    /**
     * 检查項目是否有未保存的更改
     * @returns {boolean}
     */
    hasUnsavedChanges: () => {
      return get().isDirty;
    },

    /**
     * 獲取項目統計信息
     * @param {Object} storesData - Store 数据
     * @returns {Object}
     */
    getProjectStats: (storesData) => {
      const { canvasState, historyState } = storesData;
      const allComponentIds = canvasState.getAllComponentIds();

      return {
        totalComponents: allComponentIds.length,
        historyStats: historyState.getHistoryStats(),
        projectInfo: get().getProjectInfo()
      };
    },

    // ========== 自動保存 ==========

    /**
     * 啟動自動保存 (預留功能)
     * @param {number} interval - 保存間隔 (毫秒)
     */
    // eslint-disable-next-line no-unused-vars
    startAutoSave: (interval = 60000) => {
      // 這需要 localStorage 或後端支持
      console.log('Auto-save not yet implemented');
    },

    /**
     * 停止自動保存
     */
    stopAutoSave: () => {
      console.log('Auto-save stopped');
    }
  }))
);
