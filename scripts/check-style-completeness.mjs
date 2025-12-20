import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const promptsDir = path.join(__dirname, '../public/data/prompts/styles');
const contentDir = path.join(__dirname, '../public/data/content/styles');

const results = {
  manifests: 0,
  promptsExists: 0,
  contentExists: 0,
  missing: {
    prompts: [],
    content: []
  }
};

function scanManifests(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanManifests(fullPath);
    } else if (entry === 'manifest.json') {
      results.manifests++;

      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const category = content.category;
      const familyId = path.basename(path.dirname(fullPath));

      // Check for prompt files
      const promptPath = path.join(promptsDir, category, familyId, 'style.md');
      if (!fs.existsSync(promptPath)) {
        results.missing.prompts.push(category + '/' + familyId);
      } else {
        results.promptsExists++;
      }

      // Check for content files (at least one template)
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

      if (!hasContent) {
        results.missing.content.push(category + '/' + familyId);
      } else {
        results.contentExists++;
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════');
console.log('📋 STYLE COMPLETENESS CHECK');
console.log('═══════════════════════════════════════════════\n');

scanManifests(stylesDir);

console.log('📊 Summary:\n');
console.log('  📄 Manifest files: ' + results.manifests);
console.log('  📝 Prompt files (style.md): ' + results.promptsExists + '/' + results.manifests);
console.log('  🎨 Content files (demo/fullpage): ' + results.contentExists + '/' + results.manifests);

if (results.missing.prompts.length > 0) {
  console.log('\n❌ Missing Prompt Files (' + results.missing.prompts.length + '):\n');
  results.missing.prompts.slice(0, 10).forEach(item => {
    console.log('  - ' + item);
  });
  if (results.missing.prompts.length > 10) {
    console.log('  ... and ' + (results.missing.prompts.length - 10) + ' more');
  }
}

if (results.missing.content.length > 0) {
  console.log('\n❌ Missing Content Files (' + results.missing.content.length + '):\n');
  results.missing.content.slice(0, 10).forEach(item => {
    console.log('  - ' + item);
  });
  if (results.missing.content.length > 10) {
    console.log('  ... and ' + (results.missing.content.length - 10) + ' more');
  }
}

console.log('\n═══════════════════════════════════════════════\n');

if (results.missing.prompts.length === 0 && results.missing.content.length === 0) {
  console.log('✅ All styles are fully complete!');
} else {
  const totalMissing = results.missing.prompts.length + results.missing.content.length;
  console.log('⚠️  ' + totalMissing + ' styles need additional files');
}
