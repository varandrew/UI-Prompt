import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stylesDir = path.join(__dirname, '../src/data/styles/generated');

// Chinese enhancement phrases mapped by style
const CHINESE_ENHANCEMENTS = {
  'flatDesign': '通过清晰的排版、去除阴影和渐变效果，强调内容优先。采用简洁高效的设计理念，创造现代化扁平设计系统，提供全面的视觉指导和系统化组件建议。',
  'fluent2': '微软最新设计系统，具备亚克力和云母材料效果，展现现代玻璃态美学和当代优雅设计。',
  'materialDesign': '综合性 Material Design 系统指南，展示设计原理、组件和交互模式。提供详细的设计系统指导和系统化组件规范。',
  'minimalism': '"少即是多"设计哲学，强调留白、简洁排版和必要元素。通过极致简洁和优雅设计打造高效界面。',
  'scrollNarrative': '滚动驱动的叙事设计，采用视差效果和滚动交互讲述沉浸式故事。',
  'skeuomorphism': '模拟真实纹理、阴影和材质创造逼真数字界面。采用深度设计和触觉逼真度，增强用户体验。',
  'typography': '设计风格展现文本视觉表现力，通过排版传达信息和情感。强调文字设计和排版创意。',
  'glassmorphism': '创造现代透明界面，采用毛玻璃效果和复杂背景模糊。完美适用于金融科技应用、SaaS产品和溢价品牌。',
  'minimalism': '简洁高效的扁平设计系统，无阴影无渐变，强调内容和创建高效界面。',
  'brutalism': '大胆排版、高对比度和原始美学，故意打破传统设计规则。创造强有力、宣言式的界面设计。',
  'memphis': '1980年代意大利设计运动，采用大胆色彩、几何形状和不对称布局。创造充满活力和几何大胆的设计。',
  'neon': '多层文本阴影搭配电气效果和闪烁动画，创造强烈霓虹光芒。模拟霓虹灯效果的电气活力。',
  'glassmorphism': '玻璃态效果搭配模糊背景，创造透明浮动的轻盈视觉体验。完美适用于现代科技应用。',
  'industrial': '工业设计风格适合技术产品和后台管理系统。强调功能性和实用主义美学，采用深色调和粗体大写排版。',
  'leather': '皮革质感风格采用径向渐变、噪点纹理和缝线细节。营造厚重奢华的视觉体验，适合高端应用。',
  'paperCutout': '纸质剪贴风格采用分层元素和阴影效果。创造复杂纸质视觉和动态内容组织。',
  'blueprint': '技术蓝图风格采用工程图纸美学，展现严谨结构化布局。适合技术仪表板和工程应用。',
  'nature': '自然启发的视觉效果家族，采用极光、波浪和粒子效果。创造自然生物启发的沉浸体验。',
  'inkWash': '传统中国水墨画启发的设计风格，采用水墨渐变和意义笔划。融合传统美学与当代数字设计。',
  'fabric': '织物纹理搭配布料质感和交织效果。创造纹理丰富的沉浸数字体验。',
  'glow': '盒阴影光晕搭配脉冲动画和呼吸效果。生成动态光晕和视觉活力。',
  'grain': 'SVG 噪点搭配电影纹理和复古效果。创造复古真实感和怀旧视觉特征。',
  'cube3d': '六面立方体搭配透视旋转和完整3D结构。创造沉浸式三维交互可视化。',
  'holographic': '彩虹光谱搭配动态色调旋转和未来感。生成全息色彩过渡和动态视觉效果。',
  'holographicFoil': '全息箔纸效果搭配虹色和彩虹色转移。反射表面特性和彩虹色转移。',
  'neonCyberpunk': '霓虹赛博朋克设计采用充满活力的霓虹色彩和深色背景。融合数字科技与视觉反叛。',
  'gradients': '充满活力的渐变设计搭配平滑色彩过渡和现代感。提供流畅色彩进化和动态视觉演进。',
  'kawaiiMinimal': '可爱极简设计采用可爱活泼元素和极简主义。融合可爱设计与极简精妙。',
  'liminalSpace': '模糊过渡空间设计代表两个状态之间的存在。创造心理模糊和冥想氛围。',
  'smoke': '径向渐变搭配极端模糊和缓慢上升。生成美丽雾气般的大气效果。',
  'utilityFirst': '功能优先设计哲学强调最小自定义CSS。专注功能组合和实用设计实现。',
  'biophilic': '生物亲合设计风格适合健康和生活方式。融合自然元素促进健康和环保意识。',
  'duotone': '双色调色方案采用两种对比色创造戏剧视觉。提供大胆对比和戏剧视觉冲击。',
  'natural': '自然有机设计受自然启发采用土色调和植物元素。融合植物学元素与丰富自然温暖。',
  'scandi': '斯堪的纳维亚设计哲学采用极简美学和原材料。强调功能性和自然美感。',
  'sciFiHud': '科幻HUD风格适合数据可视化和系统监控。适合未来仪表板和技术呈现。',
  'soft-ui': '柔和圆角搭配温和阴影和平滑过渡。强调舒适和亲近感的界面设计。',
  'wabiSabi': '侘寂设计哲学接纳不完美和自然美。展现精致极简和精致真实性。',
  'auroraGlass': '梯度极光色彩搭配动态光线和流动透明。为魔法应用和梦幻用户体验。',
  'darkMode': '深色模式设计采用深色调和高对比度。创造眼睛友好的深色美学和精致平衡。',
  'generativeArt': '生成艺术设计采用算法创建模式和粒子。生成动态模式和视觉创意。',
  'monochrome': '单色设计仅采用黑白灰创造优雅界面。实现永恒优雅通过灰度精妙。',
  'organic': '自然有机设计风格采用流动动画和温暖土色调。特色生物形态和流动自然形态。',
  'particle': '小点搭配光晕和随机漂浮效果。生成动态粒子系统和交互粒子。',
  'spotlight': '移动径向光创造焦点照明和舞台效果。生成戏剧光线效果和焦点高亮。',
  'arcadeCRT': 'CRT监视器扫描线效果搭配霓虹光晕和RGB色差。创造真实街机复古美学。',
  'darkAcademia': '古典图书馆美学采用深色调和羊皮纸纹理。创造学术精妙和历史氛围。',
  'digitalRetro': '数字复古美学融合80-90年代电脑图形与现代设计。结合怀旧数字遗产。',
  'steampunk': '复古科幻风格融合维多利亚美学与蒸汽动力机制。融合机械复杂和复古未来。',
  'bentoGrids': '便当盒网格布局采用不同卡片尺寸和现代组织。创造灵活布局和有组织的组合。',
  'light': '创建霓虹、环境和聚光灯效果通过多层阴影。构建发光效果和辐射视觉呈现。',
  'neoBrutalism': '大胆原始设计风格采用高对比、粗边框和活跃霓虹色彩。融合数字粗野和当代大胆。',
  'mouseTracking': '专注鼠标跟踪效果强调光标跟随响应和光晕反馈。创造交互响应和参与光标反馈。',
  'bauhaus': '1919年德国包豪斯学校发源的设计风格。强调几何形式和功能现代主义。',
  'swissDesign': '现代主义网格系统采用Helvetica排版和最小色调。强调数学精确和优雅现代。',
  'synthwave': '视觉风格融合80年代复古未来美学与霓虹色彩。融合复古未来怀旧和霓虹梦景。',
  'antiDesign': '大胆实验风格打破设计规则和拒绝既定约定。创造激发性创意和非约定表达。',
  'liquid': '变形动画搭配径向渐变和模糊混合。创造流体动画和变形视觉过渡。',
  'outlineStyle': '设计风格通过线条定义形状，强调极简和清晰视觉。创造极简线条艺术和视觉清晰。',
  'vaporwave': '80年代电脑美学和网络艺术融合，采用霓虹渐变。融合实验网络艺术和数字超现实。',
  '3dElements': '三维设计元素采用深度、阴影和透视效果。创造真实三维视觉和逼真视角呈现。',
  'accessibility': '可访问UI设计采用强色彩对比和清晰视觉等级。确保包容设计和通用可用性。',
  'claymorphism': '粘土质感3D设计风格适合创意设计和插画。创造柔软雕塑美学和创意活泼。',
  'comicBook': '经典美式漫画风格采用分格布局和动作线条。采用视觉叙事和表达插画风格。',
  'y2k': '千禧年设计美学采用玻璃态、气泡装饰和青蓝渐变。营造千禧代怀旧和活泼数字美学。',
  'neonNoir': '霓虹黑色电影融合赛博朋克和电影黑色电影氛围。创造神秘心情和大气紧张。',
  'newspaper': '传统报纸布局技术：首字下沉、多列网格和衬线排版。创造编辑精妙和出版设计。',
  'retroFuturism': '1980年代复古未来数字美学受早期电脑和科幻启发。融合怀旧计算和数字时间旅行。',
  'retroOS': '经典Windows 95/98图形用户界面完美重现。完美再现怀旧计算和复古数字魅力。',
  'artDeco': '1920-1930年代奢华风格采用几何模式和金色装饰。采用对称组合和装饰宏伟。',
  'popArt': '流行艺术风格采用鲜艳色彩和大胆视觉冲击。创造充满活力的视觉能量和流行审美。'
};

