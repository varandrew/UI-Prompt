/**
 * Style Manifest Auto-Fix Script
 * Automatically fixes text length violations in manifest.json files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

function truncateToWords(text, maxWords) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

function truncateToChars(text, maxChars) {
  if (text.length <= maxChars) return text;
  return text.substring(0, maxChars - 3) + '...';
}

function ensureMinLength(text, minChars, minWords, type = 'mixed') {
  if (type === 'words') {
    const words = countWords(text);
    if (words >= minWords) return text;
    // Extend with ellipsis or add placeholder
    return text + ' (to be expanded)';
  }
  if (text.length >= minChars) return text;
  return text + ' '; // Add space to meet minimum
}

function fixName(nameObj) {
  const fixed = {};
  if (nameObj['zh-CN']) {
    fixed['zh-CN'] = truncateToChars(nameObj['zh-CN'], 20);
  }
  if (nameObj['en-US']) {
    fixed['en-US'] = truncateToChars(nameObj['en-US'], 50);
  }
  return fixed;
}

function fixDescription(descObj) {
  const fixed = {};
  if (descObj['zh-CN']) {
    const text = descObj['zh-CN'];
    if (text.length < 30) {
      fixed['zh-CN'] = text; // Keep as-is, flag for manual review
    } else if (text.length > 80) {
      fixed['zh-CN'] = truncateToChars(text, 80);
    } else {
      fixed['zh-CN'] = text;
    }
  }
  if (descObj['en-US']) {
    const text = descObj['en-US'];
    const wordCount = countWords(text);
    if (wordCount < 30) {
      fixed['en-US'] = text; // Keep as-is, flag for manual review
    } else if (wordCount > 50) {
      fixed['en-US'] = truncateToWords(text, 50);
    } else {
      fixed['en-US'] = text;
    }
  }
  return fixed;
}

function fixTemplateTitle(titleObj) {
  const fixed = {};
  if (titleObj['zh-CN']) {
    fixed['zh-CN'] = truncateToChars(titleObj['zh-CN'], 15);
  }
  if (titleObj['en-US']) {
    fixed['en-US'] = truncateToChars(titleObj['en-US'], 30);
  }
  return fixed;
}

function fixTags(tags) {
  // Keep only first 5 tags
  let fixed = tags.slice(0, 5);
  // Truncate each tag to 15 chars
  fixed = fixed.map(tag => truncateToChars(tag, 15));
  return fixed;
}

function fixManifest(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(content);
    let modified = false;

    // Fix name
    if (manifest.family?.name) {
      const fixed = fixName(manifest.family.name);
      if (JSON.stringify(fixed) !== JSON.stringify(manifest.family.name)) {
        manifest.family.name = fixed;
        modified = true;
      }
    }

    // Fix description
    if (manifest.family?.description) {
      const fixed = fixDescription(manifest.family.description);
      if (JSON.stringify(fixed) !== JSON.stringify(manifest.family.description)) {
        manifest.family.description = fixed;
        modified = true;
      }
    }

    // Fix tags
    if (manifest.family?.tags && Array.isArray(manifest.family.tags)) {
      if (manifest.family.tags.length > 5 ||
          manifest.family.tags.some(tag => tag.length > 15)) {
        manifest.family.tags = fixTags(manifest.family.tags);
        modified = true;
      }
    }

    // Fix template titles
    if (manifest.templates && Array.isArray(manifest.templates)) {
      manifest.templates.forEach((template, idx) => {
        if (template.title) {
          const fixed = fixTemplateTitle(template.title);
          if (JSON.stringify(fixed) !== JSON.stringify(template.title)) {
            manifest.templates[idx].title = fixed;
            modified = true;
          }
        }
      });
    }

    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + '\n');
      return { modified: true, path: filePath };
    }
    return { modified: false, path: filePath };
  } catch (error) {
    return { modified: false, path: filePath, error: error.message };
  }
}

function findAllManifests() {
  const manifestsDir = path.join(PROJECT_ROOT, 'src/data/styles/generated');
  const manifests = [];

  function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'manifest.json') {
        manifests.push(filePath);
      }
    });
  }

  walk(manifestsDir);
  return manifests.sort();
}

// Main execution
console.log('🔧 Fixing style manifests...\n');

const manifests = findAllManifests();
let fixedCount = 0;
const results = [];

manifests.forEach(manifestPath => {
  const result = fixManifest(manifestPath);
  if (result.modified) {
    fixedCount++;
    results.push(result);
  }
  if (result.error) {
    console.error(`❌ Error processing ${path.relative(PROJECT_ROOT, result.path)}: ${result.error}`);
  }
});

console.log(`✅ Fixed ${fixedCount} files\n`);

if (fixedCount > 0) {
  console.log('Modified files:');
  results.forEach(r => {
    console.log(`  ✓ ${path.relative(PROJECT_ROOT, r.path)}`);
  });
}

console.log('\n⚠️  MANUAL REVIEW NEEDED:');
console.log('  • Descriptions that are too short (< 30 chars/words) were kept as-is');
console.log('  • Please manually expand these descriptions');
console.log('  • Re-run audit script to verify: npm run validate:prompts\n');
