# UI Style React 數據重新遷移計劃

## 執行摘要

本計劃針對 UI Style React 項目的數據遷移工具進行 Bug 修復和完整重新遷移。目標是將 90 個 Family 的所有數據（包括 previews 變體和多模板）從 JS 格式完整遷移到 JSON + HTML/CSS 分離架構。

## 項目現狀分析

### 數據規模
- **JS 模板**: 90 個 Family index.js 文件
- **7 大分類**: core (5 families), visual (50+ families), retro (8 families), layout, interaction
- **已生成數據**: 
  - JSON: src/data/generated/chunks/
  - HTML/CSS: public/data/ (281 個 HTML 文件)
  - 但數據不完整，需要重新遷移

### 架構特點

#### 三種 Family 模式
1. **單一模板 + Previews** (如 glassmorphism)
   - 主 demo (demoHTML, customStyles)
   - previews 數組: 每個 preview 有獨立的 html, styles, customPrompt
   - 示例: glassmorphism 有 2 個 preview 變體

2. **多獨立模板** (如 minimalism)
   - 多個獨立模板文件: saasLanding.js, japaneseStyle.js, portfolio.js
   - 每個模板是完整的 template 對象
   - index.js 作為聚合器導入並導出

3. **Re-export 模式** (發現於部分 families)
   - `export { xxx } from './file'`
   - 需要從目標文件加載實際數據

### 已識別的問題

#### 核心問題（用戶最關心）

**1. Previews 變體數據不完整**
- **位置**: `extractor.js` 第 52-163 行
- **問題**: 
  - preview.html/styles 引用解析不完整
  - 僅處理了 memberAccess 和簡單 reference
  - 沒有處理從外部文件導入的情況
- **影響**: glassmorphism 等有多個 preview 的風格數據丟失

**2. Multiple Templates 支持不足**
- **位置**: `extractor.js` 第 27-50 行
- **問題**:
  - 僅從 imports 查找模板文件
  - 沒有完全處理聚合器模式（如 minimalism）
  - 可能只提取了第一個模板
- **影響**: minimalism 等多模板 family 只有部分數據

#### 次要問題（暫不處理）
- Tags 和 relatedStyles 未遷移（來自 styleTagsMapping.js）
- 用戶選擇暫不處理此問題

---

## 實施計劃

### 階段 1: 清理階段 (5 分鐘)

**目標**: 安全刪除所有生成的數據，確保從乾淨狀態開始

#### 1.1 確認清理範圍
```bash
# 檢查要清理的目錄
ls -la src/data/generated/
ls -la src/data/content/
ls -la public/data/
```

#### 1.2 備份重要文件（可選）
```bash
# 如果需要保留參考數據
tar -czf backup-generated-data-$(date +%Y%m%d).tar.gz \
  src/data/generated/ \
  src/data/content/ \
  public/data/
```

#### 1.3 執行清理
使用遷移腳本的內建清理命令：
```bash
cd /Users/tomleung/Downloads/mcp/ui-style/ui-style-react
npm run migrate:clean
# 或直接調用
node scripts/migrate/js-to-json.js clean
```

清理目錄：
- `src/data/generated/` (JSON manifests)
- `src/data/content/` (HTML/CSS 內容)
- `public/data/` (公共內容)

#### 1.4 驗證清理結果
```bash
# 確認目錄已刪除或為空
ls src/data/generated/ 2>/dev/null || echo "已清理"
ls src/data/content/ 2>/dev/null || echo "已清理"
ls public/data/ 2>/dev/null || echo "已清理"
```

**成功標準**: 三個目錄不存在或為空

---

### 階段 2: Bug 修復階段 (30-45 分鐘)

**目標**: 修復 previews 變體和多模板提取的 Bug

#### 2.1 修復 Previews 變體數據提取

**文件**: `scripts/migrate/lib/extractor.js`
**函數**: `extractFamilyData()` 第 52-163 行

**問題分析**:
```javascript
// 當前代碼 (簡化版)
if (templates.length === 0) {
  // 檢查 previews
  for (const preview of exportValue.previews) {
    // 問題 1: resolvePreviewContent 僅處理 memberAccess 和簡單 reference
    // 問題 2: 沒有處理從外部文件導入的複雜引用
    previewHtml = resolvePreviewContent(preview.html, 'html');
    previewStyles = resolvePreviewContent(preview.styles, 'styles');
  }
}
```

**修復方案**:

