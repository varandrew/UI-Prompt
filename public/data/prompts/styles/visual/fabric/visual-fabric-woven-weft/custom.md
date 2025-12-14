# Custom Prompt

## 中文版本 (zh-CN)

創建「編織與經緯」(Woven & Weft) 風格的手工生活方式電商落地頁，融合編織纹理、缝线装饰和温暖的布料美学。

### 核心設計理念
以布料為靈感的界面設計，通過編織紋理背景、縫線邊框和手工質感，營造溫暖、慢生活的購物體驗。適用於手工藝品、家居紡織品、時尚服飾等強調質感和工藝的品牌。

### 視覺特徵

**1. 背景紋理（三層疊加）**
```css
body {
  background-color: #f4f1ea; /* 亞麻色基底 */
  background-image:
    /* 噪點紋理（顆粒感） */
    url("data:image/svg+xml,...fractalNoise..."),
    /* 縱向編織線 */
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
    /* 橫向編織線 */
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px);
}
```

**2. 縫線邊框效果**
所有卡片和容器使用虛線邊框模擬縫線：
```css
.stitched-container::after {
  content: '';
  position: absolute;
  inset: 6px; /* 與外邊框保持間距 */
  border: 1px dashed rgba(61, 58, 54, 0.2);
  border-radius: 2px;
}
```

**3. 布料質感按鈕**
- 按鈕背景使用絕對定位的 `.btn-bg` 層模擬布料補丁
- 內部添加虛線縫合效果
- 懸停時輕微放大（`scale(1.02)`）+ 增亮（`brightness(1.1)`）
- 按下時縮小（`scale(0.98)`）+ 陰影變淺

### 色彩系統

**主色調**（溫暖中性色）：
- 亞麻背景：`#f4f1ea`
- 卡片白色：`#ffffff`
- 主要文字：`#3d3a36`（深棕灰）
- 次要文字：`#6e6b66`（中灰棕）

**強調色**（大地色調）：
- 靛藍（Denim）：`#5f7186` - 用於分類標籤
- 陶土紅（Clay）：`#b87e6b` - 用於小標題
- 鼠尾草綠（Sage）：`#8fa08e` - 用於 Newsletter 區塊

### 排版系統

**字體組合**：
- 標題：`'Cormorant Garamond', serif` - 優雅襯線體，斜體用於品牌名
- 正文：`'Nunito Sans', sans-serif` - 現代無襯線，易讀

**字階**：
- Hero 標題：`4.5rem`（移動端調整為 `2.5rem`）
- 區塊標題：`2.5rem`
- 產品標題：`1.5rem`
- 小標籤：`0.75rem`（大寫 + 字母間距 `0.1em`）

### 組件設計

**1. 產品卡片**
```html
<div class="stitched-container product-card">
  <div class="product-img-box">
    <img src="..." class="product-img">
  </div>
  <div class="product-info">
    <span class="product-cat">Table Linen</span>
    <h3 class="product-title">Raw Edge Napkins</h3>
    <p class="product-price">$45.00</p>
    <div class="swatches">
      <div class="swatch active" style="background: #e6e2d8;"></div>
      ...
    </div>
    <button class="btn btn-secondary">...</button>
  </div>
</div>
```

**2. Logo 縫布標籤**
```css
.logo::before {
  content: '';
  position: absolute;
  inset: -4px 0;
  background: rgba(255,255,255,0.6);
  z-index: -1;
  transform: rotate(-1deg); /* 輕微傾斜 */
  border: 1px dashed var(--c-thread);
}
```

**3. 導航縫線下劃線**
```css
nav a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  /* 虛線效果模擬縫線 */
  background-image: repeating-linear-gradient(90deg,
    var(--c-accent-clay), var(--c-accent-clay) 4px,
    transparent 4px, transparent 6px);
  transition: width 0.3s ease;
}
nav a:hover::before { width: 100%; }
```

**4. 材質色板（Swatches）**
- 圓形色板（`18px` 直徑）
- 激活狀態顯示白色針頭效果（`::after` 偽元素）
```css
.swatch.active::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
```

### 動畫與交互

**過渡效果**：
- 統一使用 `cubic-bezier(0.4, 0, 0.2, 1)` 緩動
- 懸停卡片：`translateY(-2px)` + 陰影加深
- 避免過於流暢的動畫，保持手工質感

**Toast 通知**：
- 固定在右下角
- 使用 `cubic-bezier(0.175, 0.885, 0.32, 1.275)` 彈性進入
- 內部也有縫線裝飾（虛線邊框）

### 佈局結構

**Hero 區域**：
- 左右兩欄（移動端改為單欄）
- 右側圖片使用分層邊框模擬布料畫框：
  - 外層偏移背景色塊（`position: absolute`）
  - 內層圖片帶柔和圓角和陰影

