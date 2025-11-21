/**
 * Kinetic Typography - FullPage Custom Prompt
 * NEUROTYPE 登陸页专屬的 AI Prompt (針對完整 6 章節页面)
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「NEUROTYPE 动态排版登陆页」界面风格高度接近的 UI。
要求：保持整体布局、动画效果和配色思路基本不变，只允许替换文案、品牌名称和少量细节。输出使用语义化 HTML 结构和类似 TailwindCSS 的原子类。

【使用场景】
- 目标：科技产品发布页、创意工作室官网、音乐平台、数字艺术展览等需要强烈视觉冲击力的场景
- 整体气质：前卫、充满活力、略带赛博朋克风格、高度视觉化的数字体验

【整体布局结构】
1. Hero Section (全屏英雄区)
   - 主标题 NEUROTYPE：9 个字母，每个字母独立动画（弹跳 + 彩虹渐变流动）
   - 副标题：打字机效果 "Next-Gen Typography Engine for Modern Web" + 闪烁光标
   - CTA 按钮："Get Started"，蓝紫渐变背景 (#3b82f6 → #8b5cf6)，hover 放大 1.05x
   - 背景：径向渐变 (rgba(59, 130, 246, 0.1) 中心到透明)

2. Stats Section (数据展示区)
   - 4 个统计卡片，网格布局 (grid auto-fit minmax(250px, 1fr))
   - 每个卡片：数字计数动画 (0 → 目标值，20ms 间隔递增) + 单位 + 标签
   - 卡片样式：半透明渐变背景 + 1px 边框 + hover 上浮 -10px
   - 数字颜色：蓝粉渐变 (#3b82f6 → #ec4899)，-webkit-background-clip: text

3. Demo Section (产品演示区)
   - 标题："Live Typography Engine"，3 个单词分别入场动画 (translateY + rotateX)
   - Demo 容器：蓝粉渐变背景框 + 圆角 20px
   - 动态文字：TYPE / IN / MOTION 三行，每个字符波浪动画 (char-wave 2s)，6 种颜色轮换
   - Feature 标签：4 个标签淡入 (opacity + translateX)，间隔 0.2s

4. Pricing Section (价格方案区)
   - 3 个价格卡片：Basic, Pro (Featured), Enterprise
   - Featured 卡片：顶部 "Popular" 徽章，脉冲动画 (badge-pulse 2s)
   - 价格数字：跳动动画 (price-pulse 2s，scale 1 → 1.1 → 1)
   - Feature 列表：每项滑入动画 (feature-slide-in 0.5s)，延迟递增

5. FAQ Section (常见问题区)
   - 5 个 <details> 手风琴项，点击展开
   - 问题后缀 "+" 图标，展开时旋转 45deg
   - 答案滑下动画 (answer-slide-down 0.3s，opacity + translateY)

6. Footer CTA (底部行动号召)
   - 标题："Start Creating Today"，3 个单词浮动动画 (cta-word-float 3s)，延迟 0.2s
   - Email 输入框 + Subscribe 按钮
   - 社交图标：3 个链接，弹跳动画 (icon-bounce 2s)，hover 放大 1.1x

【色彩与材质规范】
- 背景：纯黑 #000000
- 霓虹彩虹主色：
  - 蓝色 #3b82f6
  - 粉色 #ec4899
  - 黄色 #fbbf24
  - 绿色 #10b981
  - 紫色 #8b5cf6
- 文字：白色 #ffffff，次要文字 rgba(255,255,255,0.7)
- 渐变流动：background-size: 300% 300%，animation: gradient-flow 3s ease infinite

【关键动画实现】
1. Hero 字母弹跳：
   \'\'\'css
   @keyframes hero-bounce {
     0%, 100% { transform: translateY(0) rotate(0deg); }
     25% { transform: translateY(-30px) rotate(-5deg); }
     75% { transform: translateY(-15px) rotate(5deg); }
   }
   .hero-letter {
     animation: hero-bounce 2s ease-in-out infinite, gradient-flow 3s ease infinite;
   }
   \'\'\'

2. 数字计数器 (JavaScript):
   \'\'\'javascript
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
   \'\'\'

3. 字符波浪动画：
   \'\'\'css
   @keyframes char-wave {
     0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
     25% { transform: translateY(-20px) rotate(-10deg) scale(1.2); }
     50% { transform: translateY(0) rotate(0deg) scale(1); }
     75% { transform: translateY(-10px) rotate(10deg) scale(1.1); }
   }
   .demo-char:nth-child(1) { animation-delay: 0s; color: #3b82f6; }
   .demo-char:nth-child(2) { animation-delay: 0.1s; color: #ec4899; }
   .demo-char:nth-child(3) { animation-delay: 0.2s; color: #fbbf24; }
   \'\'\'

【交互与动效】
- 卡片 hover：translateY(-10px) + 边框发光 (border-color: rgba(59, 130, 246, 0.5) + box-shadow)
- 按钮 hover：scale(1.05) + box-shadow: 0 0 30px rgba(59, 130, 246, 0.5)
- 打字机光标：blink 0.75s step-end infinite
- FAQ 展开：.faq-item[open] .faq-question::after { transform: rotate(45deg); }
- 响应式：@media (max-width: 768px) 时卡片改为单列

【输出要求】
- 使用语义化 HTML (section/header/main)
- 所有动画使用 transform + opacity (GPU 加速)
- 支持 @media (prefers-reduced-motion: reduce) 可访问性
- clamp() 实现响应式字体大小 (例如：font-size: clamp(3rem, 10vw, 8rem))
- 数字计数器必须包含 data-target 属性和 JavaScript 实现',

  'en-US': 'You are now a senior UI designer and front-end engineer. Please generate a UI that closely matches the current "NEUROTYPE Kinetic Typography Landing Page."
Requirements: Maintain overall layout, animation effects, and color scheme unchanged. Only replace copy, brand names, and minor details. Output using semantic HTML structure and TailwindCSS-like atomic classes.

【Use Case】
- Goal: Tech product launches, creative studio websites, music platforms, digital art exhibitions requiring strong visual impact
- Overall Quality: Avant-garde, energetic, slightly cyberpunk-styled, highly visualized digital experience

【Layout Structure】
1. Hero Section (full-screen)
   - Main title NEUROTYPE: 9 letters, each with independent animation (bounce + rainbow gradient flow)
   - Subtitle: Typewriter effect "Next-Gen Typography Engine for Modern Web" + blinking cursor
   - CTA button: "Get Started", blue-purple gradient (#3b82f6 → #8b5cf6), hover scale 1.05x
   - Background: Radial gradient (rgba(59, 130, 246, 0.1) center to transparent)

2. Stats Section
   - 4 stat cards, grid layout (auto-fit minmax(250px, 1fr))
   - Each card: Number counter animation (0 → target, 20ms interval) + unit + label
   - Card style: Semi-transparent gradient background + 1px border + hover float -10px
   - Number color: Blue-pink gradient (#3b82f6 → #ec4899), -webkit-background-clip: text

3. Demo Section
   - Title: "Live Typography Engine", 3 words with entrance animation (translateY + rotateX)
   - Demo container: Blue-pink gradient background box + 20px border-radius
   - Dynamic text: TYPE / IN / MOTION 3 lines, char wave animation (2s), 6 color rotation
   - Feature tags: 4 tags fade in (opacity + translateX), 0.2s interval

4. Pricing Section
   - 3 price cards: Basic, Pro (Featured), Enterprise
   - Featured card: Top "Popular" badge, pulse animation (2s)
   - Price numbers: Bounce animation (scale 1 → 1.1 → 1)
   - Feature list: Slide-in animation (0.5s), incremental delay

5. FAQ Section
   - 5 <details> accordion items, click to expand
   - Question "+" icon, rotate 45deg when open
   - Answer slide-down animation (0.3s, opacity + translateY)

6. Footer CTA
   - Title: "Start Creating Today", 3 words floating animation (3s), 0.2s delay
   - Email input + Subscribe button
   - Social icons: 3 links, bounce animation (2s), hover scale 1.1x

【Color & Material Specs】
- Background: Pure black #000000
- Neon rainbow colors:
  - Blue #3b82f6
  - Pink #ec4899
  - Yellow #fbbf24
  - Green #10b981
  - Purple #8b5cf6
- Text: White #ffffff, secondary rgba(255,255,255,0.7)
- Gradient flow: background-size: 300% 300%, animation: gradient-flow 3s ease infinite

【Key Animation Implementations】
1. Hero letter bounce:
   \'\'\'css
   @keyframes hero-bounce {
     0%, 100% { transform: translateY(0) rotate(0deg); }
     25% { transform: translateY(-30px) rotate(-5deg); }
     75% { transform: translateY(-15px) rotate(5deg); }
   }
   .hero-letter {
     animation: hero-bounce 2s ease-in-out infinite, gradient-flow 3s ease infinite;
   }
   \'\'\'

2. Number counter (JavaScript):
   \'\'\'javascript
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
   \'\'\'

3. Character wave animation:
   \'\'\'css
   @keyframes char-wave {
     0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
     25% { transform: translateY(-20px) rotate(-10deg) scale(1.2); }
     50% { transform: translateY(0) rotate(0deg) scale(1); }
     75% { transform: translateY(-10px) rotate(10deg) scale(1.1); }
   }
   .demo-char:nth-child(1) { animation-delay: 0s; color: #3b82f6; }
   .demo-char:nth-child(2) { animation-delay: 0.1s; color: #ec4899; }
   .demo-char:nth-child(3) { animation-delay: 0.2s; color: #fbbf24; }
   \'\'\'

【Interactions & Effects】
- Card hover: translateY(-10px) + border glow (border-color: rgba(59, 130, 246, 0.5) + box-shadow)
- Button hover: scale(1.05) + box-shadow: 0 0 30px rgba(59, 130, 246, 0.5)
- Typewriter cursor: blink 0.75s step-end infinite
- FAQ expand: .faq-item[open] .faq-question::after { transform: rotate(45deg); }
- Responsive: Single column cards at @media (max-width: 768px)

【Output Requirements】
- Semantic HTML (section/header/main)
- All animations use transform + opacity (GPU acceleration)
- Support @media (prefers-reduced-motion: reduce) for accessibility
- Responsive font sizes with clamp() (e.g., font-size: clamp(3rem, 10vw, 8rem))
- Number counters must include data-target attribute and JavaScript implementation`
};
