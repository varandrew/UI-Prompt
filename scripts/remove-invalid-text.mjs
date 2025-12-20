import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const invalidText = '训讈';
const fixed = [];

function scanAndClean(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanAndClean(fullPath);
    } else if (entry === 'manifest.json') {
      const content = fs.readFileSync(fullPath, 'utf-8');

      if (content.includes(invalidText)) {
        const jsonContent = JSON.parse(content);
        const relativePath = path.relative(stylesDir, fullPath);

        // Clean zh-CN description
        if (jsonContent.family?.description?.['zh-CN']) {
          const oldText = jsonContent.family.description['zh-CN'];
          const newText = oldText.replace(invalidText, '');

          jsonContent.family.description['zh-CN'] = newText;

          fs.writeFileSync(fullPath, JSON.stringify(jsonContent, null, 2) + '\n');

          fixed.push({
            file: relativePath,
            oldLength: oldText.length,
            newLength: newText.length
          });
        }
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log('🧹 REMOVING INVALID TEXT "训讈"');
console.log('═══════════════════════════════════════════════════════════\n');

scanAndClean(stylesDir);

console.log('📊 Cleanup Results:\n');
console.log('  Files cleaned: ' + fixed.length);
console.log('  Invalid text removed: ' + (invalidText.length * fixed.length) + ' characters total');
console.log('');

if (fixed.length > 0) {
  console.log('📋 Cleaned Files:\n');
  fixed.slice(0, 20).forEach((item, i) => {
    console.log((i + 1) + '. ' + item.file);
    console.log('   ' + item.oldLength + ' → ' + item.newLength + ' chars (-' + (item.oldLength - item.newLength) + ')');
  });

  if (fixed.length > 20) {
    console.log('\n... and ' + (fixed.length - 20) + ' more files cleaned');
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('✅ Successfully removed "训讈" from ' + fixed.length + ' files!');
  console.log('═══════════════════════════════════════════════════════════\n');
} else {
  console.log('✅ No invalid text found!');
}
