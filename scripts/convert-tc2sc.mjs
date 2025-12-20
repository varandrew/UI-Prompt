#!/usr/bin/env node

/**
 * convert-tc2sc.mjs - Convert Traditional Chinese to Simplified Chinese
 * 將所有 manifest.json 中的繁體中文轉換為簡體中文
 *
 * Usage:
 *   npm run convert:tc2sc        # Convert all manifests
 *   npm run convert:tc2sc:test   # Test mode (dry run)
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as OpenCC from 'opencc-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize OpenCC converter (Traditional Chinese to Simplified Chinese)
const converter = OpenCC.Converter({ from: 'tw', to: 'cn' });

// Test mode flag (from command line)
const isTestMode = process.argv.includes('--test');

// Statistics
const stats = {
  total: 0,
  updated: 0,
  skipped: 0,
  errors: 0
};

/**
 * Convert all Traditional Chinese strings in an object to Simplified Chinese
 */
function convertObject(obj) {
  if (typeof obj === 'string') {
    const converted = converter(obj);
    return converted !== obj ? { value: converted, changed: true } : { value: obj, changed: false };
  }

  if (Array.isArray(obj)) {
    let arrayChanged = false;
    const result = obj.map(item => {
      const res = convertObject(item);
      if (res.changed) arrayChanged = true;
      return res.value;
    });
    return { value: result, changed: arrayChanged };
  }

  if (obj && typeof obj === 'object') {
    let objectChanged = false;
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const res = convertObject(value);
      if (res.changed) objectChanged = true;
      result[key] = res.value;
    }
    return { value: result, changed: objectChanged };
  }

  return { value: obj, changed: false };
}

/**
 * Find all target files recursively
 * @param {string} dir - Directory to search
 * @param {Array<string>} patterns - File patterns to match (e.g., ['manifest.json', 'zh-CN.js'])
 * @param {Array<string>} files - Accumulator for found files
 */
function findTargetFiles(dir, patterns = ['manifest.json'], files = []) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      findTargetFiles(fullPath, patterns, files);
    } else if (patterns.some(pattern => entry === pattern || entry.endsWith(pattern))) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Process a single file (JSON or JS)
 */
function processFile(filePath) {
  try {
    stats.total++;

    // Read content
    const content = readFileSync(filePath, 'utf-8');
    const isJsonFile = filePath.endsWith('.json');
    const isJsFile = filePath.endsWith('.js');

    let originalContent, convertedContent;

    if (isJsonFile) {
      // JSON file: parse, convert, stringify
      const data = JSON.parse(content);
      const result = convertObject(data);

      if (!result.changed) {
        stats.skipped++;
        console.log(`⏭️  Skipped (no changes): ${filePath}`);
        return;
      }

      originalContent = content;
      convertedContent = JSON.stringify(result.value, null, 2) + '\n';
    } else if (isJsFile) {
      // JS file: direct string conversion
      const converted = converter(content);

      if (converted === content) {
        stats.skipped++;
        console.log(`⏭️  Skipped (no changes): ${filePath}`);
        return;
      }

      originalContent = content;
      convertedContent = converted;
    } else {
      stats.skipped++;
      console.log(`⏭️  Skipped (unsupported file type): ${filePath}`);
      return;
    }

    // Write back (if not test mode)
    if (!isTestMode) {
      writeFileSync(filePath, convertedContent, 'utf-8');
      stats.updated++;
      console.log(`✅ Updated: ${filePath}`);
    } else {
      stats.updated++;
      console.log(`🔍 [TEST] Would update: ${filePath}`);

      // Show sample changes
      const originalLines = originalContent.split('\n');
      const convertedLines = convertedContent.split('\n');
      let changesShown = 0;

      console.log('   Sample changes:');
      for (let i = 0; i < originalLines.length && changesShown < 5; i++) {
        if (originalLines[i] !== convertedLines[i]) {
          console.log(`   - ${originalLines[i]}`);
          console.log(`   + ${convertedLines[i]}`);
          changesShown++;
        }
      }
    }
  } catch (error) {
    stats.errors++;
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Traditional Chinese to Simplified Chinese conversion...\n');

  if (isTestMode) {
    console.log('⚠️  TEST MODE: No files will be modified\n');
  }

  const allFiles = [];

  // 1. Find all style manifest.json files
  const stylesDir = join(__dirname, '../src/data/styles/generated');
  const styleManifests = findTargetFiles(stylesDir, ['manifest.json']);
  console.log(`📁 Found ${styleManifests.length} style manifest.json files`);
  allFiles.push(...styleManifests);

  // 2. Find all component manifest.json files
  const componentsDir = join(__dirname, '../src/data/components/generated');
  const componentManifests = findTargetFiles(componentsDir, ['manifest.json']);
  console.log(`📁 Found ${componentManifests.length} component manifest.json files`);
  allFiles.push(...componentManifests);

  // 3. Find i18n files
  const i18nDir = join(__dirname, '../src/i18n');
  const i18nFiles = findTargetFiles(i18nDir, ['zh-CN.js']);
  console.log(`📁 Found ${i18nFiles.length} i18n files`);
  allFiles.push(...i18nFiles);

  console.log(`\n📦 Total files to process: ${allFiles.length}\n`);

  // Process each file
  for (const file of allFiles) {
    processFile(file);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Conversion Summary:');
  console.log('='.repeat(60));
  console.log(`Total files:     ${stats.total}`);
  console.log(`Updated:         ${stats.updated} ✅`);
  console.log(`Skipped:         ${stats.skipped} ⏭️`);
  console.log(`Errors:          ${stats.errors} ❌`);
  console.log('='.repeat(60));

  if (isTestMode) {
    console.log('\n💡 Run without --test flag to apply changes');
  } else if (stats.updated > 0) {
    console.log('\n✨ Conversion completed! Remember to rebuild:');
    console.log('   npm run build:styles-index');
  }
}

main();
