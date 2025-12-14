# Custom Prompt

## 中文版本 (zh-CN)

創建一個具有 **Glassmorphism（玻璃態）音樂播放器** 風格的現代音樂應用界面，使用半透明磨砂玻璃效果、背景模糊和層次化透明面板，讓專輯封面藝術透過玻璃層bleeding through，營造沉浸式的音樂體驗，使用 TailwindCSS 實現。

### 核心視覺特徵

**玻璃態設計語言**：
- 所有 UI 面板採用半透明磨砂玻璃效果：`backdrop-filter: blur(20px); background: rgba(255,255,255,0.1)`
- 多層玻璃疊加創造深度感：前景玻璃（控制面板） > 中景玻璃（播放列表） > 背景（專輯封面或漸變）
- 玻璃邊緣採用細膩的高光邊框：`border: 1px solid rgba(255,255,255,0.2)`
- 陰影使用柔和的發光效果而非傳統投影：`box-shadow: 0 8px 32px rgba(0,0,0,0.1)`
- 背景專輯封面藝術動態模糊，顏色透過玻璃層透出

**玻璃質感色彩系統**：
- 背景層：動態從當前播放專輯封面提取主色調，應用模糊和漸變
- 玻璃面板：半透明白色 `rgba(255,255,255,0.1)` 到 `rgba(255,255,255,0.25)`
- 深色玻璃變體：`rgba(0,0,0,0.2)` 用於更好的可讀性區域
- 強調色：純白 `rgba(255,255,255,0.9)` 用於活躍狀態
- 進度條和按鈕使用專輯主色調的半透明版本

**光線與透明度效果**：
- 三層透明度系統：
  - 主控制面板：25% 不透明度
  - 播放列表面板：15% 不透明度
  - 懸浮工具提示：30% 不透明度
- 背景模糊：`backdrop-filter: blur(20px) saturate(180%)`
- 邊緣高光模擬光線折射：
  ```css
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  ```

### 頁面結構與組件

**音樂播放器佈局**：
```
┌─────────────────────────────────────────────┐
│  [<] 正在播放 [♥] [⋯]                       │ ← 頂部玻璃欄
├─────────────────────────────────────────────┤
│                                               │
│        ┌─────────────────────┐               │
│        │                     │               │
│        │   🎵 專輯封面       │               │ ← 大型專輯封面（玻璃卡片）
│        │   (旋轉動畫)        │               │
│        │                     │               │
│        └─────────────────────┘               │
│                                               │
│     「Song Title」                            │ ← 歌曲信息（半透明文字）
│     「Artist Name」                           │
│                                               │
│  ┌───────────────────────────────────────┐   │
│  │ ━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━━━━━━ │   │ ← 進度條（玻璃質感）
│  │ 2:34                          4:58   │   │
│  └───────────────────────────────────────┘   │
│                                               │
│     [🔀] [⏮] [▶️] [⏭] [🔁]                   │ ← 控制按鈕（玻璃圓形）
│                                               │
│  ┌────────────┐                               │
│  │ 🔊 ━━━●━━━ │                               │ ← 音量控制（玻璃滑塊）
│  └────────────┘                               │
│                                               │
│  ┌─────────────────────────────────────┐     │
│  │ 播放列表                            │     │ ← 播放列表（玻璃面板）
│  │ ┌─────────────────────────────────┐ │     │
│  │ │ 🎵 Song 1 - Artist    [3:45]    │ │     │
│  │ │ 🎵 Song 2 - Artist    [4:12]    │ │     │
│  │ │ 🎵 Song 3 - Artist    [2:58]    │ │     │
│  │ └─────────────────────────────────┘ │     │
│  └─────────────────────────────────────┘     │
└─────────────────────────────────────────────┘
```

**頂部玻璃導航欄**：
- 半透明玻璃條：`backdrop-filter: blur(20px); background: rgba(255,255,255,0.1)`
- 返回按鈕、標題、收藏和菜單按鈕均採用玻璃圓形或膠囊形狀
- 懸停時玻璃按鈕略微增亮：`background: rgba(255,255,255,0.2)`

