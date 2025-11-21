/**
 * 對齊輔助线 Overlay（简化版）
 * 固定定位於視窗，根据傳入的水平/垂直线座标繪製參考线。
 */
export function GuidesOverlay({ v = [], h = [] }) {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
      {v.map((x, i) => (
        <div
          key={`v-${i}`}
          style={{ position: 'fixed', top: 0, bottom: 0, left: `${x}px`, width: 1, background: 'rgba(59,130,246,0.6)' }}
        />
      ))}
      {h.map((y, i) => (
        <div
          key={`h-${i}`}
          style={{ position: 'fixed', left: 0, right: 0, top: `${y}px`, height: 1, background: 'rgba(59,130,246,0.6)' }}
        />
      ))}
    </div>
  );
}

