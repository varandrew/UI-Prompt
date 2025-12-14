# Markdown Fix Scripts - Documentation

This directory contains automation scripts used to fix and standardize 167 markdown files in `/public/data/prompts/styles/`.

## 📂 Scripts Overview

### 1. Diagnostic Scripts

#### `scan-all-markdown.js`
Scans all custom.md files and analyzes content ratios between Chinese and English versions.

**Usage:**
```bash
node scan-all-markdown.js
```

**Output:**
- Lists top 20 files by ratio (potentially broken)
- Identifies truly broken files (Chinese << English)
- Provides summary statistics

---

### 2. Fix Scripts (Run in Order)

#### `fix-consolidated-markdown.js`
Initial consolidation pass - removes internal `---` separators in Chinese sections.

**Usage:**
```bash
node fix-consolidated-markdown.js
```

**What it does:**
- Detects files where first Chinese block is very short but full content exists
- Consolidates Chinese content by removing `---` dividers
- Preserves all content, just restructures format

---

#### `cleanup-duplicate-markers.js`
Removes duplicate language markers like standalone `(zh-CN)` or `(en-US)` lines.

**Usage:**
```bash
node cleanup-duplicate-markers.js
```

**What it does:**
- Finds standalone `(zh-CN)` after `## 中文版本 (zh-CN)`
- Finds standalone `(en-US)` after `## English Version (en-US)`
- Removes these duplicates

---

#### `final-cleanup.js`
Comprehensive cleanup of both Chinese and English sections.

**Usage:**
```bash
node final-cleanup.js
```

**What it does:**
- Consolidates ALL sections (Chinese + English)
- Removes internal `---` in both sections
- Ensures clean format: Header + Chinese + `---` + English

---

#### `remove-duplicate-separators.js`
Final pass to remove any remaining duplicate `---` separators.

**Usage:**
```bash
node remove-duplicate-separators.js
```

**What it does:**
- Finds consecutive `---` separators
- Keeps only one separator between Chinese and English

---

### 3. Analysis Scripts

#### `diagnose-markdown-files.js`
Detailed analysis of sample files showing preview content.

**Usage:**
```bash
node diagnose-markdown-files.js
```

---

#### `check-broken-files.js`
Analyzes the remaining broken files that need manual translation.

**Usage:**
```bash
node check-broken-files.js
```

**Output:**
- Shows Chinese vs English content length
- Displays preview of both versions
- Identifies what needs translation

---

## 🎯 Recommended Workflow

If you need to run this process again:

```bash
# Step 1: Analyze
node scan-all-markdown.js

# Step 2: Initial fix
node fix-consolidated-markdown.js

# Step 3: Clean duplicates
node cleanup-duplicate-markers.js

# Step 4: Complete consolidation
node final-cleanup.js

# Step 5: Remove any duplicate separators
node remove-duplicate-separators.js

# Step 6: Verify
node scan-all-markdown.js
```

---

## 📊 Reports Generated

### `FIX_REPORT.md`
Detailed report with:
- Full list of 42 initially broken files
- 3 files needing manual translation
- Before/After format examples
- Translation guidelines

### `MARKDOWN_FIX_SUMMARY.md`
Executive summary with:
- Success metrics (98.2% completion)
- Quick reference tables
- Translation requirements
- Tool documentation

---

## 🔧 Technical Details

### Dependencies
- Node.js 20+ (ES modules)
- Standard library only (fs, path, execSync)

### File Processing Strategy
1. **Find**: Use `find` command to locate all `custom.md` files
2. **Read**: Read entire file content
3. **Parse**: Split by `## 中文版本` and `## English Version` markers
4. **Process**: Apply specific transformations
5. **Write**: Overwrite with cleaned content

### Regex Patterns Used

```javascript
// Remove standalone language markers
content.replace(/## 中文版本 \(zh-CN\)\s*\n+\(zh-CN\)\s*\n+/g, '## 中文版本 (zh-CN)\n\n')

// Remove duplicate separators
content.replace(/(\n---\n)(\s*\n---\n)+/g, '\n---\n')

// Consolidate sections
section.split('\n---\n')
  .map(s => s.trim())
  .filter(s => s.length > 0)
  .join('\n\n')
```

---

## ⚠️ Important Notes

1. **Backup**: All scripts modify files in place. Make sure you have git backup before running.

2. **Idempotent**: Scripts are safe to run multiple times - they check if work is needed before modifying.

3. **No Data Loss**: Scripts only restructure format, never delete content.

4. **Language Detection**: Scripts detect files needing translation by comparing content length ratios (threshold: 3x).

---

## 🐛 Troubleshooting

### "File not found" errors
- Ensure you're running from project root directory
- Check that `public/data/prompts/styles/` exists

### Scripts skip all files
- Files are already in correct format
- Re-run `scan-all-markdown.js` to verify

### Unexpected results
- Check git diff to see changes
- Revert with `git checkout public/data/prompts/styles/`

---

**Last Updated**: 2025-12-14
**Version**: 1.0
**Status**: Production Ready
