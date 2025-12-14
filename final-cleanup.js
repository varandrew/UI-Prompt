#!/usr/bin/env node

/**
 * Final cleanup: consolidate both Chinese and English sections
 * Remove all internal --- separators, keep only the one between Chinese and English
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let fixed = 0;

function finalCleanup(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const original = content;

    // Find section boundaries
    const chineseMarker = '## 中文版本';
    const englishMarker = '## English Version';

    const chineseStart = content.indexOf(chineseMarker);
    const englishStart = content.indexOf(englishMarker);

    if (chineseStart === -1 || englishStart === -1) {
      return false;
    }

    // Extract parts
    const header = content.substring(0, chineseStart).trim();
    const chineseSection = content.substring(chineseStart, englishStart).trim();
    const englishSection = content.substring(englishStart).trim();

    // Clean Chinese section - remove internal ---
    const cleanChinese = chineseSection
      .split('\n---\n')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .join('\n\n')
      .replace(/^\(zh-CN\)\s*\n+/, '');

    // Clean English section - remove internal ---
    const cleanEnglish = englishSection
      .split('\n---\n')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .join('\n\n')
      .replace(/^\(en-US\)\s*\n+/, '');

    // Reconstruct with proper format
    const cleaned = `${header}

${cleanChinese}

---

${cleanEnglish}
`;

    if (cleaned !== original) {
      fs.writeFileSync(filePath, cleaned, 'utf-8');
      fixed++;
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🧹 Final cleanup: consolidating all sections...\n');

  const command = 'find public/data/prompts/styles -name "custom.md" -type f';
  const files = execSync(command, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .filter(f => f);

  files.forEach(file => {
    if (finalCleanup(file)) {
      const displayPath = file.replace('public/data/prompts/styles/', '');
      console.log(`✅ Cleaned: ${displayPath}`);
    }
  });

  console.log(`\n✨ Final cleanup complete! Fixed ${fixed} files.\n`);
}

main();
