// Art Deco Family Aggregator
// 装饰艺术家族聚合器

import { artDecoLuxury } from './artDecoLuxury'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.artDeco.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.artDeco.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Art Deco 装饰艺术」核心样式卡展示界面风格高度接近的 UI。
要求：保持几何金色边框、放射状太阳徽章、宝石菱形装饰这些核心构图不变，只允许替换文案、品牌名称和具体模块内容。输出使用语义化 HTML 结构和 TailwindCSS 风格的原子类（或等价工具类方案）。

【使用场景】
- 高端品牌首页、奢侈品 Landing 页、复古剧院 / 酒吧宣传页面
- 艺术画廊、电梯广告屏、活动海报式着陆页
- 需要传达 1920 年代「黄金时代」奢华与秩序感的界面

【整体布局结构】
1. 中央海报式主框架
   - 居中竖版构图，类似一张装裱海报，外层为粗金色几何边框。
   - 内部居中放置品牌标志、主标题和简短标语，保持强对称轴线。
2. 几何装饰分区
   - 顶部或中部使用放射状太阳 / 旭日图案作为视觉焦点。
   - 下方或两侧使用菱形宝石、阶梯状线条、扇形花纹作为辅助装饰。
3. 信息区块
   - 可在下半部分加入 2–3 行简短说明文字或按钮区域，但必须服从几何构图秩序。

【色彩与材质】
1. 主色系统
   - 金色渐变：#D4AF37 ~ #F9F295 用于边框、高光和徽章。
   - 深色背景：#0B1120 / #111827 等深蓝黑，突出金属光泽。
   - 辅助宝石色：深蓝（#357ABD）、墨绿（#14532D）作为小面积点缀。
2. 材质质感
   - 金属边框使用高对比渐变和内外描边，营造镀金框架感。
   - 宝石元素采用多面体高光与阴影，突出折射感。
   - 背景保持相对哑光，避免与金属高光抢夺注意力。

【装饰与几何细节】
1. 使用扇形、阶梯形、放射状线条，构建对称或轴对称的几何框架。
2. 所有线条应垂直 / 水平 / 斜 45° 为主，体现机械化与理性秩序。
3. 保持装饰密度适中：中心信息区域留白，装饰集中在边框和角落。

【交互与动效】
1. Hover 效果
   - 金属边框在悬停时轻微提亮或增加光晕，而不是大幅变色。
   - 宝石装饰可做细微闪烁或呼吸高光，节奏缓慢（2–3 秒）。
2. 点击反馈
   - 若有按钮，以边框 / 文本颜色变化为主，不添加粗重阴影。
3. 动效节奏
   - 动画应克制而优雅，避免夸张弹跳，整体节奏 200–400ms。

【输出要求】
- 使用语义化 HTML（main / section / header / footer 等）组织内容。
- 使用 TailwindCSS 风格原子类描述布局（flex / grid）、对齐和间距。
- 生成结果必须保留「深色背景 + 金色几何框架 + 中央对称海报构图」这一核心视觉特征，让人一眼看出属于 Art Deco 奢华风格变体。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate an Art Deco luxury style interface that looks very close to the current “Art Deco” core style card demo.
Keep the geometric gold frame, radiating sun emblem and diamond-shaped gem ornaments as the main composition. You may change copy, brand name and secondary details, but you should not change the overall poster-like layout or color philosophy. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- High-end brand homepages, luxury landing pages, vintage theatre or bar promo pages
- Art gallery or exhibition hero sections, poster-like campaign pages
- Interfaces that need to evoke 1920s “Golden Age” luxury and order

[Layout structure]
1. Centered poster frame
   - A vertical poster composition centered on the page, with a thick golden geometric border around the main content.
   - Inside, place brand mark, main title and short tagline on a strong central axis.
2. Geometric decoration zones
   - Use a radiating sun or fan emblem at the top or center as the main focal point.
   - Place diamond gems, stepped lines and fan motifs around the lower edge or corners as secondary ornaments.
3. Information area
   - Use the lower part of the frame for one or two short text lines and optionally a button row; content must still respect the geometric grid and alignment.

