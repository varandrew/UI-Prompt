/**
 * usePreviewState - 預覽模態框狀態管理 Hook
 *
 * 使用 useReducer 統一管理：
 * - 加載狀態 (isLoading, isLoadingPreview)
 * - 內容狀態 (previewContent)
 * - UI 狀態 (showPrompt, activeIndex)
 */

import { useReducer, useEffect, useCallback, useMemo } from 'react';
import { loadPreview } from '../../../utils/previewLoader';
import { asyncTryCatch } from '../../../utils/errorHandler';

// ========== 狀態類型 ==========

const initialState = {
  showPrompt: false,
  isLoading: true,
  isLoadingPreview: false,
  activeIndex: 0,
  previewContent: null
};

// ========== Action Types ==========

const ActionTypes = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
  SET_LOADING: 'SET_LOADING',
  START_PREVIEW_LOAD: 'START_PREVIEW_LOAD',
  PREVIEW_LOADED: 'PREVIEW_LOADED',
  PREVIEW_ERROR: 'PREVIEW_ERROR',
  SELECT_INDEX: 'SELECT_INDEX',
  TOGGLE_PROMPT: 'TOGGLE_PROMPT',
  CLOSE_PROMPT: 'CLOSE_PROMPT',
  RESET_FOR_NEW_PREVIEWS: 'RESET_FOR_NEW_PREVIEWS'
};

// ========== Reducer ==========

function previewReducer(state, action) {
  switch (action.type) {
    case ActionTypes.OPEN:
      return {
        ...state,
        isLoading: true,
        activeIndex: action.payload?.defaultIndex ?? 0
      };

    case ActionTypes.CLOSE:
      return {
        ...initialState
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
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

    case ActionTypes.SELECT_INDEX:
      return {
        ...state,
        activeIndex: action.payload,
        isLoading: true
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

    case ActionTypes.RESET_FOR_NEW_PREVIEWS:
      return {
        ...state,
        activeIndex: action.payload?.defaultIndex ?? 0,
        isLoading: action.payload?.initialLoading ?? true,
        previewContent: null
      };

    default:
      return state;
  }
}

// ========== Custom Hook ==========

/**
 * usePreviewState - 預覽模態框狀態管理
 *
 * @param {Object} options - 配置選項
 * @param {boolean} options.isOpen - 模態框是否開啟
 * @param {Array} options.previews - 預覽列表
 * @param {string} options.fullPagePreviewId - 完整页面預覽 ID
 * @param {Function} options.onClose - 關閉回調
 * @returns {Object} 狀態和操作方法
 */
export function usePreviewState({
  isOpen,
  previews = [],
  fullPagePreviewId = '',
  onClose
}) {
  const [state, dispatch] = useReducer(previewReducer, initialState);

  // 穩定化 previews 引用
  const previewsList = useMemo(
    () => (Array.isArray(previews) ? previews : []),
    [previews]
  );

  // 生成 previews 的穩定 key（用於檢測變化）
  const previewsKey = useMemo(
    () => `${previewsList.length}:${previewsList.map(p => p?.id ?? '').join('|')}`,
    [previewsList]
  );

  // 找到第一個 full 類型預覽的索引
  const getDefaultIndex = useCallback(() => {
    if (previewsList.length > 0) {
      const firstFullIndex = previewsList.findIndex(p => p.type === 'full');
      return firstFullIndex >= 0 ? firstFullIndex : 0;
    }
    return 0;
  }, [previewsList]);

  // 當前預覽對象
  const currentPreview = useMemo(() => {
    if (previewsList.length > 0) {
      return previewsList[Math.min(state.activeIndex, previewsList.length - 1)];
    }
    return null;
  }, [previewsList, state.activeIndex]);

  // ========== Effects ==========

  // Effect 1: 異步預覽加載
  useEffect(() => {
    if (!isOpen) return;

    const previewId = currentPreview?.previewId || fullPagePreviewId;

    if (previewId) {
      dispatch({ type: ActionTypes.START_PREVIEW_LOAD });

      asyncTryCatch(
        () => loadPreview(previewId),
        { html: '', styles: '' },
        {
          context: `usePreviewState:loadPreview:${previewId}`,
          onError: () => dispatch({ type: ActionTypes.PREVIEW_ERROR })
        }
      ).then(content => {
        dispatch({ type: ActionTypes.PREVIEW_LOADED, payload: content });
      });
    } else {
      // 沒有 previewId，清空異步內容
      dispatch({ type: ActionTypes.PREVIEW_LOADED, payload: null });
    }
  }, [isOpen, state.activeIndex, fullPagePreviewId, currentPreview?.previewId]);

  // Effect 2: 當打開或預覽集合變化時重置索引
  useEffect(() => {
    if (isOpen) {
      const initialLoading = previewsList.length > 0 || !!fullPagePreviewId;
      dispatch({
        type: ActionTypes.RESET_FOR_NEW_PREVIEWS,
        payload: { defaultIndex: getDefaultIndex(), initialLoading }
      });
    }
  }, [isOpen, previewsKey, getDefaultIndex, previewsList.length, fullPagePreviewId]);

  // Effect 3: 載入超時後備（2 秒自動隱藏 Loading）
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen, state.activeIndex]);

  // Effect 4: ESC 鍵關閉
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // ========== Actions ==========

  const actions = useMemo(() => ({
    selectIndex: (index) => dispatch({ type: ActionTypes.SELECT_INDEX, payload: index }),
    togglePrompt: () => dispatch({ type: ActionTypes.TOGGLE_PROMPT }),
    closePrompt: () => dispatch({ type: ActionTypes.CLOSE_PROMPT }),
    setLoading: (value) => dispatch({ type: ActionTypes.SET_LOADING, payload: value })
  }), []);

  // ========== Return ==========

  return {
    // 狀態
    showPrompt: state.showPrompt,
    isLoading: state.isLoading,
    isLoadingPreview: state.isLoadingPreview,
    activeIndex: state.activeIndex,
    previewContent: state.previewContent,

    // 計算值
    previewsList,
    currentPreview,
    previewsKey,

    // 操作
    ...actions
  };
}

export default usePreviewState;
