#!/usr/bin/env node
/**
 * Convert ALL Prompt files from Traditional to Simplified Chinese
 * This version converts all files without checking for traditional chars first
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as OpenCC from 'opencc-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const promptsDir = path.join(projectRoot, 'public/data/prompts');

// Create Traditional to Simplified converter (Taiwan to Mainland)
const converter = OpenCC.Converter({ from: 'tw', to: 'cn' });

/**
 * Convert the entire file content
 */
function convertFile(content) {
  return converter(content);
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const converted = convertFile(content);

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
  console.log('🔄 开始繁体转简体转换（全部文件）...\n');

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

  console.log(`📁 找到 ${files.length} 个 .md 文件\n`);

  let convertedCount = 0;
  let unchangedCount = 0;

  for (const file of files) {
    const relativePath = path.relative(promptsDir, file);

    try {
      const converted = processFile(file);
      if (converted) {
        console.log(`✅ 已转换: ${relativePath}`);
        convertedCount++;
      } else {
        unchangedCount++;
      }
    } catch (err) {
      console.error(`❌ 错误 ${relativePath}: ${err.message}`);
    }
  }

  console.log('\n========================================');
  console.log(`✅ 已转换: ${convertedCount} 个文件`);
  console.log(`⏭️  无变化: ${unchangedCount} 个文件`);
  console.log('========================================');
}

main().catch(err => {
  console.error('错误:', err);
  process.exit(1);
});
