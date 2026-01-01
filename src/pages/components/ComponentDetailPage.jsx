import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { LANG_TO_URL } from '../../components/seo/seoConfig';
import { usePromptContent } from '../../hooks/usePromptContent';
import { VariantGrid } from '../../components/ui/VariantGrid';
import { CodeModal } from '../../components/ui/CodeModal';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import DOMPurify from 'dompurify';
import { promptGenerator } from '../../utils/prompt/PromptGeneratorFacade';
import { getCategoryNavKey } from '../../utils/componentHelper';
import { createI18nResolver } from '../../utils/i18n/resolveI18nValue';

/**
 * ComponentDetailPage - 組件詳情页 (支持多變体瀑布流佈局)
 * 路由: /components/:category/:componentId
 * 支持: Route Loader 預加載 + 點擊預覽 + Prompt 功能
 *
 * @architecture
 * - 使用 Route Loader 在路由層預加載數據，避免加載閃爍
 * - 從 JSON 加載組件數據，與 Style 頁面架構對齊
 */
export function ComponentDetailPage() {
  const { category, componentId } = useParams();
  const navigate = useNavigate();
  const { t, language, _translationsVersion } = useLanguage();

  // 從 Route Loader 獲取預加載的組件數據
  const loaderData = useLoaderData();
  const componentFromLoader = loaderData?.component;

  // UI 狀態
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  // 路由參數變更時重置 UI 狀態（避免舊數據殘留）
  useEffect(() => {
    setSelectedVariant(null);
    setShowCodeModal(false);
    setShowPrompt(false);
  }, [category, componentId]);

  // 解析組件數據，處理 i18n 鍵
  const componentData = useMemo(() => {
    if (!componentFromLoader) return null;

    void _translationsVersion;

    // 使用共享的 i18n 解析器
    const resolveI18n = createI18nResolver(language, t);

    // 獲取分類配置 - 使用 componentHelper 統一管理
    const categoryId = componentFromLoader.category || category;
    const resolvedComponentId = componentFromLoader.id || componentId;
    // 從 registry 動態獲取 nav key，避免硬編碼
    const navKey = getCategoryNavKey(categoryId);

    const getTranslatedOrFallback = (i18nKey, fallbackValue) => {
      if (!i18nKey) return fallbackValue;
      const translated = t(i18nKey);
      return translated && translated !== i18nKey ? translated : fallbackValue;
    };

    const baseKey = resolvedComponentId
      ? `data.components.${categoryId}.${resolvedComponentId}`
      : null;

    return {
      ...componentFromLoader,
      title: getTranslatedOrFallback(
        baseKey ? `${baseKey}.title` : null,
        resolveI18n(componentFromLoader.title)
      ),
      description: getTranslatedOrFallback(
        baseKey ? `${baseKey}.description` : null,
        resolveI18n(componentFromLoader.description)
      ),
      categoryId: categoryId,
      categoryKey: navKey,
      categoryIcon: '',
      categoryLabel: t(`nav.${navKey}`),
      // 處理變體的 i18n - 添加安全檢查
      variants: (componentFromLoader.variants || []).map(variant => ({
        ...variant,
        name: getTranslatedOrFallback(
          baseKey && variant.id ? `${baseKey}.variants.${variant.id}.name` : null,
          resolveI18n(variant.name)
        ),
        description: getTranslatedOrFallback(
          baseKey && variant.id ? `${baseKey}.variants.${variant.id}.description` : null,
          resolveI18n(variant.description)
        )
      }))
    };
  }, [componentFromLoader, language, t, category, componentId, _translationsVersion]);

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

  // 處理預覽 - 導航到全頁預覽頁面
  const handlePreview = (variant, variantIndex) => {
    // 導航到 ComponentPreviewPage (Style Preview UI)
    const variantIdx = variantIndex ?? componentData.variants.findIndex(v => v.id === variant.id);
    const urlLang = LANG_TO_URL[language] || 'zh';
    const url = `/${urlLang}/components/preview/${category}/${componentId}${variantIdx > 0 ? `?variantIndex=${variantIdx}` : ''}`;
    navigate(url);
  };

  // 生成 Prompt 內容（使用共享的 hook）
  const promptContent = usePromptContent(
    () => {
      if (!selectedVariant) return '';
      // 使用 PromptGeneratorFacade 的便捷方法
      // 內部自動處理：責任鏈查找 → 5層降級 → 類型驗證
      return promptGenerator.generateForVariant(
        selectedVariant,
        componentId,
        category,
        language
      );
    },
    [selectedVariant, componentId, category, language],
    { loggerName: 'ComponentDetailPage' }
  );

  // 返回按鈕
  const handleBack = () => {
    const urlLang = LANG_TO_URL[language] || 'zh';
    navigate(`/${urlLang}/components`);
  };

  // 找不到組件（Route loader 應該已處理 404，這是備用）
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
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
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
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                  <span>{componentData.categoryIcon}</span>
                  <span>{componentData.categoryLabel}</span>
                </span>
              </div>

              {/* 組件标題 */}
              <h1 className="text-3xl md:text-4xl font-light mb-3 text-black dark:text-white">
                {componentData.title}
              </h1>

              {/* 完整描述 */}
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl mb-2">
                {componentData.description}
              </p>

              {/* 變体数量提示 */}
              {hasVariants && (
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-3 bg-gray-50 dark:bg-gray-900">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t('ui.componentPreview')}
              </h3>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-[400px] flex items-center justify-center">
              <div
                className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                // 安全處理：DOMPurify XSS 清理
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(componentData.demoHTML || '') }}
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
        title={selectedVariant ? selectedVariant.name : ''}
        content={promptContent}
        customPrompt={selectedVariant?.customPrompt?.[language] || ''}
        stylePrompt={selectedVariant?.stylePrompt?.[language] || ''}
      />
    </>
  );
}

export default ComponentDetailPage;
