// File Template Generators for UI Style React Templates

/**
 * Generate HTML template file
 * @param {string} format - 'html', 'jsx' (Preact), or 'react-jsx'
 * @returns {string} HTML template content
 */
export function generateHTMLTemplate(format = 'html') {
  if (format === 'react-jsx') {
    return `import React, { useState, useEffect, useRef } from 'react';
// Import lucide icons as needed
// import { Settings, Menu, X } from 'lucide-react';

export default function DemoComponent() {
  const [state, setState] = useState(false);

  return (
    <div className="demo-container p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">React Template Demo</h2>
        {/* TODO: 添加您的 React JSX 代碼 */}
        <button
          onClick={() => setState(!state)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle: {state ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}
`;
  }

  if (format === 'jsx') {
    return `export default function DemoComponent() {
  return (
    <div className="demo-container">
      {/* TODO: 添加您的 JSX 代碼 */}
    </div>
  );
}
`;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo</title>
  <link rel="stylesheet" href="demo.css">
</head>
<body>
  <!-- TODO: 添加您的 HTML 代碼 -->
  <div class="demo-container">

  </div>
</body>
</html>
`;
}

/**
 * Generate CSS template file
 * @returns {string} CSS template content
 */
export function generateCSSTemplate() {
  return `/* TODO: 添加您的樣式代碼 */

.demo-container {
  /* 示例樣式 */
  padding: 20px;
}
`;
}

/**
 * Generate Fullpage HTML template
 * @param {string} format - 'html', 'jsx' (Preact), or 'react-jsx'
 * @returns {string} Fullpage HTML template content
 */
export function generateFullpageHTML(format = 'html') {
  if (format === 'react-jsx') {
    return `import React, { useState, useEffect, useRef } from 'react';
// Import lucide icons as needed
// import { Settings, Menu, X, ChevronRight } from 'lucide-react';

export default function FullpageComponent() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="border-b border-gray-700 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">React Fullpage Template</h1>
          <nav className="flex gap-6">
            {['home', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={\`px-4 py-2 rounded transition-colors \${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }\`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Current Tab: {activeTab}
          </h2>
          {/* TODO: 添加完整頁面內容 */}
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300">
              This is a React template with interactive state management.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-700 px-8 py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>Powered by React 18 + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
`;
  }

  if (format === 'jsx') {
    return `export default function FullpageComponent() {
  return (
    <div className="fullpage-container">
      {/* TODO: 添加完整頁面 JSX 代碼 */}
      <header className="fullpage-header">
        <h1>Fullpage Template</h1>
      </header>
      <main className="fullpage-main">
        <p>Main content here...</p>
      </main>
      <footer className="fullpage-footer">
        <p>Footer content here...</p>
      </footer>
    </div>
  );
}
`;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fullpage Demo</title>
  <link rel="stylesheet" href="fullpage.css">
</head>
<body>
  <!-- TODO: 添加完整頁面 HTML 代碼 -->
  <div class="fullpage-container">
    <header class="fullpage-header">
      <h1>Fullpage Template</h1>
    </header>
    <main class="fullpage-main">
      <p>Main content here...</p>
    </main>
    <footer class="fullpage-footer">
      <p>Footer content here...</p>
    </footer>
  </div>
</body>
</html>
`;
}

/**
 * Generate Fullpage CSS template
 * @returns {string} Fullpage CSS template content
 */
export function generateFullpageCSSTemplate() {
  return `/* TODO: 添加完整頁面樣式代碼 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
}

.fullpage-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.fullpage-header {
  padding: 20px;
  /* TODO: 添加 header 樣式 */
}

.fullpage-main {
  flex: 1;
  padding: 40px 20px;
  /* TODO: 添加 main 樣式 */
}

.fullpage-footer {
  padding: 20px;
  /* TODO: 添加 footer 樣式 */
}
`;
}

/**
 * Generate Prompt template file (Markdown)
 * @param {string} type - 'custom' or 'style'
 * @returns {string} Prompt template content
 */
export function generatePromptTemplate(type = 'custom') {
  const title = type === 'custom' ? 'Custom Prompt' : 'Style Prompt';

  return `# ${title}

## 中文版本 (zh-CN)

[TODO: 填寫中文 Prompt 內容]

${type === 'style' ? `
### 角色設定
[TODO: 描述設計師角色定位，例如：你是一位精通現代 UI 設計的設計師...]

### 視覺理念
[TODO: 描述核心視覺理念，例如：該風格強調...]

### 設計原則
[TODO: 列舉關鍵設計原則]
- 原則 1：...
- 原則 2：...
- 原則 3：...

### 交互體驗
[TODO: 描述交互特點，例如：用戶交互應該...]

### 技術實現
[TODO: 描述技術實現要點，例如：使用 CSS Grid/Flexbox...]
` : ''}

---

## English Version (en-US)

[TODO: Fill in English Prompt content]

${type === 'style' ? `
### Role Definition
[TODO: Describe designer role, e.g., You are a UI designer specializing in modern design...]

### Visual Philosophy
[TODO: Describe core visual philosophy, e.g., This style emphasizes...]

### Design Principles
[TODO: List key design principles]
- Principle 1: ...
- Principle 2: ...
- Principle 3: ...

### Interaction Experience
[TODO: Describe interaction characteristics, e.g., User interactions should...]

### Technical Implementation
[TODO: Describe technical implementation points, e.g., Use CSS Grid/Flexbox...]
` : ''}
`;
}
