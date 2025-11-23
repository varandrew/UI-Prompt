import { useState } from 'react';

/**
 * 代碼編輯器工具欄
 * - Tab 切換
 * - 主題切換
 * - 複製/重置/下載功能
 */
export function CodeEditorToolbar({
  title,
  tabs,
  activeTab,
  onTabChange,
  theme,
  onThemeToggle,
  onCopy,
  onReset,
  onDownload,
  isVertical,
  onLayoutToggle,
  onClose,
  t
}) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <header className="border-b border-gray-700 bg-gray-800 px-4 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
      {/* 左側：標題和 Tab */}
      <div className="flex items-center gap-4">
        <h3 className="text-white text-sm font-medium truncate max-w-[200px]" title={title}>
          {title}
        </h3>

        {/* Tab 切換 */}
        <div className="flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 右側：工具按鈕 */}
      <div className="flex items-center gap-2">
        {/* 佈局切換 */}
        <button
          onClick={onLayoutToggle}
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 transition-colors"
          title={t('codeEditor.toggleLayout') || 'Toggle Layout'}
        >
          {isVertical ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* 主題切換 */}
        <button
          onClick={onThemeToggle}
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 transition-colors"
          title={t('codeEditor.toggleTheme') || 'Toggle Theme'}
        >
          {theme === 'vs-dark' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* 複製 */}
        <button
          onClick={handleCopy}
          className={`p-1.5 rounded transition-colors ${
            copySuccess
              ? 'text-green-400 bg-green-900/50'
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
          title={copySuccess ? (t('toast.copied') || 'Copied!') : (t('buttons.copy') || 'Copy')}
        >
          {copySuccess ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>

        {/* 重置 */}
        <button
          onClick={onReset}
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 transition-colors"
          title={t('codeEditor.reset') || 'Reset'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>

        {/* 下載 */}
        <button
          onClick={onDownload}
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 transition-colors"
          title={t('codeEditor.download') || 'Download'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>

        {/* 分隔線 */}
        <div className="w-px h-5 bg-gray-600 mx-1" />

        {/* 關閉 */}
        <button
          onClick={onClose}
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-gray-700 transition-colors"
          title={t('buttons.close') || 'Close'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </header>
  );
}
