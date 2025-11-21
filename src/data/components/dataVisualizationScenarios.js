/**
 * Data Visualization Scenarios
 * Complete page templates for different business contexts
 */

// Enterprise Dashboard Scenario
export const enterpriseDashboard = {
  id: 'enterprise-dashboard',
  name: {
    'zh-cn': '企业仪表板',
    'en-US': 'Enterprise Dashboard'
  },
  description: {
    'zh-cn': '完整的企业级仪表板，展示销售KPI、营收趋势和团队绩效',
    'en-US': 'Complete enterprise-level dashboard showcasing sales KPIs, revenue trends, and team performance'
  },
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Enterprise Dashboard</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 min-h-screen">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">ED</span>
              </div>
              <h1 class="text-xl font-semibold text-gray-900">Enterprise Dashboard</h1>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-sm text-gray-500">Last updated: 2 min ago</span>
              <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="p-6">
        <!-- KPI Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- Revenue Card -->
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-500">Total Revenue</h3>
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-green-600">💰</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-bold text-gray-900">$1,247,000</p>
              <div class="flex items-center text-sm">
                <span class="text-green-600 flex items-center">
                  ↗ 12.5%
                </span>
                <span class="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          </div>

          <!-- Customers Card -->
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-500">Active Customers</h3>
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-blue-600">👥</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-bold text-gray-900">3,521</p>
              <div class="flex items-center text-sm">
                <span class="text-green-600 flex items-center">
                  ↗ 8.7%
                </span>
                <span class="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          </div>

          <!-- Conversion Card -->
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-500">Conversion Rate</h3>
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span class="text-purple-600">📈</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-bold text-gray-900">3.2%</p>
              <div class="flex items-center text-sm">
                <span class="text-red-600 flex items-center">
                  ↘ -2.1%
                </span>
                <span class="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          </div>

          <!-- Satisfaction Card -->
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-500">Customer Satisfaction</h3>
              <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span class="text-yellow-600">⭐</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-2xl font-bold text-gray-900">4.6/5</p>
              <div class="flex items-center text-sm">
                <span class="text-green-600 flex items-center">
                  ↗ 5.2%
                </span>
                <span class="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Revenue Chart -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md">6M</button>
                <button class="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">1Y</button>
              </div>
            </div>
            <div id="revenue-chart" class="h-64 flex items-end space-x-2">
              <!-- Simple Bar Chart Visualization -->
              <div class="flex-1 bg-blue-100 rounded-t" style="height: 60%"></div>
              <div class="flex-1 bg-blue-200 rounded-t" style="height: 75%"></div>
              <div class="flex-1 bg-blue-300 rounded-t" style="height: 45%"></div>
              <div class="flex-1 bg-blue-400 rounded-t" style="height: 80%"></div>
              <div class="flex-1 bg-blue-500 rounded-t" style="height: 90%"></div>
              <div class="flex-1 bg-blue-600 rounded-t" style="height: 100%"></div>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          <!-- Geographic Distribution -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900">Sales by Region</h3>
              <button class="text-blue-600 text-sm hover:underline">View Details</button>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-sm text-gray-700">North America</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="w-3/4 h-full bg-blue-500"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-900">$450K</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm text-gray-700">Europe</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="w-3/5 h-full bg-green-500"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-900">$380K</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span class="text-sm text-gray-700">Asia Pacific</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="w-1/2 h-full bg-yellow-500"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-900">$290K</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Performance Table -->
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900">Team Performance</h3>
              <button class="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View All
              </button>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team Member
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Achieved
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span class="text-white text-sm">👩‍💼</span>
                      </div>
                      <div class="ml-3">
                        <div class="text-sm font-medium text-gray-900">Sarah Chen</div>
                        <div class="text-sm text-gray-500">Senior Sales Manager</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$50,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$62,000</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="w-full h-full bg-green-500"></div>
                      </div>
                      <span class="ml-2 text-sm text-green-600 font-medium">124%</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      #1
                    </span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span class="text-white text-sm">👨‍💼</span>
                      </div>
                      <div class="ml-3">
                        <div class="text-sm font-medium text-gray-900">Michael Rodriguez</div>
                        <div class="text-sm text-gray-500">Account Manager</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$45,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$51,000</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="w-4/5 h-full bg-blue-500"></div>
                      </div>
                      <span class="ml-2 text-sm text-blue-600 font-medium">113%</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      #2
                    </span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                        <span class="text-white text-sm">👩‍💻</span>
                      </div>
                      <div class="ml-3">
                        <div class="text-sm font-medium text-gray-900">Emma Thompson</div>
                        <div class="text-sm text-gray-500">Sales Representative</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$40,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$38,500</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="w-3/4 h-full bg-yellow-500"></div>
                      </div>
                      <span class="ml-2 text-sm text-yellow-600 font-medium">96%</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      #3
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </body>
    </html>
  `
};

// Financial Trading Platform
export const financialPlatform = {
  id: 'financial-platform',
  name: {
    'zh-cn': '金融交易平台',
    'en-US': 'Financial Trading Platform'
  },
  description: {
    'zh-cn': '专业的金融交易界面，包含股票走势、投资组合和市场数据',
    'en-US': 'Professional financial trading interface with stock trends, portfolio management, and market data'
  },
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Financial Trading Platform</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        .pulse-green { animation: pulse 2s infinite; background-color: #10B981; }
        .pulse-red { animation: pulse 2s infinite; background-color: #EF4444; }
      </style>
    </head>
    <body class="bg-gray-50 min-h-screen">
      <!-- 統一的外部容器背景 -->
      <div class="bg-gray-50 min-h-screen">
        <!-- 深色主題內容区域 -->
        <div class="bg-gray-900 text-white min-h-screen">
          <!-- Header -->
      <header class="bg-gray-800 border-b border-gray-700">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-6">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">📈</span>
                </div>
                <h1 class="text-xl font-bold">TradePro</h1>
              </div>
              <nav class="flex space-x-6">
                <a href="javascript:void(0)" class="text-green-400 border-b-2 border-green-400 pb-2">Dashboard</a>
                <a href="javascript:void(0)" class="text-gray-400 hover:text-white">Portfolio</a>
                <a href="javascript:void(0)" class="text-gray-400 hover:text-white">Markets</a>
                <a href="javascript:void(0)" class="text-gray-400 hover:text-white">Research</a>
              </nav>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <div class="text-sm text-gray-400">Portfolio Value</div>
                <div class="text-lg font-bold text-green-400">$847,293.45</div>
              </div>
              <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="p-6">
        <!-- Market Overview -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">S&P 500</h3>
              <span class="text-green-400 text-sm">+1.24%</span>
            </div>
            <div class="text-2xl font-bold">4,247.84</div>
            <div class="text-sm text-green-400">+52.73</div>
          </div>

          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">NASDAQ</h3>
              <span class="text-red-400 text-sm">-0.87%</span>
            </div>
            <div class="text-2xl font-bold">13,021.39</div>
            <div class="text-sm text-red-400">-114.22</div>
          </div>

          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">DOW JONES</h3>
              <span class="text-green-400 text-sm">+0.56%</span>
            </div>
            <div class="text-2xl font-bold">33,984.93</div>
            <div class="text-sm text-green-400">+188.57</div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Main Chart -->
          <div class="lg:col-span-2 bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-lg font-bold">AAPL - Apple Inc.</h3>
                <div class="flex items-center space-x-2 mt-1">
                  <span class="text-2xl font-bold">$178.25</span>
                  <span class="text-green-400">+$2.15 (+1.22%)</span>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">1D</button>
                <button class="px-3 py-1 text-sm bg-green-600 text-white rounded">1W</button>
                <button class="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">1M</button>
                <button class="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">1Y</button>
              </div>
            </div>

            <!-- Chart Area -->
            <div class="h-64 bg-gray-900 rounded-lg p-4 mb-4 relative">
              <svg class="w-full h-full" viewBox="0 0 400 200">
                <!-- Grid Lines -->
                <defs>
                  <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                <!-- Price Line -->
                <polyline
                  points="0,180 50,160 100,140 150,120 200,100 250,90 300,80 350,70 400,60"
                  fill="none"
                  stroke="#10B981"
                  stroke-width="2"
                />

                <!-- Area Fill -->
                <polygon
                  points="0,180 50,160 100,140 150,120 200,100 250,90 300,80 350,70 400,60 400,200 0,200"
                  fill="url(#greenGradient)"
                  opacity="0.3"
                />

                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#10B981;stop-opacity:0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <!-- Trading Actions -->
            <div class="flex space-x-4">
              <button class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
                Buy
              </button>
              <button class="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium">
                Sell
              </button>
              <button class="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium">
                Watch
              </button>
            </div>
          </div>

          <!-- Portfolio & Watchlist -->
          <div class="space-y-6">
            <!-- Portfolio -->
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Portfolio Performance</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-400">Total Value</span>
                  <span class="text-lg font-bold text-green-400">$847,293</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-400">Today's Change</span>
                  <span class="text-green-400">+$12,547 (+1.5%)</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-400">Total Return</span>
                  <span class="text-green-400">+$147,293 (+21.1%)</span>
                </div>
              </div>

              <!-- Pie Chart Representation -->
              <div class="mt-6">
                <h4 class="text-sm font-medium text-gray-400 mb-3">Allocation</h4>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span class="text-sm">Technology</span>
                    </div>
                    <span class="text-sm">35%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span class="text-sm">Healthcare</span>
                    </div>
                    <span class="text-sm">25%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span class="text-sm">Finance</span>
                    </div>
                    <span class="text-sm">20%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span class="text-sm">Energy</span>
                    </div>
                    <span class="text-sm">12%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span class="text-sm">Real Estate</span>
                    </div>
                    <span class="text-sm">8%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Watchlist -->
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Watchlist</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">TSLA</div>
                    <div class="text-sm text-gray-400">Tesla Inc.</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">$267.89</div>
                    <div class="text-sm text-green-400">+3.24%</div>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">MSFT</div>
                    <div class="text-sm text-gray-400">Microsoft Corp.</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">$412.73</div>
                    <div class="text-sm text-red-400">-1.12%</div>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">NVDA</div>
                    <div class="text-sm text-gray-400">NVIDIA Corp.</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">$583.21</div>
                    <div class="text-sm text-green-400">+2.67%</div>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">AMZN</div>
                    <div class="text-sm text-gray-400">Amazon.com Inc.</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">$147.89</div>
                    <div class="text-sm text-green-400">+0.89%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Market News -->
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Market News</h3>
              <div class="space-y-3">
                <div class="border-l-2 border-green-500 pl-3">
                  <div class="text-sm font-medium">Fed Signals Rate Cuts</div>
                  <div class="text-xs text-gray-400 mt-1">2 hours ago</div>
                </div>

                <div class="border-l-2 border-blue-500 pl-3">
                  <div class="text-sm font-medium">Tech Stocks Rally</div>
                  <div class="text-xs text-gray-400 mt-1">4 hours ago</div>
                </div>

                <div class="border-l-2 border-yellow-500 pl-3">
                  <div class="text-sm font-medium">Oil Prices Surge</div>
                  <div class="text-xs text-gray-400 mt-1">6 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </body>
    </html>
  `
};

