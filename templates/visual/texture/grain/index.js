// Single template module: Texture — Grain Texture
// 颗粒质感 - 粗糙的表面纹理

import { demoHTML, customStyles } from './Demo';

export const grain = {
  id: 'visual-texture-grain',
  title: 'styles.visual.grain.title',
  description: 'styles.visual.grain.description',

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个「颗粒质感（Grain Texture）」风格的界面，通过 SVG 滤镜和 CSS 技术模拟胶片颗粒、复古印刷和模拟摄影的粗糙质感。

**核心设计要求**

1. **SVG feTurbulence 滤镜颗粒生成**
   - 使用 SVG feTurbulence 创建随机噪点纹理
   - 细颗粒配置: \`<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>\`
   - 中等颗粒配置: \`<feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/>\`
   - 粗颗粒配置: \`<feTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/>\`
   - 通过 Data URI 内嵌 SVG，作为 background-image 使用
   
2. **透明度和强度控制**
   - 细颗粒透明度: \`opacity='0.12'-'0.15'\` — 适用于英雄区、标题背景
   - 中等颗粒透明度: \`opacity='0.15'-'0.18'\` — 适用于卡片、正文区域
   - 粗颗粒透明度: \`opacity='0.18'-'0.25'\` — 适用于页脚、强调区块
   - 避免透明度超过 0.3，否则会影响文字可读性

3. **CSS 颗粒动画替代方案**
   - 使用 \`repeating-radial-gradient\` 创建 CSS 噪点:
   \`\`\`css
   background: repeating-radial-gradient(
     circle at 50% 50%,
     transparent 0,
     rgba(0, 0, 0, 0.05) 1px,
     transparent 2px
   );
   \`\`\`
   - 添加动画模拟颗粒漂移: \`animation: grainMove 8s linear infinite;\`
   - 适用于不支持 SVG 滤镜的场景

4. **颗粒叠加混合模式**
   - 使用 \`mix-blend-mode: multiply\` 让颗粒与背景颜色融合
   - 使用 \`mix-blend-mode: overlay\` 增强颗粒对比度
   - 暗色背景使用 \`lighten\`，亮色背景使用 \`darken\`
   - 示例: \`.grain-overlay { mix-blend-mode: multiply; opacity: 0.2; }\`

5. **多层颗粒技术**
   - 结合 ::before 和 ::after 伪元素创建双层颗粒
   - 外层使用细颗粒（baseFrequency='0.9'）
   - 内层使用粗颗粒（baseFrequency='0.5'）
   - 两层使用不同 opacity 和 blend-mode 创造深度感

6. **响应式颗粒适配**
   - 移动端减少颗粒密度（降低 baseFrequency）
   - 小屏幕降低透明度避免视觉疲劳
   - 使用 CSS 变量动态控制颗粒参数:
   \`\`\`css
   :root {
     --grain-opacity: 0.15;
     --grain-frequency: 0.9;
   }
   @media (max-width: 768px) {
     --grain-opacity: 0.12;
     --grain-frequency: 0.7;
   }
   \`\`\`

7. **颗粒与排版的层次关系**
   - 文字必须位于颗粒层之上: \`position: relative; z-index: 2;\`
   - 颗粒层设置 \`pointer-events: none;\` 避免阻挡交互
   - 标题区域使用细颗粒，正文区域使用极细颗粒
   - 白色文字配深色颗粒，深色文字配浅色颗粒

**配色方案（复古胶片色调）**

主色调（暖色漸變）:
- 桃色基底: #ffecd2, #fcb69f
- 淡紫卡片: #e0c3fc
- 粉紅卡片: #fbc2eb

中性色:
- 深灰文字: #2c3e50
- 中灰文字: #555555
- 浅灰辅助: #999999

强调色:
- 复古红: #c44536 (用于链接、按钮)

**关键 CSS 类示例**

\`\`\`css
/* 细颗粒背景卡片 */
.grain-card-fine {
  background: #e0c3fc;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  padding: 48px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.grain-card-fine:hover {
  transform: translateY(-4px);
}

/* 粗颗粒英雄区 */
.grain-hero {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.grain-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='coarse'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23coarse)' opacity='0.2'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.grain-hero-content {
  position: relative;
  z-index: 2;
}

/* 动画颗粒按钮 */
.grain-button {
  position: relative;
  padding: 16px 48px;
  background: #c44536;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.grain-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: repeating-radial-gradient(
    circle at 50% 50%,
    transparent 0,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 2px
  );
  animation: grainMove 8s linear infinite;
  pointer-events: none;
}

@keyframes grainMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-10%, -10%); }
}

.grain-button:hover {
  transform: translateY(-2px);
}
\`\`\`

**排版系统**

- 标题字体: Georgia, "Times New Roman", serif（衬线字体增强复古感）
- 标题大小: H1: 72px, H2: 48px, H3: 28px
- 正文字体: Georgia, serif
- 正文大小: 18px，行高 1.7
- 字母间距: 标题 letter-spacing: -0.02em，正文默认

**间距系统（基于 8px）**

- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px, 2xl: 64px, 3xl: 80px, 4xl: 120px

**重要提示**

- 颗粒是背景装饰，不要覆盖在文字上方
- 确保所有交互元素（按钮、链接）在颗粒层之上
- 移动端适当降低颗粒强度避免性能问题
- 使用 \`will-change: transform\` 优化动画性能
- 避免在同一元素上叠加超过 2 层颗粒
- 深色模式下调整颗粒透明度和混合模式
- 所有链接使用 \`href="javascript:void(0)"\` 避免页面跳转
- 颗粒纹理应保持静态，除非特殊动画需求`,

    'en-US': `Please create a "Grain Texture" style interface using TailwindCSS, simulating film grain, vintage print, and analog photography's rough texture through SVG filters and CSS techniques.

**Core Design Requirements**

1. **SVG feTurbulence Filter Grain Generation**
   - Use SVG feTurbulence to create random noise textures
   - Fine grain config: \`<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>\`
   - Medium grain config: \`<feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/>\`
   - Coarse grain config: \`<feTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/>\`
   - Embed SVG via Data URI, use as background-image

2. **Opacity and Intensity Control**
   - Fine grain opacity: \`opacity='0.12'-'0.15'\` — for hero sections, title backgrounds
   - Medium grain opacity: \`opacity='0.15'-'0.18'\` — for cards, body content
   - Coarse grain opacity: \`opacity='0.18'-'0.25'\` — for footers, emphasis blocks
   - Avoid opacity above 0.3, which impacts text readability

3. **CSS Grain Animation Alternative**
   - Use \`repeating-radial-gradient\` for CSS noise:
   \`\`\`css
   background: repeating-radial-gradient(
     circle at 50% 50%,
     transparent 0,
     rgba(0, 0, 0, 0.05) 1px,
     transparent 2px
   );
   \`\`\`
   - Add animation for grain drift: \`animation: grainMove 8s linear infinite;\`
   - For scenarios without SVG filter support

4. **Grain Overlay Blend Modes**
   - Use \`mix-blend-mode: multiply\` to blend grain with background colors
   - Use \`mix-blend-mode: overlay\` to enhance grain contrast
   - Dark backgrounds use \`lighten\`, light backgrounds use \`darken\`
   - Example: \`.grain-overlay { mix-blend-mode: multiply; opacity: 0.2; }\`

5. **Multi-Layer Grain Technique**
   - Combine ::before and ::after pseudo-elements for dual-layer grain
   - Outer layer uses fine grain (baseFrequency='0.9')
   - Inner layer uses coarse grain (baseFrequency='0.5')
   - Different opacity and blend-mode create depth

6. **Responsive Grain Adaptation**
   - Reduce grain density on mobile (lower baseFrequency)
   - Lower opacity on small screens to avoid visual fatigue
   - Use CSS variables to dynamically control grain parameters:
   \`\`\`css
   :root {
     --grain-opacity: 0.15;
     --grain-frequency: 0.9;
   }
   @media (max-width: 768px) {
     --grain-opacity: 0.12;
     --grain-frequency: 0.7;
   }
   \`\`\`

7. **Grain and Typography Hierarchy**
   - Text must be above grain layer: \`position: relative; z-index: 2;\`
   - Grain layer with \`pointer-events: none;\` to avoid blocking interactions
   - Fine grain for title areas, ultra-fine for body content
   - White text with dark grain, dark text with light grain

**Color Scheme (Vintage Film Tones)**

Primary (Warm Gradient):
- Peach base: #ffecd2, #fcb69f
- Lavender cards: #e0c3fc
- Pink cards: #fbc2eb

Neutral:
- Dark gray text: #2c3e50
- Medium gray text: #555555
- Light gray support: #999999

Accent:
- Vintage red: #c44536 (for links, buttons)

**Key CSS Class Examples**

\`\`\`css
/* Fine grain background card */
.grain-card-fine {
  background: #e0c3fc;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  padding: 48px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.grain-card-fine:hover {
  transform: translateY(-4px);
}

/* Coarse grain hero section */
.grain-hero {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.grain-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='coarse'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23coarse)' opacity='0.2'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.grain-hero-content {
  position: relative;
  z-index: 2;
}

/* Animated grain button */
.grain-button {
  position: relative;
  padding: 16px 48px;
  background: #c44536;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.grain-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: repeating-radial-gradient(
    circle at 50% 50%,
    transparent 0,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 2px
  );
  animation: grainMove 8s linear infinite;
  pointer-events: none;
}

@keyframes grainMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-10%, -10%); }
}

.grain-button:hover {
  transform: translateY(-2px);
}
\`\`\`

**Typography System**

- Title font: Georgia, "Times New Roman", serif (serif enhances vintage feel)
- Title sizes: H1: 72px, H2: 48px, H3: 28px
- Body font: Georgia, serif
- Body size: 18px, line-height 1.7
- Letter spacing: Titles letter-spacing: -0.02em, body default

**Spacing System (8px base)**

- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px, 2xl: 64px, 3xl: 80px, 4xl: 120px

**Important Notes**

- Grain is background decoration, don't overlay on text
- Ensure all interactive elements (buttons, links) are above grain layer
- Reduce grain intensity on mobile to avoid performance issues
- Use \`will-change: transform\` to optimize animation performance
- Avoid stacking more than 2 grain layers on same element
- Adjust grain opacity and blend mode in dark mode
- All links use \`href="javascript:void(0)"\` to avoid page jumps
- Grain texture should remain static unless special animation needed`
  },

  // 模板級 stylePrompt：描述顆粒质感与膠片風格
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长打造「胶片颗粒」与复古质感的 UI 设计师，需要用細緻噪點让画面看起來像經過真實攝影或印刷。