**專輯封面展示區**：
- 大型正方形玻璃卡片（300x300px）
- 專輯封面圖片帶有微妙的玻璃邊框和陰影
- 播放時專輯封面緩慢旋轉（12 秒一圈）
- 懸停時專輯封面輕微放大（scale: 1.05）並增強玻璃光澤

**歌曲信息區**：
- 歌曲標題使用大號半透明白色文字（24px, font-weight: 700）
- 藝術家名稱使用中號半透明灰色文字（16px, font-weight: 500）
- 文字帶有輕微的陰影增強可讀性：`text-shadow: 0 2px 8px rgba(0,0,0,0.3)`

**進度條（Progress Bar）**：
- 玻璃軌道：`background: rgba(255,255,255,0.15); backdrop-filter: blur(10px)`
- 已播放部分使用專輯主色調的半透明版本
- 滑塊（thumb）採用玻璃圓形設計，帶有白色高光
- 懸停時滑塊放大並顯示當前時間工具提示（玻璃氣泡）

**控制按鈕區**：
- 五個核心控制按鈕（隨機、上一首、播放/暫停、下一首、循環）
- 每個按鈕採用玻璃圓形設計（直徑 48px-64px）
- 播放/暫停按鈕尺寸更大（64px），作為視覺焦點
- 懸停時按鈕玻璃效果增強並輕微上浮
- 活躍狀態（如循環模式開啟）使用專輯主色調背景

**音量控制滑塊**：
- 小型玻璃面板包含揚聲器圖標和水平滑塊
- 滑塊採用與進度條相同的玻璃質感
- 音量級別用柔和的發光效果表示

**播放列表面板**：
- 較大的玻璃矩形面板（更低的不透明度，15%）
- 每首歌曲採用小型玻璃行項目
- 當前播放歌曲高亮（更高不透明度，30%）
- 懸停時歌曲行略微增亮並顯示更多控制按鈕（喜歡、刪除）

### 互動與動畫效果

**玻璃發光動畫**：
```css
/* 播放按鈕的脈動發光效果 */
.glass-play-btn {
  animation: glass-pulse 2s ease-in-out infinite;
}

@keyframes glass-pulse {
  0%, 100% {
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.3),
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow:
      0 0 30px rgba(255, 255, 255, 0.5),
      0 12px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 1px rgba(255, 255, 255, 0.4);
  }
}
```

**專輯封面旋轉動畫**：
```css
.album-cover-rotating {
  animation: rotate-album 12s linear infinite;
}

@keyframes rotate-album {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**懸停玻璃增強效果**：
- 玻璃面板懸停時：`backdrop-filter: blur(25px); background: rgba(255,255,255,0.2)`
- 過渡時間：`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- 按鈕懸停時輕微上浮：`transform: translateY(-2px)`

**進度條拖動動畫**：
- 拖動時滑塊放大至 120%
- 顯示玻璃工具提示氣泡，顯示當前時間位置
- 工具提示帶有淡入淡出動畫

**背景動態模糊**：
- 切換歌曲時背景顏色平滑過渡（3 秒）
- 使用專輯封面的主色調創建漸變背景
- 背景模糊強度根據播放狀態動態調整

### 技術實現細節

**核心 CSS 樣式**：
```css
/* 玻璃面板基礎類 */
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-panel:hover {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px) saturate(200%);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}

/* 玻璃按鈕 */
.glass-btn {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}

/* 玻璃進度條 */
.glass-progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.glass-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 100%);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.glass-progress-thumb {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.glass-progress-thumb:hover {
  transform: scale(1.2);
}
```

**TailwindCSS 配置擴展**：
```javascript
// tailwind.config.js 中添加玻璃態效果
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        'glass': '20px',
        'glass-strong': '30px',
      },
      backgroundColor: {
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-white-hover': 'rgba(255, 255, 255, 0.2)',
        'glass-black': 'rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.18)',
      },
    }
  }
}
```

