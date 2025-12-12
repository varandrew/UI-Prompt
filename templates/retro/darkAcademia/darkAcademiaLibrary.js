// Dark Academia - Library Template
// 暗黑学院 - 图书馆模板

import { darkAcademiaLibraryFullPageHTML, darkAcademiaLibraryFullPageStyles } from './darkAcademiaLibraryFullPage'

export const darkAcademiaLibrary = {
  id: 'retro-dark-academia-library',
  title: 'styles.retro.darkAcademia.darkAcademiaLibrary.title',
  description: 'styles.retro.darkAcademia.darkAcademiaLibrary.description',
  demoHTML: `
    <div class="w-full h-full flex flex-col items-center justify-center p-6 space-y-4">
      <div class="flex gap-2 items-end">
        <div class="w-12 h-16 bg-amber-900 border-2 border-amber-950 rounded-sm shadow-lg"></div>
        <div class="w-12 h-20 bg-amber-800 border-2 border-amber-950 rounded-sm shadow-lg"></div>
        <div class="w-12 h-14 bg-amber-900 border-2 border-amber-950 rounded-sm shadow-lg"></div>
      </div>
      <p class="text-amber-950 font-serif text-sm italic">{{t:styles.retro.darkAcademia.darkAcademiaLibrary.demoText}}</p>
    </div>
  `,
  customStyles: '',
  demoBoxClass: 'bg-gradient-to-br from-amber-100 to-stone-200',
  fullPageHTML: darkAcademiaLibraryFullPageHTML,
  fullPageStyles: darkAcademiaLibraryFullPageStyles,
  colorScheme: {
    'zh-CN': '深棕色 (#2D2416)、烟熏棕 (#5D4E37)、羊皮纸 (#F4E8C1)、墨绿 (#2C3E2F)、烛光金 (#D4A574)',
    'en-US': 'Dark brown (#2D2416), smoky brown (#5D4E37), parchment (#F4E8C1), ink green (#2C3E2F), candlelight gold (#D4A574)'
  },

  // 模板级 customPrompt (简短 Prompt，100-300字)
  customPrompt: {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Dark Academia Library」界面风格高度接近的暗黑学院图书馆 UI。
要求：保持当前示例中的「深棕书房背景 + 羊皮纸内容区 + 烛光光晕 + 墨绿色点缀」的整体氛围，只允许替换文案、章节结构与局部元素。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 场景：学术平台、文学社区、知识库首页或专题阅读页。
- 用户：喜爱古典文学、哲学、人文研究、向往老学院氛围的读者。
- 目标：营造一座「线上古老图书馆」，让用户愿意停留、慢慢阅读。

【整体布局结构】
1. 顶部书房导航区
   - 深棕或烟熏棕背景，左侧为站点名称/徽章，右侧为少量文字导航（Library / Journals / Authors 等）。
2. 主视觉（Hero）
   - 使用一块带羊皮纸质感的内容面板，展示一句拉丁语或文学名句，可以配合小型插图（书架、羽毛笔、烛台）。
3. 书籍/章节列表区
   - 以下方若干卡片或列表条目呈现书籍或章节信息：标题、副标题、作者、年份等。
4. 底部注脚区
   - 用较小字号展示版权信息、馆藏说明或引用格式提示，保持低调不过度抢眼。

【色彩与材质】
1. 深色木质背景
   - 主背景使用深棕 (#2D2416) 与烟熏棕 (#5D4E37) 渐变，适度叠加噪点模拟木质墙面或书架。
2. 羊皮纸内容区
   - 内容区域采用米黄色 (#F4E8C1) 与更浅的羊皮纸色 (#E8DBB5)，可在边缘加暗角、斑点表现旧纸感。
3. 墨绿与烛光
   - 链接和小型标签使用墨绿色 (#2C3E2F)，高光和光晕使用暖黄 (#D4A574)，模拟烛光照明效果。

【阴影与拟物效果】
1. 书籍装订元素
   - 可在部分区域加入「书脊」式竖条，用深棕渐变与内阴影表达厚重感。
2. 纸张层次
   - 羊皮纸卡片可略微抬起，与背景之间保留柔和阴影，呈现纸页堆叠效果。

【交互与动效】
1. 烛光闪烁
   - 若使用光晕，可通过轻微明暗变化（3 秒左右周期）模拟烛火闪烁，但整体节奏要克制。
2. Hover 反馈
   - 链接 hover 时使用轻微下划线或颜色加深，不建议强烈位移或放大动画，以保持静谧感。

【输出要求】
- 使用语义化 HTML 划分导航、主视觉、内容列表和脚注区域；
- 使用 TailwindCSS 原子类控制背景色、文本色、间距和排版；
- 生成的界面在「深色书房 + 羊皮纸内容区 + 烛光光晕 + 墨绿色点缀」这些特征上，应与当前 Dark Academia Library 示例高度接近。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Dark Academia library interface that looks very close to the current “Dark Academia Library” demo.
Keep the overall mood of dark brown study walls, parchment content blocks, candlelight glows and ink-green accents. You may change copy, section structure and small decorative elements, but not the atmospheric language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: academic platforms, literary communities, knowledge bases and themed reading hubs.
- Users: readers who enjoy classical literature, philosophy and slow, ritualistic reading experiences.
- Goal: recreate the impression of an old college library that invites quiet, focused reading.

[Layout structure]
1. Top “study” navigation bar
   - Dark brown/smoky brown background with a site name or crest on the left and a small number of text links on the right.
2. Hero area
   - A parchment-like content block with a Latin quote or literary line, optionally paired with a small illustration (bookshelf, quill, candle).
3. Book/section list
   - Cards or list items representing books or sections, with title, subtitle, author/year and optional metadata.
4. Footer notes
   - A subtle footer with copyright, collection notes or citation hints.

[Color and materials]
1. Dark wood backdrop
   - Deep browns (#2D2416, #5D4E37) with slight noise to suggest shelves, paneling and aged wood.
2. Parchment content
   - Beige paper (#F4E8C1, #E8DBB5) with gentle texture, darkened edges and occasional speckles to emulate old pages.
3. Ink and light
   - Ink green (#2C3E2F) for links and tags; candlelight gold (#D4A574) for glows and highlights.

[Shadows and depth]
1. Book spines
   - Use vertical spine-like blocks with gradients and inner shadows to convey the depth of bound volumes.
2. Paper layering
   - Elevate parchment cards slightly above the background with soft shadows to suggest stacked sheets.

[Interaction and motion]
1. Candle flicker
   - If using glow effects, animate subtle brightness variation over a few seconds to mimic candle flicker.
2. Hover feedback
   - Links and interactive elements should respond with modest color or underline changes; avoid large movements or vivid animations.

[Output requirements]
- Use semantic HTML to separate navigation, hero, lists and footer;
- Use Tailwind-style utility classes for background, typography and spacing;
- The generated UI must preserve the recognisable traits of this Dark Academia library: dark study backdrop, parchment content, candlelight ambience and ink-green accents.`
  },

  // 模板级 stylePrompt (详细 Prompt，1000-2000字)
  stylePrompt: {
    'zh-CN': `角色：你是专精于暗黑学院（Dark Academia）风格的 UI 设计师，专注于欧洲古典学术图书馆美学。

场景定位：为学术平台、文学社区或知识分享网站打造具有古典图书馆氛围的界面，通过深色调和书籍元素传达学术沉思感。

核心设计语言：

1. **深色调系统**：
   - 主背景色：
     \`\`\`css
     .dark-academia-bg {
       background: linear-gradient(
         135deg,
         #2d2416 0%,
         #3d2f1f 50%,
         #2d2416 100%
       );
       box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
     }
     \`\`\`

   - 次级背景（内容区）：
     \`\`\`css
     .dark-academia-card {
       background: #5d4e37;
       border: 2px solid #8b7355;
       box-shadow:
         0 8px 16px rgba(0, 0, 0, 0.6),
         inset 0 1px 0 rgba(212, 165, 116, 0.2);
     }
     \`\`\`

2. **羊皮纸质感处理**：
   - 羊皮纸背景：
     \`\`\`css
     .parchment-paper {
       background:
         linear-gradient(rgba(93, 78, 55, 0.05) 1px, transparent 1px),
         linear-gradient(90deg, rgba(93, 78, 55, 0.05) 1px, transparent 1px),
         linear-gradient(to bottom, #f4e8c1, #e8dbb5);
       background-size: 15px 15px, 15px 15px, 100% 100%;
       filter: contrast(1.1) brightness(0.95);
     }
     \`\`\`

   - 褪色边缘效果：
     \`\`\`css
     .parchment-edge {
       position: relative;
       padding: 32px;
     }

     .parchment-edge::before {
       content: '';
       position: absolute;
       inset: 0;
       background: linear-gradient(
         to bottom,
         rgba(93, 78, 55, 0.3) 0%,
         transparent 10%,
         transparent 90%,
         rgba(93, 78, 55, 0.3) 100%
       );
       pointer-events: none;
     }
     \`\`\`

配色方案：

主色调（深色木质）：
- 深棕色：#2D2416
- 烟熏棕：#5D4E37
- 中棕色：#8B7355
- 皮革棕：#3D2F1F

羊皮纸色系：
- 羊皮纸：#F4E8C1
- 淡羊皮纸：#E8DBB5
- 旧纸边：#D4C5A0

强调色：
- 墨绿色：#2C3E2F
- 烛光金：#D4A574
- 深红褐：#5C1A1A

3. **书籍装订设计**：
   \`\`\`css
   .book-spine {
     width: 60px;
     height: 200px;
     background: linear-gradient(
       to right,
       #5d4e37 0%,
       #6d5e47 10%,
       #5d4e37 20%,
       #4d3e27 100%
     );
     border-left: 3px solid #3d2f1f;
     border-right: 3px solid #3d2f1f;
     box-shadow:
       inset 4px 0 8px rgba(0, 0, 0, 0.5),
       inset -4px 0 8px rgba(0, 0, 0, 0.5),
       2px 0 4px rgba(0, 0, 0, 0.3);
   }

   .book-title {
     writing-mode: vertical-rl;
     font-family: Georgia, 'Times New Roman', serif;
     font-size: 14px;
     font-weight: 700;
     color: #d4a574;
     text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
     letter-spacing: 0.05em;
   }
   \`\`\`

4. **烛光光晕效果**：
   \`\`\`css
   .candlelight-glow {
     position: relative;
   }

   .candlelight-glow::after {
     content: '';
     position: absolute;
     top: -40px;
     left: 50%;
     transform: translateX(-50%);
     width: 120px;
     height: 120px;
     background: radial-gradient(
       circle,
       rgba(212, 165, 116, 0.4) 0%,
       rgba(212, 165, 116, 0.2) 30%,
       transparent 70%
     );
     filter: blur(20px);
     animation: flicker 3s ease-in-out infinite;
   }

   @keyframes flicker {
     0%, 100% { opacity: 0.8; }
     50% { opacity: 1; }
   }
   \`\`\`

5. **排版系统**：
   - 标题字体：Georgia, Garamond（经典衬线）
   - 正文字体：Times New Roman, serif
   - 字号：标题 32px-48px，正文 16px
   - 行高：1.8（宽松，便于阅读）
   - 字距：letter-spacing: 0.02em

   \`\`\`css
   .dark-academia-title {
     font-family: Georgia, Garamond, serif;
     font-size: 42px;
     font-weight: 600;
     color: #f4e8c1;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
     letter-spacing: 0.02em;
   }

   .dark-academia-body {
     font-family: 'Times New Roman', serif;
     font-size: 16px;
     line-height: 1.8;
     color: #e8dbb5;
   }
   \`\`\`

6. **装饰元素**：
   - 墨绿分隔线：
     \`\`\`css
     .academia-divider {
       height: 2px;
       background: linear-gradient(
         to right,
         transparent 0%,
         #2c3e2f 50%,
         transparent 100%
       );
       margin: 24px 0;
     }
     \`\`\`

   - 羽毛笔图标（SVG 或装饰性元素）
   - 书签标签效果

技术实现要点：
- 使用深色背景 + 羊皮纸色内容创建对比
- 使用 inset box-shadow 模拟皮革凹痕
- 使用 radial-gradient + blur 创建烛光效果
- 使用 writing-mode: vertical-rl 实现书脊文字
- 使用 filter: sepia() 为图片添加复古色调

重要提示：
- 保持整体色调深沉，避免过亮的元素
- 文字与背景对比度要足够，确保可读性
- 烛光效果应柔和，不要过于刺眼
- 装饰元素应克制，保持学术严肃感`,

    'en-US': `Role: You are a UI designer specializing in Dark Academia style, focusing on European classical academic library aesthetics.

Scene Positioning: Create interfaces with classical library ambiance for academic platforms, literary communities, or knowledge-sharing websites, conveying scholarly contemplation through dark tones and book elements.

Core Design Language:

1. **Dark Tone System**:
   - Primary background: linear-gradient with #2D2416 and #3D2F1F
   - Secondary background: #5D4E37 with border #8B7355
   - Deep inset shadows for depth

2. **Parchment Texture Treatment**:
   - Parchment background with subtle grid overlay
   - Faded edge effects using gradient overlays
   - Paper grain simulation

Color Scheme:

Primary (Dark Wood):
- Deep Brown: #2D2416
- Smoky Brown: #5D4E37
- Mid Brown: #8B7355
- Leather Brown: #3D2F1F

Parchment:
- Parchment: #F4E8C1
- Light Parchment: #E8DBB5
- Aged Paper Edge: #D4C5A0

Accent:
- Ink Green: #2C3E2F
- Candlelight Gold: #D4A574
- Deep Red-Brown: #5C1A1A

3. **Book Binding Design** with vertical text and leather gradients
4. **Candlelight Glow Effect** using radial-gradient and blur with flicker animation
5. **Typography System** with Georgia/Garamond, line-height: 1.8
6. **Decorative Elements** with ink green dividers and bookmark effects

Technical Implementation:
- Use dark background + parchment content for contrast
- Use inset box-shadow for leather embossing
- Use radial-gradient + blur for candlelight
- Use writing-mode: vertical-rl for book spine text
- Use filter: sepia() for vintage photo tones

Important Notes:
- Maintain deep overall tones, avoid overly bright elements
- Ensure sufficient text-background contrast for readability
- Candlelight effects should be soft, not glaring
- Decorative elements should be restrained, maintaining academic seriousness`
  }
}