场景定位：
- 適合作品集、攝影网站、音樂与文化相关专案，或任何想呈現「Analog / Film」氛圍的介面。
- 顆粒层多用於背景或卡片上层的疊加，不應影響文字辨識度。

视觉设计理念：
- 將顆粒視為一层細霧鋪在画面上，而不是明显的圖案；在遠看時只提升质感，在近看才會注意到細節。
- 与扁平色塊或大面積漸变結合時，顆粒可以弱化「数位感」，让画面更柔和、有溫度。

材质与质感：
- 使用 SVG feTurbulence 或位圖噪點貼圖产生隨機紋理，根据需求調整頻率与 octaves。
- 控制不透明度在 0.1–0.25 之間，避免顆粒過重导致画面髒亂或視覺疲勞。

交互体验：
- 顆粒紋理一般不需隨 hover 而改变，以免造成跳動或错位感；它更像固定在鏡頭或膠片上的物理层。
- 若搭配主題切換，可以輕微調整顆粒強度或色調，让深色／淺色模式都有合適的质感。

氛围营造：
- 顆粒感會帶來「懷舊、真實、略帶粗糙」的情緒，減少過度平滑 UI 的疏離感。
- 使用者應感覺画面像經過相機或印刷機處理過，而不是完全無瑕的数位輸出。`,

    'en-US': `Role: You are a UI designer who specializes in film grain and analog texture, using fine noise to make digital interfaces feel more tangible and lived-in.

