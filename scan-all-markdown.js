#!/usr/bin/env node

/**
 * Comprehensive scan of all custom.md files to find problematic ones
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find markers
    const chineseStart = content.indexOf('## 中文版本');
    const englishStart = content.indexOf('## English Version');

    if (chineseStart === -1 || englishStart === -1) {
      return { error: 'Missing markers' };
    }

    // Extract sections
    const chineseSection = content.substring(chineseStart, englishStart);
    const englishSection = content.substring(englishStart);

    // Get the FIRST Chinese block only (before first ---)
    const firstDivider = chineseSection.indexOf('\n---\n');
    const firstChineseBlock = firstDivider > 0
      ? chineseSection.substring(0, firstDivider)
      : chineseSection;

    // Get full Chinese content (all blocks)
    const fullChineseContent = chineseSection.substring(chineseSection.indexOf('\n')).trim();
    const englishContent = englishSection.substring(englishSection.indexOf('\n')).trim();

    // Calculate ratios
    const firstBlockLength = firstChineseBlock.substring(firstChineseBlock.indexOf('\n')).trim().length;
    const fullChineseLength = fullChineseContent.length;
    const englishLength = englishContent.length;

    const ratioFirstBlock = englishLength / firstBlockLength;
    const ratioFull = englishLength / fullChineseLength;

    return {
      filePath: filePath.replace(__dirname + '/', ''),
      firstBlockLength,
      fullChineseLength,
      englishLength,
      ratioFirstBlock: ratioFirstBlock.toFixed(2),
      ratioFull: ratioFull.toFixed(2),
      separators: (chineseSection.match(/\n---\n/g) || []).length,
      needsFix: ratioFirstBlock > 10 && ratioFull < 2, // First block short, but full Chinese is OK
      isBroken: ratioFull > 3 // Even full Chinese is much shorter than English
    };
  } catch (error) {
    return { error: error.message, filePath };
  }
}

function main() {
  console.log('🔍 SCANNING ALL CUSTOM.MD FILES\n');

  // Find all custom.md files
  const command = 'find public/data/prompts/styles -name "custom.md" -type f';
  const files = execSync(command, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .filter(f => f);

  console.log(`Found ${files.length} files\n`);
  console.log('='.repeat(120));

  const results = files.map(file => analyzeFile(file)).filter(r => !r.error);

  // Sort by ratioFirstBlock (most suspicious first)
  results.sort((a, b) => parseFloat(b.ratioFirstBlock) - parseFloat(a.ratioFirstBlock));

  // Show top 20 suspicious files
  console.log('\n🚨 TOP 20 FILES BY FIRST-BLOCK RATIO (Potentially needs consolidation):\n');
  results.slice(0, 20).forEach((r, i) => {
    const flag = r.isBroken ? '💔 BROKEN' : r.needsFix ? '⚠️  NEEDS_FIX' : '✅ OK';
    console.log(`${(i + 1).toString().padStart(2)}. ${flag} ${r.filePath}`);
    console.log(`    First Block: ${r.firstBlockLength} chars | Full Chinese: ${r.fullChineseLength} chars | English: ${r.englishLength} chars`);
    console.log(`    Ratio (First): ${r.ratioFirstBlock}x | Ratio (Full): ${r.ratioFull}x | Separators: ${r.separators}`);
    console.log('');
  });

  // Show broken files
  const brokenFiles = results.filter(r => r.isBroken);
  if (brokenFiles.length > 0) {
    console.log('\n💔 BROKEN FILES (Full Chinese much shorter than English):\n');
    brokenFiles.forEach((r, i) => {
      console.log(`${i + 1}. ${r.filePath}`);
      console.log(`   Ratio: ${r.ratioFull}x (English/Chinese)`);
    });
  }

  // Summary
  console.log('\n' + '='.repeat(120));
  console.log('📊 SUMMARY');
  console.log('='.repeat(120));
  console.log(`Total files: ${results.length}`);
  console.log(`Files needing fix: ${results.filter(r => r.needsFix).length}`);
  console.log(`Broken files: ${brokenFiles.length}`);
  console.log('');
}

main();
