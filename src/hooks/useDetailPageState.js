/**
 * useDetailPageState - 統一的詳情頁狀態管理 Hook
 *
 * 支持兩種模式:
 * - 'style': StylePreviewPage 的複雜狀態管理（preview 選擇器 + 異步加載）
 * - 'component': ComponentDetailPage 的簡單狀態管理（變體選擇 + 模態框）
 *
 * 設計原則:
 * - Composition over Inheritance: 根據 mode 組合不同的功能
 * - Progressive Enhancement: 基礎狀態 + 可選的高級功能
 * - Backward Compatible: 不破壞現有頁面的使用方式
 *
 * @module hooks/useDetailPageState
 */

import { useState, useEffect, useCallback, useMemo, useReducer } from 'react';
import { loadPreview } from '../utils/previewLoader';
import { asyncTryCatch } from '../utils/errorHandler';

// ============================================================
// Constants & Types
// ============================================================

/**
 * 頁面模式
 * @typedef {'style' | 'component'} PageMode
 */

/**
 * Modal 類型
 * @typedef {'code' | 'prompt' | 'preview'} ModalType
 */

/**
 * 基礎狀態
 * @typedef {Object} BaseState
 * @property {boolean} showPrompt - Prompt 抽屜是否顯示
 * @property {boolean} isLoading - 主加載狀態
 * @property {Object | null} selectedItem - 當前選中的項目（變體或預覽）
 */

/**
 * Style 模式擴展狀態
 * @typedef {Object} StyleExtendedState
 * @property {number} activeIndex - 當前激活的預覽索引
 * @property {boolean} isLoadingPreview - 預覽內容加載狀態
 * @property {Object | null} previewContent - 異步加載的預覽內容
 * @property {boolean} isFullPageMode - 是否為純 HTML 完整頁面模式
 */

/**
 * Component 模式擴展狀態
 * @typedef {Object} ComponentExtendedState
 * @property {boolean} showCodeModal - 代碼模態框是否顯示
 * @property {boolean} showPreviewModal - 預覽模態框是否顯示
 */

// ============================================================
// Reducer (for complex state management)
// ============================================================

const ActionTypes = {
  // 基礎動作
  SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
  TOGGLE_PROMPT: 'TOGGLE_PROMPT',
  CLOSE_PROMPT: 'CLOSE_PROMPT',
  SET_LOADING: 'SET_LOADING',

  // Style 模式動作
  SELECT_INDEX: 'SELECT_INDEX',
  START_PREVIEW_LOAD: 'START_PREVIEW_LOAD',
  PREVIEW_LOADED: 'PREVIEW_LOADED',
  PREVIEW_ERROR: 'PREVIEW_ERROR',
  RESET_FOR_NEW_PREVIEWS: 'RESET_FOR_NEW_PREVIEWS',

  // Component 模式動作
  TOGGLE_CODE_MODAL: 'TOGGLE_CODE_MODAL',
  TOGGLE_PREVIEW_MODAL: 'TOGGLE_PREVIEW_MODAL',
  CLOSE_ALL_MODALS: 'CLOSE_ALL_MODALS',

  // 通用重置
  RESET: 'RESET'
};

function createInitialState(mode) {
  const base = {
    showPrompt: false,
    isLoading: true,
    selectedItem: null
  };

  if (mode === 'style') {
    return {
      ...base,
      activeIndex: 0,
      isLoadingPreview: false,
      previewContent: null,
      isFullPageMode: false
    };
  }

  // Component mode
  return {
    ...base,
    showCodeModal: false,
    showPreviewModal: false
  };
}

