# Translation Guide - UI Style Prompts

This guide explains how to use the automated translation script to translate prompt files from English to Simplified Chinese.

## Prerequisites

### 1. Install Dependencies

```bash
pip install anthropic
```

### 2. Set API Key

You need an Anthropic API key. Set it as an environment variable:

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

Or on Windows:
```cmd
set ANTHROPIC_API_KEY=your-api-key-here
```

Alternatively, you can pass it via command line with `--api-key` flag.

## Usage

### Basic Commands

```bash
# Make script executable (macOS/Linux)
chmod +x translate-all-prompts.py

# Preview all translations (dry-run, no files modified)
python translate-all-prompts.py --dry-run

# Translate first 1 file (for testing)
python translate-all-prompts.py --limit 1

# Translate all files in batch 1 (highest priority)
python translate-all-prompts.py --batch 1

# Translate all 38 files
python translate-all-prompts.py
```

### Test Workflow (Recommended)

Before running the full translation, test with a single file:

```bash
# Step 1: Dry run to preview
python translate-all-prompts.py --dry-run --limit 1

# Step 2: Translate one file to verify quality
python translate-all-prompts.py --limit 1

# Step 3: Check the translated file manually
# File: src/data/prompts/visual/monochrome/portfolio-showcase/custom.md

# Step 4: If satisfied, run batch 1 (5 files)
python translate-all-prompts.py --batch 1

# Step 5: Run all remaining files
python translate-all-prompts.py
```

## File Batches

Files are organized by priority (based on translation ratio):

- **Batch 1** (5 files, ratio > 50): Highest priority
- **Batch 2** (5 files, ratio 40-50): High priority
- **Batch 3** (18 files, ratio 20-40): Medium priority
- **Batch 4** (10 files, ratio 5-20): Lower priority

## Translation Features

The script ensures:

✅ **Simplified Chinese** (简体中文) - NOT Traditional Chinese
✅ **Preserves Markdown formatting** - headers, lists, code blocks
✅ **Keeps code unchanged** - HTML, CSS, JavaScript blocks
✅ **Retains technical terms** - TailwindCSS, Hero, CTA, etc.
✅ **Preserves measurements** - 38-52px, 4.5:1, 120-180ms
✅ **Professional translation** - natural Chinese technical documentation style
✅ **Retry logic** - handles API rate limits with exponential backoff

## Output Example

```
======================================================================
🌐 Translation Task Started
======================================================================
Mode: LIVE (Writing Files)
Files to process: 5
Batch: 1
======================================================================

[1/5] Processing: visual/monochrome/portfolio-showcase
  ✓ Translated 2,458 chars in 3.2s
[2/5] Processing: core/brutalism/modern-brutalism-project-mgmt
  ✓ Translated 1,923 chars in 2.8s
[3/5] Processing: visual/monochrome/visual-monochrome
  ✓ Translated 2,104 chars in 3.0s
[4/5] Processing: visual/antiDesign/visual-tech-anti-design
  ✓ Translated 1,867 chars in 2.7s
[5/5] Processing: core/fluent2/fluent2-Notification
  ✓ Translated 2,234 chars in 3.1s

======================================================================
📊 Translation Report
======================================================================
Total files: 5
✓ Successful: 5
✗ Failed: 0

Translation Statistics:
  Total characters: 10,586
  Total time: 14.8s
  Average speed: 715 chars/sec
======================================================================
```

## Error Handling

The script includes robust error handling:

- **Rate limiting**: Automatic retry with exponential backoff (2s, 4s, 8s)
- **API errors**: Retry up to 3 times before failing
- **File not found**: Reports missing files without crashing
- **Parsing errors**: Validates Markdown structure before translation

## Manual Verification

After translation, manually check a few files to ensure quality:

```bash
# View a translated file
cat src/data/prompts/visual/monochrome/portfolio-showcase/custom.md
```

Look for:
- Simplified Chinese characters (颜色 not 顏色, 设计 not 設計)
- Preserved code blocks and HTML/CSS
- Natural Chinese phrasing
- Correct technical term handling

## Troubleshooting

### API Key Error
```
ANTHROPIC_API_KEY not found
```
**Solution**: Set your API key as environment variable or use `--api-key` flag

### Rate Limit Errors
```
⚠️  Rate limit hit, waiting 2s before retry...
```
**Solution**: Script automatically retries. If persistent, reduce batch size with `--limit`

### File Not Found
```
✗ Failed: File not found: /path/to/file
```
**Solution**: Verify file path in `FILE_BATCHES` matches actual file location

## Cost Estimation

Approximate API costs (based on Claude Sonnet 4):
- **Input**: ~0.3M characters total × $3/M tokens ≈ $0.90
- **Output**: ~0.3M characters total × $15/M tokens ≈ $4.50
- **Total estimated cost**: ~$5-6 USD for all 38 files

Note: Actual costs may vary. Use `--limit` to control spend during testing.

## Support

For issues or questions:
1. Check this guide first
2. Review the script's `--help` output: `python translate-all-prompts.py --help`
3. Test with `--dry-run` and `--limit 1` flags before full run
