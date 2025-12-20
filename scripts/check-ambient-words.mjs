import fs from 'fs';

const content = JSON.parse(fs.readFileSync('src/data/styles/generated/visual/ambient/manifest.json', 'utf-8'));

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

console.log('═══════════════════════════════════════════════');
console.log('🔍 AMBIENT LIGHT - COMPLETE WORD COUNT ANALYSIS');
console.log('═══════════════════════════════════════════════\n');

console.log('📝 Title (family.name):');
console.log('  zh-CN: "' + content.family.name['zh-CN'] + '"');
console.log('    → Word count:', countWords(content.family.name['zh-CN']));
console.log('  en-US: "' + content.family.name['en-US'] + '"');
console.log('    → Word count:', countWords(content.family.name['en-US']));
console.log('');

console.log('📄 Description (family.description):');
console.log('  zh-CN: "' + content.family.description['zh-CN'] + '"');
console.log('    → Word count:', countWords(content.family.description['zh-CN']));
console.log('    → Char count:', content.family.description['zh-CN'].length);
console.log('');

const descEn = content.family.description['en-US'];
console.log('  en-US (full): "' + descEn + '"');
console.log('    → Word count:', countWords(descEn));
console.log('    → Char count:', descEn.length);
console.log('');

// Show first 8 words
const words = descEn.trim().split(/\s+/);
console.log('  📊 First 8 words: "' + words.slice(0, 8).join(' ') + '"');
console.log('  📊 Total words in description:', words.length);
console.log('');

console.log('🎨 Template Title:');
content.templates.forEach((tmpl, i) => {
  console.log('  Template ' + (i + 1) + ':');
  console.log('    zh-CN: "' + tmpl.title['zh-CN'] + '"');
  console.log('      → Word count:', countWords(tmpl.title['zh-CN']));
  console.log('    en-US: "' + tmpl.title['en-US'] + '"');
  console.log('      → Word count:', countWords(tmpl.title['en-US']));
});
