import { useMemo, useCallback } from 'react';
import { ComponentCard } from '../../components/ui/ComponentCard';
import { VirtualGrid } from '../../components/ui/VirtualGrid';
import { SearchBar } from '../../components/ui/SearchBar';
import { FilterTabs } from '../../components/ui/FilterTabs';
import { useLanguage } from '../../hooks/useLanguage';
import { useRemoteCategories } from '../../hooks/useRemoteCategories';
import { useComponentFilterUrlSync } from '../../hooks/useComponentFilterUrlSync';
import { applyTranslationsToCategories } from '../../utils/categoryHelper';
import { loadComponentMetadataOnly } from '../../data/components/loaders';
import { createI18nResolver } from '../../utils/i18n/resolveI18nValue';
import { SKELETON_COUNTS, VIRTUAL_SCROLL_THRESHOLD } from '../../utils/constants';
import { ListPageScaffold } from '../../components/scaffold';
import { SEOHead, getPageSEO, generateComponentListSchema } from '../../components/seo';

/**
 * AllComponentsPage - 統一組件画廊页面
 * 合併所有 8 個組件分类,支持搜索和篩選,使用网格佈局
 *
 * 使用 ListPageScaffold 統一 UI 骨架
 *
 * 💡 性能優化：
 * - 使用 useDebounce 防抖搜索輸入，避免每次按鍵觸發篩選重算
 * - 使用 VirtualGrid 虛擬滾動，僅渲染可見區域（>20 items 時啟用）
 * - 使用 React.memo 避免不必要的 ComponentCard 重渲染
 */
export function AllComponentsPage() {
  const { t, language } = useLanguage();

  // 使用共享的數據加載 hook
  const {
    data: categories,
    isLoading,
    isError,
    retry: handleRetry
  } = useRemoteCategories(loadComponentMetadataOnly, {
    loggerName: 'AllComponentsPage'
  });

  // 獲取翻譯後的分类数据
  const translatedCategories = useMemo(() => {
    return applyTranslationsToCategories(categories, language);
  }, [language, categories]);

  // 獲取有效分類 ID 列表
  const validCategoryIds = useMemo(() =>
    translatedCategories.map(cat => cat.id)
  , [translatedCategories]);

  // 篩選狀態 - 使用 URL 同步 hook（含 debounce）
  const {
    searchQuery,
    setSearchQuery,
    debouncedSearchQuery,
    activeCategory,
    setActiveCategory,
    clearFilters
  } = useComponentFilterUrlSync(validCategoryIds);

  // 所有組件列表 (扁平化) - 使用 _uniqueKey 避免 key 碰撞
  const allComponents = useMemo(() => {
    const resolveI18n = createI18nResolver(language, t);
    const counts = {};

    return translatedCategories.flatMap(cat =>
      cat.data.map(item => {
        const title = resolveI18n(item.title);
        const description = resolveI18n(item.description);
        const demoHTML = item.demoHTML || item.variants?.[0]?.demoHTML || '';
        const customStyles = item.customStyles || item.variants?.[0]?.customStyles || '';

        // 生成唯一 key（與 AllStylesPage 相同策略）
        const base = `${cat.id}-${item.id || 'noid'}`;
        const idx = counts[base] || 0;
        counts[base] = idx + 1;
        const uniqueKey = idx === 0 ? base : `${base}#${idx}`;

        return {
          ...item,
          title,
          description,
          demoHTML,
          customStyles,
          _categoryId: cat.id,
          _categoryKey: cat.key,
          _categoryIcon: cat.icon,
          _categoryLabel: t(`nav.${cat.key}`),
          _uniqueKey: uniqueKey
        };
      })
    );
  }, [translatedCategories, t, language]);

  // 🚀 預計算分類索引，加速分類篩選
  const componentsByCategory = useMemo(() => {
    const index = new Map();
    index.set('all', allComponents);

    for (const comp of allComponents) {
      const catId = comp._categoryId;
      if (!index.has(catId)) {
        index.set(catId, []);
      }
      index.get(catId).push(comp);
    }

    return index;
  }, [allComponents]);

  // 篩選邏輯 (結合分类篩選和搜索) - 使用防抖後的搜索值
  // 🚀 優化：使用預計算的分類索引避免每次都遍歷全部
  const filteredComponents = useMemo(() => {
    // 先按分類篩選（O(1) 查找）
    const categoryComponents = componentsByCategory.get(activeCategory) || [];

    // 如果沒有搜索關鍵字，直接返回分類結果
    if (!debouncedSearchQuery.trim()) {
      return categoryComponents;
    }

    // 執行搜索篩選
    const query = debouncedSearchQuery.toLowerCase();
    return categoryComponents.filter(
      comp =>
        comp.title?.toLowerCase().includes(query) ||
        comp.description?.toLowerCase().includes(query)
    );
  }, [componentsByCategory, activeCategory, debouncedSearchQuery]);

  // 是否有啟用篩選
  const hasActiveFilters = searchQuery || activeCategory !== 'all';

  // 處理卡片中分类标籤點擊
  const handleCategoryClick = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setActiveCategory]);

  // 🚀 渲染單個 ComponentCard（用於 VirtualGrid）
  const renderComponentCard = useCallback((component) => (
    <ComponentCard
      key={component._uniqueKey}
      id={component.id}
      title={component.title}
      description={component.description}
      demoHTML={component.demoHTML}
      customStyles={component.customStyles}
      categoryId={component._categoryId}
      categoryIcon={component._categoryIcon}
      categoryLabel={component._categoryLabel}
      variants={component.variants || []}
      onCategoryClick={handleCategoryClick}
    />
  ), [handleCategoryClick]);

  // SEO configuration
  const seo = getPageSEO('components', language);
  const componentListSchema = useMemo(
    () => generateComponentListSchema(allComponents.slice(0, 10), language),
    [allComponents, language]
  );

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path="/components"
        language={language}
        jsonLd={componentListSchema}
      />
      <ListPageScaffold
      title={t('common.components')}
      description={t('common.componentsDescription')}
      isLoading={isLoading}
      isError={isError}
      onRetry={handleRetry}
      toolbarSkeletonVariant="simple"
      renderToolbar={() => (
        <div className="mb-8 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('common.searchComponents')}
          />
          <FilterTabs
            categories={translatedCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      )}
      statsConfig={{
        isFiltered: hasActiveFilters,
        filteredCount: filteredComponents.length,
        totalCount: allComponents.length,
        filteredLabel: t('common.foundResultsComp', { count: filteredComponents.length }),
        totalLabel: t('common.showingAllComp', { count: filteredComponents.length }),
        showTotal: false
      }}
      isEmpty={filteredComponents.length === 0}
      onClearFilters={clearFilters}
      skeletonCount={SKELETON_COUNTS.COMPONENTS}
      skeletonColumns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      skeletonGap="gap-6"
    >
      {/* Component cards grid - 使用虛擬滾動優化大列表 */}
      {filteredComponents.length > VIRTUAL_SCROLL_THRESHOLD ? (
        <VirtualGrid
          items={filteredComponents}
          renderItem={renderComponentCard}
          itemHeight={280}
          gap={24}
          listHeight={800}
          threshold={VIRTUAL_SCROLL_THRESHOLD}
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredComponents.map(renderComponentCard)}
        </div>
      )}
    </ListPageScaffold>
    </>
  );
}
