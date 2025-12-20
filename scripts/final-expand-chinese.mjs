import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// More comprehensive extensions for remaining short descriptions
const EXTENDED_CHINESE = {
  'artDeco': '1920-1930年代奢華藝術設計風格，採用幾何圖案、對稱構圖和黃金裝飾細節。展現裝飾藝術美學和華麗視覺表現。',
  'darkAcademia': '古典圖書館美學設計風格，採用深色調、羊皮紙紋理和燭光氛圍。創造學術精緻感、歷史文學氛圍和知識性格調。',
  'digitalRetro': '80-90年代電腦圖形融合現代設計敏感性的風格。結合懷舊數位遺產、經典電腦美學和當代設計理念。',
  'newspaper': '傳統報紙佈局技巧啟發的設計風格，採用首字放大、多欄網格和襯線排版。創造編輯專業風格和出版設計感。',
  'steampunk': '復古科幻風格，融合維多利亞時代美學和蒸汽動力機械。採用黃銅元素、齒輪和機械複雜感創造奇幻氛圍。',
  'swissDesign': '現代主義網格系統設計，採用Helvetica排版和最小化色調。強調網格精確度、數學優雅和現代主義原則。',
  '3dElements': '三維設計元素系列，具有深度、陰影和透視效果。通過三維表現形成立體感、真實感和視覺深度。',
  'accessibility': '無障礙UI設計風格，強調色彩對比、清晰視覺層級和鍵盤友好的互動。創造包容性設計，確保所有用戶都能便捷使用。',
  'antiDesign': '大膽實驗的設計風格，打破設計規則並拒絕既定慣例。創造富有挑戰性的設計，展現叛逆創意和非傳統美學。',
  'auroraGlass': '極光色彩搭配動態光影和流動透明的設計風格。採用彩虹色漸變和玻璃態效果營造魔幻夢幻氛圍和視覺奇妙感。',
  'biophilic': '生物親和設計風格，適合健康、環保和生活方式相關應用。強調自然元素、植物紋樣、生態和環保意識。',
  'comicBook': '經典美式漫畫風格設計，採用分格佈局、動作線條和對話氣泡。使用半色調點陣和漫畫視覺語言創造動態敘事和視覺故事。',
  'fabric': '織物紋理設計風格，採用布料紋理和交錯效果。創造觸覺感和真實感，展現織物材質特性和視覺質感。',
  'generativeArt': '生成藝術設計風格，採用演算法創建圖案、粒子和動態視覺。創造動態視覺、互動藝術體驗和程序化美學。',
  'glassmorphism': '玻璃態設計風格，採用毛玻璃效果和背景模糊。創造現代透明介面、精緻視覺層級和浮動感視覺體驗。',
  'gradients': '充滿活力的漸變設計風格，採用平滑色彩過渡和現代美學。提供色彩動態演變、視覺深度和流暢視覺過渡。',
  'holographic': '彩虹光譜搭配動態色調旋轉和未來感效果。創造動態視覺效果、全息氛圍和光學變彩視覺。',
  'holographicFoil': '全息箔紙效果設計，採用彩虹色和虹彩色調。創造反射表面特性、彩虹色位移效果和光學變彩感。',
  'inkWash': '傳統中國水墨畫啟發的設計風格，採用水墨漸變和有意義的構圖。結合傳統美學與當代數位設計、東方美感。',
  'leather': '深色皮革面板風格設計，採用徑向漸變和皺紋紋理。通過皮革特性營造厚重奢華的視覺體驗和高級感。',
  'light': '霓虹、環境和聚光燈效果的光線設計，透過多層陰影和發光效果。建構發光效果、閃耀光線互動和光學特效。',
  'liminalSpace': '空靈過渡空間設計風格，代表兩個狀態之間的存在。創造不安定但引人思考的氛圍、心理學感受和超現實感。',
  'liquid': '流動動畫搭配徑向漸變和模糊混合的設計。創造液體視覺效果、形態變化的視覺轉換和流體美學。',
  'monochrome': '單色設計風格，僅使用黑、白和灰色創造優雅介面。通過灰度實現永恆優雅、精緻視覺平衡和簡潔美學。',
  'natural': '自然和有機設計風格，採用大地色調和植物元素。展現自然溫暖、有機視覺特性和環保色彩調和。',
  'neoBrutalism': '當代粗野主義設計風格，採用高對比、粗體邊框和鮮豔霓虹色。融合數位原始性、當代大膽風格和視覺衝擊。',
  'neon': '多層文字陰影搭配電子效果和閃爍動畫的設計。創造強烈霓虹發光效果、高能視覺和電子光學美學。',
  'neonCyberpunk': '霓虹賽博朋克設計風格，採用鮮豔霓虹色和深色背景。創造未來感紫紅色調、數位反叛精神和賽博美學。',
  'neonNoir': '霓虹黑色電影風格設計，融合賽博朋克美學和電影黑色調。創造神秘氛圍、緊張感和電影化視覺語言。',
  'organic': '自然有機設計風格，採用流動動畫和溫暖大地色調。展現生物形態形狀、有機美學和自然流動感。',
  'outlineStyle': '線條輪廓設計風格，透過線條定義形狀強調最小化和清晰視覺層級。創造簡潔線條藝術風格和視覺純淨感。',
  'paperCutout': '紙張剪裁設計風格，採用分層元素和陰影創造立體剪紙效果。展現精緻分層構圖、層次深度和紙藝美學。',
  'particle': '小點搭配發光效果和隨機浮動的粒子設計。生成動態粒子效果、互動視覺系統和流動粒子美學。',
  'scandi': '北歐設計哲學風格，採用最小化美學和自然原始材質。強調功能性、永恆簡潔美和斯堪地納維亞美學。',
  'sciFiHud': '科幻抬頭顯示器風格設計，適合數據視覺化和系統監控。展現先進技術氛圍、未來感和高科技介面風格。',
  'smoke': '徑向漸變搭配極端模糊和緩慢上升的設計。生成煙霧視覺效果、氣態大氣效果和視覺神秘感。',
  'softUI': '柔和、圓角介面設計搭配溫和陰影和平滑過渡。強調舒適親和力、溫暖體驗和友善視覺語言。',
  'solarpunk': '陽光朋克風格設計，融合生態烏托邦和樂觀未來願景。展現永續未來、環保科技美學和樂觀視覺。',
  'spotlight': '移動徑向光、焦點照明和舞台效果的設計。產生戲劇性聚光燈效果、焦點突出和舞台光學美學。',
  'utilityFirst': '功能優先的設計哲學風格，最小化自訂CSS並聚焦功能構圖。強調實用效率、快速開發和實用美學。',
  'wabiSabi': '侘寂設計哲學，擁抱不完美和自然美與精緻最小化美學。展現精緻真實性、完美缺陷和東方美學。',
  'y2k': '千禧年設計美學風格，採用玻璃態、氣泡裝飾和青藍漸變。展現千禧年懷舊、趣味數位美學和Y2K審美。',
  'popArt': '流行藝術風格設計，採用鮮豔對比色和大膽圖案。創造視覺衝擊和藝術表現力，展現波普藝術美學。'
};

