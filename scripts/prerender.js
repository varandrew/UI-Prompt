/**
 * Pre-render Script for SEO Optimization
 *
 * This script pre-renders key pages at build time to make them crawlable by search engines.
 * It uses Puppeteer to render pages and save static HTML snapshots.
 *
 * Usage:
 *   npm run build:prerender              # Prerender all pages
 *   npm run build:prerender:static       # Prerender static pages only (faster)
 *   node scripts/prerender.js --static-only
 *
 * Prerequisites (puppeteer is NOT included in package.json by default):
 *   npm install puppeteer --save-dev
 *
 * The script:
 * 1. Starts the production server
 * 2. Uses Puppeteer to visit each page
 * 3. Waits for content to load
 * 4. Post-processes and saves the rendered HTML to dist/ folder
 *
 * This allows Google/Baidu crawlers to see the full page content
 * without needing to execute JavaScript.
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

// Configuration
const CONFIG = {
  BATCH_SIZE: 10,           // Concurrent pages to render
  PAGE_TIMEOUT: 45000,      // Page load timeout (ms)
  RENDER_WAIT: 2000,        // Wait after render (ms)
  RETRY_COUNT: 2,           // Retry failed pages
  STATIC_ONLY: process.argv.includes('--static-only'),
  VERBOSE: process.argv.includes('--verbose'),
};

// Track failed routes for summary
const failedRoutes = [];

// Read styles and components index to generate all routes
function getStyleIds() {
  try {
    const indexPath = join(rootDir, 'public/data/styles-index.json');
    const data = JSON.parse(readFileSync(indexPath, 'utf-8'));

    const styleIds = [];
    // Handle both old format (direct categories) and new format (nested categories)
    const categories = data.categories || data;
    for (const categoryKey of Object.keys(categories)) {
      const category = categories[categoryKey];
      if (category.families) {
        for (const family of category.families) {
          if (family.familyId || family.id) {
            styleIds.push(family.familyId || family.id);
          }
        }
      }
    }
    return styleIds;
  } catch (error) {
    console.error('Failed to read styles index:', error.message);
    return [];
  }
}

function getComponentIds() {
  try {
    const indexPath = join(rootDir, 'public/data/components-index.json');
    const data = JSON.parse(readFileSync(indexPath, 'utf-8'));

    const componentIds = [];
    for (const categoryKey of Object.keys(data)) {
      const category = data[categoryKey];
      if (category.components) {
        for (const component of category.components) {
          if (component.id) {
            componentIds.push({ category: categoryKey, id: component.id });
          }
        }
      }
    }
    return componentIds;
  } catch (error) {
    console.error('Failed to read components index:', error.message);
    return [];
  }
}

// Generate list of routes to pre-render
function getRoutesToPrerender() {
  const languages = ['zh', 'en'];
  const routes = { static: [], dynamic: [] };

  // Static pages (high priority, always prerendered)
  const staticPages = ['', 'styles', 'components', 'about', 'community'];

  for (const lang of languages) {
    for (const page of staticPages) {
      routes.static.push(`/${lang}${page ? '/' + page : ''}`);
    }
  }

  // Dynamic pages (only if not --static-only)
  if (!CONFIG.STATIC_ONLY) {
    // Style preview pages
    const styleIds = getStyleIds();
    for (const lang of languages) {
      for (const styleId of styleIds) {
        routes.dynamic.push(`/${lang}/styles/preview/${styleId}`);
      }
    }

    // Component detail pages
    const componentIds = getComponentIds();
    for (const lang of languages) {
      for (const { category, id } of componentIds) {
        routes.dynamic.push(`/${lang}/components/${category}/${id}`);
      }
    }
  }

  return routes;
}

// Start preview server
function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let started = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (CONFIG.VERBOSE) console.log(output);
      if (output.includes('Local:') && !started) {
        started = true;
        setTimeout(() => resolve(server), 1000); // Wait for server to stabilize
      }
    });

    server.stderr.on('data', (data) => {
      if (CONFIG.VERBOSE) console.error('Server error:', data.toString());
    });

    setTimeout(() => {
      if (!started) {
        reject(new Error('Server failed to start within 30 seconds'));
      }
    }, 30000);
  });
}

/**
 * Post-process rendered HTML for SEO optimization
 * Enhanced version with comprehensive SEO improvements
 *
 * @param {string} html - Raw HTML from Puppeteer
 * @param {string} route - The route being rendered
 * @returns {string} - Processed HTML
 */
