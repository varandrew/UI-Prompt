import Editor from '@monaco-editor/react';
import { useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * Monaco Editor 包裝組件
 * - 支持多種語言（html, css, javascript）
 * - 支持主題切換
 * - 自動補全和語法高亮
 */
export function CodeEditor({
  value = '',
  language = 'html',
  theme = 'vs-dark',
  onChange,
  readOnly = false,
  height = '100%'
}) {
  const { t } = useLanguage();
  const handleEditorChange = useCallback((value) => {
    if (onChange && !readOnly) {
      onChange(value || '');
    }
  }, [onChange, readOnly]);

  const handleEditorMount = useCallback((editor, monaco) => {
    // 配置編輯器選項
    editor.updateOptions({
      fontSize: 14,
      fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
      lineHeight: 22,
      tabSize: 2,
      wordWrap: 'on',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      padding: { top: 16, bottom: 16 },
      renderWhitespace: 'selection',
      bracketPairColorization: { enabled: true }
    });

    // 添加 HTML 格式化配置
    if (language === 'html') {
      monaco.languages.html.htmlDefaults.setOptions({
        format: {
          tabSize: 2,
          insertSpaces: true,
          wrapLineLength: 120,
          wrapAttributes: 'auto'
        }
      });
    }

    // 添加 CSS 格式化配置
    if (language === 'css') {
      monaco.languages.css.cssDefaults.setOptions({
        validate: true,
        lint: {
          compatibleVendorPrefixes: 'warning'
        }
      });
    }
  }, [language]);

  return (
    <div className="h-full w-full">
      <Editor
        height={height}
        language={language}
        value={value}
        theme={theme}
        onChange={handleEditorChange}
        onMount={handleEditorMount}
        options={{
          readOnly,
          domReadOnly: readOnly,
          lineNumbers: 'on',
          folding: true,
          foldingHighlight: true,
          formatOnPaste: true,
          formatOnType: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: 'on',
          quickSuggestions: {
            other: true,
            comments: false,
            strings: true
          }
        }}
        loading={
          <div className="flex items-center justify-center h-full text-gray-400">
            {t('common.loading') || 'Loading editor...'}
          </div>
        }
      />
    </div>
  );
}
