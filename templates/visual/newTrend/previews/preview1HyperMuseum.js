// Preview 1: HYPER MUSEUM - Maximalism Art Festival
// 極繁主義藝術博物館 - 高飽和色彩、多元素、舞台式視覺

export const previewConfig = {
  id: 'maximalism-hyper-museum',
  name: {
    'zh-CN': 'HYPER MUSEUM 艺术节',
    'en-US': 'HYPER MUSEUM Art Festival'
  },
  type: 'full',
  renderMode: 'jsx',
  description: {
    'zh-CN': '极繁主义艺术博物馆页面，包含跑马灯、浮动形状、贴纸装饰、Bento Grid 布局和艺术家轮播。高饱和色彩搭配粗边框和强阴影，营造舞台感视觉体验。',
    'en-US': 'Maximalism art museum page featuring marquee banners, floating shapes, sticker decorations, Bento Grid layout, and artist carousel. High-saturation colors with thick borders and strong shadows create a stage-like visual experience.'
  },
  features: [
    'marquee-banner',
    'floating-shapes',
    'sticker-decorations',
    'bento-grid-layout',
    'artist-carousel',
    'noise-texture-overlay'
  ],
  colorScheme: {
    'zh-CN': '粉色 (#ec4899)、紫色 (#a855f7)、黄色 (#facc15)、蓝色 (#3b82f6)、绿色 (#4ade80)、洋红 (#FF00FF)',
    'en-US': 'Pink (#ec4899), Purple (#a855f7), Yellow (#facc15), Blue (#3b82f6), Green (#4ade80), Magenta (#FF00FF)'
  }
};

