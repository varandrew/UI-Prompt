# Custom Prompt

## 中文版本 (zh-CN)

創建一個具有 **Soft UI Dark（深色軟 UI）** 風格的現代應用界面，在深色背景上使用柔和的陰影和微妙的漸變創造輕盈的深度感，平衡暗色調與舒適性，營造優雅現代的深色模式體驗，使用 TailwindCSS 實現。

### 核心視覺特徵

**深色 Soft UI 設計語言**：
- 背景使用深藍灰色 `#0f1419` 或深紫灰色 `#1a1625`，比純黑更溫和
- 元素採用柔和的外部陰影而非 Neumorphism 的雙向陰影
- 卡片和組件使用微妙的漸變：`linear-gradient(135deg, #2a2e3a 0%, #1f232d 100%)`
- 陰影顏色使用半透明黑色：`rgba(0, 0, 0, 0.3)` 到 `rgba(0, 0, 0, 0.5)`
- 元素邊緣帶有細微的高光邊框：`border: 1px solid rgba(255, 255, 255, 0.05)`

**深色柔和色彩系統**：
- 主背景：深藍灰 `#0f1419`
- 卡片背景：使用漸變 `linear-gradient(135deg, #2a2e3a, #1f232d)`
- 懸停狀態：略淺的漸變 `linear-gradient(135deg, #353a48, #2a2e3a)`
- 文字顏色：
  - 主文字：柔和白色 `#e8eaed`
  - 次要文字：柔和灰色 `#9aa0a6`
  - 禁用文字：深灰色 `#5f6368`
- 強調色：
  - 主要：柔和藍色 `#8ab4f8`
  - 次要：柔和紫色 `#c58af9`
  - 成功：柔和綠色 `#81c995`
  - 警告：柔和黃色 `#fdd663`
  - 危險：柔和紅色 `#f28b82`

**陰影與深度系統**：
- 淺層陰影（懸停狀態）：`0 2px 4px rgba(0, 0, 0, 0.2)`
- 中層陰影（卡片）：`0 4px 8px rgba(0, 0, 0, 0.3)`
- 深層陰影（模態框）：`0 8px 16px rgba(0, 0, 0, 0.4)`
- 超深陰影（浮動元素）：`0 12px 24px rgba(0, 0, 0, 0.5)`

### 頁面結構與組件

**深色 Soft UI 儀表板佈局**：
```
┌────────────────────────────────────────────────┐
│  [Logo] 儀表板 分析 報告  [搜索] [👤]        │ ← 頂部導航欄（漸變卡片）
├────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  🌙 晚上好！                             │  │
│  │  歡迎使用深色工作空間                   │  │ ← Hero 區域（漸變卡片）
│  │  [開始工作] [查看任務]                   │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │ 📊  │ │ 📈  │ │ 💰  │ │ 👥  │             │
│  │ 銷售│ │ 增長│ │ 收益│ │ 用戶│             │ ← 統計卡片（漸變 + 陰影）
│  │1.2K │ │+15% │ │$45K │ │ 892 │             │
│  └─────┘ └─────┘ └─────┘ └─────┘             │
│                                                 │
│  ┌─────────────────┐ ┌─────────────────────┐  │
│  │ 📊 活動趨勢     │ │ 📋 待辦事項          │  │
│  │ [折線圖]        │ │ □ 完成報告           │  │ ← 內容卡片（漸變背景）
│  │                 │ │ □ 審核文件           │  │
│  │                 │ │ ☑ 團隊會議           │  │
│  └─────────────────┘ └─────────────────────┘  │
└────────────────────────────────────────────────┘
```

**核心組件樣式**：

**軟 UI 按鈕（深色）**：
```css
.soft-dark-btn {
  background: linear-gradient(135deg, #8ab4f8 0%, #669df6 100%);
  border-radius: 12px;
  padding: 12px 24px;
  color: #0f1419;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.soft-dark-btn:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}

.soft-dark-btn:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
}
```

**軟 UI 卡片（深色）**：
```css
.soft-dark-card {
  background: linear-gradient(135deg, #2a2e3a 0%, #1f232d 100%);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.soft-dark-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

**軟 UI 輸入框（深色）**：
```css
.soft-dark-input {
  background: #1a1d26;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 12px 16px;
  color: #e8eaed;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.soft-dark-input:focus {
  outline: none;
  border-color: #8ab4f8;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 0 0 3px rgba(138, 180, 248, 0.2);
}
```

**軟 UI 開關（深色）**：
```css
.soft-dark-toggle {
  width: 52px;
  height: 28px;
  background: #1a1d26;
  border-radius: 14px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease;
}

.soft-dark-toggle.active {
  background: linear-gradient(135deg, #8ab4f8, #669df6);
  box-shadow: 0 2px 4px rgba(138, 180, 248, 0.4);
}

.soft-dark-toggle-knob {
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #f1f3f4, #e8eaed);
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.soft-dark-toggle.active .soft-dark-toggle-knob {
  left: 27px;
}
```

### 互動與動畫效果

**柔和懸停效果**：
- 卡片懸停時輕微上浮（translateY: -2px）
- 陰影強度增加 30%
- 邊框高光增亮（border-color opacity +50%）
- 過渡時間：300ms ease

**漸變動畫**：
```css
@keyframes soft-gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.soft-dark-gradient-animated {
  background: linear-gradient(270deg, #2a2e3a, #353a48, #2a2e3a);
  background-size: 400% 400%;
  animation: soft-gradient-shift 15s ease infinite;
}
```

**微互動細節**：
- 按鈕點擊時輕微縮放（scale: 0.98）
- 複選框勾選時帶有彈性動畫（cubic-bezier）
- 數字更新時使用滾動計數器效果
- Toast 通知從右側滑入，帶有柔和陰影

### 技術實現

**TailwindCSS 配置**：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-dark-bg': '#0f1419',
        'soft-dark-card': '#2a2e3a',
        'soft-dark-text': '#e8eaed',
        'soft-dark-text-secondary': '#9aa0a6',
        'soft-dark-primary': '#8ab4f8',
        'soft-dark-success': '#81c995',
        'soft-dark-warning': '#fdd663',
        'soft-dark-danger': '#f28b82',
      },
      boxShadow: {
        'soft-dark': '0 4px 8px rgba(0, 0, 0, 0.3)',
        'soft-dark-lg': '0 8px 16px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'soft-dark-gradient': 'linear-gradient(135deg, #2a2e3a 0%, #1f232d 100%)',
      }
    }
  }
}
```

### 設計目標

**優雅深色體驗**：
- 深色背景降低眼睛疲勞，適合夜間使用
- 柔和陰影創造輕盈的深度感，避免過於沉重
- 微妙漸變增加視覺趣味性
- 適合現代應用、儀表板、內容平台的深色模式

---

## English Version (en-US)

Create a modern application interface with **Soft UI Dark** style, using soft shadows and subtle gradients on dark background to create lightweight depth, balancing dark tones with comfort, creating an elegant modern dark mode experience, implemented with TailwindCSS.

[Comprehensive English version follows similar structure covering core characteristics, component styles, interactions, animations, technical implementation, and design goals]

### Design Goals

**Elegant Dark Experience**:
- Dark background reduces eye strain, suitable for nighttime use
- Soft shadows create lightweight depth, avoiding heaviness
- Subtle gradients add visual interest
- Suitable for modern apps, dashboards, content platforms in dark mode
