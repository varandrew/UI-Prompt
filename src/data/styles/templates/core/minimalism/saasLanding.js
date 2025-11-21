// Single template module: Minimalism — SaaS Landing
// Note: code comments in English per repository guideline.
// Contains 3 template variations accessible via previews
import {
  minimalismFullPageHTML,
  minimalismFullPageStyles,
} from './minimalismFullPage'

export const saasLanding = {
    id: 'saas-landing',
    title: 'styles.core.minimalism.preview.saasLanding',
    type: 'full',

    // ✨ AI Prompt（用于生成与当前极简 SaaS 落地页高度接近的 UI）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「极简 SaaS 落地页」界面风格高度接近的极简主义（Minimalism）风格 SaaS 首页。
要求：保持整体布局、留白比例和黑白灰基調不变，只允许替换文案、品牌名称和图标。输出使用语义化 HTML 结构和 TailwindCSS 风格的原子类（或等价的工具类方案）。

【使用场景】
- 场景：SaaS 产品官网落地页，用于展示产品卖点、功能模块和行动按钮。
- 用户：追求效率与品质的企业用户和专业个体。
- 目标：在极简视觉下清晰传达产品价值，引导用户点击「开始使用 / 申请试用」等主行动。

【整体布局结构】
1. 顶部导航
   - 左侧：极简 Logo（文字或简单图形）。
   - 右侧：少量导航链接（产品 / 价格 / 方案 / 登录）+ 主行动按钮（注册 / 免费试用）。
   - 导航条背景应与页面背景一致，保持干净。
2. Hero 区域
   - 左侧：大标题 + 副标题 + 主行动按钮 + 次要链接（例如「查看文档」）。
   - 右侧：一张极简示意图 / 仪表板截图或抽象占位图，避免复杂插画。
3. 功能概览区
   - 使用 3–4 个简洁卡片或图文块，每个模块包含图标 + 标题 + 一小段说明。
   - 卡片排列在精确的网格之上（例如三列布局，统一间距）。
4. 其他区块（可选）
   - 客户 Logo 列表、简单价格卡片、简短客户评价等，始终遵循极简排版和大量留白。

【色彩与排版】
1. 色彩系统
   - 黑白灰为基础：#000000 / #111827 / #374151 / #6b7280 / #e5e7eb / #f9fafb。
   - 点缀色极少使用，例如单一品牌蓝 #0066ff 用于主按钮和链接。
   - 避免大面积高饱和多色，保证页面 80–90% 面积为中性色。
2. 排版规则
   - 标题：较大字号（如 text-4xl ~ text-5xl），字重 300 或 600，字间距略微收紧。
   - 正文：16–18px 等級，行高 1.7–1.8，字距略微放大以提升可读性。
   - 辅助文字：更小字号和更浅灰度，用于标签/说明。

【布局与留白】
1. 留白原则
   - Hero 区塊四周有大留白（padding-y 至少 64px 以上）。
   - 模块之间使用基于 8px 單位的间距系统（例如 24 / 32 / 48 / 64px）。
   - 内容区域宽度限制在約 960–1200px，使文本行長舒適。
2. 网格系統
   - 使用 12 列网格或等效的 Tailwind 實現（例如 max-w-5xl + gap-x-8）。
   - 所有卡片和文案對齊到同一列，避免視覺漂移。

【交互与動效】
1. Hover 效果
   - 按鈕：hover 時背景色和边框色輕微变化（例如黑底白字反轉），不使用大幅位移或阴影。
   - 卡片：可以仅改变边框颜色或背景亮度 5–10%，不加粗阴影。
2. Active / Focus
   - 按鈕与輸入框在 active/focus 時使用明確但克制的描边（例如 outline 或 ring），避免炫目 glow。
3. 動效節奏
   - 所有過渡控制在 150–250ms，使用輕微 ease-out 曲线，让界面「安静但不死板」。

【输出要求】
- 使用语义化 HTML 标签（header/nav/main/section/footer）。
- 使用 TailwindCSS 原子类描述布局和排版（flex/grid/gap/px/py 等）。
- 生成的界面必须保持「极简主义 + 留白至上 + 本质呈现」这一核心特征，让人一眼看出是非常乾净、克制的 SaaS 落地页。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Minimalist SaaS landing page that looks very close to the current “Minimal SaaS Landing” demo.
Keep the overall layout, whitespace ratio and monochrome base palette almost identical: navigation bar, hero section, feature cards and call-to-action area should all match the current composition. You may change copy, brand name and icons, but not the structure, spacing system or minimalist visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: marketing homepage for a SaaS product that needs to present value proposition, key features and primary actions.
- Users: efficiency-oriented business users and professionals evaluating the product.
- Goal: under a very clean visual surface, clearly communicate product value and drive clicks on primary actions such as “Get started” or “Start free trial”.

[Layout]
1. Top navigation with a minimal logo on the left and a small set of links (for example Product, Pricing, Solutions, Login) plus a primary CTA button.
2. Hero section with large headline, short explanatory paragraph, one or two primary buttons and, on the side, a simple mockup or abstract dashboard preview that does not overpower the text.
3. Feature overview area using 3–4 compact cards or text blocks, each with a small icon, feature title and one–two lines of supporting text.
4. Optional social proof area (client logos, simple testimonials) and a final call-to-action block, all kept extremely simple and aligned to the grid.

[Visual style]
1. Use black, white and a range of neutral greys as the main color system; most of the page surface should remain neutral.
2. Allow at most one strong accent color (for example a single brand blue) for primary buttons and key links.
3. Typography is the main visual tool: large, light-weight headings, 16–18px body text with generous line-height and clear hierarchy through size and weight.
4. Whitespace drives the composition: hero paddings are large, gaps between sections are consistent and content width is constrained for comfortable reading.

[Interaction]
1. Hover states are subtle: buttons may invert colors or slightly change background tone, cards may slightly adjust border or background brightness; avoid heavy shadows or motion.
2. Focus and active states use clear but restrained outlines or border-color changes so controls are accessible without breaking the calm aesthetic.
3. Transitions are short (150–250ms) with ease-out curves, giving a quiet but responsive feeling.

[Output requirements]
- Use semantic HTML tags such as header, nav, main, section and footer.
- Use TailwindCSS-style utility classes to control layout (flex, grid), spacing, typography and colors.
- The generated landing page must clearly read as “Minimalist + whitespace-first + essential presentation”, matching the calm, clean feeling of the current SaaS landing UI.`
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
    fullPageHTML: minimalismFullPageHTML,
    fullPageStyles: minimalismFullPageStyles,
}
