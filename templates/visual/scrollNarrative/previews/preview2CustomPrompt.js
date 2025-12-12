/**
 * Scroll Narrative - Preview 2 Custom Prompt
 * 产品發布時間軸页专屬的 AI Prompt
 */

export const preview2CustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师,请生成一个与当前「产品发布时间轴页」界面风格高度接近的 UI。
要求:保持整体布局、时间轴结构和配色思路基本不变,只允许替换文案、品牌名称和少量细节。输出使用语义化 HTML 结构和类似 TailwindCSS 的原子类。

【使用场景】
- 目标:产品发布会页、roadmap 展示页、公司历程页、活动倒计时页、预购营销页
- 整体气质:专业、现代、时间导向、制造期待感的发布营销页面

【整体布局结构】
1. Fixed Header (固定顶栏)
   - 半透明白色背景:rgba(255, 255, 255, 0.9) + backdrop-filter: blur(20px)
   - 底部边框:1px solid rgba(0, 0, 0, 0.05)
   - 导航布局:Logo (左) + Nav Links (中) + CTA Button (右)
   - Logo:渐变文字 (#4f46e5 → #7c3aed),font-weight 800
   - Nav Links:Timeline, Features, Pre-order (#6b7280, hover 时变为 #4f46e5)
   - CTA Button:Reserve Now,渐变背景 (#4f46e5 → #7c3aed),padding 0.75rem 1.5rem

2. Hero Section (英雄区)
   - Padding:10rem 2rem 6rem (上方留空给 fixed header)
   - 文本居中
   - 主标题:The Future Launches Soon,渐变文字 (#111827 → #4f46e5),font-size 3.5rem
   - 副标题:Join us on the journey to revolutionize your workflow,#6b7280,margin-bottom 3rem

3. Countdown Timer (倒计时器)
   - 4 个倒计时卡片:Days, Hours, Minutes, Seconds
   - 水平居中排列,gap 2rem
   - 每个卡片:
     - 白色背景,padding 1.5rem 2rem,border-radius 12px
     - 阴影:0 4px 15px rgba(0, 0, 0, 0.08)
     - 数字:font-size 3rem,font-weight 800,渐变文字 (#4f46e5 → #ec4899)
     - 标签:font-size 0.9rem,#6b7280,uppercase,letter-spacing 1px
   - JavaScript 实时倒计时 (示例使用固定值:45天, 12小时, 37分钟, 58秒)

4. Timeline Section (垂直时间轴)
   - Max-width: 1000px,居中
   - 垂直渐变线条:
     - Position: absolute, left: 50%, width: 3px, height: 100%
     - 背景:linear-gradient(180deg, #4f46e5, #ec4899),opacity 0.3
   - 5 个时间线节点:
     - Item 1 (左侧):Research & Development (Q1 2024 - Completed)
     - Item 2 (右侧):Beta Testing Program (Q2 2024 - Completed)
     - Item 3 (左侧):Feature Completion (Q3 2024 - In Progress)
     - Item 4 (右侧):Pre-order Opens (November 2024)
     - Item 5 (左侧):Official Launch (January 2025)
   - 每个节点:
     - 圆形标记:60px × 60px,渐变背景 (#4f46e5 → #7c3aed),白色数字,阴影 0 8px 20px rgba(79, 70, 229, 0.3)
     - 内容区:flex: 1,padding 0 3rem
     - 标题:font-size 1.8rem,font-weight 800,#111827
     - 日期标签:紫色 #7c3aed,uppercase,font-weight 600
     - 描述文字:#6b7280,line-height 1.8
   - 交替布局:偶数项 flex-direction: row-reverse
   - Scroll Reveal 动画:opacity 0→1, translateY 50px→0

5. Device Showcase (设备展示区)
   - 背景:渐变 (#f9fafb → #ffffff)
   - 标题:Works Everywhere You Do,居中,渐变文字
   - Grid 布局:auto-fit minmax(400px, 1fr),gap 3rem
   - 2 个设备模型卡片:
     - 卡片 1:💻 Desktop Experience (Full-featured workspace)
     - 卡片 2:📱 Mobile On-the-Go (Seamless sync across devices)
   - 每个卡片:
     - 白色背景,padding 2rem,border-radius 20px
     - 阴影:0 10px 40px rgba(0, 0, 0, 0.1)
     - 内部屏幕:渐变背景 (#4f46e5 → #7c3aed),padding 3rem 2rem,border-radius 12px
     - Hover 效果:translateY(-10px)

6. Stats Section (统计数据区)
   - Grid 布局:auto-fit minmax(250px, 1fr),gap 2rem
   - 4 个统计卡片:
     - 10K+ Early Signups
     - 500+ Beta Testers
     - 98% Satisfaction Rate
     - 15 Awards Won
   - 每个卡片:
     - 白色背景,padding 2.5rem,border-radius 16px
     - 阴影:0 4px 15px rgba(0, 0, 0, 0.08)
     - 数字:font-size 3rem,font-weight 900,渐变文字
     - 标签:#6b7280,font-weight 600

7. Pre-order Section (预购区)
   - 渐变背景:#4f46e5 → #7c3aed
   - Padding: 6rem 2rem
   - 白色文字,居中
   - 标题:Reserve Your Spot,font-size 2.5rem,font-weight 900
   - 副标题:Get 30% off launch price as an early supporter,opacity 0.9
   - 预购表单:
     - Max-width: 500px,居中
     - Flex 布局:gap 1rem
     - Email 输入框:flex: 1,padding 1rem 1.5rem,border-radius 8px,白色背景
     - 提交按钮:Pre-order Now,白色背景,靛蓝文字 (#4f46e5),font-weight 700,hover scale(1.05)

8. Testimonials Section (客户评价区)
   - 标题:What Beta Users Say,居中,渐变文字
   - Grid 布局:auto-fit minmax(350px, 1fr),gap 2rem
   - 3 个评价卡片:
     - 评价文字:斜体,#374151
     - 作者姓名:font-weight 700,#111827
     - 作者职位:#6b7280,font-size 0.9rem

9. Footer
   - 背景:#111827,白色文字
   - Padding: 3rem 2rem
   - 居中
   - 版权信息:© 2024 ProductX. All rights reserved.
   - 副标题:Join us on the journey to launch something amazing. (opacity 0.7)

【色彩与材质规范】
- 背景渐变:
  - 白色到浅灰:#ffffff → #f9fafb → #f3f4f6
  - 浅蓝紫:#eff6ff → #faf5ff
- 主色调:
  - 靛蓝:#4f46e5
  - 紫色:#7c3aed
  - 粉红:#ec4899
- 文字:
  - 主文字:#111827
  - 次要文字:#6b7280
- 半透明效果:backdrop-filter: blur(20px)
- 阴影:0 4px 15px rgba(0, 0, 0, 0.08), 0 10px 40px rgba(0, 0, 0, 0.1)

【关键动画实现】
1. 滚动显示动画:
   \`\`\`javascript
   const observerOptions = {
     threshold: 0.2,
     rootMargin: '0px 0px -100px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
       }
     });
   }, observerOptions);

   document.querySelectorAll('.timeline-item').forEach(item => {
     observer.observe(item);
   });
   \`\`\`

2. Timeline Item 动画:
   \`\`\`css
   .timeline-item {
     opacity: 0;
     transform: translateY(50px);
     transition: all 0.6s ease-out;
   }
   .timeline-item.visible {
     opacity: 1;
     transform: translateY(0);
   }
   \`\`\`

3. 倒计时器:
   \`\`\`javascript
   // 示例:使用固定值展示
   function updateCountdown() {
     document.querySelectorAll('.countdown-number').forEach((el, index) => {
       const values = [45, 12, 37, 58]; // Days, Hours, Minutes, Seconds
       el.textContent = values[index];
     });
   }
   updateCountdown();
   \`\`\`

4. 设备卡片 Hover:
   \`\`\`css
   .device-mockup {
     transition: transform 0.3s;
   }
   .device-mockup:hover {
     transform: translateY(-10px);
   }
   \`\`\`

【交互与动效】
- Timeline 节点:opacity 0→1, translateY 50px→0, transition 0.6s ease-out
- 卡片 hover:translateY(-10px) or translateY(-5px)
- 按钮 hover:transform: scale(1.05) or translateY(-2px)
- Header 半透明背景:backdrop-filter: blur(20px)
- Smooth scroll:scroll-behavior: smooth
- 响应式:@media (max-width: 768px) 时:
  - Timeline 改为单列布局 (flex-direction: column)
  - Countdown 改为 2×2 网格或单列
  - Nav links 隐藏 (display: none)

【输出要求】
- 使用语义化 HTML (header/nav/section/footer)
- 时间轴必须使用 Flexbox 实现交替布局
- 倒计时器必须包含 JavaScript 更新逻辑
- 所有动画使用 transform + opacity (GPU 加速)
- 支持响应式断点:768px
- Fixed header 必须使用 position: fixed + backdrop-filter`,

  'en-US': `You are now a senior UI designer and front-end engineer. Please generate a UI that closely matches the current "Product Launch Timeline" page.
Requirements: Maintain overall layout, timeline structure, and color scheme unchanged. Only replace copy, brand names, and minor details. Output using semantic HTML structure and TailwindCSS-like atomic classes.

【Use Case】
- Goal: Product launch pages, roadmap showcases, company milestone pages, event countdown pages, pre-order marketing pages
- Overall Quality: Professional, modern, time-oriented, anticipation-building launch marketing page

【Layout Structure】
1. Fixed Header
   - Semi-transparent white background: rgba(255, 255, 255, 0.9) + backdrop-filter: blur(20px)
   - Bottom border: 1px solid rgba(0, 0, 0, 0.05)
   - Navigation layout: Logo (left) + Nav Links (center) + CTA Button (right)
   - Logo: Gradient text (#4f46e5 → #7c3aed), font-weight 800
   - Nav Links: Timeline, Features, Pre-order (#6b7280, hover → #4f46e5)
   - CTA Button: Reserve Now, gradient background (#4f46e5 → #7c3aed), padding 0.75rem 1.5rem

2. Hero Section
   - Padding: 10rem 2rem 6rem (top space for fixed header)
   - Text centered
   - Main title: The Future Launches Soon, gradient text (#111827 → #4f46e5), font-size 3.5rem
   - Subtitle: Join us on the journey to revolutionize your workflow, #6b7280, margin-bottom 3rem

3. Countdown Timer
   - 4 countdown cards: Days, Hours, Minutes, Seconds
   - Horizontal centered alignment, gap 2rem
   - Each card:
     - White background, padding 1.5rem 2rem, border-radius 12px
     - Shadow: 0 4px 15px rgba(0, 0, 0, 0.08)
     - Number: font-size 3rem, font-weight 800, gradient text (#4f46e5 → #ec4899)
     - Label: font-size 0.9rem, #6b7280, uppercase, letter-spacing 1px
   - JavaScript real-time countdown (example uses fixed values: 45 days, 12 hours, 37 minutes, 58 seconds)

4. Timeline Section (vertical timeline)
   - Max-width: 1000px, centered
   - Vertical gradient line:
     - Position: absolute, left: 50%, width: 3px, height: 100%
     - Background: linear-gradient(180deg, #4f46e5, #ec4899), opacity 0.3
   - 5 timeline nodes:
     - Item 1 (left): Research & Development (Q1 2024 - Completed)
     - Item 2 (right): Beta Testing Program (Q2 2024 - Completed)
     - Item 3 (left): Feature Completion (Q3 2024 - In Progress)
     - Item 4 (right): Pre-order Opens (November 2024)
     - Item 5 (left): Official Launch (January 2025)
   - Each node:
     - Circular marker: 60px × 60px, gradient background (#4f46e5 → #7c3aed), white number, shadow 0 8px 20px rgba(79, 70, 229, 0.3)
     - Content area: flex: 1, padding 0 3rem
     - Title: font-size 1.8rem, font-weight 800, #111827
     - Date label: Purple #7c3aed, uppercase, font-weight 600
     - Description text: #6b7280, line-height 1.8
   - Alternating layout: Even items flex-direction: row-reverse
   - Scroll Reveal animation: opacity 0→1, translateY 50px→0

5. Device Showcase
   - Background: Gradient (#f9fafb → #ffffff)
   - Title: Works Everywhere You Do, centered, gradient text
   - Grid layout: auto-fit minmax(400px, 1fr), gap 3rem
   - 2 device mockup cards:
     - Card 1: 💻 Desktop Experience (Full-featured workspace)
     - Card 2: 📱 Mobile On-the-Go (Seamless sync across devices)
   - Each card:
     - White background, padding 2rem, border-radius 20px
     - Shadow: 0 10px 40px rgba(0, 0, 0, 0.1)
     - Inner screen: Gradient background (#4f46e5 → #7c3aed), padding 3rem 2rem, border-radius 12px
     - Hover effect: translateY(-10px)

6. Stats Section
   - Grid layout: auto-fit minmax(250px, 1fr), gap 2rem
   - 4 stat cards:
     - 10K+ Early Signups
     - 500+ Beta Testers
     - 98% Satisfaction Rate
     - 15 Awards Won
   - Each card:
     - White background, padding 2.5rem, border-radius 16px
     - Shadow: 0 4px 15px rgba(0, 0, 0, 0.08)
     - Number: font-size 3rem, font-weight 900, gradient text
     - Label: #6b7280, font-weight 600

7. Pre-order Section
   - Gradient background: #4f46e5 → #7c3aed
   - Padding: 6rem 2rem
   - White text, centered
   - Title: Reserve Your Spot, font-size 2.5rem, font-weight 900
   - Subtitle: Get 30% off launch price as an early supporter, opacity 0.9
   - Pre-order form:
     - Max-width: 500px, centered
     - Flex layout: gap 1rem
     - Email input: flex: 1, padding 1rem 1.5rem, border-radius 8px, white background
     - Submit button: Pre-order Now, white background, indigo text (#4f46e5), font-weight 700, hover scale(1.05)

8. Testimonials Section
   - Title: What Beta Users Say, centered, gradient text
   - Grid layout: auto-fit minmax(350px, 1fr), gap 2rem
   - 3 testimonial cards:
     - Review text: Italic, #374151
     - Author name: font-weight 700, #111827
     - Author role: #6b7280, font-size 0.9rem

9. Footer
   - Background: #111827, white text
   - Padding: 3rem 2rem
   - Centered
   - Copyright: © 2024 ProductX. All rights reserved.
   - Subtitle: Join us on the journey to launch something amazing. (opacity 0.7)

【Color & Material Specs】
- Background gradients:
  - White to light gray: #ffffff → #f9fafb → #f3f4f6
  - Light blue-purple: #eff6ff → #faf5ff
- Primary colors:
  - Indigo: #4f46e5
  - Purple: #7c3aed
  - Pink: #ec4899
- Text:
  - Primary text: #111827
  - Secondary text: #6b7280
- Semi-transparent effects: backdrop-filter: blur(20px)
- Shadows: 0 4px 15px rgba(0, 0, 0, 0.08), 0 10px 40px rgba(0, 0, 0, 0.1)

【Key Animation Implementations】
1. Scroll reveal animation:
   \`\`\`javascript
   const observerOptions = {
     threshold: 0.2,
     rootMargin: '0px 0px -100px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
       }
     });
   }, observerOptions);

   document.querySelectorAll('.timeline-item').forEach(item => {
     observer.observe(item);
   });
   \`\`\`

2. Timeline Item animation:
   \`\`\`css
   .timeline-item {
     opacity: 0;
     transform: translateY(50px);
     transition: all 0.6s ease-out;
   }
   .timeline-item.visible {
     opacity: 1;
     transform: translateY(0);
   }
   \`\`\`

3. Countdown timer:
   \`\`\`javascript
   // Example: using fixed values for demonstration
   function updateCountdown() {
     document.querySelectorAll('.countdown-number').forEach((el, index) => {
       const values = [45, 12, 37, 58]; // Days, Hours, Minutes, Seconds
       el.textContent = values[index];
     });
   }
   updateCountdown();
   \`\`\`

4. Device card Hover:
   \`\`\`css
   .device-mockup {
     transition: transform 0.3s;
   }
   .device-mockup:hover {
     transform: translateY(-10px);
   }
   \`\`\`

【Interactions & Effects】
- Timeline nodes: opacity 0→1, translateY 50px→0, transition 0.6s ease-out
- Card hover: translateY(-10px) or translateY(-5px)
- Button hover: transform: scale(1.05) or translateY(-2px)
- Header semi-transparent background: backdrop-filter: blur(20px)
- Smooth scroll: scroll-behavior: smooth
- Responsive: At @media (max-width: 768px):
  - Timeline changes to single column layout (flex-direction: column)
  - Countdown changes to 2×2 grid or single column
  - Nav links hidden (display: none)

【Output Requirements】
- Semantic HTML (header/nav/section/footer)
- Timeline must use Flexbox for alternating layout
- Countdown timer must include JavaScript update logic
- All animations use transform + opacity (GPU acceleration)
- Support responsive breakpoint: 768px
- Fixed header must use position: fixed + backdrop-filter`
};
