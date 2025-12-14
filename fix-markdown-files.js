#!/usr/bin/env node

/**
 * Script to fix 43 Markdown files with broken Chinese content
 * Consolidates multiple --- separated sections into complete Chinese version
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of 43 files to process (Top 10 most severe first)
const FILES_TO_FIX = [
  // Top 10 most severe (Ratio > 40)
  '/public/data/prompts/styles/core/skeuomorphism/custom.md',
  '/public/data/prompts/styles/visual/claymorphism/custom.md',
  '/public/data/prompts/styles/visual/neoBrutalism/custom.md',
  '/public/data/prompts/styles/visual/monochrome/portfolio-showcase/custom.md',
  '/public/data/prompts/styles/core/brutalism/modern-brutalism-project-mgmt/custom.md',
  '/public/data/prompts/styles/visual/monochrome/visual-monochrome/custom.md',
  '/public/data/prompts/styles/visual/antiDesign/visual-tech-anti-design/custom.md',
  '/public/data/prompts/styles/visual/leather/visual-texture-leather-vintage-journal/custom.md',
  '/public/data/prompts/styles/core/minimalism/core-minimalism-portfolio/custom.md',
  '/public/data/prompts/styles/visual/vaporwave/visual-vaporwave-vaporwave-aesthetic/custom.md',

  // Other 33 files
  '/public/data/prompts/styles/core/newspaper/modernEditorialTemplates/custom.md',
  '/public/data/prompts/styles/visual/darkMode/visual-darkMode-darkMode-dashboard/custom.md',
  '/public/data/prompts/styles/visual/holographicFoil/visual-holographicFoil-holographicFoil-landing/custom.md',
  '/public/data/prompts/styles/visual/paperCutout/visual-paperCutout-paperCutout-showcase/custom.md',
  '/public/data/prompts/styles/visual/bentoGrids/visual-tech-bento-grids/custom.md',
  '/public/data/prompts/styles/visual/neonCyberpunk/visual-neon-cyberpunk/custom.md',
  '/public/data/prompts/styles/visual/3dElements/visual-tech-3d-elements/custom.md',
  '/public/data/prompts/styles/visual/generativeArt/visual-tech-generative-art/custom.md',
  '/public/data/prompts/styles/visual/outlineStyle/visual-outlineStyle-outline-business/custom.md',
  '/public/data/prompts/styles/visual/outlineStyle/visual-outlineStyle-outline-elearning/custom.md',
  '/public/data/prompts/styles/visual/handDrawnSketch/visual-handDrawnSketch-notebook/custom.md',
  '/public/data/prompts/styles/visual/neonNoir/visual-neon-noir/custom.md',
  '/public/data/prompts/styles/visual/softUI/visual-softUI-softUI-light/custom.md',
  '/public/data/prompts/styles/visual/softUI/visual-softUI-softUI-dark/custom.md',
  '/public/data/prompts/styles/visual/sciFiHud/visual-tech-sci-fi-hud/custom.md',
  '/public/data/prompts/styles/visual/gradients/visual-tech-gradients/custom.md',
  '/public/data/prompts/styles/visual/organic/visual-organic-flow-workspace/custom.md',
  '/public/data/prompts/styles/retro/digitalRetro/pixelArt/custom.md',
  '/public/data/prompts/styles/visual/duotone/visual-duotone-brand-identity/custom.md',
  '/public/data/prompts/styles/visual/liminalSpace/visual-liminalSpace-digital-museum/custom.md',
  '/public/data/prompts/styles/visual/liminalSpace/visual-liminalSpace-vacant-space/custom.md',
  '/public/data/prompts/styles/visual/antiDesign/visual-antiDesign-studio/custom.md',
  '/public/data/prompts/styles/retro/newspaper/vintageRetroTemplates/custom.md',
  '/public/data/prompts/styles/visual/wabiSabi/visual-wabiSabi-wabiSabi-zen-website/custom.md',
  '/public/data/prompts/styles/visual/solarpunk/visual-nature-solarpunk/custom.md',
  '/public/data/prompts/styles/visual/solarpunk/solarpunk-eco-marketplace/custom.md',
  '/public/data/prompts/styles/visual/y2k/visual-y2k-creative-store/custom.md',
  '/public/data/prompts/styles/visual/industrial/visual-industrial-analog-synth/custom.md',
  '/public/data/prompts/styles/retro/digitalRetro/terminal-cli/custom.md',
  '/public/data/prompts/styles/core/minimalism/saas-landing/custom.md',
  '/public/data/prompts/styles/core/minimalism/core-minimalism-japanese-style/custom.md',
  '/public/data/prompts/styles/core/fluent2/fluent2-productivity/custom.md',
  '/public/data/prompts/styles/core/fluent2/fluent2-settings/custom.md'
];

const stats = {
  total: FILES_TO_FIX.length,
  processed: 0,
  success: 0,
  skipped: 0,
  errors: []
};

/**
 * Extract content between markers
 */
