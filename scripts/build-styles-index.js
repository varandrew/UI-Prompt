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
import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pMap from 'p-map';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Concurrency limit for parallel file I/O
const CONCURRENCY = 16;

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
 * Load family metadata from generated manifest.json (async version)
 * @param {string} category - Category ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (flatDesign, minimalism, etc.)
 * @returns {Promise<Object|null>} Family metadata or null if not found
 */
async function loadFamilyMetadataAsync(category, familyId) {
  try {
    const manifestPath = path.join(
      projectRoot,
      'src/data/styles/generated',
      category,
      familyId,
      'manifest.json'
    );

    // Check if file exists
    try {
      await fsPromises.access(manifestPath);
    } catch {
      return null;
    }

    // Read and parse the manifest (async)
    const content = await fsPromises.readFile(manifestPath, 'utf-8');
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

    // Load prompts for this family (async)
    const prompts = await loadFamilyPromptsAsync(category, familyId);

    return {
      ...metadata,
      customPrompt: prompts.customPrompt,
      stylePrompt: prompts.stylePrompt
    };
  } catch (error) {
    // Silent error - will be reported in summary
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
 * Load prompts for a family (async version)
 * @param {string} category - Category ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (flatDesign, minimalism, etc.)
 * @returns {Promise<Object>} { customPrompt: {...} | null, stylePrompt: {...} | null }
 */
async function loadFamilyPromptsAsync(category, familyId) {
  const promptsDir = path.join(projectRoot, 'public/data/prompts/styles', category, familyId);
  const result = { customPrompt: null, stylePrompt: null };

  const customPath = path.join(promptsDir, 'custom.md');
  const stylePath = path.join(promptsDir, 'style.md');

  // Load both prompt files in parallel
  const [customContent, styleContent] = await Promise.all([
    fsPromises.readFile(customPath, 'utf-8').catch(() => null),
    fsPromises.readFile(stylePath, 'utf-8').catch(() => null)
  ]);

  if (customContent) {
    const parsed = parsePromptMd(customContent);
    if (parsed['zh-CN'] || parsed['en-US']) {
      result.customPrompt = parsed;
    }
  }

  if (styleContent) {
    const parsed = parsePromptMd(styleContent);
    if (parsed['zh-CN'] || parsed['en-US']) {
      result.stylePrompt = parsed;
    }
  }

  return result;
}

/**
 * Build the consolidated index (async with parallel processing)
 */
async function buildIndex() {
  const registry = loadRegistry();
  const output = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    categories: {}
  };

  const missingFamilies = [];

  // Collect all family tasks across all categories
  const allTasks = [];
  for (const [categoryId, categoryConfig] of Object.entries(registry.categories)) {
    output.categories[categoryId] = {
      name: categoryConfig.name,
      families: []
    };

    for (const familyId of categoryConfig.families) {
      allTasks.push({ categoryId, familyId, categoryName: categoryConfig.name });
    }
  }

  console.log(`🚀 Processing ${allTasks.length} families in parallel (concurrency: ${CONCURRENCY})...\n`);

  // Process all families in parallel using pMap
  const results = await pMap(
    allTasks,
    async ({ categoryId, familyId }) => {
      const metadata = await loadFamilyMetadataAsync(categoryId, familyId);
      return { categoryId, familyId, metadata };
    },
    { concurrency: CONCURRENCY }
  );

  // Collect results into output structure
  let successCount = 0;
  let failedCount = 0;

  for (const { categoryId, familyId, metadata } of results) {
    if (metadata) {
      output.categories[categoryId].families.push(metadata);
      successCount++;
    } else {
      failedCount++;
      missingFamilies.push({
        categoryId,
        familyId,
        manifestPath: `src/data/styles/generated/${categoryId}/${familyId}/manifest.json`
      });
    }
  }

  // Print category summary
  for (const [categoryId, categoryData] of Object.entries(output.categories)) {
    console.log(`📁 ${categoryId}: ${categoryData.families.length} families`);
  }
  console.log('');

  return { output, stats: { totalFamilies: allTasks.length, successCount, failedCount }, missingFamilies };
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
 * Write category-level sharded indexes for progressive loading
 * Outputs: /public/data/styles-index/{category}.json
 */
function writeCategoryShards(data) {
  const shardsDir = path.join(projectRoot, 'public/data/styles-index');

  // Ensure directory exists
  if (!fs.existsSync(shardsDir)) {
    fs.mkdirSync(shardsDir, { recursive: true });
  }

  const shardPaths = [];
  let totalSize = 0;

  for (const [categoryId, categoryData] of Object.entries(data.categories)) {
    const shardPath = path.join(shardsDir, `${categoryId}.json`);
    const shard = {
      version: data.version,
      category: categoryId,
      name: categoryData.name,
      families: categoryData.families,
      generatedAt: data.generatedAt
    };

    fs.writeFileSync(shardPath, JSON.stringify(shard, null, 2), 'utf-8');
    const size = fs.statSync(shardPath).size / 1024;
    totalSize += size;
    shardPaths.push({ path: shardPath, category: categoryId, size: size.toFixed(2) });
  }

  return { shardPaths, totalSize };
}

/**
 * Write lightweight metadata-only index for fast stats
 * Outputs: /public/data/styles-index-meta.json
 */
function writeMetadataIndex(data) {
  const metadataPath = path.join(projectRoot, 'public/data/styles-index-meta.json');

  const metadata = {
    version: data.version,
    generatedAt: data.generatedAt,
    categories: {}
  };

  let totalFamilies = 0;

  for (const [categoryId, categoryData] of Object.entries(data.categories)) {
    const count = categoryData.families.length;
    totalFamilies += count;

    metadata.categories[categoryId] = {
      name: categoryData.name,
      count: count
    };
  }

  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8');
  const size = fs.statSync(metadataPath).size / 1024;

  return { path: metadataPath, size: size.toFixed(2), totalFamilies };
}

/**
 * Write missing manifest report for UX hints
 * Outputs: /public/data/styles-index-missing.json
 */
function writeMissingReport({ version, generatedAt, missingFamilies }) {
  const reportPath = path.join(projectRoot, 'public/data/styles-index-missing.json');

  const reportDir = path.dirname(reportPath);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const report = {
    version,
    generatedAt,
    missingCount: Array.isArray(missingFamilies) ? missingFamilies.length : 0,
    missingFamilies: Array.isArray(missingFamilies) ? missingFamilies : []
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  const size = fs.statSync(reportPath).size / 1024;

  return { path: reportPath, size: size.toFixed(2) };
}

/**
 * Main execution (async)
 */
async function main() {
  try {
    const startTime = Date.now();

    // Build the index (parallel processing)
    const { output, stats, missingFamilies } = await buildIndex();

    // Write main consolidated index file
    const outputPath = writeOutput(output);
    const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(2);

    // Write category-level sharded indexes for progressive loading
    const { shardPaths, totalSize: shardsTotalSize } = writeCategoryShards(output);

    // Write lightweight metadata-only index for fast stats
    const { path: metadataPath, size: metadataSize, totalFamilies } = writeMetadataIndex(output);

    // Write missing report (do not fail build when missing)
    const { path: missingReportPath, size: missingReportSize } = writeMissingReport({
      version: output.version,
      generatedAt: output.generatedAt,
      missingFamilies
    });

    // Print summary
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('✨ Build complete!\n');
    console.log('📊 Statistics:');
    console.log(`   Total families: ${stats.totalFamilies}`);
    console.log(`   Success: ${stats.successCount}`);
    console.log(`   Failed: ${stats.failedCount}`);
    console.log('\n📁 Output files:');
    console.log(`   Main index: ${outputPath}`);
    console.log(`      Size: ${fileSize} KB`);
    console.log(`   Metadata index (for fast stats): ${metadataPath}`);
    console.log(`      Size: ${metadataSize} KB`);
    console.log(`   Missing report: ${missingReportPath}`);
    console.log(`      Size: ${missingReportSize} KB`);
    console.log(`   Category shards (for progressive loading):`);
    for (const shard of shardPaths) {
      console.log(`      ${shard.category}: ${shard.size} KB`);
    }
    console.log(`      Total: ${shardsTotalSize.toFixed(2)} KB`);
    console.log(`\n⏱️  Time: ${elapsed}s`);

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
