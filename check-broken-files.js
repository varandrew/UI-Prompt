#!/usr/bin/env node

/**
 * Check the 4 broken files that need manual translation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BROKEN_FILES = [
  'public/data/prompts/styles/core/typography/typographyFirst/custom.md',
  'public/data/prompts/styles/visual/accessibility-high-contrast/custom.md',
  'public/data/prompts/styles/core/skeuomorphism/core-skeuomorphism-vintage-library-landing/custom.md',
  'public/data/prompts/styles/core/skeuomorphism/core-skeuomorphism-tech-corp-homepage/custom.md'
];

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const chineseStart = content.indexOf('## 中文版本');
  const englishStart = content.indexOf('## English Version');

  const chineseSection = content.substring(chineseStart, englishStart);
  const englishSection = content.substring(englishStart);

  const chineseContent = chineseSection.substring(chineseSection.indexOf('\n')).trim();
  const englishContent = englishSection.substring(englishSection.indexOf('\n')).trim();

  return {
    file: filePath.replace(__dirname + '/', ''),
    chineseLength: chineseContent.length,
    englishLength: englishContent.length,
    ratio: (englishContent.length / chineseContent.length).toFixed(2),
    chinesePreview: chineseContent.substring(0, 500).replace(/\n+/g, ' '),
    englishPreview: englishContent.substring(0, 500).replace(/\n+/g, ' ')
  };
}

console.log('🔍 BROKEN FILES ANALYSIS\n');
console.log('These files need English → Chinese translation:\n');
console.log('='.repeat(100));

BROKEN_FILES.forEach((file, index) => {
  const result = analyzeFile(file);

  console.log(`\n${index + 1}. ${result.file}`);
  console.log('-'.repeat(100));
  console.log(`Ratio: ${result.ratio}x (English/Chinese)`);
  console.log(`Chinese: ${result.chineseLength} chars | English: ${result.englishLength} chars`);
  console.log(`\nChinese content:\n${result.chinesePreview}...\n`);
  console.log(`English content:\n${result.englishPreview}...\n`);
});

console.log('='.repeat(100));
console.log('\n📝 NOTE: These files have incomplete Chinese translations.');
console.log('You need to translate the English content to Chinese for these files.\n');
