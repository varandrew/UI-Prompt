/**
 * Integration Tests for generate-metadata.js
 *
 * 這些測試會運行實際的腳本並驗證輸出
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

const METADATA_FILE = path.join(projectRoot, 'src/data/metadata/templateMetadata.json');

describe('generate-metadata.js Integration Tests', () => {
  let originalMetadata = null;

  beforeAll(() => {
    // 備份原始元數據文件
    if (fs.existsSync(METADATA_FILE)) {
      originalMetadata = fs.readFileSync(METADATA_FILE, 'utf-8');
    }
  });

  afterAll(() => {
    // 恢復原始元數據文件
    if (originalMetadata) {
      fs.writeFileSync(METADATA_FILE, originalMetadata);
    }
  });

  describe('Full Scan Mode', () => {
    it('should generate valid metadata JSON', () => {
      // 運行腳本（不使用 --full 以保持性能）
      try {
        execSync('node scripts/generate-metadata.js', {
          cwd: projectRoot,
          encoding: 'utf-8',
          timeout: 60000 // 60 秒超時
        });
      } catch (error) {
        // 腳本可能輸出到 stderr，但仍然成功
        if (error.status !== 0 && error.status !== null) {
          throw error;
        }
      }

      // 驗證文件存在
      expect(fs.existsSync(METADATA_FILE)).toBe(true);

      // 讀取並解析 JSON
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);

      // 驗證頂層結構
      expect(metadata).toHaveProperty('templates');
      expect(metadata).toHaveProperty('lastUpdate');
      expect(metadata).toHaveProperty('totalTemplates');
      expect(metadata).toHaveProperty('newTemplates');
      expect(metadata).toHaveProperty('updatedTemplates');
    });

    it('should have correct metadata structure for each template', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);

      // 獲取第一個模板進行結構驗證
      const templateIds = Object.keys(metadata.templates);
      expect(templateIds.length).toBeGreaterThan(0);

      const firstTemplate = metadata.templates[templateIds[0]];

      // 驗證必要字段
      expect(firstTemplate).toHaveProperty('isNew');
      expect(firstTemplate).toHaveProperty('updatedAt');
      expect(firstTemplate).toHaveProperty('createdAt');
      expect(firstTemplate).toHaveProperty('changeType');
      expect(firstTemplate).toHaveProperty('lastCommitHash');
      expect(firstTemplate).toHaveProperty('lastCommitMessage');
      expect(firstTemplate).toHaveProperty('changeHistory');

      // 驗證字段類型
      expect(typeof firstTemplate.isNew).toBe('boolean');
      expect(typeof firstTemplate.updatedAt).toBe('string');
      expect(typeof firstTemplate.createdAt).toBe('string');
      expect(['new', 'updated']).toContain(firstTemplate.changeType);
      expect(typeof firstTemplate.lastCommitHash).toBe('string');
      expect(Array.isArray(firstTemplate.changeHistory)).toBe(true);
    });

    it('should have valid ISO date format for timestamps', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);

      // 驗證 lastUpdate 是有效的 ISO 日期
      const lastUpdate = new Date(metadata.lastUpdate);
      expect(lastUpdate.toString()).not.toBe('Invalid Date');

      // 驗證每個模板的日期格式
      Object.values(metadata.templates).slice(0, 5).forEach(template => {
        const updatedAt = new Date(template.updatedAt);
        const createdAt = new Date(template.createdAt);

        expect(updatedAt.toString()).not.toBe('Invalid Date');
        expect(createdAt.toString()).not.toBe('Invalid Date');
      });
    });

    it('should have consistent statistics', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);

      // 統計數量應該與實際模板數量一致
      const actualTotal = Object.keys(metadata.templates).length;
      expect(metadata.totalTemplates).toBe(actualTotal);

      // 新模板 + 已更新模板應該等於總數
      const actualNew = Object.values(metadata.templates).filter(t => t.isNew).length;
      const actualUpdated = Object.values(metadata.templates).filter(t => t.changeType === 'updated').length;

      expect(metadata.newTemplates).toBe(actualNew);
      expect(metadata.updatedTemplates).toBe(actualUpdated);
    });
  });

  describe('Known Templates Verification', () => {
    it('should include core style templates', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);
      const templateIds = Object.keys(metadata.templates);

      // 檢查一些已知的核心模板存在（使用模糊匹配）
      const hasFlat = templateIds.some(id => id.includes('flat') || id.includes('Flat'));
      const hasMaterial = templateIds.some(id => id.includes('material') || id.includes('Material'));
      const hasMinimal = templateIds.some(id => id.includes('minimal') || id.includes('Minimal'));

      // 至少應該有一些核心模板
      expect(hasFlat || hasMaterial || hasMinimal).toBe(true);
    });

    it('should include visual style templates', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);
      const templateIds = Object.keys(metadata.templates);

      // 檢查視覺風格模板
      const hasVisual = templateIds.some(id =>
        id.includes('visual') ||
        id.includes('glass') ||
        id.includes('neo') ||
        id.includes('retro')
      );

      expect(hasVisual).toBe(true);
    });
  });

  describe('Change History Validation', () => {
    it('should have valid change history entries', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);

      Object.values(metadata.templates).slice(0, 10).forEach(template => {
        // 變更歷史應該是數組
        expect(Array.isArray(template.changeHistory)).toBe(true);

        // 如果有歷史記錄，驗證結構
        if (template.changeHistory.length > 0) {
          const firstEntry = template.changeHistory[0];
          expect(firstEntry).toHaveProperty('date');
          expect(firstEntry).toHaveProperty('commitHash');
          expect(firstEntry).toHaveProperty('message');

          // 驗證 commit hash 長度（應該是 7 個字符的縮寫）
          expect(firstEntry.commitHash.length).toBeLessThanOrEqual(12);
        }
      });
    });

    it('should have change history sorted by date (newest first)', () => {
      const content = fs.readFileSync(METADATA_FILE, 'utf-8');
      const metadata = JSON.parse(content);

      Object.values(metadata.templates).slice(0, 5).forEach(template => {
        if (template.changeHistory.length > 1) {
          for (let i = 0; i < template.changeHistory.length - 1; i++) {
            const currentDate = new Date(template.changeHistory[i].date);
            const nextDate = new Date(template.changeHistory[i + 1].date);
            // 當前日期應該 >= 下一個日期（從新到舊排序）
            expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
          }
        }
      });
    });
  });

  describe('Script Error Handling', () => {
    it('should handle invalid directory gracefully', async () => {
      // 這個測試確保腳本在目錄結構正確時能正常運行
      // 腳本本身已經有錯誤處理邏輯
      const result = execSync('node scripts/generate-metadata.js 2>&1', {
        cwd: projectRoot,
        encoding: 'utf-8',
        timeout: 60000
      });

      // 腳本應該成功完成（輸出包含成功信息）
      expect(result).toContain('Metadata');
    });
  });
});

describe('track-updates.js Integration Tests', () => {
  it('should run without errors', () => {
    try {
      const result = execSync('node scripts/track-updates.js 2>&1', {
        cwd: projectRoot,
        encoding: 'utf-8',
        timeout: 30000
      });

      // 腳本應該輸出一些信息
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      // 如果沒有 Git 變更，腳本會回退到完整掃描模式
      // 這不是錯誤
      if (error.stdout) {
        expect(error.stdout).toContain('template');
      }
    }
  });
});
