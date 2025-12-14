#!/usr/bin/env node

/**
 * 批量翻译 Markdown prompt 文件
 * 将英文详细规格翻译成简体中文
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 从环境变量读取 API Key
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!ANTHROPIC_API_KEY) {
  console.error('ERROR: ANTHROPIC_API_KEY environment variable is required');
  console.error('Please set it in your .env file or export it:');
  console.error('  export ANTHROPIC_API_KEY=your-api-key-here');
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

const PROMPTS_DIR = path.join(__dirname, '../dist/data/prompts/styles');

/**
 * 翻译提示词模板
 */
const TRANSLATION_SYSTEM_PROMPT = `你是一位专业的技术文档翻译专家，专注于将 UI 设计和前端开发相关的英文文档翻译成简体中文。

翻译要求：
1. 保持原文的 Markdown 格式（标题、列表、代码块等）
2. 技术术语保留英文，在首次出现时可以加中文注释
   - 例如：TailwindCSS, Hero, CTA, Fluent 2, Material Design
3. CSS 类名、HTML 标签、属性名等代码相关内容保持英文
   - 例如：\`rounded-xl\`, \`shadow-sm\`, \`hover:\`, \`focus-visible:\`
4. 数值和单位保持原样：如 38–52px, 4.5:1, 120–180ms
5. 翻译要准确、自然、专业，符合中文表达习惯
6. 保持语气一致：专业、清晰、指导性
7. 对于设计原则和交互描述要翻译得详细准确
8. 示例文本（如 CTA 按钮文字）可以选择性翻译或保留英文

注意：输出只包含翻译后的中文内容，不要包含任何额外说明或元信息。`;

/**
 * 从 Markdown 文件中解析英文部分
 */
function extractEnglishContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 查找英文版本部分
    const enMatch = content.match(/## English Version \(en-US\)([\s\S]*?)$/);
    const enContent = enMatch ? enMatch[1].trim() : '';

    if (!enContent) {
      return null;
    }

    return {
      fullContent: content,
      enContent
    };
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

/**
 * 使用 Claude API 翻译内容
 */
async function translateWithClaude(englishContent) {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8000,
      temperature: 0.3,
      system: TRANSLATION_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `请将以下 UI 设计 prompt 英文内容翻译成简体中文：\n\n${englishContent}`
        }
      ]
    });

    const translatedContent = message.content[0].text.trim();
    return translatedContent;
  } catch (error) {
    console.error('Translation API error:', error.message);
    throw error;
  }
}

/**
 * 更新 Markdown 文件的中文部分
 */
