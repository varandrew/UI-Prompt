// Input Validator for Template Creation

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '../..');

/**
 * Validate all inputs before creating template
 * @param {string} category - Category name (core/visual/retro/interaction/layout)
 * @param {string} family - Family name
 * @param {string} templateId - Template ID
 * @returns {boolean} True if validation passes
 * @throws {Error} If validation fails
 */
export function validateInputs(category, family, templateId) {
  // Read registry file
  const registryPath = path.join(projectRoot, 'src/data/styles/_registry.json');

  if (!fs.existsSync(registryPath)) {
    throw new Error(`Registry file not found at ${registryPath}`);
  }

  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

  // Check if category exists
  if (!registry.categories[category]) {
    const availableCategories = Object.keys(registry.categories).join(', ');
    throw new Error(
      `分類 "${category}" 不存在。\n可用分類: ${availableCategories}`
    );
  }

  // Check if family exists in the category
  if (!registry.categories[category].families.includes(family)) {
    const availableFamilies = registry.categories[category].families.join(', ');
    throw new Error(
      `家族 "${family}" 不存在於 ${category} 分類下。\n可用家族: ${availableFamilies}`
    );
  }

  // Check if template directory already exists
  const templateDir = path.join(projectRoot, `public/data/content/${category}/${family}/${templateId}`);
  if (fs.existsSync(templateDir)) {
    throw new Error(`模板目錄 "${templateDir}" 已存在`);
  }

  // Check if template ID follows recommended format
  const expectedPrefix = `${category}-${family}-`;
  if (!templateId.startsWith(expectedPrefix)) {
    console.warn(`⚠️  警告：模板 ID "${templateId}" 不符合推薦格式 "${expectedPrefix}*"`);
    console.warn(`   推薦使用格式：${expectedPrefix}<variant-name>`);
  }

  // Check if template ID is already used in manifest (if manifest exists)
  const manifestPath = path.join(projectRoot, `src/data/styles/generated/${category}/${family}/manifest.json`);
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (manifest.templates && manifest.templates.some(t => t.id === templateId)) {
      throw new Error(`模板 ID "${templateId}" 已存在於 manifest 中`);
    }
  }

  return true;
}

/**
 * Validate format parameter
 * @param {string} format - Format (html/jsx/react-jsx)
 * @returns {boolean} True if valid
 * @throws {Error} If invalid
 */
export function validateFormat(format) {
  const validFormats = ['html', 'jsx', 'react-jsx'];
  if (!validFormats.includes(format.toLowerCase())) {
    throw new Error(`無效的格式 "${format}"。可用格式: ${validFormats.join(', ')}`);
  }
  return true;
}

/**
 * Validate title inputs
 * @param {string} titleZh - Chinese title
 * @param {string} titleEn - English title
 * @returns {boolean} True if valid
 * @throws {Error} If invalid
 */
export function validateTitles(titleZh, titleEn) {
  if (!titleZh || titleZh.trim() === '') {
    throw new Error('中文標題不能為空');
  }
  if (!titleEn || titleEn.trim() === '') {
    throw new Error('英文標題不能為空');
  }
  return true;
}