const stylesDir = path.join(__dirname, '../src/data/styles/generated');
const updated = [];
let alreadyLong = 0;

function scanAndUpdate(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanAndUpdate(fullPath);
    } else if (entry === 'manifest.json') {
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const familyId = path.basename(path.dirname(fullPath));
      let zhDesc = content.family?.description?.['zh-CN'] || '';

      // If Chinese description exists and is shorter than 60 chars, update it
      if (zhDesc && zhDesc.length < 60 && EXTENDED_CHINESE[familyId]) {
        const newZhDesc = EXTENDED_CHINESE[familyId];
        content.family.description['zh-CN'] = newZhDesc;
        fs.writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n');

        updated.push({
          file: familyId,
          oldLength: zhDesc.length,
          newLength: newZhDesc.length
        });
      } else if (zhDesc.length >= 60) {
        alreadyLong++;
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════');
console.log('📝 FINAL EXPANSION OF CHINESE DESCRIPTIONS');
console.log('═══════════════════════════════════════════════\n');

scanAndUpdate(stylesDir);

console.log('✅ Updated ' + updated.length + ' descriptions:\n');

updated.forEach((item, i) => {
  console.log((i + 1) + '. ' + item.file);
  console.log('   ' + item.oldLength + ' → ' + item.newLength + ' chars (+' + (item.newLength - item.oldLength) + ')');
});

console.log('\n📊 Summary:');
console.log('  Updated: ' + updated.length);
console.log('  Already 60+: ' + alreadyLong);
console.log('\n═══════════════════════════════════════════════\n');
