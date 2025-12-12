// ✅ Simplified: fullPage content now loaded from public/data/content/

export const japaneseStyle = {
  id: 'core-minimalism-japanese-style',
  title: 'styles.core.minimalism.japaneseStyle.title',
  description: 'styles.core.minimalism.japaneseStyle.description',
  // ✨ AI Prompt（用于生成与當前「日式極简」页面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「日式极简页面」界面风格高度接近的日式极简（Japanese Minimalism）風格 UI。
要求：保持大量留白、縱向閱讀節奏以及柔和中性色 + 少量紅色 / 深色點綴的特徵不变，只允許替換文案与內容模組。輸出使用語義化 HTML 和 TailwindCSS 原子类。

【使用場景】
- 場景：生活品牌 / 手作 / 文創网站首页或专題页。
- 用戶：欣賞日式美學、追求安静与秩序感的使用者。
- 目标：營造「和風紙本」般的安静、克制、儀式感，同時保持資訊清晰可讀。

【整体佈局結構】
1. 頂部区
   - 精简 LOGO + 少量文字导航，靠左或置中。
   - 可加入一條非常細的上边框作為視覺起點。
2. Hero 区域
   - 大标題可置中或靠左，以細体或中等字重呈現。
   - 下方為短副标或詩意句子，字距略大、行距充足。
3. 內容区塊
   - 使用 2–3 個主要区塊，按垂直順序排列：
     - 圖文組合：左圖右文或反之，圖片可為简單留白插圖或單色塊。
     - 列表或段落：短句式文案分行排列，中間穿插細分隔线。
     - 特殊強調区：例如一句名言 / 品牌宣言，以大字或紅色點綴呈現。
4. 底部区
   - 简潔版權信息、品牌标誌和少量連結。

【色彩与材质】
1. 色彩
   - 背景：接近和紙的米白 / 淺灰（如 #f5f5f0 / #faf5e9）。
   - 文字：深灰黑（#111827 / #1f2937），避免純黑刺眼。
   - 點綴：少量紅色（#b91c1c）或墨色作為标記线 / 小圖形。
2. 視覺元素
   - 分隔线極細，颜色淺（#e5e7eb），可以用來創造縱向節奏感。
   - 圖片 / 色塊面積不宜過大，以免打破留白主体。

【排版与留白】
1. 排版
   - 大标題可使用較大文字但字重不要太粗，營造「輕」的感覺。
   - 正文使用較小字体但行距充分（行高 1.8 左右），適合慢讀。
2. 留白
   - 上下段落間距拉大，让每一段文字像「段落短詩」。
   - 左右边距比一般设計略大，令版心更窄，強化縱向閱讀。

【交互与動效】
1. Hover
   - 文字鏈接 hover 仅增加下劃线或輕微改变颜色（可使用紅色或深灰）。
   - 按鈕（若存在）風格極简，可為文字 + 細框，hover 時填充淡色或改变边框。
2. 動效
   - 避免誇張動画，必要時使用非常輕微的淡入或位移，時長 150–200ms。

【輸出要求】
- 使用語義化 HTML：section 之間有明確結構，方便 LLM 明白不同內容区塊。
- 使用 Tailwind 原子类控制 max-width、margin、padding、typography 和 borders。
- 生成的 UI 必須在「日式留白 + 和紙感背景 + 細线條 + 極少量紅色點綴」這幾個方面与當前日式極简界面高度接近。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a Japanese Minimalism style page that looks very close to the current “Japanese Minimal” demo.
Keep the generous whitespace, vertical reading rhythm and combination of soft neutral background with very small red or dark accents essentially unchanged. You may replace text and content modules, but not the core composition, spacing or calm Japanese aesthetic. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: homepage or feature page for lifestyle, handcrafted goods or cultural brands.
- Users: people who appreciate Japanese aesthetics and seek quiet, ordered interfaces.
- Goal: create a “washi paper” reading experience that feels calm, ritualistic and refined while keeping information easy to scan.

[Layout]
1. Top area with a small logo and a few text links, aligned left or centered; may include a very thin top border to anchor the layout.
2. Hero section with a large but light-weight heading and a short poetic line or subtitle below, both with generous letter-spacing and line-height.
3. Main content composed of 2–3 vertical sections, for example:
   - Image and text blocks with small images or colored rectangles paired with short paragraphs.
   - Lists or short lines of copy separated by fine dividers.
   - A highlighted statement or quote presented as a special block, possibly with red accent.
4. Simple bottom area for copyright and a few links, staying visually light.

[Visual style]
1. Background mimics washi paper: warm off-white or very light grey tones with no obvious textures in code, just color choices.
2. Text uses deep grey or ink-like colors instead of pure black to keep reading soft.
3. Accents are rare and deliberate: a single red or dark line, small symbol or short piece of text to draw attention.
4. Dividers are extremely thin and light, used to build vertical rhythm rather than strong separation.

[Interaction]
1. Text links on hover only add an underline or slightly adjust color (for example switching to red or deeper grey); buttons, if present, are minimal text-with-border styles that fill with a very light color on hover.
2. Animations, if any, are very subtle fade or small position shifts with durations around 150–200ms; avoid dramatic motion.

[Output requirements]
- Use semantic HTML with clearly separated sections so that different content blocks are obvious.
- Use Tailwind-style utility classes to control max-width, margins, padding, typography and borders.
- The generated interface must preserve the feeling of “Japanese whitespace + washi-like background + fine lines + minimal red accents”, staying very close to the current Japanese Minimal UI.`
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
  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'japanese-style',
      name: 'styles.core.minimalism.japaneseStyle.title',
      type: 'fullpage'
    }
  ]
}
