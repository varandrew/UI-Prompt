// 高級組件 - Advanced Components
export const advancedComponents = [
  {
    id: 'calendar-date-picker',
    title: 'data.components.advanced.calendar-date-picker.title',
    description: 'data.components.advanced.calendar-date-picker.description',
    demoHTML: `
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-lg text-gray-900">2024年10月</h3>
            <div class="flex gap-2">
              <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-7 gap-1 mb-2">
            <div class="text-center text-xs font-medium text-gray-500 py-2">日</div>
            <div class="text-center text-xs font-medium text-gray-500 py-2">一</div>
            <div class="text-center text-xs font-medium text-gray-500 py-2">二</div>
            <div class="text-center text-xs font-medium text-gray-500 py-2">三</div>
            <div class="text-center text-xs font-medium text-gray-500 py-2">四</div>
            <div class="text-center text-xs font-medium text-gray-500 py-2">五</div>
            <div class="text-center text-xs font-medium text-gray-500 py-2">六</div>
          </div>

          <div class="grid grid-cols-7 gap-1">
            <div class="text-center py-2 text-gray-400 text-sm">29</div>
            <div class="text-center py-2 text-gray-400 text-sm">30</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">1</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">2</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">3</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">4</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">5</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">6</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">7</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">8</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">9</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">10</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">11</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">12</div>
            <div class="text-center py-2 bg-blue-500 text-white text-sm rounded-lg cursor-pointer">13</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">14</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">15</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">16</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">17</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">18</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">19</div>
            <div class="text-center py-2 bg-blue-100 text-blue-800 text-sm rounded-lg cursor-pointer">20</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">21</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">22</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">23</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">24</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">25</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">26</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">27</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">28</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">29</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">30</div>
            <div class="text-center py-2 text-gray-900 text-sm hover:bg-gray-100 rounded-lg cursor-pointer">31</div>
            <div class="text-center py-2 text-gray-400 text-sm">1</div>
            <div class="text-center py-2 text-gray-400 text-sm">2</div>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-600">选择的日期:</span>
              <span class="text-sm font-medium text-gray-900">2024年10月13日</span>
            </div>
            <div class="flex gap-2">
              <button class="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                确认
              </button>
              <button class="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'file-upload',
    title: 'data.components.advanced.file-upload.title',
    description: 'data.components.advanced.file-upload.description',
    demoHTML: `
      <div class="w-full max-w-lg">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-2">拖拽文件到此處上传</h4>
            <p class="text-sm text-gray-600 mb-4">或者点击按钮选择文件</p>
            <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
              选择文件
            </button>
            <p class="text-xs text-gray-500 mt-4">支持 JPG、PNG、PDF、DOC、DOCX，最大 10MB</p>
          </div>

          <div class="mt-6 space-y-3">
            <div class="bg-gray-50 rounded-lg p-3 flex items-center gap-3">
              <div class="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">报告文档.pdf</p>
                <p class="text-xs text-gray-500">2.4 MB</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">已完成</span>
                <button class="text-gray-400 hover:text-red-600 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900">设计图.png</p>
                  <p class="text-xs text-gray-500">1.8 MB / 3.2 MB</p>
                </div>
                <div class="text-sm text-blue-600 font-medium">56%</div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 56%"></div>
              </div>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <p class="text-sm text-gray-600">已选择 2 个文件，总计 4.2 MB</p>
            <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">{t('componentLibrary.clearAll')}</button>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'rich-text-editor',
    title: 'data.components.advanced.rich-text-editor.title',
    description: 'data.components.advanced.rich-text-editor.description',
    demoHTML: `
      <div class="w-full max-w-2xl">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200">
          <div class="border-b border-gray-200 p-3">
            <div class="flex items-center gap-2 flex-wrap">
              <div class="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                <button class="p-2 hover:bg-white rounded transition-colors" title="粗体">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="斜体">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4h4M14 4l-4 16M4 20h4M20 4h-4M16 20h4"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="下划线">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 20h18"></path>
                  </svg>
                </button>
              </div>

              <div class="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                <button class="p-2 hover:bg-white rounded transition-colors" title="标题">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="列表">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="有序列表">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                  </svg>
                </button>
              </div>

              <div class="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                <button class="p-2 hover:bg-white rounded transition-colors" title="链接">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="图片">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="表格">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>

              <div class="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                <button class="p-2 hover:bg-white rounded transition-colors" title="撤销">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white rounded transition-colors" title="重做">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="p-6 min-h-[200px] focus:outline-none" contenteditable="true">
            <h2 class="text-2xl font-bold mb-4">欢迎使用富文本编辑器</h2>
            <p class="mb-4">这是一个功能丰富的文本编辑器，支持多种格式化选项。</p>
            <ul class="list-disc pl-6 mb-4">
              <li>支持 <strong>粗体</strong>、<em>斜体</em>、<u>下划线</u></li>
              <li>可以插入链接、图片和表格</li>
              <li>支持撤销和重做操作</li>
            </ul>
            <p class="text-gray-600">开始输入内容...</p>
          </div>

          <div class="border-t border-gray-200 p-3 flex items-center justify-between">
            <span class="text-sm text-gray-500">字数: 127 | 字符: 254</span>
            <div class="flex gap-2">
              <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                清空
              </button>
              <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'color-picker',
    title: 'data.components.advanced.color-picker.title',
    description: 'data.components.advanced.color-picker.description',
    demoHTML: `
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <h3 class="font-semibold text-lg mb-4">选择颜色</h3>

          <div class="space-y-4">
            <div class="h-32 rounded-lg border-2 border-gray-200" style="background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)"></div>

            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-blue-500 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"></div>
              <div class="w-12 h-12 bg-green-500 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"></div>
              <div class="w-12 h-12 bg-red-500 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"></div>
              <div class="w-12 h-12 bg-yellow-500 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"></div>
              <div class="w-12 h-12 bg-purple-500 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"></div>
              <div class="w-12 h-12 bg-pink-500 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"></div>
            </div>

            <div class="space-y-3">
              <div>
                <label class="text-sm font-medium text-gray-700 block mb-2">HEX</label>
                <div class="flex gap-2">
                  <input type="text" value="#3B82F6" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                  <div class="w-10 h-10 bg-blue-500 rounded-lg border-2 border-gray-300"></div>
                </div>
              </div>

              <div>
                <label class="text-sm font-medium text-gray-700 block mb-2">RGB</label>
                <div class="flex gap-2">
                  <div class="flex-1">
                    <label class="text-xs text-gray-500">R</label>
                    <input type="number" value="59" min="0" max="255" class="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                  </div>
                  <div class="flex-1">
                    <label class="text-xs text-gray-500">G</label>
                    <input type="number" value="130" min="0" max="255" class="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                  </div>
                  <div class="flex-1">
                    <label class="text-xs text-gray-500">B</label>
                    <input type="number" value="246" min="0" max="255" class="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                  </div>
                </div>
              </div>

              <div>
                <label class="text-sm font-medium text-gray-700 block mb-2">透明度</label>
                <div class="flex items-center gap-3">
                  <input type="range" min="0" max="100" value="100" class="flex-1" />
                  <span class="text-sm text-gray-600 w-12">100%</span>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <div class="text-sm text-gray-600 mb-3">最近使用的颜色</div>
              <div class="flex gap-2">
                <div class="w-8 h-8 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-gray-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-red-400 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-yellow-400 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-purple-400 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-pink-400 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div class="w-8 h-8 bg-indigo-400 rounded cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
            </div>

            <div class="flex gap-2">
              <button class="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                重置
              </button>
              <button class="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                应用
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'range-slider',
    title: 'data.components.advanced.range-slider.title',
    description: 'data.components.advanced.range-slider.description',
    demoHTML: '',
    customStyles: '',
    variants: [
      {
        id: 'minimal-vertical',
        name: 'data.components.advanced.range-slider.variants.0.name',
        description: 'data.components.advanced.range-slider.variants.0.description',
        demoHTML: `
          <div class="flex items-center justify-center min-h-[400px] bg-gray-50">
            <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-200 w-80">
              <h3 class="text-lg font-light mb-6 text-gray-900">Volume</h3>

              <div class="flex items-center gap-6">
                <!-- Vertical Slider -->
                <div class="flex-1 flex justify-center">
                  <div class="relative h-64 w-1 bg-gray-200 rounded-full">
                    <div class="absolute bottom-0 w-full bg-black rounded-full transition-all duration-300" style="height: 65%;"></div>
                    <div class="absolute bottom-[65%] left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full cursor-pointer shadow-md hover:scale-110 transition-transform"></div>
                  </div>
                </div>

                <!-- Value Display -->
                <div class="text-right">
                  <div class="text-3xl font-light text-gray-900">65</div>
                  <div class="text-xs text-gray-500 mt-1">%</div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: ''
      },
      {
        id: 'glassmorphism-dual',
        name: 'data.components.advanced.range-slider.variants.1.name',
        description: 'data.components.advanced.range-slider.variants.1.description',
        demoHTML: `
          <div class="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-50 to-pink-50">
            <div class="glassmorphism-card rounded-2xl p-8 w-96">
              <h3 class="text-lg font-medium mb-6 text-gray-800">Price Range</h3>

              <div class="space-y-6">
                <div class="relative h-3 bg-white/30 rounded-full backdrop-blur-sm">
                  <div class="absolute h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full glow-effect" style="left: 20%; right: 30%;"></div>
                  <div class="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform border-2 border-purple-400" style="left: 20%; transform: translate(-50%, -50%);"></div>
                  <div class="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform border-2 border-pink-400" style="right: 30%; transform: translate(50%, -50%);"></div>
                </div>

                <div class="flex justify-between items-center">
                  <div class="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span class="text-sm font-medium text-gray-700">$200</span>
                  </div>
                  <div class="text-sm text-gray-600">to</div>
                  <div class="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span class="text-sm font-medium text-gray-700">$700</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .glassmorphism-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          }
          .glow-effect {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
        `
      },
      {
        id: 'bootstrap-price-filter',
        name: 'data.components.advanced.range-slider.variants.2.name',
        description: 'data.components.advanced.range-slider.variants.2.description',
        demoHTML: `
          <div class="flex items-center justify-center min-h-[500px] bg-light p-6">
            <div class="bg-white rounded-lg border border-gray-300 p-6 w-full max-w-md shadow-sm">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="h5 mb-0">Filter by Price</h4>
                <button class="btn btn-sm btn-outline-secondary" onclick="javascript:void(0)">Reset</button>
              </div>

              <div class="mb-4">
                <label class="form-label text-muted small">Price Range</label>
                <input type="range" class="form-range" min="0" max="1000" value="450" id="priceRange">
                <div class="d-flex justify-content-between mt-2">
                  <span class="badge bg-primary">$0</span>
                  <span class="badge bg-primary">$450</span>
                </div>
              </div>

              <div class="row g-2 mb-3">
                <div class="col">
                  <input type="number" class="form-control form-control-sm" placeholder="Min" value="0">
                </div>
                <div class="col-auto d-flex align-items-center">
                  <span class="text-muted">-</span>
                </div>
                <div class="col">
                  <input type="number" class="form-control form-control-sm" placeholder="Max" value="450">
                </div>
              </div>

              <button class="btn btn-primary w-100">Apply Filter</button>
            </div>
          </div>
        `,
        customStyles: `
          .form-range::-webkit-slider-thumb {
            background: #0d6efd;
          }
          .form-range::-moz-range-thumb {
            background: #0d6efd;
          }
        `
      },
      {
        id: 'material-brightness',
        name: 'data.components.advanced.range-slider.variants.3.name',
        description: 'data.components.advanced.range-slider.variants.3.description',
        demoHTML: `
          <div class="flex items-center justify-center min-h-[400px] bg-gray-100">
            <div class="bg-white rounded-2xl p-8 w-96 shadow-md">
              <h3 class="text-lg font-medium mb-2 text-gray-900">Brightness</h3>
              <p class="text-sm text-gray-500 mb-6">Adjust screen brightness</p>

              <div class="space-y-6">
                <!-- Color Gradient Slider -->
                <div class="relative">
                  <input type="range" min="0" max="100" value="70" class="w-full h-3 rounded-full appearance-none cursor-pointer color-slider">
                </div>

                <!-- Color Preview -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl shadow-inner" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); opacity: 0.7;"></div>
                    <div class="ripple-text">
                      <span class="text-2xl font-semibold text-gray-800">70%</span>
                    </div>
                  </div>

                  <button class="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all hover:shadow-xl active:scale-95">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .color-slider {
            background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
          }
          .color-slider::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            border: 3px solid #667eea;
          }
          .color-slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            border: 3px solid #667eea;
          }
          .ripple-text {
            animation: ripple 2s ease-in-out infinite;
          }
          @keyframes ripple {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `
      },
      {
        id: 'neumorphism-volume',
        name: 'data.components.advanced.range-slider.variants.4.name',
        description: 'data.components.advanced.range-slider.variants.4.description',
        demoHTML: `
          <div class="flex items-center justify-center min-h-[450px] bg-gradient-to-br from-gray-50 to-gray-100">
            <div class="neomorph-container rounded-3xl p-8 w-80">
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-lg font-medium text-gray-700">Volume</h3>
                <div class="volume-icon-wrapper">
                  <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </div>
              </div>

              <div class="space-y-6">
                <div class="neomorph-track relative h-4 rounded-full">
                  <div class="absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300" style="width: 60%;"></div>
                  <div class="neomorph-thumb absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110" style="left: 60%; transform: translate(-50%, -50%);"></div>
                </div>

                <div class="text-center">
                  <div class="text-4xl font-light text-gray-700">60</div>
                  <div class="text-xs text-gray-500 mt-1 uppercase tracking-wider">Level</div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .neomorph-container {
            background: #e0e5ec;
            box-shadow:
              9px 9px 16px rgba(163, 177, 198, 0.6),
              -9px -9px 16px rgba(255, 255, 255, 0.5);
          }
          .neomorph-track {
            background: #e0e5ec;
            box-shadow:
              inset 4px 4px 8px rgba(163, 177, 198, 0.5),
              inset -4px -4px 8px rgba(255, 255, 255, 0.5);
          }
          .neomorph-thumb {
            background: linear-gradient(145deg, #f0f4f8, #d1d9e6);
            box-shadow:
              4px 4px 8px rgba(163, 177, 198, 0.6),
              -4px -4px 8px rgba(255, 255, 255, 0.5);
          }
          .volume-icon-wrapper {
            animation: pulse-icon 3s ease-in-out infinite;
          }
          @keyframes pulse-icon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `
      }
    ]
  },
  {
    id: 'custom-scrollbar',
    title: 'data.components.advanced.custom-scrollbar.title',
    description: 'data.components.advanced.custom-scrollbar.description',
    variants: [
      {
        id: 'material-design',
        name: 'data.components.advanced.custom-scrollbar.variants.material-design.name',
        description: 'data.components.advanced.custom-scrollbar.variants.material-design.description',
        demoHTML: `
          <div class="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">Material Design Scrollbar</h3>
                <p class="text-sm text-gray-500">Google's design system aesthetic</p>
              </div>
            </div>

            <div class="scrollbar-material h-64 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div class="space-y-3">
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">What is Material Design?</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">Material Design is a design language developed by Google in 2014. It synthesizes the classic principles of good design with innovation and technology.</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">Key Features</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">Material surfaces have consistent elevation through shadows, smooth animations, and tactile surfaces inspired by paper and ink.</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">Design Principles</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">The scrollbar follows Material Design 3 guidelines with rounded corners, smooth hover transitions, and elevation through shadows.</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">Responsive Interaction</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">Hover over the scrollbar to see it expand smoothly from 8px to 12px width, providing better interaction feedback.</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">Color System</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">Uses Material's primary purple color palette with proper contrast ratios for accessibility compliance.</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>💜 Smooth animations • Material elevation</span>
              <span>Hover to expand</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-material::-webkit-scrollbar {
            width: 8px;
            transition: width 0.3s ease;
          }
          .scrollbar-material::-webkit-scrollbar-track {
            background: #f3e5f5;
            border-radius: 10px;
          }
          .scrollbar-material::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #9c27b0, #7b1fa2);
            border-radius: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .scrollbar-material::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #ab47bc, #8e24aa);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            width: 12px;
          }
          .scrollbar-material:hover::-webkit-scrollbar {
            width: 12px;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.advanced.custom-scrollbar.variants.glassmorphism.name',
        description: 'data.components.advanced.custom-scrollbar.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-xl rounded-xl p-6 scrollbar-glass-container">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-white/20">
              <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white font-semibold border border-white/40">
                G
              </div>
              <div>
                <h3 class="font-semibold text-lg text-white">Glassmorphism Scrollbar</h3>
                <p class="text-sm text-white/80">Translucent frosted glass effect</p>
              </div>
            </div>

            <div class="scrollbar-glass h-64 overflow-y-auto rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4">
              <div class="space-y-3">
                <div class="bg-white/20 backdrop-blur-lg rounded-lg p-4 border border-white/30">
                  <h4 class="font-semibold text-white mb-2">✨ What is Glassmorphism?</h4>
                  <p class="text-sm text-white/90 leading-relaxed">A design trend characterized by frosted-glass aesthetics with transparency, blur effects, and vibrant backgrounds.</p>
                </div>
                <div class="bg-white/20 backdrop-blur-lg rounded-lg p-4 border border-white/30">
                  <h4 class="font-semibold text-white mb-2">🎨 Visual Hierarchy</h4>
                  <p class="text-sm text-white/90 leading-relaxed">Multiple layers of transparency create depth, with background blur (backdrop-filter) enhancing readability.</p>
                </div>
                <div class="bg-white/20 backdrop-blur-lg rounded-lg p-4 border border-white/30">
                  <h4 class="font-semibold text-white mb-2">💎 Frosted Effect</h4>
                  <p class="text-sm text-white/90 leading-relaxed">The scrollbar uses CSS backdrop-filter to achieve the signature frosted glass appearance with smooth edges.</p>
                </div>
                <div class="bg-white/20 backdrop-blur-lg rounded-lg p-4 border border-white/30">
                  <h4 class="font-semibold text-white mb-2">🌈 Light Refraction</h4>
                  <p class="text-sm text-white/90 leading-relaxed">Subtle border highlights simulate light refraction through glass, adding realism to the transparent surfaces.</p>
                </div>
                <div class="bg-white/20 backdrop-blur-lg rounded-lg p-4 border border-white/30">
                  <h4 class="font-semibold text-white mb-2">🎯 Modern Aesthetic</h4>
                  <p class="text-sm text-white/90 leading-relaxed">Popular in iOS and modern web design, this style creates elegant, lightweight interfaces.</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-white/70">
              <span>🔍 Backdrop blur • Translucent layers</span>
              <span>iOS-inspired design</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-glass-container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .scrollbar-glass::-webkit-scrollbar {
            width: 10px;
          }
          .scrollbar-glass::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .scrollbar-glass::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          .scrollbar-glass::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(15px);
          }
        `
      },
      {
        id: 'neon-cyberpunk',
        name: 'data.components.advanced.custom-scrollbar.variants.neon-cyberpunk.name',
        description: 'data.components.advanced.custom-scrollbar.variants.neon-cyberpunk.description',
        demoHTML: `
          <div class="w-full max-w-xl bg-gray-900 rounded-xl shadow-2xl p-6 border-2 border-cyan-500/30 scrollbar-neon-container">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-cyan-500/30">
              <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold border-2 border-cyan-500 shadow-neon-cyan">
                N
              </div>
              <div>
                <h3 class="font-bold text-lg text-cyan-400 neon-text-cyan">Neon Cyberpunk Scrollbar</h3>
                <p class="text-sm text-pink-400">Futuristic glowing aesthetic</p>
              </div>
            </div>

            <div class="scrollbar-neon h-64 overflow-y-auto rounded-lg border-2 border-cyan-500/50 bg-black/50 p-4">
              <div class="space-y-3">
                <div class="bg-gray-900/80 rounded-lg p-4 border border-cyan-500/30 shadow-neon-cyan-sm">
                  <h4 class="font-bold text-cyan-400 mb-2">⚡ Cyberpunk 2077 Vibes</h4>
                  <p class="text-sm text-gray-300 leading-relaxed">Inspired by dystopian futures, neon-lit cityscapes, and high-tech low-life aesthetics of cyberpunk culture.</p>
                </div>
                <div class="bg-gray-900/80 rounded-lg p-4 border border-pink-500/30 shadow-neon-pink-sm">
                  <h4 class="font-bold text-pink-400 mb-2">🌆 Neon Glow Effect</h4>
                  <p class="text-sm text-gray-300 leading-relaxed">Multi-layered box shadows create authentic neon tube lighting effects with outer glow and inner illumination.</p>
                </div>
                <div class="bg-gray-900/80 rounded-lg p-4 border border-cyan-500/30 shadow-neon-cyan-sm">
                  <h4 class="font-bold text-cyan-400 mb-2">🎭 Color Scheme</h4>
                  <p class="text-sm text-gray-300 leading-relaxed">Classic cyberpunk palette: electric cyan and hot pink against deep blacks, creating maximum visual contrast.</p>
                </div>
                <div class="bg-gray-900/80 rounded-lg p-4 border border-pink-500/30 shadow-neon-pink-sm">
                  <h4 class="font-bold text-pink-400 mb-2">✨ Pulsing Animation</h4>
                  <p class="text-sm text-gray-300 leading-relaxed">The scrollbar features a subtle pulsing glow animation, mimicking the flicker of neon signs in rain-soaked streets.</p>
                </div>
                <div class="bg-gray-900/80 rounded-lg p-4 border border-cyan-500/30 shadow-neon-cyan-sm">
                  <h4 class="font-bold text-cyan-400 mb-2">🚀 Sci-Fi UI</h4>
                  <p class="text-sm text-gray-300 leading-relaxed">Perfect for gaming interfaces, tech dashboards, or any project requiring a futuristic, high-energy visual style.</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-cyan-400/70">
              <span>⚡ Glowing effects • Pulsing animation</span>
              <span class="text-pink-400/70">Cyberpunk 2077</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-neon-container {
            animation: border-glow 2s ease-in-out infinite alternate;
          }
          @keyframes border-glow {
            from { border-color: rgba(6, 182, 212, 0.3); }
            to { border-color: rgba(236, 72, 153, 0.3); }
          }
          .neon-text-cyan {
            text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4;
          }
          .shadow-neon-cyan {
            box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4;
          }
          .shadow-neon-cyan-sm {
            box-shadow: 0 0 5px #06b6d4;
          }
          .shadow-neon-pink-sm {
            box-shadow: 0 0 5px #ec4899;
          }
          .scrollbar-neon::-webkit-scrollbar {
            width: 12px;
          }
          .scrollbar-neon::-webkit-scrollbar-track {
            background: #0a0a0a;
            border-radius: 10px;
            border: 1px solid rgba(6, 182, 212, 0.3);
          }
          .scrollbar-neon::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #06b6d4, #ec4899);
            border-radius: 10px;
            border: 1px solid rgba(6, 182, 212, 0.5);
            box-shadow:
              0 0 10px #06b6d4,
              0 0 20px #06b6d4,
              inset 0 0 10px rgba(6, 182, 212, 0.5);
            animation: neon-pulse 2s ease-in-out infinite;
            transition: all 0.3s ease;
          }
          .scrollbar-neon::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #22d3ee, #f472b6);
            box-shadow:
              0 0 15px #06b6d4,
              0 0 30px #06b6d4,
              0 0 15px #ec4899,
              inset 0 0 15px rgba(6, 182, 212, 0.7);
          }
          @keyframes neon-pulse {
            0%, 100% {
              box-shadow:
                0 0 10px #06b6d4,
                0 0 20px #06b6d4,
                inset 0 0 10px rgba(6, 182, 212, 0.5);
            }
            50% {
              box-shadow:
                0 0 15px #06b6d4,
                0 0 30px #06b6d4,
                0 0 10px #ec4899,
                inset 0 0 15px rgba(6, 182, 212, 0.7);
            }
          }
        `
      },
      {
        id: 'minimal-flat',
        name: 'data.components.advanced.custom-scrollbar.variants.minimal-flat.name',
        description: 'data.components.advanced.custom-scrollbar.variants.minimal-flat.description',
        demoHTML: `
          <div class="w-full max-w-xl bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div class="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-white font-normal text-sm">
                MIN
              </div>
              <div>
                <h3 class="font-medium text-lg text-gray-900">Minimal Flat Scrollbar</h3>
                <p class="text-sm text-gray-500">Bootstrap 5 inspired simplicity</p>
              </div>
            </div>

            <div class="scrollbar-minimal h-64 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-4">
              <div class="space-y-3">
                <div class="bg-white rounded p-4 border border-gray-200">
                  <h4 class="font-medium text-gray-900 mb-2">Less is More</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">Minimal design removes all unnecessary elements, focusing attention on content. Clean, flat aesthetics without gradients or shadows.</p>
                </div>
                <div class="bg-white rounded p-4 border border-gray-200">
                  <h4 class="font-medium text-gray-900 mb-2">Bootstrap Philosophy</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">Inspired by Bootstrap 5's utility-first approach. Simple, functional components that work everywhere without visual distraction.</p>
                </div>
                <div class="bg-white rounded p-4 border border-gray-200">
                  <h4 class="font-medium text-gray-900 mb-2">Ultra-Thin Design</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">At just 4px width, this scrollbar maximizes content space while maintaining functionality. Hover interaction provides subtle feedback.</p>
                </div>
                <div class="bg-white rounded p-4 border border-gray-200">
                  <h4 class="font-medium text-gray-900 mb-2">Grayscale Palette</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">Neutral gray tones ensure the scrollbar never competes with your brand colors or content. Universal compatibility across any design.</p>
                </div>
                <div class="bg-white rounded p-4 border border-gray-200">
                  <h4 class="font-medium text-gray-900 mb-2">Flat UI Movement</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">Part of the flat design revolution that rejected skeuomorphism for honest, digital-first aesthetics. Clean and timeless.</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>→ Ultra-thin • Flat design • No decorations</span>
              <span>4px width</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-minimal::-webkit-scrollbar {
            width: 4px;
          }
          .scrollbar-minimal::-webkit-scrollbar-track {
            background: #f9fafb;
          }
          .scrollbar-minimal::-webkit-scrollbar-thumb {
            background: #d1d5db;
            transition: background 0.2s ease;
          }
          .scrollbar-minimal::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
          }
        `
      },
      {
        id: 'gradient-rainbow',
        name: 'data.components.advanced.custom-scrollbar.variants.gradient-rainbow.name',
        description: 'data.components.advanced.custom-scrollbar.variants.gradient-rainbow.description',
        demoHTML: `
          <div class="w-full max-w-xl bg-white rounded-xl shadow-xl p-6 border-2 scrollbar-rainbow-border">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div class="w-10 h-10 rounded-full scrollbar-rainbow-gradient flex items-center justify-center text-white font-bold">
                🌈
              </div>
              <div>
                <h3 class="font-bold text-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">Rainbow Gradient Scrollbar</h3>
                <p class="text-sm text-gray-600">Colorful animated gradients</p>
              </div>
            </div>

            <div class="scrollbar-rainbow h-64 overflow-y-auto rounded-xl border-2 scrollbar-rainbow-border bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
              <div class="space-y-3">
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-red-400 shadow-sm">
                  <h4 class="font-semibold text-red-600 mb-2">🔴 Full Spectrum Color</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">This scrollbar features a complete rainbow gradient transitioning smoothly through all colors of the visible spectrum.</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-orange-400 shadow-sm">
                  <h4 class="font-semibold text-orange-600 mb-2">🟠 Animated Gradient</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">The gradient position animates continuously, creating a flowing color effect that catches the eye.</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-yellow-400 shadow-sm">
                  <h4 class="font-semibold text-yellow-600 mb-2">🟡 Playful Design</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">Perfect for creative projects, children's apps, art portfolios, or any interface that celebrates color and vibrancy.</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-green-400 shadow-sm">
                  <h4 class="font-semibold text-green-600 mb-2">🟢 Smooth Transitions</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">CSS animations ensure silky-smooth color transitions without any jarring jumps or performance issues.</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-blue-400 shadow-sm">
                  <h4 class="font-semibold text-blue-600 mb-2">🔵 Visual Delight</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">The constantly shifting colors create a sense of motion and energy, making scrolling a more engaging experience.</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-purple-400 shadow-sm">
                  <h4 class="font-semibold text-purple-600 mb-2">🟣 Modern Gradients</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">Utilizes linear gradients at multiple angles for a multi-dimensional color effect that feels contemporary and fresh.</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>🎨 Animated rainbow • Infinite loop • Vibrant colors</span>
              <span>Color spectrum</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-rainbow-gradient {
            background: linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff);
            animation: rainbow-rotate 3s linear infinite;
          }
          .scrollbar-rainbow-border {
            border-image: linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff) 1;
            animation: border-rainbow 3s linear infinite;
          }
          @keyframes rainbow-rotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          @keyframes border-rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .scrollbar-rainbow::-webkit-scrollbar {
            width: 14px;
          }
          .scrollbar-rainbow::-webkit-scrollbar-track {
            background: linear-gradient(180deg,
              #ffe0e0, #fff4e0, #ffffe0, #e0ffe0, #e0e0ff, #f0e0ff);
            border-radius: 10px;
          }
          .scrollbar-rainbow::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg,
              #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff);
            border-radius: 10px;
            background-size: 100% 300%;
            animation: gradient-flow 3s ease infinite;
            transition: all 0.3s ease;
          }
          .scrollbar-rainbow::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg,
              #ff3333, #ff9933, #ffff33, #33ff33, #3333ff, #9933ff);
            background-size: 100% 300%;
            animation: gradient-flow-fast 1.5s ease infinite;
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
          }
          @keyframes gradient-flow {
            0% { background-position: 0% 0%; }
            50% { background-position: 0% 100%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes gradient-flow-fast {
            0% { background-position: 0% 0%; }
            50% { background-position: 0% 100%; }
            100% { background-position: 0% 0%; }
          }
        `
      }
    ]
  },
  {
    id: 'scrollbar-thumb',
    title: 'data.components.advanced.scrollbar-thumb.title',
    description: 'data.components.advanced.scrollbar-thumb.description',
    variants: [
      {
        id: 'minimal-modern',
        name: 'data.components.advanced.scrollbar-thumb.variants.minimal-modern.name',
        description: 'data.components.advanced.scrollbar-thumb.variants.minimal-modern.description',
        demoHTML: `
          <div class="w-full max-w-lg bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                M
              </div>
              <div>
                <h3 class="font-medium text-lg text-gray-900">極简現代滾動條</h3>
                <p class="text-sm text-gray-500">乾淨简潔的現代设計</p>
              </div>
            </div>

            <div class="scrollbar-minimal-modern h-64 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div class="space-y-4">
                <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h4 class="font-medium text-gray-900 mb-2">🎯 设計理念</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">極简主義追求純粹的功能性美學，去除一切不必要的裝飾元素，让內容成為主角。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h4 class="font-medium text-gray-900 mb-2">🔧 技術特點</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">使用細线條设計，淺灰色調，微妙的圓角處理，確保在任何界面中都能完美融入。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h4 class="font-medium text-gray-900 mb-2">💡 適用場景</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">完美適用於企業級應用、文档編輯器、管理後台等需要专注內容的界面设計。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h4 class="font-medium text-gray-900 mb-2">🎨 色彩方案</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">採用中性灰色系，不与品牌色产生衝突，具有出色的通用性和持久的視覺吸引力。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h4 class="font-medium text-gray-900 mb-2">✨ 交互反饋</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">懸停時的颜色變化提供恰到好處的視覺反饋，不會過於突兀或引人注意。</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>極简设計 • 6px寬度 • 中性色調</span>
              <span>現代經典</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-minimal-modern::-webkit-scrollbar {
            width: 6px;
          }
          .scrollbar-minimal-modern::-webkit-scrollbar-track {
            background: #f8fafc;
            border-radius: 3px;
          }
          .scrollbar-minimal-modern::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
            transition: all 0.2s ease;
          }
          .scrollbar-minimal-modern::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }

          /* Firefox compatibility */
          .scrollbar-minimal-modern {
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 #f8fafc;
          }
        `
      },
      {
        id: 'gradient-effects',
        name: 'data.components.advanced.scrollbar-thumb.variants.gradient-effects.name',
        description: 'data.components.advanced.scrollbar-thumb.variants.gradient-effects.description',
        demoHTML: `
          <div class="w-full max-w-lg bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 border border-blue-200">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-blue-200">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <h3 class="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">漸變特效滾動條</h3>
                <p class="text-sm text-gray-600">動態漸變与光效融合</p>
              </div>
            </div>

            <div class="scrollbar-gradient-effects h-64 overflow-y-auto rounded-xl border border-blue-200 bg-white/60 backdrop-blur-sm p-4">
              <div class="space-y-4">
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-blue-400 shadow-sm">
                  <h4 class="font-semibold text-blue-700 mb-2">🌈 動態漸變</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">滾動條採用多层漸變设計，从深藍到紫色的平滑過渡，營造出現代科技感的視覺体驗。</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-purple-400 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">✨ 光暈效果</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">結合 CSS box-shadow 技術創造柔和的外發光效果，让滾動條在視覺上更加突出且富有层次感。</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-blue-400 shadow-sm">
                  <h4 class="font-semibold text-blue-700 mb-2">🎬 動画過渡</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">懸停狀態下的漸變位移和阴影增強，搭配平滑的 CSS 過渡動画，提供流暢的交互体驗。</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-purple-400 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">🎨 设計趨勢</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">遵循當前流行的漸變设計趨勢，完美適配創意作品展示、设計工具、或需要視覺衝擊的現代應用。</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-blue-400 shadow-sm">
                  <h4 class="font-semibold text-blue-700 mb-2">🔧 技術實現</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">利用 linear-gradient 和多重 box-shadow 實現複雜的視覺效果，同時保持良好的性能表現。</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-blue-600">
              <span>動態漸變 • 光暈效果 • 流暢動画</span>
              <span>現代科技</span>
            </div>
          </div>
        `,
        customStyles: `
          .scrollbar-gradient-effects::-webkit-scrollbar {
            width: 10px;
          }
          .scrollbar-gradient-effects::-webkit-scrollbar-track {
            background: linear-gradient(180deg, #dbeafe, #e9d5ff);
            border-radius: 8px;
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          .scrollbar-gradient-effects::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #3b82f6, #8b5cf6, #6366f1);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow:
              0 0 10px rgba(59, 130, 246, 0.3),
              0 2px 8px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
          }
          .scrollbar-gradient-effects::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #2563eb, #7c3aed, #4f46e5);
            box-shadow:
              0 0 15px rgba(59, 130, 246, 0.5),
              0 0 25px rgba(139, 92, 246, 0.3),
              0 4px 12px rgba(0, 0, 0, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
            transform: scaleY(1.05);
          }

          /* Firefox compatibility */
          .scrollbar-gradient-effects {
            scrollbar-width: thin;
            scrollbar-color: #6366f1 #dbeafe;
          }
        `
      },
      {
        id: 'brand-customizable',
        name: 'data.components.advanced.scrollbar-thumb.variants.brand-customizable.name',
        description: 'data.components.advanced.scrollbar-thumb.variants.brand-customizable.description',
        demoHTML: `
          <div class="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div class="w-10 h-10 rounded-lg scrollbar-brand-icon flex items-center justify-center text-white font-bold">
                B
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">品牌定制滾動條</h3>
                <p class="text-sm text-gray-500">支持CSS變量的主題系統</p>
              </div>
            </div>

            <div class="mb-4">
              <h4 class="text-sm font-medium text-gray-700 mb-3">選擇主題色彩</h4>
              <div class="flex gap-2">
                <button class="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-md hover:scale-110 transition-transform"
                        onclick="setScrollbarTheme('#3b82f6', '#dbeafe')"
                        title="藍色主題"></button>
                <button class="w-8 h-8 rounded-full bg-green-500 border-2 border-white shadow-md hover:scale-110 transition-transform"
                        onclick="setScrollbarTheme('#22c55e', '#dcfce7')"
                        title="綠色主題"></button>
                <button class="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow-md hover:scale-110 transition-transform"
                        onclick="setScrollbarTheme('#ef4444', '#fee2e2')"
                        title="紅色主題"></button>
                <button class="w-8 h-8 rounded-full bg-purple-500 border-2 border-white shadow-md hover:scale-110 transition-transform"
                        onclick="setScrollbarTheme('#a855f7', '#f3e8ff')"
                        title="紫色主題"></button>
                <button class="w-8 h-8 rounded-full bg-orange-500 border-2 border-white shadow-md hover:scale-110 transition-transform"
                        onclick="setScrollbarTheme('#f97316', '#fed7aa')"
                        title="橙色主題"></button>
              </div>
            </div>

            <div class="scrollbar-brand-customizable h-64 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div class="space-y-4">
                <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 scrollbar-brand-accent">
                  <h4 class="font-semibold mb-2" style="color: var(--scrollbar-brand-primary);">🎨 CSS變量系統</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">使用CSS自定義屬性 (CSS Variables) 實現動態主題切換，只需修改幾個變量值就能改變整個滾動條的外觀。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 scrollbar-brand-accent">
                  <h4 class="font-semibold mb-2" style="color: var(--scrollbar-brand-primary);">🏢 企業級應用</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">完美適用於需要保持品牌一致性的企業應用，支持快速適配公司品牌色，確保視覺識別的統一性。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 scrollbar-brand-accent">
                  <h4 class="font-semibold mb-2" style="color: var(--scrollbar-brand-primary);">🛠 開發友好</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">開發者可以通過JavaScript動態修改CSS變量，或者在構建時通過預處理器自動生成不同的主題變体。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 scrollbar-brand-accent">
                  <h4 class="font-semibold mb-2" style="color: var(--scrollbar-brand-primary);">🎯 品牌識別</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">點擊上方的色彩按鈕体驗即時主題切換，看看滾動條如何完美融入不同的品牌色彩方案中。</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 scrollbar-brand-accent">
                  <h4 class="font-semibold mb-2" style="color: var(--scrollbar-brand-primary);">🔧 靈活配置</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">支持主色調、輔助色、背景色等多個維度的定制，滿足不同设計需求和視覺偏好。</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>CSS變量 • 主題切換 • 品牌定制</span>
              <span>企業級</span>
            </div>
          </div>

          <script>
            function setScrollbarTheme(primary, light) {
              document.documentElement.style.setProperty('--scrollbar-brand-primary', primary);
              document.documentElement.style.setProperty('--scrollbar-brand-light', light);
            }

            // 设置默認主題
            setScrollbarTheme('#3b82f6', '#dbeafe');
          </script>
        `,
        customStyles: `
          :root {
            --scrollbar-brand-primary: #3b82f6;
            --scrollbar-brand-light: #dbeafe;
          }

          .scrollbar-brand-icon {
            background: var(--scrollbar-brand-primary);
          }
          .scrollbar-brand-accent {
            border-left-color: var(--scrollbar-brand-primary);
          }

          .scrollbar-brand-customizable::-webkit-scrollbar {
            width: 8px;
          }
          .scrollbar-brand-customizable::-webkit-scrollbar-track {
            background: var(--scrollbar-brand-light);
            border-radius: 6px;
          }
          .scrollbar-brand-customizable::-webkit-scrollbar-thumb {
            background: var(--scrollbar-brand-primary);
            border-radius: 6px;
            border: 2px solid var(--scrollbar-brand-light);
            transition: all 0.3s ease;
          }
          .scrollbar-brand-customizable::-webkit-scrollbar-thumb:hover {
            background: color-mix(in srgb, var(--scrollbar-brand-primary) 80%, black 20%);
            border: 1px solid var(--scrollbar-brand-light);
            box-shadow: 0 0 8px color-mix(in srgb, var(--scrollbar-brand-primary) 50%, transparent 50%);
          }

          /* Firefox compatibility */
          .scrollbar-brand-customizable {
            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-brand-primary) var(--scrollbar-brand-light);
          }
        `
      },
      {
        id: 'interactive-enhanced',
        name: 'data.components.advanced.scrollbar-thumb.variants.interactive-enhanced.name',
        description: 'data.components.advanced.scrollbar-thumb.variants.interactive-enhanced.description',
        demoHTML: `
          <div class="w-full max-w-lg bg-white rounded-xl shadow-xl p-6 border border-gray-200">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                I
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">交互增強滾動條</h3>
                <p class="text-sm text-gray-500">智能反饋与進度显示</p>
              </div>
            </div>

            <div class="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-indigo-700">滾動進度</span>
                <span class="scrollbar-progress-indicator text-sm font-bold text-purple-700">0%</span>
              </div>
              <div class="scrollbar-progress-bar h-2 bg-white rounded-full overflow-hidden">
                <div class="scrollbar-progress-fill h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300" style="width: 0%;"></div>
              </div>
            </div>

            <div class="scrollbar-interactive-enhanced h-64 overflow-y-auto rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-indigo-50 p-4" onscroll="updateScrollProgress(this)">
              <div class="space-y-4">
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-indigo-100 shadow-sm">
                  <h4 class="font-semibold text-indigo-700 mb-2">🎯 智能交互</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">這個滾動條具备智能交互功能，包括實時的滾動進度显示、動態寬度調整，以及多层次的視覺反饋系統。</p>
                </div>
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-purple-100 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">📊 進度指示</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">頂部的進度條會根据滾動位置實時更新，让用戶清楚知道當前瀏覽進度，提升長內容的閱讀体驗。</p>
                </div>
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-indigo-100 shadow-sm">
                  <h4 class="font-semibold text-indigo-700 mb-2">🔄 動態適應</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">滾動條會根据用戶的交互狀態動態調整外觀：正常時較細、懸停時變寬、拖動時增強視覺效果。</p>
                </div>
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-purple-100 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">✨ 微動画</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">集成了微妙的動画效果，包括懸停時的脈衝效果、拖動時的阴影增強，以及平滑的尺寸變化動画。</p>
                </div>
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-indigo-100 shadow-sm">
                  <h4 class="font-semibold text-indigo-700 mb-2">🎨 視覺层次</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">通過漸變背景、多重阴影、边框高光等技術創造豐富的視覺层次，让滾動條成為界面的亮點。</p>
                </div>
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-purple-100 shadow-sm">
                  <h4 class="font-semibold text-purple-700 mb-2">🔧 技術細節</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">使用現代CSS特性如 backdrop-filter、CSS變量、動画关鍵幀，結合JavaScript實現完整的交互体驗。</p>
                </div>
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-indigo-100 shadow-sm">
                  <h4 class="font-semibold text-indigo-700 mb-2">📱 觸摸优化</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">針對觸摸设备优化了交互区域大小和響應靈敏度，確保在移動设备上也能提供优秀的用戶体驗。</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>智能交互 • 進度显示 • 動態反饋</span>
              <span>增強体驗</span>
            </div>
          </div>

          <script>
            function updateScrollProgress(element) {
              const scrollTop = element.scrollTop;
              const scrollHeight = element.scrollHeight - element.clientHeight;
              const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

              const progressFill = document.querySelector('.scrollbar-progress-fill');
              const progressIndicator = document.querySelector('.scrollbar-progress-indicator');

              if (progressFill) progressFill.style.width = progress + '%';
              if (progressIndicator) progressIndicator.textContent = Math.round(progress) + '%';
            }
          </script>
        `,
        customStyles: `
          .scrollbar-interactive-enhanced::-webkit-scrollbar {
            width: 8px;
            transition: width 0.3s ease;
          }
          .scrollbar-interactive-enhanced::-webkit-scrollbar-track {
            background: linear-gradient(180deg, #f8fafc, #e0e7ff);
            border-radius: 10px;
            border: 1px solid rgba(99, 102, 241, 0.2);
          }
          .scrollbar-interactive-enhanced::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #6366f1, #8b5cf6);
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow:
              0 2px 8px rgba(99, 102, 241, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            animation: subtle-pulse 3s ease-in-out infinite;
          }
          .scrollbar-interactive-enhanced::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #4f46e5, #7c3aed);
            box-shadow:
              0 4px 16px rgba(99, 102, 241, 0.4),
              0 0 20px rgba(139, 92, 246, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.5);
            animation: enhanced-pulse 1.5s ease-in-out infinite;
          }
          .scrollbar-interactive-enhanced:hover::-webkit-scrollbar {
            width: 12px;
          }
          .scrollbar-interactive-enhanced::-webkit-scrollbar-thumb:active {
            background: linear-gradient(180deg, #3730a3, #6b21a8);
            box-shadow:
              0 6px 20px rgba(99, 102, 241, 0.5),
              0 0 30px rgba(139, 92, 246, 0.4),
              inset 0 2px 4px rgba(0, 0, 0, 0.2);
            transform: scale(1.1);
          }

          @keyframes subtle-pulse {
            0%, 100% {
              box-shadow:
                0 2px 8px rgba(99, 102, 241, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            }
            50% {
              box-shadow:
                0 3px 12px rgba(99, 102, 241, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
            }
          }

          @keyframes enhanced-pulse {
            0%, 100% {
              box-shadow:
                0 4px 16px rgba(99, 102, 241, 0.4),
                0 0 20px rgba(139, 92, 246, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
            }
            50% {
              box-shadow:
                0 6px 20px rgba(99, 102, 241, 0.5),
                0 0 30px rgba(139, 92, 246, 0.4),
                inset 0 2px 0 rgba(255, 255, 255, 0.6);
            }
          }

          /* Firefox compatibility */
          .scrollbar-interactive-enhanced {
            scrollbar-width: thin;
            scrollbar-color: #6366f1 #e0e7ff;
          }
        `
      }
    ]
  },
  {
    id: 'kanban-board',
    title: 'data.components.advanced.kanban-board.title',
    description: 'data.components.advanced.kanban-board.description',
    demoHTML: `
      <div class="relative w-full h-[400px] bg-white p-6 overflow-hidden">
        <!-- 三欄看板佈局 -->
        <div class="grid grid-cols-3 gap-6 h-full">

          <!-- TO DO 欄 -->
          <div class="flex flex-col gap-3 border-r border-gray-200 pr-4">
            <div class="h-20 bg-black rounded shadow-sm"></div>
            <div class="h-20 bg-black rounded shadow-sm"></div>
            <div class="h-20 bg-black rounded shadow-sm"></div>
          </div>

          <!-- IN PROGRESS 欄 -->
          <div class="flex flex-col gap-3 border-r border-gray-200 pr-4">
            <div class="h-20 bg-black rounded shadow-sm"></div>
            <div class="h-20 bg-black rounded shadow-sm"></div>
          </div>

          <!-- DONE 欄 -->
          <div class="flex flex-col gap-3">
            <div class="h-20 bg-gray-800 rounded shadow-sm"></div>
            <div class="h-20 bg-gray-800 rounded shadow-sm"></div>
            <div class="h-20 bg-gray-800 rounded shadow-sm"></div>
            <div class="h-20 bg-gray-800 rounded shadow-sm"></div>
          </div>

        </div>

        <!-- 極淡网格背景 -->
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>
      </div>
    `,
    customStyles: ``
  },
  {
    id: 'code-editor',
    title: 'data.components.advanced.code-editor.title',
    description: 'data.components.advanced.code-editor.description',
    demoHTML: `
      <div class="relative w-full h-[400px] bg-white overflow-hidden">
        <!-- 双面板佈局 -->
        <div class="grid grid-cols-2 gap-px bg-gray-200 h-full">

          <!-- 左側：編輯器面板 -->
          <div class="bg-gray-50 p-4 flex flex-col gap-2">
            <!-- 工具欄 -->
            <div class="flex gap-2 mb-2 pb-2 border-b border-gray-300">
              <div class="w-2 h-2 rounded-full bg-black"></div>
              <div class="w-2 h-2 rounded-full bg-black"></div>
              <div class="w-2 h-2 rounded-full bg-black"></div>
            </div>

            <!-- 代碼行（黑白條紋模擬） -->
            <div class="flex gap-2">
              <div class="w-1 h-1 rounded-full bg-gray-400"></div>
              <div class="flex-1 h-3 bg-black rounded-sm"></div>
            </div>
            <div class="flex gap-2">
              <div class="w-1 h-1 rounded-full bg-gray-400"></div>
              <div class="flex-1 h-3 bg-black rounded-sm w-3/4"></div>
            </div>
            <div class="flex gap-2">
              <div class="w-1 h-1 rounded-full bg-gray-400"></div>
              <div class="flex-1 h-3 bg-black rounded-sm w-5/6"></div>
            </div>
            <div class="flex gap-2">
              <div class="w-1 h-1 rounded-full bg-gray-400"></div>
              <div class="flex-1 h-3 bg-black rounded-sm w-2/3"></div>
            </div>
            <div class="flex gap-2">
              <div class="w-1 h-1 rounded-full bg-gray-400"></div>
              <div class="flex-1 h-3 bg-black rounded-sm"></div>
            </div>
            <div class="flex gap-2">
              <div class="w-1 h-1 rounded-full bg-gray-400"></div>
              <div class="flex-1 h-3 bg-black rounded-sm w-4/5"></div>
            </div>
          </div>

          <!-- 右側：預覽面板 -->
          <div class="bg-white p-6 flex flex-col items-center justify-center gap-4">
            <!-- 渲染效果模擬 -->
            <div class="w-32 h-20 border-2 border-black rounded"></div>
            <div class="w-full max-w-xs space-y-2">
              <div class="h-2 bg-black rounded w-3/4"></div>
              <div class="h-2 bg-gray-400 rounded w-full"></div>
              <div class="h-2 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>

        </div>

        <!-- 極淡网格背景 -->
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>
      </div>
    `,
    customStyles: ``
  },
  {
    id: 'query-builder',
    title: 'data.components.advanced.query-builder.title',
    description: 'data.components.advanced.query-builder.description',
    demoHTML: `
      <div class="relative w-full h-[400px] bg-white p-8 flex items-center justify-center overflow-hidden">
        <!-- 樹狀條件結構 -->
        <div class="flex flex-col items-center gap-6">

          <!-- 根節點 AND -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-md">
              <div class="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <!-- 垂直連接线 -->
            <div class="w-px h-12 bg-gray-400"></div>
          </div>

          <!-- 第二层：分支 -->
          <div class="flex items-start gap-20">
            <!-- 左分支：條件卡片 -->
            <div class="flex flex-col items-center gap-4">
              <div class="w-px h-8 bg-gray-400"></div>
              <div class="w-24 h-16 bg-black rounded shadow-md"></div>
            </div>

            <!-- 右分支：OR 節點 -->
            <div class="flex flex-col items-center gap-4">
              <div class="w-px h-8 bg-gray-400"></div>
              <div class="w-10 h-10 rounded-full border-2 border-gray-600 bg-white flex items-center justify-center shadow-sm">
                <div class="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              </div>
              <div class="w-px h-8 bg-gray-400"></div>

              <!-- OR 節點的子條件 -->
              <div class="flex gap-12">
                <div class="w-24 h-16 bg-black rounded shadow-md"></div>
                <div class="w-24 h-16 bg-black rounded shadow-md"></div>
              </div>
            </div>
          </div>

          <!-- 水平連接线 -->
          <div class="absolute top-32 left-1/2 w-40 h-px bg-gray-400 -translate-x-1/2"></div>

        </div>

        <!-- 極淡网格背景 -->
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>
      </div>
    `,
    customStyles: ``
  },
  {
    id: 'map-picker',
    title: 'data.components.advanced.map-picker.title',
    description: 'data.components.advanced.map-picker.description',
    demoHTML: `
      <div class="relative w-full h-[450px] bg-white overflow-hidden flex flex-col">

        <!-- 地圖区域 -->
        <div class="relative flex-1 bg-gray-50 p-4">
          <!-- CSS Grid 网格地圖 -->
          <div class="grid grid-cols-8 grid-rows-5 gap-px bg-gray-300 h-full rounded overflow-hidden">
            <!-- 网格單元 -->
            ${Array(40).fill(0).map((_, i) => `
              <div class="bg-gray-100 relative">
                ${[8, 15, 23].includes(i) ? '<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full shadow-md"></div>' : ''}
              </div>
            `).join('')}
          </div>

          <!-- 搜索框 -->
          <div class="absolute top-6 left-6 right-6">
            <div class="bg-white rounded shadow-lg border border-gray-200 p-2 flex items-center gap-2">
              <div class="w-2 h-2 bg-black rounded-full"></div>
              <div class="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>

        <!-- 地點列表区域 -->
        <div class="border-t border-gray-200 p-4 space-y-2 bg-white">
          <div class="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
            <div class="w-2 h-2 rounded-full border border-gray-400"></div>
            <div class="flex-1 h-2 bg-gray-300 rounded w-2/3"></div>
          </div>
          <div class="flex items-center gap-3 p-2 rounded bg-gray-100">
            <div class="w-2 h-2 rounded-full bg-black"></div>
            <div class="flex-1 h-2 bg-black rounded w-3/4"></div>
          </div>
          <div class="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
            <div class="w-2 h-2 rounded-full border border-gray-400"></div>
            <div class="flex-1 h-2 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>

        <!-- 極淡网格背景 -->
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>
      </div>
    `,
    customStyles: ``
  }
];