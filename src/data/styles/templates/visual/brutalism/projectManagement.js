// Modern Brutalism - Project Management Dashboard Template

import { brutalismFullPageHTML, brutalismFullPageStyles } from './brutalismFullPage';

export const modernBrutalismProjectMgmt = {
  id: 'modern-brutalism-project-mgmt',
  title: 'styles.modern.brutalism.preview.projectManagement',
  description: 'styles.modern.brutalism.preview.projectManagementDesc',

  // Card demo HTML
  demoHTML: `
    <div class="space-y-6 text-center">
      <h4 class="text-4xl font-bold">RAW</h4>
      <button class="px-8 py-3 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-colors duration-200">
        ENTER
      </button>
    </div>
  `,

  customStyles: '',

  // Complete page preview
  fullPageHTML: brutalismFullPageHTML,
  fullPageStyles: brutalismFullPageStyles,
  fullPagePreviewId: 'modern-brutalism-project-mgmt',

  // Color scheme
  colorScheme: {
    'zh-cn': '主色黑色 (#000000)、白色 (#ffffff)、强调色红色 (#ff0000)、次色浅灰 (#cccccc)、深灰 (#f5f5f5)',
    'en-US': 'Primary black (#000000), white (#ffffff), accent red (#ff0000), secondary light gray (#cccccc), dark gray (#f5f5f5)'
  },

  // Feature highlights for this variant
  features: [
    '粗黑边框：所有元素使用 4px 黑色边框',
    '高對比配色：黑白主色 + 紅色強調',
    '扁平化设計：無漸变、無阴影效果',
    '大写标題：所有标題使用大写字母',
    '項目卡片：進度條、狀態标籤、截止日期',
    '团隊活動時間軸：提交記录、用戶頭像',
    '表單組件：輸入框、下拉選單、複選框',
    '数据表格：用戶列表、操作按鈕'
  ]
};
