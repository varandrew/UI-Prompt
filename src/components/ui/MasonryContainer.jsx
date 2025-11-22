import React, { useMemo } from 'react'
import './Masonry.css'

/**
 * MasonryContainer - Grid 瀑布流容器（水平填充）
 * - 使用 Grid 布局实现水平填充（每行连续）
 * - 不再使用 CSS columns（会导致垂直填充）
 */
export function MasonryContainer({ children, className = '', columns = 3, gap = 32 }) {
  const childArray = useMemo(() => React.Children.toArray(children), [children])

  const columnArrays = useMemo(() => {
    const cols = Array.from({ length: columns }, () => [])
    childArray.forEach((child, i) => {
      cols[i % columns].push(child)
    })
    return cols
  }, [childArray, columns])

  return (
    <div
      className={`masonry ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap}px`
      }}
    >
      {columnArrays.map((col, colIdx) => (
        <div key={colIdx}>
          {col.map((child, itemIdx) => (
            <div key={child.key || itemIdx} className="masonry-item" style={{ marginBottom: `${gap}px` }}>
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MasonryContainer

