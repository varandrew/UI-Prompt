# StylePreviewPage 空白頁面修復計劃

## 問題診斷總結

### 核心問題
當訪問 `/styles/preview/retro-digitalRetro` 時，某些模板（如 vaporwave）會顯示空白頁面，而其他模板（如 pixelArt、terminal-cli）正常顯示。

### 根本原因分析

#### 1. **數據完整性問題**（最嚴重）
- **vaporwave 模板缺少關鍵文件**：
  - ✅ 有：`demo.html`（僅 1 行，90 bytes：`<h4>ＶＡＰＯＲＷＡＶＥ</h4>`）
  - ❌ 缺少：`fullpage.html`
  - ❌ 缺少：`fullpage.css`
  - ❌ 缺少：`demo.css`（可能存在但未確認）

- **對比正常模板**（pixelArt）：
  - ✅ 有：`demo.html` (1.1K)
  - ✅ 有：`demo.css` (888B)
  - ✅ 有：`fullpage.html` (10K)
  - ✅ 有：`fullpage.css` (12K)

#### 2. **加載邏輯缺陷**
位置：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/data/loaders/jsonStyleLoader.js:658-669`

```javascript
// Level 3B: 自動生成 preview（無 manifest.previews 但有 fullPageHTML）
else if (templateContent.fullPageHTML && templateContent.fullPageHTML.length > 100) {
  processedPreviews = [{
    id: templateId.replace(/^.*-/, ''),
    name: resolvedTitle,
    type: 'fullpage',
    html: templateContent.fullPageHTML,
    styles: templateContent.fullPageStyles || templateContent.customStyles || '',
    previewId: templateId
  }];
}
// 無 preview 數據：processedPreviews 保持為空數組
```

**問題**：
- 條件 `fullPageHTML.length > 100` 過於嚴格
- vaporwave 沒有 `fullPageHTML`，導致 `processedPreviews = []`
- **沒有回退到 `demoHTML`**

#### 3. **渲染邏輯問題**
位置：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/pages/styles/StylePreviewPage.jsx:296-314`

```javascript
// 若當前預覽有 previewId（需異步載入），在載入完成前若無內嵌內容則显示骨架
if (current?.previewId) {
  const hasInlinePreview = typeof current.html === 'string' && current.html.trim().length > 0;
  if (!hasInlinePreview && (asyncPreview === null || isLoadingPreview)) {
    // 回傳輕量骨架页面，等待載入完成
    return `<!DOCTYPE html>...<div class="center">${t('loading')}</div>...`;
  }
}
```

**問題**：
- 當 `processedPreviews = []` 時，沒有 `current` 對象
- 但 `fullPagePreviewId` 可能存在
- 骨架頁面可能因 iframe 不觸發 `onLoad` 而永遠顯示

#### 4. **Loading 狀態競態條件**
位置：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/pages/styles/StylePreviewPage.jsx:138-212`

```javascript
// 重置預覽索引（Line 139-152）
useEffect(() => {
  // ...
  setIsLoading(true);
}, [style.id, previewsList, searchParams, getDefaultIndex]);

// 預覽切換（Line 155-157）
useEffect(() => {
  setIsLoading(true);
}, [activeIndex]);

// 異步加載（Line 160-204）
useEffect(() => {
  // ...
  setIsLoadingPreview(true);
  loadPreview(previewId).then(...).finally(() => {
    if (!cancelled) setIsLoadingPreview(false);
  });
}, [activeIndex, previewsList, fullPagePreviewId]);

