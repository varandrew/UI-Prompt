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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === 配置 ===
const TEMPLATES_DIRS = [
  'src/data/styles/templates',
  'src/data/components'
];
const METADATA_FILE = path.join(process.cwd(), 'src/data/metadata/templateMetadata.json');
const NEW_THRESHOLD_DAYS = 7; // 7 天內的更新算「新增」

// === 顏色輸出 ===
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  gray: '\x1b[90m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

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
 * 從模板文件中提取真實的 styleId
 *
 * 策略：
 * 1. 優先讀取文件內容，匹配 export const X = { id: 'xxx' }
 * 2. Fallback：基於路徑推測（舊邏輯）
 *
 * 範例：
 *   文件內容包含：export const glassmorphism = { id: 'visual-translucent-glassmorphism', ... }
 *   → 返回 'visual-translucent-glassmorphism'
 */
function extractStyleId(filePath) {
  const absolutePath = path.join(process.cwd(), filePath);

  // 檢查文件是否存在
  if (!fs.existsSync(absolutePath)) {
    log(`  ⚠️  File not found: ${filePath}`, 'yellow');
    return extractStyleIdFromPath(filePath);
  }

  try {
    // 讀取並預處理文件內容
    const content = fs.readFileSync(absolutePath, 'utf-8')
      .replace(/^\uFEFF/, '')                    // 移除 BOM
      .replace(/\r\n/g, '\n')                    // 統一換行符
      .replace(/\/\*[\s\S]*?\*\//g, '')          // 移除多行註釋
      .replace(/\/\/.*/g, '');                   // 移除單行註釋

    // 模式 1: Named export - export const X = { id: 'xxx', ... }
    const namedMatch = content.match(
      /export\s+const\s+\w+\s*=\s*\{[^}]*id:\s*['"]([^'"]+)['"]/s
    );
    if (namedMatch) {
      return namedMatch[1];
    }

    // 模式 2: Default export - export default { id: 'xxx', ... }
    const defaultMatch = content.match(
      /export\s+default\s*\{[^}]*id:\s*['"]([^'"]+)['"]/s
    );
    if (defaultMatch) {
      return defaultMatch[1];
    }

    // 模式 3: Aggregator 文件（家族級 index.js，無 id）
    // 檢查是否有 export const name 和 export const demoUI（家族級特徵）
    const isAggregator = /export\s+const\s+name\s*=/.test(content) &&
                        /export\s+const\s+demoUI\s*=/.test(content);

    if (isAggregator) {
      // 家族級文件無 id，返回路徑 fallback
      return extractStyleIdFromPath(filePath);
    }

    // Fallback：無法提取 id，使用路徑推測
    log(`  ⚠️  No id found in ${filePath}, using path-based id`, 'yellow');
    return extractStyleIdFromPath(filePath);

  } catch (err) {
    log(`  ❌ Error reading ${filePath}: ${err.message}`, 'red');
    return extractStyleIdFromPath(filePath);
  }
}

/**
 * 基於文件路徑推測 styleId（僅作 Fallback）
 *
 * 範例：
 *   src/data/styles/templates/visual/translucent/glassmorphism/index.js
 *   → visual-translucent-glassmorphism
 */
function extractStyleIdFromPath(filePath) {
  // 移除 src/data/styles/templates/ 前綴
  let relativePath = filePath.replace(/^src\/data\/styles\/templates\//, '');

  // 移除 src/data/components/ 前綴（組件文件）
  relativePath = relativePath.replace(/^src\/data\/components\//, 'component-');

  // 移除文件名（index.js, Demo.js 等）
  const parts = relativePath.split('/');

  // 如果是 index.js 或其他文件，取父級目錄路徑
  if (parts[parts.length - 1].endsWith('.js') || parts[parts.length - 1].endsWith('.jsx')) {
    parts.pop();
  }

  // 將路徑轉換為 styleId（用 - 連接）
  const styleId = parts.join('-');

  return styleId || null;
}

/**
 * 獲取文件的 Git 歷史
 * 返回格式：[{ hash, date, message }, ...]
 */
function getFileHistory(filePath, maxCount = 10) {
  try {
    const logCommand = `git log --format="%H|%aI|%s" --follow -n ${maxCount} -- "${filePath}"`;
    const output = execSync(logCommand, { encoding: 'utf-8' });

    if (!output.trim()) {
      // 如果沒有歷史記錄，可能是新文件
      log(`  ℹ️  No Git history for: ${filePath}`, 'gray');
      return [{
        hash: 'new-file',
        date: new Date().toISOString(),
        message: 'New file (no commit yet)'
      }];
    }

    const commits = output.split('\n').filter(Boolean).map(line => {
      const [hash, date, message] = line.split('|');
      return { hash, date, message };
    });

    return commits;
  } catch (err) {
    log(`  ⚠️  Error getting history for ${filePath}: ${err.message}`, 'yellow');
    return [{
      hash: 'error',
      date: new Date().toISOString(),
      message: 'Error getting history'
    }];
  }
}

/**
 * 判斷文件是否為「新增」（基於首次 commit 時間）
 */
function isNewFile(createdAt) {
  const created = new Date(createdAt);
  const now = new Date();
  const diffDays = (now - created) / (1000 * 60 * 60 * 24);
  return diffDays <= NEW_THRESHOLD_DAYS;
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
