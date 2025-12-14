#!/usr/bin/env node

/**
 * 分析 Markdown prompt 文件中中英文的长度比例
 * 找出中文翻译明显不足的文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROMPTS_DIR = path.join(__dirname, '../dist/data/prompts/styles');

/**
 * 递归查找所有 custom.md 和 style.md 文件
 */
function findMarkdownFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);

        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (entry.isFile() && (entry.name === 'custom.md' || entry.name === 'style.md')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // 忽略无法访问的目录
    }
  }

  traverse(dir);
  return files;
}

/**
 * 解析 Markdown 文件，提取中文和英文部分
 */
function parseMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 查找中文版本部分
    const zhMatch = content.match(/## 中文版本 \(zh-CN\)([\s\S]*?)(?=##|$)/);
    const zhContent = zhMatch ? zhMatch[1].trim() : '';

    // 查找英文版本部分
    const enMatch = content.match(/## English Version \(en-US\)([\s\S]*?)$/);
    const enContent = enMatch ? enMatch[1].trim() : '';

    return {
      zhContent,
      enContent,
      zhLength: zhContent.length,
      enLength: enContent.length
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * 分析单个文件的翻译比例
 */
function analyzeFile(filePath) {
  const parsed = parseMarkdownFile(filePath);
  if (!parsed) return null;

  const { zhLength, enLength, zhContent, enContent } = parsed;

  // 计算比例
  const ratio = zhLength > 0 ? enLength / zhLength : (enLength > 0 ? Infinity : 0);

  // 判断是否需要翻译
  const needsTranslation = enLength > 100 && (zhLength < 50 || ratio > 10);

  return {
    filePath,
    zhLength,
    enLength,
    ratio,
    needsTranslation,
    hasContent: enLength > 0,
    zhPreview: zhContent.substring(0, 100).replace(/\n/g, ' '),
    enPreview: enContent.substring(0, 100).replace(/\n/g, ' ')
  };
}

/**
 * 主函数
 */
function main() {
  console.log('Analyzing Markdown prompt files...\n');

  if (!fs.existsSync(PROMPTS_DIR)) {
    console.error(`ERROR: Directory not found: ${PROMPTS_DIR}`);
    console.error('Please run "npm run build" first to generate dist/ directory.');
    return;
  }

  const files = findMarkdownFiles(PROMPTS_DIR);
  console.log(`Found ${files.length} Markdown prompt files\n`);

  const results = files
    .map(analyzeFile)
    .filter(r => r !== null && r.hasContent)
    .sort((a, b) => b.ratio - a.ratio);

  // 找出需要翻译的文件
  const filesToTranslate = results.filter(r => r.needsTranslation);

  console.log('=== TOP 30 FILES NEEDING TRANSLATION ===\n');

  filesToTranslate.slice(0, 30).forEach((result, index) => {
    const relativePath = path.relative(PROMPTS_DIR, result.filePath);
    const ratioStr = Number.isFinite(result.ratio) ? `${result.ratio.toFixed(1)}x` : '∞';

    console.log(`${index + 1}. ${relativePath}`);
    console.log(`   Ratio: ${ratioStr} (EN: ${result.enLength} chars, ZH: ${result.zhLength} chars)`);
    console.log(`   ZH: ${result.zhPreview}...`);
    console.log();
  });

  // 按目录分组统计
  console.log('\n=== SUMMARY BY DIRECTORY ===\n');

  const byDir = {};
  filesToTranslate.forEach(r => {
    const relativePath = path.relative(PROMPTS_DIR, r.filePath);
    const parts = relativePath.split(path.sep);
    const dirKey = parts.slice(0, -1).join('/');

    if (!byDir[dirKey]) {
      byDir[dirKey] = [];
    }
    byDir[dirKey].push(r);
  });

  Object.entries(byDir)
    .sort((a, b) => {
      // 优先显示用户提到的目录
      const priorityDirs = [
        'core/skeuomorphism',
        'visual/claymorphism',
        'visual/neoBrutalism',
        'visual/monochrome/portfolio-showcase',
        'core/brutalism/modern-brutalism-project-mgmt',
        'visual/monochrome/visual-monochrome',
        'visual/antiDesign/visual-tech-anti-design',
        'core/fluent2/fluent2-Notification',
        'visual/leather/visual-texture-leather-vintage-journal',
        'core/fluent2/fluent2-settings'
      ];

      const aIndex = priorityDirs.indexOf(a[0]);
      const bIndex = priorityDirs.indexOf(b[0]);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      return b[1].length - a[1].length;
    })
    .slice(0, 20)
    .forEach(([dir, items]) => {
      const avgRatio = items.reduce((sum, r) => sum + (Number.isFinite(r.ratio) ? r.ratio : 100), 0) / items.length;
      console.log(`${dir}: ${items.length} files, avg ratio ${avgRatio.toFixed(1)}x`);
    });

  // 保存结果到 JSON
  const outputPath = path.join(__dirname, '../markdown-translation-analysis.json');
  const outputData = {
    timestamp: new Date().toISOString(),
    totalFiles: files.length,
    filesWithContent: results.length,
    filesToTranslate: filesToTranslate.length,
    files: filesToTranslate.map(r => ({
      path: path.relative(PROMPTS_DIR, r.filePath),
      ratio: Number.isFinite(r.ratio) ? Math.round(r.ratio * 10) / 10 : null,
      enLength: r.enLength,
      zhLength: r.zhLength,
      zhPreview: r.zhPreview
    }))
  };

  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

  console.log(`\n\nTotal: ${filesToTranslate.length} files need translation`);
  console.log(`Results saved to: ${outputPath}`);
}

main();
