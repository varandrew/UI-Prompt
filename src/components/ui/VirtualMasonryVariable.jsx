import React, { useEffect, useMemo, useRef, useState, useCallback, memo } from 'react'
import { useWindowSize, calculateListHeight } from '../../hooks/useWindowSize'

// Maximum entries in sizeMap to prevent memory leaks
const MAX_SIZE_MAP_ENTRIES = 500

/**
 * VirtualMasonryVariable - 每欄虛擬化（可變項高）PoC
 * - 動態 import react-window 的 VariableSizeList，避免首屏体積增加
 * - 以 ResizeObserver 度量每個 item 高度，並呼叫 resetAfterIndex
 * - 若未載入/不支援時，回退為简單的 CSS Grid 佈局
 * - 動態高度根據視窗大小自動調整
 * - sizeMap 有上限防止記憶體洩漏
 */
export function VirtualMasonryVariable({
  items = [],
  columnCount: _columnCount,
  defaultItemHeight = 380,
  listHeight: propListHeight,
  gap = 24,
  renderItem,
  heightOffset = 112  // Header (64px) + padding (48px)
}) {
  // Dynamic height calculation based on window size
  const { height: windowHeight } = useWindowSize()
  const dynamicListHeight = propListHeight ?? calculateListHeight(windowHeight, heightOffset, 600)
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

  // 回退：未載入 VarList 時使用简單 Grid（使用相同的 columns 分配逻辑）
  if (!VarList) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`, gap }}>
        {columns.map((col, colIdx) => (
          <div key={colIdx}>
            {col.map((it, itemIdx) => (
              <div key={it?._uniqueKey || itemIdx} style={{ marginBottom: gap }}>
                {renderItem(it, itemIdx)}
              </div>
            ))}
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
          listHeight={dynamicListHeight}
          gap={gap}
          VarList={VarList}
        />
      ))}
    </div>
  )
}

// Extracted Row component for stable react-window reference
const Row = memo(function Row({ data, index, style }) {
  const { items, renderItem, gap, setSize } = data;
  return (
    <div style={{ ...style, paddingBottom: gap }}>
      <Measured onSize={(h) => setSize(index, h)}>
        {renderItem(items[index], index)}
      </Measured>
    </div>
  );
});

function ColumnVariable({ items, renderItem, defaultItemHeight, listHeight, gap, VarList }) {
  const sizeMapRef = useRef(new Map())
  const listRef = useRef(null)

  const getSize = useCallback((index) => {
    const v = sizeMapRef.current.get(index)
    return typeof v === 'number' && v > 0 ? v + gap : defaultItemHeight + gap
  }, [gap, defaultItemHeight])

  const setSize = useCallback((index, size) => {
    const prev = sizeMapRef.current.get(index)
    if (prev !== size) {
      // LRU-style cleanup: remove oldest entry when exceeding limit
      if (sizeMapRef.current.size >= MAX_SIZE_MAP_ENTRIES && !sizeMapRef.current.has(index)) {
        const firstKey = sizeMapRef.current.keys().next().value
        sizeMapRef.current.delete(firstKey)
      }
      sizeMapRef.current.set(index, size)
      if (listRef.current && typeof listRef.current.resetAfterIndex === 'function') {
        listRef.current.resetAfterIndex(index)
      }
    }
  }, [])

  // Memory cleanup: clear stale entries when items shrink
  const prevLengthRef = useRef(items.length);
  useEffect(() => {
    if (items.length < prevLengthRef.current) {
      for (let i = items.length; i < prevLengthRef.current; i++) {
        sizeMapRef.current.delete(i);
      }
    }
    prevLengthRef.current = items.length;
  }, [items.length]);

  // Memoize itemData for stable Row props
  const itemData = useMemo(() => ({
    items,
    renderItem,
    gap,
    setSize
  }), [items, renderItem, gap, setSize]);

  return (
    <VarList
      ref={listRef}
      height={listHeight}
      itemCount={items.length}
      itemSize={getSize}
      width={'100%'}
      overscanCount={3}
      itemData={itemData}
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
