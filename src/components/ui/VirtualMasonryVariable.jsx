import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'

/**
 * VirtualMasonryVariable - 每欄虛擬化（可變項高）PoC
 * - 動態 import react-window 的 VariableSizeList，避免首屏体積增加
 * - 以 ResizeObserver 度量每個 item 高度，並呼叫 resetAfterIndex
 * - 若未載入/不支援時，回退為简單的 CSS Grid 佈局
 */
export function VirtualMasonryVariable({
  items = [],
  columnCount: _columnCount,
  defaultItemHeight = 380,
  listHeight = 900,
  gap = 24,
  renderItem,
}) {
  const [VarList, setVarList] = useState(null)
  const [columnCount, setColumnCount] = useState(_columnCount || 3)

  useEffect(() => {
    let mounted = true
    import('react-window').then((mod) => {
      if (!mounted) return
      const V = mod.VariableSizeList || (mod.default && mod.default.VariableSizeList)
      setVarList(() => V)
    }).catch(() => {})
    return () => { mounted = false }
  }, [])

  // 依視窗寬度推算欄数（未指定時）
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

  // 回退：未載入 VarList 時使用简單 Grid
  if (!VarList) {
    return (
      <div
        className="masonry"
        style={{ columnCount, columnGap: gap }}
      >
        {items.map((it, i) => (
          <div className="masonry-item" key={it?._uniqueKey || i}>
            {renderItem(it, i)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`, gap }}>
      {columns.map((col, colIdx) => (
        <ColumnVariable
          key={colIdx}
          items={col}
          renderItem={renderItem}
          defaultItemHeight={defaultItemHeight}
          listHeight={listHeight}
          gap={gap}
          VarList={VarList}
        />
      ))}
    </div>
  )
}

function ColumnVariable({ items, renderItem, defaultItemHeight, listHeight, gap }) {
  const sizeMapRef = useRef(new Map())
  const listRef = useRef(null)

  const getSize = useCallback((index) => {
    const v = sizeMapRef.current.get(index)
    return typeof v === 'number' && v > 0 ? v + gap : defaultItemHeight + gap
  }, [gap, defaultItemHeight])

  const setSize = useCallback((index, size) => {
    const prev = sizeMapRef.current.get(index)
    if (prev !== size) {
      sizeMapRef.current.set(index, size)
      if (listRef.current && typeof listRef.current.resetAfterIndex === 'function') {
        listRef.current.resetAfterIndex(index)
      }
    }
  }, [])

  const Row = ({ index, style }) => {
    return (
      <div style={{ ...style, paddingBottom: gap }}>
        <Measured onSize={(h) => setSize(index, h)}>
          {renderItem(items[index], index)}
        </Measured>
      </div>
    )
  }

  return (
    <VarList
      ref={listRef}
      height={listHeight}
      itemCount={items.length}
      itemSize={getSize}
      width={'100%'}
      overscanCount={3}
    >
      {Row}
    </VarList>
  )
}

function Measured({ children, onSize }) {
  const ref = useRef(null)
  const rafRef = useRef(null) // 🚀 性能优化：使用 requestAnimationFrame 批量處理尺寸更新
  const lastHeightRef = useRef(0) // 🚀 性能优化：記录上次高度，避免重複更新

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const ro = new ResizeObserver((entries) => {
      // 🚀 性能优化：取消之前的 RAF，避免多次更新
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // 🚀 性能优化：使用 RAF 批量處理，在瀏覽器下一幀更新
      rafRef.current = requestAnimationFrame(() => {
        for (const entry of entries) {
          const h = entry.contentRect?.height || el.offsetHeight || 0
          // 🚀 性能优化：只有高度變化超過 1px 才更新，避免微小變化觸發重排
          if (h > 0 && Math.abs(h - lastHeightRef.current) > 1) {
            lastHeightRef.current = h
            onSize(h)
          }
        }
      })
    })

    ro.observe(el)

    // 初次測量
    const initialHeight = el.offsetHeight || 0
    if (initialHeight > 0) {
      lastHeightRef.current = initialHeight
      onSize(initialHeight)
    }

    return () => {
      ro.disconnect()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [onSize])

  return <div ref={ref}>{children}</div>
}

export default VirtualMasonryVariable
