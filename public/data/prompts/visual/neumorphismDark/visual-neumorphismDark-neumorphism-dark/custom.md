# Custom Prompt

## 中文版本 (zh-CN)

創建一個具有 **Neumorphism Dark（深色柔和 UI）** 風格的現代應用界面，在深色背景上使用柔和的內外陰影創造微妙的 3D 凸起和凹陷效果，採用單色調深色調色板營造平靜專業的視覺體驗，使用 TailwindCSS 實現。

### 核心視覺特徵

**深色 Neumorphism 設計語言**：
- 背景色使用深灰色調（`#1e1e1e` 到 `#2d2d2d`），避免純黑色
- 元素通過微妙的陰影浮出或嵌入背景，而非使用邊框
- 凸起元素（按鈕、卡片）使用雙向陰影：
  - 左上光源陰影：`box-shadow: -8px -8px 16px rgba(255,255,255,0.03)`
  - 右下暗部陰影：`box-shadow: 8px 8px 16px rgba(0,0,0,0.4)`
- 凹陷元素（輸入框、內容區）使用內嵌陰影：
  - 內陰影：`box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.03)`
- 所有元素採用極度圓潤的圓角（16px-24px），強調柔和觸感

**深色單色調色彩系統**：
- 主背景：深灰 `#1e1e1e`
- 卡片背景：中灰 `#2d2d2d`
- 凸起元素：略淺於背景 `#323232`
- 凹陷元素：略深於背景 `#1a1a1a`
- 文字顏色：
  - 主文字：柔和白色 `#e0e0e0`
  - 次要文字：中灰色 `#a0a0a0`
  - 禁用文字：深灰色 `#606060`
- 強調色：柔和藍色 `#5b8fd9`、柔和紫色 `#9b7fd9` 或柔和綠色 `#7fd9a0`（用於活躍狀態）

**陰影深度系統**：
- 淺層凸起（按鈕）：陰影偏移 ±6px，模糊 12px
- 中層凸起（卡片）：陰影偏移 ±8px，模糊 16px
- 深層凸起（浮動元素）：陰影偏移 ±12px，模糊 24px
- 淺層凹陷（輸入框）：內陰影偏移 ±3px，模糊 6px
- 深層凹陷（內容區）：內陰影偏移 ±6px，模糊 12px

### 頁面結構與組件

**深色 Neumorphism 應用佈局**：
```
┌────────────────────────────────────────────────┐
│  [≡] 設定面板    [🔍] [🔔] [👤]               │ ← 頂部欄（凸起）
├────────────────────────────────────────────────┤
│  ┌──────────┐                                  │
│  │ 導航     │  ┌───────────────────────────┐  │
│  │ 📊 儀表板 │  │  歡迎回來！               │  │
│  │ 📁 文件  │  │  這是您的深色工作空間      │  │ ← Hero 卡片（凸起）
│  │ ⚙️ 設定  │  │  [開始工作]（凸起按鈕）    │  │
│  │ 👥 團隊  │  └───────────────────────────┘  │
│  └──────────┘                                  │ ← 側邊欄（凸起面板）
│                                                 │
│              ┌─────┐ ┌─────┐ ┌─────┐          │
│              │ 統計│ │ 任務│ │ 進度│          │ ← 統計卡片（凸起）
│              │ 125 │ │ 48  │ │ 78% │          │
│              └─────┘ └─────┘ └─────┘          │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │ 最近活動                                 │  │
│  │ ┌────────────────────────────────────┐  │  │ ← 活動列表（凹陷內容區）
│  │ │ ○ 任務完成 - 2 小時前              │  │  │
│  │ │ ○ 文件上傳 - 4 小時前              │  │  │
│  │ │ ○ 會議記錄 - 昨天                  │  │  │
│  │ └────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**核心組件樣式**：

**凸起按鈕**：
```css
.neomorph-dark-btn {
  background: #2d2d2d;
  border-radius: 16px;
  padding: 12px 24px;
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.03),
    6px 6px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.neomorph-dark-btn:hover {
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.04),
    8px 8px 16px rgba(0, 0, 0, 0.5);
}

.neomorph-dark-btn:active {
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.03);
}
```

**凹陷輸入框**：
```css
.neomorph-dark-input {
  background: #1a1a1a;
  border-radius: 12px;
  padding: 12px 16px;
  border: none;
  color: #e0e0e0;
  box-shadow:
    inset 3px 3px 6px rgba(0, 0, 0, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.02);
}