function updateChineseSection(filePath, translatedContent, dryRun = false) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 查找并替换中文版本部分
    const zhPattern = /(## 中文版本 \(zh-CN\))([\s\S]*?)(---\s*## English Version|## English Version)/;

    let updatedContent;
    if (zhPattern.test(content)) {
      // 已存在中文部分，替换
      updatedContent = content.replace(zhPattern, `$1\n\n${translatedContent}\n\n$3`);
    } else {
      // 不存在中文部分，在英文部分之前插入
      updatedContent = content.replace(
        /## English Version \(en-US\)/,
        `## 中文版本 (zh-CN)\n\n${translatedContent}\n\n---\n\n## English Version (en-US)`
      );
    }

    if (!dryRun) {
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      return true;
    }

    return updatedContent;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

/**
 * 翻译单个文件
 */
async function translateFile(filePath, options = {}) {
  const { dryRun = false, delay = 1000 } = options;

  console.log(`\nProcessing: ${path.relative(PROMPTS_DIR, filePath)}`);

  // 提取英文内容
  const extracted = extractEnglishContent(filePath);
  if (!extracted || !extracted.enContent) {
    console.log('  ⊘ No English content found, skipping');
    return { status: 'skipped', reason: 'no-english-content' };
  }

  console.log(`  📝 English content length: ${extracted.enContent.length} chars`);

  // 翻译
  console.log('  🌐 Translating with Claude API...');
  try {
    const translated = await translateWithClaude(extracted.enContent);
    console.log(`  ✓ Translation complete: ${translated.length} chars`);

    // 更新文件
    if (dryRun) {
      console.log('  🔍 DRY RUN - Preview:');
      console.log('  ' + translated.split('\n').slice(0, 5).join('\n  '));
      console.log('  ...');
    } else {
      const success = updateChineseSection(filePath, translated, dryRun);
      if (success) {
        console.log('  ✓ File updated successfully');
      } else {
        console.log('  ✗ Failed to update file');
        return { status: 'failed', reason: 'update-failed' };
      }
    }

    // 延迟以避免 API 速率限制
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    return { status: 'success', enLength: extracted.enContent.length, zhLength: translated.length };
  } catch (error) {
    console.log(`  ✗ Translation failed: ${error.message}`);
    return { status: 'failed', reason: 'translation-error', error: error.message };
  }
}

/**
 * 批量翻译文件
 */
async function batchTranslate(filePaths, options = {}) {
  const { dryRun = false, delay = 1000, maxFiles = null } = options;

  const results = {
    total: filePaths.length,
    processed: 0,
    success: 0,
    failed: 0,
    skipped: 0,
    details: []
  };

  const filesToProcess = maxFiles ? filePaths.slice(0, maxFiles) : filePaths;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Starting batch translation`);
  console.log(`Total files: ${filesToProcess.length}`);
  console.log(`Mode: ${dryRun ? 'DRY RUN (preview only)' : 'LIVE (will update files)'}`);
  console.log(`${'='.repeat(60)}\n`);

  for (let i = 0; i < filesToProcess.length; i++) {
    const filePath = filesToProcess[i];
    console.log(`\n[${i + 1}/${filesToProcess.length}]`);

    const result = await translateFile(filePath, { dryRun, delay });

    results.processed++;
    if (result.status === 'success') results.success++;
    else if (result.status === 'failed') results.failed++;
    else if (result.status === 'skipped') results.skipped++;

    results.details.push({
      file: path.relative(PROMPTS_DIR, filePath),
      ...result
    });
  }

  return results;
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);

  // 解析命令行参数
  const dryRun = args.includes('--dry-run') || args.includes('-d');
  const maxFilesArg = args.find(arg => arg.startsWith('--max='));
  const maxFiles = maxFilesArg ? parseInt(maxFilesArg.split('=')[1]) : null;
  const topOnly = args.includes('--top-10');
  const delayArg = args.find(arg => arg.startsWith('--delay='));
  const delay = delayArg ? parseInt(delayArg.split('=')[1]) : 1500;

  // 读取分析结果
  const analysisPath = path.join(__dirname, '../markdown-translation-analysis.json');
  if (!fs.existsSync(analysisPath)) {
    console.error('ERROR: Analysis file not found');
    console.error('Please run "npm run analyze:markdown" first');
    process.exit(1);
  }

  const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf-8'));

  // 获取需要翻译的文件列表
  let filesToTranslate = analysis.files.map(f => path.join(PROMPTS_DIR, f.path));

  if (topOnly) {
    filesToTranslate = filesToTranslate.slice(0, 10);
    console.log('Processing TOP 10 files only');
  }

  if (maxFiles) {
    filesToTranslate = filesToTranslate.slice(0, maxFiles);
    console.log(`Limited to ${maxFiles} files`);
  }

  // 执行批量翻译
  const results = await batchTranslate(filesToTranslate, { dryRun, delay, maxFiles });

  // 打印结果
  console.log(`\n${'='.repeat(60)}`);
  console.log('TRANSLATION SUMMARY');
  console.log(`${'='.repeat(60)}`);
  console.log(`Total files: ${results.total}`);
  console.log(`Processed: ${results.processed}`);
  console.log(`Success: ${results.success}`);
  console.log(`Failed: ${results.failed}`);
  console.log(`Skipped: ${results.skipped}`);

  // 保存结果
  const outputPath = path.join(__dirname, '../translation-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\nResults saved to: ${outputPath}`);

  if (dryRun) {
    console.log('\n⚠️  This was a DRY RUN - no files were modified');
    console.log('Run without --dry-run to apply changes');
  }
}

// 运行
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
