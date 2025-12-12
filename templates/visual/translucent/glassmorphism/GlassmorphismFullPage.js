// Glassmorphism Music Player - Full Page Design
// 音樂播放器完整页面设計 - 高透明度玻璃效果 + 動態粒子背景

export const glassmorphismFullPageHTML = `
<!-- Glassmorphism Music Player Full Page -->
<div class="glass-music-page">
  <!-- 動態粒子背景 -->
  <div class="particles-background">
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
    <div class="particle particle-5"></div>
    <div class="particle particle-6"></div>
    <div class="particle particle-7"></div>
    <div class="particle particle-8"></div>
    <div class="particle particle-9"></div>
    <div class="particle particle-10"></div>
    <div class="particle particle-11"></div>
    <div class="particle particle-12"></div>
    <div class="particle particle-13"></div>
    <div class="particle particle-14"></div>
    <div class="particle particle-15"></div>
  </div>

  <!-- 頂部导航欄 (Glass Navigation) -->
  <header class="glass-nav">
    <div class="container mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <div class="glass-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" class="text-white">
            <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
            <path d="M12 10 L20 16 L12 22 Z" fill="currentColor"/>
          </svg>
        </div>
        <nav class="flex gap-6">
          <a href="javascript:void(0)" class="glass-nav-link">Browse</a>
          <a href="javascript:void(0)" class="glass-nav-link">Library</a>
          <a href="javascript:void(0)" class="glass-nav-link">Search</a>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <button class="glass-icon-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 4 L10 2 M10 18 L10 20 M15 9 L16.5 7.5 M4 9 L2.5 7.5 M15 15 L16.5 16.5 M4 15 L2.5 16.5"/>
            <circle cx="10" cy="12" r="5"/>
          </svg>
        </button>
        <div class="glass-avatar">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
        </div>
      </div>
    </div>
  </header>

  <!-- 主容器 -->
  <div class="container mx-auto px-6 py-8 max-w-7xl">
    <!-- Hero - 主播放控制区 -->
    <section class="glass-hero mb-8">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- 专輯封面 -->
        <div class="glass-album-cover">
          <div class="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" class="text-white opacity-40">
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="4"/>
              <circle cx="60" cy="60" r="25" fill="none" stroke="currentColor" stroke-width="4"/>
              <circle cx="60" cy="60" r="8" fill="currentColor"/>
            </svg>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold text-white mb-2">Neon Dreams</h2>
            <p class="text-white opacity-75 text-lg">Purple Echoes</p>
            <p class="text-white opacity-60 text-sm mt-1">Electronic • 2024</p>
          </div>
        </div>

        <!-- 播放控制 -->
        <div class="md:col-span-2 flex flex-col justify-center">
          <!-- 進度條 -->
          <div class="mb-8">
            <div class="glass-progress-container">
              <div class="glass-progress-bar" style="width: 42%"></div>
            </div>
            <div class="flex justify-between text-white opacity-75 text-sm mt-2">
              <span>2:34</span>
              <span>6:12</span>
            </div>
          </div>

          <!-- 控制按鈕 -->
          <div class="flex items-center justify-center gap-6 mb-8">
            <button class="glass-control-btn-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 5 L4 15 M8 7 L15 3 L15 17 L8 13 Z"/>
              </svg>
            </button>
            <button class="glass-control-btn-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6 L6 18 L18 12 Z"/>
              </svg>
            </button>
            <button class="glass-control-btn-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="3"/>
                <path d="M12 8 L12 24 M20 8 L20 24"/>
              </svg>
            </button>
            <button class="glass-control-btn-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 6 L18 18 L6 12 Z"/>
              </svg>
            </button>
            <button class="glass-control-btn-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 5 L16 15 M12 7 L5 3 L5 17 L12 13 Z"/>
              </svg>
            </button>
          </div>

          <!-- 音量控制 -->
          <div class="flex items-center gap-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="text-white opacity-75">
              <path d="M8 6 L4 10 L1 10 L1 14 L4 14 L8 18 Z"/>
              <path d="M12 8 Q15 10 12 16" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <div class="flex-1 glass-volume-bar">
              <div class="glass-volume-fill" style="width: 65%"></div>
            </div>
            <span class="text-white opacity-75 text-sm w-8">65%</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 統計卡片网格 -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div class="glass-stat-card">
        <div class="text-4xl mb-2">❤️</div>
        <div class="text-3xl font-bold text-white mb-1">247</div>
        <div class="text-white opacity-70 text-sm">Favorite Songs</div>
      </div>
      <div class="glass-stat-card">
        <div class="text-4xl mb-2">⏱️</div>
        <div class="text-3xl font-bold text-white mb-1">18h</div>
        <div class="text-white opacity-70 text-sm">This Week</div>
      </div>
      <div class="glass-stat-card">
        <div class="text-4xl mb-2">📁</div>
        <div class="text-3xl font-bold text-white mb-1">32</div>
        <div class="text-white opacity-70 text-sm">Playlists</div>
      </div>
      <div class="glass-stat-card">
        <div class="text-4xl mb-2">👤</div>
        <div class="text-3xl font-bold text-white mb-1">89</div>
        <div class="text-white opacity-70 text-sm">Artists</div>
      </div>
    </section>

    <!-- 主內容区 -->
    <div class="grid md:grid-cols-3 gap-8">
      <!-- 左側 - 播放列表 -->
      <div class="md:col-span-2">
        <h3 class="text-2xl font-bold text-white mb-6">Your Playlists</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div class="glass-playlist-card">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4"></div>
            <h4 class="text-white font-semibold mb-1">Daily Mix</h4>
            <p class="text-white opacity-60 text-sm">42 songs</p>
          </div>
          <div class="glass-playlist-card">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mb-4"></div>
            <h4 class="text-white font-semibold mb-1">Chill Vibes</h4>
            <p class="text-white opacity-60 text-sm">38 songs</p>
          </div>
          <div class="glass-playlist-card">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-4"></div>
            <h4 class="text-white font-semibold mb-1">Workout</h4>
            <p class="text-white opacity-60 text-sm">56 songs</p>
          </div>
          <div class="glass-playlist-card">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 mb-4"></div>
            <h4 class="text-white font-semibold mb-1">Focus</h4>
            <p class="text-white opacity-60 text-sm">29 songs</p>
          </div>
          <div class="glass-playlist-card">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-4"></div>
            <h4 class="text-white font-semibold mb-1">Party</h4>
            <p class="text-white opacity-60 text-sm">64 songs</p>
          </div>
          <div class="glass-playlist-card">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-4"></div>
            <h4 class="text-white font-semibold mb-1">Sleep</h4>
            <p class="text-white opacity-60 text-sm">21 songs</p>
          </div>
        </div>

        <!-- 推薦藝人 -->
        <h3 class="text-2xl font-bold text-white mb-6">Recommended Artists</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div class="glass-artist-card">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 mx-auto mb-3"></div>
            <h4 class="text-white font-semibold text-center mb-2">Luna Sky</h4>
            <button class="glass-follow-btn">Follow</button>
          </div>
          <div class="glass-artist-card">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 mx-auto mb-3"></div>
            <h4 class="text-white font-semibold text-center mb-2">Echo Wave</h4>
            <button class="glass-follow-btn">Follow</button>
          </div>
          <div class="glass-artist-card">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 mx-auto mb-3"></div>
            <h4 class="text-white font-semibold text-center mb-2">Neon Pulse</h4>
            <button class="glass-follow-btn">Follow</button>
          </div>
          <div class="glass-artist-card">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-teal-400 mx-auto mb-3"></div>
            <h4 class="text-white font-semibold text-center mb-2">Dream Bass</h4>
            <button class="glass-follow-btn">Follow</button>
          </div>
        </div>
      </div>

      <!-- 右側 - 正在播放隊列 + 歌詞 -->
      <div class="space-y-6">
        <!-- 正在播放隊列 -->
        <div class="glass-queue-card">
          <h3 class="text-xl font-bold text-white mb-4">Now Playing</h3>
          <div class="space-y-3">
            <div class="glass-queue-item active">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <div class="flex-1">
                <div class="text-white font-semibold text-sm">Neon Dreams</div>
                <div class="text-white opacity-60 text-xs">Purple Echoes</div>
              </div>
              <div class="text-white opacity-60 text-xs">6:12</div>
            </div>
            <div class="glass-queue-item">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              <div class="flex-1">
                <div class="text-white font-semibold text-sm">Ocean Waves</div>
                <div class="text-white opacity-60 text-xs">Blue Horizon</div>
              </div>
              <div class="text-white opacity-60 text-xs">4:38</div>
            </div>
            <div class="glass-queue-item">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500"></div>
              <div class="flex-1">
                <div class="text-white font-semibold text-sm">Forest Echo</div>
                <div class="text-white opacity-60 text-xs">Nature Sound</div>
              </div>
              <div class="text-white opacity-60 text-xs">5:21</div>
            </div>
            <div class="glass-queue-item">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500"></div>
              <div class="flex-1">
                <div class="text-white font-semibold text-sm">Sunset Glow</div>
                <div class="text-white opacity-60 text-xs">Golden Hour</div>
              </div>
              <div class="text-white opacity-60 text-xs">3:54</div>
            </div>
            <div class="glass-queue-item">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500"></div>
              <div class="flex-1">
                <div class="text-white font-semibold text-sm">Starlight</div>
                <div class="text-white opacity-60 text-xs">Night Sky</div>
              </div>
              <div class="text-white opacity-60 text-xs">4:16</div>
            </div>
          </div>
        </div>

        <!-- 歌詞卡片 -->
        <div class="glass-lyrics-card">
          <h3 class="text-xl font-bold text-white mb-4">Lyrics</h3>
          <div class="space-y-2 text-white">
            <p class="opacity-50 text-sm">In the city lights...</p>
            <p class="opacity-50 text-sm">We dance all night...</p>
            <p class="opacity-100 font-semibold">Neon dreams come alive</p>
            <p class="opacity-50 text-sm">Colors in the sky...</p>
            <p class="opacity-50 text-sm">We're flying high...</p>
          </div>
        </div>

        <!-- 等化器 -->
        <div class="glass-equalizer-card">
          <h3 class="text-xl font-bold text-white mb-4">Equalizer</h3>
          <div class="flex items-end justify-between gap-2 h-32">
            <div class="eq-bar" style="height: 40%; animation-delay: 0s;"></div>
            <div class="eq-bar" style="height: 75%; animation-delay: 0.1s;"></div>
            <div class="eq-bar" style="height: 55%; animation-delay: 0.2s;"></div>
            <div class="eq-bar" style="height: 85%; animation-delay: 0.3s;"></div>
            <div class="eq-bar" style="height: 45%; animation-delay: 0.4s;"></div>
            <div class="eq-bar" style="height: 70%; animation-delay: 0.5s;"></div>
            <div class="eq-bar" style="height: 60%; animation-delay: 0.6s;"></div>
            <div class="eq-bar" style="height: 80%; animation-delay: 0.7s;"></div>
            <div class="eq-bar" style="height: 50%; animation-delay: 0.8s;"></div>
            <div class="eq-bar" style="height: 65%; animation-delay: 0.9s;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 播放模式 + 收藏按鈕 -->
    <section class="mt-8 flex flex-wrap items-center justify-between gap-6">
      <div class="flex gap-3">
        <button class="glass-mode-chip active">Standard</button>
        <button class="glass-mode-chip">DJ Mix</button>
        <button class="glass-mode-chip">Surround</button>
        <button class="glass-mode-chip">Bass Boost</button>
      </div>
      <div class="flex gap-3">
        <button class="glass-action-btn">❤️</button>
        <button class="glass-action-btn">➕</button>
        <button class="glass-action-btn">🔗</button>
        <button class="glass-action-btn">⬇️</button>
      </div>
    </section>

    <!-- 搜索欄 -->
    <section class="mt-8">
      <div class="glass-search-bar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="text-white opacity-70">
          <circle cx="8" cy="8" r="6"/>
          <path d="M12.5 12.5 L17 17"/>
        </svg>
        <input type="text" placeholder="Search songs, artists, albums..." class="glass-search-input">
      </div>
    </section>

    <!-- Loading 動画展示 -->
    <section class="mt-8">
      <h3 class="text-2xl font-bold text-white mb-6">Loading States</h3>
      <div class="grid grid-cols-3 gap-6">
        <div class="glass-loading-card">
          <div class="glass-spinner"></div>
          <p class="text-white opacity-70 text-sm mt-4">Loading...</p>
        </div>
        <div class="glass-loading-card">
          <div class="glass-pulse-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p class="text-white opacity-70 text-sm mt-4">Processing...</p>
        </div>
        <div class="glass-loading-card">
          <div class="glass-wave-progress">
            <div class="glass-wave-bar"></div>
          </div>
          <p class="text-white opacity-70 text-sm mt-4">Syncing...</p>
        </div>
      </div>
    </section>

    <!-- Toast 通知 -->
    <div class="glass-toast">
      ✅ Added to "Favorites" playlist
    </div>
  </div>

  <!-- Footer -->
  <footer class="glass-footer mt-16">
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-wrap justify-between items-center gap-6">
        <div class="text-white opacity-70 text-sm">
          © 2024 GlassMusic. All rights reserved.
        </div>
        <div class="flex gap-6">
          <a href="javascript:void(0)" class="text-white opacity-70 hover:opacity-100 text-sm">Privacy</a>
          <a href="javascript:void(0)" class="text-white opacity-70 hover:opacity-100 text-sm">Terms</a>
          <a href="javascript:void(0)" class="text-white opacity-70 hover:opacity-100 text-sm">Support</a>
        </div>
        <div class="flex gap-4">
          <a href="javascript:void(0)" class="glass-social-icon">📘</a>
          <a href="javascript:void(0)" class="glass-social-icon">🐦</a>
          <a href="javascript:void(0)" class="glass-social-icon">📷</a>
        </div>
      </div>
    </div>
  </footer>
</div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色玻璃效果半透明白 (rgba(255,255,255,0.1-0.3))、渐变紫蓝色 (#8B5CF6, #3B82F6, #EC4899)、深色背景 (#1A1A2E, #0F0F23)、彩色粒子渐变 (#FF6B6B, #4ECDC4, #45B7D1, #96CEB4)
`;

