// Bento Grids - Phase 3 Batch 1
export const bentoGridsFullPageHTML = `<!DOCTYPE html>
<html lang="zh-CH">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bento Grids - Modern UI Layout</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style id="bento-styles">
    /* Bento Grid Styles will be injected */
  </style>
</head>
<body class="bg-gray-50">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8">Bento Grids Layout System</h1>

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <!-- Large Box (2 cols) -->
      <div class="md:col-span-2 bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Analytics</h2>
        <p class="text-gray-600 mb-4">Real-time data</p>
        <div class="mt-4 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center">
          <svg class="w-16 h-16 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
      </div>

      <!-- Tall Box (2 rows) -->
      <div class="md:row-span-2 bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 flex flex-col">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Design</h2>
        <div class="flex-1 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl flex items-center justify-center">
          <svg class="w-20 h-20 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>

      <!-- Small Box 1 -->
      <div class="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
        <h2 class="text-xl font-bold text-gray-900 mb-2">Mobile</h2>
        <div class="mt-3 h-20 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
          <svg class="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>

      <!-- Small Box 2 -->
      <div class="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
        <h2 class="text-xl font-bold text-gray-900 mb-2">Desktop</h2>
        <div class="mt-3 h-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>

      <!-- Wide Box (2 cols) -->
      <div class="md:col-span-2 bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Deploy</h2>
        <p class="text-gray-600 mb-4">One-click deployment</p>
        <div class="mt-4 h-32 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl flex items-center justify-center">
          <svg class="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- More Complex Grid -->
    <div class="mt-16 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Advanced Bento Layout</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Feature 1 -->
        <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 class="text-3xl font-bold mb-4">Premium Features</h3>
          <p class="text-purple-100 mb-6">Unlock the full potential of your workflow with advanced tools and integrations</p>
          <button class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">
            Learn More
          </button>
        </div>

        <!-- Stats -->
        <div class="md:col-span-2 bg-white rounded-2xl border-2 border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm mb-1">Active Users</p>
              <p class="text-3xl font-bold text-gray-900">45.2K</p>
            </div>
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
          </div>
          <p class="text-green-600 text-sm font-semibold mt-2">+12.5% from last month</p>
        </div>

        <!-- Quick Action 1 -->
        <div class="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <h4 class="font-bold text-gray-900 mb-1">New Project</h4>
          <p class="text-sm text-gray-600">Start from scratch</p>
        </div>

        <!-- Quick Action 2 -->
        <div class="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </div>
          <h4 class="font-bold text-gray-900 mb-1">Import</h4>
          <p class="text-sm text-gray-600">From existing</p>
        </div>

        <!-- Wide Info Card -->
        <div class="md:col-span-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-200 p-6">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Did you know?</h4>
              <p class="text-sm text-gray-600">Bento grids create visual hierarchy through asymmetric layouts, making content more engaging and scannable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-16 text-center text-gray-500 text-sm">
      <p>Bento Grid Layout System - Flexible & Responsive</p>
    </div>
  </div>
</body>
</html>`;

export const bentoGridsFullPageStyles = `
/* Bento Grids Custom Styles */
/* All styles are managed through Tailwind CSS classes in the HTML above */
/* The bento grid layout uses CSS Grid with responsive breakpoints */
/* Hover effects and transitions are applied via Tailwind utility classes */
`;
