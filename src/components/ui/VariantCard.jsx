import { useState, useEffect, useRef, useMemo } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { useI18nText } from '../../hooks/useI18nText'
import { translateHTML } from "../../utils/i18n/translations"
import DOMPurify from 'dompurify'
import { injectAppStylesIntoIframe } from '../../utils/previewCss'
import { useSharedIntersectionObserver } from '../../hooks/useSharedIntersectionObserver'
import appCssUrl from '../../index.css?url'

/**
 * VariantCard - 單個組件變体卡片（重建）
 * 目标：移除 Tailwind CDN，改為注入主應用已編譯之 CSS 到 iframe
 */
export function VariantCard({
  variant,
  index,
  onGetPrompt, // Prompt 功能（必需）
  onPreview    // 預覽功能（可選）
}) {
  const { language, t } = useLanguage()
  const resolveText = useI18nText()
  const iframeRef = useRef(null)
  const containerRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [cardSize] = useState('normal') // 'small' | 'normal' | 'large'
  const [readyToInject, setReadyToInject] = useState(false)
  const [hasInjected, setHasInjected] = useState(false)

  // Use shared IntersectionObserver for efficient visibility detection
  const sharedObserverRef = useSharedIntersectionObserver(
    () => setIsIntersecting(true),
    { threshold: 0.01, rootMargin: '300px' }
  )

  // Since containerRef is only used for intersection, directly use sharedObserverRef
  // Update: keep containerRef for potential future use, but use sharedObserverRef for DOM
  useEffect(() => {
    if (sharedObserverRef.current) {
      containerRef.current = sharedObserverRef.current
    }
  }, [sharedObserverRef])

  // 空閒時允許注入，降低主线阻塞
  useEffect(() => {
    let idleId = null
    let timeoutId = null
    const run = () => setReadyToInject(true)
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      // @ts-ignore
      idleId = window.requestIdleCallback(run, { timeout: 300 })
    } else {
      timeoutId = setTimeout(run, 120)
    }
    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  // 預先組裝 iframe 文档（不含 CDN，由父页注入樣式）
  const memoIframeContent = useMemo(() => {
    if (!variant?.demoHTML) return ''
    const translatedHTML = translateHTML(variant.demoHTML, language)
    const sanitizedHTML = DOMPurify.sanitize(translatedHTML)
    const sanitizedStyles = variant.customStyles ? DOMPurify.sanitize(variant.customStyles) : ''
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- 使用已編譯的應用 CSS，確保 Tailwind 与自定義樣式在 iframe 中生效 -->
          <link rel="stylesheet" href="${appCssUrl}" />
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; padding: 16px; overflow-x: hidden; overflow-y: auto; min-height: 100px; max-height: 600px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; }
            body > * { max-width: 100%; width: fit-content; }
            @media (max-width: 500px) { body > * { transform: scale(0.85); transform-origin: center center; } }
            /* 简易备援樣式（Tailwind 未注入時仍可閱讀） */
            ol, ul { list-style: none !important; padding: 0 !important; margin: 0 !important; }
            .flex { display: flex !important; }
            .items-center { align-items: center !important; }
            .justify-center { justify-content: center !important; }
            .gap-2 { gap: 0.5rem !important; }
            .text-sm { font-size: 0.875rem !important; line-height: 1.25rem !important; }
          </style>
        </head>
        <body>
          ${sanitizedHTML}
          <style>${sanitizedStyles}</style>
        </body>
      </html>`
  }, [variant?.demoHTML, variant?.customStyles, language])

  // 写入 iframe 文档（需同時滿足進入視窗 + 空閒可注入）
  useEffect(() => {
    if (!isIntersecting || !readyToInject || !iframeRef.current || !memoIframeContent || hasInjected) return
    const iframe = iframeRef.current
    try {
      iframe.srcdoc = memoIframeContent
      setHasInjected(true)
    } catch {
      const doc = iframe.contentDocument || iframe.contentWindow?.document
      if (doc) {
        doc.open()
        doc.write(memoIframeContent)
        doc.close()
        setHasInjected(true)
      }
    }
  }, [isIntersecting, readyToInject, memoIframeContent, hasInjected])

  // 載入後注入主應用樣式
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return undefined
    const handleLoad = () => injectAppStylesIntoIframe(iframe)
    iframe.addEventListener('load', handleLoad)
    // 嘗試立即注入（部分瀏覽器 srcdoc 设定後同步可用）
    setTimeout(() => { 
      try { injectAppStylesIntoIframe(iframe); } catch {
        // Ignore injection errors
      }
    }, 0)
    return () => iframe.removeEventListener('load', handleLoad)
  }, [memoIframeContent])

  // 內容/語言變更時允許重新注入
  useEffect(() => { setHasInjected(false) }, [memoIframeContent])

  return (
    <div
      ref={sharedObserverRef}
      className={`
        variant-card-${cardSize}
        bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden
        transition-all duration-300
        ${isHovered ? 'shadow-lg dark:shadow-gray-900/50 border-gray-300 dark:border-gray-600' : 'shadow-sm dark:shadow-gray-900/20'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 标題欄 */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          {index + 1}. {resolveText(variant.name)}
        </h3>
        {/* 描述 */}
        {variant.description && (
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            {resolveText(variant.description)}
          </p>
        )}
      </div>

      {/* 預覽区域 */}
      <div className="px-4 pb-4">
        <div
          className={`
            bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden
            min-h-[200px] max-h-[600px] flex items-center justify-center
            ${onPreview ? 'cursor-pointer hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all duration-200 relative group' : ''}
          `}
          onClick={onPreview ? () => onPreview(variant, index) : undefined}
          title={onPreview ? t('ui.clickToPreview') : undefined}
        >
          {/* 懸停遮罩层（仅在有預覽功能時显示） */}
          {onPreview && (
            <div className="absolute inset-0 bg-black/0 dark:bg-white/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-200 pointer-events-none z-10 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          )}

          {variant?.reactComponent ? (
            (() => {
              const ReactComp = variant.reactComponent
              return (
                <div className="w-full" style={{ minHeight: '200px', maxHeight: '600px', pointerEvents: 'none' }}>
                  <ReactComp autoStart={false} mode="card" />
                </div>
              )
            })()
          ) : isIntersecting ? (
            <iframe
              ref={iframeRef}
              title={`variant-${variant?.id || index}`}
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{ minHeight: '200px', maxHeight: '600px' }}
            />
          ) : (
            // 加載佔位符
            <div className="w-full py-8 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin w-8 h-8 border-4 border-purple-200 dark:border-purple-800 border-t-purple-600 dark:border-t-purple-400 rounded-full" />
                <span className="text-xs text-gray-500 dark:text-gray-400">{t('common.loading')}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 操作按鈕 - 仅显示 Prompt */}
      <div className="px-4 pb-4">
        {onGetPrompt && (
          <button
            onClick={() => onGetPrompt(variant)}
            className="w-full px-4 py-2.5 bg-black dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{t('buttons.getPrompt')}</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default VariantCard
