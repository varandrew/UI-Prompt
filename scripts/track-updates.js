#!/usr/bin/env node

/**
 * Track Template Updates Script
 *
 * 此腳本追蹤模板文件的 Git 變更，用於 GitHub Actions 自動化流程。
 *
 * 功能：
 * 1. 檢測 src/data/styles/templates/ 和 src/data/components/ 中的變更
 * 2. 使用 Git 歷史判斷文件是「新增」還是「更新」
 * 3. 生成包含時間戳的元數據
 *
 * 使用方式：
 *   node scripts/track-updates.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 導入共用函數
import {
  extractStyleId as extractStyleIdBase,
  extractStyleIdFromPath,
  getFileHistory,
  isNewFile,
  log
} from './lib/metadata-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === 配置 ===
const TEMPLATES_DIRS = [
  'src/data/styles/templates',
  'src/data/components'
];
const METADATA_FILE = path.join(process.cwd(), 'src/data/metadata/templateMetadata.json');

// === Git 操作函數 ===

/**
 * 獲取變更的文件列表（與上一個 commit 比較）
 */
function getChangedFiles() {
  try {
    // 嘗試獲取與上一個 commit 的差異
    const diffCommand = 'git diff --name-only HEAD~1 HEAD';
    const output = execSync(diffCommand, { encoding: 'utf-8' });
    const files = output.split('\n').filter(Boolean);

    if (files.length === 0) {
      log('⚠️  No changes detected with HEAD~1, trying staged changes...', 'yellow');
      // 如果沒有差異，嘗試獲取已暫存的文件
      const stagedCommand = 'git diff --name-only --cached';
      const stagedOutput = execSync(stagedCommand, { encoding: 'utf-8' });
      return stagedOutput.split('\n').filter(Boolean);
    }

    return files;
  } catch {
    log('⚠️  Error getting changed files, using all template files...', 'yellow');
    // 如果 Git 命令失敗，返回空數組（generate-metadata.js 會處理所有文件）
    return [];
  }
}

/**
 * 判斷文件是否為模板文件
 */
function isTemplateFile(filePath) {
  return TEMPLATES_DIRS.some(dir => filePath.includes(dir)) &&
         (filePath.endsWith('.js') || filePath.endsWith('.jsx'));
}

/**
 * 從模板文件中提取 styleId（使用共用模組，返回單個值）
 */
function extractStyleId(filePath) {
  const ids = extractStyleIdBase(filePath);
  return ids && ids.length > 0 ? ids[0] : null;
}

/**
 * 獲取所有模板文件（遞歸掃描）
 */
function getAllTemplateFiles() {
  const files = [];

  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.jsx'))) {
        // 轉換為相對路徑
        const relativePath = path.relative(process.cwd(), fullPath);
        files.push(relativePath);
      }
    }
  }

  TEMPLATES_DIRS.forEach(dir => {
    const fullDir = path.join(process.cwd(), dir);
    scanDirectory(fullDir);
  });

  return files;
}

// === 主函數 ===

