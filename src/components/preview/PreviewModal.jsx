/**
 * PreviewModal - 預覽模態框組件
 *
 * 重構後的精簡版本：
 * - 狀態管理委託給 usePreviewState Hook
 * - HTML 構建委託給 buildPreviewHTML 工具
 * - 本組件專注於 UI 渲染和 Props 處理
 */

import { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../prompt/PromptDrawer';
import { PreviewPromptGenerator } from '../../utils/promptGenerator';
import { PreviewSelector } from './PreviewSelector';
import { hasMultiplePreviews } from '../../utils/previewsHelper';
import { DataVisualizationPreview } from './DataVisualizationPreview';
import { LANGUAGES } from '../../utils/i18n/languageConstants';

// 重構後的模組
import { usePreviewState } from './hooks/usePreviewState';
import { buildPreviewHTML } from './utils/buildPreviewHTML';

// ========== Props 處理工具 ==========

/**
 * 處理多語言文本值
 * @param {string|object} value - 原始值（可能是字符串或 i18n 對象）
 * @param {string} language - 當前語言
 * @param {Function} t - 翻譯函數
 * @returns {string} 處理後的字符串
 */
function resolveI18nValue(value, language, t) {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return value[language] ||
           value[LANGUAGES.ZH_CN_LOWER] ||
           value[LANGUAGES.ZH_CN] ||
           value[LANGUAGES.EN_US] ||
           '';
  }

  if (typeof value === 'string') {
    const translated = t(value);
    return translated !== value ? translated : value;
  }

  return '';
}

// ========== 主組件 ==========

