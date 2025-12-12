// Dark Academia Family Aggregator
// 暗黑学院家族聚合器

import { darkAcademiaLibrary } from './darkAcademiaLibrary'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.darkAcademia.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.darkAcademia.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Dark Academia 暗黑学院」核心样式卡展示界面风格高度接近的 UI。
要求：保持深棕木质背景、羊皮纸内容面板、烛光光晕和古籍书脊这些核心视觉元素，只允许替换文案内容和局部布局，不改变整体「书房 / 图书馆」氛围。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 学术平台、文学社区、个人写作空间的首页或文章详情页
- 图书馆 / 书店 / 出版社的专题落地页
- 需要呈现「学术、怀旧、内向、思辨」气质的内容型界面

【整体布局结构】
1. 背景层
   - 使用深棕色木纹或深色书架作为全屏背景，营造沉浸式书房空间感。
   - 可以隐约看到书架、书脊或装饰画，但不抢夺前景内容注意力。
2. 中央内容面板
   - 居中放置 1–2 个羊皮纸质感的内容卡片，用于承载标题与正文。
   - 卡片宽度控制在可阅读范围内（例如 640–960 像素），四周留出足够暗色留白。
3. 辅助元素
   - 顶部可有简洁导航栏或页眉标题，风格偏「书籍封面」而非现代网页导航。
   - 底部可加入细线分隔和版权信息，保持克制。

【色彩与材质】
1. 主色系统
   - 深棕色与烟熏棕：如 #2D2416、#5D4E37，用于背景与书架。
   - 羊皮纸米黄：如 #F4E8C1、#F2E3C4，用于主要内容卡片。
   - 墨绿与酒红：作为小面积装饰线条、引导元素或章节标题色。
2. 质感表现
   - 背景具有木纹 / 旧墙 / 书架层次，但细节适度模糊，避免干扰文字阅读。
   - 内容卡片边缘可有轻微磨损、褪色或不规则纸张边界。
   - 可在角落使用蜡封、羽毛笔、墨水瓶等图标或插图作为点缀。

【光影与氛围】
1. 烛光光晕
   - 在局部位置模拟烛火或暖光来源：使用暖黄渐变和柔和高斯模糊。
   - 光照范围有限，形成「明亮内容区 + 深色背景」的强对比。
2. 阴影层次
   - 内容卡片与前景元素有柔和但明显的阴影，营造纸张悬浮在桌面或书架前的感觉。
   - 阴影方向统一，暗示单一光源位置，增强空间感。

【交互与动效】
1. Hover 效果
   - 链接与按钮在悬停时略微提亮或增加细线下划线，避免强烈 glow。
   - 卡片可在 hover 时轻微升起 2–3px，并稍微提高亮度，模拟纸张被触碰。
2. 动画节奏
   - 若使用光晕闪烁或粒子飘动，应保持缓慢、低频率，营造安静氛围。
3. 可访问性
   - 保证文字与背景之间有充足对比度，避免过暗导致阅读困难。

【输出要求】
- 使用语义化 HTML（article / header / main / aside 等）组织内容。
- 使用 TailwindCSS 风格原子类控制间距、排版和对齐。
- 生成结果必须保留「深棕木质背景 + 羊皮纸内容卡片 + 温暖烛光 + 学术氛围」这些关键特征，让人一眼看出是 Dark Academia 风格变体。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Dark Academia style interface that looks very close to the current “Dark Academia” core style card demo.
Keep the deep brown wood background, parchment content panels, candlelight glow and old book spines as the main visual elements. You may change copy and detailed layout, but you should not change the overall “library / study room” atmosphere. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Home or article pages for academic platforms, literary communities or personal writing spaces
- Thematic landing pages for libraries, bookstores or publishers
- Content-driven interfaces that need to convey a mood of scholarship, nostalgia and introspection

[Layout structure]
1. Background layer
   - Use a full-screen dark brown wood texture or bookshelf backdrop to create an immersive study environment.
   - Shelves, book spines or framed artwork may be subtly visible but should not overpower the foreground content.
2. Central content panel
   - Place one or two parchment-like content cards in the center to hold titles and body text.
   - Keep card width within a comfortable reading range (roughly 640–960px) with generous dark margins around.
3. Supporting elements
   - A simple header or navigation bar at the top may resemble a book cover rather than a modern web navbar.
   - A minimal footer with thin dividers and copyright text keeps the page grounded.

