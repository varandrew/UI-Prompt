# Modal Dialog

## 中文版本 (zh-CN)

你現在是一名資深 UI 設計師兼前端工程師，需要使用 TailwindCSS 或等價的原子類方案創建一個模態對話框（Modal Dialog）組件，用於在覆蓋層中顯示重要內容或請求用戶操作。

### 使用場景設定

模態對話框是一種打斷式交互組件，適用於以下場景：

- **確認操作**：刪除確認、退出確認、重要操作二次確認
- **表單填寫**：用戶註冊、登錄、快速編輯、數據提交
- **信息展示**：重要通知、詳細信息查看、圖片預覽、視頻播放
- **引導流程**：新手引導、功能介紹、多步驟表單

目標：吸引用戶注意力，聚焦於當前任務，阻止背景操作直到用戶完成或關閉對話框。

### 核心設計要求

#### 1. DOM 結構

使用語義化 HTML 結構，確保無障礙訪問：

```html
<!-- 遮罩層 -->
<div class="modal-overlay fixed inset-0 bg-black/50 z-50" aria-hidden="true">
  <!-- 對話框容器 -->
  <div class="modal-container fixed inset-0 flex items-center justify-center p-4">
    <!-- 對話框內容 -->
    <div
      class="modal-content bg-white rounded-lg shadow-xl max-w-md w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <!-- 標題欄 -->
      <div class="modal-header px-6 py-4 border-b border-gray-200">
        <h2 id="modal-title" class="text-xl font-semibold text-gray-900">
          對話框標題
        </h2>
        <button
          class="modal-close absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="關閉對話框"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 內容區 -->
      <div class="modal-body px-6 py-4">
        <p class="text-gray-700">對話框內容...</p>
      </div>

      <!-- 操作按鈕區 -->
      <div class="modal-footer px-6 py-4 bg-gray-50 flex justify-end gap-3">
        <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          取消
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
          確認
        </button>
      </div>
    </div>
  </div>
</div>
```

#### 2. 遮罩層設計

- 使用 `fixed inset-0` 覆蓋整個視窗
- 半透明暗色背景：`bg-black/50` 或 `bg-gray-900/80`
- 高 z-index 確保在最上層：`z-50`
- 可選：點擊遮罩關閉對話框（需 JavaScript 配合）

#### 3. 對話框容器

- **居中定位**：`flex items-center justify-center`
- **響應式寬度**：
  - 小型：`max-w-sm`（384px）- 簡單確認
  - 中型：`max-w-md`（448px）- 標準表單
  - 大型：`max-w-2xl`（672px）- 複雜內容
  - 全寬：`max-w-4xl`（896px）- 圖片預覽
- **內邊距**：`p-4` 或 `p-6` 確保邊緣不貼邊
- **圓角**：`rounded-lg` 或 `rounded-xl`
- **陰影**：`shadow-xl` 或 `shadow-2xl` 增強層次感

#### 4. 標題欄

- 使用 `<h2>` 標籤配合 `id`，通過 `aria-labelledby` 關聯
- 字體：`text-xl` 或 `text-2xl`，`font-semibold` 或 `font-bold`
- 顏色：`text-gray-900` 或 `text-gray-800`
- 底部分隔線：`border-b border-gray-200`（可選）
- 關閉按鈕位於右上角：`absolute top-4 right-4`

#### 5. 內容區

- 充足的內邊距：`px-6 py-4`
- 文字顏色：`text-gray-700` 或 `text-gray-600`
- 行高：`leading-relaxed` 提升可讀性
- 可滾動內容：`max-h-96 overflow-y-auto` 避免過長內容撐破對話框

#### 6. 操作按鈕區

- 淺色背景：`bg-gray-50` 或 `bg-gray-100` 區分內容區
- 按鈕右對齊：`flex justify-end gap-3`
- 主要操作（確認）：
  - 填充背景：`bg-blue-600 text-white`
  - 懸停效果：`hover:bg-blue-700`
- 次要操作（取消）：
  - 透明背景：`text-gray-700`
  - 懸停效果：`hover:bg-gray-100`
- 過渡動畫：`transition-colors duration-200`

### 交互設計

#### 1. 打開動畫

使用淡入 + 縮放動畫：

