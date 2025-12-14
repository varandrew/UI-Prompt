# Markdown Prompt Translation Fixer

自動修復UI Style React項目中Markdown prompt文件的中英文格式和翻譯問題。

## 問題描述

項目中有43個Markdown prompt文件存在以下問題：

1. **格式破壞**：中文和英文內容沒有被正確分隔在各自的Markdown章節中
2. **內容不平衡**：中文內容通常只有幾十到百多字，而英文內容有幾千字
3. **需要翻譯**：需要將詳細的英文內容翻譯成簡體中文

正確格式應該是：
```markdown
## 中文版本 (zh-CN)
[完整的中文內容...]

---

## English Version (en-US)
[完整的英文內容...]
```

## 解決方案

本工具包提供三個層次的解決方案：

### 方案1：分析問題文件（analyze-prompts.py）

識別所有需要修復的文件並生成報告。

```bash
python3 scripts/analyze-prompts.py
```

輸出：
- 列出所有問題文件
- 顯示中英文字數對比
- 按問題嚴重程度排序（ratio越高越嚴重）

### 方案2：提取內容準備翻譯（fix-prompt-extract.py）

從英文內容中提取結構化數據，準備進行翻譯。

```bash
# 處理前10個最嚴重的文件
python3 scripts/fix-prompt-extract.py --top-n 10

# 處理所有問題文件
python3 scripts/fix-prompt-extract.py --all
```

輸出文件：
- `public/data/prompts/styles/translation_batch/translation_jobs.json` - 完整的結構化數據
- `public/data/prompts/styles/translation_batch/translation_jobs_simple.json` - 簡化版本

### 方案3：簡單格式修復（fix-prompt-simple.py）

直接修復文件格式，將英文內容複製到中文章節（保留原有的簡短中文介紹）。

```bash
# 單個文件
python3 scripts/fix-prompt-simple.py path/to/custom.md

# 多個文件
python3 scripts/fix-prompt-simple.py file1.md file2.md file3.md

# 預覽模式（不寫入文件）
python3 scripts/fix-prompt-simple.py --dry-run path/to/custom.md
```

## 工作流程

### 快速修復流程（推薦）

如果你只想快速修復格式，不需要完整翻譯：

```bash
# 1. 分析問題
python3 scripts/analyze-prompts.py

# 2. 修復Top 10最嚴重的文件
cd /Users/tomleung/Downloads/mcp/ui-style/ui-style-react/public/data/prompts/styles

python3 ../../../../../scripts/fix-prompt-simple.py \
    visual/monochrome/portfolio-showcase/custom.md \
    core/brutalism/modern-brutalism-project-mgmt/custom.md \
    visual/monochrome/visual-monochrome/custom.md \
    visual/antiDesign/visual-tech-anti-design/custom.md \
    core/fluent2/fluent2-Notification/custom.md \
    visual/leather/visual-texture-leather-vintage-journal/custom.md \
    visual/vaporwave/visual-vaporwave-vaporwave-aesthetic/custom.md \
    core/minimalism/core-minimalism-portfolio/custom.md \
    core/fluent2/fluent2-settings/custom.md \
    visual/memphis/visual-memphis-memphis-creative/custom.md
```

### 完整翻譯流程

如果你需要完整的翻譯（需要翻譯服務或API）：

```bash
# 1. 提取內容
python3 scripts/fix-prompt-extract.py --top-n 10

# 2. 翻譯內容（選擇以下方式之一）
#    a) 使用在線翻譯工具（DeepL, Google Translate等）
#    b) 使用翻譯API
#    c) 人工翻譯

# 3. 應用翻譯（TODO: 需要創建此腳本）
python3 scripts/fix-prompt-apply.py translation_batch/translation_jobs.json
```

## 最嚴重的10個文件

根據EN/ZH比例排序：