**響應式設計**：
- 桌面端（≥1024px）：播放列表在右側玻璃面板
- 平板端（768px-1023px）：播放列表在底部摺疊面板
- 移動端（<768px）：播放列表使用全屏玻璃模態框

**無障礙考量**：
- 所有玻璃元素保持足夠的文字對比度（使用半透明深色背景增強可讀性）
- 控制按鈕提供 aria-label 描述功能
- 進度條支持鍵盤控制（左右箭頭）
- 播放狀態變化提供聲音和視覺雙重反饋

**性能優化**：
- `backdrop-filter` 使用 CSS `will-change` 優化
- 專輯封面旋轉使用 CSS `transform` 而非 JavaScript
- 背景圖片預加載，避免切換歌曲時閃爍
- 播放列表使用虛擬滾動（大型播放列表）

### 設計目標與用戶體驗

**沉浸式音樂體驗**：
- 玻璃質感營造輕盈、通透的視覺氛圍
- 專輯封面藝術透過玻璃層透出，增強視覺吸引力
- 柔和的模糊效果減少視覺干擾，讓用戶專注於音樂本身
- 半透明設計營造夢幻、空靈的聽覺氛圍

**品牌適配性**：
- 適合現代音樂流媒體應用（Spotify, Apple Music 風格）
- 適合高端音響設備的配套軟件界面
- 適合追求優雅、簡潔設計語言的品牌
- 通過玻璃質感傳遞科技感和現代感


---

## English Version (en-US)

Create a modern music application interface with **Glassmorphism Music Player** style, using frosted glass effects, background blur, and layered transparent panels, letting album cover art bleed through glass layers to create an immersive music experience, implemented with TailwindCSS.

### Core Visual Characteristics

**Glassmorphism Design Language**:
- All UI panels use frosted glass effect: `backdrop-filter: blur(20px); background: rgba(255,255,255,0.1)`
- Multi-layer glass stacking creates depth: foreground glass (control panel) > midground glass (playlist) > background (album cover or gradient)
- Glass edges use delicate highlight borders: `border: 1px solid rgba(255,255,255,0.2)`
- Shadows use soft glow effects instead of traditional drop shadows: `box-shadow: 0 8px 32px rgba(0,0,0,0.1)`
- Background album cover art dynamically blurs, colors show through glass layers

**Glass Texture Color System**:
- Background layer: dynamically extract primary colors from current playing album cover, apply blur and gradient
- Glass panels: semi-transparent white `rgba(255,255,255,0.1)` to `rgba(255,255,255,0.25)`
- Dark glass variant: `rgba(0,0,0,0.2)` for better readability areas
- Accent color: pure white `rgba(255,255,255,0.9)` for active states
- Progress bar and buttons use semi-transparent versions of album primary colors

**Light & Transparency Effects**:
- Three-layer transparency system:
  - Main control panel: 25% opacity
  - Playlist panel: 15% opacity
  - Floating tooltips: 30% opacity
- Background blur: `backdrop-filter: blur(20px) saturate(180%)`
- Edge highlights simulate light refraction:
  ```css
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  ```

[Rest of English version follows similar structure to Chinese version - comprehensive coverage of page structure, components, interactions, animations, technical implementation, responsive design, accessibility, performance optimization, and design goals]

### Technical Implementation Details

[Same CSS styles and Tailwind configuration as Chinese version]

### Design Goals & User Experience

**Immersive Music Experience**:
- Glass texture creates lightweight, transparent visual atmosphere
- Album cover art showing through glass layers enhances visual appeal
- Soft blur effects reduce visual distraction, letting users focus on music
- Semi-transparent design creates dreamy, ethereal listening atmosphere

**Brand Adaptability**:
- Suitable for modern music streaming apps (Spotify, Apple Music style)
- Suitable for high-end audio equipment companion software interfaces
- Suitable for brands pursuing elegant, minimalist design language
- Conveys technology and modernity through glass texture
