# Custom Prompt

## 中文版本 (zh-CN)

設計一個遵循 Google Material Design 3 規範的現代化企業應用介面，強調層次感、動態表面和適應性色彩系統。

**核心設計原則**：
- **Material You 動態色彩**：從主題色種子生成完整的色調調色板，支持淺色/深色模式自動切換
- **海拔層級系統**：使用 5 級海拔（0dp、1dp、3dp、6dp、8dp、12dp）表達 UI 層次
- **狀態層疊加**：hover、focus、pressed、dragged 狀態通過半透明覆蓋層表達
- **形狀系統**：圓角從 0dp（無）到 28dp（完全圓形）的 6 級形狀比例

**視覺元素**：
- **表面容器**：帶有微妙色調偏移的卡片（Surface、Surface Container、Surface Container High）
- **FAB 浮動按鈕**：大型主要操作按鈕，帶有海拔陰影和漣漪效果
- **導航組件**：Navigation Rail（側邊欄）或 Bottom Navigation（底部導航）
- **Chip 標籤**：輸入型、過濾型、建議型、輔助型四種變體
- **文字排版**：使用 Roboto 字體家族，遵循 Type Scale（Display、Headline、Title、Body、Label）

**交互動效**：
- **漣漪效果（Ripple）**：所有可點擊元素的觸摸反饋，從觸摸點擴散
- **容器變形**：卡片展開、縮合、位移的流暢動畫（300-500ms）
- **共享軸動畫**：頁面切換時的向前/向後層次過渡
- **強調動畫**：重要操作完成時的視覺確認（如勾選動畫）

**頁面結構**：
1. **頂部應用欄**：標題、導航圖標、操作圖標，支持滾動時收縮
2. **主內容區**：卡片式布局，使用 8dp 網格系統
3. **底部操作欄**：FAB 按鈕和底部導航的組合
4. **抽屜導航**：Modal 或 Standard 抽屜式導航

**色彩方案**：
- 主色：Primary (#6750A4)、On Primary (#FFFFFF)
- 次要色：Secondary (#625B71)、Tertiary (#7D5260)
- 表面：Surface (#FEF7FF)、Surface Container (#F3EDF7)
- 錯誤：Error (#B3261E)

---

## English Version (en-US)

Design a modern enterprise application interface following Google Material Design 3 specifications, emphasizing layering, dynamic surfaces, and adaptive color systems.

**Core Design Principles**:
- **Material You Dynamic Color**: Generate complete tonal palettes from a seed color, supporting automatic light/dark mode switching
- **Elevation System**: Use 5 elevation levels (0dp, 1dp, 3dp, 6dp, 8dp, 12dp) to express UI hierarchy
- **State Layer Overlay**: Express hover, focus, pressed, dragged states through semi-transparent overlays
- **Shape System**: 6-level shape scale from 0dp (none) to 28dp (fully rounded)

**Visual Elements**:
- **Surface Containers**: Cards with subtle tonal shifts (Surface, Surface Container, Surface Container High)
- **FAB Floating Button**: Large primary action button with elevation shadow and ripple effect
- **Navigation Components**: Navigation Rail (sidebar) or Bottom Navigation
- **Chips**: Input, Filter, Suggestion, Assist - four variant types
- **Typography**: Roboto font family following Type Scale (Display, Headline, Title, Body, Label)

**Interactive Motion**:
- **Ripple Effect**: Touch feedback for all clickable elements, expanding from touch point
- **Container Transform**: Smooth card expand, collapse, displacement animations (300-500ms)
- **Shared Axis Animation**: Forward/backward hierarchy transitions during page navigation
- **Emphasis Animation**: Visual confirmation for important action completion (like checkmark animation)

**Page Structure**:
1. **Top App Bar**: Title, navigation icon, action icons, supports scroll-triggered collapse
2. **Main Content Area**: Card-based layout using 8dp grid system
3. **Bottom Action Bar**: Combination of FAB button and bottom navigation
4. **Drawer Navigation**: Modal or Standard drawer navigation

**Color Scheme**:
- Primary: Primary (#6750A4), On Primary (#FFFFFF)
- Secondary: Secondary (#625B71), Tertiary (#7D5260)
- Surface: Surface (#FEF7FF), Surface Container (#F3EDF7)
- Error: Error (#B3261E)

**Technical Implementation**:
- Use CSS custom properties for dynamic theming with `--md-sys-color-*` tokens
- Apply `box-shadow` with multiple layers for Material elevation
- Implement `@keyframes` for ripple expansion animation
- Use `transition` with `cubic-bezier(0.2, 0, 0, 1)` for Material motion
- Apply `backdrop-filter` for elevated surface tinting
