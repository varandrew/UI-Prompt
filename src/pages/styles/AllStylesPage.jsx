import { useMemo, useCallback, useState } from 'react';
import {
  StyleCard,
  StyleListRow,
  MasonryContainer,
  VirtualMasonryVariable,
  ViewModeToggle
} from '../../components/ui';
import { FilterBar } from '../../components/filter';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgressiveStyleLoad } from '../../hooks/useProgressiveStyleLoad';
import { useFilterUrlSync } from '../../hooks/useFilterUrlSync';
import { applyFilters, applyTranslationsToCategories, getTagStatistics } from '../../utils/categoryHelper';
import { VIRTUAL_SCROLL_THRESHOLD, SKELETON_COUNTS } from '../../utils/constants';
import { ListPageScaffold } from '../../components/scaffold';
import { SEOHead, getPageSEO, generateStyleListSchema } from '../../components/seo';
import { LANGUAGES } from '../../utils/i18n/languageConstants';


/**
 * AllStylesPage - 统一风格页面 (增強版)
 * 合并所有 9 个风格分类,支持多維度搜索和筛选
 *
 * 使用 ListPageScaffold 統一 UI 骨架
 *
 * 💡 性能優化：
 * - 使用 debouncedFilters 防抖搜索輸入，避免每次按鍵觸發篩選重算
 * - 預計算搜索索引 (_searchIndex)，避免每次搜索時重複調用 toLowerCase()
 * - 使用 VirtualMasonryVariable 虛擬滾動，僅渲染可見區域
 */
