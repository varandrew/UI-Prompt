import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const results = {
  total: 0,
  hasChineseDesc: 0,
  missingChineseDesc: 0,
  tooShortChineseDesc: 0,
  details: {
    missing: [],
    tooShort: []
  }
};

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry === 'manifest.json') {
      results.total++;
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const zhDesc = content.family?.description?.['zh-CN'] || '';
      const enDesc = content.family?.description?.['en-US'] || '';
      const familyId = path.basename(path.dirname(fullPath));

      if (!zhDesc || zhDesc.trim().length === 0) {
        results.missingChineseDesc++;
        results.details.missing.push({
          file: familyId,
          enLength: enDesc.length
        });
      } else if (zhDesc.length < 60) {
        results.tooShortChineseDesc++;
        results.details.tooShort.push({
          file: familyId,
          zhLength: zhDesc.length,
          enLength: enDesc.length
        });
      } else {
        results.hasChineseDesc++;
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════');
console.log('📋 CHINESE DESCRIPTION STATUS CHECK');
console.log('═══════════════════════════════════════════════\n');

scanDirectory(stylesDir);

console.log('📊 Summary:\n');
console.log('  ✅ Complete: ' + results.hasChineseDesc + '/' + results.total);
console.log('  ❌ Missing: ' + results.missingChineseDesc);
console.log('  ⚠️  Too short (<60 chars): ' + results.tooShortChineseDesc);
console.log('');

if (results.details.missing.length > 0) {
  console.log('❌ Missing Chinese Descriptions (' + results.details.missing.length + '):\n');
  results.details.missing.slice(0, 10).forEach(item => {
    console.log('  - ' + item.file);
    console.log('    EN Length: ' + item.enLength + ' chars');
  });
  if (results.details.missing.length > 10) {
    console.log('  ... and ' + (results.details.missing.length - 10) + ' more');
  }
}

if (results.details.tooShort.length > 0) {
  console.log('\n⚠️  Too Short Chinese Descriptions (' + results.details.tooShort.length + '):\n');
  results.details.tooShort.slice(0, 10).forEach(item => {
    console.log('  - ' + item.file);
    console.log('    ZH Length: ' + item.zhLength + ' chars, EN Length: ' + item.enLength + ' chars');
  });
  if (results.details.tooShort.length > 10) {
    console.log('  ... and ' + (results.details.tooShort.length - 10) + ' more');
  }
}

console.log('\n═══════════════════════════════════════════════\n');