1. **增強 `resolvePreviewContent()` 函數** (第 86-139 行)
   - 添加外部文件導入處理
   - 支持複雜的嵌套引用
   - 添加調試日誌

修復內容：
```javascript
function resolvePreviewContent(value, contentType) {
  // 1. 已經是字符串 ✅
  if (typeof value === 'string') return value;
  
  // 2. 不是對象 ✅
  if (!value || typeof value !== 'object') return '';
  
  // 3. Member expression ✅ (現有邏輯，需增強)
  if (value.type === 'memberAccess') {
    // 增強：添加更多日誌和錯誤處理
    // 增強：支持多層嵌套（obj.prop1.prop2）
  }
  
  // 4. 簡單引用 ✅ (現有邏輯，需增強)
  if (value.type === 'reference') {
    // 增強：支持從多個位置查找
    // 增強：遞歸解析引用鏈
  }
  
  // 新增 5: 處理數組引用
  if (value.type === 'arrayAccess') {
    // 支持 previews[0].html 這種格式
  }
  
  // 新增 6: 處理函數調用結果
  if (value.type === 'call') {
    // 處理動態生成的內容
  }
  
  return '';
}
```

2. **添加 Preview 數據完整性驗證**
   - 在提取後檢查每個 preview 是否有有效的 html/styles
   - 記錄警告信息

3. **改進錯誤處理**
   - 添加更詳細的日誌
   - 區分致命錯誤和警告

**預期結果**:
- glassmorphism 的 2 個 preview 完整提取
- claymorphism 的 2 個 preview 完整提取
- 所有其他有 previews 的 family 數據完整

#### 2.2 修復多模板支持

**文件**: `scripts/migrate/lib/extractor.js`
**函數**: `extractFamilyData()` 第 27-50 行

**問題分析**:
```javascript
// 當前代碼
const templateFiles = Object.entries(imports)
  .filter(([name, imp]) => imp.source.startsWith('./') && !imp.source.includes('Demo'))
  .map(...);

// 問題：僅從 imports 查找，無法處理聚合器模式
```

**修復方案**:

1. **增強模板文件掃描邏輯**
   - 不僅從 imports 查找
   - 掃描同級目錄下的所有 .js 文件
   - 排除 Demo.js, index.js 等非模板文件

修復內容：
```javascript
// 1. 從 imports 查找 (現有邏輯) ✅
const templateFilesFromImports = Object.entries(imports)...

// 2. 掃描同級目錄 (新增)
const familyDir = path.dirname(indexJsPath);
const allJsFiles = fs.readdirSync(familyDir)
  .filter(file => file.endsWith('.js'))
  .filter(file => !['index.js', 'Demo.js', 'demo.js'].includes(file))
  .filter(file => !file.includes('FullPage') || isStandaloneTemplate(file))
  .map(file => path.join(familyDir, file));

// 3. 合併並去重
const templateFiles = [...new Set([
  ...templateFilesFromImports,
  ...allJsFiles.map(path => ({ path, name: path.basename(path, '.js') }))
])];
```

2. **改進模板對象識別**
   - `findMainTemplateExport()` 函數增強
   - 支持數組導出（如 `export const templates = [...]`）
   - 支持默認導出

3. **添加聚合器模式檢測**
   - 檢測 index.js 是否為純聚合器
   - 如果是，從被導入的文件中提取所有模板

**預期結果**:
- minimalism 的 3 個模板完整提取: saasLanding, japaneseStyle, portfolio
- 其他多模板 family 數據完整

#### 2.3 改進 Re-export 支持

**文件**: `scripts/migrate/lib/extractor.js`
**函數**: `extractFamilyData()` 第 166-205 行

**當前狀態**: 已有基礎實現
**改進方向**:
- 添加更詳細的日誌
- 處理循環引用
- 改進錯誤恢復

---

### 階段 3: 驗證增強階段 (15 分鐘)

**目標**: 確保數據完整性驗證機制能捕獲所有問題

#### 3.1 增強數據驗證器

**文件**: `scripts/migrate/lib/validator.js`

**新增驗證項目**:

