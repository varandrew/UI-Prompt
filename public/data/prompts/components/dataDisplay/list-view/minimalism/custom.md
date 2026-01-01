# Minimalism List View

## 中文版本 (zh-CN)

請創建一個極簡主義風格的列表視圖組件。

### 設計理念
極簡主義列表視圖追求"內容優先"的設計哲學，通過去除所有不必要的裝飾元素，用留白、對齊和清晰的排版建立視覺層級。每個列表項都有充足的內邊距讓內容呼吸，確保信息的可讀性和可掃視性。這種設計為用戶提供專注、高效的瀏覽體驗，讓內容本身成為焦點。

### 視覺特徵
- **配色方案**：純白或淺灰背景，深灰文字，確保高對比度和清晰度
- **分隔設計**：極細的分隔線或完全無邊框，依靠留白區分列表項
- **排版規範**：清晰的主次文字層級，系統字體，適中字號和充足行高
- **留白運用**：充足的內邊距，保持視覺透氣感和舒適度
- **圖標處理**：可選的簡潔線性圖標或頭像，左對齊保持一致性

### Color Scheme
- **Background**: White (#ffffff) or light gray (#f9fafb)
- **Item Background**: White (#ffffff), hover #f9fafb
- **Borders/Dividers**: Ultra-light gray (#e5e7eb) or transparent with subtle shadow
- **Text (Primary)**: Deep gray (#111827 or #1f2937)
- **Text (Secondary)**: Medium gray (#6b7280)
- **Text (Meta)**: Light gray (#9ca3af)
- **Selection**: Light blue (#eff6ff) or light gray (#f3f4f6)
- **Accent**: Single brand color for selected/active states

### Design Details
- **Borders**: None or 1px solid #e5e7eb between items
- **Border Radius**: 0 or minimal (4-8px for container)
- **Shadows**: None by default, hover adds subtle shadow 0 1px 3px rgba(0,0,0,0.1)
- **Spacing**: padding 16-20px per item, gap 0-4px between items
- **Typography**: Primary text 0.875-1rem/400-500, secondary 0.75-0.875rem/400, ample line-height 1.5-1.6
- **Hover**: Background changes to #f9fafb, transition 150ms ease
- **Selected**: Background #eff6ff or #f3f4f6, optional left border accent
- **Avatar/Icon**: Optional, 32-40px size, aligned to left

---

## 提示詞 (zh-CN)

### 風格特點
極簡列表視圖追求「內容優先」的設計哲學，去除所有不必要的裝飾元素，使用留白、細微分隔線和簡潔字體創造視覺層次。每個列表項都有充足的內邊距，讓內容得以呼吸。適合專業應用和數據密集型界面，清晰度和可掃讀性至關重要。

### 配色方案
- **背景**：白色 (#ffffff) 或淺灰 (#f9fafb)
- **列表項背景**：白色 (#ffffff)，懸停 #f9fafb
- **邊框/分隔線**：極淺灰 (#e5e7eb) 或透明配合細微陰影
- **文字（主）**：深灰 (#111827 或 #1f2937)
- **文字（次）**：中灰 (#6b7280)
- **文字（元數據）**：淺灰 (#9ca3af)
- **選中**：淺藍 (#eff6ff) 或淺灰 (#f3f4f6)
- **強調**：單一品牌色用於選中/激活狀態

### 細節設計
- **邊框**：無邊框或項目間 1px solid #e5e7eb
- **圓角**：0 或最小圓角（容器 4-8px）
- **陰影**：默認無陰影，懸停添加細微陰影 0 1px 3px rgba(0,0,0,0.1)
- **間距**：每項 padding 16-20px，項目間 gap 0-4px
- **字體**：主文字 0.875-1rem/400-500，次文字 0.75-0.875rem/400，充足行高 1.5-1.6
- **懸停**：背景變為 #f9fafb，過渡 150ms ease
- **選中**：背景 #eff6ff 或 #f3f4f6，可選左邊框強調
- **頭像/圖標**：可選，32-40px 大小，左對齊
