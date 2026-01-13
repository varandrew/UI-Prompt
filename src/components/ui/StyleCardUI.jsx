import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Sparkles, Layers, Eye } from 'lucide-react';
import { getTagLabel } from '../../data/metadata/categoryMetadata';

/**
 * StyleCardUI - 純 UI 展示組件（重新設計版）
 *
 * 職責：
 * - 渲染卡片的所有 UI 元素
 * - 無業務邏輯，所有數據從 props 接收
 * - 無狀態管理，僅處理用戶交互事件
 *
 * @param {Object} props
 * @param {string} props.title - 必需：標題
 * @param {string} props.description - 必需：描述
 * @param {string} props.primaryCategoryLabel - 可選：主分類標籤文本
 * @param {number} props.templatesCount - 可選：模板數量
 * @param {Array} props.tags - 可選：標籤數組
 * @param {function} props.onTagClick - 可選：標籤點擊處理函數
 * @param {function} props.onGetPrompt - 必需：Get Prompt 按鈕點擊處理
 * @param {function} props.onPreview - 必需：Preview 按鈕點擊處理
 * @param {string} props.language - 必需：當前語言（zh-CN | en-US）
 * @param {function} props.t - 必需：翻譯函數
 */
export function StyleCardUI({
  title,
  description,
  primaryCategoryLabel = null,
  tags = [],
  onTagClick,
  onGetPrompt,
  onPreview,
  language,
  t
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  // Check if description exceeds 5 lines
  // Using fixed line height to avoid synchronous getComputedStyle layout reflow
  useEffect(() => {
    if (!descriptionRef.current) return;

    // text-sm (14px) * leading-relaxed (1.625) ≈ 22.75px, rounded to 23
    const LINE_HEIGHT = 23;
    const MAX_LINES = 5;

    const checkOverflow = () => {
      const element = descriptionRef.current;
      if (!element) return;
      const lines = Math.ceil(element.scrollHeight / LINE_HEIGHT);
      setIsOverflowing(lines > MAX_LINES);
    };

    // Use RAF to batch with browser paint cycle and avoid layout thrashing
    requestAnimationFrame(checkOverflow);
  }, [description]);

  return (
    <div
      className="p-5 flex flex-col gap-4"
    >
      {/* Header: Category Tag and Title */}
      <div className="space-y-1.5">
        {/* Category Tag (Left aligned) */}
        <div className="flex items-center justify-between mb-2">
          {primaryCategoryLabel && (
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 px-2 py-0.5 rounded-full">
              <Layers size={12} />
              {primaryCategoryLabel}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        {/* Description with Read More toggle */}
        <div className="space-y-2">
          <p
            ref={descriptionRef}
            className={`text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed transition-all duration-300 ${
              isExpanded ? '' : 'line-clamp-5'
            }`}
          >
            {description}
          </p>

          {/* Read More / Read Less button */}
          {isOverflowing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-default"
              onClick={() => onTagClick?.(tag)}
              role={onTagClick ? 'button' : undefined}
              tabIndex={onTagClick ? 0 : undefined}
            >
              {getTagLabel(tag, language)}
            </span>
          ))}
        </div>
      )}

      {/* Actions - Preview and Prompt buttons */}
      <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800">
        <button
          onClick={onPreview}
          className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold py-2 rounded-lg hover:bg-zinc-800 dark:hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <Eye size={16} />
          <span>{t('buttons.preview')}</span>
        </button>

        <button
          onClick={onGetPrompt}
          className="flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold py-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 group/btn"
        >
          <Sparkles size={16} className="text-zinc-400 group-hover/btn:text-yellow-500 transition-colors" />
          <span>{t('buttons.prompt')}</span>
        </button>
      </div>
    </div>
  );
}

/**
 * StyleCardContainer - 卡片容器組件（重新設計版）
 *
 * 職責：
 * - 提供卡片外層容器
 * - 包含 demo 區域和內容區域
 * - 包含玻璃態模板計數徽章
 * - 包含預覽區域的網格圖案覆蓋
 * - CLS Optimized: Fixed dimensions to prevent layout shift
 *
 * @param {Object} props
 * @param {React.ReactNode} props.demoContent - 必需：demo 區域內容（IframeRenderer 或 JSXCompiler）
 * @param {React.ReactNode} props.uiContent - 必需：UI 內容（StyleCardUI）
 * @param {React.Ref} props.cardRef - 可選：卡片容器的 ref
 * @param {number} props.templatesCount - 可選：模板數量
 */
export function StyleCardContainer({
  demoContent,
  uiContent,
  cardRef,
  templatesCount = 0
}) {
  return (
    <div
      ref={cardRef}
      className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-black/70 hover:border-zinc-300 dark:hover:border-zinc-700 w-full style-card"
    >
      {/* Glassmorphism Template Badge - Top Right */}
      {templatesCount > 0 && (
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 transition-transform group-hover:scale-105 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 dark:text-indigo-400">
              <rect width="7" height="7" x="3" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="14" rx="1"/>
              <rect width="7" height="7" x="3" y="14" rx="1"/>
            </svg>
            {templatesCount} Template{templatesCount > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Demo 區域 - Flexible height with scroll support */}
      <div
        className="relative bg-gray-50 dark:bg-zinc-950 overflow-visible preview-container"
        style={{ minHeight: '300px' }}
      >
        {/* Decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-zinc-950 opacity-50" aria-hidden="true" role="presentation"></div>

        {/* Grid Pattern Overlay for texture feel */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '16px 16px'}} aria-hidden="true" role="presentation"></div>

        {demoContent}
      </div>

      {/* UI 內容區域 */}
      {uiContent}
    </div>
  );
}

// PropTypes 定義
StyleCardUI.propTypes = {
  /** 標題 */
  title: PropTypes.string.isRequired,
  /** 描述 */
  description: PropTypes.string.isRequired,
  /** 主分類標籤文本 */
  primaryCategoryLabel: PropTypes.string,
  /** 標籤數組 */
  tags: PropTypes.arrayOf(PropTypes.string),
  /** 標籤點擊處理函數 */
  onTagClick: PropTypes.func,
  /** Get Prompt 按鈕點擊處理 */
  onGetPrompt: PropTypes.func.isRequired,
  /** Preview 按鈕點擊處理 */
  onPreview: PropTypes.func.isRequired,
  /** 當前語言 */
  language: PropTypes.oneOf(['zh-CN', 'en-US']).isRequired,
  /** 翻譯函數 */
  t: PropTypes.func.isRequired
};

StyleCardContainer.propTypes = {
  /** demo 區域內容 */
  demoContent: PropTypes.node.isRequired,
  /** UI 內容 */
  uiContent: PropTypes.node.isRequired,
  /** 卡片容器的 ref */
  cardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  /** 模板數量 */
  templatesCount: PropTypes.number
};
