// Kinetic Typography - Dynamic Text Animation Style
// 動態文字排版 - 運動文字動画風格

export const kineticTypographyTemplates = [
  {
    id: 'kineticTypography',
    title: 'styles.typography.kinetic.kineticTypography.title',
    description: 'styles.typography.kinetic.kineticTypography.description',

    // 卡片演示 HTML
    demoHTML: `
      <div class="w-full h-full flex flex-col items-center justify-center gap-6 bg-black overflow-hidden">
        <div class="kinetic-word-container">
          <span class="kinetic-word text-6xl font-black text-white">TYPE</span>
        </div>
        <div class="flex gap-4">
          <div class="kinetic-letter text-4xl font-bold text-blue-400">K</div>
          <div class="kinetic-letter text-4xl font-bold text-pink-400" style="animation-delay: 0.1s;">I</div>
          <div class="kinetic-letter text-4xl font-bold text-yellow-400" style="animation-delay: 0.2s;">N</div>
          <div class="kinetic-letter text-4xl font-bold text-green-400" style="animation-delay: 0.3s;">E</div>
          <div class="kinetic-letter text-4xl font-bold text-purple-400" style="animation-delay: 0.4s;">T</div>
          <div class="kinetic-letter text-4xl font-bold text-orange-400" style="animation-delay: 0.5s;">I</div>
          <div class="kinetic-letter text-4xl font-bold text-cyan-400" style="animation-delay: 0.6s;">C</div>
        </div>
      </div>
    `,

    // 自定義樣式
    customStyles: `
      .kinetic-word {
        display: inline-block;
        animation: kinetic-pulse 2s ease-in-out infinite;
      }

      @keyframes kinetic-pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.2);
          opacity: 0.8;
          letter-spacing: 0.2em;
        }
      }

      .kinetic-letter {
        display: inline-block;
        animation: kinetic-bounce 1.5s ease-in-out infinite;
      }

      @keyframes kinetic-bounce {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) rotate(-10deg);
        }
        75% {
          transform: translateY(-10px) rotate(10deg);
        }
      }

      .kinetic-word-container {
        position: relative;
      }

      .kinetic-word-container::before {
        content: 'TYPE';
        position: absolute;
        top: 0;
        left: 0;
        color: rgba(255, 255, 255, 0.1);
        font-size: 6rem;
        font-weight: 900;
        animation: kinetic-shadow 2s ease-in-out infinite;
      }

      @keyframes kinetic-shadow {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(10px, 10px) scale(1.1);
        }
      }
    `,

    demoBoxClass: 'bg-black',
    colorScheme: 'styles.typography.kinetic.kineticTypography.colorScheme',

    // ✨ 模板級 CustomPrompt（用於高精度復刻當前動態排版卡片）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Kinetic Typography Demo」界面风格高度接近的动效文字模块。
要求：保持黑色背景、中心大号「TYPE」文字、下方彩色跳动字母和霓虹色彩风格基本不变，只允许替换文字内容与颜色细节。输出使用语义化 HTML 和 TailwindCSS 风格原子类（或等价方案）。

【使用场景】
- 场景：Landing 页 Hero 区大标题、品牌口号展示、活动宣传横幅。
- 用户：面向设计、科技、娱乐等偏创意类产品访客。
- 目标：用动态文字立即吸引视线，传达产品的「动感 / 前卫 / 高科技」气质。

【布局结构】
1. 外层容器
   - 全宽高区域，背景纯黑（#000）或极深灰，使用 flex 将内容置中。
   - 内部垂直排列两个区块：上方主字、下方逐字动画行。
2. 上方主字（TYPE）
   - 使用超大字重（font-black）、大字号（例如 text-6xl / text-7xl）。
   - 文字居中，单词整体有节奏性缩放和微调 letter-spacing。
3. 下方彩色字母行
   - 由多个单个字母组成的横向 flex 容器，每个字母是一块彩色文字。
   - 每个字母有独立动画延迟，形成依次跳动效果。

【色彩与动效】
1. 色彩
   - 背景：#000000 或 #020617。
   - 文字：主字可用纯白或渐变填充，下方字母使用高饱和度纯色（蓝、粉、黄、绿、紫等）。
2. 动效
   - 主字：通过 scale + opacity 的 keyframe 产生「呼吸 / 脉冲」效果。
   - 下方字母：通过 translateY + rotate 的组合，形成上下弹跳与轻微旋转。
   - 每个字母使用不同 animation-delay，形成波浪式节奏。

【输出要求】
- 使用语义化 HTML：最外层 section 或 div 包裹，内含两个子容器（主字 / 字母行）。
- 使用 Tailwind 原子类控制排版（flex / items-center / justify-center / gap 等）。
- 生成的动效模块在「黑背景 + 大字动效 + 彩色字母波浪」这三点上应与当前 Kinetic Demo 高度接近。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a kinetic typography module that looks very close to the current "Kinetic Typography Demo".
Requirements: Keep the black background, central large "TYPE" word, colorful bouncing letters below, and neon color style. Only change the text content and colors as needed. Output semantic HTML and Tailwind-style utility classes (or an equivalent utility-class system).

[Use Cases]
- Hero headline on a landing page.
- Brand slogan / tagline section.
- Event promotion banner or creative highlight block.

[Layout]
1. Outer container
   - Full-width, full-height area with pure black or very dark gray background.
   - Use flex to center content both horizontally and vertically.
   - Inside, stack two blocks vertically: main word on top, animated letters row below.
2. Main word ("TYPE")
   - Very large font size (e.g. text-6xl / text-7xl) with heavy weight (font-black).
   - Centered text, animated with a breathing scale + slight letter-spacing change.
3. Colored letters row
   - A horizontal flex row of single-letter spans.
   - Each letter has its own color and animation delay to create a wave pattern.

[Color & Motion]
1. Color
   - Background: #000000 or #020617.
   - Main word: solid white or gradient fill.
   - Letters: high-saturation pure colors (blue, pink, yellow, green, purple, etc.).
2. Motion
   - Main word: keyframe using scale + opacity for a pulse/breathing effect.
   - Letters: keyframe using translateY + rotate for bouncing / tilting motion.
   - Use staggered animation-delay across letters to create a wave.

[Output Requirements]
- Use semantic HTML: a top-level section or div with two child containers.
- Use Tailwind-like utility classes to control layout (flex, items-center, justify-center, gap, etc.).
- The resulting module should clearly match the current Kinetic Demo in having a black background, a large animated word, and a row of colorful bouncing letters.`,
    },

    // ✨ 新增：模板級 Style Prompt
    stylePrompt: {
      'zh-CN': `### 動態文字排版（Kinetic Typography）核心實現要點

**设計理念**
通過文字的運動、变形和颜色变化創造視覺衝擊力，適用於产品落地页、創意展示和動態內容。

**核心動画實現**

1. **文字脈衝效果**（最常用）
   \`\`\`css
   @keyframes text-pulse {
     0%, 100% {
       transform: scale(1);
       opacity: 1;
     }
     50% {
       transform: scale(1.1);
       opacity: 0.8;
       letter-spacing: 0.05em; /* 可選：字間距变化 */
     }
   }

   .pulse-text {
     display: inline-block;
     animation: text-pulse 2s ease-in-out infinite;
   }
   \`\`\`

2. **文字彈跳效果**
   \`\`\`css
   @keyframes char-bounce {
     0%, 100% { transform: translateY(0) rotate(0deg); }
     25% { transform: translateY(-20px) rotate(-10deg); }
     75% { transform: translateY(-10px) rotate(10deg); }
   }

   .bounce-char {
     display: inline-block;
     animation: char-bounce 1.5s ease-in-out infinite;
   }

   /* 給每個字母添加延遲 */
   .bounce-char:nth-child(1) { animation-delay: 0s; }
   .bounce-char:nth-child(2) { animation-delay: 0.1s; }
   .bounce-char:nth-child(3) { animation-delay: 0.2s; }
   \`\`\`

3. **霓虹色彩漸变**（核心特徵）
   \`\`\`css
   .neon-text {
     font-size: 4rem;
     font-weight: 900;
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     background-size: 200% 200%;
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
     animation: gradient-flow 3s ease infinite;
   }

   @keyframes gradient-flow {
     0%, 100% { background-position: 0% 50%; }
     50% { background-position: 100% 50%; }
   }
   \`\`\`

4. **多层文字阴影（發光效果）**
   \`\`\`css
   .glow-text {
     color: #fff;
     text-shadow:
       0 0 10px rgba(102, 126, 234, 0.8),
       0 0 20px rgba(102, 126, 234, 0.6),
       0 0 40px rgba(102, 126, 234, 0.4),
       0 0 80px rgba(102, 126, 234, 0.2);
     animation: glow-pulse 2s ease-in-out infinite;
   }

   @keyframes glow-pulse {
     0%, 100% {
       text-shadow:
         0 0 10px rgba(102, 126, 234, 0.8),
         0 0 20px rgba(102, 126, 234, 0.6);
     }
     50% {
       text-shadow:
         0 0 20px rgba(102, 126, 234, 1),
         0 0 40px rgba(102, 126, 234, 0.8),
         0 0 80px rgba(102, 126, 234, 0.6);
     }
   }
   \`\`\`

**配色方案**

核心霓虹漸变組合：
- 主漸变：\`linear-gradient(135deg, #667eea 0%, #764ba2 100%)\` （藍紫漸变）
- 彩虹模式：#3b82f6（藍）、#ec4899（粉）、#fbbf24（黃）、#10b981（綠）、#8b5cf6（紫）

背景与對比：
- 深色背景：#000000 或 #0f0f0f
- 文字高對比：#ffffff（純白）

**TailwindCSS 實現**

\`\`\`html
<!-- 主标題（漸变+動画） -->
<h1 class="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
  DYNAMIC
</h1>

<!-- 彩色字母（分別動画） -->
<div class="flex gap-2">
  <span class="text-5xl font-bold text-blue-400 animate-bounce">K</span>
  <span class="text-5xl font-bold text-pink-400 animate-bounce [animation-delay:100ms]">I</span>
  <span class="text-5xl font-bold text-yellow-400 animate-bounce [animation-delay:200ms]">N</span>
  <span class="text-5xl font-bold text-green-400 animate-bounce [animation-delay:300ms]">E</span>
  <span class="text-5xl font-bold text-purple-400 animate-bounce [animation-delay:400ms]">T</span>
  <span class="text-5xl font-bold text-cyan-400 animate-bounce [animation-delay:500ms]">I</span>
  <span class="text-5xl font-bold text-orange-400 animate-bounce [animation-delay:600ms]">C</span>
</div>

<!-- 發光按鈕 -->
<button class="px-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:scale-105 transition-all">
  Get Started
</button>
\`\`\`

**性能优化建議**

1. 使用 \`will-change: transform;\` 提示瀏覽器优化動画元素
2. 避免同時動画過多文字（建議 ≤ 20 個字符）
3. 优先使用 \`transform\` 和 \`opacity\`（GPU 加速）
4. 避免頻繁改变 \`text-shadow\`（消耗性能）

**無障礙性（Accessibility）**

\`\`\`css
/* 支持減少動画偏好 */
@media (prefers-reduced-motion: reduce) {
  .kinetic-text,
  .bounce-char,
  .glow-text {
    animation: none !important;
    transform: none !important;
  }
}
\`\`\`

**使用場景**
- 产品落地页的主标題
- 創意作品集展示
- 音樂/娛樂网站
- 科技公司品牌页
- 活動宣傳页面
`,

      'en-US': `### Kinetic Typography Core Implementation Guide

**Design Philosophy**
Create visual impact through text motion, deformation, and color changes. Ideal for product landing pages, creative showcases, and dynamic content.

**Core Animation Implementations**

1. **Text Pulse Effect** (Most Common)
   \`\`\`css
   @keyframes text-pulse {
     0%, 100% {
       transform: scale(1);
       opacity: 1;
     }
     50% {
       transform: scale(1.1);
       opacity: 0.8;
       letter-spacing: 0.05em; /* Optional: letter-spacing change */
     }
   }

   .pulse-text {
     display: inline-block;
     animation: text-pulse 2s ease-in-out infinite;
   }
   \`\`\`

2. **Character Bounce Effect**
   \`\`\`css
   @keyframes char-bounce {
     0%, 100% { transform: translateY(0) rotate(0deg); }
     25% { transform: translateY(-20px) rotate(-10deg); }
     75% { transform: translateY(-10px) rotate(10deg); }
   }

   .bounce-char {
     display: inline-block;
     animation: char-bounce 1.5s ease-in-out infinite;
   }

   /* Add delay to each letter */
   .bounce-char:nth-child(1) { animation-delay: 0s; }
   .bounce-char:nth-child(2) { animation-delay: 0.1s; }
   .bounce-char:nth-child(3) { animation-delay: 0.2s; }
   \`\`\`

3. **Neon Color Gradient** (Core Feature)
   \`\`\`css
   .neon-text {
     font-size: 4rem;
     font-weight: 900;
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     background-size: 200% 200%;
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
     animation: gradient-flow 3s ease infinite;
   }

   @keyframes gradient-flow {
     0%, 100% { background-position: 0% 50%; }
     50% { background-position: 100% 50%; }
   }
   \`\`\`

4. **Multi-layer Text Shadow (Glow Effect)**
   \`\`\`css
   .glow-text {
     color: #fff;
     text-shadow:
       0 0 10px rgba(102, 126, 234, 0.8),
       0 0 20px rgba(102, 126, 234, 0.6),
       0 0 40px rgba(102, 126, 234, 0.4),
       0 0 80px rgba(102, 126, 234, 0.2);
     animation: glow-pulse 2s ease-in-out infinite;
   }

   @keyframes glow-pulse {
     0%, 100% {
       text-shadow:
         0 0 10px rgba(102, 126, 234, 0.8),
         0 0 20px rgba(102, 126, 234, 0.6);
     }
     50% {
       text-shadow:
         0 0 20px rgba(102, 126, 234, 1),
         0 0 40px rgba(102, 126, 234, 0.8),
         0 0 80px rgba(102, 126, 234, 0.6);
     }
   }
   \`\`\`

**Color Scheme**

Core neon gradient combinations:
- Primary gradient: \`linear-gradient(135deg, #667eea 0%, #764ba2 100%)\` (Blue-purple)
- Rainbow mode: #3b82f6 (Blue), #ec4899 (Pink), #fbbf24 (Yellow), #10b981 (Green), #8b5cf6 (Purple)

Background & Contrast:
- Dark backgrounds: #000000 or #0f0f0f
- High contrast text: #ffffff (Pure white)

**TailwindCSS Implementation**

\`\`\`html
<!-- Main heading (gradient + animation) -->
<h1 class="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
  DYNAMIC
</h1>

<!-- Colored letters (individual animation) -->
<div class="flex gap-2">
  <span class="text-5xl font-bold text-blue-400 animate-bounce">K</span>
  <span class="text-5xl font-bold text-pink-400 animate-bounce [animation-delay:100ms]">I</span>
  <span class="text-5xl font-bold text-yellow-400 animate-bounce [animation-delay:200ms]">N</span>
  <span class="text-5xl font-bold text-green-400 animate-bounce [animation-delay:300ms]">E</span>
  <span class="text-5xl font-bold text-purple-400 animate-bounce [animation-delay:400ms]">T</span>
  <span class="text-5xl font-bold text-cyan-400 animate-bounce [animation-delay:500ms]">I</span>
  <span class="text-5xl font-bold text-orange-400 animate-bounce [animation-delay:600ms]">C</span>
</div>

<!-- Glowing button -->
<button class="px-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:scale-105 transition-all">
  Get Started
</button>
\`\`\`

**Performance Optimization**

1. Use \`will-change: transform;\` to hint browser about animated elements
2. Avoid animating too many characters simultaneously (recommended ≤ 20 characters)
3. Prefer \`transform\` and \`opacity\` (GPU-accelerated)
4. Avoid frequent \`text-shadow\` changes (performance-intensive)

**Accessibility**

\`\`\`css
/* Support reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .kinetic-text,
  .bounce-char,
  .glow-text {
    animation: none !important;
    transform: none !important;
  }
}
\`\`\`

**Use Cases**
- Product landing page hero sections
- Creative portfolio showcases
- Music/entertainment websites
- Tech company brand pages
- Event promotion pages
`
    },

    // ✨ 新增：預覽数組系統
    previews: [
      {
        id: 'kinetic-fullpage',
        name: {
          'zh-CN': '完整页面',
          'en-US': 'Full Page'
        },
        type: 'fullPage',
        html: `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-title-wrapper">
          <h1 class="hero-title">
            <span class="hero-letter" style="animation-delay: 0s;">N</span><span class="hero-letter" style="animation-delay: 0.1s;">E</span><span class="hero-letter" style="animation-delay: 0.2s;">U</span><span class="hero-letter" style="animation-delay: 0.3s;">R</span><span class="hero-letter" style="animation-delay: 0.4s;">O</span><span class="hero-letter" style="animation-delay: 0.5s;">T</span><span class="hero-letter" style="animation-delay: 0.6s;">Y</span><span class="hero-letter" style="animation-delay: 0.7s;">P</span><span class="hero-letter" style="animation-delay: 0.8s;">E</span>
          </h1>
        </div>
        <p class="hero-subtitle">
          <span class="typewriter">Next-Gen Typography Engine for Modern Web</span>
          <span class="cursor">|</span>
        </p>
        <button class="cta-button">
          <span class="cta-text">Get Started</span>
        </button>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="stat-card">
          <div class="stat-number"><span class="count-up" data-target="99">0</span><span class="stat-unit">%</span></div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-card">
          <div class="stat-number"><span class="count-up" data-target="50">0</span><span class="stat-unit">K+</span></div>
          <div class="stat-label">Active Users</div>
        </div>
        <div class="stat-card">
          <div class="stat-number"><span class="count-up" data-target="12">0</span><span class="stat-unit">ms</span></div>
          <div class="stat-label">Render Time</div>
        </div>
        <div class="stat-card">
          <div class="stat-number"><span class="count-up" data-target="100">0</span><span class="stat-unit">+</span></div>
          <div class="stat-label">Animations</div>
        </div>
      </section>

      <!-- Product Demo Section -->
      <section class="demo-section">
        <h2 class="section-title">
          <span class="title-word" style="animation-delay: 0s;">Live</span>
          <span class="title-word" style="animation-delay: 0.2s;">Typography</span>
          <span class="title-word" style="animation-delay: 0.4s;">Engine</span>
        </h2>
        <div class="demo-container">
          <div class="demo-box">
            <div class="demo-text-line"><span class="demo-char">T</span><span class="demo-char">Y</span><span class="demo-char">P</span><span class="demo-char">E</span></div>
            <div class="demo-text-line"><span class="demo-char">I</span><span class="demo-char">N</span></div>
            <div class="demo-text-line"><span class="demo-char">M</span><span class="demo-char">O</span><span class="demo-char">T</span><span class="demo-char">I</span><span class="demo-char">O</span><span class="demo-char">N</span></div>
          </div>
          <div class="feature-tags">
            <div class="feature-tag" style="animation-delay: 0s;">Real-time Animation</div>
            <div class="feature-tag" style="animation-delay: 0.2s;">GPU Accelerated</div>
            <div class="feature-tag" style="animation-delay: 0.4s;">60 FPS Smooth</div>
            <div class="feature-tag" style="animation-delay: 0.6s;">Responsive Design</div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing-section">
        <h2 class="section-title">
          <span class="title-word">Choose</span>
          <span class="title-word">Your</span>
          <span class="title-word">Plan</span>
        </h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3 class="pricing-tier">Basic</h3>
            <div class="pricing-amount">
              <span class="currency">$</span>
              <span class="price-number pulse-price">29</span>
              <span class="period">/mo</span>
            </div>
            <ul class="feature-list">
              <li class="feature-item" style="animation-delay: 0s;">✓ 50 Animations</li>
              <li class="feature-item" style="animation-delay: 0.1s;">✓ Basic Support</li>
              <li class="feature-item" style="animation-delay: 0.2s;">✓ 5 Projects</li>
            </ul>
          </div>
          <div class="pricing-card featured">
            <div class="popular-badge">Popular</div>
            <h3 class="pricing-tier">Pro</h3>
            <div class="pricing-amount">
              <span class="currency">$</span>
              <span class="price-number pulse-price">99</span>
              <span class="period">/mo</span>
            </div>
            <ul class="feature-list">
              <li class="feature-item" style="animation-delay: 0s;">✓ Unlimited Animations</li>
              <li class="feature-item" style="animation-delay: 0.1s;">✓ Priority Support</li>
              <li class="feature-item" style="animation-delay: 0.2s;">✓ Unlimited Projects</li>
              <li class="feature-item" style="animation-delay: 0.3s;">✓ Advanced Effects</li>
            </ul>
          </div>
          <div class="pricing-card">
            <h3 class="pricing-tier">Enterprise</h3>
            <div class="pricing-amount">
              <span class="price-number pulse-price">Custom</span>
            </div>
            <ul class="feature-list">
              <li class="feature-item" style="animation-delay: 0s;">✓ Everything in Pro</li>
              <li class="feature-item" style="animation-delay: 0.1s;">✓ Custom Integration</li>
              <li class="feature-item" style="animation-delay: 0.2s;">✓ Dedicated Support</li>
              <li class="feature-item" style="animation-delay: 0.3s;">✓ SLA Guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <h2 class="section-title">
          <span class="title-word">Frequently</span>
          <span class="title-word">Asked</span>
          <span class="title-word">Questions</span>
        </h2>
        <div class="faq-list">
          <details class="faq-item">
            <summary class="faq-question">What is Kinetic Typography?</summary>
            <p class="faq-answer">Kinetic typography is a motion graphics technique that uses moving text to capture attention and express ideas.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-question">How does it improve user engagement?</summary>
            <p class="faq-answer">Animated text creates visual interest, guides attention, and makes content more memorable and engaging.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-question">Is it mobile-friendly?</summary>
            <p class="faq-answer">Yes, all animations are optimized for mobile devices with reduced motion support for accessibility.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-question">What browsers are supported?</summary>
            <p class="faq-answer">All modern browsers including Chrome, Firefox, Safari, and Edge with full CSS animation support.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-question">Can I customize the animations?</summary>
            <p class="faq-answer">Absolutely! Our API provides full control over timing, easing, colors, and motion paths.</p>
          </details>
        </div>
      </section>

      <!-- Footer CTA -->
      <section class="footer-cta">
        <h2 class="cta-title">
          <span class="cta-word">Start</span>
          <span class="cta-word">Creating</span>
          <span class="cta-word">Today</span>
        </h2>
        <div class="email-signup">
          <input type="email" class="email-input" placeholder="Enter your email">
          <button class="submit-button">Subscribe</button>
        </div>
        <div class="social-icons">
          <a href="javascript:void(0)" class="social-icon">Twitter</a>
          <a href="javascript:void(0)" class="social-icon">GitHub</a>
          <a href="javascript:void(0)" class="social-icon">Discord</a>
        </div>
      </section>

      <!-- JavaScript for Counter Animation -->
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const counters = document.querySelectorAll('.count-up');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, 20);
          });
        });
      </script>
        `,
        styles: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: #000;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        overflow-x: hidden;
      }

      /* Hero Section */
      .hero-section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        position: relative;
        background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
      }

      .hero-title {
        font-size: clamp(3rem, 10vw, 8rem);
        font-weight: 900;
        margin-bottom: 2rem;
        display: flex;
        gap: 0.2em;
      }

      .hero-letter {
        display: inline-block;
        animation: hero-bounce 2s ease-in-out infinite;
        background: linear-gradient(45deg, #3b82f6, #ec4899, #fbbf24, #10b981);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: hero-bounce 2s ease-in-out infinite, gradient-flow 3s ease infinite;
      }

      @keyframes hero-bounce {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-30px) rotate(-5deg); }
        75% { transform: translateY(-15px) rotate(5deg); }
      }

      @keyframes gradient-flow {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      .hero-subtitle {
        font-size: clamp(1.2rem, 3vw, 2rem);
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 3rem;
      }

      .typewriter {
        display: inline-block;
      }

      .cursor {
        display: inline-block;
        animation: blink 1s step-end infinite;
        color: #3b82f6;
        margin-left: 0.1em;
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      .cta-button {
        padding: 1.5rem 3rem;
        font-size: 1.5rem;
        font-weight: bold;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        border: none;
        border-radius: 12px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .cta-button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
      }

      .cta-button:hover .cta-text {
        animation: text-jump 0.5s ease;
      }

      @keyframes text-jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      /* Stats Section */
      .stats-section {
        padding: 5rem 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .stat-card {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .stat-card:hover {
        transform: translateY(-10px);
        border-color: rgba(59, 130, 246, 0.5);
        box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
      }

      .stat-number {
        font-size: 3.5rem;
        font-weight: 900;
        background: linear-gradient(135deg, #3b82f6, #ec4899);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
      }

      .stat-unit {
        font-size: 2rem;
        opacity: 0.7;
      }

      .stat-label {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      /* Demo Section */
      .demo-section {
        padding: 5rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .section-title {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 900;
        text-align: center;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .title-word {
        display: inline-block;
        animation: word-appear 1s ease-out both;
      }

      @keyframes word-appear {
        from {
          opacity: 0;
          transform: translateY(30px) rotateX(-90deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }
      }

      .demo-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
      }

      .demo-box {
        width: 100%;
        max-width: 600px;
        padding: 3rem;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2));
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }

      .demo-text-line {
        display: flex;
        gap: 0.5rem;
      }

      .demo-char {
        font-size: 3rem;
        font-weight: 900;
        display: inline-block;
        animation: char-wave 2s ease-in-out infinite;
      }

      .demo-char:nth-child(1) { animation-delay: 0s; color: #3b82f6; }
      .demo-char:nth-child(2) { animation-delay: 0.1s; color: #ec4899; }
      .demo-char:nth-child(3) { animation-delay: 0.2s; color: #fbbf24; }
      .demo-char:nth-child(4) { animation-delay: 0.3s; color: #10b981; }
      .demo-char:nth-child(5) { animation-delay: 0.4s; color: #8b5cf6; }
      .demo-char:nth-child(6) { animation-delay: 0.5s; color: #f59e0b; }

      @keyframes char-wave {
        0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
        25% { transform: translateY(-20px) rotate(-10deg) scale(1.2); }
        50% { transform: translateY(0) rotate(0deg) scale(1); }
        75% { transform: translateY(-10px) rotate(10deg) scale(1.1); }
      }

      .feature-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }

      .feature-tag {
        padding: 0.8rem 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        font-size: 1rem;
        animation: tag-fade-in 0.5s ease-out both;
      }

      @keyframes tag-fade-in {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Pricing Section */
      .pricing-section {
        padding: 5rem 2rem;
        max-width: 1400px;
        margin: 0 auto;
      }

      .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .pricing-card {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2.5rem;
        position: relative;
        transition: all 0.3s ease;
      }

      .pricing-card:hover {
        transform: translateY(-10px);
        border-color: rgba(59, 130, 246, 0.5);
        box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
      }

      .pricing-card.featured {
        border-color: #3b82f6;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
      }

      .popular-badge {
        position: absolute;
        top: -15px;
        right: 20px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        padding: 0.5rem 1.5rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: bold;
        animation: badge-pulse 2s ease-in-out infinite;
      }

      @keyframes badge-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }

      .pricing-tier {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-align: center;
      }

      .pricing-amount {
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
        margin: 2rem 0;
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 0.2rem;
      }

      .pulse-price {
        animation: price-pulse 2s ease-in-out infinite;
        background: linear-gradient(135deg, #3b82f6, #ec4899);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @keyframes price-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }

      .currency, .period {
        font-size: 1.5rem;
        opacity: 0.6;
      }

      .feature-list {
        list-style: none;
        margin-top: 2rem;
      }

      .feature-item {
        padding: 0.8rem 0;
        font-size: 1.1rem;
        animation: feature-slide-in 0.5s ease-out both;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      @keyframes feature-slide-in {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* FAQ Section */
      .faq-section {
        padding: 5rem 2rem;
        max-width: 900px;
        margin: 0 auto;
      }

      .faq-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 3rem;
      }

      .faq-item {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .faq-item:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(59, 130, 246, 0.5);
      }

      .faq-question {
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .faq-question::after {
        content: '+';
        font-size: 2rem;
        transition: transform 0.3s ease;
      }

      .faq-item[open] .faq-question::after {
        transform: rotate(45deg);
      }

      .faq-answer {
        margin-top: 1rem;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.6;
        animation: answer-slide-down 0.3s ease-out;
      }

      @keyframes answer-slide-down {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Footer CTA */
      .footer-cta {
        padding: 5rem 2rem;
        text-align: center;
        background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.1));
      }

      .cta-title {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        font-weight: 900;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .cta-word {
        display: inline-block;
        animation: cta-word-float 3s ease-in-out infinite;
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      }

      .cta-word:nth-child(1) { animation-delay: 0s; }
      .cta-word:nth-child(2) { animation-delay: 0.2s; }
      .cta-word:nth-child(3) { animation-delay: 0.4s; }

      @keyframes cta-word-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .email-signup {
        display: flex;
        gap: 1rem;
        max-width: 600px;
        margin: 0 auto 3rem;
        flex-wrap: wrap;
        justify-content: center;
      }

      .email-input {
        flex: 1;
        min-width: 250px;
        padding: 1.2rem 1.5rem;
        font-size: 1.1rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        color: white;
        transition: all 0.3s ease;
      }

      .email-input:focus {
        outline: none;
        border-color: #3b82f6;
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.02);
      }

      .email-input::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      .submit-button {
        padding: 1.2rem 2.5rem;
        font-size: 1.1rem;
        font-weight: bold;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .submit-button:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
      }

      .social-icons {
        display: flex;
        gap: 2rem;
        justify-content: center;
        margin-top: 3rem;
      }

      .social-icon {
        padding: 1rem 2rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        animation: icon-bounce 2s ease-in-out infinite;
      }

      .social-icon:nth-child(1) { animation-delay: 0s; }
      .social-icon:nth-child(2) { animation-delay: 0.2s; }
      .social-icon:nth-child(3) { animation-delay: 0.4s; }

      @keyframes icon-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .social-icon:hover {
        background: rgba(59, 130, 246, 0.3);
        border-color: #3b82f6;
        transform: scale(1.1) translateY(-5px);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 3rem;
        }

        .stats-section {
          grid-template-columns: 1fr;
        }

        .pricing-grid {
          grid-template-columns: 1fr;
        }

        .section-title {
          font-size: 2rem;
        }

        .email-signup {
          flex-direction: column;
        }

        .social-icons {
          flex-direction: column;
          align-items: center;
        }
      }

      /* Accessibility: Reduced Motion */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
        `
      }
    ]
  }
];

export default kineticTypographyTemplates;
