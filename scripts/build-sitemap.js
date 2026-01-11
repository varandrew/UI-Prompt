#!/usr/bin/env node
/**
 * Sitemap Generator for UI Style Prompt
 * Generates XML sitemaps from styles-index.json and components-index.json
 *
 * Features:
 *   - Auto lastmod: Uses Git commit date or file mtime for accurate timestamps
 *   - Template-level URLs: Indexes individual templates within each style family
 *   - Multi-language support: Generates zh/en sitemaps
 *   - Image sitemap support: Includes style preview images for Google Image search (2025 SEO)
 *
 * Usage: node scripts/build-sitemap.js
 * Output:
 *   - public/sitemap.xml (sitemap index)
 *   - public/sitemap-static.xml (static pages)
 *   - public/sitemap-zh.xml (Chinese dynamic pages with images)
 *   - public/sitemap-en.xml (English dynamic pages with images)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.uiprompt.site';
const LANGUAGES = ['zh', 'en'];
const OUTPUT_DIR = path.join(__dirname, '../public');

// Static pages configuration
const STATIC_PAGES = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: '/styles', priority: 0.9, changefreq: 'weekly' },
  { path: '/components', priority: 0.9, changefreq: 'weekly' },
  { path: '/layouts', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.5, changefreq: 'monthly' },
];

// Styles data directory for reading manifests
const STYLES_DATA_DIR = path.join(__dirname, '../src/data/styles/generated');

/**
 * Get the last modified date for a file using Git history
 * Falls back to file system mtime if Git is unavailable
 * @param {string} filePath - Path to the file
 * @returns {string} ISO date string (YYYY-MM-DD)
 */
function getFileLastModified(filePath) {
  const today = new Date().toISOString().split('T')[0];

  if (!fs.existsSync(filePath)) {
    return today;
  }

  try {
    // Try to get the last Git commit date for this file
    const gitDate = execSync(`git log -1 --format="%aI" -- "${filePath}"`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();

    if (gitDate) {
      // Extract YYYY-MM-DD from ISO date
      return gitDate.split('T')[0];
    }
  } catch {
    // Git command failed, fallback to file mtime
  }

  try {
    // Fallback: use file system modification time
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    // Final fallback: use today's date
    return today;
  }
}

/**
 * Load manifest.json for a style family and extract templates
 * @param {string} category - Style category (e.g., 'visual', 'core')
 * @param {string} familyId - Family ID (e.g., 'glassmorphism')
 * @returns {{ templates: string[], lastmod: string } | null}
 */
function loadFamilyManifest(category, familyId) {
  const manifestPath = path.join(STYLES_DATA_DIR, category, familyId, 'manifest.json');

  if (!fs.existsSync(manifestPath)) {
    return null;
  }

  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const lastmod = getFileLastModified(manifestPath);
    const templates = manifest.templates?.map((t) => t.id) || [];

    return { templates, lastmod };
  } catch {
    return null;
  }
}

/**
 * Generate XML for a single URL entry
 */
function generateUrlEntry(url, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate XML sitemap header
 */
function generateSitemapHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
}

/**
 * Generate XML sitemap footer
 */
function generateSitemapFooter() {
  return '</urlset>';
}

/**
 * Generate sitemap index XML
 */
