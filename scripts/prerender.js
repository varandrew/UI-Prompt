/**
 * Pre-render Script for SEO Optimization
 *
 * This script pre-renders key pages at build time to make them crawlable by search engines.
 * It uses Puppeteer to render pages and save static HTML snapshots.
 *
 * Usage:
 *   npm run build:prerender
 *
 * Prerequisites:
 *   npm install puppeteer --save-dev
 *
 * The script:
 * 1. Starts the production server
 * 2. Uses Puppeteer to visit each page
 * 3. Waits for content to load
 * 4. Saves the rendered HTML to dist/ folder
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

// Read styles and components index to generate all routes
function getStyleIds() {
  try {
    const indexPath = join(rootDir, 'public/data/styles-index.json');
    const data = JSON.parse(readFileSync(indexPath, 'utf-8'));

    const styleIds = [];
    for (const categoryKey of Object.keys(data)) {
      const category = data[categoryKey];
      if (category.families) {
        for (const family of category.families) {
          if (family.id) {
            styleIds.push(family.id);
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
  const routes = [];

  // Static pages
  const staticPages = ['', 'home', 'styles', 'components', 'about', 'community'];

  for (const lang of languages) {
    for (const page of staticPages) {
      routes.push(`/${lang}${page ? '/' + page : ''}`);
    }
  }

  // Style preview pages
  const styleIds = getStyleIds();
  for (const lang of languages) {
    for (const styleId of styleIds) {
      routes.push(`/${lang}/styles/preview/${styleId}`);
    }
  }

  // Component detail pages
  const componentIds = getComponentIds();
  for (const lang of languages) {
    for (const { category, id } of componentIds) {
      routes.push(`/${lang}/components/${category}/${id}`);
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
      if (output.includes('Local:') && !started) {
        started = true;
        setTimeout(() => resolve(server), 1000); // Wait for server to stabilize
      }
    });

    server.stderr.on('data', (data) => {
      console.error('Server error:', data.toString());
    });

    setTimeout(() => {
      if (!started) {
        reject(new Error('Server failed to start within 30 seconds'));
      }
    }, 30000);
  });
}

// Pre-render a single page
async function prerenderPage(browser, url, outputPath) {
  const page = await browser.newPage();

  try {
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render
    await page.waitForSelector('#root', { timeout: 10000 });

    // Additional wait for dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get the full HTML
    const html = await page.content();

    // Create directory if needed
    const dir = dirname(outputPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    // Write HTML file
    writeFileSync(outputPath, html);
    console.log(`✅ Pre-rendered: ${url}`);

  } catch (error) {
    console.error(`❌ Failed to pre-render ${url}:`, error.message);
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

  // Check if dist exists
  if (!existsSync(distDir)) {
    console.error('❌ dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const routes = getRoutesToPrerender();
  console.log(`📝 Found ${routes.length} routes to pre-render\n`);

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
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    console.log('✅ Browser launched\n');

    // Pre-render each route
    console.log('📄 Pre-rendering pages...\n');

    // Process in batches to avoid memory issues
    const batchSize = 5;
    for (let i = 0; i < routes.length; i += batchSize) {
      const batch = routes.slice(i, i + batchSize);
      await Promise.all(
        batch.map(route => {
          const url = `http://localhost:4173${route}`;
          const outputPath = routeToFilePath(route);
          return prerenderPage(browser, url, outputPath);
        })
      );
    }

    await browser.close();
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
