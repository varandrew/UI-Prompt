# Custom Prompt

## 中文版本 (zh-CN)

設計一個仿 Android 14 系統設置的 Material You 風格介面，展現 Google 最新的動態主題和觸感設計語言。

**核心視覺特徵**：
- **動態取色系統**：從壁紙提取主題色，生成 13 種色調變體（Tone 0-100）
- **大圓角卡片**：28dp 超大圓角的設置分組卡片
- **沉浸式列表**：帶有圖標、標題、副標題、開關的設置項列表
- **觸感反饋區域**：大面積可點擊區域，明確的點擊態反饋

**頁面元素**：
1. **大型標題區**：
   - 可折疊的大標題（展開時 34sp，收起時 22sp）
   - 搜索欄入口
   - 用戶頭像快捷入口

2. **設置分組卡片**：
   - 圓角容器包裹相關設置項
   - 分組標題使用主題色
   - 卡片之間 16dp 間距

3. **設置項樣式**：
   - 圖標（24dp 圓形背景 + 圖標）
   - 雙行文字（標題 16sp + 描述 14sp）
   - 右側控件（開關、箭頭、數值）
   - 48dp 最小高度

4. **快捷開關區**：
   - 2x4 網格的快捷磁貼
   - 圓角藥丸形狀
   - 長按展開詳情

**交互細節**：
- 點擊時背景顏色漸變（50ms 淡入）
- 開關切換帶有物理彈性動畫
- 卡片展開時內容平滑推移
- 滾動時標題欄平滑收縮

**色彩方案**（基於藍色種子色）：
- Primary Container: #D3E4FF
- On Primary Container: #001C38
- Surface: #FDFBFF
- Surface Variant: #E0E2EC
- Outline: #74777F

**字體規範**：
- 大標題：Google Sans, 34sp, Medium
- 卡片標題：Google Sans, 14sp, Medium
- 設置項標題：Roboto, 16sp, Regular
- 設置項描述：Roboto, 14sp, Regular, 0.6 opacity

---

## English Version (en-US)

Design an Android 14 system settings-style Material You interface, showcasing Google's latest dynamic theming and tactile design language.

**Core Visual Features**:
- **Dynamic Color Extraction**: Extract theme color from wallpaper, generate 13 tonal variants (Tone 0-100)
- **Large Rounded Cards**: 28dp extra-large rounded corner settings group cards
- **Immersive Lists**: Settings item lists with icons, titles, subtitles, and switches
- **Tactile Feedback Areas**: Large clickable areas with clear pressed state feedback

**Page Elements**:
1. **Large Title Area**:
   - Collapsible large title (34sp expanded, 22sp collapsed)
   - Search bar entry point
   - User avatar quick access

2. **Settings Group Cards**:
   - Rounded containers wrapping related settings
   - Group titles using theme color
   - 16dp spacing between cards

3. **Settings Item Style**:
   - Icon (24dp circular background + icon)
   - Two-line text (Title 16sp + Description 14sp)
   - Right-side controls (switch, arrow, value)
   - 48dp minimum height

4. **Quick Toggles Area**:
   - 2x4 grid of quick tiles
   - Rounded pill shape
   - Long-press to expand details

**Interaction Details**:
- Background color gradient on tap (50ms fade-in)
- Switch toggle with physical spring animation
- Card expansion with smooth content displacement
- Title bar smooth collapse on scroll

**Color Scheme** (based on blue seed color):
- Primary Container: #D3E4FF
- On Primary Container: #001C38
- Surface: #FDFBFF
- Surface Variant: #E0E2EC
- Outline: #74777F

**Typography Specs**:
- Large Title: Google Sans, 34sp, Medium
- Card Title: Google Sans, 14sp, Medium
- Item Title: Roboto, 16sp, Regular
- Item Description: Roboto, 14sp, Regular, 0.6 opacity

**Technical Implementation**:
- Use CSS `border-radius: 28px` for large rounded cards
- Apply `transition: background-color 50ms ease-out` for tap feedback
- Implement sticky positioning for collapsible header
- Use CSS Grid `repeat(4, 1fr)` for quick toggles layout
- Apply `overscroll-behavior: contain` for nested scroll areas
