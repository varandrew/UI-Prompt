#!/usr/bin/env node
/**
 * SEO Validator for UI Style Prompt
 * Validates SEO elements across all pages including meta tags, JSON-LD, and more
 *
 * Usage:
 *   node scripts/seo-validator.js              # Console output
 *   node scripts/seo-validator.js --output json # JSON report
 *   node scripts/seo-validator.js --fail-on-error # Exit with error code if issues found
 *
 * Prerequisites:
 *   - Build the project first: npm run build
 *   - Start preview server: npx vite preview --port 4173
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:4173';
const LANGUAGES = ['zh', 'en'];
const OUTPUT_DIR = path.join(__dirname, '../public');
const REPORTS_DIR = path.join(__dirname, '../reports');

// Required meta tags and their validation rules
const META_RULES = {
  title: {
    selector: 'title',
    required: true,
    minLength: 10,
    maxLength: 70,
    description: 'Page title',
  },
  description: {
    selector: 'meta[name="description"]',
    attr: 'content',
    required: true,
    minLength: 50,
    maxLength: 160,
    description: 'Meta description',
  },
  canonical: {
    selector: 'link[rel="canonical"]',
    attr: 'href',
    required: true,
    pattern: /^https:\/\//,
    description: 'Canonical URL',
  },
  'og:title': {
    selector: 'meta[property="og:title"]',
    attr: 'content',
    required: true,
    minLength: 10,
    description: 'Open Graph title',
  },
  'og:description': {
    selector: 'meta[property="og:description"]',
    attr: 'content',
    required: true,
    minLength: 30,
    description: 'Open Graph description',
  },
  'og:image': {
    selector: 'meta[property="og:image"]',
    attr: 'content',
    required: true,
    pattern: /^https:\/\/.+\.(png|jpg|jpeg|webp|gif)$/i,
    description: 'Open Graph image',
  },
  'og:url': {
    selector: 'meta[property="og:url"]',
    attr: 'content',
    required: true,
    pattern: /^https:\/\//,
    description: 'Open Graph URL',
  },
  'twitter:card': {
    selector: 'meta[name="twitter:card"]',
    attr: 'content',
    required: true,
    allowedValues: ['summary', 'summary_large_image', 'app', 'player'],
    description: 'Twitter card type',
  },
  'hreflang:zh': {
    selector: 'link[hreflang="zh-CN"]',
    attr: 'href',
    required: true,
    description: 'Chinese alternate link',
  },
  'hreflang:en': {
    selector: 'link[hreflang="en-US"]',
    attr: 'href',
    required: true,
    description: 'English alternate link',
  },
};

// JSON-LD schema validation rules
const SCHEMA_RULES = {
  required: ['@context', '@type'],
  validTypes: [
    'WebSite',
    'Organization',
    'ItemList',
    'CreativeWork',
    'SoftwareSourceCode',
    'BreadcrumbList',
    'FAQPage',
    'Article',
  ],
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  return {
    outputJson: args.includes('--output') && args.includes('json'),
    failOnError: args.includes('--fail-on-error'),
    verbose: args.includes('--verbose') || args.includes('-v'),
    source: args.includes('--source') || args.includes('-s'),
  };
}

/**
 * Get list of pages to validate from sitemap
 */
function getPagesToValidate() {
  const pages = [];

  // Static pages
  for (const lang of LANGUAGES) {
    pages.push({ url: `/${lang}`, name: `Home (${lang})` });
    pages.push({ url: `/${lang}/styles`, name: `Styles (${lang})` });
    pages.push({ url: `/${lang}/components`, name: `Components (${lang})` });
    pages.push({ url: `/${lang}/about`, name: `About (${lang})` });
  }

  // Dynamic pages from styles-index.json
  const stylesIndexPath = path.join(OUTPUT_DIR, 'data/styles-index.json');
  if (fs.existsSync(stylesIndexPath)) {
    try {
      const stylesIndex = JSON.parse(fs.readFileSync(stylesIndexPath, 'utf-8'));
      if (stylesIndex?.categories) {
        for (const [, category] of Object.entries(stylesIndex.categories)) {
          if (category.families) {
            for (const family of category.families) {
              for (const lang of LANGUAGES) {
                pages.push({
                  url: `/${lang}/styles/preview/${family.familyId}`,
                  name: `Style: ${family.familyId} (${lang})`,
                });
              }
            }
          }
        }
      }
    } catch (e) {
      console.warn('⚠️  Could not load styles-index.json:', e.message);
    }
  }

  return pages;
}

/**
 * Parse CSS-like selector into tag name and attribute parts
 * e.g., "meta[property='og:title']" => { tag: 'meta', attr: 'property', value: 'og:title' }
 */
