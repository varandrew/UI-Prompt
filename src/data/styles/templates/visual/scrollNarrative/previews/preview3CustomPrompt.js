/**
 * Scroll Narrative - Preview 3 Custom Prompt
 * 視差動画叙事体驗页专屬的 AI Prompt
 */

export const preview3CustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师,请生成一个与当前「視差動画叙事体驗页」界面风格高度接近的 UI。
要求:保持整体布局、多层视差动画和配色思路基本不变,只允许替换文案、品牌名称和少量细节。输出使用语义化 HTML 结构和类似 TailwindCSS 的原子类。

【使用场景】
- 目标:品牌故事页、创意作品集、艺术展览页、游戏介绍页、沉浸式长内容展示
- 整体气质:电影感、沉浸式、艺术化、富有层次感的视觉叙事体验

【整体布局结构】
1. 顶部滚动进度条
   - 固定顶部,高度 3px
   - 渐变背景:#7c3aed → #fbbf24
   - JavaScript 实时计算宽度 (scrollY / totalHeight × 100)

2. 侧边章节导航点 (5 个圆点)
   - 固定右侧 2rem,垂直居中
   - 圆点尺寸 12px,透明背景 rgba(255, 255, 255, 0.3)
   - 激活状态:#fbbf24,放大 1.5x,发光阴影 0 0 20px rgba(251, 191, 36, 0.6)
   - Hover 显示标题 tooltip (data-title 属性)
     - Position: absolute, right: calc(100% + 1rem)
     - 背景:rgba(15, 23, 42, 0.9),padding 0.25rem 0.75rem,border-radius 0.25rem
   - 点击平滑滚动到对应章节 (scrollIntoView smooth)

