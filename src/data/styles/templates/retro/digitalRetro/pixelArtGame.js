// Pixel Art - Digital Retro Gaming
// 像素藝術 - 数位復古遊戲

export const pixelArtGame = {
    id: 'pixelArt',
    title: 'styles.retro.pixelArt.title',
    description: 'styles.retro.pixelArt.description',
    demoHTML: `
      <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-6 bg-gray-900">
        <div class="pixel-container bg-black p-6 rounded-none border-4 border-green-500" style="image-rendering: pixelated;">
          <div class="flex gap-2 mb-4 justify-center">
            <div class="w-4 h-4 bg-red-500"></div>
            <div class="w-4 h-4 bg-yellow-500"></div>
            <div class="w-4 h-4 bg-green-500"></div>
            <div class="w-4 h-4 bg-blue-500"></div>
          </div>
          <div class="text-center mb-4" style="font-family: 'Courier New', monospace;">
            <span class="text-2xl font-bold text-green-400">◢ PIXEL ◣</span>
          </div>
          <div class="flex gap-1 justify-center">
            <div class="pixel-heart"></div>
            <div class="pixel-heart"></div>
            <div class="pixel-heart"></div>
          </div>
        </div>
        <button class="pixel-button px-6 py-3 bg-purple-600 text-white font-bold border-4 border-purple-800 hover:bg-purple-700 transition-colors" style="font-family: 'Courier New', monospace; image-rendering: pixelated;">
          START GAME
        </button>
      </div>
    `,
    customStyles: `
      .pixel-heart {
        width: 24px;
        height: 24px;
        background: #ff0066;
        position: relative;
        transform: rotate(45deg);
        animation: pixel-beat 1s infinite;
      }

      .pixel-heart::before,
      .pixel-heart::after {
        content: '';
        width: 24px;
        height: 24px;
        background: #ff0066;
        position: absolute;
      }

      .pixel-heart::before {
        left: -12px;
      }

      .pixel-heart::after {
        top: -12px;
      }

      @keyframes pixel-beat {
        0%, 100% { transform: rotate(45deg) scale(1); }
        50% { transform: rotate(45deg) scale(1.1); }
      }

      .pixel-button {
        box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
        image-rendering: pixelated;
      }

      .pixel-button:active {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 rgba(0,0,0,0.5);
      }
    `,
    demoBoxClass: 'bg-gray-900',
    fullPageHTML: `
<!-- PIXEL ART / 8-BIT GAME BOY STYLE HOME PAGE -->
<div class="pixel-game-container">
  <!-- HERO SECTION - Title Screen -->
  <section class="pixel-hero">
    <div class="pixel-screen-border">
      <div class="pixel-logo-wrapper">
        <div class="pixel-logo">RETRO QUEST</div>
        <div class="pixel-subtitle">ADVENTURE AWAITS</div>
      </div>

      <!-- Animated Pixel Character -->
      <div class="pixel-character-wrapper">
        <div class="pixel-character walking"></div>
      </div>

      <!-- Start Menu -->
      <div class="pixel-menu">
        <button class="pixel-menu-btn active" onclick="void(0)">
          <span class="pixel-arrow">▶</span> NEW GAME
        </button>
        <button class="pixel-menu-btn" onclick="void(0)">
          <span class="pixel-arrow invisible">▶</span> CONTINUE
        </button>
        <button class="pixel-menu-btn" onclick="void(0)">
          <span class="pixel-arrow invisible">▶</span> OPTIONS
        </button>
      </div>

      <!-- Press Start Blinking Text -->
      <div class="pixel-press-start">PRESS START</div>
    </div>
  </section>

  <!-- STATS BAR -->
  <section class="pixel-stats-bar">
    <div class="pixel-stat">
      <div class="pixel-stat-label">LEVEL</div>
      <div class="pixel-stat-value">42</div>
    </div>
    <div class="pixel-stat">
      <div class="pixel-stat-label">HP</div>
      <div class="pixel-health-bar">
        <div class="pixel-health-fill" style="width: 75%"></div>
      </div>
    </div>
    <div class="pixel-stat">
      <div class="pixel-stat-label">SCORE</div>
      <div class="pixel-stat-value">99999</div>
    </div>
    <div class="pixel-stat">
      <div class="pixel-stat-label">COINS</div>
      <div class="pixel-stat-value pixel-coin-animation">★ 247</div>
    </div>
  </section>

  <!-- LEVEL SELECT GRID -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      STAGE SELECT
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-level-grid">
      <div class="pixel-level-card unlocked">
        <div class="pixel-level-icon">🏰</div>
        <div class="pixel-level-name">CASTLE</div>
        <div class="pixel-level-stars">★★★</div>
      </div>
      <div class="pixel-level-card unlocked">
        <div class="pixel-level-icon">🌲</div>
        <div class="pixel-level-name">FOREST</div>
        <div class="pixel-level-stars">★★☆</div>
      </div>
      <div class="pixel-level-card unlocked">
        <div class="pixel-level-icon">🏔️</div>
        <div class="pixel-level-name">MOUNTAIN</div>
        <div class="pixel-level-stars">★☆☆</div>
      </div>
      <div class="pixel-level-card locked">
        <div class="pixel-level-icon">🔒</div>
        <div class="pixel-level-name">LOCKED</div>
        <div class="pixel-level-stars">☆☆☆</div>
      </div>
      <div class="pixel-level-card locked">
        <div class="pixel-level-icon">🔒</div>
        <div class="pixel-level-name">LOCKED</div>
        <div class="pixel-level-stars">☆☆☆</div>
      </div>
      <div class="pixel-level-card locked">
        <div class="pixel-level-icon">🔒</div>
        <div class="pixel-level-name">LOCKED</div>
        <div class="pixel-level-stars">☆☆☆</div>
      </div>
    </div>
  </section>

  <!-- DIALOGUE BOX SYSTEM -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      QUEST LOG
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-dialogue-box">
      <div class="pixel-dialogue-avatar">👾</div>
      <div class="pixel-dialogue-content">
        <div class="pixel-dialogue-name">QUEST MASTER</div>
        <div class="pixel-dialogue-text">
          Welcome, brave adventurer! Your mission is to collect all the ancient crystals
          hidden throughout the realm. Beware of the monsters lurking in the shadows...
        </div>
        <div class="pixel-dialogue-footer">
          <div class="pixel-dialogue-arrow">▼</div>
        </div>
      </div>
    </div>
  </section>

  <!-- LEADERBOARD / HIGH SCORES -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      HIGH SCORES
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-leaderboard">
      <div class="pixel-leaderboard-header">
        <div>RANK</div>
        <div>PLAYER</div>
        <div>SCORE</div>
      </div>
      <div class="pixel-leaderboard-row gold">
        <div class="pixel-rank">🥇 1ST</div>
        <div class="pixel-player">HERO_001</div>
        <div class="pixel-score">999,999</div>
      </div>
      <div class="pixel-leaderboard-row silver">
        <div class="pixel-rank">🥈 2ND</div>
        <div class="pixel-player">MAGE_88</div>
        <div class="pixel-score">888,888</div>
      </div>
      <div class="pixel-leaderboard-row bronze">
        <div class="pixel-rank">🥉 3RD</div>
        <div class="pixel-player">KNIGHT</div>
        <div class="pixel-score">777,777</div>
      </div>
      <div class="pixel-leaderboard-row">
        <div class="pixel-rank">4TH</div>
        <div class="pixel-player">ROGUE_X</div>
        <div class="pixel-score">666,666</div>
      </div>
      <div class="pixel-leaderboard-row">
        <div class="pixel-rank">5TH</div>
        <div class="pixel-player">WIZARD</div>
        <div class="pixel-score">555,555</div>
      </div>
    </div>
  </section>

  <!-- ACHIEVEMENTS / BADGES -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      ACHIEVEMENTS
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-achievements">
      <div class="pixel-badge unlocked-badge">
        <div class="pixel-badge-icon">🏆</div>
        <div class="pixel-badge-name">FIRST VICTORY</div>
      </div>
      <div class="pixel-badge unlocked-badge">
        <div class="pixel-badge-icon">⚔️</div>
        <div class="pixel-badge-name">WARRIOR</div>
      </div>
      <div class="pixel-badge unlocked-badge">
        <div class="pixel-badge-icon">💎</div>
        <div class="pixel-badge-name">COLLECTOR</div>
      </div>
      <div class="pixel-badge locked-badge">
        <div class="pixel-badge-icon">🔒</div>
        <div class="pixel-badge-name">???</div>
      </div>
      <div class="pixel-badge locked-badge">
        <div class="pixel-badge-icon">🔒</div>
        <div class="pixel-badge-name">???</div>
      </div>
      <div class="pixel-badge locked-badge">
        <div class="pixel-badge-icon">🔒</div>
        <div class="pixel-badge-name">???</div>
      </div>
    </div>
  </section>

  <!-- SOUND TEST / 8-BIT BUTTONS -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      SOUND TEST
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-sound-grid">
      <button class="pixel-sound-btn" onclick="void(0)">
        <span class="pixel-sound-wave">♪</span>
        BGM-01
      </button>
      <button class="pixel-sound-btn" onclick="void(0)">
        <span class="pixel-sound-wave">♪</span>
        JUMP
      </button>
      <button class="pixel-sound-btn" onclick="void(0)">
        <span class="pixel-sound-wave">♪</span>
        ATTACK
      </button>
      <button class="pixel-sound-btn" onclick="void(0)">
        <span class="pixel-sound-wave">♪</span>
        COIN
      </button>
      <button class="pixel-sound-btn" onclick="void(0)">
        <span class="pixel-sound-wave">♪</span>
        VICTORY
      </button>
      <button class="pixel-sound-btn" onclick="void(0)">
        <span class="pixel-sound-wave">♪</span>
        GAME OVER
      </button>
    </div>
  </section>

  <!-- INVENTORY / ITEMS -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      INVENTORY
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-inventory">
      <div class="pixel-item-slot has-item">
        <div class="pixel-item-icon">⚔️</div>
        <div class="pixel-item-count">x1</div>
      </div>
      <div class="pixel-item-slot has-item">
        <div class="pixel-item-icon">🛡️</div>
        <div class="pixel-item-count">x1</div>
      </div>
      <div class="pixel-item-slot has-item">
        <div class="pixel-item-icon">🧪</div>
        <div class="pixel-item-count">x5</div>
      </div>
      <div class="pixel-item-slot has-item">
        <div class="pixel-item-icon">🔑</div>
        <div class="pixel-item-count">x3</div>
      </div>
      <div class="pixel-item-slot empty"></div>
      <div class="pixel-item-slot empty"></div>
      <div class="pixel-item-slot empty"></div>
      <div class="pixel-item-slot empty"></div>
    </div>
  </section>

  <!-- PIXEL FONT SHOWCASE -->
  <section class="pixel-section">
    <h2 class="pixel-section-title">
      <span class="pixel-title-decoration">═══</span>
      TYPOGRAPHY
      <span class="pixel-title-decoration">═══</span>
    </h2>

    <div class="pixel-typography">
      <div class="pixel-font-sample large">PIXEL ART</div>
      <div class="pixel-font-sample medium">GAME BOY CLASSIC</div>
      <div class="pixel-font-sample small">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      <div class="pixel-font-sample small">abcdefghijklmnopqrstuvwxyz</div>
      <div class="pixel-font-sample small">0123456789 !@#$%^&*()</div>
    </div>
  </section>

  <!-- FOOTER / CREDITS -->
  <footer class="pixel-footer">
    <div class="pixel-footer-content">
      <div class="pixel-footer-logo">
        <div class="pixel-gameboy-icon">🎮</div>
        <div>RETRO QUEST © 2025</div>
      </div>
      <div class="pixel-footer-links">
        <a href="javascript:void(0)" class="pixel-link">ABOUT</a>
        <span class="pixel-separator">•</span>
        <a href="javascript:void(0)" class="pixel-link">HELP</a>
        <span class="pixel-separator">•</span>
        <a href="javascript:void(0)" class="pixel-link">CONTACT</a>
      </div>
      <div class="pixel-footer-note">
        MADE WITH ❤️ IN PIXEL STYLE
      </div>
    </div>
  </footer>
</div>
    `,
    fullPageStyles: `
/* ═══════════════════════════════════════════════════════════════
   PIXEL ART / 8-BIT GAME BOY STYLE - FULL PAGE STYLES
   Classic Game Boy Color Palette:
   - #0f380f (Darkest Green)
   - #306230 (Dark Green)
   - #8bac0f (Light Green)
   - #9bbc0f (Lightest Green)
   ═══════════════════════════════════════════════════════════════ */

.pixel-game-container {
  font-family: 'Courier New', 'Press Start 2P', monospace;
  background-color: #0f380f;
  color: #9bbc0f;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  line-height: 1.6;
}

/* ═══ HERO SECTION ═══ */
.pixel-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #0f380f;
  position: relative;
  overflow: hidden;
}

.pixel-screen-border {
  background-color: #306230;
  border: 8px solid #9bbc0f;
  box-shadow:
    0 0 0 4px #0f380f,
    0 0 40px rgba(155, 188, 15, 0.3),
    inset 0 0 30px rgba(15, 56, 15, 0.5);
  padding: 60px 40px;
  max-width: 800px;
  width: 100%;
  position: relative;
}

.pixel-logo-wrapper {
  text-align: center;
  margin-bottom: 60px;
}

.pixel-logo {
  font-size: 48px;
  font-weight: bold;
  color: #9bbc0f;
  text-shadow:
    4px 4px 0 #0f380f,
    -2px -2px 0 #8bac0f;
  letter-spacing: 4px;
  margin-bottom: 20px;
  animation: logo-flicker 3s infinite;
}

@keyframes logo-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.95; }
}

.pixel-subtitle {
  font-size: 16px;
  color: #8bac0f;
  letter-spacing: 2px;
}

/* ═══ ANIMATED PIXEL CHARACTER ═══ */
.pixel-character-wrapper {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.pixel-character {
  width: 64px;
  height: 64px;
  background-color: #9bbc0f;
  position: relative;
  image-rendering: pixelated;
}

.pixel-character::before {
  content: '';
  position: absolute;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  background-color: #8bac0f;
}

.pixel-character::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 24px;
  width: 16px;
  height: 16px;
  background-color: #0f380f;
}

.pixel-character.walking {
  animation: walk-animation 0.6s steps(2) infinite;
}

@keyframes walk-animation {
  0% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  100% { transform: translateX(-4px); }
}

/* ═══ MENU BUTTONS ═══ */
.pixel-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0;
}

.pixel-menu-btn {
  background-color: #0f380f;
  color: #9bbc0f;
  border: 4px solid #306230;
  padding: 20px 30px;
  font-size: 18px;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: all 0.1s;
  position: relative;
}

.pixel-menu-btn:hover,
.pixel-menu-btn.active {
  background-color: #306230;
  border-color: #9bbc0f;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
}

.pixel-menu-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
}

.pixel-arrow {
  display: inline-block;
  margin-right: 10px;
  animation: arrow-blink 1s infinite;
}

.pixel-arrow.invisible {
  opacity: 0;
}

@keyframes arrow-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* ═══ PRESS START TEXT ═══ */
.pixel-press-start {
  text-align: center;
  font-size: 20px;
  color: #9bbc0f;
  animation: blink 1.5s infinite;
  margin-top: 40px;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* ═══ STATS BAR ═══ */
.pixel-stats-bar {
  background-color: #306230;
  border-top: 4px solid #9bbc0f;
  border-bottom: 4px solid #9bbc0f;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.pixel-stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pixel-stat-label {
  font-size: 12px;
  color: #8bac0f;
  letter-spacing: 2px;
}

.pixel-stat-value {
  font-size: 24px;
  color: #9bbc0f;
  font-weight: bold;
}

.pixel-health-bar {
  height: 24px;
  background-color: #0f380f;
  border: 3px solid #9bbc0f;
  position: relative;
  overflow: hidden;
}

.pixel-health-fill {
  height: 100%;
  background: linear-gradient(90deg, #9bbc0f 0%, #8bac0f 100%);
  transition: width 0.3s ease;
}

.pixel-coin-animation {
  animation: coin-pulse 1s infinite;
}

@keyframes coin-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* ═══ SECTION STYLES ═══ */
.pixel-section {
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.pixel-section-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 60px;
  color: #9bbc0f;
  text-shadow: 3px 3px 0 #0f380f;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.pixel-title-decoration {
  color: #8bac0f;
  font-size: 24px;
}

/* ═══ LEVEL SELECT GRID ═══ */
.pixel-level-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.pixel-level-card {
  background-color: #306230;
  border: 4px solid #9bbc0f;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.pixel-level-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 0 #0f380f;
}

.pixel-level-card.locked {
  background-color: #0f380f;
  border-color: #306230;
  opacity: 0.6;
  cursor: not-allowed;
}

.pixel-level-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.pixel-level-name {
  font-size: 18px;
  margin-bottom: 15px;
  color: #9bbc0f;
}

.pixel-level-stars {
  font-size: 24px;
  color: #8bac0f;
}

/* ═══ DIALOGUE BOX ═══ */
.pixel-dialogue-box {
  background-color: #0f380f;
  border: 6px solid #9bbc0f;
  padding: 30px;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 30px;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
}

.pixel-dialogue-avatar {
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: avatar-bounce 2s infinite;
}

@keyframes avatar-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.pixel-dialogue-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.pixel-dialogue-name {
  font-size: 16px;
  color: #8bac0f;
  font-weight: bold;
}

.pixel-dialogue-text {
  font-size: 14px;
  line-height: 1.8;
  color: #9bbc0f;
}

.pixel-dialogue-footer {
  text-align: right;
}

.pixel-dialogue-arrow {
  display: inline-block;
  animation: dialogue-arrow 1s infinite;
}

@keyframes dialogue-arrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* ═══ LEADERBOARD ═══ */
.pixel-leaderboard {
  background-color: #0f380f;
  border: 4px solid #9bbc0f;
}

.pixel-leaderboard-header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding: 20px 30px;
  background-color: #306230;
  font-size: 14px;
  font-weight: bold;
  color: #9bbc0f;
  border-bottom: 4px solid #9bbc0f;
}

.pixel-leaderboard-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding: 20px 30px;
  border-bottom: 2px solid #306230;
  transition: background-color 0.2s;
}

.pixel-leaderboard-row:hover {
  background-color: #306230;
}

.pixel-leaderboard-row.gold { background-color: rgba(255, 215, 0, 0.1); }
.pixel-leaderboard-row.silver { background-color: rgba(192, 192, 192, 0.1); }
.pixel-leaderboard-row.bronze { background-color: rgba(205, 127, 50, 0.1); }

.pixel-rank,
.pixel-player,
.pixel-score {
  color: #9bbc0f;
  font-size: 16px;
}

/* ═══ ACHIEVEMENTS ═══ */
.pixel-achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
}

.pixel-badge {
  background-color: #306230;
  border: 4px solid #9bbc0f;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s;
}

.pixel-badge.unlocked-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(155, 188, 15, 0.5);
}

.pixel-badge.locked-badge {
  background-color: #0f380f;
  border-color: #306230;
  opacity: 0.5;
}

.pixel-badge-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.pixel-badge-name {
  font-size: 12px;
  color: #9bbc0f;
}

/* ═══ SOUND TEST ═══ */
.pixel-sound-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.pixel-sound-btn {
  background-color: #306230;
  border: 4px solid #9bbc0f;
  padding: 30px 20px;
  font-family: inherit;
  font-size: 14px;
  color: #9bbc0f;
  cursor: pointer;
  transition: all 0.1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.pixel-sound-btn:hover {
  background-color: #8bac0f;
  color: #0f380f;
}

.pixel-sound-btn:active {
  transform: scale(0.95);
}

.pixel-sound-wave {
  font-size: 24px;
  animation: sound-wave 1s infinite;
}

@keyframes sound-wave {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* ═══ INVENTORY ═══ */
.pixel-inventory {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
}

.pixel-item-slot {
  aspect-ratio: 1;
  background-color: #0f380f;
  border: 4px solid #306230;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s;
}

.pixel-item-slot.has-item {
  border-color: #9bbc0f;
  cursor: pointer;
}

.pixel-item-slot.has-item:hover {
  background-color: #306230;
  transform: translateY(-4px);
}

.pixel-item-slot.empty {
  opacity: 0.3;
}

.pixel-item-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.pixel-item-count {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #9bbc0f;
}

/* ═══ TYPOGRAPHY SHOWCASE ═══ */
.pixel-typography {
  background-color: #0f380f;
  border: 4px solid #9bbc0f;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.pixel-font-sample {
  color: #9bbc0f;
}

.pixel-font-sample.large {
  font-size: 48px;
  text-shadow: 4px 4px 0 #306230;
}

.pixel-font-sample.medium {
  font-size: 32px;
}

.pixel-font-sample.small {
  font-size: 16px;
  color: #8bac0f;
}

/* ═══ FOOTER ═══ */
.pixel-footer {
  background-color: #0f380f;
  border-top: 4px solid #9bbc0f;
  padding: 60px 40px 40px;
  margin-top: 80px;
}

.pixel-footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.pixel-footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  color: #9bbc0f;
}

.pixel-gameboy-icon {
  font-size: 48px;
  animation: gameboy-shake 2s infinite;
}

@keyframes gameboy-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.pixel-footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.pixel-link {
  color: #8bac0f;
  text-decoration: none;
  transition: color 0.2s;
}

.pixel-link:hover {
  color: #9bbc0f;
  text-decoration: underline;
}

.pixel-separator {
  color: #306230;
}

.pixel-footer-note {
  font-size: 12px;
  color: #306230;
}

/* ═══ RESPONSIVE DESIGN ═══ */
@media (max-width: 768px) {
  .pixel-logo {
    font-size: 32px;
  }

  .pixel-section-title {
    font-size: 24px;
    flex-direction: column;
    gap: 10px;
  }

  .pixel-dialogue-box {
    grid-template-columns: 1fr;
  }

  .pixel-leaderboard-header,
  .pixel-leaderboard-row {
    grid-template-columns: 80px 1fr 100px;
    padding: 15px 20px;
    font-size: 12px;
  }

  .pixel-stats-bar {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .pixel-screen-border {
    padding: 40px 20px;
  }

  .pixel-menu-btn {
    font-size: 14px;
    padding: 15px 20px;
  }

  .pixel-section {
    padding: 60px 20px;
  }
}
    `,

    // 模板級 customPrompt（長版 Prompt，可直接給 LLM 高精度復刻 UI）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Pixel Art Game 像素遊戲面板」示例风格高度接近的 UI。
要求：保持 8-bit/16-bit 像素藝術、Game Boy 或早期掌機配色、像素完美對齊与點陣字体這些核心特徵，只允许替换文案、遊戲內容与圖示，而不改变整体布局和像素化視覺語言。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 复古像素游戏的菜单页、存档选择界面或关卡选择界面
- 像素艺术作品集、復古遊戲平台首页
- 需要表現「掌機 / 街機時代」風格的資訊面板

【整体布局结构】
1. 背景层
   - 使用 Game Boy 式單色或四色調背景，例如多层綠色方塊或棋盤格圖案。
   - 可以加入简單的山脈 / 云朵 / 城堡輪廓，全部用像素方塊構成。
2. 主遊戲視窗
   - 中央或上半部分為「遊戲画面」区域，可显示角色、障礙物或場景的一部分。
   - 外框使用粗實线方框（4px 边框），四角完全直角，無圓角。
3. 信息与控制区
   - 底部或側边放置狀態欄：生命值、分数、時間、道具欄等。
   - 利用小圖示 + 點陣文字組合，依然保持像素栅格對齊。

【色彩与材质】
1. Game Boy 配色
   - 使用經典四色綠調：深綠、暗綠、淺綠、最淺綠，或等效的單色像素調色板。
   - 也可以選擇紅 / 藍 / 黃主題的 4 色配色，但整個界面仍應限制於小色板內。
2. 像素质感
   - 所有边緣必須清晰硬朗，避免任何模糊或插值（需強調 image-rendering: pixelated 类效果）。
   - 不使用漸变、模糊阴影或光暈，仅用純色方塊表現高光与阴影。

【排版与像素字形】
1. 字体
   - 使用點陣 / 像素風格字体（如 Press Start 2P、像素字型或 Courier New 等宽字），字級採 8px/12px/16px 等整数。
2. 對齊
   - 所有文字和圖示都要對齊至 4px 或 8px 的网格單位，避免半格偏移。

【交互与动效】
1. Hover / 選中狀態
   - 按鈕或選項在 hover / focus 時，切換為相反色或增加一圈像素边框（例如反白高亮）。
2. 動效
   - 角色或圖示可以做輕微的 2 幀或 4 幀動画（上下抖動、眨眼等），節奏較慢以保持復古感。

【输出要求】
- 使用语义化 HTML（main / section / nav 等）组织遊戲面板結構，將主画面与狀態欄分层表達。
- 使用 TailwindCSS 风格原子类控制排版与間距，並在必要處用自定義类實現像素边框与网格對齊。
- 生成 UI 必須保留「低解析像素塊 + 小色板 + 點陣字体 + 完全直角边框」這些关鍵特徵，让人一眼看出是像素遊戲 UI。`,

      'en-US': `You are a senior UI designer and front-end engineer. Generate a pixel art game interface that looks very close to the current “Pixel Art Game” demo.
Keep 8-bit/16-bit pixel art, Game Boy or early handheld color palettes, pixel-perfect alignment and bitmap fonts as the main traits. You may change copy, game content and icons, but you should not alter the overall layout or pixelated visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Menu screens, save-select views or level select UIs for retro-style games
- Pixel art galleries or portals for classic games
- Information panels that should feel like “handheld / arcade era” UIs

[Layout structure]
1. Background layer
   - Use single- or four-tone palettes similar to Game Boy, such as stacked green tiles or checkerboard patterns.
   - Optionally depict mountains, clouds or castle silhouettes built entirely from pixel blocks.
2. Main game viewport
   - Place a central or upper “game screen” area showing a portion of the scene (character, obstacles, terrain).
   - Surround it with a thick rectangular frame (4px border) with sharp 90° corners and no rounding.
3. Status and control area
   - Use a bottom or side bar to show HUD elements: HP, score, timer, inventory, etc.
   - Combine tiny icons and bitmap text, still aligned strictly to the pixel grid.

[Color and materials]
1. Palettes
   - Prefer the classic four-tone green set (darkest, dark, light, lightest) or equivalent limited palettes.
   - Alternative red/blue/yellow themes are allowed, but keep the entire screen within a small fixed palette.
2. Pixel rendering
   - All edges must be crisp, with no blur or smoothing; emphasize pixelated rendering.
   - Avoid gradients, soft shadows or glows; use solid blocks for highlights and shadows instead.

[Typography and pixel grid]
1. Fonts
   - Use bitmap or pixel-style fonts (Press Start 2P, pixel fonts, Courier New monospace, etc.), with sizes in whole pixels such as 8/12/16px.
2. Alignment
   - Align all glyphs and icons to a 4px or 8px grid to avoid half-cell offsets.

[Interaction and motion]
1. Hover / selection
   - On hover or focus, invert colors or add an extra pixel border around buttons and options.
2. Motion
   - Characters or icons can use simple 2- or 4-frame animations (bobbing, blinking), with slow cadence to preserve the retro feel.

[Output requirements]
- Use semantic HTML (main / section / nav, etc.) to represent the game viewport and HUD layers.
- Use Tailwind-style utilities for spacing and layout, plus custom classes where needed for pixel borders and grid alignment.
- The generated UI must preserve “low-res pixel blocks + limited palette + bitmap fonts + hard square borders” so it reads immediately as a pixel game UI.`
    },

    // 模板級 stylePrompt (詳細 Prompt，1000-2000字)
    stylePrompt: {
      'zh-CN': `角色：你是专精於像素藝術（Pixel Art）風格的 UI 设計師，专注於 8-bit/16-bit 時代的遊戲美學和 Game Boy 配色系統。

場景定位：為復古遊戲、像素藝術作品展示或懷舊遊戲平台打造像素完美的界面，通過點陣字体和像素网格傳達經典遊戲機美學。

核心设計語言：

1. **像素完美渲染系統**：
   - 全局像素化设置：
     \`\`\`css
     .pixel-container {
       image-rendering: pixelated;
       image-rendering: -moz-crisp-edges;
       image-rendering: crisp-edges;
       -ms-interpolation-mode: nearest-neighbor;
     }
     \`\`\`

   - 像素网格對齊：
     \`\`\`css
     /* 所有尺寸必須是 4px 的倍数 */
     .pixel-element {
       width: 64px;   /* 16 * 4 */
       height: 64px;
       margin: 8px;   /* 2 * 4 */
       padding: 12px; /* 3 * 4 */
     }
     \`\`\`

2. **Game Boy 配色系統**（經典四色調）：
   - 完整配色：
     \`\`\`css
     :root {
       --gb-darkest: #0f380f;  /* 最深綠（背景、阴影） */
       --gb-dark: #306230;     /* 暗綠（边框、文字） */
       --gb-light: #8bac0f;    /* 淺綠（高光、強調） */
       --gb-lightest: #9bbc0f; /* 最淺綠（主文字、圖标） */
     }

     .pixel-gameboy {
       background: var(--gb-darkest);
       color: var(--gb-lightest);
       border: 4px solid var(--gb-light);
     }
     \`\`\`

配色方案：

主色調（Game Boy 原色）：
- 最深綠：#0f380f
- 暗綠：#306230
- 淺綠：#8bac0f
- 最淺綠：#9bbc0f

替代配色（Game Boy Color）：
- 紅色主題：#660000, #cc0000, #ff3333, #ff9999
- 藍色主題：#000066, #0000cc, #3333ff, #9999ff
- 黃色主題：#666600, #cccc00, #ffff33, #ffff99

3. **像素化按鈕设計**：
   \`\`\`css
   .pixel-button {
     background: linear-gradient(180deg, #8bac0f 0%, #306230 100%);
     border: 4px solid #0f380f;
     border-radius: 0; /* 絕對不使用圓角 */
     padding: 16px 32px;
     font-family: 'Press Start 2P', monospace;
     font-size: 14px;
     color: #9bbc0f;
     text-transform: uppercase;
     box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
     cursor: pointer;
     transition: none; /* 像素風格不使用平滑過渡 */
   }

   .pixel-button:hover {
     background: linear-gradient(180deg, #9bbc0f 0%, #8bac0f 100%);
     border-color: #306230;
   }

   .pixel-button:active {
     transform: translate(2px, 2px);
     box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
   }
   \`\`\`

4. **純 CSS 像素圖形繪製**：
   - 像素心形：
     \`\`\`css
     .pixel-heart {
       width: 24px;
       height: 24px;
       background: #ff0066;
       position: relative;
       transform: rotate(45deg);
     }

     .pixel-heart::before,
     .pixel-heart::after {
       content: '';
       width: 24px;
       height: 24px;
       background: #ff0066;
       position: absolute;
     }

     .pixel-heart::before { left: -12px; }
     .pixel-heart::after { top: -12px; }

     /* 心跳動画 */
     @keyframes pixel-beat {
       0%, 100% { transform: rotate(45deg) scale(1); }
       50% { transform: rotate(45deg) scale(1.1); }
     }

     .pixel-heart {
       animation: pixel-beat 1s infinite;
     }
     \`\`\`

5. **點陣字体系統**：
   \`\`\`css
   @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

   .pixel-text {
     font-family: 'Press Start 2P', 'Courier New', monospace;
     font-size: 16px; /* 必須是偶数 */
     line-height: 1.6;
     letter-spacing: 0.1em;
     text-shadow: none; /* 像素字体不使用阴影 */
   }

   .pixel-text-large {
     font-size: 32px;
     line-height: 1.2;
   }

   .pixel-text-small {
     font-size: 12px;
     line-height: 1.8;
   }
   \`\`\`

技術實現要點：

1. **間距系統（4px 基礎單位）**：
   - xs: 4px
   - sm: 8px
   - md: 12px
   - lg: 16px
   - xl: 24px
   - 2xl: 32px

2. **字体大小（偶数值）**：
   - 小字：12px
   - 正文：14px、16px
   - 标題：24px、32px、48px

3. **禁用平滑效果**：
   - transition: none（不使用過渡動画）
   - filter: none（不使用模糊濾鏡）
   - text-shadow: none（不使用文字阴影）

4. **動画使用步進**：
   \`\`\`css
   @keyframes pixel-walk {
     0% { background-position: 0 0; }
     50% { background-position: -64px 0; }
     100% { background-position: -128px 0; }
   }

   .pixel-character {
     animation: pixel-walk 0.6s steps(2) infinite;
   }
   \`\`\`

重要提示：
- 所有尺寸必須是 4px 的倍数
- 字体大小必須是偶数（12px、14px、16px）
- 絕對不使用 border-radius
- 避免使用 box-shadow 的模糊值（只用偏移阴影）
- 所有圖像使用 image-rendering: pixelated
- 颜色使用 Game Boy 四色調或类似限定色板
- 動画使用 steps() 而非 ease
- 不使用 text-shadow 和 filter 效果`,

      'en-US': `Role: You are a UI designer specializing in Pixel Art style, focusing on 8-bit/16-bit era gaming aesthetics and Game Boy color palette systems.

Scenario: Create pixel-perfect interfaces for retro games, pixel art showcases, or nostalgic gaming platforms, conveying classic gaming console aesthetics through bitmap fonts and pixel grids.

Core Design Language:

1. **Pixel-Perfect Rendering System**:
   - Global pixelation settings:
     \`\`\`css
     .pixel-container {
       image-rendering: pixelated;
       image-rendering: -moz-crisp-edges;
       image-rendering: crisp-edges;
       -ms-interpolation-mode: nearest-neighbor;
     }
     \`\`\`

   - Pixel grid alignment:
     \`\`\`css
     /* All sizes must be multiples of 4px */
     .pixel-element {
       width: 64px;   /* 16 * 4 */
       height: 64px;
       margin: 8px;   /* 2 * 4 */
       padding: 12px; /* 3 * 4 */
     }
     \`\`\`

2. **Game Boy Color System** (Classic four-tone):
   \`\`\`css
   :root {
     --gb-darkest: #0f380f;  /* Darkest green (background, shadows) */
     --gb-dark: #306230;     /* Dark green (borders, text) */
     --gb-light: #8bac0f;    /* Light green (highlights, accents) */
     --gb-lightest: #9bbc0f; /* Lightest green (main text, icons) */
   }
   \`\`\`

Color Scheme:

Primary (Game Boy Original):
- Darkest Green: #0f380f
- Dark Green: #306230
- Light Green: #8bac0f
- Lightest Green: #9bbc0f

Alternative (Game Boy Color):
- Red Theme: #660000, #cc0000, #ff3333, #ff9999
- Blue Theme: #000066, #0000cc, #3333ff, #9999ff
- Yellow Theme: #666600, #cccc00, #ffff33, #ffff99

3. **Pixelated Button Design**:
   \`\`\`css
   .pixel-button {
     background: linear-gradient(180deg, #8bac0f 0%, #306230 100%);
     border: 4px solid #0f380f;
     border-radius: 0; /* Never use border-radius */
     padding: 16px 32px;
     font-family: 'Press Start 2P', monospace;
     font-size: 14px;
     color: #9bbc0f;
     text-transform: uppercase;
     box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
     cursor: pointer;
     transition: none; /* Pixel style uses no smooth transitions */
   }

   .pixel-button:active {
     transform: translate(2px, 2px);
     box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
   }
   \`\`\`

Important Notes:
- All sizes must be multiples of 4px
- Font sizes must be even numbers (12px, 14px, 16px)
- Never use border-radius
- Avoid box-shadow blur values (only offset shadows)
- All images use image-rendering: pixelated
- Colors use Game Boy four-tone or similar limited palette
- Animations use steps() instead of ease
- Do not use text-shadow and filter effects`
    }
  }
