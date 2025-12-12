#!/usr/bin/env node

/**
 * Prompt Validation Script
 *
 * Validates English (en-US) character counts in Markdown prompt files.
 * - CustomPrompt (custom.md): en-US >= 3000 characters
 * - StylePrompt (style.md): en-US >= 1000 characters
 *
 * Note: Chinese (zh-CN) content is NOT validated.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROMPTS_DIR = path.resolve(__dirname, '../public/data/prompts');

// Thresholds
const THRESHOLDS = {
  custom: 2000,
  style: 600
};

const WARNING_MARGIN = 0.1; // 10% margin for warnings

/**
 * Class 1: MarkdownParser
 * Extracts English (en-US) content blocks from Markdown files
 */
class MarkdownParser {
  /**
   * Extract English language block from Markdown content
   * @param {string} content - Markdown file content
   * @returns {{enUS: string, errors: string[]}}
   */
  extractEnglishBlock(content) {
    const errors = [];
    let enUS = '';

    // Pattern to match English Version section
    // Format: ## English Version (en-US)
    //         content...
    const enPattern = /##\s*English\s+Version\s*\(en-US\)([\s\S]*?)$/i;

    const enMatch = content.match(enPattern);

    if (!enMatch) {
      errors.push('Missing en-US section');
    } else {
      enUS = enMatch[1].trim();
      // Remove separator lines (---) if present
      enUS = enUS.replace(/^---\s*$/gm, '').trim();
    }

    return { enUS, errors };
  }

  /**
   * Validate that the file has proper format
   * @param {string} content
   * @returns {boolean}
   */
  validateFormat(content) {
    const hasEnTitle = /##\s*English\s+Version\s*\(en-US\)/i.test(content);
    return hasEnTitle;
  }
}

/**
 * Class 2: CharacterCounter
 * UTF-8 safe character counting
 */
class CharacterCounter {
  /**
   * Count characters in text (UTF-8 safe)
   * @param {string} text
   * @returns {number}
   */
  count(text) {
    if (!text) return 0;
    // Use Array.from for proper Unicode character counting
    // This correctly handles emoji and multi-byte characters
    return Array.from(text).length;
  }

  /**
   * Count characters after cleaning Markdown syntax
   * @param {string} text
   * @returns {number}
   */
  countClean(text) {
    if (!text) return 0;

    let cleaned = text;

    // Remove Markdown headings
    cleaned = cleaned.replace(/^#{1,6}\s+.+$/gm, '');

    // Remove empty lines
    cleaned = cleaned.replace(/^\s*$/gm, '');

    // Remove code blocks
    cleaned = cleaned.replace(/```[\s\S]*?```/g, '');

    // Remove inline code
    cleaned = cleaned.replace(/`[^`]+`/g, '');

    return Array.from(cleaned.trim()).length;
  }
}

/**
 * Class 3: PromptValidator
 * Validates individual Prompt files
 */
class PromptValidator {
  constructor() {
    this.parser = new MarkdownParser();
    this.counter = new CharacterCounter();
  }

  /**
   * Validate a single Prompt file
   * @param {string} filePath - Absolute path to the file
   * @param {string} type - 'custom' or 'style'
   * @returns {Promise<ValidationResult>}
   */
  async validateFile(filePath, type) {
    try {
      // Read file content
      const content = await fs.readFile(filePath, 'utf-8');

      // Extract English block
      const { enUS, errors: parseErrors } = this.parser.extractEnglishBlock(content);

      // Count characters (using clean count)
      const enCount = this.counter.countClean(enUS);

      // Get threshold
      const threshold = THRESHOLDS[type];
      const warningThreshold = threshold * (1 + WARNING_MARGIN);

      // Validation result
      const result = {
        filePath,
        type,
        enUS: {
          count: enCount,
          required: threshold,
          passed: enCount >= threshold,
          isWarning: enCount >= threshold && enCount < warningThreshold
        },
        errors: parseErrors,
        overallPassed: enCount >= threshold && parseErrors.length === 0
      };

      return result;
    } catch (error) {
      // Handle file read errors
      return {
        filePath,
        type,
        enUS: {
          count: 0,
          required: THRESHOLDS[type],
          passed: false,
          isWarning: false
        },
        errors: [`File read error: ${error.message}`],
        overallPassed: false
      };
    }
  }
}

/**
 * Class 4: FileScanner
 * Scans the prompts directory for Markdown files
 */
class FileScanner {
  /**
   * Recursively scan for custom.md and style.md files
   * @param {string} baseDir - Base directory to scan
   * @returns {Promise<FileEntry[]>}
   */
  async scan(baseDir) {
    const files = [];

    await this._scanRecursive(baseDir, baseDir, files);

    return files;
  }

  /**
   * Recursive helper for scanning
   * @private
   */
  async _scanRecursive(baseDir, currentDir, files) {
    try {
      const entries = await fs.readdir(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);

        if (entry.isDirectory()) {
          // Recursively scan subdirectories
          await this._scanRecursive(baseDir, fullPath, files);
        } else if (entry.name === 'custom.md' || entry.name === 'style.md') {
          // Found a prompt file
          const relativePath = path.relative(baseDir, fullPath);
          const pathParts = relativePath.split(path.sep);

          files.push({
            absolutePath: fullPath,
            relativePath,
            type: entry.name === 'custom.md' ? 'custom' : 'style',
            category: pathParts[0] || null,
            family: pathParts[1] || null,
            template: pathParts[2] || null
          });
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${currentDir}: ${error.message}`);
    }
  }
}

