// Modern Newspaper Editorial Typography - Classic Editorial Layout Style
// 现代报纸编辑排版 - 经典编辑布局风格

// Note: Full page exports are used in preview system but not directly imported
// They are loaded dynamically by the preview loader system

export const modernEditorialTemplates = [
  {
    id: 'core-typography-newspaper-modern-editorial',
    title: 'styles.core.typography.newspaper.modernEditorial.title',
    description: 'styles.core.typography.newspaper.modernEditorial.description',

    // 卡片演示 HTML
    demoHTML: `
      <div class="newspaper-demo">
        <div class="newspaper-header">
          <div class="newspaper-masthead">THE TIMES</div>
          <div class="newspaper-date">November 6, 2025</div>
        </div>
        <div class="newspaper-grid">
          <div class="newspaper-column">
            <h3 class="newspaper-headline">Breaking News</h3>
            <p class="newspaper-dropcap">
              <span class="dropcap">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="newspaper-column">
            <h3 class="newspaper-headline">Technology</h3>
            <p class="newspaper-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    `,

    // 自定義樣式
    customStyles: `
      .newspaper-demo {
        background: #FAF8F5;
        padding: 1.5rem;
        font-family: 'Georgia', 'Times New Roman', serif;
        color: #000;
      }

      .newspaper-header {
        border-top: 3px solid #000;
        border-bottom: 3px solid #000;
        padding: 0.75rem 0;
        margin-bottom: 1rem;
        text-align: center;
      }

      .newspaper-masthead {
        font-size: 1.75rem;
        font-weight: 900;
        letter-spacing: 0.15em;
        color: #1E3A8A;
        margin-bottom: 0.25rem;
      }

      .newspaper-date {
        font-size: 0.75rem;
        color: #6B7280;
        font-style: italic;
      }

      .newspaper-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        column-gap: 1.5rem;
      }

      .newspaper-column {
        border-right: 1px solid #E5E7EB;
        padding-right: 1rem;
      }

      .newspaper-column:last-child {
        border-right: none;
        padding-right: 0;
      }

      .newspaper-headline {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #1E3A8A;
        border-bottom: 2px solid #1E3A8A;
        padding-bottom: 0.25rem;
      }

      .newspaper-dropcap {
        font-size: 0.8rem;
        line-height: 1.6;
        text-align: justify;
      }

      .dropcap {
        float: left;
        font-size: 3rem;
        line-height: 1;
        font-weight: bold;
        margin-right: 0.25rem;
        color: #1E3A8A;
      }

      .newspaper-text {
        font-size: 0.8rem;
        line-height: 1.6;
        text-align: justify;
      }

      @media (max-width: 640px) {
        .newspaper-grid {
          grid-template-columns: 1fr;
        }
        .newspaper-column {
          border-right: none;
          padding-right: 0;
          border-bottom: 1px solid #E5E7EB;
          padding-bottom: 1rem;
        }
        .newspaper-column:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    `,

    demoBoxClass: 'bg-neutral-50 border border-neutral-200',
    colorScheme: 'styles.core.typography.newspaper.modernEditorial.colorScheme',

    // ✨ 模板级 CustomPrompt（用于高精度复刻现代报纸编辑卡片）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「现代报纸编辑排版 Demo」界面风格高度接近的 Modern Newspaper Editorial Typography 模块。
要求：保持米白背景、上下黑线報頭、兩欄文字和首字下沉等核心特徵不变，只允許替換标題与段落內容。輸出使用语义化 HTML 和 TailwindCSS 風格原子类。

【使用場景】
- 場景：新聞网站精選文章区、長文导讀模組、品牌故事区塊。
- 用戶：希望在 Web 上獲得報紙級閱讀体驗的讀者。
- 目标：重現報紙版面節奏与文字氣质，提升權威感与专業度。

【布局結構】
1. 報頭区（Header）
   - 上下兩條粗黑边框包裹報紙名稱。
   - 名稱使用大写 serif 字体，字距較大，置中显示。
   - 下方一行日期或副标，使用較小、偏灰、斜体字。
2. 內容区
   - 使用兩欄或三欄文字佈局，正文採兩端對齊。
   - 第一欄前段落使用首字下沉（Drop Cap），首字放大並加粗。

【色彩与字体】
1. 背景：米白（如 #FAF8F5）模擬紙張质感。
2. 标題：深藍或純黑，強調重要信息。
3. 正文：深灰色，確保長時間閱讀舒適。
4. 字体：整体使用 serif 字体，如 Georgia / Times New Roman。

【輸出要求】
- 使用 header / article / h2 / p 等語義化标籤。
- 透過 CSS columns 或 Tailwind 實現多欄（columns-*）与首字下沉效果。
- 生成的版塊在「報頭 + 首字下沉 + 多欄文字 + 米白背景」這幾點需与當前 Demo 視覺風格高度接近。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a newspaper/editorial typography module that looks very close to the current “Newspaper Editorial Demo”.
Keep the off-white background, double-line masthead header, two-column text layout and drop-cap first letter intact; only allow changing headlines and paragraphs. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: featured article area on news sites, long-form article introductions and brand story sections.
- Users: readers who expect a print-newspaper-like reading experience on the web.

[Layout]
1. Header block with top and bottom black rules framing the masthead name.
2. Large uppercase serif masthead centered, with a smaller grey italic date line beneath.
3. Main body set in two or more columns with justified text; the first paragraph uses a clear drop-cap letter occupying several lines.
4. Each column can start with a small section headline and a thin underline.

[Visual style]
1. Background uses warm off-white paper tones; avoid pure white or saturated colors.
2. Typography uses serif fonts for both headlines and body; body size is relatively small but paired with comfortable line-height for dense reading.
3. Use thin black or dark grey rules to separate header and columns; avoid modern card shadows or bright color blocks.

[Interaction]
1. Hover effects are minimal: links may underline or slightly change color; the layout itself should not move or glow.
2. Any entry animation should be subtle fades or gentle vertical motion that does not break the editorial tone.

[Output requirements]
- Use semantic HTML structure: header for masthead, main/section/article for content, with columns implemented via CSS columns or grid.
- Use TailwindCSS-style utilities for spacing, typography and borders; do not introduce app-like chrome or heavy UI components.
- The generated module must preserve the key traits of this editorial layout: masthead with double rules, multi-column text, drop-cap first letter and off-white paper background.
      `,
    },

    // ✨ 新增：模板級 Style Prompt
    stylePrompt: {
      'zh-CN': `### 報紙編輯排版（Newspaper/Editorial Typography）核心實現要點

**设計理念**
通過傳統報紙排版技術（首字下沉、多列佈局、襯线字体）營造權威、专業、嚴肅的閱讀体驗。適用於新聞网站、編輯內容、長文閱讀。

**核心排版技術**

1. **首字下沉（Drop Cap）** - 标誌性特徵
   \`\`\`css
   /* 基礎首字下沉 */
   .drop-cap::first-letter {
     float: left;
     font-size: 4.5rem;        /* 3-5 行高度 */
     line-height: 0.85;        /* 緊湊行高 */
     font-weight: 900;
     margin-right: 0.15rem;    /* 与正文間距 */
     margin-top: 0.1rem;       /* 微調對齊 */
     color: #1e3a8a;           /* 深藍強調色 */
   }

   /* 進階：帶边框的首字下沉 */
   .drop-cap-bordered::first-letter {
     float: left;
     font-size: 4rem;
     line-height: 1;
     font-weight: 900;
     padding: 0.5rem;
     margin-right: 0.5rem;
     background: #1e3a8a;
     color: #fff;
     border: 3px solid #000;
   }
   \`\`\`

2. **多列佈局（Multi-column Layout）**
   \`\`\`css
   /* 三欄報紙排版 */
   .editorial-columns {
     column-count: 3;           /* 列数 */
     column-gap: 2rem;          /* 列間距（32px） */
     column-rule: 1px solid #e5e7eb; /* 分隔线 */
     text-align: justify;       /* 兩端對齊 */
     font-size: 0.9375rem;      /* 15px */
     line-height: 1.6;          /* 閱讀舒適度 */
   }

   .editorial-columns p {
     margin-bottom: 1rem;
     break-inside: avoid;       /* 避免段落被截斷 */
   }

   /* 響應式：移動端單列 */
   @media (max-width: 768px) {
     .editorial-columns {
       column-count: 1;
     }
   }
   \`\`\`

3. **報紙标題欄（Masthead）** - 視覺錨點
   \`\`\`css
   .newspaper-masthead {
     font-size: clamp(2.5rem, 6vw, 5rem);
     font-weight: 900;
     text-align: center;
     letter-spacing: 0.2em;     /* 大字間距 */
     color: #1e3a8a;
     text-transform: uppercase;
     border-top: 4px solid #000;
     border-bottom: 4px solid #000;
     padding: 1.5rem 0;
     font-family: 'Georgia', 'Times New Roman', serif;
   }
   \`\`\`

4. **經典分隔线（Dividers）**
   \`\`\`css
   /* 双线分隔 */
   .newspaper-divider {
     border-top: 3px double #000;
     border-bottom: 1px solid #000;
     padding: 1rem 0;
     margin: 2rem 0;
   }

   /* 點线分隔 */
   .dotted-divider {
     border-bottom: 1px dotted #d1d5db;
     margin: 1rem 0;
   }
   \`\`\`

**配色方案**

經典報紙色系：
- 主強調色：\`#1e3a8a\` (深藍) - 用於标題、首字下沉
- 标題黑：\`#1f2937\`, \`#111827\` - 用於主标題
- 正文灰：\`#374151\`, \`#4b5563\` - 用於正文文字
- 輔助灰：\`#6b7280\`, \`#9ca3af\` - 用於日期、說明文字

背景色：
- 米白背景：\`#faf8f5\`, \`#f9fafb\` (模擬報紙紙張质感)
- 純白背景：\`#ffffff\` (現代数字報紙)

**字体選擇**

核心原則：使用**襯线字体（Serif）**營造傳統權威感

推薦字体堆疊：
\`\`\`css
font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
\`\`\`

TailwindCSS：
\`\`\`html
<div class="font-serif">...</div>
\`\`\`

**TailwindCSS 實現**

\`\`\`html
<!-- 報紙标題欄 -->
<header class="border-t-4 border-b-4 border-black py-6 text-center font-serif">
  <h1 class="text-5xl md:text-7xl font-black tracking-[0.2em] text-blue-900 uppercase">
    THE DAILY CHRONICLE
  </h1>
  <p class="text-sm italic text-gray-600 mt-2">All The News Worth Reading</p>
  <p class="text-base text-gray-700 mt-3 pt-3 border-t border-gray-300">
    Monday, November 6, 2025 | New York Edition
  </p>
</header>

<!-- 首字下沉文章 -->
<article class="max-w-4xl mx-auto font-serif">
  <h2 class="text-3xl md:text-4xl font-black text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
    Technology Reshapes Global Economy
  </h2>
  <p class="text-sm text-gray-600 italic mb-4">By John Smith | Staff Reporter</p>

  <p class="text-justify leading-relaxed text-base">
    <span class="float-left text-7xl font-black leading-none mr-1 text-blue-900">I</span>
    n a groundbreaking development that is reshaping industries worldwide, technology companies
    have announced unprecedented innovations that promise to transform how we work...
  </p>

  <!-- 三欄正文 -->
  <div class="columns-3 gap-8 column-rule column-rule-gray-300 text-justify text-sm leading-relaxed mt-6">
    <p>The latest advancements in artificial intelligence and machine learning...</p>
    <p>Experts predict that these technological shifts will create millions of new jobs...</p>
    <p>Meanwhile, regulatory bodies around the world are working to establish frameworks...</p>
  </div>
</article>

<!-- 側边欄信息框 -->
<aside class="border-2 border-blue-900 p-4 bg-gray-50 font-serif">
  <h3 class="text-lg font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-3">
    Inside Today
  </h3>
  <ul class="space-y-2">
    <li class="flex justify-between text-sm border-b border-dotted border-gray-300 pb-2">
      <span class="font-semibold">Business</span>
      <span class="text-gray-600">Page 4</span>
    </li>
    <li class="flex justify-between text-sm">
      <span class="font-semibold">Technology</span>
      <span class="text-gray-600">Page 8</span>
    </li>
  </ul>
</aside>
\`\`\`

**排版层級系統**

\`\`\`css
/* 報紙标題欄（Masthead） */
.masthead {
  font-size: 3-5rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

/* 主标題（Headline） */
.main-headline {
  font-size: 2-3rem;
  font-weight: 900;
  line-height: 1.2;
}

/* 副标題（Subheadline） */
.subheadline {
  font-size: 1.125-1.5rem;
  font-weight: 600;
}

/* 作者署名（Byline） */
.byline {
  font-size: 0.875rem;
  font-style: italic;
  color: #6b7280;
}

/* 正文（Body） */
.body-text {
  font-size: 0.9375rem;  /* 15px */
  line-height: 1.6;
  text-align: justify;
}

/* 說明文字（Caption） */
.caption {
  font-size: 0.8125rem;  /* 13px */
  color: #6b7280;
}
\`\`\`

**間距系統**

使用嚴格的垂直韻律（Vertical Rhythm）：

\`\`\`css
/* 段落間距 */
p { margin-bottom: 1rem; }  /* 16px */

/* 标題上下間距 */
h2 {
  margin-top: 2rem;    /* 32px */
  margin-bottom: 1rem; /* 16px */
}

/* 分隔线間距 */
.divider {
  margin: 2rem 0;  /* 32px 上下 */
}

/* 欄位間距（Column Gap） */
.columns {
  column-gap: 2rem;  /* 32px */
}
\`\`\`

**打印樣式优化**

\`\`\`css
@media print {
  body {
    background: white;
    color: black;
  }

  .newspaper-page {
    box-shadow: none;
    max-width: 100%;
  }

  /* 避免分欄內容被截斷 */
  .newspaper-column,
  .newspaper-box {
    break-inside: avoid;
  }

  /* 移除不必要的元素 */
  .no-print {
    display: none;
  }
}
\`\`\`

**無障礙性建議**

1. **語義化 HTML**：
   - 使用 \`<article>\`, \`<section>\`, \`<aside>\` 結構化內容
   - 标題层級遵循 \`<h1>\` → \`<h2>\` → \`<h3>\` 順序

2. **對比度检查**：
   - 正文（#374151）vs 背景（#faf8f5）對比度 > 7:1
   - 标題（#1e3a8a）vs 背景（#faf8f5）對比度 > 4.5:1

3. **閱讀寬度限制**：
   - 最大行長度：600-800px（約 60-75 字符）
   - TailwindCSS：\`max-w-prose\` 或 \`max-w-4xl\`

**使用場景**
- 新聞网站主页
- 在线雜誌編輯內容
- 長文閱讀页面
- 學術文章發布
- 专業博客內容
`,

      'en-US': `### Newspaper/Editorial Typography Core Implementation Guide

**Design Philosophy**
Use traditional newspaper layout techniques (drop caps, multi-column layout, serif fonts) to create an authoritative, professional, and serious reading experience. Ideal for news websites, editorial content, and long-form reading.

**Core Layout Techniques**

1. **Drop Cap** - Signature Feature
   \`\`\`css
   /* Basic drop cap */
   .drop-cap::first-letter {
     float: left;
     font-size: 4.5rem;        /* 3-5 lines high */
     line-height: 0.85;        /* Tight line height */
     font-weight: 900;
     margin-right: 0.15rem;    /* Spacing from text */
     margin-top: 0.1rem;       /* Fine-tune alignment */
     color: #1e3a8a;           /* Deep blue accent */
   }

   /* Advanced: Drop cap with border */
   .drop-cap-bordered::first-letter {
     float: left;
     font-size: 4rem;
     line-height: 1;
     font-weight: 900;
     padding: 0.5rem;
     margin-right: 0.5rem;
     background: #1e3a8a;
     color: #fff;
     border: 3px solid #000;
   }
   \`\`\`

2. **Multi-column Layout**
   \`\`\`css
   /* Three-column newspaper layout */
   .editorial-columns {
     column-count: 3;           /* Number of columns */
     column-gap: 2rem;          /* Column spacing (32px) */
     column-rule: 1px solid #e5e7eb; /* Separator line */
     text-align: justify;       /* Justified text */
     font-size: 0.9375rem;      /* 15px */
     line-height: 1.6;          /* Reading comfort */
   }

   .editorial-columns p {
     margin-bottom: 1rem;
     break-inside: avoid;       /* Prevent paragraph breaks */
   }

   /* Responsive: Single column on mobile */
   @media (max-width: 768px) {
     .editorial-columns {
       column-count: 1;
     }
   }
   \`\`\`

3. **Newspaper Masthead** - Visual Anchor
   \`\`\`css
   .newspaper-masthead {
     font-size: clamp(2.5rem, 6vw, 5rem);
     font-weight: 900;
     text-align: center;
     letter-spacing: 0.2em;     /* Wide letter spacing */
     color: #1e3a8a;
     text-transform: uppercase;
     border-top: 4px solid #000;
     border-bottom: 4px solid #000;
     padding: 1.5rem 0;
     font-family: 'Georgia', 'Times New Roman', serif;
   }
   \`\`\`

4. **Classic Dividers**
   \`\`\`css
   /* Double-line divider */
   .newspaper-divider {
     border-top: 3px double #000;
     border-bottom: 1px solid #000;
     padding: 1rem 0;
     margin: 2rem 0;
   }

   /* Dotted divider */
   .dotted-divider {
     border-bottom: 1px dotted #d1d5db;
     margin: 1rem 0;
   }
   \`\`\`

**Color Scheme**

Classic newspaper colors:
- Primary accent: \`#1e3a8a\` (Deep blue) - For headlines, drop caps
- Heading black: \`#1f2937\`, \`#111827\` - For main headlines
- Body gray: \`#374151\`, \`#4b5563\` - For body text
- Caption gray: \`#6b7280\`, \`#9ca3af\` - For dates, captions

Backgrounds:
- Cream background: \`#faf8f5\`, \`#f9fafb\` (Newspaper texture simulation)
- Pure white: \`#ffffff\` (Modern digital newspaper)

**Font Selection**

Core principle: Use **Serif fonts** for traditional authority

Recommended font stack:
\`\`\`css
font-family: 'Georgia', 'Times New Roman', 'Merriweather', serif;
\`\`\`

TailwindCSS:
\`\`\`html
<div class="font-serif">...</div>
\`\`\`

**TailwindCSS Implementation**

\`\`\`html
<!-- Newspaper masthead -->
<header class="border-t-4 border-b-4 border-black py-6 text-center font-serif">
  <h1 class="text-5xl md:text-7xl font-black tracking-[0.2em] text-blue-900 uppercase">
    THE DAILY CHRONICLE
  </h1>
  <p class="text-sm italic text-gray-600 mt-2">All The News Worth Reading</p>
  <p class="text-base text-gray-700 mt-3 pt-3 border-t border-gray-300">
    Monday, November 6, 2025 | New York Edition
  </p>
</header>

<!-- Drop cap article -->
<article class="max-w-4xl mx-auto font-serif">
  <h2 class="text-3xl md:text-4xl font-black text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
    Technology Reshapes Global Economy
  </h2>
  <p class="text-sm text-gray-600 italic mb-4">By John Smith | Staff Reporter</p>

  <p class="text-justify leading-relaxed text-base">
    <span class="float-left text-7xl font-black leading-none mr-1 text-blue-900">I</span>
    n a groundbreaking development that is reshaping industries worldwide, technology companies
    have announced unprecedented innovations that promise to transform how we work...
  </p>

  <!-- Three-column body -->
  <div class="columns-3 gap-8 column-rule column-rule-gray-300 text-justify text-sm leading-relaxed mt-6">
    <p>The latest advancements in artificial intelligence and machine learning...</p>
    <p>Experts predict that these technological shifts will create millions of new jobs...</p>
    <p>Meanwhile, regulatory bodies around the world are working to establish frameworks...</p>
  </div>
</article>

<!-- Sidebar info box -->
<aside class="border-2 border-blue-900 p-4 bg-gray-50 font-serif">
  <h3 class="text-lg font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-3">
    Inside Today
  </h3>
  <ul class="space-y-2">
    <li class="flex justify-between text-sm border-b border-dotted border-gray-300 pb-2">
      <span class="font-semibold">Business</span>
      <span class="text-gray-600">Page 4</span>
    </li>
    <li class="flex justify-between text-sm">
      <span class="font-semibold">Technology</span>
      <span class="text-gray-600">Page 8</span>
    </li>
  </ul>
</aside>
\`\`\`

**Typography Hierarchy**

\`\`\`css
/* Masthead */
.masthead {
  font-size: 3-5rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

/* Main headline */
.main-headline {
  font-size: 2-3rem;
  font-weight: 900;
  line-height: 1.2;
}

/* Subheadline */
.subheadline {
  font-size: 1.125-1.5rem;
  font-weight: 600;
}

/* Byline */
.byline {
  font-size: 0.875rem;
  font-style: italic;
  color: #6b7280;
}

/* Body text */
.body-text {
  font-size: 0.9375rem;  /* 15px */
  line-height: 1.6;
  text-align: justify;
}

/* Caption */
.caption {
  font-size: 0.8125rem;  /* 13px */
  color: #6b7280;
}
\`\`\`

**Spacing System**

Use strict vertical rhythm:

\`\`\`css
/* Paragraph spacing */
p { margin-bottom: 1rem; }  /* 16px */

/* Heading spacing */
h2 {
  margin-top: 2rem;    /* 32px */
  margin-bottom: 1rem; /* 16px */
}

/* Divider spacing */
.divider {
  margin: 2rem 0;  /* 32px top/bottom */
}

/* Column gap */
.columns {
  column-gap: 2rem;  /* 32px */
}
\`\`\`

**Print Style Optimization**

\`\`\`css
@media print {
  body {
    background: white;
    color: black;
  }

  .newspaper-page {
    box-shadow: none;
    max-width: 100%;
  }

  /* Prevent column breaks */
  .newspaper-column,
  .newspaper-box {
    break-inside: avoid;
  }

  /* Remove unnecessary elements */
  .no-print {
    display: none;
  }
}
\`\`\`

**Accessibility Tips**

1. **Semantic HTML**:
   - Use \`<article>\`, \`<section>\`, \`<aside>\` for structure
   - Follow heading hierarchy \`<h1>\` → \`<h2>\` → \`<h3>\`

2. **Contrast Checks**:
   - Body (#374151) vs Background (#faf8f5) contrast > 7:1
   - Heading (#1e3a8a) vs Background (#faf8f5) contrast > 4.5:1

3. **Reading Width Limit**:
   - Max line length: 600-800px (~60-75 characters)
   - TailwindCSS: \`max-w-prose\` or \`max-w-4xl\`

**Use Cases**
- News website homepages
- Online magazine editorial content
- Long-form reading pages
- Academic article publishing
- Professional blog content
`
    },

    // ✨ 新增：預覽数組系統
    previews: [
      {
        id: 'editorial-fullpage',
        name: {
          'zh-CN': '完整页面',
          'en-US': 'Full Page'
        },
        type: 'fullPage',
        html: `
      <!-- Newspaper Full Page -->
      <div class="newspaper-page">
        <!-- Masthead Header -->
        <header class="newspaper-header-full">
          <div class="newspaper-topbar">
            <span class="newspaper-vol">Vol. XCIV, No. 310</span>
            <span class="newspaper-price">$2.50</span>
          </div>
          <h1 class="newspaper-title">THE DAILY CHRONICLE</h1>
          <div class="newspaper-subtitle">All The News Worth Reading</div>
          <div class="newspaper-date-full">Monday, November 6, 2025 | New York Edition</div>
        </header>

        <!-- Main Content Grid -->
        <main class="newspaper-content">
          <!-- Main Story -->
          <article class="newspaper-main-story">
            <h2 class="newspaper-main-headline">Technology Reshapes Global Economy</h2>
            <p class="newspaper-byline">By John Smith | Staff Reporter</p>
            <p class="newspaper-lead">
              <span class="lead-dropcap">I</span>n a groundbreaking development that is reshaping industries worldwide,
              technology companies have announced unprecedented innovations that promise to transform how we work,
              communicate, and interact with the digital world.
            </p>
            <div class="newspaper-columns-3">
              <p>The latest advancements in artificial intelligence and machine learning have created new opportunities
              for businesses to optimize their operations and deliver better services to customers. Industry leaders
              are investing billions of dollars in research and development to stay ahead of the curve.</p>

              <p>Experts predict that these technological shifts will create millions of new jobs while also requiring
              significant workforce retraining. Educational institutions are already adapting their curricula to prepare
              students for this new economic landscape.</p>

              <p>Meanwhile, regulatory bodies around the world are working to establish frameworks that balance innovation
              with consumer protection and data privacy. The challenge lies in creating policies that encourage growth
              without stifling creativity and entrepreneurship.</p>

              <p>Small and medium-sized enterprises are also benefiting from these technological advances, with cloud
              computing and software-as-a-service solutions making enterprise-grade tools accessible to businesses of all sizes.</p>

              <p>As we move forward into this new era, collaboration between government, industry, and academia will be
              crucial in ensuring that technological progress benefits society as a whole. The coming years will undoubtedly
              bring both challenges and opportunities that we cannot yet fully anticipate.</p>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="newspaper-sidebar">
            <!-- Inside Today Box -->
            <div class="newspaper-box">
              <h3 class="box-title">Inside Today</h3>
              <ul class="box-list">
                <li class="box-item">
                  <span class="box-section">Business</span>
                  <span class="box-page">Page 4</span>
                </li>
                <li class="box-item">
                  <span class="box-section">Technology</span>
                  <span class="box-page">Page 8</span>
                </li>
                <li class="box-item">
                  <span class="box-section">Opinion</span>
                  <span class="box-page">Page 12</span>
                </li>
                <li class="box-item">
                  <span class="box-section">Sports</span>
                  <span class="box-page">Page 15</span>
                </li>
                <li class="box-item">
                  <span class="box-section">Culture</span>
                  <span class="box-page">Page 18</span>
                </li>
              </ul>
            </div>

            <!-- Statistics Box -->
            <div class="newspaper-box statistics-box">
              <h3 class="box-title">Market Watch</h3>
              <div class="stat-row">
                <span class="stat-label">DOW</span>
                <span class="stat-value up">+245.67</span>
              </div>
              <div class="stat-row">
                <span class="stat-label">S&P 500</span>
                <span class="stat-value up">+18.45</span>
              </div>
              <div class="stat-row">
                <span class="stat-label">NASDAQ</span>
                <span class="stat-value down">-12.34</span>
              </div>
            </div>

            <!-- Quick News -->
            <div class="newspaper-box">
              <h3 class="box-title">Brief Updates</h3>
              <div class="brief-item">
                <h4 class="brief-headline">Climate Summit Concludes</h4>
                <p class="brief-text">World leaders reach new agreements on emissions.</p>
              </div>
              <div class="brief-item">
                <h4 class="brief-headline">Innovation Awards</h4>
                <p class="brief-text">Tech startups recognized for breakthrough solutions.</p>
              </div>
              <div class="brief-item">
                <h4 class="brief-headline">Education Reform</h4>
                <p class="brief-text">New curriculum focuses on digital literacy.</p>
              </div>
            </div>
          </aside>
        </main>

        <!-- Secondary Articles -->
        <section class="newspaper-secondary">
          <article class="secondary-article">
            <h3 class="secondary-headline">Global Markets React to Policy Changes</h3>
            <p class="secondary-text">
              <span class="secondary-dropcap">F</span>inancial markets around the world experienced significant
              volatility following announcements of new monetary policies. Investors are closely monitoring central
              bank decisions as they navigate economic uncertainty.
            </p>
          </article>

          <article class="secondary-article">
            <h3 class="secondary-headline">Innovation in Healthcare Delivery</h3>
            <p class="secondary-text">
              <span class="secondary-dropcap">T</span>elemedicine platforms are transforming patient care,
              making healthcare more accessible to remote communities. New technologies enable real-time consultations
              and remote monitoring of chronic conditions.
            </p>
          </article>

          <article class="secondary-article">
            <h3 class="secondary-headline">Cultural Events This Week</h3>
            <p class="secondary-text">
              <span class="secondary-dropcap">A</span>rt galleries and museums are showcasing innovative
              exhibitions that blend traditional techniques with digital media. The intersection of technology
              and creativity continues to push artistic boundaries.
            </p>
          </article>
        </section>

        <!-- Footer -->
        <footer class="newspaper-footer">
          <div class="footer-content">
            <div class="footer-section">
              <h4 class="footer-heading">About Us</h4>
              <p class="footer-text">The Daily Chronicle - Since 1925</p>
            </div>
            <div class="footer-section">
              <h4 class="footer-heading">Contact</h4>
              <p class="footer-text">newsroom@chronicle.com</p>
            </div>
            <div class="footer-section">
              <h4 class="footer-heading">Subscribe</h4>
              <p class="footer-text">Digital & Print Available</p>
            </div>
          </div>
          <div class="footer-copyright">
            © 2025 The Daily Chronicle. All rights reserved.
          </div>
        </footer>
      </div>
        `,
        styles: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: #FAF8F5;
        color: #000;
        font-family: 'Georgia', 'Times New Roman', serif;
        line-height: 1.6;
      }

      /* Page Container */
      .newspaper-page {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 2rem;
        background: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
      }

      /* Header / Masthead */
      .newspaper-header-full {
        border-top: 4px solid #000;
        border-bottom: 4px solid #000;
        padding: 1.5rem 0;
        margin-bottom: 2rem;
      }

      .newspaper-topbar {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
        color: #6B7280;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #E5E7EB;
      }

      .newspaper-title {
        font-size: clamp(2.5rem, 6vw, 5rem);
        font-weight: 900;
        text-align: center;
        letter-spacing: 0.2em;
        color: #1E3A8A;
        margin: 1rem 0;
        text-transform: uppercase;
      }

      .newspaper-subtitle {
        text-align: center;
        font-size: 0.875rem;
        font-style: italic;
        color: #6B7280;
        margin-bottom: 0.5rem;
      }

      .newspaper-date-full {
        text-align: center;
        font-size: 1rem;
        padding-top: 0.75rem;
        border-top: 1px solid #E5E7EB;
        color: #374151;
      }

      /* Main Content Grid */
      .newspaper-content {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
      }

      /* Main Story */
      .newspaper-main-story {
        border-right: 2px solid #1E3A8A;
        padding-right: 2rem;
      }

      .newspaper-main-headline {
        font-size: clamp(1.75rem, 4vw, 3rem);
        font-weight: 900;
        line-height: 1.2;
        color: #1E3A8A;
        margin-bottom: 0.75rem;
        border-bottom: 3px solid #1E3A8A;
        padding-bottom: 0.5rem;
      }

      .newspaper-byline {
        font-size: 0.875rem;
        color: #6B7280;
        font-style: italic;
        margin-bottom: 1rem;
      }

      .newspaper-lead {
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        line-height: 1.7;
      }

      .lead-dropcap {
        float: left;
        font-size: 4.5rem;
        line-height: 0.85;
        font-weight: 900;
        color: #1E3A8A;
        margin-right: 0.15rem;
        margin-top: 0.1rem;
      }

      .newspaper-columns-3 {
        column-count: 3;
        column-gap: 1.5rem;
        column-rule: 1px solid #E5E7EB;
        text-align: justify;
        font-size: 0.9375rem;
      }

      .newspaper-columns-3 p {
        margin-bottom: 1rem;
        break-inside: avoid;
      }

      /* Sidebar */
      .newspaper-sidebar {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .newspaper-box {
        border: 2px solid #1E3A8A;
        padding: 1rem;
        background: #F9FAFB;
      }

      .box-title {
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #1E3A8A;
        color: #1E3A8A;
      }

      .box-list {
        list-style: none;
      }

      .box-item {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px dotted #D1D5DB;
        font-size: 0.875rem;
      }

      .box-item:last-child {
        border-bottom: none;
      }

      .box-section {
        font-weight: 600;
        color: #374151;
      }

      .box-page {
        color: #6B7280;
      }

      /* Statistics Box */
      .statistics-box {
        background: #EFF6FF;
      }

      .stat-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid #DBEAFE;
        font-size: 0.875rem;
      }

      .stat-row:last-child {
        border-bottom: none;
      }

      .stat-label {
        font-weight: 600;
        color: #1F2937;
      }

      .stat-value {
        font-weight: bold;
        font-family: 'Courier New', monospace;
      }

      .stat-value.up {
        color: #059669;
      }

      .stat-value.down {
        color: #DC2626;
      }

      /* Brief Updates */
      .brief-item {
        padding: 0.75rem 0;
        border-bottom: 1px solid #E5E7EB;
      }

      .brief-item:last-child {
        border-bottom: none;
      }

      .brief-headline {
        font-size: 0.9375rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
        color: #1E3A8A;
      }

      .brief-text {
        font-size: 0.8125rem;
        color: #4B5563;
        line-height: 1.5;
      }

      /* Secondary Articles */
      .newspaper-secondary {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding-top: 2rem;
        border-top: 3px double #1E3A8A;
        margin-bottom: 2rem;
      }

      .secondary-article {
        padding: 1rem 0;
      }

      .secondary-headline {
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
        color: #1E3A8A;
        border-bottom: 2px solid #1E3A8A;
        padding-bottom: 0.25rem;
      }

      .secondary-text {
        font-size: 0.875rem;
        text-align: justify;
        line-height: 1.6;
      }

      .secondary-dropcap {
        float: left;
        font-size: 2.5rem;
        line-height: 1;
        font-weight: bold;
        color: #1E3A8A;
        margin-right: 0.15rem;
      }

      /* Footer */
      .newspaper-footer {
        border-top: 3px solid #000;
        padding-top: 1.5rem;
        margin-top: 2rem;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 1.5rem;
      }

      .footer-heading {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #1E3A8A;
      }

      .footer-text {
        font-size: 0.875rem;
        color: #6B7280;
      }

      .footer-copyright {
        text-align: center;
        font-size: 0.75rem;
        color: #9CA3AF;
        padding-top: 1rem;
        border-top: 1px solid #E5E7EB;
      }

      /* Responsive Design */
      @media (max-width: 1024px) {
        .newspaper-content {
          grid-template-columns: 1fr;
        }

        .newspaper-main-story {
          border-right: none;
          padding-right: 0;
          border-bottom: 2px solid #1E3A8A;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
        }

        .newspaper-columns-3 {
          column-count: 2;
        }

        .newspaper-secondary {
          grid-template-columns: 1fr;
        }

        .footer-content {
          grid-template-columns: 1fr;
          text-align: center;
        }
      }

      @media (max-width: 768px) {
        .newspaper-page {
          padding: 1rem;
        }

        .newspaper-title {
          font-size: 2rem;
          letter-spacing: 0.1em;
        }

        .newspaper-columns-3 {
          column-count: 1;
        }

        .newspaper-main-headline {
          font-size: 1.5rem;
        }

        .lead-dropcap {
          font-size: 3rem;
        }
      }

      /* Print Styles */
      @media print {
        body {
          background: white;
        }

        .newspaper-page {
          box-shadow: none;
          max-width: 100%;
        }

        .newspaper-box {
          break-inside: avoid;
        }
      }
        `
      }
    ]
  }
];

export default modernEditorialTemplates;
