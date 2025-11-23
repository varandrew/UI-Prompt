const fs = require('fs');
const path = require('path');

const templateMetadataPath = path.join(__dirname, 'src/data/metadata/templateMetadata.json');
const templateMetadata = JSON.parse(fs.readFileSync(templateMetadataPath, 'utf8'));

// 要檢查的 5 個模板 ID
const targetIds = [
  'corporate',
  'maximalism', 
  'kawaii-minimal',
  'accessibilityHighContrast',
  'hand-drawn-sketch'
];

console.log('=== 模板 ID 匹配檢查 ===\n');

targetIds.forEach(id => {
  console.log(`\n🔍 檢查 ID: "${id}"`);
  console.log('─'.repeat(60));
  
  // 策略 1: 精確匹配
  const exactMatch = templateMetadata.templates[id];
  if (exactMatch) {
    console.log('✅ 精確匹配成功:', id);
    console.log('   isNew:', exactMatch.isNew);
    return;
  }
  
  // 策略 2: 雙向模糊匹配
  const allKeys = Object.keys(templateMetadata.templates);
  const idLower = id.toLowerCase();
  
  const matchedKey = allKeys.find(key => {
    const keyLower = key.toLowerCase();
    return keyLower.includes(idLower) || idLower.includes(keyLower);
  });
  
  if (matchedKey) {
    console.log('✅ 雙向模糊匹配成功:', matchedKey);
    console.log('   isNew:', templateMetadata.templates[matchedKey].isNew);
  } else {
    console.log('❌ 匹配失敗 - 沒有找到任何匹配的 key');
    
    // 顯示所有可能相關的 keys
    const relatedKeys = allKeys.filter(key => {
      const keyLower = key.toLowerCase();
      // 檢查是否包含 ID 中的任何單詞
      const idWords = idLower.split('-');
      return idWords.some(word => word.length > 3 && keyLower.includes(word));
    });
    
    if (relatedKeys.length > 0) {
      console.log('   可能相關的 keys:');
      relatedKeys.forEach(key => {
        console.log(`     - ${key} (isNew: ${templateMetadata.templates[key].isNew})`);
      });
    }
  }
});

console.log('\n\n=== 所有包含目標關鍵詞的 metadata keys ===\n');
const allKeys = Object.keys(templateMetadata.templates);
const keywords = ['corporate', 'maximal', 'kawaii', 'accessibility', 'sketch', 'hand'];

keywords.forEach(keyword => {
  const matches = allKeys.filter(key => key.toLowerCase().includes(keyword.toLowerCase()));
  if (matches.length > 0) {
    console.log(`\n關鍵詞 "${keyword}":`);
    matches.forEach(key => {
      console.log(`  - ${key} (isNew: ${templateMetadata.templates[key].isNew})`);
    });
  }
});
