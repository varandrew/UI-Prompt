// Art Deco - Classic Retro Luxury
// 装饰艺术 - 经典复古奢华

import { artDecoLuxuryFullPageHTML, artDecoLuxuryFullPageStyles } from './artDecoLuxuryFullPage';

export const artDecoLuxury = {
    id: 'retro-art-deco-luxury',
    title: 'styles.retro.artDeco.title',
    description: 'styles.retro.artDeco.description',
    demoHTML: `
      <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-6 bg-gradient-to-b from-slate-900 to-amber-900">
        <div class="art-deco-frame relative bg-gradient-to-b from-amber-100 to-amber-50 p-8 rounded-lg">
          <div class="absolute inset-0 art-deco-border"></div>
          <div class="relative z-10">
            <div class="flex justify-center mb-4">
              <div class="art-deco-sun"></div>
            </div>
            <h4 class="text-4xl font-bold text-center mb-4" style="font-family: 'Times New Roman', serif; color: #1a1a1a; text-shadow: 2px 2px 0 #d4af37;">DECO</h4>
            <div class="flex gap-3 justify-center">
              <div class="art-deco-gem"></div>
              <div class="art-deco-gem" style="animation-delay: 0.2s;"></div>
              <div class="art-deco-gem" style="animation-delay: 0.4s;"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: `
      .art-deco-border {
        background: linear-gradient(45deg, #d4af37 0%, #f9f295 50%, #d4af37 100%);
        padding: 3px;
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      .art-deco-sun {
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, #d4af37 0%, #aa8929 100%);
        clip-path: polygon(
          50% 0%, 60% 40%, 100% 40%, 65% 60%,
          80% 100%, 50% 75%, 20% 100%, 35% 60%,
          0% 40%, 40% 40%
        );
        animation: deco-glow 3s ease-in-out infinite;
      }

      @keyframes deco-glow {
        0%, 100% { filter: brightness(1); transform: rotate(0deg); }
        50% { filter: brightness(1.3); transform: rotate(180deg); }
      }

      .art-deco-gem {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #4a90e2 0%, #357abd 50%, #2a5f8f 100%);
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        animation: gem-sparkle 2s ease-in-out infinite;
      }

      @keyframes gem-sparkle {
        0%, 100% { transform: scale(1); filter: brightness(1); }
        50% { transform: scale(1.1); filter: brightness(1.5); }
      }

      .art-deco-frame {
        box-shadow:
          0 0 30px rgba(212, 175, 55, 0.3),
          inset 0 0 20px rgba(212, 175, 55, 0.1);
      }
    `,
    demoBoxClass: 'bg-gradient-to-b from-slate-900 to-amber-900',
    fullPageHTML: artDecoLuxuryFullPageHTML,
    fullPageStyles: artDecoLuxuryFullPageStyles,
    colorScheme: {
      'zh-CN': '装饰金 (#D4AF37)、深蓝宝石 (#357ABD)、黑色 (#1A1A1A)、琥珀黄 (#FFA500)',
      'en-US': 'Art Deco gold (#D4AF37), deep sapphire blue (#357ABD), black (#1A1A1A), amber yellow (#FFA500)'
    },

    // 模板级 customPrompt (简短 Prompt，100-300字)
    customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Art Deco Luxury」界面风格高度接近的装饰艺术奢华风 UI。
要求：保持当前示例中「金色几何边框 + 放射状太阳图案 + 宝石菱形」的整体构图和材质语言，只允许替换文字文案、品牌名称与细节图形。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 场景：高端品牌首页、奢侈品 Landing、复古酒吧/影院官网、艺术展主题页面。
- 用户：对品牌调性敏感、偏好 1920 年代奢华审美的用户。
- 目标：让用户一眼感受到装饰艺术黄金时代的华丽和秩序感。

【整体布局结构】
1. 中央主框架
   - 使用几何边框包裹主内容区域（品牌名称、LOGO、口号），四角或边缘带有阶梯形或扇形装饰。
   - 布局整体类似一张竖向海报，纵向略长，居中展示。
2. 顶部放射太阳徽章
   - 在主框架上方居中放置一个放射状圆形图形，象征「太阳 / 光芒」，作为视觉焦点。
3. 底部宝石装饰带
   - 在中央主框架下方水平排列 3 个以上菱形宝石块，可对应三大卖点或栏目入口。
4. 周围背景
   - 使用深色渐变背景（深蓝 / 深墨绿），衬托金色与宝石色，保持简洁不过度堆叠内容。

【色彩与材质】
1. 金色金属
   - 主色使用金色系：#D4AF37 / #F9F295 / #AA8929，结合高光与阴影模拟金属拉丝和镀金质感。
2. 宝石色系
   - 辅助色使用蓝宝石蓝、祖母绿等高饱和冷色作为菱形宝石填充色，营造高级饰品感。
3. 黑 / 深色背景
   - 背景可采用近黑色或极深蓝 / 深绿，用以突出金色边框和宝石色块。

【阴影与拟物效果】
1. 边框阴影
   - 使用外阴影和内阴影增强金属边框的厚度与层次感，让框架看起来像真实金属结构。
2. 宝石高光
   - 宝石菱形需要顶部高光与底部暗部，表现多面切割和折射效果，可用渐变 + 阴影达成。

【交互与动效】
1. 轻微呼吸动画
   - 中央太阳图形或宝石可有缓慢旋转或亮度变化，节奏平缓（3–5 秒一周期），增强仪式感。
2. Hover 反馈
   - 若有按钮或可点击区域，hover 时可略微增加亮度或阴影，不宜使用大幅位移以保持庄重。

【输出要求】
- 使用语义化 HTML 划分主框架、顶部徽章、宝石装饰带和外围背景。
- 使用 TailwindCSS 原子类控制布局（flex/grid）、间距、色彩和阴影。
- 生成的 UI 在「金色几何边框 + 放射太阳徽章 + 宝石菱形装饰 + 深色奢华背景」这些特征上，应与当前 Art Deco Luxury 示例高度接近。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate an Art Deco luxury interface that looks very close to the current “Art Deco Luxury” demo.
Keep the composition of gold geometric frame, radiating sun emblem and diamond-shaped gem decorations. You may change text copy, brand name and fine details, but not the structural layout or material language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: high-end brand landing pages, luxury product sites, vintage bar/cinema homepages, art exhibition microsites.
- Users: visitors who appreciate 1920s Art Deco glamour and brand-driven storytelling.
- Goal: immediately evoke the “Golden Age” of Art Deco with strong order and ornamentation.

[Layout structure]
1. Central frame
   - A geometric frame wraps the main content (brand name, logo, tagline) with stepped or fan-shaped ornaments at corners and edges.
   - Overall layout should feel like a vertical poster, centered in the viewport.
2. Top sunburst emblem
   - Place a radiating circular emblem above the frame center, rendered in gold gradients and radial lines as the key focal point.
3. Lower gem strip
   - A horizontal row of three or more diamond-shaped gems below the frame, each optionally mapped to a value proposition or navigation entry.
4. Surrounding background
   - Use a deep blue or green gradient around the frame to make gold and gem colors stand out while keeping the periphery simple.

[Color and materials]
1. Gold metal
   - Use gold tones like #D4AF37, #F9F295 and #AA8929 with highlights and shadows to simulate polished metal.
2. Jewel tones
   - Use saturated blues, greens and other jewel colors for gem fills to reinforce the luxury theme.
3. Dark backdrop
   - Apply very dark backgrounds (near-black, deep navy or deep green) to contrast with the metallic and jewel elements.

[Shadows and depth]
1. Frame depth
   - Combine outer and inner shadows to give the frame visible thickness and a sense of carved metal.
2. Gem facets
   - Gems should show bright upper facets and darker lower facets so they read as multi-faceted stones.

[Interaction and motion]
1. Subtle breathing
   - Allow slow rotation or brightness pulsing on the central emblem or gems, with long cycles (3–5 seconds) to avoid distraction.
2. Hover feedback
   - Buttons or interactive areas may slightly increase brightness or shadow on hover; avoid large translations to keep the design stately.

[Output requirements]
- Use semantic HTML to separate the main frame, top emblem, gem strip and background.
- Use Tailwind-style utilities for layout, spacing, colors and shadows.
- The generated UI must preserve the key traits of this Art Deco luxury demo: gold geometric framing, radiating emblem, jewel diamonds and a deep, luxurious backdrop.`
  },

    // 模板级 stylePrompt (详细 Prompt，1000-3000字)
    stylePrompt: {
      'zh-CN': `角色：你是专精于装饰艺术（Art Deco）风格的 UI 设计师，专注于 1920-1940 年代的奢华几何美学。

场景定位：为高端品牌、奢侈品展示或复古主题网站打造具有装饰艺术风格的界面，通过几何图案和黄金质感传达精致与奢华。

核心设计语言：

1. **几何装饰系统**：
   - 扇形图案：
     \`\`\`css
     .art-deco-fan {
       background: conic-gradient(
         from 0deg,
         #d4af37 0deg 36deg,
         #1a1a1a 36deg 72deg,
         #d4af37 72deg 108deg,
         #1a1a1a 108deg 144deg,
         #d4af37 144deg 180deg
       );
       clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
     }
     \`\`\`

   - 阶梯图案：
     \`\`\`css
     .art-deco-steps {
       background:
         linear-gradient(90deg, #d4af37 0%, #d4af37 25%, transparent 25%),
         linear-gradient(90deg, #aa8929 25%, #aa8929 50%, transparent 50%),
         linear-gradient(90deg, #8b7021 50%, #8b7021 75%, transparent 75%);
       background-size: 100% 33.33%;
       background-repeat: no-repeat;
     }
     \`\`\`

   - 放射状线条：
     \`\`\`css
     .art-deco-sunburst {
       background: repeating-conic-gradient(
         from 0deg,
         #d4af37 0deg 2deg,
         transparent 2deg 4deg
       );
     }
     \`\`\`

2. **黄金质感处理**：
   - 金属渐变配方：
     \`\`\`css
     .art-deco-gold {
       background: linear-gradient(
         135deg,
         #f9f295 0%,
         #d4af37 25%,
         #aa8929 50%,
         #d4af37 75%,
         #f9f295 100%
       );
       box-shadow:
         0 4px 8px rgba(212, 175, 55, 0.3),
         inset 0 1px 0 rgba(255, 255, 255, 0.5),
         inset 0 -1px 0 rgba(0, 0, 0, 0.3);
     }
     \`\`\`

   - 镀金边框：
     \`\`\`css
     .art-deco-border {
       border: 3px solid transparent;
       background:
         linear-gradient(#fff, #fff) padding-box,
         linear-gradient(45deg, #d4af37, #f9f295, #d4af37) border-box;
     }
     \`\`\`

配色方案：

主色调（奢华金色系）：
- 装饰金：#D4AF37
- 古铜金：#AA8929
- 深金色：#8B7021
- 浅金光：#F9F295

强调色（宝石色系）：
- 蓝宝石：#357ABD
- 深蓝：#2A5F8F
- 祖母绿：#50C878
- 红宝石：#E0115F

中性色（经典黑白）：
- 纯黑：#1A1A1A
- 象牙白：#FFFFF0
- 深灰：#2F2F2F

3. **宝石切面设计**：
   \`\`\`css
   .art-deco-gem {
     width: 60px;
     height: 60px;
     background: linear-gradient(
       135deg,
       #4a90e2 0%,
       #357abd 40%,
       #2a5f8f 70%,
       #1e4a6f 100%
     );
     clip-path: polygon(
       50% 0%,    /* 顶点 */
       100% 50%,  /* 右点 */
       50% 100%,  /* 底点 */
       0% 50%     /* 左点 */
     );
     box-shadow:
       0 8px 16px rgba(42, 95, 143, 0.4),
       inset 0 2px 4px rgba(255, 255, 255, 0.3),
       inset 0 -2px 4px rgba(0, 0, 0, 0.3);
     animation: gem-rotate 4s linear infinite;
   }

   @keyframes gem-rotate {
     0%, 100% { transform: rotate(0deg); }
     50% { transform: rotate(180deg); }
   }
   \`\`\`

4. **流线型曲线**：
   \`\`\`css
   .art-deco-wave {
     height: 60px;
     background:
       radial-gradient(ellipse 100px 40px at 50% 20%, #d4af37 0%, transparent 80%),
       radial-gradient(ellipse 80px 30px at 50% 50%, #aa8929 0%, transparent 80%);
     clip-path: path('M0,30 Q50,0 100,30 T200,30 L200,60 L0,60 Z');
   }
   \`\`\`

5. **排版系统**：
   - 标题字体：Georgia, Times New Roman（衬线）
   - 字号：48px-72px（大标题），font-weight: 700
   - 字距：letter-spacing: 0.1em（宽松）
   - 文字效果：
     \`\`\`css
     .art-deco-title {
       font-family: Georgia, 'Times New Roman', serif;
       font-size: 64px;
       font-weight: 700;
       letter-spacing: 0.15em;
       color: #d4af37;
       text-shadow:
         2px 2px 0 #1a1a1a,
         4px 4px 8px rgba(212, 175, 55, 0.5);
       text-transform: uppercase;
     }
     \`\`\`

6. **装饰元素动画**：
   \`\`\`css
   @keyframes art-deco-glow {
     0%, 100% {
       box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
       transform: scale(1);
     }
     50% {
       box-shadow: 0 0 40px rgba(212, 175, 55, 0.6);
       transform: scale(1.05);
     }
   }

   .art-deco-element {
     animation: art-deco-glow 3s ease-in-out infinite;
   }
   \`\`\`

技术实现要点：
- 使用 clip-path 创建复杂几何形状
- 使用 conic-gradient 实现放射状图案
- 使用 linear-gradient 模拟金属质感
- 使用 box-shadow 多层叠加创建立体感
- 使用 transform + animation 实现优雅动效

重要提示：
- 保持对称性，所有装饰元素应中心对齐或镜像对称
- 避免过度装饰，保持视觉层次清晰
- 金色与黑色对比度应足够高，确保可读性
- 宝石色仅作为点缀，不应占据主导地位`,

      'en-US': `Role: You are a UI designer specializing in Art Deco style, focusing on the luxurious geometric aesthetics of the 1920s-1940s.

Scene Positioning: Create Art Deco style interfaces for high-end brands, luxury displays, or vintage-themed websites, conveying sophistication and opulence through geometric patterns and golden textures.

Core Design Language:

1. **Geometric Decoration System**:
   - Fan patterns using conic-gradient
   - Stepped patterns with layered linear-gradients
   - Radiating sunburst with repeating-conic-gradient

2. **Golden Texture Treatment**:
   - Metallic gradients: #f9f295 → #d4af37 → #aa8929
   - Gilded borders using gradient borders
   - Highlight effects with inset box-shadow

Color Scheme:

Primary (Luxurious Gold):
- Art Deco Gold: #D4AF37
- Bronze Gold: #AA8929
- Deep Gold: #8B7021
- Light Gold Sheen: #F9F295

Accent (Gemstone Colors):
- Sapphire: #357ABD
- Deep Blue: #2A5F8F
- Emerald: #50C878
- Ruby: #E0115F

Neutral (Classic Black & White):
- Pure Black: #1A1A1A
- Ivory: #FFFFF0
- Dark Gray: #2F2F2F

3. **Gemstone Facet Design** with clip-path polygons
4. **Streamlined Curves** using SVG paths
5. **Typography System** with Georgia/Times New Roman
6. **Decorative Animations** with glow effects

Technical Implementation:
- Use clip-path for complex geometric shapes
- Use conic-gradient for radial patterns
- Use linear-gradient for metallic textures
- Layer box-shadow for 3D depth
- Combine transform + animation for elegant effects

Important Notes:
- Maintain symmetry in all decorative elements
- Avoid over-decoration, keep visual hierarchy clear
- Ensure high contrast between gold and black for readability
- Use gemstone colors sparingly as accents`
    }
  }