[Color and materials]
1. Palette
   - Deep browns and smoky browns such as #2D2416 and #5D4E37 for background and shelves.
   - Parchment beiges like #F4E8C1 or #F2E3C4 for main content cards.
   - Accent colors in ink green and wine red for small separators, highlights or section titles.
2. Material rendering
   - Background shows wood grain or old walls and shelves, with slightly blurred detail to protect text legibility.
   - Content cards may have subtly worn or irregular edges, suggesting old paper.
   - Wax seals, quill pens or ink bottle icons can appear as tiny decorative motifs.

[Light and shadow]
1. Candlelight glow
   - Simulate one or two warm light sources using soft yellow gradients and blur, focused around content areas.
   - Maintain a strong contrast between illuminated reading zones and darker surroundings.
2. Shadows
   - Cards cast soft but noticeable shadows, making them feel like sheets of paper hovering above the background.
   - Shadow direction should be consistent to imply a single light source.

[Interaction and motion]
1. Hover
   - Links and buttons gently brighten or show a fine underline on hover instead of strong neon glow.
   - Cards may rise 2–3px and brighten slightly when hovered, as if the paper were being touched.
2. Motion
   - Any glow flicker or dust / particle motion should be slow and subtle, reinforcing a quiet reading atmosphere.
3. Accessibility
   - Maintain adequate contrast between text and background so long-form reading remains comfortable.

[Output requirements]
- Use semantic HTML (article / header / main / aside, etc.) to organize content.
- Use Tailwind-style utility classes to control spacing, typography and alignment.
- The generated UI must preserve the key traits “dark wood environment + parchment cards + warm candlelight + academic mood” so it is clearly a Dark Academia variant at first glance.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名热爱古籍与人文研究的设计师，需要向产品团队解释 Dark Academia 暗黑学院家族的界面氛围。

场景定位：这种风格适用于文学 / 研究型个人博客、学术平台的长文阅读页、图书馆 / 书店专题页以及写作工具的沉浸式阅读模式，让用户感觉自己坐在旧书房里写作或做笔记。

视觉设计理念：画面以深棕木纹或书架为背景，中央悬浮一到两块羊皮纸质感的内容卡片，用于承载标题与正文。整体布局偏传统书页，而非现代栅格化卡片列表，顶部可以有低调的导航或书封式标题，下方是连续的正文与少量分栏信息。

材质与质感：背景展示深色木材、旧墙或满架书脊的层次，细节略微模糊以保护文字可读性；内容卡片呈现温暖的米黄色纸张，边缘可有轻微磨损与色差。局部点缀蜡封、羽毛笔、墨水瓶或手写页角等元素，强化「书写现场」感。

交互体验：交互反馈应极其克制，链接与按钮在悬停时只做轻微提亮或出现细线下划线，卡片 hover 时可以轻微抬升并加深阴影，仿佛纸张被指尖托起。若有光晕闪烁或粒子飘动，频率应很低，让用户可以静下心来长时间阅读。

整体氛围：Dark Academia 家族围绕「安静、自省、偏古典的人文氛围」展开，让界面像一间被书与灯光包围的私人书房。用户一眼看到的不是科技感，而是一种适合阅读、思考和写作的庄重环境。`,
  'en-US': `Role: You are a designer who loves old books and humanistic studies, and you need to explain the Dark Academia family to the product team.

Scene: This style works well for literary or research blogs, long-form reading views on academic platforms, special pages for libraries or bookstores and focused writing modes. It should feel like sitting alone in a study, surrounded by shelves and warm lamps.

Visual philosophy: The composition uses a dark wood or bookshelf background with one or two parchment-like content cards floating in the center. The layout feels closer to a classical book page than a modern card grid. A modest header might resemble a book cover, with continuous body text and occasional side notes below.

Material and texture: Background imagery shows wood grain, old walls or rows of book spines with slightly blurred detail. Content cards have warm beige tones, with subtle wear and variation at the edges. Wax seals, quill pens, ink bottles or scribbled annotations may appear as small decorative cues to the act of reading and writing.

Interaction experience: Interactions are soft and understated. Links and buttons only brighten slightly or gain a fine underline on hover; cards may lift a few pixels and deepen their shadows as if picked up from the table. Any glow flickers or dust particles should move slowly so users can comfortably read for long stretches.

Overall mood: The Dark Academia family centers on a quiet, introspective and somewhat classical academic mood. Instead of technology or speed, it foregrounds books, thought and time, making the interface feel like a private study turned into a UI.`}

// Template list (templates that users can browse)
export const darkAcademiaTemplates = [
  darkAcademiaLibrary
]

export default darkAcademiaTemplates
