#!/usr/bin/env node

/**
 * Generate Metadata Script
 *
 * 此腳本掃描所有模板文件並生成完整的元數據文件。
 *
 * 功能：
 * 1. 遞歸掃描 src/data/styles/templates/ 和 src/data/components/
 * 2. 為每個模板文件獲取 Git 歷史
 * 3. 生成包含時間戳和變更類型的元數據
 *
 * 使用場景：
 * - 初始化元數據文件
 * - 重建完整元數據（當數據不一致時）
 * - 手動觸發完整掃描
 *
 * 使用方式：
 *   node scripts/generate-metadata.js
 *   node scripts/generate-metadata.js --full  # 強制完整掃描
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
const NEW_THRESHOLD_DAYS = 7;

// 從命令行參數判斷是否強制完整掃描
const FORCE_FULL_SCAN = process.argv.includes('--full');

// === 顏色輸出 ===
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  gray: '\x1b[90m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// === 文件掃描 ===

/**
 * 從模板文件中提取真實的 styleId（支持數組格式）
 *
 * 策略：
 * 1. 優先讀取文件內容，匹配 export const X = { id: 'xxx' }
 * 2. 檢查數組格式：export const X = [ { id: 'a' }, { id: 'b' } ]
 * 3. Fallback：基於路徑推測（舊邏輯）
 *
 * 範例：
 *   文件內容包含：export const glassmorphism = { id: 'visual-translucent-glassmorphism', ... }
 *   → 返回 ['visual-translucent-glassmorphism']
 *
 *   文件內容包含：export const newTrendStyles = [ { id: 'maximalism' }, { id: 'corporate' } ]
 *   → 返回 ['maximalism', 'corporate']
 */
function extractStyleId(filePath) {
  const absolutePath = path.join(process.cwd(), filePath);

  // 檢查文件是否存在
  if (!fs.existsSync(absolutePath)) {
    log(`  ⚠️  File not found: ${filePath}`, 'yellow');
    return [extractStyleIdFromPath(filePath)];
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
      return [namedMatch[1]];
    }

    // 模式 2: Default export - export default { id: 'xxx', ... }
    const defaultMatch = content.match(
      /export\s+default\s*\{[^}]*id:\s*['"]([^'"]+)['"]/s
    );
    if (defaultMatch) {
      return [defaultMatch[1]];
    }

    // 模式 3: Array export - export const X = [ { id: 'a' }, { id: 'b' } ]
    const arrayMatch = content.match(/export\s+const\s+\w+\s*=\s*\[/);
    if (arrayMatch) {
      // 提取數組中所有的 id
      const idMatches = content.matchAll(/id:\s*['"]([^'"]+)['"]/g);
      const ids = Array.from(idMatches, match => match[1]);
      if (ids.length > 0) {
        return ids;
      }
    }

    // 模式 4: Aggregator 文件（家族級 index.js，無 id）
    // 檢查是否有 export const name 和 export const demoUI（家族級特徵）
    const isAggregator = /export\s+const\s+name\s*=/.test(content) &&
                        /export\s+const\s+demoUI\s*=/.test(content);

    if (isAggregator) {
      // 家族級文件無 id，返回路徑 fallback
      return [extractStyleIdFromPath(filePath)];
    }

    // Fallback：無法提取 id，使用路徑推測
    return [extractStyleIdFromPath(filePath)];

  } catch {
    return [extractStyleIdFromPath(filePath)];
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
  let relativePath = filePath.replace(/^src\/data\/styles\/templates\//, '');
  relativePath = relativePath.replace(/^src\/data\/components\//, 'component-');

  const parts = relativePath.split('/');

  // 移除文件名
  if (parts[parts.length - 1].endsWith('.js') || parts[parts.length - 1].endsWith('.jsx')) {
    parts.pop();
  }

  const styleId = parts.join('-');
  return styleId || null;
}

/**
 * 遞歸掃描目錄，獲取所有 index.js 文件
 */
function scanTemplateFiles() {
  const templateFiles = new Map(); // styleId -> filePath

  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) {
      log(`⚠️  Directory not found: ${dir}`, 'yellow');
      return;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        // 處理所有 .js 文件（包括 index.js 和單文件模板如 monochrome.js）
        const relativePath = path.relative(process.cwd(), fullPath);
        const styleIds = extractStyleId(relativePath);  // 現在返回數組

        // 為每個 styleId 添加條目（支持數組格式文件）
        if (styleIds && styleIds.length > 0) {
          styleIds.forEach(styleId => {
            if (styleId) {
              templateFiles.set(styleId, relativePath);
            }
          });
        }
      }
    }
  }

  TEMPLATES_DIRS.forEach(dir => {
    const fullDir = path.join(process.cwd(), dir);
    scanDirectory(fullDir);
  });

  return templateFiles;
}

/**
 * 獲取文件的 Git 歷史
 */
