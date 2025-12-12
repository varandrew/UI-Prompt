// Frutiger Aero Family Aggregator
// Frutiger Aero 家族聚合器

import { frutigerAeroOS } from './frutigerAeroOS'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.frutigerAero.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.frutigerAero.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Frutiger Aero」核心样式卡展示界面风格高度接近的 Y2K 玻璃质感 UI。
要求：保持天空蓝渐变背景、半透明玻璃卡片、水滴气泡和流线圆角这些核心特征，只允许替换文案、图标与具体模块内容，不改变整体「清爽、梦幻、略带复古操作系统感」的视觉语言。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 具有 2000 年代气质的产品官网、工具仪表盘首页
- 怀旧 Windows Vista / 早期 Aero 主题的登陆界面
- 创意软件、效率工具、云服务的轻量信息面板

【整体布局结构】
1. 背景层
   - 使用大面积天空蓝 / 青蓝渐变背景，自上而下或对角线方向过渡。
   - 可以在远处加入柔和云朵、光晕或模糊景深元素，营造「在空中漂浮」的感觉。
2. 主玻璃卡片
   - 中央或略偏中的位置放置一块半透明玻璃卡片，用于承载标题、副标题和主要操作按钮。
   - 圆角较大（例如 20–32px），内边距充足，保持轻盈通透。
3. 装饰层
   - 周围散布 3–6 个大小不同的玻璃气泡 / 水滴，位置不必完全规则但需围绕主体区域。
   - 可加一条或几条弯曲的高光线条，暗示水波或光线流动。

【色彩与材质】
1. 颜色系统
   - 背景：从 #87CEEB（天空蓝）到 #5FB3CC（青蓝）或类似范围的冷色渐变。
   - 卡片：白色半透明背景（例如 rgba(255,255,255,0.3–0.4)），叠加轻微高光与内阴影。
   - 强调色：亮绿色 / 橙色可用作主按钮或状态标签点缀，但面积有限。
2. 材质表现
   - 玻璃态元素使用 blur、透明度与高光边界模拟折射感。
   - 气泡内部使用 radial-gradient 做出中心亮、边缘渐暗的水滴质感。

【光影与空间】
1. 所有前景元素（卡片、按钮、图标）在背景上有轻微投影，营造浮起的层次。
2. 可在整体增加非常轻的噪点纹理，让画面不至于过于塑料感。
3. 背景亮度自上而下略有变化，提高空间深度感。

【交互与动效】
1. Hover
   - 按钮在悬停时略微提亮并增加轻微阴影，不改变整体形状。
   - 气泡在悬停时可轻微放大 1.05 倍并提高亮度，像被光线照到。
2. 动效
   - 可为部分气泡添加缓慢上下漂浮或轻微缩放动画（周期 3–6 秒）。
   - 卡片出现时可以从轻微缩放 + 淡入的方式进入视图。

【输出要求】
- 使用语义化 HTML（main / section / header 等）组织内容结构。
- 使用 TailwindCSS 风格原子类实现布局（flex / grid）、间距与对齐。
- 生成结果必须保留「天空蓝渐变背景 + 半透明玻璃卡片 + 浮动气泡 + 大圆角」这些关键特征，让人一眼看出属于 Frutiger Aero / Y2K 玻璃风格。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Frutiger Aero style interface that looks very close to the current “Frutiger Aero” core style card demo.
Keep the sky-blue gradient background, translucent glass card, floating water bubbles and large rounded corners as the main traits. You may change text, icons and module content, but you should not change the overall “fresh, dreamy, slightly nostalgic OS” visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Product marketing or dashboard home screens with a 2000s Aero feeling
- Nostalgic Windows Vista / early Aero themed landing experiences
- Creative tools, productivity apps or cloud services with light, uplifting visuals

[Layout structure]
1. Background layer
   - Use a large sky-blue to cyan gradient, either vertical or diagonal.
   - Optionally add soft clouds, halos or distant blurred shapes to suggest aerial depth.
2. Main glass card
   - Place a semi-transparent glass card in the center or slightly off-center to hold heading, subheading and main action button.
   - Use generous border-radius (around 20–32px) and internal padding so the card feels light and airy.
3. Decoration layer
   - Scatter a handful of glass bubbles / droplets around the main card, with varying sizes.
   - One or two curved light streaks can hint at flowing water or moving light.