1. **Preview 數據完整性檢查**
```javascript
export function validatePreviewData(preview) {
  const errors = [];
  
  if (!preview.id) {
    errors.push('Preview 缺少 id');
  }
  
  // 檢查 HTML 內容
  if (!preview.html || typeof preview.html !== 'string' || preview.html.length < 50) {
    errors.push(`Preview ${preview.id}: html 內容為空或過短`);
  }
  
  // 檢查 CSS 內容
  if (!preview.styles || typeof preview.styles !== 'string') {
    errors.push(`Preview ${preview.id}: styles 缺失`);
  }
  
  // 檢查 customPrompt（可選，但如果存在需驗證）
  if (preview.customPrompt) {
    if (!preview.customPrompt['zh-CN'] || !preview.customPrompt['en-US']) {
      errors.push(`Preview ${preview.id}: customPrompt 必須包含雙語`);
    }
  }
  
  return { valid: errors.length === 0, errors };
}
```

2. **多模板數量驗證**
```javascript
export function validateTemplateCount(familyData) {
  const errors = [];
  const warnings = [];
  
  // 檢查是否有模板
  if (!familyData.templates || familyData.templates.length === 0) {
    errors.push(`Family ${familyData.id}: 沒有任何模板`);
  }
  
  // 檢查已知的多模板 families
  const knownMultiTemplate = {
    'core-minimalism': 3,
    'core-flatDesign': 2,
    // ... 其他已知的多模板 families
  };
  
  if (knownMultiTemplate[familyData.id]) {
    const expected = knownMultiTemplate[familyData.id];
    const actual = familyData.templates.length;
    if (actual < expected) {
      warnings.push(
        `Family ${familyData.id}: 預期 ${expected} 個模板，實際只有 ${actual} 個`
      );
    }
  }
  
  return { valid: errors.length === 0, errors, warnings };
}
```

3. **內容大小檢查**
```javascript
export function validateContentSize(template) {
  const warnings = [];
  
  // 檢查 demo HTML 大小
  if (template.content.demo.html && template.content.demo.html.length < 100) {
    warnings.push(`Template ${template.id}: demo HTML 過短 (${template.content.demo.html.length} chars)`);
  }
  
  // 檢查 fullPage HTML 大小
  if (template.content.fullPage && template.content.fullPage.html) {
    if (template.content.fullPage.html.length < 500) {
      warnings.push(`Template ${template.id}: fullPage HTML 過短`);
    }
  }
  
  return { warnings };
}
```

#### 3.2 添加遷移前預檢

**新文件**: `scripts/migrate/lib/pre-check.js`

功能：
- 掃描所有 JS 模板文件
- 識別複雜結構（previews, 多模板）
- 生成預期報告
- 與遷移後結果對比

#### 3.3 改進驗證報告

**修改文件**: `scripts/migrate/lib/validator.js` 的 `generateValidationReport()`

增強內容：
- 添加 Preview 數據統計
- 添加多模板 Family 列表
- 添加警告級別（error vs warning）
- 生成 HTML 格式報告（可選）

---

### 階段 4: 重新遷移階段 (10-15 分鐘)

**目標**: 執行完整遷移並驗證結果

#### 4.1 執行遷移前檢查

```bash
cd /Users/tomleung/Downloads/mcp/ui-style/ui-style-react

# 1. 檢查腳本可用性
node scripts/migrate/js-to-json.js --help

# 2. 執行預檢（如果實現）
node scripts/migrate/lib/pre-check.js

# 3. Dry run 模式測試
node scripts/migrate/js-to-json.js migrate-all --dry-run
```

#### 4.2 執行分批遷移（推薦）

建議分類別遷移，便於發現問題：

```bash
# 1. Core families (5 個，最重要)
node scripts/migrate/js-to-json.js migrate-all \
  --category core \
  --clean

# 驗證 Core 結果
node scripts/migrate/js-to-json.js validate --category core

# 2. Visual families (最多，50+)
node scripts/migrate/js-to-json.js migrate-all \
  --category visual

# 驗證 Visual 結果
node scripts/migrate/js-to-json.js validate --category visual

# 3. Retro families (8 個)
node scripts/migrate/js-to-json.js migrate-all \
  --category retro

# 4. Layout families
node scripts/migrate/js-to-json.js migrate-all \
  --category layout

# 5. Interaction families
node scripts/migrate/js-to-json.js migrate-all \
  --category interaction
```

#### 4.3 執行完整遷移（一次性）

如果分批測試成功，可以一次性遷移：

```bash
# 清理並完整遷移
node scripts/migrate/js-to-json.js migrate-all \
  --clean \
  --category core visual retro layout interaction \
  --include-standalone
```

#### 4.4 驗證遷移結果

