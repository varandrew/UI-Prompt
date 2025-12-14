# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Broken Grid」示例界面布局风格高度接近的破格网格页面。
要求：延续当前 Demo 中「倾斜导航 + 破碎标题 + 旋转卡片 + 打散网格」的整体节奏，只允许替换文案、图标和配色，不允许将布局简化为规则栅格。输出语义化 HTML 和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 创意工作室首页、作品集 Landing Page、视觉设计活动页；
- 希望传达「打破常规、善于实验、重视视觉张力」的品牌；
- 适用于以视觉展示为主的页面，而非严肃 B2B 控制台。

【整体布局结构】
1. 顶部导航（Tilted Nav）
   - 使用横向导航栏，但文字或 Logo 有轻微旋转（-3° ~ +3°），打破绝对水平；
   - 导航项之间保留较大间距，使用大写字母和明显字距营造「海报式」感。
2. Hero 标题区
   - 主标题行以大字号（如 5xl–7xl）、不同旋转角度与错位排版呈现，例如一行略向上倾斜，另一行略向下倾斜；
   - 标题可叠加渐变填充、投影和发光效果，强化主视觉冲击力；
   - 副标题采用较小字号但同样参与位移或微旋转，使整体呈现「有秩序的混乱」。
3. 卡片网格区
   - 使用 3–4 列卡片组成表面上接近网格的布局，但每张卡片带有不同的旋转角度与位置微调；
   - 卡片间仍保留统一间距，而旋转与层级（z-index）用来营造「翻飞散落」的视觉效果；
   - 每张卡片包含图标、标题与简短说明，围绕 Asymmetry / Layering / Rotation / Contrast / Rhythm 等主题展开。
4. 文本叙事区
   - 使用两列或多列文字说明 Broken Grid 的设计哲学与应用方式；
   - 同样加入少量图标或首字放大，让文本区域视觉上与上方混乱的卡片区形成对比。

【视觉与配色】
1. 背景
   - 使用深色背景（如 #0a0a0a）搭配大面积留白（深色留白），凸显彩色块；
   - 可叠加低不透明度的噪点或渐变，以避免背景过于平。
2. 主色
   - 适合使用高饱和度的霓虹色或高对比配色（如金色 #FFD700、橙红 #FF4444、蓝紫渐变等）强调主题；
   - 卡片之间的配色可以多样，但整体色系应有统一逻辑（例如同一冷暖区间）。
3. 排版
   - 标题使用极粗字重（900），字距略微拉开，强化「海报」感；
   - 正文使用常规或偏轻字重，提供阅读节奏与视觉休息区。

【交互与动效】
1. Hover 行为
   - 卡片在 hover 时恢复为 0° 或接近 0° 的角度并稍微放大，营造「重获秩序」的动感；
   - 阴影与边框在 hover 时略微增强，加强立体感和点击暗示。
2. 运动节奏
   - 动效以 200–300ms 为主，使用 ease-out 曲线，避免长时间摇晃；
   - 可加入少量缓慢漂浮或轻微位移动画，但应控制在舒适范围内，防止视觉疲劳。

【输出要求】
- 使用语义化结构（nav / main / section / footer）组织导航、Hero、卡片区和文本区；
- 使用 TailwindCSS 原子类实现 flex/grid 布局、旋转（\`rotate-*\` 或自定义 class）、阴影与渐变；
- 最终页面必须保留「倾斜导航 + 破碎大标题 + 旋转错位卡片」的 Broken Grid 核心特征，让用户一眼感受到这是一个故意打破规则的布局，而非普通整齐网格。


---

## English Version (en-US)

You are a senior UI designer and front-end engineer. Generate a Broken Grid layout that looks very close to the current “Breaking the Grid” demo.
You must preserve the overall feeling of tilted navigation, fractured hero titles and rotated cards that appear to break out of a strict grid. You may change copy, icons and colors, but you should not simplify the layout back into a clean, perfectly aligned grid. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Creative studio homepages, portfolio landing pages and design-led campaign sites.
- Brands that want to communicate “experimental, rule-breaking, visually bold”.
- Best suited for visual storytelling and showcase pages, not conservative B2B dashboards.

[Layout structure]
1. Tilted navigation
   - A standard horizontal nav bar whose logo and/or links are slightly rotated (-3° to +3°) to suggest controlled chaos.
   - Items use generous spacing, uppercase labels and noticeable letter-spacing to create a poster-like feel.
2. Hero titles
   - Large type (e.g. 5xl–7xl) split across two lines or more, each line rotated differently and offset horizontally.
   - Words may use gradients, shadows and glow to become a central visual statement.
   - A short subtitle sits nearby with its own offset or rotation, reinforcing the sense of deliberate disruption.
3. Card mosaic
   - A grid of cards arranged in rows and columns, but each card is slightly rotated and possibly layered with different z-index values.
   - Each card contains an icon, a bold title and a short description, highlighting themes like Asymmetry, Layering, Rotation, Contrast, Rhythm.
4. Text narrative
   - A follow-up section explaining the philosophy and applications of breaking the grid, using 1–2 columns of copy with supporting iconography.

[Visual language]
1. Background
   - Use a dark base (e.g. #0a0a0a) with subtle gradients or noise to avoid flatness.
2. Color
   - Rely on high‑energy accent colors (gold, neon orange, purple, etc.) for titles, borders and key cards.
   - Maintain a coherent palette so the page feels like a single visual system rather than random chaos.
3. Typography
   - Hero type is heavy and expressive; body copy is more restrained, providing visual rest and explanation.

[Interaction and motion]
1. Hover
   - Cards may “snap” closer to 0° rotation and scale up slightly on hover, as if the layout momentarily regains order.
   - Shadows and border colors can intensify to signal interactivity.
2. Motion rhythm
   - Use short transitions (around 200–300ms) with ease‑out curves; avoid continuous shaking or excessive wobble.
   - Optional slow float or parallax-like micro-motions can be applied sparingly to reinforce the experimental tone.

[Output requirements]
- Use semantic regions (nav, main, section, footer) to structure navigation, hero, card mosaic and copy sections.
- Use Tailwind-style utilities for flex/grid layout, rotation (\`rotate-*\` or custom classes), shadows, gradients and spacing.
- The final layout must clearly preserve the Broken Grid identity: tilted nav, fractured headlines and misaligned-yet-intentional cards, so that it reads as a deliberate break from traditional grid-based design.
