# Custom Prompt

## 中文版本 (zh-CN)

設計一個擬物化風格的科技公司主頁，融合未來感工業設計與觸感真實的 UI 元素。

**核心視覺特徵**：
- **金屬質感表面**：拋光鋁合金、鍍鉻邊框、陽極氧化處理的深色金屬面板
- **精密機械細節**：六角螺絲、散熱孔陣列、CNC 切割邊緣、LED 指示燈
- **工業級按鈕**：帶有金屬邊框的按壓式開關，具有明確的按下反饋和陰影變化
- **玻璃與金屬對比**：磨砂玻璃覆蓋層搭配拉絲金屬底座
- **精確的光影層級**：多層陰影營造 3D 浮雕效果，高光邊緣模擬真實光源

**頁面結構**：
1. **Hero 區域**：大型產品展示區，帶有金屬質感的標題排版和發光 CTA 按鈕
2. **功能卡片區**：每張卡片如同獨立的金屬面板，帶有凹陷的圖標區域和浮雕文字
3. **數據儀表板**：模擬真實儀表的數據展示，包含刻度盤、進度條、狀態指示燈
4. **產品規格區**：技術參數以工業標籤風格呈現，帶有機械編號系統
5. **CTA 區域**：大型金屬按鈕，帶有發光邊緣和按壓動畫效果

**交互細節**：
- 按鈕 hover 時金屬邊緣發出微光
- 點擊時有真實的按壓深度變化
- 滾動時元素帶有微妙的視差效果
- 表單輸入框如同金屬凹槽，聚焦時邊緣發光

**色彩方案**：
- 主色：深空灰 (#1a1a2e)、鈦金屬色 (#2d3436)
- 強調色：電藍 (#00d9ff)、琥珀警示燈 (#ffa502)
- 表面：拋光銀 (#c8d6e5)、磨砂黑 (#2c3e50)


---

## English Version (en-US)

Design a skeuomorphic tech corporation homepage that blends futuristic industrial design with tactile, realistic UI elements.

**Core Visual Features**:
- **Metallic Surfaces**: Polished aluminum, chrome-plated bezels, anodized dark metal panels
- **Precision Mechanical Details**: Hexagonal screws, ventilation hole arrays, CNC-cut edges, LED indicators
- **Industrial-Grade Buttons**: Push switches with metal frames, featuring distinct press feedback and shadow transitions
- **Glass-Metal Contrast**: Frosted glass overlays paired with brushed metal bases
- **Precise Light & Shadow Hierarchy**: Multi-layered shadows creating 3D embossed effects, highlight edges simulating real light sources

**Page Structure**:
1. **Hero Section**: Large product showcase area with metallic typography and glowing CTA buttons
2. **Feature Cards**: Each card resembles an independent metal panel with recessed icon areas and embossed text
3. **Data Dashboard**: Real instrument-style data displays including dials, progress bars, and status indicator lights
4. **Product Specs**: Technical parameters presented as industrial labels with mechanical numbering systems
5. **CTA Section**: Large metal buttons with glowing edges and press animation effects

**Interaction Details**:
- Button edges emit subtle glow on hover
- Realistic press depth changes on click
- Subtle parallax effects during scrolling
- Form inputs styled as metal grooves, edges glow on focus

**Color Palette**:
- Primary: Deep space gray (#1a1a2e), titanium (#2d3436)
- Accent: Electric blue (#00d9ff), amber warning light (#ffa502)
- Surfaces: Polished silver (#c8d6e5), matte black (#2c3e50)

**Technical Implementation**:
- Use CSS `box-shadow` with multiple layers for 3D depth
- Apply `linear-gradient` for metallic surface reflections
- Implement `transform: translateY()` for button press states
- Use `backdrop-filter: blur()` for frosted glass effects
- Add `transition` with custom cubic-bezier for mechanical feel
