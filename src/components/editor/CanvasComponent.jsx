import React, { useCallback, useMemo } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSelectionStore } from '../../stores';
import { canHaveChildren } from '../../data/components/componentLibrary';
import { useCollisionAnimation } from '../../hooks/useCollisionAnimation';
import {
  smoothSwapTransition,
  dragVariants,
  getAdaptiveTransition
} from '../../utils/animations';
import { getVisualOrder } from '../../utils/editor/visualOrder';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * 画布組件渲染器（优化版）
 *
 * 优化點：
 * - 使用 selector 訂閱選中狀態：仅選中/取消選中節點重渲染 → 稀疏選框渲染
 * - 接收 getProps 函式取得當前節點 props，避免傳整張映射造成級联重渲染
 * - 以 React.memo 搭配淺比較保護未變更子樹
 */
const InnerCanvasComponent = ({ component, onClick, getProps, previewSwap = null }) => {
  const props = getProps?.(component.id) || {};

  // 仅當前節點与選中关联時觸發更新
  const isSelected = useSelectionStore(useCallback((s) => s.selectedComponentId === component.id, [component.id]));

  const isContainer = canHaveChildren(component.componentType);
  const isRootPage = component.componentType === 'Page';

  // 預覽交換狀態
  const isPreviewDragged = previewSwap?.draggedId === component.id;
  const previewOpacity = isPreviewDragged ? 0.3 : 1;

  // 碰撞動画控制
  const { setNodeRef: _ignore } = useCollisionAnimation();

  // 仅 Page 不可拖動；容器可接收放置
  const { attributes, listeners, setNodeRef: setSortableRef, transform, transition, isDragging } = useSortable({
    id: component.id,
    disabled: isRootPage,
    data: { componentType: component.componentType }
  });

  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: component.id,
    disabled: !isContainer,
    data: { componentType: component.componentType }
  });

  // 合併 sortable 与 droppable 的 ref
  const setMultipleRefs = useCallback((node) => {
    if (isContainer) {
      setSortableRef(node);
      setDroppableRef(node);
    } else {
      setSortableRef(node);
    }
  }, [isContainer, setSortableRef, setDroppableRef]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // 合併樣式（節點自身變更才改變引用）
  const mergedStyle = {
    ...style,
    ...(props?.layoutProps || {}),
    ...(props?.baseProps?.style || {})
  };

  // Framer Motion 動画配置
  const motionConfig = {
    layout: true,
    transition: getAdaptiveTransition(smoothSwapTransition),
    variants: dragVariants,
    initial: 'idle',
    animate: isDragging ? 'dragging' : (isSelected ? 'hover' : 'idle'),
    whileHover: !isDragging && !isRootPage ? 'hover' : undefined,
    style: { opacity: previewOpacity }
  };

  // 在組件頂层計算虛擬子組件順序（避免 hooks 位置變動）
  const visualChildren = useMemo(() => {
    if (!component.children || component.children.length === 0) return [];
    if (!previewSwap || previewSwap.parentId !== component.id) return component.children;
    return getVisualOrder(component.children, previewSwap);
  }, [component.children, previewSwap, component.id]);

  const handleClick = (e) => { e.stopPropagation(); onClick?.(component.id); };

  const contentText = props?.baseProps?.content?.text;
  const img = props?.baseProps?.content;

  // 渲染當前節點
  const renderComponent = () => {
    const childrenContent = visualChildren.length > 0 ? (
      <>
        {visualChildren.map((child) => (
          <CanvasComponent
            key={child.id}
            component={child}
            onClick={onClick}
            getProps={getProps}
            previewSwap={previewSwap}
          />
        ))}
      </>
    ) : null;

    switch (component.componentType) {
      case 'Button':
        return (
          <motion.button
            {...motionConfig}
            ref={setMultipleRefs}
            className={`relative ${!isRootPage ? 'cursor-move' : 'cursor-pointer'} ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''} ${isOver ? 'ring-2 ring-green-400' : ''} transition-all`}
            style={mergedStyle}
            onClick={handleClick}
            {...attributes}
            {...listeners}
            data-node-id={component.id}
          >
            {contentText || '按鈕'}
          </motion.button>
        );
      case 'Text':
        return (
          <motion.div
            {...motionConfig}
            ref={setMultipleRefs}
            className={`relative ${!isRootPage ? 'cursor-move' : 'cursor-pointer'} ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''} ${isOver ? 'ring-2 ring-green-400' : ''} transition-all`}
            style={mergedStyle}
            onClick={handleClick}
            {...attributes}
            {...listeners}
            data-node-id={component.id}
          >
            {contentText || '文本內容'}
          </motion.div>
        );
      case 'Image':
        return (
          <motion.img
            {...motionConfig}
            ref={setMultipleRefs}
            className={`relative ${!isRootPage ? 'cursor-move' : 'cursor-pointer'} ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''} ${isOver ? 'ring-2 ring-green-400' : ''} transition-all`}
            style={mergedStyle}
            onClick={handleClick}
            {...attributes}
            {...listeners}
            data-node-id={component.id}
            src={img?.src || img?.placeholder}
            alt={img?.alt || '圖片'}
          />
        );
      default:
        // 容器型：將子節點渲染嵌入同一容器中
        return (
          <motion.div
            {...motionConfig}
            ref={setMultipleRefs}
            className={`relative ${!isRootPage ? 'cursor-move' : 'cursor-pointer'} ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''} ${isOver ? 'ring-2 ring-green-400' : ''} transition-all`}
            style={mergedStyle}
            onClick={handleClick}
            {...attributes}
            {...listeners}
            data-node-id={component.id}
          >
            <motion.div
              className="absolute inset-0 rounded-md pointer-events-none"
              initial={false}
              animate={{
                boxShadow: isOver ? '0 0 0 3px rgba(37,99,235,0.55)' : '0 0 0 0 rgba(0,0,0,0)',
                opacity: isOver ? 1 : 0
              }}
              transition={{ duration: 0.15 }}
            />
            {childrenContent}
          </motion.div>
        );
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export const CanvasComponent = React.memo(InnerCanvasComponent, (prev, next) => {
  // 若節點引用、預覽狀態与回調皆未變更，則跳過重渲染
  return (
    prev.component === next.component &&
    prev.previewSwap === next.previewSwap &&
    prev.onClick === next.onClick &&
    prev.getProps === next.getProps
  );
});
