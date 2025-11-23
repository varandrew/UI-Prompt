# NEW 徽章系統文檔

## 📋 概述

NEW 徽章系統是一個基於 GitHub Actions 的自動化功能，用於追蹤模板更新並在 StyleCard 上顯示紅色 "NEW" 徽章。當模板在過去 7 天內創建或更新時，會自動顯示徽章。

## 🏗️ 系統架構

### 核心組件

```
┌─────────────────────────────────────────────────────────────┐
│  GitHub Actions Workflow                                    │
│  .github/workflows/track-template-updates.yml               │
│                                                              │
│  觸發條件: Push to main (templates/** 變更)                  │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Metadata Generation Scripts                                │
│                                                              │
│  1. scripts/track-updates.js                                │
│     - 檢測 Git 變更的模板文件                                 │
│     - 提取 Git 歷史和時間戳                                   │
│                                                              │
│  2. scripts/generate-metadata.js                            │
│     - 掃描所有模板文件                                        │
│     - 提取 styleId（支持單對象和數組格式）                     │
│     - 生成完整元數據                                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Metadata Storage                                            │
│  src/data/metadata/templateMetadata.json                     │
│                                                              │
│  {                                                           │
│    "templates": {                                            │
│      "styleId": {                                            │
│        "isNew": true,                                        │
│        "updatedAt": "2025-11-19T15:15:17+08:00",            │
│        "createdAt": "2025-11-19T15:15:17+08:00",            │
│        "changeType": "new",                                  │
│        "lastCommitHash": "01979cf",                          │
│        "lastCommitMessage": "feat: add new style"            │
│      }                                                       │
│    },                                                        │
│    "totalTemplates": 271,                                    │
│    "newTemplates": 271                                       │
│  }                                                           │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Frontend Display                                            │
│  src/components/ui/StyleCard.jsx                             │
│                                                              │
│  - useMemo: 智能 ID 匹配（精確 → 雙向模糊）                   │
│  - Badge 渲染: 紅色 "NEW" 徽章                                │
│  - Timestamp: 顯示最後更新時間                                │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 技術實現

### 1. Metadata 生成腳本

#### `scripts/generate-metadata.js`

**核心功能**：
- 掃描 `src/data/styles/templates/` 和 `src/data/components/` 中的所有 `.js` 文件
- 支持多種模板定義格式：
  - 單對象: `export const X = { id: 'xxx' }`
  - 數組: `export const X = [ { id: 'a' }, { id: 'b' } ]`
  - 默認導出: `export default { id: 'xxx' }`
  - 家族級 index.js (無 id，使用路徑推測)

**`extractStyleId()` 函數**：

```javascript
/**
 * 從模板文件中提取真實的 styleId（支持數組格式）
 *
 * 返回格式: string[] (數組)
 *
 * 範例：
 *   單對象: ['visual-translucent-glassmorphism']
 *   數組: ['maximalism', 'corporate', 'bauhaus']
 */