```bash
# 1. 完整驗證
node scripts/migrate/js-to-json.js validate

# 2. 檢查關鍵 Family
# glassmorphism (有 2 個 preview)
ls -la src/data/generated/visual/glassmorphism/
ls -la public/data/content/visual/glassmorphism/

# minimalism (有 3 個模板)
ls -la src/data/generated/core/minimalism/
ls -la public/data/content/core/minimalism/

# claymorphism (有 2 個 preview)
ls -la src/data/generated/visual/claymorphism/
ls -la public/data/content/visual/claymorphism/

# 3. 統計數據
find src/data/generated -name "*.json" | wc -l
find public/data/content -name "*.html" | wc -l
find public/data/prompts -name "*.md" | wc -l
```

#### 4.5 重點驗證項目

**Previews 變體驗證**:
```bash
# 檢查 glassmorphism 的 2 個 preview
cat src/data/generated/visual/glassmorphism/visual-glassmorphism-glassmorphism-landing.json
cat src/data/generated/visual/glassmorphism/visual-glassmorphism-glassmorphism-music.json

# 驗證 HTML 內容存在
ls -la public/data/content/visual/glassmorphism/visual-glassmorphism-glassmorphism-landing/fullpage.html
ls -la public/data/content/visual/glassmorphism/visual-glassmorphism-glassmorphism-music/fullpage.html
```

**多模板驗證**:
```bash
# 檢查 minimalism 的 3 個模板
ls -1 src/data/generated/core/minimalism/ | grep "core-minimalism"
# 應該有：
# - core-minimalism-saasLanding.json
# - core-minimalism-japaneseStyle.json
# - core-minimalism-portfolio.json
```

---

## 文件修改清單

### 需要修改的文件

#### 1. `scripts/migrate/lib/extractor.js`
**修改範圍**: 3 個主要函數

**函數 1: `resolvePreviewContent()` (第 86-139 行)**
- 增強引用解析邏輯
- 添加外部文件導入支持
- 改進錯誤處理和日誌

**函數 2: `extractFamilyData()` 模板掃描部分 (第 27-50 行)**
- 添加目錄掃描邏輯
- 支持聚合器模式
- 改進模板文件識別

**函數 3: `extractFamilyData()` preview 處理部分 (第 52-163 行)**
- 調用增強後的 `resolvePreviewContent()`
- 添加驗證邏輯
- 改進日誌輸出

**預計修改行數**: 100-150 行
**影響範圍**: Preview 變體和多模板提取

#### 2. `scripts/migrate/lib/validator.js`
**修改範圍**: 新增 3 個驗證函數 + 改進報告生成

**新增函數**:
- `validatePreviewData(preview)` - Preview 數據驗證
- `validateTemplateCount(familyData)` - 模板數量驗證
- `validateContentSize(template)` - 內容大小檢查

**修改函數**:
- `validateTemplateData(template)` - 添加 preview 驗證調用
- `generateValidationReport(familiesData, config)` - 增強報告內容

**預計修改行數**: 80-100 行
**影響範圍**: 數據完整性驗證

#### 3. `scripts/migrate/lib/parser.js` (可選)
**修改範圍**: 增強 AST 解析能力

**可能的改進**:
- `extractValue()` - 支持更多節點類型
- `extractArray()` - 改進數組元素解析
- `resolveReference()` - 增強引用解析

**預計修改行數**: 30-50 行（如果需要）
**影響範圍**: 基礎解析能力

---

## 驗證檢查點

### 階段性檢查點

#### 清理階段完成檢查
- [ ] `src/data/generated/` 目錄已刪除或為空
- [ ] `src/data/content/` 目錄已刪除或為空
- [ ] `public/data/` 目錄已刪除或為空

#### Bug 修復完成檢查
- [ ] `extractor.js` 修改完成並通過語法檢查
- [ ] `validator.js` 修改完成並通過語法檢查
- [ ] 所有修改的函數都有單元測試（可選）

#### 遷移執行檢查
- [ ] Core families 遷移成功（5 個）
- [ ] Visual families 遷移成功（50+ 個）
- [ ] Retro families 遷移成功（8 個）
- [ ] Layout families 遷移成功
- [ ] Interaction families 遷移成功

### 最終驗證清單

#### 數據完整性
- [ ] 總 Family 數量: 90 個
- [ ] 總 Template 數量: 預期 150+ 個
- [ ] 總 HTML 文件: 預期 400+ 個
- [ ] 總 CSS 文件: 預期 400+ 個
- [ ] 總 Prompt 文件: 預期 200+ 個

