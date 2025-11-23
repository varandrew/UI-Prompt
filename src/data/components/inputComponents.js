// 輸入增強組件 - Input Enhancement Components
export const inputComponents = [
  {
    id: 'autocomplete-search',
    title: 'data.components.input.autocomplete-search.title',
    description: 'data.components.input.autocomplete-search.description',
    demoHTML: `
      <div class="w-full max-w-lg space-y-6">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <h3 class="font-semibold text-lg mb-4">{{t:demo.input.smartSearch}}</h3>

          <div class="space-y-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input type="text" placeholder="{{t:demo.input.searchFrameworks}}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd class="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded">↓</kbd>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg max-h-60 overflow-auto">
              <div class="py-2">
                <div class="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span class="text-blue-600 text-sm font-bold">R</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">React</p>
                      <p class="text-xs text-gray-500">{{t:demo.input.javaScriptLibrary}}</p>
                    </div>
                  </div>
                  <span class="text-xs text-gray-400">{{t:demo.input.popular}}</span>
                </div>

                <div class="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <span class="text-green-600 text-sm font-bold">V</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Vue.js</p>
                      <p class="text-xs text-gray-500">{{t:demo.input.progressiveFramework}}</p>
                    </div>
                  </div>
                  <span class="text-xs text-gray-400">{{t:demo.input.popular}}</span>
                </div>

                <div class="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <span class="text-purple-600 text-sm font-bold">A</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Angular</p>
                      <p class="text-xs text-gray-500">完整框架</p>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-2 bg-gray-50 border-b border-gray-100">
                  <p class="text-xs text-gray-500 font-medium">搜索结果 (3 个)</p>
                </div>

                <div class="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                      <span class="text-orange-600 text-sm font-bold">S</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Svelte</p>
                      <p class="text-xs text-gray-500">编译时框架</p>
                    </div>
                  </div>
                  <span class="text-xs text-blue-600">新</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-sm text-gray-500">
            <p>💡 提示：使用方向键导航，ESC 关闭下拉菜单</p>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'tags-input',
    title: 'data.components.input.tags-input.title',
    description: 'data.components.input.tags-input.description',
    demoHTML: `
      <div class="w-full max-w-lg space-y-6">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <h3 class="font-semibold text-lg mb-4">{{t:demo.input.tagManagement}}</h3>

          <div class="space-y-4">
            <div class="border-2 border-gray-300 rounded-lg p-4 min-h-[80px]">
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm group">
                  前端开发
                  <button class="text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm group">
                  UI设计
                  <button class="text-green-600 hover:text-green-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm group">
                  创建工具
                  <button class="text-purple-600 hover:text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm group">
                  团队管理
                  <button class="text-yellow-600 hover:text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              </div>
              <input type="text" placeholder="{{t:demo.input.inputLabel}}" class="w-full outline-none text-sm" />
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-700">建议标签</h4>
                <button class="text-xs text-blue-600 hover:text-blue-800">{{t:demo.input.viewAll}}</button>
              </div>
              <div class="flex flex-wrap gap-2">
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  + React
                </button>
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  + Vue.js
                </button>
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  + TypeScript
                </button>
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  + Webpack
                </button>
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  + Docker
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'rich-textarea',
    title: 'data.components.input.rich-textarea.title',
    description: 'data.components.input.rich-textarea.description',
    demoHTML: `
      <div class="w-full max-w-lg space-y-6">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <h3 class="font-semibold text-lg mb-4">{{t:demo.input.richTextEditor}}</h3>

          <div class="space-y-4">
            <div class="border border-gray-200 rounded-t-lg p-2">
              <div class="flex items-center gap-1 flex-wrap">
                <button class="p-2 hover:bg-gray-100 rounded transition-colors" title="粗体">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-gray-100 rounded transition-colors" title="斜体">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4h4M14 4l-4 16M4 20h4M20 4h-4"></path>
                  </svg>
                </button>
                <div class="w-px h-6 bg-gray-300"></div>
                <button class="p-2 hover:bg-gray-100 rounded transition-colors" title="标题">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-gray-100 rounded transition-colors" title="列表">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-gray-100 rounded transition-colors" title="链接">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-gray-100 rounded transition-colors" title="代码">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4m-4-4l-4 4"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="border border-l border-r border-b border-gray-200 rounded-b-lg p-4 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500" contenteditable="true">
              <h2 class="text-xl font-bold mb-3">{{t:demo.input.projectDescription}}</h2>
              <p class="mb-3">这是一个<strong>功能丰富</strong>的文本编辑器，支持多种格式化选项。</p>
              <ul class="list-disc pl-6 mb-3">
                <li>支持 <em>斜体</em>、<u>下划线</u>、<code>代码</code></li>
                <li>可以插入链接和图片</li>
                <li>实时字数统计</li>
              </ul>
              <p class="text-gray-500">{{t:demo.input.startEditing}}</p>
            </div>

            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-4">
                <span class="text-gray-600">字数: 127</span>
                <span class="text-gray-600">字符: 254</span>
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                  清空
                </button>
                <button class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm">
                  保存
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  }
];