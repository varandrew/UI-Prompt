#!/usr/bin/env node

/**
 * Diagnostic script to analyze Chinese vs English content length in markdown files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sample files to diagnose
const SAMPLE_FILES = [
  '/public/data/prompts/styles/core/skeuomorphism/custom.md',
  '/public/data/prompts/styles/visual/claymorphism/custom.md',
  '/public/data/prompts/styles/visual/neoBrutalism/custom.md',
  '/public/data/prompts/styles/visual/monochrome/portfolio-showcase/custom.md',
  '/public/data/prompts/styles/core/brutalism/modern-brutalism-project-mgmt/custom.md',
];

function analyzeFile(filePath) {
  const absolutePath = path.join(__dirname, filePath);

  if (!fs.existsSync(absolutePath)) {
    return { error: 'File not found', filePath };
  }

  const content = fs.readFileSync(absolutePath, 'utf-8');

  // Find markers
  const chineseStart = content.indexOf('## 中文版本');
  const englishStart = content.indexOf('## English Version');

  if (chineseStart === -1 || englishStart === -1) {
    return { error: 'Missing markers', filePath };
  }

  // Extract sections
  const chineseSection = content.substring(chineseStart, englishStart);
  const englishSection = content.substring(englishStart);

  // Count --- separators in Chinese section
  const chineseSeparators = (chineseSection.match(/\n---\n/g) || []).length;

  // Get lengths (excluding the header markers)
  const chineseContent = chineseSection.substring(chineseSection.indexOf('\n')).trim();
  const englishContent = englishSection.substring(englishSection.indexOf('\n')).trim();

  const ratio = englishContent.length / chineseContent.length;

  return {
    filePath,
    chineseLength: chineseContent.length,
    englishLength: englishContent.length,
    chineseSeparators,
    ratio: ratio.toFixed(2),
    status: ratio > 3 ? '⚠️ SUSPICIOUS' : '✅ OK',
    preview: {
      chineseStart: chineseContent.substring(0, 200).replace(/\n/g, ' '),
      englishStart: englishContent.substring(0, 200).replace(/\n/g, ' ')
    }
  };
}

function main() {
  console.log('🔍 MARKDOWN FILE DIAGNOSTICS\n');
  console.log('='.repeat(100));

  SAMPLE_FILES.forEach((file, index) => {
    console.log(`\n[${index + 1}/${SAMPLE_FILES.length}] ${file}`);
    console.log('-'.repeat(100));

    const result = analyzeFile(file);

    if (result.error) {
      console.log(`❌ Error: ${result.error}`);
      return;
    }

    console.log(`${result.status} Ratio: ${result.ratio}x (English/Chinese)`);
    console.log(`   Chinese: ${result.chineseLength} chars, ${result.chineseSeparators} separators`);
    console.log(`   English: ${result.englishLength} chars`);
    console.log(`   Chinese preview: ${result.preview.chineseStart}...`);
  });

  console.log('\n' + '='.repeat(100));
  console.log('\n✨ Diagnosis complete!\n');
}

main();