const updated = [];
let processed = 0;

function scanAndEnhance(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanAndEnhance(fullPath);
    } else if (entry === 'manifest.json') {
      processed++;
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      const styleId = path.basename(path.dirname(fullPath));
      const currentZhDesc = content.family?.description?.['zh-CN'] || '';

      // Check if Chinese needs enhancement
      if (currentZhDesc && currentZhDesc.length < 100) {
        let enhancement = CHINESE_ENHANCEMENTS[styleId];

        if (!enhancement) {
          // Use generic enhancement if specific not found
          enhancement = '完美适用于现代应用的独特视觉语言。融合美学原理与功能设计元素，创造引人入胜的用户体验。';
        }

        const newZhDesc = currentZhDesc + enhancement;
        content.family.description['zh-CN'] = newZhDesc;

        fs.writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n');

        updated.push({
          file: styleId,
          oldLength: currentZhDesc.length,
          newLength: newZhDesc.length,
          added: newZhDesc.length - currentZhDesc.length
        });
      }
    }
  }
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log('✨ ENHANCING ALL CHINESE DESCRIPTIONS');
console.log('═══════════════════════════════════════════════════════════\n');

scanAndEnhance(stylesDir);

console.log('📊 Processing Summary:\n');
console.log('  Total files scanned: ' + processed);
console.log('  Files enhanced: ' + updated.length);
console.log('  Files skipped: ' + (processed - updated.length));
console.log('');

if (updated.length > 0) {
  console.log('📈 Enhancement Details:\n');
  updated.slice(0, 15).forEach((item, i) => {
    console.log((i + 1) + '. ' + item.file);
    console.log('   ' + item.oldLength + ' → ' + item.newLength + ' chars (+' + item.added + ')');
  });

  if (updated.length > 15) {
    console.log('  ... and ' + (updated.length - 15) + ' more');
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('✅ Enhanced ' + updated.length + ' style cards with rich Chinese descriptions!');
  console.log('═══════════════════════════════════════════════════════════\n');
} else {
  console.log('✅ All Chinese descriptions already rich!\n');
}
