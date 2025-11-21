/**
 * Skeuomorphism Home Office Full Page - Digital Studio Theme
 * 拟物化家庭辦公室完整页面 - 数位工作室主題
 *
 * 特色組件：
 * - 木质紋理导航欄
 * - 皮革筆記本 Hero 区域
 * - 便簽紙統計卡片
 * - 木质任务看板
 * - 翻页日曆
 * - 文件櫃抽屜
 * - 金屬旋鈕控制面板
 * - 時間追蹤器
 * - 软木通知板
 * - 計算器
 * - 便利貼牆
 * - 木质書架
 */

export const skeuomorphismHomeOfficeFullPageHTML = `
  <!-- Digital Studio Home Office -->
  <div class="skeuo-office-page">

    <!-- Navigation Bar - Wood Texture -->
    <nav class="skeuo-office-nav" role="navigation" aria-label="Main Navigation">
      <div class="skeuo-office-nav-container">
        <div class="skeuo-office-logo">
          <div class="skeuo-office-logo-leather">
            <span class="skeuo-office-logo-text">STUDIO</span>
          </div>
        </div>
        <ul class="skeuo-office-nav-menu">
          <li><a href="javascript:void(0)" class="skeuo-office-nav-link">Dashboard</a></li>
          <li><a href="javascript:void(0)" class="skeuo-office-nav-link">Projects</a></li>
          <li><a href="javascript:void(0)" class="skeuo-office-nav-link">Calendar</a></li>
          <li><a href="javascript:void(0)" class="skeuo-office-nav-link">Files</a></li>
        </ul>
        <button class="skeuo-office-nav-btn" tabindex="0">
          <span class="skeuo-office-nav-btn-text">Settings</span>
        </button>
      </div>
    </nav>

    <!-- Hero Section - Leather Notebook on Wood Desk -->
    <section class="skeuo-office-hero" role="banner">
      <div class="skeuo-office-hero-container">
        <div class="skeuo-office-notebook">
          <!-- Leather Cover -->
          <div class="skeuo-office-notebook-cover">
            <div class="skeuo-office-notebook-strap"></div>
            <div class="skeuo-office-notebook-content">
              <h1 class="skeuo-office-hero-title">
                <span class="skeuo-office-hero-title-line">Digital</span>
                <span class="skeuo-office-hero-title-line skeuo-office-hero-title-bold">Studio</span>
              </h1>
              <p class="skeuo-office-hero-subtitle">
                Your productive workspace, beautifully crafted
              </p>
              <div class="skeuo-office-hero-actions">
                <button class="skeuo-office-btn-primary" tabindex="0">
                  <span>Start Working</span>
                </button>
                <button class="skeuo-office-btn-secondary" tabindex="0">
                  <span>View Projects</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Cards - Sticky Notes -->
    <section class="skeuo-office-stats" aria-label="Statistics">
      <div class="skeuo-office-section-container">
        <div class="skeuo-office-stats-grid">
          <!-- Sticky Note 1 - Yellow -->
          <div class="skeuo-office-sticky skeuo-office-sticky-yellow">
            <div class="skeuo-office-sticky-pin"></div>
            <div class="skeuo-office-sticky-content">
              <div class="skeuo-office-sticky-icon">📊</div>
              <div class="skeuo-office-sticky-value">24</div>
              <div class="skeuo-office-sticky-label">Active Projects</div>
            </div>
          </div>

          <!-- Sticky Note 2 - Pink -->
          <div class="skeuo-office-sticky skeuo-office-sticky-pink">
            <div class="skeuo-office-sticky-pin"></div>
            <div class="skeuo-office-sticky-content">
              <div class="skeuo-office-sticky-icon">✅</div>
              <div class="skeuo-office-sticky-value">156</div>
              <div class="skeuo-office-sticky-label">Tasks Completed</div>
            </div>
          </div>

          <!-- Sticky Note 3 - Green -->
          <div class="skeuo-office-sticky skeuo-office-sticky-green">
            <div class="skeuo-office-sticky-pin"></div>
            <div class="skeuo-office-sticky-content">
              <div class="skeuo-office-sticky-icon">⏰</div>
              <div class="skeuo-office-sticky-value">42h</div>
              <div class="skeuo-office-sticky-label">Time Logged</div>
            </div>
          </div>

          <!-- Sticky Note 4 - Blue -->
          <div class="skeuo-office-sticky skeuo-office-sticky-blue">
            <div class="skeuo-office-sticky-pin"></div>
            <div class="skeuo-office-sticky-content">
              <div class="skeuo-office-sticky-icon">👥</div>
              <div class="skeuo-office-sticky-value">8</div>
              <div class="skeuo-office-sticky-label">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Task Board & Calendar Section -->
    <section class="skeuo-office-workspace">
      <div class="skeuo-office-section-container">
        <div class="skeuo-office-workspace-grid">

          <!-- Left: Task Board (Wood Board with Sticky Notes) -->
          <div class="skeuo-office-board">
            <div class="skeuo-office-board-frame">
              <div class="skeuo-office-board-header">
                <h2 class="skeuo-office-board-title">Task Board</h2>
              </div>
              <div class="skeuo-office-board-content">
                <!-- Task Column 1 -->
                <div class="skeuo-office-task-column">
                  <div class="skeuo-office-task-label">To Do</div>
                  <div class="skeuo-office-task-card skeuo-office-task-yellow">
                    <div class="skeuo-office-task-magnet"></div>
                    <div class="skeuo-office-task-text">Design new landing page</div>
                    <div class="skeuo-office-task-meta">High Priority</div>
                  </div>
                  <div class="skeuo-office-task-card skeuo-office-task-pink">
                    <div class="skeuo-office-task-magnet"></div>
                    <div class="skeuo-office-task-text">Review client feedback</div>
                    <div class="skeuo-office-task-meta">Medium</div>
                  </div>
                </div>

                <!-- Task Column 2 -->
                <div class="skeuo-office-task-column">
                  <div class="skeuo-office-task-label">In Progress</div>
                  <div class="skeuo-office-task-card skeuo-office-task-blue">
                    <div class="skeuo-office-task-magnet"></div>
                    <div class="skeuo-office-task-text">Code review for PR #234</div>
                    <div class="skeuo-office-task-meta">In Review</div>
                  </div>
                </div>

                <!-- Task Column 3 -->
                <div class="skeuo-office-task-column">
                  <div class="skeuo-office-task-label">Done</div>
                  <div class="skeuo-office-task-card skeuo-office-task-green">
                    <div class="skeuo-office-task-magnet"></div>
                    <div class="skeuo-office-task-text">Update documentation</div>
                    <div class="skeuo-office-task-meta">Completed ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Calendar (Flip Calendar) -->
          <div class="skeuo-office-calendar">
            <div class="skeuo-office-calendar-frame">
              <div class="skeuo-office-calendar-ring"></div>
              <div class="skeuo-office-calendar-ring skeuo-office-calendar-ring-right"></div>
              <div class="skeuo-office-calendar-page">
                <div class="skeuo-office-calendar-tear"></div>
                <div class="skeuo-office-calendar-header">
                  <div class="skeuo-office-calendar-month">NOVEMBER</div>
                  <div class="skeuo-office-calendar-year">2025</div>
                </div>
                <div class="skeuo-office-calendar-day">04</div>
                <div class="skeuo-office-calendar-weekday">MONDAY</div>
                <div class="skeuo-office-calendar-events">
                  <div class="skeuo-office-calendar-event">
                    <div class="skeuo-office-calendar-event-time">10:00 AM</div>
                    <div class="skeuo-office-calendar-event-title">Team Meeting</div>
                  </div>
                  <div class="skeuo-office-calendar-event">
                    <div class="skeuo-office-calendar-event-time">2:00 PM</div>
                    <div class="skeuo-office-calendar-event-title">Client Call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Control Panel & File Cabinet Section -->
    <section class="skeuo-office-controls-section">
      <div class="skeuo-office-section-container">
        <div class="skeuo-office-controls-grid">

          <!-- Left: Metal Control Panel -->
          <div class="skeuo-office-control-panel">
            <div class="skeuo-office-panel-frame">
              <div class="skeuo-office-panel-header">
                <h3 class="skeuo-office-panel-title">CONTROL CENTER</h3>
                <div class="skeuo-office-panel-leds">
                  <div class="skeuo-office-led skeuo-office-led-green"></div>
                  <div class="skeuo-office-led skeuo-office-led-blue"></div>
                  <div class="skeuo-office-led skeuo-office-led-red"></div>
                </div>
              </div>

              <div class="skeuo-office-panel-content">
                <!-- Knobs Row -->
                <div class="skeuo-office-knobs-row">
                  <div class="skeuo-office-knob-group">
                    <div class="skeuo-office-knob">
                      <div class="skeuo-office-knob-indicator"></div>
                    </div>
                    <div class="skeuo-office-knob-label">VOLUME</div>
                  </div>
                  <div class="skeuo-office-knob-group">
                    <div class="skeuo-office-knob">
                      <div class="skeuo-office-knob-indicator"></div>
                    </div>
                    <div class="skeuo-office-knob-label">BRIGHTNESS</div>
                  </div>
                  <div class="skeuo-office-knob-group">
                    <div class="skeuo-office-knob">
                      <div class="skeuo-office-knob-indicator"></div>
                    </div>
                    <div class="skeuo-office-knob-label">FOCUS</div>
                  </div>
                </div>

                <!-- Switches Row -->
                <div class="skeuo-office-switches-row">
                  <div class="skeuo-office-switch-group">
                    <div class="skeuo-office-switch skeuo-office-switch-on">
                      <div class="skeuo-office-switch-toggle"></div>
                    </div>
                    <div class="skeuo-office-switch-label">NOTIFICATIONS</div>
                  </div>
                  <div class="skeuo-office-switch-group">
                    <div class="skeuo-office-switch">
                      <div class="skeuo-office-switch-toggle"></div>
                    </div>
                    <div class="skeuo-office-switch-label">DO NOT DISTURB</div>
                  </div>
                </div>

                <!-- LCD Display -->
                <div class="skeuo-office-lcd">
                  <div class="skeuo-office-lcd-screen">
                    <div class="skeuo-office-lcd-text">SYSTEM: READY</div>
                    <div class="skeuo-office-lcd-text">STATUS: <span class="skeuo-office-lcd-green">ACTIVE</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: File Cabinet -->
          <div class="skeuo-office-cabinet">
            <div class="skeuo-office-cabinet-frame">
              <h3 class="skeuo-office-cabinet-title">File Cabinet</h3>

              <!-- Drawer 1 -->
              <div class="skeuo-office-drawer">
                <div class="skeuo-office-drawer-front">
                  <div class="skeuo-office-drawer-handle"></div>
                  <div class="skeuo-office-drawer-label">
                    <span>📁 Projects</span>
                    <span class="skeuo-office-drawer-count">24 files</span>
                  </div>
                </div>
              </div>

              <!-- Drawer 2 -->
              <div class="skeuo-office-drawer">
                <div class="skeuo-office-drawer-front">
                  <div class="skeuo-office-drawer-handle"></div>
                  <div class="skeuo-office-drawer-label">
                    <span>📄 Documents</span>
                    <span class="skeuo-office-drawer-count">156 files</span>
                  </div>
                </div>
              </div>

              <!-- Drawer 3 -->
              <div class="skeuo-office-drawer">
                <div class="skeuo-office-drawer-front">
                  <div class="skeuo-office-drawer-handle"></div>
                  <div class="skeuo-office-drawer-label">
                    <span>🖼️ Media</span>
                    <span class="skeuo-office-drawer-count">89 files</span>
                  </div>
                </div>
              </div>

              <!-- Drawer 4 -->
              <div class="skeuo-office-drawer">
                <div class="skeuo-office-drawer-front">
                  <div class="skeuo-office-drawer-handle"></div>
                  <div class="skeuo-office-drawer-label">
                    <span>🗄️ Archive</span>
                    <span class="skeuo-office-drawer-count">342 files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Cork Board Notifications -->
    <section class="skeuo-office-corkboard-section">
      <div class="skeuo-office-section-container">
        <div class="skeuo-office-corkboard">
          <div class="skeuo-office-corkboard-frame">
            <h2 class="skeuo-office-corkboard-title">📌 Notifications</h2>
            <div class="skeuo-office-corkboard-content">
              <!-- Pinned Note 1 -->
              <div class="skeuo-office-pinned-note skeuo-office-pinned-yellow">
                <div class="skeuo-office-pin skeuo-office-pin-red"></div>
                <div class="skeuo-office-pinned-content">
                  <div class="skeuo-office-pinned-icon">💡</div>
                  <div class="skeuo-office-pinned-title">New Feature Released</div>
                  <div class="skeuo-office-pinned-text">Check out the new dashboard analytics!</div>
                  <div class="skeuo-office-pinned-time">2 hours ago</div>
                </div>
              </div>

              <!-- Pinned Note 2 -->
              <div class="skeuo-office-pinned-note skeuo-office-pinned-green">
                <div class="skeuo-office-pin skeuo-office-pin-blue"></div>
                <div class="skeuo-office-pinned-content">
                  <div class="skeuo-office-pinned-icon">✅</div>
                  <div class="skeuo-office-pinned-title">Task Completed</div>
                  <div class="skeuo-office-pinned-text">Your weekly report is ready to review</div>
                  <div class="skeuo-office-pinned-time">5 hours ago</div>
                </div>
              </div>

              <!-- Pinned Note 3 -->
              <div class="skeuo-office-pinned-note skeuo-office-pinned-orange">
                <div class="skeuo-office-pin skeuo-office-pin-yellow"></div>
                <div class="skeuo-office-pinned-content">
                  <div class="skeuo-office-pinned-icon">📅</div>
                  <div class="skeuo-office-pinned-title">Upcoming Meeting</div>
                  <div class="skeuo-office-pinned-text">Team sync at 2:00 PM today</div>
                  <div class="skeuo-office-pinned-time">1 day ago</div>
                </div>
              </div>

              <!-- Pinned Note 4 -->
              <div class="skeuo-office-pinned-note skeuo-office-pinned-pink">
                <div class="skeuo-office-pin skeuo-office-pin-green"></div>
                <div class="skeuo-office-pinned-content">
                  <div class="skeuo-office-pinned-icon">🎉</div>
                  <div class="skeuo-office-pinned-title">Milestone Achieved</div>
                  <div class="skeuo-office-pinned-text">100 projects completed this year!</div>
                  <div class="skeuo-office-pinned-time">3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Time Tracker & Calculator Section -->
    <section class="skeuo-office-tools-section">
      <div class="skeuo-office-section-container">
        <div class="skeuo-office-tools-grid">

          <!-- Time Tracker (Dial Clock) -->
          <div class="skeuo-office-timer">
            <div class="skeuo-office-timer-frame">
              <h3 class="skeuo-office-timer-title">Time Tracker</h3>
              <div class="skeuo-office-timer-dial">
                <div class="skeuo-office-timer-center"></div>
                <div class="skeuo-office-timer-hand skeuo-office-timer-hour"></div>
                <div class="skeuo-office-timer-hand skeuo-office-timer-minute"></div>
                <div class="skeuo-office-timer-markers">
                  <div class="skeuo-office-timer-marker" style="transform: rotate(0deg)"></div>
                  <div class="skeuo-office-timer-marker" style="transform: rotate(90deg)"></div>
                  <div class="skeuo-office-timer-marker" style="transform: rotate(180deg)"></div>
                  <div class="skeuo-office-timer-marker" style="transform: rotate(270deg)"></div>
                </div>
              </div>
              <div class="skeuo-office-timer-display">
                <div class="skeuo-office-timer-value">2h 45m</div>
                <div class="skeuo-office-timer-label">Today's Focus Time</div>
              </div>
              <div class="skeuo-office-timer-buttons">
                <button class="skeuo-office-timer-btn skeuo-office-timer-btn-start">▶</button>
                <button class="skeuo-office-timer-btn skeuo-office-timer-btn-pause">⏸</button>
                <button class="skeuo-office-timer-btn skeuo-office-timer-btn-stop">⏹</button>
              </div>
            </div>
          </div>

          <!-- Calculator -->
          <div class="skeuo-office-calculator">
            <div class="skeuo-office-calc-frame">
              <div class="skeuo-office-calc-display">
                <div class="skeuo-office-calc-screen">0</div>
              </div>
              <div class="skeuo-office-calc-buttons">
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-func">C</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-func">±</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-func">%</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-op">÷</button>

                <button class="skeuo-office-calc-btn">7</button>
                <button class="skeuo-office-calc-btn">8</button>
                <button class="skeuo-office-calc-btn">9</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-op">×</button>

                <button class="skeuo-office-calc-btn">4</button>
                <button class="skeuo-office-calc-btn">5</button>
                <button class="skeuo-office-calc-btn">6</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-op">−</button>

                <button class="skeuo-office-calc-btn">1</button>
                <button class="skeuo-office-calc-btn">2</button>
                <button class="skeuo-office-calc-btn">3</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-op">+</button>

                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-zero">0</button>
                <button class="skeuo-office-calc-btn">.</button>
                <button class="skeuo-office-calc-btn skeuo-office-calc-btn-eq">=</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Progress Sliders Section -->
    <section class="skeuo-office-progress-section">
      <div class="skeuo-office-section-container">
        <div class="skeuo-office-progress-card">
          <h2 class="skeuo-office-progress-title">Project Progress</h2>

          <div class="skeuo-office-slider-item">
            <div class="skeuo-office-slider-header">
              <span class="skeuo-office-slider-label">UI Design</span>
              <span class="skeuo-office-slider-value">85%</span>
            </div>
            <div class="skeuo-office-slider">
              <div class="skeuo-office-slider-track"></div>
              <div class="skeuo-office-slider-fill" style="width: 85%"></div>
              <div class="skeuo-office-slider-thumb" style="left: 85%"></div>
            </div>
          </div>

          <div class="skeuo-office-slider-item">
            <div class="skeuo-office-slider-header">
              <span class="skeuo-office-slider-label">Development</span>
              <span class="skeuo-office-slider-value">60%</span>
            </div>
            <div class="skeuo-office-slider">
              <div class="skeuo-office-slider-track"></div>
              <div class="skeuo-office-slider-fill" style="width: 60%"></div>
              <div class="skeuo-office-slider-thumb" style="left: 60%"></div>
            </div>
          </div>

          <div class="skeuo-office-slider-item">
            <div class="skeuo-office-slider-header">
              <span class="skeuo-office-slider-label">Testing</span>
              <span class="skeuo-office-slider-value">40%</span>
            </div>
            <div class="skeuo-office-slider">
              <div class="skeuo-office-slider-track"></div>
              <div class="skeuo-office-slider-fill" style="width: 40%"></div>
              <div class="skeuo-office-slider-thumb" style="left: 40%"></div>
            </div>
          </div>

          <div class="skeuo-office-slider-item">
            <div class="skeuo-office-slider-header">
              <span class="skeuo-office-slider-label">Deployment</span>
              <span class="skeuo-office-slider-value">20%</span>
            </div>
            <div class="skeuo-office-slider">
              <div class="skeuo-office-slider-track"></div>
              <div class="skeuo-office-slider-fill" style="width: 20%"></div>
              <div class="skeuo-office-slider-thumb" style="left: 20%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer - Leather Texture -->
    <footer class="skeuo-office-footer" role="contentinfo">
      <div class="skeuo-office-footer-container">
        <div class="skeuo-office-footer-grid">
          <div class="skeuo-office-footer-col">
            <div class="skeuo-office-footer-logo">
              <span class="skeuo-office-footer-logo-text">STUDIO</span>
            </div>
            <p class="skeuo-office-footer-desc">
              Your digital workspace, crafted with care
            </p>
          </div>
          <div class="skeuo-office-footer-col">
            <h4 class="skeuo-office-footer-heading">Products</h4>
            <ul class="skeuo-office-footer-links">
              <li><a href="javascript:void(0)">Dashboard</a></li>
              <li><a href="javascript:void(0)">Projects</a></li>
              <li><a href="javascript:void(0)">Calendar</a></li>
              <li><a href="javascript:void(0)">Files</a></li>
            </ul>
          </div>
          <div class="skeuo-office-footer-col">
            <h4 class="skeuo-office-footer-heading">Company</h4>
            <ul class="skeuo-office-footer-links">
              <li><a href="javascript:void(0)">About</a></li>
              <li><a href="javascript:void(0)">Blog</a></li>
              <li><a href="javascript:void(0)">Careers</a></li>
              <li><a href="javascript:void(0)">Contact</a></li>
            </ul>
          </div>
          <div class="skeuo-office-footer-col">
            <h4 class="skeuo-office-footer-heading">Resources</h4>
            <ul class="skeuo-office-footer-links">
              <li><a href="javascript:void(0)">Documentation</a></li>
              <li><a href="javascript:void(0)">Help Center</a></li>
              <li><a href="javascript:void(0)">Community</a></li>
              <li><a href="javascript:void(0)">Support</a></li>
            </ul>
          </div>
        </div>
        <div class="skeuo-office-footer-bottom">
          <div class="skeuo-office-footer-divider"></div>
          <p class="skeuo-office-footer-copyright">
            © 2025 Digital Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  </div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色木质深棕色 (#8B4513, #A0522D)、皮革棕色 (#654321)、便签黄色 (#FFE066)、便签粉色 (#FFB3BA)、便签绿色 (#BAFFC9)、便签蓝色 (#BAE1FF)、金属银色 (#C0C0C0)
`;

