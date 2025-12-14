import { useEffect, useMemo, useState } from 'react';
import { StyleCard } from '../../components/ui/StyleCard';
import { MasonryContainer } from '../../components/ui/MasonryContainer';
import { VirtualMasonryVariable } from '../../components/ui/VirtualMasonryVariable';
import { FilterBar } from '../../components/filter/FilterBar';
import { useLanguage } from '../../hooks/useLanguage';
import { applyFilters, applyTranslationsToCategories, getTagStatistics } from '../../utils/categoryHelper';
import { loadStyleMetadataOnly } from '../../data/components/loaders';


/**
 * AllStylesPage - 统一风格页面 (增強版)
 * 合并所有 9 个风格分类,支持多維度搜索和筛选
 */
export function AllStylesPage() {
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // 取消分页：一次渲染全部（如需优化可改虛擬清單）
  const [filters, setFilters] = useState({
    keyword: '',
    categories: [],
    tags: [],
    matchMode: 'any'
  });



  // 🚀 載入分类資料（僅元數據，demo 內容延遲載入）
  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setIsError(false);
    loadStyleMetadataOnly()
      .then((cats) => {
        if (!active) return;
        setCategories(cats);
      })
      .catch((error) => {
        if (!active) return;
        console.error('[AllStylesPage] Failed to load style categories', error);
        setIsError(true);
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, [])

  // 獲取所有風格数据 (已增強 with 标籤 + 翻譯)
  const allStyles = useMemo(() => {
    const translatedCategories = applyTranslationsToCategories(categories, language);
    const items = translatedCategories.flatMap(cat =>
      cat.data.map(item => ({
        ...item,
        _categoryId: cat.id,
        _categoryKey: cat.key
      }))
    );
    // 為了避免重複 key（如同分类內存在相同 id）
    // 生成稳定且唯一的 _uniqueKey："<catId>-<id>"，若重複則加序號
    const counts = {};
    return items.map((it) => {
      const base = `${it._categoryId}-${it.id || 'noid'}`;
      const idx = counts[base] || 0;
      counts[base] = idx + 1;
      const uniqueKey = idx === 0 ? base : `${base}#${idx}`;
      return { ...it, _uniqueKey: uniqueKey };
    });
  }, [language, categories]);

  // 應用篩選邏輯
  const filteredStyles = useMemo(() => {
    return applyFilters(allStyles, filters);
  }, [allStyles, filters]);

  // 標籤使用次數，供 FilterBar 隱藏未覆蓋的標籤
  const tagStats = useMemo(() => getTagStatistics(allStyles), [allStyles]);


  // 處理篩選條件變化
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="styles-page mb-24" aria-busy={isLoading}>
      {/* 页面标题 */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-light mb-2 text-black dark:text-white">
          {t('common.styles')}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
          {t('common.stylesDescription')}
        </p>
      </div>

      {/* 工具列：載入時显示骨架，完成後显示實際 FilterBar */}
      {isLoading ? (
        <div role="status" aria-live="polite" className="animate-pulse motion-reduce:animate-none mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="h-10 w-full md:max-w-sm rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-10 w-28 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      ) : (
        <FilterBar
          onFilterChange={handleFilterChange}
          initialFilters={filters}
          showSearch={true}
          showCategories={true}
          showTags={true}
          tagStats={tagStats}
        />
      )}

      {/* 结果统计（載入中显示占位，高對比、極简） */}
      <div className="mb-6 flex items-center justify-between">
        {isLoading ? (
          <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse motion-reduce:animate-none" />
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filters.keyword || filters.categories.length > 0 || filters.tags.length > 0 ? (
              <>
                {t('common.foundResults', { count: filteredStyles.length })}
              </>
            ) : (
              <>
                {t('common.showingAll', { count: filteredStyles.length })}
              </>
            )}
          </p>
        )}

        {/* 右側：總数 */}
        <div className="flex items-center gap-3">
          {!isLoading && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {filteredStyles.length > 0 && t('common.totalStyles', { count: allStyles.length })}
            </div>
          )}
        </div>
      </div>

      {/* 內容：載入中→骨架；完成→結果或空態。避免初始显示「無結果」。 */}
      {isLoading ? (
        <section role="status" aria-live="polite" className="space-y-4" id="loading">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse motion-reduce:animate-none rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700 mb-3"></div>
                <div className="h-28 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
              </div>
            ))}
          </div>
          <p className="sr-only">{t('common.loading') || 'Loading…'}</p>
        </section>
      ) : filteredStyles.length > 0 ? (
        <div className="opacity-0 transition-opacity duration-300 ease-out" style={{ opacity: isLoading ? 0 : 1 }}>
          {filteredStyles.length > 12 ? (
            <VirtualMasonryVariable
              items={filteredStyles}
              itemHeight={400}
              gap={32}
              renderItem={(style) => (
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
              )}
            />
          ) : (
            <MasonryContainer>
              {filteredStyles.map((style) => (
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
              ))}
            </MasonryContainer>
          )}
        </div>
      ) : isError ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800 p-6 bg-red-50/60 dark:bg-red-900/20">
          <p className="text-red-700 dark:text-red-300 text-sm">{t('common.loadFailed') || '載入失敗，请稍後重試。'}</p>
        </div>
      ) : (
        // 空狀態（仅在非載入且確定 0 筆時显示）
        <div className="text-center py-16 opacity-0 transition-opacity duration-300 ease-out" style={{ opacity: isLoading ? 0 : 1 }}>
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
            {t('common.noResults')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {t('common.noResultsHint')}
          </p>
          <button
            onClick={() => {
              setFilters({
                keyword: '',
                categories: [],
                tags: [],
                matchMode: 'any'
              });
            }}
            className="inline-flex items-center justify-center px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600 dark:focus-visible:ring-sky-400"
          >
            {t('common.clearFilters')}
          </button>
        </div>
      )}

      {/* 已移除分页控制，單屏展示 */}
    </section>
  );
}