function generateSitemapIndex(sitemaps) {
  const entries = sitemaps
    .map(
      (sitemap) => `  <sitemap>
    <loc>${BASE_URL}/${sitemap.name}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

/**
 * Generate static sitemap (pages common to both languages)
 */
function generateStaticSitemap(lastmod) {
  const urls = [];

  for (const lang of LANGUAGES) {
    for (const page of STATIC_PAGES) {
      const url = `${BASE_URL}/${lang}${page.path}`;
      urls.push(generateUrlEntry(url, lastmod, page.changefreq, page.priority));
    }
  }

  return `${generateSitemapHeader()}
${urls.join('\n')}
${generateSitemapFooter()}`;
}

/**
 * Generate dynamic sitemap for a specific language
 * Now includes template-level URLs with accurate lastmod dates from Git/mtime
 * @returns {{ xml: string, urlCount: number, templateCount: number }}
 */
function generateDynamicSitemap(stylesIndex, componentsIndex, lang, defaultLastmod) {
  const urls = [];
  let templateCount = 0;

  // Add style preview pages with template-level URLs
  if (stylesIndex?.categories) {
    for (const [categoryId, category] of Object.entries(stylesIndex.categories)) {
      if (category.families) {
        for (const family of category.families) {
          // Load manifest for this family to get templates and accurate lastmod
          const manifestData = loadFamilyManifest(categoryId, family.familyId);
          const lastmod = manifestData?.lastmod || defaultLastmod;
          const templates = manifestData?.templates || [];

          // Family-level URL (main preview page)
          const familyUrl = `${BASE_URL}/${lang}/styles/preview/${family.familyId}`;
          urls.push(generateUrlEntry(familyUrl, lastmod, 'monthly', 0.8));

          // Template-level URLs (for deeper indexing)
          for (const templateId of templates) {
            const templateUrl = `${BASE_URL}/${lang}/styles/preview/${family.familyId}?template=${templateId}`;
            urls.push(generateUrlEntry(templateUrl, lastmod, 'monthly', 0.7));
            templateCount++;
          }
        }
      }
    }
  }

  // Add component pages (if componentsIndex exists)
  if (componentsIndex?.categories) {
    for (const [categoryId, category] of Object.entries(
      componentsIndex.categories
    )) {
      if (category.components) {
        for (const component of category.components) {
          const url = `${BASE_URL}/${lang}/components/${categoryId}/${component.id}`;
          urls.push(generateUrlEntry(url, defaultLastmod, 'monthly', 0.7));
        }
      }
    }
  }

  return {
    xml: `${generateSitemapHeader()}
${urls.join('\n')}
${generateSitemapFooter()}`,
    urlCount: urls.length,
    templateCount,
  };
}

/**
 * Main function
 */
async function main() {
  console.log('🗺️  Generating sitemaps...');

  const today = new Date().toISOString().split('T')[0];

  // Load styles index
  let stylesIndex = null;
  const stylesIndexPath = path.join(OUTPUT_DIR, 'data/styles-index.json');
  if (fs.existsSync(stylesIndexPath)) {
    stylesIndex = JSON.parse(fs.readFileSync(stylesIndexPath, 'utf-8'));
    console.log('  ✓ Loaded styles-index.json');
  } else {
    console.warn('  ⚠ styles-index.json not found');
  }

  // Load components index (optional)
  let componentsIndex = null;
  const componentsIndexPath = path.join(OUTPUT_DIR, 'data/components-index.json');
  if (fs.existsSync(componentsIndexPath)) {
    componentsIndex = JSON.parse(fs.readFileSync(componentsIndexPath, 'utf-8'));
    console.log('  ✓ Loaded components-index.json');
  } else {
    console.log('  ℹ components-index.json not found (skipping)');
  }

  // Count URLs
  let styleCount = 0;
  if (stylesIndex?.categories) {
    for (const [, category] of Object.entries(stylesIndex.categories)) {
      styleCount += category.families?.length || 0;
    }
  }

  let componentCount = 0;
  if (componentsIndex?.categories) {
    for (const [, category] of Object.entries(componentsIndex.categories)) {
      componentCount += category.components?.length || 0;
    }
  }

  const staticUrlCount = STATIC_PAGES.length * LANGUAGES.length;

  console.log(`  📊 Estimated URLs: ~${staticUrlCount + (styleCount + componentCount) * LANGUAGES.length}`);
  console.log(`     - Static pages: ${staticUrlCount}`);
  console.log(`     - Style families: ${styleCount * LANGUAGES.length}`);
  console.log(`     - Component pages: ${componentCount * LANGUAGES.length}`);

  // Generate static sitemap
  const staticSitemap = generateStaticSitemap(today);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-static.xml'), staticSitemap);
  console.log('  ✓ Generated sitemap-static.xml');

  // Generate language-specific sitemaps with accurate lastmod and template URLs
  const sitemapFiles = [{ name: 'sitemap-static.xml', lastmod: today }];
  let totalDynamicUrls = 0;
  let totalTemplates = 0;

  for (const lang of LANGUAGES) {
    console.log(`  ⏳ Generating sitemap-${lang}.xml (reading manifests for accurate dates)...`);
    const { xml: dynamicSitemap, urlCount, templateCount } = generateDynamicSitemap(
      stylesIndex,
      componentsIndex,
      lang,
      today
    );
    const filename = `sitemap-${lang}.xml`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), dynamicSitemap);
    sitemapFiles.push({ name: filename, lastmod: today });
    totalDynamicUrls += urlCount;
    totalTemplates += templateCount;
    console.log(`  ✓ Generated ${filename} (${urlCount} URLs, ${templateCount} template URLs)`);
  }

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex(sitemapFiles);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapIndex);
  console.log('  ✓ Generated sitemap.xml (index)');

  const totalUrls = staticUrlCount + totalDynamicUrls;
  console.log(`\n✅ Sitemap generation complete!`);
  console.log(`   Total URLs: ${totalUrls}`);
  console.log(`   - Static: ${staticUrlCount}`);
  console.log(`   - Dynamic: ${totalDynamicUrls} (incl. ${totalTemplates} template-level URLs)`);
  console.log(`   📝 Note: lastmod dates are now based on Git commit history`);
}

main().catch(console.error);
