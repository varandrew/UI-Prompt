import { useEditorStore, useViewportStore } from '../../stores';
import { CanvasComponent } from './CanvasComponent';
import { useEffect, useMemo, useRef, useCallback } from 'react';

/**
 * 画布組件 - 純渲染組件（优化版）
 *
 * 職責:
 * - 渲染組件樹
 * - 提供視口尺寸容器
 * - 極简視覺设計
 *
 * 优化:
 * - 傳遞 getProps 函数而非整張 props 映射，配合 React.memo 降低重渲染
 */
export function Canvas({ onComponentClick, previewSwap = null }) {
  // 与层級面板一致，統一使用 editorStore 的画布狀態
  const canvasState = useEditorStore((s) => s.canvasState);
  const componentTree = canvasState.componentTree;
  const componentProps = canvasState.componentProps;

  // 稳定化 getProps 函式，避免因映射物件引用變更导致子樹重渲染
  const mapRef = useRef(componentProps);
  useEffect(() => { mapRef.current = componentProps; }, [componentProps]);
  const getProps = useCallback((id) => mapRef.current[id], []);

  // 視口尺寸（改為直接來自 useViewportStore，与 ViewportToolbar 完全一致）
  // 避免 selector 每次返回新物件导致 useSyncExternalStore 無限重算：拆分選取確保引用稳定
  const activeViewport = useViewportStore((s) => s.activeViewport);
  const customWidth = useViewportStore((s) => s.customWidth);
  const customHeight = useViewportStore((s) => s.customHeight);
  const getCurrentViewportSize = useViewportStore((s) => s.getCurrentViewportSize);

  const getCanvasSize = useCallback(() => {
    if (activeViewport === 'custom') {
      return { width: customWidth || 1440, height: customHeight || 900 };
    }
    return getCurrentViewportSize();
  }, [activeViewport, customWidth, customHeight, getCurrentViewportSize]);

  const canvasSize = useMemo(() => getCanvasSize(), [getCanvasSize]);

  return (
    <div className="w-full h-full flex items-start justify-center">
      <div
        className="bg-white shadow-lg border border-gray-200 transition-all duration-300"
        style={{
          width: `${canvasSize.width}px`,
          minHeight: `${canvasSize.height}px`,
        }}
      >
        {/* 渲染組件樹 */}
        {componentTree && (
          <CanvasComponent
            component={componentTree}
            getProps={getProps}
            onClick={onComponentClick}
            previewSwap={previewSwap}
          />
        )}
      </div>
    </div>
  );
}
