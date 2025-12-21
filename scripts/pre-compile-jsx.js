/**
 * Pre-compile JSX Build Script
 *
 * This script pre-compiles all JSX files at build time to eliminate
 * runtime Sucrase compilation overhead (300KB library + 200ms CPU time).
 *
 * OPTIMIZATION: Pre-compiled JSX loads instantly without runtime compilation.
 * Fallback to runtime compilation for new/missing files maintains backwards compatibility.
 *
 * Usage: node scripts/pre-compile-jsx.js
 *
 * Output:
 *   public/data/compiled-jsx/{previewId}-{hash}.js
 *   public/data/compiled-jsx-index.json
 */

import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { transform } from 'sucrase';
import pMap from 'p-map';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/data/content/styles');
const OUTPUT_DIR = path.join(__dirname, '../public/data/compiled-jsx');
const INDEX_PATH = path.join(__dirname, '../public/data/compiled-jsx-index.json');

// Concurrency limit for parallel compilation
const CONCURRENCY = 8;

/**
 * Generate MD5 hash of content (first 8 chars)
 * @param {string} content
 * @returns {string}
 */
function generateHash(content) {
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
}

/**
 * Detect JSX mode (react or preact)
 * @param {string} code
 * @returns {'react' | 'preact-h' | null}
 */