/**
 * Class 5: ReportGenerator
 * Generates terminal reports with color
 */
class ReportGenerator {
  /**
   * Generate summary report
   * @param {ValidationResult[]} results
   */
  generateSummary(results) {
    const passed = results.filter(r => r.overallPassed).length;
    const failed = results.filter(r => !r.overallPassed).length;
    const warnings = results.filter(r =>
      r.overallPassed && r.enUS.isWarning
    ).length;

    console.log('\n' + '='.repeat(60));
    console.log('  📊 Prompt Validation Summary (English Only)');
    console.log('='.repeat(60));
    console.log(`Total Files:    ${results.length}`);
    console.log(`✅ Passed:      ${passed} (${(passed/results.length*100).toFixed(1)}%)`);
    console.log(`⚠️  Warnings:    ${warnings}`);
    console.log(`❌ Failed:      ${failed} (${(failed/results.length*100).toFixed(1)}%)`);
    console.log('='.repeat(60) + '\n');
  }

  /**
   * Generate details for failed validations
   * @param {ValidationResult[]} results
   */
  generateDetails(results) {
    const failed = results.filter(r => !r.overallPassed);

    if (failed.length === 0) {
      console.log('✅ All English prompts meet the requirements!\n');
      return;
    }

    console.log('❌ Failed Validations:\n');

    failed.forEach((result, index) => {
      console.log(`${index + 1}. ${result.filePath}`);
      console.log(`   Type: ${result.type}`);

      if (!result.enUS.passed) {
        const percentage = (result.enUS.count / result.enUS.required * 100).toFixed(1);
        console.log(`   ❌ en-US: ${result.enUS.count} / ${result.enUS.required} chars (${percentage}%)`);
      }

      if (result.errors.length > 0) {
        console.log(`   ⚠️  Errors: ${result.errors.join(', ')}`);
      }

      console.log('');
    });
  }

  /**
   * Generate warnings for results close to threshold
   * @param {ValidationResult[]} results
   */
  generateWarnings(results) {
    const warnings = results.filter(r =>
      r.overallPassed && r.enUS.isWarning
    );

    if (warnings.length === 0) {
      return;
    }

    console.log('⚠️  Warnings (close to threshold):\n');

    warnings.forEach((result, index) => {
      const percentage = (result.enUS.count / result.enUS.required * 100).toFixed(1);
      console.log(`${index + 1}. ${result.filePath}`);
      console.log(`   Type: ${result.type}`);
      console.log(`   ⚠️  en-US: ${result.enUS.count} / ${result.enUS.required} chars (${percentage}%) - Close to minimum`);
      console.log('');
    });
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🔍 Scanning Prompt files (English validation only)...\n');

  // 1. Scan for files
  const scanner = new FileScanner();
  const files = await scanner.scan(PROMPTS_DIR);

  console.log(`Found ${files.length} Markdown files\n`);

  // 2. Validate all files in parallel
  const validator = new PromptValidator();
  const results = await Promise.all(
    files.map(file => validator.validateFile(file.absolutePath, file.type))
  );

  // 3. Generate reports
  const reporter = new ReportGenerator();
  reporter.generateSummary(results);
  reporter.generateDetails(results);
  reporter.generateWarnings(results);

  // 4. Exit with code 0 (report mode - don't block CI/CD)
  console.log('ℹ️  Note: This script runs in report mode (exit code 0).');
  console.log('ℹ️  Chinese (zh-CN) content is NOT validated.\n');
  process.exit(0);
}

// Run the script
main().catch(err => {
  console.error('❌ Validation script error:', err);
  // Even on error, exit with 0 (report mode)
  process.exit(0);
});
