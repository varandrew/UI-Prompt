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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 導入共用函數
import {
  extractStyleId,
  extractStyleIdFromPath,
  getFileHistory,
  isNewFile,
  log,
  NEW_THRESHOLD_DAYS
} from './lib/metadata-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === 配置 ===
const TEMPLATES_DIRS = [
  'src/data/styles/templates',
  'src/data/components'
];
const METADATA_FILE = path.join(process.cwd(), 'src/data/metadata/templateMetadata.json');

// 從命令行參數判斷是否強制完整掃描
const FORCE_FULL_SCAN = process.argv.includes('--full');

// === 文件掃描 ===

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