// 超時後備（Line 207-212）
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);  // ⚠️ 不考慮 isLoadingPreview
  }, 2000);
}, [style.id]);
```

**問題**：
- 多個 useEffect 同時設置 `isLoading = true`
- 超時機制只設置 `isLoading = false`，不檢查 `isLoadingPreview`
- iframe `onLoad` 是唯一能可靠關閉 Loading 的方式
- 如果骨架頁面被渲染，但 iframe 沒有觸發 `onLoad`（或觸發太快），Loading 永遠不關閉

---

## 修復方案設計

### 優先級分級

#### P0 - 關鍵修復（必須解決）
1. **修復數據加載器的回退邏輯**
2. **改進 Loading 狀態管理**
3. **確保 iframe onLoad 正確觸發**

#### P1 - 重要優化（強烈建議）
4. **為 vaporwave 創建完整的 fullpage 內容**
5. **增強錯誤邊界處理**

---

## 詳細實施計劃

### 修復 1：數據加載器回退邏輯（P0）

**文件**：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/data/loaders/jsonStyleLoader.js`

**問題位置**：Line 658-669

**當前邏輯**：
```javascript
// Level 3B: 自動生成 preview
else if (templateContent.fullPageHTML && templateContent.fullPageHTML.length > 100) {
  processedPreviews = [{ /* ... */ }];
}
// 無 preview 數據：processedPreviews 保持為空數組
```

**修復方案**：
```javascript
// Level 3B: 自動生成 preview（fullPageHTML 優先）
else if (templateContent.fullPageHTML && templateContent.fullPageHTML.length > 100) {
  processedPreviews = [{
    id: templateId.replace(/^.*-/, ''),
    name: resolvedTitle,
    type: 'fullpage',
    html: templateContent.fullPageHTML,
    styles: templateContent.fullPageStyles || templateContent.customStyles || '',
    previewId: templateId
  }];
  console.log(`[loadFullFamily] 模板 ${templateId} 自動生成 preview (fullPageHTML), HTML: ${templateContent.fullPageHTML.length} chars`);
}
// ✨ 新增 Level 3C: 回退到 demoHTML
else if (templateContent.demoHTML && templateContent.demoHTML.trim().length > 0) {
  processedPreviews = [{
    id: templateId.replace(/^.*-/, ''),
    name: resolvedTitle,
    type: 'demo',  // 標記為 demo 類型
    html: templateContent.demoHTML,
    styles: templateContent.customStyles || '',
    previewId: null  // 無需異步加載
  }];
  console.log(`[loadFullFamily] 模板 ${templateId} 回退到 demoHTML, HTML: ${templateContent.demoHTML.length} chars`);
}
// 最終回退：仍無內容則保持空數組（但這種情況應該極少）
```

**影響**：
- ✅ vaporwave 將使用 `demoHTML`（90 bytes）而非空數組
- ✅ 其他有 `fullPageHTML` 的模板不受影響
- ✅ 保持向後兼容

**風險**：
- ⚠️ `demoHTML` 內容可能過於簡單（如 vaporwave 只有標題）
- 緩解：在 UI 層增加"內容不完整"提示

---

### 修復 2：改進 buildPreviewHTML 回退邏輯（P0）

