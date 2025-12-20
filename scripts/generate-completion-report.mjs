import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const promptsDir = path.join(__dirname, '../public/data/prompts/styles');
const contentDir = path.join(__dirname, '../public/data/content/styles');

const stats = {
  total: 0,
  manifest: { complete: 0, violations: 0 },
  prompts: { exist: 0, missing: 0 },
  content: { exist: 0, missing: 0 },
  descriptions: { avg: 0, min: 100, max: 0 },
  details: {
    promptsMissing: [],
    contentMissing: []
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
      stats.total++;
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const category = content.category;
      const familyId = path.basename(path.dirname(fullPath));

      // Check manifest compliance
      const desc = content.family?.description?.['en-US'] || '';
      const wordCount = countWords(desc);

      if (wordCount >= 80 && content.templates && content.templates.length > 0) {
        stats.manifest.complete++;
      } else {
        stats.manifest.violations++;
      }

      // Track word count stats
      stats.descriptions.min = Math.min(stats.descriptions.min, wordCount);
      stats.descriptions.max = Math.max(stats.descriptions.max, wordCount);

      // Check prompts
      const promptPath = path.join(promptsDir, category, familyId, 'style.md');
      if (fs.existsSync(promptPath)) {
        stats.prompts.exist++;
      } else {
        stats.prompts.missing++;
        stats.details.promptsMissing.push(category + '/' + familyId);
      }

      // Check content
      const templates = content.templates || [];
      let hasContent = false;

      for (const template of templates) {
        const templateId = template.id || template;
        if (!templateId) continue;

        const demoHtmlPath = path.join(contentDir, category, familyId, templateId, 'demo.html');
        const demoJsxPath = path.join(contentDir, category, familyId, templateId, 'demo.jsx');
        const fullpageHtmlPath = path.join(contentDir, category, familyId, templateId, 'fullpage.html');
        const fullpageJsxPath = path.join(contentDir, category, familyId, templateId, 'fullpage.jsx');

        if (fs.existsSync(demoHtmlPath) || fs.existsSync(demoJsxPath) ||
            fs.existsSync(fullpageHtmlPath) || fs.existsSync(fullpageJsxPath)) {
          hasContent = true;
          break;
        }
      }

      if (hasContent) {
        stats.content.exist++;
      } else {
        stats.content.missing++;
        stats.details.contentMissing.push(category + '/' + familyId);
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log('📊 STYLE DESIGN IMPLEMENTATION REPORT');
console.log('═══════════════════════════════════════════════════════════\n');

scanDirectory(stylesDir);
stats.descriptions.avg = (stats.descriptions.min + stats.descriptions.max) / 2;

console.log('📋 MANIFEST FILES:');
console.log('  ✅ Complete: ' + stats.manifest.complete + '/' + stats.total);
console.log('  ❌ Issues: ' + stats.manifest.violations);
console.log('  Status: ' + (stats.manifest.violations === 0 ? '✅ 100% COMPLIANT' : '⚠️  Needs fixing'));
console.log('');

console.log('📝 PROMPT FILES (style.md):');
console.log('  ✅ Exist: ' + stats.prompts.exist + '/' + stats.total);
console.log('  ❌ Missing: ' + stats.prompts.missing);
console.log('  Coverage: ' + ((stats.prompts.exist / stats.total * 100).toFixed(1)) + '%');
console.log('');

console.log('🎨 CONTENT FILES (demo/fullpage):');
console.log('  ✅ Exist: ' + stats.content.exist + '/' + stats.total);
console.log('  ❌ Missing: ' + stats.content.missing);
console.log('  Coverage: ' + ((stats.content.exist / stats.total * 100).toFixed(1)) + '%');
console.log('');

console.log('📊 DESCRIPTION STATISTICS:');
console.log('  📈 Word Count Range: ' + stats.descriptions.min + ' - ' + stats.descriptions.max + ' words');
console.log('  📊 Average: ' + stats.descriptions.avg.toFixed(1) + ' words');
console.log('');

console.log('═══════════════════════════════════════════════════════════');
console.log('📌 OVERALL COMPLETION STATUS:\n');

const completionPercentage = ((stats.manifest.complete + stats.prompts.exist + stats.content.exist) / (stats.total * 3) * 100).toFixed(1);
console.log('  Overall: ' + completionPercentage + '% complete');
console.log('');

if (stats.manifest.violations === 0) {
  console.log('  ✅ Manifests: Complete');
}
if (stats.prompts.missing === 0) {
  console.log('  ✅ Prompts: Complete');
} else {
  console.log('  ⚠️  Prompts: ' + stats.prompts.missing + ' missing');
}
if (stats.content.missing === 0) {
  console.log('  ✅ Content: Complete');
} else {
  console.log('  ⚠️  Content: ' + stats.content.missing + ' missing');
}

console.log('\n═══════════════════════════════════════════════════════════');

if (stats.details.promptsMissing.length > 0) {
  console.log('\n📝 Missing Prompt Files:\n');
  stats.details.promptsMissing.forEach(item => {
    console.log('  - ' + item);
  });
}

if (stats.details.contentMissing.length > 0) {
  console.log('\n🎨 Missing Content Files:\n');
  stats.details.contentMissing.forEach(item => {
    console.log('  - ' + item);
  });
}

console.log('\n═══════════════════════════════════════════════════════════\n');