.neomorph-dark-input:focus {
  outline: none;
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.03),
    0 0 0 2px rgba(91, 143, 217, 0.3);
}
```

**凸起卡片**：
```css
.neomorph-dark-card {
  background: #2d2d2d;
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.03),
    8px 8px 16px rgba(0, 0, 0, 0.4);
}
```

**開關切換器**：
```css
.neomorph-dark-toggle {
  width: 60px;
  height: 32px;
  background: #1e1e1e;
  border-radius: 16px;
  position: relative;
  box-shadow:
    inset 3px 3px 6px rgba(0, 0, 0, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.02);
}

.neomorph-dark-toggle-knob {
  width: 24px;
  height: 24px;
  background: #2d2d2d;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  box-shadow:
    -3px -3px 6px rgba(255, 255, 255, 0.03),
    3px 3px 6px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.neomorph-dark-toggle.active .neomorph-dark-toggle-knob {
  left: 32px;
  background: #5b8fd9;
}
```

### 互動與動畫效果

**按壓動畫**：
- 凸起按鈕點擊時轉為凹陷狀態（內陰影）
- 過渡時間 150ms，使用 ease-out 緩動
- 釋放時恢復凸起狀態（300ms, ease-in）

**懸停效果**：
- 陰影強度增加 20%
- 元素輕微上浮（transform: translateY(-2px)）
- 顏色略微增亮（background lightness +5%）

**焦點指示**：
- 輸入框焦點時添加柔和的強調色外發光
- 發光效果：`box-shadow: 0 0 0 2px rgba(91, 143, 217, 0.3)`

### 技術實現

**TailwindCSS 配置**：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'neomorph-dark-bg': '#1e1e1e',
        'neomorph-dark-card': '#2d2d2d',
        'neomorph-dark-text': '#e0e0e0',
        'neomorph-dark-text-secondary': '#a0a0a0',
        'neomorph-dark-accent': '#5b8fd9',
      },
      boxShadow: {
        'neomorph-dark-raised': '-8px -8px 16px rgba(255,255,255,0.03), 8px 8px 16px rgba(0,0,0,0.4)',
        'neomorph-dark-inset': 'inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.03)',
      }
    }
  }
}
```

### 設計目標

**專業與平靜**：
- 深色背景減少眼睛疲勞，適合長時間使用
- 微妙的陰影創造優雅的 3D 效果，不過於搶眼
- 單色調設計營造專業、現代的氛圍
- 適合生產力工具、專業軟件、設計應用

---

## English Version (en-US)

Create a modern application interface with **Neumorphism Dark (Dark Soft UI)** style, using soft inner and outer shadows on dark background to create subtle 3D raised and inset effects, adopting monochromatic dark color palette to create a calm and professional visual experience, implemented with TailwindCSS.

### Core Visual Characteristics

**Dark Neumorphism Design Language**:
- Background uses deep gray tones (`#1e1e1e` to `#2d2d2d`), avoiding pure black
- Elements float or embed into background through subtle shadows, not borders
- Raised elements (buttons, cards) use bidirectional shadows:
  - Top-left light source shadow: `box-shadow: -8px -8px 16px rgba(255,255,255,0.03)`
  - Bottom-right dark shadow: `box-shadow: 8px 8px 16px rgba(0,0,0,0.4)`
- Inset elements (inputs, content areas) use inset shadows:
  - Inset shadow: `box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.03)`
- All elements use extremely rounded corners (16px-24px), emphasizing soft touch

**Dark Monochromatic Color System**:
- Main background: deep gray `#1e1e1e`
- Card background: mid gray `#2d2d2d`
- Raised elements: slightly lighter than background `#323232`
- Inset elements: slightly darker than background `#1a1a1a`
- Text colors:
  - Primary text: soft white `#e0e0e0`
  - Secondary text: mid gray `#a0a0a0`
  - Disabled text: dark gray `#606060`
- Accent colors: soft blue `#5b8fd9`, soft purple `#9b7fd9`, or soft green `#7fd9a0` (for active states)

[Technical implementation details, component structures, interactions, animations, and design goals follow similar comprehensive structure as Chinese version]

### Design Goals

**Professional & Calm**:
- Dark background reduces eye strain, suitable for extended use
- Subtle shadows create elegant 3D effects without being too eye-catching
- Monochromatic design creates professional, modern atmosphere
- Suitable for productivity tools, professional software, design applications