function extractSection(content, startMarker, endMarker) {
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return null;

  const searchStart = startIdx + startMarker.length;
  const endIdx = endMarker ? content.indexOf(endMarker, searchStart) : content.length;

  if (endIdx === -1) return content.substring(searchStart).trim();
  return content.substring(searchStart, endIdx).trim();
}

/**
 * Check if file needs fixing (Chinese section is too short compared to English)
 */
function needsFix(content) {
  const chineseSection = extractSection(content, '## 中文版本', '\n## English Version');
  const englishSection = extractSection(content, '## English Version', null);

  if (!chineseSection || !englishSection) return false;

  // Remove all --- separators to get actual content
  const chineseContent = chineseSection.replace(/\n---\n/g, '\n').trim();
  const englishContent = englishSection.trim();

  // If Chinese is less than 30% of English length, it needs fixing
  const ratio = englishContent.length / chineseContent.length;

  return ratio > 3;
}

/**
 * Fix the markdown file by consolidating Chinese sections
 */
function fixMarkdownFile(filePath) {
  const absolutePath = path.join(__dirname, filePath);

  if (!fs.existsSync(absolutePath)) {
    console.log(`❌ File not found: ${filePath}`);
    stats.errors.push({ file: filePath, error: 'File not found' });
    return false;
  }

  const content = fs.readFileSync(absolutePath, 'utf-8');

  // Check if file actually needs fixing
  if (!needsFix(content)) {
    console.log(`⏭️  Skipped (already complete): ${filePath}`);
    stats.skipped++;
    return false;
  }

  // Extract sections
  const header = content.substring(0, content.indexOf('## 中文版本')).trim();
  const chineseMarkerStart = content.indexOf('## 中文版本');
  const englishMarkerStart = content.indexOf('## English Version');

  if (chineseMarkerStart === -1 || englishMarkerStart === -1) {
    console.log(`❌ Invalid format: ${filePath}`);
    stats.errors.push({ file: filePath, error: 'Invalid format - missing markers' });
    return false;
  }

  // Extract and consolidate Chinese content (remove internal --- separators)
  const rawChineseSection = content.substring(
    chineseMarkerStart + '## 中文版本'.length,
    englishMarkerStart
  ).trim();

  // Remove all --- lines except leading/trailing ones, and consolidate content
  const chineseContent = rawChineseSection
    .split('\n---\n')
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .join('\n\n');

  // Extract English content
  const englishContent = content.substring(englishMarkerStart + '## English Version'.length).trim();

  // Reconstruct file
  const fixed = `${header}

## 中文版本 (zh-CN)

${chineseContent}

---

## English Version (en-US)

${englishContent}
`;

  // Write back
  fs.writeFileSync(absolutePath, fixed, 'utf-8');

  console.log(`✅ Fixed: ${filePath}`);
  stats.success++;
  return true;
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Markdown file fix process...\n');
  console.log(`📋 Total files to process: ${stats.total}\n`);

  const startTime = Date.now();

  FILES_TO_FIX.forEach((file, index) => {
    console.log(`\n[${index + 1}/${stats.total}] Processing: ${file}`);
    stats.processed++;

    try {
      fixMarkdownFile(file);
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
      stats.errors.push({ file, error: error.message });
    }
  });

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  // Print summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 PROCESSING SUMMARY');
  console.log('='.repeat(80));
  console.log(`✅ Successfully fixed: ${stats.success}`);
  console.log(`⏭️  Skipped (complete): ${stats.skipped}`);
  console.log(`❌ Errors: ${stats.errors.length}`);
  console.log(`⏱️  Total time: ${duration}s`);

  if (stats.errors.length > 0) {
    console.log('\n❌ ERRORS:');
    stats.errors.forEach(({ file, error }) => {
      console.log(`   - ${file}: ${error}`);
    });
  }

  console.log('\n✨ Process completed!\n');
}

// Run
main();
