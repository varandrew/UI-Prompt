import { useState } from 'react';
import PropTypes from 'prop-types';
import { Sparkles, Layers, Eye } from 'lucide-react';
import { getTagLabel } from '../../data/metadata/categoryMetadata';

/**
 * MinimalBadge - 簡約分類標籤
 * A subtle tag used for categories or status
 */
const MinimalBadge = ({ children, icon: Icon }) => (
  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-1 rounded-sm">
    {Icon && <Icon size={10} />}
    {children}
  </span>
);

MinimalBadge.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType
};

/**
 * TagPill - 極簡交互式標籤
 * Very subtle interactive tags
 */
const TagPill = ({ label, onClick, clickable = false }) => (
  <span
    className={`text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 rounded-full hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
    onClick={clickable ? onClick : undefined}
    role={clickable ? 'button' : undefined}
    tabIndex={clickable ? 0 : undefined}
  >
    {label}
  </span>
);

TagPill.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  clickable: PropTypes.bool
};

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
 * @param {Array} props.secondaryCategories - 可選：次級分類 ID 數組
 * @param {number} props.templatesCount - 可選：模板數量
 * @param {Array} props.tags - 可選：標籤數組
 * @param {function} props.onTagClick - 可選：標籤點擊處理函數
 * @param {function} props.onGetPrompt - 必需：Get Prompt 按鈕點擊處理
 * @param {function} props.onPreview - 必需：Preview 按鈕點擊處理
 * @param {string} props.language - 必需：當前語言（zh-CN | en-US）
 * @param {function} props.t - 必需：翻譯函數
 * @param {function} props.getCategoryLabel - 必需：獲取分類標籤的函數
 */
export function StyleCardUI({
  title,
  description,
  primaryCategoryLabel = null,
  secondaryCategories = [],
  templatesCount = 0,
  tags = [],
  onTagClick,
  onGetPrompt,
  onPreview,
  language,
  t,
  getCategoryLabel
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-6 flex flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header: Meta & Title */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          {primaryCategoryLabel && (
            <MinimalBadge icon={Layers}>{primaryCategoryLabel}</MinimalBadge>
          )}
          {templatesCount > 0 && (
            <span className="text-[10px] font-medium text-zinc-400">
              {t('common.templatesCount')
                .replace('{count}', templatesCount)
                .replace('{plural}', templatesCount > 1 ? 's' : '')}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          {title}
        </h3>
      </div>

      {/* Body: Description */}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>

      {/* Footer: Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.slice(0, 3).map((tag) => (
            <TagPill
              key={tag}
              label={getTagLabel(tag, language)}
              clickable={!!onTagClick}
              onClick={() => onTagClick?.(tag)}
            />
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-zinc-400 self-center pl-1 font-medium">
              +{tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Actions - Preview and Prompt buttons */}
      <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
        <button
          onClick={onPreview}
          className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium py-2.5 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          <Eye size={16} />
          <span>{t('buttons.preview')}</span>
        </button>

        <button
          onClick={onGetPrompt}
          className="flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium py-2.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group/btn"
        >
          <Sparkles size={16} className={isHovered ? 'text-amber-500' : 'text-zinc-400'} />
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
 *
 * @param {Object} props
 * @param {React.ReactNode} props.demoContent - 必需：demo 區域內容（IframeRenderer 或 JSXCompiler）
 * @param {React.ReactNode} props.uiContent - 必需：UI 內容（StyleCardUI）
 * @param {React.Ref} props.cardRef - 可選：卡片容器的 ref
 */
export function StyleCardContainer({
  demoContent,
  uiContent,
  cardRef
}) {
  return (
    <div
      ref={cardRef}
      className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 hover:border-zinc-300 dark:hover:border-zinc-700 w-full"
    >
      {/* Demo 區域 - 保持原始尺寸 */}
      {demoContent}

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
  /** 次級分類 ID 數組 */
  secondaryCategories: PropTypes.arrayOf(PropTypes.string),
  /** 模板數量 */
  templatesCount: PropTypes.number,
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
  t: PropTypes.func.isRequired,
  /** 獲取分類標籤的函數 */
  getCategoryLabel: PropTypes.func.isRequired
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
  ])
};
