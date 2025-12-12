/* eslint-disable no-irregular-whitespace */
// Vaporwave 風格使用全形字符是刻意的美學選擇
// Vaporwave 風格 - 完整页面设計
// Social Media Feed 風格 - 80/90 年代復古社交平台

export const vaporwaveFullPageHTML = `
<div class="vaporwave-full-page">
  <!-- CRT 掃描线效果 -->
  <div class="vaporwave-scanlines"></div>

  <!-- 数字雨背景 -->
  <div class="vaporwave-matrix">
    <div class="vaporwave-matrix-column" style="left: 5%; animation-delay: 0s;">01010<br>11001<br>00110</div>
    <div class="vaporwave-matrix-column" style="left: 15%; animation-delay: 2s;">10101<br>01100<br>11001</div>
    <div class="vaporwave-matrix-column" style="left: 25%; animation-delay: 4s;">11110<br>00001<br>10011</div>
    <div class="vaporwave-matrix-column" style="left: 35%; animation-delay: 1s;">01011<br>10100<br>01010</div>
    <div class="vaporwave-matrix-column" style="left: 45%; animation-delay: 3s;">11001<br>00110<br>11100</div>
    <div class="vaporwave-matrix-column" style="left: 55%; animation-delay: 5s;">10011<br>01100<br>10101</div>
    <div class="vaporwave-matrix-column" style="left: 65%; animation-delay: 2.5s;">01100<br>11010<br>00111</div>
    <div class="vaporwave-matrix-column" style="left: 75%; animation-delay: 4.5s;">11101<br>00100<br>11010</div>
    <div class="vaporwave-matrix-column" style="left: 85%; animation-delay: 1.5s;">00101<br>11001<br>01110</div>
    <div class="vaporwave-matrix-column" style="left: 95%; animation-delay: 3.5s;">10110<br>01011<br>10001</div>
  </div>

  <!-- 主容器 -->
  <div class="vaporwave-container">
    <!-- Windows 95 風格頂部导航 -->
    <header class="vaporwave-header">
      <div class="vaporwave-window-bar">
        <div class="vaporwave-window-title">
          <div class="vaporwave-window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="vaporwave-title-text">{{t:demo.retroSocialMedia.title}}</span>
        </div>
        <div class="vaporwave-window-controls">
          <button class="vaporwave-control-btn">_</button>
          <button class="vaporwave-control-btn">□</button>
          <button class="vaporwave-control-btn">✕</button>
        </div>
      </div>

      <nav class="vaporwave-nav">
        <div class="vaporwave-logo">
          <div class="vaporwave-logo-icon">Ｖ</div>
          <span class="vaporwave-logo-text">{{t:demo.retroSocialMedia.logo}}</span>
        </div>

        <div class="vaporwave-search">
          <input type="text" placeholder="{{t:demo.retroSocialMedia.searchPlaceholder}}" class="vaporwave-search-input" />
          <button class="vaporwave-search-btn">🔍</button>
        </div>

        <div class="vaporwave-nav-links">
          <a href="javascript:void(0)" class="vaporwave-nav-link">
            <span class="vaporwave-pixel-icon">🏠</span>
            <span>{{t:demo.retroSocialMedia.home}}</span>
          </a>
          <a href="javascript:void(0)" class="vaporwave-nav-link">
            <span class="vaporwave-pixel-icon">👤</span>
            <span>{{t:demo.retroSocialMedia.profile}}</span>
          </a>
          <a href="javascript:void(0)" class="vaporwave-nav-link vaporwave-notif">
            <span class="vaporwave-pixel-icon">🔔</span>
            <span>{{t:demo.retroSocialMedia.notifs}}</span>
            <span class="vaporwave-badge">7</span>
          </a>
        </div>
      </nav>
    </header>

    <!-- 統計卡片区 -->
    <section class="vaporwave-stats-section">
      <div class="vaporwave-stat-card">
        <div class="vaporwave-stat-icon">👥</div>
        <div class="vaporwave-stat-number">2,847</div>
        <div class="vaporwave-stat-label">{{t:demo.retroSocialMedia.followers}}</div>
        <div class="vaporwave-stat-bar">
          <div class="vaporwave-stat-fill" style="width: 85%"></div>
        </div>
      </div>

      <div class="vaporwave-stat-card">
        <div class="vaporwave-stat-icon">📝</div>
        <div class="vaporwave-stat-number">156</div>
        <div class="vaporwave-stat-label">{{t:demo.retroSocialMedia.posts}}</div>
        <div class="vaporwave-stat-bar">
          <div class="vaporwave-stat-fill" style="width: 62%"></div>
        </div>
      </div>

      <div class="vaporwave-stat-card">
        <div class="vaporwave-stat-icon">❤️</div>
        <div class="vaporwave-stat-number">8,924</div>
        <div class="vaporwave-stat-label">{{t:demo.retroSocialMedia.likes}}</div>
        <div class="vaporwave-stat-bar">
          <div class="vaporwave-stat-fill" style="width: 94%"></div>
        </div>
      </div>

      <div class="vaporwave-stat-card">
        <div class="vaporwave-stat-icon">🔄</div>
        <div class="vaporwave-stat-number">1,243</div>
        <div class="vaporwave-stat-label">{{t:demo.retroSocialMedia.shares}}</div>
        <div class="vaporwave-stat-bar">
          <div class="vaporwave-stat-fill" style="width: 73%"></div>
        </div>
      </div>
    </section>

    <!-- 主內容区（貼文 + 側边欄） -->
    <div class="vaporwave-main-content">
      <!-- 貼文列表 -->
      <div class="vaporwave-feed">
        <!-- Post 1 -->
        <article class="vaporwave-post">
          <div class="vaporwave-post-header">
            <div class="vaporwave-avatar-container">
              <div class="vaporwave-avatar vaporwave-avatar-pink">Ａ</div>
              <span class="vaporwave-online-indicator"></span>
            </div>
            <div class="vaporwave-post-meta">
              <div class="vaporwave-username">aestheticwave_92</div>
              <div class="vaporwave-timestamp">
                <span class="vaporwave-pixel-text">⏰ 2 {{t:demo.retroSocialMedia.hoursAgo}}</span>
              </div>
            </div>
          </div>

          <div class="vaporwave-post-content">
            <p class="vaporwave-post-text">
              Ａｅｓｔｈｅｔｉｃ　ｖｉｂｅｓ　ｏｎｌｙ　🌴🌊✨
            </p>
            <div class="vaporwave-post-image">
              <div class="vaporwave-crt-frame">
                <div class="vaporwave-gradient-box"></div>
              </div>
            </div>
          </div>

          <div class="vaporwave-post-actions">
            <button class="vaporwave-action-btn vaporwave-liked">
              <span>❤️</span>
              <span>247</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>💬</span>
              <span>38</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>🔄</span>
              <span>12</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>📤</span>
            </button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="vaporwave-post">
          <div class="vaporwave-post-header">
            <div class="vaporwave-avatar-container">
              <div class="vaporwave-avatar vaporwave-avatar-purple">Ｒ</div>
              <span class="vaporwave-online-indicator"></span>
            </div>
            <div class="vaporwave-post-meta">
              <div class="vaporwave-username">retro_dreamer</div>
              <div class="vaporwave-timestamp">
                <span class="vaporwave-pixel-text">⏰ 5 {{t:demo.retroSocialMedia.hoursAgo}}</span>
              </div>
            </div>
          </div>

          <div class="vaporwave-post-content">
            <p class="vaporwave-post-text">
              ９０ｓ　ｗｅｂ　ａｅｓｔｈｅｔｉｃ　🖥️💾
            </p>
            <div class="vaporwave-retro-banner">
              <div class="vaporwave-marquee">
                <span>🌟 UNDER CONSTRUCTION 🌟 BEST VIEWED IN 800x600 🌟 VISITOR #004729 🌟</span>
              </div>
            </div>
          </div>

          <div class="vaporwave-post-actions">
            <button class="vaporwave-action-btn">
              <span>❤️</span>
              <span>189</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>💬</span>
              <span>42</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>🔄</span>
              <span>8</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>📤</span>
            </button>
          </div>
        </article>

        <!-- Post 3 -->
        <article class="vaporwave-post">
          <div class="vaporwave-post-header">
            <div class="vaporwave-avatar-container">
              <div class="vaporwave-avatar vaporwave-avatar-teal">Ｎ</div>
            </div>
            <div class="vaporwave-post-meta">
              <div class="vaporwave-username">neon_nights_88</div>
              <div class="vaporwave-timestamp">
                <span class="vaporwave-pixel-text">⏰ 1 {{t:demo.retroSocialMedia.daysAgo}}</span>
              </div>
            </div>
          </div>

          <div class="vaporwave-post-content">
            <p class="vaporwave-post-text">
              Ｎｏｓｔａｌｇｉａ　ｉｓ　ａ　ｆｅｅｌｉｎｇ　💜🌸
            </p>
          </div>

          <div class="vaporwave-post-actions">
            <button class="vaporwave-action-btn">
              <span>❤️</span>
              <span>312</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>💬</span>
              <span>67</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>🔄</span>
              <span>21</span>
            </button>
            <button class="vaporwave-action-btn">
              <span>📤</span>
            </button>
          </div>
        </article>

        <!-- 評論輸入区 -->
        <div class="vaporwave-comment-box">
          <div class="vaporwave-comment-header">
            <span class="vaporwave-pixel-text">💬 {{t:demo.retroSocialMedia.leaveComment}}</span>
          </div>
          <div class="vaporwave-comment-form">
            <div class="vaporwave-avatar vaporwave-avatar-you">Ｙ</div>
            <input
              type="text"
              placeholder="{{t:demo.retroSocialMedia.commentPlaceholder}}"
              class="vaporwave-comment-input"
            />
            <div class="vaporwave-comment-actions">
              <button class="vaporwave-emoji-btn">😀</button>
              <button class="vaporwave-emoji-btn">🌸</button>
              <button class="vaporwave-emoji-btn">✨</button>
              <button class="vaporwave-send-btn">{{t:demo.retroSocialMedia.send}}</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側边欄 -->
      <aside class="vaporwave-sidebar">
        <!-- Online Friends -->
        <div class="vaporwave-sidebar-card">
          <div class="vaporwave-card-title">
            <span class="vaporwave-pixel-icon">🌐</span>
            <span>{{t:demo.retroSocialMedia.onlineNow}}</span>
          </div>
          <div class="vaporwave-friends-list">
            <div class="vaporwave-friend-item">
              <div class="vaporwave-friend-avatar vaporwave-avatar-pink">Ｍ</div>
              <div class="vaporwave-friend-info">
                <div class="vaporwave-friend-name">midnight_vibes</div>
                <div class="vaporwave-friend-status">{{t:demo.retroSocialMedia.listeningToCityPop}}</div>
              </div>
              <span class="vaporwave-online-dot"></span>
            </div>
            <div class="vaporwave-friend-item">
              <div class="vaporwave-friend-avatar vaporwave-avatar-purple">Ｃ</div>
              <div class="vaporwave-friend-info">
                <div class="vaporwave-friend-name">cyber_dreams</div>
                <div class="vaporwave-friend-status">{{t:demo.retroSocialMedia.surfingTheNet}}</div>
              </div>
              <span class="vaporwave-online-dot"></span>
            </div>
            <div class="vaporwave-friend-item">
              <div class="vaporwave-friend-avatar vaporwave-avatar-teal">Ｓ</div>
              <div class="vaporwave-friend-info">
                <div class="vaporwave-friend-name">synth_wave_89</div>
                <div class="vaporwave-friend-status">{{t:demo.retroSocialMedia.vibing}}</div>
              </div>
              <span class="vaporwave-online-dot"></span>
            </div>
          </div>
        </div>

        <!-- Activity Timeline -->
        <div class="vaporwave-sidebar-card">
          <div class="vaporwave-card-title">
            <span class="vaporwave-pixel-icon">📅</span>
            <span>{{t:demo.retroSocialMedia.activity}}</span>
          </div>
          <div class="vaporwave-timeline">
            <div class="vaporwave-timeline-item">
              <div class="vaporwave-timeline-dot"></div>
              <div class="vaporwave-timeline-content">
                <div class="vaporwave-timeline-text">
                  <strong>aestheticwave_92</strong> {{t:demo.retroSocialMedia.likedYourPost}}
                </div>
                <div class="vaporwave-timeline-time">2{{t:demo.retroSocialMedia.hoursAgoShort}}</div>
              </div>
            </div>
            <div class="vaporwave-timeline-item">
              <div class="vaporwave-timeline-dot"></div>
              <div class="vaporwave-timeline-content">
                <div class="vaporwave-timeline-text">
                  <strong>retro_dreamer</strong> {{t:demo.retroSocialMedia.startedFollowing}}
                </div>
                <div class="vaporwave-timeline-time">5{{t:demo.retroSocialMedia.hoursAgoShort}}</div>
              </div>
            </div>
            <div class="vaporwave-timeline-item">
              <div class="vaporwave-timeline-dot"></div>
              <div class="vaporwave-timeline-content">
                <div class="vaporwave-timeline-text">
                  <strong>neon_nights_88</strong> {{t:demo.retroSocialMedia.commented}}
                </div>
                <div class="vaporwave-timeline-time">1{{t:demo.retroSocialMedia.daysAgoShort}}</div>
              </div>
            </div>
            <div class="vaporwave-timeline-item">
              <div class="vaporwave-timeline-dot"></div>
              <div class="vaporwave-timeline-content">
                <div class="vaporwave-timeline-text">
                  <strong>cyber_dreams</strong> {{t:demo.retroSocialMedia.sharedYourPost}}
                </div>
                <div class="vaporwave-timeline-time">2{{t:demo.retroSocialMedia.daysAgoShort}}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trending Tags -->
        <div class="vaporwave-sidebar-card">
          <div class="vaporwave-card-title">
            <span class="vaporwave-pixel-icon">🔥</span>
            <span>{{t:demo.retroSocialMedia.trending}}</span>
          </div>
          <div class="vaporwave-tags">
            <span class="vaporwave-tag">#aesthetic</span>
            <span class="vaporwave-tag">#vaporwave</span>
            <span class="vaporwave-tag">#90svibes</span>
            <span class="vaporwave-tag">#retronet</span>
            <span class="vaporwave-tag">#neonlights</span>
            <span class="vaporwave-tag">#cyberdreams</span>
          </div>
        </div>
      </aside>
    </div>

    <!-- 数据表格区 -->
    <section class="vaporwave-table-section">
      <div class="vaporwave-table-header">
        <span class="vaporwave-pixel-icon">📊</span>
        <span>{{t:demo.retroSocialMedia.topContributors}}</span>
      </div>
      <div class="vaporwave-table-container">
        <table class="vaporwave-table">
          <thead>
            <tr>
              <th>{{t:demo.retroSocialMedia.rank}}</th>
              <th>{{t:demo.retroSocialMedia.user}}</th>
              <th>{{t:demo.retroSocialMedia.posts}}</th>
              <th>{{t:demo.retroSocialMedia.likes}}</th>
              <th>{{t:demo.retroSocialMedia.status}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="vaporwave-rank vaporwave-rank-1">🥇 #1</span></td>
              <td>
                <div class="vaporwave-table-user">
                  <div class="vaporwave-table-avatar vaporwave-avatar-pink">Ａ</div>
                  <span>aestheticwave_92</span>
                </div>
              </td>
              <td>247</td>
              <td>12.4K</td>
              <td><span class="vaporwave-status-badge vaporwave-status-active">{{t:demo.retroSocialMedia.active}}</span></td>
            </tr>
            <tr>
              <td><span class="vaporwave-rank vaporwave-rank-2">🥈 #2</span></td>
              <td>
                <div class="vaporwave-table-user">
                  <div class="vaporwave-table-avatar vaporwave-avatar-purple">Ｒ</div>
                  <span>retro_dreamer</span>
                </div>
              </td>
              <td>189</td>
              <td>9.8K</td>
              <td><span class="vaporwave-status-badge vaporwave-status-active">{{t:demo.retroSocialMedia.active}}</span></td>
            </tr>
            <tr>
              <td><span class="vaporwave-rank vaporwave-rank-3">🥉 #3</span></td>
              <td>
                <div class="vaporwave-table-user">
                  <div class="vaporwave-table-avatar vaporwave-avatar-teal">Ｎ</div>
                  <span>neon_nights_88</span>
                </div>
              </td>
              <td>156</td>
              <td>7.2K</td>
              <td><span class="vaporwave-status-badge vaporwave-status-idle">{{t:demo.retroSocialMedia.idle}}</span></td>
            </tr>
            <tr>
              <td><span class="vaporwave-rank">#4</span></td>
              <td>
                <div class="vaporwave-table-user">
                  <div class="vaporwave-table-avatar vaporwave-avatar-pink">Ｍ</div>
                  <span>midnight_vibes</span>
                </div>
              </td>
              <td>134</td>
              <td>5.6K</td>
              <td><span class="vaporwave-status-badge vaporwave-status-active">{{t:demo.retroSocialMedia.active}}</span></td>
            </tr>
            <tr>
              <td><span class="vaporwave-rank">#5</span></td>
              <td>
                <div class="vaporwave-table-user">
                  <div class="vaporwave-table-avatar vaporwave-avatar-purple">Ｃ</div>
                  <span>cyber_dreams</span>
                </div>
              </td>
              <td>112</td>
              <td>4.3K</td>
              <td><span class="vaporwave-status-badge vaporwave-status-offline">{{t:demo.retroSocialMedia.offline}}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 页腳 -->
    <footer class="vaporwave-footer">
      <div class="vaporwave-footer-content">
        <div class="vaporwave-footer-section">
          <div class="vaporwave-footer-title">ＶＡＰＯＲＮＥＴ</div>
          <p class="vaporwave-footer-text">
            Ａｅｓｔｈｅｔｉｃ　ｓｏｃｉａｌ　ｎｅｔｗｏｒｋ　ｓｉｎｃｅ　１９９５
          </p>
        </div>
        <div class="vaporwave-footer-section">
          <div class="vaporwave-footer-links">
            <a href="javascript:void(0)">{{t:demo.retroSocialMedia.about}}</a>
            <a href="javascript:void(0)">{{t:demo.retroSocialMedia.terms}}</a>
            <a href="javascript:void(0)">{{t:demo.retroSocialMedia.privacy}}</a>
            <a href="javascript:void(0)">{{t:demo.retroSocialMedia.contact}}</a>
          </div>
        </div>
        <div class="vaporwave-footer-section">
          <div class="vaporwave-visitor-counter">
            <span class="vaporwave-pixel-text">👁️ {{t:demo.retroSocialMedia.visitors}}: 004729</span>
          </div>
        </div>
      </div>
      <div class="vaporwave-copyright">
        {{t:demo.retroSocialMedia.copyright}}
      </div>
    </footer>
  </div>
</div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色粉紫渐变背景 (#FF69B4, #9370DB, #00CED1)、霓虹粉红 (#FF1493)、电光蓝 (#00FFFF)、复古紫色 (#8A2BE2)、CRT扫描线效果 (rgba(0,255,255,0.1))
`;