#### 關鍵 Family 驗證

**Glassmorphism (Previews 測試)**:
- [ ] Family manifest 存在
- [ ] 2 個 preview template manifests 存在
- [ ] glassmorphism-landing 的 fullpage.html 存在且 > 10KB
- [ ] glassmorphism-music 的 fullpage.html 存在且 > 10KB
- [ ] 兩個 preview 都有獨立的 customPrompt

**Minimalism (多模板測試)**:
- [ ] Family manifest 存在
- [ ] 3 個 template manifests 存在: saasLanding, japaneseStyle, portfolio
- [ ] 每個模板都有完整的 demo.html 和 demo.css
- [ ] Family 級別的 demo.html 存在

**Claymorphism (Previews 測試)**:
- [ ] Family manifest 存在
- [ ] 2 個 preview template manifests 存在: dashboard, ecommerce
- [ ] 兩個 preview 都有完整的 HTML/CSS

#### 功能性驗證
- [ ] JSON 格式有效（可 parse）
- [ ] 雙語字段完整（zh-CN, en-US）
- [ ] HTML/CSS 路徑正確
- [ ] 沒有 404 文件引用

---

## 風險點和緩解措施

### 風險 1: AST 解析失敗
**影響**: 無法提取數據
**緩解措施**:
- 已有正則表達式降級機制
- 添加更詳細的錯誤日誌
- 提供手動修復指南

### 風險 2: 循環引用導致無限遞歸
**影響**: 腳本掛起或崩潰
**緩解措施**:
- 添加訪問深度限制（max depth = 5）
- 維護已訪問文件列表
- 超時機制

### 風險 3: 內存不足（處理大量文件）
**影響**: 遷移失敗
**緩解措施**:
- 分批遷移（按分類）
- 添加進度保存機制
- 流式處理大文件

### 風險 4: 遷移後前端無法正確加載數據
**影響**: 用戶界面顯示錯誤
**緩解措施**:
- 在遷移完成後運行開發服務器驗證
- 檢查控制台錯誤
- 對比遷移前後的數據結構

### 風險 5: 某些特殊格式的文件無法處理
**影響**: 部分數據丟失
**緩解措施**:
- 標記並記錄所有失敗的文件
- 提供手動遷移指南
- 驗證報告中突出顯示問題文件

---

## 預期成果

### 數據完整性指標
- **Family 遷移率**: 100% (90/90)
- **Template 完整率**: > 95%
- **Preview 變體完整率**: 100%
- **多模板 Family 完整率**: 100%

### 文件生成統計（預期）
- JSON manifests: 90 family + 150+ template = 240+ 個
- HTML 文件: 400+ 個
- CSS 文件: 400+ 個
- Prompt 文件: 200+ 個

### 質量指標
- 所有 JSON 文件可 parse
- 所有雙語字段完整
- 沒有空 HTML/CSS 文件
- 驗證報告無 error（warning 可接受）

---

## 時間估算

- **階段 1 (清理)**: 5 分鐘
- **階段 2 (Bug 修復)**: 30-45 分鐘
- **階段 3 (驗證增強)**: 15 分鐘
- **階段 4 (重新遷移)**: 10-15 分鐘
- **驗證和調試**: 15-20 分鐘

**總計**: 75-100 分鐘（1.5 小時左右）

---

## 下一步行動

1. **立即開始**: 階段 1 清理
2. **核心開發**: 階段 2 Bug 修復（最重要）
3. **質量保證**: 階段 3 驗證增強
4. **執行遷移**: 階段 4 分批遷移
5. **最終驗證**: 完整性檢查和功能測試

---

## Critical Files for Implementation

以下是實施本計劃最關鍵的 5 個文件：

1. **/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/scripts/migrate/lib/extractor.js** - 核心數據提取邏輯，包含 previews 和多模板的提取代碼，需要重點修復

2. **/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/scripts/migrate/lib/parser.js** - AST 解析器，支撐所有數據提取，可能需要增強以處理複雜引用

3. **/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/scripts/migrate/lib/validator.js** - 數據驗證器，需要添加 preview 和多模板的驗證邏輯

4. **/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/data/styles/templates/visual/glassmorphism/index.js** - Previews 變體的參考實現，用於理解和測試 preview 提取邏輯

5. **/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/src/data/styles/templates/core/minimalism/index.js** - 多模板聚合器的參考實現，用於理解和測試多模板提取邏輯
