// Metadata Updater for manifest.json and styleTagsMapping.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '../..');

/**
 * Update or create manifest.json for the family
 * @param {string} category - Category name
 * @param {string} family - Family name
 * @param {string} templateId - Template ID
 * @param {string} titleZh - Chinese title
 * @param {string} titleEn - English title
 * @returns {void}
 */
export function updateManifest(category, family, templateId, titleZh, titleEn) {
  const manifestDir = path.join(projectRoot, `src/data/styles/generated/${category}/${family}`);
  const manifestPath = path.join(manifestDir, 'manifest.json');

  let manifest;

  if (fs.existsSync(manifestPath)) {
    // Load existing manifest
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } else {
    // Create new manifest structure
    manifest = {
      id: `${category}-${family}`,
      category,
      family: {
        name: {
          'zh-CN': family,
          'en-US': family
        },
        description: {
          'zh-CN': '',
          'en-US': ''
        }
      },
      templates: []
    };
  }

  // Check if template ID already exists (should not happen if validator ran)
  if (manifest.templates.some(t => t.id === templateId)) {
    throw new Error(`模板 ID "${templateId}" 已存在於 manifest 中`);
  }

  // Add new template
  manifest.templates.push({
    id: templateId,
    title: {
      'zh-CN': titleZh,
      'en-US': titleEn
    }
  });

  // Ensure directory exists
  if (!fs.existsSync(manifestDir)) {
    fs.mkdirSync(manifestDir, { recursive: true });
  }

  // Write manifest file with proper formatting
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  console.log(`✅ 已更新 manifest.json: ${manifestPath}`);
}

/**
 * Update styleTagsMapping.js to add new template enhancement
 * @param {string} templateId - Template ID
 * @param {string} category - Category name
 * @returns {void}
 */
export function updateStyleTagsMapping(templateId, category) {
  const mappingPath = path.join(projectRoot, 'src/data/metadata/styleTagsMapping.js');

  if (!fs.existsSync(mappingPath)) {
    throw new Error(`styleTagsMapping.js not found at ${mappingPath}`);
  }

  let content = fs.readFileSync(mappingPath, 'utf8');

  // Generate new enhancement entry
  const newEnhancement = `  '${templateId}': {
    primaryCategory: '${category}',
    categories: ['${category}'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },`;

  // Find the position to insert (before the last closing brace of styleEnhancements object)
  // Look for the pattern: closing brace followed by semicolon and export statement
  const exportPattern = /\n};?\s*$/;

  if (exportPattern.test(content)) {
    // Insert before the final closing brace
    content = content.replace(/(\n)(};?\s*)$/, `\n${newEnhancement}\n$2`);
  } else {
    // Fallback: try to find the last occurrence of closing brace
    const lastBraceIndex = content.lastIndexOf('}');
    if (lastBraceIndex === -1) {
      throw new Error('無法找到 styleEnhancements 對象的結束位置');
    }

    // Find the position before the last brace (accounting for whitespace)
    let insertPosition = lastBraceIndex;
    while (insertPosition > 0 && /\s/.test(content[insertPosition - 1])) {
      insertPosition--;
    }

    content = content.slice(0, insertPosition) + '\n' + newEnhancement + '\n' + content.slice(insertPosition);
  }

  // Write updated file
  fs.writeFileSync(mappingPath, content, 'utf8');

  console.log(`✅ 已更新 styleTagsMapping.js: ${mappingPath}`);
  console.log(`   ⚠️  請手動完善以下內容：`);
  console.log(`      - tags: 添加更多描述性標籤`);
  console.log(`      - relatedStyles: 添加關聯風格 ID`);
}
