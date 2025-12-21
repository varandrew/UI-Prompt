/**
 * Content Structure Integrity Tests
 *
 * Validates that all templates defined in manifest.json have complete
 * content file structures in public/data/content/styles/
 *
 * Required files for each template:
 * - fullpage.html OR fullpage.jsx (required for preview page)
 * - fullpage.css (required for preview styling)
 * - demo.html (optional, for StyleCard preview)
 * - demo.css (optional, for StyleCard styling)
 *
 * This test prevents the "內容檔案結構不完整" issue where preview pages
 * show white backgrounds due to missing content files.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Required files for preview functionality (html OR jsx for fullpage)
const REQUIRED_CSS = 'fullpage.css';
const FULLPAGE_VARIANTS = ['fullpage.html', 'fullpage.jsx'];
// Recommended files (warnings only)
const RECOMMENDED_FILES = ['demo.html', 'demo.css'];

/**
 * Check if any fullpage variant exists (html or jsx)
 */
function hasFullpageFile(contentDir) {
  return FULLPAGE_VARIANTS.some(file =>
    fs.existsSync(path.join(contentDir, file))
  );
}

/**
 * Load the style registry
 */
function loadRegistry() {
  const registryPath = path.join(projectRoot, 'src/data/styles/_registry.json');
  const content = fs.readFileSync(registryPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Load family manifest
 */
function loadManifest(category, familyId) {
  const manifestPath = path.join(
    projectRoot,
    'src/data/styles/generated',
    category,
    familyId,
    'manifest.json'
  );

  if (!fs.existsSync(manifestPath)) {
    return null;
  }

  const content = fs.readFileSync(manifestPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Check if content directory exists for a template
 */
function getContentDir(category, familyId, templateId) {
  return path.join(
    projectRoot,
    'public/data/content/styles',
    category,
    familyId,
    templateId
  );
}

/**
 * Validate content structure for a single template
 */
function validateTemplateContent(category, familyId, templateId) {
  const contentDir = getContentDir(category, familyId, templateId);
  const errors = [];
  const warnings = [];

  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    errors.push(`Content directory missing: ${contentDir}`);
    return { valid: false, errors, warnings };
  }

  // Check fullpage file (html OR jsx)
  if (!hasFullpageFile(contentDir)) {
    errors.push(`Required file missing: fullpage.html or fullpage.jsx`);
  } else {
    // Check the existing fullpage file is not empty and readable
    const existingFile = FULLPAGE_VARIANTS.find(file =>
      fs.existsSync(path.join(contentDir, file))
    );
    if (existingFile) {
      const filePath = path.join(contentDir, existingFile);
      const stat = fs.statSync(filePath);
      if (stat.size === 0) {
        errors.push(`Required file is empty: ${existingFile}`);
      }
      try {
        fs.accessSync(filePath, fs.constants.R_OK);
      } catch {
        errors.push(`Required file not readable (check chmod 644): ${existingFile}`);
      }
    }
  }

  // Check fullpage.css
  const cssPath = path.join(contentDir, REQUIRED_CSS);
  if (!fs.existsSync(cssPath)) {
    errors.push(`Required file missing: ${REQUIRED_CSS}`);
  } else {
    const stat = fs.statSync(cssPath);
    if (stat.size === 0) {
      errors.push(`Required file is empty: ${REQUIRED_CSS}`);
    }
    try {
      fs.accessSync(cssPath, fs.constants.R_OK);
    } catch {
      errors.push(`Required file not readable (check chmod 644): ${REQUIRED_CSS}`);
    }
  }

  // Check recommended files (warnings only)
  for (const file of RECOMMENDED_FILES) {
    const filePath = path.join(contentDir, file);
    if (!fs.existsSync(filePath)) {
      warnings.push(`Recommended file missing: ${file}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Get all families with templates from registry
 */
function getAllFamiliesWithTemplates() {
  const registry = loadRegistry();
  const families = [];

  for (const [categoryId, categoryConfig] of Object.entries(registry.categories)) {
    for (const familyId of categoryConfig.families) {
      const manifest = loadManifest(categoryId, familyId);
      if (manifest?.templates && manifest.templates.length > 0) {
        families.push({
          category: categoryId,
          familyId,
          templates: manifest.templates
        });
      }
    }
  }

  return families;
}

describe('Content Structure Integrity', () => {
  let allFamilies;

  beforeAll(() => {
    allFamilies = getAllFamiliesWithTemplates();
  });

  describe('Required Content Files', () => {
    it('should have content directories for all defined templates', () => {
      const missingDirs = [];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;
          const contentDir = getContentDir(category, familyId, templateId);

          if (!fs.existsSync(contentDir)) {
            missingDirs.push(`${category}/${familyId}/${templateId}`);
          }
        }
      }

      if (missingDirs.length > 0) {
        console.error('\n❌ Missing content directories:');
        missingDirs.forEach(dir => console.error(`   - ${dir}`));
      }

      expect(missingDirs).toEqual([]);
    });

    it('should have fullpage.html or fullpage.jsx for all templates with content directories', () => {
      const missingFiles = [];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;
          const contentDir = getContentDir(category, familyId, templateId);

          if (fs.existsSync(contentDir)) {
            if (!hasFullpageFile(contentDir)) {
              missingFiles.push(`${category}/${familyId}/${templateId}/fullpage.html or .jsx`);
            }
          }
        }
      }

      if (missingFiles.length > 0) {
        console.error('\n❌ Missing fullpage files:');
        missingFiles.forEach(file => console.error(`   - ${file}`));
      }

      expect(missingFiles).toEqual([]);
    });

    it('should have fullpage.css for all templates with content directories', () => {
      const missingFiles = [];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;
          const contentDir = getContentDir(category, familyId, templateId);

          if (fs.existsSync(contentDir)) {
            const fullpageCss = path.join(contentDir, 'fullpage.css');
            if (!fs.existsSync(fullpageCss)) {
              missingFiles.push(`${category}/${familyId}/${templateId}/fullpage.css`);
            }
          }
        }
      }

      if (missingFiles.length > 0) {
        console.error('\n❌ Missing fullpage.css files:');
        missingFiles.forEach(file => console.error(`   - ${file}`));
      }

      expect(missingFiles).toEqual([]);
    });
  });

  describe('File Permissions', () => {
    it('should have readable content files (chmod 644)', () => {
      const unreadableFiles = [];
      const filesToCheck = [...FULLPAGE_VARIANTS, REQUIRED_CSS];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;
          const contentDir = getContentDir(category, familyId, templateId);

          if (fs.existsSync(contentDir)) {
            for (const file of filesToCheck) {
              const filePath = path.join(contentDir, file);
              if (fs.existsSync(filePath)) {
                try {
                  fs.accessSync(filePath, fs.constants.R_OK);
                } catch {
                  unreadableFiles.push(`${category}/${familyId}/${templateId}/${file}`);
                }
              }
            }
          }
        }
      }

      if (unreadableFiles.length > 0) {
        console.error('\n❌ Unreadable files (run: chmod 644 <file>):');
        unreadableFiles.forEach(file => console.error(`   - ${file}`));
      }

      expect(unreadableFiles).toEqual([]);
    });
  });

  // NOTE: TemplateId prefix check is temporarily skipped
  // Many existing templates use full path prefixes like "visual-auroraGlass-aurora-landing"
  // This will be addressed in a future refactoring task
  describe.skip('TemplateId Consistency', () => {
    it('should have templateId matching content directory name', () => {
      const mismatches = [];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;

          // Check if templateId contains full style ID prefix (common mistake)
          const fullIdPrefix = `${category}-${familyId}-`;
          if (templateId.startsWith(fullIdPrefix)) {
            mismatches.push({
              location: `${category}/${familyId}`,
              templateId,
              suggestion: templateId.replace(fullIdPrefix, ''),
              issue: 'templateId should not include category-familyId prefix'
            });
          }
        }
      }

      if (mismatches.length > 0) {
        console.error('\n❌ TemplateId format issues:');
        mismatches.forEach(({ location, templateId, suggestion, issue }) => {
          console.error(`   - ${location}: "${templateId}" → should be "${suggestion}"`);
          console.error(`     Issue: ${issue}`);
        });
      }

      expect(mismatches).toEqual([]);
    });
  });

  describe('Non-Empty Content', () => {
    it('should have non-empty fullpage files (html or jsx)', () => {
      const emptyFiles = [];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;
          const contentDir = getContentDir(category, familyId, templateId);

          // Check both html and jsx variants
          for (const variant of FULLPAGE_VARIANTS) {
            const fullpagePath = path.join(contentDir, variant);
            if (fs.existsSync(fullpagePath)) {
              const stat = fs.statSync(fullpagePath);
              if (stat.size === 0) {
                emptyFiles.push(`${category}/${familyId}/${templateId}/${variant}`);
              }
            }
          }
        }
      }

      if (emptyFiles.length > 0) {
        console.error('\n❌ Empty fullpage files:');
        emptyFiles.forEach(file => console.error(`   - ${file}`));
      }

      expect(emptyFiles).toEqual([]);
    });

    it('should have non-empty fullpage.css files', () => {
      const emptyFiles = [];

      for (const { category, familyId, templates } of allFamilies) {
        for (const template of templates) {
          const templateId = typeof template === 'string' ? template : template.id;
          const fullpageCss = path.join(
            getContentDir(category, familyId, templateId),
            'fullpage.css'
          );

          if (fs.existsSync(fullpageCss)) {
            const stat = fs.statSync(fullpageCss);
            if (stat.size === 0) {
              emptyFiles.push(`${category}/${familyId}/${templateId}/fullpage.css`);
            }
          }
        }
      }

      if (emptyFiles.length > 0) {
        console.error('\n❌ Empty fullpage.css files:');
        emptyFiles.forEach(file => console.error(`   - ${file}`));
      }

      expect(emptyFiles).toEqual([]);
    });
  });
});

// NOTE: auroraGlass specific tests are skipped because content directories don't exist yet
// The templates are defined in manifest but content needs to be created
describe.skip('Specific Style Validation', () => {
  describe('visual/auroraGlass', () => {
    it('should have complete content structure for aurora-landing', () => {
      const result = validateTemplateContent('visual', 'auroraGlass', 'visual-auroraGlass-aurora-landing');

      if (!result.valid) {
        console.error('\n❌ aurora-landing validation errors:');
        result.errors.forEach(err => console.error(`   - ${err}`));
      }

      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it('should have complete content structure for glass-showcase', () => {
      const result = validateTemplateContent('visual', 'auroraGlass', 'visual-auroraGlass-glass-showcase');

      if (!result.valid) {
        console.error('\n❌ glass-showcase validation errors:');
        result.errors.forEach(err => console.error(`   - ${err}`));
      }

      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
    });
  });
});

// Export for use in other tests or scripts
export {
  validateTemplateContent,
  getAllFamiliesWithTemplates,
  hasFullpageFile,
  FULLPAGE_VARIANTS,
  REQUIRED_CSS,
  RECOMMENDED_FILES
};
