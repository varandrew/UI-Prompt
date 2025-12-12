# Custom Prompt

## 中文版本 (zh-CN)

創建一個具有 **Claymorphism（黏土態）電商展示** 風格的在線商店頁面，使用柔軟的 3D 黏土質感呈現產品卡片、購物車和結帳流程，營造童趣且親和力十足的購物體驗，使用 TailwindCSS 實現。

### 核心視覺特徵

**黏土質感電商設計語言**：
- 產品卡片採用蓬鬆柔軟的 3D 凸起效果，像手工捏製的黏土展示架
- 使用多層陰影系統：外部柔和陰影 + 內部高光反射，創造真實黏土材質
- 所有按鈕、標籤、徽章均採用圓潤的膠囊形狀（border-radius: 20px-40px）
- 顏色飽和度控制在 40-60%，避免過於刺眼的對比
- 懸停時產品卡片整體上浮並輕微彈跳，模擬黏土彈性觸感

**電商專屬色彩系統**：
- 背景色：溫暖的米白色 `#FAF9F6` 或淺米黃 `#FFF8E7`，營造溫馨購物氛圍
- 產品卡片色系：
  - 粉彩藍 `#B3D9FF` - 電子產品類
  - 粉彩粉 `#FFD1DC` - 時尚服飾類
  - 粉彩綠 `#C1F0C1` - 健康食品類
  - 粉彩紫 `#E6D5F5` - 美妝護膚類
  - 粉彩黃 `#FFF4B8` - 家居生活類
- 價格標籤使用醒目的珊瑚橙 `#FF8066` 或鮮亮的玫瑰紅 `#FF6B9D`
- 「加入購物車」按鈕使用充滿活力的薄荷綠 `#7FE8C3` 或檸檬黃 `#FFE66D`
- 折扣標籤使用高飽和度的橙紅色 `#FF6347`，帶有 3D 浮雕效果

**黏土材質深度效果**：
- 產品卡片陰影：
  ```css
  box-shadow:
    0 8px 20px rgba(product-color, 0.18),
    0 4px 8px rgba(product-color, 0.12),
    inset 0 -3px 6px rgba(255, 255, 255, 0.7),
    inset 0 1px 3px rgba(product-color, 0.2);
  ```
- 懸停時陰影增強 150% 並上浮 6px
- 按鈕點擊時下沉 2px 並陰影縮小至 60%，模擬按壓黏土的觸感
- 徽章和標籤使用更強烈的內嵌陰影，營造「刻印」效果

### 頁面結構與組件

**電商頁面佈局**：
```
┌──────────────────────────────────────────────────┐
│ [Logo] 商店 分類 特惠 關於 [搜索] [購物車(3)] │ ← 頂部導航欄（黏土質感）
├──────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────┐   │
│ │ 🎉 春季大促銷 - 全場 7 折！              │   │ ← 促銷橫幅（彩色黏土條）
│ │ [立即選購]（跳動的黏土按鈕）              │   │
│ └────────────────────────────────────────────┘   │
│                                                    │
│ [電子產品] [服飾] [美妝] [食品] [家居]           │ ← 分類標籤（黏土膠囊）
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🎧    │ │ 👕    │ │ 💄    │ │ 📱    │         │
│ │產品名稱│ │產品名稱│ │產品名稱│ │產品名稱│         │ ← 產品網格（黏土卡片）
│ │★★★★☆ │ │★★★★★ │ │★★★☆☆ │ │★★★★☆ │         │
│ │$99.99 │ │$49.99 │ │$29.99 │ │$199  │         │
│ │[加入購物車]│ │[加入購物車]│ │[加入購物車]│ │[加入購物車]│
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🏡    │ │ 🍎    │ │ 👟    │ │ 🎮    │         │
│ │[熱賣]  │ │[新品]  │ │[-30%] │ │[限量]  │         │ ← 更多產品（含徽章標籤）
│ │...    │ │...    │ │...    │ │...    │         │
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ [載入更多] （黏土按鈕）                           │
└──────────────────────────────────────────────────┘
```

**頂部導航欄（Navbar）**：
- 整體採用柔和的奶油白黏土質感，帶有輕微凸起
- Logo 區域使用彩色黏土徽章效果，帶有品牌主色漸變
- 導航項目採用圓潤膠囊形狀，當前頁面用更深的凸起和顏色強調
- 搜索框採用內嵌黏土效果（inset shadow），輸入時邊緣發光
- 購物車圖標帶有紅色黏土數字徽章（懸浮在右上角）

