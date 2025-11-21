import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

/**
 * TourGuide - React 化导覽元件（輕量版）
 * 功能：
 * - 以 steps 设定目标元素（以 ref 或 selector）与文案、位置
 * - 自動啟動（autoStart）或以 API 控制（onRequestStart）
 * - 以遮罩 + 高亮框 + 浮层（tooltip）显示步驟
 * 限制：
 * - 仅處理 viewport 內元素，未考慮滾動容器自動滾動
 * - 定位支援 auto/top/bottom/left/right 与組合（top-left、top-right、bottom-left、bottom-right）
 */
export function TourGuide({
  steps = [], // [{ targetRef?, selector?, title, content, placement?: 'auto'|'top'|'bottom'|'left'|'right'|'top-left'|'top-right'|'bottom-left'|'bottom-right' }]
  autoStart = true,
  onClose,
}) {
  const { t } = useLanguage()
  const stepsPrefix = t('tourGuide.stepPrefix')
  const prevLabel = t('tourGuide.prev')
  const nextLabel = t('tourGuide.next')
  const doneLabel = t('tourGuide.done')
  const guideLabel = t('tourGuide.guide')

  const [active, setActive] = useState(autoStart)
  const [stepIndex, setStepIndex] = useState(0)
  const [rect, setRect] = useState(null)
  const overlayRef = useRef(null)

  const current = steps[stepIndex] || null

  const resolveElement = (step) => {
    if (!step) return null
    if (step.targetRef?.current) return step.targetRef.current
    if (step.selector) return document.querySelector(step.selector)
    return null
  }

  const updateRect = () => {
    if (!active) return
    const el = resolveElement(current)
    if (!el) {
      setRect(null)
      return
    }
    const r = el.getBoundingClientRect()
    setRect({ left: r.left, top: r.top, width: r.width, height: r.height })
  }

  // 初始化与步驟切換時重新計算
  useLayoutEffect(() => {
    updateRect()
    // 監聽視窗尺寸改變
    const onResize = () => updateRect()
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onResize, true)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onResize, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, stepIndex])

  useEffect(() => {
    if (!autoStart) return
    setActive(true)
  }, [autoStart])

  if (!active || !current) return null

  const tooltipStyle = () => {
    if (!rect) return { left: 20, top: 20 }
    // 位置：預设為 auto，根据目标靠近視窗边界自動選擇上下与左右；亦支援手動 placement
    const gap = 12
    const placement = (steps[stepIndex]?.placement || 'auto').toLowerCase()
    const vw = window.innerWidth || document.documentElement.clientWidth
    const vh = window.innerHeight || document.documentElement.clientHeight

    // 与視窗边界距離（用於 auto 決策）
    const dist = {
      top: rect.top,
      bottom: Math.max(0, vh - (rect.top + rect.height)),
      left: rect.left,
      right: Math.max(0, vw - (rect.left + rect.width)),
    }

    const pos = {
      topLeft: () => ({ left: Math.max(16, rect.left) - gap, top: rect.top - gap, transform: 'translate(-100%,-100%)' }),
      topRight: () => ({ left: rect.left + rect.width + gap, top: rect.top - gap, transform: 'translateY(-100%)' }),
      bottomLeft: () => ({ left: Math.max(16, rect.left) - gap, top: rect.top + rect.height + gap, transform: 'translateX(-100%)' }),
      bottomRight: () => ({ left: Math.max(16, rect.left), top: rect.top + rect.height + gap }),
      left: () => ({ left: Math.max(16, rect.left) - gap, top: rect.top + rect.height / 2, transform: 'translate(-100%,-50%)' }),
      right: () => ({ left: rect.left + rect.width + gap, top: rect.top + rect.height / 2, transform: 'translateY(-50%)' }),
      top: () => ({ left: Math.max(16, rect.left), top: rect.top - gap, transform: 'translateY(-100%)' }),
      bottom: () => ({ left: Math.max(16, rect.left), top: rect.top + rect.height + gap }),
    }

    // 手動定位优先
    switch (placement) {
      case 'top-left':
        return pos.topLeft()
      case 'top-right':
        return pos.topRight()
      case 'bottom-left':
        return pos.bottomLeft()
      case 'bottom-right':
      case 'bottom':
        return pos.bottom()
      case 'top':
        return pos.top()
      case 'left':
        return pos.left()
      case 'right':
        return pos.right()
    }

    // Auto 規則：
    // - 垂直：更靠近底部 → 放上方；反之放下方
    // - 水平：更靠近右側 → 放左側；反之放右側
    const v = dist.bottom < dist.top ? 'top' : 'bottom'
    const h = dist.right < dist.left ? 'left' : 'right'

    if (v === 'top' && h === 'left') return pos.topLeft()
    if (v === 'top' && h === 'right') return pos.topRight()
    if (v === 'bottom' && h === 'left') return pos.bottomLeft()
    return pos.bottomRight()
  }

  const finish = () => {
    setActive(false)
    setStepIndex(0)
    onClose && onClose()
  }

  const canPrev = stepIndex > 0
  const canNext = stepIndex < steps.length - 1

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[100] pointer-events-none">
      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 高亮框：以外边距阴影方式呈現 */}
      {rect && (
        <div
          className="absolute box-content rounded-lg shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] border-2 border-white transition-all duration-150"
          style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}
        />
      )}

      {/* 浮层（tooltip） */}
      <div
        className="absolute bg-white rounded-lg shadow-xl border p-4 w-[min(420px,90vw)] pointer-events-auto"
        style={tooltipStyle()}
      >
        <div className="text-sm text-gray-500 mb-1">{`${stepsPrefix} ${stepIndex + 1}/${steps.length}`}</div>
        <div className="text-lg font-semibold text-gray-900 mb-1">{current.title}</div>
        {current.content && (
          <div className="text-gray-700 text-sm leading-relaxed mb-3">{current.content}</div>
        )}
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-400">{guideLabel}</div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1.5 rounded border text-sm hover:bg-gray-100 disabled:opacity-40"
              onClick={() => canPrev && setStepIndex(i => i - 1)}
              disabled={!canPrev}
            >
              {prevLabel}
            </button>
            {canNext ? (
              <button
                className="px-3 py-1.5 rounded bg-black text-white text-sm hover:bg-gray-800"
                onClick={() => setStepIndex(i => i + 1)}
              >
                {nextLabel}
              </button>
            ) : (
              <button
                className="px-3 py-1.5 rounded bg-purple-600 text-white text-sm hover:bg-purple-700"
                onClick={finish}
              >
                {doneLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourGuide
