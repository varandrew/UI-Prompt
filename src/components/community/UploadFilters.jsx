/**
 * Upload Filters Component
 * Filter controls for the community gallery
 * @module components/community/UploadFilters
 */

import { memo, useState, useCallback, useRef, useEffect } from 'react';
import { Search, Filter, X, ChevronDown, SortAsc, SortDesc, Tag } from 'lucide-react';

/**
 * Category labels
 */
const CATEGORY_LABELS = {
  community: { 'zh-CN': '社区', 'en-US': 'Community' },
  visual: { 'zh-CN': '视觉设计', 'en-US': 'Visual Design' },
  core: { 'zh-CN': '核心系统', 'en-US': 'Core Systems' },
  retro: { 'zh-CN': '复古风格', 'en-US': 'Retro Styles' },
  interaction: { 'zh-CN': '交互动效', 'en-US': 'Interactions' },
  layout: { 'zh-CN': '布局系统', 'en-US': 'Layout Systems' },
};

/**
 * Sort options
 */
const SORT_OPTIONS = [
  { value: 'created_at', label: { 'zh-CN': '最新', 'en-US': 'Latest' } },
  { value: 'view_count', label: { 'zh-CN': '最多浏览', 'en-US': 'Most Viewed' } },
  { value: 'like_count', label: { 'zh-CN': '最多喜欢', 'en-US': 'Most Liked' } },
];

/**
 * Upload Filters Component
 */
function UploadFiltersComponent({
  searchQuery,
  onSearch,
  activeCategory,
  onCategoryChange,
  activeTags,
  onTagToggle,
  popularTags,
  categoryCounts,
  sortBy,
  sortOrder,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
  t,
  language,
}) {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const searchTimeoutRef = useRef(null);
  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // Debounced search
  const handleSearchChange = useCallback((value) => {
    setLocalSearch(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  }, [onSearch]);

  // Clear search
  const handleClearSearch = useCallback(() => {
    setLocalSearch('');
    onSearch('');
  }, [onSearch]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilters(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSort(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get category label
  const getCategoryLabel = (categoryId) => {
    return CATEGORY_LABELS[categoryId]?.[language] || CATEGORY_LABELS[categoryId]?.['en-US'] || categoryId;
  };

  // Get sort label
  const getSortLabel = (sortValue) => {
    const option = SORT_OPTIONS.find((o) => o.value === sortValue);
    return option?.label[language] || option?.label['en-US'] || sortValue;
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search input */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={localSearch}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={t('community.searchPlaceholder') || 'Search templates...'}
          className="w-64 pl-9 pr-8 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />
        {localSearch && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter dropdown */}
      <div className="relative" ref={filterRef}>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
            hasActiveFilters
              ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
          }`}
        >
          <Filter size={16} />
          <span>{t('community.filters') || 'Filters'}</span>
          {hasActiveFilters && (
            <span className="w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
              {(activeCategory ? 1 : 0) + activeTags.length}
            </span>
          )}
          <ChevronDown size={14} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>

        {showFilters && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
            {/* Categories */}
            <div className="p-3 border-b border-gray-700">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">
                {t('community.category') || 'Category'}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onCategoryChange('')}
                  className={`px-2 py-1 rounded text-sm transition-colors ${
                    !activeCategory
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {t('community.allCategories') || 'All'}
                </button>
                {Object.keys(CATEGORY_LABELS).map((catId) => {
                  const count = categoryCounts.find((c) => c.category === catId)?.count || 0;
                  return (
                    <button
                      key={catId}
                      onClick={() => onCategoryChange(catId)}
                      className={`px-2 py-1 rounded text-sm transition-colors ${
                        activeCategory === catId
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {getCategoryLabel(catId)}
                      {count > 0 && (
                        <span className="ml-1 text-xs opacity-60">({count})</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular tags */}
            {popularTags.length > 0 && (
              <div className="p-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide mb-2">
                  <Tag size={12} />
                  {t('community.popularTags') || 'Popular Tags'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.slice(0, 10).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => onTagToggle(tag)}
                      className={`px-2 py-1 rounded text-sm transition-colors ${
                        activeTags.includes(tag)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Clear filters */}
            {hasActiveFilters && (
              <div className="p-3 border-t border-gray-700">
                <button
                  onClick={() => {
                    onClearFilters();
                    setShowFilters(false);
                  }}
                  className="w-full px-3 py-2 text-gray-400 hover:text-white text-sm text-center transition-colors"
                >
                  {t('community.clearFilters') || 'Clear all filters'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sort dropdown */}
      <div className="relative" ref={sortRef}>
        <button
          onClick={() => setShowSort(!showSort)}
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-gray-600 transition-colors"
        >
          {sortOrder === 'desc' ? <SortDesc size={16} /> : <SortAsc size={16} />}
          <span>{getSortLabel(sortBy)}</span>
          <ChevronDown size={14} className={`transition-transform ${showSort ? 'rotate-180' : ''}`} />
        </button>

        {showSort && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value, sortBy === option.value && sortOrder === 'desc' ? 'asc' : 'desc');
                  setShowSort(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between ${
                  sortBy === option.value
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span>{option.label[language] || option.label['en-US']}</span>
                {sortBy === option.value && (
                  sortOrder === 'desc' ? <SortDesc size={14} /> : <SortAsc size={14} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active filters summary */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2">
          {activeCategory && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
              {getCategoryLabel(activeCategory)}
              <button onClick={() => onCategoryChange('')} className="p-0.5 hover:bg-blue-500/30 rounded">
                <X size={12} />
              </button>
            </span>
          )}
          {activeTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm"
            >
              {tag}
              <button onClick={() => onTagToggle(tag)} className="p-0.5 hover:bg-blue-500/30 rounded">
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export const UploadFilters = memo(UploadFiltersComponent);
export default UploadFilters;