[Color and materials]
1. Palette
   - Background: gradients around #87CEEB (sky blue) to #5FB3CC (cyan), or similar cool hues.
   - Card: white translucent surface (for example rgba(255,255,255,0.3–0.4)) with subtle highlights and inner shadows.
   - Accent: bright green or orange for primary buttons or status chips, used sparingly.
2. Material rendering
   - Glass elements combine blur, transparency and edge highlights to mimic refraction.
   - Bubbles use radial gradients with bright centers and darker rims to feel like liquid droplets.

[Light, depth and space]
1. Foreground elements (cards, buttons, icons) cast soft shadows on the gradient background.
2. Add a very light noise texture overall if needed so the scene does not look overly plastic.
3. Let the gradient brightness vary slightly from top to bottom to reinforce depth.

[Interaction and motion]
1. Hover
   - Buttons brighten a bit and gain a slight shadow on hover rather than changing shape.
   - Bubbles may scale up to about 1.05x and brighten slightly when hovered, as if catching more light.
2. Motion
   - Some bubbles can float gently up and down or pulse in size over 3–6 second cycles.
   - The main card can fade and scale in when entering the viewport.

[Output requirements]
- Use semantic HTML (main / section / header, etc.) for structure.
- Use Tailwind-style utility classes for layout, spacing and alignment.
- The generated UI must preserve “sky gradient + translucent glass card + floating bubbles + big rounded corners” so it is clearly a Frutiger Aero / Y2K glass variant at first glance.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名对 Y2K 与 Vista Aero 时代界面记忆深刻的设计师，需要说明 Frutiger Aero 家族在视觉上应呈现怎样的「轻盈玻璃感」。

场景定位：这种风格适合云服务 / 工具类产品首页、轻量型仪表盘、创意软件登陆页以及带有 2000 年代气质的品牌宣传页面，让用户觉得既熟悉又略带梦幻。

视觉设计理念：画面以大面积天空蓝 / 青蓝渐变为背景，中央一块或少量半透明玻璃卡片承载主要信息，周围散布大小不一的水滴气泡和光斑。布局强调清晰的层级与大圆角模块，避免过度栅格化切割，让内容像漂浮在空气中的信息面板。

材质与质感：背景渐变柔和、干净，前景玻璃卡片使用高透明度白色叠加内外阴影，营造厚度与折射感；气泡内部可见冷暖变化与高光边缘。整体质感介于系统 UI 与插画之间，既有 OS 窗口的秩序，也有广告图般的光泽。

交互体验：按钮与卡片在悬停时会轻微提亮、增加阴影，并可能出现细微缩放，好像玻璃面板向用户靠近；动效以缓慢漂浮、淡入和轻度缩放为主，节奏平稳，避免跳跃和晃动破坏清爽感。

整体氛围：Frutiger Aero 家族给人「清新、乐观、略带复古科技感」的印象，像晴天里的系统欢迎界面。用户一眼看去，会联想到蓝天、玻璃、水滴和精致但不压迫的信息层。`,
  'en-US': `Role: You are a designer who remembers the Y2K and Vista Aero era vividly, and you need to describe how the Frutiger Aero family should look and feel.

Scene: This style fits cloud services, tools, dashboards, creative software home screens and brand pages that want a light, optimistic Y2K flavor. It should feel familiar yet slightly dreamy.

Visual philosophy: The composition starts with a large sky-blue to cyan gradient background and one or more translucent glass cards in the foreground for key information. Around them, floating bubbles and soft highlights create a sense of depth and air. Layout focuses on clear hierarchy and generous rounded rectangles, avoiding overly chopped grids so the UI feels like floating panels.

Material and texture: Background gradients are smooth and clean; glass cards use semi-transparent whites with subtle inner and outer shadows to suggest thickness and refraction. Bubbles show cool-to-warm shifts and bright rims. The texture sits between OS chrome and illustration—part utility window, part glossy ad.

Interaction experience: On hover, buttons and cards gently brighten, gain slightly stronger shadows and may scale up a bit, as if the glass surface moves closer. Motion is based on slow floating, fades and light scaling rather than jumps or shakes, keeping the overall feeling calm and airy.

Overall mood: The Frutiger Aero family feels fresh, optimistic and techy in a nostalgic way—like a sunny system welcome screen. At a glance, users should think of open sky, glass and water droplets, with information presented in a soft but orderly manner.`}

// Template list (templates that users can browse)
export const frutigerAeroTemplates = [
  frutigerAeroOS
]

export default frutigerAeroTemplates
