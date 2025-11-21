// Fluent 2 / Acrylic (Windows 11) 完整預覽页面
// Complete Fluent 2 / Acrylic (Windows 11) Full Page Preview

export const fluent2AcrylicFullPageHTML = `
  <!-- Fluent 2 / Acrylic (Windows 11) Enterprise Dashboard -->
  <div class="fluent2-page min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">

    <!-- Acrylic Navigation Bar -->
    <nav class="fluent2-nav sticky top-0 z-50" role="navigation" aria-label="Main Navigation">
      <div class="fluent2-nav-container">
        <!-- Logo Section -->
        <div class="fluent2-logo-section">
          <div class="fluent2-logo">
            <div class="fluent2-logo-icon">⊞</div>
            <span class="fluent2-logo-text">FluentHub</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="fluent2-nav-links" role="menubar">
          <a href="javascript:void(0)" class="fluent2-nav-link active" role="menuitem" aria-current="page">
            <span class="fluent2-nav-icon">🏠</span>
            <span>Home</span>
          </a>
          <a href="javascript:void(0)" class="fluent2-nav-link" role="menuitem">
            <span class="fluent2-nav-icon">📊</span>
            <span>Analytics</span>
          </a>
          <a href="javascript:void(0)" class="fluent2-nav-link" role="menuitem">
            <span class="fluent2-nav-icon">👥</span>
            <span>Teams</span>
          </a>
          <a href="javascript:void(0)" class="fluent2-nav-link" role="menuitem">
            <span class="fluent2-nav-icon">⚙️</span>
            <span>Settings</span>
          </a>
        </div>

        <!-- Search and Profile -->
        <div class="fluent2-nav-actions">
          <!-- Search Box -->
          <div class="fluent2-search-box">
            <input type="search" placeholder="Search..." class="fluent2-search-input" aria-label="Search">
            <button class="fluent2-search-button" aria-label="Search">
              <span>🔍</span>
            </button>
          </div>

          <!-- Notifications -->
          <button class="fluent2-notification-btn" aria-label="Notifications">
            <span class="fluent2-notification-icon">🔔</span>
            <span class="fluent2-notification-badge">3</span>
          </button>

          <!-- Profile Menu -->
          <div class="fluent2-profile-menu">
            <button class="fluent2-profile-btn" aria-label="Profile menu">
              <div class="fluent2-avatar">
                <span>JD</span>
              </div>
              <span class="fluent2-dropdown-arrow">▼</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Mica Background -->
    <section class="fluent2-hero" role="banner">
      <div class="fluent2-hero-container">
        <div class="fluent2-hero-content">
          <div class="fluent2-hero-text">
            <h1 class="fluent2-hero-title">
              Welcome to
              <span class="fluent2-accent-text">Fluent Design</span>
            </h1>
            <p class="fluent2-hero-subtitle">
              Experience the beauty of Windows 11 design system with Acrylic materials,
              Reveal effects, and modern enterprise aesthetics.
            </p>
          </div>

          <!-- Hero Actions -->
          <div class="fluent2-hero-actions">
            <button class="fluent2-btn fluent2-btn-accent">
              <span class="fluent2-btn-icon">🚀</span>
              <span>Get Started</span>
            </button>
            <button class="fluent2-btn fluent2-btn-standard">
              <span class="fluent2-btn-icon">📖</span>
              <span>Learn More</span>
            </button>
          </div>
        </div>

        <!-- Hero Illustration -->
        <div class="fluent2-hero-visual">
          <div class="fluent2-hero-card">
            <div class="fluent2-hero-card-header">
              <span class="fluent2-card-title">Acrylic Material</span>
              <div class="fluent2-window-controls">
                <span class="fluent2-control-btn minimize">—</span>
                <span class="fluent2-control-btn maximize">⬜</span>
                <span class="fluent2-control-btn close">✕</span>
              </div>
            </div>
            <div class="fluent2-hero-card-content">
              <div class="fluent2-demo-element">
                <div class="fluent2-demo-progress">
                  <div class="fluent2-progress-bar" style="width: 73%"></div>
                </div>
                <span class="fluent2-demo-text">Design System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Cards Section -->
    <section class="fluent2-stats-section" aria-labelledby="stats-heading">
      <div class="fluent2-section-container">
        <h2 id="stats-heading" class="fluent2-section-title">Dashboard Overview</h2>

        <div class="fluent2-stats-grid">
          <!-- Active Users Card -->
          <div class="fluent2-stats-card" tabindex="0">
            <div class="fluent2-card-header">
              <div class="fluent2-card-icon users">
                <span>👥</span>
              </div>
              <h3 class="fluent2-card-title">Active Users</h3>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-metric-value">12,847</div>
              <div class="fluent2-metric-change positive">
                <span class="fluent2-trend-icon">↗</span>
                <span class="fluent2-trend-text">+12.5% from last month</span>
              </div>
            </div>
          </div>

          <!-- Revenue Card -->
          <div class="fluent2-stats-card" tabindex="0">
            <div class="fluent2-card-header">
              <div class="fluent2-card-icon revenue">
                <span>💰</span>
              </div>
              <h3 class="fluent2-card-title">Revenue</h3>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-metric-value">$89,432</div>
              <div class="fluent2-metric-change positive">
                <span class="fluent2-trend-icon">↗</span>
                <span class="fluent2-trend-text">+8.2% from last month</span>
              </div>
            </div>
          </div>

          <!-- Projects Card -->
          <div class="fluent2-stats-card" tabindex="0">
            <div class="fluent2-card-header">
              <div class="fluent2-card-icon projects">
                <span>📁</span>
              </div>
              <h3 class="fluent2-card-title">Active Projects</h3>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-metric-value">247</div>
              <div class="fluent2-metric-change negative">
                <span class="fluent2-trend-icon">↘</span>
                <span class="fluent2-trend-text">-3.1% from last month</span>
              </div>
            </div>
          </div>

          <!-- Performance Card -->
          <div class="fluent2-stats-card" tabindex="0">
            <div class="fluent2-card-header">
              <div class="fluent2-card-icon performance">
                <span>⚡</span>
              </div>
              <h3 class="fluent2-card-title">Performance</h3>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-metric-value">94.2%</div>
              <div class="fluent2-metric-change positive">
                <span class="fluent2-trend-icon">↗</span>
                <span class="fluent2-trend-text">+1.8% from last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pivot Tabs Section -->
    <section class="fluent2-pivot-section" aria-labelledby="content-tabs">
      <div class="fluent2-section-container">
        <!-- Pivot Header -->
        <div class="fluent2-pivot-header">
          <div class="fluent2-pivot-tabs" role="tablist" aria-labelledby="content-tabs">
            <button class="fluent2-pivot-tab active" role="tab" aria-selected="true" aria-controls="overview-panel">
              <span>Overview</span>
            </button>
            <button class="fluent2-pivot-tab" role="tab" aria-selected="false" aria-controls="analytics-panel">
              <span>Analytics</span>
            </button>
            <button class="fluent2-pivot-tab" role="tab" aria-selected="false" aria-controls="reports-panel">
              <span>Reports</span>
            </button>
            <button class="fluent2-pivot-tab" role="tab" aria-selected="false" aria-controls="settings-panel">
              <span>Settings</span>
            </button>
          </div>
        </div>

        <!-- Pivot Content -->
        <div class="fluent2-pivot-content">
          <!-- Overview Panel -->
          <div id="overview-panel" class="fluent2-tab-panel active" role="tabpanel" aria-labelledby="overview-tab">
            <div class="fluent2-content-grid">
              <!-- Chart Area -->
              <div class="fluent2-chart-card">
                <div class="fluent2-card-header">
                  <h3 class="fluent2-card-title">Monthly Trends</h3>
                  <div class="fluent2-card-actions">
                    <button class="fluent2-icon-btn" aria-label="Refresh">
                      <span>🔄</span>
                    </button>
                    <button class="fluent2-icon-btn" aria-label="Export">
                      <span>📤</span>
                    </button>
                  </div>
                </div>
                <div class="fluent2-chart-container">
                  <!-- Simple Bar Chart -->
                  <div class="fluent2-chart">
                    <div class="fluent2-chart-bars">
                      <div class="fluent2-chart-bar" style="height: 60%" aria-label="January: 60%">
                        <span class="fluent2-bar-label">Jan</span>
                      </div>
                      <div class="fluent2-chart-bar" style="height: 75%" aria-label="February: 75%">
                        <span class="fluent2-bar-label">Feb</span>
                      </div>
                      <div class="fluent2-chart-bar" style="height: 90%" aria-label="March: 90%">
                        <span class="fluent2-bar-label">Mar</span>
                      </div>
                      <div class="fluent2-chart-bar" style="height: 65%" aria-label="April: 65%">
                        <span class="fluent2-bar-label">Apr</span>
                      </div>
                      <div class="fluent2-chart-bar" style="height: 85%" aria-label="May: 85%">
                        <span class="fluent2-bar-label">May</span>
                      </div>
                      <div class="fluent2-chart-bar" style="height: 95%" aria-label="June: 95%">
                        <span class="fluent2-bar-label">Jun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Activity Feed -->
              <div class="fluent2-activity-card">
                <div class="fluent2-card-header">
                  <h3 class="fluent2-card-title">Recent Activity</h3>
                </div>
                <div class="fluent2-activity-list">
                  <div class="fluent2-activity-item">
                    <div class="fluent2-activity-avatar">
                      <span>AM</span>
                    </div>
                    <div class="fluent2-activity-content">
                      <div class="fluent2-activity-text">
                        <strong>Alice Miller</strong> created a new project
                      </div>
                      <div class="fluent2-activity-time">2 minutes ago</div>
                    </div>
                  </div>

                  <div class="fluent2-activity-item">
                    <div class="fluent2-activity-avatar">
                      <span>BJ</span>
                    </div>
                    <div class="fluent2-activity-content">
                      <div class="fluent2-activity-text">
                        <strong>Bob Johnson</strong> updated the dashboard
                      </div>
                      <div class="fluent2-activity-time">15 minutes ago</div>
                    </div>
                  </div>

                  <div class="fluent2-activity-item">
                    <div class="fluent2-activity-avatar">
                      <span>CD</span>
                    </div>
                    <div class="fluent2-activity-content">
                      <div class="fluent2-activity-text">
                        <strong>Carol Davis</strong> shared a document
                      </div>
                      <div class="fluent2-activity-time">1 hour ago</div>
                    </div>
                  </div>

                  <div class="fluent2-activity-item">
                    <div class="fluent2-activity-avatar">
                      <span>DW</span>
                    </div>
                    <div class="fluent2-activity-content">
                      <div class="fluent2-activity-text">
                        <strong>David Wilson</strong> completed a task
                      </div>
                      <div class="fluent2-activity-time">3 hours ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section with Fluent Inputs -->
    <section class="fluent2-form-section" aria-labelledby="form-heading">
      <div class="fluent2-section-container">
        <h2 id="form-heading" class="fluent2-section-title">Create New Project</h2>

        <div class="fluent2-form-card">
          <form class="fluent2-form" novalidate>
            <!-- Form Grid -->
            <div class="fluent2-form-grid">
              <!-- Project Name -->
              <div class="fluent2-form-field">
                <label for="project-name" class="fluent2-label">Project Name</label>
                <input type="text" id="project-name" class="fluent2-input" placeholder="Enter project name" required>
              </div>

              <!-- Category -->
              <div class="fluent2-form-field">
                <label for="project-category" class="fluent2-label">Category</label>
                <select id="project-category" class="fluent2-select" required>
                  <option value="">Select category</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="desktop">Desktop Software</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>

              <!-- Priority -->
              <div class="fluent2-form-field">
                <label for="project-priority" class="fluent2-label">Priority</label>
                <select id="project-priority" class="fluent2-select">
                  <option value="low">Low</option>
                  <option value="medium" selected>Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <!-- Due Date -->
              <div class="fluent2-form-field">
                <label for="project-due-date" class="fluent2-label">Due Date</label>
                <input type="date" id="project-due-date" class="fluent2-input">
              </div>

              <!-- Description (Full Width) -->
              <div class="fluent2-form-field fluent2-field-full">
                <label for="project-description" class="fluent2-label">Description</label>
                <textarea id="project-description" class="fluent2-textarea" rows="4" placeholder="Enter project description..."></textarea>
              </div>

              <!-- Options -->
              <div class="fluent2-form-field fluent2-field-full">
                <div class="fluent2-form-options">
                  <!-- Toggle Switch -->
                  <div class="fluent2-toggle-group">
                    <label class="fluent2-toggle-label">
                      <input type="checkbox" class="fluent2-toggle-input" checked>
                      <span class="fluent2-toggle-slider"></span>
                      <span class="fluent2-toggle-text">Send email notifications</span>
                    </label>
                  </div>

                  <!-- Checkbox -->
                  <div class="fluent2-checkbox-group">
                    <label class="fluent2-checkbox-label">
                      <input type="checkbox" class="fluent2-checkbox-input">
                      <span class="fluent2-checkbox-box"></span>
                      <span class="fluent2-checkbox-text">Add to calendar</span>
                    </label>
                  </div>

                  <!-- Radio Buttons -->
                  <div class="fluent2-radio-group">
                    <span class="fluent2-radio-title">Visibility:</span>
                    <label class="fluent2-radio-label">
                      <input type="radio" name="visibility" value="public" class="fluent2-radio-input" checked>
                      <span class="fluent2-radio-circle"></span>
                      <span class="fluent2-radio-text">Public</span>
                    </label>
                    <label class="fluent2-radio-label">
                      <input type="radio" name="visibility" value="private" class="fluent2-radio-input">
                      <span class="fluent2-radio-circle"></span>
                      <span class="fluent2-radio-text">Private</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="fluent2-form-actions">
              <button type="submit" class="fluent2-btn fluent2-btn-accent">
                <span class="fluent2-btn-icon">✓</span>
                <span>Create Project</span>
              </button>
              <button type="button" class="fluent2-btn fluent2-btn-standard">
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- List View Section -->
    <section class="fluent2-list-section" aria-labelledby="list-heading">
      <div class="fluent2-section-container">
        <h2 id="list-heading" class="fluent2-section-title">Team Members</h2>

        <div class="fluent2-list-card">
          <!-- List Header -->
          <div class="fluent2-list-header">
            <div class="fluent2-list-actions">
              <button class="fluent2-btn fluent2-btn-standard fluent2-btn-sm">
                <span class="fluent2-btn-icon">➕</span>
                <span>Add Member</span>
              </button>
              <button class="fluent2-icon-btn" aria-label="Filter">
                <span>🔽</span>
              </button>
            </div>
          </div>

          <!-- List Items -->
          <div class="fluent2-list-container">
            <div class="fluent2-list-item" tabindex="0">
              <div class="fluent2-list-avatar">
                <span>AM</span>
              </div>
              <div class="fluent2-list-content">
                <div class="fluent2-list-primary">Alice Miller</div>
                <div class="fluent2-list-secondary">Senior Developer • alice@company.com</div>
              </div>
              <div class="fluent2-list-status">
                <span class="fluent2-status-badge online">Online</span>
              </div>
              <div class="fluent2-list-actions">
                <button class="fluent2-icon-btn" aria-label="More options">
                  <span>⋯</span>
                </button>
              </div>
            </div>

            <div class="fluent2-list-item" tabindex="0">
              <div class="fluent2-list-avatar">
                <span>BJ</span>
              </div>
              <div class="fluent2-list-content">
                <div class="fluent2-list-primary">Bob Johnson</div>
                <div class="fluent2-list-secondary">Product Manager • bob@company.com</div>
              </div>
              <div class="fluent2-list-status">
                <span class="fluent2-status-badge away">Away</span>
              </div>
              <div class="fluent2-list-actions">
                <button class="fluent2-icon-btn" aria-label="More options">
                  <span>⋯</span>
                </button>
              </div>
            </div>

            <div class="fluent2-list-item" tabindex="0">
              <div class="fluent2-list-avatar">
                <span>CD</span>
              </div>
              <div class="fluent2-list-content">
                <div class="fluent2-list-primary">Carol Davis</div>
                <div class="fluent2-list-secondary">UX Designer • carol@company.com</div>
              </div>
              <div class="fluent2-list-status">
                <span class="fluent2-status-badge offline">Offline</span>
              </div>
              <div class="fluent2-list-actions">
                <button class="fluent2-icon-btn" aria-label="More options">
                  <span>⋯</span>
                </button>
              </div>
            </div>

            <div class="fluent2-list-item" tabindex="0">
              <div class="fluent2-list-avatar">
                <span>DW</span>
              </div>
              <div class="fluent2-list-content">
                <div class="fluent2-list-primary">David Wilson</div>
                <div class="fluent2-list-secondary">DevOps Engineer • david@company.com</div>
              </div>
              <div class="fluent2-list-status">
                <span class="fluent2-status-badge online">Online</span>
              </div>
              <div class="fluent2-list-actions">
                <button class="fluent2-icon-btn" aria-label="More options">
                  <span>⋯</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Settings Panel with Density Switcher -->
    <section class="fluent2-settings-section" aria-labelledby="settings-heading">
      <div class="fluent2-section-container">
        <h2 id="settings-heading" class="fluent2-section-title">Appearance Settings</h2>

        <div class="fluent2-settings-grid">
          <!-- Density Settings -->
          <div class="fluent2-settings-card">
            <div class="fluent2-card-header">
              <h3 class="fluent2-card-title">Display Density</h3>
              <p class="fluent2-card-subtitle">Choose how compact or spacious you want the interface</p>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-density-options">
                <label class="fluent2-density-option">
                  <input type="radio" name="density" value="compact" class="fluent2-density-input">
                  <div class="fluent2-density-preview compact">
                    <div class="fluent2-preview-item"></div>
                    <div class="fluent2-preview-item"></div>
                    <div class="fluent2-preview-item"></div>
                  </div>
                  <span class="fluent2-density-label">Compact</span>
                </label>

                <label class="fluent2-density-option">
                  <input type="radio" name="density" value="standard" class="fluent2-density-input" checked>
                  <div class="fluent2-density-preview standard">
                    <div class="fluent2-preview-item"></div>
                    <div class="fluent2-preview-item"></div>
                    <div class="fluent2-preview-item"></div>
                  </div>
                  <span class="fluent2-density-label">Standard</span>
                </label>

                <label class="fluent2-density-option">
                  <input type="radio" name="density" value="spacious" class="fluent2-density-input">
                  <div class="fluent2-density-preview spacious">
                    <div class="fluent2-preview-item"></div>
                    <div class="fluent2-preview-item"></div>
                    <div class="fluent2-preview-item"></div>
                  </div>
                  <span class="fluent2-density-label">Spacious</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Theme Settings -->
          <div class="fluent2-settings-card">
            <div class="fluent2-card-header">
              <h3 class="fluent2-card-title">Theme</h3>
              <p class="fluent2-card-subtitle">Choose your preferred color theme</p>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-theme-options">
                <label class="fluent2-theme-option">
                  <input type="radio" name="theme" value="light" class="fluent2-theme-input" checked>
                  <div class="fluent2-theme-preview light">
                    <div class="fluent2-theme-bg"></div>
                    <div class="fluent2-theme-card"></div>
                  </div>
                  <span class="fluent2-theme-label">Light</span>
                </label>

                <label class="fluent2-theme-option">
                  <input type="radio" name="theme" value="dark" class="fluent2-theme-input">
                  <div class="fluent2-theme-preview dark">
                    <div class="fluent2-theme-bg"></div>
                    <div class="fluent2-theme-card"></div>
                  </div>
                  <span class="fluent2-theme-label">Dark</span>
                </label>

                <label class="fluent2-theme-option">
                  <input type="radio" name="theme" value="auto" class="fluent2-theme-input">
                  <div class="fluent2-theme-preview auto">
                    <div class="fluent2-theme-bg"></div>
                    <div class="fluent2-theme-card"></div>
                  </div>
                  <span class="fluent2-theme-label">Auto</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Effects Settings -->
          <div class="fluent2-settings-card">
            <div class="fluent2-card-header">
              <h3 class="fluent2-card-title">Visual Effects</h3>
              <p class="fluent2-card-subtitle">Control transparency and animations</p>
            </div>
            <div class="fluent2-card-content">
              <div class="fluent2-effects-options">
                <div class="fluent2-effect-setting">
                  <label class="fluent2-setting-label">
                    <span class="fluent2-setting-text">Acrylic materials</span>
                    <input type="checkbox" class="fluent2-toggle-input" checked>
                    <span class="fluent2-toggle-slider"></span>
                  </label>
                </div>

                <div class="fluent2-effect-setting">
                  <label class="fluent2-setting-label">
                    <span class="fluent2-setting-text">Reveal hover effects</span>
                    <input type="checkbox" class="fluent2-toggle-input" checked>
                    <span class="fluent2-toggle-slider"></span>
                  </label>
                </div>

                <div class="fluent2-effect-setting">
                  <label class="fluent2-setting-label">
                    <span class="fluent2-setting-text">Smooth animations</span>
                    <input type="checkbox" class="fluent2-toggle-input" checked>
                    <span class="fluent2-toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer with Mica Background -->
    <footer class="fluent2-footer" role="contentinfo">
      <div class="fluent2-footer-container">
        <div class="fluent2-footer-content">
          <div class="fluent2-footer-section">
            <h4 class="fluent2-footer-title">FluentHub</h4>
            <p class="fluent2-footer-text">Modern enterprise experience with Fluent Design System</p>
          </div>

          <div class="fluent2-footer-section">
            <h4 class="fluent2-footer-title">Product</h4>
            <ul class="fluent2-footer-links">
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Features</a></li>
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Pricing</a></li>
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Updates</a></li>
            </ul>
          </div>

          <div class="fluent2-footer-section">
            <h4 class="fluent2-footer-title">Support</h4>
            <ul class="fluent2-footer-links">
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Documentation</a></li>
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Help Center</a></li>
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Contact</a></li>
            </ul>
          </div>

          <div class="fluent2-footer-section">
            <h4 class="fluent2-footer-title">Company</h4>
            <ul class="fluent2-footer-links">
              <li><a href="javascript:void(0)" class="fluent2-footer-link">About</a></li>
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Privacy</a></li>
              <li><a href="javascript:void(0)" class="fluent2-footer-link">Terms</a></li>
            </ul>
          </div>
        </div>

        <div class="fluent2-footer-bottom">
          <p class="fluent2-copyright">© 2025 FluentHub. Built with Fluent Design System.</p>
          <div class="fluent2-footer-badges">
            <span class="fluent2-badge">Windows 11 Compatible</span>
            <span class="fluent2-badge">WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Notification Flyout (Hidden by default) -->
    <div class="fluent2-flyout fluent2-notification-flyout" role="dialog" aria-labelledby="notification-title" aria-hidden="true">
      <div class="fluent2-flyout-header">
        <h3 id="notification-title" class="fluent2-flyout-title">Notifications</h3>
        <button class="fluent2-flyout-close" aria-label="Close notifications">✕</button>
      </div>
      <div class="fluent2-flyout-content">
        <div class="fluent2-notification-item">
          <div class="fluent2-notification-icon">📧</div>
          <div class="fluent2-notification-content">
            <div class="fluent2-notification-title">New message received</div>
            <div class="fluent2-notification-text">You have a new message from Alice Miller</div>
            <div class="fluent2-notification-time">2 minutes ago</div>
          </div>
        </div>

        <div class="fluent2-notification-item">
          <div class="fluent2-notification-icon">🔄</div>
          <div class="fluent2-notification-content">
            <div class="fluent2-notification-title">Project updated</div>
            <div class="fluent2-notification-text">Project "Mobile App" has been updated</div>
            <div class="fluent2-notification-time">15 minutes ago</div>
          </div>
        </div>

        <div class="fluent2-notification-item">
          <div class="fluent2-notification-icon">⚠️</div>
          <div class="fluent2-notification-content">
            <div class="fluent2-notification-title">System maintenance</div>
            <div class="fluent2-notification-text">Scheduled maintenance in 2 hours</div>
            <div class="fluent2-notification-time">1 hour ago</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const fluent2AcrylicFullPageStyles = `
  /* ========================================
     Fluent 2 / Acrylic (Windows 11) Styles
     Complete Design System Implementation
     ======================================== */

  /* === CSS Variables === */
  :root {
    /* Fluent 2 Color Palette */
    --fluent-accent: #0078D4;
    --fluent-accent-hover: #106EBE;
    --fluent-accent-pressed: #005A9E;
    --fluent-accent-light: rgba(0, 120, 212, 0.1);

    /* Text Colors */
    --fluent-text-primary: #242424;
    --fluent-text-secondary: #605E5C;
    --fluent-text-tertiary: #8A8886;
    --fluent-text-disabled: #C8C6C4;
    --fluent-text-white: #FFFFFF;

    /* Background Colors */
    --fluent-bg-base: #F3F3F3;
    --fluent-bg-alt: #FAFAFA;
    --fluent-bg-elevated: #FFFFFF;

    /* Border Colors */
    --fluent-border-default: rgba(0, 0, 0, 0.08);
    --fluent-border-subtle: rgba(0, 0, 0, 0.05);
    --fluent-border-strong: rgba(0, 0, 0, 0.16);

    /* Acrylic Materials */
    --fluent-acrylic-bg: rgba(243, 243, 243, 0.7);
    --fluent-acrylic-border: rgba(255, 255, 255, 0.18);
    --fluent-mica-bg: rgba(249, 249, 249, 0.85);

    /* Reveal Effect */
    --fluent-reveal-hover: rgba(0, 120, 212, 0.15);
    --fluent-reveal-pressed: rgba(0, 120, 212, 0.3);
    --fluent-reveal-glow: rgba(0, 120, 212, 0.6);

    /* Shadows (Elevation) */
    --fluent-shadow-2: 0 2px 4px rgba(0, 0, 0, 0.08);
    --fluent-shadow-4: 0 4px 8px rgba(0, 0, 0, 0.12);
    --fluent-shadow-8: 0 8px 16px rgba(0, 0, 0, 0.14);
    --fluent-shadow-16: 0 16px 32px rgba(0, 0, 0, 0.16);

    /* Border Radius */
    --fluent-radius-small: 4px;
    --fluent-radius-medium: 8px;
    --fluent-radius-large: 12px;

    /* Spacing */
    --fluent-spacing-xs: 4px;
    --fluent-spacing-sm: 8px;
    --fluent-spacing-md: 16px;
    --fluent-spacing-lg: 24px;
    --fluent-spacing-xl: 32px;

    /* Animation Timing */
    --fluent-duration-fast: 150ms;
    --fluent-duration-normal: 300ms;
    --fluent-duration-slow: 500ms;
    --fluent-easing: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* === Base Styles === */
  .fluent2-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--fluent-text-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* === Acrylic Navigation Bar === */
  .fluent2-nav {
    background: var(--fluent-acrylic-bg);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    border-bottom: 1px solid var(--fluent-acrylic-border);
    box-shadow: var(--fluent-shadow-2);
    will-change: transform;
  }

  .fluent2-nav-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--fluent-spacing-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    gap: var(--fluent-spacing-lg);
  }

  .fluent2-logo-section {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-md);
  }

  .fluent2-logo {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-sm);
    text-decoration: none;
  }

  .fluent2-logo-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--fluent-accent);
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: var(--fluent-radius-small);
  }

  .fluent2-logo-text {
    font-size: 16px;
    font-weight: 600;
    color: var(--fluent-text-primary);
  }

  /* Navigation Links */
  .fluent2-nav-links {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-xs);
  }

  .fluent2-nav-link {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-xs);
    padding: 8px var(--fluent-spacing-md);
    font-size: 14px;
    font-weight: 500;
    color: var(--fluent-text-secondary);
    text-decoration: none;
    border-radius: var(--fluent-radius-small);
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
    cursor: pointer;
  }

  /* Reveal Effect on Nav Links */
  .fluent2-nav-link::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--fluent-radius-small);
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      var(--fluent-reveal-hover),
      transparent 50%
    );
    opacity: 0;
    transition: opacity var(--fluent-duration-fast) var(--fluent-easing);
    pointer-events: none;
  }

  .fluent2-nav-link:hover::before {
    opacity: 1;
  }

  .fluent2-nav-link:hover {
    color: var(--fluent-text-primary);
    background: rgba(0, 0, 0, 0.03);
  }

  .fluent2-nav-link.active {
    color: var(--fluent-accent);
    background: var(--fluent-accent-light);
  }

  .fluent2-nav-icon {
    font-size: 16px;
  }

  /* Navigation Actions */
  .fluent2-nav-actions {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-sm);
  }

  /* Search Box */
  .fluent2-search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--fluent-mica-bg);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid var(--fluent-border-subtle);
    border-radius: var(--fluent-radius-medium);
    overflow: hidden;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-search-box:focus-within {
    border-color: var(--fluent-accent);
    box-shadow: 0 0 0 1px var(--fluent-accent);
  }

  .fluent2-search-input {
    width: 240px;
    padding: 8px var(--fluent-spacing-md);
    border: none;
    background: transparent;
    font-size: 14px;
    color: var(--fluent-text-primary);
    outline: none;
  }

  .fluent2-search-input::placeholder {
    color: var(--fluent-text-tertiary);
  }

  .fluent2-search-button {
    padding: 8px var(--fluent-spacing-sm);
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--fluent-text-secondary);
    transition: color var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-search-button:hover {
    color: var(--fluent-accent);
  }

  /* Notification Button */
  .fluent2-notification-btn {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: var(--fluent-radius-medium);
    cursor: pointer;
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-notification-btn:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .fluent2-notification-icon {
    font-size: 18px;
  }

  .fluent2-notification-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D13438;
    color: white;
    font-size: 10px;
    font-weight: 600;
    border-radius: 8px;
    border: 2px solid var(--fluent-bg-elevated);
  }

  /* Profile Menu */
  .fluent2-profile-menu {
    position: relative;
  }

  .fluent2-profile-btn {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-xs);
    padding: 4px;
    border: none;
    background: transparent;
    border-radius: var(--fluent-radius-medium);
    cursor: pointer;
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-profile-btn:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .fluent2-avatar {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--fluent-accent), #106EBE);
    color: white;
    font-size: 12px;
    font-weight: 600;
    border-radius: 50%;
  }

  .fluent2-dropdown-arrow {
    font-size: 10px;
    color: var(--fluent-text-secondary);
  }

  /* === Hero Section === */
  .fluent2-hero {
    position: relative;
    padding: 80px 0;
    background: var(--fluent-mica-bg);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    overflow: hidden;
  }

  .fluent2-hero-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--fluent-spacing-lg);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }

  .fluent2-hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-xl);
  }

  .fluent2-hero-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    color: var(--fluent-text-primary);
    margin: 0;
  }

  .fluent2-accent-text {
    color: var(--fluent-accent);
  }

  .fluent2-hero-subtitle {
    font-size: 18px;
    line-height: 1.6;
    color: var(--fluent-text-secondary);
    max-width: 480px;
  }

  .fluent2-hero-actions {
    display: flex;
    gap: var(--fluent-spacing-md);
    flex-wrap: wrap;
  }

  /* Hero Visual Card */
  .fluent2-hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fluent2-hero-card {
    width: 100%;
    max-width: 480px;
    background: var(--fluent-acrylic-bg);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    border: 1px solid var(--fluent-acrylic-border);
    border-radius: var(--fluent-radius-large);
    box-shadow: var(--fluent-shadow-8);
    overflow: hidden;
  }

  .fluent2-hero-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--fluent-spacing-md);
    background: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid var(--fluent-border-subtle);
  }

  .fluent2-card-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--fluent-text-primary);
  }

  .fluent2-window-controls {
    display: flex;
    gap: var(--fluent-spacing-sm);
  }

  .fluent2-control-btn {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-control-btn:hover {
    transform: scale(1.1);
  }

  .fluent2-control-btn.minimize {
    background: #FFC107;
  }

  .fluent2-control-btn.maximize {
    background: #4CAF50;
  }

  .fluent2-control-btn.close {
    background: #F44336;
  }

  .fluent2-hero-card-content {
    padding: var(--fluent-spacing-xl);
  }

  .fluent2-demo-element {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-md);
  }

  .fluent2-demo-progress {
    height: 8px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    overflow: hidden;
  }

  .fluent2-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--fluent-accent), #50E6FF);
    border-radius: 4px;
    transition: width var(--fluent-duration-slow) var(--fluent-easing);
  }

  .fluent2-demo-text {
    font-size: 14px;
    color: var(--fluent-text-secondary);
  }

  /* === Stats Section === */
  .fluent2-stats-section {
    padding: 64px 0;
  }

  .fluent2-section-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--fluent-spacing-lg);
  }

  .fluent2-section-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--fluent-text-primary);
    margin: 0 0 var(--fluent-spacing-xl);
  }

  .fluent2-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--fluent-spacing-lg);
  }

  /* Stats Card with Acrylic */
  .fluent2-stats-card {
    padding: var(--fluent-spacing-lg);
    background: var(--fluent-acrylic-bg);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    border: 1px solid var(--fluent-acrylic-border);
    border-radius: var(--fluent-radius-medium);
    box-shadow: var(--fluent-shadow-4);
    transition: all var(--fluent-duration-normal) var(--fluent-easing);
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  /* Reveal Effect on Cards */
  .fluent2-stats-card::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: var(--fluent-radius-medium);
    padding: 1px;
    background: linear-gradient(
      135deg,
      transparent,
      var(--fluent-reveal-glow),
      transparent
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-stats-card:hover::before {
    opacity: 1;
  }

  .fluent2-stats-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--fluent-shadow-8);
  }

  .fluent2-card-header {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-md);
    margin-bottom: var(--fluent-spacing-md);
  }

  .fluent2-card-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: var(--fluent-radius-medium);
    background: var(--fluent-accent-light);
  }

  .fluent2-card-icon.users {
    background: rgba(33, 150, 243, 0.1);
  }

  .fluent2-card-icon.revenue {
    background: rgba(76, 175, 80, 0.1);
  }

  .fluent2-card-icon.projects {
    background: rgba(255, 152, 0, 0.1);
  }

  .fluent2-card-icon.performance {
    background: rgba(156, 39, 176, 0.1);
  }

  .fluent2-card-content {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-sm);
  }

  .fluent2-metric-value {
    font-size: 36px;
    font-weight: 700;
    color: var(--fluent-text-primary);
    line-height: 1;
  }

  .fluent2-metric-change {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 500;
  }

  .fluent2-metric-change.positive {
    color: #107C10;
  }

  .fluent2-metric-change.negative {
    color: #D13438;
  }

  .fluent2-trend-icon {
    font-size: 14px;
  }

  /* === Pivot Tabs Section === */
  .fluent2-pivot-section {
    padding: 64px 0;
    background: var(--fluent-bg-alt);
  }

  .fluent2-pivot-header {
    margin-bottom: var(--fluent-spacing-xl);
  }

  .fluent2-pivot-tabs {
    display: flex;
    gap: var(--fluent-spacing-xs);
    border-bottom: 2px solid var(--fluent-border-subtle);
  }

  .fluent2-pivot-tab {
    position: relative;
    padding: var(--fluent-spacing-md) var(--fluent-spacing-lg);
    border: none;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    color: var(--fluent-text-secondary);
    cursor: pointer;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-pivot-tab::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--fluent-accent);
    transform: scaleX(0);
    transition: transform var(--fluent-duration-normal) var(--fluent-easing);
  }

  .fluent2-pivot-tab:hover {
    color: var(--fluent-text-primary);
    background: rgba(0, 0, 0, 0.02);
  }

  .fluent2-pivot-tab.active {
    color: var(--fluent-accent);
  }

  .fluent2-pivot-tab.active::after {
    transform: scaleX(1);
  }

  .fluent2-pivot-content {
    background: var(--fluent-bg-elevated);
    border-radius: var(--fluent-radius-medium);
    box-shadow: var(--fluent-shadow-2);
    overflow: hidden;
  }

  .fluent2-tab-panel {
    padding: var(--fluent-spacing-xl);
    display: none;
  }

  .fluent2-tab-panel.active {
    display: block;
  }

  .fluent2-content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--fluent-spacing-xl);
  }

  /* Chart Card */
  .fluent2-chart-card {
    padding: var(--fluent-spacing-lg);
    background: var(--fluent-mica-bg);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid var(--fluent-border-subtle);
    border-radius: var(--fluent-radius-medium);
  }

  .fluent2-card-actions {
    display: flex;
    gap: var(--fluent-spacing-xs);
  }

  .fluent2-icon-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: var(--fluent-radius-small);
    cursor: pointer;
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-icon-btn:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .fluent2-chart-container {
    margin-top: var(--fluent-spacing-lg);
  }

  .fluent2-chart {
    height: 240px;
  }

  .fluent2-chart-bars {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    gap: var(--fluent-spacing-md);
  }

  .fluent2-chart-bar {
    flex: 1;
    min-height: 40px;
    background: linear-gradient(180deg, var(--fluent-accent), #106EBE);
    border-radius: var(--fluent-radius-small) var(--fluent-radius-small) 0 0;
    position: relative;
    transition: all var(--fluent-duration-normal) var(--fluent-easing);
    cursor: pointer;
  }

  .fluent2-chart-bar:hover {
    filter: brightness(1.1);
    transform: translateY(-4px);
  }

  .fluent2-bar-label {
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: var(--fluent-text-secondary);
    white-space: nowrap;
  }

  /* Activity Feed */
  .fluent2-activity-card {
    padding: var(--fluent-spacing-lg);
    background: var(--fluent-mica-bg);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid var(--fluent-border-subtle);
    border-radius: var(--fluent-radius-medium);
  }

  .fluent2-activity-list {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-md);
  }

  .fluent2-activity-item {
    display: flex;
    gap: var(--fluent-spacing-md);
    padding: var(--fluent-spacing-md);
    border-radius: var(--fluent-radius-small);
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-activity-item:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .fluent2-activity-avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--fluent-accent), #50E6FF);
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .fluent2-activity-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .fluent2-activity-text {
    font-size: 14px;
    color: var(--fluent-text-primary);
  }

  .fluent2-activity-time {
    font-size: 12px;
    color: var(--fluent-text-tertiary);
  }

  /* === Form Section === */
  .fluent2-form-section {
    padding: 64px 0;
  }

  .fluent2-form-card {
    max-width: 960px;
    margin: 0 auto;
    padding: var(--fluent-spacing-xl);
    background: var(--fluent-bg-elevated);
    border-radius: var(--fluent-radius-medium);
    box-shadow: var(--fluent-shadow-4);
  }

  .fluent2-form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--fluent-spacing-lg);
  }

  .fluent2-form-field {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-xs);
  }

  .fluent2-field-full {
    grid-column: 1 / -1;
  }

  .fluent2-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--fluent-text-primary);
  }

  /* Fluent Input */
  .fluent2-input,
  .fluent2-select,
  .fluent2-textarea {
    padding: 10px var(--fluent-spacing-md);
    font-size: 14px;
    color: var(--fluent-text-primary);
    background: var(--fluent-bg-elevated);
    border: 1px solid var(--fluent-border-default);
    border-radius: var(--fluent-radius-small);
    outline: none;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-input:hover,
  .fluent2-select:hover,
  .fluent2-textarea:hover {
    border-color: var(--fluent-border-strong);
  }

  .fluent2-input:focus,
  .fluent2-select:focus,
  .fluent2-textarea:focus {
    border-color: var(--fluent-accent);
    box-shadow: 0 0 0 1px var(--fluent-accent);
  }

  .fluent2-textarea {
    resize: vertical;
    font-family: inherit;
  }

  /* Form Options */
  .fluent2-form-options {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-md);
  }

  /* Toggle Switch */
  .fluent2-toggle-group {
    display: flex;
    align-items: center;
  }

  .fluent2-toggle-label {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-md);
    cursor: pointer;
  }

  .fluent2-toggle-input {
    position: absolute;
    opacity: 0;
  }

  .fluent2-toggle-slider {
    position: relative;
    width: 40px;
    height: 20px;
    background: var(--fluent-border-strong);
    border-radius: 10px;
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-toggle-slider::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: transform var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-toggle-input:checked + .fluent2-toggle-slider {
    background: var(--fluent-accent);
  }

  .fluent2-toggle-input:checked + .fluent2-toggle-slider::after {
    transform: translateX(20px);
  }

  .fluent2-toggle-text {
    font-size: 14px;
    color: var(--fluent-text-primary);
  }

  /* Checkbox */
  .fluent2-checkbox-group {
    display: flex;
    align-items: center;
  }

  .fluent2-checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-sm);
    cursor: pointer;
  }

  .fluent2-checkbox-input {
    position: absolute;
    opacity: 0;
  }

  .fluent2-checkbox-box {
    width: 20px;
    height: 20px;
    border: 2px solid var(--fluent-border-default);
    border-radius: var(--fluent-radius-small);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-checkbox-box::after {
    content: '✓';
    color: white;
    font-size: 12px;
    opacity: 0;
    transform: scale(0);
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-checkbox-input:checked + .fluent2-checkbox-box {
    background: var(--fluent-accent);
    border-color: var(--fluent-accent);
  }

  .fluent2-checkbox-input:checked + .fluent2-checkbox-box::after {
    opacity: 1;
    transform: scale(1);
  }

  .fluent2-checkbox-text {
    font-size: 14px;
    color: var(--fluent-text-primary);
  }

  /* Radio Buttons */
  .fluent2-radio-group {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-lg);
  }

  .fluent2-radio-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--fluent-text-primary);
  }

  .fluent2-radio-label {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-sm);
    cursor: pointer;
  }

  .fluent2-radio-input {
    position: absolute;
    opacity: 0;
  }

  .fluent2-radio-circle {
    width: 20px;
    height: 20px;
    border: 2px solid var(--fluent-border-default);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-radio-circle::after {
    content: '';
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0);
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-radio-input:checked + .fluent2-radio-circle {
    background: var(--fluent-accent);
    border-color: var(--fluent-accent);
  }

  .fluent2-radio-input:checked + .fluent2-radio-circle::after {
    opacity: 1;
    transform: scale(1);
  }

  .fluent2-radio-text {
    font-size: 14px;
    color: var(--fluent-text-primary);
  }

  /* Form Actions */
  .fluent2-form-actions {
    margin-top: var(--fluent-spacing-xl);
    display: flex;
    gap: var(--fluent-spacing-md);
  }

  /* === Buttons === */
  .fluent2-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--fluent-spacing-sm);
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: var(--fluent-radius-small);
    cursor: pointer;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
    position: relative;
    overflow: hidden;
  }

  .fluent2-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.2),
      transparent 60%
    );
    opacity: 0;
    transition: opacity var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-btn:hover::before {
    opacity: 1;
  }

  .fluent2-btn-accent {
    background: var(--fluent-accent);
    color: white;
  }

  .fluent2-btn-accent:hover {
    background: var(--fluent-accent-hover);
    box-shadow: var(--fluent-shadow-4);
  }

  .fluent2-btn-accent:active {
    background: var(--fluent-accent-pressed);
    transform: scale(0.98);
  }

  .fluent2-btn-standard {
    background: rgba(0, 0, 0, 0.05);
    color: var(--fluent-text-primary);
  }

  .fluent2-btn-standard:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  .fluent2-btn-standard:active {
    background: rgba(0, 0, 0, 0.12);
    transform: scale(0.98);
  }

  .fluent2-btn-sm {
    padding: 6px 12px;
    font-size: 13px;
  }

  .fluent2-btn-icon {
    font-size: 16px;
  }

  /* === List Section === */
  .fluent2-list-section {
    padding: 64px 0;
    background: var(--fluent-bg-alt);
  }

  .fluent2-list-card {
    background: var(--fluent-bg-elevated);
    border-radius: var(--fluent-radius-medium);
    box-shadow: var(--fluent-shadow-2);
    overflow: hidden;
  }

  .fluent2-list-header {
    padding: var(--fluent-spacing-lg);
    border-bottom: 1px solid var(--fluent-border-subtle);
  }

  .fluent2-list-actions {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-sm);
  }

  .fluent2-list-container {
    display: flex;
    flex-direction: column;
  }

  .fluent2-list-item {
    display: flex;
    align-items: center;
    gap: var(--fluent-spacing-md);
    padding: var(--fluent-spacing-lg);
    border-bottom: 1px solid var(--fluent-border-subtle);
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
    cursor: pointer;
    position: relative;
  }

  .fluent2-list-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      var(--fluent-reveal-hover),
      transparent 60%
    );
    opacity: 0;
    transition: opacity var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-list-item:hover::before {
    opacity: 1;
  }

  .fluent2-list-item:last-child {
    border-bottom: none;
  }

  .fluent2-list-avatar {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--fluent-accent), #50E6FF);
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .fluent2-list-content {
    flex: 1;
  }

  .fluent2-list-primary {
    font-size: 14px;
    font-weight: 600;
    color: var(--fluent-text-primary);
    margin-bottom: 4px;
  }

  .fluent2-list-secondary {
    font-size: 13px;
    color: var(--fluent-text-secondary);
  }

  .fluent2-list-status {
    margin-left: auto;
  }

  .fluent2-status-badge {
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 12px;
  }

  .fluent2-status-badge.online {
    background: rgba(16, 124, 16, 0.1);
    color: #107C10;
  }

  .fluent2-status-badge.away {
    background: rgba(255, 185, 0, 0.1);
    color: #FFB900;
  }

  .fluent2-status-badge.offline {
    background: rgba(0, 0, 0, 0.05);
    color: var(--fluent-text-tertiary);
  }

  /* === Settings Section === */
  .fluent2-settings-section {
    padding: 64px 0;
  }

  .fluent2-settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--fluent-spacing-xl);
  }

  .fluent2-settings-card {
    padding: var(--fluent-spacing-lg);
    background: var(--fluent-bg-elevated);
    border: 1px solid var(--fluent-border-subtle);
    border-radius: var(--fluent-radius-medium);
    box-shadow: var(--fluent-shadow-2);
  }

  .fluent2-card-subtitle {
    font-size: 13px;
    color: var(--fluent-text-secondary);
    margin-top: 4px;
  }

  /* Density Options */
  .fluent2-density-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--fluent-spacing-md);
    margin-top: var(--fluent-spacing-lg);
  }

  .fluent2-density-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--fluent-spacing-sm);
    cursor: pointer;
  }

  .fluent2-density-input {
    position: absolute;
    opacity: 0;
  }

  .fluent2-density-preview {
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding: var(--fluent-spacing-sm);
    background: var(--fluent-bg-alt);
    border: 2px solid var(--fluent-border-subtle);
    border-radius: var(--fluent-radius-small);
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-density-preview.compact .fluent2-preview-item {
    height: 6px;
  }

  .fluent2-density-preview.standard .fluent2-preview-item {
    height: 10px;
  }

  .fluent2-density-preview.spacious .fluent2-preview-item {
    height: 14px;
  }

  .fluent2-preview-item {
    background: var(--fluent-accent);
    border-radius: 2px;
  }

  .fluent2-density-input:checked + .fluent2-density-preview {
    border-color: var(--fluent-accent);
    background: var(--fluent-accent-light);
  }

  .fluent2-density-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--fluent-text-secondary);
  }

  /* Theme Options */
  .fluent2-theme-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--fluent-spacing-md);
    margin-top: var(--fluent-spacing-lg);
  }

  .fluent2-theme-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--fluent-spacing-sm);
    cursor: pointer;
  }

  .fluent2-theme-input {
    position: absolute;
    opacity: 0;
  }

  .fluent2-theme-preview {
    width: 80px;
    height: 80px;
    border: 2px solid var(--fluent-border-subtle);
    border-radius: var(--fluent-radius-small);
    overflow: hidden;
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-theme-preview.light .fluent2-theme-bg {
    background: #F3F3F3;
  }

  .fluent2-theme-preview.light .fluent2-theme-card {
    background: white;
  }

  .fluent2-theme-preview.dark .fluent2-theme-bg {
    background: #1E1E1E;
  }

  .fluent2-theme-preview.dark .fluent2-theme-card {
    background: #2D2D2D;
  }

  .fluent2-theme-preview.auto .fluent2-theme-bg {
    background: linear-gradient(135deg, #F3F3F3 50%, #1E1E1E 50%);
  }

  .fluent2-theme-preview.auto .fluent2-theme-card {
    background: linear-gradient(135deg, white 50%, #2D2D2D 50%);
  }

  .fluent2-theme-bg {
    width: 100%;
    height: 50%;
  }

  .fluent2-theme-card {
    width: 100%;
    height: 50%;
  }

  .fluent2-theme-input:checked + .fluent2-theme-preview {
    border-color: var(--fluent-accent);
    box-shadow: 0 0 0 1px var(--fluent-accent);
  }

  .fluent2-theme-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--fluent-text-secondary);
  }

  /* Effects Settings */
  .fluent2-effects-options {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-md);
    margin-top: var(--fluent-spacing-lg);
  }

  .fluent2-effect-setting {
    display: flex;
    align-items: center;
  }

  .fluent2-setting-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }

  .fluent2-setting-text {
    font-size: 14px;
    color: var(--fluent-text-primary);
  }

  /* === Footer === */
  .fluent2-footer {
    padding: 48px 0 24px;
    background: var(--fluent-mica-bg);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-top: 1px solid var(--fluent-border-subtle);
  }

  .fluent2-footer-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--fluent-spacing-lg);
  }

  .fluent2-footer-content {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: var(--fluent-spacing-xl);
    margin-bottom: var(--fluent-spacing-xl);
  }

  .fluent2-footer-section {
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-md);
  }

  .fluent2-footer-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--fluent-text-primary);
    margin: 0;
  }

  .fluent2-footer-text {
    font-size: 14px;
    color: var(--fluent-text-secondary);
  }

  .fluent2-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--fluent-spacing-sm);
  }

  .fluent2-footer-link {
    font-size: 14px;
    color: var(--fluent-text-secondary);
    text-decoration: none;
    transition: color var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-footer-link:hover {
    color: var(--fluent-accent);
  }

  .fluent2-footer-bottom {
    padding-top: var(--fluent-spacing-lg);
    border-top: 1px solid var(--fluent-border-subtle);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fluent2-copyright {
    font-size: 13px;
    color: var(--fluent-text-tertiary);
  }

  .fluent2-footer-badges {
    display: flex;
    gap: var(--fluent-spacing-sm);
  }

  .fluent2-badge {
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 600;
    background: rgba(0, 120, 212, 0.1);
    color: var(--fluent-accent);
    border-radius: 12px;
  }

  /* === Notification Flyout === */
  .fluent2-flyout {
    position: fixed;
    top: 0;
    right: -400px;
    width: 360px;
    height: 100vh;
    background: var(--fluent-acrylic-bg);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    border-left: 1px solid var(--fluent-acrylic-border);
    box-shadow: var(--fluent-shadow-16);
    transition: right var(--fluent-duration-slow) var(--fluent-easing);
    z-index: 1000;
  }

  .fluent2-flyout:not([aria-hidden="true"]) {
    right: 0;
  }

  .fluent2-flyout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--fluent-spacing-lg);
    border-bottom: 1px solid var(--fluent-border-subtle);
  }

  .fluent2-flyout-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--fluent-text-primary);
    margin: 0;
  }

  .fluent2-flyout-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: var(--fluent-radius-small);
    cursor: pointer;
    color: var(--fluent-text-secondary);
    transition: all var(--fluent-duration-fast) var(--fluent-easing);
  }

  .fluent2-flyout-close:hover {
    background: rgba(0, 0, 0, 0.05);
    color: var(--fluent-text-primary);
  }

  .fluent2-flyout-content {
    padding: var(--fluent-spacing-lg);
    overflow-y: auto;
    height: calc(100vh - 80px);
  }

  .fluent2-notification-item {
    display: flex;
    gap: var(--fluent-spacing-md);
    padding: var(--fluent-spacing-md);
    background: rgba(255, 255, 255, 0.5);
    border-radius: var(--fluent-radius-medium);
    margin-bottom: var(--fluent-spacing-md);
    transition: background var(--fluent-duration-fast) var(--fluent-easing);
    cursor: pointer;
  }

  .fluent2-notification-item:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  .fluent2-notification-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: var(--fluent-accent-light);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .fluent2-notification-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .fluent2-notification-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--fluent-text-primary);
  }

  .fluent2-notification-text {
    font-size: 13px;
    color: var(--fluent-text-secondary);
  }

  .fluent2-notification-time {
    font-size: 12px;
    color: var(--fluent-text-tertiary);
  }

  /* === Responsive Design === */
  @media (max-width: 1024px) {
    .fluent2-hero-container {
      grid-template-columns: 1fr;
      gap: var(--fluent-spacing-xl);
    }

    .fluent2-content-grid {
      grid-template-columns: 1fr;
    }

    .fluent2-form-grid {
      grid-template-columns: 1fr;
    }

    .fluent2-footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .fluent2-nav-links {
      display: none;
    }

    .fluent2-search-input {
      width: 160px;
    }

    .fluent2-hero-title {
      font-size: 36px;
    }

    .fluent2-stats-grid {
      grid-template-columns: 1fr;
    }

    .fluent2-footer-content {
      grid-template-columns: 1fr;
    }

    .fluent2-footer-bottom {
      flex-direction: column;
      gap: var(--fluent-spacing-md);
      text-align: center;
    }

    .fluent2-flyout {
      width: 100%;
      right: -100%;
    }
  }

  /* === Animations === */
  @keyframes fluent-fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fluent-slide-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  /* === Focus Visible (Accessibility) === */
  *:focus-visible {
    outline: 2px solid var(--fluent-accent);
    outline-offset: 2px;
  }

  /* === Prefers Reduced Motion === */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;