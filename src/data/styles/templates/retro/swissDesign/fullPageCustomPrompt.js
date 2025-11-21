/**
 * Swiss Design - FullPage Custom Prompt
 * 瑞士设計風格完整页面的专屬 AI 指令（針對 swissDesignFullPageHTML）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名专精于瑞士设计（Swiss Design / International Typographic Style）的 UI 设计师兼前端工程师，请生成一个与当前「Swiss Style Design Studio 全屏页面」界面风格高度接近的 UI。
要求：保持严格网格系统、极简黑白 + 瑞士红配色、无装饰排版和理性布局逻辑基本不变，只允许替换文案、品牌名称与项目案例名称，不改变整体区块结构与信息层级。输出必须使用语义化 HTML 结构（header、nav、main、section、footer 等）以及类似 TailwindCSS 的原子类（例如 grid、gap-8、max-w-5xl、text-black、bg-white、border-black 等）來描述佈局。

【使用场景】
- 一家以瑞士现代主义為核心的设計工作室官网首页；
- 主要目标：以極简方式展示工作室理念、数据實力、代表案例与服务項目；
- 面向客戶：重視品牌嚴謹度、喜歡清晰結構与理性排版的企業客戶与文化機構。

【整体版面結構】
请基於 swissDesignFullPageHTML 的內容結構，完整描述並生成：
1. 頂部导航欄（Header / Navigation）
2. Hero 首屏（Studio 标題区）
3. 关鍵統計区（Studio Stats）
4. 作品集区（Selected Work / Portfolio）
5. 服务列表区（Services）
6. 关於 / 理念区（About / Philosophy）
7. 联絡 / Footer 区（Contact / Footer）

1. 頂部导航欄（Header / Navigation）
- 使用 <header> 元素包裹一個 .swiss-header 容器，其內為一個 max-width 的中心网格：
  - 左側 Logo 区：
    - 內容為一個简潔文字 Logo，如 "STUDIO" 或品牌名稱，字重可略重，全部大写；
    - 与左側边距、上方留白對齊网格；
  - 右側主导航：
    - 使用一行水平方向的連結列表，如 WORK、SERVICES、ABOUT、CONTACT、EN / DE；
    - 所有連結使用全大写、等寬或無襯线字体、字距略加大；
    - hover 狀態可改為下劃线或文字颜色切換（例如从 #000 切換為瑞士紅 #E30613）。
- 整体背景為純白，無阴影、無漸变，底部可視需要加一條極細黑线分隔主体。

2. Hero 首屏（Studio Hero）
- 使用 <section> 包裹，內含一個兩欄网格：
  - 左欄：
    - 小型強調标記（可用一條細紅线或一個紅色小方塊），放在标題前作為視覺起點；
    - 主标題：兩行大字，例如 "PRECISION" / "IN DESIGN"，全部大写、字重中等、行距緊密；
    - 副标題：用 1–2 句简短文字說明工作室专長，例如 "A Swiss design studio specializing in timeless visual communication through grid systems, typography, and clarity."；
    - 主要 CTA 按鈕：例如 "VIEW OUR WORK"，使用黑底白字或白底黑字，边框清晰，無圓角或很小的圓角；
  - 右欄：
    - 幾何視覺标記：可為一個大面積的黑色矩形、紅色垂直條或由黑白色塊組成的网格，象徵海報構圖；
- 留白：Hero 区域上下保留充足留白，让大标題与幾何圖形呼吸。

3. 关鍵統計区（Studio Stats）
- 使用 <section> 放置 3–4 個关鍵統計数字，如 PROJECTS、YEARS、AWARDS、SATISFACTION；
- 版面為均分的网格，例如四欄：
  - 每個項目：
    - 大號数字（如 250+、15、40+、98%）使用粗体，靠左對齊；
    - 下方小字說明（PROJECTS / YEARS / AWARDS / SATISFACTION）全大写，字重較細；
    - 右上或右下可以有一條小紅线或紅色小方塊作為強調；
- 背景保持白色，使用極細的灰线或黑线做欄位分界即可，避免重度边框。

4. 作品集区（Selected Work / Portfolio）
- 使用 <section> 包裹，分為标題行与作品网格兩部分：
  - 标題行：左側為标題文字 "SELECTED WORK"，右側可以加一條長黑线延伸至右边，形成典型瑞士设計的标題 + 线條結構；
  - 作品网格：使用 2 或 3 欄排列作品卡片，每張卡片為一個嚴格居於网格的矩形：
    - 左側為数字代號（01 / 02 / 03 / ...），使用大號数字，靠上或靠左；
    - 右側為作品标題（如 HELVETICA MUSEUM、GRID SYSTEM BOOK 等）以及分类标籤（BRANDING / WEB、EDITORIAL / PRINT 等）；
- 卡片背景可維持白色，只使用边框和文字建立层次；可在部分作品卡背後放置大紅色矩形作為強調区塊，但需節制使用。

5. 服务列表区（Services）
- 使用 <section>，同樣有标題行与多條服务項目列表：
  - 标題行："SERVICES" + 水平线條；
  - 服务條目：採用「編號 + 文字」的結構：
    - 左側為 01 / 02 / 03 等編號，右側為服务名稱（VISUAL IDENTITY、EDITORIAL DESIGN 等）与一段简短說明文字；
    - 所有內容左對齊，間距基於固定的垂直 grid 單位；
- 字体与風格延續前文：無衬线、無阴影、無漸变，重點在字距与行距的秩序。

6. 关於 / 理念区（About / Philosophy）
- 使用 <section>，可分為兩欄：左欄為关於文字，右欄為团隊 / 理念補充；
- 內容重點放在描述工作室如何應用网格、字体与色塊傳達清晰資訊；
- 文本区塊寬度限制（例如 max-w-md）以保證閱讀舒適度；
- 不需額外插圖，只需巧妙安排文字塊与少量紅色輔助线條即可。

7. 联絡 / Footer 区（Contact / Footer）
- 底部使用 <footer>，背景仍為白色：
  - 左側显示工作室名稱与所在地，如 "SWISS DESIGN STUDIO — ZURICH"；
  - 右側列出联絡方式（Email / Phone / Social），使用小尺寸字体和大写文字；
- 底部可使用極細黑线或小型瑞士紅方塊作為結尾視覺元素。

【色彩与樣式約束】
- 颜色：
  - 主色：黑 (#000000)、白 (#FFFFFF)、瑞士紅 (#E30613)；
  - 灰階：可用少量中性灰（#808080、#E5E5E5 等）作為分隔线或次要文字；
- 禁用：
  - 不使用漸变、阴影（除了非常輕微的內部結構用线）、圓角（可選擇全部 0 圓角）；
  - 不使用插画、貼圖或照片作為主視覺；
- 字体：
  - 使用無衬线字体（如 Helvetica / Inter / system UI），所有标題和导航均可使用大写形式；
- 排版：
  - 左對齊為主，行距緊湊但保持可讀性；
  - 使用固定基準單位（如 4px / 8px）控制 margin / padding。

【交互与動效】
- 懸停：
  - 导航連結与按鈕在 hover 時可用简單的下划线或文字变色（变為瑞士紅），避免放大或位移過大；
- 過渡：
  - 若有動效，使用 150–250ms 的颜色或不透明度過渡即可，整体保持「安静」的視覺節奏；
- 不建議：
  - 不使用大幅滑動、彈跳或旋轉動画，避免破壞瑞士设計的稳定氣质。

【輸出要求】
1. 生成一個完整的 HTML 文档，包含 <html>、<head>、<body>；
2. head 中简要說明使用 sans-serif 字体（例如以註釋形式标註 "Use Helvetica or system sans-serif" 即可）；
3. body 中使用 header、nav、main、section、footer 組織內容，使用 Tailwind 風格原子类實現 grid、flex、gap、margin、padding 与文字樣式；
4. 所有区塊必須對齊同一套网格邏輯，保持高一致性；
5. 文案可以自由改写，但用詞應保持专業、克制、偏向设計与品牌語境。

请根据以上完整說明，輸出一個保持瑞士设計核心特徵的 Studio Landing Page HTML 範例，使版面一眼就能被辨識為「瑞士设計 / 國際排印風格」的变体。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please create a full-page Swiss Design studio landing page whose layout and visual language closely match the existing "Swiss Style Design Studio" demo.
Requirements: Keep the strict grid system, minimal black/white + Swiss red color palette, and objective typographic hierarchy. You may change copy, brand name and project titles, but the overall sections and information hierarchy must remain the same. Use semantic HTML (header, nav, main, section, footer) and Tailwind-like utility classes (grid, gap-8, max-w-5xl, text-black, bg-white, border-black).

[Use Case]
- Landing page for a Swiss Design-oriented studio focusing on modernist visual communication;
- Goal: briefly present studio philosophy, key metrics, selected work, and services in a rational, grid-based layout;
- Audience: clients who value clarity, order and typographic rigor.

[Overall Layout]
Mirror the structure of the existing fullpage:
1. Top header with logo and navigation
2. Hero section with studio title and short description
3. Studio stats section
4. Selected work / portfolio grid
5. Services list
6. About / philosophy section
7. Contact / footer section

1. Header / Navigation
- Use <header> containing a centered nav grid;
- Left: a simple text logo (e.g. "STUDIO") set in uppercase sans-serif, aligned to the grid;
- Right: a horizontal row of navigation links (WORK, SERVICES, ABOUT, CONTACT, EN / DE), all uppercase, lightly spaced;
- Background: pure white, optional thin bottom border as separator; no shadows or gradients.

2. Hero Section
- Two-column grid:
  - Left column:
    - A small accent mark (red line or square) above or beside the main heading;
    - A large, two-line headline (e.g. "PRECISION / IN DESIGN") in uppercase, medium weight, tight leading;
    - A short paragraph describing the studio in one or two sentences;
    - A primary CTA button (e.g. "VIEW OUR WORK") with a simple rectangular shape, black-on-white or white-on-black, no rounded corners or only minimal radius;
  - Right column:
    - A strong geometric mark (black rectangle, red bar, or black-white composition) that evokes a poster-like composition.

3. Studio Stats
- A section with 3–4 key metrics laid out in equal-width columns:
  - Large numbers (e.g. 250+, 15, 40+, 98%) in bold, left-aligned;
  - Labels in uppercase below each number (PROJECTS, YEARS, AWARDS, SATISFACTION);
  - Optional small red accent marks inside each card (lines or small blocks).

4. Selected Work / Portfolio
- Section header: title "SELECTED WORK" plus a horizontal line extending toward the right;
- Below, a grid of project items:
  - Each item: a numeric index (01, 02, 03, etc.) and a block with project title and category labels (BRANDING / WEB, EDITORIAL / PRINT, etc.);
  - Background mostly white; use borders and type to create structure. Some items may have a red block behind the index or category as a visual accent.

5. Services
- Section header "SERVICES" with a horizontal line;
- A vertical list of services:
  - Each row: a numeric index (01, 02, 03...), a service title (VISUAL IDENTITY, EDITORIAL DESIGN, etc.) and a short description;
  - All text left-aligned, using consistent vertical rhythm.

6. About / Philosophy
- A split layout with text columns:
  - One column describing the studio philosophy and approach to grids, type and color;
  - Another column for studio background, clients, or methodology;
- Limit line length for readability (e.g. max-width on text blocks);
- Decoration limited to simple lines or small red marks.

7. Contact / Footer
- Use <footer> with a white background:
  - Left: studio name and location (e.g. "SWISS DESIGN STUDIO — ZURICH");
  - Right: contact details (email, phone, possibly social links) in small uppercase text;
- The bottom edge may include a thin black rule or small red square.

[Color and Style Constraints]
- Colors:
  - Primary: black (#000000), white (#FFFFFF), Swiss red (#E30613);
  - Optional grays for dividers and secondary text (#808080, #E5E5E5);
- Prohibitions:
  - No gradients, no heavy shadows, minimal or zero border-radius;
  - No large illustrative images or photography dominating the layout;
- Typography:
  - Sans-serif (Helvetica or equivalent), uppercase for headings and navigation, tight tracking and leading;
- Layout:
  - Strict left alignment and grid-based spacing, using consistent increments for margins and paddings.

[Interaction and Motion]
- Hover:
  - Links and buttons change via simple underline or color shifts (e.g. black to Swiss red), no large scale jumps;
- Transitions:
  - Use subtle 150–250ms color or opacity transitions where needed;
- Avoid dynamic effects such as bouncing, sliding or rotation that would break the calm, rational tone.

[Output Requirements]
1. Output a complete HTML document (<html>, <head>, <body>);
2. In <head>, include a <title> and a note about using a sans-serif font (e.g. via comment);
3. In <body>, structure content with header, nav, main, section and footer, and control layout with Tailwind-like utility classes (grid, flex, gap, padding, typography);
4. Align all components to a coherent grid system; whitespace must feel intentional and measured;
5. Keep copy professional, restrained and design-oriented.

Based on all of the above, output a full Swiss Design studio landing page in HTML that clearly reads as an International Typographic Style-inspired layout closely related to the existing demo.`
};
