// Single template: Minimalism — Portfolio
// Attach full-page preview via existing module.
import {
  minimalismPortfolioFullPageHTML,
  minimalismPortfolioFullPageStyles,
} from './minimalismPortfolioFullPage'

export const portfolio = {
  id: 'core-minimalism-portfolio',
  title: 'styles.core.minimalism.portfolio.title',
  description: 'styles.core.minimalism.portfolio.description',
  // ✨ AI Prompt（用于生成与當前極简作品集页面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「极简作品集页面」界面风格高度接近的极简主义（Minimalism）作品集页面。
要求：保持大量留白、黑白灰配色和單欄 / 双欄简潔佈局不变，只允許替換文案与作品內容。輸出使用語義化 HTML 和 TailwindCSS 風格原子类。

【使用場景】
- 場景：设計師 / 攝影師 / 創作者的個人作品集。
- 用戶：潛在客戶、HR、合作方，希望快速掃描作品品质。
- 目标：在極简視覺下突出作品标題与描述，让內容本身成為主角。

【整体佈局結構】
1. 頂部区域
   - 简單标題（姓名 / 品牌）与極少量导航（Work / About / Contact），可以靠左或置中。
2. 主內容区
   - 使用單欄或双欄布局展示作品條目，每個條目包含：
     - 作品标題；
     - 極简縮略圖或純文字标記；
     - 一小段描述（可選）。
3. 次要內容
   - 可在底部加入联絡方式 / 社交連結，仍須保持简潔，避免視覺噪音。

【色彩与排版】
1. 色彩
   - 主体使用黑白灰：背景純白或極淺灰，文字為深灰 / 黑色，分隔线与边框使用更淺灰。
   - 點綴色極少，仅用於鏈接或重點标註（如單一品牌色）。
2. 排版
   - 大标題使用較大字號、輕字重（例如細体），字間距略放大。
   - 正文使用 16–18px 字號，行高 1.7–1.8。
   - 作品标題与描述之間留有足夠垂直間距，让每個條目有獨立呼吸感。

【留白与网格】
1. 留白
   - 頂部与內容区之間保留較大空間（例如 64px+ 的 padding-top）。
   - 每個作品條目之間垂直間距統一，如 32 或 40px。
2. 网格
   - 使用 max-width 限制內容寬度（如 720–960px），避免長行。
   - 双欄模式需確保左右欄對齊，維持極简秩序感。

【交互与動效】
1. Hover 效果
   - 作品條目 hover 仅做極細微变化，例如文字颜色稍微加深或底色淺灰。
   - 鏈接 hover 下劃线或颜色变化，不使用阴影或位移。
2. 動效節奏
   - 過渡時間約 150–200ms，保持自然但不花俏。

【輸出要求】
- 使用 header/main/footer/section 等語義化标籤。
- 使用 Tailwind 原子类控制排版与間距。
- 生成的 UI 必須保留「大量留白 + 黑白灰 + 嚴謹對齊 + 作品內容為主」這些核心特徵，让人一眼看出是極简風作品集。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a Minimalist portfolio page that looks very close to the current “Minimal Portfolio” demo.
Keep the extensive whitespace, black–white–grey palette and simple single- or two-column layout almost identical. You may change text and project content, but not the basic structure, spacing rhythm or minimalist visual style. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: personal portfolio for a designer, photographer or creator.
- Users: potential clients, recruiters and collaborators who want to quickly scan the quality of work.
- Goal: let project titles and descriptions become the visual focus, while the interface itself stays almost invisible.

[Layout]
1. Top section with a very simple identity block (name or brand) and minimal navigation such as Work, About and Contact, aligned left or centered.
2. Main content area using a single-column or two-column layout to list projects; each entry includes project title, optional thumbnail or simple placeholder block and a short description.
3. Optional bottom section with contact information and a few social links, still kept extremely light and restrained.

[Visual style]
1. Background is pure white or very light grey; text is rendered in deep grey or near-black for comfortable reading.
2. Accent color usage is minimal, limited to links or small highlights in a single brand color.
3. Typography carries the design: large but light-weight headings, 16–18px body text with generous line-height and clear spacing between project entries.
4. Content width is limited to a medium reading width so that lines do not become overly long; columns remain perfectly aligned to strengthen the sense of order.

[Interaction]
1. Hover states are extremely subtle: project rows may slightly darken text or add a light grey background; links may gain an underline or gentle color change.
2. Do not introduce shadows, strong borders or big movements; motion, if any, should be limited to short (150–200ms) opacity or color transitions.

[Output requirements]
- Use header, main, section and footer semantic tags to structure the page.
- Use Tailwind-style utility classes to control typography, spacing, max-width and alignment.
- The generated UI must clearly preserve the core characteristics of this Minimal portfolio: lots of whitespace, monochrome palette, strict alignment and content-first presentation.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于极简主义设计的 UI 设计师，擅长通过减法设计和精确控制创造优雅、纯粹的界面。

场景定位：
为追求品质和简洁的用户打造极简风格界面，通过大量留白和精确排版让内容成为绝对焦点。目标用户为审美品味高、注重本质的人群，需要在视觉上体现克制、优雅、高级的品牌印象。界面要求移除一切非必要装饰，让用户能够专注于核心内容和功能。这是一个强调"少即是多"哲学的设计系统，需要在极度简约中展现精致和品质。

视觉设计理念：
采用极端的减法设计，移除一切非必要的视觉元素，只保留最核心的内容和功能。设计强调留白的力量，通过大量的负空间创造呼吸感和专注力。视觉层次完全依赖精确的网格系统、细腻的排版和克制的色彩，而非任何装饰性元素。整体追求优雅、纯粹、永恒的视觉品质，如同高级艺术画廊般宁静而有力量。界面运用以黑白灰为主的中性色系，仅使用极少的点缀色来引导关键操作，营造出沉稳、高级、专注的视觉氛围。

材质与质感：
所有元素都回归到最基本的平面形态，完全不模拟任何材质。背景是纯白或极浅的灰色，如同高级美术纸般细腻柔和。文字使用精心挑选的无衬线字体或衬线字体，笔画清晰而优雅，字间距经过精确计算以达到最佳的阅读节奏。边框和分隔线极度纤细，如同铅笔在纸上轻轻划过的痕迹，或直接使用留白分隔。按钮通常只是文字或文字配以细线边框，没有填充背景或仅使用最淡的灰色背景。图片和内容区域通过精确的网格对齐，没有任何不必要的装饰框或阴影。整体视觉如同高级印刷品，精致、克制、充满细节的考究。所有颜色都经过精心选择，黑色通常不是纯黑而是深灰，白色背景可能带有极微妙的暖调或冷调，形成精致的色彩层次。

交互体验：
交互设计追求极度的细腻和克制，所有反馈都在微妙中完成。鼠标悬停时，元素会发生极其细微的变化，可能只是一个几乎察觉不到的透明度调整或颜色深浅的微变。点击反馈同样克制，没有夸张的动画或效果，只是简单的状态切换或极其细微的过渡。页面滚动极其流畅，如同在丝绸上滑动般优雅。页面切换使用简单的淡入淡出，避免任何复杂的动画效果。所有动画时长都控制得极短，通常在两百至三百毫秒之间，使用柔和的缓动曲线。文字选中时的高亮颜色也经过精心设计，通常是极浅的灰色或品牌色的极淡版本。整体交互给人以宁静、优雅、高级的体验，每个细节都经过深思熟虑。

氛围营造：
界面营造出高级美术馆或精品书店的优雅氛围，宁静而充满品味。黑白灰的极简色调传递出专业、纯粹、永恒的品质感。大量的留白不是空虚，而是给予内容最大的尊重和展示空间，通常内容仅占页面的百分之四十到五十，其余都是精心设计的负空间。文字排版遵循精确的网格系统，通常使用十二列网格，所有元素都严格对齐。字体层次清晰，大标题可能使用四十八至七十二像素，正文使用十六至十八像素，次要信息使用十二至十四像素。字重变化克制，通常只使用两到三种字重。行距宽松，通常是字体大小的一点五至一点八倍，确保阅读舒适。段落间距更大，形成明确的内容分组。点缀色如果存在，通常是极其克制的使用，可能只出现在一个关键按钮或链接上，颜色可能是纯蓝、纯黑或品牌色。整体设计如同日本侘寂美学，在极致的简约中蕴含深邃的美感，让浏览者在平静的视觉环境中专注于内容本身，体会设计的本质力量。`,

  'en-US': `Role: You are a UI designer specializing in Minimalism, skilled at creating elegant, pure interfaces through subtractive design and precise control.

Scenario Positioning:
Create minimalist style interfaces for users pursuing quality and simplicity, making content the absolute focus through ample whitespace and precise typography. Target users have high aesthetic taste and value essence, needing interfaces that visually reflect restraint, elegance, and premium brand impressions. The interface must remove all non-essential decorations, allowing users to focus on core content and functions. This is a design system emphasizing the "less is more" philosophy, needing to show refinement and quality in extreme simplicity.

Visual Design Philosophy:
Adopt extreme subtractive design, removing all non-essential visual elements, keeping only core content and functions. Design emphasizes the power of whitespace, creating breathing room and focus through abundant negative space. Visual hierarchy relies entirely on precise grid systems, delicate typography, and restrained colors rather than any decorative elements. Overall pursuit of elegant, pure, timeless visual quality, as quiet and powerful as high-end art galleries. The interface employs neutral color systems dominated by black, white, and gray, using only minimal accent colors to guide key operations, creating stable, premium, focused visual atmosphere.

Materials & Textures:
All elements return to basic flat forms, completely avoiding material simulation. Backgrounds are pure white or extremely light gray, as delicate and soft as premium art paper. Text uses carefully selected sans-serif or serif fonts with clear elegant strokes, character spacing precisely calculated for optimal reading rhythm. Borders and dividers are extremely fine, like pencil marks lightly traced on paper, or directly using whitespace separation. Buttons are usually just text or text with thin line borders, no filled backgrounds or only lightest gray backgrounds. Images and content areas align through precise grids without any unnecessary decorative frames or shadows. Overall visual like high-end printed matter—refined, restrained, full of detailed consideration. All colors carefully chosen, black usually not pure black but dark gray, white backgrounds possibly with extremely subtle warm or cool tones, forming refined color hierarchy.

Interaction Experience:
Interaction design pursues extreme delicacy and restraint, all feedback completed subtly. On hover, elements undergo extremely subtle changes, perhaps just barely noticeable opacity adjustments or slight color depth variations. Click feedback equally restrained, no exaggerated animations or effects, just simple state transitions or extremely subtle transitions. Page scrolling extremely smooth, as elegant as sliding on silk. Page transitions use simple fade in/out, avoiding any complex animation effects. All animation durations controlled extremely short, usually between two hundred to three hundred milliseconds, using soft easing curves. Text selection highlight colors also carefully designed, usually extremely light gray or very light versions of brand colors. Overall interaction gives quiet, elegant, premium experience, every detail thoughtfully considered.

Atmosphere Creation:
The interface creates the elegant atmosphere of high-end art museums or boutique bookstores, quiet and full of taste. Minimalist black-white-gray tones convey professional, pure, timeless quality. Abundant whitespace is not emptiness but maximum respect and display space for content, usually content occupying only forty to fifty percent of page, remainder carefully designed negative space. Text typography follows precise grid systems, usually using twelve-column grids, all elements strictly aligned. Font hierarchy clear, large titles possibly using forty-eight to seventy-two pixels, body text sixteen to eighteen pixels, secondary information twelve to fourteen pixels. Font weight changes restrained, usually only using two to three weights. Line spacing generous, usually one point five to one point eight times font size, ensuring reading comfort. Paragraph spacing larger, forming clear content grouping. Accent colors if existing, usually extremely restrained use, possibly appearing only on one key button or link, colors possibly pure blue, pure black, or brand colors. Overall design like Japanese wabi-sabi aesthetics, containing profound beauty in ultimate simplicity, letting viewers focus on content itself in calm visual environment, experiencing essential power of design.`
  },

  // Full-page preview content
  fullPageHTML: minimalismPortfolioFullPageHTML,
  fullPageStyles: minimalismPortfolioFullPageStyles,
}