function extractStyleId(filePath) {
  const content = fs.readFileSync(absolutePath, 'utf-8')
    .replace(/^\uFEFF/, '')                    // 移除 BOM
    .replace(/\r\n/g, '\n')                    // 統一換行符
    .replace(/\/\*[\s\S]*?\*\//g, '')          // 移除多行註釋
    .replace(/\/\/.*/g, '');                   // 移除單行註釋

  // 模式 1: Named export (單對象)
  const namedMatch = content.match(
    /export\s+const\s+\w+\s*=\s*\{[^}]*id:\s*['"]([^'"]+)['"]/s
  );
  if (namedMatch) return [namedMatch[1]];

  // 模式 2: Default export
  const defaultMatch = content.match(
    /export\s+default\s*\{[^}]*id:\s*['"]([^'"]+)['"]/s
  );
  if (defaultMatch) return [defaultMatch[1]];

  // 模式 3: Array export (多個 id)
  const arrayMatch = content.match(/export\s+const\s+\w+\s*=\s*\[/);
  if (arrayMatch) {
    const idMatches = content.matchAll(/id:\s*['"]([^'"]+)['"]/g);
    const ids = Array.from(idMatches, match => match[1]);
    if (ids.length > 0) return ids;
  }

  // Fallback: 路徑推測
  return [extractStyleIdFromPath(filePath)];
}
```

**執行命令**：

```bash
# 完整掃描（強制重新生成）
node scripts/generate-metadata.js --full

# 增量更新（僅處理變更文件）
node scripts/track-updates.js
```

### 2. StyleCard 智能匹配邏輯

#### `src/components/ui/StyleCard.jsx`

**雙向模糊匹配**（解決命名風格不一致問題）：

```javascript
const metadata = useMemo(() => {
  if (!id || !templateMetadata?.templates) return null;

  // 策略 1: 精確匹配（最快，優先使用）
  if (templateMetadata.templates[id]) {
    return templateMetadata.templates[id];
  }

  // 策略 2: 雙向模糊匹配
  // 支持：
  //   - kebab-case ↔ camelCase
  //   - 前綴差異 (visual-xxx ↔ xxx)
  //   - 部分匹配
  const allKeys = Object.keys(templateMetadata.templates);
  const matchedKey = allKeys.find(key => {
    const keyLower = key.toLowerCase();
    const idLower = id.toLowerCase();
    return keyLower.includes(idLower) || idLower.includes(keyLower);
  });

  return matchedKey ? templateMetadata.templates[matchedKey] : null;
}, [id]);

const isNew = metadata?.isNew === true;
const updatedAt = metadata?.updatedAt ? new Date(metadata.updatedAt).toLocaleDateString() : null;
```

**徽章渲染**：

```jsx
{isNew && (
  <div className="absolute top-4 right-4 z-10">
    <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
      {t('common.new') || 'NEW'}
    </span>
  </div>
)}

{updatedAt && (
  <div className="mb-3">
    <p className="text-xs text-gray-400">
      {t('common.lastUpdated') || 'Last Updated'}: {updatedAt}
    </p>
  </div>
)}
```

### 3. GitHub Actions 工作流程

#### `.github/workflows/track-template-updates.yml`

```yaml
name: Track Template Updates

on:
  push:
    branches:
      - main
    paths:
      - 'src/data/styles/templates/**'
      - 'src/data/components/**'

jobs:
  update-metadata:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0  # 完整 Git 歷史

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Track template updates
        run: node scripts/track-updates.js

      - name: Generate metadata
        run: node scripts/generate-metadata.js

      - name: Commit changes
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add src/data/metadata/templateMetadata.json
          git commit -m "chore: update template metadata [skip ci]" || true
          git push
```

## 📦 文件結構

```
ui-style-react/
├── .github/
│   └── workflows/
│       └── track-template-updates.yml      # GitHub Actions 工作流程
├── scripts/
│   ├── generate-metadata.js                # 完整掃描腳本
│   ├── track-updates.js                    # Git 變更追蹤腳本
│   └── test-extract-style-id.js            # 單元測試
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── StyleCard.jsx               # 徽章顯示組件
│   ├── data/
│   │   ├── metadata/
│   │   │   └── templateMetadata.json       # 元數據存儲（271 個模板）
│   │   └── styles/
│   │       └── templates/                  # 模板文件（掃描目標）
│   ├── i18n/
│   │   ├── zh-CN.js                        # 中文翻譯（NEW, 已更新）
│   │   └── en-US.js                        # 英文翻譯（NEW, Updated）
│   └── pages/
│       └── styles/
│           └── AllStylesPage.jsx           # 篩選功能（全部/新增/已更新）
└── docs/
    └── NEW_BADGE_SYSTEM.md                 # 本文檔
```

## 🚀 使用指南

### 本地開發

#### 手動重新生成 Metadata

```bash
# 方式 1: 完整掃描（推薦）
node scripts/generate-metadata.js --full

# 方式 2: Git 增量更新
node scripts/track-updates.js
```

#### 測試 ID 提取功能

```bash
node scripts/test-extract-style-id.js
```

### 添加新模板

當你添加新模板時，**無需手動操作**，系統會自動處理：

1. **提交代碼到 GitHub**：
   ```bash
   git add src/data/styles/templates/myNewTemplate.js
   git commit -m "feat: add new template"
   git push origin main
   ```

2. **GitHub Actions 自動執行**：
   - 檢測模板文件變更
   - 運行 metadata 生成腳本
   - 提交更新的 `templateMetadata.json`

3. **NEW 徽章自動顯示**：
   - 7 天內的新模板會顯示 "NEW" 徽章
   - 7 天後自動消失

### 修改 NEW 徽章時間閾值

編輯 `scripts/generate-metadata.js`：

```javascript
const NEW_THRESHOLD_DAYS = 7;  // 改為你需要的天數
```

## 🛠️ 故障排除

### 問題 1: 某些模板沒有顯示 NEW 徽章

**可能原因**：

1. **ID 不匹配**：模板的 `id` 與 metadata 的 key 不一致
2. **缺失 metadata 條目**：模板未被掃描到
3. **命名風格差異**：kebab-case vs camelCase

**解決方案**：

```bash
# 步驟 1: 檢查 metadata 是否包含該模板
grep "\"your-style-id\":" src/data/metadata/templateMetadata.json

# 步驟 2: 如果不存在，重新生成 metadata
node scripts/generate-metadata.js --full

# 步驟 3: 確認 ID 匹配
# 在模板文件中查找實際 ID
grep -r "id: 'your-style'" src/data/styles/templates/

# 步驟 4: 如果仍有問題，檢查 StyleCard 匹配邏輯
# 模板 ID 和 metadata key 應該能通過雙向包含匹配
```

**案例研究**：之前修復的 5 個模板

| 模板 | 原 ID | Metadata Key | 解決方案 |
|------|-------|--------------|----------|
| Kawaii Minimal | `kawaii-minimal` | `visual-kawaiiMinimal` | 統一為 `visual-kawaiiMinimal` |
| High Contrast | `accessibilityHighContrast` | `modern-accessibility-high-contrast` | 統一為 `modern-accessibility-high-contrast` |
| Hand-Drawn | `hand-drawn-sketch` | `visual-handDrawnSketch` | 統一為 `visual-handDrawnSketch` |
| Corporate | `corporate` | （缺失） | 增強腳本支持數組格式 |
| Maximalism | `maximalism` | （缺失） | 增強腳本支持數組格式 |

### 問題 2: Metadata 生成後模板數量不正確

**診斷命令**：

```bash
# 查看當前模板數量
grep "totalTemplates" src/data/metadata/templateMetadata.json

# 手動統計模板文件數量
find src/data/styles/templates -name "*.js" | wc -l

# 查看 metadata 文件大小
ls -lh src/data/metadata/templateMetadata.json
```

**常見問題**：

- **數組格式未被識別**：確保 `extractStyleId()` 支持數組模式
- **文件被忽略**：檢查 `.gitignore` 或掃描邏輯
- **ID 提取失敗**：檢查正則表達式是否匹配模板格式

### 問題 3: GitHub Actions 失敗

**檢查步驟**：

1. **查看 Actions 日誌**：
   - GitHub → Actions tab → 查看最近的 workflow run

2. **常見錯誤**：
   ```bash
   # 權限錯誤
   Error: refusing to allow a GitHub App to create or update workflow
   # 解決：在 Settings → Actions → Workflow permissions 啟用寫入權限

   # Git 歷史不足
   Error: fatal: ambiguous argument 'HEAD~1': unknown revision
   # 解決：確保 fetch-depth: 0
   ```

3. **本地測試**：
   ```bash
   # 模擬 GitHub Actions 環境
   npm ci
   node scripts/track-updates.js
   node scripts/generate-metadata.js
   ```

## 📊 數據格式

### templateMetadata.json 結構

```json
{
  "templates": {
    "visual-translucent-glassmorphism": {
      "isNew": true,                          // 是否為新模板（≤7 天）
      "updatedAt": "2025-11-21T21:22:46+08:00", // ISO 8601 時間戳
      "createdAt": "2025-11-19T15:15:17+08:00", // 首次提交時間
      "changeType": "new",                    // 'new' | 'updated'
      "lastCommitHash": "e5f2c8a",            // 最新提交 hash (短格式)
      "lastCommitMessage": "feat: add glassmorphism", // 最新提交消息
      "changeHistory": [                      // 最近 5 次提交歷史
        {
          "date": "2025-11-21T21:22:46+08:00",
          "commitHash": "e5f2c8a",
          "message": "feat: add glassmorphism"
        }
      ]
    }
  },
  "lastUpdate": "2025-11-23T18:30:00+08:00",  // metadata 最後更新時間
  "totalTemplates": 271,                      // 總模板數量
  "newTemplates": 271,                        // 新模板數量（≤7 天）
  "updatedTemplates": 0                       // 更新模板數量
}
```

### 模板文件格式支持

#### 格式 1: 單對象 (Named Export)

```javascript
// src/data/styles/templates/visual/glassmorphism/index.js
export const glassmorphism = {
  id: 'visual-translucent-glassmorphism',
  title: 'styles.visual.glassmorphism.title',
  description: 'styles.visual.glassmorphism.description',
  demoHTML: `...`,
  customStyles: `...`
};
```

**提取結果**: `['visual-translucent-glassmorphism']`

#### 格式 2: 數組 (Multiple Styles)

```javascript
// src/data/styles/templates/visual/newTrendStyles.js
export const newTrendStyles = [
  {
    id: 'maximalism',
    title: 'styles.newTrend.maximalism.title',
    description: 'styles.newTrend.maximalism.description',
    demoHTML: `...`
  },
  {
    id: 'corporate',
    title: 'styles.newTrend.corporate.title',
    description: 'styles.newTrend.corporate.description',
    demoHTML: `...`
  }
];
```

**提取結果**: `['maximalism', 'corporate']`

#### 格式 3: Default Export

```javascript
// src/data/styles/templates/special/index.js
export default {
  id: 'special-style',
  title: '...',
  demoHTML: `...`
};
```

**提取結果**: `['special-style']`

#### 格式 4: 家族級 Aggregator (無 id)

```javascript
// src/data/styles/templates/core/flatDesign/index.js
export const name = 'Flat Design Family';
export const demoUI = `...`;
export const description = '...';
```

**提取結果**: `['core-flatDesign']` (路徑推測)

## 🎨 UI 展示

### StyleCard 徽章位置

```
┌─────────────────────────────────────┐
│                          [NEW]  ←───│ 紅色徽章 (absolute top-4 right-4)
│  ┌───────────────────────────┐      │
│  │                           │      │
│  │      Demo Preview         │      │
│  │                           │      │
│  └───────────────────────────┘      │
│                                     │
│  Style Title                        │
│  Description text...                │
│                                     │
│  Last Updated: 2025-11-19  ←────────│ 時間戳 (text-xs text-gray-400)
│                                     │
│  [Get Prompt] [Preview]             │
└─────────────────────────────────────┘
```

### AllStylesPage 篩選按鈕

```
┌──────────────────────────────────────────┐
│  [全部 (271)] [新增 (271)] [已更新 (0)]   │  ← 篩選按鈕
└──────────────────────────────────────────┘

點擊 "新增" → 僅顯示 isNew = true 的模板
點擊 "已更新" → 僅顯示 changeType = 'updated' 的模板
```

## 🔐 安全考慮

### Git 操作安全

- ✅ **只讀 Git 命令**：`git log`, `git diff` (無破壞性操作)
- ✅ **自動提交隔離**：使用 `[skip ci]` 避免無限循環
- ✅ **Bot 用戶**：使用 `github-actions[bot]` 提交，不影響貢獻者統計

### Metadata 文件安全

- ✅ **只包含公開信息**：提交 hash、時間戳、消息（無敏感數據）
- ✅ **JSON 驗證**：腳本會驗證生成的 JSON 格式
- ✅ **版本控制**：metadata 文件納入 Git，可追溯變更歷史

## 📈 性能優化

### Frontend 優化

- **useMemo**: 避免每次渲染重新計算 metadata 匹配
- **精確匹配優先**: 先嘗試 O(1) 精確查找，再進行 O(n) 模糊匹配
- **小型 JSON**: 271 個模板的 metadata 文件約 150KB（經過壓縮）

### Script 優化

- **增量更新**: `track-updates.js` 只處理 Git 變更的文件
- **完整掃描**: `generate-metadata.js --full` 用於初始化或修復
- **緩存策略**: 文件時間戳檢查，避免重複處理未變更文件

## 🧪 測試

### 單元測試

```bash
# 運行 extractStyleId 測試
node scripts/test-extract-style-id.js

# 預期輸出：
# ✅ PASS: Visual Translucent Glassmorphism
# ✅ PASS: Core Flat Design
# ✅ PASS: Neo-Brutalism
```

### 集成測試

```bash
# 1. 清空 metadata
echo '{"templates":{}}' > src/data/metadata/templateMetadata.json

# 2. 重新生成
node scripts/generate-metadata.js --full

# 3. 驗證結果
node -e "const m = require('./src/data/metadata/templateMetadata.json'); console.log('Total:', m.totalTemplates);"
# 預期輸出: Total: 271

# 4. 搜索關鍵模板
grep -E "(maximalism|corporate|visual-kawaiiMinimal)" src/data/metadata/templateMetadata.json
# 預期: 找到 3 個模板
```

### E2E 測試

```bash
# 1. 啟動開發服務器
npm run dev

# 2. 打開瀏覽器 http://localhost:1000

# 3. 手動驗證：
#    - 所有模板卡片顯示 NEW 徽章（假設在 7 天內）
#    - 點擊 "新增" 篩選按鈕，顯示正確數量
#    - 時間戳格式正確（YYYY-MM-DD）
```

## 📝 維護指南

### 定期任務

1. **每月檢查**：
   ```bash
   # 檢查 metadata 文件大小（應 < 1MB）
   ls -lh src/data/metadata/templateMetadata.json

   # 檢查模板數量變化
   git log --oneline --grep="update template metadata" | head -10
   ```

2. **每季度優化**：
   - 清理 7 天以上的 `isNew: true` 標記（自動處理）
   - 審查 `changeHistory` 是否需要截斷（目前保留 5 條）

### 問題報告

如果發現 NEW 徽章系統問題，請提供以下信息：

1. **模板信息**：
   - 模板 ID
   - 文件路徑
   - 預期行為 vs 實際行為

2. **環境信息**：
   ```bash
   node --version
   npm --version
   git --version
   ```

3. **Metadata 狀態**：
   ```bash
   # 檢查模板是否在 metadata 中
   grep "\"your-style-id\"" src/data/metadata/templateMetadata.json
   ```

4. **截圖**：
   - StyleCard 顯示效果
   - 瀏覽器控制台錯誤（如有）

## 🔄 更新日誌

### 2025-11-23 - v2.0.0

**重大改進**：
- ✅ 支持數組格式模板文件（`export const X = [...]`）
- ✅ 雙向模糊 ID 匹配（解決命名風格差異）
- ✅ 修復 5 個模板缺失 NEW 徽章問題：
  - Kawaii Minimal
  - High Contrast Accessibility
  - Hand-Drawn Sketch
  - Corporate Style
  - Maximalism

**統計**：
- 模板總數：76 → 166 → **271** (+195)
- Metadata 文件大小：44KB → ~150KB
- ID 提取成功率：95% → **100%**

### 2025-11-19 - v1.0.0

**初始版本**：
- ✅ GitHub Actions 自動化工作流程
- ✅ Git 歷史追蹤腳本
- ✅ StyleCard NEW 徽章顯示
- ✅ AllStylesPage 篩選功能
- ✅ 雙語支持（簡體中文 / 英文）

## 📚 參考資源

- **Git 文檔**: https://git-scm.com/docs/git-log
- **GitHub Actions**: https://docs.github.com/en/actions
- **React useMemo**: https://react.dev/reference/react/useMemo
- **正則表達式測試**: https://regex101.com/

## 🤝 貢獻

如需改進 NEW 徽章系統，請遵循以下步驟：

1. **Fork 項目**
2. **創建功能分支**: `git checkout -b feature/improve-badge-system`
3. **修改代碼**
4. **測試**:
   ```bash
   node scripts/generate-metadata.js --full
   npm run dev
   ```
5. **提交**: `git commit -m "feat: improve badge matching logic"`
6. **Push**: `git push origin feature/improve-badge-system`
7. **創建 Pull Request**

---

**最後更新**: 2025-11-23
**維護者**: UI Style React Team
**文檔版本**: 2.0.0
