// Typography First - Visual Manifesto Style
// 排版優先 - 視覺宣言風格

// 完整頁面 HTML
export const typographyFirstFullPageHTML = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography First | Visual Manifesto</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800;900&family=Playfair+Display:ital,wght@0,700;1,700;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                        mono: ['Space Mono', 'monospace'],
                    },
                    colors: {
                        'void': '#080808',
                        'paper': '#f4f4f0',
                        'charcoal': '#1a1a1a',
                    },
                    fontSize: {
                        'huge': 'clamp(4rem, 15vw, 18rem)',
                        'display': 'clamp(3rem, 8vw, 10rem)',
                        'editorial': 'clamp(1.5rem, 3vw, 4rem)',
                    },
                    letterSpacing: {
                        'tightest': '-0.08em',
                        'tighter': '-0.05em',
                    },
                    animation: {
                        'marquee': 'marquee 25s linear infinite',
                        'breathe': 'breathe 4s ease-in-out infinite',
                    },
                    keyframes: {
                        marquee: {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-100%)' },
                        },
                        breathe: {
                            '0%, 100%': { fontVariationSettings: '"wght" 800', letterSpacing: '-0.05em' },
                            '50%': { fontVariationSettings: '"wght" 850', letterSpacing: '-0.02em' },
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="font-sans relative bg-void text-paper overflow-x-hidden">

    <style>
        /* Custom Typographic Styles */
        body {
            background-color: #080808;
            color: #f4f4f0;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* The Outline Text Effect */
        .text-outline {
            color: transparent;
            -webkit-text-stroke: 2px #f4f4f0;
            position: relative;
            transition: all 0.4s ease-out;
        }

        .text-outline:hover {
            color: #f4f4f0;
            -webkit-text-stroke: 0px transparent;
        }

        /* Heavy Gradient Text */
        .text-gradient {
            background: linear-gradient(to right, #ffffff, #666666);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Scroll Reveal Animation Classes */
        .reveal-type {
            opacity: 0;
            transform: translateY(50px) scale(0.98);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform, opacity;
        }

        .reveal-type.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        /* Stagger delays */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #080808;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        /* Selection */
        ::selection {
            background: #f4f4f0;
            color: #080808;
        }

        /* Noise Texture Overlay */
        .noise-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 50;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Kinetic Hover Underline */
        .kinetic-link {
            position: relative;
            text-decoration: none;
            display: inline-block;
        }
        .kinetic-link::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 4px;
            bottom: 0;
            left: 0;
            background-color: currentColor;
            transform-origin: bottom right;
            transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .kinetic-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    </style>

    <!-- Noise Texture for "Paper" feel -->
    <div class="noise-overlay"></div>

    <!-- Navigation (Minimalist, Absolute) -->
    <nav class="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white pointer-events-none">
        <div class="font-mono text-sm tracking-widest uppercase pointer-events-auto cursor-pointer">[ Typography_Core ]</div>
        <div class="font-mono text-sm pointer-events-auto">
            <span class="hidden md:inline mr-6 opacity-60">Vol. 01</span>
            <a href="#" class="hover:line-through">Menu</a>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <header class="min-h-screen flex flex-col justify-center px-4 md:px-12 pt-20 relative overflow-hidden">

        <!-- Background "Glow" purely via CSS gradients -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neutral-800 rounded-full blur-[120px] opacity-20 -z-10"></div>

        <div class="max-w-[90rem] mx-auto w-full">
            <div class="flex flex-col leading-[0.85] font-black uppercase tracking-tightest">

                <!-- Line 1: Ultra Heavy Solid -->
                <h1 class="text-huge text-paper reveal-type">
                    Visual
                </h1>

                <!-- Line 2: Mixed Weight & Serif/Sans Hybrid -->
                <div class="flex items-baseline flex-wrap gap-4 reveal-type delay-100">
                    <span class="text-huge text-outline font-serif italic tracking-tighter">Hero</span>
                    <!-- Decorative technical block -->
                    <div class="hidden lg:flex flex-col justify-end pb-8 ml-auto max-w-xs font-mono text-xs tracking-normal normal-case text-gray-400 leading-relaxed border-l border-gray-700 pl-4 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
                        <p>The page relies on type hierarchy and kinetic wording as the visual hero rather than heavy imagery.</p>
                        <p class="mt-2 text-white">→ Scroll to Read</p>
                    </div>
                </div>

                <!-- Line 3: Gradient Heavy -->
                <h1 class="text-huge text-gradient reveal-type delay-200">
                    Hierarchy
                </h1>
            </div>
        </div>

        <!-- Scrolling Marquee at bottom of hero -->
        <div class="absolute bottom-12 left-0 w-full overflow-hidden border-y border-white/10 py-4">
            <div class="whitespace-nowrap animate-marquee flex gap-8 font-mono text-sm md:text-base uppercase tracking-widest text-gray-500">
                <span>Ultra-Bold Weights</span> • <span>Gradient Fills</span> • <span>Glow Shadows</span> • <span>Outlines</span> • <span>Noise Masks</span> • <span>Depth</span> •
                <span>Ultra-Bold Weights</span> • <span>Gradient Fills</span> • <span>Glow Shadows</span> • <span>Outlines</span> • <span>Noise Masks</span> • <span>Depth</span> •
            </div>
        </div>
    </header>

    <!-- SECTION 1: VISUAL PHILOSOPHY (Editorial Layout) -->
    <section class="py-32 px-4 md:px-12 border-t border-white/10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

            <!-- Sticky Label -->
            <div class="md:col-span-3">
                <span class="sticky top-32 font-mono text-xs uppercase tracking-widest text-gray-500 block border-t border-gray-700 pt-4">01 — Philosophy</span>
            </div>

            <!-- Content -->
            <div class="md:col-span-9">
                <h2 class="text-display font-black leading-[0.9] tracking-tighter mb-12 reveal-type">
                    Hierarchy is<br>
                    <span class="text-gray-600 font-serif italic font-thin">defined by</span><br>
                    Contrast.
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl text-gray-300 leading-relaxed font-sans reveal-type delay-100">
                    <p>
                        <span class="text-white font-bold">Hero lines dominate.</span> Use ultra-bold weights, gradients, or stroked outlines to create immediate impact. The background stays calm—navy, charcoal, or off-white—so the rhythm of the type stands out.
                    </p>
                    <p>
                        Secondary copy maintains strong contrast and clear grouping. Body text prioritizes readability with a controlled measure and generous line-height (1.6+).
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 2: MATERIAL & TEXTURE (Grid System) -->
    <section class="py-32 bg-white text-black px-4 md:px-12 relative">
        <div class="max-w-[90rem] mx-auto">

            <div class="flex justify-between items-end mb-20 border-b-4 border-black pb-8 reveal-type">
                <h2 class="text-editorial font-bold tracking-tight uppercase">Materiality</h2>
                <div class="font-mono text-sm hidden md:block">TYPE AS MATERIAL</div>
            </div>

            <!-- Heavy Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8">

                <!-- Card 1 -->
                <div class="group cursor-pointer reveal-type">
                    <div class="h-[300px] flex items-center justify-center bg-black text-white relative overflow-hidden mb-6">
                        <span class="font-serif italic text-6xl md:text-8xl group-hover:scale-110 transition-transform duration-500">Aa</span>
                        <div class="absolute inset-0 border border-white/20 m-4"></div>
                    </div>
                    <h3 class="text-4xl font-black mb-2 group-hover:underline decoration-4">Serif</h3>
                    <p class="font-mono text-sm text-gray-600">Editorial flavor. Use sparingly to balance technical edges.</p>
                </div>

                <!-- Card 2 -->
                <div class="group cursor-pointer reveal-type delay-100">
                    <div class="h-[300px] flex items-center justify-center bg-gray-100 text-black relative overflow-hidden mb-6 border-2 border-black">
                        <span class="font-sans font-black text-6xl md:text-8xl group-hover:tracking-widest transition-all duration-500">Bb</span>
                    </div>
                    <h3 class="text-4xl font-black mb-2 group-hover:underline decoration-4">Sans</h3>
                    <p class="font-mono text-sm text-gray-600">Technical precision. High readability. The workhorse.</p>
                </div>

                <!-- Card 3 -->
                <div class="group cursor-pointer reveal-type delay-200">
                    <div class="h-[300px] flex items-center justify-center bg-zinc-900 text-white relative overflow-hidden mb-6">
                        <span class="font-mono text-6xl md:text-8xl group-hover:rotate-12 transition-transform duration-300">&lt;/&gt;</span>
                    </div>
                    <h3 class="text-4xl font-black mb-2 group-hover:underline decoration-4">Mono</h3>
                    <p class="font-mono text-sm text-gray-600">Data, code, and structure. Adds a functional aesthetic.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: INTERACTION (Kinetic Type) -->
    <section class="min-h-screen flex items-center justify-center px-4 md:px-12 relative border-t border-white/10">

        <div class="text-center w-full max-w-6xl">
            <div class="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8 reveal-type">Interaction Experience</div>

            <div class="space-y-4">
                <!-- Hover Interaction Demo -->
                <div class="overflow-hidden reveal-type">
                    <a href="#" class="kinetic-link text-display font-black uppercase tracking-tightest leading-none block hover:italic hover:font-serif transition-all duration-300">
                        Motion Lives
                    </a>
                </div>

                <div class="overflow-hidden reveal-type delay-100">
                    <a href="#" class="kinetic-link text-display font-black text-outline uppercase tracking-tightest leading-none block hover:text-white transition-colors duration-300">
                        On The
                    </a>
                </div>

                <div class="overflow-hidden reveal-type delay-200">
                    <a href="#" class="kinetic-link text-display font-black uppercase tracking-tightest leading-none block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-gray-800 animate-pulse">
                        Letters
                    </a>
                </div>
            </div>

            <p class="mt-16 max-w-xl mx-auto text-gray-400 font-mono text-sm leading-loose reveal-type delay-300">
                Hover tweaks weight, stroke, or underline rather than large shifts to keep reading stable. Timed 200–500ms with ease-out curves.
            </p>
        </div>

    </section>

    <!-- FOOTER -->
    <footer class="py-20 px-4 md:px-12 border-t border-white/20 bg-neutral-900">
        <div class="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
                <h2 class="text-editorial font-serif italic mb-4">Make it readable.</h2>
                <h2 class="text-editorial font-black uppercase tracking-tight">Make it Heavy.</h2>
            </div>
            <div class="mt-12 md:mt-0 font-mono text-xs text-gray-500 text-right">
                <p>Designed as a Prompt Response</p>
                <p class="mt-2">© 2024 Typography Core</p>
            </div>
        </div>
    </footer>

    <!-- Script for Interactions -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-type');
            revealElements.forEach(el => observer.observe(el));
        });
    </script>
</body>
</html>`;

// 完整頁面 CSS（已內嵌於 HTML）
export const typographyFirstFullPageStyles = '';

// 卡片演示 HTML（精簡版）
export const typographyFirstDemoHTML = `
<div class="w-full h-full flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-void to-charcoal overflow-hidden p-6">
  <!-- Hero Section Preview -->
  <div class="flex flex-col items-center gap-2">
    <h1 class="text-5xl md:text-6xl font-black text-paper leading-tight">
      Visual
    </h1>
    <h2 class="text-4xl md:text-5xl font-serif italic text-outline">
      Hero
    </h2>
  </div>

  <!-- Gradient Text -->
  <div class="text-4xl md:text-5xl font-black text-gradient">
    Hierarchy
  </div>

  <!-- Typography Features -->
  <div class="flex gap-6 mt-6 text-center">
    <div>
      <p class="text-xs uppercase tracking-widest text-gray-500 mb-1">Serif</p>
      <p class="font-serif italic text-2xl">Aa</p>
    </div>
    <div>
      <p class="text-xs uppercase tracking-widest text-gray-500 mb-1">Sans</p>
      <p class="font-sans font-black text-2xl">Bb</p>
    </div>
    <div>
      <p class="text-xs uppercase tracking-widest text-gray-500 mb-1">Mono</p>
      <p class="font-mono text-2xl">&lt;/&gt;</p>
    </div>
  </div>
</div>
`;

// 卡片演示 CSS
export const typographyFirstDemoStyles = `
.text-outline {
  color: transparent;
  -webkit-text-stroke: 2px #f4f4f0;
  transition: all 0.4s ease-out;
}

.text-outline:hover {
  color: #f4f4f0;
  -webkit-text-stroke: 0px transparent;
}

.text-gradient {
  background: linear-gradient(to right, #ffffff, #666666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

// 模板數據
export const typographyFirstTemplates = [
  {
    id: 'typographyFirst',
    title: 'styles.typography.typographyFirst.title',
    description: 'styles.typography.typographyFirst.description',

    // 卡片演示 HTML
    demoHTML: typographyFirstDemoHTML,

    // 卡片演示 CSS
    customStyles: typographyFirstDemoStyles,

    // 完整頁面 HTML
    fullPageHTML: typographyFirstFullPageHTML,

    // 完整頁面 CSS（已內嵌）
    fullPageStyles: typographyFirstFullPageStyles,

    demoBoxClass: 'bg-gradient-to-b from-void to-charcoal',
    colorScheme: 'styles.typography.typographyFirst.colorScheme',

    // ✨ 模板級 CustomPrompt
    customPrompt: {
      'zh-CN': `你現在是一名資深 UI 設計師兼前端工程師，請生成一個展示「排版優先」設計哲學的現代排版頁面。

要求：突出文字本身的視覺表現力，使用超大字重、漸變填充、文字描邊和互動效果作為視覺重點，而非依賴圖像。背景保持深色（深灰/黑色），讓排版成為絕對主角。

【使用場景】
- 設計作品集首頁
- 創意機構品牌頁
- 現代科技公司的排版展示
- 設計哲學或創意宣言頁面

【核心元素】
1. **超大英雄標題**：多行排版，結合不同字重和字體風格
   - 第一行：Ultra-bold sans-serif（如 text-6xl-8xl）
   - 第二行：Serif italic 斜體（帶文字描邊效果）
   - 第三行：漸變填充文字

2. **排版層級系統**
   - 主標題（H1）：font-black，clamp 響應式字號
   - 副標題（H2）：font-bold 或 font-semibold
   - 正文：leading-relaxed，行高至少 1.6

3. **視覺效果**
   - 文字描邊（Text Stroke）：-webkit-text-stroke 效果
   - 漸變填充：linear-gradient + background-clip
   - 互動效果：hover 時改變字重、斜體或顏色
   - Scroll 動畫：scroll-reveal 淡入效果

4. **色彩配置**
   - 背景：深黑（#080808）或深灰（#1a1a1a）
   - 文字：高對比白色（#f4f4f0）
   - 漸變：白色 → 灰色（#ffffff → #666666）
   - 邊框：低透明度白色（border-white/10）

5. **排版間距**
   - 使用 leading-tight（標題）和 leading-relaxed（正文）
   - 段落間距：space-y-12 或 space-y-16
   - 字距：tracking-tightest 或 tracking-widest

【輸出要求】
- 使用語義化 HTML（<h1>, <h2>, <section>, <article>）
- 結合 Tailwind CSS 原子類（font-black, text-gradient, etc）
- 實現響應式設計（mobile-first，使用 md: 斷點）
- 添加滾動動畫和微互動（hover、scroll-reveal）
- 確保可讀性和無障礙性（WCAG AA 對比度）`,

      'en-US': `You are a senior UI designer and front-end engineer. Generate a modern typography-first page that showcases the philosophy of typography-driven design.

Requirements: Emphasize the visual expressiveness of text itself using ultra-bold weights, gradient fills, text outlines, and interactive effects as visual focus—not imagery. Keep background dark (charcoal/black) so typography becomes the absolute hero.

[Use Cases]
- Design portfolio homepage
- Creative agency brand page
- Modern tech company typography showcase
- Design philosophy or creative manifesto

[Core Elements]
1. **Ultra-Large Hero Heading**: Multi-line typography combining different weights and font styles
   - Line 1: Ultra-bold sans-serif (text-6xl–8xl)
   - Line 2: Serif italic with text-stroke effect
   - Line 3: Gradient-filled text

2. **Typography Hierarchy System**
   - Primary heading (H1): font-black with clamp() responsive sizing
   - Secondary heading (H2): font-bold or font-semibold
   - Body: leading-relaxed with minimum 1.6 line-height

3. **Visual Effects**
   - Text Stroke: -webkit-text-stroke effect
   - Gradient Fill: linear-gradient + background-clip
   - Interactive Effects: hover to change weight, italic, or color
   - Scroll Animations: scroll-reveal fade-in effects

4. **Color Configuration**
   - Background: deep black (#080808) or charcoal (#1a1a1a)
   - Text: high-contrast white (#f4f4f0)
   - Gradient: white → gray (#ffffff → #666666)
   - Borders: low-opacity white (border-white/10)

5. **Typography Spacing**
   - Use leading-tight (headings) and leading-relaxed (body)
   - Paragraph spacing: space-y-12 or space-y-16
   - Letter spacing: tracking-tightest or tracking-widest

[Output Requirements]
- Use semantic HTML (<h1>, <h2>, <section>, <article>)
- Combine Tailwind CSS utility classes (font-black, text-gradient, etc.)
- Implement responsive design (mobile-first with md: breakpoints)
- Add scroll animations and micro-interactions (hover, scroll-reveal)
- Ensure readability and accessibility (WCAG AA contrast ratio)`
    },

    // ✨ 模板級 Style Prompt
    stylePrompt: {
      'zh-CN': `### 排版優先（Typography First）設計系統指南

**設計哲學**
排版優先意味著文字本身成為設計的視覺主角，而非配角。通過對字重、字號、色彩和互動的精心設計，文字能傳達產品的氣質、層級和故事。

**核心實現技術**

1. **文字描邊效果（Text Stroke）**
   \`\`\`css
   .text-outline {
     -webkit-text-stroke: 2px #f4f4f0;
     color: transparent;
     transition: all 0.4s ease-out;
   }

   .text-outline:hover {
     color: #f4f4f0;
     -webkit-text-stroke: 0px transparent;
   }
   \`\`\`

2. **漸變文字填充**
   \`\`\`css
   .text-gradient {
     background: linear-gradient(to right, #ffffff, #666666);
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   \`\`\`

3. **響應式字號（Fluid Typography）**
   \`\`\`css
   h1 {
     font-size: clamp(3rem, 15vw, 18rem);
     font-weight: 900;
     line-height: 0.85;
   }
   \`\`\`

4. **Scroll 動畫揭示**
   \`\`\`css
   .reveal-type {
     opacity: 0;
     transform: translateY(50px) scale(0.98);
     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
   }

   .reveal-type.visible {
     opacity: 1;
     transform: translateY(0) scale(1);
   }
   \`\`\`

**色彩配置**

深色方案（優先推薦）：
- 背景：#080808（深黑）或 #1a1a1a（深灰）
- 文字：#f4f4f0（淡白）
- 邊框：rgba(255, 255, 255, 0.1)（低透明白色）
- 漸變：#ffffff → #666666（白到中灰）

淺色方案（可選）：
- 背景：#faf8f5（米白）或 #ffffff（純白）
- 文字：#1f2937（深灰黑）
- 邊框：rgba(0, 0, 0, 0.1)（低透明黑色）
- 漸變：#000000 → #999999（黑到中灰）

**字體配置**

推薦組合：
- **Sans-serif**：Inter, Poppins, -apple-system（清晰、現代）
- **Serif**：Playfair Display, Georgia（優雅、編輯）
- **Monospace**：Space Mono, IBM Plex Mono（技術感）

每個頁面應該選擇一個主字體家族，最多兩個（主副搭配）。

**排版層級系統**

| 層級 | 用途 | 字號 | 字重 | 行高 |
|------|------|------|------|------|
| H1 | 主標題 | clamp(3rem, 15vw, 18rem) | 900 | 0.85 |
| H2 | 副標題 | clamp(2rem, 8vw, 5rem) | 700 | 0.9 |
| H3 | 小標題 | clamp(1.5rem, 4vw, 2.5rem) | 600 | 1.1 |
| Body | 正文 | 16px–18px | 400 | 1.6+ |
| Caption | 說明文字 | 12px–14px | 500 | 1.5 |

**互動效果**

1. **Hover 字重變化**
   \`\`\`css
   .interactive-text:hover {
     font-weight: 900;
     letter-spacing: 0.05em;
     transition: all 0.3s ease;
   }
   \`\`\`

2. **Hover 斜體變化**
   \`\`\`css
   .interactive-text:hover {
     font-style: italic;
     transform: scale(1.02);
   }
   \`\`\`

3. **Kinetic 下劃線**
   \`\`\`css
   .kinetic-link::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 4px;
     bottom: 0;
     transform: scaleX(0);
     transform-origin: right;
     background: currentColor;
     transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
   }

   .kinetic-link:hover::after {
     transform: scaleX(1);
     transform-origin: left;
   }
   \`\`\`

**響應式設計**

\`\`\`css
/* Mobile: 單欄，較小字號 */
h1 { font-size: clamp(2rem, 8vw, 3rem); }
body { font-size: 14px; line-height: 1.7; }

/* Tablet: 兩欄 */
@media (min-width: 768px) {
  h1 { font-size: clamp(3rem, 12vw, 5rem); }
  body { font-size: 16px; }
}

/* Desktop: 三欄+ */
@media (min-width: 1024px) {
  h1 { font-size: clamp(4rem, 15vw, 8rem); }
  body { font-size: 18px; }
}
\`\`\`

**無障礙性（Accessibility）**

1. **色彩對比檢查**
   - 正文：最小 4.5:1（WCAG AA）
   - 大標題：最小 3:1（WCAG AA）
   - 使用 https://webaim.org/resources/contrastchecker/

2. **渐变文字 Fallback**
   \`\`\`css
   .gradient-text {
     color: #ffffff; /* Fallback */
     background: linear-gradient(...);
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   \`\`\`

3. **減少動畫偏好**
   \`\`\`css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   \`\`\`

**性能優化**

1. 使用 \`will-change: transform;\` 提示動畫元素
2. 避免 \`text-shadow\` 過度使用（選擇性應用）
3. 優先使用 \`transform\` 和 \`opacity\` 做動畫
4. 預加載自定義字體：
   \`\`\`html
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
   \`\`\`

**使用場景示例**

- **品牌宣言頁**：多行超大標題 + 漸變效果
- **編輯內容**：Serif 字體 + 首字下沉 + 多欄布局
- **動態著陸頁**：Kinetic 動畫 + 互動下劃線
- **設計作品集**：粗體層級對比 + Scroll 揭示`,

      'en-US': `### Typography First Design System Guide

**Design Philosophy**
Typography First means text itself becomes the visual hero, not a supporting element. Through careful design of weight, size, color, and interaction, typography conveys product personality, hierarchy, and story.

**Core Implementation Techniques**

1. **Text Stroke Effect**
   \`\`\`css
   .text-outline {
     -webkit-text-stroke: 2px #f4f4f0;
     color: transparent;
     transition: all 0.4s ease-out;
   }

   .text-outline:hover {
     color: #f4f4f0;
     -webkit-text-stroke: 0px transparent;
   }
   \`\`\`

2. **Gradient Text Fill**
   \`\`\`css
   .text-gradient {
     background: linear-gradient(to right, #ffffff, #666666);
     -webkit-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   \`\`\`

3. **Responsive Font Size (Fluid Typography)**
   \`\`\`css
   h1 {
     font-size: clamp(3rem, 15vw, 18rem);
     font-weight: 900;
     line-height: 0.85;
   }
   \`\`\`

4. **Scroll Animation Reveal**
   \`\`\`css
   .reveal-type {
     opacity: 0;
     transform: translateY(50px) scale(0.98);
     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
   }

   .reveal-type.visible {
     opacity: 1;
     transform: translateY(0) scale(1);
   }
   \`\`\`

**Color Scheme**

Dark Mode (Recommended):
- Background: #080808 (deep black) or #1a1a1a (dark gray)
- Text: #f4f4f0 (off-white)
- Borders: rgba(255, 255, 255, 0.1) (low-opacity white)
- Gradient: #ffffff → #666666 (white to mid-gray)

Light Mode (Optional):
- Background: #faf8f5 (cream) or #ffffff (pure white)
- Text: #1f2937 (dark gray-black)
- Borders: rgba(0, 0, 0, 0.1) (low-opacity black)
- Gradient: #000000 → #999999 (black to mid-gray)

**Font Configuration**

Recommended Combinations:
- **Sans-serif**: Inter, Poppins, -apple-system (clean, modern)
- **Serif**: Playfair Display, Georgia (elegant, editorial)
- **Monospace**: Space Mono, IBM Plex Mono (technical)

Each page should use one primary font family, maximum two (primary-secondary pairing).

**Typography Hierarchy System**

| Level | Purpose | Size | Weight | Line-Height |
|-------|---------|------|--------|-------------|
| H1 | Main heading | clamp(3rem, 15vw, 18rem) | 900 | 0.85 |
| H2 | Subheading | clamp(2rem, 8vw, 5rem) | 700 | 0.9 |
| H3 | Small title | clamp(1.5rem, 4vw, 2.5rem) | 600 | 1.1 |
| Body | Body text | 16px–18px | 400 | 1.6+ |
| Caption | Caption text | 12px–14px | 500 | 1.5 |

**Interactive Effects**

1. **Hover Weight Change**
   \`\`\`css
   .interactive-text:hover {
     font-weight: 900;
     letter-spacing: 0.05em;
     transition: all 0.3s ease;
   }
   \`\`\`

2. **Hover Italic Change**
   \`\`\`css
   .interactive-text:hover {
     font-style: italic;
     transform: scale(1.02);
   }
   \`\`\`

3. **Kinetic Underline**
   \`\`\`css
   .kinetic-link::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 4px;
     bottom: 0;
     transform: scaleX(0);
     transform-origin: right;
     background: currentColor;
     transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
   }

   .kinetic-link:hover::after {
     transform: scaleX(1);
     transform-origin: left;
   }
   \`\`\`

**Responsive Design**

\`\`\`css
/* Mobile: Single column, smaller text */
h1 { font-size: clamp(2rem, 8vw, 3rem); }
body { font-size: 14px; line-height: 1.7; }

/* Tablet: Two columns */
@media (min-width: 768px) {
  h1 { font-size: clamp(3rem, 12vw, 5rem); }
  body { font-size: 16px; }
}

/* Desktop: Three+ columns */
@media (min-width: 1024px) {
  h1 { font-size: clamp(4rem, 15vw, 8rem); }
  body { font-size: 18px; }
}
\`\`\`

**Accessibility**

1. **Color Contrast Check**
   - Body text: minimum 4.5:1 (WCAG AA)
   - Large headings: minimum 3:1 (WCAG AA)
   - Use https://webaim.org/resources/contrastchecker/

2. **Gradient Text Fallback**
   \`\`\`css
   .gradient-text {
     color: #ffffff; /* Fallback */
     background: linear-gradient(...);
     background-clip: text;
     -webkit-text-fill-color: transparent;
   }
   \`\`\`

3. **Reduced Motion Support**
   \`\`\`css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   \`\`\`

**Performance Optimization**

1. Use \`will-change: transform;\` for animated elements
2. Avoid excessive \`text-shadow\` (apply selectively)
3. Prioritize \`transform\` and \`opacity\` for animations
4. Preload custom fonts:
   \`\`\`html
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
   \`\`\`

**Usage Examples**

- **Brand Manifesto**: Multi-line ultra-large heading + gradient effect
- **Editorial Content**: Serif typeface + drop caps + multi-column layout
- **Dynamic Landing**: Kinetic animations + interactive underline
- **Design Portfolio**: Bold hierarchy contrast + scroll reveal`
    }
  }
];

export default {
  typographyFirstTemplates
};