export const skeuomorphismHomeOfficeFullPageStyles = `
  /* ========================================
     SKEUOMORPHISM HOME OFFICE - DIGITAL STUDIO
     ======================================== */

  /* Base & Layout */
  .skeuo-office-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f1e8 0%, #e8dcc4 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  .skeuo-office-section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  /* ===== NAVIGATION BAR - WOOD TEXTURE ===== */
  .skeuo-office-nav {
    background:
      linear-gradient(180deg, rgba(139, 90, 43, 0.1) 0%, transparent 100%),
      repeating-linear-gradient(90deg,
        #8b5a2b 0px,
        #7d4f26 2px,
        #8b5a2b 4px);
    border-bottom: 3px solid #6b4423;
    box-shadow:
      0 4px 12px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.2),
      inset 0 -2px 8px rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .skeuo-office-nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .skeuo-office-logo {
    display: flex;
    align-items: center;
  }

  .skeuo-office-logo-leather {
    background:
      linear-gradient(135deg, #654321 0%, #4a3319 100%);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    box-shadow:
      0 4px 0 #3a2510,
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 6px 12px rgba(0,0,0,0.3);
    border: 2px solid #8b6f47;
    position: relative;
  }

  .skeuo-office-logo-leather::before {
    content: '';
    position: absolute;
    inset: 4px;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    );
    border-radius: 6px;
    pointer-events: none;
  }

  .skeuo-office-logo-text {
    font-size: 1.25rem;
    font-weight: 900;
    color: #f5deb3;
    text-shadow:
      0 2px 4px rgba(0,0,0,0.5),
      0 -1px 0 rgba(255,255,255,0.2);
    letter-spacing: 0.1em;
  }

  .skeuo-office-nav-menu {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .skeuo-office-nav-link {
    color: #f5deb3;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.625rem 1.25rem;
    border-radius: 6px;
    background:
      linear-gradient(to bottom, #9b7653 0%, #7d5f42 100%);
    box-shadow:
      0 3px 0 #5d4332,
      inset 0 1px 0 rgba(255,255,255,0.25),
      0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.2s;
    border: 1px solid #6b4f3a;
  }

  .skeuo-office-nav-link:hover {
    transform: translateY(-2px);
    box-shadow:
      0 5px 0 #5d4332,
      inset 0 1px 0 rgba(255,255,255,0.25),
      0 6px 12px rgba(0,0,0,0.3);
  }

  .skeuo-office-nav-link:active {
    transform: translateY(1px);
    box-shadow:
      0 1px 0 #5d4332,
      inset 0 1px 0 rgba(255,255,255,0.25),
      inset 0 2px 8px rgba(0,0,0,0.3);
  }

  .skeuo-office-nav-btn {
    background: linear-gradient(to bottom, #c8a882 0%, #a89068 100%);
    color: #3a2510;
    border: 2px solid #8b7355;
    padding: 0.625rem 1.5rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow:
      0 4px 0 #7d5f42,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 6px 12px rgba(0,0,0,0.2);
    transition: all 0.15s;
  }

  .skeuo-office-nav-btn:hover {
    transform: translateY(-2px);
    box-shadow:
      0 6px 0 #7d5f42,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 8px 16px rgba(0,0,0,0.3);
  }

  .skeuo-office-nav-btn:active {
    transform: translateY(2px);
    box-shadow:
      0 2px 0 #7d5f42,
      inset 0 1px 0 rgba(255,255,255,0.3);
  }

  /* ===== HERO SECTION - LEATHER NOTEBOOK ===== */
  .skeuo-office-hero {
    padding: 4rem 2rem;
    position: relative;
  }

  .skeuo-office-hero-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .skeuo-office-notebook {
    perspective: 1500px;
  }

  .skeuo-office-notebook-cover {
    background:
      linear-gradient(135deg, #654321 0%, #4a3319 50%, #3a2510 100%);
    border-radius: 12px;
    padding: 4rem 3rem;
    box-shadow:
      0 20px 60px rgba(0,0,0,0.4),
      inset 0 2px 4px rgba(255,255,255,0.1),
      inset 0 -2px 4px rgba(0,0,0,0.3);
    border: 3px solid #8b6f47;
    position: relative;
    transform: rotateX(2deg);
  }

  .skeuo-office-notebook-cover::before {
    content: '';
    position: absolute;
    inset: 8px;
    background: repeating-linear-gradient(
      135deg,
      transparent,
      transparent 4px,
      rgba(255,255,255,0.02) 4px,
      rgba(255,255,255,0.02) 8px
    );
    border-radius: 10px;
    pointer-events: none;
  }

  .skeuo-office-notebook-strap {
    position: absolute;
    top: 50%;
    right: -12px;
    width: 24px;
    height: 80px;
    background: linear-gradient(to right, #3a2510 0%, #2a1a08 100%);
    border-radius: 12px;
    transform: translateY(-50%);
    box-shadow:
      inset 0 2px 4px rgba(0,0,0,0.5),
      2px 0 8px rgba(0,0,0,0.3);
  }

  .skeuo-office-notebook-content {
    position: relative;
    z-index: 1;
  }

  .skeuo-office-hero-title {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .skeuo-office-hero-title-line {
    display: block;
    font-size: 3rem;
    font-weight: 300;
    color: #f5deb3;
    text-shadow:
      0 3px 6px rgba(0,0,0,0.4),
      0 -1px 0 rgba(255,255,255,0.1);
  }

  .skeuo-office-hero-title-bold {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }

  .skeuo-office-hero-subtitle {
    text-align: center;
    font-size: 1.25rem;
    color: #d4af78;
    margin-bottom: 2rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  }

  .skeuo-office-hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .skeuo-office-btn-primary {
    background: linear-gradient(to bottom, #d4af78 0%, #c19a6b 100%);
    color: #3a2510;
    border: 2px solid #a89068;
    padding: 0.875rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow:
      0 4px 0 #8b7355,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 8px 16px rgba(0,0,0,0.3);
    transition: all 0.15s;
  }

  .skeuo-office-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow:
      0 6px 0 #8b7355,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 10px 20px rgba(0,0,0,0.4);
  }

  .skeuo-office-btn-primary:active {
    transform: translateY(2px);
    box-shadow:
      0 2px 0 #8b7355,
      inset 0 1px 0 rgba(255,255,255,0.3);
  }

  .skeuo-office-btn-secondary {
    background: transparent;
    color: #f5deb3;
    border: 2px solid #a89068;
    padding: 0.875rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    box-shadow:
      0 4px 0 rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.15s;
  }

  .skeuo-office-btn-secondary:hover {
    background: rgba(212,175,120,0.1);
    transform: translateY(-2px);
    box-shadow:
      0 6px 0 rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.1);
  }

  /* ===== STATS CARDS - STICKY NOTES ===== */
  .skeuo-office-stats {
    padding: 3rem 2rem;
  }

  .skeuo-office-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  .skeuo-office-sticky {
    position: relative;
    padding: 2rem 1.5rem;
    border-radius: 4px 4px 8px 4px;
    box-shadow:
      0 8px 16px rgba(0,0,0,0.15),
      inset 0 -2px 4px rgba(0,0,0,0.1);
    transform: rotate(-1deg);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .skeuo-office-sticky:nth-child(even) {
    transform: rotate(1deg);
  }

  .skeuo-office-sticky:hover {
    transform: rotate(0deg) translateY(-8px);
    box-shadow:
      0 12px 24px rgba(0,0,0,0.2),
      inset 0 -2px 4px rgba(0,0,0,0.1);
  }

  .skeuo-office-sticky-yellow {
    background: linear-gradient(135deg, #fef68a 0%, #ffd54f 100%);
  }

  .skeuo-office-sticky-pink {
    background: linear-gradient(135deg, #ffb3ba 0%, #ff9aa2 100%);
  }

  .skeuo-office-sticky-green {
    background: linear-gradient(135deg, #b2f7ef 0%, #7ae7c7 100%);
  }

  .skeuo-office-sticky-blue {
    background: linear-gradient(135deg, #b4e1ff 0%, #8ec5fc 100%);
  }

  .skeuo-office-sticky-pin {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background: radial-gradient(circle at 30% 30%, #e63946, #9d0208);
    border-radius: 50%;
    box-shadow:
      0 2px 4px rgba(0,0,0,0.3),
      inset -2px -2px 4px rgba(0,0,0,0.2);
  }

  .skeuo-office-sticky-pin::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.5), transparent);
    border-radius: 50%;
  }

  .skeuo-office-sticky-content {
    text-align: center;
  }

  .skeuo-office-sticky-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  .skeuo-office-sticky-value {
    font-size: 3rem;
    font-weight: 900;
    color: #2b2b2b;
    text-shadow: 0 2px 4px rgba(255,255,255,0.5);
    margin-bottom: 0.5rem;
  }

  .skeuo-office-sticky-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* ===== TASK BOARD - WOOD BOARD WITH MAGNETS ===== */
  .skeuo-office-workspace {
    padding: 3rem 2rem;
    background: linear-gradient(to bottom, #e8dcc4 0%, #f5f1e8 100%);
  }

  .skeuo-office-workspace-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .skeuo-office-workspace-grid {
      grid-template-columns: 1fr;
    }
  }

  .skeuo-office-board {
    background: linear-gradient(135deg, #8b4513 0%, #654321 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.1),
      inset 0 -2px 4px rgba(0,0,0,0.2);
  }

  .skeuo-office-board-frame {
    background:
      repeating-linear-gradient(90deg,
        rgba(139, 69, 19, 0.2) 0px,
        rgba(139, 69, 19, 0.2) 4px,
        transparent 4px,
        transparent 8px);
    border-radius: 8px;
    padding: 1.5rem;
  }

  .skeuo-office-board-header {
    margin-bottom: 1.5rem;
  }

  .skeuo-office-board-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f5deb3;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .skeuo-office-board-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    .skeuo-office-board-content {
      grid-template-columns: 1fr;
    }
  }

  .skeuo-office-task-column {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .skeuo-office-task-label {
    font-size: 0.875rem;
    font-weight: 700;
    color: #f5deb3;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.5rem;
    background: rgba(0,0,0,0.2);
    border-radius: 4px;
    text-align: center;
  }

  .skeuo-office-task-card {
    position: relative;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.2s;
  }

  .skeuo-office-task-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }

  .skeuo-office-task-yellow {
    background: linear-gradient(135deg, #fef68a 0%, #ffd54f 100%);
  }

  .skeuo-office-task-pink {
    background: linear-gradient(135deg, #ffb3ba 0%, #ff9aa2 100%);
  }

  .skeuo-office-task-blue {
    background: linear-gradient(135deg, #b4e1ff 0%, #8ec5fc 100%);
  }

  .skeuo-office-task-green {
    background: linear-gradient(135deg, #b2f7ef 0%, #7ae7c7 100%);
  }

  .skeuo-office-task-magnet {
    position: absolute;
    top: -6px;
    right: 8px;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle at 30% 30%, #708090, #2f4f4f);
    border-radius: 50%;
    box-shadow:
      0 2px 4px rgba(0,0,0,0.3),
      inset -1px -1px 2px rgba(0,0,0,0.2);
  }

  .skeuo-office-task-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: #2b2b2b;
    margin-bottom: 0.5rem;
  }

  .skeuo-office-task-meta {
    font-size: 0.75rem;
    color: #555;
  }

  /* ===== CALENDAR - FLIP CALENDAR ===== */
  .skeuo-office-calendar {
    background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.15),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }

  .skeuo-office-calendar-frame {
    position: relative;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 8px 16px rgba(0,0,0,0.1),
      inset 0 -2px 4px rgba(0,0,0,0.05);
  }

  .skeuo-office-calendar-ring {
    position: absolute;
    top: -10px;
    left: 20%;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle at 30% 30%, #c0c0c0, #808080);
    border-radius: 50%;
    box-shadow:
      0 4px 8px rgba(0,0,0,0.2),
      inset 0 -2px 4px rgba(0,0,0,0.3);
  }

  .skeuo-office-calendar-ring-right {
    left: auto;
    right: 20%;
  }

  .skeuo-office-calendar-tear {
    height: 12px;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 4px,
      #e9ecef 4px,
      #e9ecef 8px
    );
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  }

  .skeuo-office-calendar-page {
    padding: 1.5rem;
  }

  .skeuo-office-calendar-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .skeuo-office-calendar-month {
    font-size: 0.875rem;
    font-weight: 700;
    color: #dc3545;
    letter-spacing: 0.1em;
  }

  .skeuo-office-calendar-year {
    font-size: 0.75rem;
    color: #6c757d;
    margin-top: 0.25rem;
  }

  .skeuo-office-calendar-day {
    font-size: 4rem;
    font-weight: 900;
    color: #212529;
    text-align: center;
    line-height: 1;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .skeuo-office-calendar-weekday {
    font-size: 1rem;
    font-weight: 600;
    color: #6c757d;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }

  .skeuo-office-calendar-events {
    border-top: 2px solid #e9ecef;
    padding-top: 1rem;
  }

  .skeuo-office-calendar-event {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: #f8f9fa;
    border-left: 3px solid #0d6efd;
    border-radius: 4px;
  }

  .skeuo-office-calendar-event-time {
    font-size: 0.75rem;
    font-weight: 600;
    color: #0d6efd;
    margin-bottom: 0.25rem;
  }

  .skeuo-office-calendar-event-title {
    font-size: 0.875rem;
    color: #212529;
  }

  /* ===== CONTROL PANEL - METAL & LED ===== */
  .skeuo-office-controls-section {
    padding: 3rem 2rem;
  }

  .skeuo-office-controls-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .skeuo-office-controls-grid {
      grid-template-columns: 1fr;
    }
  }

  .skeuo-office-control-panel {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.1),
      inset 0 -2px 4px rgba(0,0,0,0.2);
  }

  .skeuo-office-panel-frame {
    background: rgba(0,0,0,0.2);
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .skeuo-office-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgba(255,255,255,0.1);
  }

  .skeuo-office-panel-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ecf0f1;
    letter-spacing: 0.1em;
  }

  .skeuo-office-panel-leds {
    display: flex;
    gap: 0.5rem;
  }

  .skeuo-office-led {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow:
      0 0 8px currentColor,
      inset 0 1px 2px rgba(255,255,255,0.3);
  }

  .skeuo-office-led-green {
    background: #2ecc71;
    box-shadow:
      0 0 12px #2ecc71,
      inset 0 1px 2px rgba(255,255,255,0.3);
  }

  .skeuo-office-led-blue {
    background: #3498db;
    box-shadow:
      0 0 12px #3498db,
      inset 0 1px 2px rgba(255,255,255,0.3);
  }

  .skeuo-office-led-red {
    background: #e74c3c;
    box-shadow:
      0 0 12px #e74c3c,
      inset 0 1px 2px rgba(255,255,255,0.3);
  }

  .skeuo-office-panel-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* Knobs */
  .skeuo-office-knobs-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .skeuo-office-knob-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .skeuo-office-knob {
    width: 60px;
    height: 60px;
    background:
      radial-gradient(circle at 30% 30%, #7f8c8d, #34495e),
      linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
    border-radius: 50%;
    box-shadow:
      0 4px 0 #1a252f,
      inset 0 -2px 4px rgba(0,0,0,0.5),
      inset 0 2px 4px rgba(255,255,255,0.1);
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
  }

  .skeuo-office-knob:hover {
    transform: rotate(15deg);
  }

  .skeuo-office-knob:active {
    transform: translateY(2px);
    box-shadow:
      0 2px 0 #1a252f,
      inset 0 -2px 4px rgba(0,0,0,0.5),
      inset 0 2px 4px rgba(255,255,255,0.1);
  }

  .skeuo-office-knob-indicator {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 12px;
    background: #ecf0f1;
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(255,255,255,0.5);
  }

  .skeuo-office-knob-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #ecf0f1;
    text-align: center;
    letter-spacing: 0.05em;
  }

  /* Switches */
  .skeuo-office-switches-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .skeuo-office-switch-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .skeuo-office-switch {
    width: 60px;
    height: 30px;
    background: linear-gradient(to bottom, #1a252f 0%, #2c3e50 100%);
    border-radius: 15px;
    box-shadow:
      inset 0 2px 8px rgba(0,0,0,0.5),
      inset 0 -1px 2px rgba(255,255,255,0.05);
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
  }

  .skeuo-office-switch-toggle {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: radial-gradient(circle at 30% 30%, #95a5a6, #7f8c8d);
    border-radius: 50%;
    box-shadow:
      0 2px 4px rgba(0,0,0,0.3),
      inset 0 1px 2px rgba(255,255,255,0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .skeuo-office-switch-on {
    background: linear-gradient(to bottom, #27ae60 0%, #229954 100%);
  }

  .skeuo-office-switch-on .skeuo-office-switch-toggle {
    left: calc(100% - 27px);
  }

  .skeuo-office-switch-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #ecf0f1;
    text-align: center;
    letter-spacing: 0.05em;
  }

  /* LCD Display */
  .skeuo-office-lcd {
    background: linear-gradient(to bottom, #1a252f 0%, #0f1419 100%);
    border-radius: 8px;
    padding: 1rem;
    box-shadow:
      inset 0 2px 8px rgba(0,0,0,0.6),
      inset 0 -1px 2px rgba(255,255,255,0.05);
  }

  .skeuo-office-lcd-screen {
    background: linear-gradient(to bottom, #2ecc71 0%, #27ae60 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    font-weight: 700;
    filter: drop-shadow(0 0 8px rgba(46, 204, 113, 0.6));
  }

  .skeuo-office-lcd-text {
    margin-bottom: 0.25rem;
  }

  .skeuo-office-lcd-green {
    color: #2ecc71;
    animation: lcd-blink 2s infinite;
  }

  @keyframes lcd-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  /* ===== FILE CABINET - WOOD DRAWERS ===== */
  .skeuo-office-cabinet {
    background: linear-gradient(135deg, #8b4513 0%, #654321 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.1),
      inset 0 -2px 4px rgba(0,0,0,0.2);
  }

  .skeuo-office-cabinet-frame {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .skeuo-office-cabinet-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #f5deb3;
    text-align: center;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .skeuo-office-drawer {
    background: linear-gradient(to bottom, #9b7653 0%, #7d5f42 100%);
    border-radius: 6px;
    box-shadow:
      0 4px 0 #5d4332,
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.2s;
  }

  .skeuo-office-drawer:hover {
    transform: translateX(4px);
    box-shadow:
      0 6px 0 #5d4332,
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 6px 12px rgba(0,0,0,0.3);
  }

  .skeuo-office-drawer-front {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .skeuo-office-drawer-handle {
    width: 40px;
    height: 12px;
    background:
      linear-gradient(to bottom, #c0c0c0 0%, #808080 100%);
    border-radius: 6px;
    box-shadow:
      0 2px 0 #5a5a5a,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 2px 4px rgba(0,0,0,0.2);
  }

  .skeuo-office-drawer-label {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: #f5deb3;
  }

  .skeuo-office-drawer-count {
    font-size: 0.75rem;
    color: #d4af78;
  }

  /* ===== CORK BOARD - PINNED NOTES ===== */
  .skeuo-office-corkboard-section {
    padding: 3rem 2rem;
    background: linear-gradient(to bottom, #f5f1e8 0%, #e8dcc4 100%);
  }

  .skeuo-office-corkboard {
    max-width: 1280px;
    margin: 0 auto;
  }

  .skeuo-office-corkboard-frame {
    background:
      repeating-linear-gradient(45deg,
        #c19a6b 0px,
        #c19a6b 2px,
        #b8956a 2px,
        #b8956a 4px),
      linear-gradient(to bottom, #c19a6b 0%, #a89068 100%);
    border-radius: 12px;
    padding: 2rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.2),
      inset 0 2px 4px rgba(255,255,255,0.1);
  }

  .skeuo-office-corkboard-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #3a2510;
    text-align: center;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 2px rgba(255,255,255,0.3);
  }

  .skeuo-office-corkboard-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .skeuo-office-pinned-note {
    position: relative;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    transform: rotate(-2deg);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .skeuo-office-pinned-note:nth-child(even) {
    transform: rotate(2deg);
  }

  .skeuo-office-pinned-note:hover {
    transform: rotate(0deg) translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  .skeuo-office-pinned-yellow {
    background: linear-gradient(135deg, #fef68a 0%, #ffd54f 100%);
  }

  .skeuo-office-pinned-green {
    background: linear-gradient(135deg, #b2f7ef 0%, #7ae7c7 100%);
  }

  .skeuo-office-pinned-orange {
    background: linear-gradient(135deg, #ffd89b 0%, #ff9a76 100%);
  }

  .skeuo-office-pinned-pink {
    background: linear-gradient(135deg, #ffb3ba 0%, #ff9aa2 100%);
  }

  .skeuo-office-pin {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow:
      0 2px 4px rgba(0,0,0,0.3),
      inset -2px -2px 4px rgba(0,0,0,0.2);
  }

  .skeuo-office-pin::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.5), transparent);
    border-radius: 50%;
  }

  .skeuo-office-pin-red {
    background: radial-gradient(circle at 30% 30%, #e63946, #9d0208);
  }

  .skeuo-office-pin-blue {
    background: radial-gradient(circle at 30% 30%, #3498db, #2980b9);
  }

  .skeuo-office-pin-yellow {
    background: radial-gradient(circle at 30% 30%, #f1c40f, #d68910);
  }

  .skeuo-office-pin-green {
    background: radial-gradient(circle at 30% 30%, #2ecc71, #27ae60);
  }

  .skeuo-office-pinned-content {
    text-align: center;
  }

  .skeuo-office-pinned-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  .skeuo-office-pinned-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #2b2b2b;
    margin-bottom: 0.5rem;
  }

  .skeuo-office-pinned-text {
    font-size: 0.875rem;
    color: #4a4a4a;
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  .skeuo-office-pinned-time {
    font-size: 0.75rem;
    color: #6b6b6b;
    font-style: italic;
  }

  /* ===== TOOLS SECTION - TIMER & CALCULATOR ===== */
  .skeuo-office-tools-section {
    padding: 3rem 2rem;
  }

  .skeuo-office-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  /* Time Tracker */
  .skeuo-office-timer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.1);
  }

  .skeuo-office-timer-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .skeuo-office-timer-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ecf0f1;
    text-align: center;
  }

  .skeuo-office-timer-dial {
    width: 180px;
    height: 180px;
    background:
      radial-gradient(circle at 50% 50%, #34495e 0%, #2c3e50 100%);
    border-radius: 50%;
    box-shadow:
      0 8px 16px rgba(0,0,0,0.3),
      inset 0 4px 8px rgba(0,0,0,0.4),
      inset 0 -2px 4px rgba(255,255,255,0.1);
    position: relative;
  }

  .skeuo-office-timer-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: radial-gradient(circle at 30% 30%, #95a5a6, #7f8c8d);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 3;
  }

  .skeuo-office-timer-hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .skeuo-office-timer-hour {
    width: 6px;
    height: 50px;
    background: linear-gradient(to top, #e74c3c 0%, #c0392b 100%);
    transform: translate(-50%, 0) rotate(45deg);
  }

  .skeuo-office-timer-minute {
    width: 4px;
    height: 70px;
    background: linear-gradient(to top, #3498db 0%, #2980b9 100%);
    transform: translate(-50%, 0) rotate(135deg);
  }

  .skeuo-office-timer-markers {
    position: absolute;
    inset: 10px;
  }

  .skeuo-office-timer-marker {
    position: absolute;
    top: 0;
    left: 50%;
    width: 3px;
    height: 15px;
    background: #7f8c8d;
    transform-origin: 50% 80px;
    border-radius: 2px;
  }

  .skeuo-office-timer-display {
    text-align: center;
  }

  .skeuo-office-timer-value {
    font-size: 2rem;
    font-weight: 900;
    color: #ecf0f1;
    margin-bottom: 0.25rem;
  }

  .skeuo-office-timer-label {
    font-size: 0.875rem;
    color: #bdc3c7;
  }

  .skeuo-office-timer-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .skeuo-office-timer-btn {
    width: 50px;
    height: 50px;
    background: linear-gradient(to bottom, #95a5a6 0%, #7f8c8d 100%);
    border: none;
    border-radius: 50%;
    color: #2c3e50;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow:
      0 4px 0 #5d6d7e,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 6px 12px rgba(0,0,0,0.2);
    transition: all 0.15s;
  }

  .skeuo-office-timer-btn:hover {
    transform: translateY(-2px);
    box-shadow:
      0 6px 0 #5d6d7e,
      inset 0 1px 0 rgba(255,255,255,0.3),
      0 8px 16px rgba(0,0,0,0.3);
  }

  .skeuo-office-timer-btn:active {
    transform: translateY(2px);
    box-shadow:
      0 2px 0 #5d6d7e,
      inset 0 1px 0 rgba(255,255,255,0.3);
  }

  /* Calculator */
  .skeuo-office-calculator {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.1);
  }

  .skeuo-office-calc-frame {
    background: rgba(0,0,0,0.2);
    border-radius: 8px;
    padding: 1rem;
  }

  .skeuo-office-calc-display {
    background: linear-gradient(to bottom, #1a252f 0%, #0f1419 100%);
    border-radius: 6px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow:
      inset 0 2px 8px rgba(0,0,0,0.6),
      inset 0 -1px 2px rgba(255,255,255,0.05);
  }

  .skeuo-office-calc-screen {
    font-family: 'Courier New', monospace;
    font-size: 2rem;
    font-weight: 700;
    color: #2ecc71;
    text-align: right;
    text-shadow: 0 0 8px rgba(46, 204, 113, 0.6);
  }

  .skeuo-office-calc-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  .skeuo-office-calc-btn {
    background: linear-gradient(to bottom, #7f8c8d 0%, #5d6d7e 100%);
    color: #ecf0f1;
    border: none;
    padding: 1rem;
    border-radius: 6px;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow:
      0 3px 0 #34495e,
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.1s;
  }

  .skeuo-office-calc-btn:hover {
    background: linear-gradient(to bottom, #95a5a6 0%, #7f8c8d 100%);
  }

  .skeuo-office-calc-btn:active {
    transform: translateY(2px);
    box-shadow:
      0 1px 0 #34495e,
      inset 0 1px 0 rgba(255,255,255,0.2);
  }

  .skeuo-office-calc-btn-func {
    background: linear-gradient(to bottom, #e67e22 0%, #d35400 100%);
    color: #fff;
  }

  .skeuo-office-calc-btn-op {
    background: linear-gradient(to bottom, #e74c3c 0%, #c0392b 100%);
    color: #fff;
  }

  .skeuo-office-calc-btn-eq {
    background: linear-gradient(to bottom, #2ecc71 0%, #27ae60 100%);
    color: #fff;
  }

  .skeuo-office-calc-btn-zero {
    grid-column: span 2;
  }

  /* ===== PROGRESS SLIDERS ===== */
  .skeuo-office-progress-section {
    padding: 3rem 2rem;
    background: linear-gradient(to bottom, #e8dcc4 0%, #f5f1e8 100%);
  }

  .skeuo-office-progress-card {
    max-width: 900px;
    margin: 0 auto;
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    border-radius: 12px;
    padding: 2rem;
    box-shadow:
      0 12px 24px rgba(0,0,0,0.15),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }

  .skeuo-office-progress-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #2b2b2b;
    text-align: center;
    margin-bottom: 2rem;
  }

  .skeuo-office-slider-item {
    margin-bottom: 1.5rem;
  }

  .skeuo-office-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .skeuo-office-slider-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #4a4a4a;
  }

  .skeuo-office-slider-value {
    font-size: 1rem;
    font-weight: 700;
    color: #2b2b2b;
  }

  .skeuo-office-slider {
    position: relative;
    height: 12px;
  }

  .skeuo-office-slider-track {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, #ddd 0%, #ccc 100%);
    border-radius: 6px;
    box-shadow:
      inset 0 2px 4px rgba(0,0,0,0.2),
      inset 0 -1px 2px rgba(255,255,255,0.3);
  }

  .skeuo-office-slider-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to right, #3498db 0%, #2980b9 100%);
    border-radius: 6px;
    box-shadow:
      0 0 8px rgba(52, 152, 219, 0.4),
      inset 0 1px 2px rgba(255,255,255,0.3);
    transition: width 0.3s ease;
  }

  .skeuo-office-slider-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background:
      radial-gradient(circle at 30% 30%, #95a5a6, #7f8c8d);
    border-radius: 50%;
    box-shadow:
      0 4px 8px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.3);
    cursor: grab;
    transition: left 0.3s ease;
  }

  .skeuo-office-slider-thumb:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  .skeuo-office-slider-thumb:active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(0.95);
  }

  /* ===== FOOTER - LEATHER TEXTURE ===== */
  .skeuo-office-footer {
    background:
      linear-gradient(135deg, #654321 0%, #4a3319 50%, #3a2510 100%);
    padding: 3rem 2rem 2rem;
    box-shadow:
      inset 0 4px 8px rgba(0,0,0,0.3);
    position: relative;
  }

  .skeuo-office-footer::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      135deg,
      transparent,
      transparent 4px,
      rgba(255,255,255,0.01) 4px,
      rgba(255,255,255,0.01) 8px
    );
    pointer-events: none;
  }

  .skeuo-office-footer-container {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .skeuo-office-footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .skeuo-office-footer-grid {
      grid-template-columns: 1fr;
    }
  }

  .skeuo-office-footer-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .skeuo-office-footer-logo {
    margin-bottom: 0.5rem;
  }

  .skeuo-office-footer-logo-text {
    font-size: 1.5rem;
    font-weight: 900;
    color: #f5deb3;
    text-shadow:
      0 2px 4px rgba(0,0,0,0.5),
      0 -1px 0 rgba(255,255,255,0.1);
    letter-spacing: 0.1em;
  }

  .skeuo-office-footer-desc {
    font-size: 0.875rem;
    color: #d4af78;
    line-height: 1.6;
  }

  .skeuo-office-footer-heading {
    font-size: 0.875rem;
    font-weight: 700;
    color: #f5deb3;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  .skeuo-office-footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skeuo-office-footer-links a {
    color: #c19a6b;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
  }

  .skeuo-office-footer-links a:hover {
    color: #f5deb3;
  }

  .skeuo-office-footer-bottom {
    padding-top: 2rem;
  }

  .skeuo-office-footer-divider {
    height: 2px;
    background: linear-gradient(to right,
      transparent 0%,
      rgba(193, 154, 107, 0.3) 50%,
      transparent 100%
    );
    margin-bottom: 1.5rem;
  }

  .skeuo-office-footer-copyright {
    text-align: center;
    font-size: 0.875rem;
    color: #a89068;
  }

  /* ===== RESPONSIVE ADJUSTMENTS ===== */
  @media (max-width: 768px) {
    .skeuo-office-nav-menu {
      display: none;
    }

    .skeuo-office-hero-title-line {
      font-size: 2rem;
    }

    .skeuo-office-hero-title-bold {
      font-size: 3rem;
    }

    .skeuo-office-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .skeuo-office-knobs-row {
      grid-template-columns: repeat(2, 1fr);
    }

    .skeuo-office-switches-row {
      grid-template-columns: 1fr;
    }
  }
`;
