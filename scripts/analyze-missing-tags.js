/**
 * 分析哪些風格缺少 tags 定義
 * 運行: node scripts/analyze-missing-tags.js
 */

import registry from '../src/data/styles/_registry.json' assert { type: 'json' };
import { styleEnhancements } from '../src/data/metadata/styleTagsMapping.js';

async function analyzeMissingTags() {
  console.log('🔍 分析缺少 tags 的風格...\n');

  const missingTags = [];
  const hasTags = [];

  // 遍歷所有 categories
  for (const [categoryId, categoryConfig] of Object.entries(registry.categories)) {
    console.log(`\n📂 Category: ${categoryId}`);

    for (const familyId of categoryConfig.families) {
      try {
        // 動態導入 manifest
        const manifestPath = `../src/data/styles/generated/${categoryId}/${familyId}/manifest.json`;
        const manifest = await import(manifestPath, { assert: { type: 'json' } });
        const manifestData = manifest.default || manifest;

        // 檢查 Family ID
        const fullFamilyId = manifestData.id || `${categoryId}-${familyId}`;

        if (styleEnhancements[fullFamilyId]) {
          hasTags.push({
            id: fullFamilyId,
            tags: styleEnhancements[fullFamilyId].tags || []
          });
          console.log(`  ✅ ${fullFamilyId} (${styleEnhancements[fullFamilyId].tags?.length || 0} tags)`);
        } else {
          missingTags.push({
            id: fullFamilyId,
            category: categoryId,
            familyId: familyId
          });
          console.log(`  ❌ ${fullFamilyId} - 缺少 tags 定義`);
        }

        // 檢查 Templates
        const templateIds = manifestData.templates || manifestData.styles || [];
        for (const templateEntry of templateIds) {
          const templateId = typeof templateEntry === 'string' ? templateEntry : templateEntry.id;
          const fullTemplateId = `${categoryId}-${familyId}-${templateId}`;

          if (!styleEnhancements[fullTemplateId]) {
            // Template 通常繼承 Family 的 tags，所以這裡只記錄但不算錯誤
            // console.log(`     ⚠️  Template: ${fullTemplateId} - 無獨立 tags（將繼承 family）`);
          }
        }
      } catch (error) {
        console.log(`  ⚠️  無法載入 ${categoryId}/${familyId}: ${error.message}`);
      }
    }
  }

  // 輸出統計
  console.log('\n\n📊 統計結果:');
  console.log(`✅ 已定義 tags 的風格: ${hasTags.length}`);
  console.log(`❌ 缺少 tags 的風格: ${missingTags.length}`);
  console.log(`📈 覆蓋率: ${(hasTags.length / (hasTags.length + missingTags.length) * 100).toFixed(1)}%`);

  if (missingTags.length > 0) {
    console.log('\n❌ 缺少 tags 的風格列表:');
    missingTags.forEach(item => {
      console.log(`  - ${item.id}`);
    });

    // 生成建議的 styleEnhancements 配置
    console.log('\n💡 建議補充的配置（複製到 styleTagsMapping.js）:');
    console.log('```javascript');
    missingTags.forEach(item => {
      console.log(`  '${item.id}': {`);
      console.log(`    primaryCategory: '${item.category}',`);
      console.log(`    categories: ['${item.category}'],`);
      console.log(`    tags: ['contemporary'], // TODO: 添加更多標籤`);
      console.log(`    relatedStyles: [] // TODO: 添加關聯風格 ID`);
      console.log(`  },`);
    });
    console.log('```');
  }

  return { hasTags, missingTags };
}

analyzeMissingTags().catch(console.error);