export function PreviewModal({
  isOpen,
  onClose,
  title,
  description = '',
  htmlContent,
  customStyles = '',
  fullPageHTML = '',
  fullPageStyles = '',
  fullPagePreviewId = '',
  previews,
  colorScheme = null,
  variant = null,
  stylePrompt = null
}) {
  const { t, language } = useLanguage();

  // 使用狀態管理 Hook
  const {
    showPrompt,
    isLoading,
    isLoadingPreview,
    activeIndex,
    previewContent,
    previewsList,
    currentPreview,
    selectIndex,
    togglePrompt,
    closePrompt,
    setLoading
  } = usePreviewState({
    isOpen,
    previews,
    fullPagePreviewId,
    onClose
  });

  // 處理標題和描述
  const displayTitle = useMemo(
    () => String(resolveI18nValue(title, language, t) || ''),
    [title, language, t]
  );

  const displayDescription = useMemo(
    () => String(resolveI18nValue(description, language, t) || ''),
    [description, language, t]
  );

  // 檢查是否為 React 組件預覽
  const isReactPreview = !!(variant && variant.reactComponent);

  // 檢查是否為數據可視化類型
  const isDataVisualization = currentPreview?.type === 'data-visualization';

  // 無需異步載入（例如組件變體只有內聯 HTML）時，立即關閉 loading 遮罩
  useEffect(() => {
    if (!isOpen) return;
    if (isReactPreview) return;
    if (fullPagePreviewId) return;
    if (previewsList.length === 0) {
      setLoading(false);
    }
  }, [isOpen, isReactPreview, fullPagePreviewId, previewsList.length, setLoading]);

  // 構建 Prompt 內容
  const promptContent = useMemo(() => {
    const previewDescription = currentPreview?.description
      ? resolveI18nValue(currentPreview.description, language, t)
      : '';
    const previewFeatures = currentPreview?.features || [];
    const previewColorScheme = currentPreview?.colorScheme?.[language] || colorScheme?.[language] || '';

    const styleObject = {
      title: displayTitle,
      description: displayDescription,
      stylePrompt,
      fullPageHTML: previewsList.length > 0
        ? (previewsList[activeIndex]?.html || previewsList[0]?.html || '')
        : (fullPageHTML || htmlContent),
      demoHTML: htmlContent
    };

    return PreviewPromptGenerator.generate(
      styleObject,
      displayDescription,
      styleObject.fullPageHTML,
      language,
      previewDescription,
      previewFeatures,
      previewColorScheme,
      currentPreview
    );
  }, [
    currentPreview, language, t, displayTitle, displayDescription,
    stylePrompt, previewsList, activeIndex, fullPageHTML, htmlContent, colorScheme
  ]);

  // 構建預覽 HTML
  const previewHTMLContent = useMemo(() => {
    return buildPreviewHTML({
      previewContent,
      previewsList,
      activeIndex,
      fullPagePreviewId,
      fullPageHTML,
      fullPageStyles,
      htmlContent,
      customStyles,
      language,
      displayTitle,
      t
    });
  }, [
    previewContent, previewsList, activeIndex, fullPagePreviewId,
    fullPageHTML, fullPageStyles, htmlContent, customStyles,
    language, displayTitle, t
  ]);

  // Early return: 未打開
  if (!isOpen) return null;

  // Early return: 數據可視化類型
  if (isDataVisualization) {
    return (
      <DataVisualizationPreview
        isOpen={isOpen}
        onClose={onClose}
        style={{
          title: displayTitle,
          description: displayDescription
        }}
        initialScenario={currentPreview?.scenario}
      />
    );
  }

  // ========== 渲染 ==========

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 h-full w-full flex flex-col">
          {/* Header */}
          <header className="border-b dark:border-gray-700 p-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-800 gap-3 md:gap-2">
            <h3 className="text-lg font-semibold dark:text-gray-100">
              {t('preview.header', { title: displayTitle })}
            </h3>

            <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch md:items-center w-full md:w-auto">
              {/* 預覽選擇器 */}
              {hasMultiplePreviews(previewsList) && (
                <div className="w-full md:w-auto md:mr-2">
                  <PreviewSelector
                    previews={previewsList}
                    activeIndex={activeIndex}
                    onChange={selectIndex}
                    variant="auto"
                  />
                </div>
              )}

              <div className="flex gap-2">
                {/* Prompt 按鈕 */}
                <button
                  onClick={togglePrompt}
                  className="flex-1 md:flex-none px-4 py-2 text-sm rounded border dark:border-gray-600 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {t('buttons.prompt')}
                </button>

                {/* 關閉按鈕 */}
                <div
                  onClick={onClose}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onClose();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer flex items-center justify-center dark:text-gray-100"
                  aria-label={t('buttons.close')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-auto custom-scrollbar relative">
            {/* Loading Overlay */}
            {!isReactPreview && (isLoading || isLoadingPreview) && (
              <div className="absolute inset-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-center">
                <div className="minimalism-loader">
                  <div className="minimalism-loader-dot"></div>
                  <div className="minimalism-loader-dot"></div>
                  <div className="minimalism-loader-dot"></div>
                </div>
                {isLoadingPreview && (
                  <div className="mt-4 text-sm text-gray-600">
                    {t('preview.loadingContent')} ...
                  </div>
                )}
              </div>
            )}

            {/* Preview Content */}
            {isReactPreview ? (
              (() => {
                const ReactComp = variant.reactComponent;
                return (
                  <div className="w-full h-full overflow-auto p-4">
                    <ReactComp autoStart={true} mode="full" />
                  </div>
                );
              })()
            ) : (
              <iframe
                key={`${displayTitle}:${activeIndex}:${previewContent ? 'ready' : 'loading'}`}
                title={t('preview.header', { title: displayTitle })}
                srcDoc={previewHTMLContent}
                className="w-full h-full border-0"
                onLoad={() => setLoading(false)}
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            )}
          </div>
        </div>
      </div>

      {/* Prompt Drawer */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={closePrompt}
        title={t('preview.promptTitle', { title: displayTitle })}
        content={promptContent}
      />
    </>
  );
}

// PropTypes 定義
PreviewModal.propTypes = {
  /** 模態框是否開啟 */
  isOpen: PropTypes.bool.isRequired,
  /** 關閉回調函數 */
  onClose: PropTypes.func.isRequired,
  /** 風格標題 */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      'zh-CN': PropTypes.string,
      'en-US': PropTypes.string
    })
  ]),
  /** 風格描述 */
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      'zh-CN': PropTypes.string,
      'en-US': PropTypes.string
    })
  ]),
  /** 卡片級 HTML 內容 */
  htmlContent: PropTypes.string,
  /** 自定義 CSS 樣式 */
  customStyles: PropTypes.string,
  /** 完整頁面 HTML */
  fullPageHTML: PropTypes.string,
  /** 完整頁面樣式 */
  fullPageStyles: PropTypes.string,
  /** 完整頁面預覽 ID */
  fullPagePreviewId: PropTypes.string,
  /** 預覽列表 */
  previews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    html: PropTypes.string,
    styles: PropTypes.string,
    type: PropTypes.oneOf(['full', 'inline', 'data-visualization']),
    previewId: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    features: PropTypes.array,
    colorScheme: PropTypes.object
  })),
  /** 配色方案 */
  colorScheme: PropTypes.shape({
    'zh-CN': PropTypes.string,
    'en-US': PropTypes.string
  }),
  /** 變體對象 */
  variant: PropTypes.shape({
    reactComponent: PropTypes.elementType
  }),
  /** 風格 Prompt */
  stylePrompt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      'zh-CN': PropTypes.string,
      'en-US': PropTypes.string
    })
  ])
};

export default PreviewModal;