```css
/* 遮罩淡入 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 對話框滑入 + 縮放 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-overlay {
  animation: fadeIn 0.2s ease-out;
}

.modal-content {
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### 2. 焦點管理

- 對話框打開時，焦點自動移動到第一個可交互元素
- 焦點鎖定在對話框內（Tab 循環）
- 關閉後焦點返回觸發元素

#### 3. 鍵盤操作

- **ESC 鍵**：關閉對話框
- **Tab 鍵**：在對話框內的可交互元素間循環
- **Enter 鍵**：觸發主要操作（確認按鈕）

#### 4. 點擊遮罩行為

- 默認：點擊遮罩關閉對話框
- 重要操作：禁用點擊遮罩關閉（需用戶明確選擇）

### 配色方案

#### 極簡風格
- 遮罩：`bg-black/40`
- 對話框背景：`bg-white`
- 標題：`text-gray-900`
- 內容：`text-gray-600`
- 邊框：`border-gray-200`

#### Material Design
- 遮罩：`bg-black/50`
- 對話框背景：`bg-white`
- 主按鈕：`bg-blue-600 hover:bg-blue-700`
- 陰影：`shadow-2xl`

#### 玻璃態
- 遮罩：`bg-black/30`
- 對話框背景：`bg-white/90 backdrop-blur-xl`
- 邊框：`border border-white/20`

#### 新粗野主義
- 遮罩：`bg-black/60`
- 對話框背景：`bg-white`
- 粗邊框：`border-4 border-black`
- 主按鈕：`bg-yellow-400 text-black border-2 border-black`

### 無障礙要求

1. **ARIA 屬性**
   - `role="dialog"` 標識對話框角色
   - `aria-modal="true"` 表示模態行為
   - `aria-labelledby` 關聯標題
   - `aria-describedby` 關聯描述（可選）

2. **焦點管理**
   - 打開時聚焦到對話框或第一個可交互元素
   - 使用 `tabindex="-1"` 使容器可聚焦
   - 實現焦點陷阱（Focus Trap）

3. **鍵盤導航**
   - 所有操作可通過鍵盤完成
   - ESC 鍵關閉
   - Tab 鍵循環

4. **語義化標籤**
   - 使用 `<dialog>` 原生標籤（推薦）
   - 或使用 `<div role="dialog">`

### 變體風格

#### 1. 極簡（Minimalism）
- 簡潔白色背景，細邊框（`border border-gray-200`）
- 小圓角（`rounded-lg`）
- 輕陰影（`shadow-lg`）

#### 2. Material Design
- 提升陰影（`shadow-2xl`）
- 中等圓角（`rounded-xl`）
- 波紋效果按鈕

#### 3. 玻璃態（Glassmorphism）
- 毛玻璃背景（`backdrop-blur-xl bg-white/90`）
- 半透明邊框（`border-white/20`）
- 柔和陰影

#### 4. 新擬物（Neumorphism）
- 柔和凹凸陰影
- 淺色背景（`bg-gray-100`）
- 內陰影效果

#### 5. Bootstrap 風格
- 標準 Bootstrap 模態框樣式
- 藍色主按鈕（`bg-blue-600`）
- 清晰的分隔線

#### 6. 新粗野主義（Neo Brutalism）
- 粗黑色邊框（`border-4 border-black`）
- 撞色按鈕（黃色、粉色）
- 硬陰影（`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`）

#### 7. 賽博朋克（Cyberpunk）
- 霓虹發光邊框（`shadow-[0_0_20px_rgba(0,255,255,0.5)]`）
- 深色背景（`bg-gray-900`）
- 青色/粉色強調色

#### 8. 底部抽屜（Bottom Sheet）
- 從底部滑入（`translate-y-full` → `translate-y-0`）
- 頂部圓角（`rounded-t-2xl`）
- 拖拽把手（小橫條）

#### 9. 側邊抽屜（Side Drawer）
- 從側邊滑入（`-translate-x-full` → `translate-x-0`）
- 全高（`h-screen`）
- 中等寬度（`max-w-md`）

#### 10. 通知樣式（Notification）
- 小尺寸（`max-w-sm`）
- 圖標 + 標題 + 消息
- 自動消失選項

#### 11. 圖片預覽（Image Preview）
- 大尺寸（`max-w-6xl`）
- 暗色背景（`bg-black/90`）
- 圖片居中展示
- 左右切換按鈕

### 重要提示

1. **性能優化**
   - 避免在遮罩層使用 `backdrop-filter` 於大範圍區域
   - 使用 CSS `will-change` 提示瀏覽器優化動畫
   - 對話框關閉後從 DOM 移除

2. **移動端適配**
   - 使用 `max-w-[calc(100vw-2rem)]` 確保不超出視窗
   - 底部抽屜更適合移動端
   - 觸控目標不小於 44x44px

3. **多層對話框**
   - 使用遞增的 z-index（`z-50`, `z-60`, `z-70`）
   - 每個對話框獨立管理焦點
   - 關閉時恢復上一層對話框焦點

4. **內容溢出**
   - 內容區設置最大高度和滾動：`max-h-[60vh] overflow-y-auto`
   - 固定標題欄和按鈕區，只讓內容區滾動

5. **防止背景滾動**
   - 對話框打開時，給 `<body>` 添加 `overflow-hidden`
   - 關閉後移除該類

---

## English Version (en-US)

You are now a senior UI designer and front-end engineer, tasked with creating a Modal Dialog component using TailwindCSS or equivalent atomic CSS approach to display important content or request user actions in an overlay.

### Usage Scenarios

Modal Dialog is an interrupting interaction component suitable for:

- **Confirmation Actions**: Delete confirmation, exit confirmation, critical operation double-check
- **Form Filling**: User registration, login, quick editing, data submission
- **Information Display**: Important notifications, detailed information viewing, image preview, video playback
- **Guided Flows**: Onboarding, feature introduction, multi-step forms

Goal: Capture user attention, focus on the current task, and block background operations until the user completes or closes the dialog.

### Core Design Requirements

#### 1. DOM Structure

Use semantic HTML structure to ensure accessibility:

```html
<!-- Overlay -->
<div class="modal-overlay fixed inset-0 bg-black/50 z-50" aria-hidden="true">
  <!-- Dialog Container -->
  <div class="modal-container fixed inset-0 flex items-center justify-center p-4">
    <!-- Dialog Content -->
    <div
      class="modal-content bg-white rounded-lg shadow-xl max-w-md w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <!-- Header -->
      <div class="modal-header px-6 py-4 border-b border-gray-200">
        <h2 id="modal-title" class="text-xl font-semibold text-gray-900">
          Dialog Title
        </h2>
        <button
          class="modal-close absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close dialog"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Content Area -->
      <div class="modal-body px-6 py-4">
        <p class="text-gray-700">Dialog content...</p>
      </div>

      <!-- Action Buttons -->
      <div class="modal-footer px-6 py-4 bg-gray-50 flex justify-end gap-3">
        <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Cancel
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>
```

#### 2. Overlay Design

- Use `fixed inset-0` to cover the entire viewport
- Semi-transparent dark background: `bg-black/50` or `bg-gray-900/80`
- High z-index to ensure top layer: `z-50`
- Optional: Click overlay to close dialog (requires JavaScript)

#### 3. Dialog Container

- **Center Positioning**: `flex items-center justify-center`
- **Responsive Width**:
  - Small: `max-w-sm` (384px) - Simple confirmation
  - Medium: `max-w-md` (448px) - Standard form
  - Large: `max-w-2xl` (672px) - Complex content
  - Full: `max-w-4xl` (896px) - Image preview
- **Padding**: `p-4` or `p-6` to avoid edge contact
- **Border Radius**: `rounded-lg` or `rounded-xl`
- **Shadow**: `shadow-xl` or `shadow-2xl` for depth

#### 4. Header

- Use `<h2>` tag with `id`, linked via `aria-labelledby`
- Font: `text-xl` or `text-2xl`, `font-semibold` or `font-bold`
- Color: `text-gray-900` or `text-gray-800`
- Bottom divider: `border-b border-gray-200` (optional)
- Close button in top-right: `absolute top-4 right-4`

#### 5. Content Area

- Adequate padding: `px-6 py-4`
- Text color: `text-gray-700` or `text-gray-600`
- Line height: `leading-relaxed` for readability
- Scrollable content: `max-h-96 overflow-y-auto` to prevent overflow

#### 6. Action Buttons

- Light background: `bg-gray-50` or `bg-gray-100` to separate from content
- Right-aligned buttons: `flex justify-end gap-3`
- Primary action (Confirm):
  - Filled background: `bg-blue-600 text-white`
  - Hover effect: `hover:bg-blue-700`
- Secondary action (Cancel):
  - Transparent background: `text-gray-700`
  - Hover effect: `hover:bg-gray-100`
- Transition animation: `transition-colors duration-200`

### Interaction Design

#### 1. Open Animation

Use fade-in + scale animation:

```css
/* Overlay fade-in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Dialog slide-in + scale */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-overlay {
  animation: fadeIn 0.2s ease-out;
}

