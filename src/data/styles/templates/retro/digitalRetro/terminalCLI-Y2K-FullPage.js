// Y2K Terminal CLI - 融合 Y2K/Frutiger Aero 与 Terminal 美學
// 結合玻璃態效果、氣泡裝飾、CRT 掃描线与終端界面

export const terminalCLIY2KFullPageHTML = `
<div class="y2k-terminal-wrapper min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden">
  <!-- CRT 掃描线效果层 -->
  <div class="y2k-crt-scanlines"></div>

  <!-- 頂部玻璃態导航欄 -->
  <nav class="y2k-terminal-navbar sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-lg">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo (終端風格氣泡) -->
      <div class="flex items-center gap-3">
        <div class="y2k-terminal-logo w-10 h-10 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-lg relative shadow-xl font-mono flex items-center justify-center text-white font-bold text-sm">
          >_
          <div class="absolute top-1 left-2 w-4 h-4 bg-white rounded-full opacity-40 blur-sm"></div>
        </div>
        <div class="font-mono">
          <span class="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Y2K Terminal</span>
          <div class="text-xs text-gray-500">user@dashboard:~$</div>
        </div>
      </div>

      <!-- 导航鏈接 (終端風格) -->
      <div class="hidden md:flex items-center gap-6 font-mono text-sm">
        <a href="javascript:void(0)" class="y2k-terminal-nav-link">&gt; home</a>
        <a href="javascript:void(0)" class="y2k-terminal-nav-link">&gt; projects</a>
        <a href="javascript:void(0)" class="y2k-terminal-nav-link">&gt; team</a>
        <a href="javascript:void(0)" class="y2k-terminal-nav-link">&gt; config</a>
      </div>

      <!-- 右側工具 -->
      <div class="flex items-center gap-4">
        <!-- 終端搜索框 -->
        <div class="hidden md:block y2k-terminal-search-box font-mono">
          <input type="text" placeholder="$ grep..." class="y2k-terminal-input" />
        </div>

        <!-- 通知 (終端風格) -->
        <button class="y2k-terminal-icon-button relative font-mono text-sm">
          [3]
        </button>

        <!-- 用戶狀態 -->
        <div class="y2k-terminal-status">
          <div class="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md flex items-center justify-center text-white font-mono font-bold text-sm border-2 border-green-400/30">
            U
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero 区塊 (終端窗口風格) -->
  <section class="y2k-terminal-hero relative overflow-hidden py-16 px-6">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- 模擬 macOS 終端窗口 -->
      <div class="y2k-terminal-window">
        <!-- 窗口标題欄 -->
        <div class="y2k-terminal-titlebar">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div class="text-xs text-gray-600 font-mono">user@y2k-dashboard — zsh — 80×24</div>
          <div class="w-12"></div>
        </div>

        <!-- 終端內容 -->
        <div class="y2k-terminal-content">
          <div class="font-mono text-sm space-y-2">
            <div class="text-green-500">
              <span class="text-cyan-500">user@y2k</span>
              <span class="text-gray-400">:</span>
              <span class="text-blue-500">~</span>
              <span class="text-gray-400">$</span>
              <span class="text-white ml-2">cat welcome.txt</span>
            </div>
            <div class="text-center py-8 space-y-4">
              <div class="y2k-terminal-ascii-art text-gradient-y2k">
╔══════════════════════════════════════════╗
║  Y2K TERMINAL DASHBOARD v2.0            ║
║  Experience the nostalgia of Web 2.0    ║
║  with retro computing aesthetics        ║
╚══════════════════════════════════════════╝
              </div>
              <div class="flex gap-4 justify-center flex-wrap mt-6">
                <button class="y2k-terminal-btn-primary">$ ./get-started.sh</button>
                <button class="y2k-terminal-btn-secondary">$ cat README.md</button>
              </div>
            </div>
            <div class="text-green-500">
              <span class="text-cyan-500">user@y2k</span>
              <span class="text-gray-400">:</span>
              <span class="text-blue-500">~</span>
              <span class="text-gray-400">$</span>
              <span class="y2k-terminal-cursor ml-2">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 裝飾性氣泡 (帶 CRT 發光效果) -->
    <div class="y2k-terminal-bubble" style="top: 10%; left: 10%; width: 120px; height: 120px; animation-delay: 0s;"></div>
    <div class="y2k-terminal-bubble" style="top: 60%; right: 15%; width: 80px; height: 80px; animation-delay: 1s;"></div>
    <div class="y2k-terminal-bubble" style="top: 30%; right: 30%; width: 60px; height: 60px; animation-delay: 2s;"></div>
    <div class="y2k-terminal-bubble" style="bottom: 20%; left: 25%; width: 100px; height: 100px; animation-delay: 1.5s;"></div>
  </section>

  <!-- 統計卡片网格 (終端風格) -->
  <section class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- 統計卡片 1 -->
      <div class="y2k-terminal-stat-card">
        <div class="font-mono text-xs text-gray-500 mb-2">$ ps aux | grep users</div>
        <div class="y2k-terminal-icon-container bg-gradient-to-br from-cyan-400 to-blue-500">
          <span class="text-2xl">👥</span>
        </div>
        <div class="mt-4 font-mono">
          <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">2,543</div>
          <div class="text-sm text-gray-600 mt-1">TOTAL_USERS</div>
          <div class="y2k-terminal-trend-up mt-2">[↑ 12.5%]</div>
        </div>
      </div>

      <!-- 統計卡片 2 -->
      <div class="y2k-terminal-stat-card">
        <div class="font-mono text-xs text-gray-500 mb-2">$ cat revenue.log</div>
        <div class="y2k-terminal-icon-container bg-gradient-to-br from-teal-400 to-emerald-500">
          <span class="text-2xl">📊</span>
        </div>
        <div class="mt-4 font-mono">
          <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">$48.2K</div>
          <div class="text-sm text-gray-600 mt-1">REVENUE</div>
          <div class="y2k-terminal-trend-up mt-2">[↑ 8.3%]</div>
        </div>
      </div>

      <!-- 統計卡片 3 -->
      <div class="y2k-terminal-stat-card">
        <div class="font-mono text-xs text-gray-500 mb-2">$ echo $RATING</div>
        <div class="y2k-terminal-icon-container bg-gradient-to-br from-purple-400 to-pink-500">
          <span class="text-2xl">⭐</span>
        </div>
        <div class="mt-4 font-mono">
          <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">4.8/5</div>
          <div class="text-sm text-gray-600 mt-1">RATING</div>
          <div class="y2k-terminal-trend-up mt-2">[↑ 0.3]</div>
        </div>
      </div>

      <!-- 統計卡片 4 -->
      <div class="y2k-terminal-stat-card">
        <div class="font-mono text-xs text-gray-500 mb-2">$ ls projects/ | wc -l</div>
        <div class="y2k-terminal-icon-container bg-gradient-to-br from-orange-400 to-amber-500">
          <span class="text-2xl">🚀</span>
        </div>
        <div class="mt-4 font-mono">
          <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">156</div>
          <div class="text-sm text-gray-600 mt-1">ACTIVE_PROJECTS</div>
          <div class="y2k-terminal-trend-down mt-2">[↓ 2.1%]</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 內容区塊 (双欄布局) -->
  <section class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 最近項目列表 -->
      <div class="y2k-terminal-glass-card">
        <h3 class="text-xl font-mono font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span class="text-green-500">$</span> ls -la recent_projects/
        </h3>
        <div class="space-y-4 font-mono text-sm">
          <!-- 項目 1 -->
          <div class="y2k-terminal-list-item">
            <div class="flex items-center gap-3">
              <div class="y2k-terminal-project-icon bg-gradient-to-br from-blue-400 to-cyan-400">
                📱
              </div>
              <div class="flex-1">
                <div class="font-semibold text-gray-800">mobile_app_redesign/</div>
                <div class="text-xs text-gray-600">TYPE=ui_ux STATUS=active</div>
              </div>
              <span class="y2k-terminal-chip-success">[ACTIVE]</span>
            </div>
            <div class="mt-3">
              <div class="y2k-terminal-progress-bar">
                <div class="y2k-terminal-progress-fill" style="width: 75%"></div>
              </div>
              <div class="text-xs text-gray-600 mt-1 text-right">75% [=========>    ]</div>
            </div>
          </div>

          <!-- 項目 2 -->
          <div class="y2k-terminal-list-item">
            <div class="flex items-center gap-3">
              <div class="y2k-terminal-project-icon bg-gradient-to-br from-purple-400 to-pink-400">
                🌐
              </div>
              <div class="flex-1">
                <div class="font-semibold text-gray-800">website_relaunch/</div>
                <div class="text-xs text-gray-600">TYPE=development STATUS=review</div>
              </div>
              <span class="y2k-terminal-chip-warning">[REVIEW]</span>
            </div>
            <div class="mt-3">
              <div class="y2k-terminal-progress-bar">
                <div class="y2k-terminal-progress-fill" style="width: 92%"></div>
              </div>
              <div class="text-xs text-gray-600 mt-1 text-right">92% [===========>  ]</div>
            </div>
          </div>

          <!-- 項目 3 -->
          <div class="y2k-terminal-list-item">
            <div class="flex items-center gap-3">
              <div class="y2k-terminal-project-icon bg-gradient-to-br from-teal-400 to-emerald-400">
                ⚙️
              </div>
              <div class="flex-1">
                <div class="font-semibold text-gray-800">api_integration/</div>
                <div class="text-xs text-gray-600">TYPE=backend STATUS=planned</div>
              </div>
              <span class="y2k-terminal-chip-info">[PLANNED]</span>
            </div>
            <div class="mt-3">
              <div class="y2k-terminal-progress-bar">
                <div class="y2k-terminal-progress-fill" style="width: 30%"></div>
              </div>
              <div class="text-xs text-gray-600 mt-1 text-right">30% [====>         ]</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 团隊活動時間线 -->
      <div class="y2k-terminal-glass-card">
        <h3 class="text-xl font-mono font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span class="text-green-500">$</span> tail -f team_activity.log
        </h3>
        <div class="space-y-6 font-mono text-sm">
          <!-- 活動 1 -->
          <div class="flex gap-4">
            <div class="y2k-terminal-timeline-avatar bg-gradient-to-br from-blue-400 to-cyan-400">
              J
            </div>
            <div class="flex-1">
              <div class="y2k-terminal-activity-card">
                <div class="text-xs text-gray-500">[2024-01-15 14:30:22]</div>
                <div class="font-semibold text-gray-800 mt-1">john.doe committed: Updated design files</div>
                <div class="text-xs text-gray-600 mt-1">PROJECT=mobile_app_redesign</div>
                <div class="text-xs text-green-600 mt-2">✓ BUILD_SUCCESS</div>
              </div>
            </div>
          </div>

          <!-- 活動 2 -->
          <div class="flex gap-4">
            <div class="y2k-terminal-timeline-avatar bg-gradient-to-br from-purple-400 to-pink-400">
              S
            </div>
            <div class="flex-1">
              <div class="y2k-terminal-activity-card">
                <div class="text-xs text-gray-500">[2024-01-15 11:15:08]</div>
                <div class="font-semibold text-gray-800 mt-1">sarah.smith merged: PR #127</div>
                <div class="text-xs text-gray-600 mt-1">PROJECT=website_relaunch</div>
                <div class="text-xs text-yellow-600 mt-2">⚠ PENDING_REVIEW</div>
              </div>
            </div>
          </div>

          <!-- 活動 3 -->
          <div class="flex gap-4">
            <div class="y2k-terminal-timeline-avatar bg-gradient-to-br from-teal-400 to-emerald-400">
              M
            </div>
            <div class="flex-1">
              <div class="y2k-terminal-activity-card">
                <div class="text-xs text-gray-500">[2024-01-14 16:45:30]</div>
                <div class="font-semibold text-gray-800 mt-1">mike.chen deployed: v1.2.3</div>
                <div class="text-xs text-gray-600 mt-1">PROJECT=api_integration</div>
                <div class="text-xs text-blue-600 mt-2">ℹ STAGING_ENV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 命令面板 & 数据表格 -->
  <section class="max-w-7xl mx-auto px-6 py-12">
    <div class="y2k-terminal-glass-card">
      <h3 class="text-xl font-mono font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span class="text-green-500">$</span> cat transactions.db | grep recent
      </h3>
      <div class="overflow-x-auto">
        <table class="y2k-terminal-table font-mono text-sm">
          <thead>
            <tr>
              <th>USER_ID</th>
              <th>PROJECT_NAME</th>
              <th>AMOUNT_USD</th>
              <th>STATUS</th>
              <th>TIMESTAMP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="flex items-center gap-3">
                  <div class="y2k-terminal-table-avatar bg-gradient-to-br from-blue-400 to-cyan-400">A</div>
                  <span class="font-medium">alice_chen</span>
                </div>
              </td>
              <td>mobile_app</td>
              <td class="font-semibold text-green-600">$2,400</td>
              <td><span class="y2k-terminal-chip-success">[DONE]</span></td>
              <td class="text-gray-600">2024-01-15</td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center gap-3">
                  <div class="y2k-terminal-table-avatar bg-gradient-to-br from-purple-400 to-pink-400">B</div>
                  <span class="font-medium">bob_smith</span>
                </div>
              </td>
              <td>website</td>
              <td class="font-semibold text-green-600">$3,200</td>
              <td><span class="y2k-terminal-chip-warning">[WAIT]</span></td>
              <td class="text-gray-600">2024-01-14</td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center gap-3">
                  <div class="y2k-terminal-table-avatar bg-gradient-to-br from-teal-400 to-emerald-400">C</div>
                  <span class="font-medium">carol_wang</span>
                </div>
              </td>
              <td>api_integration</td>
              <td class="font-semibold text-green-600">$1,800</td>
              <td><span class="y2k-terminal-chip-success">[DONE]</span></td>
              <td class="text-gray-600">2024-01-13</td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center gap-3">
                  <div class="y2k-terminal-table-avatar bg-gradient-to-br from-orange-400 to-amber-400">D</div>
                  <span class="font-medium">david_lee</span>
                </div>
              </td>
              <td>brand_design</td>
              <td class="font-semibold text-red-600">$2,950</td>
              <td><span class="y2k-terminal-chip-error">[FAIL]</span></td>
              <td class="text-gray-600">2024-01-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- 浮動操作按鈕 (終端風格) -->
  <button class="y2k-terminal-fab font-mono text-lg">
    [+]
  </button>

  <!-- 页腳 -->
  <footer class="y2k-terminal-footer mt-16 font-mono">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div class="text-gray-600">
          <span class="text-green-500">$</span> echo "© 2025 Y2K Terminal Dashboard. MIT License."
        </div>
        <div class="flex gap-4">
          <a href="javascript:void(0)" class="y2k-terminal-social-icon">[HOME]</a>
          <a href="javascript:void(0)" class="y2k-terminal-social-icon">[CHAT]</a>
          <a href="javascript:void(0)" class="y2k-terminal-social-icon">[MAIL]</a>
        </div>
      </div>
    </div>
  </footer>
</div>
`;