**產品網格**：
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
```

**Newsletter 區塊**：
- 全寬區塊，背景色為 Sage Green
- 使用 45 度斜線紋理模擬牛仔布質感

### 響應式設計

**移動端（< 768px）**：
- Hero 改為單欄，圖片置頂
- 導航隱藏（顯示漢堡菜單）
- Newsletter 輸入框改為垂直堆疊
- 字體大小適當縮小

### 實現關鍵點

1. **CSS 變量管理**：使用 `:root` 定義顏色、間距、陰影
2. **偽元素裝飾**：大量使用 `::before` 和 `::after` 創建縫線效果
3. **iframe 安全**：如在 iframe 中渲染，確保 Google Fonts 可加載
4. **降級優雅**：圖片加載失敗時顯示替代背景色
5. **語義化 HTML**：使用正確的標籤（`<header>`, `<section>`, `<footer>`）

### 典型應用場景
- 手工藝品電商（編織、陶藝、木工）
- 家居紡織品商店（床品、桌布、窗簾）
- 時尚服飾品牌（亞麻服、天然纖維）
- 慢生活方式博客/雜誌
- 咖啡/烘焙店官網


---

## English Version (en-US)

Create a "Woven & Weft" style handcrafted lifestyle e-commerce landing page, blending woven textures, stitched decorations, and warm fabric aesthetics.

### Core Design Philosophy
A fabric-inspired interface design that creates a warm, slow-living shopping experience through woven texture backgrounds, stitched borders, and handcrafted quality. Suitable for handicraft, home textile, and fashion brands emphasizing texture and craftsmanship.

### Visual Characteristics

**1. Background Texture (Triple Layer)**
```css
body {
  background-color: #f4f1ea; /* Linen base */
  background-image:
    /* Noise texture (grain) */
    url("data:image/svg+xml,...fractalNoise..."),
    /* Vertical weave lines */
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
    /* Horizontal weave lines */
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px);
}
```

**2. Stitched Border Effect**
All cards and containers use dashed borders to simulate stitching:
```css
.stitched-container::after {
  content: '';
  position: absolute;
  inset: 6px; /* Gap from outer border */
  border: 1px dashed rgba(61, 58, 54, 0.2);
  border-radius: 2px;
}
```

**3. Fabric Texture Buttons**
- Button background uses absolutely positioned `.btn-bg` layer to simulate fabric patch
- Interior dashed stitching effect
- Hover: slight scale up (`scale(1.02)`) + brightness increase (`brightness(1.1)`)
- Active: scale down (`scale(0.98)`) + shallow shadow

### Color System

**Primary Palette** (Warm Neutrals):
- Linen Background: `#f4f1ea`
- Card White: `#ffffff`
- Primary Text: `#3d3a36` (deep brown-gray)
- Secondary Text: `#6e6b66` (medium gray-brown)

**Accent Colors** (Earth Tones):
- Denim: `#5f7186` - for category labels
- Clay: `#b87e6b` - for subtitles
- Sage: `#8fa08e` - for Newsletter section

### Typography System

**Font Pairing**:
- Headings: `'Cormorant Garamond', serif` - elegant serif, italic for brand name
- Body: `'Nunito Sans', sans-serif` - modern sans-serif, readable

**Type Scale**:
- Hero Heading: `4.5rem` (adjust to `2.5rem` on mobile)
- Section Heading: `2.5rem`
- Product Title: `1.5rem`
- Small Labels: `0.75rem` (uppercase + letter-spacing `0.1em`)

### Component Design

**1. Product Card**
```html
<div class="stitched-container product-card">
  <div class="product-img-box">
    <img src="..." class="product-img">
  </div>
  <div class="product-info">
    <span class="product-cat">Table Linen</span>
    <h3 class="product-title">Raw Edge Napkins</h3>
    <p class="product-price">$45.00</p>
    <div class="swatches">
      <div class="swatch active" style="background: #e6e2d8;"></div>
      ...
    </div>
    <button class="btn btn-secondary">...</button>
  </div>
</div>
```

**2. Logo Sewn Patch**
```css
.logo::before {
  content: '';
  position: absolute;
  inset: -4px 0;
  background: rgba(255,255,255,0.6);
  z-index: -1;
  transform: rotate(-1deg); /* Slight tilt */
  border: 1px dashed var(--c-thread);
}
```

**3. Navigation Stitched Underline**
```css
nav a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  /* Dashed effect simulating stitching */
  background-image: repeating-linear-gradient(90deg,
    var(--c-accent-clay), var(--c-accent-clay) 4px,
    transparent 4px, transparent 6px);
  transition: width 0.3s ease;
}
nav a:hover::before { width: 100%; }
```

**4. Material Swatches**
- Circular swatches (`18px` diameter)
- Active state shows white pin head effect (`::after` pseudo-element)
```css
.swatch.active::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
```

### Animation & Interaction

**Transitions**:
- Uniformly use `cubic-bezier(0.4, 0, 0.2, 1)` easing
- Card hover: `translateY(-2px)` + shadow deepening
- Avoid overly smooth animations, maintain handcrafted feel

**Toast Notification**:
- Fixed at bottom-right
- Elastic entry using `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- Interior also has stitching decoration (dashed border)

### Layout Structure

**Hero Section**:
- Two-column layout (single column on mobile)
- Right image uses layered borders simulating fabric photo frame:
  - Outer offset background color block (`position: absolute`)
  - Inner image with soft border-radius and shadow

**Product Grid**:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
```

**Newsletter Section**:
- Full-width block, Sage Green background
- Uses 45-degree diagonal texture simulating denim fabric

### Responsive Design

**Mobile (< 768px)**:
- Hero changes to single column, image at top
- Navigation hidden (show hamburger menu)
- Newsletter inputs stack vertically
- Font sizes appropriately reduced

### Implementation Key Points

1. **CSS Variable Management**: Define colors, spacing, shadows in `:root`
2. **Pseudo-Element Decoration**: Extensive use of `::before` and `::after` for stitching effects
3. **iframe Safety**: Ensure Google Fonts can load when rendering in iframe
4. **Graceful Degradation**: Show fallback background color when images fail to load
5. **Semantic HTML**: Use proper tags (`<header>`, `<section>`, `<footer>`)

### Typical Use Cases
- Handicraft e-commerce (weaving, pottery, woodwork)
- Home textile stores (bedding, tablecloths, curtains)
- Fashion brands (linen clothing, natural fibers)
- Slow-living lifestyle blogs/magazines
- Coffee/bakery shop websites
