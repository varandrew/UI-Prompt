import { getTagColor, getTagLabel } from '../../data/metadata/categoryMetadata';
import { DEFAULT_LANGUAGE } from '../../utils/i18n/languageConstants';

/**
 * TagChip 組件 - 显示風格标籤
 *
 * @param {Object} props
 * @param {String} props.tagId - 标籤 ID
 * @param {String} props.language - 語言 ('zh-CN' | 'en-US')
 * @param {String} props.size - 尺寸 ('sm' | 'md' | 'lg')
 * @param {Boolean} props.clickable - 是否可點擊
 * @param {Function} props.onClick - 點擊回調
 * @param {String} props.className - 額外的 CSS 类
 */
export function TagChip({
  tagId,
  language = DEFAULT_LANGUAGE,
  size = 'sm',
  clickable = false,
  onClick,
  className = ''
}) {
  const color = getTagColor(tagId);
  const label = getTagLabel(tagId, language);

  // 尺寸樣式映射
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  // 基礎樣式
  const baseClasses = `
    inline-flex items-center gap-1
    rounded-full font-medium
    transition-all duration-200
    ${sizeClasses[size]}
    ${clickable ? 'cursor-pointer hover:scale-105 hover:shadow-md' : ''}
    ${className}
  `;

  // 處理點擊
  const handleClick = () => {
    if (clickable && onClick) {
      onClick(tagId);
    }
  };

  return (
    <span
      className={baseClasses}
      style={{
        backgroundColor: `${color}15`, // 15% 透明度背景
        color: color,
        borderWidth: '1px',
        borderColor: `${color}40` // 40% 透明度边框
      }}
      onClick={handleClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {label}
    </span>
  );
}

/**
 * TagGroup 組件 - 显示一組标籤
 *
 * @param {Object} props
 * @param {Array<String>} props.tags - 标籤 ID 数組
 * @param {String} props.language - 語言
 * @param {String} props.size - 尺寸
 * @param {Boolean} props.clickable - 是否可點擊
 * @param {Function} props.onTagClick - 标籤點擊回調
 * @param {Number} props.maxDisplay - 最多显示数量
 * @param {String} props.className - 額外的 CSS 类
 */
export function TagGroup({
  tags = [],
  language = DEFAULT_LANGUAGE,
  size = 'sm',
  clickable = false,
  onTagClick,
  maxDisplay,
  className = ''
}) {
  if (!tags || tags.length === 0) {
    return null;
  }

  const displayTags = maxDisplay ? tags.slice(0, maxDisplay) : tags;
  const remainingCount = maxDisplay && tags.length > maxDisplay ? tags.length - maxDisplay : 0;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {displayTags.map((tagId) => (
        <TagChip
          key={tagId}
          tagId={tagId}
          language={language}
          size={size}
          clickable={clickable}
          onClick={onTagClick}
        />
      ))}
      {remainingCount > 0 && (
        <span
          className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-gray-500 self-center`}
        >
          +{remainingCount}
        </span>
      )}
    </div>
  );
}

/**
 * CategoryBadge 組件 - 显示主分类徽章
 *
 * @param {Object} props
 * @param {String} props.categoryId - 分类 ID
 * @param {String} props.icon - 圖标
 * @param {String} props.label - 标籤文本
 * @param {Boolean} props.primary - 是否為主分类
 * @param {String} props.className - 額外的 CSS 类
 */
export function CategoryBadge({
  icon,
  label,
  primary = false,
  className = ''
}) {
  const baseClasses = `
    inline-flex items-center gap-1.5
    px-2.5 py-1 rounded-lg
    text-xs font-semibold
    transition-all duration-200
    ${primary
      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
      : 'bg-gray-100 text-gray-700 border border-gray-300'
    }
    ${className}
  `;

  return (
    <span className={baseClasses}>
      {icon && <span className="text-sm">{icon}</span>}
      <span>{label}</span>
    </span>
  );
}

export default TagChip;