export const terminalCLIY2KFullPageStyles = `
/* Y2K Terminal CLI - 融合風格樣式 */

/* ===== 全局樣式 ===== */
.y2k-terminal-wrapper {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace;
  position: relative;
}

/* CRT 掃描线效果 */
.y2k-crt-scanlines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.03) 0px,
    rgba(0, 0, 0, 0.03) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1000;
  animation: y2k-scanline-flicker 8s infinite;
}

@keyframes y2k-scanline-flicker {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.6; }
}

/* ===== 导航欄 ===== */
.y2k-terminal-navbar {
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);
}

.y2k-terminal-nav-link {
  position: relative;
  color: #10b981;
  font-weight: 500;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
}

.y2k-terminal-nav-link:hover {
  color: #059669;
  text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
  transform: translateX(4px);
}

.y2k-terminal-nav-link::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  background: #10b981;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.y2k-terminal-nav-link:hover::before {
  opacity: 1;
}

/* 搜索框 */
.y2k-terminal-input {
  width: 200px;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  outline: none;
  color: #10b981;
  transition: all 0.3s ease;
}

.y2k-terminal-input::placeholder {
  color: rgba(16, 185, 129, 0.5);
}

.y2k-terminal-input:focus {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.6);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1), 0 0 16px rgba(16, 185, 129, 0.3);
}

/* 圖标按鈕 */
.y2k-terminal-icon-button {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  cursor: pointer;
  color: #10b981;
  transition: all 0.3s ease;
}

.y2k-terminal-icon-button:hover {
  background: rgba(16, 185, 129, 0.2);
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);
  transform: scale(1.05);
}

/* ===== Hero 終端窗口 ===== */
.y2k-terminal-window {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.y2k-terminal-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: rgba(50, 50, 50, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
}

.y2k-terminal-content {
  padding: 2rem;
  background: rgba(10, 10, 10, 0.6);
  min-height: 400px;
  position: relative;
}

.y2k-terminal-ascii-art {
  font-size: 0.65rem;
  line-height: 1.2;
  font-weight: bold;
  white-space: pre;
}

.text-gradient-y2k {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: y2k-gradient-shift 3s ease infinite;
}

@keyframes y2k-gradient-shift {
  0%, 100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(20deg);
  }
}

/* 閃爍光标 */
.y2k-terminal-cursor {
  display: inline-block;
  background: #10b981;
  color: #1a1a1a;
  padding: 0 4px;
  animation: y2k-cursor-blink 1.06s infinite;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
}

@keyframes y2k-cursor-blink {
  0%, 49% {
    opacity: 1;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
  }
  50%, 100% {
    opacity: 0;
    box-shadow: none;
  }
}

/* ===== 按鈕樣式 ===== */
.y2k-terminal-btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.5);
  border-radius: 8px;
  cursor: pointer;
  font-family: 'SF Mono', monospace;
  box-shadow:
    0 4px 16px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.y2k-terminal-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(16, 185, 129, 0.4),
    0 0 32px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.y2k-terminal-btn-secondary {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: #10b981;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  cursor: pointer;
  font-family: 'SF Mono', monospace;
  transition: all 0.3s ease;
}

.y2k-terminal-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(16, 185, 129, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.2);
}

/* ===== 裝飾性氣泡 ===== */
.y2k-terminal-bubble {
  position: absolute;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(16, 185, 129, 0.3) 0%,
    rgba(6, 182, 212, 0.2) 50%,
    rgba(59, 130, 246, 0.15) 100%
  );
  border-radius: 50%;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow:
    0 8px 32px rgba(16, 185, 129, 0.2),
    inset 0 -4px 12px rgba(0, 0, 0, 0.1),
    inset 4px 4px 16px rgba(255, 255, 255, 0.3),
    0 0 40px rgba(16, 185, 129, 0.3);
  animation: y2k-terminal-float 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes y2k-terminal-float {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-30px) scale(1.05);
    opacity: 1;
  }
}

/* ===== 統計卡片 ===== */
.y2k-terminal-stat-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.05),
    0 0 24px rgba(16, 185, 129, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.y2k-terminal-stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #10b981 0%, #06b6d4 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.y2k-terminal-stat-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.1),
    0 0 40px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.y2k-terminal-stat-card:hover::before {
  opacity: 1;
}

.y2k-terminal-icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1),
    inset 0 2px 6px rgba(255, 255, 255, 0.4);
}

.y2k-terminal-trend-up,
.y2k-terminal-trend-down {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-family: 'SF Mono', monospace;
}

.y2k-terminal-trend-up {
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.y2k-terminal-trend-down {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

/* ===== 玻璃態卡片 ===== */
.y2k-terminal-glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.05),
    0 0 24px rgba(16, 185, 129, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

/* ===== 列表項目 ===== */
.y2k-terminal-list-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.y2k-terminal-list-item:hover {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
}

.y2k-terminal-project-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-center;
  border-radius: 8px;
  font-size: 1.25rem;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 -1px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 4px rgba(255, 255, 255, 0.3);
}

/* 進度條 */
.y2k-terminal-progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.y2k-terminal-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  border-radius: 3px;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
  transition: width 0.3s ease;
  position: relative;
}

.y2k-terminal-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: y2k-progress-shine 2s infinite;
}

@keyframes y2k-progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* ===== 時間线 ===== */
.y2k-terminal-timeline-avatar {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1),
    inset 0 2px 6px rgba(255, 255, 255, 0.3);
}

.y2k-terminal-activity-card {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-left: 3px solid #10b981;
  border-radius: 8px;
}

/* ===== 芯片/标籤 ===== */
.y2k-terminal-chip-success,
.y2k-terminal-chip-warning,
.y2k-terminal-chip-error,
.y2k-terminal-chip-info {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  font-size: 0.6875rem;
  font-weight: 600;
  border-radius: 6px;
  font-family: 'SF Mono', monospace;
  letter-spacing: 0.5px;
}

.y2k-terminal-chip-success {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.y2k-terminal-chip-warning {
  background: rgba(245, 158, 11, 0.15);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.y2k-terminal-chip-error {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.y2k-terminal-chip-info {
  background: rgba(59, 130, 246, 0.15);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

/* ===== 表格 ===== */
.y2k-terminal-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
}

.y2k-terminal-table thead th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #10b981;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
}

.y2k-terminal-table tbody tr {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.15);
  transition: all 0.3s ease;
}

.y2k-terminal-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: scale(1.01);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
}

.y2k-terminal-table tbody td {
  padding: 1rem;
  border-top: 1px solid rgba(16, 185, 129, 0.1);
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
}

.y2k-terminal-table tbody td:first-child {
  border-left: 1px solid rgba(16, 185, 129, 0.1);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.y2k-terminal-table tbody td:last-child {
  border-right: 1px solid rgba(16, 185, 129, 0.1);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.y2k-terminal-table-avatar {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  border-radius: 8px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 -1px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 4px rgba(255, 255, 255, 0.3);
}

/* ===== 浮動操作按鈕 ===== */
.y2k-terminal-fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: 1px solid rgba(16, 185, 129, 0.5);
  border-radius: 50%;
  cursor: pointer;
  box-shadow:
    0 8px 24px rgba(16, 185, 129, 0.4),
    0 0 32px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  z-index: 40;
}

.y2k-terminal-fab:hover {
  transform: scale(1.1) rotate(90deg);
  box-shadow:
    0 12px 32px rgba(16, 185, 129, 0.5),
    0 0 48px rgba(16, 185, 129, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* ===== 页腳 ===== */
.y2k-terminal-footer {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(16, 185, 129, 0.2);
}

.y2k-terminal-social-icon {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  font-size: 0.75rem;
  color: #10b981;
  transition: all 0.3s ease;
}

.y2k-terminal-social-icon:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(16, 185, 129, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

/* ===== 響應式设計 ===== */
@media (max-width: 768px) {
  .y2k-terminal-ascii-art {
    font-size: 0.5rem;
  }

  .y2k-terminal-content {
    padding: 1rem;
    min-height: 300px;
  }

  .y2k-terminal-table {
    font-size: 0.75rem;
  }
}
`;
