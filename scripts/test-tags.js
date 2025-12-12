/**
 * 測試 Feature Tags 是否正確生成
 * 運行: node scripts/test-tags.js
 */

import { enhanceStyle } from '../src/data/metadata/styleTagsMapping.js';

// 測試用的風格對象
const testStyles = [
  {
    id: 'core-flatDesign',
    title: 'Flat Design',
    description: 'A minimalist design approach with bold colors'
  },
  {
    id: 'visual-glassmorphism',
    title: 'Glassmorphism',
    description: 'Frosted glass effect with translucent backgrounds'
  },
  {
    id: 'visual-neonCyberpunk',
    title: 'Neon Cyberpunk',
    description: 'Futuristic neon lights in a dark cyberpunk setting'
  },
  {
    id: 'retro-artDeco',
    title: 'Art Deco',
    description: 'Classic geometric patterns from the 1920s'
  },
  {
    id: 'visual-unknownStyle',  // 測試自動推斷
    title: 'Unknown Style',
    description: 'A modern minimal design with gradients'
  }
];

console.log('🧪 測試 Feature Tags 生成...\n');

testStyles.forEach(style => {
  const enhanced = enhanceStyle(style);
  console.log(`\n📋 ${enhanced.id}`);
  console.log(`   Title: ${enhanced.title}`);
  console.log(`   Tags: [${enhanced.tags?.join(', ') || 'NONE'}]`);
  console.log(`   Primary Category: ${enhanced.primaryCategory || 'NONE'}`);
  console.log(`   Categories: [${enhanced.categories?.join(', ') || 'NONE'}]`);

  if (!enhanced.tags || enhanced.tags.length === 0) {
    console.log('   ❌ WARNING: 沒有 tags！');
  } else {
    console.log(`   ✅ ${enhanced.tags.length} tags 生成成功`);
  }
});

console.log('\n\n✅ 測試完成！');
