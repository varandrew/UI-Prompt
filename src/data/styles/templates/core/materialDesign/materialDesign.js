import {
  materialDesignFullPageHTML,
  materialDesignFullPageStyles,
} from './materialDesignFullPage'

export const materialDesign = {
  id: 'core-material-design',
  title: 'styles.core.material-design.title',
  description: 'styles.core.material-design.description',

  // ✨ AI Prompt（用于生成与當前 Material Design Landing 页面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Material Design Landing」界面风格高度接近的 Material Design 風格首页。
要求：保持紙片隱喻、Elevation 阴影层級、主色 / 次色体系和 FAB 浮動按鈕的布局不变，只允許替換文案与圖示。輸出使用語義化 HTML 和 TailwindCSS 風格原子类。

【使用場景】
- 場景：現代應用 / SaaS 产品的宣傳 Landing 页。
- 用戶：首次接觸产品的访客，希望快速理解产品價值与規模感。
- 目标：用 Material Design 規範下的卡片 / FAB / 色彩系統建立清晰、可信的产品印象。

【整体佈局結構】
1. 頂部 App Bar
   - 含品牌 LOGO / 名稱 + 导航按鈕（如 Features / Pricing / Docs）。
   - 采用 Surface 颜色（白色）和中等 Elevation 阴影，表明其位於內容上方。
2. Hero 区域
   - 左側：主标題、副标題和主操作按鈕（使用 primary 色、具 2dp–4dp 阴影）。
   - 右側：示意卡片群組或圖示，展示 app 主要画面或信息結構，同樣使用 Card 樣式。
3. 功能卡片区
   - 使用 3–4 個 Material Card，展示功能或优勢。
   - 每張卡片使用 4dp 阴影、白色背景、4px 圓角。
4. 浮動操作按鈕（FAB）
   - 在右下角固定一個圓形 FAB，使用主色填充，具 16dp 阴影。
   - FAB 代表最重要的全局操作，例如「联絡銷售 / 開始使用」。

【色彩系統】
1. Primary / Secondary / Accent
   - Primary：紫 / 藍系，如 #6200ee，應用於 AppBar 中部分元素、主按鈕、FAB。
   - Secondary：青色，如 #03dac6，用於次要操作或标籤。
   - Accent：如 #ff0266，用於強調警示 / 特殊焦點。
2. Surface / Background
   - 卡片与 AppBar 使用白色 surface，背景可用 #fafafa 淺灰。
   - 文本颜色遵循 Material 規範：主文本使用 rgba(0,0,0,0.87)，次文本 rgba(0,0,0,0.6)。

【Elevation 阴影規則】
1. 卡片（Card）
   - 默認使用 4dp 阴影；hover 時可提升至 8dp。
2. FAB
   - 默認 16dp，hover 或焦點時提升至 24dp。
3. 對話框 / 菜單（若存在）
   - 使用更高层級（8dp–16dp），明確表達浮层关係。

【觸摸涟漪与交互】
1. Ripple 效果
   - 按鈕、卡片可點擊区域需具有波紋效果，从觸點向外擴散，持續 300–600ms。
2. Hover 与 Active
   - Hover：背景颜色略微变亮或变深，阴影略提升。
   - Active：颜色加深、波紋完成後返回正常狀態。

【輸出要求】
- 使用 header/nav/main/section/footer 語義化标籤。
- 使用 Tailwind 原子类實現 grid/flex 排版及阴影（可用自定義 class 映射 Elevation）。
- 生成的 UI 必須保留「紙片隱喻 + Elevation 阴影 + Primary/Secondary/Accent 色板 + FAB」這些 Material Design 核心特徵，让人一眼看出是典型 Material Landing。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a Material Design landing page that looks very close to the current “Material Design Landing” demo.
Keep the paper metaphor, elevation hierarchy, primary/secondary/accent color system and floating action button layout essentially unchanged. You may replace copy and icons, but not the core structure or Material Design visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: marketing or product landing page for a modern web or SaaS application.
- Users: first-time visitors who need to quickly understand what the product does and whether it looks trustworthy.
- Goal: use canonical Material Design patterns (app bar, cards, FAB, clear elevation levels) to communicate clarity, quality and depth.

[Layout]
1. Top app bar with brand logo/name and a few navigation links (for example Features, Pricing, Docs) on a white or surface-colored bar with medium elevation.
2. Hero area with a left column containing main title, subtitle and primary call-to-action button (using the primary color), and a right column showing an arrangement of Material cards or an interface mockup.
3. Feature card section with 3–4 Material cards that each include an icon, title and short description; cards use 4dp elevation and 4px corner radius.
4. Optional supporting sections (for example customer quotes or secondary actions) that still rely on card-based layout and Material typography.
5. Floating action button in the bottom-right corner as the primary global action, using the primary color and the highest elevation.

[Visual style]
1. Follow Material color roles: primary color for main actions and brand elements, secondary/accent color for highlights, white surfaces for cards and dialogs and light grey background behind content.
2. Use multi-level elevation shadows to separate layers: lower elevations for cards, higher ones for FAB, menus and dialogs; hover states may increase elevation slightly.
3. Typography uses a clean sans-serif Material type scale: clear hierarchy between headings, subtitles and body copy.

[Interaction]
1. All tappable cards and buttons include a ripple effect that expands from the touch point and fades out over 300–600ms.
2. Hover states slightly adjust background color and increase shadow strength rather than introducing large movement.
3. Active states darken the color and complete the ripple before returning to normal.

[Output requirements]
- Use header, nav, main, section and footer semantic tags to structure the page.
- Use Tailwind-style utility classes (or equivalent) to express grid/flex layout, spacing and elevation-like shadows.
- The generated UI must preserve the key Material traits of the current demo: paper metaphor with stacked cards, clear elevation levels, a primary/secondary/accent palette and a prominent floating action button.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于 Material Design 的 UI 设计师，深刻理解 Google 的设计语言和纸片隐喻哲学。

场景定位：
为现代应用程序打造符合 Material Design 规范的界面，通过纸片隐喻、层级阴影和触摸反馈创造直观的用户体验。目标用户为追求现代化、高效率的应用使用者，需要在视觉上体现清晰的层次结构和即时的交互反馈。界面要求遵循 Google 的设计规范，让用户能够理解元素的空间关系和可操作性。这是一个强调物理隐喻和有意义动效的设计系统，需要在数字界面中模拟真实世界的纸张叠放规则。

视觉设计理念：
采用纸片隐喻的设计语言，将界面元素想象为不同高度的纸张层叠在一起。设计强调通过阴影深度来表达元素的重要性和层级关系，Z轴高度越高的元素拥有越深的阴影。整体风格追求大胆鲜明的色彩表达，使用高饱和度的主色调建立品牌识别，同时保持清晰的信息层次。界面运用三级色彩系统，包含主色、次要色和强调色，营造出现代、活力、专业的视觉氛围。所有交互都强调有意义的动效，让用户理解操作的因果关系。

材质与质感：
所有元素都模拟真实世界中的纸张材质，具有明确的边界和厚度感。卡片元素呈现为白色的纸片，通过多层阴影系统营造出悬浮在背景之上的立体感。阴影分为六个标准层级，从最轻微的表面阴影到最深重的对话框阴影，每个层级都有精确的扩散半径和透明度。浮动操作按钮采用圆形设计，具有最高层级的阴影，如同漂浮在界面最上方的纸片。按钮表面使用大胆的纯色填充，鼠标悬停时会产生细微的阴影加深，点击时从触点向外扩散圆形涟漪波纹，模拟水波纹效果。导航栏和工具栏通常具有中等层级的阴影，表明它们位于内容之上。整体色彩使用高对比度的鲜明色调，主色调为饱和度较高的紫色或蓝色，次要色为青色，配以功能性的红色、绿色、橙色。

交互体验：
所有交互都强调即时的视觉反馈和有意义的动效。按钮点击时产生涟漪动画，从触摸点向外扩散的圆形波纹，持续时间约三百至六百毫秒，颜色为半透明的主色调。卡片悬停时阴影会轻微加深，从浅层级过渡到深层级，暗示元素可以被操作。浮动操作按钮始终保持最高的阴影层级，吸引用户注意力到主要操作上。页面切换使用共享元素过渡，相同元素在不同页面间平滑移动和变形。对话框和底部动作表从屏幕边缘滑入，伴随阴影的逐渐加深。所有动画都使用标准的缓动曲线，快速进入、缓慢退出，营造自然流畅的运动感。文本输入框在获得焦点时下划线会扩展并改变颜色，提供明确的状态反馈。

氛围营造：
界面营造出现代科技应用的专业氛围，充满活力而不失严谨。大胆的主色调占据导航栏、主要按钮等关键位置，建立强烈的品牌识别度。白色卡片承载主要内容，通过阴影层级清晰表达信息架构。浮动操作按钮使用鲜艳的强调色，圆形设计配以最深的阴影，强力引导用户完成核心操作。文字使用深灰色而非纯黑，减少视觉疲劳，同时保持足够的对比度。次要文字使用更浅的灰色，建立清晰的文字层次。功能色遵循通用语义，错误用红色、成功用绿色、警告用橙色、信息用蓝色。图标使用简洁的几何形状，统一的视觉风格。响应式网格系统确保内容在不同屏幕尺寸上都保持良好的对齐和间距。整体设计遵循八像素网格系统，所有尺寸和间距都是八的倍数，确保视觉的一致性和规范性。`,

    'en-US': `Role: You are a UI designer specializing in Material Design, deeply understanding Google's design language and paper metaphor philosophy.

Scenario Positioning:
Create interfaces conforming to Material Design specifications for modern applications, creating intuitive user experiences through paper metaphor, elevation shadows, and touch feedback. Target users are those seeking modern, efficient application usage who need interfaces that visually reflect clear hierarchical structure and immediate interaction feedback. The interface must follow Google's design specifications, allowing users to understand spatial relationships and operability of elements. This is a design system emphasizing physical metaphor and meaningful motion, needing to simulate real-world paper stacking rules in digital interfaces.

Visual Design Philosophy:
Adopt paper metaphor design language, imagining interface elements as paper sheets stacked at different heights. Design emphasizes using shadow depth to express element importance and hierarchical relationships, with higher Z-axis elements having deeper shadows. The overall style pursues bold vivid color expression, using high-saturation primary colors to establish brand identity while maintaining clear information hierarchy. The interface employs a three-tier color system including primary, secondary, and accent colors, creating modern, vital, professional visual atmosphere. All interactions emphasize meaningful motion, helping users understand cause-effect relationships of operations.

Materials & Textures:
All elements simulate real-world paper materials with clear boundaries and thickness perception. Card elements present as white paper sheets, creating floating three-dimensional feel above background through multi-layer shadow systems. Shadows are divided into six standard elevations, from lightest surface shadows to deepest dialog shadows, each level having precise diffusion radius and transparency. Floating action buttons adopt circular design with highest elevation shadows, like paper floating at topmost interface layer. Button surfaces use bold solid color fills, showing subtle shadow deepening on mouse hover, expanding circular ripple waves from touch point on click, simulating water ripple effects. Navigation bars and toolbars typically have medium elevation shadows, indicating their position above content. Overall colors use high-contrast vivid tones, primary colors being highly saturated purple or blue, secondary colors cyan, with functional red, green, orange.

Interaction Experience:
All interactions emphasize immediate visual feedback and meaningful motion. Button clicks produce ripple animations, circular waves expanding outward from touch points, lasting about three hundred to six hundred milliseconds, with semi-transparent primary color. Cards show slightly deepened shadows on hover, transitioning from shallow to deep elevations, hinting elements can be operated. Floating action buttons always maintain highest shadow elevation, attracting user attention to primary actions. Page transitions use shared element transitions, same elements smoothly moving and transforming between different pages. Dialogs and bottom sheets slide in from screen edges, accompanied by gradually deepening shadows. All animations use standard easing curves, fast entry and slow exit, creating natural fluid motion feel. Text input boxes show expanding and color-changing underlines when focused, providing clear state feedback.

Atmosphere Creation:
The interface creates the professional atmosphere of modern tech applications, full of vitality without losing rigor. Bold primary colors occupy key positions like navigation bars and primary buttons, establishing strong brand identity. White cards carry main content, clearly expressing information architecture through shadow elevations. Floating action buttons use vivid accent colors, circular design with deepest shadows, strongly guiding users to complete core operations. Text uses dark gray rather than pure black, reducing visual fatigue while maintaining sufficient contrast. Secondary text uses lighter gray, establishing clear text hierarchy. Functional colors follow universal semantics: errors in red, success in green, warnings in orange, information in blue. Icons use simple geometric shapes with unified visual style. Responsive grid systems ensure content maintains good alignment and spacing across different screen sizes. Overall design follows eight-pixel grid system, all sizes and spacing being multiples of eight, ensuring visual consistency and standardization.`
  },

  fullPageHTML: materialDesignFullPageHTML,
  fullPageStyles: materialDesignFullPageStyles,
}
