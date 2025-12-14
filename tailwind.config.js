/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 使用 class 策略來啟用深色模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 保護關鍵的 dark: 類，防止 Tree-shaking 誤刪除
  safelist: [
    'dark',
    'dark:bg-gray-900',
    'dark:bg-gray-800',
    'dark:bg-gray-700',
    'dark:text-white',
    'dark:text-gray-100',
    'dark:text-gray-300',
    'dark:border-gray-700',
    'dark:border-gray-600',
    'dark:hover:bg-gray-800',
    'dark:hover:text-gray-100',
    // 使用正則表達式保護所有 dark: 變體
    {
      pattern: /dark:(bg|text|border|hover|focus)-.*/,
    },
  ],
  theme: {
    extend: {
      boxShadow: {
        'fluent': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
}
