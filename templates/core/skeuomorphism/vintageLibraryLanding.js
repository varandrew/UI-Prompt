// Single template: Skeuomorphism — Vintage Library Landing (compact)
// Style template - includes demo UI for StyleCard display
// ✅ Simplified: fullPage content now loaded from public/data/content/

export const vintageLibraryLanding = {
  id: 'core-skeuomorphism-vintage-library-landing',
  title: 'styles.core.skeuomorphism.vintageLibraryLanding.title',
  description: 'styles.core.skeuomorphism.vintageLibraryLanding.description',

  // ✨ 简短 Prompt（用于 StyleCard 快速理解）
  customPrompt: {
    'zh-CN': `你现在是一名热爱复古书房氛围的 UI 设计师兼前端工程师，请生成一个与当前「复古图书馆页面」高度接近的拟物化落地页。
目标：让别的 LLM 直接使用此 Prompt，就能产出一份在结构、配色和材质上都非常接近现有界面的页面。

【整体氛围】
- 关键词：古典、静谧、学术感、历史厚重。
- 感觉类似「私人藏书室 + 古老图书馆」，适合文学网站、古籍平台或文化品牌主页。

【布局结构建议】
1. 页面背景
   - 使用大面积羊皮纸质感背景，色彩在 #f6f1ea 与 #e9e1d7 范围内变化，带有轻微纸张纹理与岁月斑点。
2. 顶部区域
   - 可以有简洁的标题区或导航条，但应保持克制，避免现代感过强的组件。
   - 标题使用深棕色或接近 #1a1410 的文字颜色，字号较大，字距略紧，营造严肃感。
3. 主内容卡片区
   - 若干深棕皮革质感的卡片，放置在羊皮纸背景之上。
   - 卡片背景：浅米色 (#faf4ec 左右)，边框使用 rgba(0,0,0,0.12) 的深色细边，外围有柔和阴影。
   - 卡片内部可包含章节标题、段落文字、按钮或标签，用于展示书目、文章或专题。
4. 黄铜金属徽章 / 标签
   - 使用琥珀金色 (#a16207) 或相近色作为小徽章、标签或章节标记。
   - 可以设计成圆角矩形徽章或圆形印章，放在卡片角落或标题旁边。
5. 底部 / 补充区
   - 可加入书脊装饰、分隔线、页脚文字等，保持整体复古书房感，不要使用现代大面积纯色块。

【色彩与材质细节】
1. 背景与文字
   - 背景主色：羊皮纸米黄 (#f6f1ea) 渐变到略深的纸色 (#e9e1d7)。
   - 正文文字：深棕黑色 #1a1410，确保在浅色纸张上有足够对比。
2. 卡片与容器
   - 卡片底色：浅米色 #faf4ec，边缘可略微变暗模拟纸张厚度。
   - 阴影：使用 rgba(0,0,0,0.2) 的柔和阴影，投影半径较大，营造厚重旧书的体积感。
3. 金属与装饰
   - 金属徽章：采用 #a16207 或接近的黄铜色，可搭配细微高光和暗角。
   - 装饰线条：可使用更深的棕色或略带金属光泽的线条勾勒分割。

【拟物与细节】
1. 书页与装帧感
   - 可以在卡片顶部或侧边模拟书页堆叠或书脊效果，增加真实感。
2. 边缘处理
   - 羊皮纸背景边缘可加入轻微磨损、暗角或不规则边缘，以体现年代感。
3. 图标与插图
   - 若需要图标，请使用简洁线性图标或极简插画，避免与复古质感冲突。

【交互与动效】
1. Hover
   - 卡片 hover 时略微抬起 (translateY(-2–4px))，阴影加深但不要出现现代浮层光晕。
2. Active
   - 按钮按下时轻微下压，颜色变深一点点，模拟实体纸张被按压的效果。
3. 过渡
   - 使用缓慢且克制的过渡，避免过于炫目的动效破坏沉静氛围。

【输出要求】
- 使用语义化 HTML 结构，并以类 TailwindCSS 原子类控制布局、排版与间距。
- 整体视觉需一眼看出是「羊皮纸背景 + 深棕皮革卡片 + 黄铜徽章」的复古图书馆落地页，整体基调偏暖、偏暗，具有文化与历史厚重感。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a skeuomorphic vintage library landing page that looks very close to the current “Vintage Library Page” demo.
Keep the parchment background, leather-like cards, brass badges and quiet editorial layout essentially unchanged. You may change titles and text content, but not the arrangement of sections or the vintage material language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: landing page for literature platforms, rare-book collections or cultural brands.
- Mood: classical, quiet, scholarly, with a strong sense of history and depth.

[Layout]
1. Use a full-page parchment background as the base, with a centred content column or grid.
2. Top area can include a restrained heading or navigation bar; typography evokes a newspaper or book masthead.
3. Main content area presents several leather-like cards on the parchment surface, each showing a section such as featured works, collections or editor’s picks.
4. Small brass badges or labels may mark categories or featured sections, placed near card corners or headings.
5. Bottom area can include simple dividers, book-spine decorations or footer text, all kept within the vintage aesthetic.

[Materials and colors]
1. Background uses beige paper tones ranging between light parchment and slightly darker aged paper, without modern flat blocks of color.
2. Cards use light cream surfaces with darker edges and soft shadows to suggest heavier sheets or book covers.
3. Brass badges use warm amber-gold colors with a hint of highlight and dark edges to feel metallic.
4. Text uses deep brown-black for main content; secondary text can be slightly lighter brown for hierarchy.

[Interaction]
1. Hovering over cards lifts them slightly and deepens shadows but does not introduce modern glowing effects.
2. Buttons, if present, press in with a small color darkening and shadow reduction to mimic physical paper being pressed.
3. Animations are slow and subtle; avoid flashy motion that would break the calm historical mood.

[Output requirements]
- Use semantic HTML sections to separate header, main card grid and footer or supplemental content.
- Use Tailwind-style utilities to control layout, spacing, borders, colors and shadows.
- The generated landing page must preserve the key traits of this vintage library UI: parchment background, cream cards, brass accents and heavy, quiet shadows.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览，包含具体色码和技术实现）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于拟物化设计的 UI 设计师，专注于复古图书馆主题的古典材质视觉设计。

场景定位：
为文学爱好者、古籍收藏平台或文化类网站打造具有历史感和文化底蕴的页面，通过羊皮纸、深棕皮革、黄铜金属等古典材质营造复古典雅的阅读氛围。目标用户追求文化品味和历史感，界面应传达优雅、沉稳、学术的视觉印象。这是一个专为文化内容设计的数字空间，需要在视觉上唤起古老图书馆的记忆，同时保持现代数字界面的易用性和清晰度。

视觉设计理念：
采用古典材质的设计语言，通过羊皮纸、皮革、黄铜等历史悠久的材料质感营造文化底蕴。设计强调历史感与现代可用性的融合，让数字界面如同走进一间精心保存的古老图书馆般充满文化氛围。整体风格追求优雅而不失庄重，通过复古材质的细腻处理而非当代设计元素来体现文化品位。界面运用复古暖色系的配色，包含米黄、棕褐、金色等历史色调，营造出沉稳、典雅、学术的视觉氛围，让用户沉浸在文化阅读的体验中。

材质与质感：
主视觉采用羊皮纸背景，呈现出老旧羊皮纸或古书纸张的质感，表面略微粗糙且带有细微的纸张纤维纹理和岁月留下的痕迹，整体为温暖的米黄到浅棕褐色调，边缘有轻微的发黄效果，如同真正的古老文献般富有历史感。卡片元素使用深棕皮革效果，模拟老旧书籍封面或笔记本的皮革质感，表面光滑带有细微的皮革纹理和使用痕迹，边缘有轻微的卷曲感和厚度感，营造出古籍的真实触感。黄铜徽章标签模拟黄铜或青铜材质的金属徽章，表面带有轻微的氧化和磨损感，边缘圆润且有金属光泽，白色文字如同雕刻般清晰。所有元素都运用复古的多层阴影系统，阴影偏柔和且带有暖色调，营造古朴的光影效果，如同古老煤油灯照明下的氛围。

交互体验：
所有交互都强调古典优雅的视觉反馈，元素的悬停和点击效果极其克制，避免现代化的动态效果破坏复古氛围。卡片在鼠标悬停时会展现出极其细微的阴影变化，如同书籍被轻轻提起的感觉。黄铜徽章的交互保持简洁庄重，点击时有轻微的金属按压感但不会产生夸张的动效。动画节奏舒缓沉稳，所有过渡都使用柔和的缓动曲线，模拟翻阅古书的节奏感。页面滚动流畅而优雅，卡片元素在进入视口时展现出细腻的淡入效果，营造出翻阅历史文献的仪式感。整体交互设计追求优雅克制，为阅读文化内容营造沉浸式的复古体验。

氛围营造：
整体界面营造出古老图书馆的优雅氛围，如同走进一间历史悠久的私人藏书室。复古暖色系的配色系统包含米黄羊皮纸色背景、深棕黑色文字和适度的黄铜金色装饰元素，传递出优雅、沉稳、学术的文化印象。羊皮纸、皮革和黄铜材质的运用让界面充满历史质感，营造出古典而庄重的视觉基调。圆角处理适中，既不过于现代也不过于刻板，保持古典美学的平衡感。所有边缘都经过细腻的光影处理，模拟自然光照下古老材质的真实质感。黄铜金色作为强调色适度使用，避免过于华丽而破坏典雅氛围。整体色彩饱和度偏低，保持复古感，色彩明度维持在中等水平，既不过亮也不过暗，适合长时间阅读文化内容。纸张纹理极其微妙，不干扰文字阅读，所有视觉元素都服务于营造沉浸式的文化阅读体验。文字排版优雅清晰，适合使用衬线字体增强古典感，让整个界面如同一本精心装帧的古籍般引人入胜。`,

    'en-US': `Role: You are a UI designer specializing in Skeuomorphism, focused on classical material visual design for vintage library themes.

Scenario Positioning:
Create a historically rich and culturally deep page for literature enthusiasts, antique book collection platforms, or cultural websites, using classical materials like parchment, deep brown leather, and brass metal to create a vintage elegant reading atmosphere. Target users pursue cultural taste and historical sense, and the interface should convey elegant, stable, and academic visual impressions. This is a digital space designed specifically for cultural content, needing to visually evoke memories of ancient libraries while maintaining modern digital interface usability and clarity.

Visual Design Philosophy:
Adopt the design language of classical materials, creating cultural depth through textures of historically rich materials like parchment, leather, and brass. The design emphasizes the fusion of historical sense and modern usability, making digital interfaces feel like entering a meticulously preserved ancient library full of cultural atmosphere. The overall style pursues elegance without losing solemnity, reflecting cultural taste through delicate vintage material treatment rather than contemporary design elements. The interface employs a vintage warm color system including beige, tan, and gold historical tones, creating a stable, elegant, and academic visual atmosphere that immerses users in cultural reading experiences.

Materials & Textures:
The main visual uses parchment background, presenting the texture of old parchment or ancient book paper, with a slightly rough surface and subtle paper fiber texture and traces left by time, overall warm beige to light tan tones with slightly yellowed edges, as historically rich as genuine ancient documents. Card elements use deep brown leather effects, simulating the leather texture of old book covers or notebooks, with smooth surfaces and subtle leather texture and usage marks, edges with slight curl and thickness perception, creating the authentic feel of ancient books. Brass badge labels simulate brass or bronze metal badges with slight oxidation and wear on surfaces, rounded edges with metallic luster, white text as clear as engravings. All elements employ vintage multi-layer shadow systems with soft shadows and warm tones, creating antique light-shadow effects like the atmosphere under ancient oil lamp lighting.

Interaction Experience:
All interactions emphasize classical elegant visual feedback, with extremely restrained hover and click effects avoiding modern dynamic effects that would break the vintage atmosphere. Cards show extremely subtle shadow changes on mouse hover, like the feeling of books being gently lifted. Brass badge interactions remain simple and dignified, with slight metallic press feel on click but no exaggerated animations. Animation rhythm is slow and steady, all transitions use soft easing curves simulating the rhythm of browsing ancient books. Page scrolling is smooth and elegant, card elements show delicate fade-in effects when entering viewport, creating the ritual feel of browsing historical documents. Overall interaction design pursues elegant restraint, creating immersive vintage experiences for reading cultural content.

Atmosphere Creation:
The overall interface creates the elegant atmosphere of an ancient library, like entering a historically rich private book collection room. The vintage warm color system includes beige parchment background, deep brown-black text, and moderate brass gold decorative elements, conveying elegant, stable, and academic cultural impressions. The use of parchment, leather, and brass materials fills the interface with historical texture, creating a classical and dignified visual foundation. Border radius is moderate, neither too modern nor too rigid, maintaining the balance of classical aesthetics. All edges receive delicate light-shadow treatment, simulating the authentic texture of ancient materials under natural lighting. Brass gold is used moderately as accent color, avoiding excessive luxury that would break the elegant atmosphere. Overall color saturation is low maintaining vintage feel, color brightness maintained at medium level neither too bright nor too dark, suitable for long-term reading of cultural content. Paper texture is extremely subtle not interfering with text reading, all visual elements serve to create immersive cultural reading experiences. Text typography is elegant and clear, suitable for using serif fonts to enhance classical feel, making the entire interface as captivating as a meticulously bound ancient book.`
  },

  demoHTML: `
    <div class="sk-vlib">
      <header class="sk-vlib__hero">
        <h1>Vintage Library</h1>
        <p>Classic textures blended with modern readability.</p>
      </header>
      <section class="sk-vlib__grid">
        <article class="sk-card"><b>Collection</b><span>120+</span></article>
        <article class="sk-card"><b>Authors</b><span>45</span></article>
        <article class="sk-card"><b>Curations</b><span>12</span></article>
      </section>
    </div>
  `,
  customStyles: `
    .sk-vlib { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#2b2b2b; }
    .sk-vlib__hero { background: linear-gradient(180deg,#f6f1ea,#e9e1d7); border:1px solid rgba(0,0,0,.08); border-radius:16px; padding:14px; box-shadow: inset 0 1px 0 #fff, 0 10px 20px rgba(0,0,0,.1); }
    .sk-vlib__grid { display:grid; grid-template-columns: repeat(3,1fr); gap:10px; margin-top:10px; }
    .sk-card { background: linear-gradient(180deg,#fff,#faf4ec); border:1px solid rgba(0,0,0,.08); border-radius:12px; padding:10px; box-shadow: inset 0 1px 0 #fff, 0 6px 14px rgba(0,0,0,.12); display:flex; align-items:center; justify-content:space-between; }
    .sk-card b { font-weight:700; }
    .sk-card span { background:#a16207; color:#fff; border-radius:10px; padding:2px 8px; font-weight:700; font-size:11px; }
  `,

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'vintage-library-landing',
      name: 'styles.core.skeuomorphism.preview.vintageLibraryLanding',
      type: 'fullpage'
    }
  ],
}
