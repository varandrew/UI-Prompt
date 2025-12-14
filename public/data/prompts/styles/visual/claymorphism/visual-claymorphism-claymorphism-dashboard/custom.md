# Custom Prompt

## 中文版本 (zh-CN)

創建一個具有 **Claymorphism（黏土態）** 風格特徵的創意儀表板頁面，整體呈現柔軟、立體、玩具般的 3D 質感，使用 TailwindCSS 實現現代化的數據可視化和管理界面。

### 核心視覺特徵

**黏土質感設計語言**：
- 所有 UI 元素採用柔軟、圓潤的 3D 凸起效果，模擬真實黏土材質
- 使用多層陰影創造深度感：外部陰影（drop shadow）+ 內部高光（inner highlight）
- 元素邊緣採用極度圓潤的圓角（border-radius: 24px-48px），營造手工捏製的觸感
- 表面質感輕微啞光，避免過於光滑的塑料感
- 3D 凸起效果：使用 `box-shadow: 0 8px 16px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5) inset`

**色彩系統**：
- 主色調：柔和的粉彩色系（pastel palette）
  - 背景：淺藍灰 `#E8EDF5` 或淺紫灰 `#F0EDF6`
  - 主要元素：柔和藍 `#A8C5E8`、柔和粉 `#F8BBD0`、柔和紫 `#D1C4E9`
  - 強調色：珊瑚橙 `#FFAB91`、薄荷綠 `#A5D6A7`、檸檬黃 `#FFF59D`
- 採用低飽和度色彩（saturation 40-60%），營造柔和親和感
- 每個數據卡片使用不同色系，但保持整體色調和諧統一
- 陰影顏色與卡片顏色匹配，而非純黑色（如藍色卡片用深藍陰影）

**深度與陰影**：
- 三層陰影系統創造真實立體感：
  - 第一層：柔和擴散陰影 `0 4px 8px rgba(主色, 0.15)`
  - 第二層：較深邊緣陰影 `0 12px 24px rgba(主色, 0.12)`
  - 第三層：內部高光 `inset 0 -2px 4px rgba(255,255,255,0.6)`
- 懸停時陰影增強並略微上浮：`transform: translateY(-4px); box-shadow 增大 120%`
- 按壓時陰影減弱並下沉：`transform: translateY(2px); box-shadow 減小 70%`

### 頁面結構與組件

**儀表板佈局**：
```
┌────────────────────────────────────────────────┐
│  [Logo]  儀表板  分析  報告  設定   [Profile] │ ← 頂部導航欄（黏土質感）
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │  歡迎回來，Tom！                         │  │ ← Hero 區域（柔和背景漸變）
│  │  這是您今日的數據概覽                   │  │
│  │  [查看詳情]（黏土按鈕）                 │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ 📊 銷售│ │ 👥 用戶│ │ 💰 收益│ │ 📈 增長│  │ ← 統計卡片網格（4 列）
│  │ 12,345 │ │ 8,921  │ │ $45.2K │ │ +23.5% │  │   每個卡片不同色彩
│  │ +12.3% │ │ +5.7%  │ │ +18.9% │ │ 本月   │  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                  │
│  ┌─────────────────────┐ ┌─────────────────┐  │
│  │  📊 月度趨勢圖      │ │  🎯 目標進度    │  │ ← 圖表區域（大卡片）
│  │  [折線圖區域]       │ │  [環形進度條]   │  │
│  │                     │ │  完成度：78%    │  │
│  └─────────────────────┘ └─────────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │  最近活動                                │  │ ← 活動列表（時間軸）
│  │  ○ 新訂單 #1234 - 2分鐘前              │  │
│  │  ○ 用戶註冊 - 15分鐘前                  │  │
│  │  ○ 付款成功 - 1小時前                   │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**頂部導航欄（Navbar）**：
- 整體採用淺色黏土質感，帶有柔和凸起效果
- 導航項目採用圓潤膠囊形狀（pill shape），當前頁面用更深的凸起表示
- Logo 區域使用彩色黏土徽章效果
- 用戶頭像採用 3D 圓形凸起，帶有彩色邊框

**統計卡片（Stat Cards）**：
- 每個卡片採用不同的粉彩色系（藍、粉、紫、橙）
- 卡片內部結構：
  - 頂部：大號 emoji 圖標（用作視覺識別）
  - 中部：超大數字（48px+），使用粗體字重
  - 底部：小型趨勢指標（百分比 + 箭頭圖標）
- 卡片懸停時整體上浮 4px，陰影擴大
- 內部元素（數字、圖標）也具有細微的內嵌黏土效果

**數據圖表卡片**：
- 更大的黏土容器（min-height: 400px）
- 圖表區域使用柔和的背景色分層
- 圖表線條採用圓潤的線帽（stroke-linecap: round）
- 數據點使用小型黏土球體標記
- 圖例標籤採用黏土標籤樣式（rounded pill）

**活動時間軸**：
- 每個活動項目是獨立的黏土卡片
- 左側圓點標記使用漸變色黏土球
- 時間戳採用柔和灰色文字
- 懸停時整個項目略微凸起

### 互動與動畫效果

**黏土彈性動畫**：
```css
/* 按鈕點擊時的黏土彈性效果 */
.clay-button:active {
  animation: clay-squish 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes clay-squish {
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(0.95) translateY(2px); }
  100% { transform: scale(1) translateY(0); }
}
```

**懸停效果**：
- 卡片懸停時：`transform: translateY(-4px); box-shadow 放大至 120%`
- 過渡時間：`transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`（彈性緩動）
- 內部元素（圖標、數字）同時放大 5%：`transform: scale(1.05)`

**載入狀態**：
- 骨架屏使用淺色黏土卡片，帶有柔和的脈動動畫
- 脈動效果：`animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
- 數據更新時使用柔和的淡入效果

