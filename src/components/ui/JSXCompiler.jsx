import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { compileForIframe } from '../../utils/jsxCompiler';
import { generatePreactIframeHTML } from '../../utils/preactRuntime';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * JSXCompiler - JSX 編譯和 Preact 渲染組件
 *
 * 職責：
 * - 將 JSX 代碼編譯為純 JavaScript
 * - 使用 Preact 運行時渲染編譯後的代碼
 * - 處理編譯錯誤並顯示友好的錯誤信息
 * - 提供編譯狀態指示器
 *
 * @param {Object} props
 * @param {string} props.jsxCode - 必需：JSX 代碼字符串
 * @param {string} props.customStyles - 必需：自定義 CSS 樣式
 * @param {string} props.id - 必需：組件 ID（用於 iframe title）
 * @param {boolean} props.isVisible - 可選：是否可見（用於延遲編譯）
 * @param {string} props.componentName - 可選：組件名稱（默認 'DemoComponent'）
 * @param {string} props.mountId - 可選：掛載點 ID（默認 'root'）
 * @param {function} props.onCompileStart - 可選：編譯開始回調
 * @param {function} props.onCompileSuccess - 可選：編譯成功回調
 * @param {function} props.onCompileError - 可選：編譯錯誤回調
 * @param {string} props.demoBoxClass - 可選：demo 容器的 CSS class
 * @param {object} props.demoBoxStyle - 可選：demo 容器的內聯樣式
 */
