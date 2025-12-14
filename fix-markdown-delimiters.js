#!/usr/bin/env node

/**
 * Fix Markdown Delimiter Issues
 *
 * This script fixes formatting issues in bilingual Markdown files where
 * there are multiple consecutive "---" delimiters instead of a single one
 * separating Chinese and English versions.
 *
 * Correct format:
 * ## 中文版本 (zh-CN)
 * [Chinese content]
 * ---
 * ## English Version (en-US)
 * [English content]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PROMPTS_DIR = path.join(__dirname, 'public/data/prompts/styles');
const BACKUP_DIR = path.join(__dirname, 'markdown-backups');
const TARGET_FILENAME = 'custom.md';

// Statistics
const stats = {
  total: 0,
  fixed: 0,
  skipped: 0,
  errors: 0
};

/**
 * Create backup directory if it doesn't exist
 */
function ensureBackupDir() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`✓ Created backup directory: ${BACKUP_DIR}`);
  }
}

/**
 * Find all custom.md files recursively
 */
function findCustomMdFiles(dir) {
  const files = [];

  function traverse(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name === TARGET_FILENAME) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

/**
 * Backup a file with timestamp
 */
function backupFile(filePath) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const relativePath = path.relative(PROMPTS_DIR, filePath);
  const backupPath = path.join(BACKUP_DIR, `${relativePath.replace(/\//g, '_')}_${timestamp}.bak`);

  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

/**
 * Fix delimiter issues in markdown content
 *
 * Strategy:
 * 1. Look for pattern: Chinese section → multiple "---" → English content
 * 2. Replace multiple consecutive "---" (with optional empty lines) with single "---"
 * 3. Preserve single "---" that separate sections properly
 */
function fixMarkdownDelimiters(content) {
  // Split into lines for analysis
  const lines = content.split('\n');
  const fixed = [];
  let i = 0;
  let hasChanges = false;

  while (i < lines.length) {
    const line = lines[i];

    // Check if current line is a delimiter
    if (line.trim() === '---') {
      // Count consecutive delimiters (with optional empty lines between)
      let delimiterCount = 0;
      let j = i;
      const delimiterBlock = [];

      while (j < lines.length) {
        const currentLine = lines[j];

        if (currentLine.trim() === '---') {
          delimiterCount++;
          delimiterBlock.push(j);
          j++;
        } else if (currentLine.trim() === '') {
          // Empty line between delimiters
          j++;
        } else {
          // Non-delimiter, non-empty line
          break;
        }
      }

      // If we found multiple delimiters in a row, replace with single one
      if (delimiterCount > 1) {
        fixed.push('---');
        fixed.push('');  // Add empty line after delimiter
        hasChanges = true;
        i = j;  // Skip all the delimiter lines we processed
      } else {
        // Single delimiter, keep as is
        fixed.push(line);
        i++;
      }
    } else {
      // Not a delimiter, keep as is
      fixed.push(line);
      i++;
    }
  }

  return {
    content: fixed.join('\n'),
    hasChanges
  };
}

/**
 * Process a single markdown file
 */
function processFile(filePath) {
  stats.total++;

  try {
    // Read file content
    const content = fs.readFileSync(filePath, 'utf8');

    // Fix delimiters
    const { content: fixedContent, hasChanges } = fixMarkdownDelimiters(content);

    if (hasChanges) {
      // Create backup
      const backupPath = backupFile(filePath);

      // Write fixed content
      fs.writeFileSync(filePath, fixedContent, 'utf8');

      stats.fixed++;
      const relativePath = path.relative(PROMPTS_DIR, filePath);
      console.log(`✓ Fixed: ${relativePath}`);
      console.log(`  Backup: ${path.basename(backupPath)}`);
    } else {
      stats.skipped++;
    }
  } catch (error) {
    stats.errors++;
    const relativePath = path.relative(PROMPTS_DIR, filePath);
    console.error(`✗ Error processing ${relativePath}:`, error.message);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('='.repeat(60));
  console.log('Markdown Delimiter Fix Script');
  console.log('='.repeat(60));
  console.log('');

  // Ensure backup directory exists
  ensureBackupDir();

  // Find all custom.md files
  console.log(`Scanning for ${TARGET_FILENAME} files in: ${PROMPTS_DIR}`);
  const files = findCustomMdFiles(PROMPTS_DIR);
  console.log(`Found ${files.length} files to process`);
  console.log('');

  // Process each file
  console.log('Processing files...');
  console.log('-'.repeat(60));

  for (const file of files) {
    processFile(file);
  }

  // Print summary
  console.log('');
  console.log('='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Total files scanned:  ${stats.total}`);
  console.log(`Files fixed:          ${stats.fixed} ✓`);
  console.log(`Files skipped:        ${stats.skipped} (no changes needed)`);
  console.log(`Errors:               ${stats.errors} ${stats.errors > 0 ? '✗' : ''}`);
  console.log('');

  if (stats.fixed > 0) {
    console.log(`Backups saved to: ${BACKUP_DIR}`);
  }

  if (stats.errors > 0) {
    console.log('');
    console.log('⚠️  Some files had errors. Please review them manually.');
    process.exit(1);
  } else if (stats.fixed > 0) {
    console.log('');
    console.log('✓ All files processed successfully!');
  } else {
    console.log('');
    console.log('ℹ️  No files needed fixing.');
  }
}

// Run the script
main();