1. **89.7x** - `visual/monochrome/portfolio-showcase/custom.md`
2. **76.0x** - `core/brutalism/modern-brutalism-project-mgmt/custom.md`
3. **56.9x** - `visual/monochrome/visual-monochrome/custom.md`
4. **55.5x** - `visual/antiDesign/visual-tech-anti-design/custom.md`
5. **52.9x** - `core/fluent2/fluent2-Notification/custom.md`
6. **47.5x** - `visual/leather/visual-texture-leather-vintage-journal/custom.md`
7. **45.6x** - `visual/vaporwave/visual-vaporwave-vaporwave-aesthetic/custom.md`
8. **45.5x** - `core/minimalism/core-minimalism-portfolio/custom.md`
9. **45.1x** - `core/fluent2/fluent2-settings/custom.md`
10. **43.9x** - `visual/memphis/visual-memphis-memphis-creative/custom.md`

## 腳本說明

### analyze-prompts.py

**功能**：掃描所有custom.md文件，分析中英文內容長度比例。

**輸出**：
- 列表顯示所有問題文件
- 統計信息
- Top 10最嚴重文件列表

### fix-prompt-extract.py

**功能**：從Markdown文件中提取英文內容，準備進行翻譯。

**特點**：
- 將內容分割成可翻譯的chunks（文本、代碼、標題）
- 保留原有的短中文介紹
- 生成JSON格式的翻譯任務文件

### fix-prompt-simple.py

**功能**：快速修復文件格式。

**處理方式**：
- 提取英文內容結構
- 保留原有的簡短中文介紹
- 將英文內容作為中文章節的佔位符
- 自動備份原文件（.md.backup）

**注意**：此腳本不進行翻譯，僅確保格式正確。

### fix-prompt-translations.py

**功能**：使用OpenAI API進行自動翻譯（可選）。

**要求**：
- OpenAI API密鑰
- `openai` Python包

**使用**：
```bash
export OPENAI_API_KEY="your-api-key"
python3 scripts/fix-prompt-translations.py --use-api --top-n 5
```

## 安全特性

所有修復腳本都會：
- ✅ 在修改前創建備份文件（.md.backup）
- ✅ 支持`--dry-run`模式預覽更改
- ✅ 保留原有代碼塊和格式
- ✅ 維護Markdown結構完整性

## 批量處理建議

對於38個需要修復的文件，建議分批處理：

### 批次1：最緊急（Ratio > 50）
```bash
# 5個文件
python3 scripts/fix-prompt-simple.py \
    visual/monochrome/portfolio-showcase/custom.md \
    core/brutalism/modern-brutalism-project-mgmt/custom.md \
    visual/monochrome/visual-monochrome/custom.md \
    visual/antiDesign/visual-tech-anti-design/custom.md \
    core/fluent2/fluent2-Notification/custom.md
```

### 批次2：高優先級（Ratio 40-50）
```bash
# 5個文件
python3 scripts/fix-prompt-simple.py \
    visual/leather/visual-texture-leather-vintage-journal/custom.md \
    visual/vaporwave/visual-vaporwave-vaporwave-aesthetic/custom.md \
    core/minimalism/core-minimalism-portfolio/custom.md \
    core/fluent2/fluent2-settings/custom.md \
    visual/memphis/visual-memphis-memphis-creative/custom.md
```

### 批次3：中優先級（Ratio 20-40）
處理剩餘的23個文件

### 批次4：低優先級（Ratio 5-20）
處理最後的5個文件

## 驗證修復結果

修復後，再次運行分析腳本驗證：

```bash
python3 scripts/analyze-prompts.py
```

預期結果：
- 問題文件數量應該減少
- 所有修復的文件Ratio應該接近1.0x
- 所有文件應該有正確的zh-CN和en-US章節標記

## 注意事項

1. **備份重要**：每次運行都會創建.md.backup文件，請妥善保管
2. **編碼問題**：所有腳本使用UTF-8編碼，確保終端支持中文顯示
3. **大文件**：部分文件內容較長，翻譯可能需要較長時間
4. **技術術語**：翻譯時保留英文技術術語（如TailwindCSS, flexbox等）
5. **代碼塊**：所有代碼塊會被保留，不進行翻譯

## 故障排除

### 問題：找不到模塊
```bash
pip install openai  # 如果使用API翻譯
```

### 問題：文件權限錯誤
```bash
chmod +x scripts/*.py
```

### 問題：中文顯示亂碼
```bash
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8
```

## 貢獻

如果你發現問題或有改進建議，請：
1. 檢查現有的問題文件
2. 運行分析腳本確認問題
3. 提交issue或PR

## 許可證

與ui-style-react項目保持一致。