export const glassmorphismFullPageStyles = `
/* Glassmorphism Music Player - Full Page Styles */

/* 页面容器 */
.glass-music-page {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

/* ========== 動態粒子背景 ========== */
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  animation: float-particle 20s ease-in-out infinite;
}

@keyframes float-particle {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -40px) scale(1.1); }
  50% { transform: translate(-20px, -80px) scale(0.9); }
  75% { transform: translate(-40px, -40px) scale(1.05); }
}

.particle-1 { width: 150px; height: 150px; top: 10%; left: 5%; animation-duration: 25s; background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1)); }
.particle-2 { width: 100px; height: 100px; top: 20%; right: 10%; animation-duration: 30s; animation-delay: -5s; background: linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0.1)); }
.particle-3 { width: 200px; height: 200px; top: 50%; left: 15%; animation-duration: 35s; animation-delay: -10s; background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0.08)); }
.particle-4 { width: 80px; height: 80px; top: 60%; right: 20%; animation-duration: 28s; animation-delay: -7s; background: linear-gradient(135deg, rgba(217, 70, 239, 0.3), rgba(217, 70, 239, 0.1)); }
.particle-5 { width: 120px; height: 120px; bottom: 15%; left: 25%; animation-duration: 32s; animation-delay: -12s; background: linear-gradient(135deg, rgba(167, 139, 250, 0.3), rgba(167, 139, 250, 0.1)); }
.particle-6 { width: 90px; height: 90px; bottom: 25%; right: 15%; animation-duration: 27s; animation-delay: -3s; background: linear-gradient(135deg, rgba(244, 114, 182, 0.3), rgba(244, 114, 182, 0.1)); }
.particle-7 { width: 110px; height: 110px; top: 35%; left: 40%; animation-duration: 29s; animation-delay: -8s; background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(124, 58, 237, 0.08)); }
.particle-8 { width: 140px; height: 140px; top: 70%; right: 35%; animation-duration: 33s; animation-delay: -15s; background: linear-gradient(135deg, rgba(192, 132, 252, 0.3), rgba(192, 132, 252, 0.1)); }
.particle-9 { width: 95px; height: 95px; top: 15%; left: 60%; animation-duration: 26s; animation-delay: -6s; background: linear-gradient(135deg, rgba(251, 207, 232, 0.3), rgba(251, 207, 232, 0.1)); }
.particle-10 { width: 130px; height: 130px; bottom: 40%; left: 50%; animation-duration: 31s; animation-delay: -11s; background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(139, 92, 246, 0.08)); }
.particle-11 { width: 75px; height: 75px; top: 45%; right: 5%; animation-duration: 24s; animation-delay: -4s; background: linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0.1)); }
.particle-12 { width: 160px; height: 160px; bottom: 10%; right: 40%; animation-duration: 34s; animation-delay: -14s; background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.1)); }
.particle-13 { width: 105px; height: 105px; top: 80%; left: 35%; animation-duration: 28s; animation-delay: -9s; background: linear-gradient(135deg, rgba(217, 70, 239, 0.25), rgba(217, 70, 239, 0.08)); }
.particle-14 { width: 85px; height: 85px; top: 25%; right: 45%; animation-duration: 30s; animation-delay: -13s; background: linear-gradient(135deg, rgba(167, 139, 250, 0.3), rgba(167, 139, 250, 0.1)); }
.particle-15 { width: 115px; height: 115px; bottom: 30%; left: 10%; animation-duration: 27s; animation-delay: -7s; background: linear-gradient(135deg, rgba(244, 114, 182, 0.3), rgba(244, 114, 182, 0.1)); }

/* ========== 玻璃效果核心樣式 ========== */
.glass-nav,
.glass-hero,
.glass-stat-card,
.glass-playlist-card,
.glass-artist-card,
.glass-queue-card,
.glass-lyrics-card,
.glass-equalizer-card,
.glass-loading-card,
.glass-search-bar,
.glass-footer,
.glass-toast {
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* ========== 頂部导航欄 ========== */
.glass-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  border-radius: 0;
}

.glass-logo {
  transition: transform 0.3s ease;
}

.glass-logo:hover {
  transform: rotate(180deg);
}

.glass-nav-link {
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.glass-nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.glass-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.glass-icon-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* ========== Hero 区塊 ========== */
.glass-hero {
  padding: 2rem;
  border-radius: 24px;
  position: relative;
  z-index: 1;
}

.glass-album-cover {
  transition: transform 0.3s ease;
}

.glass-album-cover:hover {
  transform: translateY(-8px);
}

/* 進度條 */
.glass-progress-container {
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.glass-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-radius: 12px;
  position: relative;
  transition: width 0.3s ease;
}

.glass-progress-bar::after {
  content: '';
  position: absolute;
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 控制按鈕 */
.glass-control-btn-sm,
.glass-control-btn-lg {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.glass-control-btn-sm {
  width: 48px;
  height: 48px;
}

.glass-control-btn-lg {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4));
}

.glass-control-btn-sm:hover,
.glass-control-btn-lg:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

.glass-control-btn-lg:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.6));
}

/* 音量控制 */
.glass-volume-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.glass-volume-fill {
  height: 100%;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-radius: 8px;
  transition: width 0.3s ease;
}

/* ========== 統計卡片 ========== */
.glass-stat-card {
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.glass-stat-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.45);
}

/* ========== 播放列表卡片 ========== */
.glass-playlist-card {
  padding: 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.glass-playlist-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.15);
}

/* ========== 藝人卡片 ========== */
.glass-artist-card {
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.glass-artist-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.15);
}

.glass-follow-btn {
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
}

.glass-follow-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

/* ========== 隊列卡片 ========== */
.glass-queue-card {
  padding: 1.5rem;
  border-radius: 16px;
  position: relative;
  z-index: 1;
}

.glass-queue-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.glass-queue-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.glass-queue-item.active {
  background: rgba(139, 92, 246, 0.3);
  border: 1px solid rgba(139, 92, 246, 0.5);
}

/* ========== 歌詞卡片 ========== */
.glass-lyrics-card {
  padding: 1.5rem;
  border-radius: 16px;
  position: relative;
  z-index: 1;
}

/* ========== 等化器 ========== */
.glass-equalizer-card {
  padding: 1.5rem;
  border-radius: 16px;
  position: relative;
  z-index: 1;
}

.eq-bar {
  flex: 1;
  background: linear-gradient(to top, #8B5CF6, #EC4899);
  border-radius: 4px 4px 0 0;
  animation: eq-bounce 1s ease-in-out infinite;
}

@keyframes eq-bounce {
  0%, 100% { height: var(--h, 50%); }
  50% { height: calc(var(--h, 50%) * 1.3); }
}

/* ========== 播放模式切換 ========== */
.glass-mode-chip {
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.glass-mode-chip:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.glass-mode-chip.active {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4));
  border-color: rgba(139, 92, 246, 0.6);
}

/* ========== 收藏按鈕 ========== */
.glass-action-btn {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.glass-action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* ========== 搜索欄 ========== */
.glass-search-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  position: relative;
  z-index: 1;
}

.glass-search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  outline: none;
}

.glass-search-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

/* ========== Loading 動画 ========== */
.glass-loading-card {
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

/* Spinner */
.glass-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Pulse Dots */
.glass-pulse-dots {
  display: flex;
  gap: 0.5rem;
}

.glass-pulse-dots div {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite;
}

.glass-pulse-dots div:nth-child(2) {
  animation-delay: 0.2s;
}

.glass-pulse-dots div:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Wave Progress */
.glass-wave-progress {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.glass-wave-bar {
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, #8B5CF6, #EC4899);
  border-radius: 8px;
  animation: wave 1.5s ease-in-out infinite;
}

@keyframes wave {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}

/* ========== Toast 通知 ========== */
.glass-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: white;
  font-weight: 500;
  z-index: 200;
  animation: toast-slide 0.3s ease-out;
}

@keyframes toast-slide {
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* ========== Footer ========== */
.glass-footer {
  border-radius: 0;
  position: relative;
  z-index: 1;
}

.glass-social-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.glass-social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

/* ========== 響應式设計 ========== */
@media (max-width: 768px) {
  .glass-nav .container {
    flex-direction: column;
    gap: 1rem;
  }

  .glass-hero {
    padding: 1.5rem;
  }

  .particles-background .particle {
    display: none;
  }

  .particles-background .particle-1,
  .particles-background .particle-2,
  .particles-background .particle-3 {
    display: block;
  }
}

/* 容器层級 */
.container {
  position: relative;
  z-index: 1;
}
`;
