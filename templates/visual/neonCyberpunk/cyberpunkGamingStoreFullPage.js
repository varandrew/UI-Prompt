// Cyberpunk Gaming E-commerce Store - Full Page Design
// Multi-Neon Color Palette + High-Energy Animations

export const cyberpunkGamingStoreHTML = `
<div class="cyber-gaming-store" style="background: #0a0a0a; color: #fff; font-family: 'Rajdhani', 'Arial Black', sans-serif; min-height: 100vh; position: relative; overflow-x: hidden;">

  <!-- Background Effects -->
  <div style="position: fixed; inset: 0; pointer-events: none; z-index: 0;">
    <!-- Grid Pattern -->
    <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <!-- Scanline -->
    <div class="cyber-scanline" style="position: absolute; inset: 0; background: linear-gradient(transparent 50%, rgba(255, 0, 128, 0.02) 50%); background-size: 100% 4px; animation: cyber-scan 8s linear infinite;"></div>

    <!-- Data Stream -->
    <div style="position: absolute; top: -50%; left: 5%; font-size: 10px; color: #00ff41; opacity: 0.1; animation: cyber-flow 20s linear infinite;">01010101</div>
    <div style="position: absolute; top: -50%; left: 25%; font-size: 10px; color: #00ffff; opacity: 0.1; animation: cyber-flow 25s linear infinite; animation-delay: 2s;">11011011</div>
    <div style="position: absolute; top: -50%; left: 50%; font-size: 10px; color: #ff0080; opacity: 0.1; animation: cyber-flow 22s linear infinite; animation-delay: 4s;">10101010</div>
    <div style="position: absolute; top: -50%; left: 75%; font-size: 10px; color: #9d4edd; opacity: 0.1; animation: cyber-flow 18s linear infinite; animation-delay: 1s;">01100110</div>
    <div style="position: absolute; top: -50%; right: 5%; font-size: 10px; color: #ff6b35; opacity: 0.1; animation: cyber-flow 24s linear infinite; animation-delay: 3s;">11001100</div>
  </div>

  <!-- Main Content -->
  <div style="position: relative; z-index: 1;">

    <!-- Top Navigation Bar -->
    <nav style="position: sticky; top: 0; z-index: 100; background: rgba(10, 10, 10, 0.95); border-bottom: 2px solid #00ff41; backdrop-filter: blur(15px); box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);">
      <div style="max-width: 1600px; margin: 0 auto; padding: 1.25rem 2rem;">

        <!-- Top Row -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 2rem; margin-bottom: 1rem;">

          <!-- Logo -->
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #00ff41, #00ffff); display: flex; align-items: center; justify-content: center; position: relative; animation: cyber-logo-pulse 3s ease-in-out infinite; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);">
              <span style="font-size: 24px; font-weight: 900; color: #0a0a0a;">N</span>
              <div style="position: absolute; inset: -3px; border: 2px solid #ff0080; animation: cyber-rotate 4s linear infinite; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);"></div>
            </div>
            <div>
              <div class="cyber-glitch-text" style="font-size: 22px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41; letter-spacing: 2px;">NEON_GAMES</div>
              <div style="font-size: 10px; color: #00ffff; text-transform: uppercase; letter-spacing: 3px; margin-top: -2px;">// Digital Realm</div>
            </div>
          </div>

          <!-- Search Bar -->
          <div style="flex: 1; max-width: 500px; position: relative;">
            <input
              type="text"
              placeholder="Search games, DLC, bundles..."
              style="width: 100%; padding: 0.875rem 3rem 0.875rem 1.25rem; background: rgba(0, 255, 65, 0.05); border: 2px solid #00ff41; color: #fff; font-size: 15px; font-weight: 600; outline: none; transition: all 0.3s; box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);"
              onfocus="this.style.borderColor='#00ffff'; this.style.boxShadow='0 0 25px rgba(0, 255, 255, 0.4)'"
              onblur="this.style.borderColor='#00ff41'; this.style.boxShadow='0 0 15px rgba(0, 255, 65, 0.2)'"
            >
            <button style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; background: linear-gradient(135deg, #00ff41, #00ffff); border: none; cursor: pointer; transition: all 0.3s; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.boxShadow='0 0 20px rgba(0, 255, 65, 0.6)'" onmouseout="this.style.boxShadow='none'">
              <span style="font-size: 20px;">🔍</span>
            </button>
          </div>

          <!-- Right Actions -->
          <div style="display: flex; gap: 1.25rem; align-items: center;">

            <!-- Wishlist -->
            <button style="position: relative; width: 48px; height: 48px; background: rgba(157, 78, 221, 0.1); border: 2px solid #9d4edd; cursor: pointer; transition: all 0.3s; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.borderColor='#b537f2'; this.style.boxShadow='0 0 20px rgba(157, 78, 221, 0.5)'" onmouseout="this.style.borderColor='#9d4edd'; this.style.boxShadow='none'">
              <span style="font-size: 22px;">💜</span>
              <span style="position: absolute; top: -8px; right: -8px; background: #9d4edd; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; box-shadow: 0 0 15px #9d4edd;">5</span>
            </button>

            <!-- Cart -->
            <button style="position: relative; width: 48px; height: 48px; background: rgba(255, 0, 128, 0.1); border: 2px solid #ff0080; cursor: pointer; transition: all 0.3s; animation: cart-pulse 2s ease-in-out infinite; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.borderColor='#ff1744'; this.style.boxShadow='0 0 20px rgba(255, 0, 128, 0.5)'" onmouseout="this.style.borderColor='#ff0080'; this.style.boxShadow='none'">
              <span style="font-size: 22px;">🛒</span>
              <span style="position: absolute; top: -8px; right: -8px; background: #ff0080; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; box-shadow: 0 0 15px #ff0080; animation: neon-flicker 3s infinite;">3</span>
            </button>

            <!-- User -->
            <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; background: rgba(0, 255, 255, 0.05); border: 2px solid #00ffff; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor='#00d4ff'; this.style.boxShadow='0 0 20px rgba(0, 212, 255, 0.4)'" onmouseout="this.style.borderColor='#00ffff'; this.style.boxShadow='none'">
              <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #00ffff, #9d4edd); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; color: #0a0a0a; box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);">
                PX
              </div>
              <div>
                <div style="font-size: 13px; font-weight: 700; color: #00ffff;">Player_X</div>
                <div style="font-size: 10px; color: #9d4edd; text-transform: uppercase;">Level 42</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Row - Category Navigation -->
        <div style="display: flex; gap: 2rem; justify-content: center; padding-top: 0.75rem; border-top: 1px solid rgba(0, 255, 65, 0.2);">
          <a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #00ff41; text-decoration: none; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.3s; text-shadow: 0 0 5px #00ff41; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.borderColor='#00ff41'; this.style.boxShadow='0 0 15px rgba(0, 255, 65, 0.5)'; this.style.textShadow='0 0 10px #00ff41, 0 0 20px #00ff41'" onmouseout="this.style.borderColor='transparent'; this.style.boxShadow='none'; this.style.textShadow='0 0 5px #00ff41'">
            🔥 HOT DEALS
          </a>
          <a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #00ffff; text-decoration: none; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.3s; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.borderColor='#00ffff'; this.style.boxShadow='0 0 15px rgba(0, 255, 255, 0.5)'; this.style.color='#00d4ff'" onmouseout="this.style.borderColor='transparent'; this.style.boxShadow='none'; this.style.color='#00ffff'">
            🎮 FPS GAMES
          </a>
          <a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #ff0080; text-decoration: none; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.3s; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.borderColor='#ff0080'; this.style.boxShadow='0 0 15px rgba(255, 0, 128, 0.5)'; this.style.color='#ff1744'" onmouseout="this.style.borderColor='transparent'; this.style.boxShadow='none'; this.style.color='#ff0080'">
            ⚔️ RPG
          </a>
          <a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #9d4edd; text-decoration: none; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.3s; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.borderColor='#9d4edd'; this.style.boxShadow='0 0 15px rgba(157, 78, 221, 0.5)'; this.style.color='#b537f2'" onmouseout="this.style.borderColor='transparent'; this.style.boxShadow='none'; this.style.color='#9d4edd'">
            🏃 ACTION
          </a>
          <a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #ff6b35; text-decoration: none; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.3s; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.borderColor='#ff6b35'; this.style.boxShadow='0 0 15px rgba(255, 107, 53, 0.5)'; this.style.color='#ffa500'" onmouseout="this.style.borderColor='transparent'; this.style.boxShadow='none'; this.style.color='#ff6b35'">
            🧠 STRATEGY
          </a>
          <a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #39ff14; text-decoration: none; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.3s; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.borderColor='#39ff14'; this.style.boxShadow='0 0 15px rgba(57, 255, 20, 0.5)'" onmouseout="this.style.borderColor='transparent'; this.style.boxShadow='none'">
            💎 INDIE
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Banner -->
    <section style="position: relative; padding: 4rem 2rem; background: linear-gradient(135deg, rgba(0, 255, 65, 0.08) 0%, rgba(255, 0, 128, 0.08) 50%, rgba(157, 78, 221, 0.08) 100%); border-bottom: 2px solid #ff0080; overflow: hidden;">

      <!-- Floating Particles -->
      <div style="position: absolute; top: 20%; left: 10%; width: 4px; height: 4px; background: #00ff41; border-radius: 50%; box-shadow: 0 0 20px #00ff41; animation: float-particle 6s ease-in-out infinite;"></div>
      <div style="position: absolute; top: 40%; right: 15%; width: 3px; height: 3px; background: #ff0080; border-radius: 50%; box-shadow: 0 0 20px #ff0080; animation: float-particle 8s ease-in-out infinite; animation-delay: 1s;"></div>
      <div style="position: absolute; top: 60%; left: 20%; width: 5px; height: 5px; background: #00ffff; border-radius: 50%; box-shadow: 0 0 20px #00ffff; animation: float-particle 7s ease-in-out infinite; animation-delay: 2s;"></div>

      <div style="max-width: 1600px; margin: 0 auto; position: relative; z-index: 1;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">

          <!-- Left Content -->
          <div>
            <div style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(255, 0, 128, 0.2); border: 2px solid #ff0080; margin-bottom: 1.5rem; animation: neon-flicker 4s infinite; clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);">
              <span style="font-size: 14px; font-weight: 900; color: #ff0080; text-shadow: 0 0 10px #ff0080; letter-spacing: 2px; text-transform: uppercase;">🔥 Flash Sale</span>
            </div>

            <h1 class="cyber-glitch-text" style="font-size: 64px; font-weight: 900; line-height: 1.1; margin: 0; margin-bottom: 1.5rem;">
              <div style="color: #00ff41; text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41; animation: text-glitch 5s infinite;">CYBER</div>
              <div style="color: #ff0080; text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080; animation: text-glitch 5s infinite 0.3s; margin-left: 2rem;">BLAST</div>
              <div style="color: #00ffff; font-size: 48px; margin-top: 0.5rem; text-shadow: 0 0 10px #00ffff;">WEEKEND SALE</div>
            </h1>

            <p style="font-size: 20px; color: #9d4edd; margin: 0 0 2rem 0; max-width: 500px; line-height: 1.6;">
              Up to <span style="color: #ff0080; font-weight: 900; font-size: 28px; text-shadow: 0 0 10px #ff0080;">85% OFF</span> on 2,500+ games. Limited time only!
            </p>

            <!-- Countdown Timer -->
            <div style="display: flex; gap: 1.5rem; margin-bottom: 2.5rem;">
              <div style="text-align: center;">
                <div class="flip-counter" style="font-size: 48px; font-weight: 900; color: #ff0080; text-shadow: 0 0 20px #ff0080; background: rgba(255, 0, 128, 0.1); border: 2px solid #ff0080; padding: 1rem 1.5rem; min-width: 80px; animation: counter-pulse 1s ease-in-out infinite;">23</div>
                <div style="font-size: 12px; color: #fff; margin-top: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Hours</div>
              </div>
              <div style="text-align: center;">
                <div class="flip-counter" style="font-size: 48px; font-weight: 900; color: #00ffff; text-shadow: 0 0 20px #00ffff; background: rgba(0, 255, 255, 0.1); border: 2px solid #00ffff; padding: 1rem 1.5rem; min-width: 80px; animation: counter-pulse 1s ease-in-out infinite; animation-delay: 0.2s;">47</div>
                <div style="font-size: 12px; color: #fff; margin-top: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Minutes</div>
              </div>
              <div style="text-align: center;">
                <div class="flip-counter" style="font-size: 48px; font-weight: 900; color: #00ff41; text-shadow: 0 0 20px #00ff41; background: rgba(0, 255, 65, 0.1); border: 2px solid #00ff41; padding: 1rem 1.5rem; min-width: 80px; animation: counter-pulse 1s ease-in-out infinite; animation-delay: 0.4s;">32</div>
                <div style="font-size: 12px; color: #fff; margin-top: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Seconds</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
              <button class="cyber-cta-primary" style="padding: 1.25rem 3rem; background: linear-gradient(135deg, #00ff41, #00ffff); color: #0a0a0a; border: none; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 0 0 30px rgba(0, 255, 65, 0.5); transition: all 0.3s; clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%); text-transform: uppercase; letter-spacing: 2px;" onmouseover="this.style.transform='scale(1.05) translateY(-2px)'; this.style.boxShadow='0 0 40px rgba(0, 255, 65, 0.8); this.className='cyber-cta-primary rgb-split-hover'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 30px rgba(0, 255, 65, 0.5)'">
                ⚡ SHOP NOW
              </button>

              <button style="padding: 1.25rem 3rem; background: transparent; color: #ff0080; border: 3px solid #ff0080; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 0 0 20px rgba(255, 0, 128, 0.3); transition: all 0.3s; clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%); text-transform: uppercase; letter-spacing: 2px;" onmouseover="this.style.background='rgba(255, 0, 128, 0.2)'; this.style.boxShadow='0 0 30px rgba(255, 0, 128, 0.5)'" onmouseout="this.style.background='transparent'; this.style.boxShadow='0 0 20px rgba(255, 0, 128, 0.3)'">
                💜 VIEW ALL
              </button>
            </div>
          </div>

          <!-- Right - Featured Game Card -->
          <div style="position: relative;">
            <div style="background: rgba(10, 10, 10, 0.8); border: 3px solid #9d4edd; padding: 2rem; box-shadow: 0 0 40px rgba(157, 78, 221, 0.4); position: relative; overflow: hidden; animation: hologram-float 4s ease-in-out infinite;">

              <!-- Hologram Effect -->
              <div style="position: absolute; inset: 0; border: 2px solid rgba(157, 78, 221, 0.3); animation: hologram-scan 3s linear infinite; pointer-events: none;"></div>

              <!-- Game Image Placeholder -->
              <div style="width: 100%; height: 350px; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; border: 2px solid #00ffff; position: relative; overflow: hidden;">
                <div style="font-size: 80px; text-align: center; animation: pulse-glow 2s ease-in-out infinite;">
                  <div style="color: #9d4edd; text-shadow: 0 0 20px #9d4edd;">🎮</div>
                </div>

                <!-- Discount Badge -->
                <div style="position: absolute; top: 1rem; right: 1rem; background: #ff0080; color: #fff; padding: 0.75rem 1.5rem; font-weight: 900; font-size: 24px; transform: rotate(5deg); box-shadow: 0 0 30px #ff0080; animation: badge-rotate 3s ease-in-out infinite; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
                  -75%
                </div>
              </div>

              <h3 style="font-size: 28px; font-weight: 900; color: #9d4edd; margin: 0 0 0.75rem 0; text-shadow: 0 0 15px #9d4edd;">CYBER WARFARE 2077</h3>

              <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <span style="padding: 0.25rem 0.75rem; background: rgba(0, 255, 65, 0.2); border: 1px solid #00ff41; color: #00ff41; font-size: 12px; font-weight: 700;">FPS</span>
                <span style="padding: 0.25rem 0.75rem; background: rgba(0, 255, 255, 0.2); border: 1px solid #00ffff; color: #00ffff; font-size: 12px; font-weight: 700;">MULTIPLAYER</span>
                <span style="padding: 0.25rem 0.75rem; background: rgba(255, 0, 128, 0.2); border: 1px solid #ff0080; color: #ff0080; font-size: 12px; font-weight: 700;">VR SUPPORT</span>
              </div>

              <!-- Rating -->
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="display: flex; gap: 0.25rem;">
                  <span style="color: #ff6b35; font-size: 20px; text-shadow: 0 0 10px #ff6b35;">⭐</span>
                  <span style="color: #ff6b35; font-size: 20px; text-shadow: 0 0 10px #ff6b35;">⭐</span>
                  <span style="color: #ff6b35; font-size: 20px; text-shadow: 0 0 10px #ff6b35;">⭐</span>
                  <span style="color: #ff6b35; font-size: 20px; text-shadow: 0 0 10px #ff6b35;">⭐</span>
                  <span style="color: #ff6b35; font-size: 20px; text-shadow: 0 0 10px #ff6b35;">⭐</span>
                </div>
                <span style="color: #00ffff; font-size: 16px; font-weight: 700;">4.9 / 5.0</span>
                <span style="color: #9d4edd; font-size: 14px;">(2,847 reviews)</span>
              </div>

              <!-- Price -->
              <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 1.5rem;">
                <span style="font-size: 14px; color: #888; text-decoration: line-through;">$59.99</span>
                <span style="font-size: 42px; font-weight: 900; color: #00ff41; text-shadow: 0 0 20px #00ff41;">$14.99</span>
                <span style="font-size: 18px; color: #ff0080; font-weight: 700;">Save $45.00</span>
              </div>

              <!-- Add to Cart -->
              <button class="rgb-split-btn" style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #ff0080, #9d4edd); color: #fff; border: none; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 0 0 25px rgba(255, 0, 128, 0.5); transition: all 0.3s; text-transform: uppercase; letter-spacing: 2px;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 35px rgba(255, 0, 128, 0.7)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 25px rgba(255, 0, 128, 0.5)'">
                🛒 ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Quick Access -->
    <section style="max-width: 1600px; margin: 0 auto; padding: 4rem 2rem;">
      <h2 style="font-size: 32px; font-weight: 900; color: #00ff41; text-shadow: 0 0 15px #00ff41; margin-bottom: 2.5rem; border-left: 6px solid #00ff41; padding-left: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">// BROWSE BY GENRE</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">

        <!-- Category 1: FPS -->
        <div class="category-card" style="background: rgba(0, 255, 65, 0.05); border: 2px solid #00ff41; padding: 2rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='#39ff14'; this.style.boxShadow='0 0 40px rgba(0, 255, 65, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#00ff41'; this.style.boxShadow='none'">
          <div style="position: absolute; top: -50%; right: -20%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(0, 255, 65, 0.2), transparent); animation: category-glow 3s ease-in-out infinite;"></div>
          <div style="font-size: 56px; margin-bottom: 1rem; position: relative; z-index: 1;">🎯</div>
          <h3 style="font-size: 24px; font-weight: 900; color: #00ff41; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #00ff41;">FPS GAMES</h3>
          <p style="color: #fff; font-size: 14px; margin: 0 0 1rem 0; opacity: 0.8;">First-person shooters with intense action</p>
          <div style="font-size: 20px; font-weight: 700; color: #00ffff;">1,247 Games →</div>
        </div>

        <!-- Category 2: RPG -->
        <div class="category-card" style="background: rgba(255, 0, 128, 0.05); border: 2px solid #ff0080; padding: 2rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='#ff1744'; this.style.boxShadow='0 0 40px rgba(255, 0, 128, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#ff0080'; this.style.boxShadow='none'">
          <div style="position: absolute; top: -50%; right: -20%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(255, 0, 128, 0.2), transparent); animation: category-glow 3s ease-in-out infinite 0.5s;"></div>
          <div style="font-size: 56px; margin-bottom: 1rem; position: relative; z-index: 1;">⚔️</div>
          <h3 style="font-size: 24px; font-weight: 900; color: #ff0080; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #ff0080;">RPG ADVENTURES</h3>
          <p style="color: #fff; font-size: 14px; margin: 0 0 1rem 0; opacity: 0.8;">Epic role-playing experiences</p>
          <div style="font-size: 20px; font-weight: 700; color: #00ffff;">892 Games →</div>
        </div>

        <!-- Category 3: Strategy -->
        <div class="category-card" style="background: rgba(0, 255, 255, 0.05); border: 2px solid #00ffff; padding: 2rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='#00d4ff'; this.style.boxShadow='0 0 40px rgba(0, 255, 255, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#00ffff'; this.style.boxShadow='none'">
          <div style="position: absolute; top: -50%; right: -20%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent); animation: category-glow 3s ease-in-out infinite 1s;"></div>
          <div style="font-size: 56px; margin-bottom: 1rem; position: relative; z-index: 1;">🧠</div>
          <h3 style="font-size: 24px; font-weight: 900; color: #00ffff; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #00ffff;">STRATEGY</h3>
          <p style="color: #fff; font-size: 14px; margin: 0 0 1rem 0; opacity: 0.8;">Test your tactical mind</p>
          <div style="font-size: 20px; font-weight: 700; color: #00ffff;">654 Games →</div>
        </div>

        <!-- Category 4: Action -->
        <div class="category-card" style="background: rgba(157, 78, 221, 0.05); border: 2px solid #9d4edd; padding: 2rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='#b537f2'; this.style.boxShadow='0 0 40px rgba(157, 78, 221, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#9d4edd'; this.style.boxShadow='none'">
          <div style="position: absolute; top: -50%; right: -20%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(157, 78, 221, 0.2), transparent); animation: category-glow 3s ease-in-out infinite 1.5s;"></div>
          <div style="font-size: 56px; margin-bottom: 1rem; position: relative; z-index: 1;">🏃</div>
          <h3 style="font-size: 24px; font-weight: 900; color: #9d4edd; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #9d4edd;">ACTION GAMES</h3>
          <p style="color: #fff; font-size: 14px; margin: 0 0 1rem 0; opacity: 0.8;">Fast-paced adrenaline rush</p>
          <div style="font-size: 20px; font-weight: 700; color: #00ffff;">1,089 Games →</div>
        </div>

        <!-- Category 5: Indie -->
        <div class="category-card" style="background: rgba(255, 107, 53, 0.05); border: 2px solid #ff6b35; padding: 2rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='#ffa500'; this.style.boxShadow='0 0 40px rgba(255, 107, 53, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#ff6b35'; this.style.boxShadow='none'">
          <div style="position: absolute; top: -50%; right: -20%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(255, 107, 53, 0.2), transparent); animation: category-glow 3s ease-in-out infinite 2s;"></div>
          <div style="font-size: 56px; margin-bottom: 1rem; position: relative; z-index: 1;">💎</div>
          <h3 style="font-size: 24px; font-weight: 900; color: #ff6b35; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #ff6b35;">INDIE GEMS</h3>
          <p style="color: #fff; font-size: 14px; margin: 0 0 1rem 0; opacity: 0.8;">Unique creative experiences</p>
          <div style="font-size: 20px; font-weight: 700; color: #00ffff;">743 Games →</div>
        </div>

        <!-- Category 6: VR -->
        <div class="category-card" style="background: rgba(57, 255, 20, 0.05); border: 2px solid #39ff14; padding: 2rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.borderColor='#00ff41'; this.style.boxShadow='0 0 40px rgba(57, 255, 20, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#39ff14'; this.style.boxShadow='none'">
          <div style="position: absolute; top: -50%; right: -20%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(57, 255, 20, 0.2), transparent); animation: category-glow 3s ease-in-out infinite 2.5s;"></div>
          <div style="font-size: 56px; margin-bottom: 1rem; position: relative; z-index: 1;">🥽</div>
          <h3 style="font-size: 24px; font-weight: 900; color: #39ff14; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #39ff14;">VR EXPERIENCES</h3>
          <p style="color: #fff; font-size: 14px; margin: 0 0 1rem 0; opacity: 0.8;">Immersive virtual reality</p>
          <div style="font-size: 20px; font-weight: 700; color: #00ffff;">321 Games →</div>
        </div>
      </div>
    </section>

    <!-- Featured Products Grid -->
    <section style="background: rgba(10, 10, 10, 0.5); padding: 4rem 2rem; border-top: 2px solid #00ffff; border-bottom: 2px solid #ff0080;">
      <div style="max-width: 1600px; margin: 0 auto;">

        <!-- Section Header with Filter -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <h2 style="font-size: 32px; font-weight: 900; color: #00ffff; text-shadow: 0 0 15px #00ffff; margin: 0; border-left: 6px solid #00ffff; padding-left: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">// HOT TITLES</h2>

          <!-- Sort/Filter -->
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <select style="padding: 0.75rem 1.5rem; background: rgba(0, 255, 255, 0.1); border: 2px solid #00ffff; color: #00ffff; font-weight: 700; font-size: 14px; cursor: pointer; outline: none; text-transform: uppercase;">
              <option>MOST POPULAR</option>
              <option>BEST RATED</option>
              <option>NEWEST</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
            </select>

            <button style="padding: 0.75rem 1.5rem; background: rgba(157, 78, 221, 0.1); border: 2px solid #9d4edd; color: #9d4edd; font-weight: 700; font-size: 14px; cursor: pointer; transition: all 0.3s; text-transform: uppercase;" onmouseover="this.style.borderColor='#b537f2'; this.style.boxShadow='0 0 20px rgba(157, 78, 221, 0.4)'" onmouseout="this.style.borderColor='#9d4edd'; this.style.boxShadow='none'">
              ⚙️ FILTERS
            </button>
          </div>
        </div>

        <!-- Product Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.5rem;">

          <!-- Product Card 1 -->
          <div class="product-card" style="background: rgba(10, 10, 10, 0.9); border: 2px solid #00ff41; transition: all 0.3s; position: relative; overflow: hidden; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#39ff14'; this.style.boxShadow='0 0 50px rgba(0, 255, 65, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#00ff41'; this.style.boxShadow='none'">

            <!-- Image Area -->
            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); display: flex; align-items: center; justify-content: center; border-bottom: 2px solid #00ff41; overflow: hidden;">
              <div style="font-size: 60px; animation: pulse-glow 2s ease-in-out infinite;">🎮</div>

              <!-- Discount Badge -->
              <div style="position: absolute; top: 0.75rem; left: 0.75rem; background: #ff0080; color: #fff; padding: 0.5rem 1rem; font-weight: 900; font-size: 18px; transform: rotate(-5deg); box-shadow: 0 0 20px #ff0080; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
                -60%
              </div>

              <!-- Platform Icons -->
              <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; display: flex; gap: 0.5rem;">
                <div style="width: 28px; height: 28px; background: rgba(0, 255, 65, 0.2); border: 1px solid #00ff41; display: flex; align-items: center; justify-content: center; font-size: 12px;">🖥️</div>
                <div style="width: 28px; height: 28px; background: rgba(0, 255, 255, 0.2); border: 1px solid #00ffff; display: flex; align-items: center; justify-content: center; font-size: 12px;">🎮</div>
              </div>

              <!-- Wishlist Heart -->
              <button style="position: absolute; top: 0.75rem; right: 0.75rem; width: 38px; height: 38px; background: rgba(157, 78, 221, 0.3); border: 2px solid #9d4edd; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px);" onmouseover="this.style.background='rgba(157, 78, 221, 0.6)'; this.style.transform='scale(1.1)'" onmouseout="this.style.background='rgba(157, 78, 221, 0.3)'; this.style.transform='scale(1)'">
                <span style="font-size: 18px;">💜</span>
              </button>
            </div>

            <!-- Content Area -->
            <div style="padding: 1.5rem;">

              <!-- Tags -->
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span style="padding: 0.25rem 0.5rem; background: rgba(0, 255, 65, 0.2); border: 1px solid #00ff41; color: #00ff41; font-size: 11px; font-weight: 700;">ACTION</span>
                <span style="padding: 0.25rem 0.5rem; background: rgba(0, 255, 255, 0.2); border: 1px solid #00ffff; color: #00ffff; font-size: 11px; font-weight: 700;">ADVENTURE</span>
              </div>

              <!-- Title -->
              <h3 style="font-size: 20px; font-weight: 900; color: #00ff41; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #00ff41; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">NEON RUNNERS 2049</h3>

              <!-- Rating -->
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <div style="display: flex; gap: 0.15rem;">
                  <span style="color: #ff6b35; font-size: 14px;">⭐⭐⭐⭐⭐</span>
                </div>
                <span style="color: #00ffff; font-size: 14px; font-weight: 700;">4.8</span>
                <span style="color: #9d4edd; font-size: 12px;">(1.2K)</span>
              </div>

              <!-- Price -->
              <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
                <span style="font-size: 12px; color: #888; text-decoration: line-through;">$49.99</span>
                <span style="font-size: 28px; font-weight: 900; color: #00ff41; text-shadow: 0 0 15px #00ff41;">$19.99</span>
              </div>

              <!-- Add to Cart Button -->
              <button class="add-cart-btn" style="width: 100%; padding: 0.875rem; background: linear-gradient(135deg, #00ff41, #00ffff); color: #0a0a0a; border: none; font-weight: 900; font-size: 15px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 25px rgba(0, 255, 65, 0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                🛒 ADD TO CART
              </button>
            </div>
          </div>

          <!-- Product Card 2 -->
          <div class="product-card" style="background: rgba(10, 10, 10, 0.9); border: 2px solid #ff0080; transition: all 0.3s; position: relative; overflow: hidden; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#ff1744'; this.style.boxShadow='0 0 50px rgba(255, 0, 128, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#ff0080'; this.style.boxShadow='none'">
            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); display: flex; align-items: center; justify-content: center; border-bottom: 2px solid #ff0080; overflow: hidden;">
              <div style="font-size: 60px; animation: pulse-glow 2s ease-in-out infinite;">⚔️</div>
              <div style="position: absolute; top: 0.75rem; left: 0.75rem; background: #ff6b35; color: #fff; padding: 0.5rem 1rem; font-weight: 900; font-size: 18px; transform: rotate(-5deg); box-shadow: 0 0 20px #ff6b35; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
                -50%
              </div>
              <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; display: flex; gap: 0.5rem;">
                <div style="width: 28px; height: 28px; background: rgba(255, 0, 128, 0.2); border: 1px solid #ff0080; display: flex; align-items: center; justify-content: center; font-size: 12px;">🖥️</div>
              </div>
              <button style="position: absolute; top: 0.75rem; right: 0.75rem; width: 38px; height: 38px; background: rgba(157, 78, 221, 0.3); border: 2px solid #9d4edd; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px);" onmouseover="this.style.background='rgba(157, 78, 221, 0.6)'; this.style.transform='scale(1.1)'" onmouseout="this.style.background='rgba(157, 78, 221, 0.3)'; this.style.transform='scale(1)'">
                <span style="font-size: 18px;">💜</span>
              </button>
            </div>
            <div style="padding: 1.5rem;">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span style="padding: 0.25rem 0.5rem; background: rgba(255, 0, 128, 0.2); border: 1px solid #ff0080; color: #ff0080; font-size: 11px; font-weight: 700;">RPG</span>
                <span style="padding: 0.25rem 0.5rem; background: rgba(157, 78, 221, 0.2); border: 1px solid #9d4edd; color: #9d4edd; font-size: 11px; font-weight: 700;">FANTASY</span>
              </div>
              <h3 style="font-size: 20px; font-weight: 900; color: #ff0080; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #ff0080; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">LEGENDS OF CYBERSPACE</h3>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <div style="display: flex; gap: 0.15rem;">
                  <span style="color: #ff6b35; font-size: 14px;">⭐⭐⭐⭐⭐</span>
                </div>
                <span style="color: #00ffff; font-size: 14px; font-weight: 700;">4.9</span>
                <span style="color: #9d4edd; font-size: 12px;">(3.5K)</span>
              </div>
              <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
                <span style="font-size: 12px; color: #888; text-decoration: line-through;">$59.99</span>
                <span style="font-size: 28px; font-weight: 900; color: #ff0080; text-shadow: 0 0 15px #ff0080;">$29.99</span>
              </div>
              <button class="add-cart-btn" style="width: 100%; padding: 0.875rem; background: linear-gradient(135deg, #ff0080, #9d4edd); color: #fff; border: none; font-weight: 900; font-size: 15px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 25px rgba(255, 0, 128, 0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                🛒 ADD TO CART
              </button>
            </div>
          </div>

          <!-- Product Card 3 -->
          <div class="product-card" style="background: rgba(10, 10, 10, 0.9); border: 2px solid #00ffff; transition: all 0.3s; position: relative; overflow: hidden; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#00d4ff'; this.style.boxShadow='0 0 50px rgba(0, 255, 255, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#00ffff'; this.style.boxShadow='none'">
            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); display: flex; align-items: center; justify-content: center; border-bottom: 2px solid #00ffff; overflow: hidden;">
              <div style="font-size: 60px; animation: pulse-glow 2s ease-in-out infinite;">🏎️</div>
              <div style="position: absolute; top: 0.75rem; left: 0.75rem; background: #00ffff; color: #0a0a0a; padding: 0.5rem 1rem; font-weight: 900; font-size: 18px; transform: rotate(-5deg); box-shadow: 0 0 20px #00ffff; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
                -70%
              </div>
              <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; display: flex; gap: 0.5rem;">
                <div style="width: 28px; height: 28px; background: rgba(0, 255, 255, 0.2); border: 1px solid #00ffff; display: flex; align-items: center; justify-content: center; font-size: 12px;">🖥️</div>
                <div style="width: 28px; height: 28px; background: rgba(157, 78, 221, 0.2); border: 1px solid #9d4edd; display: flex; align-items: center; justify-content: center; font-size: 12px;">🎮</div>
                <div style="width: 28px; height: 28px; background: rgba(0, 255, 65, 0.2); border: 1px solid #00ff41; display: flex; align-items: center; justify-content: center; font-size: 12px;">🥽</div>
              </div>
              <button style="position: absolute; top: 0.75rem; right: 0.75rem; width: 38px; height: 38px; background: rgba(157, 78, 221, 0.3); border: 2px solid #9d4edd; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px);" onmouseover="this.style.background='rgba(157, 78, 221, 0.6)'; this.style.transform='scale(1.1)'" onmouseout="this.style.background='rgba(157, 78, 221, 0.3)'; this.style.transform='scale(1)'">
                <span style="font-size: 18px;">💜</span>
              </button>
            </div>
            <div style="padding: 1.5rem;">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span style="padding: 0.25rem 0.5rem; background: rgba(0, 255, 255, 0.2); border: 1px solid #00ffff; color: #00ffff; font-size: 11px; font-weight: 700;">RACING</span>
                <span style="padding: 0.25rem 0.5rem; background: rgba(255, 107, 53, 0.2); border: 1px solid #ff6b35; color: #ff6b35; font-size: 11px; font-weight: 700;">SIMULATION</span>
              </div>
              <h3 style="font-size: 20px; font-weight: 900; color: #00ffff; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #00ffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">TURBO VELOCITY ZERO</h3>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <div style="display: flex; gap: 0.15rem;">
                  <span style="color: #ff6b35; font-size: 14px;">⭐⭐⭐⭐⭐</span>
                </div>
                <span style="color: #00ffff; font-size: 14px; font-weight: 700;">5.0</span>
                <span style="color: #9d4edd; font-size: 12px;">(987)</span>
              </div>
              <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
                <span style="font-size: 12px; color: #888; text-decoration: line-through;">$39.99</span>
                <span style="font-size: 28px; font-weight: 900; color: #00ffff; text-shadow: 0 0 15px #00ffff;">$11.99</span>
              </div>
              <button class="add-cart-btn" style="width: 100%; padding: 0.875rem; background: linear-gradient(135deg, #00ffff, #9d4edd); color: #0a0a0a; border: none; font-weight: 900; font-size: 15px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 25px rgba(0, 255, 255, 0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                🛒 ADD TO CART
              </button>
            </div>
          </div>

          <!-- Product Card 4 - More Cards... -->
          <div class="product-card" style="background: rgba(10, 10, 10, 0.9); border: 2px solid #9d4edd; transition: all 0.3s; position: relative; overflow: hidden; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#b537f2'; this.style.boxShadow='0 0 50px rgba(157, 78, 221, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#9d4edd'; this.style.boxShadow='none'">
            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); display: flex; align-items: center; justify-content: center; border-bottom: 2px solid #9d4edd; overflow: hidden;">
              <div style="font-size: 60px; animation: pulse-glow 2s ease-in-out infinite;">&#128760;</div>
              <div style="position: absolute; top: 0.75rem; left: 0.75rem; background: #9d4edd; color: #fff; padding: 0.5rem 1rem; font-weight: 900; font-size: 18px; transform: rotate(-5deg); box-shadow: 0 0 20px #9d4edd; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
                -55%
              </div>
              <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; display: flex; gap: 0.5rem;">
                <div style="width: 28px; height: 28px; background: rgba(157, 78, 221, 0.2); border: 1px solid #9d4edd; display: flex; align-items: center; justify-content: center; font-size: 12px;">🖥️</div>
                <div style="width: 28px; height: 28px; background: rgba(0, 255, 65, 0.2); border: 1px solid #00ff41; display: flex; align-items: center; justify-content: center; font-size: 12px;">🥽</div>
              </div>
              <button style="position: absolute; top: 0.75rem; right: 0.75rem; width: 38px; height: 38px; background: rgba(157, 78, 221, 0.3); border: 2px solid #9d4edd; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px);" onmouseover="this.style.background='rgba(157, 78, 221, 0.6)'; this.style.transform='scale(1.1)'" onmouseout="this.style.background='rgba(157, 78, 221, 0.3)'; this.style.transform='scale(1)'">
                <span style="font-size: 18px;">💜</span>
              </button>
            </div>
            <div style="padding: 1.5rem;">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span style="padding: 0.25rem 0.5rem; background: rgba(157, 78, 221, 0.2); border: 1px solid #9d4edd; color: #9d4edd; font-size: 11px; font-weight: 700;">SCI-FI</span>
                <span style="padding: 0.25rem 0.5rem; background: rgba(255, 107, 53, 0.2); border: 1px solid #ff6b35; color: #ff6b35; font-size: 11px; font-weight: 700;">STRATEGY</span>
              </div>
              <h3 style="font-size: 20px; font-weight: 900; color: #9d4edd; margin: 0 0 0.75rem 0; text-shadow: 0 0 10px #9d4edd; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">GALACTIC CONQUEST</h3>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <div style="display: flex; gap: 0.15rem;">
                  <span style="color: #ff6b35; font-size: 14px;">⭐⭐⭐⭐⭐</span>
                </div>
                <span style="color: #00ffff; font-size: 14px; font-weight: 700;">4.7</span>
                <span style="color: #9d4edd; font-size: 12px;">(2.1K)</span>
              </div>
              <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
                <span style="font-size: 12px; color: #888; text-decoration: line-through;">$44.99</span>
                <span style="font-size: 28px; font-weight: 900; color: #9d4edd; text-shadow: 0 0 15px #9d4edd;">$19.99</span>
              </div>
              <button class="add-cart-btn" style="width: 100%; padding: 0.875rem; background: linear-gradient(135deg, #9d4edd, #ff0080); color: #fff; border: none; font-weight: 900; font-size: 15px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 25px rgba(157, 78, 221, 0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                🛒 ADD TO CART
              </button>
            </div>
          </div>

        </div>

        <!-- Load More Button -->
        <div style="text-align: center; margin-top: 3rem;">
          <button style="padding: 1.25rem 4rem; background: transparent; color: #00ff41; border: 3px solid #00ff41; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 0 0 30px rgba(0, 255, 65, 0.3); transition: all 0.3s; text-transform: uppercase; letter-spacing: 2px; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);" onmouseover="this.style.background='rgba(0, 255, 65, 0.2)'; this.style.boxShadow='0 0 40px rgba(0, 255, 65, 0.5)'" onmouseout="this.style.background='transparent'; this.style.boxShadow='0 0 30px rgba(0, 255, 65, 0.3)'">
            ⚡ LOAD MORE GAMES
          </button>
        </div>
      </div>
    </section>

    <!-- User Reviews Section -->
    <section style="max-width: 1600px; margin: 0 auto; padding: 4rem 2rem;">
      <h2 style="font-size: 32px; font-weight: 900; color: #ff0080; text-shadow: 0 0 15px #ff0080; margin-bottom: 2.5rem; border-left: 6px solid #ff0080; padding-left: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">// USER REVIEWS</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">

        <!-- Review Card 1 -->
        <div style="background: rgba(0, 255, 65, 0.05); border: 2px solid #00ff41; padding: 2rem; transition: all 0.3s; clip-path: polygon(0 0, 100% 0, 100% 95%, 98% 100%, 0 100%);" onmouseover="this.style.borderColor='#39ff14'; this.style.boxShadow='0 0 30px rgba(0, 255, 65, 0.3)'" onmouseout="this.style.borderColor='#00ff41'; this.style.boxShadow='none'">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #00ff41, #00ffff); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 24px; color: #0a0a0a; box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);">
              CX
            </div>
            <div style="flex: 1;">
              <h4 style="font-size: 18px; font-weight: 900; color: #00ff41; margin: 0; text-shadow: 0 0 10px #00ff41;">CyberX_89</h4>
              <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem;">
                <span style="color: #ff6b35; font-size: 16px;">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div style="font-size: 12px; color: #00ffff;">2 days ago</div>
          </div>

          <p style="color: #fff; font-size: 15px; line-height: 1.7; margin: 0 0 1.5rem 0; opacity: 0.9;">
            "Amazing deals! Got 5 AAA titles for less than $50. The VR support is incredible and the community is super active. Highly recommended for any gamer!"
          </p>

          <div style="display: flex; gap: 1rem; align-items: center;">
            <button style="padding: 0.5rem 1.25rem; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; color: #00ff41; font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(0, 255, 65, 0.2)'" onmouseout="this.style.background='rgba(0, 255, 65, 0.1)'">
              👍 1.2K
            </button>
            <button style="padding: 0.5rem 1.25rem; background: rgba(255, 0, 128, 0.1); border: 1px solid #ff0080; color: #ff0080; font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(255, 0, 128, 0.2)'" onmouseout="this.style.background='rgba(255, 0, 128, 0.1)'">
              💬 Reply
            </button>
          </div>
        </div>

        <!-- Review Card 2 -->
        <div style="background: rgba(255, 0, 128, 0.05); border: 2px solid #ff0080; padding: 2rem; transition: all 0.3s; clip-path: polygon(0 0, 100% 0, 100% 95%, 98% 100%, 0 100%);" onmouseover="this.style.borderColor='#ff1744'; this.style.boxShadow='0 0 30px rgba(255, 0, 128, 0.3)'" onmouseout="this.style.borderColor='#ff0080'; this.style.boxShadow='none'">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ff0080, #9d4edd); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 24px; color: #fff; box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);">
              NV
            </div>
            <div style="flex: 1;">
              <h4 style="font-size: 18px; font-weight: 900; color: #ff0080; margin: 0; text-shadow: 0 0 10px #ff0080;">NeonViper</h4>
              <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem;">
                <span style="color: #ff6b35; font-size: 16px;">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div style="font-size: 12px; color: #00ffff;">1 week ago</div>
          </div>

          <p style="color: #fff; font-size: 15px; line-height: 1.7; margin: 0 0 1.5rem 0; opacity: 0.9;">
            "Best gaming store in the metaverse! Lightning-fast downloads and the cyberpunk UI is chef's kiss. My wishlist is already 50 games deep 😅"
          </p>

          <div style="display: flex; gap: 1rem; align-items: center;">
            <button style="padding: 0.5rem 1.25rem; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; color: #00ff41; font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(0, 255, 65, 0.2)'" onmouseout="this.style.background='rgba(0, 255, 65, 0.1)'">
              👍 856
            </button>
            <button style="padding: 0.5rem 1.25rem; background: rgba(255, 0, 128, 0.1); border: 1px solid #ff0080; color: #ff0080; font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(255, 0, 128, 0.2)'" onmouseout="this.style.background='rgba(255, 0, 128, 0.1)'">
              💬 Reply
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- Price Comparison Table -->
    <section style="background: rgba(10, 10, 10, 0.5); padding: 4rem 2rem; border-top: 2px solid #9d4edd; border-bottom: 2px solid #00ffff;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <h2 style="font-size: 32px; font-weight: 900; color: #9d4edd; text-shadow: 0 0 15px #9d4edd; margin-bottom: 2.5rem; border-left: 6px solid #9d4edd; padding-left: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">// MEMBERSHIP TIERS</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem;">

          <!-- Basic Tier -->
          <div style="background: rgba(0, 255, 65, 0.05); border: 2px solid #00ff41; padding: 2.5rem; transition: all 0.3s; position: relative; clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 0 40px rgba(0, 255, 65, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <h3 style="font-size: 28px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41; margin: 0 0 1rem 0;">BASIC</h3>
            <div style="margin-bottom: 2rem;">
              <div style="font-size: 48px; font-weight: 900; color: #00ff41; text-shadow: 0 0 15px #00ff41;">FREE</div>
              <div style="color: #00ffff; font-size: 14px;">Forever free access</div>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0;">
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(0, 255, 65, 0.2); color: #fff; font-size: 15px;">✓ Access to free games</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(0, 255, 65, 0.2); color: #fff; font-size: 15px;">✓ Community forums</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(0, 255, 65, 0.2); color: #fff; font-size: 15px;">✓ Cloud saves</li>
              <li style="padding: 0.75rem 0; color: #666; font-size: 15px;">✗ Exclusive discounts</li>
              <li style="padding: 0.75rem 0; color: #666; font-size: 15px;">✗ Early access</li>
            </ul>
            <button style="width: 100%; padding: 1rem; background: transparent; color: #00ff41; border: 2px solid #00ff41; font-weight: 900; font-size: 16px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.background='rgba(0, 255, 65, 0.2)'; this.style.boxShadow='0 0 20px rgba(0, 255, 65, 0.4)'" onmouseout="this.style.background='transparent'; this.style.boxShadow='none'">
              GET STARTED
            </button>
          </div>

          <!-- Pro Tier -->
          <div style="background: rgba(255, 0, 128, 0.08); border: 3px solid #ff0080; padding: 2.5rem; transition: all 0.3s; position: relative; transform: scale(1.05); clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);" onmouseover="this.style.transform='scale(1.08) translateY(-8px)'; this.style.boxShadow='0 0 50px rgba(255, 0, 128, 0.5)'" onmouseout="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 30px rgba(255, 0, 128, 0.3)'">
            <!-- Best Value Badge -->
            <div style="position: absolute; top: -12px; right: 20px; background: #ff0080; color: #fff; padding: 0.5rem 1.5rem; font-weight: 900; font-size: 12px; transform: rotate(3deg); box-shadow: 0 0 20px #ff0080; animation: neon-flicker 3s infinite; text-transform: uppercase; letter-spacing: 1px; clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);">
              ⭐ BEST VALUE
            </div>
            <h3 style="font-size: 28px; font-weight: 900; color: #ff0080; text-shadow: 0 0 10px #ff0080; margin: 0 0 1rem 0;">PRO</h3>
            <div style="margin-bottom: 2rem;">
              <div style="font-size: 48px; font-weight: 900; color: #ff0080; text-shadow: 0 0 15px #ff0080;">$9.99</div>
              <div style="color: #00ffff; font-size: 14px;">per month</div>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0;">
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255, 0, 128, 0.2); color: #fff; font-size: 15px;">✓ All Basic features</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255, 0, 128, 0.2); color: #fff; font-size: 15px;">✓ 20% exclusive discounts</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255, 0, 128, 0.2); color: #fff; font-size: 15px;">✓ Early access to games</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255, 0, 128, 0.2); color: #fff; font-size: 15px;">✓ Monthly free game</li>
              <li style="padding: 0.75rem 0; color: #fff; font-size: 15px;">✓ Priority support</li>
            </ul>
            <button style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #ff0080, #9d4edd); color: #fff; border: none; font-weight: 900; font-size: 16px; cursor: pointer; box-shadow: 0 0 25px rgba(255, 0, 128, 0.5); transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 35px rgba(255, 0, 128, 0.7)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 25px rgba(255, 0, 128, 0.5)'">
              ⚡ UPGRADE NOW
            </button>
          </div>

          <!-- Elite Tier -->
          <div style="background: rgba(157, 78, 221, 0.05); border: 2px solid #9d4edd; padding: 2.5rem; transition: all 0.3s; position: relative; clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 0 40px rgba(157, 78, 221, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <h3 style="font-size: 28px; font-weight: 900; color: #9d4edd; text-shadow: 0 0 10px #9d4edd; margin: 0 0 1rem 0;">ELITE</h3>
            <div style="margin-bottom: 2rem;">
              <div style="font-size: 48px; font-weight: 900; color: #9d4edd; text-shadow: 0 0 15px #9d4edd;">$19.99</div>
              <div style="color: #00ffff; font-size: 14px;">per month</div>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0;">
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(157, 78, 221, 0.2); color: #fff; font-size: 15px;">✓ All Pro features</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(157, 78, 221, 0.2); color: #fff; font-size: 15px;">✓ 30% exclusive discounts</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(157, 78, 221, 0.2); color: #fff; font-size: 15px;">✓ 3 free games monthly</li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(157, 78, 221, 0.2); color: #fff; font-size: 15px;">✓ Exclusive cosmetics</li>
              <li style="padding: 0.75rem 0; color: #fff; font-size: 15px;">✓ VIP support 24/7</li>
            </ul>
            <button style="width: 100%; padding: 1rem; background: transparent; color: #9d4edd; border: 2px solid #9d4edd; font-weight: 900; font-size: 16px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.background='rgba(157, 78, 221, 0.2)'; this.style.boxShadow='0 0 20px rgba(157, 78, 221, 0.4)'" onmouseout="this.style.background='transparent'; this.style.boxShadow='none'">
              GO ELITE
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Statistics Dashboard -->
    <section style="max-width: 1600px; margin: 0 auto; padding: 4rem 2rem;">
      <h2 style="font-size: 32px; font-weight: 900; color: #00ffff; text-shadow: 0 0 15px #00ffff; margin-bottom: 2.5rem; border-left: 6px solid #00ffff; padding-left: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">// PLATFORM STATS</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">

        <!-- Stat 1 -->
        <div style="background: rgba(0, 255, 65, 0.05); border: 2px solid #00ff41; padding: 2rem; text-align: center; transition: all 0.3s; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);" onmouseover="this.style.borderColor='#39ff14'; this.style.boxShadow='0 0 30px rgba(0, 255, 65, 0.3)'" onmouseout="this.style.borderColor='#00ff41'; this.style.boxShadow='none'">
          <div style="font-size: 56px; margin-bottom: 0.5rem;">📊</div>
          <div class="counter" style="font-size: 48px; font-weight: 900; color: #00ff41; text-shadow: 0 0 20px #00ff41; margin-bottom: 0.5rem;">15.8M</div>
          <div style="color: #00ffff; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Total Users</div>
        </div>

        <!-- Stat 2 -->
        <div style="background: rgba(255, 0, 128, 0.05); border: 2px solid #ff0080; padding: 2rem; text-align: center; transition: all 0.3s; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);" onmouseover="this.style.borderColor='#ff1744'; this.style.boxShadow='0 0 30px rgba(255, 0, 128, 0.3)'" onmouseout="this.style.borderColor='#ff0080'; this.style.boxShadow='none'">
          <div style="font-size: 56px; margin-bottom: 0.5rem;">🎮</div>
          <div class="counter" style="font-size: 48px; font-weight: 900; color: #ff0080; text-shadow: 0 0 20px #ff0080; margin-bottom: 0.5rem;">5,247</div>
          <div style="color: #00ffff; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Games Available</div>
        </div>

        <!-- Stat 3 -->
        <div style="background: rgba(0, 255, 255, 0.05); border: 2px solid #00ffff; padding: 2rem; text-align: center; transition: all 0.3s; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);" onmouseover="this.style.borderColor='#00d4ff'; this.style.boxShadow='0 0 30px rgba(0, 255, 255, 0.3)'" onmouseout="this.style.borderColor='#00ffff'; this.style.boxShadow='none'">
          <div style="font-size: 56px; margin-bottom: 0.5rem;">⭐</div>
          <div class="counter" style="font-size: 48px; font-weight: 900; color: #00ffff; text-shadow: 0 0 20px #00ffff; margin-bottom: 0.5rem;">2.3M</div>
          <div style="color: #00ffff; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Total Reviews</div>
        </div>

        <!-- Stat 4 -->
        <div style="background: rgba(157, 78, 221, 0.05); border: 2px solid #9d4edd; padding: 2rem; text-align: center; transition: all 0.3s; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);" onmouseover="this.style.borderColor='#b537f2'; this.style.boxShadow='0 0 30px rgba(157, 78, 221, 0.3)'" onmouseout="this.style.borderColor='#9d4edd'; this.style.boxShadow='none'">
          <div style="font-size: 56px; margin-bottom: 0.5rem;">👥</div>
          <div class="counter" style="font-size: 48px; font-weight: 900; color: #9d4edd; text-shadow: 0 0 20px #9d4edd; margin-bottom: 0.5rem;">847K</div>
          <div style="color: #00ffff; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Online Now</div>
        </div>

      </div>
    </section>

    <!-- Footer -->
    <footer style="background: rgba(10, 10, 10, 0.95); border-top: 2px solid #00ff41; padding: 3rem 2rem 2rem 2rem; margin-top: 4rem;">
      <div style="max-width: 1600px; margin: 0 auto;">

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">

          <!-- Column 1 -->
          <div>
            <h4 style="font-size: 18px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41; margin: 0 0 1.5rem 0; text-transform: uppercase; letter-spacing: 2px;">// ABOUT</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.75rem;"><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">About Us</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">Careers</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">Press</a></li>
              <li><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">Blog</a></li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h4 style="font-size: 18px; font-weight: 900; color: #ff0080; text-shadow: 0 0 10px #ff0080; margin: 0 0 1.5rem 0; text-transform: uppercase; letter-spacing: 2px;">// SUPPORT</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.75rem;"><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#ff0080'; this.style.textShadow='0 0 10px #ff0080'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">Help Center</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#ff0080'; this.style.textShadow='0 0 10px #ff0080'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">FAQ</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#ff0080'; this.style.textShadow='0 0 10px #ff0080'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">Contact Us</a></li>
              <li><a href="javascript:void(0)" style="color: #00ffff; text-decoration: none; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.color='#ff0080'; this.style.textShadow='0 0 10px #ff0080'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">Refunds</a></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h4 style="font-size: 18px; font-weight: 900; color: #9d4edd; text-shadow: 0 0 10px #9d4edd; margin: 0 0 1.5rem 0; text-transform: uppercase; letter-spacing: 2px;">// SOCIAL</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="javascript:void(0)" style="width: 44px; height: 44px; background: rgba(0, 255, 65, 0.1); border: 2px solid #00ff41; display: flex; align-items: center; justify-content: center; font-size: 20px; transition: all 0.3s; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.background='rgba(0, 255, 65, 0.3)'; this.style.boxShadow='0 0 20px rgba(0, 255, 65, 0.5)'" onmouseout="this.style.background='rgba(0, 255, 65, 0.1)'; this.style.boxShadow='none'">
                🐦
              </a>
              <a href="javascript:void(0)" style="width: 44px; height: 44px; background: rgba(255, 0, 128, 0.1); border: 2px solid #ff0080; display: flex; align-items: center; justify-content: center; font-size: 20px; transition: all 0.3s; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.background='rgba(255, 0, 128, 0.3)'; this.style.boxShadow='0 0 20px rgba(255, 0, 128, 0.5)'" onmouseout="this.style.background='rgba(255, 0, 128, 0.1)'; this.style.boxShadow='none'">
                📷
              </a>
              <a href="javascript:void(0)" style="width: 44px; height: 44px; background: rgba(0, 255, 255, 0.1); border: 2px solid #00ffff; display: flex; align-items: center; justify-content: center; font-size: 20px; transition: all 0.3s; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.background='rgba(0, 255, 255, 0.3)'; this.style.boxShadow='0 0 20px rgba(0, 255, 255, 0.5)'" onmouseout="this.style.background='rgba(0, 255, 255, 0.1)'; this.style.boxShadow='none'">
                💬
              </a>
              <a href="javascript:void(0)" style="width: 44px; height: 44px; background: rgba(157, 78, 221, 0.1); border: 2px solid #9d4edd; display: flex; align-items: center; justify-content: center; font-size: 20px; transition: all 0.3s; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);" onmouseover="this.style.background='rgba(157, 78, 221, 0.3)'; this.style.boxShadow='0 0 20px rgba(157, 78, 221, 0.5)'" onmouseout="this.style.background='rgba(157, 78, 221, 0.1)'; this.style.boxShadow='none'">
                📺
              </a>
            </div>
          </div>

          <!-- Column 4 - Payment Methods -->
          <div>
            <h4 style="font-size: 18px; font-weight: 900; color: #00ffff; text-shadow: 0 0 10px #00ffff; margin: 0 0 1.5rem 0; text-transform: uppercase; letter-spacing: 2px;">// PAYMENT</h4>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <div style="padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; font-size: 12px; font-weight: 700;">💳 VISA</div>
              <div style="padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; font-size: 12px; font-weight: 700;">💳 MASTERCARD</div>
              <div style="padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; font-size: 12px; font-weight: 700;">💰 PAYPAL</div>
              <div style="padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; font-size: 12px; font-weight: 700;">₿ CRYPTO</div>
            </div>
          </div>

        </div>

        <!-- Copyright -->
        <div style="border-top: 1px solid rgba(0, 255, 65, 0.2); padding-top: 2rem; text-align: center;">
          <p style="color: #00ff41; font-size: 14px; margin: 0; text-shadow: 0 0 5px #00ff41;">© 2077 NEON_GAMES - ALL RIGHTS RESERVED // POWERED BY THE METAVERSE</p>
          <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; flex-wrap: wrap;">
            <a href="javascript:void(0)" style="color: #00ffff; font-size: 12px; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">PRIVACY POLICY</a>
            <a href="javascript:void(0)" style="color: #00ffff; font-size: 12px; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">TERMS OF SERVICE</a>
            <a href="javascript:void(0)" style="color: #00ffff; font-size: 12px; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.color='#00ff41'; this.style.textShadow='0 0 10px #00ff41'" onmouseout="this.style.color='#00ffff'; this.style.textShadow='none'">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>

  </div>

  <!-- Floating Action Button -->
  <button style="position: fixed; bottom: 2.5rem; right: 2.5rem; width: 65px; height: 65px; background: linear-gradient(135deg, #00ff41, #00ffff); color: #0a0a0a; border: 3px solid #ff0080; border-radius: 50%; font-size: 28px; cursor: pointer; box-shadow: 0 0 40px rgba(0, 255, 65, 0.6); z-index: 1000; transition: all 0.3s; animation: fab-pulse 2s ease-in-out infinite;" onmouseover="this.style.transform='scale(1.15) rotate(10deg)'; this.style.boxShadow='0 0 60px rgba(0, 255, 65, 0.8)'" onmouseout="this.style.transform='scale(1) rotate(0deg)'; this.style.boxShadow='0 0 40px rgba(0, 255, 65, 0.6)'">
    ⚡
  </button>

  <!-- Toast Notification (Hidden by default) -->
  <div style="position: fixed; top: 2rem; right: 2rem; background: rgba(0, 255, 65, 0.95); border: 2px solid #00ff41; padding: 1.25rem 2rem; color: #0a0a0a; font-weight: 900; font-size: 15px; box-shadow: 0 0 40px rgba(0, 255, 65, 0.6); z-index: 1001; display: none; animation: slide-in-right 0.5s ease-out; clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);">
    ✅ Added to cart successfully!
  </div>

</div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色深黑 (#0A0A0A)、霓虹绿色 (#00FF41)、霓虹青色 (#00FFFF)、霓虹粉色 (#FF1493)、霓虹黄色 (#FFFF00)、半透明霓虹效果 (rgba(0,255,65,0.2-0.8))
`;

