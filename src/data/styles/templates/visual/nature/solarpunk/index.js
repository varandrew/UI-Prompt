// Single template module: Nature — Solarpunk Eco-Tech
// 太阳庞克 - 绿能未来生态科技设计

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './FullPageDemo';

export const solarpunk = {
  id: 'visual-nature-solarpunk',
  title: 'styles.visual.solarpunk.title',
  description: 'styles.visual.solarpunk.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // Full Page Preview
  fullPageHTML,
  fullPageStyles,

  customPrompt: {
    'zh-CN': `核心理念：生态科技融合 + 可持续能源主题 + 有机自然元素

设计要点：
1. 绿色生态配色 — 主色: #2d5016 (深绿), 强调色: #d4af37 (金黄), 背景: linear-gradient(180deg, #f5faf0 0%, #e8f3d8 100%)
2. 太阳光晕动画 — radial-gradient + blur(30px) + animation: sun-glow 8s infinite
3. 有机形态元素 — 飘浮叶子、藤蔓轨迹，使用 border-radius: 50% 0 50% 50% 创造自然形状
4. 生态图标系统 — ☀️ 🌱 💧 👥 结合 SVG 自定义太阳能图标
5. 渐变文字效果 — background: linear-gradient(135deg, #2d5016, #d4af37); -webkit-background-clip: text
6. 适用场景 — 环保科技平台、可持续能源仪表板、生态社区应用

配色方案（绿能自然）：
- 主色: #2d5016 (森林深绿), #d4af37 (太阳金黄)
- 浅色: #e8f3d8 (嫩绿), #f5faf0 (极浅绿)
- 强调: rgba(212, 175, 55, 0.3) (太阳光晕)

关键 CSS 示例：
\`\`\`css
/* 太阳光晕动画 */
.sun-orb {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at 30% 30%,
    rgba(212, 175, 55, 0.3),
    rgba(212, 175, 55, 0.05));
  border-radius: 50%;
  filter: blur(30px);
  animation: sun-glow 8s ease-in-out infinite;
}

@keyframes sun-glow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

/* 有机形态叶子 */
.leaf {
  width: 120px;
  height: 120px;
  opacity: 0.15;
  background: radial-gradient(ellipse at 30% 30%,
    rgba(45, 80, 22, 0.3), transparent);
  border-radius: 50% 0 50% 50%;
  animation: float-leaf 15s ease-in-out infinite;
}

@keyframes float-leaf {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, -20px) rotate(20deg); }
}

/* 生态数据卡片 */
.eco-card {
  background: white;
  border: 2px solid #e8f3d8;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(45, 80, 22, 0.1);
}

/* 绿能渐变按钮 */
.eco-btn {
  background: linear-gradient(135deg, #2d5016, #d4af37);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.eco-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(45, 80, 22, 0.3);
}
\`\`\`

重要提示：
- 使用柔和的绿色渐变背景，营造自然生态氛围
- 所有动画应流畅缓慢 (8s-15s)，模拟自然韵律
- 结合 emoji 生态图标 (☀️🌱💧) 增强可持续主题
- 避免生硬边角，多使用圆润 border-radius
- 文字使用渐变色 (#2d5016 → #d4af37) 强调能量流动`,

    'en-US': `Core Concept: Eco-tech fusion + Sustainable energy theme + Organic natural elements

Design Points:
1. Green ecological palette — Primary: #2d5016 (forest green), Accent: #d4af37 (solar gold), Background: linear-gradient(180deg, #f5faf0 0%, #e8f3d8 100%)
2. Solar glow animation — radial-gradient + blur(30px) + animation: sun-glow 8s infinite
3. Organic shape elements — Floating leaves, vine trails, using border-radius: 50% 0 50% 50% for natural shapes
4. Ecological icon system — ☀️ 🌱 💧 👥 combined with custom SVG solar icons
5. Gradient text effect — background: linear-gradient(135deg, #2d5016, #d4af37); -webkit-background-clip: text
6. Use cases — Environmental tech platforms, sustainable energy dashboards, ecological community apps

Color Scheme (Green Energy Natural):
- Primary: #2d5016 (deep forest green), #d4af37 (solar gold)
- Light: #e8f3d8 (tender green), #f5faf0 (very light green)
- Accent: rgba(212, 175, 55, 0.3) (solar glow)

Key CSS Examples:
\`\`\`css
/* Solar glow animation */
.sun-orb {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at 30% 30%,
    rgba(212, 175, 55, 0.3),
    rgba(212, 175, 55, 0.05));
  border-radius: 50%;
  filter: blur(30px);
  animation: sun-glow 8s ease-in-out infinite;
}

@keyframes sun-glow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

/* Organic leaf shape */
.leaf {
  width: 120px;
  height: 120px;
  opacity: 0.15;
  background: radial-gradient(ellipse at 30% 30%,
    rgba(45, 80, 22, 0.3), transparent);
  border-radius: 50% 0 50% 50%;
  animation: float-leaf 15s ease-in-out infinite;
}

@keyframes float-leaf {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, -20px) rotate(20deg); }
}

/* Ecological data card */
.eco-card {
  background: white;
  border: 2px solid #e8f3d8;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(45, 80, 22, 0.1);
}

/* Green energy gradient button */
.eco-btn {
  background: linear-gradient(135deg, #2d5016, #d4af37);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.eco-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(45, 80, 22, 0.3);
}
\`\`\`

Important Notes:
- Use soft green gradient backgrounds to create natural ecological atmosphere
- All animations should be smooth and slow (8s-15s) to mimic natural rhythms
- Combine emoji ecological icons (☀️🌱💧) to enhance sustainability theme
- Avoid sharp corners, use rounded border-radius extensively
- Apply gradient colors to text (#2d5016 → #d4af37) to emphasize energy flow`
  },

  // 模板級 stylePrompt：敘事化描述 Solarpunk 綠能未來風格
  stylePrompt: {
    'zh-CN': `角色：你是一位专精於「Solarpunk 太阳庞克」風格的 UI 设計師，需要透過綠植、阳光与友善科技塑造一個樂觀、可持續的未來世界。

场景定位：
- 適用於再生能源平台、永續城市儀表板、環境数据可視化應用与社区专案网站。
- 界面需要同時傳遞「科技感」与「自然感」，让使用者感覺科技是溫柔且為人服务的。

视觉设计理念：
- 整体用大面積柔和淺綠与暖白作為背景，仿佛阳光照在城市与植物之上。
- 元件边角圓潤、阴影輕柔，避免冷硬的工業线條，让所有区塊看起來像友善的模組。
- 使用葉片、太阳、城市輪廓、風力或光伏圖标等象徵元素點綴，但不要堆疊成過度裝飾。

材质与质感：
- 結合玻璃般的半透明面板与紙張质感的卡片，營造「乾淨、清爽、可觸摸」的介面质感。
- 適度使用金色或暖黃色發光效果，代表太阳能与能量流動，避免刺眼的高對比光暈。

交互体验：
- 動画應該像自然循環一樣平稳：例如太阳光暈輕微脈動、葉子緩慢飄動、数据條平滑增長。
- Hover 效果以亮度与阴影微調為主，不做突兀的位移或旋轉，保持溫和与稳定。

氛围营造：
- 整体氛圍是積極、明亮且具社群感的未來城市，而非冰冷的科幻實驗室。
- 让使用者覺得每一個按鈕与卡片都是「可持續系統的一部分」，願意在其中停留与探索。`,

    'en-US': `Role: You are a UI designer specialized in Solarpunk aesthetics, blending greenery, sunlight and humane technology into an optimistic, sustainable future world.

Scene:
- Designed for renewable energy platforms, sustainable city dashboards, environmental data apps and community projects.
- The interface must simultaneously communicate technology and nature, making tech feel gentle and in service of people.

Visual philosophy:
- Use wide fields of soft light greens and warm off-whites as the base, as if sunlight is washing over cities and plants.
- Components should have rounded corners and gentle shadows, avoiding harsh industrial lines so every block feels friendly.
- Incorporate symbolic elements like leaves, suns, skylines, wind turbines or solar panels as accents, not overwhelming decorations.

Material & texture:
- Combine glassy, semi-transparent panels with paper-like cards to create a clean, tactile surface quality.
- Use subtle golden or warm-yellow glows to represent solar energy and flow, keeping contrasts soft rather than glaring.

Interaction:
- Animations should feel cyclical and calm: solar halos pulsing slightly, leaves drifting slowly, data bars growing smoothly.
- Hover states rely on small shifts in brightness and shadow instead of abrupt motion, reinforcing a sense of stability and care.

Mood:
- The overall mood is bright, communal and hopeful—a lived-in future city rather than a sterile sci-fi lab.
- Users should feel that every card and button is part of a larger sustainable system, inviting them to stay, explore and participate.`
  }
};

export default solarpunk;
