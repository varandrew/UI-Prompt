import { useEffect, useMemo, useState } from 'react';
import { ComponentCard } from '../../components/ui/ComponentCard';
import { SearchBar } from '../../components/ui/SearchBar';
import { FilterTabs } from '../../components/ui/FilterTabs';
import { useLanguage } from '../../hooks/useLanguage';
import { applyTranslationsToCategories } from '../../utils/categoryHelper';
import { loadComponentCategories } from '../../data/components/loaders';

/**
 * AllComponentsPage - 統一組件画廊页面
 * 合併所有 8 個組件分类,支持搜索和篩選,使用网格佈局
 */
export function AllComponentsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let active = true
    loadComponentCategories().then((cats) => {
      if (active) setCategories(cats)
    })
    return () => { active = false }
  }, [])

  // 獲取翻譯後的分类数据
  const translatedCategories = useMemo(() => {
    return applyTranslationsToCategories(categories, language);
  }, [language, categories]);

  // 所有組件列表 (扁平化)
  const allComponents = useMemo(() => {
    return translatedCategories.flatMap(cat =>
      cat.data.map(item => ({
        ...item,
        _categoryId: cat.id,
        _categoryKey: cat.key,
        _categoryIcon: cat.icon,
        _categoryLabel: t(`nav.${cat.key}`)
      }))
    );
  }, [translatedCategories, t]);

  // 篩選邏輯 (結合分类篩選和搜索)
  const filteredComponents = useMemo(() => {
    let components = allComponents;

    // 1. 按分类篩選
    if (activeCategory !== 'all') {
      components = components.filter(c => c._categoryId === activeCategory);
    }

    // 2. 按搜索詞過濾
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      components = components.filter(
        comp =>
          comp.title?.toLowerCase().includes(query) ||
          comp.description?.toLowerCase().includes(query)
      );
    }

    return components;
  }, [allComponents, activeCategory, searchQuery]);

  // 處理分类點擊
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // 處理卡片中分类标籤點擊
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="mb-24">
      {/* 页面标題 */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-light mb-2">
          {t('common.components')}
        </h2>
        <p className="text-sm text-gray-600 font-light">
          {t('common.componentsDescription')}
        </p>
      </div>

      {/* 搜索和篩選工具欄 */}
      <div className="mb-8 space-y-4">
        {/* 搜索欄 */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={t('common.searchComponents')}
        />

        {/* 分类标籤 */}
        <FilterTabs
          categories={translatedCategories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

      </div>

      {/* 結果統計 */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {searchQuery || activeCategory !== 'all' ? (
            <>
              {language === 'zh-CN'
                ? `找到 ${filteredComponents.length} 个组件`
                : `Found ${filteredComponents.length} component${filteredComponents.length !== 1 ? 's' : ''}`}
            </>
          ) : (
            <>
              {language === 'zh-CN'
                ? `显示全部 ${filteredComponents.length} 个组件`
                : `Showing all ${filteredComponents.length} components`}
            </>
          )}
        </p>
      </div>

      {/* 組件卡片网格 - 使用密集佈局 */}
      {filteredComponents.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredComponents.map((component, index) => (
            <ComponentCard
              key={`${component._categoryId}-${component.id || index}`}
              id={component.id}
              title={component.title}
              description={component.description}
              demoHTML={component.demoHTML}
              customStyles={component.customStyles}
              categoryId={component._categoryId}
              categoryIcon={component._categoryIcon}
              categoryLabel={component._categoryLabel}
              variants={component.variants || []}  // 傳遞變体数組
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
      ) : (
        // 無結果提示
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            {t('common.noResults')}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {t('common.noResultsHint')}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            {t('common.clearFilters')}
          </button>
        </div>
      )}
    </section>
  );
}