Scene:
- Ideal for portfolios, photography sites, music and culture projects, or any interface seeking an “analog / film” atmosphere.
- Grain layers usually sit on backgrounds or card surfaces and must not compromise text readability.

Visual philosophy:
- Think of grain as a soft mist laid over the design: invisible from afar but rewarding closer inspection with subtle detail.
- When combined with flat colors or large gradients, grain reduces the overly plastic digital feel and adds warmth.

Material & texture:
- Generate random patterns via SVG feTurbulence or bitmap noise, tuning frequency and octaves to control fineness.
- Keep opacity around 0.1–0.25 so the texture never dominates or makes the canvas look dirty.

Interaction:
- Noise patterns typically remain static across hover states to avoid jitter or misalignment; they behave like a physical layer on the lens or film.
- Theme switches may gently adjust intensity or hue so both dark and light modes retain appropriate tactile quality.

Mood:
- Grain conveys nostalgia, realism and a hint of roughness, counterbalancing overly smooth, sterile UI.
- Users should feel the screen output resembles something captured or printed, not a perfectly pristine digital gradient.`
  },

  demoHTML,
  customStyles,

  // Full-page preview for Art Magazine Editorial
  fullPageHTML: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GRAIN Magazine - Contemporary Art & Design</title>
</head>
<body>
  <!-- Fixed Navigation -->
  <nav class="grain-nav">
    <div class="nav-container">
      <div class="nav-logo">GRAIN</div>
      <ul class="nav-menu">
        <li><a href="javascript:void(0)">Editorial</a></li>
        <li><a href="javascript:void(0)">Gallery</a></li>
        <li><a href="javascript:void(0)">Archive</a></li>
        <li><a href="javascript:void(0)">About</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="grain-hero">
    <div class="hero-content">
      <p class="hero-label">Issue No. 47 — Spring 2025</p>
      <h1 class="hero-title">The Texture<br>of Time</h1>
      <p class="hero-subtitle">Exploring the intersection of analog nostalgia<br>and digital craftsmanship</p>
      <a href="javascript:void(0)" class="hero-cta">Read the Issue</a>
    </div>
  </header>

  <!-- Featured Article -->
  <section class="grain-featured">
    <div class="featured-container">
      <div class="featured-image grain-medium">
        <div class="image-placeholder">
          <span class="image-label">Featured</span>
        </div>
      </div>
      <div class="featured-text">
        <p class="article-category">Photography</p>
        <h2 class="article-title">Film Grain in the Digital Age</h2>
        <p class="article-excerpt">
          In an era of pixel-perfect clarity, artists are rediscovering the beauty 
          of imperfection. We explore how contemporary photographers use grain texture 
          to add warmth and authenticity to their digital work.
        </p>
        <div class="article-meta">
          <span class="meta-author">By Sarah Chen</span>
          <span class="meta-divider">·</span>
          <span class="meta-date">March 15, 2025</span>
          <span class="meta-divider">·</span>
          <span class="meta-read">8 min read</span>
        </div>
        <a href="javascript:void(0)" class="article-link">Continue Reading →</a>
      </div>
    </div>
  </section>

  <!-- Typography Grid -->
  <section class="grain-typography">
    <div class="typography-container">
      <div class="typography-intro">
        <h2 class="section-title">In This Issue</h2>
        <p class="section-description">Four perspectives on texture, time, and tactile experience</p>
      </div>
      <div class="typography-grid">
        <article class="typo-card grain-fine">
          <span class="card-number">01</span>
          <h3 class="card-title">Analog Revival</h3>
          <p class="card-text">
            How vintage camera enthusiasts are bringing film photography 
            back into mainstream culture
          </p>
        </article>
        <article class="typo-card grain-coarse">
          <span class="card-number">02</span>
          <h3 class="card-title">Digital Grain</h3>
          <p class="card-text">
            Software tools that simulate authentic film textures for 
            modern digital workflows
          </p>
        </article>
        <article class="typo-card grain-fine">
          <span class="card-number">03</span>
          <h3 class="card-title">Print Culture</h3>
          <p class="card-text">
            Independent publishers embracing rough paper stocks and 
            visible printing imperfections
          </p>
        </article>
        <article class="typo-card grain-coarse">
          <span class="card-number">04</span>
          <h3 class="card-title">Texture Theory</h3>
          <p class="card-text">
            Academic perspectives on why imperfect surfaces resonate 
            with contemporary audiences
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Editorial Spread -->
  <section class="grain-editorial">
    <div class="editorial-container">
      <div class="editorial-column">
        <h3 class="editorial-heading">Editor's Note</h3>
        <p class="editorial-body">
          Welcome to our Spring issue, where we dive deep into the paradox of our time: 
          as technology advances toward perfect clarity, we find ourselves increasingly 
          drawn to the imperfect, the grainy, the textured.
        </p>
        <p class="editorial-body">
          This fascination isn't mere nostalgia. It's a longing for authenticity in 
          an age of infinite reproducibility. Grain reminds us that something physical 
          once existed between the lens and the light.
        </p>
        <p class="editorial-caption">
          — Marcus Rivera, Editor-in-Chief
        </p>
      </div>
      <div class="editorial-column">
        <h3 class="editorial-heading">About Texture</h3>
        <p class="editorial-body">
          Texture is not decoration. It's evidence of process, traces of materials 
          interacting with light and chemistry. In photography, grain patterns are 
          unique to each film stock and development method.
        </p>
        <p class="editorial-body">
          Digital artists who add grain aren't faking nostalgia—they're acknowledging 
          that perfection can feel sterile, and that viewers crave visual friction.
        </p>
      </div>
    </div>
  </section>

  <!-- Image Gallery -->
  <section class="grain-gallery">
    <div class="gallery-header">
      <h2 class="section-title">Visual Essay</h2>
      <p class="section-description">Six perspectives on contemporary grain aesthetics</p>
    </div>
    <div class="gallery-grid">
      <div class="gallery-item grain-fine">
        <div class="gallery-placeholder">
          <span class="gallery-label">High ISO</span>
        </div>
      </div>
      <div class="gallery-item grain-medium">
        <div class="gallery-placeholder">
          <span class="gallery-label">Film Scan</span>
        </div>
      </div>
      <div class="gallery-item grain-coarse">
        <div class="gallery-placeholder">
          <span class="gallery-label">Push Process</span>
        </div>
      </div>
      <div class="gallery-item grain-medium">
        <div class="gallery-placeholder">
          <span class="gallery-label">Cross Process</span>
        </div>
      </div>
      <div class="gallery-item grain-fine">
        <div class="gallery-placeholder">
          <span class="gallery-label">Digital Grain</span>
        </div>
      </div>
      <div class="gallery-item grain-coarse">
        <div class="gallery-placeholder">
          <span class="gallery-label">Mixed Media</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Pull Quote -->
  <section class="grain-quote">
    <blockquote class="pull-quote">
      <p class="quote-text">
        "Grain is not noise—<br>it's the visible breath<br>of analog process"
      </p>
      <cite class="quote-author">— Dr. Elena Yamamoto<br>Visual Studies, NYU</cite>
    </blockquote>
  </section>

  <!-- Footer -->
  <footer class="grain-footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3 class="footer-logo">GRAIN</h3>
        <p class="footer-tagline">Contemporary Art & Design Magazine</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Content</h4>
          <ul>
            <li><a href="javascript:void(0)">Editorial</a></li>
            <li><a href="javascript:void(0)">Gallery</a></li>
            <li><a href="javascript:void(0)">Archive</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="javascript:void(0)">Team</a></li>
            <li><a href="javascript:void(0)">Contact</a></li>
            <li><a href="javascript:void(0)">Subscribe</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 GRAIN Magazine. All textures authentic.</p>
    </div>
  </footer>
</body>
</html>`,

  fullPageStyles: `/* ===== CSS Reset & Base ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.6;
  color: #2c3e50;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.7;
}

/* ===== Grain Texture Variants (SVG Filters) ===== */
.grain-fine {
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-fine'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise-fine)' opacity='0.15'/%3E%3C/svg%3E");
}

.grain-medium {
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-medium'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23noise-medium)' opacity='0.18'/%3E%3C/svg%3E");
}

.grain-coarse {
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-coarse'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise-coarse)' opacity='0.2'/%3E%3C/svg%3E");
}

/* ===== Navigation ===== */
.grain-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 236, 210, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #2c3e50;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 48px;
}

.nav-menu a {
  font-size: 16px;
  font-weight: 400;
  color: #555;
}

/* ===== Hero Section ===== */
.grain-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 48px 80px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.grain-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hero-grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23hero-grain)' opacity='0.15'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.hero-label {
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 32px;
}

.hero-title {
  font-size: 72px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #2c3e50;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 20px;
  font-weight: 300;
  line-height: 1.6;
  color: #555;
  margin-bottom: 48px;
}

.hero-cta {
  display: inline-block;
  padding: 16px 48px;
  background: #c44536;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(196, 69, 54, 0.3);
  opacity: 1;
}

/* ===== Featured Article ===== */
.grain-featured {
  padding: 120px 48px;
  background: #ffffff;
}

.featured-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.featured-image {
  aspect-ratio: 4 / 5;
  background: #e0c3fc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0c3fc 0%, #fbc2eb 100%);
}

.image-label {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}

.featured-text {
  padding: 32px 0;
}

.article-category {
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c44536;
  margin-bottom: 16px;
}

.article-title {
  font-size: 42px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #2c3e50;
  margin-bottom: 24px;
}

.article-excerpt {
  font-size: 18px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 24px;
}

.article-meta {
  font-size: 14px;
  color: #999;
  margin-bottom: 32px;
}

.meta-divider {
  margin: 0 8px;
}

.article-link {
  font-size: 16px;
  font-weight: 600;
  color: #c44536;
}

/* ===== Typography Grid ===== */
.grain-typography {
  padding: 120px 48px;
  background: linear-gradient(180deg, #ffffff 0%, #ffecd2 100%);
}

.typography-container {
  max-width: 1200px;
  margin: 0 auto;
}

.typography-intro {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #2c3e50;
  margin-bottom: 16px;
}

.section-description {
  font-size: 18px;
  color: #555;
}

.typography-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.typo-card {
  padding: 48px;
  background: #e0c3fc;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.typo-card:nth-child(even) {
  background: #fbc2eb;
}

.typo-card:hover {
  transform: translateY(-4px);
}

.card-number {
  font-size: 14px;
  font-weight: 700;
  color: rgba(44, 62, 80, 0.4);
  margin-bottom: 16px;
  display: block;
}

.card-title {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.card-text {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
}

/* ===== Editorial Spread ===== */
.grain-editorial {
  padding: 120px 48px;
  background: #ffffff;
}

.editorial-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.editorial-heading {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #c44536;
}

.editorial-body {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 24px;
}

.editorial-caption {
  font-size: 16px;
  font-style: italic;
  color: #999;
  margin-top: 32px;
}

/* ===== Image Gallery ===== */
.grain-gallery {
  padding: 120px 48px;
  background: linear-gradient(180deg, #ffffff 0%, #fcb69f 100%);
}

.gallery-header {
  max-width: 1200px;
  margin: 0 auto 80px;
  text-align: center;
}

.gallery-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.gallery-item {
  aspect-ratio: 1;
  background: #e0c3fc;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(224, 195, 252, 0.6) 0%, rgba(251, 194, 235, 0.6) 100%);
}

.gallery-label {
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}

/* ===== Pull Quote ===== */
.grain-quote {
  padding: 160px 48px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  position: relative;
  overflow: hidden;
}

.grain-quote::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='quote-grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23quote-grain)' opacity='0.2'/%3E%3C/svg%3E");
  animation: grainFloat 12s linear infinite;
  pointer-events: none;
}

@keyframes grainFloat {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-10%, -10%); }
}

.pull-quote {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.quote-text {
  font-size: 48px;
  font-weight: 300;
  line-height: 1.4;
  color: #2c3e50;
  margin-bottom: 32px;
}

.quote-author {
  font-size: 16px;
  font-style: normal;
  color: #555;
  display: block;
}

/* ===== Footer ===== */
.grain-footer {
  padding: 80px 48px 32px;
  background: #ffffff;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-logo {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #2c3e50;
  margin-bottom: 8px;
}

.footer-tagline {
  font-size: 14px;
  color: #999;
}

.footer-links {
  display: flex;
  gap: 80px;
}

.footer-col h4 {
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 8px;
}

.footer-col a {
  font-size: 14px;
  color: #555;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 32px;
  border-top: 1px solid #e5e5e5;
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: #999;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .nav-container { padding: 16px 24px; }
  .nav-menu { gap: 24px; font-size: 14px; }
  .hero-title { font-size: 42px; }
  .hero-subtitle { font-size: 16px; }
  .featured-container { grid-template-columns: 1fr; gap: 48px; }
  .typography-grid { grid-template-columns: 1fr; }
  .editorial-container { grid-template-columns: 1fr; gap: 48px; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-container { flex-direction: column; gap: 48px; }
}`,
};

export default grain;