function parseSelector(selector) {
  // Match patterns like: tag[attr="value"] or tag[attr='value']
  // Use explicit character codes to avoid encoding issues
  const quoteChars = '"\u0027'; // double quote and single quote
  const regex = new RegExp(`^(\\w+)\\[([^=]+)=[${quoteChars}]([^${quoteChars}]+)[${quoteChars}]\\]$`);
  const match = selector.match(regex);
  if (match) {
    return { tag: match[1], attr: match[2], value: match[3] };
  }
  // Simple tag selector
  return { tag: selector, attr: null, value: null };
}

/**
 * Validate a single meta tag rule against HTML content
 */
function validateMetaRule(html, ruleName, rule) {
  const result = {
    name: ruleName,
    description: rule.description,
    status: 'pass',
    value: null,
    issues: [],
  };

  // Simple regex-based extraction (works without browser)
  let value = null;

  if (ruleName === 'title') {
    const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    value = match ? match[1].trim() : null;
  } else {
    const parsed = parseSelector(rule.selector);
    const targetAttr = rule.attr; // 'content' or 'href'

    if (parsed.attr && parsed.value) {
      // Build regex to match: <tag ... attr="value" ... targetAttr="(capture)" ...>
      // Support both attribute orders
      const escapedValue = parsed.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      // Use explicit quote characters to avoid encoding issues
      const Q = '"\u0027'; // double quote + single quote (using unicode escape)

      // Pattern 1: attr before targetAttr
      const regex1 = new RegExp(
        '<' + parsed.tag + '[^>]*' + parsed.attr + '=[' + Q + ']' + escapedValue + '[' + Q + '][^>]*' + targetAttr + '=[' + Q + ']([^' + Q + ']+)[' + Q + ']',
        'i'
      );
      let match = html.match(regex1);

      // Pattern 2: targetAttr before attr
      if (!match) {
        const regex2 = new RegExp(
          '<' + parsed.tag + '[^>]*' + targetAttr + '=[' + Q + ']([^' + Q + ']+)[' + Q + '][^>]*' + parsed.attr + '=[' + Q + ']' + escapedValue + '[' + Q + ']',
          'i'
        );
        match = html.match(regex2);
      }

      value = match ? match[1] : null;
    } else {
      // Simple tag + attr match
      const Q = '"\u0027';
      const regex = new RegExp(
        '<' + parsed.tag + '[^>]*' + targetAttr + '=[' + Q + ']([^' + Q + ']+)[' + Q + ']',
        'i'
      );
      const match = html.match(regex);
      value = match ? match[1] : null;
    }
  }

  result.value = value;

  // Validate
  if (rule.required && !value) {
    result.status = 'error';
    result.issues.push(`Missing required ${rule.description}`);
  } else if (value) {
    if (rule.minLength && value.length < rule.minLength) {
      result.status = 'warning';
      result.issues.push(`${rule.description} too short (${value.length} < ${rule.minLength})`);
    }
    if (rule.maxLength && value.length > rule.maxLength) {
      result.status = 'warning';
      result.issues.push(`${rule.description} too long (${value.length} > ${rule.maxLength})`);
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      result.status = 'warning';
      result.issues.push(`${rule.description} does not match expected pattern`);
    }
    if (rule.allowedValues && !rule.allowedValues.includes(value)) {
      result.status = 'warning';
      result.issues.push(`${rule.description} has unexpected value: ${value}`);
    }
  }

  return result;
}

/**
 * Validate JSON-LD structured data in HTML
 */
function validateJsonLd(html) {
  const results = [];
  const jsonLdRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      const schemas = Array.isArray(data) ? data : [data];

      for (const schema of schemas) {
        const result = {
          type: schema['@type'] || 'Unknown',
          status: 'pass',
          issues: [],
        };

        // Check required fields
        for (const field of SCHEMA_RULES.required) {
          if (!schema[field]) {
            result.status = 'error';
            result.issues.push(`Missing required field: ${field}`);
          }
        }

        // Validate @type
        if (schema['@type'] && !SCHEMA_RULES.validTypes.includes(schema['@type'])) {
          result.status = 'warning';
          result.issues.push(`Unknown schema type: ${schema['@type']}`);
        }

        // Check @context
        if (schema['@context'] && !schema['@context'].includes('schema.org')) {
          result.status = 'warning';
          result.issues.push(`Unexpected @context: ${schema['@context']}`);
        }

        results.push(result);
      }
    } catch (e) {
      results.push({
        type: 'ParseError',
        status: 'error',
        issues: [`Invalid JSON-LD: ${e.message}`],
      });
    }
  }

  if (results.length === 0) {
    results.push({
      type: 'None',
      status: 'warning',
      issues: ['No JSON-LD structured data found'],
    });
  }

  return results;
}

/**
 * Validate a single page (static analysis of built HTML)
 * @param {string} pagePath - The page path being validated
 * @param {boolean} useSource - If true, validate source index.html instead of dist
 */
