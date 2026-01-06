#!/usr/bin/env node
/**
 * convert-component-i18n.js
 *
 * 將組件 manifest.json 中的純英文字符串轉換為雙語對象
 * 從 scripts/component-translations.json 中讀取翻譯映射
 *
 * 使用方式：
 *   node scripts/convert-component-i18n.js          # 執行轉換
 *   node scripts/convert-component-i18n.js --dry-run --verbose  # 預覽模式
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 載入翻譯映射
const translationsPath = path.join(__dirname, 'component-translations.json');
const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf-8'));

/**
 * 轉換單個字段為雙語對象
 */
function convertToI18nObject(englishText, translation = null) {
  if (!englishText || typeof englishText !== 'string') {
    return { 'zh-CN': '', 'en-US': '' };
  }

  // 如果已經是對象，直接返回
  if (typeof englishText === 'object' && englishText['en-US']) {
    return englishText;
  }

  // 使用提供的翻譯或保留英文作為回退
  return {
    'zh-CN': translation?.['zh-CN'] || englishText,
    'en-US': translation?.['en-US'] || englishText
  };
}

/**
 * 轉換組件 manifest
 */
function convertManifest(filePath, dryRun = false) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const manifest = JSON.parse(content);
  const componentId = manifest.id;
  const changes = [];

  // 獲取組件翻譯
  const componentTranslation = translations.components[componentId];
  if (!componentTranslation) {
    console.warn(`⚠️  未找到 ${componentId} 的翻譯，將使用英文作為回退`);
  }

  // 轉換組件名稱
  if (typeof manifest.component?.name === 'string') {
    const before = manifest.component.name;
    manifest.component.name = convertToI18nObject(
      manifest.component.name,
      componentTranslation?.name
    );
    changes.push(`component.name: "${before}" → 雙語對象`);
  }

  // 轉換組件描述
  if (typeof manifest.component?.description === 'string') {
    manifest.component.description = convertToI18nObject(
      manifest.component.description,
      componentTranslation?.description
    );
    changes.push(`component.description: 已轉換為雙語對象`);
  }

  // 轉換變體
  if (Array.isArray(manifest.variants)) {
    manifest.variants.forEach((variant, idx) => {
      const variantId = variant.id;

      // 變體名稱
      if (typeof variant.name === 'string') {
        const before = variant.name;
        const variantNameTranslation = translations.variants[variantId];
        variant.name = convertToI18nObject(variant.name, variantNameTranslation);
        changes.push(`variants[${idx}].name: "${before}" → 雙語對象`);
      }

      // 變體描述
      if (typeof variant.description === 'string') {
        // 嘗試從完整翻譯中查找
        const variantDescTranslation = componentTranslation?.variants?.[variantId]?.description;
        
        // 如果沒有，生成模板
        let template = null;
        if (variantDescTranslation) {
          template = variantDescTranslation;
        } else {
          // 如果沒有具體翻譯，生成模板翻譯
          const variantNameZh = variant.name?.['zh-CN'] || translations.variants[variantId]?.['zh-CN'] || variantId;
          const componentNameZh = manifest.component.name?.['zh-CN'] || componentTranslation?.name?.['zh-CN'] || componentId;
          
          template = {
            'zh-CN': `${variantNameZh}風格的${componentNameZh}實現`,
            'en-US': variant.description
          };
        }
        
        variant.description = convertToI18nObject(variant.description, template);
        changes.push(`variants[${idx}].description: 已轉換為雙語對象`);
      }
    });
  }

  // 寫入文件（非 dry-run 模式）
  if (!dryRun && changes.length > 0) {
    fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');
  }

  return {
    success: changes.length > 0,
    changes,
    componentId,
    category: manifest.category
  };
}

/**
 * 主函數
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const verbose = args.includes('--verbose');

  console.log('🔧 組件 manifest.json i18n 轉換工具\n');
  if (dryRun) {
    console.log('📋 預覽模式（不會實際寫入文件）\n');
  }

  const baseDir = path.join(projectRoot, 'src/data/components/generated');
  const results = [];
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  // 查找所有 manifest.json
  const categories = fs.readdirSync(baseDir);
  for (const category of categories) {
    const categoryPath = path.join(baseDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    console.log(`\n📁 處理分類: ${category}`);

    const components = fs.readdirSync(categoryPath);
    for (const component of components) {
      const manifestPath = path.join(categoryPath, component, 'manifest.json');
      if (!fs.existsSync(manifestPath)) continue;

      try {
        const result = convertManifest(manifestPath, dryRun);
        results.push({ category, component, ...result });

        if (result.success) {
          successCount++;
          console.log(`   ✅ ${component}`);
          if (verbose) {
            result.changes.forEach(change => console.log(`      - ${change}`));
          }
        } else {
          skipCount++;
          console.log(`   ⏭️  ${component} (已經是雙語格式)`);
        }
      } catch (error) {
        errorCount++;
        console.error(`   ❌ ${component}: ${error.message}`);
      }
    }
  }

  // 生成報告
  console.log(`\n\n📊 轉換統計:`);
  console.log(`   ✅ 成功轉換: ${successCount} 個組件`);
  console.log(`   ⏭️  跳過: ${skipCount} 個組件`);
  console.log(`   ❌ 失敗: ${errorCount} 個組件`);

  // 生成詳細報告（JSON 格式）
  if (!dryRun && successCount > 0) {
    const reportDir = path.join(projectRoot, 'logs');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    const reportPath = path.join(reportDir, 'component-i18n-conversion-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`\n📄 詳細報告已保存: ${reportPath}`);
  }

  process.exit(errorCount > 0 ? 1 : 0);
}

main();
