/**
 * Cleanup Script for Duplicate Expansions
 * Fixes descriptions that were expanded twice with leftover text
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

function cleanupDescription(desc) {
  if (!desc) return desc;

  // Remove duplicate expansion patterns
  // Pattern: "... .. e with distinctive" or similar artifacts
  let cleaned = desc
    .replace(/\.\.\s*e\s+with\s+distinctive.*/gi, '.')
    .replace(/\.\.\s*$/g, '.')
    .trim();

  return cleaned;
}

function processManifest(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(content);
    let modified = false;

    if (manifest.family?.description) {
      const originalEn = manifest.family.description['en-US'];
      const cleanedEn = cleanupDescription(originalEn);

      if (cleanedEn !== originalEn) {
        manifest.family.description['en-US'] = cleanedEn;
        modified = true;
      }

      const originalZh = manifest.family.description['zh-CN'];
      const cleanedZh = cleanupDescription(originalZh);

      if (cleanedZh !== originalZh) {
        manifest.family.description['zh-CN'] = cleanedZh;
        modified = true;
      }
    }

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
console.log('🧹 Cleaning up duplicate expansions...\n');

const manifests = findAllManifests();
let cleanedCount = 0;

manifests.forEach(manifestPath => {
  const result = processManifest(manifestPath);
  if (result.modified) {
    cleanedCount++;
  }
});

console.log(`✅ Cleaned up ${cleanedCount} files\n`);
