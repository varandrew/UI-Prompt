# Custom Prompt

## 中文版本 (zh-CN)

創建一個具有 **Soft UI Light（淺色軟 UI）** 風格的現代應用界面，在淺色背景上使用柔和的內外陰影創造微妙的深度感，營造平靜、舒適、親和的視覺體驗，使用 TailwindCSS 實現。

### 核心視覺特徵

**淺色 Soft UI 設計語言**：
- 背景使用柔和的淺灰色 `#e4e7eb` 或淺藍灰色 `#eceff4`
- 元素使用與背景相近的顏色，通過陰影創造深度
- 凸起元素（按鈕、卡片）使用雙向柔和陰影：
  - 左上淺色陰影（高光）：`box-shadow: -8px -8px 16px rgba(255, 255, 255, 0.8)`
  - 右下深色陰影（暗部）：`box-shadow: 8px 8px 16px rgba(163, 177, 198, 0.3)`
- 凹陷元素（輸入框、內容區）使用內陰影：
  - 內陰影：`box-shadow: inset 3px 3px 6px rgba(163, 177, 198, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.8)`
- 所有元素採用圓潤的圓角（12px-20px），強調柔和觸感

**淺色柔和色彩系統**：
- 主背景：淺灰 `#e4e7eb`
- 卡片背景：與背景相同或略淺 `#e8eaed`
- 凸起元素：與背景相同（通過陰影區分）
- 凹陷元素：略深於背景 `#d8dce3`
- 文字顏色：
  - 主文字：深灰 `#3c4043`
  - 次要文字：中灰 `#5f6368`
  - 禁用文字：淺灰 `#9aa0a6`
- 強調色：
  - 主要：柔和藍色 `#4285f4`
  - 次要：柔和紫色 `#a142f4`
  - 成功：柔和綠色 `#34a853`
  - 警告：柔和橙色 `#fbbc04`
  - 危險：柔和紅色 `#ea4335`

**陰影與深度系統**：
- 淺層凸起（小按鈕）：陰影偏移 ±4px，模糊 8px
- 中層凸起（卡片）：陰影偏移 ±8px，模糊 16px
- 深層凸起（大卡片）：陰影偏移 ±12px，模糊 24px
- 淺層凹陷（輸入框）：內陰影偏移 ±2px，模糊 4px
- 深層凹陷（內容區）：內陰影偏移 ±4px，模糊 8px

### 頁面結構與組件

**淺色 Soft UI 應用佈局**：
```
┌────────────────────────────────────────────────┐
│  [Logo] 首頁 產品 服務 關於  [搜索] [登入]   │ ← 頂部欄（凸起）
├────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  ☀️ 早上好！                             │  │
│  │  開始您美好的一天                       │  │ ← Hero 卡片（凸起）
│  │  [開始探索] [了解更多]                   │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │ 🎯  │ │ 📊  │ │ 💡  │ │ 🚀  │             │
│  │ 任務│ │ 數據│ │ 創意│ │ 目標│             │ ← 功能卡片（凸起）
│  │ 12  │ │ 45  │ │ 8   │ │ 3   │             │
│  └─────┘ └─────┘ └─────┘ └─────┘             │
│                                                 │
│  ┌────────────────────────────────────────┐    │
│  │ 設定面板                               │    │
│  │ ┌────────────────────────────────────┐ │    │ ← 內容區（凹陷）
│  │ │ 姓名：[Tom Leung ]                 │ │    │
│  │ │ 郵箱：[tom@example.com]            │ │    │
│  │ │ 通知：[開啟切換器]                  │ │    │
│  │ │ [保存設定]（凸起按鈕）              │ │    │
│  │ └────────────────────────────────────┘ │    │
│  └────────────────────────────────────────┘    │
└────────────────────────────────────────────────┘
```

**核心組件樣式**：

**凸起按鈕**：
```css
.soft-light-btn {
  background: #e4e7eb;
  border-radius: 12px;
  padding: 12px 24px;
  color: #3c4043;
  font-weight: 600;
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.8),
    6px 6px 12px rgba(163, 177, 198, 0.3);
  transition: all 0.3s ease;
}

.soft-light-btn:hover {
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.9),
    8px 8px 16px rgba(163, 177, 198, 0.4);
}

.soft-light-btn:active {
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.8);
}
```

