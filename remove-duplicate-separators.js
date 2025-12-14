#!/usr/bin/env node

/**
 * Remove duplicate --- separators (keep only one between Chinese and English)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let fixed = 0;

function removeDuplicateSeparators(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;

    // Replace multiple consecutive --- with just one
    // This regex matches 2 or more --- separated by whitespace
    content = content.replace(/(\n---\n)(\s*\n---\n)+/g, '\n---\n');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixed++;
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🧹 Removing duplicate --- separators...\n');

  const command = 'find public/data/prompts/styles -name "custom.md" -type f';
  const files = execSync(command, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .filter(f => f);

  files.forEach(file => {
    if (removeDuplicateSeparators(file)) {
      const displayPath = file.replace('public/data/prompts/styles/', '');
      console.log(`✅ Fixed: ${displayPath}`);
    }
  });

  console.log(`\n✨ Complete! Fixed ${fixed} files.\n`);
}

main();
