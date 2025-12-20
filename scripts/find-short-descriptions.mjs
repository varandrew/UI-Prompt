import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const shortDescriptions = [];

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry === 'manifest.json') {
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const enDescription = content.family?.description?.['en-US'] || '';
      const wordCount = countWords(enDescription);
      const minWords = 80; // Check for 80-word requirement

      const relativePath = path.relative(stylesDir, fullPath);

      if (wordCount < minWords) {
        shortDescriptions.push({
          file: relativePath,
          words: wordCount,
          needed: minWords - wordCount,
          description: enDescription.substring(0, 100) + '...'
        });
      }
    }
  }
}

scanDirectory(stylesDir);

console.log('\n═══════════════════════════════════════════════');
console.log('📋 DESCRIPTIONS WITH LESS THAN 80 WORDS');
console.log('═══════════════════════════════════════════════\n');

if (shortDescriptions.length === 0) {
  console.log('✅ All descriptions have 80+ words!');
} else {
  console.log('❌ Found ' + shortDescriptions.length + ' descriptions with less than 80 words:\n');

  shortDescriptions.sort((a, b) => a.words - b.words).forEach((item, i) => {
    console.log((i + 1) + '. ' + item.file);
    console.log('   Words: ' + item.words + ' (need +' + item.needed + ' more)');
    console.log('   Preview: "' + item.description + '"');
    console.log('');
  });
}