function trackUpdates() {
  log('🔍 Starting template update tracking...', 'blue');
  log('');

  // 獲取變更的文件
  const changedFiles = getChangedFiles();
  const templateChanges = changedFiles.filter(isTemplateFile);

  log(`📊 Git Changes:`, 'blue');
  log(`   Total changed files: ${changedFiles.length}`, 'gray');
  log(`   Template files: ${templateChanges.length}`, 'gray');
  log('');

  if (templateChanges.length === 0) {
    log('⚠️  No template changes detected in Git.', 'yellow');
    log('   Falling back to full scan mode...', 'yellow');
    log('');

    // 如果沒有 Git 變更，掃描所有模板文件（用於初始化）
    const allFiles = getAllTemplateFiles();
    log(`📁 Found ${allFiles.length} total template files`, 'blue');

    // 返回結果給 generate-metadata.js 使用
    const result = {
      mode: 'full-scan',
      files: allFiles,
      changedFiles: []
    };

    console.log(JSON.stringify(result, null, 2));
    return;
  }

  log('📝 Changed template files:', 'green');
  templateChanges.forEach(file => log(`   - ${file}`, 'gray'));
  log('');

  // 載入現有元數據（如果存在）
  let metadata = { templates: {}, lastUpdate: null, newTemplates: 0, updatedTemplates: 0 };

  if (fs.existsSync(METADATA_FILE)) {
    try {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      metadata = JSON.parse(content);
      log(`✅ Loaded existing metadata: ${Object.keys(metadata.templates).length} templates`, 'green');
    } catch (error) {
      log(`⚠️  Error loading metadata, starting fresh: ${error.message}`, 'yellow');
    }
  } else {
    log('ℹ️  No existing metadata found, creating new file', 'blue');
  }
  log('');

  // 處理每個變更的文件
  log('🔄 Processing changes:', 'blue');

  const updates = [];

  templateChanges.forEach(filePath => {
    const styleId = extractStyleId(filePath);

    if (!styleId) {
      log(`  ⚠️  Skipping ${filePath} (cannot extract styleId)`, 'yellow');
      return;
    }

    log(`  📄 ${filePath}`, 'gray');
    log(`     → styleId: ${styleId}`, 'gray');

    // 獲取 Git 歷史
    const history = getFileHistory(filePath);

    if (history.length === 0) {
      log(`     ⚠️  No history found`, 'yellow');
      return;
    }

    const latestCommit = history[0];
    const firstCommit = history[history.length - 1];

    const isNew = isNewFile(firstCommit.date);
    const changeType = isNew ? 'new' : 'updated';

    log(`     ⏰ Created: ${firstCommit.date.split('T')[0]}`, 'gray');
    log(`     📅 Updated: ${latestCommit.date.split('T')[0]}`, 'gray');
    log(`     🏷️  Type: ${changeType}`, isNew ? 'green' : 'yellow');

    // 構建元數據條目
    const entry = {
      isNew,
      updatedAt: latestCommit.date,
      createdAt: firstCommit.date,
      changeType,
      lastCommitHash: latestCommit.hash.substring(0, 7),
      lastCommitMessage: latestCommit.message,
      changeHistory: history.slice(0, 5).map(c => ({
        date: c.date,
        commitHash: c.hash.substring(0, 7),
        message: c.message
      }))
    };

    updates.push({ styleId, entry, filePath });
    log('');
  });

  // 更新元數據
  updates.forEach(({ styleId, entry }) => {
    metadata.templates[styleId] = entry;
  });

  // 更新統計信息
  metadata.lastUpdate = new Date().toISOString();
  metadata.totalTemplates = Object.keys(metadata.templates).length;
  metadata.newTemplates = Object.values(metadata.templates).filter(t => t.isNew).length;
  metadata.updatedTemplates = Object.values(metadata.templates).filter(t => t.changeType === 'updated').length;

  // 確保目錄存在
  const metadataDir = path.dirname(METADATA_FILE);
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir, { recursive: true });
    log(`📁 Created directory: ${metadataDir}`, 'blue');
  }

  // 寫入元數據文件
  fs.writeFileSync(
    METADATA_FILE,
    JSON.stringify(metadata, null, 2),
    'utf-8'
  );

  log('✅ Metadata updated successfully!', 'green');
  log('');
  log('📊 Summary:', 'blue');
  log(`   File: ${METADATA_FILE}`, 'gray');
  log(`   Total templates: ${metadata.totalTemplates}`, 'gray');
  log(`   New templates: ${metadata.newTemplates}`, 'green');
  log(`   Updated templates: ${metadata.updatedTemplates}`, 'yellow');
  log('');

  // 輸出結果（供 GitHub Actions 使用）
  const result = {
    mode: 'git-tracking',
    metadataFile: METADATA_FILE,
    totalTemplates: metadata.totalTemplates,
    newTemplates: metadata.newTemplates,
    updatedTemplates: metadata.updatedTemplates,
    changedFiles: templateChanges
  };

  console.log(JSON.stringify(result, null, 2));
}

// === 執行 ===

try {
  trackUpdates();
} catch (error) {
  log(`❌ Error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
}
