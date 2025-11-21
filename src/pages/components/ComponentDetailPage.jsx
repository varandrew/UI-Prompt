import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { applyTranslationsToCategories } from '../../utils/categoryHelper';
import { VariantGrid } from '../../components/ui/VariantGrid';
import { CodeModal } from '../../components/ui/CodeModal';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import { PreviewModal } from '../../components/preview/PreviewModal';
import { PromptGenerator } from '../../utils/promptGenerator';
import { loadComponentCategories } from '../../data/components/loaders';
import DOMPurify from 'dompurify';
import { stripTailwindCdn } from '../../utils/previewCss';

/**
 * ComponentDetailPage - 組件詳情页 (支持多變体瀑布流佈局)
 * 路由: /components/:category/:componentId
 * 支持: 點擊預覽 + Prompt 功能
 */
export function ComponentDetailPage() {
  const { category, componentId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setIsError(false);
    loadComponentCategories()
      .then((cats) => {
        if (!active) return;
        setCategories(cats);
      })
      .catch(() => {
        if (!active) return;
        setIsError(true);
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => { active = false };
  }, [])

  // 查找當前組件数据
  const componentData = useMemo(() => {
    const translatedCategories = applyTranslationsToCategories(categories, language);
    const categoryData = translatedCategories.find(cat => cat.id === category);

    if (!categoryData) return null;

    const component = categoryData.data.find(item => item.id === componentId);
    if (!component) return null;

    return {
      ...component,
      categoryId: categoryData.id,
      categoryKey: categoryData.key,
      categoryIcon: categoryData.icon,
      categoryLabel: t(`nav.${categoryData.key}`)
    };
  }, [category, componentId, language, t, categories]);

  // 處理查看代碼
  const handleViewCode = (variant) => {
    setSelectedVariant(variant);
    setShowCodeModal(true);
  };

  // 處理獲取 Prompt
  const handleGetPrompt = (variant) => {
    setSelectedVariant(variant);
    setShowPrompt(true);
  };

  // 處理預覽
  const handlePreview = (variant) => {
    setSelectedVariant(variant);
    setShowPreview(true);
  };

  // 生成 Prompt 內容
  const promptContent = selectedVariant
    ? PromptGenerator.generate(
        t(selectedVariant.name),
        t(selectedVariant.description || ''),
        language
      )
    : '';

  // 返回按鈕
  const handleBack = () => {
    navigate('/components');
  };

  // 載入中：显示骨架屏（避免短暫显示「不存在」）
  if (isLoading) {
    return (
      <section className="mb-24" aria-busy={true}>
        {/* 标題骨架 */}
        <div className="mb-8 space-y-4 animate-pulse motion-reduce:animate-none" role="status" aria-live="polite">
          <div className="h-6 w-28 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-9 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>

        {/* 內容骨架（模擬變体卡片） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse motion-reduce:animate-none rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
                <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="p-6 space-y-4">
                <div className="h-48 w-full rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-3/5 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-3 w-2/5 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            </div>
          ))}
        </div>
        <p className="sr-only">{t('common.loading') || 'Loading…'}</p>
      </section>
    );
  }

  // 載入失敗
  if (isError) {
    return (
      <section className="mb-24">
        <div className="rounded-lg border border-red-200 dark:border-red-800 p-6 bg-red-50/60 dark:bg-red-900/20">
          <p className="text-red-700 dark:text-red-300 text-sm">{t('common.loadFailed')}</p>
        </div>
      </section>
    );
  }

  // 找不到組件（仅在非載入狀態時显示）
  if (!componentData) {
    return (
      <section className="mb-24">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {t('ui.componentNotFound')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('ui.componentNotFoundHint')}
          </p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t('ui.backToGallery')}
          </button>
        </div>
      </section>
    );
  }

  // 检查是否有變体
  const hasVariants = componentData.variants && componentData.variants.length > 0;

  return (
    <>
      <section className="mb-24">
        {/* 頂部导航欄 */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('common.backToGallery')}</span>
          </button>

          {/* 标題和分类 */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* 分类徽章 */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                  <span>{componentData.categoryIcon}</span>
                  <span>{componentData.categoryLabel}</span>
                </span>
              </div>

              {/* 組件标題 */}
              <h1 className="text-3xl md:text-4xl font-light mb-3">
                {typeof componentData.title === 'string' && componentData.title.startsWith('data.') 
                  ? t(componentData.title) 
                  : componentData.title}
              </h1>

              {/* 完整描述 */}
              <p className="text-gray-600 text-base leading-relaxed max-w-3xl mb-2">
                {typeof componentData.description === 'string' && componentData.description.startsWith('data.') 
                  ? t(componentData.description) 
                  : componentData.description}
              </p>

              {/* 變体数量提示 */}
              {hasVariants && (
                <p className="text-sm text-purple-600 font-medium">
                  {t('common.variantsCount', {
                    count: componentData.variants.length,
                    plural: componentData.variants.length !== 1 ? 's' : ''
                  })}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 變体网格 (瀑布流佈局) */}
        {hasVariants ? (
          <VariantGrid
            variants={componentData.variants}
            onViewCode={handleViewCode}
            onGetPrompt={handleGetPrompt}
            onPreview={handlePreview}
          />
        ) : (
          /* 回退: 單一預覽模式 (向後兼容) */
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-3 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-700">
                {t('ui.componentPreview')}
              </h3>
            </div>
            <div className="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
              <div
                className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6"
                // 安全處理：移除 Tailwind CDN 並做 XSS 清理
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(stripTailwindCdn(componentData.demoHTML || '')) }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Code Modal */}
      {selectedVariant && (
        <CodeModal
          isOpen={showCodeModal}
          onClose={() => setShowCodeModal(false)}
          variant={selectedVariant}
        />
      )}

      {/* Prompt Drawer */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={selectedVariant ? t(selectedVariant.name) : ''}
        content={promptContent}
      />

      {/* Preview Modal */}
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        title={selectedVariant ? t(selectedVariant.name) : ''}
        description={selectedVariant ? t(selectedVariant.description || '') : ''}
        htmlContent={selectedVariant?.demoHTML || ''}
        customStyles={selectedVariant?.customStyles || ''}
        variant={selectedVariant}
      />
    </>
  );
}

export default ComponentDetailPage;