export function JSXCompiler({
  jsxCode,
  customStyles = '',
  id,
  isVisible = true,
  componentName = 'DemoComponent',
  mountId = 'root',
  onCompileStart,
  onCompileSuccess,
  onCompileError,
  demoBoxClass = 'bg-gray-50 dark:bg-gray-900',
  demoBoxStyle = {}
}) {
  const { t, language } = useLanguage();
  const iframeRef = useRef(null);
  const [compileError, setCompileError] = useState(null);
  const [isCompiling, setIsCompiling] = useState(false);

  /**
   * 編譯和渲染 JSX
   */
  useEffect(() => {
    if (!isVisible) return; // 延遲編譯：只有可見時才執行
    if (!jsxCode) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // 步驟 1: 開始編譯
    setIsCompiling(true);
    setCompileError(null);
    if (onCompileStart) {
      onCompileStart();
    }

    // 步驟 2: 編譯 JSX
    compileForIframe(jsxCode, { componentName })
      .then((compiledCode) => {
        // 步驟 3: 生成完整 HTML（包含 Preact 運行時）
        const fullHTML = generatePreactIframeHTML({
          compiledCode,
          customStyles,
          title: `JSX Preview - ${id || 'demo'}`,
          mountId
        });

        // 步驟 4: 注入 iframe
        try {
          doc.open();
          doc.write(fullHTML);
          doc.close();

          // 步驟 5: 編譯成功回調
          setCompileError(null);
          if (onCompileSuccess) {
            onCompileSuccess(compiledCode, iframe);
          }
        } catch (writeError) {
          console.error('JSXCompiler: Failed to write iframe document', writeError);
          setCompileError(writeError.message);
          if (onCompileError) {
            onCompileError(writeError);
          }
        }
      })
      .catch((error) => {
        // 步驟 6: 編譯錯誤處理
        console.error('JSXCompiler: Compilation failed', error);
        setCompileError(error.message);

        // 顯示友好的錯誤信息
        const errorHTML = `
          <!doctype html>
          <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style>
              body {
                margin: 0;
                padding: 16px;
                font-family: ui-monospace, monospace;
                background: #fef2f2;
              }
              .error-container {
                background: #fee2e2;
                border: 2px solid #ef4444;
                color: #dc2626;
                padding: 20px;
                border-radius: 8px;
                max-width: 600px;
                margin: 20px auto;
              }
              .error-title {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              .error-icon {
                display: inline-block;
                width: 24px;
                height: 24px;
                background: #ef4444;
                color: white;
                border-radius: 50%;
                text-align: center;
                line-height: 24px;
                font-weight: bold;
              }
              .error-message {
                font-size: 14px;
                line-height: 1.6;
                white-space: pre-wrap;
                word-break: break-word;
                background: white;
                padding: 12px;
                border-radius: 4px;
                border-left: 4px solid #ef4444;
              }
              .error-hint {
                margin-top: 12px;
                font-size: 13px;
                color: #991b1b;
                font-style: italic;
              }
            </style>
          </head>
          <body>
            <div class="error-container">
              <div class="error-title">
                <span class="error-icon">✕</span>
                <span>JSX 編譯錯誤 (JSX Compilation Error)</span>
              </div>
              <div class="error-message">${escapeHtml(error.message || 'Unknown error')}</div>
              <div class="error-hint">
                💡 提示：請檢查 JSX 語法是否正確，確保所有標籤都已閉合。
              </div>
            </div>
          </body>
          </html>
        `;

        try {
          doc.open();
          doc.write(errorHTML);
          doc.close();
        } catch (displayError) {
          console.error('JSXCompiler: Failed to display error', displayError);
        }

        // 錯誤回調
        if (onCompileError) {
          onCompileError(error);
        }
      })
      .finally(() => {
        // 步驟 7: 完成編譯（無論成功或失敗）
        setIsCompiling(false);
      });
  }, [isVisible, jsxCode, customStyles, id, componentName, mountId, onCompileStart, onCompileSuccess, onCompileError]);

  /**
   * HTML 轉義（防止 XSS）
   */
  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // 如果不可見，顯示佔位符
  if (!isVisible) {
    return (
      <div className={`demo-box ${demoBoxClass}`} style={demoBoxStyle}>
        <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-zinc-200 dark:border-zinc-700 border-t-zinc-400 dark:border-t-zinc-500 rounded-full animate-spin"></div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">{t('common.loading') || 'Loading...'}</span>
          </div>
        </div>
      </div>
    );
  }

  // 如果正在編譯，顯示編譯指示器
  if (isCompiling) {
    return (
      <div className={`demo-box ${demoBoxClass}`} style={demoBoxStyle}>
        <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-zinc-300 dark:border-zinc-600 border-t-zinc-500 dark:border-t-zinc-400 rounded-full animate-spin"></div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{language === 'zh-CN' ? '编译中...' : 'Compiling JSX...'}</span>
          </div>
        </div>
      </div>
    );
  }

  // 渲染 iframe
  return (
    <div className={`demo-box relative ${demoBoxClass}`} style={{ minHeight: '300px', ...demoBoxStyle }}>
      <iframe
        ref={iframeRef}
        title={`jsx-demo-${id}`}
        className="w-full h-full border-0"
        style={{ minHeight: '300px' }}
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
      {/* 編譯錯誤提示（iframe 外部顯示） */}
      {compileError && (
        <div className="absolute inset-0 bg-red-50 dark:bg-red-950/80 bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-800 border-2 border-red-500 dark:border-red-600 rounded-lg p-4 max-w-md shadow-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-500 dark:bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                !
              </div>
              <div className="flex-1">
                <h4 className="text-red-700 dark:text-red-400 font-semibold mb-2">JSX 編譯失敗</h4>
                <p className="text-sm text-red-600 dark:text-red-300 break-words">{compileError}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// PropTypes 定義
JSXCompiler.propTypes = {
  /** JSX 代碼字符串 */
  jsxCode: PropTypes.string.isRequired,
  /** 自定義 CSS 樣式 */
  customStyles: PropTypes.string,
  /** 組件 ID（用於 iframe title） */
  id: PropTypes.string.isRequired,
  /** 是否可見（用於延遲編譯） */
  isVisible: PropTypes.bool,
  /** 組件名稱 */
  componentName: PropTypes.string,
  /** 掛載點 ID */
  mountId: PropTypes.string,
  /** 編譯開始回調 */
  onCompileStart: PropTypes.func,
  /** 編譯成功回調 */
  onCompileSuccess: PropTypes.func,
  /** 編譯錯誤回調 */
  onCompileError: PropTypes.func,
  /** demo 容器的 CSS class */
  demoBoxClass: PropTypes.string,
  /** demo 容器的內聯樣式 */
  demoBoxStyle: PropTypes.object
};
