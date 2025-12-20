/**
 * Style Manifest Audit Script
 * Validates all style manifest.json files against design specifications
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Validation rules based on style-design.md
const RULES = {
  name: {
    'zh-CN': { min: 2, max: 20, type: 'chars' },
    'en-US': { min: 5, max: 50, type: 'chars' }
  },
  description: {
    'zh-CN': { min: 30, max: 80, type: 'chars' },
    'en-US': { min: 60, max: 100, type: 'words' }
  },
  templateTitle: {
    'zh-CN': { min: 2, max: 15, type: 'chars' },
    'en-US': { min: 3, max: 30, type: 'chars' }
  },
  tags: {
    maxCount: 5,
    maxLength: 15
  }
};

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

function countChars(text) {
  return text.length;
}

function validateField(field, value, language, rules) {
  const rule = rules[language];
  if (!rule) return null;

  const length = rule.type === 'words' ? countWords(value) : countChars(value);
  const issues = [];

  if (length < rule.min) {
    issues.push(`Too short: ${length} ${rule.type} (min ${rule.min})`);
  }
  if (length > rule.max) {
    issues.push(`Too long: ${length} ${rule.type} (max ${rule.max})`);
  }

  return issues.length > 0 ? issues : null;
}

function auditManifest(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(content);
    const violations = [];

    // Check name
    if (manifest.family?.name) {
      ['zh-CN', 'en-US'].forEach(lang => {
        const value = manifest.family.name[lang];
        if (value) {
          const issues = validateField('name', value, lang, RULES.name);
          if (issues) {
            violations.push({
              field: `family.name.${lang}`,
              value: value.substring(0, 50),
              issues
            });
          }
        }
      });
    }

    // Check description
    if (manifest.family?.description) {
      ['zh-CN', 'en-US'].forEach(lang => {
        const value = manifest.family.description[lang];
        if (value) {
          const issues = validateField('description', value, lang, RULES.description);
          if (issues) {
            violations.push({
              field: `family.description.${lang}`,
              value: value.substring(0, 80),
              issues
            });
          }
        }
      });
    }

    // Check tags
    if (manifest.family?.tags) {
      if (manifest.family.tags.length > RULES.tags.maxCount) {
        violations.push({
          field: 'family.tags',
          value: manifest.family.tags,
          issues: [`Too many tags: ${manifest.family.tags.length} (max ${RULES.tags.maxCount})`]
        });
      }
      manifest.family.tags.forEach((tag, idx) => {
        if (tag.length > RULES.tags.maxLength) {
          violations.push({
            field: `family.tags[${idx}]`,
            value: tag,
            issues: [`Tag too long: ${tag.length} chars (max ${RULES.tags.maxLength})`]
          });
        }
      });
    }

    // Check templates
    if (manifest.templates) {
      manifest.templates.forEach((template, idx) => {
        if (template.title) {
          ['zh-CN', 'en-US'].forEach(lang => {
            const value = template.title[lang];
            if (value) {
              const issues = validateField('templateTitle', value, lang, RULES.templateTitle);
              if (issues) {
                violations.push({
                  field: `templates[${idx}].title.${lang}`,
                  value: value.substring(0, 30),
                  issues
                });
              }
            }
          });
        }
      });
    }

    return violations;
  } catch (error) {
    return [{
      field: 'FILE',
      value: path.basename(filePath),
      issues: [error.message]
    }];
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
console.log('🔍 Auditing all style manifests...\n');

const manifests = findAllManifests();
const allViolations = new Map();
let totalViolations = 0;

manifests.forEach(manifestPath => {
  const violations = auditManifest(manifestPath);
  if (violations.length > 0) {
    const relativePath = path.relative(PROJECT_ROOT, manifestPath);
    allViolations.set(relativePath, violations);
    totalViolations += violations.length;
  }
});

// Report
if (allViolations.size === 0) {
  console.log('✅ All manifests are compliant!\n');
} else {
  console.log(`⚠️  Found ${totalViolations} violations in ${allViolations.size} files\n`);
  console.log('═'.repeat(80));

  allViolations.forEach((violations, filePath) => {
    console.log(`\n📄 ${filePath}`);
    console.log('─'.repeat(80));
    violations.forEach(v => {
      console.log(`  ❌ ${v.field}`);
      console.log(`     Value: "${v.value}"`);
      v.issues.forEach(issue => {
        console.log(`     • ${issue}`);
      });
    });
  });

  console.log('\n' + '═'.repeat(80));
  console.log(`\nSummary: ${totalViolations} violations found\n`);
}

// Export for further processing
export { allViolations, manifests };
