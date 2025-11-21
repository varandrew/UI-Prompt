import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * CodeModal - 代碼查看彈窗
 * 显示組件變体的 HTML 和 CSS 代碼,支持語法高亮和複製
 */
export function CodeModal({ isOpen, onClose, variant }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('html'); // 'html' | 'css' | 'full'
  const [copied, setCopied] = useState(false);

  if (!isOpen || !variant) return null;

  // 處理複製代碼
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // 獲取當前 Tab 的代碼
  const noCustomStylesComment = `/* ${t('ui.noCustomStyles')} */`;
  const getCurrentCode = () => {
    switch (activeTab) {
      case 'html':
        return variant.demoHTML || '';
      case 'css':
        return variant.customStyles || noCustomStylesComment;
      case 'full':
        return `<!-- HTML -->\n${variant.demoHTML || ''}\n\n<style>\n${variant.customStyles || noCustomStylesComment}\n</style>`;
      default:
        return '';
    }
  };

  const currentCode = getCurrentCode();
  const hasCustomStyles = variant.customStyles && variant.customStyles.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* 頭部 */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {variant.name ? (() => {
                // 检查是否為 i18n 鍵（包含點分隔的命名空間）
                const isI18nKey = /^(data|styles|nav|common|ui|demo|pages|buttons|filter|toast|preview|prompt)\./.test(variant.name);
                return isI18nKey ? t(variant.name) : variant.name;
              })() : ''}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {variant.description ? (() => {
                // 检查是否為 i18n 鍵（包含點分隔的命名空間）
                const isI18nKey = /^(data|styles|nav|common|ui|demo|pages|buttons|filter|toast|preview|prompt)\./.test(variant.description);
                return isI18nKey ? t(variant.description) : variant.description;
              })() : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab 导航 */}
        <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('html')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'html'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            HTML
          </button>
          {hasCustomStyles && (
            <button
              onClick={() => setActiveTab('css')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'css'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              CSS
            </button>
          )}
          <button
            onClick={() => setActiveTab('full')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'full'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('ui.fullCode')}
          </button>

          {/* 複製按鈕 */}
          <button
            onClick={() => handleCopy(currentCode)}
            className="ml-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('ui.copiedShort')}</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{t('ui.copyCode')}</span>
              </>
            )}
          </button>
        </div>

        {/* 代碼內容区域 */}
        <div className="flex-1 overflow-auto bg-gray-900">
          <SyntaxHighlighter
            language={activeTab === 'css' ? 'css' : 'html'}
            style={vscDarkPlus}
            showLineNumbers
            wrapLines
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              minHeight: '100%'
            }}
          >
            {currentCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default CodeModal;
