/**
 * Scroll Narrative - FullPage Custom Prompt
 * 滾動敘事主页面专屬的 AI Prompt (針對完整 7 章節页面)
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师,请生成一个与当前「滾動敘事完整页面」界面风格高度接近的 UI。
要求:保持整体布局、滚动动画效果和配色思路基本不变,只允许替换文案、品牌名称和少量细节。输出使用语义化 HTML 结构和类似 TailwindCSS 的原子类。

【使用场景】
- 目标:品牌故事页、年度报告、产品发布会页、长篇数字内容、教育叙事内容
- 整体气质:沉浸式、引导性、层次分明、充满仪式感的叙事体验

【整体布局结构】
1. Hero Section (英雄区)
   - Badge 徽章:📖 SCROLL-DRIVEN STORYTELLING
   - 主标题:The Art of Scroll Narrative,使用渐变文字 (#8b5cf6 → #ec4899)
   - 副标题:Experience the journey through immersive storytelling...
   - Scroll Down 提示图标:带弹跳动画的向下箭头
   - 背景:径向渐变 rgba(59, 130, 246, 0.1)

2. 顶部滚动进度条
   - 固定顶部,高度 4px
   - 渐变背景:#8b5cf6 → #ec4899 → #06b6d4
   - 实时随滚动进度增长 (JavaScript 计算)

3. 侧边章节导航点 (7 个圆点)
   - 固定右侧 2rem,垂直居中
   - 圆点尺寸 12px,透明背景 rgba(255,255,255,0.2)
   - 激活状态:#8b5cf6,放大 1.4x + 发光阴影
   - Hover 显示章节标题 tooltip

4. Chapter I: The Beginning (第一章:开端)
   - Sticky Header:顶部固定,半透明背景 rgba(15, 23, 42, 0.95) + backdrop-filter blur
   - 章节标题:渐变文字 (#8b5cf6 → #ec4899)
   - Content Cards:2 个卡片
     - 卡片 1:🌅 图标 + Where Stories Begin + 统计数据 (85% User Engagement, 3.2x Time on Page)
     - 卡片 2:Feature Grid (4 个功能:📱 Mobile First, ⚡ Lightning Fast, 🎨 Beautiful Design, ♿ Accessible)
   - Scroll Reveal 动画:opacity 0→1, translateY 50px→0

5. Chapter II: The Journey (第二章:旅程)
   - 背景:#1e293b 30% 透明度
   - 卡片 1:🚀 Navigating the Experience + 4 个步骤 (01 Capture Attention, 02 Build Interest, 03 Create Desire, 04 Drive Action)
   - 卡片 2:Parallax Image 占位符 (🖼️)

6. Chapter III: The Interaction (第三章:交互)
   - 卡片 1:✨ Engaging Through Motion + Interactive Demo (4 个 hover 效果:🎯 Hover Grow, 💫 Glow, 🔄 Rotate, 🎈 Bounce)
   - 卡片 2:Quote Block (引用块)
     - 大引号 "
     - 引用文字:"Good design is about creating experiences..."
     - 作者信息:👤 Avatar + Alex Johnson + Design Director

7. Chapter IV: The Impact (第四章:影响)
   - 背景:交替背景色
   - 卡片 1:📊 Measurable Results + Impact Metrics
     - 3 个指标卡片:👁️ 2400 Daily Visitors (+45%), ⏱️ 5 min Avg. Session (+120%), 💬 94% Satisfaction
     - Counter 动画:从 0 递增到目标值
   - 卡片 2:Testimonial (客户评价)
     - ⭐⭐⭐⭐⭐
     - 评价文字
     - 作者信息

8. Timeline Section (时间轴区)
   - Section Header:Evolution Timeline + The journey of scroll-driven design
   - 垂直时间线:紫粉渐变线条 (#8b5cf6 → #ec4899)
   - 5 个时间线节点:
     - 2010: Static Pages
     - 2014: Parallax Era
     - 2018: Scroll Animations
     - 2024: Native Support (active 状态,发光)
     - 2025+: AI Integration (future 状态,虚线边框)
   - Scroll Reveal 逐个显示

9. CTA Section (行动号召区)
   - 渐变背景:rgba(139, 92, 246, 0.1) → rgba(236, 72, 153, 0.1)
   - 🎯 Ready to Create Your Story?
   - 副标题 + 2 个按钮:Get Started Free (主按钮) + View Examples (次按钮)
   - Feature 标签:✓ No credit card required, ✓ 14-day free trial, ✓ Cancel anytime

10. Footer
   - 深色背景:rgba(15, 23, 42, 0.8)
   - 📖 Scroll Narrative
   - © 2025 版权信息

【色彩与材质规范】
- 背景渐变:深蓝灰 #0f172a → 纯黑 #050810 → 深紫黑 #0d0a1f
- 主渐变色:
  - 紫色 #8b5cf6
  - 粉色 #ec4899
  - 青色 #06b6d4
- 文字:白色 #f3f4f6,次要文字 #9ca3af
- 卡片背景:rgba(30, 41, 59, 0.5) + backdrop-filter blur
- 边框:rgba(139, 92, 246, 0.2)

【关键动画实现】
1. 滚动进度条:
   \'\'\'javascript
   function updateScrollProgress() {
     const scrollTop = window.pageYOffset;
     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrollPercent = (scrollTop / scrollHeight) * 100;
     document.getElementById('scrollProgress').style.width = scrollPercent + '%';
   }
   window.addEventListener('scroll', updateScrollProgress);
   \'\'\'

2. Intersection Observer 滚动显示:
   \'\'\'javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
       }
     });
   }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

   document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
   \'\'\'

3. 章节导航高亮:
   \'\'\'javascript
   function highlightNavigation() {
     const scrollPos = window.pageYOffset + 200;
     sections.forEach((section) => {
       const sectionTop = section.offsetTop;
       const sectionHeight = section.offsetHeight;
       const sectionId = section.getAttribute('id');

       if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
         navDots.forEach(dot => dot.classList.remove('active'));
         const activeDot = document.querySelector(\'.nav-dot[data-target="\${sectionId}"]\');
         if (activeDot) activeDot.classList.add('active');
       }
     });
   }
   \'\'\'

4. 数字计数器动画:
   \'\'\'javascript
   function animateCounter(element) {
     const target = parseInt(element.getAttribute('data-target'));
     const duration = 2000;
     const increment = target / (duration / 16);
     let current = 0;

     const updateCounter = () => {
       current += increment;
       if (current < target) {
         element.textContent = Math.floor(current);
         requestAnimationFrame(updateCounter);
       } else {
         element.textContent = target;
       }
     };
     updateCounter();
   }
   \'\'\'

5. Scroll Reveal 淡入动画:
   \'\'\'css
   .scroll-reveal {
     opacity: 0;
     transform: translateY(50px);
     transition: all 0.6s ease-out;
   }
   .scroll-reveal.visible {
     opacity: 1;
     transform: translateY(0);
   }
   \'\'\'

【交互与动效】
- 卡片 hover:translateY(-4px) + 边框发光 + box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15)
- 按钮 hover:translateY(-2px) + box-shadow 增强
- Sticky Header:顶部固定 4px 位置 + 半透明背景
- 导航点 hover:显示 tooltip (position: absolute, right: calc(100% + 1rem))
- 平滑滚动:scroll-behavior: smooth
- 响应式:@media (max-width: 768px) 时卡片改为单列

【输出要求】
- 使用语义化 HTML (section/header/main)
- 所有动画使用 transform + opacity (GPU 加速)
- 支持 @media (prefers-reduced-motion: reduce) 可访问性
- clamp() 实现响应式字体大小 (例如:font-size: clamp(2rem, 5vw, 3rem))
- 进度条和章节导航必须包含 JavaScript 实现
- 数字计数器必须包含 data-target 属性和 requestAnimationFrame 动画',

  'en-US': 'You are now a senior UI designer and front-end engineer. Please generate a UI that closely matches the current "Scroll Narrative Full Page" interface.
Requirements: Maintain overall layout, scroll animation effects, and color scheme unchanged. Only replace copy, brand names, and minor details. Output using semantic HTML structure and TailwindCSS-like atomic classes.

【Use Case】
- Goal: Brand story pages, annual reports, product launch pages, long-form digital content, educational narrative content
- Overall Quality: Immersive, guiding, clearly layered, ritual-filled narrative experience

【Layout Structure】
1. Hero Section
   - Badge: 📖 SCROLL-DRIVEN STORYTELLING
   - Main title: The Art of Scroll Narrative, gradient text (#8b5cf6 → #ec4899)
   - Subtitle: Experience the journey through immersive storytelling...
   - Scroll Down hint: Bouncing down arrow animation
   - Background: Radial gradient rgba(59, 130, 246, 0.1)

2. Top Scroll Progress Bar
   - Fixed top, 4px height
   - Gradient background: #8b5cf6 → #ec4899 → #06b6d4
   - Real-time growth with scroll (JavaScript calculation)

3. Side Chapter Navigation Dots (7 dots)
   - Fixed right 2rem, vertically centered
   - Dot size 12px, transparent background rgba(255,255,255,0.2)
   - Active state: #8b5cf6, scale 1.4x + glow shadow
   - Hover shows chapter title tooltip

4. Chapter I: The Beginning
   - Sticky Header: Top fixed, semi-transparent background rgba(15, 23, 42, 0.95) + backdrop-filter blur
   - Chapter title: Gradient text (#8b5cf6 → #ec4899)
   - Content Cards: 2 cards
     - Card 1: 🌅 icon + Where Stories Begin + statistics (85% User Engagement, 3.2x Time on Page)
     - Card 2: Feature Grid (4 features: 📱 Mobile First, ⚡ Lightning Fast, 🎨 Beautiful Design, ♿ Accessible)
   - Scroll Reveal animation: opacity 0→1, translateY 50px→0

5. Chapter II: The Journey
   - Background: #1e293b 30% transparency
   - Card 1: 🚀 Navigating the Experience + 4 steps (01 Capture Attention, 02 Build Interest, 03 Create Desire, 04 Drive Action)
   - Card 2: Parallax Image placeholder (🖼️)

6. Chapter III: The Interaction
   - Card 1: ✨ Engaging Through Motion + Interactive Demo (4 hover effects: 🎯 Hover Grow, 💫 Glow, 🔄 Rotate, 🎈 Bounce)
   - Card 2: Quote Block
     - Large quote mark "
     - Quote text: "Good design is about creating experiences..."
     - Author info: 👤 Avatar + Alex Johnson + Design Director

7. Chapter IV: The Impact
   - Background: Alternating background color
   - Card 1: 📊 Measurable Results + Impact Metrics
     - 3 metric cards: 👁️ 2400 Daily Visitors (+45%), ⏱️ 5 min Avg. Session (+120%), 💬 94% Satisfaction
     - Counter animation: Increment from 0 to target value
   - Card 2: Testimonial
     - ⭐⭐⭐⭐⭐
     - Review text
     - Author info

8. Timeline Section
   - Section Header: Evolution Timeline + The journey of scroll-driven design
   - Vertical timeline: Purple-pink gradient line (#8b5cf6 → #ec4899)
   - 5 timeline nodes:
     - 2010: Static Pages
     - 2014: Parallax Era
     - 2018: Scroll Animations
     - 2024: Native Support (active state, glowing)
     - 2025+: AI Integration (future state, dashed border)
   - Scroll Reveal shows sequentially

9. CTA Section
   - Gradient background: rgba(139, 92, 246, 0.1) → rgba(236, 72, 153, 0.1)
   - 🎯 Ready to Create Your Story?
   - Subtitle + 2 buttons: Get Started Free (primary) + View Examples (secondary)
   - Feature tags: ✓ No credit card required, ✓ 14-day free trial, ✓ Cancel anytime

10. Footer
   - Dark background: rgba(15, 23, 42, 0.8)
   - 📖 Scroll Narrative
   - © 2025 copyright info

【Color & Material Specs】
- Background gradient: Deep blue-gray #0f172a → Pure black #050810 → Deep purple-black #0d0a1f
- Primary gradient colors:
  - Purple #8b5cf6
  - Pink #ec4899
  - Cyan #06b6d4
- Text: White #f3f4f6, secondary text #9ca3af
- Card background: rgba(30, 41, 59, 0.5) + backdrop-filter blur
- Border: rgba(139, 92, 246, 0.2)

【Key Animation Implementations】
1. Scroll progress bar:
   \'\'\'javascript
   function updateScrollProgress() {
     const scrollTop = window.pageYOffset;
     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrollPercent = (scrollTop / scrollHeight) * 100;
     document.getElementById('scrollProgress').style.width = scrollPercent + '%';
   }
   window.addEventListener('scroll', updateScrollProgress);
   \'\'\'

2. Intersection Observer scroll reveal:
   \'\'\'javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
       }
     });
   }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

   document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
   \'\'\'

3. Chapter navigation highlight:
   \'\'\'javascript
   function highlightNavigation() {
     const scrollPos = window.pageYOffset + 200;
     sections.forEach((section) => {
       const sectionTop = section.offsetTop;
       const sectionHeight = section.offsetHeight;
       const sectionId = section.getAttribute('id');

       if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
         navDots.forEach(dot => dot.classList.remove('active'));
         const activeDot = document.querySelector(\'.nav-dot[data-target="\${sectionId}"]\');
         if (activeDot) activeDot.classList.add('active');
       }
     });
   }
   \'\'\'

4. Number counter animation:
   \'\'\'javascript
   function animateCounter(element) {
     const target = parseInt(element.getAttribute('data-target'));
     const duration = 2000;
     const increment = target / (duration / 16);
     let current = 0;

     const updateCounter = () => {
       current += increment;
       if (current < target) {
         element.textContent = Math.floor(current);
         requestAnimationFrame(updateCounter);
       } else {
         element.textContent = target;
       }
     };
     updateCounter();
   }
   \'\'\'

5. Scroll Reveal fade-in animation:
   \'\'\'css
   .scroll-reveal {
     opacity: 0;
     transform: translateY(50px);
     transition: all 0.6s ease-out;
   }
   .scroll-reveal.visible {
     opacity: 1;
     transform: translateY(0);
   }
   \'\'\'

【Interactions & Effects】
- Card hover: translateY(-4px) + border glow + box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15)
- Button hover: translateY(-2px) + enhanced box-shadow
- Sticky Header: Fixed top 4px position + semi-transparent background
- Navigation dot hover: Show tooltip (position: absolute, right: calc(100% + 1rem))
- Smooth scroll: scroll-behavior: smooth
- Responsive: Single column cards at @media (max-width: 768px)

【Output Requirements】
- Semantic HTML (section/header/main)
- All animations use transform + opacity (GPU acceleration)
- Support @media (prefers-reduced-motion: reduce) for accessibility
- Responsive font sizes with clamp() (e.g., font-size: clamp(2rem, 5vw, 3rem))
- Progress bar and chapter navigation must include JavaScript implementation
- Number counters must include data-target attribute and requestAnimationFrame animation`
};
