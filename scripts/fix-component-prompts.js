#!/usr/bin/env node
/**
 * Fix Component Prompts Script
 *
 * This script fixes the component prompt files that incorrectly use i18n keys
 * instead of actual content. It reads the translations from the i18n files
 * and generates proper bilingual prompt files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const promptsDir = path.join(projectRoot, 'public/data/prompts/components');
const zhCNPath = path.join(projectRoot, 'src/i18n/zh-CN.js');
const enUSPath = path.join(projectRoot, 'src/i18n/en-US.js');

/**
 * Extract the data.components section from i18n file
 */
async function loadI18n(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Use regex to extract the export default object
  const match = content.match(/export\s+default\s+(\{[\s\S]*\})\s*;?\s*$/);
  if (!match) {
    throw new Error(`Could not parse i18n file: ${filePath}`);
  }

  // Evaluate the object (this is safe since we control the source)
  const obj = eval('(' + match[1] + ')');
  return obj.data?.components || {};
}

/**
 * Generate proper bilingual prompt content
 */
function generatePromptContent(componentId, category, zhData, enData) {
  const zhTitle = zhData?.title || componentId;
  const enTitle = enData?.title || componentId;
  const zhDesc = zhData?.description || '';
  const enDesc = enData?.description || '';
  const zhVariants = zhData?.variants || {};
  const enVariants = enData?.variants || {};

  // Build variants list
  let zhVariantsList = '';
  let enVariantsList = '';

  for (const [variantId, variant] of Object.entries(zhVariants)) {
    const name = variant?.name || variantId;
    const desc = variant?.description || '';
    if (name && desc) {
      zhVariantsList += `- **${name}**：${desc}\n`;
    }
  }

  for (const [variantId, variant] of Object.entries(enVariants)) {
    const name = variant?.name || variantId;
    const desc = variant?.description || '';
    if (name && desc) {
      enVariantsList += `- **${name}**: ${desc}\n`;
    }
  }

  return `# Custom Prompt

## 中文版本 (zh-CN)

### ${zhTitle}

${zhDesc}

**分類**：${getCategoryName(category, 'zh-CN')}

**使用指南**：
此組件可以與不同的 UI 風格變體進行自定義。選擇適合您設計系統的變體。

${zhVariantsList ? `**可用變體**：\n${zhVariantsList}` : ''}
**實施注意事項**：
- 確保適當的可訪問性屬性
- 在不同屏幕尺寸上進行測試
- 驗證顏色對比度以確保可讀性

---

## English Version (en-US)

### ${enTitle}

${enDesc}

**Category**: ${getCategoryName(category, 'en-US')}

**Usage Guidelines**:
This component can be customized with different UI style variants. Choose the variant that best fits your design system.

${enVariantsList ? `**Available Variants**:\n${enVariantsList}` : ''}
**Implementation Notes**:
- Ensure proper accessibility attributes
- Test across different screen sizes
- Validate color contrast for readability
`;
}

/**
 * Get category display name
 */
function getCategoryName(category, lang) {
  const names = {
    'zh-CN': {
      'advanced': '進階組件',
      'dataDisplay': '數據展示',
      'feedback': '反饋組件',
      'forms': '表單組件',
      'input': '輸入組件',
      'special': '特殊組件',
      'visualEffects': '視覺效果',
      'interactive': '互動組件'
    },
    'en-US': {
      'advanced': 'Advanced Components',
      'dataDisplay': 'Data Display',
      'feedback': 'Feedback Components',
      'forms': 'Form Components',
      'input': 'Input Components',
      'special': 'Special Components',
      'visualEffects': 'Visual Effects',
      'interactive': 'Interactive Components'
    }
  };
  return names[lang]?.[category] || category;
}

/**
 * Check if a prompt file needs fixing (uses i18n keys)
 */
function needsFix(content) {
  return content.includes('data.components.') || content.startsWith('# data.');
}

/**
 * Main function
 */
async function main() {
  console.log('Loading i18n translations...');

  const zhComponents = await loadI18n(zhCNPath);
  const enComponents = await loadI18n(enUSPath);

  console.log('Scanning component prompts directory...');

  const categories = fs.readdirSync(promptsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  let fixedCount = 0;
  let skippedCount = 0;

  for (const category of categories) {
    const categoryPath = path.join(promptsDir, category);
    const components = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);

    for (const componentDir of components) {
      const customMdPath = path.join(categoryPath, componentDir, 'custom.md');

      if (!fs.existsSync(customMdPath)) {
        continue;
      }

      const content = fs.readFileSync(customMdPath, 'utf-8');

      if (!needsFix(content)) {
        skippedCount++;
        continue;
      }

      // Get component translations
      const zhData = zhComponents[category]?.[componentDir];
      const enData = enComponents[category]?.[componentDir];

      if (!zhData && !enData) {
        console.log(`  ⚠️  No translation found for ${category}/${componentDir}`);
        continue;
      }

      // Generate new content
      const newContent = generatePromptContent(componentDir, category, zhData, enData);

      // Write the fixed file
      fs.writeFileSync(customMdPath, newContent, 'utf-8');

      console.log(`  ✅ Fixed: ${category}/${componentDir}/custom.md`);
      fixedCount++;
    }
  }

  console.log('\n========================================');
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`⏭️  Skipped: ${skippedCount} files (already correct)`);
  console.log('========================================');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