function detectJSXMode(code) {
  // React patterns
  if (/import\s+.*from\s+['"]react['"]/.test(code) ||
      /import\s+React/.test(code) ||
      /React\./.test(code) ||
      /export\s+default\s+function\s+[A-Z]/.test(code)) {
    return 'react';
  }

  // Preact h() patterns
  if (/import\s+.*from\s+['"]preact['"]/.test(code) ||
      /import\s+\{\s*h\s*[,}]/.test(code) ||
      /preact\.h\s*\(/.test(code)) {
    return 'preact-h';
  }

  // Default to react for modern JSX
  if (/function\s+[A-Z][a-zA-Z]*\s*\(/.test(code) ||
      /const\s+[A-Z][a-zA-Z]*\s*=/.test(code)) {
    return 'react';
  }

  return null;
}

/**
 * Pre-process React JSX code
 * @param {string} code
 * @returns {{processedCode: string, componentName: string, lucideIcons: string[]}}
 */
function preprocessReactJSX(code) {
  // Extract lucide-react icons
  const lucideIconsMatch = code.match(/import\s+\{([\s\S]+?)\}\s+from\s+['"]lucide-react['"]/);
  const lucideIcons = lucideIconsMatch
    ? lucideIconsMatch[1]
        .split(',')
        .map(name => name.trim())
        .filter(name => name && !/^(type|typeof)\s/.test(name))
    : [];

  // Remove React imports (provided at runtime)
  let processedCode = code
    .replace(/import\s+React\s*,?\s*\{[\s\S]*?\}\s*from\s+['"]react['"];?\n?/g, '')
    .replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '')
    .replace(/import\s+\{[\s\S]+?\}\s+from\s+['"]react['"];?\n?/g, '');

  // Remove lucide-react imports
  processedCode = processedCode
    .replace(/import\s+\{[\s\S]+?\}\s+from\s+['"]lucide-react['"];?\n?/g, '')
    .replace(/import\s+\{[\s\S]+?\}\s+from\s+['"]@lucide\/react['"];?\n?/g, '');

  // Extract component name
  const exportMatch = processedCode.match(/export\s+default\s+function\s+(\w+)/);
  const componentName = exportMatch ? exportMatch[1] : 'App';

  // Remove export default
  processedCode = processedCode.replace(/export\s+default\s+function\s+/, 'function ');

  return { processedCode, componentName, lucideIcons };
}

/**
 * Compile JSX code using Sucrase
 * @param {string} jsxCode
 * @param {'react' | 'preact-h'} mode
 * @returns {{code: string, componentName: string, lucideIcons: string[], mode: string}}
 */
function compileJSX(jsxCode, mode) {
  if (mode === 'react') {
    const { processedCode, componentName, lucideIcons } = preprocessReactJSX(jsxCode);

    const result = transform(processedCode, {
      transforms: ['jsx'],
      jsxPragma: 'React.createElement',
      jsxFragmentPragma: 'React.Fragment',
      production: true
    });

    return {
      code: result.code,
      componentName,
      lucideIcons,
      mode: 'react'
    };
  }

  // Preact mode
  const result = transform(jsxCode, {
    transforms: ['jsx', 'imports'],
    jsxPragma: 'h',
    jsxFragmentPragma: 'Fragment',
    production: true
  });

  return {
    code: result.code,
    componentName: 'App',
    lucideIcons: [],
    mode: 'preact-h'
  };
}

/**
 * Find all JSX files recursively
 * @param {string} dir
 * @returns {string[]}
 */
function findJSXFiles(dir) {
  const files = [];

  function walk(currentDir) {
    if (!fs.existsSync(currentDir)) return;

    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

/**
 * Extract preview ID from file path
 * @param {string} filePath
 * @returns {string}
 */
function extractPreviewId(filePath) {
  // Path format: .../styles/{category}/{familyId}/{templateId}/[fullpage|demo].jsx
  const relativePath = path.relative(INPUT_DIR, filePath);
  const parts = relativePath.split(path.sep);

  if (parts.length >= 4) {
    const [category, familyId, templateId, filename] = parts;
    const type = filename.replace('.jsx', ''); // 'fullpage' or 'demo'
    return `${category}-${familyId}-${templateId}:${type}`;
  }

  return relativePath.replace(/\//g, '-').replace('.jsx', '');
}

/**
 * Compile a single JSX file (async)
 * @param {string} filePath
 * @returns {Promise<Object|null>}
 */
async function compileJSXFile(filePath) {
  const previewId = extractPreviewId(filePath);

  try {
    const jsxCode = await fsPromises.readFile(filePath, 'utf-8');
    const inputSize = Buffer.byteLength(jsxCode, 'utf-8');

    // Detect mode
    const mode = detectJSXMode(jsxCode);

    if (!mode) {
      return { previewId, skipped: true, reason: 'Unknown JSX mode' };
    }

    // Compile
    const compiled = compileJSX(jsxCode, mode);

    // Generate hash and output path
    const hash = generateHash(jsxCode);
    const outputFilename = `${previewId.replace(/[:/]/g, '_')}-${hash}.js`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    // Write compiled file
    const outputContent = JSON.stringify(compiled);
    await fsPromises.writeFile(outputPath, outputContent);

    const outputSize = Buffer.byteLength(outputContent, 'utf-8');

    return {
      previewId,
      success: true,
      inputSize,
      outputSize,
      data: {
        hash,
        file: outputFilename,
        mode: compiled.mode,
        componentName: compiled.componentName,
        lucideIcons: compiled.lucideIcons,
        size: outputSize
      }
    };

  } catch (error) {
    return { previewId, success: false, error: error.message };
  }
}

/**
 * Main compilation function (parallel processing)
 */
async function preCompileJSX() {
  console.log('🔧 Pre-compiling JSX files...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Find all JSX files
  const jsxFiles = findJSXFiles(INPUT_DIR);

  if (jsxFiles.length === 0) {
    console.log('⚠️  No JSX files found in', INPUT_DIR);
    console.log('   Pre-compilation skipped.\n');

    // Write empty index
    await fsPromises.writeFile(INDEX_PATH, JSON.stringify({
      generated: new Date().toISOString(),
      count: 0,
      files: {}
    }, null, 2));

    return;
  }

  console.log(`📊 Found ${jsxFiles.length} JSX files`);
  console.log(`🚀 Compiling in parallel (concurrency: ${CONCURRENCY})...\n`);

  // Compile all files in parallel using pMap
  const results = await pMap(jsxFiles, compileJSXFile, { concurrency: CONCURRENCY });

  // Process results
  const index = {
    generated: new Date().toISOString(),
    count: 0,
    files: {}
  };

  let successCount = 0;
  let failCount = 0;
  let skippedCount = 0;
  let totalInputSize = 0;
  let totalOutputSize = 0;

  for (const result of results) {
    if (result.skipped) {
      skippedCount++;
      continue;
    }

    if (result.success) {
      successCount++;
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      index.files[result.previewId] = result.data;
    } else {
      failCount++;
      console.log(`   ❌ ${result.previewId}: ${result.error}`);
    }
  }

  // Update count
  index.count = successCount;

  // Write index file
  await fsPromises.writeFile(INDEX_PATH, JSON.stringify(index, null, 2));

  // Summary
  console.log('\n📈 Summary:');
  console.log(`   ✅ Compiled: ${successCount} files`);
  if (skippedCount > 0) {
    console.log(`   ⏭️  Skipped: ${skippedCount} files`);
  }
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount} files`);
  }
  console.log(`   📦 Input size: ${(totalInputSize / 1024).toFixed(1)}KB`);
  console.log(`   📦 Output size: ${(totalOutputSize / 1024).toFixed(1)}KB`);
  console.log(`   💾 Saved: ${((1 - totalOutputSize / totalInputSize) * 100 * -1).toFixed(0)}% (compiled is larger due to metadata)`);
  console.log(`\n✨ Pre-compilation complete! Index written to compiled-jsx-index.json`);
}

// Run the script
preCompileJSX().catch((error) => {
  console.error('❌ Error pre-compiling JSX:', error);
  process.exit(1);
});