[Color and materials]
1. Palette
   - Gold gradients (#D4AF37 ~ #F9F295) for borders, highlights and emblem.
   - Deep navy / near-black background (#0B1120, #111827) to push metallic shine forward.
   - Gem accents in deep blue (#357ABD) and dark green (#14532D) used sparingly.
2. Material feel
   - Borders use high contrast gradients, inner / outer strokes and slight glow to mimic gilded metal.
   - Gem elements use multi-facet highlights and shadows to suggest refraction.
   - Background remains relatively matte to avoid competing with metallic highlights.

[Decorative geometry]
1. Rely on fan shapes, stepped structures and radiating lines to build symmetric or axis-symmetric frames.
2. Lines should mostly be vertical, horizontal or 45° diagonals to express mechanical precision and order.
3. Keep decoration density moderate: the central content area stays readable, ornamentation lives mainly on the frame and corners.

[Interaction and motion]
1. Hover
   - On hover, slightly increase border brightness or add a soft outer glow instead of big color changes.
   - Gem ornaments may have a slow sparkle or breathing highlight (2–3 second cycle).
2. Active
   - If buttons are present, use border or text color change as feedback, not heavy drop shadows.
3. Timing
   - Animations should feel elegant and restrained; typical durations 200–400ms with ease-out curves.

[Output requirements]
- Use semantic HTML (main / section / header / footer) to structure the layout.
- Use Tailwind-style utility classes for layout, alignment and spacing.
- The generated UI must preserve the core traits “dark backdrop + gold geometric frame + centered symmetric poster composition” so it is clearly an Art Deco luxury variant at first glance.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名偏爱 1920 年代「黄金时代」美学的品牌设计师，需要向团队解释什么是 Art Deco 装饰艺术风的网页界面。

场景定位：这种风格适合高端品牌官网、复古剧院或酒吧宣传页、艺术展览海报式落地页，用来传达精致、奢华又高度秩序感的视觉印象。

视觉设计理念：画面以强对称的海报构图为主轴，粗金色几何边框像画框一样包裹内容，顶部或中央常出现放射状太阳徽章，角落与分区用菱形宝石、阶梯线条和扇形装饰填充。所有元素都服从几何与网格，不追求手写式随意，而是机械化、理性的装饰秩序。

材质与质感：背景多为深蓝黑或近黑的暗色大面，前景的金属边框和徽章使用高对比渐变与内外描边，呈现厚重的镀金感；小面积宝石色点缀加深「贵重」印象。整体看起来像一张被精心装裱的海报或电梯广告牌。

交互体验：按钮与卡片的交互节奏偏慢且克制，悬停时主要通过微弱提亮、略微加强高光和阴影来表达「被注意到」，避免夸张弹跳或大幅位移。动效更像灯光变化与金属反光，而不是强烈的 UI 动画。

整体氛围：Art Deco 家族强调庄重、精英感与舞台化仪式感，让界面像一场静止的高级舞台布景——用户一眼就能感受到奢华、秩序与复古摩登的并存。`,
  'en-US': `Role: You are a brand designer who loves 1920s “Golden Age” aesthetics and need to explain what an Art Deco style interface should feel like.

Scene: This family suits high-end brand sites, vintage theatre or bar promos and exhibition-like landing pages where the layout should read more like a poster than a generic web template.

Visual philosophy: The composition is axial and poster-driven. Thick golden geometric frames wrap the content, with radiating sun emblems, diamond gems, stepped lines and fan shapes forming decorative zones. Everything follows a strict geometric grid; it values mechanical order over freehand looseness.

Material and texture: Dark navy or near-black backgrounds push metallic ornaments to the foreground. Borders and crests use bold gradients and strokes so they read as gilded metal, while small jewel tones act as accents. The page should look like a framed print or elevator poster in an upscale building.

Interaction experience: Buttons and cards react in a restrained way—slight brightening, subtle shadow and highlight shifts—rather than dramatic bounces or large movements. Motion feels like changes in light on metal surfaces, not playful cartoonish animation.

Overall mood: The Art Deco family communicates prestige, ceremony and a staged sense of luxury. At a glance, the interface should feel opulent, orderly and retro-modern, as if it belongs to a glamorous 1920s nightlife scene.`}

// Template list (templates that users can browse)
export const artDecoTemplates = [
  artDecoLuxury
]

export default artDecoTemplates
