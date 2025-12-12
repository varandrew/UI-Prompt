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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setIsError(false);
    loadComponentCategories()
      .then((cats) => {
        if (active) setCategories(cats);
      })
      .catch((error) => {
        if (active) {
          console.error('[AllComponentsPage] Failed to load component categories', error);
          setIsError(true);
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });
    return () => { active = false };
  }, [])

  // 獲取翻譯後的分类数据
  const translatedCategories = useMemo(() => {
    return applyTranslationsToCategories(categories, language);
  }, [language, categories]);

  // 所有組件列表 (扁平化)
  const allComponents = useMemo(() => {
    return translatedCategories.flatMap(cat =>
      cat.data.map(item => {
        // 處理 i18n 對象結構（新 JSON 數據格式）
        // 值可能是: 1) i18n 對象 { 'zh-CN': '...', 'en-US': '...' }
        //          2) i18n key 字符串 'data.components.xxx.title'
        //          3) 直接文本
        const resolveI18n = (value) => {
          if (!value) return '';
          if (typeof value === 'object') {
            const resolved = value[language] || value['en-US'] || '';
            // 如果解析出的值是 i18n key，繼續翻譯
            if (typeof resolved === 'string' && resolved.startsWith('data.')) {
              return t(resolved);
            }
            return resolved;
          }
          if (typeof value === 'string') {
            // 如果是 i18n key，翻譯它
            if (value.startsWith('data.') || value.startsWith('nav.') || value.startsWith('common.')) {
              return t(value);
            }
            return value;
          }
          return '';
        };

        const title = resolveI18n(item.title);
        const description = resolveI18n(item.description);

        // 從 variants 取得 demoHTML（如果組件級沒有）
        const demoHTML = item.demoHTML || item.variants?.[0]?.demoHTML || '';
        const customStyles = item.customStyles || item.variants?.[0]?.customStyles || '';

        return {
          ...item,
          title,
          description,
          demoHTML,
          customStyles,
          _categoryId: cat.id,
          _categoryKey: cat.key,
          _categoryIcon: cat.icon,
          _categoryLabel: t(`nav.${cat.key}`)
        };
      })
    );
  }, [translatedCategories, t, language]);

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
    <section className="mb-24" aria-busy={isLoading}>
      {/* 页面标題 */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-light mb-2 text-black dark:text-white">
          {t('common.components')}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 font-light">
          {t('common.componentsDescription')}
        </p>
      </div>

      {/* 搜索和篩選工具欄 - 載入時显示骨架 */}
      {isLoading ? (
        <div role="status" aria-live="polite" className="animate-pulse motion-reduce:animate-none mb-8">
          <div className="h-10 w-full rounded bg-slate-200 dark:bg-slate-700 mb-4" />
          <div className="flex gap-2">
            <div className="h-10 w-20 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-10 w-28 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      ) : (
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
      )}

      {/* 結果統計 */}
      <div className="mb-6 flex items-center justify-between">
        {isLoading ? (
          <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse motion-reduce:animate-none" />
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {searchQuery || activeCategory !== 'all'
              ? t('common.foundResultsComp').replace('{count}', filteredComponents.length)
              : t('common.showingAllComp').replace('{count}', filteredComponents.length)}
          </p>
        )}
      </div>

      {/* 組件卡片网格 - 載入中显示骨架，完成後显示結果或空態 */}
      {isLoading ? (
        <section role="status" aria-live="polite" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse motion-reduce:animate-none rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700 mb-3" />
                <div className="h-28 w-full rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            ))}
          </div>
          <p className="sr-only">{t('common.loading') || 'Loading...'}</p>
        </section>
      ) : isError ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800 p-6 bg-red-50/60 dark:bg-red-900/20">
          <p className="text-red-700 dark:text-red-300 text-sm">
            {t('common.loadFailed') || 'Load failed, please try again later.'}
          </p>
        </div>
      ) : filteredComponents.length > 0 ? (
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
        // 無結果提示（仅在非載入且確定 0 筆時显示）
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            {t('common.noResults')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {t('common.noResultsHint')}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="inline-flex items-center justify-center px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600 dark:focus-visible:ring-sky-400"
          >
            {t('common.clearFilters')}
          </button>
        </div>
      )}
    </section>
  );
}
