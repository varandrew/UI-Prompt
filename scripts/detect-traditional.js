#!/usr/bin/env node
/**
 * Detect remaining Traditional Chinese in Prompt files
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

/**
 * Find all .md files
 */
function findMdFiles(dir) {
  const files = [];

  function scan(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  scan(dir);
  return files;
}

async function main() {
  console.log('🔍 检测剩余繁体字...\n');

  const files = findMdFiles(promptsDir);
  let hasTraditionalCount = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const converted = converter(content);

    if (content !== converted) {
      const relativePath = path.relative(promptsDir, file);
      console.log(`📝 ${relativePath}`);
      hasTraditionalCount++;
    }
  }

  console.log('\n========================================');
  console.log(`含有繁体字的文件: ${hasTraditionalCount} 个`);
  console.log(`已转为简体的文件: ${files.length - hasTraditionalCount} 个`);
  console.log('========================================');
}

main().catch(err => {
  console.error('错误:', err);
  process.exit(1);
});
