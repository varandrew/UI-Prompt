// Modern Organic - Home Office Landing Template
// Note: fullPageHTML and fullPageStyles are extracted from original modernStyles.js

// Import from modernStyles.js for now - will be refactored to separate fullpage module if needed
export const modernOrganicHomeOffice = {
  id: 'modern-organic-home-office',
  title: 'styles.modern.organic.preview.homeOffice',
  description: 'styles.modern.organic.preview.homeOfficeDesc',

  // Card demo HTML
  demoHTML: `
    <div class="w-32 h-32 bg-black organic-shape"></div>
  `,

  customStyles: `
    .organic-shape {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morph 8s ease-in-out infinite;
    }
    @keyframes morph {
      0%, 100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
      25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      }
      50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      }
      75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      }
    }
  `,

  // NOTE: Full page HTML/Styles are embedded in modernStyles.js (lines 40-804)
  // They will be automatically removed during cleanup phase
  // For now, we reference the existing data
  fullPagePreviewId: 'modern-organic-home-office',

  // Color scheme
  colorScheme: {
    'zh-cn': '主色琥珀色 (#f59e0b / Amber-500, #d97706 / Amber-600)、翠绿色 (#10b981 / Emerald-500, #14b8a6 / Teal-500)、次色石色调 (#78716c / Stone-500, #57534e / Stone-600)、蓝紫色强调 (#3b82f6 / Blue-500, #8b5cf6 / Purple-500)、粉色 (#ec4899 / Pink-500)、背景渐变浅色 (#fffbf5 / Amber-50, #f5f5f4 / Stone-50, #ecfdf5 / Emerald-50)',
    'en-US': 'Primary amber (#f59e0b / Amber-500, #d97706 / Amber-600), emerald green (#10b981 / Emerald-500, #14b8a6 / Teal-500), secondary stone tones (#78716c / Stone-500, #57534e / Stone-600), blue-purple accent (#3b82f6 / Blue-500, #8b5cf6 / Purple-500), pink (#ec4899 / Pink-500), gradient backgrounds light (#fffbf5 / Amber-50, #f5f5f4 / Stone-50, #ecfdf5 / Emerald-50)'
  },

  features: [
    '有機形狀動画：流暢的边框变形效果',
    '波浪分隔线：SVG 路徑動態效果',
    '溫暖配色：琥珀、翡翠、石色調',
    '統計卡片：4 種变体有機卡片',
    '時間軸设計：項目進度追蹤',
    '产品展示：有機形狀产品卡片',
    '任务列表：帶有有機複選框',
    '載入動画：变形旋轉效果'
  ]
};
