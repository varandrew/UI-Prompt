#!/usr/bin/env node

/**
 * Remove duplicate (zh-CN) and (en-US) markers that appear standalone
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let fixed = 0;

function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;

    // Remove standalone (zh-CN) after the Chinese marker
    content = content.replace(
      /(## 中文版本 \(zh-CN\))\s*\n+\(zh-CN\)\s*\n+/g,
      '$1\n\n'
    );

    // Remove standalone (en-US) after the English marker
    content = content.replace(
      /(## English Version \(en-US\))\s*\n+\(en-US\)\s*\n+/g,
      '$1\n\n'
    );

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
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
  console.log('🧹 Cleaning up duplicate language markers...\n');

  const command = 'find public/data/prompts/styles -name "custom.md" -type f';
  const files = execSync(command, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .filter(f => f);

  files.forEach(file => {
    if (cleanupFile(file)) {
      const displayPath = file.replace('public/data/prompts/styles/', '');
      console.log(`✅ Cleaned: ${displayPath}`);
    }
  });

  console.log(`\n✨ Cleanup complete! Fixed ${fixed} files.\n`);
}

main();