export const demoJSX = `
// HYPER MUSEUM - Maximalism Art Festival
// Using Preact for rendering

function DemoComponent() {
  const { useState, useEffect } = window.preact;

  // Marquee Component
  const Marquee = ({ text, direction = 'left', className = '' }) => (
    h('div', { className: 'overflow-hidden whitespace-nowrap py-3 border-y-4 border-black bg-yellow-300 ' + className },
      h('div', { className: 'inline-block font-black text-xl uppercase tracking-tighter', style: { animation: 'marquee-' + direction + ' 20s linear infinite' } },
        h('span', { className: 'mx-4' }, text),
        h('span', { className: 'mx-4 opacity-50' }, text),
        h('span', { className: 'mx-4' }, text),
        h('span', { className: 'mx-4 opacity-50' }, text),
        h('span', { className: 'mx-4' }, text),
        h('span', { className: 'mx-4 opacity-50' }, text)
      )
    )
  );

  // Floating Shape Component
  const FloatingShape = ({ type, color, top, left, rotate, size, delay }) => {
    const shapes = { circle: 'rounded-full', square: 'rounded-none', pill: 'rounded-full' };
    return h('div', {
      className: 'absolute ' + (shapes[type] || 'rounded-lg') + ' ' + color + ' border-4 border-black z-0 opacity-80',
      style: { top, left, width: size, height: size, transform: 'rotate(' + rotate + 'deg)', animation: 'float 6s ease-in-out infinite', animationDelay: delay + 's' }
    });
  };

  // Sticker Component
  const Sticker = ({ icon, top, left, rotate, className = '' }) => (
    h('div', {
      className: 'absolute z-10 bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-pointer ' + className,
      style: { top, left, transform: 'rotate(' + rotate + 'deg)' }
    }, h('span', { className: 'text-2xl' }, icon))
  );

  // Navbar
  const Navbar = () => (
    h('nav', { className: 'fixed top-4 left-4 right-4 z-50 flex justify-between items-center bg-white border-4 border-black shadow-[8px_8px_0px_0px_#FF00FF] p-4' },
      h('div', { className: 'flex items-center gap-2' },
        h('div', { className: 'bg-black text-white p-1 font-black text-xl rotate-3' }, 'HYPER'),
        h('div', { className: 'font-black text-xl tracking-tighter italic -rotate-2 text-blue-600' }, 'MUSEUM')
      ),
      h('div', { className: 'hidden md:flex gap-4 font-bold text-sm' },
        ['EXHIBITIONS', 'ARTISTS', 'SHOP', 'VISIT'].map(item =>
          h('a', { key: item, href: '#', className: 'hover:text-purple-600 hover:underline decoration-wavy decoration-2 underline-offset-4 transition-all' }, item)
        )
      ),
      h('button', { className: 'bg-green-400 hover:bg-green-300 text-black border-2 border-black font-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2' },
        '🎫 GET TICKETS'
      )
    )
  );

  // Hero Section
  const Hero = () => (
    h('header', { className: 'relative min-h-screen pt-28 pb-16 px-6 flex flex-col justify-center items-center overflow-hidden bg-[#F0F0F0]' },
      // Floating Shapes
      h(FloatingShape, { type: 'circle', color: 'bg-pink-500', top: '10%', left: '5%', size: '120px', rotate: 10, delay: 0 }),
      h(FloatingShape, { type: 'square', color: 'bg-blue-500', top: '60%', left: '80%', size: '160px', rotate: 45, delay: 1 }),
      h(FloatingShape, { type: 'pill', color: 'bg-yellow-400', top: '20%', left: '70%', size: '100px', rotate: -20, delay: 2 }),
      // Stickers
      h(Sticker, { icon: '👑', top: '15%', left: '20%', rotate: -15 }),
      h(Sticker, { icon: '⚡', top: '75%', left: '10%', rotate: 20 }),

      h('div', { className: 'relative z-10 text-center max-w-5xl mx-auto' },
        h('div', { className: 'inline-block bg-black text-white px-3 py-1 font-mono text-xs mb-4 border-2 border-green-400 -rotate-2' },
          'EST. 2024 // DIGITAL CHAOS // ART FESTIVAL'
        ),
        h('h1', { className: 'text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-black relative' },
          h('span', { className: 'block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-default' }, 'MAXIMAL'),
          h('span', { className: 'block text-white drop-shadow-[6px_6px_0px_#0000FF]', style: { WebkitTextStroke: '2px black' } }, 'EXPRESSION'),
          h('span', { className: 'block text-pink-500 italic transform -skew-x-12' }, 'UNLEASHED')
        ),
        h('p', { className: 'mt-6 text-lg md:text-xl font-bold bg-white border-2 border-black p-4 inline-block shadow-[8px_8px_0px_0px_#00FF00] rotate-1 max-w-xl mx-auto' },
          '"More is More." Immersive Art Experience | 20+ International Artists | 3D Visual Installations',
          h('br'),
          h('span', { className: 'text-purple-600' }, '📅 OCT 20 - NOV 15')
        ),
        h('div', { className: 'mt-10 flex flex-wrap justify-center gap-4' },
          h('button', { className: 'group relative px-6 py-3 bg-purple-600 text-white font-black text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#FF00FF] hover:-translate-y-1 transition-all overflow-hidden' },
            h('span', { className: 'relative z-10 flex items-center gap-2' }, 'EXPLORE NOW ↗')
          )
        )
      )
    )
  );

  // Bento Grid Section
  const BentoGrid = () => (
    h('section', { className: 'py-16 px-4 bg-black relative' },
      h('div', { className: 'absolute inset-0', style: { backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)', backgroundSize: '40px 40px' } }),
      h('div', { className: 'max-w-6xl mx-auto relative z-10' },
        h('div', { className: 'mb-10 flex items-end gap-4' },
          h('h2', { className: 'text-5xl md:text-7xl font-black text-white' },
            'FEATURED ', h('br'), h('span', { className: 'text-transparent', style: { WebkitTextStroke: '2px white' } }, 'CHAOS')
          ),
          h('div', { className: 'bg-pink-500 border-2 border-white p-2 animate-bounce rounded-full' }, '↗')
        ),
        h('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-4' },
          // Card 1: Large Feature
          h('div', { className: 'md:col-span-2 md:row-span-2 bg-yellow-400 border-4 border-white shadow-[10px_10px_0px_0px_#FF00FF] p-5 flex flex-col justify-between group overflow-hidden relative cursor-pointer hover:rotate-1 transition-transform min-h-[350px]' },
            h('div', { className: 'absolute top-0 right-0 bg-black text-white px-3 py-1 font-bold text-lg border-l-4 border-b-4 border-white' }, '#01'),
            h('span', { className: 'text-5xl mb-4 group-hover:scale-125 transition-transform duration-500' }, '👁️'),
            h('div', { className: 'relative z-10' },
              h('h3', { className: 'text-4xl font-black uppercase leading-none mb-2' }, 'Visual', h('br'), 'Overload'),
              h('p', { className: 'font-bold border-t-4 border-black pt-2 mt-2' }, 'Immersive Light & Shadow Interactive Gallery')
            )
          ),
          // Card 2: Artist
          h('div', { className: 'md:col-span-1 bg-purple-600 border-4 border-black p-4 flex items-center justify-center relative overflow-hidden group min-h-[160px]' },
            h('div', { className: 'absolute inset-0 bg-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300' }),
            h('span', { className: 'relative z-10 bg-white border-2 border-black px-2 font-black rotate-3 group-hover:rotate-0 transition-all' }, 'DJ_KROMA')
          ),
          // Card 3: Info
          h('div', { className: 'md:col-span-1 md:row-span-2 bg-blue-500 border-4 border-white shadow-[-8px_8px_0px_0px_#FFFF00] p-5 text-white flex flex-col items-center justify-center text-center hover:scale-105 transition-transform' },
            h('span', { className: 'text-4xl mb-4 animate-pulse' }, '🎵'),
            h('h3', { className: 'text-2xl font-black mb-4' }, 'LIVE STAGE'),
            h('ul', { className: 'text-left font-mono font-bold space-y-2 w-full text-sm' },
              h('li', { className: 'bg-black/20 p-2' }, '20:00 - INTRO'),
              h('li', { className: 'bg-black/20 p-2' }, '21:30 - ACID BASS'),
              h('li', { className: 'bg-black/20 p-2' }, '23:00 - END')
            )
          ),
          // Card 4: Ticket
          h('div', { className: 'md:col-span-1 bg-green-400 border-4 border-black p-4 flex flex-col justify-center items-center gap-2 group cursor-pointer min-h-[160px]' },
            h('span', { className: 'text-4xl group-hover:rotate-12 transition-transform' }, '🎫'),
            h('div', { className: 'font-black text-xl uppercase text-center' }, 'Get Passes'),
            h('div', { className: 'bg-black text-green-400 px-3 font-mono font-bold group-hover:bg-white group-hover:text-black transition-colors' }, '$50.00')
          ),
          // Card 5: Quote
          h('div', { className: 'md:col-span-2 bg-white border-4 border-black p-6 flex items-center shadow-[8px_8px_0px_0px_#000]' },
            h('p', { className: 'font-black text-xl md:text-2xl leading-tight' },
              h('span', { className: 'text-purple-600 text-4xl' }, '"'),
              'WE CREATE ART THAT SCREAMS. SILENCE IS NOT AN OPTION.',
              h('span', { className: 'text-purple-600 text-4xl' }, '"')
            )
          )
        )
      )
    )
  );

  // Carousel Section
  const CarouselSection = () => (
    h('section', { className: 'py-24 overflow-hidden bg-[#FF44CC] border-y-8 border-black' },
      h('div', { className: 'max-w-6xl mx-auto px-6 mb-10 text-center relative' },
        h('span', { className: 'absolute top-0 left-10 text-6xl text-yellow-300 drop-shadow-[4px_4px_0px_black]', style: { animation: 'spin 10s linear infinite' } }, '⭐'),
        h('h2', { className: 'text-6xl font-black text-white drop-shadow-[6px_6px_0px_black]' }, 'THE LINEUP')
      ),
      h('div', { className: 'flex gap-6 overflow-x-auto pb-10 px-10 snap-x', style: { scrollbarWidth: 'none' } },
        [1, 2, 3, 4, 5].map(i =>
          h('div', { key: i, className: 'snap-center shrink-0 w-[280px] h-[400px] bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col p-4 hover:rotate-0 hover:scale-105 transition-all duration-300', style: { transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' } },
            h('div', { className: 'h-[55%] border-2 border-black mb-3 relative overflow-hidden', style: { background: i % 2 === 0 ? 'linear-gradient(to bottom right, #60a5fa, #4ade80)' : 'linear-gradient(to bottom right, #facc15, #ef4444)' } },
              h('div', { className: 'absolute bottom-2 left-2 bg-white border border-black px-2 font-mono font-bold text-xs' }, 'IMG_00' + i + '.JPG')
            ),
            h('h3', { className: 'text-3xl font-black uppercase' }, 'Artist ' + i),
            h('p', { className: 'font-bold text-gray-600 mt-2 text-xs leading-tight' }, 'Maximalist installation art showcase. High saturation meets geometrical madness.'),
            h('div', { className: 'mt-auto flex justify-between items-center pt-3 border-t-2 border-dashed border-black' },
              h('span', { className: 'text-xl cursor-pointer hover:scale-125 transition-transform' }, '❤️'),
              h('button', { className: 'bg-black text-white px-4 py-1 font-bold hover:bg-purple-600 transition-colors' }, 'VIEW')
            )
          )
        )
      )
    )
  );

  // Footer
  const Footer = () => (
    h('footer', { className: 'bg-blue-600 border-t-4 border-black p-10 relative overflow-hidden' },
      h('div', { className: 'absolute inset-0 opacity-10', style: { backgroundImage: 'radial-gradient(circle, white 2px, transparent 1px)', backgroundSize: '20px 20px' } }),
      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10' },
        h('div', null,
          h('h2', { className: 'text-6xl font-black text-white tracking-tighter mb-6' },
            "DON'T ", h('br'), 'BE ', h('br'), h('span', { className: 'text-black bg-yellow-400 px-2' }, 'BORING')
          ),
          h('div', { className: 'flex gap-4' },
            ['⬡', '😊', '⚡'].map((icon, idx) =>
              h('div', { key: idx, className: 'bg-white border-2 border-black p-3 hover:-translate-y-2 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' },
                h('span', { className: 'text-xl' }, icon)
              )
            )
          )
        ),
        h('div', { className: 'flex flex-col justify-between items-start md:items-end' },
          h('div', { className: 'bg-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-sm' },
            h('p', { className: 'font-bold text-base mb-3' }, "JOIN THE NEWSLETTER (OR DON'T)"),
            h('div', { className: 'flex gap-2' },
              h('input', { type: 'email', placeholder: 'YOUR@EMAIL.COM', className: 'w-full bg-gray-100 border-2 border-black p-2 font-mono text-sm focus:outline-none focus:bg-yellow-100' }),
              h('button', { className: 'bg-black text-white px-4 font-bold border-2 border-black hover:bg-green-400 hover:text-black transition-colors' }, 'OK')
            )
          ),
          h('div', { className: 'mt-10 text-white font-mono font-bold text-right' },
            h('p', null, '© 2024 HYPER MUSEUM.'),
            h('p', null, 'DESIGNED FOR THE BOLD.')
          )
        )
      )
    )
  );

  return h('div', { className: 'min-h-screen text-black' },
    // Noise Overlay
    h('div', { className: 'fixed inset-0 pointer-events-none z-[60] opacity-[0.05] mix-blend-overlay', style: { backgroundImage: "url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\\")" } }),

    h(Navbar),
    h('main', null,
      h(Hero),
      h(Marquee, { text: '★ ART IS EXPLOSION ★ MORE IS MORE ★ WAKE UP YOUR EYES ★', direction: 'left', className: 'bg-yellow-300 -rotate-1 z-20 relative' }),
      h(BentoGrid),
      h(Marquee, { text: '✦ EXHIBITION OPENING ✦ FREE DRINKS ✦ LOUD MUSIC ✦', direction: 'right', className: 'bg-green-400 rotate-1 z-20 relative top-[-20px]' }),
      h(CarouselSection)
    ),
    h(Footer),

    // CSS Keyframes
    h('style', null, \`
      @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(10px, -20px) rotate(5deg); }
      }
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-bounce {
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
        50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
      }
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    \`)
  );
}
`;

