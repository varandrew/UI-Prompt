// Neon Noir Full Page HTML and Styles
// Designed for music/nightclub platforms with red-purple neon aesthetics

export const neonNoirFullPageHTML = `
<div class="neon-noir-full-page" style="min-height: 100vh; background: linear-gradient(180deg, #0a0a0a 0%, #1a0a14 50%, #14050a 100%); position: relative; overflow-x: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">

  <!-- Background Effects Layer -->
  <div style="position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden;">
    <!-- Fog particles -->
    <div class="noir-fog-particle" style="position: absolute; top: 10%; left: 5%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(255, 0, 85, 0.15), transparent 70%); border-radius: 50%; filter: blur(60px); animation: fog-drift-1 20s ease-in-out infinite;"></div>
    <div class="noir-fog-particle" style="position: absolute; top: 40%; right: 10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(255, 0, 255, 0.12), transparent 70%); border-radius: 50%; filter: blur(70px); animation: fog-drift-2 25s ease-in-out infinite;"></div>
    <div class="noir-fog-particle" style="position: absolute; bottom: 20%; left: 30%; width: 450px; height: 450px; background: radial-gradient(circle, rgba(185, 103, 255, 0.1), transparent 70%); border-radius: 50%; filter: blur(65px); animation: fog-drift-3 22s ease-in-out infinite;"></div>

    <!-- Scanline -->
    <div class="noir-scanline" style="position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, rgba(255, 0, 255, 0.4), transparent); animation: scan-line 10s linear infinite;"></div>

    <!-- Neon grid -->
    <div style="position: absolute; inset: 0; background-image:
      linear-gradient(rgba(255, 0, 85, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 0, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;"></div>
  </div>

  <!-- Main Content -->
  <div style="position: relative; z-index: 2;">

    <!-- Navigation Bar -->
    <nav class="noir-nav" style="position: sticky; top: 0; z-index: 50; background: rgba(10, 10, 10, 0.85); backdrop-filter: blur(16px); border-bottom: 2px solid rgba(255, 0, 85, 0.4); box-shadow: 0 4px 30px rgba(255, 0, 85, 0.2);">
      <div style="max-width: 1400px; margin: 0 auto; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem;">

        <!-- Logo -->
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ff0055, #ff00ff); border-radius: 8px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(255, 0, 85, 0.6); animation: neon-pulse-red 2s ease-in-out infinite;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
              <path d="M9 18V5l12-2v13M9 13l12-2"/>
            </svg>
          </div>
          <span class="neon-glow-red" style="font-size: 1.5rem; font-weight: 900; letter-spacing: 0.1em; color: #ff0055; text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055, 0 0 40px #ff0055; animation: neon-flicker 4s ease-in-out infinite;">NEONOIR</span>
        </div>

        <!-- Nav Links -->
        <div style="display: flex; gap: 2.5rem; align-items: center;">
          <a href="javascript:void(0)" class="noir-nav-link" style="color: #ff00ff; font-weight: 600; font-size: 0.95rem; text-decoration: none; position: relative; transition: all 0.3s ease; padding: 0.5rem 0;">
            DISCOVER
            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #ff0055, #ff00ff); opacity: 0; transition: opacity 0.3s;"></div>
          </a>
          <a href="javascript:void(0)" class="noir-nav-link" style="color: #ff00ff; font-weight: 600; font-size: 0.95rem; text-decoration: none; position: relative; transition: all 0.3s ease; padding: 0.5rem 0;">
            ARTISTS
            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #ff0055, #ff00ff); opacity: 0; transition: opacity 0.3s;"></div>
          </a>
          <a href="javascript:void(0)" class="noir-nav-link" style="color: #ff00ff; font-weight: 600; font-size: 0.95rem; text-decoration: none; position: relative; transition: all 0.3s ease; padding: 0.5rem 0;">
            EVENTS
            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #ff0055, #ff00ff); opacity: 0; transition: opacity 0.3s;"></div>
          </a>
          <a href="javascript:void(0)" class="noir-nav-link" style="color: #ff00ff; font-weight: 600; font-size: 0.95rem; text-decoration: none; position: relative; transition: all 0.3s ease; padding: 0.5rem 0;">
            PLAYLISTS
            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #ff0055, #ff00ff); opacity: 0; transition: opacity 0.3s;"></div>
          </a>
        </div>

        <!-- Search & User -->
        <div style="display: flex; gap: 1rem; align-items: center;">
          <div style="position: relative;">
            <input type="text" placeholder="Search tracks..." class="noir-input" style="background: rgba(0, 0, 0, 0.5); border: 2px solid rgba(255, 0, 85, 0.4); color: #ff00ff; padding: 0.5rem 1rem 0.5rem 2.5rem; border-radius: 20px; font-size: 0.9rem; width: 200px; outline: none; transition: all 0.3s; font-family: 'Courier New', monospace;">
            <svg style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); width: 16px; height: 16px;" fill="none" stroke="#ff00ff" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
          <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #ff0055, #b967ff); border-radius: 50%; border: 2px solid rgba(255, 0, 255, 0.4); box-shadow: 0 0 20px rgba(255, 0, 85, 0.4); cursor: pointer;"></div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section style="padding: 6rem 2rem; text-align: center; position: relative; overflow: hidden;">
      <!-- Audio wave particles -->
      <div style="position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; gap: 8px; opacity: 0.3;">
        <div class="audio-bar" style="width: 4px; height: 40px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0s;"></div>
        <div class="audio-bar" style="width: 4px; height: 60px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0.1s;"></div>
        <div class="audio-bar" style="width: 4px; height: 80px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0.2s;"></div>
        <div class="audio-bar" style="width: 4px; height: 100px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0.3s;"></div>
        <div class="audio-bar" style="width: 4px; height: 80px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0.4s;"></div>
        <div class="audio-bar" style="width: 4px; height: 60px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0.5s;"></div>
        <div class="audio-bar" style="width: 4px; height: 40px; background: linear-gradient(180deg, #ff0055, #ff00ff); border-radius: 2px; animation: audio-wave 1.2s ease-in-out infinite; animation-delay: 0.6s;"></div>
      </div>

      <div style="position: relative; z-index: 2;">
        <h1 class="neon-glow-red-title" style="font-size: 5rem; font-weight: 900; margin-bottom: 1.5rem; color: #ff0055; text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055, 0 0 40px #ff0055, 0 0 80px #ff0055; letter-spacing: 0.15em; animation: neon-pulse-red 3s ease-in-out infinite;">
          NEON CITY
        </h1>
        <p style="font-size: 1.25rem; color: #ff00ff; text-shadow: 0 0 10px #ff00ff; margin-bottom: 2.5rem; font-family: 'Courier New', monospace; letter-spacing: 0.05em;">
          // WHERE SOUND MEETS LIGHT
        </p>
        <div style="display: flex; gap: 1.5rem; justify-content: center; align-items: center;">
          <button class="noir-button-primary" style="background: linear-gradient(135deg, #ff0055, #ff00ff); color: #000; font-weight: 700; padding: 1rem 2.5rem; border-radius: 30px; border: none; cursor: pointer; font-size: 1rem; letter-spacing: 0.05em; box-shadow: 0 0 30px rgba(255, 0, 85, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2); transition: all 0.3s; position: relative; overflow: hidden;">
            EXPLORE NOW
          </button>
          <button class="noir-button-secondary" style="background: transparent; color: #ff00ff; font-weight: 700; padding: 1rem 2.5rem; border-radius: 30px; border: 2px solid rgba(255, 0, 255, 0.6); cursor: pointer; font-size: 1rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(255, 0, 255, 0.3); transition: all 0.3s;">
            VIEW PLAYLIST
          </button>
        </div>
      </div>
    </section>

    <!-- Music Player Cards -->
    <section style="padding: 4rem 2rem; max-width: 1400px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem;">
        <h2 class="neon-glow-purple" style="font-size: 2.5rem; font-weight: 900; color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; letter-spacing: 0.1em;">
          FEATURED TRACKS
        </h2>
        <a href="javascript:void(0)" style="color: #ff0055; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;">
          VIEW ALL
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">

        <!-- Player Card 1 -->
        <div class="noir-player-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s;">
          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <!-- Album Cover -->
            <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #ff0055, #ff00ff); border-radius: 12px; position: relative; overflow: hidden; box-shadow: 0 0 40px rgba(255, 0, 85, 0.6); flex-shrink: 0;">
              <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(1px);"></div>
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem;">♪</div>
            </div>
            <!-- Track Info -->
            <div style="flex: 1; min-width: 0;">
              <h3 style="color: #ff0055; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff0055;">Midnight Drive</h3>
              <p style="color: #b967ff; font-size: 0.9rem; margin-bottom: 0.75rem;">Echo Pulse</p>
              <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255, 255, 255, 0.6); font-family: 'Courier New', monospace;">
                <span>🔥 12.5K</span>
                <span>⏱️ 4:32</span>
              </div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: between; margin-bottom: 0.5rem; font-size: 0.75rem; color: rgba(255, 255, 255, 0.5); font-family: 'Courier New', monospace;">
              <span>1:24</span>
              <span>4:32</span>
            </div>
            <div style="height: 4px; background: rgba(255, 0, 85, 0.2); border-radius: 2px; position: relative; overflow: hidden;">
              <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 30%; background: linear-gradient(90deg, #ff0055, #ff00ff); border-radius: 2px; box-shadow: 0 0 10px #ff0055;"></div>
            </div>
          </div>

          <!-- Controls -->
          <div style="display: flex; justify-content: center; align-items: center; gap: 1.5rem;">
            <button style="background: none; border: none; cursor: pointer; color: #ff00ff; transition: all 0.3s;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M19 20 9 12l10-8z"/><path d="M5 19V5"/>
              </svg>
            </button>
            <button class="noir-play-button" style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff0055, #ff00ff); border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(255, 0, 85, 0.6); transition: all 0.3s;">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <button style="background: none; border: none; cursor: pointer; color: #ff00ff; transition: all 0.3s;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="m5 4 10 8-10 8z"/><path d="M19 5v14"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Player Card 2 -->
        <div class="noir-player-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 255, 0.2), inset 0 0 30px rgba(255, 0, 255, 0.05); transition: all 0.4s;">
          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #b967ff, #ff00ff); border-radius: 12px; position: relative; overflow: hidden; box-shadow: 0 0 40px rgba(185, 103, 255, 0.6); flex-shrink: 0;">
              <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(1px);"></div>
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem;">♫</div>
            </div>
            <div style="flex: 1; min-width: 0;">
              <h3 style="color: #ff00ff; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff00ff;">Electric Dreams</h3>
              <p style="color: #b967ff; font-size: 0.9rem; margin-bottom: 0.75rem;">Neon Lights</p>
              <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255, 255, 255, 0.6); font-family: 'Courier New', monospace;">
                <span>🔥 8.3K</span>
                <span>⏱️ 3:45</span>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.75rem; color: rgba(255, 255, 255, 0.5); font-family: 'Courier New', monospace;">
              <span>2:10</span>
              <span>3:45</span>
            </div>
            <div style="height: 4px; background: rgba(255, 0, 255, 0.2); border-radius: 2px; position: relative; overflow: hidden;">
              <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 56%; background: linear-gradient(90deg, #b967ff, #ff00ff); border-radius: 2px; box-shadow: 0 0 10px #ff00ff;"></div>
            </div>
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 1.5rem;">
            <button style="background: none; border: none; cursor: pointer; color: #b967ff; transition: all 0.3s;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M19 20 9 12l10-8z"/><path d="M5 19V5"/>
              </svg>
            </button>
            <button class="noir-play-button" style="width: 50px; height: 50px; background: linear-gradient(135deg, #b967ff, #ff00ff); border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(185, 103, 255, 0.6); transition: all 0.3s;">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            </button>
            <button style="background: none; border: none; cursor: pointer; color: #b967ff; transition: all 0.3s;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="m5 4 10 8-10 8z"/><path d="M19 5v14"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Player Card 3 -->
        <div class="noir-player-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s;">
          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #ff0055, #b967ff); border-radius: 12px; position: relative; overflow: hidden; box-shadow: 0 0 40px rgba(255, 0, 85, 0.6); flex-shrink: 0;">
              <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(1px);"></div>
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem;">♬</div>
            </div>
            <div style="flex: 1; min-width: 0;">
              <h3 style="color: #ff0055; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff0055;">Neon Nights</h3>
              <p style="color: #b967ff; font-size: 0.9rem; margin-bottom: 0.75rem;">Cyber Soul</p>
              <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255, 255, 255, 0.6); font-family: 'Courier New', monospace;">
                <span>🔥 15.2K</span>
                <span>⏱️ 5:18</span>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.75rem; color: rgba(255, 255, 255, 0.5); font-family: 'Courier New', monospace;">
              <span>0:45</span>
              <span>5:18</span>
            </div>
            <div style="height: 4px; background: rgba(255, 0, 85, 0.2); border-radius: 2px; position: relative; overflow: hidden;">
              <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 14%; background: linear-gradient(90deg, #ff0055, #b967ff); border-radius: 2px; box-shadow: 0 0 10px #ff0055;"></div>
            </div>
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 1.5rem;">
            <button style="background: none; border: none; cursor: pointer; color: #ff00ff; transition: all 0.3s;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M19 20 9 12l10-8z"/><path d="M5 19V5"/>
              </svg>
            </button>
            <button class="noir-play-button" style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff0055, #b967ff); border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(255, 0, 85, 0.6); transition: all 0.3s;">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <button style="background: none; border: none; cursor: pointer; color: #ff00ff; transition: all 0.3s;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="m5 4 10 8-10 8z"/><path d="M19 5v14"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- DJ / Artists Section -->
    <section style="padding: 4rem 2rem; max-width: 1400px; margin: 0 auto;">
      <h2 class="neon-glow-red" style="font-size: 2.5rem; font-weight: 900; color: #ff0055; text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055; letter-spacing: 0.1em; margin-bottom: 3rem;">
        TOP ARTISTS
      </h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">

        <!-- Artist Card 1 -->
        <div class="noir-artist-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <!-- Glow effect on hover -->
          <div class="card-glow" style="position: absolute; inset: -2px; background: linear-gradient(135deg, #ff0055, #ff00ff); opacity: 0; transition: opacity 0.4s; border-radius: 16px; z-index: -1;"></div>

          <div style="width: 120px; height: 120px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #ff0055, #ff00ff); border-radius: 50%; border: 3px solid rgba(255, 0, 85, 0.4); box-shadow: 0 0 40px rgba(255, 0, 85, 0.6); display: flex; align-items: center; justify-content: center; font-size: 3rem; position: relative;">
            <div class="pulse-ring" style="position: absolute; inset: -10px; border: 2px solid rgba(255, 0, 85, 0.6); border-radius: 50%; animation: pulse-ring 2s ease-out infinite;"></div>
            🎧
          </div>
          <h3 style="color: #ff0055; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff0055;">DJ Nexus</h3>
          <p style="color: #b967ff; font-size: 0.9rem; margin-bottom: 1.5rem;">Electronic · Techno</p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <div style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">24</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">TRACKS</div>
            </div>
            <div>
              <div style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">125K</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">FANS</div>
            </div>
            <div>
              <div style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">2.4M</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">PLAYS</div>
            </div>
          </div>
          <button class="noir-button-secondary" style="background: transparent; color: #ff0055; font-weight: 700; padding: 0.75rem 2rem; border-radius: 25px; border: 2px solid rgba(255, 0, 85, 0.6); cursor: pointer; font-size: 0.9rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(255, 0, 85, 0.3); transition: all 0.3s; width: 100%;">
            FOLLOW
          </button>
        </div>

        <!-- Artist Card 2 -->
        <div class="noir-artist-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(255, 0, 255, 0.2), inset 0 0 30px rgba(255, 0, 255, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div class="card-glow" style="position: absolute; inset: -2px; background: linear-gradient(135deg, #ff00ff, #b967ff); opacity: 0; transition: opacity 0.4s; border-radius: 16px; z-index: -1;"></div>

          <div style="width: 120px; height: 120px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #ff00ff, #b967ff); border-radius: 50%; border: 3px solid rgba(255, 0, 255, 0.4); box-shadow: 0 0 40px rgba(255, 0, 255, 0.6); display: flex; align-items: center; justify-content: center; font-size: 3rem; position: relative;">
            <div class="pulse-ring" style="position: absolute; inset: -10px; border: 2px solid rgba(255, 0, 255, 0.6); border-radius: 50%; animation: pulse-ring 2s ease-out infinite;"></div>
            🎵
          </div>
          <h3 style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff00ff;">Violet Echo</h3>
          <p style="color: #b967ff; font-size: 0.9rem; margin-bottom: 1.5rem;">Synthwave · Retro</p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <div style="color: #b967ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #b967ff;">18</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">TRACKS</div>
            </div>
            <div>
              <div style="color: #b967ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #b967ff;">89K</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">FANS</div>
            </div>
            <div>
              <div style="color: #b967ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #b967ff;">1.8M</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">PLAYS</div>
            </div>
          </div>
          <button class="noir-button-secondary" style="background: transparent; color: #ff00ff; font-weight: 700; padding: 0.75rem 2rem; border-radius: 25px; border: 2px solid rgba(255, 0, 255, 0.6); cursor: pointer; font-size: 0.9rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(255, 0, 255, 0.3); transition: all 0.3s; width: 100%;">
            FOLLOW
          </button>
        </div>

        <!-- Artist Card 3 -->
        <div class="noir-artist-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(185, 103, 255, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(185, 103, 255, 0.2), inset 0 0 30px rgba(185, 103, 255, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div class="card-glow" style="position: absolute; inset: -2px; background: linear-gradient(135deg, #b967ff, #ff0055); opacity: 0; transition: opacity 0.4s; border-radius: 16px; z-index: -1;"></div>

          <div style="width: 120px; height: 120px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #b967ff, #ff0055); border-radius: 50%; border: 3px solid rgba(185, 103, 255, 0.4); box-shadow: 0 0 40px rgba(185, 103, 255, 0.6); display: flex; align-items: center; justify-content: center; font-size: 3rem; position: relative;">
            <div class="pulse-ring" style="position: absolute; inset: -10px; border: 2px solid rgba(185, 103, 255, 0.6); border-radius: 50%; animation: pulse-ring 2s ease-out infinite;"></div>
            🎤
          </div>
          <h3 style="color: #b967ff; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #b967ff;">Neon Pulse</h3>
          <p style="color: #ff00ff; font-size: 0.9rem; margin-bottom: 1.5rem;">House · Progressive</p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <div style="color: #ff0055; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff0055;">32</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">TRACKS</div>
            </div>
            <div>
              <div style="color: #ff0055; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff0055;">156K</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">FANS</div>
            </div>
            <div>
              <div style="color: #ff0055; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff0055;">3.2M</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">PLAYS</div>
            </div>
          </div>
          <button class="noir-button-secondary" style="background: transparent; color: #b967ff; font-weight: 700; padding: 0.75rem 2rem; border-radius: 25px; border: 2px solid rgba(185, 103, 255, 0.6); cursor: pointer; font-size: 0.9rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(185, 103, 255, 0.3); transition: all 0.3s; width: 100%;">
            FOLLOW
          </button>
        </div>

        <!-- Artist Card 4 -->
        <div class="noir-artist-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div class="card-glow" style="position: absolute; inset: -2px; background: linear-gradient(135deg, #ff0055, #ff00ff); opacity: 0; transition: opacity 0.4s; border-radius: 16px; z-index: -1;"></div>

          <div style="width: 120px; height: 120px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #ff0055, #ff00ff); border-radius: 50%; border: 3px solid rgba(255, 0, 85, 0.4); box-shadow: 0 0 40px rgba(255, 0, 85, 0.6); display: flex; align-items: center; justify-content: center; font-size: 3rem; position: relative;">
            <div class="pulse-ring" style="position: absolute; inset: -10px; border: 2px solid rgba(255, 0, 85, 0.6); border-radius: 50%; animation: pulse-ring 2s ease-out infinite;"></div>
            🎹
          </div>
          <h3 style="color: #ff0055; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff0055;">Crimson Beat</h3>
          <p style="color: #b967ff; font-size: 0.9rem; margin-bottom: 1.5rem;">Drum & Bass · Future</p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <div style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">27</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">TRACKS</div>
            </div>
            <div>
              <div style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">112K</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">FANS</div>
            </div>
            <div>
              <div style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">2.1M</div>
              <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem;">PLAYS</div>
            </div>
          </div>
          <button class="noir-button-secondary" style="background: transparent; color: #ff0055; font-weight: 700; padding: 0.75rem 2rem; border-radius: 25px; border: 2px solid rgba(255, 0, 85, 0.6); cursor: pointer; font-size: 0.9rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(255, 0, 85, 0.3); transition: all 0.3s; width: 100%;">
            FOLLOW
          </button>
        </div>
      </div>
    </section>

    <!-- Events Timeline -->
    <section style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
      <h2 class="neon-glow-purple" style="font-size: 2.5rem; font-weight: 900; color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; letter-spacing: 0.1em; margin-bottom: 3rem;">
        UPCOMING EVENTS
      </h2>

      <div style="position: relative;">
        <!-- Timeline Line -->
        <div style="position: absolute; left: 30px; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, #ff0055, #ff00ff, #b967ff); box-shadow: 0 0 20px rgba(255, 0, 255, 0.6);"></div>

        <!-- Event Items -->
        <div style="display: flex; flex-direction: column; gap: 3rem; position: relative;">

          <!-- Event 1 -->
          <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div class="timeline-dot" style="width: 60px; height: 60px; background: linear-gradient(135deg, #ff0055, #ff00ff); border-radius: 50%; border: 4px solid rgba(10, 10, 10, 0.9); box-shadow: 0 0 40px rgba(255, 0, 85, 0.8); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; position: relative; z-index: 2; animation: neon-pulse-red 2s ease-in-out infinite;">
              🎪
            </div>
            <div class="noir-timeline-card" style="flex: 1; background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 12px; padding: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s; border-left: 4px solid #ff0055;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <div>
                  <h3 style="color: #ff0055; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff0055;">NEON FESTIVAL 2024</h3>
                  <p style="color: #b967ff; font-size: 0.9rem;">Electric Dreams Arena</p>
                </div>
                <div style="text-align: right;">
                  <div style="color: #ff00ff; font-size: 1.25rem; font-weight: 700; text-shadow: 0 0 10px #ff00ff;">DEC 25</div>
                  <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.8rem;">8:00 PM</div>
                </div>
              </div>
              <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 1rem; line-height: 1.6;">
                Experience the ultimate electronic music festival featuring top international DJs and stunning visual displays.
              </p>
              <div style="display: flex; gap: 1rem;">
                <button class="noir-button-primary" style="background: linear-gradient(135deg, #ff0055, #ff00ff); color: #000; font-weight: 700; padding: 0.6rem 1.5rem; border-radius: 20px; border: none; cursor: pointer; font-size: 0.85rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(255, 0, 85, 0.5); transition: all 0.3s;">
                  GET TICKETS
                </button>
                <button class="noir-button-secondary" style="background: transparent; color: #ff00ff; font-weight: 700; padding: 0.6rem 1.5rem; border-radius: 20px; border: 2px solid rgba(255, 0, 255, 0.6); cursor: pointer; font-size: 0.85rem; letter-spacing: 0.05em; box-shadow: 0 0 15px rgba(255, 0, 255, 0.3); transition: all 0.3s;">
                  DETAILS
                </button>
              </div>
            </div>
          </div>

          <!-- Event 2 -->
          <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div class="timeline-dot" style="width: 60px; height: 60px; background: linear-gradient(135deg, #ff00ff, #b967ff); border-radius: 50%; border: 4px solid rgba(10, 10, 10, 0.9); box-shadow: 0 0 40px rgba(255, 0, 255, 0.8); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; position: relative; z-index: 2; animation: neon-pulse-purple 2s ease-in-out infinite;">
              🎭
            </div>
            <div class="noir-timeline-card" style="flex: 1; background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 12px; padding: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 255, 0.2), inset 0 0 30px rgba(255, 0, 255, 0.05); transition: all 0.4s; border-left: 4px solid #ff00ff;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <div>
                  <h3 style="color: #ff00ff; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #ff00ff;">UNDERGROUND TECHNO NIGHT</h3>
                  <p style="color: #b967ff; font-size: 0.9rem;">Nexus Club</p>
                </div>
                <div style="text-align: right;">
                  <div style="color: #b967ff; font-size: 1.25rem; font-weight: 700; text-shadow: 0 0 10px #b967ff;">DEC 31</div>
                  <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.8rem;">10:00 PM</div>
                </div>
              </div>
              <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 1rem; line-height: 1.6;">
                A night of raw techno beats in an intimate underground setting with world-class sound system.
              </p>
              <div style="display: flex; gap: 1rem;">
                <button class="noir-button-primary" style="background: linear-gradient(135deg, #ff00ff, #b967ff); color: #000; font-weight: 700; padding: 0.6rem 1.5rem; border-radius: 20px; border: none; cursor: pointer; font-size: 0.85rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(255, 0, 255, 0.5); transition: all 0.3s;">
                  GET TICKETS
                </button>
                <button class="noir-button-secondary" style="background: transparent; color: #b967ff; font-weight: 700; padding: 0.6rem 1.5rem; border-radius: 20px; border: 2px solid rgba(185, 103, 255, 0.6); cursor: pointer; font-size: 0.85rem; letter-spacing: 0.05em; box-shadow: 0 0 15px rgba(185, 103, 255, 0.3); transition: all 0.3s;">
                  DETAILS
                </button>
              </div>
            </div>
          </div>

          <!-- Event 3 -->
          <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div class="timeline-dot" style="width: 60px; height: 60px; background: linear-gradient(135deg, #b967ff, #ff0055); border-radius: 50%; border: 4px solid rgba(10, 10, 10, 0.9); box-shadow: 0 0 40px rgba(185, 103, 255, 0.8); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; position: relative; z-index: 2; animation: neon-pulse-purple 2s ease-in-out infinite;">
              🎨
            </div>
            <div class="noir-timeline-card" style="flex: 1; background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(185, 103, 255, 0.3); border-radius: 12px; padding: 1.5rem; box-shadow: 0 8px 32px rgba(185, 103, 255, 0.2), inset 0 0 30px rgba(185, 103, 255, 0.05); transition: all 0.4s; border-left: 4px solid #b967ff;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <div>
                  <h3 style="color: #b967ff; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 0 10px #b967ff;">SYNTHWAVE SHOWCASE</h3>
                  <p style="color: #ff00ff; font-size: 0.9rem;">Retro Wave Hall</p>
                </div>
                <div style="text-align: right;">
                  <div style="color: #ff0055; font-size: 1.25rem; font-weight: 700; text-shadow: 0 0 10px #ff0055;">JAN 15</div>
                  <div style="color: rgba(255, 255, 255, 0.5); font-size: 0.8rem;">7:00 PM</div>
                </div>
              </div>
              <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 1rem; line-height: 1.6;">
                Journey back to the 80s with cutting-edge synthwave artists and immersive retro-futuristic visuals.
              </p>
              <div style="display: flex; gap: 1rem;">
                <button class="noir-button-primary" style="background: linear-gradient(135deg, #b967ff, #ff0055); color: #000; font-weight: 700; padding: 0.6rem 1.5rem; border-radius: 20px; border: none; cursor: pointer; font-size: 0.85rem; letter-spacing: 0.05em; box-shadow: 0 0 20px rgba(185, 103, 255, 0.5); transition: all 0.3s;">
                  GET TICKETS
                </button>
                <button class="noir-button-secondary" style="background: transparent; color: #ff0055; font-weight: 700; padding: 0.6rem 1.5rem; border-radius: 20px; border: 2px solid rgba(255, 0, 85, 0.6); cursor: pointer; font-size: 0.85rem; letter-spacing: 0.05em; box-shadow: 0 0 15px rgba(255, 0, 85, 0.3); transition: all 0.3s;">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats / Data Visualization -->
    <section style="padding: 4rem 2rem; max-width: 1400px; margin: 0 auto;">
      <h2 class="neon-glow-red" style="font-size: 2.5rem; font-weight: 900; color: #ff0055; text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055; letter-spacing: 0.1em; margin-bottom: 3rem;">
        PLATFORM STATS
      </h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">

        <!-- Stat Card 1 -->
        <div class="noir-stat-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎵</div>
          <div class="counter" style="color: #ff0055; font-size: 3rem; font-weight: 900; text-shadow: 0 0 20px #ff0055, 0 0 40px #ff0055; margin-bottom: 0.5rem; font-family: 'Courier New', monospace;">
            124K
          </div>
          <div style="color: rgba(255, 255, 255, 0.7); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">
            TOTAL TRACKS
          </div>
          <div style="margin-top: 1rem; height: 3px; background: rgba(255, 0, 85, 0.3); border-radius: 2px; overflow: hidden;">
            <div style="height: 100%; width: 75%; background: linear-gradient(90deg, #ff0055, #ff00ff); box-shadow: 0 0 10px #ff0055; animation: progress-grow 2s ease-out;"></div>
          </div>
        </div>

        <!-- Stat Card 2 -->
        <div class="noir-stat-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(255, 0, 255, 0.2), inset 0 0 30px rgba(255, 0, 255, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">👥</div>
          <div class="counter" style="color: #ff00ff; font-size: 3rem; font-weight: 900; text-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff; margin-bottom: 0.5rem; font-family: 'Courier New', monospace;">
            2.5M
          </div>
          <div style="color: rgba(255, 255, 255, 0.7); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">
            ACTIVE USERS
          </div>
          <div style="margin-top: 1rem; height: 3px; background: rgba(255, 0, 255, 0.3); border-radius: 2px; overflow: hidden;">
            <div style="height: 100%; width: 88%; background: linear-gradient(90deg, #ff00ff, #b967ff); box-shadow: 0 0 10px #ff00ff; animation: progress-grow 2s ease-out;"></div>
          </div>
        </div>

        <!-- Stat Card 3 -->
        <div class="noir-stat-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(185, 103, 255, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(185, 103, 255, 0.2), inset 0 0 30px rgba(185, 103, 255, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎧</div>
          <div class="counter" style="color: #b967ff; font-size: 3rem; font-weight: 900; text-shadow: 0 0 20px #b967ff, 0 0 40px #b967ff; margin-bottom: 0.5rem; font-family: 'Courier New', monospace;">
            45M
          </div>
          <div style="color: rgba(255, 255, 255, 0.7); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">
            MONTHLY PLAYS
          </div>
          <div style="margin-top: 1rem; height: 3px; background: rgba(185, 103, 255, 0.3); border-radius: 2px; overflow: hidden;">
            <div style="height: 100%; width: 92%; background: linear-gradient(90deg, #b967ff, #ff0055); box-shadow: 0 0 10px #b967ff; animation: progress-grow 2s ease-out;"></div>
          </div>
        </div>

        <!-- Stat Card 4 -->
        <div class="noir-stat-card" style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2), inset 0 0 30px rgba(255, 0, 85, 0.05); transition: all 0.4s; position: relative; overflow: hidden;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎤</div>
          <div class="counter" style="color: #ff0055; font-size: 3rem; font-weight: 900; text-shadow: 0 0 20px #ff0055, 0 0 40px #ff0055; margin-bottom: 0.5rem; font-family: 'Courier New', monospace;">
            8.2K
          </div>
          <div style="color: rgba(255, 255, 255, 0.7); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">
            ARTISTS
          </div>
          <div style="margin-top: 1rem; height: 3px; background: rgba(255, 0, 85, 0.3); border-radius: 2px; overflow: hidden;">
            <div style="height: 100%; width: 65%; background: linear-gradient(90deg, #ff0055, #ff00ff); box-shadow: 0 0 10px #ff0055; animation: progress-grow 2s ease-out;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter / Subscribe -->
    <section style="padding: 4rem 2rem; max-width: 800px; margin: 0 auto; text-align: center;">
      <div style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 20px; padding: 3rem; box-shadow: 0 8px 32px rgba(255, 0, 255, 0.2), inset 0 0 30px rgba(255, 0, 255, 0.05); position: relative; overflow: hidden;">
        <!-- Background glow -->
        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255, 0, 255, 0.1), transparent 50%); animation: rotate-slow 20s linear infinite; pointer-events: none;"></div>

        <div style="position: relative; z-index: 2;">
          <h2 class="neon-glow-purple" style="font-size: 2.5rem; font-weight: 900; color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; letter-spacing: 0.1em; margin-bottom: 1rem;">
            STAY IN THE LOOP
          </h2>
          <p style="color: rgba(255, 255, 255, 0.7); font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.6;">
            Get the latest tracks, events, and exclusive content delivered to your inbox.
          </p>
          <div style="display: flex; gap: 1rem; max-width: 500px; margin: 0 auto;">
            <input type="email" placeholder="your@email.com" class="noir-input" style="flex: 1; background: rgba(0, 0, 0, 0.5); border: 2px solid rgba(255, 0, 255, 0.4); color: #ff00ff; padding: 1rem 1.5rem; border-radius: 30px; font-size: 1rem; outline: none; transition: all 0.3s; font-family: 'Courier New', monospace;">
            <button class="noir-button-primary" style="background: linear-gradient(135deg, #ff0055, #ff00ff); color: #000; font-weight: 700; padding: 1rem 2.5rem; border-radius: 30px; border: none; cursor: pointer; font-size: 1rem; letter-spacing: 0.05em; box-shadow: 0 0 30px rgba(255, 0, 85, 0.6); transition: all 0.3s; white-space: nowrap;">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading Animations Showcase -->
    <section style="padding: 4rem 2rem; max-width: 1400px; margin: 0 auto;">
      <h2 class="neon-glow-red" style="font-size: 2.5rem; font-weight: 900; color: #ff0055; text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055; letter-spacing: 0.1em; margin-bottom: 3rem;">
        LOADING EFFECTS
      </h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem;">

        <!-- Loader 1: Ring -->
        <div style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 85, 0.3); border-radius: 16px; padding: 3rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 85, 0.2);">
          <div class="noir-loader-ring" style="width: 60px; height: 60px; border: 4px solid rgba(255, 0, 85, 0.2); border-top-color: #ff0055; border-radius: 50%; animation: spin 1s linear infinite; box-shadow: 0 0 30px rgba(255, 0, 85, 0.5);"></div>
          <div style="color: #ff0055; font-weight: 600; font-size: 0.9rem; letter-spacing: 0.05em; text-shadow: 0 0 10px #ff0055;">RING LOADER</div>
        </div>

        <!-- Loader 2: Pulse Dots -->
        <div style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 0, 255, 0.3); border-radius: 16px; padding: 3rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; box-shadow: 0 8px 32px rgba(255, 0, 255, 0.2);">
          <div style="display: flex; gap: 0.75rem;">
            <div class="noir-pulse-dot" style="width: 14px; height: 14px; background: #ff00ff; border-radius: 50%; box-shadow: 0 0 20px #ff00ff; animation: pulse-scale 1.4s ease-in-out infinite; animation-delay: 0s;"></div>
            <div class="noir-pulse-dot" style="width: 14px; height: 14px; background: #ff00ff; border-radius: 50%; box-shadow: 0 0 20px #ff00ff; animation: pulse-scale 1.4s ease-in-out infinite; animation-delay: 0.2s;"></div>
            <div class="noir-pulse-dot" style="width: 14px; height: 14px; background: #ff00ff; border-radius: 50%; box-shadow: 0 0 20px #ff00ff; animation: pulse-scale 1.4s ease-in-out infinite; animation-delay: 0.4s;"></div>
          </div>
          <div style="color: #ff00ff; font-weight: 600; font-size: 0.9rem; letter-spacing: 0.05em; text-shadow: 0 0 10px #ff00ff;">PULSE DOTS</div>
        </div>

        <!-- Loader 3: Data Stream -->
        <div style="background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(185, 103, 255, 0.3); border-radius: 16px; padding: 3rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; box-shadow: 0 8px 32px rgba(185, 103, 255, 0.2);">
          <div style="display: flex; gap: 6px; height: 60px; align-items: flex-end;">
            <div class="stream-bar" style="width: 4px; background: linear-gradient(180deg, #b967ff, #ff0055); border-radius: 2px; animation: stream-flow 1s ease-in-out infinite; animation-delay: 0s;"></div>
            <div class="stream-bar" style="width: 4px; background: linear-gradient(180deg, #b967ff, #ff0055); border-radius: 2px; animation: stream-flow 1s ease-in-out infinite; animation-delay: 0.1s;"></div>
            <div class="stream-bar" style="width: 4px; background: linear-gradient(180deg, #b967ff, #ff0055); border-radius: 2px; animation: stream-flow 1s ease-in-out infinite; animation-delay: 0.2s;"></div>
            <div class="stream-bar" style="width: 4px; background: linear-gradient(180deg, #b967ff, #ff0055); border-radius: 2px; animation: stream-flow 1s ease-in-out infinite; animation-delay: 0.3s;"></div>
            <div class="stream-bar" style="width: 4px; background: linear-gradient(180deg, #b967ff, #ff0055); border-radius: 2px; animation: stream-flow 1s ease-in-out infinite; animation-delay: 0.4s;"></div>
          </div>
          <div style="color: #b967ff; font-weight: 600; font-size: 0.9rem; letter-spacing: 0.05em; text-shadow: 0 0 10px #b967ff;">DATA STREAM</div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="margin-top: 6rem; padding: 3rem 2rem; background: rgba(10, 10, 10, 0.9); border-top: 2px solid rgba(255, 0, 85, 0.3);">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">

          <!-- Column 1 -->
          <div>
            <h3 class="neon-glow-red" style="color: #ff0055; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; text-shadow: 0 0 10px #ff0055;">NEONOIR</h3>
            <p style="color: rgba(255, 255, 255, 0.6); line-height: 1.6; margin-bottom: 1rem;">
              Where sound meets light. Experience the future of music in a neon-lit digital realm.
            </p>
            <div style="display: flex; gap: 1rem;">
              <a href="javascript:void(0)" style="width: 40px; height: 40px; background: rgba(255, 0, 85, 0.2); border: 1px solid rgba(255, 0, 85, 0.4); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #ff0055; text-decoration: none; transition: all 0.3s;">
                f
              </a>
              <a href="javascript:void(0)" style="width: 40px; height: 40px; background: rgba(255, 0, 255, 0.2); border: 1px solid rgba(255, 0, 255, 0.4); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #ff00ff; text-decoration: none; transition: all 0.3s;">
                t
              </a>
              <a href="javascript:void(0)" style="width: 40px; height: 40px; background: rgba(185, 103, 255, 0.2); border: 1px solid rgba(185, 103, 255, 0.4); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #b967ff; text-decoration: none; transition: all 0.3s;">
                i
              </a>
            </div>
          </div>

          <!-- Column 2 -->
          <div>
            <h4 style="color: #ff00ff; font-size: 1rem; font-weight: 700; margin-bottom: 1.5rem; text-shadow: 0 0 10px #ff00ff;">EXPLORE</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Discover Music</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Top Artists</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Playlists</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Events</a>
            </div>
          </div>

          <!-- Column 3 -->
          <div>
            <h4 style="color: #b967ff; font-size: 1rem; font-weight: 700; margin-bottom: 1.5rem; text-shadow: 0 0 10px #b967ff;">COMMUNITY</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">For Artists</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Blog</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Forum</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Support</a>
            </div>
          </div>

          <!-- Column 4 -->
          <div>
            <h4 style="color: #ff0055; font-size: 1rem; font-weight: 700; margin-bottom: 1.5rem; text-shadow: 0 0 10px #ff0055;">LEGAL</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Privacy Policy</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Terms of Service</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Cookie Policy</a>
              <a href="javascript:void(0)" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: all 0.3s;">Licenses</a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div style="padding-top: 2rem; border-top: 1px solid rgba(255, 0, 255, 0.2); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <p style="color: rgba(255, 255, 255, 0.4); font-size: 0.9rem; font-family: 'Courier New', monospace;">
            © 2024 NEONOIR. All rights reserved.
          </p>
          <p style="color: rgba(255, 255, 255, 0.4); font-size: 0.9rem; font-family: 'Courier New', monospace;">
            // DESIGNED_WITH_<span style="color: #ff0055; text-shadow: 0 0 10px #ff0055;">PASSION</span>
          </p>
        </div>
      </div>
    </footer>

  </div>
</div>
`;