**促銷橫幅（Promo Banner）**：
- 使用漸變色黏土條（從粉橙到粉紅）
- 文字採用 3D 凸起效果，帶有輕微的投影
- CTA 按鈕使用跳動動畫（bounce animation），吸引用戶注意
- 橫幅兩側可選擇添加裝飾性的黏土形狀（圓點、星星）

**分類標籤（Category Pills）**：
- 每個分類採用不同色彩的黏土膠囊
- 選中狀態：膠囊凸起並帶有脈動動畫
- 未選中狀態：膠囊稍微內嵌，顏色較淺
- 懸停時膠囊輕微放大（scale: 1.05）並增加陰影

**產品卡片（Product Cards）**：
- 整體結構：
  - 頂部：產品圖片（圓角，帶有黏土相框效果）
  - 中部：
    - 產品名稱（粗體，16-18px）
    - 評分星級（使用黃色黏土星星）
    - 簡短描述（灰色，14px）
  - 底部：
    - 價格標籤（大號，橙色漸變）
    - 「加入購物車」按鈕（黏土質感，薄荷綠或檸檬黃）
- 徽章標籤（Badge Labels）：
  - 熱賣：紅色黏土標籤，右上角
  - 新品：藍色黏土標籤，左上角
  - 折扣：橙色黏土標籤，帶有「-30%」文字
  - 限量：紫色黏土標籤，閃爍動畫
- 懸停效果：
  - 整個卡片上浮 6px
  - 陰影增大 150%
  - 產品圖片輕微縮放（scale: 1.08）
  - 「加入購物車」按鈕顏色加深並帶有脈動效果

**購物車側邊欄（Shopping Cart Sidebar）**：
- 從右側滑入的黏土面板（backdrop 使用半透明黏土質感）
- 購物車項目列表：
  - 每個商品採用小型黏土卡片
  - 左側：產品縮略圖（圓角）
  - 中間：產品名稱 + 數量控制器（黏土 +/- 按鈕）
  - 右側：價格（橙色）+ 刪除按鈕（紅色黏土 X）
- 底部區域：
  - 總計金額（大號，帶有黃色高光）
  - 「結帳」按鈕（綠色黏土，全寬，帶有微動畫）

### 互動與動畫效果

**產品卡片彈跳動畫**：
```css
/* 懸停時的彈跳效果 */
.product-card:hover {
  animation: clay-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes clay-bounce {
  0% { transform: translateY(0) scale(1); }
  30% { transform: translateY(-8px) scale(1.02); }
  50% { transform: translateY(-6px) scale(1.03); }
  70% { transform: translateY(-8px) scale(1.02); }
  100% { transform: translateY(-6px) scale(1.03); }
}
```

**加入購物車動畫**：
- 點擊「加入購物車」按鈕時：
  1. 按鈕下沉並觸發「按壓黏土」動畫
  2. 產品圖標飛向購物車圖標（飛行軌跡帶有彈性曲線）
  3. 購物車數字徽章彈跳並數字增加
  4. 顯示黏土質感的成功提示（toast notification）

**分類切換動畫**：
- 點擊分類標籤時，新產品卡片使用交錯淡入動畫（stagger fade-in）
- 每個卡片延遲 50ms 出現，從上到下、從左到右
- 出現時帶有輕微的縮放和上浮效果

**徽章脈動動畫**：
```css
/* 限量徽章的脈動效果 */
.badge-limited {
  animation: pulse-badge 2s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 8px rgba(138, 43, 226, 0.3); }
  50% { transform: scale(1.1); box-shadow: 0 6px 12px rgba(138, 43, 226, 0.5); }
}
```

**價格標籤閃爍效果**：
- 折扣價格帶有輕微的「閃光掃過」動畫（shine sweep）
- 使用 CSS `linear-gradient` 和 `background-position` 實現

### 技術實現細節