**主要按鈕（彩色）**：
```css
.soft-light-btn-primary {
  background: linear-gradient(135deg, #5a9bff 0%, #4285f4 100%);
  border-radius: 12px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  box-shadow:
    -4px -4px 8px rgba(90, 155, 255, 0.2),
    4px 4px 8px rgba(66, 133, 244, 0.4);
  transition: all 0.3s ease;
}

.soft-light-btn-primary:hover {
  box-shadow:
    -6px -6px 12px rgba(90, 155, 255, 0.3),
    6px 6px 12px rgba(66, 133, 244, 0.5);
  transform: translateY(-2px);
}
```

**凹陷輸入框**：
```css
.soft-light-input {
  background: #e4e7eb;
  border-radius: 10px;
  padding: 12px 16px;
  border: none;
  color: #3c4043;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.soft-light-input:focus {
  outline: none;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9),
    0 0 0 3px rgba(66, 133, 244, 0.2);
}
```

**凸起卡片**：
```css
.soft-light-card {
  background: #e4e7eb;
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.8),
    8px 8px 16px rgba(163, 177, 198, 0.3);
  transition: all 0.3s ease;
}

.soft-light-card:hover {
  box-shadow:
    -10px -10px 20px rgba(255, 255, 255, 0.9),
    10px 10px 20px rgba(163, 177, 198, 0.4);
  transform: translateY(-2px);
}
```

**開關切換器**：
```css
.soft-light-toggle {
  width: 60px;
  height: 32px;
  background: #e4e7eb;
  border-radius: 16px;
  position: relative;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.soft-light-toggle.active {
  background: linear-gradient(135deg, #5a9bff, #4285f4);
  box-shadow:
    -2px -2px 4px rgba(90, 155, 255, 0.3),
    2px 2px 4px rgba(66, 133, 244, 0.4);
}

.soft-light-toggle-knob {
  width: 24px;
  height: 24px;
  background: #e4e7eb;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  box-shadow:
    -3px -3px 6px rgba(255, 255, 255, 0.8),
    3px 3px 6px rgba(163, 177, 198, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.soft-light-toggle.active .soft-light-toggle-knob {
  left: 32px;
  background: white;
}
```

### 互動與動畫效果

**按壓動畫**：
- 凸起按鈕點擊時轉為凹陷狀態
- 過渡時間 150ms，使用 ease-out
- 釋放時恢復凸起（300ms, ease-in）

**懸停效果**：
- 陰影強度增加 20%
- 卡片輕微上浮（translateY: -2px）
- 過渡平滑（300ms ease）

**脈動動畫**：
```css
@keyframes soft-pulse {
  0%, 100% {
    box-shadow:
      -8px -8px 16px rgba(255, 255, 255, 0.8),
      8px 8px 16px rgba(163, 177, 198, 0.3);
  }
  50% {
    box-shadow:
      -10px -10px 20px rgba(255, 255, 255, 0.9),
      10px 10px 20px rgba(163, 177, 198, 0.4);
  }
}

.soft-light-pulse {
  animation: soft-pulse 2s ease-in-out infinite;
}
```

### 技術實現

**TailwindCSS 配置**：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-light-bg': '#e4e7eb',
        'soft-light-text': '#3c4043',
        'soft-light-text-secondary': '#5f6368',
        'soft-light-primary': '#4285f4',
        'soft-light-success': '#34a853',
        'soft-light-warning': '#fbbc04',
        'soft-light-danger': '#ea4335',
      },
      boxShadow: {
        'soft-light-raised': '-8px -8px 16px rgba(255, 255, 255, 0.8), 8px 8px 16px rgba(163, 177, 198, 0.3)',
        'soft-light-inset': 'inset 3px 3px 6px rgba(163, 177, 198, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
      }
    }
  }
}
```

### 設計目標

**平靜與舒適**：
- 淺色背景營造明亮、開放的視覺氛圍
- 柔和陰影創造微妙的深度感，避免扁平單調
- 適合日間使用，減少眼睛疲勞
- 適合生產力應用、教育平台、健康應用、內容管理系統


---

## English Version (en-US)

Create a modern application interface with **Soft UI Light** style, using soft inner and outer shadows on light background to create subtle depth, creating a calm, comfortable, and approachable visual experience, implemented with TailwindCSS.

[Comprehensive English version follows similar structure covering core characteristics, component styles, interactions, animations, technical implementation, and design goals]

### Design Goals

**Calm & Comfortable**:
- Light background creates bright, open visual atmosphere
- Soft shadows create subtle depth, avoiding flat monotony
- Suitable for daytime use, reducing eye strain
- Suitable for productivity apps, education platforms, health apps, content management systems
