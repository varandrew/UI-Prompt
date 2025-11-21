// Neumorphism 風格 - 完整页面设計
// Home Office Dashboard 風格 (柔和 UI)

export const neomorphismFullPageHTML = `
<div class="neomorph-full-page min-h-screen" style="background: linear-gradient(135deg, #e8e8e8 0%, #ecf0f3 100%);">
  <!-- 頂部导航欄 -->
  <nav class="neomorph-navbar sticky top-0 z-50" style="background: #ecf0f3; box-shadow: 8px 8px 20px rgba(163, 177, 198, 0.4), -8px -8px 20px rgba(255, 255, 255, 0.9);">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="neomorph-logo-circle">
          <span class="text-xl font-bold" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">N</span>
        </div>
        <span class="text-xl font-bold" style="color: #555;">Neomorph Dashboard</span>
      </div>

      <!-- 导航鏈接 -->
      <div class="hidden md:flex items-center gap-6">
        <a href="javascript:void(0)" class="neomorph-nav-link">Home</a>
        <a href="javascript:void(0)" class="neomorph-nav-link">Projects</a>
        <a href="javascript:void(0)" class="neomorph-nav-link">Team</a>
        <a href="javascript:void(0)" class="neomorph-nav-link">Settings</a>
      </div>

      <!-- 右側工具 -->
      <div class="flex items-center gap-4">
        <!-- 搜索框 -->
        <div class="hidden md:block neomorph-search-box">
          <input type="text" placeholder="Search..." class="neomorph-search-input" />
        </div>

        <!-- 通知按鈕 -->
        <button class="neomorph-icon-btn relative">
          <span style="font-size: 18px;">🔔</span>
          <span class="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-white text-xs font-bold" style="background: linear-gradient(135deg, #f87171 0%, #fb923c 100%); border-radius: 50%; box-shadow: 2px 2px 6px rgba(248, 113, 113, 0.4);">3</span>
        </button>

        <!-- 用戶頭像 -->
        <div class="neomorph-avatar">
          <div class="w-10 h-10 flex items-center justify-center text-white font-bold text-sm" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; box-shadow: 4px 4px 10px rgba(163, 177, 198, 0.5), -4px -4px 10px rgba(255, 255, 255, 0.7);">U</div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero 区塊 -->
  <section class="py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="neomorph-hero-card text-center">
        <h1 class="text-4xl md:text-5xl font-black mb-4" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Welcome to Neumorphism
        </h1>
        <p class="text-lg mb-6" style="color: #777;">
          Experience the soft, elegant design of modern UI
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <button class="neomorph-btn-primary">Get Started</button>
          <button class="neomorph-btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  </section>

  <!-- 統計卡片网格 -->
  <section class="max-w-7xl mx-auto px-6 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- 統計卡片 1 -->
      <div class="neomorph-stat-card">
        <div class="neomorph-stat-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <span class="text-2xl">👥</span>
        </div>
        <div class="mt-4">
          <div class="text-3xl font-bold" style="color: #555;">2,543</div>
          <div class="text-sm mt-1" style="color: #888;">Total Users</div>
          <div class="neomorph-trend-badge mt-3" style="background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);">
            ↑ 12.5%
          </div>
        </div>
      </div>

      <!-- 統計卡片 2 -->
      <div class="neomorph-stat-card">
        <div class="neomorph-stat-icon" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);">
          <span class="text-2xl">💰</span>
        </div>
        <div class="mt-4">
          <div class="text-3xl font-bold" style="color: #555;">$48.2K</div>
          <div class="text-sm mt-1" style="color: #888;">Revenue</div>
          <div class="neomorph-trend-badge mt-3" style="background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);">
            ↑ 8.3%
          </div>
        </div>
      </div>

      <!-- 統計卡片 3 -->
      <div class="neomorph-stat-card">
        <div class="neomorph-stat-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
          <span class="text-2xl">📊</span>
        </div>
        <div class="mt-4">
          <div class="text-3xl font-bold" style="color: #555;">127</div>
          <div class="text-sm mt-1" style="color: #888;">Active Projects</div>
          <div class="neomorph-trend-badge mt-3" style="background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);">
            ↑ 5.2%
          </div>
        </div>
      </div>

      <!-- 統計卡片 4 -->
      <div class="neomorph-stat-card">
        <div class="neomorph-stat-icon" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);">
          <span class="text-2xl">📈</span>
        </div>
        <div class="mt-4">
          <div class="text-3xl font-bold" style="color: #555;">94.5%</div>
          <div class="text-sm mt-1" style="color: #888;">Growth Rate</div>
          <div class="neomorph-trend-badge mt-3" style="background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);">
            → 0.8%
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 內容区 - 兩列佈局 -->
  <section class="max-w-7xl mx-auto px-6 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 最近項目 -->
      <div class="neomorph-content-card">
        <h3 class="text-xl font-bold mb-6" style="color: #555;">Recent Projects</h3>
        <div class="space-y-4">
          <!-- 項目 1 -->
          <div class="neomorph-list-item">
            <div class="flex items-center gap-4">
              <div class="neomorph-project-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                📱
              </div>
              <div class="flex-1">
                <div class="font-semibold" style="color: #555;">Mobile App Redesign</div>
                <div class="text-sm mt-1" style="color: #888;">UI/UX improvements</div>
              </div>
              <div class="neomorph-status-chip neomorph-status-progress">In Progress</div>
            </div>
            <div class="mt-3">
              <div class="neomorph-progress-bar">
                <div class="neomorph-progress-fill" style="width: 68%;"></div>
              </div>
              <div class="text-xs mt-1 text-right" style="color: #888;">68%</div>
            </div>
          </div>

          <!-- 項目 2 -->
          <div class="neomorph-list-item">
            <div class="flex items-center gap-4">
              <div class="neomorph-project-icon" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);">
                🌐
              </div>
              <div class="flex-1">
                <div class="font-semibold" style="color: #555;">Website Relaunch</div>
                <div class="text-sm mt-1" style="color: #888;">Marketing campaign</div>
              </div>
              <div class="neomorph-status-chip neomorph-status-success">Completed</div>
            </div>
            <div class="mt-3">
              <div class="neomorph-progress-bar">
                <div class="neomorph-progress-fill" style="width: 100%;"></div>
              </div>
              <div class="text-xs mt-1 text-right" style="color: #888;">100%</div>
            </div>
          </div>

          <!-- 項目 3 -->
          <div class="neomorph-list-item">
            <div class="flex items-center gap-4">
              <div class="neomorph-project-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                🔧
              </div>
              <div class="flex-1">
                <div class="font-semibold" style="color: #555;">API Integration</div>
                <div class="text-sm mt-1" style="color: #888;">Backend development</div>
              </div>
              <div class="neomorph-status-chip neomorph-status-pending">Pending</div>
            </div>
            <div class="mt-3">
              <div class="neomorph-progress-bar">
                <div class="neomorph-progress-fill" style="width: 25%;"></div>
              </div>
              <div class="text-xs mt-1 text-right" style="color: #888;">25%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 团隊活動時間线 -->
      <div class="neomorph-content-card">
        <h3 class="text-xl font-bold mb-6" style="color: #555;">Team Activity</h3>
        <div class="space-y-6">
          <!-- 活動 1 -->
          <div class="flex gap-4">
            <div class="neomorph-timeline-avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              J
            </div>
            <div class="flex-1">
              <div class="neomorph-activity-card">
                <div class="font-semibold" style="color: #555;">John updated design files</div>
                <div class="text-sm mt-1" style="color: #777;">Mobile App Redesign</div>
                <div class="text-xs mt-2" style="color: #999;">2 hours ago</div>
              </div>
            </div>
          </div>

          <!-- 活動 2 -->
          <div class="flex gap-4">
            <div class="neomorph-timeline-avatar" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);">
              S
            </div>
            <div class="flex-1">
              <div class="neomorph-activity-card">
                <div class="font-semibold" style="color: #555;">Sarah completed review</div>
                <div class="text-sm mt-1" style="color: #777;">Website Relaunch</div>
                <div class="text-xs mt-2" style="color: #999;">5 hours ago</div>
              </div>
            </div>
          </div>

          <!-- 活動 3 -->
          <div class="flex gap-4">
            <div class="neomorph-timeline-avatar" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);">
              M
            </div>
            <div class="flex-1">
              <div class="neomorph-activity-card">
                <div class="font-semibold" style="color: #555;">Mike added new feature</div>
                <div class="text-sm mt-1" style="color: #777;">API Integration</div>
                <div class="text-xs mt-2" style="color: #999;">1 day ago</div>
              </div>
            </div>
          </div>

          <!-- 活動 4 -->
          <div class="flex gap-4">
            <div class="neomorph-timeline-avatar" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
              E
            </div>
            <div class="flex-1">
              <div class="neomorph-activity-card">
                <div class="font-semibold" style="color: #555;">Emily created new task</div>
                <div class="text-sm mt-1" style="color: #777;">Dashboard Enhancement</div>
                <div class="text-xs mt-2" style="color: #999;">2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 表單組件展示区 -->
  <section class="max-w-7xl mx-auto px-6 py-8">
    <div class="neomorph-content-card">
      <h3 class="text-2xl font-bold mb-8" style="color: #555;">Form Components Showcase</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 左側表單 -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold mb-4" style="color: #666;">Text Inputs</h4>

          <!-- 文本輸入框 -->
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #777;">Full Name</label>
            <input type="text" placeholder="Enter your name" class="neomorph-text-input" />
          </div>

          <!-- 郵件輸入框 -->
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #777;">Email Address</label>
            <input type="email" placeholder="your@email.com" class="neomorph-text-input" />
          </div>

          <!-- 下拉選單 -->
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #777;">Department</label>
            <select class="neomorph-select">
              <option>Choose department</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>

          <!-- 文本域 -->
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #777;">Message</label>
            <textarea placeholder="Type your message..." class="neomorph-textarea" rows="4"></textarea>
          </div>
        </div>

        <!-- 右側表單 -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold mb-4" style="color: #666;">Selections & Controls</h4>

          <!-- 複選框組 -->
          <div>
            <label class="block text-sm font-medium mb-3" style="color: #777;">Preferences</label>
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="neomorph-checkbox">
                  <input type="checkbox" class="hidden" checked />
                  <span class="checkmark">✓</span>
                </div>
                <span style="color: #666;">Email Notifications</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="neomorph-checkbox">
                  <input type="checkbox" class="hidden" />
                  <span class="checkmark">✓</span>
                </div>
                <span style="color: #666;">SMS Alerts</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="neomorph-checkbox">
                  <input type="checkbox" class="hidden" checked />
                  <span class="checkmark">✓</span>
                </div>
                <span style="color: #666;">Push Notifications</span>
              </label>
            </div>
          </div>

          <!-- 開关按鈕 -->
          <div>
            <label class="block text-sm font-medium mb-3" style="color: #777;">Settings</label>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span style="color: #666;">Dark Mode</span>
                <label class="neomorph-switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <span style="color: #666;">Auto Save</span>
                <label class="neomorph-switch">
                  <input type="checkbox" checked />
                  <span class="slider"></span>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <span style="color: #666;">Compact View</span>
                <label class="neomorph-switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- 滑塊 -->
          <div>
            <label class="block text-sm font-medium mb-3" style="color: #777;">Volume Control</label>
            <input type="range" min="0" max="100" value="65" class="neomorph-slider" />
            <div class="flex justify-between text-xs mt-2" style="color: #999;">
              <span>0</span>
              <span>65</span>
              <span>100</span>
            </div>
          </div>

          <!-- 日期選擇器 -->
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #777;">Select Date</label>
            <input type="date" class="neomorph-date-input" />
          </div>
        </div>
      </div>

      <!-- 按鈕組 -->
      <div class="mt-8 pt-6" style="border-top: 2px solid rgba(0,0,0,0.05);">
        <h4 class="text-lg font-semibold mb-4" style="color: #666;">Button Variants</h4>
        <div class="flex gap-4 flex-wrap">
          <button class="neomorph-btn-primary">Primary Button</button>
          <button class="neomorph-btn-secondary">Secondary Button</button>
          <button class="neomorph-btn-icon">❤️</button>
          <button class="neomorph-btn-icon">⭐</button>
          <button class="neomorph-btn-icon">🔖</button>
        </div>
      </div>

      <!-- 标籤/Chips -->
      <div class="mt-6">
        <h4 class="text-lg font-semibold mb-4" style="color: #666;">Tags & Chips</h4>
        <div class="flex gap-3 flex-wrap">
          <span class="neomorph-chip">Design</span>
          <span class="neomorph-chip">Development</span>
          <span class="neomorph-chip">Marketing</span>
          <span class="neomorph-chip">Research</span>
          <span class="neomorph-chip">Analytics</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 数据表格 -->
  <section class="max-w-7xl mx-auto px-6 py-8">
    <div class="neomorph-content-card overflow-hidden">
      <h3 class="text-2xl font-bold mb-6" style="color: #555;">Recent Transactions</h3>

      <div class="overflow-x-auto">
        <table class="w-full neomorph-table">
          <thead>
            <tr style="border-bottom: 2px solid rgba(0,0,0,0.05);">
              <th class="px-4 py-3 text-left text-sm font-semibold" style="color: #666;">User</th>
              <th class="px-4 py-3 text-left text-sm font-semibold" style="color: #666;">Transaction</th>
              <th class="px-4 py-3 text-left text-sm font-semibold" style="color: #666;">Amount</th>
              <th class="px-4 py-3 text-left text-sm font-semibold" style="color: #666;">Status</th>
              <th class="px-4 py-3 text-left text-sm font-semibold" style="color: #666;">Date</th>
            </tr>
          </thead>
          <tbody>
            <!-- 行 1 -->
            <tr class="neomorph-table-row">
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 flex items-center justify-center text-white text-sm font-bold" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%;">J</div>
                  <div>
                    <div class="font-medium" style="color: #555;">John Doe</div>
                    <div class="text-xs" style="color: #999;">john@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4" style="color: #666;">Premium Subscription</td>
              <td class="px-4 py-4 font-semibold" style="color: #555;">$129.00</td>
              <td class="px-4 py-4">
                <span class="neomorph-badge neomorph-badge-success">Success</span>
              </td>
              <td class="px-4 py-4" style="color: #888;">2024-01-15</td>
            </tr>

            <!-- 行 2 -->
            <tr class="neomorph-table-row">
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 flex items-center justify-center text-white text-sm font-bold" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); border-radius: 50%;">S</div>
                  <div>
                    <div class="font-medium" style="color: #555;">Sarah Smith</div>
                    <div class="text-xs" style="color: #999;">sarah@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4" style="color: #666;">Basic Plan Upgrade</td>
              <td class="px-4 py-4 font-semibold" style="color: #555;">$49.00</td>
              <td class="px-4 py-4">
                <span class="neomorph-badge neomorph-badge-warning">Pending</span>
              </td>
              <td class="px-4 py-4" style="color: #888;">2024-01-14</td>
            </tr>

            <!-- 行 3 -->
            <tr class="neomorph-table-row">
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 flex items-center justify-center text-white text-sm font-bold" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-radius: 50%;">M</div>
                  <div>
                    <div class="font-medium" style="color: #555;">Mike Johnson</div>
                    <div class="text-xs" style="color: #999;">mike@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4" style="color: #666;">Pro Annual Subscription</td>
              <td class="px-4 py-4 font-semibold" style="color: #555;">$599.00</td>
              <td class="px-4 py-4">
                <span class="neomorph-badge neomorph-badge-success">Success</span>
              </td>
              <td class="px-4 py-4" style="color: #888;">2024-01-13</td>
            </tr>

            <!-- 行 4 -->
            <tr class="neomorph-table-row">
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 flex items-center justify-center text-white text-sm font-bold" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 50%;">E</div>
                  <div>
                    <div class="font-medium" style="color: #555;">Emily Brown</div>
                    <div class="text-xs" style="color: #999;">emily@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4" style="color: #666;">Refund Request</td>
              <td class="px-4 py-4 font-semibold" style="color: #555;">-$29.00</td>
              <td class="px-4 py-4">
                <span class="neomorph-badge neomorph-badge-error">Failed</span>
              </td>
              <td class="px-4 py-4" style="color: #888;">2024-01-12</td>
            </tr>

            <!-- 行 5 -->
            <tr class="neomorph-table-row">
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 flex items-center justify-center text-white text-sm font-bold" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 50%;">D</div>
                  <div>
                    <div class="font-medium" style="color: #555;">David Lee</div>
                    <div class="text-xs" style="color: #999;">david@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4" style="color: #666;">Enterprise License</td>
              <td class="px-4 py-4 font-semibold" style="color: #555;">$2,499.00</td>
              <td class="px-4 py-4">
                <span class="neomorph-badge neomorph-badge-success">Success</span>
              </td>
              <td class="px-4 py-4" style="color: #888;">2024-01-11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- 浮動操作按鈕 (FAB) -->
  <button class="neomorph-fab">
    <span style="font-size: 24px;">+</span>
  </button>

  <!-- 页腳 -->
  <footer class="mt-16 py-8" style="background: rgba(236, 240, 243, 0.8); backdrop-filter: blur(10px); border-top: 1px solid rgba(0,0,0,0.05);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div style="color: #888;">
          © 2024 Neomorph Dashboard. All rights reserved.
        </div>
        <div class="flex gap-6">
          <a href="javascript:void(0)" class="neomorph-footer-link">Privacy Policy</a>
          <a href="javascript:void(0)" class="neomorph-footer-link">Terms of Service</a>
          <a href="javascript:void(0)" class="neomorph-footer-link">Contact Us</a>
          <a href="javascript:void(0)" class="neomorph-footer-link">Help Center</a>
        </div>
      </div>
    </div>
  </footer>
</div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色淺灰色 (#ECF0F3, #E8E8E8)、渐变蓝紫色 (#667EEA, #764BA2)、白色高光 (#FFFFFF)、柔和阴影 (rgba(163,177,198,0.6))
`;