3. Chapter 1: In the Beginning (开端)
   - 全屏容器 (min-height: 100vh)
   - 多层视差背景:
     - 背景层 1:星空图案 (radial-gradient 模拟星星),z-index: 1,data-speed="0.2"
     - 背景层 2:星云 (ellipse 渐变 #7c3aed 30% 透明),z-index: 2,data-speed="0.5"
   - 内容层:z-index: 10,居中,max-width: 800px
   - 标题:In the Beginning,渐变文字 (#fbbf24 → #7c3aed),font-size clamp(2.5rem, 8vw, 4rem)
   - 副标题:Every great story starts with a single spark of imagination,#cbd5e1
   - 描述段落:#e2e8f0,line-height 1.8
   - CTA 按钮:Begin the Journey,渐变背景 (#7c3aed → #fbbf24),hover translateY(-3px)
   - 浮动元素:✨🌟💫 (绝对定位,float 8s 动画)

4. Chapter 2: The Journey Unfolds (旅程展开)
   - 多层视差背景:
     - 背景层 1:星空,data-speed="0.3"
     - 背景层 2:行星 (circle at 80% 20%, #fbbf24 40% 透明),data-speed="0.7"
   - 内容层:
     - 标题:The Journey Unfolds
     - 副标题:Through challenges and discoveries, we evolved
     - Data Viz (数据可视化):
       - Grid 布局:auto-fit minmax(150px, 1fr),gap 2rem
       - 3 个数据点:2019 (Foundation Year), 50+ (Team Members), 1M+ (Users Reached)
       - 每个数据点:
         - 半透明背景:rgba(124, 58, 237, 0.1),边框 rgba(124, 58, 237, 0.3),backdrop-filter blur
         - 数字:font-size 2.5rem,渐变文字
         - 标签:#cbd5e1,font-size 0.875rem
     - 描述段落

5. Chapter 3: Moment of Discovery (发现时刻)
   - 多层视差背景:星云 + 星空
   - 内容层:
     - 标题:Moment of Discovery
     - 副标题:When breakthrough meets preparation
     - Timeline (嵌套时间轴):
       - Max-width: 600px,居中
       - 垂直渐变线:linear-gradient(180deg, #7c3aed, #fbbf24),width 2px
       - 3 个时间线节点:
         - Q1 2021: The Breakthrough
         - Q3 2021: First Success
         - Q1 2022: Market Validation
       - 每个节点:
         - Marker:20px × 20px,#fbbf24,圆形,发光阴影
         - Content:半透明背景 rgba(30, 41, 59, 0.5),border-radius 1rem,backdrop-filter blur
         - 日期:#fbbf24,font-weight 700
         - 标题 h3 + 描述段落
       - 交替布局:nth-child(even) flex-direction: row-reverse

6. Chapter 4: Era of Innovation (创新时代)
   - 多层视差背景:行星 + 星云
   - 内容层:
     - 标题:Era of Innovation
     - 副标题:Pushing boundaries beyond what was thought possible
     - 描述段落
     - Data Viz:
       - 4 个数据点:15 Patents Filed, 99.9% Uptime, 24/7 Global Support, ∞ Possibilities
       - Grid 布局:auto-fit minmax(150px, 1fr)
     - CTA 按钮:Experience Innovation

7. Chapter 5: Infinite Horizons (无限视野)
   - 多层视差背景 (3 层):
     - 星空 data-speed="0.5"
     - 星云 data-speed="0.8"
     - 行星 data-speed="1.2"
   - 内容层:
     - 标题:Infinite Horizons
     - 副标题:The story continues, and the best is yet to come
     - 描述段落
     - CTA 按钮:Join Our Universe
     - 浮动元素:🚀🌌⭐

【色彩与材质规范】
- 深色宇宙背景:#0f172a
- 主渐变色:
  - 紫色星云:#7c3aed
  - 金色星光:#fbbf24
- 文字:
  - 主文字:#ffffff
  - 次要文字:#cbd5e1, #e2e8f0
- 半透明卡片:rgba(30, 41, 59, 0.5) + backdrop-filter: blur(10px)
- 边框:rgba(124, 58, 237, 0.3)
- 发光效果:box-shadow: 0 0 20px rgba(251, 191, 36, 0.6)

【关键动画实现】
1. 视差滚动效果:
   \`\`\`javascript
   window.addEventListener('scroll', () => {
     const scrolled = window.pageYOffset;
     const parallaxElements = document.querySelectorAll('.parallax-bg');
     const scrollProgress = document.getElementById('scrollProgress');

     // 更新进度条
     const totalHeight = document.body.scrollHeight - window.innerHeight;
     const progress = (scrolled / totalHeight) * 100;
     scrollProgress.style.width = progress + '%';

     // 应用视差效果
     parallaxElements.forEach(element => {
       const speed = element.dataset.speed || 0.5;
       const yPos = -(scrolled * speed);
       element.style.transform = \`translateY(\${yPos}px)\`;
     });
   });
   \`\`\`

2. Intersection Observer 章节显示:
   \`\`\`javascript
   const observerOptions = {
     threshold: 0.3,
     rootMargin: '0px 0px -100px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');

         // 更新章节导航高亮
         const chapterDots = document.querySelectorAll('.chapter-dot');
         const chapterId = entry.target.id;

         chapterDots.forEach(dot => {
           dot.classList.remove('active');
           if (dot.dataset.target === chapterId) {
             dot.classList.add('active');
           }
         });
       }
     });
   }, observerOptions);

   document.querySelectorAll('.chapter-content').forEach(el => {
     observer.observe(el);
   });
   \`\`\`

3. 章节内容淡入动画:
   \`\`\`css
   .chapter-content {
     opacity: 0;
     transform: translateY(50px);
     transition: all 0.8s ease-out;
   }
   .chapter-content.visible {
     opacity: 1;
     transform: translateY(0);
   }
   \`\`\`

4. 浮动元素动画:
   \`\`\`css
   @keyframes float {
     0%, 100% { transform: translateY(0px) rotate(0deg); }
     50% { transform: translateY(-20px) rotate(180deg); }
   }
   .floating-element {
     position: absolute;
     opacity: 0.6;
     animation: float 8s ease-in-out infinite;
   }
   .element-1 { top: 20%; left: 10%; animation-delay: 0s; }
   .element-2 { top: 60%; right: 15%; animation-delay: 2s; }
   .element-3 { bottom: 30%; left: 20%; animation-delay: 4s; }
   \`\`\`

5. 星空闪烁动画:
   \`\`\`css
   @keyframes sparkle {
     0%, 100% { opacity: 0.8; }
     50% { opacity: 1; }
   }
   .bg-stars {
     background: radial-gradient(2px 2px at 20px 30px, #fbbf24, transparent),
                 radial-gradient(2px 2px at 40px 70px, #7c3aed, transparent),
                 radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
                 /* 更多星星图案 */;
     background-size: 200px 100px;
     animation: sparkle 10s linear infinite;
   }
   \`\`\`

6. 章节导航点击滚动:
   \`\`\`javascript
   document.querySelectorAll('.chapter-dot').forEach(dot => {
     dot.addEventListener('click', () => {
       const target = document.getElementById(dot.dataset.target);
       target.scrollIntoView({ behavior: 'smooth' });
     });
   });
   \`\`\`

7. 数据点显示动画:
   \`\`\`javascript
   const dataObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const numbers = entry.target.querySelectorAll('.data-number');
         numbers.forEach((number, index) => {
           setTimeout(() => {
             number.style.animation = 'none';
             number.style.transform = 'scale(1.1)';
             setTimeout(() => {
               number.style.transform = 'scale(1)';
             }, 200);
           }, index * 100);
         });
       }
     });
   }, { threshold: 0.5 });

   document.querySelectorAll('.data-viz').forEach(el => {
     dataObserver.observe(el);
   });
   \`\`\`

【交互与动效】
- 视差背景:不同层以不同速度移动 (data-speed: 0.2 to 1.2)
- 章节内容:opacity 0→1, translateY 50px→0, transition 0.8s
- 浮动元素:translateY + rotate 动画,8s infinite
- 按钮 hover:translateY(-3px) + box-shadow 增强
- 章节导航点 hover:显示 tooltip
- Timeline 节点:渐变发光效果
- 数据点:入场时 scale 1.1→1 动画,stagger 0.1s
- 响应式:@media (max-width: 768px) 时:
  - Data Viz 改为 1fr 1fr (2 列)
  - Timeline 改为单列布局
  - 章节导航缩小 scale(0.8)

【输出要求】
- 使用语义化 HTML (section#chapter1, section#chapter2...)
- 所有动画使用 transform + opacity (GPU 加速,will-change: transform)
- 视差背景必须包含 data-speed 属性和 JavaScript 实现
- 章节导航必须包含 data-target 和 data-title 属性
- 星空背景使用纯 CSS radial-gradient 实现
- 支持 smooth scroll behavior
- clamp() 实现响应式字体大小
- 所有半透明元素使用 backdrop-filter: blur(10px)`,

  'en-US': `You are now a senior UI designer and front-end engineer. Please generate a UI that closely matches the current "Parallax Story Experience" page.
Requirements: Maintain overall layout, multi-layer parallax animations, and color scheme unchanged. Only replace copy, brand names, and minor details. Output using semantic HTML structure and TailwindCSS-like atomic classes.

【Use Case】
- Goal: Brand story pages, creative portfolios, art exhibition pages, game introduction pages, immersive long-form content
- Overall Quality: Cinematic, immersive, artistic, layered visual narrative experience

【Layout Structure】
1. Top Scroll Progress Bar
   - Fixed top, 3px height
   - Gradient background: #7c3aed → #fbbf24
   - JavaScript real-time width calculation (scrollY / totalHeight × 100)

2. Side Chapter Navigation Dots (5 dots)
   - Fixed right 2rem, vertically centered
   - Dot size 12px, transparent background rgba(255, 255, 255, 0.3)
   - Active state: #fbbf24, scale 1.5x, glow shadow 0 0 20px rgba(251, 191, 36, 0.6)
   - Hover shows title tooltip (data-title attribute)
     - Position: absolute, right: calc(100% + 1rem)
     - Background: rgba(15, 23, 42, 0.9), padding 0.25rem 0.75rem, border-radius 0.25rem
   - Click smooth scrolls to corresponding chapter (scrollIntoView smooth)

3. Chapter 1: In the Beginning
   - Full-screen container (min-height: 100vh)
   - Multi-layer parallax backgrounds:
     - Background layer 1: Starfield pattern (radial-gradient simulating stars), z-index: 1, data-speed="0.2"
     - Background layer 2: Nebula (ellipse gradient #7c3aed 30% transparent), z-index: 2, data-speed="0.5"
   - Content layer: z-index: 10, centered, max-width: 800px
   - Title: In the Beginning, gradient text (#fbbf24 → #7c3aed), font-size clamp(2.5rem, 8vw, 4rem)
   - Subtitle: Every great story starts with a single spark of imagination, #cbd5e1
   - Description paragraph: #e2e8f0, line-height 1.8
   - CTA button: Begin the Journey, gradient background (#7c3aed → #fbbf24), hover translateY(-3px)
   - Floating elements: ✨🌟💫 (absolute positioning, float 8s animation)

4. Chapter 2: The Journey Unfolds
   - Multi-layer parallax backgrounds:
     - Background layer 1: Starfield, data-speed="0.3"
     - Background layer 2: Planet (circle at 80% 20%, #fbbf24 40% transparent), data-speed="0.7"
   - Content layer:
     - Title: The Journey Unfolds
     - Subtitle: Through challenges and discoveries, we evolved
     - Data Viz:
       - Grid layout: auto-fit minmax(150px, 1fr), gap 2rem
       - 3 data points: 2019 (Foundation Year), 50+ (Team Members), 1M+ (Users Reached)
       - Each data point:
         - Semi-transparent background: rgba(124, 58, 237, 0.1), border rgba(124, 58, 237, 0.3), backdrop-filter blur
         - Number: font-size 2.5rem, gradient text
         - Label: #cbd5e1, font-size 0.875rem
     - Description paragraph

5. Chapter 3: Moment of Discovery
   - Multi-layer parallax backgrounds: Nebula + Starfield
   - Content layer:
     - Title: Moment of Discovery
     - Subtitle: When breakthrough meets preparation
     - Timeline (nested timeline):
       - Max-width: 600px, centered
       - Vertical gradient line: linear-gradient(180deg, #7c3aed, #fbbf24), width 2px
       - 3 timeline nodes:
         - Q1 2021: The Breakthrough
         - Q3 2021: First Success
         - Q1 2022: Market Validation
       - Each node:
         - Marker: 20px × 20px, #fbbf24, circular, glow shadow
         - Content: Semi-transparent background rgba(30, 41, 59, 0.5), border-radius 1rem, backdrop-filter blur
         - Date: #fbbf24, font-weight 700
         - Title h3 + description paragraph
       - Alternating layout: nth-child(even) flex-direction: row-reverse

6. Chapter 4: Era of Innovation
   - Multi-layer parallax backgrounds: Planet + Nebula
   - Content layer:
     - Title: Era of Innovation
     - Subtitle: Pushing boundaries beyond what was thought possible
     - Description paragraph
     - Data Viz:
       - 4 data points: 15 Patents Filed, 99.9% Uptime, 24/7 Global Support, ∞ Possibilities
       - Grid layout: auto-fit minmax(150px, 1fr)
     - CTA button: Experience Innovation

7. Chapter 5: Infinite Horizons
   - Multi-layer parallax backgrounds (3 layers):
     - Starfield data-speed="0.5"
     - Nebula data-speed="0.8"
     - Planet data-speed="1.2"
   - Content layer:
     - Title: Infinite Horizons
     - Subtitle: The story continues, and the best is yet to come
     - Description paragraph
     - CTA button: Join Our Universe
     - Floating elements: 🚀🌌⭐

【Color & Material Specs】
- Dark cosmic background: #0f172a
- Primary gradient colors:
  - Purple nebula: #7c3aed
  - Golden starlight: #fbbf24
- Text:
  - Primary text: #ffffff
  - Secondary text: #cbd5e1, #e2e8f0
- Semi-transparent cards: rgba(30, 41, 59, 0.5) + backdrop-filter: blur(10px)
- Border: rgba(124, 58, 237, 0.3)
- Glow effects: box-shadow: 0 0 20px rgba(251, 191, 36, 0.6)

【Key Animation Implementations】
1. Parallax scrolling effect:
   \`\`\`javascript
   window.addEventListener('scroll', () => {
     const scrolled = window.pageYOffset;
     const parallaxElements = document.querySelectorAll('.parallax-bg');
     const scrollProgress = document.getElementById('scrollProgress');

     // Update progress bar
     const totalHeight = document.body.scrollHeight - window.innerHeight;
     const progress = (scrolled / totalHeight) * 100;
     scrollProgress.style.width = progress + '%';

     // Apply parallax effect
     parallaxElements.forEach(element => {
       const speed = element.dataset.speed || 0.5;
       const yPos = -(scrolled * speed);
       element.style.transform = \`translateY(\${yPos}px)\`;
     });
   });
   \`\`\`

2. Intersection Observer chapter reveal:
   \`\`\`javascript
   const observerOptions = {
     threshold: 0.3,
     rootMargin: '0px 0px -100px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');

         // Update chapter navigation highlight
         const chapterDots = document.querySelectorAll('.chapter-dot');
         const chapterId = entry.target.id;

         chapterDots.forEach(dot => {
           dot.classList.remove('active');
           if (dot.dataset.target === chapterId) {
             dot.classList.add('active');
           }
         });
       }
     });
   }, observerOptions);

   document.querySelectorAll('.chapter-content').forEach(el => {
     observer.observe(el);
   });
   \`\`\`

3. Chapter content fade-in animation:
   \`\`\`css
   .chapter-content {
     opacity: 0;
     transform: translateY(50px);
     transition: all 0.8s ease-out;
   }
   .chapter-content.visible {
     opacity: 1;
     transform: translateY(0);
   }
   \`\`\`

4. Floating element animation:
   \`\`\`css
   @keyframes float {
     0%, 100% { transform: translateY(0px) rotate(0deg); }
     50% { transform: translateY(-20px) rotate(180deg); }
   }
   .floating-element {
     position: absolute;
     opacity: 0.6;
     animation: float 8s ease-in-out infinite;
   }
   .element-1 { top: 20%; left: 10%; animation-delay: 0s; }
   .element-2 { top: 60%; right: 15%; animation-delay: 2s; }
   .element-3 { bottom: 30%; left: 20%; animation-delay: 4s; }
   \`\`\`

5. Starfield sparkle animation:
   \`\`\`css
   @keyframes sparkle {
     0%, 100% { opacity: 0.8; }
     50% { opacity: 1; }
   }
   .bg-stars {
     background: radial-gradient(2px 2px at 20px 30px, #fbbf24, transparent),
                 radial-gradient(2px 2px at 40px 70px, #7c3aed, transparent),
                 radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
                 /* more star patterns */;
     background-size: 200px 100px;
     animation: sparkle 10s linear infinite;
   }
   \`\`\`

6. Chapter navigation click scroll:
   \`\`\`javascript
   document.querySelectorAll('.chapter-dot').forEach(dot => {
     dot.addEventListener('click', () => {
       const target = document.getElementById(dot.dataset.target);
       target.scrollIntoView({ behavior: 'smooth' });
     });
   });
   \`\`\`

7. Data point reveal animation:
   \`\`\`javascript
   const dataObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const numbers = entry.target.querySelectorAll('.data-number');
         numbers.forEach((number, index) => {
           setTimeout(() => {
             number.style.animation = 'none';
             number.style.transform = 'scale(1.1)';
             setTimeout(() => {
               number.style.transform = 'scale(1)';
             }, 200);
           }, index * 100);
         });
       }
     });
   }, { threshold: 0.5 });

   document.querySelectorAll('.data-viz').forEach(el => {
     dataObserver.observe(el);
   });
   \`\`\`

【Interactions & Effects】
- Parallax backgrounds: Different layers move at different speeds (data-speed: 0.2 to 1.2)
- Chapter content: opacity 0→1, translateY 50px→0, transition 0.8s
- Floating elements: translateY + rotate animation, 8s infinite
- Button hover: translateY(-3px) + enhanced box-shadow
- Chapter navigation dot hover: Show tooltip
- Timeline nodes: Gradient glow effect
- Data points: scale 1.1→1 animation on entrance, stagger 0.1s
- Responsive: At @media (max-width: 768px):
  - Data Viz changes to 1fr 1fr (2 columns)
  - Timeline changes to single column layout
  - Chapter navigation scales down scale(0.8)

【Output Requirements】
- Semantic HTML (section#chapter1, section#chapter2...)
- All animations use transform + opacity (GPU acceleration, will-change: transform)
- Parallax backgrounds must include data-speed attribute and JavaScript implementation
- Chapter navigation must include data-target and data-title attributes
- Starfield background implemented with pure CSS radial-gradient
- Support smooth scroll behavior
- Responsive font sizes with clamp()
- All semi-transparent elements use backdrop-filter: blur(10px)`
};