**微互動細節**：
- 數字更新時使用滾動計數器動畫（countUp effect）
- 百分比變化時帶有顏色過渡（綠色增長、紅色下降）
- 圖表數據點懸停時顯示黏土工具提示框
- 開關切換使用黏土滑塊效果（slider knob 是 3D 球體）

### 技術實現細節

**核心 CSS 樣式**：
```css
/* 基礎黏土卡片類 */
.clay-card {
  background: linear-gradient(135deg, #E8EDF5 0%, #F0EDF6 100%);
  border-radius: 32px;
  padding: 32px;
  box-shadow:
    0 8px 16px rgba(168, 197, 232, 0.15),
    0 12px 32px rgba(168, 197, 232, 0.12),
    inset 0 -2px 8px rgba(255, 255, 255, 0.6),
    inset 0 2px 4px rgba(209, 196, 233, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 黏土按鈕 */
.clay-button {
  background: linear-gradient(135deg, #FFAB91 0%, #FF8A65 100%);
  border-radius: 24px;
  padding: 16px 32px;
  box-shadow:
    0 6px 12px rgba(255, 171, 145, 0.25),
    0 2px 4px rgba(255, 138, 101, 0.35),
    inset 0 -1px 3px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.7);
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 統計數字 */
.clay-stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(94, 53, 177, 0.3));
}
```

**TailwindCSS 配置擴展**：
```javascript
// tailwind.config.js 中添加黏土效果
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'clay': '0 8px 16px rgba(168,197,232,0.15), 0 12px 32px rgba(168,197,232,0.12), inset 0 -2px 8px rgba(255,255,255,0.6)',
        'clay-hover': '0 12px 24px rgba(168,197,232,0.2), 0 18px 48px rgba(168,197,232,0.15), inset 0 -2px 8px rgba(255,255,255,0.7)',
        'clay-pressed': '0 2px 4px rgba(168,197,232,0.15), inset 0 2px 8px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'clay': '32px',
        'clay-sm': '24px',
        'clay-lg': '48px',
      },
      colors: {
        'clay-blue': '#A8C5E8',
        'clay-pink': '#F8BBD0',
        'clay-purple': '#D1C4E9',
        'clay-coral': '#FFAB91',
        'clay-mint': '#A5D6A7',
        'clay-lemon': '#FFF59D',
        'clay-bg': '#E8EDF5',
      }
    }
  }
}
```

**響應式設計**：
- 桌面端（≥1024px）：統計卡片 4 列網格佈局
- 平板端（768px-1023px）：統計卡片 2 列網格
- 移動端（<768px）：統計卡片單列堆疊
- 圖表區域在移動端堆疊顯示，並調整高度適應小屏幕

**無障礙考量**：
- 所有黏土元素保持足夠的色彩對比度（WCAG AA 標準）
- 互動元素提供清晰的焦點指示器（focus ring 使用黏土風格）
- 圖表提供替代文本描述
- 支持鍵盤導航，Tab 順序符合邏輯

**性能優化**：
- 使用 CSS `will-change: transform` 優化動畫性能
- 避免同時動畫過多屬性（僅使用 transform 和 opacity）
- 圖表使用 Canvas 而非 SVG 以提升大數據集渲染性能
- 懶加載非首屏圖表組件

### 設計目標與用戶體驗

