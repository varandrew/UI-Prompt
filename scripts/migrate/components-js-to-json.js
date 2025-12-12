/**
 * Component Migration Script: JS → JSON
 *
 * Usage: node scripts/migrate/components-js-to-json.js
 *
 * Input: src/data/components/{categoryComponents}.js
 * Output:
 *   - src/data/components/_registry.json (updated)
 *   - src/data/components/generated/{category}/{componentId}/manifest.json
 *   - public/data/content/components/{category}/{componentId}/{variantId}/demo.html
 *   - public/data/content/components/{category}/{componentId}/{variantId}/demo.css
 *   - public/data/prompts/components/{category}/{componentId}/custom.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '../..');

// Category mapping: file name → category id
const CATEGORY_MAP = {
  navigationComponents: 'navigation',
  formComponents: 'forms',
  dataDisplayComponents: 'dataDisplay',
  feedbackComponents: 'feedback',
  advancedComponents: 'advanced',
  inputComponents: 'input',
  interactiveComponents: 'interactive',
  specialComponents: 'special',
  visualEffectsComponents: 'visualEffects',
};

// Export name mapping
const EXPORT_MAP = {
  navigationComponents: 'navigationComponents',
  formComponents: 'formComponents',
  dataDisplayComponents: 'dataDisplayComponents',
  feedbackComponents: 'feedbackComponents',
  advancedComponents: 'advancedComponents',
  inputComponents: 'inputComponents',
  interactiveComponents: 'interactiveComponents',
  specialComponents: 'specialComponents',
  visualEffectsComponents: 'visualEffectsComponents',
};

/**
 * Ensure directory exists
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Extract i18n key to localized object
 * e.g., "data.components.navigation.breadcrumbs.title" → { "zh-CN": "...", "en-US": "..." }
 * For now, we keep the key as-is and let the loader resolve it
 */
function parseI18nKey(key) {
  if (!key) return { 'zh-CN': '', 'en-US': '' };
  // Keep the i18n key reference
  return {
    'zh-CN': key,
    'en-US': key,
  };
}

/**
 * Generate a basic prompt for a component
 */
function generatePrompt(component, category) {
  const title = component.title || component.id;
  const description = component.description || '';

  return `# ${title}

## Component Description
${description}

## Category
${category}

## Usage Guidelines
This component can be customized with different UI style variants.

## Variants
${
  component.variants
    ? component.variants.map((v) => `- **${v.id}**: ${v.name || v.id}`).join('\n')
    : '- Default variant'
}

## Implementation Notes
- Ensure proper accessibility attributes
- Test across different screen sizes
- Validate color contrast for readability
`;
}

/**
 * Process a single component
 */