// CSS Animations and Styles
export const cyberpunkGamingStoreStyles = `
/* Core Animations */
@keyframes cyber-scan {
  0% { background-position: 0 0; }
  100% { background-position: 0 100vh; }
}

@keyframes cyber-flow {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(200vh); opacity: 0; }
}

@keyframes cyber-logo-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

@keyframes cyber-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes cyber-glitch-text {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(-3px, 2px); }
  94% { transform: translate(3px, -2px); }
  96% { transform: translate(-2px, -3px); }
  98% { transform: translate(2px, 3px); }
}

@keyframes cart-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

@keyframes neon-flicker {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
  }
}

@keyframes float-particle {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-40px) translateX(-10px); }
  75% { transform: translateY(-20px) translateX(5px); }
}

@keyframes text-glitch {
  0%, 100% { transform: translate(0); opacity: 1; }
  20% { transform: translate(-4px, 2px); opacity: 0.8; }
  40% { transform: translate(-4px, -2px); opacity: 0.9; }
  60% { transform: translate(4px, 2px); opacity: 0.8; }
  80% { transform: translate(4px, -2px); opacity: 0.9; }
}

@keyframes counter-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes hologram-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes hologram-scan {
  0% { transform: translateY(-100%); opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { transform: translateY(100%); opacity: 0.3; }
}

@keyframes badge-rotate {
  0%, 100% { transform: rotate(5deg) scale(1); }
  50% { transform: rotate(-5deg) scale(1.05); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@keyframes category-glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes fab-pulse {
  0%, 100% { box-shadow: 0 0 40px rgba(0, 255, 65, 0.6); }
  50% { box-shadow: 0 0 60px rgba(0, 255, 65, 0.9); }
}

@keyframes slide-in-right {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/* RGB Split Effect (for hover) */
.rgb-split-btn:hover {
  animation: rgb-split-effect 0.3s ease-in-out;
}

@keyframes rgb-split-effect {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-2px, 0); text-shadow: 2px 0 #ff0080, -2px 0 #00ffff; }
  50% { transform: translate(2px, 0); text-shadow: -2px 0 #00ff41, 2px 0 #9d4edd; }
  75% { transform: translate(0, -2px); text-shadow: 0 2px #00ffff, 0 -2px #ff0080; }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .cyber-gaming-store {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .cyber-gaming-store nav > div > div:first-child {
    flex-direction: column;
    gap: 1rem;
  }

  .cyber-gaming-store h1 {
    font-size: 36px !important;
  }

  .cyber-gaming-store h2 {
    font-size: 24px !important;
  }

  .flip-counter {
    font-size: 32px !important;
    padding: 0.75rem 1rem !important;
    min-width: 60px !important;
  }

  .category-card {
    padding: 1.5rem !important;
  }

  .product-card {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .cyber-gaming-store nav {
    padding: 0.75rem 1rem !important;
  }

  .cyber-gaming-store section {
    padding: 2rem 1rem !important;
  }

  .flip-counter {
    font-size: 24px !important;
    padding: 0.5rem 0.75rem !important;
    min-width: 50px !important;
  }
}

/* Print Styles */
@media print {
  .cyber-gaming-store nav,
  .cyber-gaming-store footer,
  .cyber-gaming-store button {
    display: none;
  }
}
`;
