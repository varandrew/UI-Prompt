import { useEditorStore } from '../../stores/editorStore';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, useDroppable } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { canHaveChildren, canDropIntoParent } from '../../data/components/componentLibrary';
import { useEffect, useState } from 'react';

/**
 * 层級面板 - 樹狀結構展示
 *
 * 職責:
 * - 显示組件樹层級
 * - 支持點擊選中
 * - 支持拖動重排 (TODO)
 *
 * 设計: 極简主義
 */
export function LayersPanel() {
  const [ListComponent, setListComponent] = useState(null);
  useEffect(() => {
    let mounted = true;
    import('react-window')
      .then((mod) => {
        const List = mod.FixedSizeList || (mod.default && mod.default.FixedSizeList) || null;
        if (mounted) setListComponent(List);
      })
      .catch(() => {});
    return () => { mounted = false; };
  }, []);
  const canvasState = useEditorStore((s) => s.canvasState);
  const selectedComponentId = useEditorStore((s) => s.selectedComponentId);
  const selectComponent = useEditorStore((s) => s.selectComponent);
  const moveComponent = useEditorStore((s) => s.moveComponent);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  // —— 輔助：查找 ——
  const findComponentById = (tree, id) => {
    if (!tree) return null;
    if (tree.id === id) return tree;
    for (const child of tree.children || []) {
      const found = findComponentById(child, id);
      if (found) return found;
    }
    return null;
  };

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

  const isDescendant = (ancestorId, nodeId) => {
    const ancestor = findComponentById(canvasState.componentTree, ancestorId);
    if (!ancestor) return false;
    const dfs = (n) => {
      if (!n) return false;
      if (n.id === nodeId) return true;
      return (n.children || []).some(dfs);
    };
    return (ancestor.children || []).some(dfs);
  };

  // —— 拖放收尾：重排/改變父節點 ——
  // eslint-disable-next-line no-unused-vars
  const handleDragEndTree = (event) => {
    const { active, over } = event || {};
    if (!active || !over) return;
    const draggedId = active.id;
    const overId = over.id;
    if (!draggedId || !overId || draggedId === overId) return;

    // 來源位置
    const fromInfo = findParentAndIndex(canvasState.componentTree, draggedId);
    if (!fromInfo) return;

    // 目标節點与父節點資訊
    const targetNode = findComponentById(canvasState.componentTree, overId);
    if (!targetNode) return;

    // 判斷是否投放到容器：容器或 Page 可作為新父
    let newParentId;
    let newIndex;

    if (canHaveChildren(targetNode.componentType)) {
      // 投放到容器末尾
      newParentId = targetNode.id;
      const children = targetNode.children || [];
      newIndex = children.length; // 追加至尾
    } else {
      // 投放到目标的父節點，插入到目标索引位置（之前）
      const overInfo = findParentAndIndex(canvasState.componentTree, overId);
      if (!overInfo) return;
      newParentId = overInfo.parentId;
      newIndex = overInfo.index; // 插入到目标之前
      // 若同父且原位置在目标之前，移除後目标索引會左移 1，需要校正
      if (fromInfo.parentId === newParentId && fromInfo.index < newIndex) {
        newIndex = Math.max(0, newIndex - 1);
      }
    }

    // 不允許將節點移動到自身或其後代
    if (draggedId === newParentId || isDescendant(draggedId, newParentId)) {
      return;
    }

    // 父子合法性校驗
    const draggedNode = findComponentById(canvasState.componentTree, draggedId);
    const newParentNode = findComponentById(canvasState.componentTree, newParentId);
    if (!draggedNode || !newParentNode) return;
    if (!canDropIntoParent(draggedNode.componentType, newParentNode.componentType)) {
      return; // 非法放置，直接忽略
    }

    // 執行移動
    try {
      moveComponent(draggedId, newParentId, newIndex);
      selectComponent(draggedId);
    } catch (e) {
      // 防禦：避免例外导致 UI 中斷
      console.warn('moveComponent 失敗:', e);
    }
  };

  // —— Sortable Row ——
  function SortableRow({ node, depth, isSelected }) {
    const isRoot = node.id === 'root';
    // 必须在条件判断之前调用 hooks
    const sortableResult = useSortable({ id: node.id, disabled: isRoot });
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = sortableResult;
    
    if (isRoot) {
      return (
        <NodeRow node={node} depth={depth} isSelected={isSelected} dragHandle={null} />
      );
    }
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.6 : 1,
    };

    return (
      <div ref={setNodeRef} style={style}>
        <NodeRow
          node={node}
          depth={depth}
          isSelected={isSelected}
          dragHandle={<DragHandle attributes={attributes} listeners={listeners} />}
        />
      </div>
    );
  }

  function DragHandle({ attributes, listeners }) {
    return (
      <button
        type="button"
        className="ml-auto shrink-0 p-1 text-gray-400 hover:text-gray-600"
        title="拖动以重新排序"
        aria-label="Drag to reorder"
        {...attributes}
        {...listeners}
      >
        {/* icon: grip */}
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 4h2v2H7V4zm4 0h2v2h-2V4zM7 9h2v2H7V9zm4 0h2v2h-2V9zM7 14h2v2H7v-2zm4 0h2v2h-2v-2z" />
        </svg>
      </button>
    );
  }

  function NodeRow({ node, depth, isSelected, dragHandle }) {
    const hasChildren = node.children && node.children.length > 0;
    return (
      <div>
        <div
          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors flex items-center gap-2 ${
            isSelected ? 'bg-blue-50 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-50'
          }`}
          style={{ paddingLeft: `${depth * 16 + 12}px` }}
          onClick={() => selectComponent(node.id)}
          role="button"
          tabIndex={0}
        >
          {hasChildren && (
            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
          <span>{node.componentType}</span>
          <span className="text-xs text-gray-400">#{node.id.slice(0, 6)}</span>
          {dragHandle}
        </div>
      </div>
    );
  }

  function ContainerDropZone({ containerId, depth }) {
    const { isOver, setNodeRef } = useDroppable({ id: `container-drop-${containerId}` });
    return (
      <div ref={setNodeRef} style={{ paddingLeft: `${depth * 16 + 12}px` }}>
        <div
          className={`mt-1 mb-2 rounded border-2 border-dashed ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-200'} text-[11px] text-gray-400 px-2 py-1`}
        >
          放到此容器內（末位）
        </div>
      </div>
    );
  }

  const renderTree = (node, depth = 0) => {
    const isSelected = selectedComponentId === node.id;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id}>
        <SortableRow node={node} depth={depth} isSelected={isSelected} />

        {/* 子清單：可排序 */}
        {canHaveChildren(node.componentType) && (
          <SortableContext
            items={(node.children || []).map((c) => c.id)}
            strategy={verticalListSortingStrategy}
          >
            {hasChildren && node.children.map((child) => renderTree(child, depth + 1))}
            {/* 空/末位放置区 */}
            <ContainerDropZone containerId={node.id} depth={depth + 1} />
          </SortableContext>
        )}
      </div>
    );
  };

  // —— 扁平化樹，用於虛擬化渲染 ——
  const flattenTree = (node, depth = 0, acc = []) => {
    acc.push({ node, depth });
    (node.children || []).forEach((child) => flattenTree(child, depth + 1, acc));
    return acc;
  };

  const flat = canvasState?.componentTree ? flattenTree(canvasState.componentTree) : [];
  const SHOULD_VIRTUALIZE = !!ListComponent && flat.length > 200; // 大量節點時啟用虛擬化

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const root = canvasState.componentTree;
    const activeNode = findComponentById(root, activeId);
    if (!activeNode) return;

    // 放到容器末位
    if (String(overId).startsWith('container-drop-')) {
      const newParentId = String(overId).replace('container-drop-', '');
      if (newParentId === activeId) return; // 自身不可為父
      if (isDescendant(activeId, newParentId)) return; // 不可放入自身子樹

      const newParentNode = findComponentById(root, newParentId);
      if (!newParentNode) return;
      if (!canDropIntoParent(activeNode.componentType, newParentNode.componentType)) return;

      const newIndex = (newParentNode.children || []).length;
      moveComponent(activeId, newParentId, newIndex);
      return;
    }

    // 否則：按目标項的父层与索引決定
    const fromInfo = findParentAndIndex(root, activeId);
    const toInfo = findParentAndIndex(root, overId);
    if (!fromInfo || !toInfo) return;

    const newParentId = toInfo.parentId;
    if (newParentId === activeId) return;
    if (isDescendant(activeId, newParentId)) return;

    const newParentNode = findComponentById(root, newParentId);
    if (!newParentNode) return;
    if (!canDropIntoParent(activeNode.componentType, newParentNode.componentType)) return;

    let newIndex = toInfo.index;
    if (newParentId === fromInfo.parentId) {
      // 同父節點內移動：調整索引
      newIndex = toInfo.index > fromInfo.index ? toInfo.index - 1 : toInfo.index;
    }
    moveComponent(activeId, newParentId, Math.max(0, newIndex));
  };

  return (
    <div className="p-2">
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">
        组件层级
      </div>

      {canvasState.componentTree ? (
        SHOULD_VIRTUALIZE ? (
          <ListComponent
            height={400}
            width={'100%'}
            itemCount={flat.length}
            itemSize={28}
          >
            {({ index, style }) => {
              const { node, depth } = flat[index];
              const isSelected = selectedComponentId === node.id;
              return (
                <div style={style} key={node.id}>
                  <div
                    className={`w-full text-left px-3 py-1.5 text-sm rounded transition-colors flex items-center gap-2 ${
                      isSelected ? 'bg-blue-50 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={{ paddingLeft: `${depth * 16 + 12}px` }}
                    onClick={() => selectComponent(node.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <span>{node.componentType}</span>
                    <span className="text-xs text-gray-400">#{node.id.slice(0, 6)}</span>
                  </div>
                </div>
              );
            }}
          </ListComponent>
        ) : (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            {renderTree(canvasState.componentTree)}
          </DndContext>
        )
      ) : (
        <p className="text-sm text-gray-400 text-center py-8">暂无组件</p>
      )}
    </div>
  );
}
