import React, { useEffect, useMemo, useRef, useState } from 'react'

/**
 * VirtualMasonry - 每欄虛擬化瀑布流（PoC）
 * - 動態 import react-window，避免首屏体積增加
 * - 以固定項高近似（itemHeight）降低複雜度；後續可切換 VariableSizeList + 量測
 */
export function VirtualMasonry({
  items = [],
  columnCount: _columnCount,
  itemHeight = 360,
  listHeight = 800,
  gap = 24,
  renderItem,
}) {
  const containerRef = useRef(null)
  const [ListComp, setListComp] = useState(null)
  const [columnCount, setColumnCount] = useState(_columnCount || 3)

  // 動態載入 react-window（FixedSizeList）
  useEffect(() => {
    let mounted = true
    import('react-window').then((mod) => {
      if (!mounted) return
      const List = mod.FixedSizeList || (mod.default && mod.default.FixedSizeList)
      setListComp(() => List)
    }).catch(() => {})
    return () => { mounted = false }
  }, [])

  // 依視窗寬度推算欄数（若未指定）
  useEffect(() => {
    if (_columnCount) return
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1024) setColumnCount(3)
      else if (w >= 768) setColumnCount(2)
      else setColumnCount(1)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [_columnCount])

  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => [])
    items.forEach((it, i) => { cols[i % columnCount].push(it) })
    return cols
  }, [items, columnCount])

  // Fallback：未載入 List 時使用原始塊級排版
  if (!ListComp) {
    return (
      <div
        ref={containerRef}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
          gap: `${gap}px`,
        }}
      >
        {items.map((it, i) => (
          <div key={it?._uniqueKey || i}>
            {renderItem(it, i)}
          </div>
        ))}
      </div>
    )
  }

  // 虛擬化：每欄一個 List
  return (
    <div
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: `${gap}px`,
      }}
    >
      {columns.map((col, colIdx) => (
        <div key={colIdx}>
          <ListComp
            height={listHeight}
            itemCount={col.length}
            itemSize={itemHeight}
            width={'100%'}
            overscanCount={3}
          >
            {({ index, style }) => (
              <div style={{ ...style, paddingBottom: gap }}>
                {renderItem(col[index], index)}
              </div>
            )}
          </ListComp>
        </div>
      ))}
    </div>
  )
}

export default VirtualMasonry
