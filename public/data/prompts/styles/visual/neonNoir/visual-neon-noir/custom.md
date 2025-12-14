# Custom Prompt

## 中文版本 (zh-CN)

创建一个霓虹黑色电影（Neon Noir）风格的网页设计，融合经典黑色电影的阴暗氛围与现代霓虹灯光美学。

**核心视觉特征**

色彩系统：
- 基础色调：深灰黑 (#0d0d0d, #1a1a1a) 至炭黑 (#121212, #0a0a0a)
- 霓虹点缀：深红 (#ff0040, #d90429)、酸性黄 (#ffea00, #f9c80e)、毒绿 (#00ff88, #06ffa5)
- 冷色调：钢蓝 (#2b4c7e, #1e3a5f)、暗紫 (#3a0f50, #2d1b40)
- 雨夜色：深海蓝 (#0a1f2e, #162c3d)、湿沥青灰 (#2a2a2a, #1f1f1f)
- 高光极少，以深色为主（60-80% 暗色，10-15% 霓虹色，5-10% 中性灰）

光影效果：
- 强对比光影：模拟百叶窗光影，使用 repeating-linear-gradient 创建条纹
- 霓虹反光：在深色表面添加彩色光晕，模拟潮湿地面反射
- 边缘光：人物或物体轮廓添加细微霓虹色描边（1-2px）
- 聚光效果：使用 radial-gradient 制造从暗到亮的聚焦区域
- 雨滴模糊：局部区域添加 backdrop-filter: blur(1-2px) 模拟雨水

氛围元素：
- 烟雾效果：半透明渐变遮罩，从底部向上淡化
- 光束切割：对角线或竖直光柱穿过画面
- 颗粒质感：添加细微噪点（noise），增加胶片感
- 暗角：页面四周使用径向渐变暗化，聚焦中心内容

**排版设计**

字体选择：
- 标题使用凝练有力的无衬线字体（如 Bebas Neue, Anton, Barlow Condensed）
- 正文采用中性易读字体（如 Inter, DM Sans, Manrope）
- 强调文字可使用浓缩体（Condensed）或窄体（Narrow）
- 数字使用等宽字体，模拟证据编号或档案代码

文字效果：
- 标题字号 56-84px，可以极大或极小制造反差
- 霓虹文字：深色文字带有彩色外发光，而非整体发光
- 反白文字：深色背景上的白色或浅灰文字，对比度极高
- 划线或删除线：用于标题装饰，增加叙事感
- 字母压缩：标题行高紧凑（0.9-1），增加紧张感

层级结构：
- 主标题：超大或超小，极端化处理
- 副标题：窄体大写，字母间距 2-3px
- 正文：行高 1.6-1.8，颜色为 #a0a0a0 左右的中灰
- 引用：斜体，左侧竖线标记（霓虹色），内边距 16-24px

**界面组件**

按钮设计：
- 深色按钮：#1a1a1a 背景，霓虹色细边框（1px），hover 时边框增亮
- 霓虹按钮：透明背景，霓虹色边框 2px，内部填充极深色，hover 时背景微亮
- 尺寸：高度 44-52px，水平内边距 28-40px
- 状态：禁用态完全灰化，移除所有霓虹色

卡片与面板：
- 背景色：#0d0d0d 至 #1a1a1a，带有 1px 暗色边框
- 悬浮效果：hover 时添加霓虹色边框或边缘光晕
- 内边距：20-28px
- 分隔线：1px 暗灰色 #2a2a2a，或使用霓虹色但极低不透明度（10-15%）

表单元素：
- 输入框：深色背景 #0d0d0d，底部 1px 灰色边框
- focus 状态：底边框变为霓虹色，整体无明显发光
- 占位符：暗灰色 #4a4a4a，常规字体
- 标签：小号，全大写，字母间距 1-2px，颜色为 #707070

导航栏：
- 深色半透明背景 rgba(13, 13, 13, 0.9)，带有 backdrop-blur
- 链接文字：浅灰色 #b0b0b0，hover 时变为霓虹色，无下划线
- 激活态：霓虹色文字，或底部细线标记
- Logo：单色或双色，可使用霓虹色点缀

图像处理：
- 降低饱和度至 60-80%
- 增加对比度与锐度
- 叠加暗色遮罩或渐变
- 边缘添加细微霓虹色边框

**布局与构图**

页面结构：
- Hero 区：大尺寸标题配小尺寸副标题，或反之，制造反差
- 背景图片暗化处理，前景内容使用浅色
- 内容区块：采用大量留白，避免拥挤
- 容器最大宽度：1100-1300px

版面比例：
- 标题区可占据 60-70% 视口高度，留下大量空白
- 图文混排：大图配小文字，或小图配大段落
- 非对称布局：左右内容量不等，制造视觉张力
- Z 字形阅读流：引导视线从左上至右下

装饰元素：
- 百叶窗光影：水平条纹遮罩，透明度 5-10%
- 街灯光晕：在特定位置添加模糊光斑
- 电影黑边：上下添加 40-80px 黑色区域（letterbox）
- 雨滴效果：细小的垂直线条或点状元素缓慢下落
- 霓虹招牌：文字或图形带有闪烁效果，模拟损坏的灯管

构图技巧：
- 三分法：重要元素放置在画面三分之一处
- 对角线引导：使用光线或元素创造对角线动线
- 框架构图：利用深色边缘框住亮色主体
- 负空间：大量深色区域衬托少量内容

**动画与交互**

微交互：
- 按钮 hover：霓虹色边框淡入，150-250ms
- 链接 hover：颜色过渡至霓虹色，200ms
- 卡片 hover：轻微上浮 2-3px，添加微弱阴影
- 输入框 focus：底边框颜色平滑过渡

页面动画：
- 页面加载：内容从暗到亮淡入，800-1200ms
- 滚动视差：背景图片与前景内容移动速度差
- 区块进入：从下方滑入，带有淡入效果
- 光影移动：百叶窗光影缓慢横向或纵向移动

特效动画：
- 霓虹闪烁：偶尔的明暗跳变，模拟老旧灯管
- 雨滴下落：细线从上至下移动，速度随机
- 烟雾漂移：半透明渐变层缓慢上升或横移
- 聚光扫过：圆形或椭圆形光斑缓慢移动

节奏控制：
- 动画时长普遍较长：300-800ms
- 缓动函数：ease-out 或 cubic-bezier(0.25, 0.1, 0.25, 1)
- 避免过快或过多动画，保持沉重氛围

**技术实现要点**

CSS 技巧：
- 使用 CSS Grid 实现复杂的非对称布局
- mix-blend-mode 制造光影融合效果（如 multiply, screen）
- filter 属性：brightness, contrast, saturate 调整图片
- backdrop-filter 实现毛玻璃或模糊效果
- CSS 变量管理霓虹色，便于主题切换

图层管理：
- 背景层：深色纯色或微妙渐变
- 装饰层：光影条纹、烟雾、雨滴
- 内容层：文字、图片、组件
- 前景层：导航栏、悬浮元素

响应式设计：
- 移动端：简化装饰效果，保留核心氛围
- 平板：保持主要视觉元素，调整布局为单列或双列
- 桌面：完整效果，包括所有光影与动画
- 考虑暗色模式用户偏好

性能优化：
- 使用 CSS transform 和 opacity 实现动画
- 限制 backdrop-filter 使用范围
- 雨滴和烟雾效果使用 CSS 而非 canvas（除非数量巨大）
- 图片懒加载，优先加载关键视觉元素

**内容建议**

文案风格：
- 简洁有力，避免冗长
- 使用短句，增加紧迫感
- 神秘感词汇：shadow, midnight, whisper, echo, city
- 标题可使用省略号或破折号增加悬念

图标与图形：
- 简化线条图标，无填充或极少填充
- 边框可使用霓虹色
- 几何形状：三角形、矩形、平行四边形
- 避免过于圆润或可爱的风格

图片选择：
- 夜景城市照片
- 雨中街道
- 人物剪影或背影
- 复古汽车、霓虹招牌
- 低光环境，强对比

**无障碍考虑**

对比度：
- 确保文字与背景对比度至少 4.5:1
- 霓虹色装饰不应影响主要内容可读性
- 提供切换至高对比度模式选项

可用性：
- 闪烁效果应温和，避免诱发不适
- 动画可禁用，遵循 prefers-reduced-motion
- 键盘导航：focus 状态使用霓虹色边框或轮廓
- 屏幕阅读器：装饰性元素标记为 aria-hidden

**使用场景**

- 侦探小说或犯罪题材网站
- 独立电影或纪录片宣传页
- 夜生活或酒吧品牌网站
- 艺术摄影作品集
- 音乐专辑或单曲发布页
- 神秘悬疑游戏官网


---

## English Version (en-US)

Create a Neon Noir web design that merges classic film noir's dark atmosphere with modern neon lighting aesthetics.

**Core Visual Characteristics**

Color System:
- Base tones: deep gray-black (#0d0d0d, #1a1a1a) to charcoal black (#121212, #0a0a0a)
- Neon accents: deep red (#ff0040, #d90429), acid yellow (#ffea00, #f9c80e), toxic green (#00ff88, #06ffa5)
- Cool tones: steel blue (#2b4c7e, #1e3a5f), dark purple (#3a0f50, #2d1b40)
- Rainy night colors: deep ocean blue (#0a1f2e, #162c3d), wet asphalt gray (#2a2a2a, #1f1f1f)
- Minimal highlights, primarily dark colors (60-80% dark, 10-15% neon, 5-10% neutral gray)

Light & Shadow Effects:
- Strong contrast lighting: simulate venetian blind shadows using repeating-linear-gradient stripes
- Neon reflections: add colored halos on dark surfaces, simulating wet ground reflections
- Edge lighting: subtle neon-colored outlines (1-2px) on figures or objects
- Spotlight effect: use radial-gradient to create dark-to-bright focus areas
- Rain blur: add backdrop-filter: blur(1-2px) to local areas simulating rain

Atmospheric Elements:
- Smoke effect: semi-transparent gradient masks fading from bottom up
- Light beam cuts: diagonal or vertical light columns crossing the composition
- Film grain: add subtle noise for film texture
- Vignette: use radial gradients to darken page edges, focusing center content

**Typography Design**

Font Selection:
- Headlines use condensed powerful sans-serif fonts (e.g., Bebas Neue, Anton, Barlow Condensed)
- Body text uses neutral readable fonts (e.g., Inter, DM Sans, Manrope)
- Emphasis text can use Condensed or Narrow variants
- Numbers use monospace, simulating evidence numbers or file codes

Text Effects:
- Heading size 56-84px, can be extremely large or small for contrast
- Neon text: dark text with colored outer glow, not full glow
- Reversed text: white or light gray on dark backgrounds, extreme contrast
- Strike-through or underlines: for title decoration, adding narrative feel
- Letter compression: tight line-height for titles (0.9-1), increasing tension

Hierarchy Structure:
- Main titles: extra large or extra small, extreme treatment
- Subtitles: narrow caps, letter-spacing 2-3px
- Body text: line-height 1.6-1.8, color around #a0a0a0 mid-gray
- Quotes: italic, left vertical line marker (neon color), padding 16-24px

**UI Components**

Button Design:
- Dark buttons: #1a1a1a background, thin neon border (1px), border brightens on hover
- Neon buttons: transparent background, 2px neon border, very dark fill, background slightly brightens on hover
- Dimensions: height 44-52px, horizontal padding 28-40px
- States: disabled fully grayed out, all neon colors removed

Cards & Panels:
- Background color: #0d0d0d to #1a1a1a with 1px dark border
- Hover effect: add neon border or edge glow on hover
- Padding: 20-28px
- Dividers: 1px dark gray #2a2a2a, or neon color with very low opacity (10-15%)

Form Elements:
- Input fields: dark background #0d0d0d, bottom 1px gray border
- Focus state: bottom border becomes neon color, overall no obvious glow
- Placeholder: dark gray #4a4a4a, regular font
- Labels: small size, all caps, letter-spacing 1-2px, color #707070

Navigation Bar:
- Dark semi-transparent background rgba(13, 13, 13, 0.9) with backdrop-blur
- Link text: light gray #b0b0b0, hover changes to neon color, no underline
- Active state: neon colored text, or bottom thin line marker
- Logo: monochrome or two-color, can use neon color accent

Image Treatment:
- Reduce saturation to 60-80%
- Increase contrast and sharpness
- Overlay dark masks or gradients
- Add subtle neon-colored borders at edges

**Layout & Composition**

Page Structure:
- Hero section: large title with small subtitle, or vice versa, creating contrast
- Background images darkened, foreground content uses light colors
- Content blocks: use abundant whitespace, avoid crowding
- Max container width: 1100-1300px

Layout Proportions:
- Title area can occupy 60-70% viewport height, leaving large empty space
- Image-text mix: large image with small text, or small image with large paragraph
- Asymmetric layout: unequal left-right content, creating visual tension
- Z-pattern reading flow: guide eyes from top-left to bottom-right

Decorative Elements:
- Venetian blind shadows: horizontal stripe masks, 5-10% opacity
- Streetlight halos: add blurred light spots at specific locations
- Letterbox bars: add 40-80px black areas top and bottom
- Rain drops: small vertical lines or dots slowly falling
- Neon signs: text or graphics with flicker effect, simulating damaged tubes

Composition Techniques:
- Rule of thirds: place important elements at one-third positions
- Diagonal guides: use light or elements to create diagonal movement
- Frame composition: use dark edges to frame bright subjects
- Negative space: abundant dark areas highlighting minimal content

**Animation & Interaction**

Micro-interactions:
- Button hover: neon border fades in, 150-250ms
- Link hover: color transitions to neon, 200ms
- Card hover: slight 2-3px lift, add subtle shadow
- Input focus: bottom border color smooth transition

Page Animations:
- Page load: content fades from dark to light, 800-1200ms
- Scroll parallax: background images and foreground content move at different speeds
- Block entry: slide up from bottom with fade-in effect
- Light-shadow movement: venetian blind shadows slowly move horizontally or vertically

Special Effects:
- Neon flicker: occasional brightness jumps simulating old tubes
- Rain falling: thin lines moving top to bottom, random speeds
- Smoke drift: semi-transparent gradient layers slowly rising or moving sideways
- Spotlight sweep: circular or elliptical light spot slowly moving

Pacing Control:
- Animation durations generally longer: 300-800ms
- Easing functions: ease-out or cubic-bezier(0.25, 0.1, 0.25, 1)
- Avoid too fast or too many animations, maintain heavy atmosphere

**Technical Implementation**

CSS Techniques:
- Use CSS Grid for complex asymmetric layouts
- mix-blend-mode for light-shadow fusion effects (e.g., multiply, screen)
- filter property: brightness, contrast, saturate for image adjustment
- backdrop-filter for frosted glass or blur effects
- CSS custom properties for managing neon colors, easy theme switching

Layer Management:
- Background layer: deep solid color or subtle gradients
- Decoration layer: light-shadow stripes, smoke, rain
- Content layer: text, images, components
- Foreground layer: navigation, floating elements

Responsive Design:
- Mobile: simplify decorative effects, retain core atmosphere
- Tablet: maintain main visual elements, adjust layout to single or double column
- Desktop: full effects including all lighting and animations
- Consider dark mode user preference

Performance Optimization:
- Use CSS transform and opacity for animations
- Limit backdrop-filter usage scope
- Rain and smoke effects use CSS instead of canvas (unless massive quantity)
- Lazy load images, prioritize loading key visual elements

**Content Suggestions**

Copy Style:
- Concise and powerful, avoid verbosity
- Use short sentences, increase urgency
- Mystery vocabulary: shadow, midnight, whisper, echo, city
- Titles can use ellipsis or em-dash to add suspense

Icons & Graphics:
- Simplified line icons, no fill or minimal fill
- Borders can use neon colors
- Geometric shapes: triangles, rectangles, parallelograms
- Avoid overly rounded or cute styles

Image Selection:
- Night cityscape photos
- Rain-soaked streets
- Figure silhouettes or back views
- Vintage cars, neon signs
- Low-light environments, strong contrast

**Accessibility Considerations**

Contrast:
- Ensure text-to-background contrast ratio of at least 4.5:1
- Neon decorations should not impair main content readability
- Provide option to switch to high contrast mode

Usability:
- Flicker effects should be gentle, avoid triggering discomfort
- Animations can be disabled, respect prefers-reduced-motion
- Keyboard navigation: focus states use neon borders or outlines
- Screen readers: decorative elements marked aria-hidden

**Use Cases**

- Detective novel or crime-themed websites
- Independent film or documentary promotional pages
- Nightlife or bar brand websites
- Art photography portfolios
- Music album or single release pages
- Mystery suspense game official sites
