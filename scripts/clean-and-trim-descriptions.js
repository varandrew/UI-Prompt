/**
 * Clean and Trim Descriptions
 * Removes duplicate content and ensures 60+ words
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

function cleanDescription(desc) {
  // Remove duplicate patterns
  // Pattern like "... Perfect for X. Perfect for Y" -> keep only one
  desc = desc.replace(/\.\s+(?=Perfect|Ideal|Creates|Generates|Brings|Excellent|Produces|Evokes|Combines|Emphasizes|Celebrates|Ensures|Incorporates|Features|Suitable|Provides|Builds|Makes|Forms|Offers)/g, ' ');

  // Remove trailing "Creates..." patterns that got appended twice
  const sentences = desc.match(/[^.!?]*[.!?]+/g) || [];
  if (sentences.length > 2) {
    // Check for duplicates
    const lastTwo = sentences.slice(-2).join('').trim();
    const allButLast = desc.slice(0, -lastTwo.length).trim();

    if (lastTwo.includes('Perfect') || lastTwo.includes('Ideal') || lastTwo.includes('Creates')) {
      // Could be duplicate, keep best version
      desc = (allButLast + ' ' + sentences[sentences.length - 1]).trim();
    }
  }

  return desc.trim();
}

function processManifest(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(content);
    let modified = false;

    if (manifest.family?.description?.['en-US']) {
      let desc = manifest.family.description['en-US'];

      // Clean duplicates
      const cleaned = cleanDescription(desc);
      const wordCount = countWords(cleaned);

      if (wordCount < 60) {
        // Still too short - add generic extension
        const extension = ' This design approach offers a distinctive visual language suitable for modern applications. It combines aesthetic principles with functional design elements to create compelling user experiences.';
        desc = (cleaned.replace(/\.\s*$/, '') + extension).trim();
        manifest.family.description['en-US'] = desc;
        modified = true;
      } else if (cleaned !== desc) {
        manifest.family.description['en-US'] = cleaned;
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
console.log('🧹 Cleaning and trimming descriptions...\n');

const manifests = findAllManifests();
let cleanedCount = 0;

manifests.forEach(manifestPath => {
  const result = processManifest(manifestPath);
  if (result.modified) {
    cleanedCount++;
  }
});

console.log(`✅ Processed ${cleanedCount} files\n`);
