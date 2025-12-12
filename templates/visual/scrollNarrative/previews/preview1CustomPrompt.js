/**
 * Scroll Narrative - Preview 1 Custom Prompt
 * SaaS 产品功能展示页专屬的 AI Prompt
 */

export const preview1CustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师,请生成一个与当前「SaaS 产品功能展示页」界面风格高度接近的 UI。
要求:保持整体布局、滚动触发动画和配色思路基本不变,只允许替换文案、品牌名称和少量细节。输出使用语义化 HTML 结构和类似 TailwindCSS 的原子类。

【使用场景】
- 目标:SaaS 产品介绍页、B2B 服务展示、软件功能说明页、技术产品营销页
- 整体气质:专业、清晰、功能导向、注重转化的商业展示页面

【整体布局结构】
1. 顶部滚动进度条
   - 固定顶部,高度 4px
   - 背景:#e5e7eb
   - 进度条:渐变 (#4f46e5 → #7c3aed → #ec4899)
   - JavaScript 实时计算宽度

2. Hero Section (英雄区)
   - 背景:浅蓝到浅紫渐变 (#eff6ff → #faf5ff)
   - Badge:✨ New Features Available,渐变背景 + 靛蓝边框
   - 主标题:Transform Your Workflow,字号 4.5rem,渐变文字 (#111827 → #4f46e5)
   - 副标题:The all-in-one platform that helps teams collaborate...
   - 2 个 CTA 按钮:
     - 主按钮:Start Free Trial,渐变背景 (#4f46e5 → #7c3aed),阴影 0 10px 30px rgba(79, 70, 229, 0.3)
     - 次按钮:Watch Demo →,透明背景 + 边框
   - 滚动提示:Scroll to explore + 向下箭头动画 (bounce 2s infinite)

3. Feature 1: Smart Collaboration (左图右文)
   - Grid 布局:1fr 1fr,间距 6rem
   - 左侧文本:
     - Label:Feature 01,小字号徽章 (#4f46e5)
     - 标题:Smart Collaboration (3rem)
     - 描述文字 (1.25rem, #6b7280)
     - 功能列表:✓ Real-time co-editing, ✓ Inline comments & mentions, ✓ Version history & rollback, ✓ Smart notifications
   - 右侧设备模型:MacBook
     - 深色外壳渐变 (#1f2937 → #111827)
     - 白色屏幕:Team Project 界面 demo
     - 文档行 (灰色占位) + 闪烁光标动画
     - 阴影:0 25px 60px rgba(0, 0, 0, 0.3)

4. Feature 2: Powerful Analytics (右图左文)
   - Grid 布局:交换顺序 (order: 2, order: 1)
   - 左侧设备模型:iPhone
     - 圆角 2.5rem,宽度 280px
     - 白色屏幕:柱状图 demo (5 个渐变柱,高度不同,chartGrow 1s 动画)
   - 右侧文本:
     - Label:Feature 02
     - 标题:Powerful Analytics
     - 描述 + 功能列表 (✓ Real-time dashboards, ✓ Custom reports, ✓ Trend analysis, ✓ Export to CSV/PDF)

5. Feature 3: Workflow Automation (居中布局)
   - 文本居中
   - Label:Feature 03
   - 标题:Workflow Automation (3rem)
   - 描述:Automate repetitive tasks and focus on what matters...
   - 自动化流程演示:
     - 3 个步骤卡片:📧 New Email → 🤖 AI Process → ✅ Auto Reply
     - 箭头连接 (→,2rem)
     - 白色卡片背景,圆角阴影

6. Statistics Section (统计数据区)
   - 渐变背景:#4f46e5 → #7c3aed
   - 标题:Trusted by Teams Worldwide (3rem,白色文字)
   - 3 个统计卡片 (网格布局):
     - 10000+ Active Teams
     - 500000+ Projects Created
     - 99% Satisfaction Rate
   - Counter 动画:从 0 递增到目标值 (data-target 属性 + JavaScript)

7. Testimonials Section (客户评价区)
   - 标题:What Our Customers Say (3rem)
   - 3 个评价卡片 (grid auto-fit minmax(350px, 1fr)):
     - 每个卡片:⭐⭐⭐⭐⭐ + 评价文字 (斜体) + 作者信息
     - 作者头像:圆形渐变背景,首字母缩写 (SM, JD, EW)
     - Hover 效果:translateY(-5px) + 阴影增强

8. Pricing Section (价格方案区)
   - 背景:#f9fafb
   - 标题:Choose Your Plan (3rem)
   - 3 个价格卡片:Starter (Free), Professional ($29/month, Featured), Enterprise (Custom)
   - Featured 卡片:
     - 顶部 Most Popular 徽章 (position: absolute, top: -12px)
     - 边框 3px,靛蓝色 (#4f46e5)
     - 增强阴影:0 20px 50px rgba(79, 70, 229, 0.2)
   - 每个卡片:
     - 标题 + 价格 ($符号 2rem + 金额 4rem + /month)
     - 功能列表 (左对齐,边框分隔)
     - CTA 按钮 (主按钮 or 边框按钮)

9. Final CTA Section
   - 浅蓝紫渐变背景 (#eff6ff → #faf5ff)
   - 标题:Ready to Get Started? (3.5rem)
   - 副标题:Join thousands of teams already using our platform.
   - CTA 按钮:Start Your Free Trial,渐变背景 + 大阴影
   - 小字:No credit card required • 14-day free trial

10. Footer
   - 背景:#111827
   - 版权信息:© 2024 ProductName. All rights reserved.

【色彩与材质规范】
- 背景渐变:
  - 浅灰白:#f9fafb → #ffffff
  - 浅蓝紫:#eff6ff → #faf5ff
- 主色调:
  - 靛蓝:#4f46e5
  - 紫色:#7c3aed
  - 粉红:#ec4899
- 文字:
  - 主文字:#111827
  - 次要文字:#6b7280
- 卡片:白色 #ffffff + 边框 #e5e7eb + 阴影 0 4px 15px rgba(0, 0, 0, 0.08)
- 按钮渐变:#4f46e5 → #7c3aed

【关键动画实现】
1. 滚动进度条:
   \`\`\`javascript
   window.addEventListener('scroll', () => {
     const scrollProgress = document.getElementById('scrollProgress');
     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrolled = (window.scrollY / scrollHeight) * 100;
     scrollProgress.style.width = scrolled + '%';
   });
   \`\`\`

2. Intersection Observer 滚动显示:
   \`\`\`javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('scroll-visible');
       }
     });
   }, { threshold: 0.1 });

   document.querySelectorAll('.scroll-feature, .scroll-stats, .scroll-testimonials, .scroll-pricing').forEach(el => {
     observer.observe(el);
   });
   \`\`\`

3. 统计数字计数器:
   \`\`\`javascript
   const statObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const target = parseInt(entry.target.dataset.target);
         let current = 0;
         const increment = target / 60;
         const timer = setInterval(() => {
           current += increment;
           if (current >= target) {
             entry.target.textContent = target.toLocaleString() + (target === 99 ? '%' : '+');
             clearInterval(timer);
           } else {
             entry.target.textContent = Math.floor(current).toLocaleString();
           }
         }, 30);
         statObserver.unobserve(entry.target);
       }
     });
   }, { threshold: 0.5 });

   document.querySelectorAll('.scroll-stat-number').forEach(el => {
     statObserver.observe(el);
   });
   \`\`\`

4. 柱状图增长动画:
   \`\`\`css
   @keyframes chartGrow {
     from { height: 0%; }
   }
   .scroll-chart-bar {
     animation: chartGrow 1s ease-out;
   }
   \`\`\`

5. 光标闪烁动画:
   \`\`\`css
   @keyframes cursorBlink {
     50% { opacity: 0; }
   }
   .scroll-demo-cursor {
     width: 2px;
     height: 20px;
     background: #4f46e5;
     animation: cursorBlink 1s steps(2) infinite;
   }
   \`\`\`

【交互与动效】
- Feature Section 淡入:opacity 0→1, translateY 50px→0, transition 0.8s cubic-bezier(0.4, 0, 0.2, 1)
- 卡片 hover:translateY(-5px) + box-shadow 增强
- 按钮 hover:translateY(-3px) + box-shadow 增强
- 设备模型 hover:translateY(-10px)
- 响应式:@media (max-width: 1024px) 时 grid 改为单列

【输出要求】
- 使用语义化 HTML (section/header/main/footer)
- 所有动画使用 transform + opacity (GPU 加速)
- 设备模型使用纯 CSS 实现 (不使用图片)
- 统计数字必须包含 data-target 属性和 JavaScript 计数器
- 支持响应式断点:1024px, 768px
- clamp() 实现响应式字体大小`,

  'en-US': `You are now a senior UI designer and front-end engineer. Please generate a UI that closely matches the current "SaaS Product Feature Showcase" page.
Requirements: Maintain overall layout, scroll-triggered animations, and color scheme unchanged. Only replace copy, brand names, and minor details. Output using semantic HTML structure and TailwindCSS-like atomic classes.

【Use Case】
- Goal: SaaS product introduction pages, B2B service showcases, software feature descriptions, technical product marketing pages
- Overall Quality: Professional, clear, function-oriented, conversion-focused business presentation page

【Layout Structure】
1. Top Scroll Progress Bar
   - Fixed top, 4px height
   - Background: #e5e7eb
   - Progress bar: Gradient (#4f46e5 → #7c3aed → #ec4899)
   - JavaScript real-time width calculation

2. Hero Section
   - Background: Light blue to light purple gradient (#eff6ff → #faf5ff)
   - Badge: ✨ New Features Available, gradient background + indigo border
   - Main title: Transform Your Workflow, font-size 4.5rem, gradient text (#111827 → #4f46e5)
   - Subtitle: The all-in-one platform that helps teams collaborate...
   - 2 CTA buttons:
     - Primary button: Start Free Trial, gradient background (#4f46e5 → #7c3aed), shadow 0 10px 30px rgba(79, 70, 229, 0.3)
     - Secondary button: Watch Demo →, transparent background + border
   - Scroll hint: Scroll to explore + down arrow animation (bounce 2s infinite)

3. Feature 1: Smart Collaboration (left image right text)
   - Grid layout: 1fr 1fr, gap 6rem
   - Left text:
     - Label: Feature 01, small badge (#4f46e5)
     - Title: Smart Collaboration (3rem)
     - Description text (1.25rem, #6b7280)
     - Feature list: ✓ Real-time co-editing, ✓ Inline comments & mentions, ✓ Version history & rollback, ✓ Smart notifications
   - Right device mockup: MacBook
     - Dark shell gradient (#1f2937 → #111827)
     - White screen: Team Project interface demo
     - Document lines (gray placeholder) + blinking cursor animation
     - Shadow: 0 25px 60px rgba(0, 0, 0, 0.3)

4. Feature 2: Powerful Analytics (right image left text)
   - Grid layout: Swap order (order: 2, order: 1)
   - Left device mockup: iPhone
     - Border-radius 2.5rem, width 280px
     - White screen: Bar chart demo (5 gradient bars, different heights, chartGrow 1s animation)
   - Right text:
     - Label: Feature 02
     - Title: Powerful Analytics
     - Description + feature list (✓ Real-time dashboards, ✓ Custom reports, ✓ Trend analysis, ✓ Export to CSV/PDF)

5. Feature 3: Workflow Automation (center layout)
   - Text centered
   - Label: Feature 03
   - Title: Workflow Automation (3rem)
   - Description: Automate repetitive tasks and focus on what matters...
   - Automation flow demo:
     - 3 step cards: 📧 New Email → 🤖 AI Process → ✅ Auto Reply
     - Arrow connectors (→, 2rem)
     - White card background, rounded corners shadow

6. Statistics Section
   - Gradient background: #4f46e5 → #7c3aed
   - Title: Trusted by Teams Worldwide (3rem, white text)
   - 3 stat cards (grid layout):
     - 10000+ Active Teams
     - 500000+ Projects Created
     - 99% Satisfaction Rate
   - Counter animation: Increment from 0 to target value (data-target attribute + JavaScript)

7. Testimonials Section
   - Title: What Our Customers Say (3rem)
   - 3 testimonial cards (grid auto-fit minmax(350px, 1fr)):
     - Each card: ⭐⭐⭐⭐⭐ + review text (italic) + author info
     - Author avatar: Circular gradient background, initials (SM, JD, EW)
     - Hover effect: translateY(-5px) + enhanced shadow

8. Pricing Section
   - Background: #f9fafb
   - Title: Choose Your Plan (3rem)
   - 3 pricing cards: Starter (Free), Professional ($29/month, Featured), Enterprise (Custom)
   - Featured card:
     - Top Most Popular badge (position: absolute, top: -12px)
     - Border 3px, indigo (#4f46e5)
     - Enhanced shadow: 0 20px 50px rgba(79, 70, 229, 0.2)
   - Each card:
     - Title + price ($symbol 2rem + amount 4rem + /month)
     - Feature list (left-aligned, border-separated)
     - CTA button (primary button or border button)

9. Final CTA Section
   - Light blue-purple gradient background (#eff6ff → #faf5ff)
   - Title: Ready to Get Started? (3.5rem)
   - Subtitle: Join thousands of teams already using our platform.
   - CTA button: Start Your Free Trial, gradient background + large shadow
   - Small text: No credit card required • 14-day free trial

10. Footer
   - Background: #111827
   - Copyright: © 2024 ProductName. All rights reserved.

【Color & Material Specs】
- Background gradients:
  - Light gray-white: #f9fafb → #ffffff
  - Light blue-purple: #eff6ff → #faf5ff
- Primary colors:
  - Indigo: #4f46e5
  - Purple: #7c3aed
  - Pink: #ec4899
- Text:
  - Primary text: #111827
  - Secondary text: #6b7280
- Cards: White #ffffff + border #e5e7eb + shadow 0 4px 15px rgba(0, 0, 0, 0.08)
- Button gradient: #4f46e5 → #7c3aed

【Key Animation Implementations】
1. Scroll progress bar:
   \`\`\`javascript
   window.addEventListener('scroll', () => {
     const scrollProgress = document.getElementById('scrollProgress');
     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrolled = (window.scrollY / scrollHeight) * 100;
     scrollProgress.style.width = scrolled + '%';
   });
   \`\`\`

2. Intersection Observer scroll reveal:
   \`\`\`javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('scroll-visible');
       }
     });
   }, { threshold: 0.1 });

   document.querySelectorAll('.scroll-feature, .scroll-stats, .scroll-testimonials, .scroll-pricing').forEach(el => {
     observer.observe(el);
   });
   \`\`\`

3. Statistics number counter:
   \`\`\`javascript
   const statObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const target = parseInt(entry.target.dataset.target);
         let current = 0;
         const increment = target / 60;
         const timer = setInterval(() => {
           current += increment;
           if (current >= target) {
             entry.target.textContent = target.toLocaleString() + (target === 99 ? '%' : '+');
             clearInterval(timer);
           } else {
             entry.target.textContent = Math.floor(current).toLocaleString();
           }
         }, 30);
         statObserver.unobserve(entry.target);
       }
     });
   }, { threshold: 0.5 });

   document.querySelectorAll('.scroll-stat-number').forEach(el => {
     statObserver.observe(el);
   });
   \`\`\`

4. Bar chart growth animation:
   \`\`\`css
   @keyframes chartGrow {
     from { height: 0%; }
   }
   .scroll-chart-bar {
     animation: chartGrow 1s ease-out;
   }
   \`\`\`

5. Cursor blink animation:
   \`\`\`css
   @keyframes cursorBlink {
     50% { opacity: 0; }
   }
   .scroll-demo-cursor {
     width: 2px;
     height: 20px;
     background: #4f46e5;
     animation: cursorBlink 1s steps(2) infinite;
   }
   \`\`\`

【Interactions & Effects】
- Feature Section fade-in: opacity 0→1, translateY 50px→0, transition 0.8s cubic-bezier(0.4, 0, 0.2, 1)
- Card hover: translateY(-5px) + enhanced box-shadow
- Button hover: translateY(-3px) + enhanced box-shadow
- Device mockup hover: translateY(-10px)
- Responsive: Grid changes to single column at @media (max-width: 1024px)

【Output Requirements】
- Semantic HTML (section/header/main/footer)
- All animations use transform + opacity (GPU acceleration)
- Device mockups implemented in pure CSS (no images)
- Statistics numbers must include data-target attribute and JavaScript counter
- Support responsive breakpoints: 1024px, 768px
- Responsive font sizes with clamp()`
};
