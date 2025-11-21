// Frutiger Aero - OS Interface Template
// Frutiger Aero - 操作系统界面模板

import { frutigerAeroOSFullPageHTML, frutigerAeroOSFullPageStyles } from './frutigerAeroOSFullPage'

export const frutigerAeroOS = {
    id: 'retro-frutiger-aero-os',
    title: 'styles.retro.frutiger-aero.title',
    description: 'styles.retro.frutiger-aero.description',
    demoHTML: `
      <div class="w-full h-full bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-200 p-6 flex flex-col items-center justify-center gap-6">
        <div class="relative group">
          <div class="w-32 h-32 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-2xl p-4 transform transition-all duration-500 group-hover:scale-105">
            <div class="absolute top-3 left-4 w-16 h-16 bg-white/60 rounded-full blur-xl"></div>
            <div class="absolute top-6 right-4 w-10 h-10 bg-blue-200/60 rounded-full blur-lg"></div>
            <div class="relative z-10 flex items-center justify-center h-full">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-400/60 to-cyan-400/60 rounded-2xl backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="w-12 h-12 bg-white/50 backdrop-blur-md rounded-xl border border-white/70 shadow-lg flex items-center justify-center transform transition-all hover:scale-110">
            <div class="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg"></div>
          </div>
          <div class="w-12 h-12 bg-white/50 backdrop-blur-md rounded-xl border border-white/70 shadow-lg flex items-center justify-center transform transition-all hover:scale-110">
            <div class="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    fullPageHTML: frutigerAeroOSFullPageHTML,
    fullPageStyles: frutigerAeroOSFullPageStyles,
    colorScheme: {
      'zh-CN': '天空蓝 (#4DA6FF)、青蓝 (#66B3FF)、白色半透明 (#FFFFFF/40%)、青绿 (#00CED1)、柔和渐变',
      'en-US': 'Sky blue (#4DA6FF), cyan blue (#66B3FF), white translucent (#FFFFFF/40%), turquoise (#00CED1), soft gradients'
    },

    // 模板级 customPrompt (简短 Prompt，100-300字)
    customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Frutiger Aero OS」界面风格高度接近的 Frutiger Aero 风格操作系统 UI。
要求：保持当前示例中的「天空蓝渐变背景 + 半透明玻璃卡片 + 水滴气泡」整体构图，只允许替换图标含义、按钮数量与文案。输出使用语义化 HTML（或 JSX）与 TailwindCSS 风格原子类（或等价工具类方案），整体布局偏向桌面/启动器面板。

【使用场景】
- 场景：Y2K 未来主义主题首页、云桌面入口页、创意工具控制面板。
- 用户：对 Vista/Aero 时代 UI 有怀旧感的科技产品用户与设计爱好者。
- 目标：营造干净、清爽、玻璃感强烈的 OS 级界面，让用户联想到「未来但乐观」的系统环境。

【整体布局结构】
1. 背景层
   - 使用从天空蓝到青蓝的柔和渐变背景，顶部略亮、底部略深，营造天空或水面的空间感。
2. 中央玻璃卡片
   - 一块或几块矩形玻璃卡片居中排布，内部放置系统图标、应用入口或状态指示元素。
3. 次级图标区
   - 在主卡片下方或侧边放置一排较小的圆角图标按钮，作为快捷方式或模块入口。
4. 留白与对齐
   - 四周保留大量留白，整体元素居中或略偏上，方便后續擴展更多應用磚塊。

【色彩与材质】
1. 渐变背景
   - 建议颜色：Sky blue (#4DA6FF)、cyan blue (#66B3FF)、turquoise (#00CED1)，以线性或輕微徑向漸变呈現。
2. 玻璃卡片
   - 使用透明白背景（例如 rgba(255,255,255,0.4)），配合模糊（backdrop-filter: blur(12px)）和白色細边框表現玻璃质感。
3. 高光氣泡
   - 在卡片內外添加圓形高光或彩色光斑，模擬水滴与光线折射。

【阴影与深度】
1. 卡片阴影
   - 為玻璃卡片添加柔和的外阴影，給人懸浮於背景之上的感覺。
2. 氣泡光暈
   - 水滴氣泡應具备內發光与外圈模糊，營造晶体透明感。

【交互与动效】
1. 懸停效果
   - 卡片与圖标在 hover 時輕微放大（scale 約 1.05）並加深阴影或外光暈，過渡時間 200–300ms。
2. 呼吸動画
   - 可對光斑或背景光帶使用緩慢的呼吸式亮度/位移变化，節奏柔和，避免急劇閃爍。

【输出要求】
- 使用语义化 HTML/JSX 組織背景层、玻璃卡片与圖标区；
- 使用 TailwindCSS 原子类描述漸变背景、模糊、圓角与阴影；
- 生成的界面在「藍色漸变天空 + 半透明玻璃面板 + 水滴氣泡 + 柔和大圓角」這些关鍵特徵上，應与當前 Frutiger Aero OS 示例高度接近。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a Frutiger Aero OS-style interface that looks very close to the current “Frutiger Aero OS” demo.
Keep the sky-blue gradient background, translucent glass cards and crystal bubble highlights as the core composition. You may change icon meaning, number of buttons and text labels, but not the layout logic or material language. Output semantic HTML (or JSX) and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: Y2K futurism themed homepages, cloud desktop launchers, creative tool dashboards.
- Users: people nostalgic for Vista/Aero-era UI and optimistic “future OS” aesthetics.
- Goal: present a clean, airy OS-like surface with strong glassmorphism that feels futuristic yet friendly.

[Layout structure]
1. Background layer
   - A soft gradient from sky blue to cyan, slightly brighter at the top and deeper at the bottom to suggest sky or water.
2. Central glass tiles
   - One or more translucent white glass cards centered in the layout, containing system icons, launchers or status indicators.
3. Secondary icon strip
   - A row of smaller rounded icon buttons below or beside the main tile, acting as shortcuts.
4. Whitespace and alignment
   - Generous whitespace around the tiles, with content centered or slightly raised for a light, floating feel.

[Color and materials]
1. Gradients
   - Use sky blue (#4DA6FF), cyan blue (#66B3FF) and turquoise (#00CED1) in linear or subtle radial gradients.
2. Glass cards
   - Apply translucent white backgrounds (e.g., rgba(255,255,255,0.4)), blur and thin white borders to mimic frosted glass.
3. Bubble highlights
   - Add circular highlights and colored glows around cards and icons to simulate droplets and refraction.

[Shadows and depth]
1. Card shadows
   - Soft, wide shadows under glass cards to convey elevation above the background.
2. Bubble glow
   - Inner and outer glows on bubble elements to give them crystalline transparency.

[Interaction and motion]
1. Hover interactions
   - Cards and icons scale slightly (around 1.05) and gain stronger shadow or glow on hover, with 200–300ms easing.
2. Breathing animation
   - Apply slow breathing animations to background glows or highlight bands to suggest a “living system”.

[Output requirements]
- Use semantic HTML/JSX to structure the background, glass cards and icon areas;
- Use Tailwind-style utilities for gradients, blur, corner radius and shadows;
- The generated UI must preserve the recognisable traits of this Frutiger Aero OS demo: blue gradients, translucent glass panels, droplet-like highlights and soft, friendly rounded shapes.`
  },

    // 模板级 stylePrompt (详细 Prompt，1000-2000字)
    stylePrompt: {
      'zh-CN': `角色：你是专精于 Frutiger Aero 风格的 UI 设计师，专注于 2000 年代中期 Windows Vista、macOS Aqua 时代的玻璃质感设计。

场景定位：为科技产品、创意工具或怀旧 Y2K 主题网站打造具有水晶玻璃质感的界面，通过毛玻璃和渐变光晕传达未来主义和乐观感。

核心设计语言：

1. **玻璃态毛玻璃系统**：
   - 基础玻璃卡片：
     \`\`\`css
     .aero-glass-card {
       background: rgba(255, 255, 255, 0.4);
       backdrop-filter: blur(12px);
       -webkit-backdrop-filter: blur(12px);
       border: 1px solid rgba(255, 255, 255, 0.6);
       border-radius: 24px;
       box-shadow:
         0 8px 32px rgba(0, 0, 0, 0.1),
         inset 0 1px 0 rgba(255, 255, 255, 0.8);
     }
     \`\`\`

   - 多层玻璃效果：
     \`\`\`css
     .aero-glass-layered {
       position: relative;
     }

     .aero-glass-layered::before {
       content: '';
       position: absolute;
       inset: 0;
       background: linear-gradient(
         135deg,
         rgba(255, 255, 255, 0.6) 0%,
         rgba(255, 255, 255, 0.2) 50%,
         transparent 100%
       );
       border-radius: inherit;
       pointer-events: none;
     }
     \`\`\`

2. **渐变光晕背景**：
   - 主背景配方：
     \`\`\`css
     .aero-bg {
       background: linear-gradient(
         135deg,
         #4da6ff 0%,
         #66b3ff 25%,
         #80c0ff 50%,
         #99ccff 75%,
         #b3d9ff 100%
       );
     }
     \`\`\`

   - 多层渐变叠加：
     \`\`\`css
     .aero-bg-layered {
       background:
         radial-gradient(circle at 20% 30%, rgba(0, 206, 209, 0.3) 0%, transparent 50%),
         radial-gradient(circle at 80% 70%, rgba(102, 179, 255, 0.3) 0%, transparent 50%),
         linear-gradient(135deg, #4da6ff, #b3d9ff);
     }
     \`\`\`

配色方案：

主色调（天空渐变）：
- 天空蓝：#4DA6FF
- 青蓝色：#66B3FF
- 浅蓝色：#80C0FF
- 淡蓝色：#99CCFF
- 极淡蓝：#B3D9FF

强调色（清新点缀）：
- 青绿色：#00CED1
- 浅绿色：#7FFFD4
- 薄荷绿：#98FF98
- 柠檬黄：#FFFACD

玻璃透明度：
- 主玻璃：rgba(255, 255, 255, 0.4)
- 边框玻璃：rgba(255, 255, 255, 0.6)
- 高光玻璃：rgba(255, 255, 255, 0.8)

3. **水滴气泡效果**：
   \`\`\`css
   .aero-bubble {
     width: 100px;
     height: 100px;
     background: rgba(255, 255, 255, 0.5);
     backdrop-filter: blur(10px);
     border: 1px solid rgba(255, 255, 255, 0.7);
     border-radius: 50%;
     position: relative;
     box-shadow:
       0 8px 32px rgba(77, 166, 255, 0.3),
       inset 0 2px 8px rgba(255, 255, 255, 0.6);
   }

   .aero-bubble::before {
     content: '';
     position: absolute;
     top: 10%;
     left: 15%;
     width: 40%;
     height: 40%;
     background: radial-gradient(
       circle,
       rgba(255, 255, 255, 0.8) 0%,
       transparent 60%
     );
     border-radius: 50%;
     filter: blur(8px);
   }

   .aero-bubble::after {
     content: '';
     position: absolute;
     bottom: 15%;
     right: 20%;
     width: 25%;
     height: 25%;
     background: radial-gradient(
       circle,
       rgba(102, 179, 255, 0.6) 0%,
       transparent 70%
     );
     border-radius: 50%;
     filter: blur(6px);
   }
   \`\`\`

4. **光效高光处理**：
   \`\`\`css
   .aero-highlight {
     position: relative;
     overflow: hidden;
   }

   .aero-highlight::before {
     content: '';
     position: absolute;
     top: -50%;
     left: -50%;
     width: 200%;
     height: 200%;
     background: linear-gradient(
       45deg,
       transparent 40%,
       rgba(255, 255, 255, 0.6) 50%,
       transparent 60%
     );
     animation: shine 3s ease-in-out infinite;
   }

   @keyframes shine {
     0%, 100% { transform: translateX(-100%) translateY(-100%); }
     50% { transform: translateX(100%) translateY(100%); }
   }
   \`\`\`

5. **排版系统**：
   - 字体：Segoe UI, -apple-system, sans-serif（系统默认）
   - 字号：标题 24px-36px，正文 14px-16px
   - 字重：font-weight: 400-600（轻盈感）
   - 字色：深灰 #2C3E50 或白色（根据背景对比）

   \`\`\`css
   .aero-title {
     font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
     font-size: 28px;
     font-weight: 500;
     color: #2c3e50;
     text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
   }

   .aero-text {
     font-family: 'Segoe UI', sans-serif;
     font-size: 15px;
     font-weight: 400;
     color: #34495e;
     line-height: 1.6;
   }
   \`\`\`

6. **交互动效**：
   - 悬停放大：
     \`\`\`css
     .aero-interactive {
       transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
     }

     .aero-interactive:hover {
       transform: scale(1.05);
       box-shadow:
         0 12px 48px rgba(77, 166, 255, 0.4),
         inset 0 2px 12px rgba(255, 255, 255, 0.8);
     }
     \`\`\`

   - 脉冲光晕：
     \`\`\`css
     @keyframes aero-pulse {
       0%, 100% {
         box-shadow: 0 0 20px rgba(77, 166, 255, 0.4);
       }
       50% {
         box-shadow: 0 0 40px rgba(77, 166, 255, 0.8);
       }
     }

     .aero-pulse {
       animation: aero-pulse 2s ease-in-out infinite;
     }
     \`\`\`

技术实现要点：
- 使用 backdrop-filter: blur() 创建毛玻璃效果
- 使用多层 radial-gradient 叠加创建复杂光晕
- 使用 ::before 和 ::after 伪元素添加内部高光
- 使用 filter: blur() 模糊边缘创建柔和感
- 使用 transition 配合 cubic-bezier 创建弹性动效

重要提示：
- backdrop-filter 需添加 -webkit- 前缀以兼容 Safari
- 避免过度使用模糊效果，影响性能
- 玻璃透明度应保持 40%-60%，确保内容可见
- 圆角应统一使用 24px 以上，保持风格一致`,

      'en-US': `Role: You are a UI designer specializing in Frutiger Aero style, focusing on mid-2000s Windows Vista and macOS Aqua era glass texture design.

Scene Positioning: Create crystal glass textured interfaces for tech products, creative tools, or nostalgic Y2K themed websites, conveying futurism and optimism through frosted glass and gradient glows.

Core Design Language:

1. **Glassmorphism System**:
   - Basic glass card: rgba(255, 255, 255, 0.4) with backdrop-filter: blur(12px)
   - Multi-layer glass effects with gradient overlays
   - Border rgba(255, 255, 255, 0.6) and inset highlights

2. **Gradient Glow Background**:
   - Primary background: linear-gradient from #4DA6FF to #B3D9FF
   - Multi-layer radial gradients for complex light effects
   - Layered background composition

Color Scheme:

Primary (Sky Gradient):
- Sky Blue: #4DA6FF
- Cyan Blue: #66B3FF
- Light Blue: #80C0FF
- Pale Blue: #99CCFF
- Very Light Blue: #B3D9FF

Accent (Fresh Highlights):
- Turquoise: #00CED1
- Aquamarine: #7FFFD4
- Mint Green: #98FF98
- Lemon Chiffon: #FFFACD

Glass Transparency:
- Main Glass: rgba(255, 255, 255, 0.4)
- Border Glass: rgba(255, 255, 255, 0.6)
- Highlight Glass: rgba(255, 255, 255, 0.8)

3. **Water Droplet Bubble Effects** with radial-gradient inner glows
4. **Light Highlight Treatment** with animated shine effects
5. **Typography System** with Segoe UI, font-weight: 400-600
6. **Interactive Animations** with scale transforms and pulse glows

Technical Implementation:
- Use backdrop-filter: blur() for frosted glass (add -webkit- prefix)
- Layer multiple radial-gradients for complex glows
- Use ::before and ::after for inner highlights
- Use filter: blur() for soft edges
- Use cubic-bezier transitions for elastic effects

Important Notes:
- Add -webkit-backdrop-filter for Safari compatibility
- Avoid excessive blur effects affecting performance
- Maintain glass opacity at 40%-60% for content visibility
- Use consistent border-radius of 24px+ for style coherence`
    }
  }

