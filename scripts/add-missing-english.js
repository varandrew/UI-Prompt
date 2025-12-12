#!/usr/bin/env node

/**
 * Add English translations to files missing en-US section
 */

import fs from 'fs/promises';
import path from 'path';

// Load the list of files missing English
const analysisPath = 'failed-prompts-analysis.json';
const analysis = JSON.parse(await fs.readFile(analysisPath, 'utf8'));

const missingEnglish = analysis.missingEnglish;

console.log(`📝 Processing ${missingEnglish.length} files missing English section\n`);

async function addEnglishSection(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');

    // Check if already has English section
    if (content.includes('## English Version (en-US)')) {
      console.log(`⏭️  Skip: ${path.basename(path.dirname(filePath))}/${path.basename(filePath)} - Already has English`);
      return false;
    }

    // Check if file is a placeholder template (contains i18n keys)
    if (content.includes('data.components.') || content.includes('## Component Description')) {
      console.log(`⏭️  Skip: ${path.basename(path.dirname(filePath))}/${path.basename(filePath)} - Template file`);
      return false;
    }

    // Add English section
    const updatedContent = content.trim() + '\n\n---\n\n## English Version (en-US)\n\n[Translation needed - Please translate the Chinese content above]\n';

    await fs.writeFile(filePath, updatedContent, 'utf8');
    console.log(`✓ Added: ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Error: ${filePath} - ${error.message}`);
    return false;
  }
}

let processed = 0;
let skipped = 0;

for (const filePath of missingEnglish) {
  const result = await addEnglishSection(filePath);
  if (result) {
    processed++;
  } else {
    skipped++;
  }
}

console.log(`\n✓ Complete!`);
console.log(`  Processed: ${processed}`);
console.log(`  Skipped: ${skipped}`);
console.log(`\n⚠️  Note: Files now have placeholder English sections.`);
console.log(`   Please translate or expand the English content to meet 2000+ character requirement.`);