export const previewStyles = `
/* Styles are defined inline in JSX */
`;

export const previewCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「HYPER MUSEUM 极繁主义艺术节」界面风格高度一致的全新页面。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新完整 HTML 页面。

【设计场景】
- 这是一个艺术博物馆、音乐节或创意品牌的 Landing Page
- 用户会在这里浏览展览信息、购票、了解艺术家阵容
- 整体氛围像是置身于当代艺术馆或夜间艺术节：热闹、张扬、庆典式

【整体布局结构】
1. 顶部导航栏
   - 固定定位，白色背景 + 粗黑边框 + 洋红色阴影
   - Logo 分两部分：黑底白字 + 彩色斜体字
   - 导航项使用波浪下划线 hover 效果
   - CTA 按钮使用绿色背景 + 粗边框 + 偏移阴影

2. Hero 区域
   - 浅灰背景 (#F0F0F0)
   - 多个浮动彩色几何形状（圆形、方形）作为装饰
   - 贴纸式装饰元素（Emoji + 白色背景 + 粗边框 + 阴影）
   - 超大粗体标题，多行不同样式：
     - 第一行：纯黑色，hover 渐变效果
     - 第二行：白色描边 + 蓝色阴影
     - 第三行：粉色斜体 + skew 变形
   - 信息卡片：白色背景 + 粗边框 + 绿色阴影 + 轻微旋转

3. 跑马灯横幅
   - 黄色/绿色背景 + 粗黑边框
   - 无限循环滚动文字 + 星号/符号装饰
   - 轻微旋转 (-1deg / 1deg)

4. Bento Grid 内容区
   - 黑色背景 + 网格线纹理
   - 标题使用描边效果
   - 卡片使用高饱和色彩：黄、紫、蓝、绿
   - 粗白色/黑色边框 + 偏移彩色阴影
   - 卡片 hover 时旋转/缩放

5. 艺术家轮播
   - 洋红色背景 + 粗黑边框
   - 水平滚动卡片列表
   - 卡片交替旋转角度
   - 渐变背景图片区域

6. Footer
   - 蓝色背景 + 圆点纹理
   - 大标题使用黄色高亮块
   - 订阅表单：白色卡片 + 粗边框 + 阴影

【色彩体系】
主要色彩（高饱和）：
- 粉色：#ec4899 (pink-500)
- 紫色：#a855f7 (purple-500)
- 黄色：#facc15 (yellow-400)
- 蓝色：#3b82f6 (blue-500)
- 绿色：#4ade80 (green-400)
- 洋红：#FF00FF
- 橙色：#f97316 (orange-500)

阴影色彩：
- 洋红阴影：shadow-[8px_8px_0px_0px_#FF00FF]
- 绿色阴影：shadow-[8px_8px_0px_0px_#00FF00]
- 黄色阴影：shadow-[-8px_8px_0px_0px_#FFFF00]
- 黑色阴影：shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]

【视觉元素】
1. 边框系统
   - 粗边框：border-4（4px）
   - 超粗边框：border-8（8px）用于分隔区域
   - 边框颜色：黑色或白色

2. 阴影系统
   - 硬阴影（无模糊）
   - 偏移量：8px-12px
   - 颜色：纯色（洋红、绿、黄、黑）

3. 几何装饰
   - 浮动圆形、方形
   - 使用 animation: float 缓慢漂浮
   - 高饱和色彩 + 黑色边框

4. 贴纸元素
   - 白色背景
   - 粗黑边框
   - 偏移阴影
   - 内含 Emoji 或图标

【排版规范】
- 标题：font-black（900）、tracking-tighter
- 导航：font-bold、uppercase
- 正文：font-bold、较小字号
- 代码/标签：font-mono

【交互状态】
- Hover 缩放：scale-105 或 scale-110
- Hover 旋转：rotate-0 恢复
- Hover 阴影加强
- Hover 背景色变化
- 过渡时间：150-300ms

【输出要求】
- 使用语义化 HTML5 结构
- 使用 TailwindCSS 原子类
- 完整的 HTML 文件
- 响应式设计：md: 断点适配
- 必须保持「视觉极度丰富」的极繁主义风格
`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a brand new page that maintains high visual consistency with the current "HYPER MUSEUM Maximalism Art Festival" style.

Your goal: Create a complete new page that is immediately recognizable as part of the same design family, without copying the existing content.

[Scenario]
- This is a landing page for an art museum, music festival, or creative brand
- Users will browse exhibition info, buy tickets, and learn about artist lineups
- The overall atmosphere should feel like being at a contemporary art show or night festival: festive, bold, celebratory

[Layout Structure]
1. Top Navigation
   - Fixed position, white background + thick black border + magenta shadow
   - Logo in two parts: black bg white text + colorful italic text
   - Nav items with wavy underline hover effect
   - CTA button with green background + thick border + offset shadow

2. Hero Section
   - Light gray background (#F0F0F0)
   - Multiple floating colorful geometric shapes as decoration
   - Sticker-style decorative elements (Emoji + white bg + thick border + shadow)
   - Oversized bold title with multiple line styles:
     - Line 1: Pure black, gradient on hover
     - Line 2: White with stroke + blue shadow
     - Line 3: Pink italic + skew transform
   - Info card: white bg + thick border + green shadow + slight rotation

3. Marquee Banner
   - Yellow/green background + thick black border
   - Infinite loop scrolling text + star/symbol decorations
   - Slight rotation (-1deg / 1deg)

4. Bento Grid Content
   - Black background + grid line texture
   - Title with stroke effect
   - Cards with high-saturation colors: yellow, purple, blue, green
   - Thick white/black borders + offset colored shadows
   - Cards rotate/scale on hover

5. Artist Carousel
   - Magenta background + thick black border
   - Horizontal scrolling card list
   - Cards with alternating rotation angles
   - Gradient background image areas

6. Footer
   - Blue background + dot pattern texture
   - Large title with yellow highlight block
   - Newsletter form: white card + thick border + shadow

[Color System]
Primary Colors (High Saturation):
- Pink: #ec4899 (pink-500)
- Purple: #a855f7 (purple-500)
- Yellow: #facc15 (yellow-400)
- Blue: #3b82f6 (blue-500)
- Green: #4ade80 (green-400)
- Magenta: #FF00FF
- Orange: #f97316 (orange-500)

Shadow Colors:
- Magenta: shadow-[8px_8px_0px_0px_#FF00FF]
- Green: shadow-[8px_8px_0px_0px_#00FF00]
- Yellow: shadow-[-8px_8px_0px_0px_#FFFF00]
- Black: shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]

[Visual Elements]
1. Border System
   - Thick: border-4 (4px)
   - Extra thick: border-8 (8px) for section dividers
   - Colors: black or white

2. Shadow System
   - Hard shadows (no blur)
   - Offset: 8px-12px
   - Colors: solid (magenta, green, yellow, black)

3. Geometric Decorations
   - Floating circles, squares
   - Float animation for gentle movement
   - High-saturation colors + black border

4. Sticker Elements
   - White background
   - Thick black border
   - Offset shadow
   - Contains Emoji or icons

[Typography]
- Headings: font-black (900), tracking-tighter
- Navigation: font-bold, uppercase
- Body: font-bold, smaller size
- Code/labels: font-mono

[Interaction States]
- Hover scale: scale-105 or scale-110
- Hover rotation: rotate-0 restore
- Hover shadow strengthen
- Hover background color change
- Transition duration: 150-300ms

[Output Requirements]
- Use semantic HTML5 structure
- Use TailwindCSS utility classes
- Complete HTML file
- Responsive design: md: breakpoint
- Must maintain the "visually dense" Maximalism aesthetic
`
};