**核心 CSS 樣式**：
```css
/* 產品卡片基礎類 */
.product-card-clay {
  background: linear-gradient(135deg, #FFD1DC 0%, #FFC0CB 100%);
  border-radius: 28px;
  padding: 24px;
  box-shadow:
    0 8px 20px rgba(255, 192, 203, 0.18),
    0 4px 8px rgba(255, 192, 203, 0.12),
    inset 0 -3px 6px rgba(255, 255, 255, 0.7),
    inset 0 1px 3px rgba(255, 192, 203, 0.2);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 加入購物車按鈕 */
.add-to-cart-btn {
  background: linear-gradient(135deg, #7FE8C3 0%, #5FD4A0 100%);
  border-radius: 20px;
  padding: 12px 24px;
  box-shadow:
    0 6px 12px rgba(127, 232, 195, 0.3),
    0 2px 4px rgba(95, 212, 160, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.8);
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.add-to-cart-btn:hover {
  background: linear-gradient(135deg, #5FD4A0 0%, #3FB87C 100%);
  box-shadow:
    0 8px 16px rgba(127, 232, 195, 0.4),
    0 4px 8px rgba(95, 212, 160, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.9);
  transform: translateY(-2px) scale(1.02);
}

/* 徽章標籤 */
.badge-clay {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #FF6347 0%, #FF4500 100%);
  border-radius: 16px;
  padding: 6px 12px;
  box-shadow:
    0 4px 8px rgba(255, 99, 71, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* 評分星星 */
.rating-stars-clay {
  display: inline-flex;
  gap: 4px;
}

.star-clay {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  filter: drop-shadow(0 2px 3px rgba(255, 215, 0, 0.4));
}

/* 價格標籤 */
.price-tag-clay {
  font-size: 28px;
  font-weight: 900;
  background: linear-gradient(135deg, #FF8066 0%, #FF6B9D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(255, 128, 102, 0.4));
  position: relative;
}

.price-tag-clay::before {
  content: '$';
  font-size: 18px;
  vertical-align: super;
}
```

**TailwindCSS 配置擴展**：
```javascript
// tailwind.config.js 中添加電商黏土效果
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'clay-product': '0 8px 20px rgba(255,192,203,0.18), 0 4px 8px rgba(255,192,203,0.12), inset 0 -3px 6px rgba(255,255,255,0.7)',
        'clay-product-hover': '0 12px 30px rgba(255,192,203,0.25), 0 6px 12px rgba(255,192,203,0.18), inset 0 -3px 6px rgba(255,255,255,0.8)',
        'clay-button': '0 6px 12px rgba(127,232,195,0.3), inset 0 -1px 2px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.8)',
        'clay-badge': '0 4px 8px rgba(255,99,71,0.4), inset 0 -1px 2px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.6)',
      },
      colors: {
        'clay-product-pink': '#FFD1DC',
        'clay-product-blue': '#B3D9FF',
        'clay-product-green': '#C1F0C1',
        'clay-product-purple': '#E6D5F5',
        'clay-product-yellow': '#FFF4B8',
        'clay-price': '#FF8066',
        'clay-cart-btn': '#7FE8C3',
        'clay-badge-hot': '#FF6347',
        'clay-bg-warm': '#FAF9F6',
      },
      animation: {
        'clay-bounce': 'clay-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pulse-badge': 'pulse-badge 2s ease-in-out infinite',
      },
      keyframes: {
        'clay-bounce': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '30%': { transform: 'translateY(-8px) scale(1.02)' },
          '50%': { transform: 'translateY(-6px) scale(1.03)' },
          '70%': { transform: 'translateY(-8px) scale(1.02)' },
          '100%': { transform: 'translateY(-6px) scale(1.03)' },
        },
        'pulse-badge': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 8px rgba(138, 43, 226, 0.3)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 6px 12px rgba(138, 43, 226, 0.5)' },
        },
      },
    }
  }
}
```

**響應式設計**：
- 桌面端（≥1280px）：產品網格 4 列
- 大平板端（1024px-1279px）：產品網格 3 列
- 小平板端（768px-1023px）：產品網格 2 列
- 移動端（<768px）：產品網格 1 列（卡片更大，圖片更突出）
- 購物車側邊欄在移動端改為全屏模態框

**無障礙考量**：
- 所有產品卡片提供 aria-label 描述產品信息
- 「加入購物車」按鈕提供視覺和觸覺反饋（vibration API）
- 價格標籤使用足夠的色彩對比度（WCAG AA）
- 評分星星提供替代文本（「4.5 out of 5 stars」）
- 徽章標籤顏色編碼不作為唯一信息傳達方式（附帶文字）

**性能優化**：
- 產品圖片使用懶加載（Intersection Observer）
- 無限滾動加載採用虛擬滾動技術（僅渲染可見區域）
- 動畫使用 `will-change: transform` 優化性能
- 購物車狀態使用 localStorage 持久化，減少 API 調用

### 設計目標與用戶體驗

**情感化購物體驗**：
- 黏土質感營造輕鬆、無壓力的購物氛圍
- 童趣的視覺風格降低購物決策焦慮
- 柔和色彩讓用戶願意長時間瀏覽商品
- 玩具般的互動效果增加購物樂趣

**適用場景**：
- 兒童玩具電商平台
- 手工藝品和創意商品商店
- 健康食品和有機產品店
- 時尚配飾和小眾品牌電商
- 適合追求差異化和年輕化品牌形象的商家

