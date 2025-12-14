# UI Style React - 模板創建工具

自動化腳本，用於快速創建 UI Style 模板，簡化模板開發流程。

## 功能特性

✅ **雙模式支持**：
- 📋 交互式模式：逐步引導用戶輸入
- ⚡ 命令行參數模式：一次性提供所有參數

✅ **自動創建**：
- 目錄結構：`public/data/content/styles/{category}/{family}/{templateId}/`
- HTML/CSS 模板文件（支持 HTML 和 JSX 兩種格式）
- Prompt 模板文件（`custom.md` 和 `style.md`）

✅ **自動更新**：
- `src/data/styles/generated/{category}/{family}/manifest.json`
- `src/data/metadata/styleTagsMapping.js`

✅ **智能驗證**：
- 檢查分類和家族是否存在
- 檢查模板 ID 衝突
- 文件覆蓋保護

---

## 安裝

腳本已集成到項目中，無需額外安裝。確保已安裝項目依賴：

```bash
npm install
```

---

## 使用方法

### 1. 交互式模式（推薦）

啟動交互式模式，腳本會逐步引導您輸入：

```bash
npm run create-template
```

或

```bash
node scripts/create-template.js
```

**交互流程**：
1. 選擇分類（core/visual/retro/interaction/layout）
2. 選擇家族（從該分類下的家族列表中選擇）
3. 輸入模板變體名稱（自動添加前綴）
4. 輸入雙語標題（中文和英文）
5. 選擇文件格式（HTML 或 JSX）
6. 選擇是否創建 Prompt 文件
7. 確認配置並創建

**示例**：
```bash
$ npm run create-template

步驟 1/6: 選擇分類

可用分類:
  1. core (Core Design Systems)
  2. visual (Visual Design Families)
  3. retro (Retro & Vintage)
  4. interaction (Interaction Patterns)
  5. layout (Layout Systems)

請輸入分類名稱: visual

步驟 2/6: 選擇家族 (visual 分類)

可用家族:
  1. glassmorphism    2. neoBrutalism    3. ...

請輸入家族名稱: glassmorphism

步驟 3/6: 輸入模板 ID

建議格式：visual-glassmorphism-<variant-name>
示例：visual-glassmorphism-landing-page

模板變體名稱（將自動添加前綴 "visual-glassmorphism-"）: dashboard

步驟 4/6: 輸入雙語標題

中文標題: 儀表板
英文標題: Dashboard

步驟 5/6: 選擇文件格式

可用格式:
  1. html - 標準 HTML/CSS 格式
  2. jsx  - React JSX 格式

請選擇格式 (html/jsx) [默認: html]: html

步驟 6/6: Prompt 文件

是否創建 Prompt 模板文件？（custom.md 和 style.md）
  y - 是（默認）
  n - 否

請選擇 (y/n) [默認: y]: y

╔════════════════════════════════════════════════════╗
║                   配置摘要                         ║
╚════════════════════════════════════════════════════╝

  分類:       visual
  家族:       glassmorphism
  模板 ID:    visual-glassmorphism-dashboard
  中文標題:   儀表板
  英文標題:   Dashboard
  文件格式:   HTML
  創建 Prompt: 是

確認創建？(y/n) [默認: y]:
```

---

### 2. 命令行參數模式

適合腳本化和批量創建：

```bash
npm run create-template -- \
  -c visual \
  -f glassmorphism \
  -t visual-glassmorphism-dashboard \
  --title-zh "儀表板" \
  --title-en "Dashboard" \
  --format html
```

**參數說明**：

| 參數 | 簡寫 | 說明 | 必需 | 默認值 |
|------|------|------|------|--------|
| `--category` | `-c` | 分類（core/visual/retro/interaction/layout） | ✅ | - |
| `--family` | `-f` | 家族名稱 | ✅ | - |
| `--template-id` | `-t` | 模板 ID | ✅ | - |
| `--title-zh` | - | 中文標題 | ❌ | "新模板" |
| `--title-en` | - | 英文標題 | ❌ | "New Template" |
| `--format` | - | 文件格式（html/jsx） | ❌ | html |
| `--skip-prompts` | - | 跳過 Prompt 文件創建 | ❌ | false |
| `--quiet` | - | 靜默模式（減少輸出） | ❌ | false |
| `--help` | `-h` | 顯示幫助信息 | - | - |
| `--version` | `-V` | 顯示版本號 | - | - |

**更多示例**：

```bash
# 創建 JSX 格式模板
npm run create-template -- \
  -c visual \
  -f neoBrutalism \
  -t visual-neoBrutalism-portfolio \
  --title-zh "作品集" \
  --title-en "Portfolio" \
  --format jsx

# 跳過 Prompt 文件
npm run create-template -- \
  -c core \
  -f minimalism \
  -t core-minimalism-landing \
  --title-zh "落地頁" \
  --title-en "Landing Page" \
  --skip-prompts

# 靜默模式（減少輸出）
npm run create-template -- \
  -c retro \
  -f arcadeCRT \
  -t retro-arcadeCRT-game-ui \
  --title-zh "遊戲界面" \
  --title-en "Game UI" \
  --quiet
```

---

## 創建的文件結構

運行腳本後，會創建以下文件：

```
public/data/
├── content/styles/{category}/{family}/{templateId}/
│   ├── demo.html (或 demo.jsx)     # StyleCard 預覽用 HTML/JSX
│   ├── demo.css                     # demo 專用樣式
│   ├── fullpage.html (或 fullpage.jsx)  # 完整頁面 HTML/JSX
│   └── fullpage.css                 # fullpage 專用樣式
└── prompts/styles/{category}/{family}/{templateId}/  (可選)
    ├── custom.md                    # 自定義 Prompt（短版）
    └── style.md                     # 風格 Prompt（詳細版）

src/data/
├── styles/generated/{category}/{family}/
│   └── manifest.json                # 更新模板列表
└── metadata/
    └── styleTagsMapping.js          # 添加標籤增強配置
```

