# Custom Prompt

## 中文版本 (zh-CN)

設計一個極簡主義風格的 SaaS 產品著陸頁，以「少即是多」為核心理念，通過大量留白和精簡元素傳達產品的專業性與效率。

**核心設計原則**：
- **極致留白**：內容僅佔頁面 30-40%，大面積空白創造呼吸感
- **單色主導**：黑白灰為主，僅用一種強調色（如藍色或綠色）
- **字體即設計**：使用優雅的無襯線字體作為主要視覺元素
- **隱形設計**：UI 元素盡可能不引人注目，讓內容說話

**視覺元素**：
- **超大標題**：72-120px 的主標題，字重 600-700
- **細線分隔**：1px 淺灰線條作為區域分隔
- **幽靈按鈕**：透明背景、細邊框的 CTA 按鈕
- **單色圖標**：線性圖標，統一 1.5px 描邊粗細
- **負空間圖形**：利用空白創造視覺圖形

**頁面結構**：
1. **導航欄**：Logo + 3-4 個文字鏈接 + 單一 CTA，高度 64-80px
2. **Hero 區域**：
   - 一句話價值主張（最多 10 個字）
   - 一行副標題說明
   - 單一 CTA 按鈕
   - 大量下方留白

3. **特性展示**：
   - 3 列網格布局
   - 每個特性：圖標 + 標題 + 一行描述
   - 避免過多文字

4. **社會證明**：
   - 客戶 Logo 雲（灰度處理）
   - 單條精選評價

5. **定價區**：
   - 2-3 個定價方案
   - 突出推薦方案
   - 最簡潔的功能對比

6. **底部 CTA**：
   - 重複主要行動召喚
   - 簡潔的頁腳鏈接

**色彩方案**：
- 主背景：純白 (#FFFFFF) 或極淺灰 (#FAFAFA)
- 主文字：深灰 (#1A1A1A) 而非純黑
- 次要文字：中灰 (#666666)
- 強調色：單一品牌色（如 #0066FF）
- 邊框：極淺灰 (#E5E5E5)

**字體選擇**：
- 推薦：Inter、SF Pro、Söhne、Untitled Sans
- 標題：Medium/Semi-bold 600
- 正文：Regular 400
- 行高：標題 1.1-1.2，正文 1.6-1.8

---

## English Version (en-US)

Design a minimalist SaaS product landing page with "less is more" as the core philosophy, conveying professionalism and efficiency through generous whitespace and refined elements.

**Core Design Principles**:
- **Extreme Whitespace**: Content occupies only 30-40% of the page, expansive blank areas create breathing room
- **Monochromatic Dominance**: Black, white, gray as base with only one accent color (e.g., blue or green)
- **Typography as Design**: Elegant sans-serif fonts serve as primary visual elements
- **Invisible Design**: UI elements as unobtrusive as possible, letting content speak

**Visual Elements**:
- **Oversized Headlines**: 72-120px main titles, font-weight 600-700
- **Hairline Dividers**: 1px light gray lines as section separators
- **Ghost Buttons**: Transparent background, thin-bordered CTA buttons
- **Monochrome Icons**: Linear icons with consistent 1.5px stroke weight
- **Negative Space Graphics**: Using whitespace to create visual shapes

**Page Structure**:
1. **Navigation Bar**: Logo + 3-4 text links + single CTA, height 64-80px
2. **Hero Section**:
   - One-line value proposition (max 10 words)
   - Single subtitle explanation
   - Single CTA button
   - Generous whitespace below

3. **Features Display**:
   - 3-column grid layout
   - Each feature: icon + title + one-line description
   - Avoid excessive text

4. **Social Proof**:
   - Customer logo cloud (grayscale)
   - Single featured testimonial

5. **Pricing Section**:
   - 2-3 pricing plans
   - Highlighted recommended plan
   - Most concise feature comparison

6. **Bottom CTA**:
   - Repeat primary call-to-action
   - Minimal footer links

**Color Scheme**:
- Background: Pure white (#FFFFFF) or very light gray (#FAFAFA)
- Primary Text: Dark gray (#1A1A1A) not pure black
- Secondary Text: Medium gray (#666666)
- Accent: Single brand color (e.g., #0066FF)
- Borders: Very light gray (#E5E5E5)

**Typography Choices**:
- Recommended: Inter, SF Pro, Söhne, Untitled Sans
- Headlines: Medium/Semi-bold 600
- Body: Regular 400
- Line-height: Headlines 1.1-1.2, Body 1.6-1.8

**Technical Implementation**:
- Use CSS `max-width: 1200px` with generous `padding: 120px 0`
- Apply `font-feature-settings: 'ss01'` for stylistic alternates
- Implement `scroll-snap-type` for section-based scrolling
- Use `opacity: 0.6` for secondary text instead of gray color
- Apply `letter-spacing: -0.02em` for large headlines