**品牌價值傳達**：
- 強調產品的手工感和獨特性
- 傳遞友好、溫暖、可信賴的品牌形象
- 吸引追求個性化和趣味性的年輕消費者
- 通過視覺差異化在競爭激烈的電商市場中脫穎而出

---

## English Version (en-US)

Create an online store page with **Claymorphism E-commerce** style, using soft 3D clay texture to present product cards, shopping cart, and checkout process, creating a playful and highly approachable shopping experience using TailwindCSS.

### Core Visual Characteristics

**Clay Texture E-commerce Design Language**:
- Product cards feature puffy soft 3D raised effects, like hand-sculpted clay display shelves
- Use multi-layer shadow system: outer soft shadow + inner highlight reflection, creating realistic clay material
- All buttons, labels, badges use rounded capsule shapes (border-radius: 20px-40px)
- Color saturation controlled at 40-60%, avoiding overly harsh contrasts
- Product cards float up and bounce slightly on hover, simulating clay elastic touch

**E-commerce Specific Color System**:
- Background: warm off-white `#FAF9F6` or light cream `#FFF8E7`, creating cozy shopping atmosphere
- Product card color schemes:
  - Pastel blue `#B3D9FF` - Electronics category
  - Pastel pink `#FFD1DC` - Fashion apparel category
  - Pastel green `#C1F0C1` - Health food category
  - Pastel purple `#E6D5F5` - Beauty cosmetics category
  - Pastel yellow `#FFF4B8` - Home living category
- Price tags use eye-catching coral orange `#FF8066` or bright rose red `#FF6B9D`
- "Add to Cart" button uses vibrant mint green `#7FE8C3` or lemon yellow `#FFE66D`
- Discount labels use high-saturation orange-red `#FF6347` with 3D embossed effect

**Clay Material Depth Effect**:
- Product card shadow:
  ```css
  box-shadow:
    0 8px 20px rgba(product-color, 0.18),
    0 4px 8px rgba(product-color, 0.12),
    inset 0 -3px 6px rgba(255, 255, 255, 0.7),
    inset 0 1px 3px rgba(product-color, 0.2);
  ```
- Hover state: shadow increases 150% and floats up 6px
- Button click: sinks 2px and shadow shrinks to 60%, simulating pressing clay touch
- Badges and labels use stronger inset shadows, creating "imprinted" effect

### Page Structure & Components

**E-commerce Page Layout**:
```
┌──────────────────────────────────────────────────┐
│ [Logo] Shop Categories Deals About [Search] [Cart(3)] │ ← Top navbar (clay texture)
├──────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────┐   │
│ │ 🎉 Spring Sale - 30% Off Everything!      │   │ ← Promo banner (colorful clay bar)
│ │ [Shop Now] (bouncing clay button)          │   │
│ └────────────────────────────────────────────┘   │
│                                                    │
│ [Electronics] [Fashion] [Beauty] [Food] [Home]   │ ← Category pills (clay capsules)
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🎧    │ │ 👕    │ │ 💄    │ │ 📱    │         │
│ │Product│ │Product│ │Product│ │Product│         │ ← Product grid (clay cards)
│ │★★★★☆ │ │★★★★★ │ │★★★☆☆ │ │★★★★☆ │         │
│ │$99.99 │ │$49.99 │ │$29.99 │ │$199  │         │
│ │[Add Cart]│ │[Add Cart]│ │[Add Cart]│ │[Add Cart]│
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🏡    │ │ 🍎    │ │ 👟    │ │ 🎮    │         │
│ │[Hot]   │ │[New]   │ │[-30%]  │ │[Limited]│       │ ← More products (with badge labels)
│ │...    │ │...    │ │...    │ │...    │         │
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ [Load More] (clay button)                         │
└──────────────────────────────────────────────────┘
```

**Top Navigation Bar (Navbar)**:
- Overall soft cream white clay texture with slight raise
- Logo area uses colorful clay badge effect with brand primary color gradient
- Navigation items use rounded pill shapes, current page shown with deeper raise and color emphasis
- Search box uses inset clay effect (inset shadow), edges glow on input
- Shopping cart icon with red clay number badge (floating on top right)

**Promo Banner**:
- Use gradient clay bar (from pink-orange to pink)
- Text uses 3D raised effect with slight drop shadow
- CTA button uses bounce animation to attract user attention
- Optional decorative clay shapes on banner sides (dots, stars)

