import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CHINESE_EXTENSIONS = {
  'mouseTracking': '，創造互動式介面，強調用戶與界面的實時互動和視覺反應。',
  'magazine': '，創造編輯專業風格，適合內容豐富的應用和出版物。',
  'layout': '，創造靈活的版面，適合內容多樣化的應用和響應式佈局。',
  'arcadeCRT': '，創造真實復古街機視覺和沉浸式懷舊氛圍。',
  'artDeco': '，展現對稱構圖和華麗裝飾美學。',
  'bauhaus': '，展現幾何精確度和功能現代主義原則。',
  'darkAcademia': '，創造學術精緻感和歷史文學氛圍。',
  'digitalRetro': '，結合懷舊數位遺產和當代美學設計。',
  'newspaper': '，創造編輯專業風格和優雅出版設計。',
  'steampunk': '，採用黃銅元素和機械複雜感創造奇幻風格。',
  'synthwave': '，創造復古未來懷舊感和夜間夢幻美學。',
  'vhsAesthetic': '，創造懷舊類比感和復古視頻特性。',
  'retroFuturism': '，展現懷舊未來感和數位時間旅行美學。',
  'retroOS': '，展現懷舊電腦介面和復古數位魅力。',
  'filmNoir': '，展現電影黑色神秘氛圍和視覺戲劇性。',
  'frutigerAero': '，展現蘋果透光玻璃質感和輕盈優雅。',
  'midCenturyModern': '，展現經典現代主義和時代優雅特性。',
  'popArt': '，創造視覺衝擊和藝術表現力。',
  'popArtStyle': '，創造視覺衝擊和文化藝術性表達。',
  'layoutStyles': '，提供現代組織方法和動態視覺節奏。',
  'bentoGrids': '，創造靈活的版面設計和現代組織方法。',
  'biophilic': '，強調自然元素，促進健康和環保意識。',
  'blueprint': '，展現嚴謹的結構化佈局和專業技術氛圍。',
  'claymorphism': '，採用柔和雕塑美學和創意表現。',
  'comicBook': '，使用半色調點陣和漫畫視覺語言創造動態敘事。',
  'darkMode': '，提供眼睛友好的深色美學和精細視覺平衡。',
  'duotone': '，通過大膽對比和動態構圖實現視覺衝擊。',
  'fabric': '，創造觸覺感和真實感，展現材質特性。',
  'generativeArt': '，創造動態視覺和互動藝術體驗。',
  'glassmorphism': '，創造現代透明介面，展現精緻視覺層級。',
  'glow': '，創造發光粒子系統視覺，展現動態光線互動。',
  'gradients': '，提供色彩動態演變和視覺深度。',
  'grain': '，創造復古真實性和懷舊視覺特性。',
  'handDrawnSketch': '，創造溫暖親切的視覺體驗，展現藝術表現和創意。',
  'holographic': '，創造動態視覺效果和全息氛圍。',
  'holographicFoil': '，創造反射表面特性和彩虹色位移效果。',
  'industrial': '，強調功能性和實用主義美學，採用深色調和機械元素。',
  'inkWash': '，結合傳統美學與當代數位設計。',
  'kawaiiMinimal': '，創造可愛友好的介面，結合簡潔性與趣味性。',
  'leather': '，通過皮革特性營造厚重奢華的視覺體驗。',
  'light': '，建構發光效果和閃耀光線互動。',
  'liminalSpace': '，創造不安定但引人思考的氛圍。',
  'liquid': '，創造液體視覺效果和形態變化的視覺轉換。',
  'monochrome': '，通過灰度實現永恆優雅和精緻視覺平衡。',
  'natural': '，展現自然溫暖和有機視覺特性。',
  'nature': '，創造沉浸式自然視覺體驗。',
  'neoBrutalism': '，融合數位原始性和當代大膽風格。',
  'neon': '，創造強烈霓虹發光效果和高能視覺。',
  'neonCyberpunk': '，創造未來感紫紅色調和數位反叛精神。',
  'neonNoir': '，創造神秘氛圍和緊張感。',
  'organic': '，展現生物形態形狀和有機美學。',
  'outlineStyle': '，創造簡潔線條藝術風格。',
  'paperCutout': '，展現精緻分層構圖。',
  'particle': '，生成動態粒子效果和互動視覺系統。',
  'scandi': '，強調功能性和永恆簡潔美。',
  'sciFiHud': '，展現先進技術氛圍和未來感。',
  'smoke': '，生成氣態大氣效果和視覺神秘感。',
  'soft-ui': '，創造友善舒適的介面和溫暖視覺體驗。',
  'softUI': '，強調舒適親和力和溫暖體驗。',
  'solarpunk': '，展現永續未來和環保科技美學。',
  'spotlight': '，產生戲劇性聚光燈效果和焦點突出。',
  'utilityFirst': '，強調實用效率和快速開發。',
  'vaporwave': '，創造實驗性網路藝術和數位超現實主義。',
  'wabiSabi': '，展現精緻真實性和完美缺陷。',
  'y2k': '，展現千禧年懷舊和趣味數位美學。'
};

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const updated = [];

function scanAndExpand(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanAndExpand(fullPath);
    } else if (entry === 'manifest.json') {
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const familyId = path.basename(path.dirname(fullPath));
      let zhDesc = content.family?.description?.['zh-CN'] || '';

      // If Chinese description is too short, expand it
      if (zhDesc && zhDesc.length < 60 && CHINESE_EXTENSIONS[familyId]) {
        const extension = CHINESE_EXTENSIONS[familyId];
        const newZhDesc = zhDesc + extension;

        if (newZhDesc.length >= 60) {
          content.family.description['zh-CN'] = newZhDesc;
          fs.writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n');

          updated.push({
            file: familyId,
            oldLength: zhDesc.length,
            newLength: newZhDesc.length
          });
        }
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════');
console.log('📝 EXPANDING SHORT CHINESE DESCRIPTIONS');
console.log('═══════════════════════════════════════════════\n');

scanAndExpand(stylesDir);

console.log('✅ Expanded ' + updated.length + ' descriptions:\n');

updated.forEach((item, i) => {
  console.log((i + 1) + '. ' + item.file);
  console.log('   ' + item.oldLength + ' → ' + item.newLength + ' chars (+' + (item.newLength - item.oldLength) + ')');
});

console.log('\n═══════════════════════════════════════════════');
console.log('✅ Chinese descriptions expanded!');
console.log('═══════════════════════════════════════════════\n');
