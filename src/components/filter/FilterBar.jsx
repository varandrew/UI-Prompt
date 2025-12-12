import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Filter as FilterIcon, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import {
  allTags,
  primaryCategories,
  getTagLabel,
  getCategoryLabel
} from '../../data/metadata/categoryMetadata';

/**
 * FilterBar 組件 - 響應式極簡風格多維度篩選工具欄
 * - Mobile: 可折疊手風琴樣式
 * - Tablet/Desktop: 側邊欄樣式
 *
 * @param {Object} props
 * @param {Function} props.onFilterChange - 篩選條件變化回調
 * @param {Object} props.initialFilters - 初始篩選條件
 * @param {Boolean} props.showSearch - 是否显示搜索框
 * @param {Boolean} props.showCategories - 是否显示分类篩選
 * @param {Boolean} props.showTags - 是否显示标籤篩選
 */
export function FilterBar({
  onFilterChange,
  initialFilters = {},
  showSearch = true,
  showCategories = true,
  showTags = true,
  tagStats = null
}) {
  const { language, t } = useLanguage();

  const [filters, setFilters] = useState({
    keyword: initialFilters.keyword || '',
    categories: initialFilters.categories || [],
    tags: initialFilters.tags || [],
    matchMode: initialFilters.matchMode || 'any'
  });

  const [openSections, setOpenSections] = useState({
    categories: true,
    tags: false
  });

  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const hasTagStats = tagStats && Object.keys(tagStats).length > 0;

  // 依據實際數據隱藏無覆蓋的標籤
  const filterAvailableTags = (tagGroup) => {
    const ids = Object.keys(tagGroup);
    if (!hasTagStats) return ids;
    return ids.filter(id => (tagStats[id] || 0) > 0);
  };

  // 當篩選條件變化時通知父組件
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters, onFilterChange]);

  // 處理关鍵詞搜索
  const handleSearchChange = (e) => {
    setFilters(prev => ({
      ...prev,
      keyword: e.target.value
    }));
  };

  // 處理分类切換
  const toggleCategory = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  // 處理标籤切換
  const toggleTag = (tagId) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tagId)
        ? prev.tags.filter(id => id !== tagId)
        : [...prev.tags, tagId]
    }));
  };

  // 切換匹配模式
  const toggleMatchMode = () => {
    setFilters(prev => ({
      ...prev,
      matchMode: prev.matchMode === 'any' ? 'all' : 'any'
    }));
  };

  // 清除所有篩選
  const clearFilters = () => {
    setFilters({
      keyword: '',
      categories: [],
      tags: [],
      matchMode: 'any'
    });
  };

  // 切換展開的部分
  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const hasActiveFilters = filters.keyword || filters.categories.length > 0 || filters.tags.length > 0;
  const activeFilterCount = filters.categories.length + filters.tags.length;

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden mb-8 transition-all duration-300 shadow-sm">

      {/* Mobile Header - Controls expansion on small screens */}
      <div
        className="md:hidden flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors select-none"
        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
      >
        <div className="flex items-center gap-2">
          <FilterIcon size={16} className="text-zinc-500 dark:text-zinc-400" />
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            {t('filter.title')}
          </h3>
          {activeFilterCount > 0 && (
            <span className="flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold h-5 w-5 rounded-full ml-1">
              {activeFilterCount}
            </span>
          )}
        </div>
        <div className="text-zinc-400">
          {isMobileExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {/* Filter Content - Hidden on mobile unless expanded, always visible on md+ */}
      <div className={`
        flex flex-col
        ${isMobileExpanded ? 'block border-t border-zinc-100 dark:border-zinc-800' : 'hidden md:flex md:border-t-0'}
      `}>
        <div className="p-5">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <FilterIcon size={14} className="text-zinc-400" />
              {t('filter.title')}
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-[10px] uppercase tracking-wider font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                {t('filter.clearAll')}
              </button>
            )}
          </div>

          {/* Search Input */}
          {showSearch && (
            <div className="mb-6 relative group">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-800 dark:group-focus-within:text-zinc-200 transition-colors"
                size={14}
              />
              <input
                type="text"
                placeholder={t('filter.searchPlaceholder')}
                value={filters.keyword}
                onChange={handleSearchChange}
                className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-transparent focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-300 dark:focus:border-zinc-700 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 outline-none transition-all duration-200"
              />
            </div>
          )}

          <div className="space-y-6">
            {/* Section: Main Categories - Uses flex-wrap pill styles */}
            {showCategories && (
              <div className="space-y-3">
                <button
                  onClick={() => toggleSection('categories')}
                  className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {t('filter.categoriesTitle')}
                    {filters.categories.length > 0 && (
                      <span className="text-[10px] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-1.5 py-0.5 rounded-full font-medium">
                        {filters.categories.length}
                      </span>
                    )}
                  </span>
                  {openSections.categories ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {openSections.categories && (
                  <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    {Object.values(primaryCategories).map(category => {
                      const isActive = filters.categories.includes(category.id);
                      return (
                        <button
                          key={category.id}
                          onClick={() => toggleCategory(category.id)}
                          className={`
                            px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border
                            ${isActive
                              ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 shadow-sm'
                              : 'bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'
                            }
                          `}
                        >
                          <span className="mr-1.5">{category.icon}</span>
                          {getCategoryLabel(category.id, language)}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {showCategories && showTags && (
              <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full" />
            )}

            {/* Section: Feature Tags */}
            {showTags && (
              <div className="space-y-3">
                <button
                  onClick={() => toggleSection('tags')}
                  className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {t('filter.tagsTitle')}
                    {filters.tags.length > 0 && (
                      <span className="text-[10px] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-1.5 py-0.5 rounded-full font-medium">
                        {filters.tags.length}
                      </span>
                    )}
                  </span>
                  {openSections.tags ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {openSections.tags && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    {/* Match Mode Toggle */}
                    {filters.tags.length > 1 && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-zinc-500 dark:text-zinc-400">{t('filter.matchMode')}</span>
                        <button
                          onClick={toggleMatchMode}
                          className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 font-medium transition-colors"
                        >
                          {filters.matchMode === 'any'
                            ? t('filter.matchAny')
                            : t('filter.matchAll')}
                        </button>
                      </div>
                    )}

                    {/* Era Tags */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        {t('filter.eraTitle')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterAvailableTags(allTags.era).map(tagId => {
                          const isActive = filters.tags.includes(tagId);
                          return (
                            <button
                              key={tagId}
                              onClick={() => toggleTag(tagId)}
                              className={`
                                px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 border
                                ${isActive
                                  ? 'bg-zinc-100 text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600'
                                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                                }
                              `}
                            >
                              {getTagLabel(tagId, language)}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Visual Tags */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        {t('filter.visualTitle')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterAvailableTags(allTags.visual).map(tagId => {
                          const isActive = filters.tags.includes(tagId);
                          return (
                            <button
                              key={tagId}
                              onClick={() => toggleTag(tagId)}
                              className={`
                                px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 border
                                ${isActive
                                  ? 'bg-zinc-100 text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600'
                                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                                }
                              `}
                            >
                              {getTagLabel(tagId, language)}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technical Tags */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        {t('filter.technicalTitle')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterAvailableTags(allTags.technical).map(tagId => {
                          const isActive = filters.tags.includes(tagId);
                          return (
                            <button
                              key={tagId}
                              onClick={() => toggleTag(tagId)}
                              className={`
                                px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 border
                                ${isActive
                                  ? 'bg-zinc-100 text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600'
                                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                                }
                              `}
                            >
                              {getTagLabel(tagId, language)}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Use Case Tags */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        {t('filter.useCasesTitle')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterAvailableTags(allTags.useCase).map(tagId => {
                          const isActive = filters.tags.includes(tagId);
                          return (
                            <button
                              key={tagId}
                              onClick={() => toggleTag(tagId)}
                              className={`
                                px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 border
                                ${isActive
                                  ? 'bg-zinc-100 text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600'
                                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                                }
                              `}
                            >
                              {getTagLabel(tagId, language)}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                {t('filter.activeFilters')}
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.categories.map(catId => {
                  const category = primaryCategories[catId];
                  return (
                    <span
                      key={catId}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-[11px] font-medium"
                    >
                      {category?.icon} {getCategoryLabel(catId, language)}
                      <button
                        onClick={() => toggleCategory(catId)}
                        className="ml-0.5 hover:opacity-70 transition-opacity"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  );
                })}
                {filters.tags.map(tagId => (
                  <span
                    key={tagId}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-[11px] font-medium border border-zinc-200 dark:border-zinc-700"
                  >
                    {getTagLabel(tagId, language)}
                    <button
                      onClick={() => toggleTag(tagId)}
                      className="ml-0.5 hover:opacity-70 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Reset - Only visible on mobile when expanded */}
          <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 md:hidden">
            <button
              onClick={clearFilters}
              className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors text-center"
            >
              {t('filter.clearAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