function detailPageReducer(state, action) {
  switch (action.type) {
    // ========== 基礎動作 ==========
    case ActionTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      };

    case ActionTypes.TOGGLE_PROMPT:
      return {
        ...state,
        showPrompt: !state.showPrompt
      };

    case ActionTypes.CLOSE_PROMPT:
      return {
        ...state,
        showPrompt: false
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    // ========== Style 模式動作 ==========
    case ActionTypes.SELECT_INDEX:
      return {
        ...state,
        activeIndex: action.payload,
        isLoading: true
      };

    case ActionTypes.START_PREVIEW_LOAD:
      return {
        ...state,
        isLoadingPreview: true,
        previewContent: null
      };

    case ActionTypes.PREVIEW_LOADED:
      return {
        ...state,
        isLoadingPreview: false,
        previewContent: action.payload
      };

    case ActionTypes.PREVIEW_ERROR:
      return {
        ...state,
        isLoadingPreview: false,
        previewContent: { html: '', styles: '' }
      };

    case ActionTypes.RESET_FOR_NEW_PREVIEWS:
      return {
        ...state,
        activeIndex: action.payload?.defaultIndex ?? 0,
        isLoading: action.payload?.initialLoading ?? true,
        previewContent: null
      };

    // ========== Component 模式動作 ==========
    case ActionTypes.TOGGLE_CODE_MODAL:
      return {
        ...state,
        showCodeModal: action.payload ?? !state.showCodeModal
      };

    case ActionTypes.TOGGLE_PREVIEW_MODAL:
      return {
        ...state,
        showPreviewModal: action.payload ?? !state.showPreviewModal
      };

    case ActionTypes.CLOSE_ALL_MODALS:
      return {
        ...state,
        showPrompt: false,
        showCodeModal: false,
        showPreviewModal: false,
        selectedItem: null
      };

    // ========== 通用重置 ==========
    case ActionTypes.RESET:
      return createInitialState(action.payload?.mode || 'component');

    default:
      return state;
  }
}

// ============================================================
// Main Hook
// ============================================================

/**
 * useDetailPageState - 統一的詳情頁狀態管理
 *
 * @param {Object} options - 配置選項
 * @param {'style' | 'component'} options.mode - 頁面模式
 * @param {string} options.itemId - 項目 ID（style ID 或 component ID）
 * @param {Array} [options.items] - 項目列表（previews 或 variants）
 * @param {string} [options.defaultItemId] - 默認項目 ID
 * @param {URLSearchParams} [options.searchParams] - URL 搜索參數
 * @param {Function} [options.onClose] - 關閉回調（用於模態框模式）
 * @param {boolean} [options.isOpen] - 是否開啟（用於模態框模式）
 *
 * @returns {Object} 狀態和操作方法
 *
 * @example
 * // Style 模式
 * const state = useDetailPageState({
 *   mode: 'style',
 *   itemId: 'glassmorphism',
 *   items: style.previews,
 *   searchParams
 * });
 *
 * @example
 * // Component 模式
 * const state = useDetailPageState({
 *   mode: 'component',
 *   itemId: 'button',
 *   items: component.variants
 * });
 */
