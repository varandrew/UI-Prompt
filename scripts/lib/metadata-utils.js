/**
 * Metadata Utils - 共用函數模組
 *
 * 提供元數據生成腳本的核心函數，便於單元測試和代碼復用。
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// === 配置 ===
export const NEW_THRESHOLD_DAYS = 3; // 3 天內的更新算「新增」

// === 文件 ID 提取函數 ===

/**
 * 從模板文件中提取真實的 styleId（支持數組格式）
 *
 * 策略：
 * 1. 優先讀取文件內容，匹配 export const X = { id: 'xxx' }
 * 2. 檢查數組格式：export const X = [ { id: 'a' }, { id: 'b' } ]
 * 3. Fallback：基於路徑推測（舊邏輯）
 *
 * @param {string} filePath - 相對於項目根目錄的文件路徑
 * @param {string} [basePath] - 項目根目錄路徑，默認為 process.cwd()
 * @returns {string[]} - 提取到的 styleId 數組
 */
export function extractStyleId(filePath, basePath = process.cwd()) {
  const absolutePath = path.join(basePath, filePath);

  // 檢查文件是否存在
  if (!fs.existsSync(absolutePath)) {
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
    const isAggregator = /export\s+const\s+name\s*=/.test(content) &&
                        /export\s+const\s+demoUI\s*=/.test(content);

    if (isAggregator) {
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
 * @param {string} filePath - 文件路徑
 * @returns {string|null} - 推測的 styleId
 *
 * @example
 * extractStyleIdFromPath('src/data/styles/templates/visual/translucent/glassmorphism/index.js')
 * // → 'visual-translucent-glassmorphism'
 *
 * @example
 * extractStyleIdFromPath('src/data/components/buttons.js')
 * // → 'component-buttons'
 */
export function extractStyleIdFromPath(filePath) {
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

// === Git 歷史函數 ===

/**
 * 獲取文件的 Git 歷史
 *
 * @param {string} filePath - 文件路徑
 * @param {number} [maxCount=10] - 最大返回條目數
 * @returns {Array<{hash: string, date: string, message: string}>} - 提交歷史數組
 */
export function getFileHistory(filePath, maxCount = 10) {
  try {
    const logCommand = `git log --format="%H|%aI|%s" --follow -n ${maxCount} -- "${filePath}"`;
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

// === 日期判斷函數 ===

/**
 * 判斷文件是否為「新增」（基於創建時間）
 *
 * @param {string} createdAt - ISO 8601 格式的創建時間
 * @param {number} [thresholdDays] - 閾值天數，默認使用 NEW_THRESHOLD_DAYS
 * @returns {boolean} - 是否為新文件
 *
 * @example
 * // 假設今天是 2025-11-27
 * isNewFile('2025-11-25T10:00:00Z') // 2 天前 → true
 * isNewFile('2025-11-20T10:00:00Z') // 7 天前 → false
 */
export function isNewFile(createdAt, thresholdDays = NEW_THRESHOLD_DAYS) {
  const created = new Date(createdAt);
  const now = new Date();
  const diffDays = (now - created) / (1000 * 60 * 60 * 24);
  return diffDays <= thresholdDays;
}

// === 顏色輸出工具 ===

export const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  gray: '\x1b[90m',
  cyan: '\x1b[36m'
};

/**
 * 彩色日誌輸出
 *
 * @param {string} message - 日誌消息
 * @param {string} [color='reset'] - 顏色名稱
 */
export function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}
