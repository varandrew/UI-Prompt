#!/usr/bin/env node

/**
 * 分析模板文件中英文/中文的长度比例
 * 找出中文翻译明显不足的文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STYLES_DIR = path.join(__dirname, '../src/data/styles/generated');

/**
 * 递归查找所有 JSON 文件（排除 manifest.json）
 */
function findTemplateFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'manifest.json') {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

/**
 * 分析单个文件的翻译比例
 */
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);

    let enLength = 0;
    let zhLength = 0;
    const issues = [];

    // 分析 customPrompt
    if (data.customPrompt) {
      enLength += (data.customPrompt['en-US'] || '').length;
      zhLength += (data.customPrompt['zh-CN'] || '').length;

      if (data.customPrompt['en-US'] && !data.customPrompt['zh-CN']) {
        issues.push('customPrompt.zh-CN missing');
      }
    }

    // 分析 stylePrompt
    if (data.stylePrompt) {
      enLength += (data.stylePrompt['en-US'] || '').length;
      zhLength += (data.stylePrompt['zh-CN'] || '').length;

      if (data.stylePrompt['en-US'] && !data.stylePrompt['zh-CN']) {
        issues.push('stylePrompt.zh-CN missing');
      }
    }

    // 分析 description
    if (data.description) {
      enLength += (data.description['en-US'] || '').length;
      zhLength += (data.description['zh-CN'] || '').length;
    }

    // 计算比例
    const ratio = zhLength > 0 ? enLength / zhLength : (enLength > 0 ? Infinity : 0);

    return {
      filePath,
      id: data.id,
      category: data.category,
      family: data.family,
      enLength,
      zhLength,
      ratio,
      issues,
      hasContent: enLength > 0
    };
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * 主函数
 */
function main() {
  console.log('Analyzing translation ratios...\n');

  const files = findTemplateFiles(STYLES_DIR);
  console.log(`Found ${files.length} template files\n`);

  const results = files
    .map(analyzeFile)
    .filter(r => r !== null && r.hasContent) // 只关注有内容的文件
    .sort((a, b) => b.ratio - a.ratio); // 按比例降序排序

  // 找出比例 > 10 的问题文件
  const problematicFiles = results.filter(r => r.ratio > 10);

  console.log('=== TOP 20 FILES WITH HIGHEST EN/ZH RATIO ===\n');

  problematicFiles.slice(0, 20).forEach((result, index) => {
    const relativePath = path.relative(STYLES_DIR, result.filePath);
    console.log(`${index + 1}. ${relativePath}`);
    console.log(`   ID: ${result.id}`);
    console.log(`   Ratio: ${result.ratio.toFixed(1)}x (EN: ${result.enLength}, ZH: ${result.zhLength})`);
    if (result.issues.length > 0) {
      console.log(`   Issues: ${result.issues.join(', ')}`);
    }
    console.log();
  });

  // 按 family 分组统计
  console.log('\n=== SUMMARY BY FAMILY ===\n');

  const byFamily = {};
  problematicFiles.forEach(r => {
    const key = `${r.category}/${r.family}`;
    if (!byFamily[key]) {
      byFamily[key] = [];
    }
    byFamily[key].push(r);
  });

  Object.entries(byFamily)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([family, items]) => {
      const avgRatio = items.reduce((sum, r) => sum + r.ratio, 0) / items.length;
      console.log(`${family}: ${items.length} files, avg ratio ${avgRatio.toFixed(1)}x`);
    });

  // 生成需要翻译的文件列表
  console.log('\n=== FILES TO TRANSLATE (ratio > 50) ===\n');

  const toTranslate = problematicFiles.filter(r => r.ratio > 50);
  toTranslate.forEach((result, index) => {
    const relativePath = path.relative(STYLES_DIR, result.filePath);
    console.log(`${index + 1}. ${relativePath} (${result.ratio.toFixed(1)}x)`);
  });

  console.log(`\nTotal: ${toTranslate.length} files need translation`);

  // 保存结果到 JSON
  const outputPath = path.join(__dirname, '../translation-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalFiles: files.length,
    filesWithContent: results.length,
    problematicFiles: problematicFiles.length,
    filesToTranslate: toTranslate.length,
    topFiles: toTranslate.map(r => ({
      path: path.relative(STYLES_DIR, r.filePath),
      id: r.id,
      ratio: Math.round(r.ratio * 10) / 10,
      enLength: r.enLength,
      zhLength: r.zhLength,
      issues: r.issues
    }))
  }, null, 2));

  console.log(`\nResults saved to: ${outputPath}`);
}

main();
