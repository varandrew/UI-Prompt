// Holographic Foil Custom Prompt - Technical Implementation Guide
// 全息箔纸风格自定义 Prompt - 技术实现指南

export const holographicFoilCustomPrompt = {
  'zh-CN': `
**使用场景 (Usage Context):**
适用于高端科技产品发布、NFT 数字藏品展示、Web3 应用、现代音乐流媒体平台、或任何追求未来感与排他性的奢华品牌官网。此风格旨在通过模拟物理世界中的"全息烫金"工艺，在数字界面上创造出极其珍贵和高科技的视觉体验。

**整体布局结构 (Layout Structure):**
- **背景策略**: 必须使用极深色背景（推荐 #050505 或 #000000），以最大化全息光感的对比度。避免使用纯平的灰色，可叠加极其微弱的噪点（Noise）纹理以增加质感。
- **空间感**: 采用宽敞的网格布局或大留白设计。元素之间应当有足够的"呼吸空间"，让流动的光效成为视觉焦点，不被拥挤的内容干扰。
- **层级**: 界面应呈现明显的层级感，背景深沉，前景卡片和文字仿佛悬浮于黑暗之中，通过光效和阴影（colored glow）区分层级。

**色彩与材质 (Colors & Materials):**
- **基底色**: 深邃的黑、午夜蓝或炭灰（Dark Slate）。
- **全息光谱**: 核心视觉特征。使用高饱和度的彩虹渐变色：
  - 关键色值：洋红 (#FF00FF), 青色 (#00FFFF), 亮黄 (#FFFF00), 甚至少量的电光紫 (#9D00FF)。
  - 渐变逻辑：这些颜色不应是静态的，而应像油膜或棱镜折射一样流动。
- **材质感**: 模拟金属箔纸的反光特性。表面应具有"镜面"感，对光线有敏锐的反应（高光流动）。

**关键 CSS 实现 (Key CSS Implementation):**
1.  **全息渐变动画 (Holographic Gradient Animation)**:
    - 使用 \`background-image: linear-gradient(115deg, #ff00ff, #00ffff, #ffff00, #ff00ff)\`。
    - 关键点在于 \`background-size: 200% 200%\` 配合 \`@keyframes\` 动画，不断移动背景位置（background-position），产生光谱流动的错觉。

2.  **全息文字效果 (Holographic Typography)**:
    - 标题文字应用 \`background-clip: text; color: transparent;\`。
    - 叠加一层 \`filter: drop-shadow(0 0 2px rgba(255,255,255,0.2))\` 以增加发光感，防止在深色背景上晕开。

3.  **彩虹流光边框 (Rainbow Borders)**:
    - 不要使用简单的 \`border\` 属性。
    - 使用父容器嵌套或 \`::before\` 伪元素方法。伪元素略大于内容容器（inset: -2px），设置全息渐变背景并置于底层（z-index: -1）。
    - 对伪元素应用模糊滤镜 \`filter: blur(8px)\` 可创造出赛博朋克式的霓虹光晕效果。

4.  **移动高光/光泽 (Moving Sheen)**:
    - 在卡片表面使用 \`::after\` 伪元素，创建一个半透明的白色线性渐变（white transparent gradient）。
    - 使用 \`transform: skewX(-25deg) translateX(-150%)\` 并设置动画，使其周期性地划过卡片表面，模拟光线掠过金属箔纸的物理反光效果。
    - 混合模式推荐使用 \`mix-blend-mode: overlay\` 或 \`color-dodge\`。

**交互与动效 (Interaction & Motion):**
- **Hover 态**: 当鼠标悬停在卡片上时，全息流动的速度应加快（animation-duration 缩短），或者光泽亮度增强（brightness 提升），模拟物体被"激活"或"照亮"。
- **视差 (Tilt/Parallax)**: 如果可能，结合鼠标位置（mouse move）微调背景渐变的角度，产生类似 3D 镭射防伪标的视差效果。

**输出要求 (Output Requirements):**
- 优先使用 CSS Grid/Flexbox 进行布局。
- 动画必须使用 \`transform\` 和 \`opacity\` 以确保 GPU 加速，避免掉帧。
- 代码需包含详细的 Tailwind 类名或模块化 CSS。
`,
  'en-US': `
**Usage Context:**
Ideal for high-end tech product launches, NFT showcases, Web3 applications, modern music streaming platforms, or any luxury brand website aiming for a futuristic and exclusive vibe. This style aims to simulate the physical craftsmanship of "holographic foil stamping" on a digital interface, creating an extremely precious and high-tech visual experience.

**Layout Structure:**
- **Background Strategy**: Must use an extremely dark background (recommended #050505 or #000000) to maximize the contrast of the holographic light effects. Avoid flat grays; a very subtle noise texture can be overlaid to add substance.
- **Spatial Sense**: Adopt spacious grid layouts or generous whitespace. Elements should have enough "breathing room" so that the flowing light effects become the visual focal point, undisturbed by crowded content.
- **Hierarchy**: The interface should present a distinct sense of depth—deep backgrounds with foreground cards and text appearing to float in the darkness, separated by lighting effects and colored glow shadows.

**Colors & Materials:**
- **Base Colors**: Deep blacks, midnight blues, or charcoal gray (Dark Slate).
- **Holographic Spectrum**: The core visual feature. Use high-saturation rainbow gradients:
  - Key Values: Magenta (#FF00FF), Cyan (#00FFFF), Bright Yellow (#FFFF00), and touches of Electric Purple (#9D00FF).
  - Gradient Logic: These colors should not be static but should flow like oil slicks or prismatic refractions.
- **Materiality**: Simulate the reflective properties of metallic foil. Surfaces should feel "specular" and reactive to light (flowing highlights).

**Key CSS Implementation:**
1.  **Holographic Gradient Animation**:
    - Use \`background-image: linear-gradient(115deg, #ff00ff, #00ffff, #ffff00, #ff00ff)\`.
    - The key is \`background-size: 200% 200%\` combined with \`@keyframes\` animation, continuously shifting the \`background-position\` to create the illusion of a flowing spectrum.

2.  **Holographic Typography**:
    - Apply \`background-clip: text; color: transparent;\` to headline text.
    - Overlay a \`filter: drop-shadow(0 0 2px rgba(255,255,255,0.2))\` to add a glow and prevent it from washing out against the dark background.

3.  **Rainbow Borders**:
    - Do not use the simple \`border\` property.
    - Use a parent container nesting strategy or \`::before\` pseudo-element. The pseudo-element should be slightly larger than the content container (inset: -2px), set with the holographic gradient background, and placed underneath (z-index: -1).
    - Applying \`filter: blur(8px)\` to the pseudo-element creates a Cyberpunk-style neon glow.

4.  **Moving Sheen**:
    - Use an \`::after\` pseudo-element on card surfaces to create a semi-transparent white linear gradient.
    - Use \`transform: skewX(-25deg) translateX(-150%)\` and animate it to periodically sweep across the card surface, simulating the physical reflection of light glancing off metallic foil.
    - Recommended blend modes: \`mix-blend-mode: overlay\` or \`color-dodge\`.

**Interaction & Motion:**
- **Hover States**: When hovering over a card, the speed of the holographic flow should accelerate (shorten \`animation-duration\`) or the brightness should increase, simulating the object being "activated" or "illuminated."
- **Tilt/Parallax**: If possible, combine with mouse position data to slightly adjust the angle of the background gradients, creating a parallax effect similar to 3D holographic security stickers.

**Output Requirements:**
- Prioritize CSS Grid/Flexbox for layout.
- Animations must use \`transform\` and \`opacity\` to ensure GPU acceleration and avoid frame drops.
- Code should include detailed Tailwind class names or modular CSS.
`
};
