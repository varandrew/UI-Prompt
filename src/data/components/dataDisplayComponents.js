// Data Display Components
export const dataDisplayComponents = [
  {
    id: 'table-basic',
    title: 'data.components.dataDisplay.table-basic.title',
    description: 'data.components.dataDisplay.table-basic.description',
    variants: [
      // Variant 1: Minimalism
      {
        id: 'minimalism',
        name: 'data.components.dataDisplay.table-basic.variants.minimalism.name',
        description: 'data.components.dataDisplay.table-basic.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-5xl">
            <div class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200 bg-gray-50">
                    <th class="text-left py-4 px-6 text-sm font-semibold text-gray-900">Product Name</th>
                    <th class="text-left py-4 px-6 text-sm font-semibold text-gray-900">Category</th>
                    <th class="text-right py-4 px-6 text-sm font-semibold text-gray-900">Price</th>
                    <th class="text-center py-4 px-6 text-sm font-semibold text-gray-900">Stock</th>
                    <th class="text-center py-4 px-6 text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 min-table-row" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                    <td class="py-4 px-6 text-sm text-gray-900 font-medium">Wireless Mouse</td>
                    <td class="py-4 px-6 text-sm text-gray-600">Electronics</td>
                    <td class="py-4 px-6 text-sm text-gray-900 text-right font-mono">$29.99</td>
                    <td class="py-4 px-6 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </td>
                    <td class="py-4 px-6 text-center">
                      <button class="text-gray-600 hover:text-blue-600 transition-colors mx-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 min-table-row" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                    <td class="py-4 px-6 text-sm text-gray-900 font-medium">Mechanical Keyboard</td>
                    <td class="py-4 px-6 text-sm text-gray-600">Electronics</td>
                    <td class="py-4 px-6 text-sm text-gray-900 text-right font-mono">$89.99</td>
                    <td class="py-4 px-6 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </td>
                    <td class="py-4 px-6 text-center">
                      <button class="text-gray-600 hover:text-blue-600 transition-colors mx-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 min-table-row" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                    <td class="py-4 px-6 text-sm text-gray-900 font-medium">USB-C Hub</td>
                    <td class="py-4 px-6 text-sm text-gray-600">Accessories</td>
                    <td class="py-4 px-6 text-sm text-gray-900 text-right font-mono">$45.50</td>
                    <td class="py-4 px-6 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Low Stock
                      </span>
                    </td>
                    <td class="py-4 px-6 text-center">
                      <button class="text-gray-600 hover:text-blue-600 transition-colors mx-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition-all duration-300 min-table-row" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                    <td class="py-4 px-6 text-sm text-gray-900 font-medium">Laptop Stand</td>
                    <td class="py-4 px-6 text-sm text-gray-600">Accessories</td>
                    <td class="py-4 px-6 text-sm text-gray-900 text-right font-mono">$35.00</td>
                    <td class="py-4 px-6 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Out of Stock
                      </span>
                    </td>
                    <td class="py-4 px-6 text-center">
                      <button class="text-gray-600 hover:text-blue-600 transition-colors mx-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },

      // Variant 2: Bootstrap 5 Style
      {
        id: 'bootstrap5',
        name: 'data.components.dataDisplay.table-basic.variants.bootstrap5.name',
        description: 'data.components.dataDisplay.table-basic.variants.bootstrap5.description',
        demoHTML: `
          <div class="w-full max-w-5xl">
            <div class="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-md">
              <table class="w-full bootstrap-table">
                <thead>
                  <tr class="bg-gray-800 text-white">
                    <th class="py-3 px-4 text-left text-sm font-semibold">Name</th>
                    <th class="py-3 px-4 text-left text-sm font-semibold">Position</th>
                    <th class="py-3 px-4 text-left text-sm font-semibold">Department</th>
                    <th class="py-3 px-4 text-center text-sm font-semibold">Status</th>
                    <th class="py-3 px-4 text-center text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-row-striped border-b border-gray-200 hover:bg-blue-50 transition-colors" style="animation: slideIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                    <td class="py-3 px-4 text-sm text-gray-900 font-medium">John Smith</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Senior Developer</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Engineering</td>
                    <td class="py-3 px-4 text-center">
                      <span class="badge badge-success">Active</span>
                    </td>
                    <td class="py-3 px-4 text-center">
                      <button class="btn btn-sm btn-primary">View</button>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 hover:bg-blue-50 transition-colors" style="animation: slideIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                    <td class="py-3 px-4 text-sm text-gray-900 font-medium">Maria Garcia</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Product Designer</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Design</td>
                    <td class="py-3 px-4 text-center">
                      <span class="badge badge-success">Active</span>
                    </td>
                    <td class="py-3 px-4 text-center">
                      <button class="btn btn-sm btn-primary">View</button>
                    </td>
                  </tr>
                  <tr class="table-row-striped border-b border-gray-200 hover:bg-blue-50 transition-colors" style="animation: slideIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                    <td class="py-3 px-4 text-sm text-gray-900 font-medium">David Chen</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Marketing Manager</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Marketing</td>
                    <td class="py-3 px-4 text-center">
                      <span class="badge badge-warning">Away</span>
                    </td>
                    <td class="py-3 px-4 text-center">
                      <button class="btn btn-sm btn-primary">View</button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50 transition-colors" style="animation: slideIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                    <td class="py-3 px-4 text-sm text-gray-900 font-medium">Sarah Johnson</td>
                    <td class="py-3 px-4 text-sm text-gray-700">HR Specialist</td>
                    <td class="py-3 px-4 text-sm text-gray-700">Human Resources</td>
                    <td class="py-3 px-4 text-center">
                      <span class="badge badge-secondary">Offline</span>
                    </td>
                    <td class="py-3 px-4 text-center">
                      <button class="btn btn-sm btn-primary">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .table-row-striped {
            background-color: #f8f9fa;
          }

          .badge {
            padding: 0.25rem 0.6rem;
            font-size: 0.75rem;
            font-weight: 600;
            border-radius: 0.25rem;
            display: inline-block;
          }

          .badge-success {
            background-color: #28a745;
            color: white;
          }

          .badge-warning {
            background-color: #ffc107;
            color: #212529;
          }

          .badge-secondary {
            background-color: #6c757d;
            color: white;
          }

          .btn {
            padding: 0.375rem 0.75rem;
            font-size: 0.875rem;
            border-radius: 0.25rem;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
          }

          .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.8125rem;
          }

          .btn-primary {
            background-color: #0d6efd;
            color: white;
          }

          .btn-primary:hover {
            background-color: #0b5ed7;
          }
        `
      },

      // Variant 3: Neo-brutalism
      {
        id: 'neo-brutalism',
        name: 'data.components.dataDisplay.table-basic.variants.neo-brutalism.name',
        description: 'data.components.dataDisplay.table-basic.variants.neo-brutalism.description',
        demoHTML: `
          <div class="w-full max-w-5xl">
            <div class="brutal-container">
              <table class="w-full brutal-table">
                <thead>
                  <tr class="brutal-header">
                    <th class="py-4 px-5 text-left text-sm font-black uppercase">Region</th>
                    <th class="py-4 px-5 text-right text-sm font-black uppercase">Sales</th>
                    <th class="py-4 px-5 text-right text-sm font-black uppercase">Growth</th>
                    <th class="py-4 px-5 text-center text-sm font-black uppercase">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="brutal-row" style="animation: bounceIn 0.6s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                    <td class="py-4 px-5 text-sm font-bold">North America</td>
                    <td class="py-4 px-5 text-right text-sm font-mono font-bold">$2,450,000</td>
                    <td class="py-4 px-5 text-right">
                      <span class="brutal-badge brutal-badge-green">+12.5%</span>
                    </td>
                    <td class="py-4 px-5 text-center">
                      <span class="brutal-icon">📈</span>
                    </td>
                  </tr>
                  <tr class="brutal-row" style="animation: bounceIn 0.6s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                    <td class="py-4 px-5 text-sm font-bold">Europe</td>
                    <td class="py-4 px-5 text-right text-sm font-mono font-bold">$1,890,000</td>
                    <td class="py-4 px-5 text-right">
                      <span class="brutal-badge brutal-badge-yellow">+8.3%</span>
                    </td>
                    <td class="py-4 px-5 text-center">
                      <span class="brutal-icon">📊</span>
                    </td>
                  </tr>
                  <tr class="brutal-row" style="animation: bounceIn 0.6s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                    <td class="py-4 px-5 text-sm font-bold">Asia Pacific</td>
                    <td class="py-4 px-5 text-right text-sm font-mono font-bold">$3,120,000</td>
                    <td class="py-4 px-5 text-right">
                      <span class="brutal-badge brutal-badge-green">+18.9%</span>
                    </td>
                    <td class="py-4 px-5 text-center">
                      <span class="brutal-icon">🚀</span>
                    </td>
                  </tr>
                  <tr class="brutal-row" style="animation: bounceIn 0.6s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                    <td class="py-4 px-5 text-sm font-bold">Latin America</td>
                    <td class="py-4 px-5 text-right text-sm font-mono font-bold">$780,000</td>
                    <td class="py-4 px-5 text-right">
                      <span class="brutal-badge brutal-badge-red">-2.1%</span>
                    </td>
                    <td class="py-4 px-5 text-center">
                      <span class="brutal-icon">📉</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3) translateY(30px);
            }
            50% {
              opacity: 1;
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

          .brutal-container {
            background: white;
            border: 5px solid black;
            box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
          }

          .brutal-table {
            border-collapse: separate;
            border-spacing: 0;
          }

          .brutal-header {
            background: black;
            color: #FFFF00;
          }

          .brutal-header th {
            border-bottom: 4px solid black;
          }

          .brutal-row {
            border-bottom: 3px solid black;
            transition: all 0.3s;
          }

          .brutal-row:hover {
            background: #FFFF00;
            transform: translateX(5px);
          }

          .brutal-row:last-child {
            border-bottom: none;
          }

          .brutal-badge {
            padding: 0.35rem 0.75rem;
            font-size: 0.875rem;
            font-weight: 900;
            border: 3px solid black;
            display: inline-block;
            text-transform: uppercase;
            box-shadow: 4px 4px 0px 0px black;
          }

          .brutal-badge-green {
            background: #00FF00;
            color: black;
          }

          .brutal-badge-yellow {
            background: #FFFF00;
            color: black;
          }

          .brutal-badge-red {
            background: #FF00FF;
            color: white;
          }

          .brutal-icon {
            font-size: 1.5rem;
          }
        `
      },

      // Variant 4: Glassmorphism
      {
        id: 'glassmorphism',
        name: 'data.components.dataDisplay.table-basic.variants.glassmorphism.name',
        description: 'data.components.dataDisplay.table-basic.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-5xl">
            <div class="glass-bg">
              <div class="glass-table-container">
                <table class="w-full glass-table">
                  <thead>
                    <tr class="glass-header">
                      <th class="py-4 px-6 text-left text-sm font-semibold text-white">Project</th>
                      <th class="py-4 px-6 text-left text-sm font-semibold text-white">Progress</th>
                      <th class="py-4 px-6 text-left text-sm font-semibold text-white">Lead</th>
                      <th class="py-4 px-6 text-center text-sm font-semibold text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="glass-row" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                      <td class="py-4 px-6 text-sm text-white font-medium">Mobile App Redesign</td>
                      <td class="py-4 px-6">
                        <div class="glass-progress-bar">
                          <div class="glass-progress-fill" style="width: 75%"></div>
                        </div>
                        <span class="text-xs text-white/80 mt-1">75%</span>
                      </td>
                      <td class="py-4 px-6 text-sm text-white/90">Sarah Chen</td>
                      <td class="py-4 px-6 text-center">
                        <span class="glass-badge glass-badge-active">Active</span>
                      </td>
                    </tr>
                    <tr class="glass-row" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                      <td class="py-4 px-6 text-sm text-white font-medium">API Integration</td>
                      <td class="py-4 px-6">
                        <div class="glass-progress-bar">
                          <div class="glass-progress-fill" style="width: 45%"></div>
                        </div>
                        <span class="text-xs text-white/80 mt-1">45%</span>
                      </td>
                      <td class="py-4 px-6 text-sm text-white/90">Mike Johnson</td>
                      <td class="py-4 px-6 text-center">
                        <span class="glass-badge glass-badge-progress">In Progress</span>
                      </td>
                    </tr>
                    <tr class="glass-row" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                      <td class="py-4 px-6 text-sm text-white font-medium">Database Migration</td>
                      <td class="py-4 px-6">
                        <div class="glass-progress-bar">
                          <div class="glass-progress-fill" style="width: 100%"></div>
                        </div>
                        <span class="text-xs text-white/80 mt-1">100%</span>
                      </td>
                      <td class="py-4 px-6 text-sm text-white/90">Emily Davis</td>
                      <td class="py-4 px-6 text-center">
                        <span class="glass-badge glass-badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr class="glass-row" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                      <td class="py-4 px-6 text-sm text-white font-medium">UI Component Library</td>
                      <td class="py-4 px-6">
                        <div class="glass-progress-bar">
                          <div class="glass-progress-fill" style="width: 20%"></div>
                        </div>
                        <span class="text-xs text-white/80 mt-1">20%</span>
                      </td>
                      <td class="py-4 px-6 text-sm text-white/90">Alex Kim</td>
                      <td class="py-4 px-6 text-center">
                        <span class="glass-badge glass-badge-planning">Planning</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes blurFadeIn {
            from {
              opacity: 0;
              filter: blur(10px);
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              filter: blur(0px);
              transform: translateY(0);
            }
          }

          .glass-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            border-radius: 1.5rem;
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .glass-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%);
            pointer-events: none;
          }

          .glass-table-container {
            backdrop-filter: blur(16px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          }

          .glass-table {
            border-collapse: separate;
            border-spacing: 0;
          }

          .glass-header {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          }

          .glass-row {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
          }

          .glass-row:hover {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(24px);
          }

          .glass-row:last-child {
            border-bottom: none;
          }

          .glass-progress-bar {
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .glass-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6));
            border-radius: 3px;
            transition: width 0.3s ease;
          }

          .glass-badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
            font-weight: 600;
            border-radius: 0.5rem;
            display: inline-block;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .glass-badge-active {
            background: rgba(16, 185, 129, 0.3);
            color: #d1fae5;
          }

          .glass-badge-progress {
            background: rgba(59, 130, 246, 0.3);
            color: #dbeafe;
          }

          .glass-badge-complete {
            background: rgba(139, 92, 246, 0.3);
            color: #ede9fe;
          }

          .glass-badge-planning {
            background: rgba(251, 191, 36, 0.3);
            color: #fef3c7;
          }
        `
      },

      // Variant 5: Neumorphism
      {
        id: 'neumorphism',
        name: 'data.components.dataDisplay.table-basic.variants.neumorphism.name',
        description: 'data.components.dataDisplay.table-basic.variants.neumorphism.description',
        demoHTML: `
          <div class="w-full max-w-5xl">
            <div class="neomorph-container">
              <table class="w-full neomorph-table">
                <thead>
                  <tr>
                    <th class="py-4 px-6 text-left text-sm font-semibold text-gray-700">User</th>
                    <th class="py-4 px-6 text-left text-sm font-semibold text-gray-700">Activity</th>
                    <th class="py-4 px-6 text-right text-sm font-semibold text-gray-700">Sessions</th>
                    <th class="py-4 px-6 text-center text-sm font-semibold text-gray-700">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="neomorph-row" style="animation: softPop 0.6s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                    <td class="py-4 px-6">
                      <div class="flex items-center gap-3">
                        <div class="neomorph-avatar">
                          <span class="text-sm font-semibold text-gray-700">JS</span>
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900">James Smith</div>
                          <div class="text-xs text-gray-500">james@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="neomorph-activity-bar">
                        <div class="neomorph-activity-fill" style="width: 85%"></div>
                      </div>
                      <span class="text-xs text-gray-600 mt-1">High Activity</span>
                    </td>
                    <td class="py-4 px-6 text-right text-sm font-mono font-semibold text-gray-800">1,284</td>
                    <td class="py-4 px-6 text-center">
                      <div class="neomorph-rating">⭐ 4.9</div>
                    </td>
                  </tr>
                  <tr class="neomorph-row" style="animation: softPop 0.6s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                    <td class="py-4 px-6">
                      <div class="flex items-center gap-3">
                        <div class="neomorph-avatar">
                          <span class="text-sm font-semibold text-gray-700">EW</span>
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900">Emma Wilson</div>
                          <div class="text-xs text-gray-500">emma@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="neomorph-activity-bar">
                        <div class="neomorph-activity-fill" style="width: 62%"></div>
                      </div>
                      <span class="text-xs text-gray-600 mt-1">Medium Activity</span>
                    </td>
                    <td class="py-4 px-6 text-right text-sm font-mono font-semibold text-gray-800">847</td>
                    <td class="py-4 px-6 text-center">
                      <div class="neomorph-rating">⭐ 4.7</div>
                    </td>
                  </tr>
                  <tr class="neomorph-row" style="animation: softPop 0.6s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                    <td class="py-4 px-6">
                      <div class="flex items-center gap-3">
                        <div class="neomorph-avatar">
                          <span class="text-sm font-semibold text-gray-700">MD</span>
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900">Michael Davis</div>
                          <div class="text-xs text-gray-500">michael@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="neomorph-activity-bar">
                        <div class="neomorph-activity-fill" style="width: 95%"></div>
                      </div>
                      <span class="text-xs text-gray-600 mt-1">Very High Activity</span>
                    </td>
                    <td class="py-4 px-6 text-right text-sm font-mono font-semibold text-gray-800">2,156</td>
                    <td class="py-4 px-6 text-center">
                      <div class="neomorph-rating">⭐ 5.0</div>
                    </td>
                  </tr>
                  <tr class="neomorph-row" style="animation: softPop 0.6s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                    <td class="py-4 px-6">
                      <div class="flex items-center gap-3">
                        <div class="neomorph-avatar">
                          <span class="text-sm font-semibold text-gray-700">SJ</span>
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900">Sarah Johnson</div>
                          <div class="text-xs text-gray-500">sarah@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <div class="neomorph-activity-bar">
                        <div class="neomorph-activity-fill" style="width: 38%"></div>
                      </div>
                      <span class="text-xs text-gray-600 mt-1">Low Activity</span>
                    </td>
                    <td class="py-4 px-6 text-right text-sm font-mono font-semibold text-gray-800">423</td>
                    <td class="py-4 px-6 text-center">
                      <div class="neomorph-rating">⭐ 4.5</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes softPop {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(10px);
            }
            60% {
              transform: scale(1.02);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .neomorph-container {
            background: #e6e9f0;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow:
              20px 20px 60px #c5c8cf,
              -20px -20px 60px #ffffff;
          }

          .neomorph-table {
            border-collapse: separate;
            border-spacing: 0 1rem;
          }

          .neomorph-row {
            background: #e6e9f0;
            border-radius: 1rem;
            box-shadow:
              8px 8px 16px #c5c8cf,
              -8px -8px 16px #ffffff;
            transition: all 0.3s ease;
          }

          .neomorph-row:hover {
            box-shadow:
              12px 12px 24px #c5c8cf,
              -12px -12px 24px #ffffff;
            transform: translateY(-2px);
          }

          .neomorph-row td:first-child {
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
          }

          .neomorph-row td:last-child {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
          }

          .neomorph-avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e6e9f0;
            box-shadow:
              inset 4px 4px 8px #c5c8cf,
              inset -4px -4px 8px #ffffff;
          }

          .neomorph-activity-bar {
            width: 100%;
            height: 8px;
            background: #e6e9f0;
            border-radius: 4px;
            overflow: hidden;
            box-shadow:
              inset 3px 3px 6px #c5c8cf,
              inset -3px -3px 6px #ffffff;
            margin-bottom: 0.25rem;
          }

          .neomorph-activity-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 4px;
            transition: width 0.5s ease;
          }

          .neomorph-rating {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            background: #e6e9f0;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 600;
            color: #4b5563;
            box-shadow:
              4px 4px 8px #c5c8cf,
              -4px -4px 8px #ffffff;
          }
        `
      }
    ]
  },
  {
    id: 'card-grid',
    title: 'data.components.dataDisplay.card-grid.title',
    description: 'data.components.dataDisplay.card-grid.description',
    variants: [
      // Variant 1: Bootstrap 5 Professional
      {
        id: 'bootstrap5',
        name: 'data.components.dataDisplay.card-grid.variants.bootstrap5.name',
        description: 'data.components.dataDisplay.card-grid.variants.bootstrap5.description',
        demoHTML: `
          <div class="w-full max-w-6xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bs5-card bg-white rounded-lg border border-gray-300 overflow-hidden" style="animation: fadeInUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%230d6efd' width='400' height='200'/%3E%3C/svg%3E" alt="Project Alpha" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h5 class="text-xl font-bold mb-2 text-gray-900">Project Alpha</h5>
                  <p class="text-gray-600 text-sm mb-3">A comprehensive solution for modern web applications with scalable architecture.</p>
                  <div class="flex justify-between items-center">
                    <span class="badge-primary">In Progress</span>
                    <a href="javascript:void(0)" class="btn-link text-primary">View Details →</a>
                  </div>
                </div>
              </div>

              <div class="bs5-card bg-white rounded-lg border border-gray-300 overflow-hidden" style="animation: fadeInUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23198754' width='400' height='200'/%3E%3C/svg%3E" alt="Mobile App" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h5 class="text-xl font-bold mb-2 text-gray-900">Mobile App</h5>
                  <p class="text-gray-600 text-sm mb-3">Cross-platform mobile experience with native performance.</p>
                  <div class="flex justify-between items-center">
                    <span class="badge-success">Completed</span>
                    <a href="javascript:void(0)" class="btn-link text-success">View Details →</a>
                  </div>
                </div>
              </div>

              <div class="bs5-card bg-white rounded-lg border border-gray-300 overflow-hidden" style="animation: fadeInUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23dc3545' width='400' height='200'/%3E%3C/svg%3E" alt="Data Platform" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h5 class="text-xl font-bold mb-2 text-gray-900">Data Platform</h5>
                  <p class="text-gray-600 text-sm mb-3">Real-time analytics dashboard for business intelligence.</p>
                  <div class="flex justify-between items-center">
                    <span class="badge-warning">Testing</span>
                    <a href="javascript:void(0)" class="btn-link text-danger">View Details →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .bs5-card { transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .bs5-card:hover { transform: translateY(-5px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
          .badge-primary { background-color: #0d6efd; color: white; padding: 0.25rem 0.75rem; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; }
          .badge-success { background-color: #198754; color: white; padding: 0.25rem 0.75rem; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; }
          .badge-warning { background-color: #ffc107; color: #000; padding: 0.25rem 0.75rem; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; }
          .btn-link { font-size: 0.875rem; font-weight: 600; text-decoration: none; transition: all 0.2s; }
          .btn-link:hover { text-decoration: underline; }
          .text-primary { color: #0d6efd; }
          .text-success { color: #198754; }
          .text-danger { color: #dc3545; }
        `
      }
    ]
  },
  {
    id: 'list-view',
    title: 'data.components.dataDisplay.list-view.title',
    description: 'data.components.dataDisplay.list-view.description',
    variants: [
      // Variant 1: Minimalism
      {
        id: 'minimalism',
        name: 'data.components.dataDisplay.list-view.variants.minimalism.name',
        description: 'data.components.dataDisplay.list-view.variants.minimalism.description',
        demoHTML: `
      <div class="w-full max-w-4xl">
        <div class="bg-white rounded-xl overflow-hidden" style="border: 1px solid #f0f0f0;">
          <div class="divide-y divide-gray-100">
            <div class="minimalist-item px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-all duration-300" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
              <div class="flex items-center gap-4 flex-1">
                <input type="checkbox" class="w-5 h-5 rounded border-2 border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer">
                <div>
                  <h4 class="text-base font-medium text-gray-900">Complete project documentation</h4>
                  <p class="text-sm text-gray-500 mt-0.5">Update README and API docs</p>
                </div>
              </div>
              <span class="text-xs text-gray-400 font-mono">2h ago</span>
            </div>

            <div class="minimalist-item px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-all duration-300" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
              <div class="flex items-center gap-4 flex-1">
                <input type="checkbox" checked class="w-5 h-5 rounded border-2 border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer">
                <div>
                  <h4 class="text-base font-medium text-gray-400 line-through">Review pull requests</h4>
                  <p class="text-sm text-gray-400 mt-0.5">3 PRs pending review</p>
                </div>
              </div>
              <span class="text-xs text-gray-400 font-mono">5h ago</span>
            </div>

            <div class="minimalist-item px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-all duration-300" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
              <div class="flex items-center gap-4 flex-1">
                <input type="checkbox" class="w-5 h-5 rounded border-2 border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer">
                <div>
                  <h4 class="text-base font-medium text-gray-900">Deploy to production</h4>
                  <p class="text-sm text-gray-500 mt-0.5">v2.0.0 release candidate</p>
                </div>
              </div>
              <span class="text-xs text-gray-400 font-mono">1d ago</span>
            </div>

            <div class="minimalist-item px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-all duration-300" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
              <div class="flex items-center gap-4 flex-1">
                <input type="checkbox" class="w-5 h-5 rounded border-2 border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer">
                <div>
                  <h4 class="text-base font-medium text-gray-900">Team retrospective meeting</h4>
                  <p class="text-sm text-gray-500 mt-0.5">Friday 3:00 PM</p>
                </div>
              </div>
              <span class="text-xs text-gray-400 font-mono">3d ago</span>
            </div>
          </div>
        </div>
      </div>
        `,
        customStyles: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },

      // Variant 2: Material Design
      {
        id: 'material-design',
        name: 'data.components.dataDisplay.list-view.variants.material-design.name',
        description: 'data.components.dataDisplay.list-view.variants.material-design.description',
        demoHTML: `
        <div class="w-full max-w-4xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="material-card group" style="animation: slideUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden cursor-pointer">
                <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 mb-1">Product Requirements</h4>
                    <p class="text-sm text-gray-600 mb-3">23 pages · Updated 2 hours ago</p>
                    <div class="flex items-center gap-2">
                      <span class="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">In Progress</span>
                      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="material-card group" style="animation: slideUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden cursor-pointer">
                <div class="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 mb-1">UI/UX Design System</h4>
                    <p class="text-sm text-gray-600 mb-3">142 components · Last week</p>
                    <div class="flex items-center gap-2">
                      <span class="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Completed</span>
                      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="material-card group" style="animation: slideUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden cursor-pointer">
                <div class="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 mb-1">API Integration</h4>
                    <p class="text-sm text-gray-600 mb-3">8 endpoints · Yesterday</p>
                    <div class="flex items-center gap-2">
                      <span class="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full">Testing</span>
                      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Backend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="material-card group" style="animation: slideUp 0.5s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden cursor-pointer">
                <div class="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 mb-1">Performance Optimization</h4>
                    <p class="text-sm text-gray-600 mb-3">12 tasks · Tomorrow</p>
                    <div class="flex items-center gap-2">
                      <span class="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full">High Priority</span>
                      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">DevOps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `,
        customStyles: `
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      },

      // Variant 3: Bootstrap 5
      {
        id: 'bootstrap5',
        name: 'data.components.dataDisplay.list-view.variants.bootstrap5.name',
        description: 'data.components.dataDisplay.list-view.variants.bootstrap5.description',
        demoHTML: `
        <div class="w-full max-w-4xl">
          <ul class="bootstrap-list">
            <li class="bootstrap-item" style="animation: zoomIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                  <div class="avatar-circle bg-primary text-white">JS</div>
                  <div>
                    <h5 class="mb-1 fw-semibold">John Smith</h5>
                    <p class="text-muted small mb-0">Senior Frontend Developer</p>
                  </div>
                </div>
                <span class="badge bg-success">Active</span>
              </div>
            </li>

            <li class="bootstrap-item bootstrap-item-striped" style="animation: zoomIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                  <div class="avatar-circle bg-danger text-white">MC</div>
                  <div>
                    <h5 class="mb-1 fw-semibold">Maria Chen</h5>
                    <p class="text-muted small mb-0">UX/UI Designer</p>
                  </div>
                </div>
                <span class="badge bg-warning text-dark">Away</span>
              </div>
            </li>

            <li class="bootstrap-item" style="animation: zoomIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                  <div class="avatar-circle bg-info text-white">DP</div>
                  <div>
                    <h5 class="mb-1 fw-semibold">David Park</h5>
                    <p class="text-muted small mb-0">Backend Engineer</p>
                  </div>
                </div>
                <span class="badge bg-success">Active</span>
              </div>
            </li>

            <li class="bootstrap-item bootstrap-item-striped" style="animation: zoomIn 0.5s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                  <div class="avatar-circle bg-secondary text-white">AL</div>
                  <div>
                    <h5 class="mb-1 fw-semibold">Anna Lee</h5>
                    <p class="text-muted small mb-0">Product Manager</p>
                  </div>
                </div>
                <span class="badge bg-secondary">Offline</span>
              </div>
            </li>
          </ul>
        </div>
        `,
        customStyles: `
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .bootstrap-list {
            list-style: none;
            padding: 0;
            margin: 0;
            background: white;
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            overflow: hidden;
          }

          .bootstrap-item {
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid #dee2e6;
            transition: background-color 0.2s;
          }

          .bootstrap-item:last-child {
            border-bottom: none;
          }

          .bootstrap-item:hover {
            background-color: #f8f9fa;
          }

          .bootstrap-item-striped {
            background-color: #f8f9fa;
          }

          .bootstrap-item-striped:hover {
            background-color: #e9ecef;
          }

          .avatar-circle {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1.1rem;
          }

          .d-flex {
            display: flex;
          }

          .align-items-center {
            align-items: center;
          }

          .justify-content-between {
            justify-content: space-between;
          }

          .gap-3 {
            gap: 1rem;
          }

          .mb-1 {
            margin-bottom: 0.25rem;
          }

          .mb-0 {
            margin-bottom: 0;
          }

          .fw-semibold {
            font-weight: 600;
          }

          .text-muted {
            color: #6c757d;
          }

          .small {
            font-size: 0.875rem;
          }

          .badge {
            padding: 0.35em 0.65em;
            font-size: 0.75rem;
            font-weight: 600;
            border-radius: 0.25rem;
            display: inline-block;
          }

          .bg-primary {
            background-color: #0d6efd !important;
          }

          .bg-success {
            background-color: #198754 !important;
            color: white !important;
          }

          .bg-danger {
            background-color: #dc3545 !important;
          }

          .bg-warning {
            background-color: #ffc107 !important;
          }

          .bg-info {
            background-color: #0dcaf0 !important;
          }

          .bg-secondary {
            background-color: #6c757d !important;
          }

          .text-white {
            color: white !important;
          }

          .text-dark {
            color: #212529 !important;
          }
        `
      },

      // Variant 4: Neumorphism
      {
        id: 'neumorphism',
        name: 'data.components.dataDisplay.list-view.variants.neumorphism.name',
        description: 'data.components.dataDisplay.list-view.variants.neumorphism.description',
        demoHTML: `
        <div class="w-full max-w-5xl">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style="background: linear-gradient(145deg, #e6e9f0, #f8f9fc); padding: 2rem; border-radius: 1.5rem;">
            <div class="neomorph-card" style="animation: rotateIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
              <div class="p-6 rounded-2xl" style="background: #e6e9f0; box-shadow: 12px 12px 24px #c5c8cf, -12px -12px 24px #ffffff;">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(145deg, #d0d3da, #f6f7fb); box-shadow: 5px 5px 10px #c5c8cf, -5px -5px 10px #ffffff;">
                    <span class="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 text-lg">Analytics</h4>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mb-3">Track user behavior and metrics</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">12 reports</span>
                  <button class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700" style="background: #e6e9f0; box-shadow: 3px 3px 6px #c5c8cf, -3px -3px 6px #ffffff; transition: all 0.3s;">View</button>
                </div>
              </div>
            </div>

            <div class="neomorph-card" style="animation: rotateIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
              <div class="p-6 rounded-2xl" style="background: #e6e9f0; box-shadow: 12px 12px 24px #c5c8cf, -12px -12px 24px #ffffff;">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(145deg, #d0d3da, #f6f7fb); box-shadow: 5px 5px 10px #c5c8cf, -5px -5px 10px #ffffff;">
                    <span class="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 text-lg">Orders</h4>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mb-3">Manage customer orders and shipping</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">247 pending</span>
                  <button class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700" style="background: #e6e9f0; box-shadow: 3px 3px 6px #c5c8cf, -3px -3px 6px #ffffff; transition: all 0.3s;">Manage</button>
                </div>
              </div>
            </div>

            <div class="neomorph-card" style="animation: rotateIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
              <div class="p-6 rounded-2xl" style="background: #e6e9f0; box-shadow: 12px 12px 24px #c5c8cf, -12px -12px 24px #ffffff;">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(145deg, #d0d3da, #f6f7fb); box-shadow: 5px 5px 10px #c5c8cf, -5px -5px 10px #ffffff;">
                    <span class="text-2xl">👥</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 text-lg">Users</h4>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mb-3">User management and permissions</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">1,284 active</span>
                  <button class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700" style="background: #e6e9f0; box-shadow: 3px 3px 6px #c5c8cf, -3px -3px 6px #ffffff; transition: all 0.3s;">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `,
        customStyles: `
          @keyframes rotateIn {
            from {
              opacity: 0;
              transform: perspective(1000px) rotateY(-15deg) translateZ(-50px);
            }
            to {
              opacity: 1;
              transform: perspective(1000px) rotateY(0deg) translateZ(0);
            }
          }

          .neomorph-card:hover > div {
            box-shadow: 8px 8px 16px #c5c8cf, -8px -8px 16px #ffffff !important;
            transform: translateY(-2px);
          }
        `
      },

      // Variant 5: Glassmorphism
      {
        id: 'glassmorphism',
        name: 'data.components.dataDisplay.list-view.variants.glassmorphism.name',
        description: 'data.components.dataDisplay.list-view.variants.glassmorphism.description',
        demoHTML: `
        <div class="w-full max-w-4xl">
          <div class="relative rounded-3xl overflow-hidden p-8" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);">
            <div class="absolute inset-0" style="background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);"></div>

            <div class="space-y-4 relative z-10">
              <div class="glass-item" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                <div class="p-5 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 flex items-center justify-center">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-white mb-1">Creative Workspace</h4>
                        <p class="text-sm text-white/70">Design, prototype, and collaborate</p>
                      </div>
                    </div>
                    <button class="px-5 py-2 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300">
                      Open
                    </button>
                  </div>
                </div>
              </div>

              <div class="glass-item" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                <div class="p-5 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 flex items-center justify-center">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-white mb-1">Data Insights</h4>
                        <p class="text-sm text-white/70">Real-time analytics and reports</p>
                      </div>
                    </div>
                    <button class="px-5 py-2 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300">
                      View
                    </button>
                  </div>
                </div>
              </div>

              <div class="glass-item" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                <div class="p-5 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 flex items-center justify-center">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-white mb-1">Project Settings</h4>
                        <p class="text-sm text-white/70">Configure and customize your project</p>
                      </div>
                    </div>
                    <button class="px-5 py-2 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div class="glass-item" style="animation: blurFadeIn 0.8s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                <div class="p-5 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 flex items-center justify-center">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-white mb-1">Team Collaboration</h4>
                        <p class="text-sm text-white/70">Invite members and assign roles</p>
                      </div>
                    </div>
                    <button class="px-5 py-2 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300">
                      Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `,
        customStyles: `
          @keyframes blurFadeIn {
            from {
              opacity: 0;
              filter: blur(10px);
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }

          .glass-item:hover > div {
            transform: translateX(5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          }
        `
      }
    ]
  },
  

  // Statistics Card Component
  {
    id: 'statistics-card',
    title: 'data.components.dataDisplay.statistics-card.title',
    description: 'data.components.dataDisplay.statistics-card.description',
    variants: [
      // Variant 1: Minimalist Statistics Card
      {
        id: 'minimalist',
        name: 'data.components.dataDisplay.statistics-card.variants.minimalist.name',
        description: 'data.components.dataDisplay.statistics-card.variants.minimalist.description',
        demoHTML: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl p-6">
            <!-- Card 1: Total Revenue -->
            <div class="stat-card-minimal" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon-minimal">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="stat-trend-up">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>12.5%</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 font-light mb-1">Total Revenue</p>
              <h3 class="text-3xl font-light mb-2">$54,239</h3>
              <p class="text-xs text-gray-400">+$6,721 from last month</p>
            </div>

            <!-- Card 2: Active Users -->
            <div class="stat-card-minimal" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon-minimal-purple">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div class="stat-trend-up">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>8.2%</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 font-light mb-1">Active Users</p>
              <h3 class="text-3xl font-light mb-2">12,345</h3>
              <p class="text-xs text-gray-400">+982 from last week</p>
            </div>

            <!-- Card 3: Conversion Rate -->
            <div class="stat-card-minimal" style="animation: fadeInUp 0.6s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon-minimal-blue">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div class="stat-trend-down">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>2.1%</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 font-light mb-1">Conversion Rate</p>
              <h3 class="text-3xl font-light mb-2">3.24%</h3>
              <p class="text-xs text-gray-400">-0.07% from last month</p>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .stat-card-minimal {
            background: white;
            padding: 1.5rem;
            border-radius: 1rem;
            border: 1px solid #e5e7eb;
            transition: all 0.3s ease;
          }

          .stat-card-minimal:hover {
            border-color: #d1d5db;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          .stat-icon-minimal {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .stat-icon-minimal-purple {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .stat-icon-minimal-blue {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .stat-trend-up {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.25rem 0.75rem;
            background: #dcfce7;
            color: #16a34a;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
          }

          .stat-trend-down {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.25rem 0.75rem;
            background: #fee2e2;
            color: #dc2626;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
          }
        `
      },

      // Variant 2: Bootstrap 5 Statistics Card
      {
        id: 'bootstrap5',
        name: 'data.components.dataDisplay.statistics-card.variants.bootstrap5.name',
        description: 'data.components.dataDisplay.statistics-card.variants.bootstrap5.description',
        demoHTML: `
          <div class="w-full max-w-6xl p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Card 1 -->
              <div class="bs-stat-card bs-primary" style="animation: slideInLeft 0.5s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                <div class="bs-stat-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <div class="bs-stat-body">
                  <p class="bs-stat-label">Sales</p>
                  <h4 class="bs-stat-value">$12,345</h4>
                  <div class="bs-progress">
                    <div class="bs-progress-bar bs-bg-primary" style="width: 75%; animation: progressFill 1s ease-out 0.3s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <p class="bs-stat-meta">
                    <span class="bs-badge bs-success">+15%</span> from last month
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="bs-stat-card bs-success" style="animation: slideInLeft 0.5s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                <div class="bs-stat-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <div class="bs-stat-body">
                  <p class="bs-stat-label">Customers</p>
                  <h4 class="bs-stat-value">8,234</h4>
                  <div class="bs-progress">
                    <div class="bs-progress-bar bs-bg-success" style="width: 60%; animation: progressFill 1s ease-out 0.4s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <p class="bs-stat-meta">
                    <span class="bs-badge bs-success">+8%</span> new users
                  </p>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="bs-stat-card bs-warning" style="animation: slideInLeft 0.5s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                <div class="bs-stat-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="bs-stat-body">
                  <p class="bs-stat-label">Orders</p>
                  <h4 class="bs-stat-value">1,543</h4>
                  <div class="bs-progress">
                    <div class="bs-progress-bar bs-bg-warning" style="width: 45%; animation: progressFill 1s ease-out 0.5s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <p class="bs-stat-meta">
                    <span class="bs-badge bs-warning">+3%</span> pending
                  </p>
                </div>
              </div>

              <!-- Card 4 -->
              <div class="bs-stat-card bs-info" style="animation: slideInLeft 0.5s ease-out forwards; opacity: 0; animation-delay: 0.4s;">
                <div class="bs-stat-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </div>
                <div class="bs-stat-body">
                  <p class="bs-stat-label">Products</p>
                  <h4 class="bs-stat-value">453</h4>
                  <div class="bs-progress">
                    <div class="bs-progress-bar bs-bg-info" style="width: 88%; animation: progressFill 1s ease-out 0.6s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <p class="bs-stat-meta">
                    <span class="bs-badge bs-info">98%</span> in stock
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes progressFill {
            to {
              transform: scaleX(1);
            }
          }

          .bs-stat-card {
            background: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
            border-left: 4px solid;
            transition: all 0.3s ease;
          }

          .bs-stat-card:hover {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            transform: translateY(-3px);
          }

          .bs-stat-card.bs-primary {
            border-left-color: #0d6efd;
          }

          .bs-stat-card.bs-success {
            border-left-color: #198754;
          }

          .bs-stat-card.bs-warning {
            border-left-color: #ffc107;
          }

          .bs-stat-card.bs-info {
            border-left-color: #0dcaf0;
          }

          .bs-stat-icon {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: white;
          }

          .bs-primary .bs-stat-icon {
            background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          }

          .bs-success .bs-stat-icon {
            background: linear-gradient(135deg, #198754 0%, #146c43 100%);
          }

          .bs-warning .bs-stat-icon {
            background: linear-gradient(135deg, #ffc107 0%, #cc9a06 100%);
          }

          .bs-info .bs-stat-icon {
            background: linear-gradient(135deg, #0dcaf0 0%, #0aa2c0 100%);
          }

          .bs-stat-body {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .bs-stat-label {
            font-size: 0.875rem;
            color: #6c757d;
            font-weight: 500;
            margin: 0;
          }

          .bs-stat-value {
            font-size: 1.75rem;
            font-weight: 700;
            color: #212529;
            margin: 0;
            line-height: 1;
          }

          .bs-progress {
            height: 0.5rem;
            background: #e9ecef;
            border-radius: 0.25rem;
            overflow: hidden;
          }

          .bs-progress-bar {
            height: 100%;
            transition: width 0.6s ease;
          }

          .bs-bg-primary {
            background: linear-gradient(90deg, #0d6efd 0%, #0a58ca 100%);
          }

          .bs-bg-success {
            background: linear-gradient(90deg, #198754 0%, #146c43 100%);
          }

          .bs-bg-warning {
            background: linear-gradient(90deg, #ffc107 0%, #cc9a06 100%);
          }

          .bs-bg-info {
            background: linear-gradient(90deg, #0dcaf0 0%, #0aa2c0 100%);
          }

          .bs-stat-meta {
            font-size: 0.75rem;
            color: #6c757d;
            margin: 0;
          }

          .bs-badge {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1;
            border-radius: 0.25rem;
            color: white;
          }

          .bs-badge.bs-success {
            background-color: #198754;
          }

          .bs-badge.bs-warning {
            background-color: #ffc107;
            color: #000;
          }

          .bs-badge.bs-info {
            background-color: #0dcaf0;
            color: #000;
          }
        `
      },

      // Variant 3: Glassmorphism Statistics Card
      {
        id: 'glassmorphism',
        name: 'data.components.dataDisplay.statistics-card.variants.glassmorphism.name',
        description: 'data.components.dataDisplay.statistics-card.variants.glassmorphism.description',
        demoHTML: `
          <div class="glass-bg-container w-full max-w-6xl p-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Card 1 -->
              <div class="glass-stat-card" style="animation: scaleBlur 0.8s ease-out forwards; opacity: 0; animation-delay: 0.1s;">
                <div class="glass-stat-header">
                  <div class="glass-icon glass-icon-purple">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="glass-trend glass-trend-up">
                    <span>↑ 18%</span>
                  </div>
                </div>
                <div class="glass-stat-body">
                  <p class="glass-label">Monthly Revenue</p>
                  <h3 class="glass-value">$48,592</h3>
                  <svg class="glass-chart" viewBox="0 0 120 40" preserveAspectRatio="none">
                    <path d="M 0,20 Q 15,10 30,15 T 60,12 T 90,8 T 120,5" fill="none" stroke="rgba(168, 85, 247, 0.5)" stroke-width="2" />
                    <path d="M 0,20 Q 15,10 30,15 T 60,12 T 90,8 T 120,5 L 120,40 L 0,40 Z" fill="url(#gradient1)" />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:rgba(168, 85, 247, 0.3);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgba(168, 85, 247, 0);stop-opacity:1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="glass-stat-card" style="animation: scaleBlur 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
                <div class="glass-stat-header">
                  <div class="glass-icon glass-icon-blue">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div class="glass-trend glass-trend-up">
                    <span>↑ 24%</span>
                  </div>
                </div>
                <div class="glass-stat-body">
                  <p class="glass-label">New Subscribers</p>
                  <h3 class="glass-value">2,845</h3>
                  <svg class="glass-chart" viewBox="0 0 120 40" preserveAspectRatio="none">
                    <path d="M 0,25 Q 15,18 30,20 T 60,15 T 90,10 T 120,7" fill="none" stroke="rgba(59, 130, 246, 0.5)" stroke-width="2" />
                    <path d="M 0,25 Q 15,18 30,20 T 60,15 T 90,10 T 120,7 L 120,40 L 0,40 Z" fill="url(#gradient2)" />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:rgba(59, 130, 246, 0.3);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgba(59, 130, 246, 0);stop-opacity:1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="glass-stat-card" style="animation: scaleBlur 0.8s ease-out forwards; opacity: 0; animation-delay: 0.3s;">
                <div class="glass-stat-header">
                  <div class="glass-icon glass-icon-pink">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="glass-trend glass-trend-down">
                    <span>↓ 5%</span>
                  </div>
                </div>
                <div class="glass-stat-body">
                  <p class="glass-label">Engagement Rate</p>
                  <h3 class="glass-value">68.4%</h3>
                  <svg class="glass-chart" viewBox="0 0 120 40" preserveAspectRatio="none">
                    <path d="M 0,15 Q 15,12 30,14 T 60,18 T 90,22 T 120,20" fill="none" stroke="rgba(236, 72, 153, 0.5)" stroke-width="2" />
                    <path d="M 0,15 Q 15,12 30,14 T 60,18 T 90,22 T 120,20 L 120,40 L 0,40 Z" fill="url(#gradient3)" />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:rgba(236, 72, 153, 0.3);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgba(236, 72, 153, 0);stop-opacity:1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes scaleBlur {
            0% {
              opacity: 0;
              transform: scale(0.9);
              filter: blur(10px);
            }
            100% {
              opacity: 1;
              transform: scale(1);
              filter: blur(0);
            }
          }

          .glass-bg-container {
            background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%);
            border-radius: 1.5rem;
          }

          .glass-stat-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1.25rem;
            padding: 1.5rem;
            box-shadow:
              0 8px 32px 0 rgba(31, 38, 135, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .glass-stat-card:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow:
              0 16px 48px 0 rgba(31, 38, 135, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transform: translateY(-5px) scale(1.02);
          }

          .glass-stat-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.25rem;
          }

          .glass-icon {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          }

          .glass-icon-purple {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.6), rgba(147, 51, 234, 0.8));
            color: white;
          }

          .glass-icon-blue {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(37, 99, 235, 0.8));
            color: white;
          }

          .glass-icon-pink {
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(219, 39, 119, 0.8));
            color: white;
          }

          .glass-trend {
            padding: 0.375rem 0.875rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 700;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }

          .glass-trend-up {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }

          .glass-trend-down {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.3);
          }

          .glass-stat-body {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .glass-label {
            font-size: 0.875rem;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 500;
            margin: 0;
          }

          .glass-value {
            font-size: 2rem;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.9);
            margin: 0;
            line-height: 1;
          }

          .glass-chart {
            width: 100%;
            height: 40px;
            margin-top: 0.5rem;
          }
        `
      },

      // Variant 4: Ant Design Statistics Card
      {
        id: 'ant-design',
        name: 'data.components.dataDisplay.statistics-card.variants.ant-design.name',
        description: 'data.components.dataDisplay.statistics-card.variants.ant-design.description',
        demoHTML: `
          <div class="w-full max-w-6xl p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Card 1 -->
              <div class="ant-stat-card" style="animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; opacity: 0; animation-delay: 0.1s;">
                <div class="ant-stat-header">
                  <span class="ant-stat-title">Total Sales</span>
                  <div class="ant-stat-icon-wrapper ant-blue">
                    <svg class="ant-stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </div>
                </div>
                <div class="ant-stat-content">
                  <div class="ant-stat-value">¥126,560</div>
                  <div class="ant-stat-footer">
                    <span class="ant-trend-up">
                      <svg class="ant-trend-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      12.8%
                    </span>
                    <span class="ant-stat-desc">Week-over-week</span>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="ant-stat-card" style="animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; opacity: 0; animation-delay: 0.2s;">
                <div class="ant-stat-header">
                  <span class="ant-stat-title">Daily Active Users</span>
                  <div class="ant-stat-icon-wrapper ant-green">
                    <svg class="ant-stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="ant-stat-content">
                  <div class="ant-stat-value">8,846</div>
                  <div class="ant-stat-footer">
                    <span class="ant-trend-up">
                      <svg class="ant-trend-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      8.1%
                    </span>
                    <span class="ant-stat-desc">Day-over-day</span>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="ant-stat-card" style="animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; opacity: 0; animation-delay: 0.3s;">
                <div class="ant-stat-header">
                  <span class="ant-stat-title">Payment Amount</span>
                  <div class="ant-stat-icon-wrapper ant-orange">
                    <svg class="ant-stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                  </div>
                </div>
                <div class="ant-stat-content">
                  <div class="ant-stat-value">¥6,560</div>
                  <div class="ant-stat-footer">
                    <span class="ant-trend-down">
                      <svg class="ant-trend-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      3.2%
                    </span>
                    <span class="ant-stat-desc">Month-over-month</span>
                  </div>
                </div>
              </div>

              <!-- Card 4 -->
              <div class="ant-stat-card" style="animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; opacity: 0; animation-delay: 0.4s;">
                <div class="ant-stat-header">
                  <span class="ant-stat-title">Conversion Rate</span>
                  <div class="ant-stat-icon-wrapper ant-purple">
                    <svg class="ant-stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                </div>
                <div class="ant-stat-content">
                  <div class="ant-stat-value">60.2%</div>
                  <div class="ant-stat-footer">
                    <span class="ant-trend-up">
                      <svg class="ant-trend-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      5.5%
                    </span>
                    <span class="ant-stat-desc">Compared to last year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
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

          .ant-stat-card {
            background: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            border: 1px solid #f0f0f0;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          .ant-stat-card:hover {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            border-color: #1890ff;
            transform: translateY(-2px);
          }

          .ant-stat-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
          }

          .ant-stat-title {
            color: rgba(0, 0, 0, 0.45);
            font-size: 0.875rem;
            line-height: 1.5;
          }

          .ant-stat-icon-wrapper {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
          }

          .ant-stat-card:hover .ant-stat-icon-wrapper {
            transform: rotate(10deg) scale(1.1);
          }

          .ant-blue {
            background: #e6f7ff;
            color: #1890ff;
          }

          .ant-green {
            background: #f6ffed;
            color: #52c41a;
          }

          .ant-orange {
            background: #fff7e6;
            color: #fa8c16;
          }

          .ant-purple {
            background: #f9f0ff;
            color: #722ed1;
          }

          .ant-stat-icon {
            width: 1.25rem;
            height: 1.25rem;
          }

          .ant-stat-content {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .ant-stat-value {
            font-size: 1.875rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 1.2;
            font-variant-numeric: tabular-nums;
          }

          .ant-stat-footer {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
          }

          .ant-trend-up,
          .ant-trend-down {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .ant-trend-up {
            color: #cf1322;
          }

          .ant-trend-down {
            color: #3f8600;
          }

          .ant-trend-icon {
            width: 0.875rem;
            height: 0.875rem;
          }

          .ant-stat-desc {
            font-size: 0.875rem;
            color: rgba(0, 0, 0, 0.45);
          }
        `
      },

      // Variant 5: Neumorphism Statistics Card
      {
        id: 'neumorphism',
        name: 'data.components.dataDisplay.statistics-card.variants.neumorphism.name',
        description: 'data.components.dataDisplay.statistics-card.variants.neumorphism.description',
        demoHTML: `
          <div class="neomorph-container w-full max-w-6xl p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Card 1 -->
              <div class="neomorph-stat-card" style="animation: rotateIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; animation-delay: 0.1s;">
                <div class="neomorph-icon-circle neomorph-gradient-1">
                  <svg class="neomorph-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="neomorph-content">
                  <p class="neomorph-label">Total Balance</p>
                  <h3 class="neomorph-value">$245,670</h3>
                  <div class="neomorph-progress-container">
                    <div class="neomorph-progress-bar neomorph-progress-1" style="width: 78%; animation: progressGrow 1.5s ease-out 0.3s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <div class="neomorph-footer">
                    <span class="neomorph-badge neomorph-badge-success">Active</span>
                    <span class="neomorph-percentage">+12.5%</span>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="neomorph-stat-card" style="animation: rotateIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; animation-delay: 0.2s;">
                <div class="neomorph-icon-circle neomorph-gradient-2">
                  <svg class="neomorph-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="neomorph-content">
                  <p class="neomorph-label">Total Orders</p>
                  <h3 class="neomorph-value">15,824</h3>
                  <div class="neomorph-progress-container">
                    <div class="neomorph-progress-bar neomorph-progress-2" style="width: 65%; animation: progressGrow 1.5s ease-out 0.4s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <div class="neomorph-footer">
                    <span class="neomorph-badge neomorph-badge-info">Processing</span>
                    <span class="neomorph-percentage">+8.3%</span>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="neomorph-stat-card" style="animation: rotateIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; animation-delay: 0.3s;">
                <div class="neomorph-icon-circle neomorph-gradient-3">
                  <svg class="neomorph-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <div class="neomorph-content">
                  <p class="neomorph-label">Growth Rate</p>
                  <h3 class="neomorph-value">24.8%</h3>
                  <div class="neomorph-progress-container">
                    <div class="neomorph-progress-bar neomorph-progress-3" style="width: 90%; animation: progressGrow 1.5s ease-out 0.5s forwards; transform-origin: left; transform: scaleX(0);"></div>
                  </div>
                  <div class="neomorph-footer">
                    <span class="neomorph-badge neomorph-badge-warning">Trending</span>
                    <span class="neomorph-percentage">+18.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes rotateIn {
            0% {
              opacity: 0;
              transform: rotate(-200deg) scale(0);
            }
            100% {
              opacity: 1;
              transform: rotate(0deg) scale(1);
            }
          }

          @keyframes progressGrow {
            to {
              transform: scaleX(1);
            }
          }

          .neomorph-container {
            background: #e0e5ec;
            border-radius: 1.5rem;
          }

          .neomorph-stat-card {
            background: #e0e5ec;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow:
              12px 12px 24px #b8bdc4,
              -12px -12px 24px #ffffff;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .neomorph-stat-card:hover {
            box-shadow:
              16px 16px 32px #b8bdc4,
              -16px -16px 32px #ffffff;
            transform: translateY(-5px);
          }

          .neomorph-icon-circle {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
              inset 6px 6px 12px #b8bdc4,
              inset -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }

          .neomorph-stat-card:hover .neomorph-icon-circle {
            transform: scale(1.1) rotate(10deg);
          }

          .neomorph-gradient-1 {
            background: linear-gradient(145deg, #4ade80, #10b981);
          }

          .neomorph-gradient-2 {
            background: linear-gradient(145deg, #60a5fa, #3b82f6);
          }

          .neomorph-gradient-3 {
            background: linear-gradient(145deg, #fbbf24, #f59e0b);
          }

          .neomorph-icon {
            width: 2.5rem;
            height: 2.5rem;
            color: white;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }

          .neomorph-content {
            text-align: center;
          }

          .neomorph-label {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 600;
            margin: 0 0 0.75rem 0;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .neomorph-value {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1f2937;
            margin: 0 0 1.25rem 0;
            line-height: 1;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
          }

          .neomorph-progress-container {
            background: #d1d6dd;
            border-radius: 9999px;
            height: 0.75rem;
            margin-bottom: 1.25rem;
            box-shadow:
              inset 3px 3px 6px #b8bdc4,
              inset -3px -3px 6px #e8edf4;
            overflow: hidden;
          }

          .neomorph-progress-bar {
            height: 100%;
            border-radius: 9999px;
            transition: width 0.3s ease;
          }

          .neomorph-progress-1 {
            background: linear-gradient(90deg, #10b981, #4ade80);
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
          }

          .neomorph-progress-2 {
            background: linear-gradient(90deg, #3b82f6, #60a5fa);
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
          }

          .neomorph-progress-3 {
            background: linear-gradient(90deg, #f59e0b, #fbbf24);
            box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
          }

          .neomorph-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .neomorph-badge {
            padding: 0.375rem 0.875rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            box-shadow:
              4px 4px 8px #b8bdc4,
              -4px -4px 8px #ffffff;
          }

          .neomorph-badge-success {
            background: linear-gradient(145deg, #dcfce7, #bbf7d0);
            color: #166534;
          }

          .neomorph-badge-info {
            background: linear-gradient(145deg, #dbeafe, #bfdbfe);
            color: #1e40af;
          }

          .neomorph-badge-warning {
            background: linear-gradient(145deg, #fef3c7, #fde68a);
            color: #92400e;
          }

          .neomorph-percentage {
            font-size: 0.875rem;
            font-weight: 700;
            color: #10b981;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
          }
        `
      }
    ]
  },

  // Animated Counter - 动画计数器
  {
    id: 'animated-counter',
    title: 'data.components.dataDisplay.animated-counter.title',
    description: 'data.components.dataDisplay.animated-counter.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.dataDisplay.animated-counter.variants.minimalism.name',
        description: 'data.components.dataDisplay.animated-counter.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 class="font-light text-2xl mb-2 text-gray-900">
                {{t:demo.animatedCounter.minimalism.title}}
              </h3>
              <p class="text-gray-500 mb-8 text-sm font-light">{{t:demo.animatedCounter.minimalism.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Users Counter -->
                <div class="text-center">
                  <div class="text-6xl font-light mb-2 counter-min" data-target="12458">0</div>
                  <p class="text-gray-500 text-sm font-light uppercase tracking-wider">{{t:demo.animatedCounter.minimalism.users}}</p>
                </div>

                <!-- Projects Counter -->
                <div class="text-center">
                  <div class="text-6xl font-light mb-2 counter-min" data-target="3240">0</div>
                  <p class="text-gray-500 text-sm font-light uppercase tracking-wider">{{t:demo.animatedCounter.minimalism.projects}}</p>
                </div>

                <!-- Revenue Counter -->
                <div class="text-center">
                  <div class="text-6xl font-light mb-2">
                    <span class="text-2xl align-top">$</span><span class="counter-min" data-target="98750">0</span>
                  </div>
                  <p class="text-gray-500 text-sm font-light uppercase tracking-wider">{{t:demo.animatedCounter.minimalism.revenue}}</p>
                </div>
              </div>
            </div>
          </div>

          <script>
            function animateCounter(element, target, duration = 2000) {
              const start = 0;
              const increment = target / (duration / 16);
              let current = start;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  element.textContent = target.toLocaleString();
                  clearInterval(timer);
                } else {
                  element.textContent = Math.floor(current).toLocaleString();
                }
              }, 16);
            }

            document.querySelectorAll('.counter-min').forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'));
              animateCounter(counter, target);
            });
          </script>
        `,
        customStyles: `
          .counter-min {
            color: #000;
            transition: color 0.3s ease;
          }
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.dataDisplay.animated-counter.variants.skeuomorphism.name',
        description: 'data.components.dataDisplay.animated-counter.variants.skeuomorphism.description',
        demoHTML: `
          <div class="w-full max-w-4xl mx-auto p-6">
            <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl p-8">
              <h3 class="font-bold text-2xl mb-2 text-gray-800" style="text-shadow: 1px 1px 2px rgba(255,255,255,0.8)">
                {{t:demo.animatedCounter.skeuomorphism.title}}
              </h3>
              <p class="text-gray-700 mb-8 text-sm">{{t:demo.animatedCounter.skeuomorphism.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Flip Counter Style -->
                <div class="counter-skeuo-card">
                  <div class="flip-counter-container">
                    <div class="flip-digit counter-skeuo" data-target="42389">0</div>
                  </div>
                  <p class="counter-label">{{t:demo.animatedCounter.skeuomorphism.downloads}}</p>
                </div>

                <div class="counter-skeuo-card">
                  <div class="flip-counter-container">
                    <div class="flip-digit counter-skeuo" data-target="5678">0</div>
                  </div>
                  <p class="counter-label">{{t:demo.animatedCounter.skeuomorphism.sales}}</p>
                </div>

                <div class="counter-skeuo-card">
                  <div class="flip-counter-container">
                    <div class="flip-digit counter-skeuo" data-target="99">0</div>
                    <span class="percentage-sign">%</span>
                  </div>
                  <p class="counter-label">{{t:demo.animatedCounter.skeuomorphism.satisfaction}}</p>
                </div>
              </div>
            </div>
          </div>

          <script>
            function animateCounterSkeuo(element, target) {
              const duration = 2000;
              const start = 0;
              const increment = target / (duration / 16);
              let current = start;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  element.textContent = target.toLocaleString();
                  clearInterval(timer);
                } else {
                  element.textContent = Math.floor(current).toLocaleString();
                }
              }, 16);
            }

            document.querySelectorAll('.counter-skeuo').forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'));
              setTimeout(() => animateCounterSkeuo(counter, target), 300);
            });
          </script>
        `,
        customStyles: `
          .counter-skeuo-card {
            background: linear-gradient(145deg, #e6e6e6, #ffffff);
            border-radius: 16px;
            padding: 2rem;
            text-align: center;
            box-shadow: 8px 8px 16px rgba(0,0,0,0.1),
                        -8px -8px 16px rgba(255,255,255,0.9),
                        inset 2px 2px 4px rgba(0,0,0,0.05);
          }

          .flip-counter-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .flip-digit {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(180deg, #667eea 0%, #4c63d2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-width: 120px;
          }

          .percentage-sign {
            font-size: 2rem;
            font-weight: 700;
            color: #667eea;
            margin-left: 0.25rem;
          }

          .counter-label {
            margin-top: 1rem;
            font-size: 0.875rem;
            font-weight: 600;
            color: #4b5563;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
        `
      },
      {
        id: 'material-design',
        name: 'data.components.dataDisplay.animated-counter.variants.material-design.name',
        description: 'data.components.dataDisplay.animated-counter.variants.material-design.description',
        demoHTML: `
          <div class="w-full max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="font-medium text-2xl mb-2 text-gray-900">
                {{t:demo.animatedCounter.material.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.animatedCounter.material.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="material-counter-card bg-blue-500">
                  <svg class="counter-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="counter-value counter-material" data-target="24567">0</div>
                  <p class="counter-label-material">{{t:demo.animatedCounter.material.members}}</p>
                </div>

                <div class="material-counter-card bg-green-500">
                  <svg class="counter-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="counter-value counter-material" data-target="8942">0</div>
                  <p class="counter-label-material">{{t:demo.animatedCounter.material.completed}}</p>
                </div>

                <div class="material-counter-card bg-purple-500">
                  <svg class="counter-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="counter-value counter-material" data-target="1567">0</div>
                  <p class="counter-label-material">{{t:demo.animatedCounter.material.active}}</p>
                </div>

                <div class="material-counter-card bg-orange-500">
                  <svg class="counter-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="counter-value counter-material" data-target="4.8" data-decimals="1">0</div>
                  <p class="counter-label-material">{{t:demo.animatedCounter.material.rating}}</p>
                </div>
              </div>
            </div>
          </div>

          <script>
            function animateMaterialCounter(element, target, hasDecimals = false) {
              const duration = 2000;
              const start = 0;
              const increment = target / (duration / 16);
              let current = start;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  element.textContent = hasDecimals ? target.toFixed(1) : target.toLocaleString();
                  clearInterval(timer);
                } else {
                  element.textContent = hasDecimals ? current.toFixed(1) : Math.floor(current).toLocaleString();
                }
              }, 16);
            }

            document.querySelectorAll('.counter-material').forEach(counter => {
              const target = parseFloat(counter.getAttribute('data-target'));
              const hasDecimals = counter.hasAttribute('data-decimals');
              setTimeout(() => animateMaterialCounter(counter, target, hasDecimals), 500);
            });
          </script>
        `,
        customStyles: `
          .material-counter-card {
            padding: 1.5rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            color: white;
          }

          .material-counter-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
          }

          .counter-icon {
            width: 40px;
            height: 40px;
            margin: 0 auto 1rem;
            opacity: 0.9;
          }

          .counter-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .counter-label-material {
            font-size: 0.875rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            opacity: 0.9;
          }
        `
      },
      {
        id: 'terminal-cli',
        name: 'data.components.dataDisplay.animated-counter.variants.terminal-cli.name',
        description: 'data.components.dataDisplay.animated-counter.variants.terminal-cli.description',
        demoHTML: `
          <div class="w-full max-w-4xl mx-auto p-6">
            <div class="bg-black rounded-lg border border-green-500 p-8 font-mono" style="box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);">
              <div class="flex items-center mb-6">
                <span class="text-green-400 mr-2">$</span>
                <span class="text-green-400">system-stats --live</span>
                <span class="ml-2 animate-pulse text-green-400">_</span>
              </div>

              <div class="space-y-4">
                <div class="terminal-stat">
                  <span class="text-green-500">[CPU_USAGE]</span>
                  <span class="text-white mx-4">=></span>
                  <span class="counter-terminal text-green-400" data-target="87" data-suffix="%">0%</span>
                </div>

                <div class="terminal-stat">
                  <span class="text-green-500">[MEMORY_USED]</span>
                  <span class="text-white mx-4">=></span>
                  <span class="counter-terminal text-green-400" data-target="14.2" data-decimals="1" data-suffix="GB">0.0GB</span>
                </div>

                <div class="terminal-stat">
                  <span class="text-green-500">[ACTIVE_PROCESSES]</span>
                  <span class="text-white mx-4">=></span>
                  <span class="counter-terminal text-green-400" data-target="342">0</span>
                </div>

                <div class="terminal-stat">
                  <span class="text-green-500">[NETWORK_THROUGHPUT]</span>
                  <span class="text-white mx-4">=></span>
                  <span class="counter-terminal text-green-400" data-target="1024" data-suffix="MB/s">0MB/s</span>
                </div>
              </div>

              <div class="mt-6 text-green-500 text-sm opacity-60">
                > {{t:demo.animatedCounter.terminal.refreshing}}
              </div>
            </div>
          </div>

          <script>
            function animateTerminalCounter(element, target, hasDecimals, suffix) {
              const duration = 1500;
              const start = 0;
              const increment = target / (duration / 16);
              let current = start;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  element.textContent = (hasDecimals ? target.toFixed(1) : Math.floor(target)) + suffix;
                  clearInterval(timer);
                } else {
                  element.textContent = (hasDecimals ? current.toFixed(1) : Math.floor(current)) + suffix;
                }
              }, 16);
            }

            document.querySelectorAll('.counter-terminal').forEach(counter => {
              const target = parseFloat(counter.getAttribute('data-target'));
              const hasDecimals = counter.hasAttribute('data-decimals');
              const suffix = counter.getAttribute('data-suffix') || '';
              setTimeout(() => animateTerminalCounter(counter, target, hasDecimals, suffix), 400);
            });
          </script>
        `,
        customStyles: `
          .terminal-stat {
            display: flex;
            align-items: center;
            font-size: 1.125rem;
            padding: 0.5rem 0;
            border-left: 2px solid rgba(0, 255, 0, 0.3);
            padding-left: 1rem;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .animate-pulse {
            animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `
      },
      {
        id: 'cyberpunk',
        name: 'data.components.dataDisplay.animated-counter.variants.cyberpunk.name',
        description: 'data.components.dataDisplay.animated-counter.variants.cyberpunk.description',
        demoHTML: `
          <div class="w-full max-w-4xl mx-auto p-6">
            <div class="bg-black rounded-lg border-2 border-cyan-500 p-8" style="box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);">
              <h3 class="font-black text-2xl mb-2 text-cyan-400 uppercase" style="text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);">
                {{t:demo.animatedCounter.cyberpunk.title}}
              </h3>
              <p class="text-purple-300 mb-8 text-sm font-bold">{{t:demo.animatedCounter.cyberpunk.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="cyber-counter-card border-cyan-400">
                  <div class="cyber-glow-cyan"></div>
                  <div class="counter-cyber text-cyan-300" data-target="999999" style="text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);">0</div>
                  <p class="cyber-label text-cyan-400">{{t:demo.animatedCounter.cyberpunk.neural}}</p>
                </div>

                <div class="cyber-counter-card border-purple-400">
                  <div class="cyber-glow-purple"></div>
                  <div class="counter-cyber text-purple-300" data-target="88888" style="text-shadow: 0 0 10px rgba(168, 85, 247, 0.8);">0</div>
                  <p class="cyber-label text-purple-400">{{t:demo.animatedCounter.cyberpunk.quantum}}</p>
                </div>

                <div class="cyber-counter-card border-pink-400">
                  <div class="cyber-glow-pink"></div>
                  <div class="counter-cyber text-pink-300" data-target="42069" style="text-shadow: 0 0 10px rgba(236, 72, 153, 0.8);">0</div>
                  <p class="cyber-label text-pink-400">{{t:demo.animatedCounter.cyberpunk.cyber}}</p>
                </div>

                <div class="cyber-counter-card border-green-400">
                  <div class="cyber-glow-green"></div>
                  <div class="counter-cyber text-green-300" data-target="31337" style="text-shadow: 0 0 10px rgba(34, 197, 94, 0.8);">0</div>
                  <p class="cyber-label text-green-400">{{t:demo.animatedCounter.cyberpunk.matrix}}</p>
                </div>
              </div>
            </div>
          </div>

          <script>
            function animateCyberCounter(element, target) {
              const duration = 2500;
              const start = 0;
              const increment = target / (duration / 16);
              let current = start;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  element.textContent = target.toLocaleString();
                  clearInterval(timer);
                } else {
                  // Add glitch effect
                  const value = Math.floor(current);
                  element.textContent = Math.random() > 0.9 ? '█'.repeat(value.toString().length) : value.toLocaleString();
                }
              }, 16);
            }

            document.querySelectorAll('.counter-cyber').forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'));
              setTimeout(() => animateCyberCounter(counter, target), 600);
            });
          </script>
        `,
        customStyles: `
          .cyber-counter-card {
            position: relative;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.8));
            border: 2px solid;
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            overflow: hidden;
          }

          .cyber-glow-cyan,
          .cyber-glow-purple,
          .cyber-glow-pink,
          .cyber-glow-green {
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent 70%);
            opacity: 0.5;
            animation: pulse-glow 3s ease-in-out infinite;
          }

          .cyber-glow-purple {
            background: radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent 70%);
          }

          .cyber-glow-pink {
            background: radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent 70%);
          }

          .cyber-glow-green {
            background: radial-gradient(circle, rgba(34, 197, 94, 0.1), transparent 70%);
          }

          @keyframes pulse-glow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }

          .counter-cyber {
            position: relative;
            z-index: 10;
            font-size: 3rem;
            font-weight: 900;
            font-family: 'Courier New', monospace;
            margin-bottom: 0.5rem;
          }

          .cyber-label {
            position: relative;
            z-index: 10;
            font-size: 0.875rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
        `
      }
    ]
  }
];
