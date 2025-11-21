// Natural Templates Aggregator
// 自然風格模板聚合器
// 注意：natural 風格已合併到 visualStyles.js 中，此文件仅保留用於兼容性

export const name = 'styles.visual.natural.title';

// 使用 natural 風格的 demoHTML（定義在 visualStyles.js 中）
export const demoUI = `
  <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-4">
    <div class="relative group">
      <div class="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-gray-200/40 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
        <div class="w-40 h-24 bg-gradient-to-br from-emerald-200 via-teal-100 to-blue-200 rounded-2xl mb-4 relative overflow-hidden">
          <div class="absolute inset-0 opacity-40">
            <div class="absolute top-2 left-2 w-12 h-10 bg-gradient-to-br from-emerald-300/50 to-transparent rounded-full blur-xl transform rotate-45"></div>
            <div class="absolute bottom-2 right-2 w-10 h-8 bg-gradient-to-br from-blue-300/50 to-transparent rounded-full blur-lg transform -rotate-45"></div>
          </div>
        </div>
        <div class="space-y-2">
          <div class="h-2 bg-gradient-to-r from-stone-200 to-neutral-300 rounded-full w-3/4"></div>
          <div class="h-2 bg-gradient-to-r from-neutral-100 to-stone-200 rounded-full w-full"></div>
          <div class="h-2 bg-gradient-to-r from-neutral-100 to-stone-200 rounded-full w-2/3"></div>
        </div>
      </div>
      <div class="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-emerald-300 to-teal-200 rounded-full opacity-60 blur-lg"></div>
      <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-200 rounded-full opacity-50 blur-xl"></div>
    </div>
    <button class="px-8 py-3 bg-gradient-to-br from-stone-100/80 to-neutral-200/80 backdrop-blur-md border border-neutral-300/40 rounded-2xl font-semibold text-gray-700 shadow-lg text-sm hover:scale-105 transition-transform">
      Natural Organic
    </button>
  </div>
`;

export const description = 'styles.visual.natural.description';

// natural 風格已合併到 visualStyles.js，不再需要單獨的模板
export const naturalTemplates = [];

export default naturalTemplates;