// Analytics Platform Scenario
export const analyticsPlatform = {
  id: 'analytics-platform',
  name: {
    'zh-cn': '分析平台',
    'en-US': 'Analytics Platform'
  },
  description: {
    'zh-cn': '专业的数据分析平台，展示用户行为、流量统计和转化分析',
    'en-US': 'Professional data analytics platform showcasing user behavior, traffic statistics, and conversion analysis'
  },
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Analytics Platform</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">📊</span>
              </div>
              <h1 class="text-xl font-semibold text-gray-900">Analytics Hub</h1>
            </div>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
              <button class="bg-purple-600 text-white px-4 py-2 rounded-md text-sm">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="p-6 space-y-6">
        <!-- Overview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600 text-xl">👥</span>
                </div>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-500">Total Users</div>
                <div class="text-2xl font-bold text-gray-900">47,293</div>
                <div class="text-sm text-green-600">+12% from last month</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-green-600 text-xl">📈</span>
                </div>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-500">Page Views</div>
                <div class="text-2xl font-bold text-gray-900">189,429</div>
                <div class="text-sm text-green-600">+8.2% from last month</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span class="text-yellow-600 text-xl">🎯</span>
                </div>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-500">Conversion Rate</div>
                <div class="text-2xl font-bold text-gray-900">3.24%</div>
                <div class="text-sm text-red-600">-0.3% from last month</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600 text-xl">💰</span>
                </div>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-500">Revenue</div>
                <div class="text-2xl font-bold text-gray-900">$89,247</div>
                <div class="text-sm text-green-600">+15.7% from last month</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Traffic & Conversion Funnel -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Traffic Chart -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900">Traffic Overview</h3>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded">Daily</button>
                <button class="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded">Weekly</button>
              </div>
            </div>

            <div class="h-64">
              <!-- Line Chart Area -->
              <div class="relative h-full">
                <svg class="w-full h-full" viewBox="0 0 300 200">
                  <defs>
                    <linearGradient id="trafficGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:0.3" />
                      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0" />
                    </linearGradient>
                  </defs>

                  <!-- Area -->
                  <polygon
                    points="0,180 50,160 100,140 150,120 200,100 250,90 300,70 300,200 0,200"
                    fill="url(#trafficGradient)"
                  />

                  <!-- Line -->
                  <polyline
                    points="0,180 50,160 100,140 150,120 200,100 250,90 300,70"
                    fill="none"
                    stroke="#8B5CF6"
                    stroke-width="3"
                  />

                  <!-- Dots -->
                  <circle cx="50" cy="160" r="4" fill="#8B5CF6" />
                  <circle cx="100" cy="140" r="4" fill="#8B5CF6" />
                  <circle cx="150" cy="120" r="4" fill="#8B5CF6" />
                  <circle cx="200" cy="100" r="4" fill="#8B5CF6" />
                  <circle cx="250" cy="90" r="4" fill="#8B5CF6" />
                </svg>
              </div>

              <div class="flex justify-between text-xs text-gray-500 mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          <!-- Conversion Funnel -->
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">Conversion Funnel</h3>

            <div class="space-y-4">
              <div class="relative">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Page Visits</span>
                  <span class="text-sm font-bold text-gray-900">47,293</span>
                </div>
                <div class="w-full h-8 bg-purple-200 rounded-lg overflow-hidden">
                  <div class="w-full h-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium">
                    100%
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Product Views</span>
                  <span class="text-sm font-bold text-gray-900">23,647</span>
                </div>
                <div class="w-full h-8 bg-blue-200 rounded-lg overflow-hidden">
                  <div class="w-1/2 h-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                    50%
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Add to Cart</span>
                  <span class="text-sm font-bold text-gray-900">9,458</span>
                </div>
                <div class="w-full h-8 bg-green-200 rounded-lg overflow-hidden">
                  <div class="w-1/5 h-full bg-green-500 flex items-center justify-center text-white text-xs font-medium">
                    20%
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Checkout</span>
                  <span class="text-sm font-bold text-gray-900">3,783</span>
                </div>
                <div class="w-full h-8 bg-yellow-200 rounded-lg overflow-hidden">
                  <div class="w-1/12 h-full bg-yellow-500 flex items-center justify-center text-white text-xs font-medium">
                    8%
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Purchase</span>
                  <span class="text-sm font-bold text-gray-900">1,531</span>
                </div>
                <div class="w-full h-8 bg-red-200 rounded-lg overflow-hidden">
                  <div class="w-1/30 h-full bg-red-500 flex items-center justify-center text-white text-xs font-medium">
                    3.2%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Demographics & Top Pages -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- User Demographics -->
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">User Demographics</h3>

            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span>Desktop</span>
                  <span class="font-medium">65%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 65%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span>Mobile</span>
                  <span class="font-medium">28%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 28%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span>Tablet</span>
                  <span class="font-medium">7%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-500 h-2 rounded-full" style="width: 7%"></div>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <h4 class="text-sm font-medium text-gray-700 mb-3">Age Groups</h4>
              <div class="flex justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" stroke-width="10"/>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" stroke-width="10"
                    stroke-dasharray="94.2" stroke-dashoffset="23.6" transform="rotate(-90 60 60)"/>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#10B981" stroke-width="10"
                    stroke-dasharray="62.8" stroke-dashoffset="62.8" transform="rotate(50 60 60)"/>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#F59E0B" stroke-width="10"
                    stroke-dasharray="31.4" stroke-dashoffset="31.4" transform="rotate(130 60 60)"/>
                </svg>
              </div>
              <div class="mt-3 space-y-1 text-xs">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>18-25</span>
                  </div>
                  <span>30%</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>26-35</span>
                  </div>
                  <span>40%</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>36-50</span>
                  </div>
                  <span>20%</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>50+</span>
                  </div>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Top Pages -->
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-medium text-gray-900 truncate">/homepage</div>
                  <div class="text-xs text-gray-500">Homepage</div>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">24,893</div>
                  <div class="text-xs text-green-600">+12%</div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-medium text-gray-900 truncate">/products</div>
                  <div class="text-xs text-gray-500">Product Catalog</div>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">18,247</div>
                  <div class="text-xs text-green-600">+8%</div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-medium text-gray-900 truncate">/about</div>
                  <div class="text-xs text-gray-500">About Us</div>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">7,156</div>
                  <div class="text-xs text-red-600">-3%</div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-medium text-gray-900 truncate">/contact</div>
                  <div class="text-xs text-gray-500">Contact Page</div>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">3,892</div>
                  <div class="text-xs text-green-600">+15%</div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-medium text-gray-900 truncate">/blog</div>
                  <div class="text-xs text-gray-500">Blog Posts</div>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">2,547</div>
                  <div class="text-xs text-gray-500">0%</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Real-time Activity -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900">Real-time Activity</h3>
              <div class="flex items-center space-x-1">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-xs text-gray-500">Live</span>
              </div>
            </div>

            <div class="text-center mb-6">
              <div class="text-3xl font-bold text-green-600">1,247</div>
              <div class="text-sm text-gray-500">Active users right now</div>
            </div>

            <div class="space-y-3">
              <div class="text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
                Recent Activity
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-gray-700">User from New York visited /products</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700">Purchase completed - $129.99</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700">User from London signed up</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span class="text-sm text-gray-700">Cart abandoned - $79.50</span>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-sm text-gray-700">Support ticket created</span>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200">
              <div class="text-xs text-gray-500 uppercase tracking-wide font-medium mb-3">
                Top Countries
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span>🇺🇸 United States</span>
                  <span>432</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span>🇬🇧 United Kingdom</span>
                  <span>287</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span>🇨🇦 Canada</span>
                  <span>193</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span>🇩🇪 Germany</span>
                  <span>156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
    </html>
  `
};

// Real-time Monitoring Scenario
export const realTimeMonitoring = {
  id: 'realtime-monitoring',
  name: {
    'zh-cn': '实时监控',
    'en-US': 'Real-time Monitoring'
  },
  description: {
    'zh-cn': '系统监控仪表板，展示服务器状态、性能指标和警报系统',
    'en-US': 'System monitoring dashboard showcasing server status, performance metrics, and alert systems'
  },
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Real-time Monitoring</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        .pulse-dot {
          animation: pulse 2s infinite;
        }
        .metric-gauge {
          background: conic-gradient(
            #10B981 0deg,
            #F59E0B 120deg,
            #EF4444 240deg
          );
        }
      </style>
    </head>
    <body class="bg-gray-50 min-h-screen">
      <!-- 統一的外部容器背景 -->
      <div class="bg-gray-50 min-h-screen">
        <!-- 深色主題內容区域 -->
        <div class="bg-gray-900 text-white min-h-screen">
          <!-- Header -->
      <header class="bg-gray-800 border-b border-gray-700">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">⚡</span>
              </div>
              <h1 class="text-xl font-bold">System Monitor</h1>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                <span class="text-sm text-gray-300">All Systems Operational</span>
              </div>
              <button class="bg-red-600 text-white px-3 py-1 rounded text-sm">
                🚨 3 Alerts
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="p-6">
        <!-- System Status Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <!-- CPU Usage -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">CPU Usage</h3>
              <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span class="text-xs">✓</span>
              </div>
            </div>
            <div class="text-3xl font-bold mb-2">47%</div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div class="bg-green-500 h-2 rounded-full" style="width: 47%"></div>
            </div>
            <div class="text-xs text-gray-400 mt-2">8 cores / 3.2 GHz</div>
          </div>

          <!-- Memory Usage -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">Memory</h3>
              <div class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span class="text-xs">⚠</span>
              </div>
            </div>
            <div class="text-3xl font-bold mb-2">72%</div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div class="bg-yellow-500 h-2 rounded-full" style="width: 72%"></div>
            </div>
            <div class="text-xs text-gray-400 mt-2">23.1 GB / 32 GB</div>
          </div>

          <!-- Network -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">Network</h3>
              <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span class="text-xs">✓</span>
              </div>
            </div>
            <div class="text-3xl font-bold mb-2">234</div>
            <div class="text-xs text-gray-400">Mbps throughput</div>
            <div class="flex justify-between text-xs text-gray-500 mt-2">
              <span>↑ 156 Mbps</span>
              <span>↓ 78 Mbps</span>
            </div>
          </div>

          <!-- Storage -->
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-gray-400">Storage</h3>
              <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span class="text-xs">!</span>
              </div>
            </div>
            <div class="text-3xl font-bold mb-2">89%</div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div class="bg-red-500 h-2 rounded-full" style="width: 89%"></div>
            </div>
            <div class="text-xs text-gray-400 mt-2">1.8 TB / 2 TB</div>
          </div>
        </div>

        <!-- Performance Charts & Alerts -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Performance Chart -->
          <div class="lg:col-span-2 bg-gray-800 rounded-lg p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold">Performance Metrics</h3>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded">CPU</button>
                <button class="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">Memory</button>
                <button class="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded">Network</button>
              </div>
            </div>

            <!-- Chart Area -->
            <div class="h-64 bg-gray-900 rounded-lg p-4">
              <svg class="w-full h-full" viewBox="0 0 400 200">
                <!-- Grid -->
                <defs>
                  <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />

                <!-- CPU Line -->
                <polyline
                  points="0,150 25,140 50,135 75,130 100,125 125,120 150,115 175,110 200,105 225,100 250,95 275,90 300,85 325,80 350,75 375,70 400,65"
                  fill="none"
                  stroke="#3B82F6"
                  stroke-width="2"
                />

                <!-- Memory Line -->
                <polyline
                  points="0,170 25,165 50,160 75,155 100,150 125,145 150,140 175,135 200,130 225,125 250,120 275,115 300,110 325,105 350,100 375,95 400,90"
                  fill="none"
                  stroke="#10B981"
                  stroke-width="2"
                />

                <!-- Network Line -->
                <polyline
                  points="0,180 25,175 50,170 75,165 100,160 125,155 150,150 175,145 200,140 225,135 250,130 275,125 300,120 325,115 350,110 375,105 400,100"
                  fill="none"
                  stroke="#F59E0B"
                  stroke-width="2"
                />
              </svg>
            </div>

            <div class="flex items-center justify-center space-x-6 mt-4 text-sm">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>CPU Usage</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Memory Usage</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Network Load</span>
              </div>
            </div>
          </div>

          <!-- Alerts & Services -->
          <div class="space-y-6">
            <!-- Active Alerts -->
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Active Alerts</h3>
              <div class="space-y-3">
                <div class="flex items-start space-x-3 p-3 bg-red-900 bg-opacity-50 rounded-lg border border-red-500">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 pulse-dot"></div>
                  <div>
                    <div class="text-sm font-medium text-red-400">High Storage Usage</div>
                    <div class="text-xs text-gray-400">Storage at 89% capacity</div>
                    <div class="text-xs text-gray-500">2 minutes ago</div>
                  </div>
                </div>

                <div class="flex items-start space-x-3 p-3 bg-yellow-900 bg-opacity-50 rounded-lg border border-yellow-500">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 pulse-dot"></div>
                  <div>
                    <div class="text-sm font-medium text-yellow-400">Memory Warning</div>
                    <div class="text-xs text-gray-400">Memory usage above 70%</div>
                    <div class="text-xs text-gray-500">5 minutes ago</div>
                  </div>
                </div>

                <div class="flex items-start space-x-3 p-3 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-500">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 pulse-dot"></div>
                  <div>
                    <div class="text-sm font-medium text-blue-400">Service Restart</div>
                    <div class="text-xs text-gray-400">Web service restarted</div>
                    <div class="text-xs text-gray-500">12 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Status -->
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Service Status</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-sm">Web Server</span>
                  </div>
                  <span class="text-xs text-green-400">Running</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-sm">Database</span>
                  </div>
                  <span class="text-xs text-green-400">Running</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-sm">Cache Service</span>
                  </div>
                  <span class="text-xs text-green-400">Running</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span class="text-sm">Backup Service</span>
                  </div>
                  <span class="text-xs text-yellow-400">Warning</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span class="text-sm">Log Processor</span>
                  </div>
                  <span class="text-xs text-red-400">Down</span>
                </div>
              </div>
            </div>

            <!-- Server Info -->
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Server Information</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-400">Hostname:</span>
                  <span>prod-server-01</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">IP Address:</span>
                  <span>192.168.1.100</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">OS:</span>
                  <span>Ubuntu 22.04 LTS</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Uptime:</span>
                  <span>47 days, 12:34</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Load Average:</span>
                  <span>1.2, 1.5, 1.8</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Temperature:</span>
                  <span>67°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Table -->
        <div class="mt-6 bg-gray-800 rounded-lg">
          <div class="px-6 py-4 border-b border-gray-700">
            <h3 class="text-lg font-bold">Top Processes</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="bg-gray-700">
                <tr>
                  <th class="px-6 py-3 text-left font-medium text-gray-300">PID</th>
                  <th class="px-6 py-3 text-left font-medium text-gray-300">Process</th>
                  <th class="px-6 py-3 text-left font-medium text-gray-300">CPU%</th>
                  <th class="px-6 py-3 text-left font-medium text-gray-300">Memory%</th>
                  <th class="px-6 py-3 text-left font-medium text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-700">
                <tr class="hover:bg-gray-750">
                  <td class="px-6 py-3 text-white">1234</td>
                  <td class="px-6 py-3 text-white">node.js</td>
                  <td class="px-6 py-3 text-yellow-400">15.7%</td>
                  <td class="px-6 py-3 text-blue-400">8.2%</td>
                  <td class="px-6 py-3">
                    <span class="px-2 py-1 bg-green-900 text-green-400 rounded text-xs">Running</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-750">
                  <td class="px-6 py-3 text-white">5678</td>
                  <td class="px-6 py-3 text-white">mysql</td>
                  <td class="px-6 py-3 text-yellow-400">12.3%</td>
                  <td class="px-6 py-3 text-blue-400">22.1%</td>
                  <td class="px-6 py-3">
                    <span class="px-2 py-1 bg-green-900 text-green-400 rounded text-xs">Running</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-750">
                  <td class="px-6 py-3 text-white">9012</td>
                  <td class="px-6 py-3 text-white">nginx</td>
                  <td class="px-6 py-3 text-yellow-400">3.8%</td>
                  <td class="px-6 py-3 text-blue-400">1.9%</td>
                  <td class="px-6 py-3">
                    <span class="px-2 py-1 bg-green-900 text-green-400 rounded text-xs">Running</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-750">
                  <td class="px-6 py-3 text-white">3456</td>
                  <td class="px-6 py-3 text-white">redis-server</td>
                  <td class="px-6 py-3 text-yellow-400">2.1%</td>
                  <td class="px-6 py-3 text-blue-400">4.7%</td>
                  <td class="px-6 py-3">
                    <span class="px-2 py-1 bg-green-900 text-green-400 rounded text-xs">Running</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </body>
    </html>
  `
};

// Export all scenarios
export const dataVisualizationScenarios = [
  enterpriseDashboard,
  financialPlatform,
  analyticsPlatform,
  realTimeMonitoring
];