function getFileHistory(filePath) {
  try {
    const logCommand = `git log --format="%H|%aI|%s" --follow -n 10 -- "${filePath}"`;
    const output = execSync(logCommand, { encoding: 'utf-8' });

    if (!output.trim()) {
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
  } catch {
    return [{
      hash: 'error',
      date: new Date().toISOString(),
      message: 'Error getting history'
    }];
  }
}

/**
 * 判斷文件是否為「新增」
 */
function isNewFile(createdAt) {
  const created = new Date(createdAt);
  const now = new Date();
  const diffDays = (now - created) / (1000 * 60 * 60 * 24);
  return diffDays <= NEW_THRESHOLD_DAYS;
}

// === 主函數 ===

function generateMetadata() {
  log('🚀 Starting metadata generation...', 'cyan');
  log('');

  if (FORCE_FULL_SCAN) {
    log('⚡ Full scan mode enabled', 'yellow');
  }

  // 掃描所有模板文件
  log('📁 Scanning template directories...', 'blue');
  const templateFiles = scanTemplateFiles();

  log(`   Found ${templateFiles.size} template files`, 'gray');
  log('');

  if (templateFiles.size === 0) {
    log('⚠️  No template files found!', 'yellow');
    log('   Make sure you are in the project root directory.', 'gray');
    process.exit(1);
  }

  // 載入現有元數據（如果存在且不是強制完整掃描）
  let existingMetadata = { templates: {} };

  if (fs.existsSync(METADATA_FILE) && !FORCE_FULL_SCAN) {
    try {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      existingMetadata = JSON.parse(content);
      log(`✅ Loaded existing metadata: ${Object.keys(existingMetadata.templates).length} templates`, 'green');
      log('');
    } catch (err) {
      log(`⚠️  Error loading existing metadata: ${err.message}`, 'yellow');
      log('   Starting fresh...', 'gray');
      log('');
    }
  }

  // 處理每個模板文件
  log('🔄 Processing templates:', 'blue');
  log('');

  const metadata = { templates: {} };
  let processedCount = 0;

  for (const [styleId, filePath] of templateFiles) {
    processedCount++;

    // 顯示進度（每10個顯示一次）
    if (processedCount % 10 === 0) {
      log(`   Progress: ${processedCount}/${templateFiles.size}`, 'gray');
    }

    // 如果已存在且不是強制完整掃描，檢查文件是否有變更
    const existingEntry = existingMetadata.templates[styleId];

    if (existingEntry && !FORCE_FULL_SCAN) {
      // 檢查文件最後修改時間
      try {
        const stats = fs.statSync(filePath);
        const lastModified = stats.mtime.toISOString();

        // 如果元數據的更新時間比文件修改時間新，跳過
        if (new Date(existingEntry.updatedAt) >= new Date(lastModified)) {
          metadata.templates[styleId] = existingEntry;
          continue;
        }
      } catch {
        // 如果無法讀取文件狀態，重新生成元數據
      }
    }

    // 獲取 Git 歷史
    const history = getFileHistory(filePath);

    if (history.length === 0) {
      continue;
    }

    const latestCommit = history[0];
    const firstCommit = history[history.length - 1];

    const isNew = isNewFile(firstCommit.date);
    const changeType = isNew ? 'new' : 'updated';

    // 構建元數據條目
    metadata.templates[styleId] = {
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
  }

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

  log('');
  log('✅ Metadata generation complete!', 'green');
  log('');
  log('📊 Summary:', 'blue');
  log(`   File: ${METADATA_FILE}`, 'gray');
  log(`   Total templates: ${metadata.totalTemplates}`, 'gray');
  log(`   New templates (≤${NEW_THRESHOLD_DAYS} days): ${metadata.newTemplates}`, 'green');
  log(`   Updated templates: ${metadata.updatedTemplates}`, 'yellow');
  log(`   Processed: ${processedCount} files`, 'gray');
  log('');

  // 顯示最近的新增模板（如果有）
  if (metadata.newTemplates > 0) {
    log('🆕 Recently added templates:', 'green');
    Object.entries(metadata.templates)
      .filter(([, data]) => data.isNew)
      .slice(0, 5)
      .forEach(([id, data]) => {
        log(`   - ${id}`, 'gray');
        log(`     Created: ${data.createdAt.split('T')[0]}`, 'gray');
      });
    log('');
  }

  return metadata;
}

// === 執行 ===

try {
  const metadata = generateMetadata();

  // 輸出 JSON 結果（供 GitHub Actions 使用）
  if (process.env.CI || process.env.GITHUB_ACTIONS) {
    console.log(JSON.stringify({
      success: true,
      totalTemplates: metadata.totalTemplates,
      newTemplates: metadata.newTemplates,
      updatedTemplates: metadata.updatedTemplates,
      metadataFile: METADATA_FILE
    }, null, 2));
  }
} catch (error) {
  log(`❌ Error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
}