**Category Pills**:
- Each category uses different colored clay capsule
- Selected state: capsule raises with pulsing animation
- Unselected state: capsule slightly inset, lighter color
- Hover: capsule slightly enlarges (scale: 1.05) with increased shadow

**Product Cards**:
- Overall structure:
  - Top: product image (rounded corners with clay frame effect)
  - Middle:
    - Product name (bold, 16-18px)
    - Rating stars (yellow clay stars)
    - Short description (gray, 14px)
  - Bottom:
    - Price tag (large, orange gradient)
    - "Add to Cart" button (clay texture, mint green or lemon yellow)
- Badge Labels:
  - Hot: red clay label, top right
  - New: blue clay label, top left
  - Discount: orange clay label with "-30%" text
  - Limited: purple clay label with blinking animation
- Hover effects:
  - Entire card floats up 6px
  - Shadow increases 150%
  - Product image slight zoom (scale: 1.08)
  - "Add to Cart" button darkens with pulsing effect

**Shopping Cart Sidebar**:
- Clay panel sliding in from right (backdrop uses semi-transparent clay texture)
- Cart item list:
  - Each item uses small clay card
  - Left: product thumbnail (rounded)
  - Middle: product name + quantity controller (clay +/- buttons)
  - Right: price (orange) + remove button (red clay X)
- Bottom area:
  - Total amount (large, with yellow highlight)
  - "Checkout" button (green clay, full width, with micro-animation)

### Interaction & Animation Effects

**Product Card Bounce Animation**:
```css
/* Bounce effect on hover */
.product-card:hover {
  animation: clay-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes clay-bounce {
  0% { transform: translateY(0) scale(1); }
  30% { transform: translateY(-8px) scale(1.02); }
  50% { transform: translateY(-6px) scale(1.03); }
  70% { transform: translateY(-8px) scale(1.02); }
  100% { transform: translateY(-6px) scale(1.03); }
}
```

**Add to Cart Animation**:
- When "Add to Cart" button is clicked:
  1. Button sinks and triggers "press clay" animation
  2. Product icon flies towards cart icon (flight path with elastic curve)
  3. Cart number badge bounces and number increases
  4. Show clay-textured success toast notification

**Category Switch Animation**:
- When clicking category pill, new product cards use staggered fade-in animation
- Each card appears with 50ms delay, top to bottom, left to right
- Appear with slight scale and float-up effect

**Badge Pulsing Animation**:
```css
/* Pulsing effect for limited badge */
.badge-limited {
  animation: pulse-badge 2s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 8px rgba(138, 43, 226, 0.3); }
  50% { transform: scale(1.1); box-shadow: 0 6px 12px rgba(138, 43, 226, 0.5); }
}
```

**Price Tag Shine Effect**:
- Discount prices have slight "shine sweep" animation
- Implemented using CSS `linear-gradient` and `background-position`

### Technical Implementation Details

[CSS styles and technical details provided in Chinese version above - same technical implementation]

**Responsive Design**:
- Desktop (≥1280px): 4-column product grid
- Large tablet (1024px-1279px): 3-column product grid
- Small tablet (768px-1023px): 2-column product grid
- Mobile (<768px): 1-column product grid (larger cards, more prominent images)
- Shopping cart sidebar becomes full-screen modal on mobile

**Accessibility Considerations**:
- All product cards provide aria-label describing product information
- "Add to Cart" button provides visual and tactile feedback (vibration API)
- Price tags use sufficient color contrast (WCAG AA)
- Rating stars provide alternative text ("4.5 out of 5 stars")
- Badge label colors not used as sole information delivery method (accompanied by text)

**Performance Optimization**:
- Product images use lazy loading (Intersection Observer)
- Infinite scroll uses virtual scrolling technique (only render visible area)
- Animations use `will-change: transform` for performance optimization
- Cart state persisted using localStorage, reducing API calls

### Design Goals & User Experience

**Emotional Shopping Experience**:
- Clay texture creates relaxed, pressure-free shopping atmosphere
- Playful visual style reduces shopping decision anxiety
- Soft colors encourage users to browse products for extended periods
- Toy-like interactive effects add shopping fun

**Applicable Scenarios**:
- Children's toy e-commerce platforms
- Handcrafted and creative product stores
- Health food and organic product shops
- Fashion accessories and niche brand e-commerce
- Suitable for merchants pursuing differentiation and youthful brand image

**Brand Value Communication**:
- Emphasize product's handcrafted feel and uniqueness
- Convey friendly, warm, trustworthy brand image
- Attract young consumers pursuing personalization and playfulness
- Stand out in competitive e-commerce market through visual differentiation