export function useDetailPageState({
  mode = 'component',
  itemId,
  items = [],
  defaultItemId = '',
  searchParams = null,
  onClose = null,
  isOpen = true
}) {
  const [state, dispatch] = useReducer(
    detailPageReducer,
    mode,
    createInitialState
  );

  // ========== Computed Values ==========

  // 穩定化 items 引用
  const itemsList = useMemo(
    () => (Array.isArray(items) ? items : []),
    [items]
  );

  // 生成 items 的穩定 key（用於檢測變化）
  const itemsKey = useMemo(
    () => `${itemsList.length}:${itemsList.map(p => p?.id ?? '').join('|')}`,
    [itemsList]
  );

  // 當前項目（根據模式不同）
  const currentItem = useMemo(() => {
    if (mode === 'style') {
      // Style 模式：根據 activeIndex 獲取
      if (itemsList.length > 0) {
        return itemsList[Math.min(state.activeIndex, itemsList.length - 1)];
      }
    } else {
      // Component 模式：使用 selectedItem
      return state.selectedItem;
    }
    return null;
  }, [mode, itemsList, state.activeIndex, state.selectedItem]);

  // 是否為純 HTML 完整頁面模式（僅 Style 模式）
  const isFullPageMode = useMemo(() => {
    if (mode !== 'style' || !searchParams) return false;
    return (
      searchParams.get('full') === '1' ||
      searchParams.get('fullpage') === '1'
    );
  }, [mode, searchParams]);

  // ========== Helper Functions ==========

  /**
   * 獲取默認索引（Style 模式）
   */
  const getDefaultIndex = useCallback(() => {
    if (itemsList.length > 0) {
      // 優先匹配 defaultItemId
      if (defaultItemId) {
        const matchedIndex = itemsList.findIndex(p => p.id === defaultItemId);
        if (matchedIndex >= 0) return matchedIndex;
      }
      // 其次匹配第一個 full 類型
      const firstFullIndex = itemsList.findIndex(p => p.type === 'full' || p.type === 'fullpage');
      return firstFullIndex >= 0 ? firstFullIndex : 0;
    }
    return 0;
  }, [itemsList, defaultItemId]);

  // ========== Effects ==========

  // Effect 1: 項目 ID 變更時重置狀態
  useEffect(() => {
    dispatch({ type: ActionTypes.RESET, payload: { mode } });
  }, [itemId, mode]);

  // Effect 2: Style 模式 - URL 參數初始化
  useEffect(() => {
    if (mode !== 'style' || !searchParams) return;

    const urlPreviewIndex = searchParams.get('previewIndex');
    if (urlPreviewIndex !== null) {
      const index = parseInt(urlPreviewIndex, 10);
      if (!isNaN(index) && index >= 0 && index < itemsList.length) {
        dispatch({ type: ActionTypes.SELECT_INDEX, payload: index });
      } else {
        dispatch({ type: ActionTypes.SELECT_INDEX, payload: getDefaultIndex() });
      }
    } else {
      dispatch({ type: ActionTypes.SELECT_INDEX, payload: getDefaultIndex() });
    }
  }, [mode, itemId, itemsList.length, searchParams, getDefaultIndex]);

  // Effect 3: Style 模式 - 異步預覽加載
  useEffect(() => {
    if (mode !== 'style' || !isOpen) return;

    const previewId = currentItem?.previewId || currentItem?.id || itemId;

    if (previewId) {
      dispatch({ type: ActionTypes.START_PREVIEW_LOAD });

      asyncTryCatch(
        () => loadPreview(previewId),
        { html: '', styles: '' },
        {
          context: `useDetailPageState:loadPreview:${previewId}`,
          onError: () => dispatch({ type: ActionTypes.PREVIEW_ERROR })
        }
      ).then(content => {
        dispatch({ type: ActionTypes.PREVIEW_LOADED, payload: content });
      });
    } else {
      dispatch({ type: ActionTypes.PREVIEW_LOADED, payload: null });
    }
  }, [mode, isOpen, state.activeIndex, itemId, currentItem?.previewId, currentItem?.id]);

  // Effect 4: Loading 超時後備（2 秒）
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen, itemId, state.activeIndex]);

  // Effect 5: ESC 鍵處理
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (mode === 'style') {
          // Style 模式：關閉預覽窗口
          window.close();
        } else {
          // Component 模式：關閉所有模態框
          dispatch({ type: ActionTypes.CLOSE_ALL_MODALS });
          onClose?.();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mode, onClose]);

  // Effect 6: Style 模式 - PostMessage 通信
  useEffect(() => {
    if (mode !== 'style') return;

    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.action === 'openPrompt') {
        dispatch({ type: ActionTypes.TOGGLE_PROMPT });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [mode]);

  // ========== Actions ==========

  const actions = useMemo(() => {
    const baseActions = {
      // 基礎操作
      setSelectedItem: (item) => dispatch({ type: ActionTypes.SET_SELECTED_ITEM, payload: item }),
      togglePrompt: () => dispatch({ type: ActionTypes.TOGGLE_PROMPT }),
      closePrompt: () => dispatch({ type: ActionTypes.CLOSE_PROMPT }),
      setLoading: (value) => dispatch({ type: ActionTypes.SET_LOADING, payload: value }),

      // 打開 Prompt 並選中項目（便捷方法）
      openPromptFor: (item) => {
        dispatch({ type: ActionTypes.SET_SELECTED_ITEM, payload: item });
        dispatch({ type: ActionTypes.TOGGLE_PROMPT });
      }
    };

    if (mode === 'style') {
      return {
        ...baseActions,
        // Style 模式特有操作
        selectIndex: (index) => dispatch({ type: ActionTypes.SELECT_INDEX, payload: index }),
        resetForNewPreviews: (options) => dispatch({
          type: ActionTypes.RESET_FOR_NEW_PREVIEWS,
          payload: options
        })
      };
    }

    // Component 模式特有操作
    return {
      ...baseActions,
      toggleCodeModal: (value) => dispatch({ type: ActionTypes.TOGGLE_CODE_MODAL, payload: value }),
      togglePreviewModal: (value) => dispatch({ type: ActionTypes.TOGGLE_PREVIEW_MODAL, payload: value }),
      closeAllModals: () => dispatch({ type: ActionTypes.CLOSE_ALL_MODALS }),

      // 便捷方法：打開特定模態框並選中項目
      viewCode: (item) => {
        dispatch({ type: ActionTypes.SET_SELECTED_ITEM, payload: item });
        dispatch({ type: ActionTypes.TOGGLE_CODE_MODAL, payload: true });
      },
      previewItem: (item) => {
        dispatch({ type: ActionTypes.SET_SELECTED_ITEM, payload: item });
        dispatch({ type: ActionTypes.TOGGLE_PREVIEW_MODAL, payload: true });
      }
    };
  }, [mode]);

  // ========== Return ==========

  const baseReturn = {
    // 模式標識
    mode,

    // 基礎狀態
    showPrompt: state.showPrompt,
    isLoading: state.isLoading,
    selectedItem: state.selectedItem,

    // 計算值
    itemsList,
    currentItem,
    itemsKey,

    // 工具函數
    getDefaultIndex,

    // 操作
    ...actions
  };

  if (mode === 'style') {
    return {
      ...baseReturn,
      // Style 模式擴展
      activeIndex: state.activeIndex,
      isLoadingPreview: state.isLoadingPreview,
      previewContent: state.previewContent,
      isFullPageMode
    };
  }

  // Component 模式擴展
  return {
    ...baseReturn,
    showCodeModal: state.showCodeModal,
    showPreviewModal: state.showPreviewModal
  };
}

