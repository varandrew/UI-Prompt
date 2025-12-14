#!/usr/bin/env node

/**
 * Fix markdown files by consolidating Chinese sections separated by ---
 * Only fixes files where first block is short but full content is complete
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stats = {
  total: 0,
  fixed: 0,
  skipped: 0,
  errors: []
};

function needsConsolidation(content) {
  const chineseStart = content.indexOf('## 中文版本');
  const englishStart = content.indexOf('## English Version');

  if (chineseStart === -1 || englishStart === -1) return false;

  const chineseSection = content.substring(chineseStart, englishStart);
  const englishSection = content.substring(englishStart);

  const firstDivider = chineseSection.indexOf('\n---\n');
  if (firstDivider === -1) return false; // No dividers, already consolidated

  const firstBlockLength = chineseSection.substring(0, firstDivider).trim().length;
  const fullChineseLength = chineseSection.trim().length;
  const englishLength = englishSection.trim().length;

  const ratioFirstBlock = englishLength / firstBlockLength;
  const ratioFull = englishLength / fullChineseLength;

  // Needs fix if: First block very short (>10x) but full content is reasonable (<2x)
  return ratioFirstBlock > 10 && ratioFull < 2;
}

function consolidateMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!needsConsolidation(content)) {
      return { skipped: true };
    }

    // Find section boundaries
    const chineseMarker = '## 中文版本';
    const englishMarker = '## English Version';

    const chineseStart = content.indexOf(chineseMarker);
    const englishStart = content.indexOf(englishMarker);

    // Extract parts
    const header = content.substring(0, chineseStart).trim();
    const chineseSection = content.substring(
      chineseStart + chineseMarker.length,
      englishStart
    ).trim();
    const englishSection = content.substring(englishStart + englishMarker.length).trim();

    // Consolidate Chinese content - remove internal --- separators
    // Keep content but remove the --- dividers
    const consolidatedChinese = chineseSection
      .split('\n---\n')
      .map(block => block.trim())
      .filter(block => block.length > 0)
      .join('\n\n')
      .replace(/^\(zh-CN\)\s*\n+/, ''); // Remove standalone (zh-CN) if present

    // Reconstruct file with proper format
    const fixed = `${header}

${chineseMarker} (zh-CN)

${consolidatedChinese}

---

${englishMarker} (en-US)

${englishSection}
`;

    // Write back
    fs.writeFileSync(filePath, fixed, 'utf-8');

    return { fixed: true };
  } catch (error) {
    return { error: error.message };
  }
}

function main() {
  console.log('🚀 CONSOLIDATING MARKDOWN FILES\n');

  // Find all custom.md files
  const command = 'find public/data/prompts/styles -name "custom.md" -type f';
  const files = execSync(command, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .filter(f => f);

  stats.total = files.length;
  console.log(`Found ${stats.total} files\n`);
  console.log('='.repeat(100));

  files.forEach((file, index) => {
    const displayPath = file.replace('public/data/prompts/styles/', '');
    process.stdout.write(`\r[${index + 1}/${stats.total}] Processing: ${displayPath.padEnd(80).substring(0, 80)}`);

    const result = consolidateMarkdown(file);

    if (result.fixed) {
      stats.fixed++;
      console.log(`\r✅ Fixed: ${displayPath}${' '.repeat(100)}`);
    } else if (result.skipped) {
      stats.skipped++;
    } else if (result.error) {
      stats.errors.push({ file: displayPath, error: result.error });
      console.log(`\r❌ Error: ${displayPath} - ${result.error}${' '.repeat(100)}`);
    }
  });

  // Clear the progress line
  console.log(`\r${' '.repeat(120)}`);

  // Summary
  console.log('\n' + '='.repeat(100));
  console.log('📊 PROCESSING SUMMARY');
  console.log('='.repeat(100));
  console.log(`✅ Successfully fixed: ${stats.fixed}`);
  console.log(`⏭️  Skipped (already OK): ${stats.skipped}`);
  console.log(`❌ Errors: ${stats.errors.length}`);

  if (stats.errors.length > 0) {
    console.log('\n❌ ERRORS:');
    stats.errors.forEach(({ file, error }) => {
      console.log(`   - ${file}: ${error}`);
    });
  }

  console.log('\n✨ Process completed!\n');
}

main();