export const neonNoirFullPageStyles = `
/* ===== NEON NOIR ANIMATIONS ===== */

/* Fog drift animations */
@keyframes fog-drift-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.15;
  }
  33% {
    transform: translate(-30px, 20px) scale(1.1);
    opacity: 0.2;
  }
  66% {
    transform: translate(20px, -15px) scale(0.95);
    opacity: 0.18;
  }
}

@keyframes fog-drift-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.12;
  }
  33% {
    transform: translate(25px, -25px) scale(1.15);
    opacity: 0.18;
  }
  66% {
    transform: translate(-35px, 10px) scale(0.9);
    opacity: 0.15;
  }
}

@keyframes fog-drift-3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
  33% {
    transform: translate(-20px, -30px) scale(1.2);
    opacity: 0.15;
  }
  66% {
    transform: translate(30px, 20px) scale(0.85);
    opacity: 0.12;
  }
}

/* Scanline animation */
@keyframes scan-line {
  0% {
    top: -10%;
  }
  100% {
    top: 110%;
  }
}

/* Neon flicker effect */
@keyframes neon-flicker {
  0%, 100% {
    opacity: 1;
    text-shadow:
      0 0 10px currentColor,
      0 0 20px currentColor,
      0 0 40px currentColor;
  }
  2%, 8%, 10%, 25%, 27% {
    opacity: 0.8;
    text-shadow:
      0 0 8px currentColor,
      0 0 16px currentColor;
  }
  5%, 24% {
    opacity: 0.3;
    text-shadow:
      0 0 5px currentColor;
  }
}

/* Neon pulse - Red */
@keyframes neon-pulse-red {
  0%, 100% {
    text-shadow:
      0 0 10px #ff0055,
      0 0 20px #ff0055,
      0 0 40px #ff0055;
    box-shadow: 0 0 30px rgba(255, 0, 85, 0.6);
  }
  50% {
    text-shadow:
      0 0 20px #ff0055,
      0 0 40px #ff0055,
      0 0 60px #ff0055,
      0 0 80px #ff0055;
    box-shadow: 0 0 50px rgba(255, 0, 85, 0.9);
  }
}

/* Neon pulse - Purple */
@keyframes neon-pulse-purple {
  0%, 100% {
    text-shadow:
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 40px #ff00ff;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.6);
  }
  50% {
    text-shadow:
      0 0 20px #ff00ff,
      0 0 40px #ff00ff,
      0 0 60px #ff00ff,
      0 0 80px #ff00ff;
    box-shadow: 0 0 50px rgba(255, 0, 255, 0.9);
  }
}

/* Audio wave animation */
@keyframes audio-wave {
  0%, 100% {
    transform: scaleY(0.4);
    opacity: 0.6;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

/* Pulse ring animation */
@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Pulse scale animation for dots */
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}

/* Stream flow animation */
@keyframes stream-flow {
  0% {
    height: 10%;
    opacity: 0.5;
  }
  50% {
    height: 100%;
    opacity: 1;
  }
  100% {
    height: 10%;
    opacity: 0.5;
  }
}

/* Spin animation for loaders */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Progress bar grow animation */
@keyframes progress-grow {
  from {
    width: 0;
  }
}

/* Rotate slow for background effects */
@keyframes rotate-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ===== NEON NOIR HOVER EFFECTS ===== */

/* Navigation links hover */
.noir-nav-link:hover {
  color: #ff0055;
  text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055;
}

.noir-nav-link:hover > div {
  opacity: 1;
}

/* Input focus effects */
.noir-input:focus {
  border-color: #ff00ff;
  box-shadow:
    0 0 20px rgba(255, 0, 255, 0.5),
    inset 0 0 20px rgba(255, 0, 255, 0.1);
}

/* Button hover effects */
.noir-button-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 40px rgba(255, 0, 85, 0.8),
    inset 0 0 30px rgba(255, 255, 255, 0.3);
}

.noir-button-secondary:hover {
  background: rgba(255, 0, 255, 0.1);
  border-color: #ff00ff;
  box-shadow:
    0 0 30px rgba(255, 0, 255, 0.6),
    inset 0 0 20px rgba(255, 0, 255, 0.1);
  transform: translateY(-2px);
}

/* Play button hover */
.noir-play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 50px rgba(255, 0, 85, 0.9);
}

/* Player card hover */
.noir-player-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 0, 85, 0.6);
  box-shadow:
    0 12px 40px rgba(255, 0, 85, 0.4),
    inset 0 0 40px rgba(255, 0, 85, 0.1);
}

/* Artist card hover */
.noir-artist-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 0, 255, 0.6);
  box-shadow:
    0 16px 48px rgba(255, 0, 255, 0.4),
    inset 0 0 40px rgba(255, 0, 255, 0.1);
}

.noir-artist-card:hover .card-glow {
  opacity: 0.15;
}

/* Timeline card hover */
.noir-timeline-card:hover {
  transform: translateX(8px);
  border-color: rgba(255, 0, 255, 0.6);
  box-shadow:
    0 12px 40px rgba(255, 0, 255, 0.4),
    inset 0 0 40px rgba(255, 0, 255, 0.1);
}

/* Stat card hover */
.noir-stat-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(255, 0, 85, 0.6);
  box-shadow:
    0 12px 40px rgba(255, 0, 85, 0.4),
    inset 0 0 40px rgba(255, 0, 85, 0.1);
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 768px) {
  /* Reduce neon glow intensity on mobile for better performance */
  .neon-glow-red-title {
    font-size: 3rem !important;
    text-shadow:
      0 0 5px #ff0055,
      0 0 10px #ff0055,
      0 0 20px #ff0055 !important;
  }

  .neon-glow-red,
  .neon-glow-purple {
    font-size: 2rem !important;
    text-shadow:
      0 0 5px currentColor,
      0 0 10px currentColor !important;
  }

  /* Simplify fog animations on mobile */
  .noir-fog-particle {
    animation-duration: 30s !important;
    opacity: 0.1 !important;
  }

  /* Navigation stacking */
  .noir-nav > div {
    flex-wrap: wrap;
  }

  /* Hero section padding */
  section {
    padding: 3rem 1rem !important;
  }

  /* Timeline layout */
  .noir-timeline-card {
    border-left-width: 2px !important;
  }

  /* Footer grid */
  footer > div > div {
    grid-template-columns: 1fr !important;
  }

  /* Subscribe section */
  section > div > div > div:last-child {
    flex-direction: column;
  }

  section > div > div > div:last-child > input {
    width: 100%;
  }
}

/* ===== ACCESSIBILITY ===== */

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for keyboard navigation */
button:focus,
input:focus,
a:focus {
  outline: 2px solid #ff00ff;
  outline-offset: 2px;
}

/* ===== ADDITIONAL EFFECTS ===== */

/* Glass morphism enhancement */
.noir-player-card,
.noir-artist-card,
.noir-timeline-card,
.noir-stat-card {
  position: relative;
}

.noir-player-card::before,
.noir-artist-card::before,
.noir-timeline-card::before,
.noir-stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.1) 50%,
    transparent);
}

/* Neon text glow classes */
.neon-glow-red {
  animation: neon-flicker 5s ease-in-out infinite;
}

.neon-glow-purple {
  animation: neon-flicker 6s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff0055, #ff00ff);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #ff00ff, #b967ff);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
}
`;