---

## 後續步驟

腳本創建模板後，您需要：

### 1. 編輯 HTML/CSS 文件

打開創建的文件並添加實際內容：

```bash
# 文件位置
public/data/content/styles/{category}/{family}/{templateId}/
```

**文件說明**：
- `demo.html` / `demo.jsx`：簡化的元件演示，用於 StyleCard 預覽
- `demo.css`：demo 專用樣式
- `fullpage.html` / `fullpage.jsx`：完整的設計頁面
- `fullpage.css`：fullpage 專用樣式

### 2. 填寫 Prompt 文件（可選）

如果創建了 Prompt 文件，填寫雙語 Prompt 內容：

```bash
# 文件位置
public/data/prompts/styles/{category}/{family}/{templateId}/
```

**文件說明**：
- `custom.md`：自定義 Prompt（簡短版本，1-2 段）
- `style.md`：風格 Prompt（詳細版本，包含角色設定、視覺理念、設計原則等）

### 3. 完善標籤配置

打開 `src/data/metadata/styleTagsMapping.js`，搜索您的模板 ID，完善以下內容：

```javascript
'your-template-id': {
  primaryCategory: 'visual',
  categories: ['visual'],
  tags: ['contemporary'], // TODO: 添加更多標籤
  relatedStyles: []       // TODO: 添加關聯風格 ID
}
```

**可用標籤參考**：
- **時代特徵**：classic, contemporary, timeless, retro, futuristic
- **視覺特性**：minimal, bold, flat, depth, organic, geometric, colorful, clean
- **技術手法**：animated, interactive, translucent, gradient, texture, effect-driven
- **使用場景**：enterprise, creative, playful, friendly, professional, education

### 4. 測試模板

運行開發服務器並在瀏覽器中測試：

```bash
npm run dev
```

訪問 http://localhost:1000，在 UI 中檢查新模板是否正確顯示。

---

## 注意事項

### ⚠️ 模板 ID 格式

推薦使用格式：`{category}-{family}-{variant}`

**示例**：
- ✅ `visual-glassmorphism-landing-page`
- ✅ `core-minimalism-portfolio`
- ❌ `my-template`（缺少分類和家族前綴）

### ⚠️ 家族必須存在

腳本只支持在**現有家族**下添加模板，不支持創建新家族。

如需創建新家族，請先手動更新 `src/data/styles/_registry.json`。

### ⚠️ 文件覆蓋保護

如果模板目錄已存在，腳本會報錯並退出，防止覆蓋現有文件。

### ⚠️ 數據一致性

創建模板後，確保：
- `manifest.json` 包含新模板條目
- `styleTagsMapping.js` 包含新模板增強配置
- 目錄結構正確

---

## 故障排除

### 錯誤：分類不存在

```
分類 "xxx" 不存在。
可用分類: core, visual, retro, interaction, layout
```

**解決方法**：使用正確的分類名稱。

---

### 錯誤：家族不存在

```
家族 "xxx" 不存在於 visual 分類下。
可用家族: glassmorphism, neoBrutalism, ...
```

**解決方法**：使用正確的家族名稱，或先在 `_registry.json` 中註冊新家族。

---

### 錯誤：模板目錄已存在

```
模板目錄 "public/data/content/visual/glassmorphism/xxx" 已存在
```

**解決方法**：
1. 刪除現有目錄（如果是錯誤創建）
2. 使用不同的模板 ID

---

### 錯誤：模板 ID 已存在於 manifest

```
模板 ID "xxx" 已存在於 manifest 中
```

**解決方法**：
1. 檢查 `manifest.json` 是否已有該模板
2. 使用不同的模板 ID

---

## 架構說明

### 文件模組

```
scripts/
├── create-template.js          # 主腳本入口（CLI）
└── lib/
    ├── interactive.js          # 交互式輸入邏輯
    ├── generators.js           # 文件模板生成器
    ├── metadata-updater.js     # 元數據更新器
    └── validator.js            # 輸入驗證器
```

### 核心模組功能

**interactive.js**：
- 使用 Node.js `readline` 實現交互式輸入
- 讀取 `_registry.json` 獲取可用分類和家族
- 提供友好的引導式輸入流程

**generators.js**：
- 生成 HTML/JSX 模板文件
- 生成 CSS 模板文件
- 生成 Prompt 模板文件（Markdown 格式）

**metadata-updater.js**：
- 更新或創建 `manifest.json`
- 更新 `styleTagsMapping.js`（添加新的增強配置）

**validator.js**：
- 驗證分類和家族是否存在
- 檢查模板 ID 衝突
- 檢查文件覆蓋保護
- 驗證輸入格式

---

## 開發與貢獻

### 添加新的文件格式支持

在 `generators.js` 中添加新的生成器函數：

```javascript
export function generateNewFormatTemplate() {
  return `<!-- 新格式模板內容 -->`;
}
```

### 添加新的驗證規則

在 `validator.js` 中添加新的驗證函數：

```javascript
export function validateNewRule(input) {
  // 驗證邏輯
  return true;
}
```

---

## 許可證

MIT License - 參見項目根目錄的 LICENSE 文件

---

## 相關文檔

- [項目 CLAUDE.md](../CLAUDE.md) - 項目整體架構文檔
- [計劃文件](../.claude/plans/flickering-jingling-cat.md) - 腳本設計計劃

---

**創建時間**: 2025-12-09
**版本**: 1.0.0
**維護者**: UI Style React Team
