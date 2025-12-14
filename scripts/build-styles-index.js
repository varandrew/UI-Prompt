#!/usr/bin/env node

/**
 * build-styles-index.js
 *
 * 在構建時生成合併的 styles-index.json 文件
 * 從已生成的 manifest.json 文件讀取元數據，避免首屏加載時的 100+ 個 HTTP 請求
 *
 * 使用方式：
 *   node scripts/build-styles-index.js
 *   或在 package.json 的 build 腳本中調用
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('🏗️  Building styles index...\n');

/**
 * Load the registry file
 */
function loadRegistry() {
  const registryPath = path.join(projectRoot, 'src/data/styles/_registry.json');
  const content = fs.readFileSync(registryPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Load family metadata from generated manifest.json
 * @param {string} category - Category ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (flatDesign, minimalism, etc.)
 * @returns {Object|null} Family metadata or null if not found
 */
function loadFamilyMetadata(category, familyId) {
  try {
    const manifestPath = path.join(
      projectRoot,
      'src/data/styles/generated',
      category,
      familyId,
      'manifest.json'
    );

    // Check if file exists
    if (!fs.existsSync(manifestPath)) {
      return null;
    }

    // Read and parse the manifest
    const content = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(content);

    // Extract metadata for the index
    const metadata = {
      id: manifest.id || `${category}-${familyId}`,
      familyId: familyId,
      category: category,
      title: manifest.family?.name || {},
      description: manifest.family?.description || {},
      tags: manifest.family?.tags || [],
      templatesCount: Array.isArray(manifest.templates) ? manifest.templates.length : 0,
      primaryCategory: category
    };

    // Load prompts for this family
    const prompts = loadFamilyPrompts(category, familyId);

    return {
      ...metadata,
      customPrompt: prompts.customPrompt,
      stylePrompt: prompts.stylePrompt
    };
  } catch (error) {
    console.error(`   Error reading manifest for ${category}/${familyId}:`, error.message);
    return null;
  }
}

/**
 * Parse prompt markdown file to extract bilingual content
 * File format uses headers like:
 *   ## 中文版本 (zh-CN)
 *   ## English Version (en-US)
 *
 * @param {string} mdContent - Raw markdown content
 * @returns {Object} { 'zh-CN': string, 'en-US': string }
 */
function parsePromptMd(mdContent) {
  const result = { 'zh-CN': '', 'en-US': '' };
  if (!mdContent) return result;

  // Match Chinese section: ## 中文版本 (zh-CN) until next ## or end
  const zhMatch = mdContent.match(/## 中文版本[^\n]*\n([\s\S]*?)(?=\n## |$)/i);
  // Match English section: ## English Version (en-US) until next ## or end
  const enMatch = mdContent.match(/## English Version[^\n]*\n([\s\S]*?)(?=\n## |$)/i);

  if (zhMatch) result['zh-CN'] = zhMatch[1].trim();
  if (enMatch) result['en-US'] = enMatch[1].trim();

  return result;
}

/**
 * Load prompts for a family
 * @param {string} category - Category ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (flatDesign, minimalism, etc.)
 * @returns {Object} { customPrompt: {...} | null, stylePrompt: {...} | null }
 */
function loadFamilyPrompts(category, familyId) {
  const promptsDir = path.join(projectRoot, 'public/data/prompts/styles', category, familyId);
  const result = { customPrompt: null, stylePrompt: null };

  try {
    // Load custom.md
    const customPath = path.join(promptsDir, 'custom.md');
    if (fs.existsSync(customPath)) {
      const parsed = parsePromptMd(fs.readFileSync(customPath, 'utf-8'));
      // Only include if at least one language has content
      if (parsed['zh-CN'] || parsed['en-US']) {
        result.customPrompt = parsed;
      }
    }

    // Load style.md
    const stylePath = path.join(promptsDir, 'style.md');
    if (fs.existsSync(stylePath)) {
      const parsed = parsePromptMd(fs.readFileSync(stylePath, 'utf-8'));
      // Only include if at least one language has content
      if (parsed['zh-CN'] || parsed['en-US']) {
        result.stylePrompt = parsed;
      }
    }
  } catch (error) {
    // Silently ignore - prompts are optional
  }

  return result;
}

/**
 * Build the consolidated index
 */
function buildIndex() {
  const registry = loadRegistry();
  const output = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    categories: {}
  };

  let totalFamilies = 0;
  let successCount = 0;
  let failedCount = 0;

  // Process each category
  for (const [categoryId, categoryConfig] of Object.entries(registry.categories)) {
    console.log(`📁 Processing category: ${categoryId}`);

    output.categories[categoryId] = {
      name: categoryConfig.name,
      families: []
    };

    // Process each family in this category
    for (const familyId of categoryConfig.families) {
      totalFamilies++;
      process.stdout.write(`   ⏳ ${familyId}...`);

      const metadata = loadFamilyMetadata(categoryId, familyId);

      if (metadata) {
        output.categories[categoryId].families.push(metadata);
        successCount++;
        process.stdout.write(' ✅\n');
      } else {
        failedCount++;
        process.stdout.write(' ❌\n');
      }
    }

    console.log('');
  }

  return { output, stats: { totalFamilies, successCount, failedCount } };
}

/**
 * Write the output file
 */
function writeOutput(data) {
  const outputPath = path.join(projectRoot, 'public/data/styles-index.json');

  // Ensure directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write with pretty formatting
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

  return outputPath;
}

/**
 * Main execution
 */
function main() {
  try {
    const startTime = Date.now();

    // Build the index
    const { output, stats } = buildIndex();

    // Write to file
    const outputPath = writeOutput(output);
    const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(2);

    // Print summary
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('✨ Build complete!\n');
    console.log('📊 Statistics:');
    console.log(`   Total families: ${stats.totalFamilies}`);
    console.log(`   Success: ${stats.successCount}`);
    console.log(`   Failed: ${stats.failedCount}`);
    console.log(`   File size: ${fileSize} KB`);
    console.log(`   Time: ${elapsed}s`);
    console.log(`\n📝 Output: ${outputPath}`);

    if (stats.failedCount > 0) {
      console.warn(`\n⚠️  ${stats.failedCount} families failed to load. These families may not have manifest.json files yet.`);
      process.exit(0); // Don't fail the build - missing manifests are OK
    }

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Run the script
main();
