import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { DndContext, DragOverlay, pointerWithin, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { AnimatePresence } from 'framer-motion';
import { useEditorStore } from '../../stores/editorStore';
import { useViewportStore, useCanvasStore } from '../../stores';
import { useLanguage } from '../../hooks/useLanguage';
import { ComponentLibrary } from '../../components/editor/ComponentLibrary';
import { Canvas } from '../../components/editor/Canvas';
import { LayersPanel } from '../../components/editor/LayersPanel';
import { PropertiesInspector } from '../../components/editor/PropertiesInspector';
import { ViewportToolbar } from '../../components/editor/ViewportToolbar';
import { DragPreview } from '../../components/editor/DragPreview';
import { GuidesOverlay } from '../../components/editor/GuidesOverlay';
import { serializeToPrompt } from '../../utils/editor/serializer';
import { useHistoryStore } from '../../stores/useHistoryStore';
import { canDropIntoParent, canHaveChildren } from '../../data/components/componentLibrary';
import { TEMPLATES } from '../../data/components/templates';
import { MinimalismModal } from '../../components/feedback/MinimalismModal';
import { calculatePreviewSwap, findParentAndIndex } from '../../utils/editor/visualOrder';
import { TutorialProvider, TutorialUI, tutorialEvents, TUTORIAL_EVENTS } from '../../components/tutorial';
// 重新啟用對齊辅助线覆蓋层（藍色十字）

/**
 * 布局編輯器主页面
 *
 * 设計原則:
 * - 極简主義: 大量留白、清晰层次、功能优先
 * - 三栏布局: 组件库(左) | 画布(中) | 层级/属性(右)
 * - 固定工具栏: 顶部视口切换
 * - Mobile-first: 小屏幕摺疊側边欄
 */
export function LayoutEditorPage() {
  const { t } = useLanguage();
  // 从狀態管理讀取所需動作与狀態
  const globalSettings = useEditorStore((s) => s.globalSettings);
  const canvasState = useEditorStore((s) => s.canvasState);
  const exportProject = useEditorStore((s) => s.exportProject);
  // Reserved for future use: addComponent, moveComponent, swapComponents, selectComponent
  const selectedComponentId = useEditorStore((s) => s.selectedComponentId);
  const deleteComponent = useEditorStore((s) => s.deleteComponent);
  // 視口狀態（由 ViewportToolbar/Canvas 共同使用）
  const activeViewport = useViewportStore((s) => s.activeViewport);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, _setRightPanelOpen] = useState(true);
  const [rightPanelTab, setRightPanelTab] = useState('layers'); // 'layers' | 'properties'
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showClearModal, setShowClearModal] = useState(false); // 清空画布確認對話框
  // 辅助线狀態与計算（視窗中心十字线）
  const [showGuides, setShowGuides] = useState(false);
  const [guideV, setGuideV] = useState([]);
  const [guideH, setGuideH] = useState([]);
  useEffect(() => {
    const update = () => {
      if (typeof window !== 'undefined') {
        setGuideV([Math.round(window.innerWidth / 2)]);
        setGuideH([Math.round(window.innerHeight / 2)]);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // 對齊/分佈快捷操作（仅在 Flex 容器上啟用）
  const isSelectedFlexContainer = (() => {
    const id = selectedComponentId;
    const props = canvasState?.componentProps?.[id];
    return !!(id && props?.layoutProps?.display === 'flex');
  })();
  // 水平對齊（無論 flex 方向，均以「視覺水平」為準）
  const alignHorizontal = (value) => {
    if (!isSelectedFlexContainer) return;
    const state = useEditorStore.getState();
    const dir = state.canvasState?.componentProps?.[selectedComponentId]?.layoutProps?.flexDirection;
    const isRow = dir !== 'column';
    const prop = isRow ? 'justifyContent' : 'alignItems';
    state.updateLayoutProps(selectedComponentId, { [prop]: value });
  };
  // 垂直對齊（無論 flex 方向，均以「視覺垂直」為準）
  const alignItems = (value) => {
    if (!isSelectedFlexContainer) return;
    const state = useEditorStore.getState();
    const dir = state.canvasState?.componentProps?.[selectedComponentId]?.layoutProps?.flexDirection;
    const isRow = dir !== 'column';
    const prop = isRow ? 'alignItems' : 'justifyContent';
    state.updateLayoutProps(selectedComponentId, { [prop]: value });
  };
  // 主軸分佈：保留為原本「justifyContent」，對應 Flex 主軸（row=水平、column=垂直）
  const alignJustify = (value) => {
    if (!isSelectedFlexContainer) return;
    useEditorStore.getState().updateLayoutProps(selectedComponentId, { justifyContent: value });
  };

  // —— 模板載入 ——
  const applyTemplate = (key) => {
    const preset = TEMPLATES[key];
    if (!preset) return;
    // 追加模式：不清空画布，將模板結構附加至 root

    const { addComponent, updateBaseProps, updateLayoutProps } = useEditorStore.getState();

    const findNode = (t, id) => {
      if (t.id === id) return t;
      for (const c of t.children || []) {
        const f = findNode(c, id);
        if (f) return f;
      }
      return null;
    };

    const insertNode = (parentId, node) => {
      addComponent(parentId, node.componentType);
      const parentTree = useEditorStore.getState().canvasState.componentTree;
      const parent = findNode(parentTree, parentId);
      const newId = parent?.children?.[parent.children.length - 1]?.id;
      if (!newId) return;
      if (node.overrides?.baseProps) {
        updateBaseProps(newId, node.overrides.baseProps);
      }
      if (node.layoutOverrides) {
        updateLayoutProps(newId, node.layoutOverrides);
      }
      (node.children || []).forEach((child) => insertNode(newId, child));
    };

    insertNode('root', preset.tree);
  };

  // 對齊辅助线已停用

  // DnD 狀態
  const [activeId, setActiveId] = useState(null);
  const [activeData, setActiveData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [dropFeedback, setDropFeedback] = useState(null); // 'success' | 'failure' | null
  const [previewSwap, setPreviewSwap] = useState(null); // 拖動預覽交換狀態

  // 配置觸控傳感器
  const activationConstraint = useMemo(() => ({ distance: 12, delay: 100, tolerance: 5 }), []);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint })
  );

  // 清空画布上的所有元件
  const handleClearCanvas = () => {
    setShowClearModal(true);
  };

  // 確認清空画布
  const handleConfirmClear = () => {
    try {
      // 使用舊有 editorStore 重置画布狀態，与 Canvas.jsx 的狀態來源保持一致
      useEditorStore.getState().reset();
    } catch (e) {
      console.error('清空画布失敗:', e);
    }
  };

  // 只在掛載時註冊歷史快照提供/套用函式，避免依賴變更造成重複註冊
  useEffect(() => {
    let unregisterApplier;
    let unregisterProvider;

    try {
      const hs = useHistoryStore.getState();

      // 註冊快照套用函数，並保存取消註冊函数
      unregisterApplier = hs.registerSnapshotApplier((snap) => {
        if (snap?.canvasState) {
          try { useCanvasStore.getState().importCanvas(snap.canvasState); } catch {
            // Ignore import errors
          }
          try { useEditorStore.getState().importProject({ canvasState: snap.canvasState, globalSettings: snap.viewportState || {} }); } catch {
            // Ignore import errors
          }
        }
        if (snap?.viewportState) {
          try { useViewportStore.getState().importSettings(snap.viewportState); } catch {
            // Ignore import errors
          }
        }
      });

      // 註冊快照提供函数，並保存取消註冊函数
      unregisterProvider = hs.registerSnapshotProvider(() => ({
        canvasState: useCanvasStore.getState().exportCanvas(),
        viewportState: useViewportStore.getState().exportSettings(),
        timestamp: Date.now(),
        description: 'Current'
      }));
    } catch {
      // Ignore initialization errors
    }

    // 清理函数：在組件卸載時取消註冊，防止內存洩漏
    return () => {
      if (typeof unregisterApplier === 'function') {
        try { unregisterApplier(); } catch {
          // Ignore cleanup errors
        }
      }
      if (typeof unregisterProvider === 'function') {
        try { unregisterProvider(); } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  // 使用 ref 保存最新的選中与刪除函式，鍵盤事件只需綁一次
  const keyCtxRef = useRef({ selectedComponentId, deleteComponent });
  useEffect(() => {
    keyCtxRef.current = { selectedComponentId, deleteComponent };
  }, [selectedComponentId, deleteComponent]);

  // 綁定鍵盤（Delete/Backspace/Undo/Redo），避免在表單輸入時誤觸
  useEffect(() => {
    const handleKeyDown = (e) => {
      const target = e.target;
      const isInputEl = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (!isInputEl) {
        // Undo / Redo 快捷鍵
        const isMod = e.metaKey || e.ctrlKey;
        if (isMod && e.key.toLowerCase() === 'z') {
          e.preventDefault();
          if (e.shiftKey) { 
            try { useHistoryStore.getState().redo(); } catch {
              // Ignore redo errors
            }
          } else { 
            try { useHistoryStore.getState().undo(); } catch {
              // Ignore undo errors
            }
          }
          return;
        }
        if (e.ctrlKey && e.key.toLowerCase() === 'y') {
          e.preventDefault();
          try { useHistoryStore.getState().redo(); } catch {
            // Ignore redo errors
          }
          return;
        }
      }

      // Delete / Backspace 刪除（非輸入場景）
      if (isInputEl) return;
      if (e.key === 'Delete' || e.key === 'Backspace') {
        const { selectedComponentId: selId, deleteComponent: delFn } = keyCtxRef.current;
        if (selId && selId !== 'root') { delFn(selId); }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 🔧 简化碰撞检測 - 測試診斷用
  const customCollisionDetection = useCallback((args) => pointerWithin(args), []);

  const handleDragStart = useCallback((event) => {
    setActiveId(event?.active?.id ?? null);
    setActiveData(event?.active?.data ?? null);
    setPreviewSwap(null);

    // 触发导览事件：开始拖动
    tutorialEvents.emit(TUTORIAL_EVENTS.DRAG_START);
  }, []);

  // 使用 ref 保存最新画布樹，避免把巨大物件作為依賴导致 handler 每次重建
  const canvasRef = useRef(canvasState?.componentTree);
  useEffect(() => { canvasRef.current = canvasState?.componentTree; }, [canvasState?.componentTree]);

  const handleDragOver = useCallback((event) => {
    const { active, over } = event || {};
    if (!active || !over) { setPreviewSwap(null); return; }

    const root = canvasRef.current;
    const draggedId = active.id;
    const targetId = over.id;
    const isFromLibrary = !!active.data?.current?.fromLibrary;

    if (isFromLibrary || String(targetId).startsWith('library-') || draggedId === targetId) {
      setPreviewSwap(null);
      return;
    }

    const preview = calculatePreviewSwap(root, draggedId, targetId);
    if (preview) setPreviewSwap(preview); else setPreviewSwap(null);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event || {};

    setActiveId(null);
    setActiveData(null);
    setPreviewSwap(null);

    if (!active || !over) { setDropFeedback('failure'); setTimeout(() => setDropFeedback(null), 600); return; }

    const draggedId = active.id;
    const targetId = over.id;
    const isFromLibrary = !!active.data?.current?.fromLibrary;
    const draggedType = active.data?.current?.componentType;

    const root = canvasRef.current;
    const st = useEditorStore.getState();

    const findById = (t, id) => {
      if (!t) return null;
      if (t.id === id) return t;
      for (const c of (t.children || [])) {
        const f = findById(c, id);
        if (f) return f;
      }
      return null;
    };

    // 來自組件庫：新增元件
    if (isFromLibrary && draggedType) {
      const overType = over.data?.current?.componentType;
      const overIsContainer = overType && canHaveChildren(overType);

      // 1) 直接投到容器末位
      if (overIsContainer) {
        const parentNode = findById(root, targetId);
        if (parentNode && canDropIntoParent(draggedType, parentNode.componentType)) {
          const newId = st.addComponent(targetId, draggedType);
          if (newId) st.selectComponent(newId);
          setDropFeedback('success');
          setTimeout(() => setDropFeedback(null), 600);

          // 触发导览事件：成功放置组件
          tutorialEvents.emit(TUTORIAL_EVENTS.DROPPED);
          return;
        }
      }

      // 2) 投到某個子項前 → 插入到其父節點的 index 位置
      const toInfo = findParentAndIndex(root, targetId);
      if (toInfo && toInfo.parent) {
        const parentType = toInfo.parent.componentType;
        if (canDropIntoParent(draggedType, parentType)) {
          const newId = st.addComponent(toInfo.parentId, draggedType, toInfo.index);
          if (newId) st.selectComponent(newId);
          setDropFeedback('success');
          setTimeout(() => setDropFeedback(null), 600);

          // 触发导览事件：成功放置组件
          tutorialEvents.emit(TUTORIAL_EVENTS.DROPPED);
          return;
        }
      }

      // 3) 兜底：投放到 Page(root) 末位
      const rootNode = findById(root, 'root');
      if (rootNode && canDropIntoParent(draggedType, 'Page')) {
        const newId = st.addComponent('root', draggedType);
        if (newId) st.selectComponent(newId);
        setDropFeedback('success');
        setTimeout(() => setDropFeedback(null), 600);

        // 触发导览事件：成功放置组件
        tutorialEvents.emit(TUTORIAL_EVENTS.DROPPED);
        return;
      }

      setDropFeedback('failure');
      setTimeout(() => setDropFeedback(null), 600);
      return;
    }

    // 既有元件移動/交換
    if (String(targetId).startsWith('library-')) {
      setDropFeedback('failure'); setTimeout(() => setDropFeedback(null), 600); return;
    }

    const fromInfo = findParentAndIndex(root, draggedId);
    const toInfo = findParentAndIndex(root, targetId);
    if (!fromInfo || !toInfo) { setDropFeedback('failure'); setTimeout(() => setDropFeedback(null), 600); return; }

    const newParentId = toInfo.parentId;

    const parentNode = findById(root, newParentId);
    const draggedNode = findById(root, draggedId);
    if (!parentNode || !draggedNode) { setDropFeedback('failure'); setTimeout(() => setDropFeedback(null), 600); return; }
    if (!canDropIntoParent(draggedNode.componentType, parentNode.componentType)) { setDropFeedback('failure'); setTimeout(() => setDropFeedback(null), 600); return; }

    if (fromInfo.parentId === newParentId) {
      st.swapComponents(draggedId, targetId);
    } else {
      let newIndex = toInfo.index;
      if (newParentId === fromInfo.parentId && toInfo.index > fromInfo.index) newIndex = toInfo.index - 1;
      st.moveComponent(draggedId, newParentId, Math.max(0, newIndex));
    }

    setDropFeedback('success');
    setTimeout(() => setDropFeedback(null), 600);
  }, []);
  const handleComponentClick = useCallback((componentId) => {
    try {
      useEditorStore.getState().selectComponent(componentId);

      // 触发导览事件：选中组件
      if (componentId && componentId !== 'root') {
        tutorialEvents.emit(TUTORIAL_EVENTS.COMPONENT_SELECTED);
      }
    } catch {
      // Ignore selection errors
    }
  }, []);

  const handleGeneratePrompt = () => {
    try {
      const prompt = serializeToPrompt(canvasState, globalSettings);
      setGeneratedPrompt(prompt);
      setShowPromptModal(true);

      // 触发导览事件：生成 Prompt
      tutorialEvents.emit(TUTORIAL_EVENTS.PROMPT_GENERATED);
    } catch (error) {
      alert(`${t('layoutEditor.generateFailed')}: ${error.message}`);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert(t('layoutEditor.copiedToClipboard'));

    // 触发导览事件：复制 Prompt
    tutorialEvents.emit(TUTORIAL_EVENTS.PROMPT_COPIED);
  };

  const handleExportProject = () => {
    const projectData = exportProject();
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `layout-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    // 触发导览事件：导出项目
    tutorialEvents.emit(TUTORIAL_EVENTS.EXPORT_OPENED);
  };

  return (
    <TutorialProvider>
      <div className="h-screen w-screen flex flex-col bg-gray-50 overflow-hidden">
      <header className="h-14 bg-white border-b border-gray-200 flex-shrink-0">
        <div className="h-full px-4 flex items-center justify-between gap-4">
          {/* 左側: Logo + 面板切換 */}
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
              {'版面编辑器'}
            </h1>

            <div className="h-6 w-px bg-gray-300" aria-hidden="true" />

            {/* 面板切換按鈕 */}
            <button
              onClick={() => {
                setLeftPanelOpen(prev => {
                  const next = !prev;
                  _setRightPanelOpen(next);
                  return next;
                });
              }}
              className="p-1.5 rounded hover:bg-gray-100 transition-colors"
              aria-label={t('layoutEditor.toggleComponentPanel')}>

              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* 中间: 视口切换工具栏 */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center justify-between gap-2">
              <ViewportToolbar />
            </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => applyTemplate('hero')}
                  className="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                >一键 Hero</button>
                <button
                  onClick={() => applyTemplate('threeCards')}
                  className="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                >一键三栏</button>
              </div>
          </div>

          {/* 右側: 操作按鈕 */}
          <div className="flex items-center gap-2">
            <button
              data-guide="export-button"
              onClick={handleExportProject}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
              aria-label="导出">
              {'导出'}
            </button>

            <button
              data-guide="prompt-panel"
              onClick={handleGeneratePrompt}
              className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-sm"
              aria-label="生成提示词">
              {'生成提示词'}
            </button>
          </div>
        </div>
      </header>

      {/* 主体区域 - 三欄布局 + DndContext */}
      <main className="flex-1 flex overflow-hidden">
        <DndContext
          sensors={sensors}
          collisionDetection={customCollisionDetection}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          {/* 左側: 組件庫面板 */}
          {leftPanelOpen && (
            <aside
              data-guide="component-library"
              className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto"
            >
              <ComponentLibrary onClearCanvas={handleClearCanvas} />
            </aside>
          )}

          {/* 中間: 画布区域 */}
          <section className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-white border-b px-2 py-1 flex items-center gap-1">
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignHorizontal('flex-start') } disabled={!isSelectedFlexContainer} aria-label="水平左对齐" title="水平左对齐"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="5" y="9" width="8" height="6" rx="1" /></svg></button>
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignHorizontal('center') } disabled={!isSelectedFlexContainer} aria-label="水平居中" title="水平居中"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="8" y="9" width="8" height="6" rx="1" /></svg></button>
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignHorizontal('flex-end') } disabled={!isSelectedFlexContainer} aria-label="水平右对齐" title="水平右对齐"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="13" y="9" width="8" height="6" rx="1" /></svg></button>
              <div  className="w-px h-4 bg-gray-200 mx-1 " />
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignJustify('space-between')} disabled={!isSelectedFlexContainer} aria-label="主轴两端对齐" title="主轴两端对齐"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="5" y="10" width="3" height="4" rx="1" /><rect x="11" y="10" width="3" height="4" rx="1" /><rect x="18" y="10" width="3" height="4" rx="1" /></svg></button>
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignJustify('space-around')} disabled={!isSelectedFlexContainer} aria-label="主轴均分" title="主轴均分"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="6" y="10" width="3" height="4" rx="1" /><rect x="11" y="10" width="3" height="4" rx="1" /><rect x="17" y="10" width="3" height="4" rx="1" /></svg></button>
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignJustify('space-evenly')} disabled={!isSelectedFlexContainer} aria-label="主轴平均分布" title="主轴平均分布"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="7" y="10" width="3" height="4" rx="1" /><rect x="11" y="10" width="3" height="4" rx="1" /><rect x="15" y="10" width="3" height="4" rx="1" /></svg></button>
              <div  className="w-px h-4 bg-gray-200 mx-1 " />
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignItems('flex-start')} disabled={!isSelectedFlexContainer} aria-label="垂直顶部对齐" title="垂直顶部对齐"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="8" y="7" width="8" height="4" rx="1" /></svg></button>
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignItems('center')} disabled={!isSelectedFlexContainer} aria-label="垂直居中" title="垂直居中"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="8" y="10" width="8" height="4" rx="1" /></svg></button>
              <button className="px-2 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" onClick={() => alignItems('flex-end')} disabled={!isSelectedFlexContainer} aria-label="垂直底部对齐" title="垂直底部对齐"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" /><rect x="8" y="13" width="8" height="4" rx="1" /></svg></button>
              <label className="ml-2 flex items-center gap-1 text-xs text-gray-600" title="辅助线" aria-label="辅助线">
                <input type="checkbox" checked={showGuides} onChange={(e) => setShowGuides(e.target.checked)} />
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="12" y1="4" x2="12" y2="20" strokeWidth="2" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
                </svg>
              </label>
            </div>
            {/* 画布容器 */}
            <div data-guide="canvas" className="flex-1 overflow-auto p-6">
              <Canvas onComponentClick={handleComponentClick} previewSwap={previewSwap} />
            </div>

            {/* 底部狀態欄 (可選) */}
            <footer className="h-8 bg-white border-t border-gray-200 px-4 flex items-center text-xs text-gray-500">
              {/* 视口状态改读取 useViewportStore，与工具条/画布一致 */}
              <span>
                {'视口'}: {activeViewport === 'desktop' ? '桌面' :
                        activeViewport === 'tablet' ? t('layoutEditor.viewport.tablet') :
                        activeViewport === 'mobile' ? t('layoutEditor.viewport.mobile') : '桌面'}
              </span>
              <div className="mx-2 h-3 w-px bg-gray-300" />
              {/* 已选中状态：动态显示 */}
              <span>
                {'已选取'}: {(() => {
                  if (!selectedComponentId || selectedComponentId === 'root') return '未选取';
                  // 嘗試找出型別，找不到則回退為短 ID
                  const findNode = (tree, id) => {
                    if (!tree) return null;
                    if (tree.id === id) return tree;
                    for (const c of tree.children || []) { const f = findNode(c, id); if (f) return f; }
                    return null;
                  };
                  const node = findNode(canvasState?.componentTree, selectedComponentId);
                  const label = node?.componentType ? `${node.componentType} #${String(selectedComponentId).slice(0,6)}` : `#${String(selectedComponentId).slice(0,6)}`;
                  return label;
                })()}
              </span>
            </footer>
          </section>

          {/* 右侧: 层级/属性面板 */}
          {rightPanelOpen && (
            <aside className="w-80 bg-white border-l border-gray-200 flex-shrink-0 flex flex-col overflow-hidden">
              {/* 标签切换 */}
              <nav className="h-12 border-b border-gray-200 flex items-center px-1">
                <button
                  onClick={() => setRightPanelTab('layers')}
                  className={`flex-1 h-10 text-sm font-medium rounded transition-colors ${
                    rightPanelTab === 'layers'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {'图层'}
                </button>
                <button
                  onClick={() => setRightPanelTab('properties')}
                  className={`flex-1 h-10 text-sm font-medium rounded transition-colors ${
                    rightPanelTab === 'properties'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {'属性'}
                </button>
              </nav>

              {/* 內容区域 */}
              <div className="flex-1 overflow-y-auto">
                {rightPanelTab === 'layers' ? (
                  <div data-guide="layer-panel">
                    <LayersPanel />
                  </div>
                ) : (
                  <div data-guide="right-panel-properties">
                    <PropertiesInspector />
                  </div>
                )}
              </div>
            </aside>
          )}

          {/* 拖動預覽 - DragOverlay */}
          <DragOverlay>
            {activeId ? (
              <DragPreview activeData={activeData} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </main>

      {/* 覆蓋式辅助线 */}
      {showGuides && <GuidesOverlay v={guideV} h={guideH} />}

      {/* Prompt 模態框 */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* 标題 */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">{t('layoutEditor.generatedPrompt')}</h2>
              <button
                onClick={() => setShowPromptModal(false)}
                className="p-1 rounded hover:bg-gray-100 transition-colors"
                aria-label={t('layoutEditor.close')}>

                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 內容 */}
            <div className="flex-1 overflow-y-auto p-6">
              <pre className="bg-gray-50 rounded-lg p-4 text-sm font-mono whitespace-pre-wrap overflow-x-auto border border-gray-200">
                {generatedPrompt}
              </pre>
            </div>

            {/* 操作按鈕 */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowPromptModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                {t('layoutEditor.close')}
              </button>
              <button
                data-guide="copy-prompt-button"
                onClick={handleCopyPrompt}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-sm"

              >
                {t('layoutEditor.copyToClipboard')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 清空画布確認對話框 */}
      <MinimalismModal
        open={showClearModal}
        title="清空画布"
        message="确定要清空画布吗？此操作无法撤销。"
        confirmText="确认"
        cancelText="取消"
        onConfirm={handleConfirmClear}
        onCancel={() => setShowClearModal(false)}
        onOpenChange={setShowClearModal}
      />

      {/* 导览教学系统 */}
      <TutorialUI />
    </div>
    </TutorialProvider>
  );
}
