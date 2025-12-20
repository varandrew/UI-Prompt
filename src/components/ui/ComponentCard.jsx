import { useState, useEffect, useRef, useMemo, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { LANG_TO_URL } from '../../components/seo/seoConfig';
import DOMPurify from 'dompurify';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { injectAppStylesIntoIframe } from '../../utils/previewCss';
import { useSharedIntersectionObserver } from '../../hooks/useSharedIntersectionObserver';
import { useLazyComponentContent } from '../../hooks/useLazyComponentContent';
import { scheduleIdleCallback } from '../../utils/idleCallbackBatcher';
import appCssUrl from '../../index.css?url';

/**
 * 自定義 props 比較函數
 * 避免不必要的重渲染，只在關鍵 props 變化時才重新渲染
 */
function arePropsEqual(prevProps, nextProps) {
  // 核心識別符
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.categoryId !== nextProps.categoryId) return false;

  // 內容相關 (影響渲染)
  if (prevProps.title !== nextProps.title) return false;
  if (prevProps.description !== nextProps.description) return false;
  if (prevProps.demoHTML !== nextProps.demoHTML) return false;
  if (prevProps.customStyles !== nextProps.customStyles) return false;

  // UI 相關
  if (prevProps.categoryLabel !== nextProps.categoryLabel) return false;
  if (prevProps.categoryIcon !== nextProps.categoryIcon) return false;

  // variants 長度比較（避免深比較）
  const prevVariantsLen = prevProps.variants?.length ?? 0;
  const nextVariantsLen = nextProps.variants?.length ?? 0;
  if (prevVariantsLen !== nextVariantsLen) return false;

  // onCategoryClick 是回調函數，通常穩定，跳過比較

  return true;
}

/**
 * ComponentCard - 組件画廊卡片
 * 显示迷你 iframe 預覽、組件名稱、描述和分类标籤
 *
 * 🚀 性能優化：
 * - 使用 React.memo + 自定義比較函數減少重渲染
 * - 使用 useLazyComponentContent 延遲載入沒有初始內容的組件
 * - 使用 useSharedIntersectionObserver 共享 Observer
 * - 使用 scheduleIdleCallback 批處理空閒回調
 */
function ComponentCardComponent({
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
  const [isDescExpanded, setIsDescExpanded] = useState(false); // Read more 狀態

  // Use shared IntersectionObserver for efficient visibility detection
  const sharedObserverRef = useSharedIntersectionObserver(
    () => setIsIntersecting(true),
    { threshold: 0.1, rootMargin: '300px' }
  );

  // Merge refs: containerRef for other purposes + sharedObserverRef for intersection
  const setRefs = useCallback((node) => {
    containerRef.current = node;
    if (sharedObserverRef) {
      sharedObserverRef.current = node;
    }
  }, [sharedObserverRef]);

  // 🚀 使用批處理器調度空閒回調，降低調度開銷
  useEffect(() => {
    const cancel = scheduleIdleCallback(() => {
      setReadyToInject(true);
    });
    return cancel;
  }, []);

  // 检查是否有多個變体
  const hasVariants = variants && variants.length > 0;
  const variantCount = hasVariants ? variants.length : 0;

  // 判斷是否需要延遲載入內容
  const hasInitialContent = Boolean(demoHTML) || (hasVariants && variants[0]?.demoHTML);
  const shouldLazyLoad = isIntersecting && !hasInitialContent && id && categoryId;

  // 🚀 延遲載入 Demo 內容（當沒有初始內容時）
  const {
    demoHTML: lazyDemoHTML,
    customStyles: lazyCustomStyles,
    isLoading: isLazyLoading
  } = useLazyComponentContent(
    categoryId,
    id,
    variants[0]?.id || 'default',
    shouldLazyLoad
  );

  // 若 demoHTML 為空,优先回退到第一個變体
  const previewVariant = (!demoHTML && hasVariants) ? variants[0] : null;
  // 優先使用傳入的內容，然後是延遲載入的內容
  const effectiveHTML = demoHTML || previewVariant?.demoHTML || lazyDemoHTML || '';
  const effectiveStyles = customStyles || previewVariant?.customStyles || lazyCustomStyles || '';
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
  // 🚀 優化：移除不必要的 setTimeout，依賴 load 事件
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;
    const handleLoad = () => injectAppStylesIntoIframe(iframe);
    iframe.addEventListener('load', handleLoad);
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
    const urlLang = LANG_TO_URL[language] || 'zh';
    navigate(`/${urlLang}/components/${categoryId}/${id}`);
  };

  // 處理分类标籤點擊
  const handleCategoryClick = (e) => {
    e.stopPropagation();
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
  };

  // 截取描述的第一句話 (最多 80 字符)
  // 支持 i18n 對象或字符串格式
  const getI18nText = (text) => {
    if (!text) return '';

    // 如果是 i18n 對象（含有語言鍵），選擇當前語言版本
    if (typeof text === 'object' && text !== null) {
      // 直接使用 language 值（'zh-CN' 或 'en-US'）
      return text[language] || text['zh-CN'] || '';
    }

    // 如果是字符串，直接返回
    return typeof text === 'string' ? text : '';
  };

  const titleText = getI18nText(title);
  const descText = getI18nText(description);

  // 描述長度閾值（中英文不同）
  // 中文字符信息密度更高，所以使用較小的閾值
  // 中文：約 45 字符（約 2-3 行）
  // 英文：約 120 字符（約 2-3 行）
  const DESC_THRESHOLD = language === 'zh-CN' ? 45 : 120;
  const needsTruncation = descText.length > DESC_THRESHOLD;

  // 根據展開狀態決定顯示的描述
  const displayDescription = isDescExpanded
    ? descText
    : (needsTruncation ? descText.slice(0, DESC_THRESHOLD) + '...' : descText);

  // 處理 Read more/Show less 點擊
  const handleReadMoreClick = (e) => {
    e.stopPropagation(); // 阻止觸發卡片點擊
    setIsDescExpanded(!isDescExpanded);
  };

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
      <div ref={setRefs} className="relative w-full h-44 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
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
            {isLazyLoading ? (
              // 正在延遲載入中
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg mb-2" />
                <p className="text-xs text-gray-500 dark:text-gray-400">{t('ui.loading') || 'Loading...'}</p>
              </div>
            ) : isIntersecting && !hasContent ? (
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
          {titleText}
        </h3>

        {/* 描述區域 */}
        <div className="space-y-1">
          <p className={`text-xs text-gray-600 dark:text-gray-300 leading-relaxed ${!isDescExpanded ? 'line-clamp-3' : ''}`}>
            {displayDescription}
          </p>
          {needsTruncation && (
            <button
              onClick={handleReadMoreClick}
              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {isDescExpanded ? t('ui.showLess') || '↑ Show less' : t('ui.readMore') || '→ Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// 🚀 使用 React.memo 包裝組件，配合自定義比較函數
export const ComponentCard = memo(ComponentCardComponent, arePropsEqual);

export default ComponentCard;
