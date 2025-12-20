import { useEffect, useMemo, useRef, useState, memo } from 'react';

/**
 * VirtualGrid - 虛擬化固定高度 Grid 組件
 *
 * 專為 ComponentCard 等固定高度卡片設計的虛擬滾動組件
 * - 動態 import react-window 的 FixedSizeList，避免首屏体積增加
 * - 將 Grid 轉換為行列表，每行渲染多個卡片
 * - 響應式 column 計算
 *
 * 🚀 性能優化：
 * - 僅渲染可見區域的行
 * - 使用 overscanCount 預渲染上下各 2 行
 * - 固定行高避免 ResizeObserver 開銷
 *
 * @module components/ui/VirtualGrid
 */

// Extracted Row component for stable react-window reference
const GridRow = memo(function GridRow({ index, style, data }) {
  const { rows, renderItem, gap, columnCount } = data;
  const rowItems = rows[index] || [];

  return (
    <div
      style={{
        ...style,
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: gap,
        paddingBottom: gap
      }}
    >
      {rowItems.map((item, colIdx) => (
        <div key={item._uniqueKey || `${index}-${colIdx}`}>
          {renderItem(item, index * columnCount + colIdx)}
        </div>
      ))}
      {/* 填充空白格子以保持網格對齊 */}
      {rowItems.length < columnCount && Array.from({ length: columnCount - rowItems.length }).map((_, i) => (
        <div key={`empty-${i}`} aria-hidden="true" />
      ))}
    </div>
  );
});

/**
 * VirtualGrid 主組件
 *
 * @param {Object} props
 * @param {Array} props.items - 要渲染的項目列表
 * @param {Function} props.renderItem - 渲染單個項目的函數 (item, index) => ReactNode
 * @param {number} [props.itemHeight=280] - 每個項目的固定高度（不含 gap）
 * @param {number} [props.gap=24] - 項目間距
 * @param {Object} [props.breakpoints] - 自定義斷點配置
 * @param {number} [props.listHeight=800] - 虛擬列表容器高度
 * @param {number} [props.threshold=20] - 開啟虛擬化的項目數閾值
 */
export function VirtualGrid({
  items = [],
  renderItem,
  itemHeight = 280,
  gap = 24,
  breakpoints = {
    // 對應 Tailwind 的 grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    default: 2,
    768: 3,   // md
    1024: 4   // lg
  },
  listHeight = 800,
  threshold = 20
}) {
  const [FixedSizeList, setFixedSizeList] = useState(null);
  const [columnCount, setColumnCount] = useState(breakpoints.default || 2);
  const containerRef = useRef(null);

  // 動態載入 react-window
  useEffect(() => {
    let mounted = true;
    import('react-window').then((mod) => {
      if (!mounted) return;
      const List = mod.FixedSizeList || (mod.default && mod.default.FixedSizeList);
      setFixedSizeList(() => List);
    }).catch(() => {
      // react-window 加載失敗，使用回退
    });
    return () => { mounted = false; };
  }, []);

  // 響應式列數計算
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      const sortedBreakpoints = Object.entries(breakpoints)
        .filter(([key]) => key !== 'default')
        .map(([key, value]) => [parseInt(key, 10), value])
        .sort((a, b) => b[0] - a[0]);

      let cols = breakpoints.default || 2;
      for (const [breakpoint, colCount] of sortedBreakpoints) {
        if (width >= breakpoint) {
          cols = colCount;
          break;
        }
      }
      setColumnCount(cols);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [breakpoints]);

  // 將 items 分組為行
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += columnCount) {
      result.push(items.slice(i, i + columnCount));
    }
    return result;
  }, [items, columnCount]);

  // 計算行高（項目高度 + 間距）
  const rowHeight = itemHeight + gap;

  // Memoize itemData for stable GridRow props
  const itemData = useMemo(() => ({
    rows,
    renderItem,
    gap,
    columnCount
  }), [rows, renderItem, gap, columnCount]);

  // 回退：未載入 FixedSizeList 或項目太少時使用普通 Grid
  if (!FixedSizeList || items.length <= threshold) {
    return (
      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap }}
      >
        {items.map((item, index) => (
          <div key={item._uniqueKey || index}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <FixedSizeList
        height={listHeight}
        itemCount={rows.length}
        itemSize={rowHeight}
        width="100%"
        overscanCount={2}
        itemData={itemData}
      >
        {GridRow}
      </FixedSizeList>
    </div>
  );
}

export default VirtualGrid;