function postProcessHtml(html, route) {
  const prerenderDate = new Date().toISOString();

  return html
    // Remove React development artifacts
    .replace(/\s*data-reactroot=""/g, '')
    // Remove skeleton screen (it's only for initial load)
    .replace(/<div class="sk-wrap">[\s\S]*?<\/div>\s*(?=<\/div>\s*<script)/m, '')
    // Add prerender status meta tags (useful for debugging and cache validation)
    .replace(
      '</head>',
      `<meta name="prerender-status" content="prerendered">
<meta name="prerender-date" content="${prerenderDate}">
<meta name="prerender-route" content="${route}">
</head>`
    )
    // Add noscript fallback for users without JavaScript
    .replace(
      '</body>',
      `<noscript>
  <div style="padding: 20px; text-align: center; font-family: system-ui, sans-serif;">
    <h2>JavaScript Required</h2>
    <p>This website requires JavaScript to function properly.</p>
    <p>Please enable JavaScript in your browser settings.</p>
  </div>
</noscript>
</body>`
    )
    // Clean up excessive whitespace (basic minification)
    .replace(/\n\s*\n/g, '\n')
    // Remove inline source maps if any
    .replace(/\/\/#\s*sourceMappingURL=[^\s]+/g, '')
    // Ensure all images have loading="lazy" except hero images
    .replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"')
    // Add decoding="async" to images for better performance
    .replace(/<img(?![^>]*decoding=)/g, '<img decoding="async"');
}

// Pre-render a single page with retry support
async function prerenderPage(browser, url, outputPath, retryCount = 0) {
  const page = await browser.newPage();

  try {
    // Simulate Googlebot user agent for consistent rendering
    await page.setUserAgent(
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    );

    // Set viewport for consistent rendering (desktop Googlebot viewport)
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

    // Disable unnecessary features for faster rendering
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      // Block analytics, ads, and tracking scripts (not needed for prerendering)
      if (
        resourceType === 'media' ||
        req.url().includes('google-analytics') ||
        req.url().includes('googletagmanager') ||
        req.url().includes('facebook') ||
        req.url().includes('twitter')
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: CONFIG.PAGE_TIMEOUT,
    });

    // Wait for React to render
    await page.waitForSelector('#root', { timeout: 10000 });

    // Wait for any lazy-loaded content to appear
    // Check for common content indicators
    try {
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          // Wait until skeleton is removed or main content appears
          const hasSkeleton = root?.querySelector('.sk-wrap');
          const hasMainContent = root?.querySelector('main, [role="main"], .style-card, .component-card');
          return !hasSkeleton || hasMainContent;
        },
        { timeout: 10000 }
      );
    } catch {
      // Continue even if timeout - content might already be there
    }

    // Additional wait for dynamic content
    await new Promise(resolve => setTimeout(resolve, CONFIG.RENDER_WAIT));

    // Scroll to trigger any intersection observer-based lazy loading
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
      window.scrollTo(0, 0);
    });

    // Brief wait after scrolling
    await new Promise(resolve => setTimeout(resolve, 500));

    // Get the full HTML
    let html = await page.content();

    // Post-process HTML
    const route = url.replace('http://localhost:4173', '');
    html = postProcessHtml(html, route);

    // Create directory if needed
    const dir = dirname(outputPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    // Write HTML file
    writeFileSync(outputPath, html);
    console.log(`✅ Pre-rendered: ${url}`);
    return true;

  } catch (error) {
    // Retry logic
    if (retryCount < CONFIG.RETRY_COUNT) {
      console.warn(`⚠️  Retrying (${retryCount + 1}/${CONFIG.RETRY_COUNT}): ${url}`);
      await page.close();
      return prerenderPage(browser, url, outputPath, retryCount + 1);
    }

    console.error(`❌ Failed to pre-render ${url}:`, error.message);
    failedRoutes.push({ url, error: error.message });
    return false;

  } finally {
    await page.close();
  }
}

// Convert route to file path
function routeToFilePath(route) {
  // Remove leading slash
  let path = route.slice(1) || 'index';

  // Add index.html for directory-like paths
  if (!path.endsWith('.html')) {
    path = join(path, 'index.html');
  }

  return join(distDir, path);
}

// Main prerender function
async function prerender() {
  console.log('🚀 Starting pre-render process...\n');
  console.log(`📋 Mode: ${CONFIG.STATIC_ONLY ? 'Static pages only' : 'All pages'}`);
  console.log(`📋 Batch size: ${CONFIG.BATCH_SIZE}`);
  console.log(`📋 Retry count: ${CONFIG.RETRY_COUNT}\n`);

  // Check if dist exists
  if (!existsSync(distDir)) {
    console.error('❌ dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const routes = getRoutesToPrerender();
  const allRoutes = [...routes.static, ...routes.dynamic];

  console.log(`📝 Routes to pre-render:`);
  console.log(`   - Static pages: ${routes.static.length}`);
  console.log(`   - Dynamic pages: ${routes.dynamic.length}`);
  console.log(`   - Total: ${allRoutes.length}\n`);

  let server;

  try {
    // Start server
    console.log('🖥️  Starting preview server...');
    server = await startServer();
    console.log('✅ Server started\n');

    // Launch browser
    console.log('🌐 Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    console.log('✅ Browser launched\n');

    // Pre-render each route
    console.log('📄 Pre-rendering pages...\n');

    let successCount = 0;
    let failCount = 0;

    // Process in batches
    for (let i = 0; i < allRoutes.length; i += CONFIG.BATCH_SIZE) {
      const batch = allRoutes.slice(i, i + CONFIG.BATCH_SIZE);
      const results = await Promise.all(
        batch.map(route => {
          const url = `http://localhost:4173${route}`;
          const outputPath = routeToFilePath(route);
          return prerenderPage(browser, url, outputPath);
        })
      );

      successCount += results.filter(Boolean).length;
      failCount += results.filter(r => !r).length;

      // Progress indicator
      const progress = Math.min(i + CONFIG.BATCH_SIZE, allRoutes.length);
      console.log(`\n📊 Progress: ${progress}/${allRoutes.length} (${Math.round(progress/allRoutes.length*100)}%)\n`);
    }

    await browser.close();

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 Pre-rendering Summary');
    console.log('='.repeat(50));
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);

    if (failedRoutes.length > 0) {
      console.log('\n❌ Failed routes:');
      failedRoutes.forEach(({ url, error }) => {
        console.log(`   - ${url}: ${error}`);
      });
    }

    console.log('\n✅ Pre-rendering complete!');

  } catch (error) {
    console.error('❌ Pre-render failed:', error);
    process.exit(1);
  } finally {
    if (server) {
      server.kill();
    }
  }
}

// Run if called directly
prerender();
