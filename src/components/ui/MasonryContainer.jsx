import React from 'react'
import './Masonry.css'

/**
 * MasonryContainer - CSS columns 瀑布流容器（低風險替代虛擬化）
 * - 使用 column-count 於響應式斷點切換欄数
 * - 子元素需包裹在 .masonry-item 以避免斷裂（break-inside: avoid）
 */
export function MasonryContainer({ children, className = '', columns }) {
  const style = columns ? { columnCount: columns } : undefined
  return (
    <div className={`masonry ${className}`} style={style}> 
      {React.Children.map(children, (child, idx) => (
        <div className="masonry-item" key={child?.key ?? idx}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default MasonryContainer

