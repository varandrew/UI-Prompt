const fs = require('fs');
const path = require('path');

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const violations = [];
const compliant = [];

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
      const minWords = 60;
      
      const relativePath = path.relative(stylesDir, fullPath);
      
      if (wordCount < minWords) {
        violations.push({
          file: relativePath,
          words: wordCount,
          needed: minWords - wordCount
        });
      } else {
        compliant.push({
          file: relativePath,
          words: wordCount
        });
      }
    }
  }
}

scanDirectory(stylesDir);

console.log('\n📊 DESCRIPTION TEXT COUNT AUDIT\n');
console.log(`✅ Compliant: ${compliant.length} files`);
console.log(`❌ Violations: ${violations.length} files\n`);

if (violations.length > 0) {
  console.log('❌ VIOLATIONS (Need more words):');
  violations.forEach(v => {
    console.log(`  ${v.file}`);
    console.log(`    Words: ${v.words} (need +${v.needed} more)`);
  });
} else {
  console.log('🎉 ALL FILES COMPLIANT!\n');
  console.log('Word count distribution:');
  const counts = compliant.map(c => c.words).sort((a, b) => a - b);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const avg = (counts.reduce((a, b) => a + b, 0) / counts.length).toFixed(1);
  console.log(`  Min: ${min} words`);
  console.log(`  Max: ${max} words`);
  console.log(`  Avg: ${avg} words`);
}
