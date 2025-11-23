import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateMetadataPath = path.join(__dirname, 'src/data/metadata/templateMetadata.json');
const templateMetadata = JSON.parse(fs.readFileSync(templateMetadataPath, 'utf8'));

const issues = [
  {
    name: 'Corporate Style',
    sourceId: 'corporate',
    metadataKeys: Object.keys(templateMetadata.templates).filter(k => k.toLowerCase().includes('corporate'))
  },
  {
    name: 'Maximalism',
    sourceId: 'maximalism',
    metadataKeys: Object.keys(templateMetadata.templates).filter(k => k.toLowerCase().includes('maximal'))
  },
  {
    name: 'Kawaii Minimal',
    sourceId: 'kawaii-minimal',
    metadataKeys: Object.keys(templateMetadata.templates).filter(k => k.toLowerCase().includes('kawaii'))
  },
  {
    name: 'High Contrast Accessibility',
    sourceId: 'accessibilityHighContrast',
    metadataKeys: Object.keys(templateMetadata.templates).filter(k => 
      k.toLowerCase().includes('accessibility') && k.toLowerCase().includes('contrast'))
  },
  {
    name: 'Hand-Drawn Sketch',
    sourceId: 'hand-drawn-sketch',
    metadataKeys: Object.keys(templateMetadata.templates).filter(k => 
      k.toLowerCase().includes('sketch') || k.toLowerCase().includes('hand'))
  }
];

console.log('=== 詳細匹配失敗分析 ===');
console.log('');

issues.forEach((issue, index) => {
  const num = index + 1;
  console.log(num + '. ' + issue.name);
  console.log('─'.repeat(70));
  console.log('   源文件 ID: "' + issue.sourceId + '"');
  console.log('   Metadata 中的相關 keys: ' + (issue.metadataKeys.length > 0 ? '' : '❌ 無'));
  
  if (issue.metadataKeys.length > 0) {
    issue.metadataKeys.forEach(key => {
      console.log('      - "' + key + '"');
      
      const idLower = issue.sourceId.toLowerCase();
      const keyLower = key.toLowerCase();
      const match1 = keyLower.includes(idLower);
      const match2 = idLower.includes(keyLower);
      
      console.log('        匹配測試: keyLower.includes(idLower) = ' + match1);
      console.log('        匹配測試: idLower.includes(keyLower) = ' + match2);
      console.log('        結果: ' + (match1 || match2 ? '✅ 應該匹配' : '❌ 不匹配'));
    });
  }
  
  console.log('');
});

console.log('');
console.log('=== 根本原因分析 ===');
console.log('');

issues.forEach((issue, index) => {
  const num = index + 1;
  console.log(num + '. ' + issue.name + ':');
  
  if (issue.metadataKeys.length === 0) {
    console.log('   ❌ templateMetadata.json 中完全沒有包含相關關鍵詞的 key');
    console.log('   原因: metadata 生成腳本可能沒有掃描到這個模板');
  } else {
    const wouldMatch = issue.metadataKeys.some(key => {
      const idLower = issue.sourceId.toLowerCase();
      const keyLower = key.toLowerCase();
      return keyLower.includes(idLower) || idLower.includes(keyLower);
    });
    
    if (wouldMatch) {
      console.log('   ✅ 應該能匹配成功，但實際沒有顯示 NEW 徽章');
      console.log('   可能原因: metadata key 正確，但 isNew 可能為 false，或其他邏輯問題');
    } else {
      console.log('   ❌ ID 命名不一致，無法通過雙向模糊匹配');
      console.log('   源 ID: "' + issue.sourceId + '"');
      console.log('   Metadata keys: ' + issue.metadataKeys.join(', '));
    }
  }
  
  console.log('');
});