**文件**：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/pages/styles/StylePreviewPage.jsx`

**問題位置**：Line 225-483（`buildPreviewHTML` 函數）

**當前邏輯**：
- 沒有處理 `previewsList` 為空或無有效預覽的情況
- 骨架頁面可能永遠顯示

**修復方案**：

在 `buildPreviewHTML()` 函數的預覽列表處理部分（Line 292-427）添加更健壯的回退：

```javascript
// 若提供多個預覽，优先採用當前預覽的內容
if (previewsList && previewsList.length > 0) {
  const current = previewsList[Math.min(activeIndex, previewsList.length - 1)] || previewsList[0];

  // 若當前預覽有 previewId（需異步載入），在載入完成前若無內嵌內容則显示骨架
  if (current?.previewId) {
    const hasInlinePreview = typeof current.html === 'string' && current.html.trim().length > 0;
    if (!hasInlinePreview && (asyncPreview === null || isLoadingPreview)) {
      // ✨ 修復：確保骨架頁面能觸發 onLoad
      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('loading')}</title>
  <style>
    ${BASE_PREVIEW_STYLES}
    .center{display:flex;align-items:center;justify-content:center;height:60vh;color:#666}
  </style>
</head>
<body>
  <div class="center">${t('loading')}</div>
  <script>
    // ✨ 確保 onLoad 觸發
    window.addEventListener('load', function() {
      console.log('[Preview] Skeleton page loaded');
    });
  </script>
</body>
</html>`;
    }
  }

  // ✨ 新增：處理 preview 類型為 'demo' 的情況
  if (current.type === 'demo') {
    const previewHTML = current.html || '';
    const previewStyles = current.styles || customStyles || '';
    
    return buildHTMLDocument({
      title: t('preview.title', { title: displayTitle }),
      language,
      styles: sanitizeStyles(previewStyles),
      content: processHTML(previewHTML, language),
      bodyClass: 'preview-demo'  // 區分 demo 模式
    });
  }

  // ... 其餘邏輯保持不變
}

// ✨ 新增：當 previewsList 為空但有 demoHTML 時的回退
if (!previewsList || previewsList.length === 0) {
  if (demoHTML && demoHTML.trim().length > 0) {
    return buildHTMLDocument({
      title: t('preview.title', { title: displayTitle }),
      language,
      styles: sanitizeStyles(customStyles),
      content: processHTML(demoHTML, language),
      bodyClass: 'preview-demo-fallback'
    });
  }
}
```

**影響**：
- ✅ 即使 `previewsList` 為空，也能顯示 `demoHTML`
- ✅ 骨架頁面增加 `onLoad` 腳本確保事件觸發
- ✅ 區分 demo 模式和 full 模式（可添加視覺提示）

---

### 修復 3：Loading 狀態管理優化（P0）

**文件**：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/pages/styles/StylePreviewPage.jsx`

**問題位置**：Line 138-212（多個 useEffect）

**當前問題**：
- `isLoading` 和 `isLoadingPreview` 狀態不同步
- 超時後備不考慮異步加載狀態

**修復方案**：

#### 方案 A：合併 Loading 狀態（推薦）

```javascript
// 移除獨立的 isLoadingPreview，統一使用 isLoading
const [isLoading, setIsLoading] = useState(true);
const [asyncPreview, setAsyncPreview] = useState(null);

// 異步加載 useEffect 修改
useEffect(() => {
  const current = (previewsList && previewsList.length > 0)
    ? previewsList[Math.min(activeIndex, previewsList.length - 1)] || previewsList[0]
    : null;

  const previewId = current?.previewId || fullPagePreviewId;
  setAsyncPreview(null);

  if (!previewId) {
    // 沒有 async loader，保持當前 loading 狀態（由 iframe onLoad 關閉）
    return;
  }

  let cancelled = false;
  setIsLoading(true);  // ✨ 使用統一的 isLoading
  
  loadPreview(previewId)
    .then((content) => {
      if (cancelled) return;
      // ... 處理內容
      setAsyncPreview(content);
    })
    .catch((err) => {
      logger.error(`預覽載入失敗: ${previewId}`, err);
      if (!cancelled) setAsyncPreview({ html: '', styles: '' });
    })
    .finally(() => {
      // ✨ 不在這裡關閉 loading，由 iframe onLoad 處理
      // 或者如果沒有 iframe（純數據），則關閉
      if (!cancelled && !content?.html) {
        setIsLoading(false);
      }
    });

  return () => { cancelled = true; };
}, [activeIndex, previewsList, fullPagePreviewId]);
```

#### 方案 B：改進超時後備（備選）

```javascript
// 超時後備改進
useEffect(() => {
  const timer = setTimeout(() => {
    // ✨ 檢查所有 loading 條件
    setIsLoading(prev => {
      // 如果異步加載已完成或失敗，則關閉 loading
      if (asyncPreview !== null || !isLoadingPreview) {
        return false;
      }
      // 否則保持當前狀態
      return prev;
    });
  }, 3000);  // ✨ 延長至 3 秒
  return () => clearTimeout(timer);
}, [style.id, asyncPreview, isLoadingPreview]);
```

**推薦**：方案 A（統一狀態）+ 方案 B（增強超時）

**影響**：
- ✅ 減少狀態競態條件
- ✅ 確保 Loading 最終會關閉
- ✅ 改善用戶體驗

---

### 修復 4：iframe onLoad 可靠性增強（P0）

**文件**：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/pages/styles/StylePreviewPage.jsx`

**問題位置**：Line 707-714（iframe 渲染）

**當前代碼**：
```javascript
<iframe
  key={`${style.id}:${activeIndex}:${asyncPreview ? 'ready' : 'loading'}`}
  title={t('preview.header', { title: displayTitle })}
  srcDoc={buildPreviewHTML()}
  className="w-full h-full border-0"
  onLoad={() => setIsLoading(false)}
  sandbox="allow-scripts allow-forms"
/>
```

**修復方案**：

```javascript
<iframe
  key={`${style.id}:${activeIndex}:${asyncPreview ? 'ready' : 'loading'}`}
  title={t('preview.header', { title: displayTitle })}
  srcDoc={buildPreviewHTML()}
  className="w-full h-full border-0"
  onLoad={(e) => {
    console.log('[iframe] onLoad triggered', {
      styleId: style.id,
      activeIndex,
      hasAsyncPreview: !!asyncPreview,
      contentLength: e.target.contentDocument?.body?.innerHTML?.length || 0
    });
    setIsLoading(false);
  }}
  onError={(e) => {
    console.error('[iframe] onError triggered', e);
    setIsLoading(false);  // ✨ 確保錯誤時也關閉 loading
  }}
  sandbox="allow-scripts allow-forms"
/>
```

**影響**：
- ✅ 增加調試信息
- ✅ 處理 iframe 錯誤情況
- ✅ 確保 Loading 總能關閉

---

### 修復 5：為 vaporwave 創建完整內容（P1）

**文件**：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/public/data/content/retro/digitalRetro/vaporwave/`

**當前狀態**：
- ✅ `demo.html`（90 bytes，僅標題）
- ❌ `fullpage.html`（不存在）
- ❌ `fullpage.css`（不存在）

**修復方案**：

#### 選項 A：創建完整的 vaporwave fullpage（推薦）

創建 `/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/public/data/content/retro/digitalRetro/vaporwave/fullpage.html`：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ＶＡＰＯＲＷＡＶＥ</title>
</head>
<body class="vaporwave-body">
  <div class="vaporwave-container">
    <header class="vaporwave-header">
      <h1 class="vaporwave-title">ＶＡＰＯＲＷＡＶＥ</h1>
      <p class="vaporwave-subtitle">リラックス　aesthetics　夢</p>
    </header>
    
    <main class="vaporwave-grid">
      <div class="vaporwave-card">
        <div class="vaporwave-card-inner">
          <h3>Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ</h3>
          <p>Nostalgic digital dreams</p>
        </div>
      </div>
      
      <div class="vaporwave-card">
        <div class="vaporwave-card-inner">
          <h3>リラックス</h3>
          <p>Smooth vibes only</p>
        </div>
      </div>
      
      <div class="vaporwave-card">
        <div class="vaporwave-card-inner">
          <h3>９０ｓ　ＶＩＢＥＳ</h3>
          <p>Retro future aesthetics</p>
        </div>
      </div>
    </main>
    
    <div class="vaporwave-pattern"></div>
  </div>
</body>
</html>
```

創建 `/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/public/data/content/retro/digitalRetro/vaporwave/fullpage.css`：

```css
body.vaporwave-body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  font-family: 'Courier New', monospace;
  overflow-x: hidden;
}

.vaporwave-container {
  position: relative;
  min-height: 100vh;
  padding: 4rem 2rem;
}

.vaporwave-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
}

.vaporwave-title {
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: bold;
  color: #ff6ec7;
  text-shadow: 
    0 0 10px #ff6ec7,
    0 0 20px #ff6ec7,
    0 0 30px #ff6ec7,
    2px 2px 0 #00ffff,
    4px 4px 0 #7b00ff;
  letter-spacing: 0.5rem;
  margin: 0;
  animation: glow 2s ease-in-out infinite alternate;
}

.vaporwave-subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
  letter-spacing: 0.3rem;
  margin-top: 1rem;
}

.vaporwave-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.vaporwave-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 110, 199, 0.5);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 32px rgba(123, 0, 255, 0.3),
    inset 0 0 20px rgba(255, 110, 199, 0.1);
}

.vaporwave-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #ff6ec7;
  box-shadow: 
    0 12px 48px rgba(123, 0, 255, 0.5),
    inset 0 0 30px rgba(255, 110, 199, 0.2);
}

.vaporwave-card-inner h3 {
  font-size: 1.5rem;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
  letter-spacing: 0.2rem;
  margin: 0 0 1rem 0;
}

.vaporwave-card-inner p {
  color: #ff6ec7;
  font-size: 1rem;
  line-height: 1.6;
}

.vaporwave-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 110, 199, 0.1) 2px,
      rgba(255, 110, 199, 0.1) 4px
    );
  pointer-events: none;
  z-index: 1;
}

@keyframes glow {
  from {
    text-shadow: 
      0 0 10px #ff6ec7,
      0 0 20px #ff6ec7,
      0 0 30px #ff6ec7,
      2px 2px 0 #00ffff,
      4px 4px 0 #7b00ff;
  }
  to {
    text-shadow: 
      0 0 20px #ff6ec7,
      0 0 30px #ff6ec7,
      0 0 40px #ff6ec7,
      2px 2px 0 #00ffff,
      4px 4px 0 #7b00ff;
  }
}

@media (max-width: 768px) {
  .vaporwave-container {
    padding: 2rem 1rem;
  }
  
  .vaporwave-grid {
    gap: 1.5rem;
  }
}
```

#### 選項 B：從其他模板複製並修改（備選）

從 `pixelArt` 或 `terminal-cli` 複製 fullpage 文件，然後修改樣式以匹配 vaporwave 美學。

**推薦**：選項 A（創建原創內容）

**影響**：
- ✅ vaporwave 將有完整的預覽體驗
- ✅ 與其他模板保持一致性
- ⚠️ 需要設計和實現工作

---

### 修復 6：錯誤邊界和用戶反饋（P1）

**文件**：`/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/pages/styles/StylePreviewPage.jsx`

**修復方案**：

#### 6.1 添加內容不完整警告

在 Header 部分（Line 550-673）添加警告橫幅：

```javascript
{!isFullPageMode && (
  <header className="...">
    {/* ✨ 新增：內容不完整警告 */}
    {currentPreview?.type === 'demo' && (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 mb-2">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-yellow-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            {t('preview.incompleteContent') || 'This preview is showing simplified content. Full page content is not available yet.'}
          </p>
        </div>
      </div>
    )}
    
    {/* 原有的標題和按鈕 */}
    <div className="flex items-center justify-between w-full md:w-auto">
      {/* ... */}
    </div>
  </header>
)}
```

#### 6.2 添加翻譯鍵

在 `/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/i18n/zh-CN.js` 和 `en-US.js`：

```javascript
// zh-CN.js
export default {
  preview: {
    // ...
    incompleteContent: '此預覽顯示簡化內容。完整頁面內容尚未完成。'
  }
};

// en-US.js
export default {
  preview: {
    // ...
    incompleteContent: 'This preview is showing simplified content. Full page content is not available yet.'
  }
};
```

#### 6.3 添加錯誤邊界組件

創建 `/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/components/ErrorBoundary.jsx`（如果不存在）：

```javascript
import { Component } from 'react';

export class PreviewErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[PreviewErrorBoundary] Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              預覽載入失敗
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {this.state.error?.message || '發生未知錯誤'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              重新載入
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

在路由中使用：

```javascript
// src/routes/index.jsx
{
  path: '/styles/preview/:styleId',
  lazy: async () => ({
    Component: () => {
      const { StylePreviewPage } = await import('../pages/styles/StylePreviewPage.jsx');
      const { PreviewErrorBoundary } = await import('../components/ErrorBoundary.jsx');
      
      return (
        <PreviewErrorBoundary>
          <StylePreviewPage />
        </PreviewErrorBoundary>
      );
    }
  })
}
```

---

## 測試場景

### 場景 1：vaporwave 模板（僅有 demo.html）
- **URL**: `http://localhost:1000/styles/preview/retro-digitalRetro?previewIndex=2`（假設 vaporwave 是第 3 個）
- **預期行為**：
  - ✅ 顯示警告橫幅："此預覽顯示簡化內容"
  - ✅ 顯示 vaporwave 的 `demo.html`（標題）
  - ✅ Loading 在 2-3 秒內關閉
  - ✅ 沒有空白頁面

### 場景 2：pixelArt 模板（有完整 fullpage）
- **URL**: `http://localhost:1000/styles/preview/retro-digitalRetro?previewIndex=0`
- **預期行為**：
  - ✅ 正常顯示完整頁面
  - ✅ 沒有警告橫幅
  - ✅ Loading 正常關閉

### 場景 3：模板切換（從 vaporwave 到 pixelArt）
- **操作**：在 PreviewSelector 中切換模板
- **預期行為**：
  - ✅ Loading 正確顯示和關閉
  - ✅ 內容正確切換
  - ✅ 警告橫幅根據模板類型顯示/隱藏

### 場景 4：直接訪問不存在的模板
- **URL**: `http://localhost:1000/styles/preview/non-existent-style`
- **預期行為**：
  - ✅ 顯示錯誤頁面（由 RouteError 處理）
  - ✅ 不會無限 Loading

### 場景 5：網絡慢或異步加載失敗
- **操作**：在 DevTools 中限制網絡速度
- **預期行為**：
  - ✅ 顯示 Loading 最多 3 秒
  - ✅ 超時後顯示回退內容或錯誤
  - ✅ 不會永久卡住

---

## 風險與緩解

### 風險 1：修改加載器可能影響其他模板
**嚴重性**：中

**緩解措施**：
- ✅ 新增的回退邏輯（Level 3C）只在前面條件都不滿足時執行
- ✅ 使用 `type: 'demo'` 標記，UI 可區分處理
- ✅ 充分測試所有主要模板（見測試場景）

### 風險 2：demoHTML 內容過於簡單
**嚴重性**：低

**緩解措施**：
- ✅ 顯示警告橫幅告知用戶
- ✅ 提供"Edit Code"按鈕讓用戶修改
- ✅ P1 任務創建完整內容

### 風險 3：Loading 狀態管理改動可能引入新 bug
**嚴重性**：中

**緩解措施**：
- ✅ 保持超時後備機制（3 秒）
- ✅ 增加 iframe onError 處理
- ✅ 添加詳細的 console.log 用於調試

### 風險 4：為 vaporwave 創建內容需要設計工作
**嚴重性**：低

**緩解措施**：
- ✅ 標記為 P1（非必須）
- ✅ 可以從其他模板複製並修改
- ✅ 或者使用 AI 生成初始版本

---

## 實施順序

### 第 1 階段：關鍵修復（P0）
1. ✅ **修復 1**：數據加載器回退邏輯（30 分鐘）
2. ✅ **修復 2**：buildPreviewHTML 回退邏輯（30 分鐘）
3. ✅ **修復 3**：Loading 狀態管理優化（45 分鐘）
4. ✅ **修復 4**：iframe onLoad 可靠性增強（15 分鐘）

**總時長**：約 2 小時

**驗證**：運行測試場景 1、2、3

### 第 2 階段：用戶體驗優化（P1）
5. ✅ **修復 6.1 + 6.2**：添加內容不完整警告（30 分鐘）
6. ✅ **修復 6.3**：添加錯誤邊界（30 分鐘）

**總時長**：約 1 小時

**驗證**：運行測試場景 4、5

### 第 3 階段：內容完善（P1，可選）
7. ⏸️ **修復 5**：為 vaporwave 創建完整內容（2-3 小時）

**總時長**：約 2-3 小時

**驗證**：重新測試場景 1，確認不再顯示警告

---

## 回滾計劃

如果修復引入新問題，按以下順序回滾：

1. **回滾修復 3**（Loading 狀態管理）
   - 恢復原有的多個 useEffect
   - 保留 `isLoadingPreview` 狀態

2. **回滾修復 2**（buildPreviewHTML）
   - 移除 `type === 'demo'` 處理
   - 保持原有邏輯

3. **回滾修復 1**（加載器）
   - 移除 Level 3C 回退
   - `processedPreviews` 保持為空數組

4. **保留修復 4**（iframe onError）
   - 這個修復風險極低，建議保留

---

## 性能考慮

### 內存影響
- ✅ 無顯著影響（僅增加少量條件判斷）
- ✅ 移除 `isLoadingPreview` 可能略微減少狀態變量

### 渲染性能
- ✅ `buildPreviewHTML()` 已使用 useMemo（Line 487-517）
- ✅ 新增的回退邏輯不會增加額外渲染

### 網絡影響
- ✅ 無影響（不增加額外請求）
- ✅ 回退到 demoHTML 可能減少加載時間（文件更小）

---

## 後續改進建議

### 1. 自動化內容完整性檢查
創建腳本檢查所有模板是否有 `fullpage.html` 和 `fullpage.css`：

```bash
#!/bin/bash
# scripts/check-template-completeness.sh

find public/data/content -type d -mindepth 3 | while read dir; do
  if [ ! -f "$dir/fullpage.html" ] || [ ! -f "$dir/fullpage.css" ]; then
    echo "⚠️  Incomplete: $dir"
  fi
done
```

### 2. 添加數據驗證測試
在 CI/CD 中運行：

```javascript
// tests/data-validation.test.js
import { describe, it, expect } from 'vitest';
import { loadFullFamily } from '../src/data/loaders/jsonStyleLoader';

describe('Template Data Completeness', () => {
  it('all templates should have at least demoHTML or fullPageHTML', async () => {
    const families = ['digitalRetro', 'pixelArt', /* ... */];
    
    for (const familyId of families) {
      const data = await loadFullFamily('retro', familyId);
      
      for (const template of data.templates) {
        expect(
          template.demoHTML || template.fullPageHTML,
          `Template ${template.id} missing both demoHTML and fullPageHTML`
        ).toBeTruthy();
      }
    }
  });
});
```

### 3. 改進 Loading UX
- 添加進度指示器（如果加載時間 > 1 秒）
- 顯示加載階段："載入元數據" → "載入內容" → "渲染頁面"

### 4. 內容管理工具
創建管理界面檢查和修復不完整的模板：
- 列出所有缺少 fullpage 的模板
- 提供"從其他模板複製"功能
- 提供"生成預設內容"功能

---

## 結論

### 核心解決方案
通過 **4 個 P0 修復**，可以確保：
1. ✅ vaporwave 等不完整模板能顯示 `demoHTML`
2. ✅ Loading 狀態總能正確關閉
3. ✅ 沒有永久空白頁面

### 用戶體驗改進
通過 **2 個 P1 修復**，可以提供：
1. ✅ 明確的內容不完整警告
2. ✅ 健壯的錯誤處理

### 長期解決方案
通過 **P1 內容創建**，可以達到：
1. ✅ 所有模板的一致體驗
2. ✅ 無需任何警告或回退

**預計總工時**：3-6 小時（取決於是否創建完整內容）

**風險等級**：低（充分測試 + 回滾計劃）

**推薦實施**：分階段進行，優先 P0 修復