export const neomorphismFullPageStyles = `
/* Neumorphism 風格完整页面樣式 */

/* 全局樣式 */
.neomorph-full-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* 导航欄 */
.neomorph-navbar {
  padding: 0;
}

.neomorph-logo-circle {
  width: 48px;
  height: 48px;
  background: #ecf0f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.5),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
}

.neomorph-nav-link {
  position: relative;
  color: #666;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.neomorph-nav-link:hover {
  color: #667eea;
  background: #ecf0f3;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
}

/* 搜索框 */
.neomorph-search-box {
  position: relative;
}

.neomorph-search-input {
  width: 220px;
  padding: 10px 18px;
  background: #ecf0f3;
  border: none;
  border-radius: 20px;
  outline: none;
  color: #555;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.neomorph-search-input:focus {
  box-shadow:
    inset 6px 6px 12px rgba(163, 177, 198, 0.5),
    inset -6px -6px 12px rgba(255, 255, 255, 0.7);
}

.neomorph-search-input::placeholder {
  color: #aaa;
}

/* 圖标按鈕 */
.neomorph-icon-btn {
  width: 44px;
  height: 44px;
  background: #ecf0f3;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.5),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.neomorph-icon-btn:hover {
  box-shadow:
    8px 8px 16px rgba(163, 177, 198, 0.6),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
}

.neomorph-icon-btn:active {
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
}

/* Hero 卡片 */
.neomorph-hero-card {
  background: #ecf0f3;
  border-radius: 24px;
  padding: 48px 32px;
  box-shadow:
    12px 12px 24px rgba(163, 177, 198, 0.6),
    -12px -12px 24px rgba(255, 255, 255, 0.9);
}

/* 統計卡片 */
.neomorph-stat-card {
  background: #ecf0f3;
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    10px 10px 20px rgba(163, 177, 198, 0.6),
    -10px -10px 20px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.neomorph-stat-card:hover {
  transform: translateY(-4px);
  box-shadow:
    12px 12px 24px rgba(163, 177, 198, 0.65),
    -12px -12px 24px rgba(255, 255, 255, 0.95);
}

.neomorph-stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.15),
    -2px -2px 8px rgba(255, 255, 255, 0.3);
}

.neomorph-trend-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  box-shadow:
    3px 3px 6px rgba(0, 0, 0, 0.15);
}

/* 內容卡片 */
.neomorph-content-card {
  background: #ecf0f3;
  border-radius: 20px;
  padding: 28px;
  box-shadow:
    10px 10px 20px rgba(163, 177, 198, 0.6),
    -10px -10px 20px rgba(255, 255, 255, 0.9);
}

/* 列表項目 */
.neomorph-list-item {
  background: #ecf0f3;
  border-radius: 16px;
  padding: 16px;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.4),
    -6px -6px 12px rgba(255, 255, 255, 0.7);
}

.neomorph-project-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.15);
}

/* 狀態标籤 */
.neomorph-status-chip {
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.neomorph-status-progress {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  color: white;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
}

.neomorph-status-success {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: white;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
}

.neomorph-status-pending {
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  color: white;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
}

/* 進度條 */
.neomorph-progress-bar {
  width: 100%;
  height: 8px;
  background: #ecf0f3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.6);
}

.neomorph-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  transition: width 0.3s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* 時間线頭像 */
.neomorph-timeline-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.15);
}

/* 活動卡片 */
.neomorph-activity-card {
  background: #ecf0f3;
  border-radius: 12px;
  padding: 14px;
  box-shadow:
    4px 4px 8px rgba(163, 177, 198, 0.3),
    -4px -4px 8px rgba(255, 255, 255, 0.6);
}

/* 表單輸入框 */
.neomorph-text-input,
.neomorph-select,
.neomorph-textarea {
  width: 100%;
  padding: 14px 18px;
  background: #ecf0f3;
  border: none;
  border-radius: 14px;
  outline: none;
  color: #555;
  font-size: 14px;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.neomorph-text-input:focus,
.neomorph-select:focus,
.neomorph-textarea:focus {
  box-shadow:
    inset 6px 6px 12px rgba(163, 177, 198, 0.5),
    inset -6px -6px 12px rgba(255, 255, 255, 0.7);
}

.neomorph-text-input::placeholder,
.neomorph-textarea::placeholder {
  color: #aaa;
}

.neomorph-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

/* 複選框 */
.neomorph-checkbox {
  width: 24px;
  height: 24px;
  background: #ecf0f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.6);
  position: relative;
}

.neomorph-checkbox input:checked + .checkmark {
  display: block;
  color: #667eea;
  font-weight: bold;
  font-size: 14px;
}

.neomorph-checkbox .checkmark {
  display: none;
}

/* 開关按鈕 */
.neomorph-switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
}

.neomorph-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.neomorph-switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ecf0f3;
  border-radius: 28px;
  transition: 0.3s;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
}

.neomorph-switch .slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background: #ecf0f3;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow:
    3px 3px 6px rgba(163, 177, 198, 0.5),
    -3px -3px 6px rgba(255, 255, 255, 0.8);
}

.neomorph-switch input:checked + .slider {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow:
    inset 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.neomorph-switch input:checked + .slider:before {
  transform: translateX(24px);
  background: white;
}

/* 滑塊 */
.neomorph-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #ecf0f3;
  border-radius: 8px;
  outline: none;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.6);
}

.neomorph-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  cursor: pointer;
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.15);
}

.neomorph-slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.15);
}

/* 日期輸入框 */
.neomorph-date-input {
  width: 100%;
  padding: 14px 18px;
  background: #ecf0f3;
  border: none;
  border-radius: 14px;
  outline: none;
  color: #555;
  font-size: 14px;
  cursor: pointer;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
}

/* 按鈕樣式 */
.neomorph-btn-primary {
  padding: 14px 32px;
  background: #ecf0f3;
  border: none;
  border-radius: 14px;
  font-weight: 600;
  color: #667eea;
  cursor: pointer;
  box-shadow:
    8px 8px 16px rgba(163, 177, 198, 0.6),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.neomorph-btn-primary:hover {
  box-shadow:
    10px 10px 20px rgba(163, 177, 198, 0.65),
    -10px -10px 20px rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}

.neomorph-btn-primary:active {
  box-shadow:
    inset 6px 6px 12px rgba(163, 177, 198, 0.5),
    inset -6px -6px 12px rgba(255, 255, 255, 0.7);
  transform: translateY(0);
}

.neomorph-btn-secondary {
  padding: 14px 32px;
  background: #ecf0f3;
  border: none;
  border-radius: 14px;
  font-weight: 600;
  color: #888;
  cursor: pointer;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.4),
    -6px -6px 12px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.neomorph-btn-secondary:hover {
  box-shadow:
    8px 8px 16px rgba(163, 177, 198, 0.5),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
  color: #667eea;
}

.neomorph-btn-secondary:active {
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
}

.neomorph-btn-icon {
  width: 48px;
  height: 48px;
  background: #ecf0f3;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.5),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.neomorph-btn-icon:hover {
  box-shadow:
    8px 8px 16px rgba(163, 177, 198, 0.6),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
}

.neomorph-btn-icon:active {
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.6);
}

/* 标籤/Chips */
.neomorph-chip {
  display: inline-block;
  padding: 8px 16px;
  background: #ecf0f3;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  box-shadow:
    4px 4px 8px rgba(163, 177, 198, 0.4),
    -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  cursor: pointer;
}

.neomorph-chip:hover {
  color: #667eea;
  box-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.5),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
}

/* 表格樣式 */
.neomorph-table {
  border-collapse: separate;
  border-spacing: 0;
}

.neomorph-table-row {
  transition: all 0.3s ease;
}

.neomorph-table-row:hover {
  background: rgba(102, 126, 234, 0.03);
}

/* 徽章 */
.neomorph-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}

.neomorph-badge-success {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
}

.neomorph-badge-warning {
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
}

.neomorph-badge-error {
  background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
}

/* 浮動操作按鈕 (FAB) */
.neomorph-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    10px 10px 20px rgba(102, 126, 234, 0.4),
    -4px -4px 12px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
}

.neomorph-fab:hover {
  transform: scale(1.1) rotate(90deg);
  box-shadow:
    12px 12px 24px rgba(102, 126, 234, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.3);
}

.neomorph-fab:active {
  transform: scale(1.05) rotate(90deg);
}

/* 页腳鏈接 */
.neomorph-footer-link {
  color: #888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.neomorph-footer-link:hover {
  color: #667eea;
}

/* 響應式设計 */
@media (max-width: 768px) {
  .neomorph-hero-card {
    padding: 32px 24px;
  }

  .neomorph-content-card {
    padding: 20px;
  }

  .neomorph-stat-card {
    padding: 20px;
  }

  .neomorph-fab {
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
  }

  .neomorph-search-input {
    width: 180px;
  }
}

@media (max-width: 640px) {
  .neomorph-hero-card h1 {
    font-size: 32px;
  }

  .neomorph-table {
    font-size: 14px;
  }

  .neomorph-table th,
  .neomorph-table td {
    padding: 12px 8px;
  }
}
`;
