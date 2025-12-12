#!/usr/bin/env node
/**
 * Convert Traditional Chinese to Simplified Chinese in Prompt files
 *
 * This script converts all Traditional Chinese characters to Simplified Chinese
 * in the prompt files while preserving the English content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as OpenCC from 'opencc-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const promptsDir = path.join(projectRoot, 'public/data/prompts');

// Create Traditional to Simplified converter
const converter = OpenCC.Converter({ from: 'tw', to: 'cn' });

// Common Traditional characters to check (expanded list)
const traditionalChars = /[體態機關開發這個們來說為時後種對現進從頁類顯設計風動區塊處視覺項標準圖層間邊線組認數據結構語實應讓與會過還僅獲點選擇變單導連隨電題極優達響針對於無為並與進國際經濟學術環網際繼續聯繫電話簡歷證網絡鏈節問題號碼廣據庫屬狀員園藝賬戶購買銷費運輸異傳統遞書網頁網站網路編輯員無論確認頻繁複雜應該適當當當當當當當當當當當當當當當當當當當當當當當當當當當當當當當當當]/;

/**
 * Check if text contains Traditional Chinese
 */
function hasTraditionalChinese(text) {
  return traditionalChars.test(text);
}

/**
 * Convert only the Chinese portion (before ---) to Simplified
 */
function convertChineseSection(content) {
  // Split by the separator
  const parts = content.split(/\n---\n/);

  if (parts.length >= 2) {
    // Convert only the Chinese section (first part)
    const chineseSection = converter(parts[0]);
    // Keep English section unchanged
    return chineseSection + '\n---\n' + parts.slice(1).join('\n---\n');
  }

  // If no separator, convert the whole thing but be careful
  return converter(content);
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  if (!hasTraditionalChinese(content)) {
    return false;
  }

  const converted = convertChineseSection(content);

  // Only write if changed
  if (converted !== content) {
    fs.writeFileSync(filePath, converted, 'utf-8');
    return true;
  }

  return false;
}

/**
 * Main function
 */
async function main() {
  console.log('🔄 開始繁體轉簡體轉換...\n');

  // Find all .md files
  const files = [];

  function findMdFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        findMdFiles(fullPath);
      } else if (entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  findMdFiles(promptsDir);

  console.log(`📁 找到 ${files.length} 個 .md 文件\n`);

  let convertedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const relativePath = path.relative(promptsDir, file);

    try {
      const converted = processFile(file);
      if (converted) {
        console.log(`✅ 已轉換: ${relativePath}`);
        convertedCount++;
      } else {
        skippedCount++;
      }
    } catch (err) {
      console.error(`❌ 錯誤 ${relativePath}: ${err.message}`);
    }
  }

  console.log('\n========================================');
  console.log(`✅ 已轉換: ${convertedCount} 個文件`);
  console.log(`⏭️  跳過: ${skippedCount} 個文件 (無繁體字或已是簡體)`);
  console.log('========================================');
}

main().catch(err => {
  console.error('錯誤:', err);
  process.exit(1);
});
