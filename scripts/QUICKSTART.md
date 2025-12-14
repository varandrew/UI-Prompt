# Quick Start Guide - Markdown Prompt Fixer

快速修復UI Style React項目中的Markdown prompt文件。

## 最簡單的方法（推薦）

### 一鍵修復所有文件

```bash
cd /Users/tomleung/Downloads/mcp/ui-style/ui-style-react
./scripts/batch-fix-prompts.sh all
```

### 分批修復

```bash
# 先修復最緊急的5個文件
./scripts/batch-fix-prompts.sh 1

# 然後修復高優先級的5個文件
./scripts/batch-fix-prompts.sh 2

# 最後修復剩餘文件
./scripts/batch-fix-prompts.sh 3
./scripts/batch-fix-prompts.sh 4
```

## 驗證修復結果

```bash
python3 scripts/analyze-prompts.py
```

應該看到問題文件數量大幅減少。

## 如果出現問題

### 恢復備份文件

所有修改過的文件都有備份（.md.backup）：

```bash
# 恢復單個文件
cd public/data/prompts/styles
mv visual/monochrome/portfolio-showcase/custom.md.backup visual/monochrome/portfolio-showcase/custom.md

# 批量恢復所有備份
find . -name "*.md.backup" | while read backup; do
    original="${backup%.backup}"
    mv "$backup" "$original"
done
```

### 重新運行（Dry Run模式）

先預覽更改，不實際修改文件：

```bash
python3 scripts/fix-prompt-simple.py --dry-run path/to/custom.md
```

## 腳本說明

### analyze-prompts.py
分析所有文件，找出問題文件

### fix-prompt-simple.py
修復單個或多個文件的格式

### batch-fix-prompts.sh
批量處理文件的便捷腳本

### fix-prompt-extract.py
提取內容準備翻譯（高級用戶）

### fix-prompt-translations.py
使用API自動翻譯（需要OpenAI API密鑰）

## 問題排查

### Python不可用
```bash
# macOS
brew install python3

# 或使用系統Python
python --version
```

### 權限錯誤
```bash
chmod +x scripts/*.sh
chmod +x scripts/*.py
```

### 找不到文件
確認你在項目根目錄：
```bash
pwd
# 應該顯示: /Users/tomleung/Downloads/mcp/ui-style/ui-style-react
```

## 下一步

修復完成後：

1. **檢查變更**
   ```bash
   git status
   git diff
   ```

2. **測試網站**
   ```bash
   npm run dev
   # 訪問 http://localhost:1000
   ```

3. **提交更改**
   ```bash
   git add .
   git commit -m "fix: update Markdown prompt file formatting for 38 files

   - Fix zh-CN/en-US section separation
   - Balance Chinese and English content length
   - Preserve original short Chinese descriptions
   - Create backups for all modified files

   Affected files: 38 custom.md files with EN/ZH ratio > 5.0x"
   ```

## 完整流程示例

```bash
# 1. 進入項目目錄
cd /Users/tomleung/Downloads/mcp/ui-style/ui-style-react

# 2. 查看問題
python3 scripts/analyze-prompts.py

# 3. 修復文件（使用批量腳本）
./scripts/batch-fix-prompts.sh all

# 4. 驗證結果
python3 scripts/analyze-prompts.py

# 5. 檢查Git變更
git status

# 6. 提交（如果滿意）
git add .
git commit -m "fix: update Markdown prompt formatting"
git push
```

## 需要幫助？

查看詳細文檔：
```bash
cat scripts/README_TRANSLATION_FIXER.md
```
