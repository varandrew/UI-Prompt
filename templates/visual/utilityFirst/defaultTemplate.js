// Modern Utility First - Default Template

export const modernUtilityFirst = {
  id: 'modern-utility-first',
  title: 'styles.modern.utilityFirst.title',
  description: 'styles.modern.utilityFirst.description',

  // Card demo HTML
  demoHTML: `
    <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-4 bg-white">
      <div class="w-full max-w-md border-2 border-black p-4">
        <div class="mb-4 font-mono text-sm">UTILITY-FIRST</div>
        <div class="space-y-2">
          <input type="text" class="w-full border border-black p-2 font-mono text-sm" placeholder="Email" />
          <input type="password" class="w-full border border-black p-2 font-mono text-sm" placeholder="Password" />
          <button class="w-full bg-black text-white p-2 font-mono text-sm hover:bg-gray-800 transition-colors">
            LOGIN
          </button>
        </div>
        <div class="mt-4 text-xs font-mono text-gray-600">
          No styles. Just function.
        </div>
      </div>
    </div>
  `,

  customStyles: '',
  demoBoxClass: 'bg-white',

  // Reference to fullpage preview
  fullPagePreviewId: 'utility-first',

  // Color scheme
  colorScheme: {
    'zh-cn': '主色白色 (#ffffff)、黑色 (#000000)、次色浅灰 (#f9fafb / Gray-50)、边框灰 (#d1d5db / Gray-300)、文本灰 (#6b7280 / Gray-500)、蓝紫渐变强调色 (#3b82f6 to #9333ea)',
    'en-US': 'Primary white (#ffffff), black (#000000), secondary light gray (#f9fafb / Gray-50), border gray (#d1d5db / Gray-300), text gray (#6b7280 / Gray-500), blue-purple gradient accent (#3b82f6 to #9333ea)'
  },

  features: [
    'Tailwind CSS 工具类优先',
    '最小化自定義 CSS',
    '系統化間距和字体',
    'Monospace 字体風格',
    '黑白简約配色',
    '功能导向设計',
    '快速開發迭代',
    '易於維護和擴展'
  ]
};