export function AllStylesPage() {
  const { t, language } = useLanguage();

  // 視圖模式狀態：grid 或 list
  const [viewMode, setViewMode] = useState('grid');

  // 🚀 使用漸進式加載 hook（優化首屏性能）
  const {
    data: categories,
    isLoading,
    isPartiallyLoaded: _isPartiallyLoaded, // 保留供未來 UI 優化使用
    isFullyLoaded,
    isError,
    retry: handleRetry,
    loadProgress: _loadProgress, // 保留供未來進度條使用
    missingReport
  } = useProgressiveStyleLoad({
    loggerName: 'AllStylesPage'
  });

  // 篩選狀態 - 使用 URL 同步 hook（含 debounce）
  // filters: 即時狀態（用於 UI 顯示）
  // debouncedFilters: 防抖後狀態（用於實際篩選，減少計算頻率）
  const { filters, debouncedFilters, setFilters, clearFilters } = useFilterUrlSync();

  // 獲取所有風格数据 (已增強 with 标籤 + 翻譯 + 搜索索引)
  const allStyles = useMemo(() => {
    const translatedCategories = applyTranslationsToCategories(categories, language);
    const items = translatedCategories.flatMap(cat =>
      cat.data.map(item => ({
        ...item,
        _categoryId: cat.id,
        _categoryKey: cat.key
      }))
    );
    // 生成稳定且唯一的 _uniqueKey："<catId>-<id>"，若重複則加序號
    // 🚀 同時預計算搜索索引，避免每次搜索時重複調用 toLowerCase()
    const counts = {};
    return items.map((it) => {
      const base = `${it._categoryId}-${it.id || 'noid'}`;
      const idx = counts[base] || 0;
      counts[base] = idx + 1;
      const uniqueKey = idx === 0 ? base : `${base}#${idx}`;
      return {
        ...it,
        _uniqueKey: uniqueKey,
        // 🚀 預計算搜索索引（小寫版本），供 searchStyles 使用
        _searchIndex: {
          title: (it.title || '').toLowerCase(),
          id: (it.id || '').toLowerCase(),
          desc: (it.description || '').toLowerCase()
        }
      };
    });
  }, [language, categories]);

  // 應用篩選邏輯（使用 debouncedFilters 減少計算頻率）
  const filteredStyles = useMemo(() => {
    return applyFilters(allStyles, debouncedFilters);
  }, [allStyles, debouncedFilters]);

  // 標籤使用次數，供 FilterBar 隱藏未覆蓋的標籤
  const tagStats = useMemo(() => getTagStatistics(allStyles), [allStyles]);

  // 是否有啟用篩選
  const hasActiveFilters = filters.keyword || filters.categories.length > 0 || filters.tags.length > 0;

  const missingCount = missingReport?.missingCount || missingReport?.missingFamilies?.length || 0;
  const missingHint = missingCount > 0
    ? t('pages.styles.missingStylesHint', { count: missingCount })
    : '';

  // 渲染 StyleCard (Grid View)
  const renderStyleCard = useCallback((style) => (
    <StyleCard
      key={style._uniqueKey}
      id={style.id}
      title={style.title}
      description={style.description}
      demoHTML={style.demoHTML}
      customStyles={style.customStyles}
      fullPageHTML={style.fullPageHTML}
      fullPageStyles={style.fullPageStyles}
      demoBoxClass={style.demoBoxClass}
      demoBoxStyle={style.demoBoxStyle}
      previews={style.previews}
      tags={style.tags}
      categories={style.categories}
      primaryCategory={style.primaryCategory}
      relatedStyles={style.relatedStyles}
      colorScheme={style.colorScheme}
      customPrompt={style.customPrompt}
      stylePrompt={style.stylePrompt}
      categoryId={style._categoryId || style.primaryCategory || style.category}
      familyId={style.familyId}
    />
  ), []);

  // 渲染 StyleListRow (List View)
  const renderStyleListRow = useCallback((style) => (
    <StyleListRow
      key={style._uniqueKey}
      id={style.id}
      title={style.title}
      description={style.description}
      demoHTML={style.demoHTML}
      customStyles={style.customStyles}
      fullPageHTML={style.fullPageHTML}
      previews={style.previews}
      tags={style.tags}
      primaryCategory={style.primaryCategory}
      customPrompt={style.customPrompt}
      stylePrompt={style.stylePrompt}
      categoryId={style._categoryId || style.primaryCategory || style.category}
      familyId={style.familyId}
    />
  ), []);

  // SEO configuration
  const seo = getPageSEO('styles', language);
  const styleListSchema = useMemo(
    () => generateStyleListSchema(allStyles.slice(0, 10), language),
    [allStyles, language]
  );

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path="/styles"
        language={language}
        jsonLd={styleListSchema}
      />
      <ListPageScaffold
      className="styles-page"
      title={t('common.styles')}
      description={t('common.stylesDescription')}
      isLoading={isLoading || (filteredStyles.length === 0 && !isFullyLoaded)}
      isError={isError}
      onRetry={handleRetry}
      toolbarSkeletonVariant="complex"
      renderToolbar={() => (
        <FilterBar
          onFilterChange={setFilters}
          initialFilters={filters}
          showSearch={true}
          showCategories={true}
          showTags={true}
          tagStats={tagStats}
        />
      )}
      statsConfig={{
        isFiltered: hasActiveFilters,
        filteredCount: filteredStyles.length,
        totalCount: allStyles.length,
        filteredLabel: t('common.foundResults', { count: filteredStyles.length }),
        totalLabel: t('common.showingAll', { count: filteredStyles.length }),
        showTotal: false,
        isProgressiveLoading: !isFullyLoaded,
        rightContent: (
          <ViewModeToggle
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        )
      }}
      isEmpty={filteredStyles.length === 0}
      isLoadingContent={!isFullyLoaded && filteredStyles.length === 0}
      onClearFilters={clearFilters}
      skeletonCount={SKELETON_COUNTS.STYLES}
      skeletonColumns="md:grid-cols-2 lg:grid-cols-3"
      skeletonGap="gap-8"
    >
      {missingHint && (
        <div className="mb-6 rounded-lg border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-900/20 px-4 py-3 text-sm text-amber-900 dark:text-amber-100">
          <div className="font-medium">{missingHint}</div>
          {Array.isArray(missingReport?.missingFamilies) && missingReport.missingFamilies.length > 0 && (
            <details className="mt-2">
              <summary className="cursor-pointer select-none text-xs text-amber-800/80 dark:text-amber-200/80">
                {t('pages.styles.viewMissingDetails')}
              </summary>
              <div className="mt-2 max-h-40 overflow-auto text-xs text-amber-900/80 dark:text-amber-100/80">
                {missingReport.missingFamilies
                  .slice(0, 50)
                  .map((it) => `${it.categoryId}/${it.familyId}`)
                  .join(', ')}
                {missingReport.missingFamilies.length > 50 ? '…' : ''}
              </div>
            </details>
          )}
        </div>
      )}

      {/* Content: Grid or List view based on viewMode */}
      <div className="transition-opacity duration-300 ease-out">
        {viewMode === 'list' ? (
          /* List View - Full width */
          <div className="flex flex-col gap-3">
            {filteredStyles.map(renderStyleListRow)}
          </div>
        ) : (
          /* Grid View: Virtual scroll for large lists, Masonry for small */
          filteredStyles.length > VIRTUAL_SCROLL_THRESHOLD ? (
            <VirtualMasonryVariable
              items={filteredStyles}
              itemHeight={400}
              gap={32}
              renderItem={renderStyleCard}
            />
          ) : (
            <MasonryContainer>
              {filteredStyles.map(renderStyleCard)}
            </MasonryContainer>
          )
        )}
      </div>
    </ListPageScaffold>
    </>
  );
}
