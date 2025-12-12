// ✅ Simplified: fullPage content now loaded from public/data/content/

export const visualTechDataVisualization = {
  id: 'visual-tech-data-visualization',
  title: 'styles.visual.data-visualization.title',
  description: 'styles.visual.data-visualization.description',

  // Demo 展示
  demoHTML: `
    <div class="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
      <div class="text-center">
        <h4 class="font-bold text-base text-gray-800">Analytics</h4>
      </div>
      <div class="flex items-end justify-around gap-2 h-24 w-full max-w-xs">
        <div class="flex-1 flex flex-col items-center">
          <div class="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" style="height: 60%;"></div>
          <span class="text-xs mt-1">Q1</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
          <div class="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg" style="height: 85%;"></div>
          <span class="text-xs mt-1">Q2</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
          <div class="w-full bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg" style="height: 45%;"></div>
          <span class="text-xs mt-1">Q3</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
          <div class="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-lg" style="height: 95%;"></div>
          <span class="text-xs mt-1">Q4</span>
        </div>
      </div>
    </div>
  `,

  customStyles: '',

  // Demo Box 樣式类
  demoBoxClass: 'bg-gray-50',

  // ✅ Simplified: fullPage content loaded dynamically from public/data/content/
  fullPagePreviewId: 'data-visualization',

  // ✅ Previews metadata only
  previews: [
    {
      id: 'professional-scenarios',
      name: 'styles.visual.data-visualization.previews.professionalScenarios',
      type: 'data-visualization',
      scenario: 'enterprise-dashboard',
      description: 'styles.visual.data-visualization.previews.professionalScenariosDesc'
    }
  ]
};