export const vaporwaveFullPageStyles = `
/* Vaporwave 完整页面樣式 */

/* 全局容器 */
.vaporwave-full-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1A0B2E 0%, #2D1B4E 50%, #1A0B2E 100%);
  font-family: 'Courier New', monospace;
  position: relative;
  overflow-x: hidden;
}

/* CRT 掃描线效果 */
.vaporwave-scanlines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 255, 255, 0.03) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 9999;
  animation: vaporwave-scan 8s linear infinite;
}

@keyframes vaporwave-scan {
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
}

/* 数字雨背景 */
.vaporwave-matrix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}

.vaporwave-matrix-column {
  position: absolute;
  top: -20%;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #FF6EC7;
  line-height: 1.5;
  animation: vaporwave-matrix-fall 15s linear infinite;
}

@keyframes vaporwave-matrix-fall {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(120vh);
    opacity: 0;
  }
}

/* 主容器 */
.vaporwave-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* Windows 95 風格頭部 */
.vaporwave-header {
  background: linear-gradient(180deg, #C0C0C0 0%, #808080 100%);
  border: 2px solid #FFFFFF;
  border-bottom-color: #000000;
  border-right-color: #000000;
  box-shadow:
    0 0 0 1px #000000,
    0 0 20px rgba(255, 110, 199, 0.5),
    inset -1px -1px 0 #000000,
    inset 1px 1px 0 #DFDFDF;
  margin-bottom: 30px;
}

.vaporwave-window-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #000080, #1084D0);
  padding: 4px 6px;
  border-bottom: 1px solid #FFFFFF;
}

.vaporwave-window-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vaporwave-window-dots {
  display: flex;
  gap: 2px;
}

.vaporwave-window-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FF6EC7;
  box-shadow: 0 0 5px #FF6EC7;
}

.vaporwave-title-text {
  color: #FFFFFF;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 #000000;
}

.vaporwave-window-controls {
  display: flex;
  gap: 4px;
}

.vaporwave-control-btn {
  width: 20px;
  height: 20px;
  background: #C0C0C0;
  border: 1px solid #FFFFFF;
  border-bottom-color: #000000;
  border-right-color: #000000;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
}

.vaporwave-control-btn:hover {
  background: #DFDFDF;
}

.vaporwave-control-btn:active {
  border-top-color: #000000;
  border-left-color: #000000;
  border-bottom-color: #FFFFFF;
  border-right-color: #FFFFFF;
}

/* 导航欄 */
.vaporwave-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(192, 192, 192, 0.9);
  flex-wrap: wrap;
  gap: 12px;
}

.vaporwave-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.vaporwave-logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #FF6EC7, #9D4EDD, #06FFA5);
  border: 2px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  text-shadow: 2px 2px 0 #000000;
  box-shadow:
    0 0 15px rgba(255, 110, 199, 0.8),
    inset -2px -2px 4px rgba(0, 0, 0, 0.3);
}

.vaporwave-logo-text {
  font-size: 18px;
  font-weight: bold;
  color: #000080;
  letter-spacing: 1px;
}

.vaporwave-search {
  display: flex;
  gap: 4px;
  flex: 1;
  max-width: 400px;
}

.vaporwave-search-input {
  flex: 1;
  padding: 6px 12px;
  background: #FFFFFF;
  border: 2px inset #808080;
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

.vaporwave-search-btn {
  padding: 6px 12px;
  background: #C0C0C0;
  border: 2px outset #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.1s;
}

.vaporwave-search-btn:active {
  border-style: inset;
}

.vaporwave-nav-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.vaporwave-nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #C0C0C0;
  border: 2px outset #FFFFFF;
  text-decoration: none;
  color: #000000;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: all 0.1s;
}

.vaporwave-nav-link:hover {
  background: #DFDFDF;
}

.vaporwave-nav-link:active {
  border-style: inset;
}

.vaporwave-pixel-icon {
  font-size: 16px;
}

.vaporwave-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #FF6EC7;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 1px solid #FFFFFF;
  box-shadow: 0 0 10px #FF6EC7;
}

/* 統計卡片区 */
.vaporwave-stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.vaporwave-stat-card {
  background: rgba(0, 0, 0, 0.6);
  border: 3px solid #FF6EC7;
  padding: 20px;
  text-align: center;
  box-shadow:
    0 0 20px rgba(255, 110, 199, 0.6),
    inset 0 0 20px rgba(255, 110, 199, 0.1);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.vaporwave-stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 110, 199, 0.1) 50%,
    transparent 70%
  );
  animation: vaporwave-shine 3s linear infinite;
}

@keyframes vaporwave-shine {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.vaporwave-stat-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 0 30px rgba(255, 110, 199, 0.9),
    inset 0 0 30px rgba(255, 110, 199, 0.2);
}

.vaporwave-stat-icon {
  font-size: 40px;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 10px #FF6EC7);
}

.vaporwave-stat-number {
  font-size: 36px;
  font-weight: bold;
  color: #06FFA5;
  text-shadow:
    0 0 10px #06FFA5,
    0 0 20px #06FFA5,
    2px 2px 0 #000000;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.vaporwave-stat-label {
  font-size: 12px;
  color: #FF6EC7;
  letter-spacing: 3px;
  margin-bottom: 12px;
  text-shadow: 0 0 5px #FF6EC7;
  position: relative;
  z-index: 1;
}

.vaporwave-stat-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #9D4EDD;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.vaporwave-stat-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6EC7, #9D4EDD, #06FFA5);
  box-shadow: 0 0 10px rgba(6, 255, 165, 0.8);
  transition: width 1s ease;
}

/* 主內容区 */
.vaporwave-main-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 25px;
  margin-bottom: 30px;
}

@media (max-width: 1024px) {
  .vaporwave-main-content {
    grid-template-columns: 1fr;
  }
}

/* 貼文列表 */
.vaporwave-feed {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.vaporwave-post {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #9D4EDD;
  padding: 20px;
  box-shadow:
    0 0 15px rgba(157, 78, 221, 0.4),
    inset 0 0 20px rgba(157, 78, 221, 0.05);
  transition: all 0.3s;
}

.vaporwave-post:hover {
  transform: translateX(5px);
  border-color: #FF6EC7;
  box-shadow:
    0 0 25px rgba(255, 110, 199, 0.6),
    inset 0 0 30px rgba(255, 110, 199, 0.1);
}

.vaporwave-post-header {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
}

.vaporwave-avatar-container {
  position: relative;
}

.vaporwave-avatar {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  box-shadow: 0 0 15px;
  text-shadow: 2px 2px 0 #000000;
}

.vaporwave-avatar-pink {
  background: linear-gradient(135deg, #FF6EC7, #FF1493);
  box-shadow: 0 0 15px #FF6EC7;
}

.vaporwave-avatar-purple {
  background: linear-gradient(135deg, #9D4EDD, #7209B7);
  box-shadow: 0 0 15px #9D4EDD;
}

.vaporwave-avatar-teal {
  background: linear-gradient(135deg, #06FFA5, #00D9FF);
  box-shadow: 0 0 15px #06FFA5;
}

.vaporwave-avatar-you {
  background: linear-gradient(135deg, #FFD60A, #FFA500);
  box-shadow: 0 0 15px #FFD60A;
}

.vaporwave-online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #00FF00;
  border: 2px solid #000000;
  border-radius: 50%;
  box-shadow: 0 0 8px #00FF00;
  animation: vaporwave-pulse 2s infinite;
}

@keyframes vaporwave-pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 8px #00FF00;
  }
  50% {
    opacity: 0.5;
    box-shadow: 0 0 15px #00FF00;
  }
}

.vaporwave-post-meta {
  flex: 1;
}

.vaporwave-username {
  font-size: 16px;
  font-weight: bold;
  color: #06FFA5;
  text-shadow: 0 0 5px #06FFA5;
  margin-bottom: 4px;
}

.vaporwave-timestamp {
  font-size: 11px;
  color: #9D4EDD;
}

.vaporwave-pixel-text {
  font-size: 11px;
  letter-spacing: 1px;
}

.vaporwave-post-content {
  margin-bottom: 15px;
}

.vaporwave-post-text {
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1.6;
  margin-bottom: 15px;
  letter-spacing: 2px;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}

.vaporwave-post-image {
  margin-top: 15px;
}

.vaporwave-crt-frame {
  background: #000000;
  border: 4px solid #808080;
  border-bottom-color: #FFFFFF;
  border-right-color: #FFFFFF;
  padding: 8px;
  box-shadow:
    inset -2px -2px 4px rgba(255, 255, 255, 0.3),
    inset 2px 2px 4px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 110, 199, 0.3);
}

.vaporwave-gradient-box {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg,
    #FF6EC7 0%,
    #9D4EDD 25%,
    #06FFA5 50%,
    #00D9FF 75%,
    #FF6EC7 100%
  );
  background-size: 200% 200%;
  animation: vaporwave-gradient 8s ease infinite;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
}

@keyframes vaporwave-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.vaporwave-retro-banner {
  background: #000000;
  border: 2px dashed #FF6EC7;
  padding: 8px;
  overflow: hidden;
}

.vaporwave-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: vaporwave-marquee 20s linear infinite;
  color: #00FF00;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 0 5px #00FF00;
}

@keyframes vaporwave-marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.vaporwave-post-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.vaporwave-action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(192, 192, 192, 0.3);
  border: 2px outset #808080;
  color: #FFFFFF;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.vaporwave-action-btn:hover {
  background: rgba(192, 192, 192, 0.5);
  transform: translateY(-2px);
}

.vaporwave-action-btn:active {
  border-style: inset;
  transform: translateY(0);
}

.vaporwave-action-btn.vaporwave-liked {
  background: rgba(255, 110, 199, 0.3);
  border-color: #FF6EC7;
  box-shadow: 0 0 10px rgba(255, 110, 199, 0.5);
}

/* 評論框 */
.vaporwave-comment-box {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #06FFA5;
  box-shadow: 0 0 15px rgba(6, 255, 165, 0.4);
}

.vaporwave-comment-header {
  background: rgba(6, 255, 165, 0.1);
  padding: 10px 15px;
  border-bottom: 1px solid #06FFA5;
  color: #06FFA5;
  font-weight: bold;
  letter-spacing: 2px;
}

.vaporwave-comment-form {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 15px;
  flex-wrap: wrap;
}

.vaporwave-comment-input {
  flex: 1;
  min-width: 200px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #9D4EDD;
  color: #FFFFFF;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.vaporwave-comment-input:focus {
  outline: none;
  border-color: #FF6EC7;
  box-shadow: 0 0 15px rgba(255, 110, 199, 0.5);
}

.vaporwave-comment-actions {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}

.vaporwave-emoji-btn {
  padding: 8px;
  background: rgba(192, 192, 192, 0.3);
  border: 2px outset #808080;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.vaporwave-emoji-btn:hover {
  transform: scale(1.1);
}

.vaporwave-send-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, #FF6EC7, #9D4EDD);
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 110, 199, 0.6);
  transition: all 0.3s;
}

.vaporwave-send-btn:hover {
  box-shadow: 0 0 25px rgba(255, 110, 199, 0.9);
  transform: translateY(-2px);
}

/* 側边欄 */
.vaporwave-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vaporwave-sidebar-card {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #9D4EDD;
  padding: 15px;
  box-shadow: 0 0 15px rgba(157, 78, 221, 0.4);
}

.vaporwave-card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #06FFA5;
  letter-spacing: 2px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #9D4EDD;
  text-shadow: 0 0 5px #06FFA5;
}

.vaporwave-friends-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.vaporwave-friend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(157, 78, 221, 0.3);
  transition: all 0.2s;
}

.vaporwave-friend-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #FF6EC7;
}

.vaporwave-friend-avatar {
  width: 36px;
  height: 36px;
  font-size: 16px;
  flex-shrink: 0;
}

.vaporwave-friend-info {
  flex: 1;
  min-width: 0;
}

.vaporwave-friend-name {
  font-size: 13px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 2px;
}

.vaporwave-friend-status {
  font-size: 11px;
  color: #9D4EDD;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaporwave-online-dot {
  width: 10px;
  height: 10px;
  background: #00FF00;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px #00FF00;
  animation: vaporwave-pulse 2s infinite;
}

/* 時間线 */
.vaporwave-timeline {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.vaporwave-timeline-item {
  display: flex;
  gap: 12px;
  position: relative;
}

.vaporwave-timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  width: 2px;
  height: calc(100% + 15px);
  background: linear-gradient(180deg, #FF6EC7, #9D4EDD);
  opacity: 0.3;
}

.vaporwave-timeline-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FF6EC7, #9D4EDD);
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 10px #FF6EC7;
}

.vaporwave-timeline-content {
  flex: 1;
}

.vaporwave-timeline-text {
  font-size: 12px;
  color: #FFFFFF;
  line-height: 1.5;
  margin-bottom: 4px;
}

.vaporwave-timeline-text strong {
  color: #06FFA5;
  text-shadow: 0 0 3px #06FFA5;
}

.vaporwave-timeline-time {
  font-size: 10px;
  color: #9D4EDD;
}

/* 标籤 */
.vaporwave-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.vaporwave-tag {
  padding: 6px 12px;
  background: rgba(255, 110, 199, 0.2);
  border: 1px solid #FF6EC7;
  color: #FF6EC7;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s;
}

.vaporwave-tag:hover {
  background: rgba(255, 110, 199, 0.4);
  box-shadow: 0 0 10px rgba(255, 110, 199, 0.5);
  transform: translateY(-2px);
}

/* 数据表格 */
.vaporwave-table-section {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #06FFA5;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 0 20px rgba(6, 255, 165, 0.4);
}

.vaporwave-table-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #06FFA5;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #06FFA5;
}

.vaporwave-table-container {
  overflow-x: auto;
}

.vaporwave-table {
  width: 100%;
  border-collapse: collapse;
}

.vaporwave-table thead th {
  padding: 12px;
  background: rgba(6, 255, 165, 0.1);
  border: 1px solid #06FFA5;
  color: #06FFA5;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: left;
}

.vaporwave-table tbody tr {
  border: 1px solid rgba(157, 78, 221, 0.3);
  transition: all 0.2s;
}

.vaporwave-table tbody tr:hover {
  background: rgba(255, 110, 199, 0.1);
  border-color: #FF6EC7;
}

.vaporwave-table tbody td {
  padding: 12px;
  color: #FFFFFF;
  font-size: 13px;
  border: 1px solid rgba(157, 78, 221, 0.2);
}

.vaporwave-rank {
  display: inline-block;
  padding: 4px 8px;
  background: rgba(192, 192, 192, 0.2);
  border: 1px solid #808080;
  font-size: 12px;
  font-weight: bold;
}

.vaporwave-rank-1 {
  background: rgba(255, 215, 0, 0.2);
  border-color: #FFD700;
  color: #FFD700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.vaporwave-rank-2 {
  background: rgba(192, 192, 192, 0.2);
  border-color: #C0C0C0;
  color: #C0C0C0;
  box-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
}

.vaporwave-rank-3 {
  background: rgba(205, 127, 50, 0.2);
  border-color: #CD7F32;
  color: #CD7F32;
  box-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
}

.vaporwave-table-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.vaporwave-table-avatar {
  width: 32px;
  height: 32px;
  font-size: 14px;
}

.vaporwave-status-badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
}

.vaporwave-status-active {
  background: rgba(0, 255, 0, 0.2);
  border: 1px solid #00FF00;
  color: #00FF00;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.vaporwave-status-idle {
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid #FFD700;
  color: #FFD700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.vaporwave-status-offline {
  background: rgba(128, 128, 128, 0.2);
  border: 1px solid #808080;
  color: #808080;
}

/* 页腳 */
.vaporwave-footer {
  background: linear-gradient(180deg, #000000 0%, #1A0B2E 100%);
  border-top: 3px solid #FF6EC7;
  padding: 30px 20px;
  margin-top: 30px;
  box-shadow: 0 -5px 20px rgba(255, 110, 199, 0.3);
}

.vaporwave-footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 20px;
}

.vaporwave-footer-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vaporwave-footer-title {
  font-size: 18px;
  font-weight: bold;
  color: #FF6EC7;
  letter-spacing: 3px;
  text-shadow: 0 0 10px #FF6EC7;
}

.vaporwave-footer-text {
  font-size: 12px;
  color: #9D4EDD;
  line-height: 1.6;
}

.vaporwave-footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vaporwave-footer-links a {
  color: #06FFA5;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s;
}

.vaporwave-footer-links a:hover {
  color: #00D9FF;
  text-shadow: 0 0 5px #00D9FF;
  transform: translateX(5px);
}

.vaporwave-visitor-counter {
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px dashed #FFD60A;
  text-align: center;
}

.vaporwave-copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(157, 78, 221, 0.3);
  color: #9D4EDD;
  font-size: 11px;
}

/* 響應式设計 */
@media (max-width: 768px) {
  .vaporwave-container {
    padding: 10px;
  }

  .vaporwave-stats-section {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .vaporwave-nav {
    flex-direction: column;
    align-items: stretch;
  }

  .vaporwave-search {
    max-width: 100%;
  }

  .vaporwave-table {
    font-size: 11px;
  }

  .vaporwave-table thead th,
  .vaporwave-table tbody td {
    padding: 8px;
  }
}
`;