.modal-content {
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### 2. Focus Management

- When dialog opens, focus automatically moves to first interactive element
- Focus trapped within dialog (Tab cycles)
- Focus returns to trigger element after closing

#### 3. Keyboard Operations

- **ESC Key**: Close dialog
- **Tab Key**: Cycle through interactive elements within dialog
- **Enter Key**: Trigger primary action (confirm button)

#### 4. Click Overlay Behavior

- Default: Clicking overlay closes dialog
- Critical operations: Disable overlay click to close (requires explicit user choice)

### Color Schemes

#### Minimalism
- Overlay: `bg-black/40`
- Dialog background: `bg-white`
- Title: `text-gray-900`
- Content: `text-gray-600`
- Border: `border-gray-200`

#### Material Design
- Overlay: `bg-black/50`
- Dialog background: `bg-white`
- Primary button: `bg-blue-600 hover:bg-blue-700`
- Shadow: `shadow-2xl`

#### Glassmorphism
- Overlay: `bg-black/30`
- Dialog background: `bg-white/90 backdrop-blur-xl`
- Border: `border border-white/20`

#### Neo Brutalism
- Overlay: `bg-black/60`
- Dialog background: `bg-white`
- Bold border: `border-4 border-black`
- Primary button: `bg-yellow-400 text-black border-2 border-black`

### Accessibility Requirements

1. **ARIA Attributes**
   - `role="dialog"` identifies dialog role
   - `aria-modal="true"` indicates modal behavior
   - `aria-labelledby` links to title
   - `aria-describedby` links to description (optional)

2. **Focus Management**
   - Focus on dialog or first interactive element when opened
   - Use `tabindex="-1"` to make container focusable
   - Implement focus trap

3. **Keyboard Navigation**
   - All operations accessible via keyboard
   - ESC key closes
   - Tab key cycles

4. **Semantic Tags**
   - Use native `<dialog>` tag (recommended)
   - Or use `<div role="dialog">`

### Style Variants

#### 1. Minimalism
- Clean white background with thin border (`border border-gray-200`)
- Small border radius (`rounded-lg`)
- Light shadow (`shadow-lg`)

#### 2. Material Design
- Elevated shadow (`shadow-2xl`)
- Medium border radius (`rounded-xl`)
- Ripple effect buttons

#### 3. Glassmorphism
- Frosted glass background (`backdrop-blur-xl bg-white/90`)
- Semi-transparent border (`border-white/20`)
- Soft shadow

#### 4. Neumorphism
- Soft embossed shadow
- Light background (`bg-gray-100`)
- Inner shadow effect

#### 5. Bootstrap Style
- Standard Bootstrap modal styling
- Blue primary button (`bg-blue-600`)
- Clear dividers

#### 6. Neo Brutalism
- Bold black border (`border-4 border-black`)
- Contrasting buttons (yellow, pink)
- Hard shadow (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`)

#### 7. Cyberpunk
- Neon glowing border (`shadow-[0_0_20px_rgba(0,255,255,0.5)]`)
- Dark background (`bg-gray-900`)
- Cyan/pink accent colors

#### 8. Bottom Sheet
- Slide in from bottom (`translate-y-full` → `translate-y-0`)
- Top border radius (`rounded-t-2xl`)
- Drag handle (small bar)

#### 9. Side Drawer
- Slide in from side (`-translate-x-full` → `translate-x-0`)
- Full height (`h-screen`)
- Medium width (`max-w-md`)

#### 10. Notification Style
- Small size (`max-w-sm`)
- Icon + title + message
- Auto-dismiss option

#### 11. Image Preview
- Large size (`max-w-6xl`)
- Dark background (`bg-black/90`)
- Centered image display
- Left/right navigation buttons

### Important Notes

1. **Performance Optimization**
   - Avoid using `backdrop-filter` on large overlay areas
   - Use CSS `will-change` to hint browser for animation optimization
   - Remove from DOM after dialog closes

2. **Mobile Adaptation**
   - Use `max-w-[calc(100vw-2rem)]` to ensure it doesn't exceed viewport
   - Bottom sheet more suitable for mobile
   - Touch targets no smaller than 44x44px

3. **Multiple Dialogs**
   - Use incrementing z-index (`z-50`, `z-60`, `z-70`)
   - Each dialog independently manages focus
   - Restore focus to previous dialog layer when closed

4. **Content Overflow**
   - Set max height and scroll for content area: `max-h-[60vh] overflow-y-auto`
   - Fix header and button area, only scroll content area

5. **Prevent Background Scrolling**
   - Add `overflow-hidden` to `<body>` when dialog opens
   - Remove class when closed
