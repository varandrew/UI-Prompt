/**
 * Unit Tests for metadata-utils.js
 *
 * 測試元數據生成腳本的核心函數
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 導入待測試的函數
import {
  extractStyleId,
  extractStyleIdFromPath,
  isNewFile,
  NEW_THRESHOLD_DAYS
} from '../../scripts/lib/metadata-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('metadata-utils', () => {
  describe('NEW_THRESHOLD_DAYS', () => {
    it('should be 3 days', () => {
      expect(NEW_THRESHOLD_DAYS).toBe(3);
    });
  });

  describe('extractStyleIdFromPath', () => {
    it('should extract styleId from visual template path', () => {
      const filePath = 'src/data/styles/templates/visual/translucent/glassmorphism/index.js';
      const result = extractStyleIdFromPath(filePath);
      expect(result).toBe('visual-translucent-glassmorphism');
    });

    it('should extract styleId from core template path', () => {
      const filePath = 'src/data/styles/templates/core/flatDesign/index.js';
      const result = extractStyleIdFromPath(filePath);
      expect(result).toBe('core-flatDesign');
    });

    it('should extract styleId from component directory path', () => {
      // 組件路徑：目錄結構形式
      const filePath = 'src/data/components/buttons/index.js';
      const result = extractStyleIdFromPath(filePath);
      expect(result).toBe('component-buttons');
    });

    it('should extract styleId from nested component path', () => {
      const filePath = 'src/data/components/navigation/navbar/index.js';
      const result = extractStyleIdFromPath(filePath);
      expect(result).toBe('component-navigation-navbar');
    });

    it('should handle .jsx extension', () => {
      const filePath = 'src/data/styles/templates/visual/demo/Demo.jsx';
      const result = extractStyleIdFromPath(filePath);
      expect(result).toBe('visual-demo');
    });

    it('should return null for empty path after processing', () => {
      const filePath = 'src/data/styles/templates/index.js';
      const result = extractStyleIdFromPath(filePath);
      // 當路徑處理後為空時，函數返回 null 或空字符串
      expect(result === '' || result === null).toBe(true);
    });
  });

  describe('isNewFile', () => {
    it('should return true for file created today', () => {
      const today = new Date().toISOString();
      expect(isNewFile(today)).toBe(true);
    });

    it('should return true for file created 2 days ago', () => {
      const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString();
      expect(isNewFile(twoDaysAgo)).toBe(true);
    });

    it('should return true for file created exactly 3 days ago (boundary)', () => {
      const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();
      expect(isNewFile(threeDaysAgo)).toBe(true);
    });

    it('should return false for file created 4 days ago', () => {
      const fourDaysAgo = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString();
      expect(isNewFile(fourDaysAgo)).toBe(false);
    });

    it('should return false for file created 7 days ago', () => {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      expect(isNewFile(sevenDaysAgo)).toBe(false);
    });

    it('should return false for file created 30 days ago', () => {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      expect(isNewFile(thirtyDaysAgo)).toBe(false);
    });

    it('should accept custom threshold', () => {
      const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString();
      // 使用自定義閾值 7 天
      expect(isNewFile(fiveDaysAgo, 7)).toBe(true);
      // 使用自定義閾值 4 天
      expect(isNewFile(fiveDaysAgo, 4)).toBe(false);
    });
  });

  describe('extractStyleId', () => {
    const tempDir = path.join(__dirname, 'temp-test-files');

    beforeEach(() => {
      // 創建臨時測試目錄
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
    });

    afterEach(() => {
      // 清理臨時文件
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
    });

    it('should extract id from named export', () => {
      const testFile = path.join(tempDir, 'named-export.js');
      const content = `
        export const myStyle = {
          id: 'test-style-id',
          title: 'Test Style',
          description: 'A test style'
        };
      `;
      fs.writeFileSync(testFile, content);

      const result = extractStyleId(
        path.relative(process.cwd(), testFile),
        process.cwd()
      );
      expect(result).toEqual(['test-style-id']);
    });

    it('should extract id from default export', () => {
      const testFile = path.join(tempDir, 'default-export.js');
      const content = `
        export default {
          id: 'default-style-id',
          title: 'Default Style'
        };
      `;
      fs.writeFileSync(testFile, content);

      const result = extractStyleId(
        path.relative(process.cwd(), testFile),
        process.cwd()
      );
      expect(result).toEqual(['default-style-id']);
    });

    it('should extract multiple ids from array export', () => {
      const testFile = path.join(tempDir, 'array-export.js');
      const content = `
        export const styles = [
          { id: 'style-one', title: 'Style One' },
          { id: 'style-two', title: 'Style Two' },
          { id: 'style-three', title: 'Style Three' }
        ];
      `;
      fs.writeFileSync(testFile, content);

      const result = extractStyleId(
        path.relative(process.cwd(), testFile),
        process.cwd()
      );
      expect(result).toEqual(['style-one', 'style-two', 'style-three']);
    });

    it('should fallback to path-based id for aggregator files', () => {
      const testFile = path.join(tempDir, 'aggregator.js');
      const content = `
        export const name = 'Test Family';
        export const demoUI = '<div>Demo</div>';
        export const description = 'Test description';
      `;
      fs.writeFileSync(testFile, content);

      const result = extractStyleId(
        path.relative(process.cwd(), testFile),
        process.cwd()
      );
      // 應該回退到基於路徑的 ID
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe('string');
    });

    it('should handle file with BOM', () => {
      const testFile = path.join(tempDir, 'bom-file.js');
      const content = '\uFEFFexport const style = { id: "bom-style-id" };';
      fs.writeFileSync(testFile, content);

      const result = extractStyleId(
        path.relative(process.cwd(), testFile),
        process.cwd()
      );
      expect(result).toEqual(['bom-style-id']);
    });

    it('should handle file with comments', () => {
      const testFile = path.join(tempDir, 'commented-file.js');
      const content = `
        /**
         * Multi-line comment
         * id: 'fake-id-in-comment'
         */
        // Single line comment: id: 'another-fake'
        export const style = {
          id: 'real-style-id', // inline comment
          title: 'Real Style'
        };
      `;
      fs.writeFileSync(testFile, content);

      const result = extractStyleId(
        path.relative(process.cwd(), testFile),
        process.cwd()
      );
      expect(result).toEqual(['real-style-id']);
    });

    it('should fallback to path when file not found', () => {
      const result = extractStyleId(
        'src/data/styles/templates/nonexistent/style/index.js',
        process.cwd()
      );
      expect(result).toEqual(['nonexistent-style']);
    });
  });
});