async function validatePage(pagePath, useSource = false) {
  const result = {
    url: pagePath,
    meta: {},
    jsonLd: [],
    status: 'pass',
    errorCount: 0,
    warningCount: 0,
  };

  // Choose between source or built index.html
  const indexHtmlPath = useSource
    ? path.join(__dirname, '../index.html')
    : path.join(__dirname, '../dist/index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    result.status = 'error';
    result.errorCount = 1;
    result.meta.build = {
      name: 'build',
      status: 'error',
      issues: [useSource
        ? 'index.html not found.'
        : 'dist/index.html not found. Run npm run build first.'],
    };
    return result;
  }

  const html = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Validate meta tags (static defaults from index.html)
  for (const [ruleName, rule] of Object.entries(META_RULES)) {
    const metaResult = validateMetaRule(html, ruleName, rule);
    result.meta[ruleName] = metaResult;

    if (metaResult.status === 'error') {
      result.errorCount++;
      result.status = 'error';
    } else if (metaResult.status === 'warning') {
      result.warningCount++;
      if (result.status === 'pass') {
        result.status = 'warning';
      }
    }
  }

  // Validate JSON-LD
  result.jsonLd = validateJsonLd(html);
  for (const schema of result.jsonLd) {
    if (schema.status === 'error') {
      result.errorCount++;
      result.status = 'error';
    } else if (schema.status === 'warning') {
      result.warningCount++;
      if (result.status === 'pass') {
        result.status = 'warning';
      }
    }
  }

  return result;
}

/**
 * Format and print console output
 */
function printConsoleReport(results, summary) {
  console.log('\n🔍 SEO Validation Report');
  console.log('========================\n');

  for (const result of results) {
    const icon = result.status === 'pass' ? '✅' : result.status === 'warning' ? '⚠️' : '❌';
    console.log(`${icon} ${result.url}`);

    // Meta tags
    for (const [, meta] of Object.entries(result.meta)) {
      const metaIcon = meta.status === 'pass' ? '✅' : meta.status === 'warning' ? '⚠️' : '❌';
      const valueStr = meta.value
        ? `"${meta.value.substring(0, 50)}${meta.value.length > 50 ? '...' : ''}"${meta.value.length ? ` (${meta.value.length} chars)` : ''}`
        : '(missing)';
      console.log(`   ${metaIcon} ${meta.name}: ${valueStr}`);
      for (const issue of meta.issues) {
        console.log(`      ⚠️  ${issue}`);
      }
    }

    // JSON-LD
    if (result.jsonLd.length > 0) {
      console.log('   📊 JSON-LD:');
      for (const schema of result.jsonLd) {
        const schemaIcon =
          schema.status === 'pass' ? '✅' : schema.status === 'warning' ? '⚠️' : '❌';
        console.log(`      ${schemaIcon} ${schema.type}`);
        for (const issue of schema.issues) {
          console.log(`         ⚠️  ${issue}`);
        }
      }
    }

    console.log('');
  }

  // Summary
  console.log('📊 Summary');
  console.log('==========');
  console.log(`   Total pages checked: ${summary.totalPages}`);
  console.log(`   ✅ Passed: ${summary.passed}`);
  console.log(`   ⚠️  Warnings: ${summary.warnings}`);
  console.log(`   ❌ Errors: ${summary.errors}`);
  console.log('');

  if (summary.errors > 0) {
    console.log('❌ SEO validation found errors. Please fix them before deployment.');
  } else if (summary.warnings > 0) {
    console.log('⚠️  SEO validation passed with warnings. Consider addressing them.');
  } else {
    console.log('✅ SEO validation passed! All checks are green.');
  }
}

/**
 * Save JSON report
 */
function saveJsonReport(results, summary) {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const report = {
    timestamp: new Date().toISOString(),
    summary,
    pages: results,
  };

  const reportPath = path.join(REPORTS_DIR, 'seo-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 JSON report saved to: ${reportPath}`);
}

/**
 * Main function
 */
async function main() {
  const args = parseArgs();

  console.log('🔍 UI Style Prompt - SEO Validator');
  console.log('===================================\n');

  // Note: For full SPA validation, we'd need Puppeteer
  // This version does static analysis of index.html defaults
  if (args.source) {
    console.log('📝 Mode: Validating SOURCE index.html (dev mode).');
    console.log('   Use without --source to validate dist/index.html.\n');
  } else {
    console.log('📝 Mode: Validating BUILT dist/index.html.');
    console.log('   Use --source or -s to validate source index.html.\n');
  }

  // Validate index.html (static defaults)
  const results = [await validatePage('/index.html', args.source)];

  // Calculate summary
  const summary = {
    totalPages: results.length,
    passed: results.filter((r) => r.status === 'pass').length,
    warnings: results.filter((r) => r.status === 'warning').length,
    errors: results.filter((r) => r.status === 'error').length,
  };

  // Output
  if (args.outputJson) {
    saveJsonReport(results, summary);
  } else {
    printConsoleReport(results, summary);
  }

  // Also save JSON report if not console-only
  if (!args.outputJson) {
    saveJsonReport(results, summary);
  }

  // Exit code
  if (args.failOnError && summary.errors > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('❌ SEO validation failed:', err);
  process.exit(1);
});
