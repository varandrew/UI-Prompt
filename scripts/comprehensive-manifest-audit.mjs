import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

function getCharLength(text) {
  return text ? text.length : 0;
}

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const violations = [];
const stats = {
  total: 0,
  titles: { violations: 0, compliant: 0 },
  descriptions: { violations: 0, compliant: 0 },
  tags: { violations: 0, compliant: 0 },
  templates: { violations: 0, compliant: 0 }
};

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry === 'manifest.json') {
      stats.total++;
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const relativePath = path.relative(stylesDir, fullPath);
      const fileViolations = [];

      // Check title constraints
      const titleZh = content.family?.name?.['zh-CN'] || '';
      const titleEn = content.family?.name?.['en-US'] || '';

      if (getCharLength(titleZh) > 20) {
        fileViolations.push(`Title zh-CN: ${getCharLength(titleZh)} chars (max 20)`);
        stats.titles.violations++;
      } else {
        stats.titles.compliant++;
      }

      if (getCharLength(titleEn) > 50) {
        fileViolations.push(`Title en-US: ${getCharLength(titleEn)} chars (max 50)`);
        stats.titles.violations++;
      } else {
        stats.titles.compliant++;
      }

      // Check description constraints
      const descEn = content.family?.description?.['en-US'] || '';
      const descZh = content.family?.description?.['zh-CN'] || '';
      const wordCount = countWords(descEn);

      if (wordCount < 60) {
        fileViolations.push(`Description en-US: ${wordCount} words (min 60)`);
        stats.descriptions.violations++;
      } else if (wordCount > 100) {
        fileViolations.push(`Description en-US: ${wordCount} words (max 100)`);
        stats.descriptions.violations++;
      } else {
        stats.descriptions.compliant++;
      }

      if (!descZh) {
        fileViolations.push(`Description zh-CN: missing`);
      }

      // Check tags
      const tags = content.family?.tags || [];
      if (tags.length > 5) {
        fileViolations.push(`Tags: ${tags.length} tags (max 5)`);
        stats.tags.violations++;
      } else {
        let tagViolation = false;
        for (const tag of tags) {
          if (getCharLength(tag) > 15) {
            fileViolations.push(`Tag "${tag}": ${getCharLength(tag)} chars (max 15)`);
            tagViolation = true;
          }
        }
        if (!tagViolation) stats.tags.compliant++;
      }

      // Check templates
      const templates = content.templates || [];
      if (!Array.isArray(templates) || templates.length === 0) {
        fileViolations.push(`Templates: empty or invalid`);
        stats.templates.violations++;
      } else {
        let templateViolation = false;
        for (const template of templates) {
          const tmplTitle = template.title?.['en-US'] || '';
          if (getCharLength(tmplTitle) > 50) {
            fileViolations.push(`Template title: "${tmplTitle}" (${getCharLength(tmplTitle)} chars, max 50)`);
            templateViolation = true;
          }
        }
        if (!templateViolation) stats.templates.compliant++;
      }

      if (fileViolations.length > 0) {
        violations.push({
          file: relativePath,
          issues: fileViolations
        });
      }
    }
  }
}

scanDirectory(stylesDir);

console.log('\n═══════════════════════════════════════════════');
console.log('📋 COMPREHENSIVE MANIFEST AUDIT');
console.log('═══════════════════════════════════════════════\n');

console.log(`📊 Total Files Scanned: ${stats.total}\n`);

console.log('📋 CONSTRAINT COMPLIANCE:\n');
console.log(`  📝 Titles:`);
console.log(`     ✅ Compliant: ${stats.titles.compliant}`);
console.log(`     ❌ Violations: ${stats.titles.violations}\n`);

console.log(`  📄 Descriptions:`);
console.log(`     ✅ Compliant: ${stats.descriptions.compliant}`);
console.log(`     ❌ Violations: ${stats.descriptions.violations}\n`);

console.log(`  🏷️  Tags:`);
console.log(`     ✅ Compliant: ${stats.tags.compliant}`);
console.log(`     ❌ Violations: ${stats.tags.violations}\n`);

console.log(`  🎨 Templates:`);
console.log(`     ✅ Compliant: ${stats.templates.compliant}`);
console.log(`     ❌ Violations: ${stats.templates.violations}\n`);

if (violations.length === 0) {
  console.log('═══════════════════════════════════════════════');
  console.log('🎉 ALL MANIFESTS ARE 100% COMPLIANT!');
  console.log('═══════════════════════════════════════════════\n');
  console.log('✨ All constraints satisfied:');
  console.log('  ✅ All titles within char limits');
  console.log('  ✅ All descriptions 60-100 words');
  console.log('  ✅ All tags valid (≤5 tags, ≤15 chars each)');
  console.log('  ✅ All templates properly formatted');
} else {
  console.log('═══════════════════════════════════════════════');
  console.log(`❌ VIOLATIONS FOUND: ${violations.length} files\n`);
  violations.forEach(v => {
    console.log(`📄 ${v.file}`);
    v.issues.forEach(issue => {
      console.log(`   ❌ ${issue}`);
    });
    console.log();
  });
}
