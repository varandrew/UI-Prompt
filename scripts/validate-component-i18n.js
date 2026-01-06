#!/usr/bin/env node
/**
 * validate-component-i18n.js
 * 驗證所有 manifest.json 的 i18n 格式是否正確
 *
 * 使用方式：
 *   node scripts/validate-component-i18n.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * 檢查是否為有效的 i18n 對象
 */
function isValidI18nObject(obj) {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj['zh-CN'] === 'string' &&
    typeof obj['en-US'] === 'string' &&
    obj['zh-CN'].trim().length > 0 &&
    obj['en-US'].trim().length > 0
  );
}

/**
 * 驗證單個 manifest
 */
function validateManifest(filePath, componentName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const manifest = JSON.parse(content);
  const errors = [];

  // 檢查 component.name
  if (!isValidI18nObject(manifest.component?.name)) {
    errors.push('❌ component.name 不是有效的雙語對象');
  }

  // 檢查 component.description
  if (!isValidI18nObject(manifest.component?.description)) {
    errors.push('❌ component.description 不是有效的雙語對象');
  }

  // 檢查變體
  manifest.variants?.forEach((variant, idx) => {
    if (!isValidI18nObject(variant.name)) {
      errors.push(`❌ variants[${idx}] (${variant.id}).name 不是有效的雙語對象`);
    }
    if (!isValidI18nObject(variant.description)) {
      errors.push(`❌ variants[${idx}] (${variant.id}).description 不是有效的雙語對象`);
    }
  });

  return { valid: errors.length === 0, errors, componentId: manifest.id };
}

/**
 * 主函數
 */
function main() {
  console.log('🔍 驗證組件 manifest.json i18n 格式\n');

  const baseDir = path.join(projectRoot, 'src/data/components/generated');
  let totalCount = 0;
  let validCount = 0;
  let invalidCount = 0;
  const invalidFiles = [];

  // 查找所有 manifest.json
  const categories = fs.readdirSync(baseDir);
  for (const category of categories) {
    const categoryPath = path.join(baseDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const components = fs.readdirSync(categoryPath);
    for (const component of components) {
      const manifestPath = path.join(categoryPath, component, 'manifest.json');
      if (!fs.existsSync(manifestPath)) continue;

      totalCount++;
      try {
        const result = validateManifest(manifestPath, component);
        
        if (result.valid) {
          validCount++;
          console.log(`✅ ${category}/${component}`);
        } else {
          invalidCount++;
          console.error(`❌ ${category}/${component}`);
          result.errors.forEach(err => console.error(`   ${err}`));
          invalidFiles.push({ category, component, errors: result.errors });
        }
      } catch (error) {
        invalidCount++;
        console.error(`❌ ${category}/${component}: 解析錯誤 - ${error.message}`);
        invalidFiles.push({ category, component, errors: [error.message] });
      }
    }
  }

  // 生成報告
  console.log(`\n📊 驗證結果:`);
  console.log(`   總文件數: ${totalCount}`);
  console.log(`   ✅ 有效: ${validCount}`);
  console.log(`   ❌ 無效: ${invalidCount}`);

  if (invalidCount > 0) {
    console.error(`\n⚠️  存在 ${invalidCount} 個無效文件，請修正後再構建！`);
    process.exit(1);
  } else {
    console.log(`\n✅ 所有文件格式正確！`);
    process.exit(0);
  }
}

main();