// ============================================================
// Type Exports (for documentation)
// ============================================================

/**
 * @typedef {Object} UseDetailPageStateReturn
 * @property {'style' | 'component'} mode - 頁面模式
 * @property {boolean} showPrompt - Prompt 抽屜是否顯示
 * @property {boolean} isLoading - 主加載狀態
 * @property {Object | null} selectedItem - 當前選中的項目
 * @property {Array} itemsList - 項目列表
 * @property {Object | null} currentItem - 當前項目
 * @property {string} itemsKey - 項目列表穩定 key
 * @property {Function} getDefaultIndex - 獲取默認索引
 * @property {Function} setSelectedItem - 設置選中項目
 * @property {Function} togglePrompt - 切換 Prompt 抽屜
 * @property {Function} closePrompt - 關閉 Prompt 抽屜
 * @property {Function} setLoading - 設置加載狀態
 * @property {Function} openPromptFor - 打開 Prompt 並選中項目
 *
 * // Style 模式額外返回
 * @property {number} [activeIndex] - 當前激活的預覽索引
 * @property {boolean} [isLoadingPreview] - 預覽內容加載狀態
 * @property {Object | null} [previewContent] - 異步加載的預覽內容
 * @property {boolean} [isFullPageMode] - 是否為純 HTML 完整頁面模式
 * @property {Function} [selectIndex] - 選擇預覽索引
 *
 * // Component 模式額外返回
 * @property {boolean} [showCodeModal] - 代碼模態框是否顯示
 * @property {boolean} [showPreviewModal] - 預覽模態框是否顯示
 * @property {Function} [toggleCodeModal] - 切換代碼模態框
 * @property {Function} [togglePreviewModal] - 切換預覽模態框
 * @property {Function} [closeAllModals] - 關閉所有模態框
 * @property {Function} [viewCode] - 查看代碼
 * @property {Function} [previewItem] - 預覽項目
 */

export default useDetailPageState;
