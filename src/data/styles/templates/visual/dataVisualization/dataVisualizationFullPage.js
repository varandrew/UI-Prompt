// Data Visualization Full Page - 数据可視化完整页面
// Phase 3 Batch 1 - 简化模板（主風格沒有 fullPageHTML）

// 注意：data-visualization 風格沒有獨立的 fullPageHTML
// 它只有简單的 demoHTML 和一個包含元数据的 preview
// 這個文件作為占位符，未來可以根据需要添加完整的数据可視化页面

export const dataVisualizationFullPageHTML = `
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Data Visualization</h1>
      <p class="text-gray-600 mb-8">這是一個简化的数据可視化页面占位符。</p>

      <!-- 简單的圖表展示 -->
      <div class="bg-white rounded-2xl p-6 shadow-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">季度数据分析</h2>
        <div class="flex items-end justify-around gap-4 h-64">
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" style="height: 60%;"></div>
            <span class="text-sm mt-2 font-medium">Q1</span>
            <span class="text-xs text-gray-500">$12K</span>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg" style="height: 85%;"></div>
            <span class="text-sm mt-2 font-medium">Q2</span>
            <span class="text-xs text-gray-500">$17K</span>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg" style="height: 45%;"></div>
            <span class="text-sm mt-2 font-medium">Q3</span>
            <span class="text-xs text-gray-500">$9K</span>
          </div>
          <div class="flex-1 flex flex-col items-center">
            <div class="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-lg" style="height: 95%;"></div>
            <span class="text-sm mt-2 font-medium">Q4</span>
            <span class="text-xs text-gray-500">$19K</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const dataVisualizationFullPageStyles = `
  body {
    margin: 0;
    padding: 0;
  }
`;
