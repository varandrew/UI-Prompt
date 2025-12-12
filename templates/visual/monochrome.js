// Visual — Monochrome (full page via preview loader)

export const visualMonochrome = {
  id: 'visual-monochrome',
  title: 'styles.visual.monochrome.title',
  description: 'styles.visual.monochrome.description',

  // CustomPrompt：提供給 LLM 的完整生成指令（中英双語）
  customPrompt: {
    'zh-CN': `
你现在是一名擅长黑白灰「单色 / Monochrome」界面的资深 UI 设计师兼前端工程师，需要为一个新的单色仪表盘页面编写一段可直接复制给 LLM 使用的完整指令。

目标：在不复制现有页面具体文案和业务内容的前提下，让 LLM 生成一个与当前「视觉 · 单色（visual-monochrome）」风格高度一致的全屏仪表盘界面。这个页面在布局结构、黑白灰配色策略、对比度控制、排版密度和光影层次上，都要与现有示例非常接近，让人一眼就能看出是同一系列的 Monochrome 界面。

请严格遵循以下约束：
- 只能使用黑、白、灰三个维度的颜色（允许使用不同深浅的灰色），不要引入彩色元素作为主色，只能极少量用于状态图标（如需要可以用接近白的微亮点代替）。
- 保持整体极简、专业、冷静的氛围，强调排版与留白，而不是装饰性的图案或插画。
- 使用语义化 HTML 标签（header、nav、main、section、aside、footer），并使用 TailwindCSS 风格的工具类（如 flex、grid、gap-6、bg-gray-900、text-gray-100 等）描述布局与样式。
- 页面结构需覆盖：顶部导航栏、Hero 区、统计卡片网格、主要内容区（如项目/任务/活动流）、侧边栏或辅助信息区，以及底部简洁的页脚。

【使用场景设定】
- 新页面设定为「Monochrome Workboard」—— 一个面向创意团队或产品团队的工作总览仪表盘。
- 用户登录后可以在这里查看：重要项目概况、当前冲刺进度、关键指标、团队活动、以及一个简化的日程 / 通知列表。
- 界面风格偏向现代企业级 SaaS，但完全使用黑白灰色阶表达层次，用光影、边框和排版代替彩色区分。

【整体布局与信息区块】
1. 顶部导航栏（Navigation Bar）
   - 固定在页面顶部，背景为纯白或接近白的浅灰（例如 #ffffff / #f9fafb），底部有一条 1px 的浅灰边界线作为分隔。
   - 左侧区域包含一个极简 Logo（可以是一个黑色方形或圆形 + 内部线条图形）和产品名称，如 “MONOBOARD”。
   - 中间部分展示文字导航链接（Dashboard / Projects / Analytics / Settings），使用中等字号、全大写或字距略大的样式。
   - 右侧为用户区域：包括通知图标（一个简单的描边铃铛）、用户头像圆形占位以及用户姓名 + 角色标签（如 “Alex / Product Lead”）。
   - 所有交互元素在 hover 时使用轻微的灰阶变化（如 text-gray-500 → text-gray-900，bg-gray-100 → bg-gray-200），不使用彩色高亮。

2. Hero / 欢迎区（Hero Section）
   - 位于导航栏下方，使用黑到深灰的渐变背景，如 from-black via-gray-900 to-black，前景文字为纯白和浅灰。
   - 左侧为主标题和文案：例如 “Welcome back” / “Your monochrome workspace overview”，使用粗体大字号、紧凑字距。
   - 主文案下方可以有两颗按钮：
     - 主按钮：白底黑字（bg-white text-black font-bold）， hover 时略微变成 bg-gray-100。
     - 次按钮：透明背景 + 白色描边（border border-gray-400 text-gray-100）， hover 时背景变为半透明深灰。
   - 右侧可以放一个「单色数据卡片组合」：由几个黑白灰矩形块组成的抽象图表 / 小仪表盘，使用不同灰度和边框线表达层次。

3. 统计卡片区（Statistics Cards）
   - Hero 区下方是 3～4 张统计卡片，布局为响应式网格：在 desktop 下至少 3 列。
   - 每张卡片为白底（bg-white），带轻微圆角（rounded-xl）、浅灰边框（border-gray-200）和柔和阴影（shadow-sm / hover:shadow-lg）。
   - 卡片内容包含：
     - 左上角的深色图标容器：小黑色或深灰色圆角方块，内部放极简的线性图标（只用白色描边）。
     - 右上角的小状态标记：可以是黑色或深灰底白字的小胶囊标签，文本如 “+12%” 或 “New”。
     - 中间的大数字（text-3xl font-black text-black），下面是说明文字（text-sm text-gray-600）。
   - Hover 状态：卡片整体轻微上浮 2px，同时阴影加深、边框颜色略变深。

4. 主内容区（Main Content）
   - 主体采用两列或三列布局：左侧大区域、右侧窄侧栏；在小螢幕上則調整為單列堆疊。
   - 左側区塊可以包含：
     - 「Project Timeline / Sprint」卡片：展示数個項目或衝刺階段，以垂直時間軸或简單列表表示，使用黑白灰分級。
     - 「Task Board / Today’s Focus」卡片：列表形式的任务，左側用黑白灰小圓點或細條表示狀態（待辦 / 進行中 / 已完成）。
   - 右側側欄可以包含：
     - 「Upcoming Events」：以简潔列表列出會議時間，時間文字使用更深的灰色，标題黑色粗体，分隔线用極淡灰。
     - 「Activity Feed / Notifications」：一列列時間标記 + 事件描述的活動流，全部用黑白灰字体和極細分隔线。

5. 底部页腳（Footer）
   - 使用接近白的背景和極細的頂部边界线（border-t border-gray-200）。
   - 左側放版權和产品名稱，右側放简短的連結（Privacy / Terms / Docs）。
   - 儘量保持低調，文字使用 text-xs 或 text-sm，颜色為 text-gray-500。

【色彩与對比策略】
1. 色板设計
   - 背景灰階範圍建議：#f9fafb（页面背景）、#f3f4f6（区塊背景）、#e5e7eb（分隔线与边框）、#d1d5db（次級边线）、#9ca3af（次要文字）、#4b5563（重要文字）、#111827（主文字与黑色元素）。
   - 嚴格控制色彩数量，只使用不同深度的灰色和純黑、純白，透過明度与對比製造层次和焦點。

2. 對比与可讀性
   - 確保主标題文字与背景的對比度 > 7:1，正文与背景的對比度 > 4.5:1，以符合無障礙閱讀要求。
   - 在 Hero 深色背景上，使用純白或接近白的文字；在白色卡片背景上，标題使用深黑或深灰，副标使用中灰。

【排版与网格】
- 採用嚴謹的 4px 或 8px 基準网格系統，所有 padding、margin、gap 以 4 的倍数呈現（例如 gap-4、gap-6、px-6、py-4）。
- 主标題使用字重 800–900 的無襯线字体，副标題使用 600–700，正文 400–500，字距略緊，營造現代感与力量感。
- 保持充足留白，避免在單一区塊內堆積過多元素；让黑白灰的對比和空間本身成為设計語言。

【交互与動效】
- 所有 hover / focus 狀態用灰階变化和阴影变化表達，不要使用彩色阴影或高飽和边框。
- 動画使用快速但沉稳的過渡（約 150–220ms，transition-all ease-out 或 ease-in-out），不使用彈跳或橡皮筋效果，以維持专業冷静的氣质。
- 表單輸入框、搜尋欄等可以使用細边框 + 淺灰背景，在 focus 時边框加深（如 border-gray-900），而非使用彩色高亮。

【輸出要求】
- 仅輸出完整 HTML 結構（包含 <header>/<nav>/<main>/<section>/<aside>/<footer> 等），以及每個元素的 classNames（使用 TailwindCSS 風格工具类）。
- 不輸出解說文字或註解，只輸出最終 HTML。
- 生成結果應在結構和視覺上明显對應上述說明，並且与現有 Monochrome 儀表盤示例風格高度一致：全黑白灰配色、強對比、嚴謹排版、豐富留白。
`,
    'en-US': `
You are a senior UI designer and front-end engineer specializing in monochrome interfaces. Your task is to write a complete, copy-paste-ready instruction for an LLM so it can generate a full-page monochrome dashboard that looks like a sibling of the existing "visual-monochrome" style.

Goal: Without copying the existing demo's exact copy or business content, the LLM should produce a new dashboard page whose layout structure, black/white/gray palette, contrast strategy, spacing system, and typographic rhythm closely match the current monochrome example. At a glance, it should clearly belong to the same family of Monochrome dashboards.

Constraints:
- Use only black, white, and gray tones (different levels of gray are allowed). Do not introduce saturated colors as primary accents.
- Maintain a minimal, professional, and calm aesthetic. The personality of the interface comes from composition, contrast, and typography, not from colorful decoration.
- Output semantic HTML (header, nav, main, section, aside, footer) with TailwindCSS-like utility classes (e.g., flex, grid, gap-6, bg-gray-900, text-gray-100).
- The page must include: a top navigation bar, a hero section, a statistics card grid, a main content area (projects / tasks / activity), a sidebar or secondary panel, and a simple footer.

[Scenario]
- The page is a "Monochrome Workboard" for a modern product or creative team.
- Users land here to review key metrics, current sprint or project status, team activity, and a compact schedule or notifications list.
- The visual tone is contemporary SaaS, but expressed entirely in grayscale: the hierarchy comes from value and structure instead of color.

[Layout Structure]
1. Top Navigation
   - Sticky at the top, with a white or near-white background (#ffffff, #f9fafb) and a 1px light gray bottom border.
   - Left: minimal logo built from simple shapes (square or circle) in black, plus a product name like "MONOBOARD".
   - Center: text links (Dashboard / Projects / Analytics / Settings) using uppercase or slightly expanded letter spacing.
   - Right: notification icon (a stroke-only bell), user avatar circle, and user name + role label.
   - Hover states use subtle grayscale shifts only (text-gray-500 → text-gray-900, bg-gray-100 → bg-gray-200).

2. Hero
   - Sits below the navigation bar, with a dark gradient background (from-black via-gray-900 to-black) and white foreground text.
   - Left side: large, bold headline and supporting copy introducing the workspace.
   - Below the text: two primary actions:
     - Main button: white background, black text, bold font, slight gray hover state.
     - Secondary button: transparent background, white border and text, darkening on hover.
   - Right side: an abstract monochrome data composition made from rectangles and simple graphs, using only black, white, and gray.

3. Statistics Grid
   - Below the hero, use a responsive grid (3–4 cards on desktop) of statistic cards.
   - Each card: white background, rounded corners, light gray border, soft shadow (stronger on hover), and a small lift on hover.
   - Content: icon container in black or dark gray with a simple white line icon, a small pill badge in dark gray or black, a large numeric value, and a secondary label.

4. Main Content & Sidebar
   - Use a two-column layout on desktop: a wider main column and a narrower sidebar; collapse to a single column on small screens.
   - Main column examples:
     - Project timeline or sprint overview, using a vertical timeline or structured list.
     - Today's focus / tasks list with black/gray markers to indicate status.
   - Sidebar examples:
     - Upcoming events with times, titles, and locations using clear typographic hierarchy.
     - Activity feed with timestamped entries, separated by light gray dividers.

5. Footer
   - Simple, low-profile footer with a light gray top border, small text, and links such as Privacy / Terms / Docs.

[Color & Contrast]
- Define a small grayscale palette including values such as: #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #4b5563, #111827, and pure black/white.
- Use contrast ratios that meet accessibility standards: main text versus background at or above WCAG AA, key headings with even stronger contrast.

[Typography & Grid]
- Use a strict 4px or 8px spacing system; all paddings, margins, and gaps should align to this grid (e.g., gap-4, px-6, py-4).
- Headings should use heavy weights (800–900), body text medium to regular (400–500), with tight letter-spacing to reinforce a modern, confident tone.
- Provide generous whitespace between sections; let contrast and negative space carry the aesthetic.

[Interaction & Motion]
- Express state changes through value and shadow, not color. Use simple opacity or brightness shifts and subtle shadow changes for hover/focus.
- Keep animations short and understated (150–220ms ease-out or ease-in-out). Avoid bouncy or elastic transitions.
- Inputs and search fields use thin gray borders and light gray backgrounds; on focus, borders darken instead of turning colored.

[Output Requirements]
- Output only the final HTML structure for the full page plus class names using TailwindCSS-style utilities.
- Do not output explanations or comments.
- The resulting layout must be recognizably monochrome, highly similar to the existing demo in structure and mood, yet with different copy and content blocks.
`,
  },

  // StylePrompt：風格說明，給人和 LLM 理解單色设計理念
  stylePrompt: {
    'zh-CN': `
角色设定：
你是一位专注于「单色 / Monochrome」视觉语言的 UI 设计师。你不依赖丰富的彩色，而是用黑白灰、对比度、留白和排版来构建具有力量感与秩序感的界面。

场景定位：
单色风格适用于企业级 SaaS、数据仪表盘、设计系统文档、极简作品集等需要突出「理性、专业、冷静」气质的场景。它也非常适合用来做品牌的基础设计探索：通过删除色彩噪音，只保留结构、层级与信息本身。

视觉设计理念：
Monochrome 的核心不是「没有颜色」，而是「用明度和对比代替色相」来建立层级。你会用大面积的白色和浅灰作为画布，让深灰甚至纯黑承担视觉重心；你会通过字重、字号、行距和网格布局，让界面即使在没有彩色的情况下也依然清晰、有节奏、有呼吸感。

材质与质感：
单色界面通常是非常平整、干净的：大部分元素是纯色块、细边框和柔和阴影。背景可以是轻微的灰色渐变或微妙的纹理，但绝不能喧宾夺主。你会刻意避免高噪点或重纹理，以免破坏单色界面的克制感。唯一允许明显存在的「材质」是：精确的线条、干净的卡片边缘，以及柔和的阴影层次。

排版与网格：
在 Monochrome 设计中，排版几乎就是主角。你会使用粗体标题配合常规正文，通过字重和大小的差异划分清晰层级。字距和行距控制略为紧凑，让界面看起来凝练有力。所有间距和尺寸都遵循统一的网格系统，避免「差不多」的间距导致画面松散。黑白灰的组合在这里像一张乐谱，而文本则是乐音。

交互体验：
因为没有鲜艳色彩可以用来强调状态，你会用亮度差和形状变化来设计交互反馈。在按钮和卡片 hover 状态下，你只稍微改变背景灰度、增加阴影或调整边框深浅，让用户感到界面是活的、可触碰的，但不会被夸张动画打断思路。重点在于「手感」——点击时的轻微下压、选中时的暗度变化、悬停时的轻微浮起。

整体氛围：
Monochrome 界面给人的感觉往往是专业、克制、有条理的。它适合用来承载复杂的信息，因为缺乏彩色干扰，用户更容易专注于数据和结构本身。好的单色设计不会显得无聊，而是一种「安静的强度」：像一本排版精良的黑白杂志或一份印刷工整的年度报告，让人感受到严谨与品味。

在为任何新页面设计单色风格时，可以不断自问：
- 如果移除所有彩色，这个界面是否仍然有良好的层级与节奏？
- 是否有足够的留白让用户呼吸，而不会被信息淹没？
- 标题、正文、辅文之间的黑白灰对比是否清晰自然？
只要这些问题的答案是肯定的，你的 Monochrome 设计就能在不依赖彩色的前提下，依然保持高度可读性与美感。
`,
    'en-US': `
Role:
You are a UI designer who specializes in monochrome visual language. Instead of relying on rich colors, you use black, white, and gray—together with contrast, whitespace, and typography—to build interfaces that feel strong, ordered, and deliberate.

Context:
Monochrome is well-suited for enterprise SaaS dashboards, design system documentation, minimalist portfolios, and any product that wants to communicate rationality, professionalism, and calm confidence. It also works as a baseline exploration tool for branding: by removing color noise, you reveal the underlying structure and information hierarchy.

Visual Philosophy:
The core of monochrome design is not the absence of color, but the use of value and contrast in place of hue. Large areas of white or very light gray create breathing space, while deep gray and black carry visual weight. Hierarchy is built through font size, weight, spacing, and layout rather than through colored accents. A good monochrome interface should remain legible and expressive even if viewed as a black-and-white printout.

Material & Texture:
Monochrome interfaces tend to be flat and clean. Most elements are simple shapes, thin borders, and carefully tuned shadows. Backgrounds may use subtle gradients or barely-there texture, but these should never overpower the content. The "material" is the precision of lines, the clarity of card edges, and the way shadows separate layers. You avoid heavy noise or pronounced patterns that would conflict with the minimalist aesthetic.

Typography & Grid:
In monochrome design, typography is effectively the main character. Strong headings paired with measured body text, clear hierarchy between titles, subtitles, and meta information, and thoughtful line spacing all contribute to a sense of control. A strict spacing grid—often 4px or 8px—keeps margins, paddings, and gaps coherent across the entire layout. Used this way, black, white, and gray become like musical notes on a staff, and text becomes the melody.

Interaction:
Without colorful states to rely on, interaction feedback is expressed through value and form. Hovering over a button may slightly darken its background and sharpen its shadow; pressing it may make it sink just enough to feel tangible. Focused fields may gain a darker border or a subtle inner shadow. Animations are short, smooth, and restrained. The goal is to support flow, not to show off motion design.

Atmosphere:
The overall mood of a monochrome interface is quiet confidence. It feels serious without being harsh, minimal without being empty. Because color is not competing for attention, users naturally focus on content: numbers, relationships, and hierarchy. A well-executed monochrome design feels like a carefully typeset black-and-white magazine spread or an annual report from a company that takes details seriously.

When extending or applying this style to new screens, keep asking:
- If all color were stripped away, would the layout still be clear and navigable?
- Is there enough whitespace to keep the information from feeling cramped?
- Do the contrasts between headings, body text, and secondary labels feel intentional and readable?
If the answer is yes, your monochrome design will remain strong and elegant, even in the absence of color.
`,
  },

  demoHTML: `
    <div class="mono-demo">
      <div class="mono-card">
        <h4>MONO</h4>
        <div class="mono-swatches">
          <div class="s s--black"></div>
          <div class="s s--gray"></div>
          <div class="s s--light"></div>
        </div>
      </div>
    </div>
  `,

  customStyles: `
    .mono-demo { display:flex; align-items:center; justify-content:center; padding:16px; }
    .mono-card { background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:16px; text-align:center; width:280px; }
    .mono-card h4 { margin:0 0 8px; font-weight:900; letter-spacing:.08em; }
    .mono-swatches { display:flex; gap:10px; justify-content:center; }
    .s { width:40px; height:40px; border-radius:10px; }
    .s--black { background:#000; }
    .s--gray { background:linear-gradient(135deg,#9ca3af,#6b7280); }
    .s--light { background:#f3f4f6; border:1px solid #e5e7eb; }
  `,

  // Use existing async preview id to load full page
  fullPagePreviewId: 'monochrome',
}
