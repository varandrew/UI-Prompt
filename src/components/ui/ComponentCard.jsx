import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import DOMPurify from 'dompurify';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { injectAppStylesIntoIframe } from '../../utils/previewCss';
import appCssUrl from '../../index.css?url';

/**
 * ComponentCard - 組件画廊卡片
 * 显示迷你 iframe 預覽、組件名稱、描述和分类标籤
 */
export function ComponentCard({
  id,
  title,
  description,
  demoHTML,
  customStyles = '',
  categoryId,
  categoryIcon = '📦',
  categoryLabel,
  variants = [],  // 新增: 變体数組
  onCategoryClick
}) {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [readyToInject, setReadyToInject] = useState(false); // requestIdleCallback 双條件
  const [hasInjected, setHasInjected] = useState(false); // 避免重複注入

  // Intersection Observer for lazy loading (observe the container so it's always present)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1, rootMargin: '300px' }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // 在瀏覽器空閒時标記可注入，降低主线阻塞
  useEffect(() => {
    let idleId = null;
    let timeoutId = null;
    const run = () => setReadyToInject(true);
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      // @ts-ignore - 兼容非 TS 環境
      idleId = window.requestIdleCallback(run, { timeout: 300 });
    } else {
      timeoutId = setTimeout(run, 120);
    }
    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // 检查是否有多個變体
  const hasVariants = variants && variants.length > 0;
  const variantCount = hasVariants ? variants.length : 0;
  // 若 demoHTML 為空,优先回退到第一個變体
  const previewVariant = (!demoHTML && hasVariants) ? variants[0] : null;
  const effectiveHTML = previewVariant?.demoHTML || demoHTML || '';
  const effectiveStyles = (customStyles || previewVariant?.customStyles || '');
  const hasContent = Boolean(effectiveHTML);

  // 預先組裝並快取 iframe 內容，減少重複計算
  const memoIframeContent = useMemo(() => {
    if (!hasContent) return '';
    const translatedHTML = getDemoHTML(effectiveHTML, language);
    const sanitizedHTML = DOMPurify.sanitize(translatedHTML);
    const sanitizedStyles = effectiveStyles ? DOMPurify.sanitize(effectiveStyles) : '';
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- 使用已編譯的應用 CSS，確保 Tailwind 与自定義樣式在 iframe 中生效 -->
          <link rel="stylesheet" href="${appCssUrl}" />
          <style>
            body { margin: 0; padding: 16px; overflow: hidden; transform-origin: top left; }
            ${sanitizedStyles}
          </style>
        </head>
        <body>
          ${sanitizedHTML}
        </body>
      </html>`;
  }, [hasContent, effectiveHTML, effectiveStyles, language]);

  // 渲染 iframe 內容 (双條件：進入視窗 + 空閒可注入)
  useEffect(() => {
    if (!isIntersecting || !readyToInject || !iframeRef.current || !memoIframeContent || hasInjected === true) return;
    const iframe = iframeRef.current;
    try {
      iframe.srcdoc = memoIframeContent;
      setHasInjected(true);
    } catch {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(memoIframeContent);
          doc.close();
          setHasInjected(true);
        }
      } catch {
        // ignore
      }
    }
  }, [isIntersecting, readyToInject, memoIframeContent, hasInjected]);

  // 在 iframe 載入後注入主應用樣式（避免使用 CDN）
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;
    const handleLoad = () => injectAppStylesIntoIframe(iframe);
    iframe.addEventListener('load', handleLoad);
    // 嘗試立即注入（某些瀏覽器 srcdoc 设定後同步可用）
    setTimeout(() => {
      try { injectAppStylesIntoIframe(iframe); } catch {
        // Ignore injection errors
      }
    }, 0);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [memoIframeContent]);

  // 內容/語言變更時允許重新注入
  useEffect(() => {
    setHasInjected(false);
  }, [memoIframeContent]);

  // 處理卡片點擊 - 导航至詳情页
  const handleCardClick = (e) => {
    // 避免點擊分类标籤時觸發
    if (e.target.closest('.category-badge')) return;
    navigate(`/components/${categoryId}/${id}`);
  };

  // 處理分类标籤點擊
  const handleCategoryClick = (e) => {
    e.stopPropagation();
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
  };

  // 截取描述的第一句話 (最多 80 字符)
  const briefDescription = description
    ? description.split(/[。.]/)[0].slice(0, 80) + (description.length > 80 ? '...' : '')
    : '';

  return (
    <div
      className={`
        group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer
        transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600
        ${isHovered ? 'scale-[1.02]' : 'scale-100'}
      `}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 迷你 iframe 預覽区域 */}
      <div ref={containerRef} className="relative w-full h-44 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* 變体数量徽章 (右上角) */}
        {hasVariants && (
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold shadow-md">
              <span>{variantCount}</span>
              <span>✨</span>
            </span>
          </div>
        )}

        {isIntersecting && hasContent ? (
          <iframe
            ref={iframeRef}
            title={`${title}-preview`}
            className="w-full h-full border-0 pointer-events-none"
            style={{
              transform: 'scale(0.65)',
              transformOrigin: 'top left',
              width: '154%',
              height: '154%'
            }}
            sandbox="allow-same-origin allow-scripts allow-forms"
            scrolling="no"
            loading="lazy"
          />
        ) : (
          // 加載佔位符
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            {isIntersecting && !hasContent ? (
              <div className="text-center px-4">
                <div className="mb-2 text-2xl">🧪</div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{t('ui.noInlineDemo')}</p>
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg" />
              </div>
            )}
          </div>
        )}

        {/* Hover 遮罩提示 */}
        <div
          className={`
            absolute inset-0 bg-black/0 dark:bg-white/0 group-hover:bg-black/10 dark:group-hover:bg-white/10
            flex items-center justify-center
            transition-all duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {t('ui.clickForDetails')}
            </span>
          </div>
        </div>
      </div>

      {/* 內容区域 */}
      <div className="p-4 space-y-2">
        {/* 分类徽章 */}
        <button
          onClick={handleCategoryClick}
          className="category-badge inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
        >
          <span>{categoryIcon}</span>
          <span>{categoryLabel}</span>
        </button>

        {/* 組件标題 */}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h3>

        {/* 简短描述 */}
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
          {briefDescription}
        </p>
      </div>
    </div>
  );
}

export default ComponentCard;
