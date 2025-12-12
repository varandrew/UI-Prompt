#!/usr/bin/env node

/**
 * Analyze custom.md prompt files for quality issues
 */

import fs from 'fs';
import { execSync } from 'child_process';

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Split by language sections
    const zhMatch = content.match(/## 中文版本 \(zh-CN\)([\s\S]*?)(?=---|\n## English Version|$)/);
    const enMatch = content.match(/## English Version \(en-US\)([\s\S]*?)$/);

    const zhContent = zhMatch ? zhMatch[1].trim() : '';
    const enContent = enMatch ? enMatch[1].trim() : '';

    // Calculate metrics
    const zhCharCount = zhContent.length;
    const enCharCount = enContent.length;
    const zhWordCount = zhContent.split(/\s+/).filter(Boolean).length;
    const enWordCount = enContent.split(/\s+/).filter(Boolean).length;

    // Count sections
    const zhSections = (zhContent.match(/###/g) || []).length;
    const enSections = (enContent.match(/###/g) || []).length;

    // Check for issues
    const issues = [];

    // Too short (less than 500 chars for Chinese, less than 1000 for English)
    if (zhCharCount < 500) {
      issues.push(`中文内容过短 (${zhCharCount} chars)`);
    }
    if (enCharCount < 1000) {
      issues.push(`English content too short (${enCharCount} chars)`);
    }

    // Missing sections
    if (zhSections < 3) {
      issues.push(`中文章节不足 (${zhSections} sections)`);
    }
    if (enSections < 3) {
      issues.push(`English sections insufficient (${enSections} sections)`);
    }

    // Check for placeholder text
    if (content.includes('TODO') || content.includes('[') && content.includes(']...')) {
      issues.push('包含占位符文本');
    }

    // Too similar in length (likely copy-paste without translation)
    const lengthRatio = Math.min(zhCharCount, enCharCount) / Math.max(zhCharCount, enCharCount);
    if (lengthRatio > 0.9 && zhCharCount > 100) {
      issues.push('中英文长度过于相似,可能未充分翻译');
    }

    return {
      path: filePath,
      zhCharCount,
      enCharCount,
      zhWordCount,
      enWordCount,
      zhSections,
      enSections,
      issues
    };
  } catch (error) {
    return {
      path: filePath,
      error: error.message
    };
  }
}

function main() {
  console.log('Analyzing custom.md prompt files...\n');

  // Find all custom.md files
  const files = execSync('find public/data/prompts -name "custom.md" -type f', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(Boolean);

  console.log(`Found ${files.length} custom.md files\n`);

  const results = files.map(analyzeFile);

  // Categorize results
  const withIssues = results.filter(r => r.issues && r.issues.length > 0);
  const withErrors = results.filter(r => r.error);
  const good = results.filter(r => !r.error && (!r.issues || r.issues.length === 0));

  // Report issues
  if (withIssues.length > 0) {
    console.log(`❌ Files with issues (${withIssues.length}):\n`);
    withIssues.forEach(r => {
      console.log(`📄 ${r.path}`);
      console.log(`   中文: ${r.zhCharCount} chars, ${r.zhSections} sections`);
      console.log(`   English: ${r.enCharCount} chars, ${r.enSections} sections`);
      r.issues.forEach(issue => console.log(`   ⚠️  ${issue}`));
      console.log();
    });
  }

  if (withErrors.length > 0) {
    console.log(`\n❌ Files with errors (${withErrors.length}):\n`);
    withErrors.forEach(r => {
      console.log(`📄 ${r.path}`);
      console.log(`   Error: ${r.error}\n`);
    });
  }

  console.log(`\n✅ Summary:`);
  console.log(`   Good: ${good.length} files`);
  console.log(`   Issues: ${withIssues.length} files`);
  console.log(`   Errors: ${withErrors.length} files`);
  console.log(`   Total: ${files.length} files`);

  // Export detailed report
  const reportPath = 'prompt-quality-report.json';
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      total: files.length,
      good: good.length,
      issues: withIssues.length,
      errors: withErrors.length
    },
    withIssues,
    withErrors,
    good: good.map(r => r.path)
  }, null, 2));

  console.log(`\n📊 Detailed report saved to: ${reportPath}`);
}

main();
