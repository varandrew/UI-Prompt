# Custom Prompt

## 中文版本 (zh-CN)

設計一個擬物化風格的復古圖書館著陸頁，營造學術殿堂的莊嚴氛圍，結合古籍質感與經典建築元素。

**核心視覺特徵**：
- **皮革裝訂質感**：深酒紅、墨綠、藏青的精裝書封面，帶有燙金紋飾和壓紋圖案
- **羊皮紙與古紙**：泛黃的紙張背景、毛邊紙紋理、水印效果、墨跡斑點
- **古典印刷字體**：襯線體標題（如 Garamond、Baskerville）、手寫花體裝飾字母
- **木質書架元素**：深色桃花心木架體、雕花裝飾、黃銅配件、書擋造型
- **圖書館器物**：綠色銀行燈、放大鏡、羽毛筆、火漆印章、書籤絲帶

**頁面結構**：
1. **Hero 書卷區**：展開的古籍書頁效果，標題如同手寫章節名，帶有裝飾性首字母
2. **書架導航**：木質書架造型的分類導航，每個書脊是一個可點擊的類別
3. **藏書展示卡片**：立體書籍封面效果，帶有書脊厚度和頁面層次
4. **引言展示區**：羊皮紙捲軸風格的精選引言，帶有裝飾性邊框
5. **館藏統計**：復古計數器風格的數據展示，模擬機械翻頁效果
6. **訂閱入口**：火漆印章風格的 CTA 按鈕，帶有「加入藏書閣」的意象
7. **頁腳區**：古典圖書館建築剪影，帶有希臘柱式裝飾

**交互細節**：
- 書籍封面 hover 時有翻開第一頁的預覽效果
- 滾動時書頁有輕微的翻動動畫
- 導航切換時模擬書籍翻頁的過渡效果
- 按鈕點擊時火漆印章有蓋印動畫
- 載入時有墨水暈染的進場動畫

**色彩方案**：
- 主色：酒紅皮革 (#722f37)、墨綠布面 (#2e4a3f)、藏青絲絨 (#1a365d)
- 裝飾色：燙金 (#d4af37)、古銅 (#8b4513)、象牙白 (#fffff0)
- 背景：羊皮紙黃 (#f5e6c8)、古紙褐 (#e8d5b7)
- 強調：蠟封紅 (#8b0000)、墨水黑 (#1a1a1a)

**氛圍營造**：
- 整體色調偏暖黃，模擬燭光或老式燈泡照明
- 邊緣處理偏向磨損、做舊效果
- 適度的紙張紋理覆蓋增加歲月感
- 裝飾元素參考維多利亞時期和文藝復興風格
- 字體排版遵循古典書籍設計原則（大標題、小型大寫字母、懸掛縮進）


---

## English Version (en-US)

Design a skeuomorphic vintage library landing page that creates a scholarly, majestic atmosphere, combining antique book textures with classical architectural elements.

**Core Visual Features**:
- **Leather-Bound Textures**: Deep burgundy, forest green, and navy blue hardcover book surfaces with gold foil embossing and debossed patterns
- **Parchment & Aged Paper**: Yellowed paper backgrounds, deckle edge textures, watermark effects, ink spots
- **Classical Typography**: Serif headings (like Garamond, Baskerville), decorative drop caps with calligraphic flourishes
- **Wooden Bookshelf Elements**: Dark mahogany shelving, carved ornaments, brass fittings, bookend shapes
- **Library Artifacts**: Green banker's lamps, magnifying glasses, quill pens, wax seal stamps, ribbon bookmarks

**Page Structure**:
1. **Hero Book Spread**: Open antique book page effect, titles styled as handwritten chapter names with decorative initials
2. **Bookshelf Navigation**: Wooden shelf-shaped category navigation, each book spine is a clickable category
3. **Collection Display Cards**: 3D book cover effects with spine thickness and page layer depth
4. **Quote Showcase**: Parchment scroll-style featured quotes with ornamental borders
5. **Collection Statistics**: Vintage counter-style data displays simulating mechanical flip effects
6. **Subscription Entry**: Wax seal stamp-style CTA button with "Join the Archives" imagery
7. **Footer Area**: Classical library building silhouettes with Greek column decorations

**Interaction Details**:
- Book covers show first-page peek preview on hover
- Subtle page-turning animations during scrolling
- Book page flip transition effects when navigating
- Wax seal stamping animation on button click
- Ink bleeding entrance animations on load

**Color Palette**:
- Primary: Burgundy leather (#722f37), forest green cloth (#2e4a3f), navy velvet (#1a365d)
- Decorative: Gold foil (#d4af37), antique bronze (#8b4513), ivory (#fffff0)
- Background: Parchment yellow (#f5e6c8), aged paper tan (#e8d5b7)
- Accent: Sealing wax red (#8b0000), ink black (#1a1a1a)

**Atmosphere Creation**:
- Overall warm yellow tint simulating candlelight or vintage bulb lighting
- Edge treatments with worn, distressed effects
- Moderate paper texture overlays adding aged patina
- Decorative elements referencing Victorian and Renaissance styles
- Typography following classical book design principles (display titles, small caps, hanging indents)

**Technical Implementation**:
- Use CSS `background-image` with paper/leather texture patterns
- Apply `box-shadow` with multiple layers for book spine depth
- Implement CSS `perspective` and `rotateY()` for book opening effects
- Use `@keyframes` for page-flip and ink-bleeding animations
- Add `border-image` for ornamental frame borders
- Apply `filter: sepia()` and noise overlays for aged effect
- Use `clip-path` for deckle edge paper effects
