// 反饋組件 - Feedback Components
export const feedbackComponents = [
  {
    id: 'alert-messages',
    title: 'data.components.feedback.alert-messages.title',
    description: 'data.components.feedback.alert-messages.description',
    // 五種 UI 風格设計
    variants: [
      // 1. Minimalism - 極简主義
      {
        id: 'minimalism',
        name: 'data.components.feedback.alert-messages.variants.minimalism.name',
        description: 'data.components.feedback.alert-messages.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-4">
            <!-- Success Alert -->
            <div class="alert-minimalism bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 mb-1">Success</h4>
                <p class="text-sm text-gray-600">Your changes have been saved successfully</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Alert -->
            <div class="alert-minimalism bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 mb-1">Warning</h4>
                <p class="text-sm text-gray-600">Your session will expire in 5 minutes</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Alert -->
            <div class="alert-minimalism bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <div class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 mb-1">Error</h4>
                <p class="text-sm text-gray-600">Failed to upload file. Please try again</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Alert -->
            <div class="alert-minimalism bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <div class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 mb-1">Information</h4>
                <p class="text-sm text-gray-600">New features are available. Check them out!</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .alert-minimalism {
            animation: fadeIn 0.5s ease-out;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          }
          .alert-minimalism:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }
        `
      },

      // 2. Glassmorphism - 玻璃態
      {
        id: 'glassmorphism',
        name: 'data.components.feedback.alert-messages.variants.glassmorphism.name',
        description: 'data.components.feedback.alert-messages.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-4" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 1rem;">
            <!-- Success Alert Glass -->
            <div class="alert-glass alert-glass-success">
              <div class="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-white mb-1">Success</h4>
                <p class="text-sm text-white/90">Your changes have been saved successfully</p>
              </div>
              <button class="text-white/70 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Alert Glass -->
            <div class="alert-glass alert-glass-warning">
              <div class="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-white mb-1">Warning</h4>
                <p class="text-sm text-white/90">Your session will expire in 5 minutes</p>
              </div>
              <button class="text-white/70 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Alert Glass -->
            <div class="alert-glass alert-glass-error">
              <div class="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-white mb-1">Error</h4>
                <p class="text-sm text-white/90">Failed to upload file. Please try again</p>
              </div>
              <button class="text-white/70 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Alert Glass -->
            <div class="alert-glass alert-glass-info">
              <div class="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-white mb-1">Information</h4>
                <p class="text-sm text-white/90">New features are available. Check them out!</p>
              </div>
              <button class="text-white/70 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }
          .alert-glass {
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          .alert-glass:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
          }
        `
      },

      // 3. Neo-Brutalism - 新粗野主義
      {
        id: 'neo-brutalism',
        name: 'data.components.feedback.alert-messages.variants.neo-brutalism.name',
        description: 'data.components.feedback.alert-messages.variants.neo-brutalism.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-6">
            <!-- Success Alert Brutal -->
            <div class="alert-brutal alert-brutal-success">
              <div class="w-6 h-6 bg-black rounded-none flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-black text-black mb-1 uppercase text-sm">Success</h4>
                <p class="text-sm text-black font-bold">Your changes have been saved!</p>
              </div>
              <button class="text-black hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Alert Brutal -->
            <div class="alert-brutal alert-brutal-warning">
              <div class="w-6 h-6 bg-black rounded-none flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-black text-black mb-1 uppercase text-sm">Warning</h4>
                <p class="text-sm text-black font-bold">Session expires in 5 minutes</p>
              </div>
              <button class="text-black hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Alert Brutal -->
            <div class="alert-brutal alert-brutal-error">
              <div class="w-6 h-6 bg-black rounded-none flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-black text-black mb-1 uppercase text-sm">Error</h4>
                <p class="text-sm text-black font-bold">Upload failed. Try again!</p>
              </div>
              <button class="text-black hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Alert Brutal -->
            <div class="alert-brutal alert-brutal-info">
              <div class="w-6 h-6 bg-black rounded-none flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-black text-black mb-1 uppercase text-sm">Info</h4>
                <p class="text-sm text-black font-bold">New features available!</p>
              </div>
              <button class="text-black hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes brutalistBounce {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-5px, -5px); }
            50% { transform: translate(0, 0); }
            75% { transform: translate(5px, 5px); }
          }
          .alert-brutal {
            border: 4px solid #000;
            padding: 1.25rem;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            position: relative;
            animation: brutalistBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .alert-brutal-success {
            background: #4ade80;
            box-shadow: 8px 8px 0 #000;
          }
          .alert-brutal-warning {
            background: #fbbf24;
            box-shadow: 8px 8px 0 #000;
          }
          .alert-brutal-error {
            background: #f87171;
            box-shadow: 8px 8px 0 #000;
          }
          .alert-brutal-info {
            background: #60a5fa;
            box-shadow: 8px 8px 0 #000;
          }
          .alert-brutal:hover {
            transform: translate(-2px, -2px);
            box-shadow: 10px 10px 0 #000;
          }
        `
      },

      // 4. Neumorphism - 新擬物風格
      {
        id: 'neumorphism',
        name: 'data.components.feedback.alert-messages.variants.neumorphism.name',
        description: 'data.components.feedback.alert-messages.variants.neumorphism.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-5" style="background: #e0e5ec; padding: 2rem; border-radius: 1rem;">
            <!-- Success Alert Neomorph -->
            <div class="alert-neomorph">
              <div class="neomorph-icon neomorph-icon-success">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800 mb-1">Success</h4>
                <p class="text-sm text-gray-600">Your changes have been saved successfully</p>
              </div>
              <button class="neomorph-close">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Alert Neomorph -->
            <div class="alert-neomorph">
              <div class="neomorph-icon neomorph-icon-warning">
                <svg class="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800 mb-1">Warning</h4>
                <p class="text-sm text-gray-600">Your session will expire in 5 minutes</p>
              </div>
              <button class="neomorph-close">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Alert Neomorph -->
            <div class="alert-neomorph">
              <div class="neomorph-icon neomorph-icon-error">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800 mb-1">Error</h4>
                <p class="text-sm text-gray-600">Failed to upload file. Please try again</p>
              </div>
              <button class="neomorph-close">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Alert Neomorph -->
            <div class="alert-neomorph">
              <div class="neomorph-icon neomorph-icon-info">
                <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800 mb-1">Information</h4>
                <p class="text-sm text-gray-600">New features are available. Check them out!</p>
              </div>
              <button class="neomorph-close">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          .alert-neomorph {
            background: #e0e5ec;
            border-radius: 16px;
            padding: 1.25rem;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            box-shadow:
              9px 9px 16px rgba(163, 177, 198, 0.6),
              -9px -9px 16px rgba(255, 255, 255, 0.8);
            animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            transition: all 0.3s ease;
          }
          .alert-neomorph:hover {
            box-shadow:
              6px 6px 12px rgba(163, 177, 198, 0.5),
              -6px -6px 12px rgba(255, 255, 255, 0.9);
          }
          .neomorph-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow:
              inset 4px 4px 8px rgba(163, 177, 198, 0.4),
              inset -4px -4px 8px rgba(255, 255, 255, 0.7);
          }
          .neomorph-close {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e0e5ec;
            box-shadow:
              3px 3px 6px rgba(163, 177, 198, 0.4),
              -3px -3px 6px rgba(255, 255, 255, 0.7);
            transition: all 0.2s ease;
          }
          .neomorph-close:hover {
            box-shadow:
              inset 2px 2px 4px rgba(163, 177, 198, 0.4),
              inset -2px -2px 4px rgba(255, 255, 255, 0.7);
          }
        `
      },

      // 5. Material Design Inspired - Material 设計風格
      {
        id: 'material',
        name: 'data.components.feedback.alert-messages.variants.material.name',
        description: 'data.components.feedback.alert-messages.variants.material.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-4">
            <!-- Success Alert Material -->
            <div class="alert-material alert-material-success">
              <div class="material-icon-container material-icon-success">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-900 mb-1">Success</h4>
                <p class="text-sm text-gray-700">Your changes have been saved successfully</p>
              </div>
              <button class="material-close">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Alert Material -->
            <div class="alert-material alert-material-warning">
              <div class="material-icon-container material-icon-warning">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-900 mb-1">Warning</h4>
                <p class="text-sm text-gray-700">Your session will expire in 5 minutes</p>
              </div>
              <button class="material-close">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Alert Material -->
            <div class="alert-material alert-material-error">
              <div class="material-icon-container material-icon-error">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-900 mb-1">Error</h4>
                <p class="text-sm text-gray-700">Failed to upload file. Please try again</p>
              </div>
              <button class="material-close">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Alert Material -->
            <div class="alert-material alert-material-info">
              <div class="material-icon-container material-icon-info">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-900 mb-1">Information</h4>
                <p class="text-sm text-gray-700">New features are available. Check them out!</p>
              </div>
              <button class="material-close">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes ripple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(4); opacity: 0; }
          }
          .alert-material {
            background: white;
            border-radius: 8px;
            padding: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          .alert-material-success {
            box-shadow:
              0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(76, 175, 80, 0.1);
          }
          .alert-material-warning {
            box-shadow:
              0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(255, 152, 0, 0.1);
          }
          .alert-material-error {
            box-shadow:
              0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(244, 67, 54, 0.1);
          }
          .alert-material-info {
            box-shadow:
              0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(33, 150, 243, 0.1);
          }
          .alert-material:hover {
            box-shadow:
              0 4px 8px rgba(0, 0, 0, 0.16),
              0 2px 4px rgba(0, 0, 0, 0.12);
          }
          .material-icon-container {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .material-icon-success { background: #4caf50; }
          .material-icon-warning { background: #ff9800; }
          .material-icon-error { background: #f44336; }
          .material-icon-info { background: #2196f3; }
          .material-close {
            padding: 0.25rem;
            border-radius: 50%;
            transition: background-color 0.2s;
            position: relative;
          }
          .material-close:hover {
            background: rgba(0, 0, 0, 0.04);
          }
          .material-close:active::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.2);
            animation: ripple 0.6s ease-out;
          }
        `
      }
    ]
  },
  {
    id: 'toast-notifications',
    title: 'data.components.feedback.toast-notifications.title',
    description: 'data.components.feedback.toast-notifications.description',
    demoHTML: `
      <div class="w-full max-w-md mx-auto">
        <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 text-center border border-purple-100">
          <div class="mb-4">
            <svg class="w-16 h-16 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">5 Unique Toast Styles</h3>
          <p class="text-sm text-gray-600 mb-4">Click to explore different toast notification variants with various animations and visual effects</p>
          <div class="flex flex-wrap gap-2 justify-center text-xs">
            <span class="px-3 py-1 bg-white rounded-full text-purple-700 font-medium shadow-sm">Minimalism</span>
            <span class="px-3 py-1 bg-white rounded-full text-purple-700 font-medium shadow-sm">Material</span>
            <span class="px-3 py-1 bg-white rounded-full text-purple-700 font-medium shadow-sm">Glass</span>
            <span class="px-3 py-1 bg-white rounded-full text-purple-700 font-medium shadow-sm">Neomorph</span>
            <span class="px-3 py-1 bg-white rounded-full text-purple-700 font-medium shadow-sm">Bootstrap 5</span>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    variants: [
      // 1. Minimalism Toast - Slide-in from right
      {
        id: 'minimalism',
        name: 'data.components.feedback.toast-notifications.variants.minimalism.name',
        description: 'data.components.feedback.toast-notifications.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-3">
            <!-- Success Toast -->
            <div class="toast-minimal">
              <div class="toast-minimal-icon toast-minimal-success">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-900 mb-0.5">Success</h4>
                <p class="text-xs text-gray-600">Your file has been uploaded successfully</p>
              </div>
              <button class="toast-minimal-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Toast -->
            <div class="toast-minimal" style="animation-delay: 0.1s">
              <div class="toast-minimal-icon toast-minimal-error">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-900 mb-0.5">Error</h4>
                <p class="text-xs text-gray-600">Failed to save changes. Please try again</p>
              </div>
              <button class="toast-minimal-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Toast -->
            <div class="toast-minimal" style="animation-delay: 0.2s">
              <div class="toast-minimal-icon toast-minimal-warning">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-900 mb-0.5">Warning</h4>
                <p class="text-xs text-gray-600">Your session will expire in 5 minutes</p>
              </div>
              <button class="toast-minimal-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Toast -->
            <div class="toast-minimal" style="animation-delay: 0.3s">
              <div class="toast-minimal-icon toast-minimal-info">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-900 mb-0.5">Information</h4>
                <p class="text-xs text-gray-600">New update is available. Click to learn more</p>
              </div>
              <button class="toast-minimal-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .toast-minimal {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            transition: all 0.2s;
          }

          .toast-minimal:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(-2px);
          }

          .toast-minimal-icon {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .toast-minimal-success {
            background: #10b981;
          }

          .toast-minimal-error {
            background: #ef4444;
          }

          .toast-minimal-warning {
            background: #f59e0b;
          }

          .toast-minimal-info {
            background: #3b82f6;
          }

          .toast-minimal-close {
            color: #9ca3af;
            transition: color 0.2s;
            padding: 0.125rem;
          }

          .toast-minimal-close:hover {
            color: #1f2937;
          }
        `
      },

      // 2. Material Design Toast - Slide-up from bottom
      {
        id: 'material',
        name: 'data.components.feedback.toast-notifications.variants.material.name',
        description: 'data.components.feedback.toast-notifications.variants.material.description',
        demoHTML: `
          <div class="w-full max-w-md space-y-3">
            <!-- Success Snackbar -->
            <div class="toast-material toast-material-success">
              <div class="flex items-start gap-3 flex-1">
                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <div class="flex-1">
                  <p class="text-sm font-medium text-white">File uploaded successfully</p>
                </div>
              </div>
              <button class="toast-material-action">VIEW</button>
            </div>

            <!-- Error Snackbar -->
            <div class="toast-material toast-material-error" style="animation-delay: 0.1s">
              <div class="flex items-start gap-3 flex-1">
                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
                <div class="flex-1">
                  <p class="text-sm font-medium text-white">Connection failed</p>
                </div>
              </div>
              <button class="toast-material-action">RETRY</button>
            </div>

            <!-- Info Snackbar with Progress -->
            <div class="toast-material toast-material-info" style="animation-delay: 0.2s">
              <div class="flex-1">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-white mb-2">Downloading update...</p>
                    <div class="toast-material-progress">
                      <div class="toast-material-progress-bar" style="width: 45%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideUpScale {
            from {
              transform: translateY(100%) scale(0.9);
              opacity: 0;
            }
            to {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }

          .toast-material {
            border-radius: 0.25rem;
            padding: 0.875rem 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            animation: slideUpScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .toast-material:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
          }

          .toast-material-success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          }

          .toast-material-error {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          }

          .toast-material-info {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          }

          .toast-material-action {
            color: white;
            font-weight: 600;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
            padding: 0.375rem 0.75rem;
            border-radius: 0.25rem;
            transition: background 0.2s;
            white-space: nowrap;
          }

          .toast-material-action:hover {
            background: rgba(255, 255, 255, 0.15);
          }

          .toast-material-progress {
            width: 100%;
            height: 0.25rem;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 0.125rem;
            overflow: hidden;
          }

          .toast-material-progress-bar {
            height: 100%;
            background: white;
            border-radius: 0.125rem;
            transition: width 0.3s;
          }
        `
      },

      // 3. Glassmorphism Toast - Slide-down from top
      {
        id: 'glassmorphism',
        name: 'data.components.feedback.toast-notifications.variants.glassmorphism.name',
        description: 'data.components.feedback.toast-notifications.variants.glassmorphism.description',
        demoHTML: `
          <div class="toast-glass-container">
            <!-- Success Glass Toast -->
            <div class="toast-glass toast-glass-success">
              <div class="toast-glass-glow toast-glass-glow-green"></div>
              <div class="flex items-start gap-3 relative z-10">
                <div class="toast-glass-icon-bg toast-glass-icon-green">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-sm font-semibold text-white mb-1">Payment Successful</h4>
                  <p class="text-xs text-white/80">Your transaction has been completed</p>
                </div>
                <button class="text-white/70 hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Error Glass Toast -->
            <div class="toast-glass toast-glass-error" style="animation-delay: 0.15s">
              <div class="toast-glass-glow toast-glass-glow-red"></div>
              <div class="flex items-start gap-3 relative z-10">
                <div class="toast-glass-icon-bg toast-glass-icon-red">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-sm font-semibold text-white mb-1">Network Error</h4>
                  <p class="text-xs text-white/80">Unable to connect to server</p>
                </div>
                <button class="text-white/70 hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Info Glass Toast -->
            <div class="toast-glass toast-glass-info" style="animation-delay: 0.3s">
              <div class="toast-glass-glow toast-glass-glow-blue"></div>
              <div class="flex items-start gap-3 relative z-10">
                <div class="toast-glass-icon-bg toast-glass-icon-blue">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-sm font-semibold text-white mb-1">New Feature Available</h4>
                  <p class="text-xs text-white/80">Check out our latest updates</p>
                </div>
                <button class="toast-glass-action">Learn More</button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideDownBlur {
            from {
              transform: translateY(-100%);
              opacity: 0;
              filter: blur(10px);
            }
            to {
              transform: translateY(0);
              opacity: 1;
              filter: blur(0);
            }
          }

          .toast-glass-container {
            width: 100%;
            max-width: 28rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 1rem;
          }

          .toast-glass {
            position: relative;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.75rem;
            padding: 1rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            animation: slideDownBlur 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .toast-glass:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          }

          .toast-glass-glow {
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            opacity: 0.3;
            filter: blur(40px);
            pointer-events: none;
          }

          .toast-glass-glow-green {
            background: radial-gradient(circle, #10b981 0%, transparent 70%);
          }

          .toast-glass-glow-red {
            background: radial-gradient(circle, #ef4444 0%, transparent 70%);
          }

          .toast-glass-glow-blue {
            background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
          }

          .toast-glass-icon-bg {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .toast-glass-icon-green {
            background: linear-gradient(135deg, #10b981, #059669);
          }

          .toast-glass-icon-red {
            background: linear-gradient(135deg, #ef4444, #dc2626);
          }

          .toast-glass-icon-blue {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
          }

          .toast-glass-action {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.375rem 0.75rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: all 0.2s;
            white-space: nowrap;
          }

          .toast-glass-action:hover {
            background: rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.5);
          }
        `
      },

      // 4. Neumorphism Toast - Bounce-in
      {
        id: 'neumorphism',
        name: 'data.components.feedback.toast-notifications.variants.neumorphism.name',
        description: 'data.components.feedback.toast-notifications.variants.neumorphism.description',
        demoHTML: `
          <div class="toast-neomorph-container">
            <!-- Success Neomorphic Toast -->
            <div class="toast-neomorph">
              <div class="toast-neomorph-icon toast-neomorph-icon-success">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-gray-800 mb-1">Task Completed</h4>
                <p class="text-xs text-gray-600">All items have been processed</p>
              </div>
              <button class="toast-neomorph-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Neomorphic Toast -->
            <div class="toast-neomorph" style="animation-delay: 0.1s">
              <div class="toast-neomorph-icon toast-neomorph-icon-warning">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-gray-800 mb-1">Storage Warning</h4>
                <p class="text-xs text-gray-600">You're running low on storage space</p>
              </div>
              <button class="toast-neomorph-action">Manage</button>
            </div>

            <!-- Error Neomorphic Toast -->
            <div class="toast-neomorph" style="animation-delay: 0.2s">
              <div class="toast-neomorph-icon toast-neomorph-icon-error">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-gray-800 mb-1">Sync Failed</h4>
                <p class="text-xs text-gray-600">Unable to sync with cloud</p>
              </div>
              <button class="toast-neomorph-action">Retry</button>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .toast-neomorph-container {
            width: 100%;
            max-width: 26rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            background: #e0e5ec;
            border-radius: 1rem;
          }

          .toast-neomorph {
            background: #e0e5ec;
            border-radius: 1rem;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow:
              8px 8px 16px rgba(163, 177, 198, 0.6),
              -8px -8px 16px rgba(255, 255, 255, 0.5);
            animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transition: transform 0.2s;
          }

          .toast-neomorph:hover {
            transform: translateY(-2px);
          }

          .toast-neomorph-icon {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow:
              inset 4px 4px 8px rgba(163, 177, 198, 0.5),
              inset -4px -4px 8px rgba(255, 255, 255, 0.5);
          }

          .toast-neomorph-icon-success {
            color: #10b981;
          }

          .toast-neomorph-icon-warning {
            color: #f59e0b;
          }

          .toast-neomorph-icon-error {
            color: #ef4444;
          }

          .toast-neomorph-close {
            color: #94a3b8;
            padding: 0.25rem;
            border-radius: 0.375rem;
            transition: color 0.2s;
          }

          .toast-neomorph-close:hover {
            color: #64748b;
          }

          .toast-neomorph-action {
            background: #e0e5ec;
            color: #3b82f6;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            box-shadow:
              4px 4px 8px rgba(163, 177, 198, 0.5),
              -4px -4px 8px rgba(255, 255, 255, 0.5);
            transition: all 0.2s;
            white-space: nowrap;
          }

          .toast-neomorph-action:hover {
            box-shadow:
              2px 2px 4px rgba(163, 177, 198, 0.5),
              -2px -2px 4px rgba(255, 255, 255, 0.5);
          }

          .toast-neomorph-action:active {
            box-shadow:
              inset 2px 2px 4px rgba(163, 177, 198, 0.5),
              inset -2px -2px 4px rgba(255, 255, 255, 0.5);
          }
        `
      },

      // 5. Bootstrap 5 Modern Toast - Complex multi-stage animation
      {
        id: 'bootstrap',
        name: 'data.components.feedback.toast-notifications.variants.bootstrap.name',
        description: 'data.components.feedback.toast-notifications.variants.bootstrap.description',
        demoHTML: `
          <div class="w-full max-w-sm space-y-3">
            <!-- Success Bootstrap Toast -->
            <div class="toast-bootstrap toast-bootstrap-success">
              <div class="toast-bootstrap-header">
                <div class="flex items-center gap-2">
                  <div class="toast-bootstrap-icon">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <strong class="text-sm font-semibold">Success</strong>
                </div>
                <button class="toast-bootstrap-close" aria-label="Close">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div class="toast-bootstrap-body">
                Your settings have been saved successfully
              </div>
              <div class="toast-bootstrap-progress toast-bootstrap-progress-success"></div>
            </div>

            <!-- Warning Bootstrap Toast -->
            <div class="toast-bootstrap toast-bootstrap-warning" style="animation-delay: 0.1s">
              <div class="toast-bootstrap-header">
                <div class="flex items-center gap-2">
                  <div class="toast-bootstrap-icon">
                    <svg class="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <strong class="text-sm font-semibold">Warning</strong>
                </div>
                <button class="toast-bootstrap-close" aria-label="Close">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div class="toast-bootstrap-body">
                Your password will expire in 3 days
              </div>
              <div class="toast-bootstrap-progress toast-bootstrap-progress-warning"></div>
            </div>

            <!-- Error Bootstrap Toast -->
            <div class="toast-bootstrap toast-bootstrap-error" style="animation-delay: 0.2s">
              <div class="toast-bootstrap-header">
                <div class="flex items-center gap-2">
                  <div class="toast-bootstrap-icon">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <strong class="text-sm font-semibold">Error</strong>
                </div>
                <button class="toast-bootstrap-close" aria-label="Close">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div class="toast-bootstrap-body">
                Failed to connect to the server. Please try again
              </div>
              <div class="toast-bootstrap-actions">
                <button class="toast-bootstrap-btn-primary">Retry</button>
                <button class="toast-bootstrap-btn-secondary">Dismiss</button>
              </div>
              <div class="toast-bootstrap-progress toast-bootstrap-progress-error"></div>
            </div>

            <!-- Info Bootstrap Toast -->
            <div class="toast-bootstrap toast-bootstrap-info" style="animation-delay: 0.3s">
              <div class="toast-bootstrap-header">
                <div class="flex items-center gap-2">
                  <div class="toast-bootstrap-icon">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <strong class="text-sm font-semibold">Update Available</strong>
                </div>
                <span class="text-xs text-gray-600">just now</span>
              </div>
              <div class="toast-bootstrap-body">
                Version 2.0 is now available. Update to get the latest features
              </div>
              <div class="toast-bootstrap-actions">
                <button class="toast-bootstrap-btn-primary">Update Now</button>
              </div>
              <div class="toast-bootstrap-progress toast-bootstrap-progress-info"></div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes complexEntry {
            0% {
              transform: translateX(100%) rotateZ(5deg);
              opacity: 0;
            }
            50% {
              transform: translateX(-5%) rotateZ(-2deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateZ(0deg);
              opacity: 1;
            }
          }

          @keyframes progressBar {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }

          .toast-bootstrap {
            position: relative;
            background: white;
            border: 1px solid #dee2e6;
            border-radius: 0.375rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            overflow: hidden;
            animation: complexEntry 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .toast-bootstrap:hover {
            transform: translateY(-2px);
            box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.18);
          }

          .toast-bootstrap-header {
            padding: 0.75rem 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #dee2e6;
          }

          .toast-bootstrap-success .toast-bootstrap-header {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border-bottom-color: #86efac;
          }

          .toast-bootstrap-warning .toast-bootstrap-header {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-bottom-color: #fcd34d;
          }

          .toast-bootstrap-error .toast-bootstrap-header {
            background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
            border-bottom-color: #fca5a5;
          }

          .toast-bootstrap-info .toast-bootstrap-header {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border-bottom-color: #93c5fd;
          }

          .toast-bootstrap-icon {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .toast-bootstrap-success .toast-bootstrap-icon {
            background: #10b981;
          }

          .toast-bootstrap-warning .toast-bootstrap-icon {
            background: #fbbf24;
          }

          .toast-bootstrap-error .toast-bootstrap-icon {
            background: #ef4444;
          }

          .toast-bootstrap-info .toast-bootstrap-icon {
            background: #3b82f6;
          }

          .toast-bootstrap-close {
            color: #6b7280;
            transition: color 0.2s;
            padding: 0.125rem;
          }

          .toast-bootstrap-close:hover {
            color: #1f2937;
          }

          .toast-bootstrap-body {
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
            color: #4b5563;
            line-height: 1.5;
          }

          .toast-bootstrap-actions {
            padding: 0.5rem 1rem 0.75rem;
            display: flex;
            gap: 0.5rem;
          }

          .toast-bootstrap-btn-primary {
            background: #3b82f6;
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.375rem 0.75rem;
            border-radius: 0.25rem;
            transition: background 0.2s;
          }

          .toast-bootstrap-btn-primary:hover {
            background: #2563eb;
          }

          .toast-bootstrap-btn-secondary {
            background: transparent;
            color: #6b7280;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.375rem 0.75rem;
            border-radius: 0.25rem;
            transition: color 0.2s;
          }

          .toast-bootstrap-btn-secondary:hover {
            color: #1f2937;
          }

          .toast-bootstrap-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 0.25rem;
            width: 100%;
            animation: progressBar 5s linear;
          }

          .toast-bootstrap-progress-success {
            background: #10b981;
          }

          .toast-bootstrap-progress-warning {
            background: #f59e0b;
          }

          .toast-bootstrap-progress-error {
            background: #ef4444;
          }

          .toast-bootstrap-progress-info {
            background: #3b82f6;
          }
        `
      }
    ]
  },
  {
    id: 'modal-dialog',
    title: 'data.components.feedback.modal-dialog.title',
    description: 'data.components.feedback.modal-dialog.description',
    variants: [
      // 1. Minimalism Modal
      {
        id: 'minimalism',
        name: 'data.components.feedback.modal-dialog.variants.minimalism.name',
        description: 'data.components.feedback.modal-dialog.variants.minimalism.description',
        demoHTML: `
          <div class="modal-minimalism-overlay">
            <div class="modal-minimalism-content">
              <button class="modal-minimalism-close" aria-label="Close">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h3 class="text-2xl font-light mb-4 text-black">Confirm Action</h3>
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Are you sure you want to delete this item? This action cannot be undone and all associated data will be permanently removed.
              </p>
              <div class="flex gap-3 justify-end">
                <button class="px-5 py-2 text-sm text-gray-700 hover:text-black transition-colors">
                  Cancel
                </button>
                <button class="px-5 py-2 text-sm bg-black text-white hover:bg-gray-800 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-minimalism-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            padding: 2rem 1rem;
            animation: modalFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-minimalism-overlay {
            position: fixed;
            inset: 0;
            padding: 0;
            min-height: 100vh;
          }
          .modal-minimalism-content {
            background: white;
            padding: 2rem;
            max-width: 100%;
            width: 100%;
            border: 1px solid #e5e7eb;
            position: relative;
            animation: modalScaleIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-minimalism-content {
            max-width: 28rem;
            width: 90%;
          }
          .modal-minimalism-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #6b7280;
            transition: color 0.2s;
          }
          .modal-minimalism-close:hover {
            color: #000;
          }
          @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalScaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `
      },

      // 2. Material Design Modal
      {
        id: 'material',
        name: 'data.components.feedback.modal-dialog.variants.material.name',
        description: 'data.components.feedback.modal-dialog.variants.material.description',
        demoHTML: `
          <div class="modal-material-overlay">
            <div class="modal-material-content">
              <div class="modal-material-header">
                <h3 class="text-xl font-semibold text-white">Payment Confirmation</h3>
                <button class="text-white/80 hover:text-white transition-colors" aria-label="Close">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div class="modal-material-body">
                <div class="flex items-start gap-3 mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                      <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 mb-2">You're about to make a payment of <strong>$49.99</strong></p>
                    <p class="text-sm text-gray-500">This charge will appear on your statement as "SUBSCRIPTION"</p>
                  </div>
                </div>
                <div class="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm text-purple-800">
                  <strong>Note:</strong> Your subscription will auto-renew monthly
                </div>
              </div>
              <div class="modal-material-footer">
                <button class="modal-material-btn-secondary">
                  Cancel
                </button>
                <button class="modal-material-btn-primary">
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-material-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 450px;
            padding: 2rem 1rem;
            animation: modalMaterialFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-material-overlay {
            position: fixed;
            inset: 0;
            padding: 0;
            min-height: 100vh;
          }
          .modal-material-content {
            background: white;
            border-radius: 0.75rem;
            max-width: 100%;
            width: 100%;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            animation: modalMaterialSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .preview-fullscreen .modal-material-content {
            max-width: 32rem;
            width: 90%;
          }
          .modal-material-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .modal-material-body {
            padding: 1.5rem;
          }
          .modal-material-footer {
            padding: 1rem 1.5rem;
            background: #f9fafb;
            display: flex;
            justify-content: flex-end;
            gap: 0.75rem;
          }
          .modal-material-btn-primary {
            padding: 0.625rem 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
          }
          .modal-material-btn-primary:hover {
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
            transform: translateY(-1px);
          }
          .modal-material-btn-secondary {
            padding: 0.625rem 1.5rem;
            color: #6b7280;
            font-weight: 500;
            transition: color 0.2s;
          }
          .modal-material-btn-secondary:hover {
            color: #111827;
          }
          @keyframes modalMaterialFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalMaterialSlideUp {
            from { opacity: 0; transform: translateY(2rem); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      },

      // 3. Glassmorphism Modal
      {
        id: 'glassmorphism',
        name: 'data.components.feedback.modal-dialog.variants.glassmorphism.name',
        description: 'data.components.feedback.modal-dialog.variants.glassmorphism.description',
        demoHTML: `
          <div class="modal-glass-overlay">
            <div class="modal-glass-content">
              <div class="flex justify-between items-start mb-6">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">Share Your Work</h3>
                  <p class="text-white/70 text-sm">Invite others to collaborate on this project</p>
                </div>
                <button class="text-white/70 hover:text-white transition-colors" aria-label="Close">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div class="space-y-4 mb-6">
                <div class="modal-glass-input-group">
                  <label class="block text-white/90 text-sm font-medium mb-2">Email Address</label>
                  <input type="email" placeholder="colleague@example.com" class="modal-glass-input" />
                </div>

                <div class="modal-glass-input-group">
                  <label class="block text-white/90 text-sm font-medium mb-2">Permission Level</label>
                  <select class="modal-glass-input">
                    <option>Can View</option>
                    <option>Can Edit</option>
                    <option>Admin</option>
                  </select>
                </div>

                <div class="modal-glass-checkbox">
                  <input type="checkbox" id="notify" class="w-4 h-4" />
                  <label for="notify" class="text-white/90 text-sm ml-2">Send notification email</label>
                </div>
              </div>

              <div class="flex gap-3">
                <button class="modal-glass-btn-secondary flex-1">
                  Cancel
                </button>
                <button class="modal-glass-btn-primary flex-1">
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-glass-overlay {
            position: relative;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 500px;
            padding: 2rem 1rem;
            animation: modalGlassFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-glass-overlay {
            position: fixed;
            inset: 0;
            padding: 0;
            min-height: 100vh;
          }
          .modal-glass-content {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem;
            padding: 2rem;
            max-width: 100%;
            width: 100%;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            animation: modalGlassZoomRotate 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .preview-fullscreen .modal-glass-content {
            max-width: 28rem;
            width: 90%;
          }
          .modal-glass-input {
            width: 100%;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.5rem;
            color: white;
            font-size: 0.875rem;
            transition: all 0.2s;
          }
          .modal-glass-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          .modal-glass-input:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
          }
          .modal-glass-checkbox {
            display: flex;
            align-items: center;
          }
          .modal-glass-btn-primary {
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.4);
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            transition: all 0.2s;
          }
          .modal-glass-btn-primary:hover {
            background: rgba(255, 255, 255, 0.35);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          .modal-glass-btn-secondary {
            padding: 0.75rem 1.5rem;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            transition: all 0.2s;
          }
          .modal-glass-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          @keyframes modalGlassFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalGlassZoomRotate {
            from {
              opacity: 0;
              transform: scale(0.8) rotate(2deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
        `
      },

      // 4. Neumorphism Modal
      {
        id: 'neumorphism',
        name: 'data.components.feedback.modal-dialog.variants.neumorphism.name',
        description: 'data.components.feedback.modal-dialog.variants.neumorphism.description',
        demoHTML: `
          <div class="modal-neomorph-overlay">
            <div class="modal-neomorph-content">
              <button class="modal-neomorph-close" aria-label="Close">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <div class="text-center mb-6">
                <div class="modal-neomorph-icon">
                  <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Update Available</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  A new version of the app is available with bug fixes and performance improvements.
                </p>
              </div>

              <div class="modal-neomorph-info mb-6">
                <div class="flex justify-between text-sm mb-2">
                  <span class="text-gray-600">Version</span>
                  <span class="font-semibold text-gray-800">2.5.0</span>
                </div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="text-gray-600">Size</span>
                  <span class="font-semibold text-gray-800">42.3 MB</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Release Date</span>
                  <span class="font-semibold text-gray-800">Oct 28, 2024</span>
                </div>
              </div>

              <div class="space-y-3">
                <button class="modal-neomorph-btn-primary w-full">
                  Update Now
                </button>
                <button class="modal-neomorph-btn-secondary w-full">
                  Remind Me Later
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-neomorph-overlay {
            position: relative;
            background: #e0e5ec;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 480px;
            padding: 2rem 1rem;
            animation: modalNeomorphFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-neomorph-overlay {
            position: fixed;
            inset: 0;
            padding: 0;
            min-height: 100vh;
          }
          .modal-neomorph-content {
            background: #e0e5ec;
            padding: 2rem;
            max-width: 100%;
            width: 100%;
            border-radius: 1.5rem;
            box-shadow:
              9px 9px 16px rgba(163, 177, 198, 0.6),
              -9px -9px 16px rgba(255, 255, 255, 0.5);
            position: relative;
            animation: modalNeomorphBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .preview-fullscreen .modal-neomorph-content {
            max-width: 26rem;
            width: 90%;
          }
          .modal-neomorph-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #7d8da9;
            box-shadow:
              4px 4px 8px rgba(163, 177, 198, 0.6),
              -4px -4px 8px rgba(255, 255, 255, 0.5);
            transition: all 0.2s;
          }
          .modal-neomorph-close:hover {
            box-shadow:
              inset 2px 2px 5px rgba(163, 177, 198, 0.6),
              inset -2px -2px 5px rgba(255, 255, 255, 0.5);
          }
          .modal-neomorph-icon {
            width: 4rem;
            height: 4rem;
            margin: 0 auto;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
              inset 4px 4px 8px rgba(163, 177, 198, 0.6),
              inset -4px -4px 8px rgba(255, 255, 255, 0.5);
          }
          .modal-neomorph-info {
            padding: 1rem;
            border-radius: 1rem;
            box-shadow:
              inset 3px 3px 6px rgba(163, 177, 198, 0.4),
              inset -3px -3px 6px rgba(255, 255, 255, 0.4);
          }
          .modal-neomorph-btn-primary {
            padding: 0.875rem 1.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(145deg, #5b9cf5, #4a7bc8);
            color: white;
            font-weight: 600;
            box-shadow:
              5px 5px 10px rgba(163, 177, 198, 0.6),
              -5px -5px 10px rgba(255, 255, 255, 0.5);
            transition: all 0.2s;
          }
          .modal-neomorph-btn-primary:hover {
            box-shadow:
              3px 3px 6px rgba(163, 177, 198, 0.6),
              -3px -3px 6px rgba(255, 255, 255, 0.5);
          }
          .modal-neomorph-btn-secondary {
            padding: 0.875rem 1.5rem;
            border-radius: 0.75rem;
            background: #e0e5ec;
            color: #7d8da9;
            font-weight: 600;
            box-shadow:
              5px 5px 10px rgba(163, 177, 198, 0.6),
              -5px -5px 10px rgba(255, 255, 255, 0.5);
            transition: all 0.2s;
          }
          .modal-neomorph-btn-secondary:hover {
            box-shadow:
              inset 2px 2px 5px rgba(163, 177, 198, 0.6),
              inset -2px -2px 5px rgba(255, 255, 255, 0.5);
          }
          @keyframes modalNeomorphFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalNeomorphBounce {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `
      },

      // 5. Bootstrap 5 Modal
      {
        id: 'bootstrap',
        name: 'data.components.feedback.modal-dialog.variants.bootstrap.name',
        description: 'data.components.feedback.modal-dialog.variants.bootstrap.description',
        demoHTML: `
          <div class="modal-bootstrap-overlay">
            <div class="modal-bootstrap-dialog">
              <div class="modal-bootstrap-content">
                <div class="modal-bootstrap-header">
                  <h5 class="modal-bootstrap-title">Create New Project</h5>
                  <button type="button" class="modal-bootstrap-close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-bootstrap-body">
                  <form>
                    <div class="mb-3">
                      <label for="projectName" class="form-label">Project Name</label>
                      <input type="text" class="modal-bootstrap-input" id="projectName" placeholder="Enter project name">
                    </div>
                    <div class="mb-3">
                      <label for="projectType" class="form-label">Project Type</label>
                      <select class="modal-bootstrap-input" id="projectType">
                        <option selected>Choose...</option>
                        <option value="1">Web Application</option>
                        <option value="2">Mobile App</option>
                        <option value="3">Desktop Software</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="projectDesc" class="form-label">Description</label>
                      <textarea class="modal-bootstrap-input" id="projectDesc" rows="3" placeholder="Brief description of your project"></textarea>
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" value="" id="makePublic">
                      <label class="form-check-label" for="makePublic">
                        Make this project public
                      </label>
                    </div>
                  </form>
                </div>
                <div class="modal-bootstrap-footer">
                  <button type="button" class="modal-bootstrap-btn-secondary">
                    Close
                  </button>
                  <button type="button" class="modal-bootstrap-btn-primary">
                    Create Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-bootstrap-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            min-height: 550px;
            animation: modalBootstrapFadeIn 0.15s linear;
          }
          .preview-fullscreen .modal-bootstrap-overlay {
            position: fixed;
            inset: 0;
            padding-top: 3rem;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            min-height: 100vh;
          }
          .modal-bootstrap-dialog {
            max-width: 100%;
            width: 100%;
            animation: modalBootstrapSlideDown 0.3s ease-out;
          }
          .preview-fullscreen .modal-bootstrap-dialog {
            max-width: 32rem;
            width: 90%;
          }
          .modal-bootstrap-content {
            background: white;
            border-radius: 0.375rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          }
          .modal-bootstrap-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.25rem;
            border-bottom: 1px solid #dee2e6;
          }
          .modal-bootstrap-title {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.5;
            color: #212529;
          }
          .modal-bootstrap-close {
            padding: 0.5rem;
            margin: -0.5rem -0.5rem -0.5rem auto;
            background: transparent;
            border: 0;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1;
            color: #000;
            opacity: 0.5;
            transition: opacity 0.15s;
          }
          .modal-bootstrap-close:hover {
            opacity: 0.75;
          }
          .modal-bootstrap-body {
            position: relative;
            flex: 1 1 auto;
            padding: 1.25rem;
          }
          .form-label {
            display: inline-block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            font-size: 0.875rem;
            color: #212529;
          }
          .modal-bootstrap-input {
            display: block;
            width: 100%;
            padding: 0.5rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            border: 1px solid #ced4da;
            border-radius: 0.375rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }
          .modal-bootstrap-input:focus {
            color: #212529;
            background-color: #fff;
            border-color: #86b7fe;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          }
          .mb-3 {
            margin-bottom: 1rem;
          }
          .form-check {
            display: block;
            min-height: 1.5rem;
            padding-left: 1.5em;
            margin-bottom: 0.125rem;
          }
          .form-check-input {
            width: 1em;
            height: 1em;
            margin-top: 0.25em;
            margin-left: -1.5em;
            vertical-align: top;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.25);
            appearance: none;
            border-radius: 0.25em;
          }
          .form-check-label {
            margin-left: 0.5rem;
            color: #212529;
          }
          .modal-bootstrap-footer {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
            padding: 1rem;
            border-top: 1px solid #dee2e6;
            gap: 0.5rem;
          }
          .modal-bootstrap-btn-primary {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #fff;
            background-color: #0d6efd;
            border: 1px solid #0d6efd;
            border-radius: 0.375rem;
            transition: all 0.15s ease-in-out;
          }
          .modal-bootstrap-btn-primary:hover {
            background-color: #0b5ed7;
            border-color: #0a58ca;
          }
          .modal-bootstrap-btn-secondary {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #fff;
            background-color: #6c757d;
            border: 1px solid #6c757d;
            border-radius: 0.375rem;
            transition: all 0.15s ease-in-out;
          }
          .modal-bootstrap-btn-secondary:hover {
            background-color: #5c636a;
            border-color: #565e64;
          }
          @keyframes modalBootstrapFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalBootstrapSlideDown {
            from {
              opacity: 0;
              transform: translateY(-3rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },

      // 6. Neo-Brutalism Modal
      {
        id: 'neo-brutalism',
        name: 'data.components.feedback.modal-dialog.variants.neo-brutalism.name',
        description: 'data.components.feedback.modal-dialog.variants.neo-brutalism.description',
        demoHTML: `
          <div class="modal-brutal-overlay">
            <div class="modal-brutal-content">
              <div class="modal-brutal-header">
                <h3 class="text-3xl font-black uppercase tracking-tight">Warning!</h3>
                <button class="modal-brutal-close" aria-label="Close">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div class="modal-brutal-body">
                <div class="bg-yellow-300 border-4 border-black p-4 mb-4">
                  <p class="font-bold text-lg">⚠️ This action cannot be undone!</p>
                </div>
                <p class="text-lg font-medium mb-6">
                  You are about to permanently delete your account and all associated data.
                  This includes your profile, posts, and settings.
                </p>
                <div class="bg-gray-100 border-3 border-black p-4 mb-6">
                  <label class="flex items-center gap-3 font-bold">
                    <input type="checkbox" class="w-5 h-5 border-3 border-black">
                    <span>I understand the consequences</span>
                  </label>
                </div>
              </div>
              <div class="modal-brutal-footer">
                <button class="modal-brutal-btn-secondary">
                  Cancel
                </button>
                <button class="modal-brutal-btn-danger">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-brutal-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            padding: 2rem 1rem;
            animation: modalBrutalFadeIn 0.2s ease-out;
          }
          .preview-fullscreen .modal-brutal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            min-height: 100vh;
          }
          .modal-brutal-content {
            background: #fff;
            border: 4px solid #000;
            box-shadow: 8px 8px 0 #000;
            max-width: 100%;
            width: 100%;
            animation: modalBrutalBounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          .preview-fullscreen .modal-brutal-content {
            max-width: 500px;
            width: 90%;
          }
          .modal-brutal-header {
            background: #ff3366;
            border-bottom: 4px solid #000;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .modal-brutal-header h3 {
            color: #fff;
            text-shadow: 3px 3px 0 #000;
          }
          .modal-brutal-close {
            background: #fff;
            border: 3px solid #000;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
          }
          .modal-brutal-close:hover {
            background: #000;
            color: #fff;
            transform: translate(2px, 2px);
          }
          .modal-brutal-body {
            padding: 2rem 1.5rem;
            color: #000;
          }
          .modal-brutal-footer {
            border-top: 4px solid #000;
            padding: 1.5rem;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            background: #f5f5f5;
          }
          .modal-brutal-btn-secondary,
          .modal-brutal-btn-danger {
            padding: 0.75rem 1.5rem;
            font-weight: 900;
            text-transform: uppercase;
            border: 3px solid #000;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.875rem;
            letter-spacing: 0.05em;
          }
          .modal-brutal-btn-secondary {
            background: #fff;
            color: #000;
          }
          .modal-brutal-btn-secondary:hover {
            background: #000;
            color: #fff;
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0 #000;
          }
          .modal-brutal-btn-danger {
            background: #ff3366;
            color: #fff;
          }
          .modal-brutal-btn-danger:hover {
            background: #000;
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0 #ff3366;
          }
          @keyframes modalBrutalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalBrutalBounce {
            0% {
              opacity: 0;
              transform: scale(0.3) rotate(-5deg);
            }
            50% {
              transform: scale(1.05) rotate(2deg);
            }
            70% {
              transform: scale(0.95) rotate(-1deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0);
            }
          }
        `
      },

      // 7. Cyberpunk Modal
      {
        id: 'cyberpunk',
        name: 'data.components.feedback.modal-dialog.variants.cyberpunk.name',
        description: 'data.components.feedback.modal-dialog.variants.cyberpunk.description',
        demoHTML: `
          <div class="modal-cyber-overlay">
            <div class="modal-cyber-content">
              <div class="modal-cyber-scanline"></div>
              <button class="modal-cyber-close" aria-label="Close">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <div class="modal-cyber-header">
                <div class="modal-cyber-icon">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-black uppercase tracking-widest">
                  Access<span class="text-cyan-400">_</span>Granted
                </h3>
                <div class="modal-cyber-subtitle">SYSTEM_v2.077</div>
              </div>

              <div class="modal-cyber-body">
                <div class="modal-cyber-message">
                  <div class="flex items-start gap-3 mb-4">
                    <div class="text-cyan-400 text-2xl">►</div>
                    <p class="text-gray-300 leading-relaxed">
                      Neural interface connection established. New encrypted message received
                      from <span class="text-pink-400 font-mono">PHANTOM_ZERO</span>.
                    </p>
                  </div>
                  <div class="modal-cyber-data-block">
                    <div class="text-xs text-cyan-400 mb-2 font-mono">ENCRYPTED_PAYLOAD:</div>
                    <div class="font-mono text-sm text-gray-400">
                      0x4A7F...9B3C<br/>
                      STATUS: VERIFIED<br/>
                      THREAT_LEVEL: LOW
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-cyber-footer">
                <button class="modal-cyber-btn-secondary">
                  <span class="modal-cyber-btn-glitch">Decline</span>
                </button>
                <button class="modal-cyber-btn-primary">
                  <span class="modal-cyber-btn-glitch">Accept Mission</span>
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-cyber-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            padding: 2rem 1rem;
            animation: modalCyberFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-cyber-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            min-height: 100vh;
          }
          .modal-cyber-content {
            background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 100%);
            border: 2px solid #00ffff;
            box-shadow:
              0 0 20px rgba(0, 255, 255, 0.5),
              0 0 40px rgba(255, 0, 255, 0.3),
              inset 0 0 60px rgba(0, 255, 255, 0.1);
            max-width: 100%;
            width: 100%;
            position: relative;
            overflow: hidden;
            animation: modalCyberSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .preview-fullscreen .modal-cyber-content {
            max-width: 550px;
            width: 90%;
          }
          .modal-cyber-scanline {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ffff, transparent);
            animation: scanline 2s linear infinite;
            opacity: 0.5;
          }
          @keyframes scanline {
            0% { transform: translateY(0); }
            100% { transform: translateY(500px); }
          }
          .modal-cyber-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid #00ffff;
            color: #00ffff;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            z-index: 10;
          }
          .modal-cyber-close:hover {
            background: #00ffff;
            color: #0a0e27;
            box-shadow: 0 0 15px #00ffff;
          }
          .modal-cyber-header {
            padding: 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(0, 255, 255, 0.3);
          }
          .modal-cyber-icon {
            display: inline-flex;
            padding: 1rem;
            background: rgba(0, 255, 255, 0.1);
            border: 2px solid #00ffff;
            color: #00ffff;
            margin-bottom: 1rem;
            clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%);
            animation: iconGlow 2s ease-in-out infinite;
          }
          @keyframes iconGlow {
            0%, 100% { filter: drop-shadow(0 0 5px #00ffff); }
            50% { filter: drop-shadow(0 0 15px #00ffff); }
          }
          .modal-cyber-header h3 {
            color: #fff;
            text-shadow: 0 0 10px #00ffff;
            margin-bottom: 0.5rem;
          }
          .modal-cyber-subtitle {
            color: #ff00ff;
            font-family: monospace;
            font-size: 0.75rem;
            letter-spacing: 0.2em;
          }
          .modal-cyber-body {
            padding: 2rem;
          }
          .modal-cyber-message {
            background: rgba(0, 0, 0, 0.3);
            border-left: 3px solid #00ffff;
            padding: 1.5rem;
          }
          .modal-cyber-data-block {
            background: rgba(0, 255, 255, 0.05);
            border: 1px solid rgba(0, 255, 255, 0.3);
            padding: 1rem;
            margin-top: 1rem;
          }
          .modal-cyber-footer {
            padding: 1.5rem 2rem;
            border-top: 1px solid rgba(0, 255, 255, 0.3);
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
          }
          .modal-cyber-btn-primary,
          .modal-cyber-btn-secondary {
            padding: 0.75rem 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            border: 2px solid;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            font-size: 0.875rem;
            letter-spacing: 0.1em;
            transition: all 0.3s;
          }
          .modal-cyber-btn-primary {
            background: rgba(0, 255, 255, 0.1);
            border-color: #00ffff;
            color: #00ffff;
          }
          .modal-cyber-btn-primary:hover {
            background: #00ffff;
            color: #0a0e27;
            box-shadow: 0 0 20px #00ffff;
          }
          .modal-cyber-btn-secondary {
            background: rgba(255, 0, 255, 0.1);
            border-color: #ff00ff;
            color: #ff00ff;
          }
          .modal-cyber-btn-secondary:hover {
            background: #ff00ff;
            color: #0a0e27;
            box-shadow: 0 0 20px #ff00ff;
          }
          @keyframes modalCyberFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalCyberSlideIn {
            from {
              opacity: 0;
              transform: translateY(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `
      },

      // 8. Bottom Sheet Modal
      {
        id: 'bottom-sheet',
        name: 'data.components.feedback.modal-dialog.variants.bottom-sheet.name',
        description: 'data.components.feedback.modal-dialog.variants.bottom-sheet.description',
        demoHTML: `
          <div class="modal-sheet-overlay">
            <div class="modal-sheet-content">
              <div class="modal-sheet-handle"></div>

              <div class="modal-sheet-header">
                <h3 class="text-xl font-semibold text-gray-900">Share Options</h3>
                <button class="text-gray-400 hover:text-gray-600" aria-label="Close">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div class="modal-sheet-body">
                <div class="modal-sheet-option">
                  <div class="modal-sheet-icon" style="background: #1DA1F2;">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Share on Twitter</div>
                    <div class="text-sm text-gray-500">Post to your timeline</div>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <div class="modal-sheet-option">
                  <div class="modal-sheet-icon" style="background: #0A66C2;">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Share on LinkedIn</div>
                    <div class="text-sm text-gray-500">Share with connections</div>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <div class="modal-sheet-option">
                  <div class="modal-sheet-icon" style="background: #25D366;">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Send via WhatsApp</div>
                    <div class="text-sm text-gray-500">Share with contacts</div>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <div class="modal-sheet-divider"></div>

                <div class="modal-sheet-option">
                  <div class="modal-sheet-icon" style="background: #6b7280;">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Copy Link</div>
                    <div class="text-sm text-gray-500">Copy to clipboard</div>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-sheet-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            padding: 2rem 1rem;
            animation: modalSheetOverlayFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-sheet-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            align-items: flex-end;
            padding: 0;
            min-height: 100vh;
          }
          .modal-sheet-content {
            background: #fff;
            border-radius: 12px;
            max-width: 100%;
            width: 100%;
            max-height: none;
            overflow-y: auto;
            animation: modalSheetSlideUp 0.4s cubic-bezier(0.32, 0.72, 0, 1);
          }
          .preview-fullscreen .modal-sheet-content {
            border-radius: 24px 24px 0 0;
            max-width: 640px;
            max-height: 85vh;
          }
          .modal-sheet-handle {
            width: 40px;
            height: 4px;
            background: #d1d5db;
            border-radius: 2px;
            margin: 12px auto 8px;
          }
          .modal-sheet-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e5e7eb;
          }
          .modal-sheet-body {
            padding: 0.5rem 0;
          }
          .modal-sheet-option {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          .modal-sheet-option:hover {
            background: #f9fafb;
          }
          .modal-sheet-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .modal-sheet-divider {
            height: 1px;
            background: #e5e7eb;
            margin: 0.5rem 1.5rem;
          }
          @keyframes modalSheetOverlayFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalSheetSlideUp {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },

      // 9. Side Drawer Modal
      {
        id: 'side-drawer',
        name: 'data.components.feedback.modal-dialog.variants.side-drawer.name',
        description: 'data.components.feedback.modal-dialog.variants.side-drawer.description',
        demoHTML: `
          <div class="modal-drawer-overlay">
            <div class="modal-drawer-content">
              <div class="modal-drawer-header">
                <h3 class="text-xl font-semibold text-gray-900">Filter Options</h3>
                <button class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div class="modal-drawer-body">
                <div class="modal-drawer-section">
                  <h4 class="modal-drawer-section-title">Category</h4>
                  <div class="space-y-2">
                    <label class="modal-drawer-checkbox">
                      <input type="checkbox" checked>
                      <span>All Products</span>
                      <span class="modal-drawer-badge">248</span>
                    </label>
                    <label class="modal-drawer-checkbox">
                      <input type="checkbox">
                      <span>Electronics</span>
                      <span class="modal-drawer-badge">89</span>
                    </label>
                    <label class="modal-drawer-checkbox">
                      <input type="checkbox">
                      <span>Clothing</span>
                      <span class="modal-drawer-badge">156</span>
                    </label>
                    <label class="modal-drawer-checkbox">
                      <input type="checkbox">
                      <span>Home & Garden</span>
                      <span class="modal-drawer-badge">73</span>
                    </label>
                  </div>
                </div>

                <div class="modal-drawer-divider"></div>

                <div class="modal-drawer-section">
                  <h4 class="modal-drawer-section-title">Price Range</h4>
                  <div class="space-y-4">
                    <div class="flex gap-3">
                      <input type="number" placeholder="Min" class="modal-drawer-input">
                      <span class="text-gray-500 self-center">—</span>
                      <input type="number" placeholder="Max" class="modal-drawer-input">
                    </div>
                    <div class="modal-drawer-slider-container">
                      <input type="range" min="0" max="1000" value="250" class="modal-drawer-slider">
                    </div>
                  </div>
                </div>

                <div class="modal-drawer-divider"></div>

                <div class="modal-drawer-section">
                  <h4 class="modal-drawer-section-title">Rating</h4>
                  <div class="space-y-2">
                    <label class="modal-drawer-radio">
                      <input type="radio" name="rating" checked>
                      <span class="flex items-center gap-1">
                        <span class="text-yellow-400">★★★★★</span>
                        <span class="text-sm text-gray-600">(5.0)</span>
                      </span>
                    </label>
                    <label class="modal-drawer-radio">
                      <input type="radio" name="rating">
                      <span class="flex items-center gap-1">
                        <span class="text-yellow-400">★★★★</span>
                        <span class="text-gray-300">☆</span>
                        <span class="text-sm text-gray-600">(4.0+)</span>
                      </span>
                    </label>
                    <label class="modal-drawer-radio">
                      <input type="radio" name="rating">
                      <span class="flex items-center gap-1">
                        <span class="text-yellow-400">★★★</span>
                        <span class="text-gray-300">☆☆</span>
                        <span class="text-sm text-gray-600">(3.0+)</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="modal-drawer-divider"></div>

                <div class="modal-drawer-section">
                  <h4 class="modal-drawer-section-title">Availability</h4>
                  <div class="space-y-2">
                    <label class="modal-drawer-checkbox">
                      <input type="checkbox" checked>
                      <span>In Stock</span>
                    </label>
                    <label class="modal-drawer-checkbox">
                      <input type="checkbox">
                      <span>Pre-order</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="modal-drawer-footer">
                <button class="modal-drawer-btn-secondary">
                  Reset All
                </button>
                <button class="modal-drawer-btn-primary">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .modal-drawer-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            padding: 2rem 1rem;
            animation: modalDrawerOverlayFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-drawer-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            align-items: stretch;
            justify-content: flex-end;
            padding: 0;
            min-height: 100vh;
          }
          .modal-drawer-content {
            background: #fff;
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
            animation: modalDrawerSlideIn 0.4s cubic-bezier(0.32, 0.72, 0, 1);
          }
          .preview-fullscreen .modal-drawer-content {
            max-width: 400px;
          }
          .modal-drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
          }
          .modal-drawer-body {
            flex: 1;
            overflow-y: auto;
            padding: 1.5rem;
          }
          .modal-drawer-section {
            margin-bottom: 1.5rem;
          }
          .modal-drawer-section-title {
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #6b7280;
            margin-bottom: 1rem;
          }
          .modal-drawer-checkbox,
          .modal-drawer-radio {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem;
            cursor: pointer;
            border-radius: 0.5rem;
            transition: background 0.2s;
          }
          .modal-drawer-checkbox:hover,
          .modal-drawer-radio:hover {
            background: #f9fafb;
          }
          .modal-drawer-checkbox input,
          .modal-drawer-radio input {
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
          .modal-drawer-checkbox span:first-of-type,
          .modal-drawer-radio span:first-of-type {
            flex: 1;
            font-size: 0.875rem;
            color: #374151;
          }
          .modal-drawer-badge {
            background: #f3f4f6;
            color: #6b7280;
            font-size: 0.75rem;
            padding: 0.125rem 0.5rem;
            border-radius: 9999px;
            font-weight: 500;
          }
          .modal-drawer-input {
            flex: 1;
            padding: 0.5rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            transition: all 0.2s;
          }
          .modal-drawer-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          .modal-drawer-slider-container {
            padding: 0 0.5rem;
          }
          .modal-drawer-slider {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #e5e7eb;
            outline: none;
            -webkit-appearance: none;
          }
          .modal-drawer-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .modal-drawer-divider {
            height: 1px;
            background: #e5e7eb;
            margin: 1.5rem 0;
          }
          .modal-drawer-footer {
            display: flex;
            gap: 0.75rem;
            padding: 1.5rem;
            border-top: 1px solid #e5e7eb;
            background: #f9fafb;
          }
          .modal-drawer-btn-primary,
          .modal-drawer-btn-secondary {
            flex: 1;
            padding: 0.75rem 1rem;
            font-weight: 500;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.875rem;
          }
          .modal-drawer-btn-primary {
            background: #3b82f6;
            color: #fff;
            border: none;
          }
          .modal-drawer-btn-primary:hover {
            background: #2563eb;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }
          .modal-drawer-btn-secondary {
            background: #fff;
            color: #6b7280;
            border: 1px solid #d1d5db;
          }
          .modal-drawer-btn-secondary:hover {
            background: #f9fafb;
            border-color: #9ca3af;
          }
          @keyframes modalDrawerOverlayFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalDrawerSlideIn {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `
      },

      // 10. Notification Modal
      {
        id: 'notification',
        name: 'data.components.feedback.modal-dialog.variants.notification.name',
        description: 'data.components.feedback.modal-dialog.variants.notification.description',
        demoHTML: `
          <div class="modal-notif-container">
            <!-- Success Notification -->
            <div class="modal-notif modal-notif-success">
              <div class="modal-notif-icon">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="modal-notif-content">
                <div class="modal-notif-title">Success!</div>
                <div class="modal-notif-message">Your changes have been saved successfully.</div>
              </div>
              <button class="modal-notif-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Error Notification -->
            <div class="modal-notif modal-notif-error">
              <div class="modal-notif-icon">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="modal-notif-content">
                <div class="modal-notif-title">Error</div>
                <div class="modal-notif-message">Failed to process your request. Please try again.</div>
              </div>
              <button class="modal-notif-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Warning Notification -->
            <div class="modal-notif modal-notif-warning">
              <div class="modal-notif-icon">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="modal-notif-content">
                <div class="modal-notif-title">Warning</div>
                <div class="modal-notif-message">Your session will expire in 5 minutes.</div>
              </div>
              <button class="modal-notif-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Info Notification -->
            <div class="modal-notif modal-notif-info">
              <div class="modal-notif-icon">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="modal-notif-content">
                <div class="modal-notif-title">New Update Available</div>
                <div class="modal-notif-message">Version 2.0 is ready to install.</div>
              </div>
              <button class="modal-notif-close" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          .modal-notif-container {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            max-width: 100%;
            padding: 1rem;
          }
          .preview-fullscreen .modal-notif-container {
            position: fixed;
            top: 1rem;
            right: 1rem;
            max-width: 400px;
            z-index: 9999;
            padding: 0;
          }
          .modal-notif {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1rem;
            background: #fff;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
            border-left: 4px solid;
            animation: modalNotifSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .modal-notif-success {
            border-left-color: #10b981;
          }
          .modal-notif-error {
            border-left-color: #ef4444;
          }
          .modal-notif-warning {
            border-left-color: #f59e0b;
          }
          .modal-notif-info {
            border-left-color: #3b82f6;
          }
          .modal-notif-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .modal-notif-success .modal-notif-icon {
            background: #d1fae5;
            color: #10b981;
          }
          .modal-notif-error .modal-notif-icon {
            background: #fee2e2;
            color: #ef4444;
          }
          .modal-notif-warning .modal-notif-icon {
            background: #fef3c7;
            color: #f59e0b;
          }
          .modal-notif-info .modal-notif-icon {
            background: #dbeafe;
            color: #3b82f6;
          }
          .modal-notif-content {
            flex: 1;
            min-width: 0;
          }
          .modal-notif-title {
            font-weight: 600;
            font-size: 0.875rem;
            color: #111827;
            margin-bottom: 0.25rem;
          }
          .modal-notif-message {
            font-size: 0.875rem;
            color: #6b7280;
            line-height: 1.4;
          }
          .modal-notif-close {
            background: none;
            border: none;
            color: #9ca3af;
            cursor: pointer;
            padding: 0.25rem;
            border-radius: 0.25rem;
            transition: all 0.2s;
            flex-shrink: 0;
          }
          .modal-notif-close:hover {
            background: #f3f4f6;
            color: #6b7280;
          }
          @keyframes modalNotifSlideIn {
            from {
              opacity: 0;
              transform: translateX(100%) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        `
      },

      // 11. Image Preview Modal
      {
        id: 'image-preview',
        name: 'data.components.feedback.modal-dialog.variants.image-preview.name',
        description: 'data.components.feedback.modal-dialog.variants.image-preview.description',
        demoHTML: `
          <div class="modal-image-overlay">
            <button class="modal-image-close" aria-label="Close">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div class="modal-image-content">
              <button class="modal-image-nav modal-image-nav-prev" aria-label="Previous">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <div class="modal-image-main">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23667eea' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23ffffff'%3EImage 1 of 5%3C/text%3E%3C/svg%3E"
                     alt="Preview"
                     class="modal-image-img">

                <div class="modal-image-caption">
                  <h3 class="text-lg font-semibold text-white mb-1">Beautiful Landscape</h3>
                  <p class="text-sm text-gray-300">Captured at sunset in the mountains</p>
                </div>

                <div class="modal-image-counter">1 / 5</div>
              </div>

              <button class="modal-image-nav modal-image-nav-next" aria-label="Next">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            <div class="modal-image-thumbnails">
              <button class="modal-image-thumb modal-image-thumb-active">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect fill='%23667eea' width='100' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='12' fill='%23ffffff'%3E1%3C/text%3E%3C/svg%3E" alt="Thumbnail 1">
              </button>
              <button class="modal-image-thumb">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect fill='%23764ba2' width='100' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='12' fill='%23ffffff'%3E2%3C/text%3E%3C/svg%3E" alt="Thumbnail 2">
              </button>
              <button class="modal-image-thumb">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect fill='%23f093fb' width='100' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='12' fill='%23ffffff'%3E3%3C/text%3E%3C/svg%3E" alt="Thumbnail 3">
              </button>
              <button class="modal-image-thumb">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect fill='%234facfe' width='100' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='12' fill='%23ffffff'%3E4%3C/text%3E%3C/svg%3E" alt="Thumbnail 4">
              </button>
              <button class="modal-image-thumb">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect fill='%2300f2fe' width='100' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='12' fill='%23ffffff'%3E5%3C/text%3E%3C/svg%3E" alt="Thumbnail 5">
              </button>
            </div>

            <div class="modal-image-actions">
              <button class="modal-image-action" title="Download">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </button>
              <button class="modal-image-action" title="Share">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
              </button>
              <button class="modal-image-action" title="Zoom">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                </svg>
              </button>
            </div>
          </div>
        `,
        customStyles: `
          .modal-image-overlay {
            position: relative;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            padding: 2rem 1rem;
            animation: modalImageFadeIn 0.3s ease-out;
          }
          .preview-fullscreen .modal-image-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.95);
            min-height: 100vh;
            padding: 2rem;
          }
          .modal-image-close {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s;
            z-index: 10;
          }
          .modal-image-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
          }
          .modal-image-content {
            display: flex;
            align-items: center;
            gap: 2rem;
            max-width: 90vw;
            max-height: 80vh;
          }
          .modal-image-main {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: modalImageZoomIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .modal-image-img {
            max-width: 70vw;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 0.5rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          }
          .modal-image-caption {
            position: absolute;
            bottom: -4rem;
            left: 0;
            right: 0;
            text-align: center;
          }
          .modal-image-counter {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
          }
          .modal-image-nav {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s;
            flex-shrink: 0;
          }
          .modal-image-nav:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
          }
          .modal-image-thumbnails {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.75rem;
            padding: 0.75rem;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            border-radius: 0.75rem;
          }
          .modal-image-thumb {
            width: 80px;
            height: 60px;
            border: 2px solid transparent;
            border-radius: 0.5rem;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.2s;
            opacity: 0.6;
          }
          .modal-image-thumb:hover {
            opacity: 1;
            transform: translateY(-4px);
          }
          .modal-image-thumb-active {
            border-color: #fff;
            opacity: 1;
          }
          .modal-image-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .modal-image-actions {
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            display: flex;
            gap: 0.5rem;
          }
          .modal-image-action {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s;
          }
          .modal-image-action:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
          @keyframes modalImageFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalImageZoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `
      }
    ]
  },

  // Reaction Picker - 表情反应选择器
  {
    id: 'reaction-picker',
    title: 'data.components.feedback.reaction-picker.title',
    description: 'data.components.feedback.reaction-picker.description',
    variants: [
      {
        id: 'material-design',
        name: 'data.components.feedback.reaction-picker.variants.material-design.name',
        description: 'data.components.feedback.reaction-picker.variants.material-design.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto p-6">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="font-medium text-2xl mb-2 text-gray-900">
                {{t:demo.reactionPicker.material.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.reactionPicker.material.subtitle}}</p>

              <div class="reaction-demo-post bg-gray-50 p-6 rounded-lg">
                <p class="text-gray-800 mb-4">{{t:demo.reactionPicker.material.postText}}</p>

                <div class="flex items-center space-x-2">
                  <button class="reaction-trigger-material" onclick="toggleReactionsMaterial(event)">
                    <span class="reaction-icon">👍</span>
                    <span class="reaction-count">42</span>
                  </button>

                  <div class="reaction-picker-material hidden">
                    <button class="reaction-btn-material" onclick="selectReaction('👍')">👍</button>
                    <button class="reaction-btn-material" onclick="selectReaction('❤️')">❤️</button>
                    <button class="reaction-btn-material" onclick="selectReaction('😂')">😂</button>
                    <button class="reaction-btn-material" onclick="selectReaction('😮')">😮</button>
                    <button class="reaction-btn-material" onclick="selectReaction('😢')">😢</button>
                    <button class="reaction-btn-material" onclick="selectReaction('🎉')">🎉</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script>
            function toggleReactionsMaterial(event) {
              event.stopPropagation();
              const picker = event.currentTarget.parentElement.querySelector('.reaction-picker-material');
              picker.classList.toggle('hidden');
            }

            function selectReaction(emoji) {
              const trigger = event.currentTarget.closest('.flex').querySelector('.reaction-icon');
              trigger.textContent = emoji;
              event.currentTarget.closest('.flex').querySelector('.reaction-picker-material').classList.add('hidden');
            }

            document.addEventListener('click', () => {
              document.querySelectorAll('.reaction-picker-material').forEach(p => p.classList.add('hidden'));
            });
          </script>
        `,
        customStyles: `
          .reaction-trigger-material {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 9999px;
            transition: all 0.2s;
            cursor: pointer;
          }

          .reaction-trigger-material:hover {
            background: #f3f4f6;
            transform: scale(1.05);
          }

          .reaction-picker-material {
            display: flex;
            gap: 0.5rem;
            padding: 0.5rem;
            background: white;
            border-radius: 9999px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: slideUp 0.2s ease-out;
          }

          .reaction-btn-material {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            border: none;
            background: transparent;
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.2s;
          }

          .reaction-btn-material:hover {
            transform: scale(1.3);
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.feedback.reaction-picker.variants.glassmorphism.name',
        description: 'data.components.feedback.reaction-picker.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto p-6">
            <div class="glass-card-reaction rounded-3xl p-8" style="background: linear-gradient(135deg, rgba(100, 100, 255, 0.3), rgba(200, 100, 255, 0.3)); backdrop-filter: blur(20px);">
              <h3 class="font-light text-2xl mb-2 text-white">
                {{t:demo.reactionPicker.glass.title}}
              </h3>
              <p class="text-white/80 mb-8 text-sm">{{t:demo.reactionPicker.glass.subtitle}}</p>

              <div class="p-6 rounded-2xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);">
                <p class="text-white mb-4">{{t:demo.reactionPicker.glass.postText}}</p>

                <div class="flex items-center gap-2">
                  <button class="reaction-trigger-glass" onclick="toggleReactionsGlass(event)">
                    <span class="reaction-icon">✨</span>
                    <span class="reaction-count">128</span>
                  </button>

                  <div class="reaction-picker-glass hidden">
                    <button class="reaction-btn-glass" onclick="selectReactionGlass('👍')">👍</button>
                    <button class="reaction-btn-glass" onclick="selectReactionGlass('❤️')">❤️</button>
                    <button class="reaction-btn-glass" onclick="selectReactionGlass('😂')">😂</button>
                    <button class="reaction-btn-glass" onclick="selectReactionGlass('🔥')">🔥</button>
                    <button class="reaction-btn-glass" onclick="selectReactionGlass('✨')">✨</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script>
            function toggleReactionsGlass(event) {
              event.stopPropagation();
              const picker = event.currentTarget.parentElement.querySelector('.reaction-picker-glass');
              picker.classList.toggle('hidden');
            }

            function selectReactionGlass(emoji) {
              const trigger = event.currentTarget.closest('.flex').querySelector('.reaction-icon');
              trigger.textContent = emoji;
              event.currentTarget.closest('.flex').querySelector('.reaction-picker-glass').classList.add('hidden');
            }
          </script>
        `,
        customStyles: `
          .reaction-trigger-glass {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 9999px;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
          }

          .reaction-trigger-glass:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.05);
          }

          .reaction-picker-glass {
            display: inline-flex;
            gap: 0.5rem;
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 9999px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            animation: slideUpGlass 0.3s ease-out;
          }

          .reaction-btn-glass {
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s;
          }

          .reaction-btn-glass:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: scale(1.2);
          }

          @keyframes slideUpGlass {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.feedback.reaction-picker.variants.neumorphism.name',
        description: 'data.components.feedback.reaction-picker.variants.neumorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto p-6">
            <div class="bg-gray-100 rounded-2xl p-8">
              <h3 class="font-semibold text-2xl mb-2 text-gray-800">
                {{t:demo.reactionPicker.neomorph.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.reactionPicker.neomorph.subtitle}}</p>

              <div class="neomorph-post-card p-6 rounded-xl">
                <p class="text-gray-800 mb-4">{{t:demo.reactionPicker.neomorph.postText}}</p>

                <div class="flex items-center gap-2">
                  <button class="reaction-trigger-neomorph" onclick="toggleReactionsNeomorph(event)">
                    <span class="reaction-icon">💖</span>
                    <span class="reaction-count">99</span>
                  </button>

                  <div class="reaction-picker-neomorph hidden">
                    <button class="reaction-btn-neomorph" onclick="selectReactionNeomorph('👍')">👍</button>
                    <button class="reaction-btn-neomorph" onclick="selectReactionNeomorph('❤️')">❤️</button>
                    <button class="reaction-btn-neomorph" onclick="selectReactionNeomorph('😊')">😊</button>
                    <button class="reaction-btn-neomorph" onclick="selectReactionNeomorph('🎯')">🎯</button>
                    <button class="reaction-btn-neomorph" onclick="selectReactionNeomorph('💖')">💖</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script>
            function toggleReactionsNeomorph(event) {
              event.stopPropagation();
              const picker = event.currentTarget.parentElement.querySelector('.reaction-picker-neomorph');
              picker.classList.toggle('hidden');
            }

            function selectReactionNeomorph(emoji) {
              const trigger = event.currentTarget.closest('.flex').querySelector('.reaction-icon');
              trigger.textContent = emoji;
              event.currentTarget.closest('.flex').querySelector('.reaction-picker-neomorph').classList.add('hidden');
            }
          </script>
        `,
        customStyles: `
          .neomorph-post-card {
            background: #e0e0e0;
            box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
                        -9px -9px 16px rgba(255, 255, 255, 0.5);
          }

          .reaction-trigger-neomorph {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            background: #e0e0e0;
            border: none;
            border-radius: 9999px;
            box-shadow: 4px 4px 8px rgba(163, 177, 198, 0.6),
                        -4px -4px 8px rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.2s;
          }

          .reaction-trigger-neomorph:active {
            box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.6),
                        inset -4px -4px 8px rgba(255, 255, 255, 0.5);
          }

          .reaction-picker-neomorph {
            display: inline-flex;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            background: #e0e0e0;
            border-radius: 9999px;
            box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
                        -9px -9px 16px rgba(255, 255, 255, 0.5);
            animation: slideUpNeomorph 0.3s ease-out;
          }

          .reaction-btn-neomorph {
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
            background: #e0e0e0;
            border: none;
            border-radius: 50%;
            box-shadow: 4px 4px 8px rgba(163, 177, 198, 0.6),
                        -4px -4px 8px rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.2s;
          }

          .reaction-btn-neomorph:hover {
            transform: scale(1.1);
          }

          .reaction-btn-neomorph:active {
            box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.6),
                        inset -4px -4px 8px rgba(255, 255, 255, 0.5);
          }

          @keyframes slideUpNeomorph {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      },
      {
        id: 'minimalism',
        name: 'data.components.feedback.reaction-picker.variants.minimalism.name',
        description: 'data.components.feedback.reaction-picker.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto p-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 class="font-light text-2xl mb-2 text-gray-900">
                {{t:demo.reactionPicker.minimalism.title}}
              </h3>
              <p class="text-gray-500 mb-8 text-sm font-light">{{t:demo.reactionPicker.minimalism.subtitle}}</p>

              <div class="border-l-2 border-black pl-6 py-4">
                <p class="text-gray-800 mb-4">{{t:demo.reactionPicker.minimalism.postText}}</p>

                <div class="flex items-center gap-2">
                  <button class="reaction-trigger-min" onclick="toggleReactionsMin(event)">
                    <span class="reaction-icon">+</span>
                    <span class="reaction-count">5</span>
                  </button>

                  <div class="reaction-picker-min hidden">
                    <button class="reaction-btn-min" onclick="selectReactionMin('👍')">👍</button>
                    <button class="reaction-btn-min" onclick="selectReactionMin('❤️')">❤️</button>
                    <button class="reaction-btn-min" onclick="selectReactionMin('👏')">👏</button>
                    <button class="reaction-btn-min" onclick="selectReactionMin('🎯')">🎯</button>
                    <button class="reaction-btn-min" onclick="selectReactionMin('✨')">✨</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script>
            function toggleReactionsMin(event) {
              event.stopPropagation();
              const picker = event.currentTarget.parentElement.querySelector('.reaction-picker-min');
              picker.classList.toggle('hidden');
            }

            function selectReactionMin(emoji) {
              const trigger = event.currentTarget.closest('.flex').querySelector('.reaction-icon');
              trigger.textContent = emoji;
              event.currentTarget.closest('.flex').querySelector('.reaction-picker-min').classList.add('hidden');
            }
          </script>
        `,
        customStyles: `
          .reaction-trigger-min {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: white;
            border: 1px solid black;
            border-radius: 0;
            cursor: pointer;
            transition: all 0.2s;
          }

          .reaction-trigger-min:hover {
            background: black;
            color: white;
          }

          .reaction-picker-min {
            display: inline-flex;
            gap: 0.25rem;
            padding: 0.5rem;
            background: white;
            border: 1px solid black;
            animation: slideUpMin 0.2s ease-out;
          }

          .reaction-btn-min {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
            background: white;
            border: 1px solid #e5e7eb;
            cursor: pointer;
            transition: all 0.2s;
          }

          .reaction-btn-min:hover {
            border-color: black;
            transform: scale(1.15);
          }

          @keyframes slideUpMin {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }
    ]
  }
];