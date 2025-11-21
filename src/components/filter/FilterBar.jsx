import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { TagChip } from '../ui/TagChip';
import {
  allTags,
  primaryCategories,
  getTagLabel,
  getCategoryLabel
} from '../../data/metadata/categoryMetadata';

/**
 * FilterBar 組件 - 多維度篩選工具欄
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
  showTags = true
}) {
  const { language, t } = useLanguage();

  const [filters, setFilters] = useState({
    keyword: initialFilters.keyword || '',
    categories: initialFilters.categories || [],
    tags: initialFilters.tags || [],
    matchMode: initialFilters.matchMode || 'any' // 'any' or 'all'
  });

  const [expandedSection, setExpandedSection] = useState('categories');

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
    setExpandedSection(expandedSection === section ? null : section);
  };

  const hasActiveFilters = filters.keyword || filters.categories.length > 0 || filters.tags.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
      {/* 頂部控制欄 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {t('filter.title')}
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            {t('filter.clearAll')}
          </button>
        )}
      </div>

      {/* 搜索框 */}
      {showSearch && (
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t('filter.searchPlaceholder')}
              value={filters.keyword}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}

      {/* 分类篩選 */}
      {showCategories && (
        <div className="mb-4">
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <span className="text-sm font-semibold text-gray-700">
              {t('filter.categoriesTitle')}
              {filters.categories.length > 0 && (
                <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                  {filters.categories.length}
                </span>
              )}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSection === 'categories' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSection === 'categories' && (
            <div className="flex flex-wrap gap-2 mt-2">
              {Object.values(primaryCategories).map(category => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`
                    px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                    ${filters.categories.includes(category.id)
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span className="mr-1">{category.icon}</span>
                  {getCategoryLabel(category.id, language)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 标籤篩選 */}
      {showTags && (
        <div>
          <button
            onClick={() => toggleSection('tags')}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <span className="text-sm font-semibold text-gray-700">
              {t('filter.tagsTitle')}
              {filters.tags.length > 0 && (
                <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                  {filters.tags.length}
                </span>
              )}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSection === 'tags' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSection === 'tags' && (
            <div className="space-y-3 mt-2">
              {/* 标籤匹配模式切換 */}
              {filters.tags.length > 1 && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-600">{t('filter.matchMode')}</span>
                  <button
                    onClick={toggleMatchMode}
                    className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 font-medium"
                  >
                    {filters.matchMode === 'any'
                      ? t('filter.matchAny')
                      : t('filter.matchAll')}
                  </button>
                </div>
              )}

              {/* 时代特征标签 */}
              <div>
                <div className="text-xs font-medium text-gray-500 mb-1.5">
                  {t('filter.eraTitle')}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(allTags.era).map(tagId => (
                    <button
                      key={tagId}
                      onClick={() => toggleTag(tagId)}
                      className={`transition-all ${filters.tags.includes(tagId) ? 'scale-105' : ''}`}
                    >
                      <TagChip
                        tagId={tagId}
                        language={language}
                        size="sm"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* 视觉特性标签 */}
              <div>
                <div className="text-xs font-medium text-gray-500 mb-1.5">
                  {t('filter.visualTitle')}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(allTags.visual).map(tagId => (
                    <button
                      key={tagId}
                      onClick={() => toggleTag(tagId)}
                      className={`transition-all ${filters.tags.includes(tagId) ? 'scale-105' : ''}`}
                    >
                      <TagChip
                        tagId={tagId}
                        language={language}
                        size="sm"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* 技术手法标签 */}
              <div>
                <div className="text-xs font-medium text-gray-500 mb-1.5">
                  {t('filter.technicalTitle')}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(allTags.technical).map(tagId => (
                    <button
                      key={tagId}
                      onClick={() => toggleTag(tagId)}
                      className={`transition-all ${filters.tags.includes(tagId) ? 'scale-105' : ''}`}
                    >
                      <TagChip
                        tagId={tagId}
                        language={language}
                        size="sm"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* 使用场景标签 */}
              <div>
                <div className="text-xs font-medium text-gray-500 mb-1.5">
                  {t('filter.useCasesTitle')}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(allTags.useCase).map(tagId => (
                    <button
                      key={tagId}
                      onClick={() => toggleTag(tagId)}
                      className={`transition-all ${filters.tags.includes(tagId) ? 'scale-105' : ''}`}
                    >
                      <TagChip
                        tagId={tagId}
                        language={language}
                        size="sm"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 已选择的筛选条件摘要 */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs font-medium text-gray-500 mb-2">
            {t('filter.activeFilters')}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.categories.map(catId => {
              const category = primaryCategories[catId];
              return (
                <span
                  key={catId}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                >
                  {category?.icon} {getCategoryLabel(catId, language)}
                  <button
                    onClick={() => toggleCategory(catId)}
                    className="ml-1 hover:text-purple-900"
                  >
                    ×
                  </button>
                </span>
              );
            })}
            {filters.tags.map(tagId => (
              <span
                key={tagId}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {getTagLabel(tagId, language)}
                <button
                  onClick={() => toggleTag(tagId)}
                  className="ml-1 hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