**情感化設計**：
- 黏土質感帶來友好、親和、非威脅性的視覺體驗
- 適合創意工作室、教育平台、兒童產品的儀表板場景
- 柔和色彩降低長時間使用的視覺疲勞
- 玩具般的質感讓數據分析變得更有趣、更平易近人

**品牌適配性**：
- 適合年輕化、創意驅動的品牌形象
- 強調人性化、易用性、趣味性
- 可通過調整主色調適應不同品牌色系
- 保持專業度的同時不失親和力


---

## English Version (en-US)

Create a creative dashboard page with **Claymorphism** style characteristics, presenting a soft, three-dimensional, toy-like 3D texture, using TailwindCSS to implement a modern data visualization and management interface.

### Core Visual Characteristics

**Clay Texture Design Language**:
- All UI elements feature soft, rounded 3D raised effects that simulate real clay material
- Use multi-layered shadows to create depth: outer shadow (drop shadow) + inner highlight
- Element edges use extremely rounded corners (border-radius: 24px-48px) to create a hand-sculpted touch
- Surface texture is slightly matte, avoiding overly smooth plastic feel
- 3D raised effect: `box-shadow: 0 8px 16px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5) inset`

**Color System**:
- Main palette: soft pastel colors
  - Background: light blue-gray `#E8EDF5` or light purple-gray `#F0EDF6`
  - Primary elements: soft blue `#A8C5E8`, soft pink `#F8BBD0`, soft purple `#D1C4E9`
  - Accent colors: coral orange `#FFAB91`, mint green `#A5D6A7`, lemon yellow `#FFF59D`
- Use low saturation colors (saturation 40-60%) to create soft affinity
- Each data card uses different color schemes while maintaining overall harmonious tone
- Shadow colors match card colors rather than pure black (e.g., blue cards use deep blue shadows)

**Depth & Shadows**:
- Three-layer shadow system creates realistic three-dimensionality:
  - First layer: soft diffused shadow `0 4px 8px rgba(primary-color, 0.15)`
  - Second layer: deeper edge shadow `0 12px 24px rgba(primary-color, 0.12)`
  - Third layer: inner highlight `inset 0 -2px 4px rgba(255,255,255,0.6)`
- Hover state: shadows enhance and slightly float up: `transform: translateY(-4px); box-shadow increases 120%`
- Pressed state: shadows diminish and sink down: `transform: translateY(2px); box-shadow decreases 70%`

### Page Structure & Components

**Dashboard Layout**:
```
┌────────────────────────────────────────────────┐
│  [Logo] Dashboard Analytics Reports Settings  │ ← Top navbar (clay texture)
│                                     [Profile]  │
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │  Welcome back, Tom!                      │  │ ← Hero section (soft gradient bg)
│  │  Here's your daily data overview         │  │
│  │  [View Details] (clay button)            │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ 📊 Sales│ │ 👥 Users│ │ 💰 Revenue│ │ 📈 Growth│ ← Stat cards grid (4 cols)
│  │ 12,345 │ │ 8,921  │ │ $45.2K │ │ +23.5% │  │   Each card different color
│  │ +12.3% │ │ +5.7%  │ │ +18.9% │ │ Monthly│  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                  │
│  ┌─────────────────────┐ ┌─────────────────┐  │
│  │  📊 Monthly Trends  │ │  🎯 Goal Progress│ ← Chart area (large cards)
│  │  [Line chart area]  │ │  [Ring progress] │  │
│  │                     │ │  Completion: 78% │  │
│  └─────────────────────┘ └─────────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │  Recent Activities                       │  │ ← Activity timeline
│  │  ○ New order #1234 - 2 mins ago         │  │
│  │  ○ User registration - 15 mins ago      │  │
│  │  ○ Payment successful - 1 hour ago      │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**Top Navigation Bar (Navbar)**:
- Overall light clay texture with soft raised effect
- Navigation items use rounded pill shapes, current page shown with deeper raise
- Logo area uses colorful clay badge effect
- User avatar uses 3D circular raise with colored border

**Stat Cards**:
- Each card uses different pastel color scheme (blue, pink, purple, orange)
- Card internal structure:
  - Top: large emoji icon (used for visual identification)
  - Middle: extra-large number (48px+), using bold font weight
  - Bottom: small trend indicator (percentage + arrow icon)
- Card hovers up 4px on hover, shadow expands
- Internal elements (numbers, icons) also have subtle inset clay effect

**Data Chart Cards**:
- Larger clay containers (min-height: 400px)
- Chart area uses soft background color layering
- Chart lines use rounded line caps (stroke-linecap: round)
- Data points marked with small clay spheres
- Legend labels use clay label style (rounded pill)

**Activity Timeline**:
- Each activity item is an independent clay card
- Left side circular markers use gradient clay balls
- Timestamps use soft gray text
- Entire item slightly raises on hover

### Interaction & Animation Effects

**Clay Elastic Animation**:
```css
/* Clay elastic effect on button click */
.clay-button:active {
  animation: clay-squish 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes clay-squish {
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(0.95) translateY(2px); }
  100% { transform: scale(1) translateY(0); }
}
```

**Hover Effects**:
- Card hover: `transform: translateY(-4px); box-shadow increases to 120%`
- Transition time: `transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` (elastic easing)
- Internal elements (icons, numbers) simultaneously scale up 5%: `transform: scale(1.05)`

**Loading States**:
- Skeleton screens use light clay cards with soft pulsing animation
- Pulse effect: `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
- Data updates use soft fade-in effect

