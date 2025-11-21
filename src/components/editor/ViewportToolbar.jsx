import { useViewportStore } from '../../stores';

/**
 * 视口切換工具欄
 *
 * 设計: 極简主義
 * - 清晰的圖标按鈕
 * - 當前狀態高亮
 * - 自定義尺寸輸入
 */
export function ViewportToolbar() {
  const { activeViewport, customWidth, customHeight, setViewport, setCustomDimensions } = useViewportStore();

  const viewports = [
    { id: 'desktop', label: '桌面', icon: '🖥️', width: 1440 },
    { id: 'tablet', label: '平板', icon: '📱', width: 768 },
    { id: 'mobile', label: '移动', icon: '📱', width: 375 },
    { id: 'custom', label: '自定', icon: '⚙️' }
  ];

  return (
    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
      {viewports.map((viewport) => (
        <button
          key={viewport.id}
          onClick={() => { if (viewport.id !== activeViewport) setViewport(viewport.id); }}
          className={`
            px-3 py-1.5 rounded-md text-sm font-medium transition-all
            ${activeViewport === viewport.id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }
          `}
          aria-label={`切换到${viewport.label}视口`}
          aria-pressed={activeViewport === viewport.id}
        >
          <span className="mr-1.5">{viewport.icon}</span>
          {viewport.label}
          {viewport.width && (
            <span className="ml-1.5 text-xs text-gray-400">{viewport.width}px</span>
          )}
        </button>
      ))}

      {/* 自定義尺寸 */}
      {activeViewport === 'custom' && (
        <div className="flex items-center gap-1 ml-2">
          <input
            type="number"
            value={customWidth ?? ''}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              setCustomDimensions(Number.isFinite(v) ? v : null, customHeight);
            }}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded"
            placeholder="宽"
          />
          <span className="text-gray-400">×</span>
          <input
            type="number"
            value={customHeight ?? ''}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              setCustomDimensions(customWidth, Number.isFinite(v) ? v : null);
            }}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded"
            placeholder="高"
          />
        </div>
      )}
    </div>
  );
}
