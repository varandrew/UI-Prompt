// Flat Design (merged from Material Design Landing + Creative Portfolio template)
import {
  flatDesignFullPageHTML,
  flatDesignFullPageStyles,
} from './flatDesignCreativePortfolioFullPage'

export const flatDesignCreativePortfolio = {
  id: 'core-flat-design',
  title: 'styles.core.flat-design.preview.creativePortfolio',
  description: 'styles.core.flat-design.preview.creativePortfolioDesc',

  // ✨ AI Prompt（用于生成与當前 Flat 創意作品集页面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Flat 创意作品集 Landing」界面风格高度接近的扁平化（Flat Design）作品集首页。
要求：保持整体布局结构、纯色块配色和几何元素风格不变，只允许替换文案、项目卡片内容和图标。输出使用语义化 HTML 结构和 TailwindCSS 风格的原子类（或等价的工具类方案）。

【使用场景】
- 场景：创意设计师 / 前端工程师 / 插画师个人作品集首页。
- 用户：潜在客户、招聘方、同行设计师。
- 目标：通过扁平化设计突出作品缩略图和标题，强调「内容本身」，让人一眼看出是現代、鮮明的 Flat Design 作品集。

【整体布局结构】
1. 顶部导航
   - 左侧：LOGO 或名字文字（全大写 / 中等字重）。
   - 右侧：简单导航（Work / About / Contact），使用純文字鏈接。
2. Hero 区域
   - 左側：大标題（例如「Creative Flat Portfolio」）+ 短副标 + 主行動按鈕（View Work）。
   - 右側：一個幾何插画或简化 UI 示意圖，由純色矩形 / 圓形組成。
3. 作品网格区
   - 使用 2–3 列作品卡片网格，每個卡片包含：
     - 彩色卡片背景（純色）；
     - 作品名稱 / 类型标籤；
     - 可選的「View Case Study」按鈕或箭頭圖标。
4. 底部区域（可選）
   - 简單的联絡方式、版權信息或少量社交圖标，仍然維持扁平化幾何風格。

【色彩与形狀】
1. 颜色系统
   - 以幾個主純色為核心：亮藍、亮橙、亮綠、亮紫等（無漸变、無紋理）。
   - 背景可用大面積淺灰 / 淺色純色，作品卡片使用高飽和度純色。
   - 文本颜色：深灰 / 深藍（#1f2933 类型），確保高可讀性。
2. 幾何元素
   - 以矩形 / 正方形 / 圓形為基礎形狀。
   - 卡片与圖示均使用統一圓角，例如 8px。

【扁平化设計規則】
1. 禁用阴影与漸变
   - 不使用 box-shadow、text-shadow 或 background-gradient。
2. 层級由颜色与尺寸建立
   - 用更深 / 更亮的純色和更大的字重來表示重要性，而不是阴影深度。
3. 留白作為分隔
   - 使用 margin / padding 控制間距，避免用边框和阴影堆疊。

【交互与動效】
1. Hover 效果
   - 按鈕与卡片 hover 仅改变背景純色深度或文字颜色（例如从 #3498db → #2980b9），不产生位移 / 阴影。
2. Active 狀態
   - 按鈕按下時颜色再深一級即可，不需要縮放或阴影動画。
3. 過渡節奏
   - 所有颜色相关過渡可使用 150–200ms 的 ease-out，保持乾脆俐落。

【輸出要求】
- 使用語義化 HTML：header/nav/main/section/footer 明確分区。
- 使用 Tailwind 式原子类實現布局（grid/flex/gap/px/py 等）。
- 生成的界面在「純色彩塊 + 幾何卡片 + 無阴影無漸变 + 大量留白」這幾點上，必須与當前 Flat 作品集界面高度接近。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a Flat creative portfolio landing page that looks very close to the current “Flat Creative Portfolio Landing” demo.
Keep the overall page structure, color blocking and geometric flat style almost identical to the demo: top navigation, hero section with left text and right abstract illustration, project grid cards and a simple footer. You may change copy, project names and icons, but not the overall layout or visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: personal portfolio homepage for designers, front-end engineers or illustrators.
- Users: potential clients, hiring managers and peer designers.
- Goal: highlight work thumbnails and titles through bold flat color blocks so that the page immediately reads as a modern Flat Design portfolio.

[Layout]
1. Top navigation bar with logo text on the left and 3–4 simple text links (for example Work, About, Contact) on the right; optionally one primary call-to-action button.
2. Hero section split into two columns: left column with large heading, short subtitle and a primary “View work” style button; right column with an abstract illustration composed of solid rectangles and circles rather than realistic photos.
3. Projects grid area with 2–3 columns of project cards; each card uses a flat solid background, project title, one–two lines of description and an optional secondary action such as a small “View case” link or arrow icon.
4. Optional bottom area with contact information, copyright line and a few social icons, all rendered with the same flat geometric style.

[Visual style]
1. Use only solid colors: no shadows, gradients or textures anywhere; borders are thin and simple when needed.
2. Choose a small palette of 2–4 vivid accent colors (blue, orange, green, purple) on top of a very light neutral background so that cards and buttons stand out clearly.
3. Typography is clean and sans-serif; headings are bold with slightly tighter letter-spacing, body text is around 16–18px with comfortable line-height for reading.
4. Spacing and alignment create rhythm: generous padding around the hero, consistent gaps between cards and a clearly defined content width to keep lines from becoming too long.

[Interaction]
1. Hover states on buttons and cards only adjust background or text color slightly (for example a slightly darker shade of the same solid color); do not add shadows or movement.
2. Active states simply darken the color one more step; avoid scale or bounce animations to preserve the crisp flat feel.
3. Transitions are short (about 150–200ms) with simple ease-out curves so interactions feel quick and responsive.

[Output requirements]
- Use semantic HTML sections such as header, nav, main, section and footer.
- Use TailwindCSS-style utility classes to describe layout (flex, grid, gap), spacing, typography and colors.
- The generated page should preserve the recognisable characteristics of the current Flat creative portfolio UI: solid color blocks, flat cards without depth, strong color contrast and abundant whitespace.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于扁平化设计的 UI 设计师，擅长运用纯色和简洁几何创造现代、清爽的作品集界面。

场景定位：
为创意工作者打造个人作品集网站，通过扁平化设计强调作品内容本身，而非过度的装饰。目标用户包括潜在客户、招聘方和同行设计师，需要在视觉上展现设计师的专业性、创意思维和审美品味。界面要求简洁直接，让作品成为绝对焦点，同时通过大胆的色彩运用和清晰的信息层次，展现设计师对视觉语言的精准把控能力。这是一个展示创意能力的数字名片，需要在第一时间传达设计师的风格偏好和专业水准。

视觉设计理念：
摒弃一切多余的视觉装饰，回归到最纯粹的图形和色彩语言。设计强调平面性和直接性，通过纯色块面的组合和几何形状的排列来建立视觉秩序。完全拒绝使用阴影、渐变等模拟立体感的技法，转而依靠颜色对比、尺寸差异和留白来创造清晰的视觉层次。整体风格追求清爽、现代、易于理解的视觉表达，让用户能够快速获取信息并专注于内容本身。界面运用鲜明纯色为主的配色系统，包含大胆的主色调和克制的辅助色，营造出活力、专业、现代的视觉氛围。

材质与质感：
所有元素都呈现为纯粹的平面形态，如同纸张剪贴画般简洁明快。界面没有任何质感模拟，背景是纯净的单一色彩，按钮和卡片都是规整的几何形状配以统一的圆角处理。色彩使用鲜明的纯色，没有任何过渡或混合，每个色块都有明确的边界。卡片元素采用纯白或浅灰背景，搭配细边框或直接使用留白分隔，完全不使用阴影效果。按钮设计为纯色矩形或圆角矩形，表面平滑无光泽，悬停时仅改变颜色深浅。整体视觉如同经过精心设计的平面海报，干净、直接、充满视觉冲击力。所有颜色都选用饱和度较高的纯色，包括鲜明的蓝色、红色、绿色、黄色等，形成强烈的视觉对比。

交互体验：
交互反馈极其简洁，仅通过颜色的改变来提供视觉回应。鼠标悬停时，元素会瞬间切换到另一种纯色，没有过渡动画或阴影变化，保持扁平的视觉状态。点击时，按钮颜色会变得更深，提供明确的点击确认，但不产生任何位移或变形效果。页面切换采用简单的淡入淡出或直接切换，避免复杂的动画效果。滚动交互保持流畅，但不添加视差或其他装饰性动效。整体交互节奏轻快，响应迅速，给人以干脆利落的使用体验。所有交互都遵循即时反馈原则，过渡时间控制在极短范围内，营造直接高效的操作感。

氛围营造：
界面营造出现代创意工作室的清爽氛围，充满活力而不失专业感。大胆的色彩运用传递出设计师的创意自信，鲜明的主色调（如明亮的蓝色）占据导航、主按钮等重要位置，但控制在页面的适当比例内，避免过度刺激。简洁的布局体现出对视觉语言的精确把控，所有元素都精确对齐，间距使用统一的倍数系统，展现出专业的网格规范。整体风格如同当代艺术展览，去除一切繁复装饰，让作品内容成为最好的视觉语言，展现出设计的本质美感。色彩使用遵循有限色板原则，主要使用几种主要颜色加中性色，确保视觉统一性。文字与背景保持高对比度，确保清晰易读。留白运用充足，相关元素靠近、无关元素远离，形成清晰的信息分组。`,

    'en-US': `Role: You are a UI designer specializing in Flat Design, skilled at using solid colors and simple geometry to create modern, fresh portfolio interfaces.

Scenario Positioning:
Create a personal portfolio website for creative professionals, emphasizing the work content itself through flat design rather than excessive decoration. Target users include potential clients, recruiters, and peer designers who need interfaces that visually demonstrate the designer's professionalism, creative thinking, and aesthetic taste. The interface must be clean and direct, making the work the absolute focus, while showing the designer's precise control of visual language through bold color use and clear information hierarchy. This is a digital business card showcasing creative ability, needing to immediately convey the designer's style preferences and professional level.

Visual Design Philosophy:
Discard all superfluous visual decoration, returning to the purest graphic and color language. Design emphasizes flatness and directness, establishing visual order through combinations of solid color blocks and arrangements of geometric shapes. Completely reject techniques that simulate depth like shadows and gradients, relying instead on color contrast, size differences, and whitespace to create clear visual hierarchy. The overall style pursues fresh, modern, easy-to-understand visual expression, allowing users to quickly access information and focus on content itself. The interface employs a vivid solid color system including bold primary tones and restrained auxiliary colors, creating a vital, professional, modern visual atmosphere.

Materials & Textures:
All elements present as pure flat forms, as simple and bright as paper cutouts. The interface has no texture simulation, backgrounds are pure single colors, buttons and cards are regular geometric shapes with unified corner rounding. Colors use vivid solids without any transitions or mixing, each color block has clear boundaries. Card elements adopt pure white or light gray backgrounds, paired with thin borders or directly using whitespace separation, completely avoiding shadow effects. Button designs are solid color rectangles or rounded rectangles, with smooth surfaces without gloss, changing only color depth on hover. The overall visual is like a meticulously designed flat poster—clean, direct, full of visual impact. All colors are chosen from highly saturated pure colors including vivid blues, reds, greens, yellows, forming strong visual contrast.

Interaction Experience:
Interaction feedback is extremely simple, providing visual response only through color changes. On hover, elements instantly switch to another solid color without transition animations or shadow changes, maintaining flat visual state. On click, button colors become deeper, providing clear click confirmation but no displacement or deformation effects. Page transitions use simple fade in/out or direct switching, avoiding complex animation effects. Scroll interactions remain smooth but don't add parallax or other decorative effects. Overall interaction rhythm is brisk, response is quick, giving a crisp and efficient user experience. All interactions follow immediate feedback principles, transition time controlled within extremely short ranges, creating direct efficient operation feel.

Atmosphere Creation:
The interface creates the fresh atmosphere of a modern creative studio, full of vitality without losing professionalism. Bold color use conveys the designer's creative confidence, vivid primary colors (like bright blue) occupy important positions like navigation and primary buttons, but controlled within appropriate page proportions to avoid excessive stimulation. Clean layout reflects precise control of visual language, all elements precisely aligned, spacing using unified multiple systems, showing professional grid standards. The overall style is like contemporary art exhibitions, removing all complex decoration, letting work content become the best visual language, showing the essential beauty of design. Color use follows limited palette principles, mainly using several main colors plus neutral colors, ensuring visual unity. Text and background maintain high contrast ensuring clear readability. Whitespace is ample, related elements close together, unrelated elements far apart, forming clear information grouping.`
  },

  fullPageHTML: flatDesignFullPageHTML,
  fullPageStyles: flatDesignFullPageStyles,
}