**Micro-interaction Details**:
- Number updates use rolling counter animation (countUp effect)
- Percentage changes come with color transitions (green for growth, red for decline)
- Chart data points show clay tooltip boxes on hover
- Toggle switches use clay slider effect (slider knob is a 3D sphere)

### Technical Implementation Details

**Core CSS Styles**:
```css
/* Base clay card class */
.clay-card {
  background: linear-gradient(135deg, #E8EDF5 0%, #F0EDF6 100%);
  border-radius: 32px;
  padding: 32px;
  box-shadow:
    0 8px 16px rgba(168, 197, 232, 0.15),
    0 12px 32px rgba(168, 197, 232, 0.12),
    inset 0 -2px 8px rgba(255, 255, 255, 0.6),
    inset 0 2px 4px rgba(209, 196, 233, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Clay button */
.clay-button {
  background: linear-gradient(135deg, #FFAB91 0%, #FF8A65 100%);
  border-radius: 24px;
  padding: 16px 32px;
  box-shadow:
    0 6px 12px rgba(255, 171, 145, 0.25),
    0 2px 4px rgba(255, 138, 101, 0.35),
    inset 0 -1px 3px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.7);
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Stat numbers */
.clay-stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(94, 53, 177, 0.3));
}
```

**TailwindCSS Config Extension**:
```javascript
// Add clay effects in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'clay': '0 8px 16px rgba(168,197,232,0.15), 0 12px 32px rgba(168,197,232,0.12), inset 0 -2px 8px rgba(255,255,255,0.6)',
        'clay-hover': '0 12px 24px rgba(168,197,232,0.2), 0 18px 48px rgba(168,197,232,0.15), inset 0 -2px 8px rgba(255,255,255,0.7)',
        'clay-pressed': '0 2px 4px rgba(168,197,232,0.15), inset 0 2px 8px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'clay': '32px',
        'clay-sm': '24px',
        'clay-lg': '48px',
      },
      colors: {
        'clay-blue': '#A8C5E8',
        'clay-pink': '#F8BBD0',
        'clay-purple': '#D1C4E9',
        'clay-coral': '#FFAB91',
        'clay-mint': '#A5D6A7',
        'clay-lemon': '#FFF59D',
        'clay-bg': '#E8EDF5',
      }
    }
  }
}
```

**Responsive Design**:
- Desktop (≥1024px): 4-column grid layout for stat cards
- Tablet (768px-1023px): 2-column grid for stat cards
- Mobile (<768px): single-column stacking for stat cards
- Chart areas stack vertically on mobile with adjusted heights for smaller screens

**Accessibility Considerations**:
- All clay elements maintain sufficient color contrast (WCAG AA standard)
- Interactive elements provide clear focus indicators (focus ring uses clay style)
- Charts provide alternative text descriptions
- Support keyboard navigation with logical tab order

**Performance Optimization**:
- Use CSS `will-change: transform` to optimize animation performance
- Avoid animating too many properties simultaneously (only use transform and opacity)
- Charts use Canvas instead of SVG for better rendering performance with large datasets
- Lazy load non-above-the-fold chart components

### Design Goals & User Experience

**Emotional Design**:
- Clay texture brings friendly, approachable, non-threatening visual experience
- Suitable for dashboards in creative studios, educational platforms, children's products
- Soft colors reduce visual fatigue during extended use
- Toy-like texture makes data analysis more fun and approachable

**Brand Adaptability**:
- Suitable for youthful, creativity-driven brand images
- Emphasizes humanization, usability, and playfulness
- Can be adapted to different brand color schemes by adjusting primary colors
- Maintains professionalism while keeping approachability
