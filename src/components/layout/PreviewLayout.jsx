import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { PromptButton } from '../prompt/PromptButton';
import { LANGUAGES } from "../../utils/i18n/languageConstants";

/**
 * PreviewLayout - 預覽页面专用佈局
 * 特點:
 * - 無側边欄的極简设計
 * - 頂部工具列：返回按鈕 + 标題 + AI Prompt 按鈕
 * - 全屏內容区域用於 iframe 預覽
 * - 支持響應式设計和無障礙访問
 */
export function PreviewLayout({ children, styleData, onPromptGenerate }) {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleBack = () => {
    // 优先返回到 /styles 页面，如果有 referrer 則使用 referrer
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/styles');
    }
  };

  const getStyleTitle = () => {
    if (!styleData) return t('ui.preview');

    // 如果 title 是翻譯鍵值，直接使用 t() 翻譯
    if (typeof styleData.title === 'string' && styleData.title.includes('.')) {
      return t(styleData.title);
    }

    // 如果 title 是對象，根据語言選擇
    if (typeof styleData.title === 'object') {
      return styleData.title[language] || styleData.title[LANGUAGES.ZH_CN] || styleData.title[LANGUAGES.ZH_CN_LOWER] || styleData.title[LANGUAGES.EN_US] || '';
    }

    // 否則直接使用 title
    return styleData.title || t('ui.preview');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頂部工具列 */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 md:px-6 h-14 flex items-center justify-between">
          {/* 左側：返回按鈕 */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2"
            aria-label={t('ui.goBack')}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="hidden sm:inline">
              {t('ui.back')}
            </span>
          </button>

          {/* 中央：風格标題 */}
          <h1 className="flex-1 text-center mx-4">
            <span className="text-base md:text-lg font-medium text-gray-900 truncate">
              {getStyleTitle()}
            </span>
            <span className="hidden sm:inline text-sm text-gray-500 ml-2">
              {t('buttons.preview')}
            </span>
          </h1>

          {/* 右側：AI Prompt 按鈕 */}
          <div className="flex items-center gap-2">
            {styleData && onPromptGenerate && (
              <PromptButton
                style={styleData}
                variant="header"
                size="sm"
                onPromptGenerate={onPromptGenerate}
              />
            )}

            {/* 語言切換按鈕 (移動端隱藏) */}
            <button
              onClick={() => window.location.reload()}
              className="hidden md:flex items-center justify-center w-8 h-8 text-xs text-gray-600 hover:text-black hover:bg-gray-100 rounded border border-gray-300 hover:border-gray-400 transition-all duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2"
              aria-label={t('ui.refresh')}
              title={t('ui.refresh')}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 主要內容区域 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 底部信息條 (可選) */}
      {styleData && (
        <footer className="sticky bottom-0 bg-white border-t border-gray-200 px-4 md:px-6 py-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>
              {styleData.category && t('ui.category')}
              {styleData.categoryKey && styleData.categoryKey !== styleData.category &&
                ` • ${styleData.categoryKey}`}
            </span>
            <span className="hidden sm:inline">
              {t('ui.poweredBy')}
            </span>
          </div>
        </footer>
      )}
    </div>
  );
}

/**
 * PreviewErrorBoundary - 預覽页面错誤边界
 * 當預覽页面出現错誤時显示友善的错誤提示
 */
export function PreviewErrorBoundary({ error, resetError }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/styles');
    resetError && resetError();
  };

  return (
    <PreviewLayout styleData={null}>
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {t('ui.previewError')}
          </h2>

          <p className="text-gray-600 mb-6">
            {error?.message || t('ui.previewErrorMessage')}
          </p>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleGoBack}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2"
            >
              {t('ui.goBack')}
            </button>

            {resetError && (
              <button
                onClick={resetError}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors duration-200 focus:outline-2 focus:outline-black focus:outline-offset-2"
              >
                {t('ui.retry')}
              </button>
            )}
          </div>
        </div>
      </div>
    </PreviewLayout>
  );
}