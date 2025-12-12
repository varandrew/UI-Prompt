// Vintage Retro Newspaper Typography - 20th Century Newspaper Style
// 复古报纸排版风 - 20世纪报纸风格

import { retroVintageFullPageHTML as vintageRetroFullPageHTML, retroVintageFullPageStyles as vintageRetroFullPageStyles } from './vintageRetroFullPage';

export const vintageRetroTemplates = [
  {
    id: 'core-typography-newspaper-vintage-retro',
    title: 'styles.core.typography.newspaper.vintageRetro.title',
    description: 'styles.core.typography.newspaper.vintageRetro.description',
    demoHTML: `
      <div class="flex flex-col items-center gap-3 text-center">
        <div class="relative">
          <div class="w-20 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-sm shadow-md border-4 border-white transform -rotate-2">
            <div class="absolute inset-2 flex items-center justify-center text-amber-800 text-xs font-serif">1985</div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <p class="text-xs font-serif text-amber-900 tracking-wide">MEMORIES</p>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8',
    // 引用外部完整页面 HTML/CSS
    fullPageHTML: vintageRetroFullPageHTML,
    fullPageStyles: vintageRetroFullPageStyles,
    colorScheme: 'styles.core.typography.newspaper.vintageRetro.colorScheme',

    // 模板级 customPrompt（长版 Prompt，可直接给 LLM 高精度复刻 UI）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Vintage Retro Newspaper 复古报纸」示例风格高度接近的 UI。
要求：保持多栏报纸排版、米黄色纸张纹理、黑白为主的印刷配色和适度旧化效果，只允许替换标题、文章内容和模块排序，不改变整体版式系统与视觉气质。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 新闻媒体 / 文学杂志专题页或栏目页
- 历史档案、时间线、文化项目介绍页
- 需要具备「纸质报刊 / 文献档案」氛围的内容型界面

【整体布局结构】
1. 页面框架
   - 模拟一张报纸版面，上下左右留出较窄纸张边缘（外边距）。
   - 顶部为报头区：报纸标题、副标题、日期信息等。
2. 多栏排版
   - 使用 2–3 栏布局，列宽相近、列间距固定，营造「版心」结构。
   - 头条标题通常占据上方较大宽度（可跨栏），正文在各栏中纵向排布。
3. 内容模块
   - 常见模块：头条文章、次要新闻块、侧边小栏目、引用块（pull quote）、小广告位等。

【色彩与材质】
1. 纸张与墨色
   - 背景以米黄色 / 浅棕色为主（如 #F5DEB3、#EBD9B5），模拟泛黄旧纸。
   - 正文文字为纯黑 (#000000)，次要标注可用深棕或深灰。
   - 分隔线、报头装饰线可用更深的棕色（#8B4513）或深褐色。
2. 旧化纹理
   - 可在背景上叠加细微噪点、纸张纤维纹理。
   - 适度加入折痕、磨损边界或咖啡渍斑点，但需避免影响正文可读性。

【排版与层级】
1. 字体系统
   - 主体使用衬线字体（如 Georgia、Times New Roman）。
   - 报头标题字号最大，其次是文章标题，再次是副标题和正文。
2. 对齐与行距
   - 正文一般采用两端对齐方式，加强报纸排版的整齐感。
   - 行距略紧，营造内容密集的印刷感，但仍需保持可读性。

【交互与动效】
1. Hover
   - 链接在悬停时可加下划线、略微加粗或变成深棕色，而不是高饱和亮色。
   - 模块 hover 时可使背景纸张略微提亮或边框加深，模拟「被手指停留」的感觉。
2. 动画
   - 动效应极为克制，只使用淡入、滚动出现等轻微过渡即可，避免破坏「印刷品」氛围。

【输出要求】
- 使用语义化 HTML（header / main / article / aside / footer）组织报纸式页面结构。
- 使用 TailwindCSS 风格原子类实现多栏布局（grid / columns）、间距和排版，结合少量自定义类实现纸张纹理与旧化效果。
- 生成的 UI 必须保留「米黄色纸张 + 多栏排版 + 黑白印刷 + 适度旧化」这些关键特征，让人一眼感到是复古报纸页面。`,

      'en-US': `You are a senior UI designer and front-end engineer. Generate a vintage newspaper style interface that looks very close to the current “Vintage Newspaper” demo.
Keep the multi-column newspaper layout, beige paper texture, primarily black-and-white print palette and subtle aging effects. You may change headlines, article content and module ordering, but you should not change the overall typographic system or visual mood. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Thematic pages or sections for news media and literary magazines
- Historical archives, timelines and cultural project landing pages
- Content-heavy interfaces that should feel like printed newspapers or document records

[Layout structure]
1. Page frame
   - Structure the page like a printed sheet with narrow outer margins representing paper edges.
   - Top area is the masthead with newspaper title, subtitle and date.
2. Multi-column layout
   - Use 2–3 columns of similar width with fixed gaps to mimic traditional layouts.
   - Lead stories may span across columns, while regular articles stay within one column.
3. Content modules
   - Include lead stories, secondary articles, sidebars, pull-quote blocks and perhaps small “ad-like” sections.

[Color and materials]
1. Paper and ink
   - Background in warm beiges (e.g. #F5DEB3, #EBD9B5) to suggest aged paper.
   - Body text in pure black (#000000), with secondary information in dark brown or dark grey.
   - Dividers and decorative rules in deeper browns (#8B4513) or similar dark tones.
2. Aging texture
   - Overlay fine grain and paper fiber textures.
   - Optionally add faint folds, wear near the edges and coffee stains, while keeping text legible.

[Typography and hierarchy]
1. Type system
   - Use serif faces such as Georgia or Times New Roman.
   - Establish clear levels for masthead, article headlines, subheads and body copy.
2. Alignment and leading
   - Justify body text to both left and right margins to emulate print typesetting.
   - Use slightly tight line-height to give a dense print impression without harming readability.

[Interaction and motion]
1. Hover
   - On hover, links can gain underlines, slight weight increases or shift to dark brown instead of modern bright colors.
   - Hovering an article block may lightly brighten its paper background or emphasize its border.
2. Motion
   - Restrict motion to gentle fades or scroll-in effects; avoid flashy animations that break the print illusion.

[Output requirements]
- Use semantic HTML (header / main / article / aside / footer) to build the newspaper-like structure.
- Use Tailwind-style utilities for columns/grid, spacing and typography, with a few custom classes for paper texture and aging.
- The generated UI must preserve “beige paper + multi-column layout + black-and-white print + subtle aging” so it clearly reads as a vintage newspaper page.`
    },

    // 模板级 stylePrompt (详细 Prompt，1000-3000字)
    stylePrompt: {
      'zh-CN': `角色：你是专精于复古报纸（Vintage Newspaper）风格的 UI 设计师，专注于 20 世纪早期印刷媒体美学。

场景定位：为复古博客、历史档案网站或怀旧主题内容平台打造具有报纸质感的界面，通过印刷排版和纸张纹理传达时代感。

核心设计语言：

1. **报纸排版系统**：
   - 多栏布局：
     \`\`\`css
     .newspaper-layout {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 24px;
       column-rule: 1px solid #8b4513;
     }
     \`\`\`

   - 大标题样式：
     \`\`\`css
     .newspaper-headline {
       font-family: Georgia, 'Times New Roman', serif;
       font-size: 48px;
       font-weight: 900;
       line-height: 1.1;
       text-transform: uppercase;
       color: #1a1a1a;
       border-bottom: 3px double #8b4513;
       padding-bottom: 12px;
       margin-bottom: 16px;
     }
     \`\`\`

   - 首字母下沉：
     \`\`\`css
     .newspaper-dropcap::first-letter {
       float: left;
       font-size: 72px;
       line-height: 0.8;
       margin: 8px 12px 0 0;
       font-weight: 700;
       color: #8b4513;
     }
     \`\`\`

2. **复古纸张纹理**：
   - 泛黄纸张背景：
     \`\`\`css
     .newspaper-paper {
       background:
         linear-gradient(rgba(139, 69, 19, 0.03) 1px, transparent 1px),
         linear-gradient(90deg, rgba(139, 69, 19, 0.03) 1px, transparent 1px),
         linear-gradient(to bottom, #f5deb3, #f0e5d0);
       background-size: 20px 20px, 20px 20px, 100% 100%;
       box-shadow: inset 0 0 100px rgba(139, 69, 19, 0.1);
     }
     \`\`\`

   - 咖啡渍效果：
     \`\`\`css
     .coffee-stain {
       position: absolute;
       width: 80px;
       height: 80px;
       background: radial-gradient(
         circle,
         rgba(139, 69, 19, 0.2) 0%,
         rgba(139, 69, 19, 0.1) 50%,
         transparent 70%
       );
       border-radius: 50%;
       filter: blur(2px);
     }
     \`\`\`

   - 纸张折痕：
     \`\`\`css
     .paper-crease {
       background: linear-gradient(
         to right,
         transparent 0%,
         rgba(0, 0, 0, 0.05) 49%,
         rgba(255, 255, 255, 0.1) 50%,
         rgba(0, 0, 0, 0.05) 51%,
         transparent 100%
       );
     }
     \`\`\`

配色方案：

主色调（复古纸张）：
- 米黄纸：#F5DEB3
- 旧纸褐：#F0E5D0
- 纸边暗：#E6D5B8

文字墨色（旧墨水）：
- 深棕褐：#8B4513
- 暗褐色：#3B2F2F
- 纯黑墨：#1A1A1A

强调色（印章/标记）：
- 复古红橘：#FF6347
- 褪色红：#CD5C5C
- 朱砂红：#E34234

3. **排版细节**：
   \`\`\`css
   .newspaper-body {
     font-family: Georgia, 'Times New Roman', serif;
     font-size: 14px;
     line-height: 1.6;
     color: #3b2f2f;
     text-align: justify;
     hyphens: auto;
   }

   .newspaper-subhead {
     font-size: 18px;
     font-weight: 700;
     font-style: italic;
     color: #8b4513;
     margin: 16px 0 8px;
   }

   .newspaper-byline {
     font-size: 12px;
     font-style: italic;
     color: #8b4513;
     border-top: 1px solid #8b4513;
     border-bottom: 1px solid #8b4513;
     padding: 4px 0;
     margin: 8px 0;
   }
   \`\`\`

4. **磨损边缘效果**：
   \`\`\`css
   .torn-edge {
     position: relative;
   }

   .torn-edge::before {
     content: '';
     position: absolute;
     top: -5px;
     left: 0;
     right: 0;
     height: 10px;
     background: repeating-linear-gradient(
       90deg,
       transparent 0px,
       transparent 8px,
       #f5deb3 8px,
       #f5deb3 12px
     );
     filter: url(#torn-filter);
   }
   \`\`\`

5. **印刷装饰元素**：
   - 装饰性分隔线：
     \`\`\`css
     .newspaper-divider {
       height: 2px;
       background: repeating-linear-gradient(
         90deg,
         #8b4513 0px,
         #8b4513 10px,
         transparent 10px,
         transparent 20px
       );
       margin: 20px 0;
     }
     \`\`\`

   - 装饰性边框：
     \`\`\`css
     .newspaper-border {
       border: 3px double #8b4513;
       padding: 12px;
       background: rgba(245, 222, 179, 0.5);
     }
     \`\`\`

6. **复古图片处理**：
   \`\`\`css
   .vintage-photo {
     filter: sepia(0.8) contrast(1.2) brightness(0.95);
     border: 4px solid #f5deb3;
     box-shadow:
       0 2px 8px rgba(0, 0, 0, 0.3),
       inset 0 0 20px rgba(139, 69, 19, 0.1);
   }
   \`\`\`

技术实现要点：
- 使用 column-rule 创建栏间分隔线
- 使用 ::first-letter 实现首字母下沉
- 使用 radial-gradient 模拟纸张污渍
- 使用 filter: sepia() 创建复古照片效果
- 使用 text-align: justify 实现两端对齐

重要提示：
- 保持高文字密度，模拟报纸信息量大的特点
- 使用褐色系而非纯黑，营造旧墨水感
- 适度添加纸张瑕疵，避免过度失真影响可读性
- 标题使用全大写或首字母大写，增强报纸感`,

      'en-US': `Role: You are a UI designer specializing in Vintage Newspaper style, focusing on early 20th century print media aesthetics.

Scene Positioning: Create newspaper-textured interfaces for vintage blogs, historical archives, or nostalgic content platforms, conveying era through print layout and paper textures.

Core Design Language:

1. **Newspaper Layout System**:
   - Multi-column grid with column-rule
   - Large headlines (48px, font-weight: 900, uppercase)
   - Drop caps with ::first-letter

2. **Vintage Paper Texture**:
   - Yellowed paper background: #F5DEB3 with subtle grid overlay
   - Coffee stain effects using radial-gradient
   - Paper crease with linear-gradient highlights

Color Scheme:

Primary (Vintage Paper):
- Beige Paper: #F5DEB3
- Aged Paper Brown: #F0E5D0
- Paper Edge Dark: #E6D5B8

Text Ink (Old Ink):
- Deep Sepia: #8B4513
- Dark Brown: #3B2F2F
- Pure Black Ink: #1A1A1A

Accent (Stamp/Mark):
- Vintage Red-Orange: #FF6347
- Faded Red: #CD5C5C
- Vermillion: #E34234

3. **Typography Details** with Georgia/Times New Roman, justified text
4. **Worn Edge Effects** with torn edge simulation
5. **Print Decorative Elements** with double borders and dashed dividers
6. **Vintage Photo Treatment** using sepia filter

Technical Implementation:
- Use column-rule for column dividers
- Use ::first-letter for drop caps
- Use radial-gradient for paper stains
- Use filter: sepia() for vintage photo effects
- Use text-align: justify for newspaper alignment

Important Notes:
- Maintain high text density simulating information-rich newspapers
- Use brown tones instead of pure black for old ink feel
- Add paper imperfections moderately without affecting readability
- Use uppercase or title case for headlines to enhance newspaper feel`
    }
  }
];

export default vintageRetroTemplates;
