import { useMemo } from 'react';
import { useCanvasStore, useSelectionStore } from '../../stores';
import { findComponentById } from '../../stores/utils/componentHelpers';

/**
 * 专用工具箱（SpecialToolbox）
 *
 * 適用：當前選中組件不支援完整屬性面板時，提供退化但實用的工具集合。
 * - 显示基本資訊（ID、型別）
 * - 提供通用動作（刪除）
 * - 針對 Page（根節點）提供简化设定（背景色、最小高度）
 */
export function SpecialToolbox() {
  // 使用模塊化 Store
  const componentTree = useCanvasStore((s) => s.componentTree);
  const componentProps = useCanvasStore((s) => s.componentProps);
  const updateBaseProps = useCanvasStore((s) => s.updateBaseProps);
  const deleteComponent = useCanvasStore((s) => s.deleteComponent);
  const selectedComponentId = useSelectionStore((s) => s.selectedComponentId);

  const node = useMemo(() => findComponentById(componentTree, selectedComponentId), [componentTree, selectedComponentId]);
  const props = componentProps?.[selectedComponentId];
  if (!node || !props) return null;

  const isRootPage = node.componentType === 'Page' && node.id === 'root';

  const handleStyleChange = (field, value) => {
    const current = props?.baseProps?.style || {};
    updateBaseProps(selectedComponentId, {
      style: {
        ...current,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* 基本資訊 */}
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">专用工具箱</h3>
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
          <div className="flex items-center justify-between">
            <span>組件型別</span>
            <span className="font-mono">{node.componentType}</span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span>組件 ID</span>
            <span className="font-mono truncate max-w-[160px]" title={node.id}>{node.id}</span>
          </div>
          <p className="mt-2 text-[11px] text-gray-500">
            此組件暫未支援完整屬性編輯；以下提供简化设定与通用操作。
          </p>
        </div>
      </section>

      {/* Page 专屬：最小高度 / 背景色 */}
      {isRootPage && (
        <section className="space-y-3">
          <h4 className="text-xs font-semibold text-gray-600">页面设定</h4>
          <div className="space-y-2">
            <label className="block text-xs text-gray-600">背景颜色</label>
            <input
              type="color"
              value={props?.baseProps?.style?.backgroundColor || '#FFFFFF'}
              onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
              className="h-9 w-16 cursor-pointer rounded border border-gray-200 bg-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs text-gray-600">最小高度（px）</label>
            <input
              type="number"
              min={0}
              step={10}
              value={Number.parseInt(props?.baseProps?.style?.minHeight, 10) || 0}
              onChange={(e) => {
                const v = Number.parseInt(e.target.value, 10);
                const val = Number.isFinite(v) ? `${v}px` : undefined;
                handleStyleChange('minHeight', val);
              }}
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              placeholder="例如：800"
            />
          </div>
        </section>
      )}

      {/* 通用操作 */}
      <section className="space-y-2">
        <h4 className="text-xs font-semibold text-gray-600">通用操作</h4>
        <div className="flex items-center gap-2">
          <button
            className="rounded bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 disabled:opacity-50"
            disabled={isRootPage}
            onClick={() => deleteComponent(selectedComponentId)}
            title={isRootPage ? '根页面不可刪除' : '刪除選中組件'}
          >
            刪除
          </button>
          {/* 預留更多操作：複製、包裹為容器、轉換类型等 */}
          <button
            className="rounded px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 hover:bg-gray-50"
            disabled
            title="即將提供：包裹為 Flex 容器以啟用更多布局屬性"
          >
            包裹為容器（即將提供）
          </button>
        </div>
        <p className="text-[11px] text-gray-500">
          小提示：對於不支援的組件，建議先用容器（Flex/Grid）包裹，再調整間距与對齊。
        </p>
      </section>
    </div>
  );
}
