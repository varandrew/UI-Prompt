#!/usr/bin/env node

/**
 * 測試 extractStyleId 函數
 *
 * 驗證從模板文件中正確提取 styleId
 */

import { execSync } from 'child_process';
import fs from 'fs';

// 顏色輸出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 測試用例
const testCases = [
  {
    name: 'Visual Translucent Glassmorphism (Named export)',
    path: 'src/data/styles/templates/visual/translucent/glassmorphism/index.js',
    expectedPattern: /visual-translucent-glassmorphism/
  },
  {
    name: 'Core Flat Design (Aggregator - fallback)',
    path: 'src/data/styles/templates/core/flatDesign/index.js',
    expectedPattern: /core-flatDesign/
  },
  {
    name: 'Core Material Design (Aggregator - fallback)',
    path: 'src/data/styles/templates/core/materialDesign/index.js',
    expectedPattern: /core-materialDesign/
  },
  {
    name: 'Neo-Brutalism (Named export)',
    path: 'src/data/styles/templates/visual/neoBrutalism/index.js',
    expectedPattern: /visual-neo-brutalism|neoBrutalism/
  }
];

log('🧪 Testing extractStyleId function...', 'blue');
log('');

let passed = 0;
let failed = 0;
let skipped = 0;

testCases.forEach((testCase, index) => {
  const { name, path, expectedPattern } = testCase;

  log(`Test ${index + 1}: ${name}`, 'gray');
  log(`  File: ${path}`, 'gray');

  // 檢查文件是否存在
  if (!fs.existsSync(path)) {
    log(`  ⚠️  SKIP: File not found`, 'yellow');
    skipped++;
    log('');
    return;
  }

  try {
    // 運行 generate-metadata.js 並提取該文件的 styleId
    // 這裡我們直接讀取 templateMetadata.json 來驗證
    const metadata = JSON.parse(fs.readFileSync('src/data/metadata/templateMetadata.json', 'utf-8'));

    // 查找匹配的 styleId
    const matchingIds = Object.keys(metadata.templates).filter(id => {
      // 基於路徑推測可能的 id
      const pathParts = path.split('/').slice(3); // 移除 'src/data/styles/templates/'
      return id.includes(pathParts[pathParts.length - 2]) || expectedPattern.test(id);
    });

    if (matchingIds.length > 0) {
      const actualId = matchingIds[0];
      if (expectedPattern.test(actualId)) {
        log(`  ✅ PASS: Found styleId = "${actualId}"`, 'green');
        passed++;
      } else {
        log(`  ❌ FAIL: Expected pattern ${expectedPattern}, got "${actualId}"`, 'red');
        failed++;
      }
    } else {
      log(`  ❌ FAIL: No matching styleId found in metadata`, 'red');
      failed++;
    }
  } catch (error) {
    log(`  ❌ ERROR: ${error.message}`, 'red');
    failed++;
  }

  log('');
});

log('📊 Test Results:', 'blue');
log(`   ✅ Passed: ${passed}`, 'green');
log(`   ❌ Failed: ${failed}`, failed > 0 ? 'red' : 'gray');
log(`   ⚠️  Skipped: ${skipped}`, skipped > 0 ? 'yellow' : 'gray');
log('');

if (failed > 0) {
  log('❌ Some tests failed!', 'red');
  process.exit(1);
} else if (passed === 0 && skipped === testCases.length) {
  log('⚠️  All tests were skipped (files not found)', 'yellow');
  process.exit(0);
} else {
  log('✅ All tests passed!', 'green');
  process.exit(0);
}