async function processComponent(component, category, categoryId) {
  const componentId = component.id;
  console.log(`  Processing component: ${componentId}`);

  // Paths
  const manifestDir = path.join(ROOT, 'src/data/components/generated', categoryId, componentId);
  const contentDir = path.join(ROOT, 'public/data/content/components', categoryId, componentId);
  const promptDir = path.join(ROOT, 'public/data/prompts/components', categoryId, componentId);

  ensureDir(manifestDir);
  ensureDir(promptDir);

  // Generate manifest
  const manifest = {
    id: componentId,
    category: categoryId,
    component: {
      name: parseI18nKey(component.title),
      description: parseI18nKey(component.description),
      tags: inferTags(component, categoryId),
      relatedComponents: [],
    },
    variants: [],
  };

  // Process variants or single component
  if (component.variants && component.variants.length > 0) {
    for (const variant of component.variants) {
      const variantId = variant.id;
      const variantDir = path.join(contentDir, variantId);
      ensureDir(variantDir);

      // Save HTML
      if (variant.demoHTML) {
        const htmlPath = path.join(variantDir, 'demo.html');
        fs.writeFileSync(htmlPath, variant.demoHTML.trim(), 'utf8');
      }

      // Save CSS
      if (variant.customStyles) {
        const cssPath = path.join(variantDir, 'demo.css');
        fs.writeFileSync(cssPath, variant.customStyles.trim(), 'utf8');
      }

      // Add to manifest
      manifest.variants.push({
        id: variantId,
        name: parseI18nKey(variant.name),
        description: parseI18nKey(variant.description),
        hasContent: !!variant.demoHTML,
        hasStyles: !!variant.customStyles,
      });
    }
  } else if (component.demoHTML) {
    // Single variant component
    const variantDir = path.join(contentDir, 'default');
    ensureDir(variantDir);

    if (component.demoHTML) {
      const htmlPath = path.join(variantDir, 'demo.html');
      fs.writeFileSync(htmlPath, component.demoHTML.trim(), 'utf8');
    }

    if (component.customStyles) {
      const cssPath = path.join(variantDir, 'demo.css');
      fs.writeFileSync(cssPath, component.customStyles.trim(), 'utf8');
    }

    manifest.variants.push({
      id: 'default',
      name: parseI18nKey(component.title),
      description: parseI18nKey(component.description),
      hasContent: !!component.demoHTML,
      hasStyles: !!component.customStyles,
    });
  }

  // Save manifest
  const manifestPath = path.join(manifestDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  // Generate and save prompt
  const promptContent = generatePrompt(component, categoryId);
  const promptPath = path.join(promptDir, 'custom.md');
  fs.writeFileSync(promptPath, promptContent, 'utf8');

  return manifest;
}

/**
 * Infer tags from component data
 */
function inferTags(component, category) {
  const tags = [category];

  // Add tags based on component id
  const id = component.id.toLowerCase();
  if (id.includes('table')) tags.push('table', 'data');
  if (id.includes('form') || id.includes('input')) tags.push('form', 'input');
  if (id.includes('alert') || id.includes('toast')) tags.push('notification', 'feedback');
  if (id.includes('modal') || id.includes('dialog')) tags.push('overlay', 'popup');
  if (id.includes('nav') || id.includes('breadcrumb') || id.includes('tab')) tags.push('navigation');
  if (id.includes('calendar') || id.includes('date')) tags.push('date', 'time');
  if (id.includes('hover') || id.includes('animation')) tags.push('animation', 'interactive');
  if (id.includes('loading') || id.includes('spinner')) tags.push('loading', 'async');
  if (id.includes('empty') || id.includes('error')) tags.push('state', 'placeholder');
  if (id.includes('confetti') || id.includes('particle')) tags.push('effect', 'celebration');

  return [...new Set(tags)];
}

/**
 * Update registry with actual components
 */
function updateRegistry(categoryComponents) {
  const registryPath = path.join(ROOT, 'src/data/components/_registry.json');
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

  for (const [categoryId, components] of Object.entries(categoryComponents)) {
    if (registry.categories[categoryId]) {
      registry.categories[categoryId].components = components.map((c) => c.id);
    }
  }

  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');
  console.log('✅ Registry updated');
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🚀 Starting component migration...\n');

  const componentsDir = path.join(ROOT, 'src/data/components');
  const categoryComponents = {};

  for (const [fileName, categoryId] of Object.entries(CATEGORY_MAP)) {
    const filePath = path.join(componentsDir, `${fileName}.js`);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ File not found: ${filePath}`);
      continue;
    }

    console.log(`📁 Processing ${categoryId}...`);

    try {
      // Dynamic import
      const module = await import(filePath);
      const exportName = EXPORT_MAP[fileName];
      const components = module[exportName];

      if (!components || !Array.isArray(components)) {
        console.warn(`  ⚠️ No components array found in ${fileName}`);
        continue;
      }

      categoryComponents[categoryId] = [];

      for (const component of components) {
        const manifest = await processComponent(component, fileName, categoryId);
        categoryComponents[categoryId].push(manifest);
      }

      console.log(`  ✅ ${components.length} components processed\n`);
    } catch (error) {
      console.error(`  ❌ Error processing ${fileName}:`, error.message);
    }
  }

  // Update registry
  updateRegistry(categoryComponents);

  console.log('\n✨ Migration complete!');
  console.log('\nGenerated files:');
  console.log('  - src/data/components/generated/{category}/{componentId}/manifest.json');
  console.log('  - public/data/content/components/{category}/{componentId}/{variantId}/demo.html');
  console.log('  - public/data/content/components/{category}/{componentId}/{variantId}/demo.css');
  console.log('  - public/data/prompts/components/{category}/{componentId}/custom.md');
}

// Run migration
migrate().catch(console.error);
