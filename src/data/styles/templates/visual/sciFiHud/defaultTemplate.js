// Phase 3 Batch 2 - Sci-Fi HUD Template
// 視覺元素：科幻HUD界面
// 从 visualTechStyles.js 遷移

import {
  visualTechSciFiHudFullPageHTML,
  visualTechSciFiHudFullPageStyles
} from './sciFiHudFullPage';
import { stylePrompt } from './stylePrompt';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

export const visualTechSciFiHud = {
  id: 'visual-tech-sci-fi-hud',
  title: 'styles.visual.sci-fi-hud.title',
  description: 'styles.visual.sci-fi-hud.description',
  
  demoHTML: `
      <div class="hud-demo-container">
        <div class="hud-demo-panel">
          <div class="hud-demo-status"></div>
          <div class="hud-demo-text">SYSTEM</div>
        </div>
        <div class="hud-demo-radar">
          <div class="hud-demo-sweep"></div>
        </div>
      </div>
    `,
  
  customStyles: `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

      .hud-demo-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-family: 'Orbitron', monospace;
      }

      .hud-demo-panel {
        padding: 0.75rem 1.5rem;
        background: rgba(224, 242, 254, 0.1);
        border: 2px solid #0EA5E9;
        clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
      }

      .hud-demo-status {
        width: 8px;
        height: 8px;
        background: #0EA5E9;
        border-radius: 50%;
        animation: hud-demo-pulse 2s ease-in-out infinite;
      }

      @keyframes hud-demo-pulse {
        0%, 100% { opacity: 1; box-shadow: 0 0 8px #0EA5E9; }
        50% { opacity: 0.5; box-shadow: 0 0 20px #0EA5E9; }
      }

      .hud-demo-text {
        color: #E0F2FE;
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 0.1em;
      }

      .hud-demo-radar {
        width: 60px;
        height: 60px;
        border: 2px solid #0EA5E9;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
      }

      .hud-demo-sweep {
        position: absolute;
        width: 100%;
        height: 100%;
        background: conic-gradient(from 0deg, transparent 0deg, rgba(14, 165, 233, 0.6) 60deg, transparent 120deg);
        animation: hud-demo-radar 3s linear infinite;
      }

      @keyframes hud-demo-radar {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,
  
  demoBoxClass: 'bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900',
  
  colorScheme: {
    'zh-cn': '深色背景 (#0F172A)、青色光效 (#06B6D4)、綠色掃描线 (#10B981)、HUD橙色 (#F97316)',
    'en-US': 'Dark background (#0F172A), cyan glow (#06B6D4), green scanlines (#10B981), HUD orange (#F97316)'
  },
  
  fullPageHTML: visualTechSciFiHudFullPageHTML,
  fullPageStyles: visualTechSciFiHudFullPageStyles,
  fullPageCustomPrompt,
  stylePrompt,
  
  previews: [
      {
        id: 'dashboard',
        name: 'styles.visual.sci-fi-hud.previews.dashboardHome',
        type: 'full',
        html: `
          <!-- HUD Dashboard -->
          <div class="hud-dashboard">
            <!-- Particle Canvas Background -->
            <canvas id="particleCanvas" class="hud-particle-canvas"></canvas>

            <!-- Top Status Bar -->
            <div class="hud-status-bar">
              <div class="hud-status-left">
                <div class="hud-logo">
                  <div class="hud-logo-icon">HUD</div>
                  <span class="hud-logo-text">NEXUS SYSTEM</span>
                </div>
                <div class="hud-status-time" id="hudTime">00:00:00</div>
              </div>
              <div class="hud-status-right">
                <div class="hud-status-indicator hud-status-online"></div>
                <span class="hud-status-label">ONLINE</span>
              </div>
            </div>

            <!-- Main Content Grid -->
            <div class="hud-main-grid">
              <!-- Left Panel: System Status -->
              <div class="hud-panel hud-panel-left">
                <div class="hud-panel-header">
                  <h3 class="hud-panel-title">SYSTEM STATUS</h3>
                  <div class="hud-panel-indicator"></div>
                </div>
                <div class="hud-panel-content">
                  <div class="hud-metric">
                    <div class="hud-metric-header">
                      <span class="hud-metric-label">POWER CORE</span>
                      <span class="hud-metric-value">92%</span>
                    </div>
                    <div class="hud-bar">
                      <div class="hud-bar-fill hud-bar-blue" style="width: 92%"></div>
                    </div>
                  </div>

                  <div class="hud-metric">
                    <div class="hud-metric-header">
                      <span class="hud-metric-label">SHIELD</span>
                      <span class="hud-metric-value">78%</span>
                    </div>
                    <div class="hud-bar">
                      <div class="hud-bar-fill hud-bar-cyan" style="width: 78%"></div>
                    </div>
                  </div>

                  <div class="hud-metric">
                    <div class="hud-metric-header">
                      <span class="hud-metric-label">SYSTEMS</span>
                      <span class="hud-metric-value">100%</span>
                    </div>
                    <div class="hud-bar">
                      <div class="hud-bar-fill hud-bar-green" style="width: 100%"></div>
                    </div>
                  </div>

                  <div class="hud-metric">
                    <div class="hud-metric-header">
                      <span class="hud-metric-label">THERMAL</span>
                      <span class="hud-metric-value">45%</span>
                    </div>
                    <div class="hud-bar">
                      <div class="hud-bar-fill hud-bar-yellow" style="width: 45%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Center: Radar Scanner -->
              <div class="hud-panel hud-panel-center">
                <div class="hud-radar-container">
                  <svg class="hud-radar-svg" viewBox="0 0 400 400">
                    <!-- Grid Lines -->
                    <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(14, 165, 233, 0.2)" stroke-width="1"/>
                    <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(14, 165, 233, 0.2)" stroke-width="1"/>
                    <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(14, 165, 233, 0.2)" stroke-width="1"/>
                    <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(14, 165, 233, 0.2)" stroke-width="1"/>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(14, 165, 233, 0.2)" stroke-width="1"/>

                    <!-- Sweep -->
                    <defs>
                      <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgba(14, 165, 233, 0);stop-opacity:0" />
                        <stop offset="100%" style="stop-color:#0EA5E9;stop-opacity:0.6" />
                      </linearGradient>
                    </defs>
                    <path d="M 200 200 L 200 20 A 180 180 0 0 1 380 200 Z" fill="url(#radarGradient)" class="hud-radar-sweep"/>

                    <!-- Target Blips -->
                    <circle cx="250" cy="150" r="4" fill="#0EA5E9" class="hud-blip"/>
                    <circle cx="180" cy="280" r="4" fill="#0EA5E9" class="hud-blip"/>
                    <circle cx="320" cy="240" r="4" fill="#0EA5E9" class="hud-blip"/>
                  </svg>
                  <div class="hud-radar-center">
                    <div class="hud-radar-pulse"></div>
                  </div>
                </div>
              </div>

              <!-- Right Panel: Data Stream -->
              <div class="hud-panel hud-panel-right">
                <div class="hud-panel-header">
                  <h3 class="hud-panel-title">DATA STREAM</h3>
                  <div class="hud-panel-indicator"></div>
                </div>
                <div class="hud-panel-content hud-data-stream">
                  <div class="hud-data-line">
                    <span class="hud-data-timestamp">12:34:56</span>
                    <span class="hud-data-text">System initialized</span>
                  </div>
                  <div class="hud-data-line">
                    <span class="hud-data-timestamp">12:34:57</span>
                    <span class="hud-data-text">Connecting to network...</span>
                  </div>
                  <div class="hud-data-line hud-data-success">
                    <span class="hud-data-timestamp">12:34:58</span>
                    <span class="hud-data-text">Connection established</span>
                  </div>
                  <div class="hud-data-line">
                    <span class="hud-data-timestamp">12:34:59</span>
                    <span class="hud-data-text">Scanning for targets...</span>
                  </div>
                  <div class="hud-data-line hud-data-warning">
                    <span class="hud-data-timestamp">12:35:00</span>
                    <span class="hud-data-text">3 objects detected</span>
                  </div>
                  <div class="hud-data-line">
                    <span class="hud-data-timestamp">12:35:01</span>
                    <span class="hud-data-text">Analyzing signatures...</span>
                  </div>
                  <div class="hud-data-line hud-data-success">
                    <span class="hud-data-timestamp">12:35:02</span>
                    <span class="hud-data-text">All systems nominal</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Control Bar -->
            <div class="hud-control-bar">
              <button class="hud-control-btn hud-btn-active">
                <span class="hud-btn-icon">◆</span>
                <span class="hud-btn-label">SCAN</span>
              </button>
              <button class="hud-control-btn">
                <span class="hud-btn-icon">▲</span>
                <span class="hud-btn-label">NAV</span>
              </button>
              <button class="hud-control-btn">
                <span class="hud-btn-icon">●</span>
                <span class="hud-btn-label">TARGET</span>
              </button>
              <button class="hud-control-btn">
                <span class="hud-btn-icon">■</span>
                <span class="hud-btn-label">COMM</span>
              </button>
            </div>
          </div>
        `,
        styles: `
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Orbitron', monospace;
            background: #0a0e1a;
            color: #E0F2FE;
            overflow: hidden;
          }

          .hud-dashboard {
            width: 100vw;
            height: 100vh;
            position: relative;
            overflow: hidden;
          }

          /* Particle Canvas Background */
          .hud-particle-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
          }

          /* Status Bar */
          .hud-status-bar {
            position: relative;
            z-index: 10;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background: rgba(10, 14, 26, 0.8);
            border-bottom: 2px solid #0EA5E9;
            box-shadow: 0 4px 20px rgba(14, 165, 233, 0.2);
          }

          .hud-status-left, .hud-status-right {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .hud-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .hud-logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #0EA5E9, #38BDF8);
            clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: 900;
            color: #0a0e1a;
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
          }

          .hud-logo-text {
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            background: linear-gradient(90deg, #E0F2FE, #0EA5E9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hud-status-time {
            font-size: 1.125rem;
            font-weight: 500;
            color: #38BDF8;
            letter-spacing: 0.1em;
          }

          .hud-status-indicator {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            animation: status-pulse 2s ease-in-out infinite;
          }

          .hud-status-online {
            background: #0EA5E9;
            box-shadow: 0 0 12px #0EA5E9;
          }

          @keyframes status-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }

          .hud-status-label {
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: #0EA5E9;
          }

          /* Main Grid */
          .hud-main-grid {
            position: relative;
            z-index: 5;
            display: grid;
            grid-template-columns: 320px 1fr 320px;
            gap: 1.5rem;
            padding: 1.5rem 2rem;
            height: calc(100vh - 180px);
          }

          /* Panel Base */
          .hud-panel {
            background: rgba(10, 14, 26, 0.6);
            border: 2px solid #0EA5E9;
            clip-path: polygon(
              0 12px, 12px 0,
              calc(100% - 12px) 0, 100% 12px,
              100% calc(100% - 12px), calc(100% - 12px) 100%,
              12px 100%, 0 calc(100% - 12px)
            );
            backdrop-filter: blur(10px);
            box-shadow:
              0 0 30px rgba(14, 165, 233, 0.2),
              inset 0 0 30px rgba(14, 165, 233, 0.05);
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .hud-panel:hover {
            box-shadow:
              0 0 50px rgba(14, 165, 233, 0.4),
              inset 0 0 40px rgba(14, 165, 233, 0.1);
          }

          .hud-panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(14, 165, 233, 0.3);
          }

          .hud-panel-title {
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            color: #0EA5E9;
          }

          .hud-panel-indicator {
            width: 8px;
            height: 8px;
            background: #0EA5E9;
            border-radius: 50%;
            animation: panel-pulse 2s ease-in-out infinite;
          }

          @keyframes panel-pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 8px #0EA5E9; }
            50% { opacity: 0.5; box-shadow: 0 0 20px #0EA5E9; }
          }

          .hud-panel-content {
            padding: 1.5rem;
          }

          /* Metrics */
          .hud-metric {
            margin-bottom: 1.5rem;
          }

          .hud-metric:last-child {
            margin-bottom: 0;
          }

          .hud-metric-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .hud-metric-label {
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.1em;
            color: #94a3b8;
          }

          .hud-metric-value {
            font-size: 1.125rem;
            font-weight: 700;
            color: #E0F2FE;
          }

          /* Progress Bars */
          .hud-bar {
            height: 8px;
            background: rgba(14, 165, 233, 0.1);
            border-radius: 4px;
            overflow: hidden;
            position: relative;
          }

          .hud-bar-fill {
            height: 100%;
            border-radius: 4px;
            transition: width 0.6s ease;
            position: relative;
            animation: energy-flow 2s ease-in-out infinite;
          }

          @keyframes energy-flow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.3); }
          }

          .hud-bar-blue {
            background: linear-gradient(90deg, #0EA5E9, #38BDF8);
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
          }

          .hud-bar-cyan {
            background: linear-gradient(90deg, #06b6d4, #22d3ee);
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
          }

          .hud-bar-green {
            background: linear-gradient(90deg, #10b981, #34d399);
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
          }

          .hud-bar-yellow {
            background: linear-gradient(90deg, #f59e0b, #fbbf24);
            box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
          }

          /* Radar */
          .hud-panel-center {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hud-radar-container {
            width: 400px;
            height: 400px;
            position: relative;
          }

          .hud-radar-svg {
            width: 100%;
            height: 100%;
          }

          .hud-radar-sweep {
            transform-origin: center;
            animation: radar-sweep 4s linear infinite;
          }

          @keyframes radar-sweep {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .hud-blip {
            animation: blip-pulse 2s ease-in-out infinite;
          }

          @keyframes blip-pulse {
            0%, 100% { opacity: 1; r: 4; }
            50% { opacity: 0.5; r: 6; }
          }

          .hud-radar-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
          }

          .hud-radar-pulse {
            width: 100%;
            height: 100%;
            background: #0EA5E9;
            border-radius: 50%;
            animation: radar-pulse 2s ease-out infinite;
          }

          @keyframes radar-pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(3);
              opacity: 0;
            }
          }

          /* Data Stream */
          .hud-data-stream {
            max-height: 100%;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #0EA5E9 rgba(14, 165, 233, 0.1);
          }

          .hud-data-stream::-webkit-scrollbar {
            width: 6px;
          }

          .hud-data-stream::-webkit-scrollbar-track {
            background: rgba(14, 165, 233, 0.1);
          }

          .hud-data-stream::-webkit-scrollbar-thumb {
            background: #0EA5E9;
            border-radius: 3px;
          }

          .hud-data-line {
            display: flex;
            gap: 1rem;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(14, 165, 233, 0.1);
            font-size: 0.75rem;
            animation: data-fade-in 0.5s ease;
          }

          @keyframes data-fade-in {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .hud-data-timestamp {
            color: #38BDF8;
            font-weight: 500;
            min-width: 60px;
          }

          .hud-data-text {
            color: #94a3b8;
            flex: 1;
          }

          .hud-data-success .hud-data-text {
            color: #10b981;
          }

          .hud-data-warning .hud-data-text {
            color: #f59e0b;
          }

          /* Control Bar */
          .hud-control-bar {
            position: relative;
            z-index: 10;
            display: flex;
            justify-content: center;
            gap: 1rem;
            padding: 1rem 2rem;
            background: rgba(10, 14, 26, 0.8);
            border-top: 2px solid #0EA5E9;
            box-shadow: 0 -4px 20px rgba(14, 165, 233, 0.2);
          }

          .hud-control-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            background: rgba(14, 165, 233, 0.1);
            border: 2px solid #0EA5E9;
            color: #E0F2FE;
            cursor: pointer;
            transition: all 0.3s ease;
            clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          }

          .hud-control-btn:hover {
            background: rgba(14, 165, 233, 0.2);
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
            transform: translateY(-2px);
          }

          .hud-btn-active {
            background: rgba(14, 165, 233, 0.3);
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.5);
          }

          .hud-btn-icon {
            font-size: 1.5rem;
            color: #0EA5E9;
          }

          .hud-btn-label {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.1em;
          }

          /* Responsive */
          @media (max-width: 1400px) {
            .hud-main-grid {
              grid-template-columns: 280px 1fr 280px;
            }

            .hud-radar-container {
              width: 350px;
              height: 350px;
            }
          }

          @media (max-width: 1024px) {
            .hud-main-grid {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr auto;
            }

            .hud-radar-container {
              width: 300px;
              height: 300px;
            }
          }

          @media (max-width: 768px) {
            .hud-status-bar {
              flex-direction: column;
              gap: 1rem;
            }

            .hud-control-bar {
              gap: 0.5rem;
            }

            .hud-control-btn {
              padding: 0.75rem 1rem;
            }
          }
        `,
        script: `
          // Particle Canvas Background
          const canvas = document.getElementById('particleCanvas');
          const ctx = canvas.getContext('2d');

          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const particles = [];
          const particleCount = 100;

          class Particle {
            constructor() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.vx = (Math.random() - 0.5) * 0.5;
              this.vy = (Math.random() - 0.5) * 0.5;
              this.radius = Math.random() * 2 + 1;
              this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
              this.x += this.vx;
              this.y += this.vy;

              if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
              if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
              ctx.fillStyle = \`rgba(14, 165, 233, \${this.opacity})\`;
              ctx.fill();
            }
          }

          for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
          }

          function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
              for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                  ctx.beginPath();
                  ctx.strokeStyle = \`rgba(14, 165, 233, \${0.2 * (1 - distance / 120)})\`;
                  ctx.lineWidth = 1;
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.stroke();
                }
              }
            }
          }

          function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
              particle.update();
              particle.draw();
            });

            drawConnections();

            requestAnimationFrame(animate);
          }

          animate();

          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });

          // Update Clock
          function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeElement = document.getElementById('hudTime');
            if (timeElement) {
              timeElement.textContent = \`\${hours}:\${minutes}:\${seconds}\`;
            }
          }

          setInterval(updateClock, 1000);
          updateClock();

          // Simulate Data Stream Updates
          const dataStream = document.querySelector('.hud-data-stream');
          const dataTemplates = [
            { type: 'normal', text: 'System check complete' },
            { type: 'success', text: 'Target acquired' },
            { type: 'warning', text: 'Anomaly detected' },
            { type: 'normal', text: 'Data sync in progress' },
            { type: 'success', text: 'Connection stable' },
            { type: 'normal', text: 'Processing request...' }
          ];

          function addDataLine() {
            if (!dataStream) return;

            const now = new Date();
            const timestamp = \`\${String(now.getHours()).padStart(2, '0')}:\${String(now.getMinutes()).padStart(2, '0')}:\${String(now.getSeconds()).padStart(2, '0')}\`;
            const template = dataTemplates[Math.floor(Math.random() * dataTemplates.length)];

            const line = document.createElement('div');
            line.className = \`hud-data-line \${template.type === 'success' ? 'hud-data-success' : template.type === 'warning' ? 'hud-data-warning' : ''}\`;
            line.innerHTML = \`
              <span class="hud-data-timestamp">\${timestamp}</span>
              <span class="hud-data-text">\${template.text}</span>
            \`;

            dataStream.insertBefore(line, dataStream.firstChild);

            // Keep only last 10 lines
            while (dataStream.children.length > 10) {
              dataStream.removeChild(dataStream.lastChild);
            }
          }

          setInterval(addDataLine, 3000);
        `
      },
      // Preview 2: Home Office Dashboard
      {
        id: 'home-office',
        name: 'styles.visual.sci-fi-hud.previews.homeOfficeDashboard',
        type: 'full',
        description: 'styles.visual.sci-fi-hud.previews.homeOfficeDashboardDesc',
        features: [
          'Real-time productivity metrics with animated charts',
          'Interactive project timeline with milestone tracking',
          'Holographic navigation menu with smooth transitions',
          'Customizable widget layout with glass-morphism effects',
          'Live notification system with priority indicators',
          'Quick-access control panel for system commands'
        ],
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NEXUS OS - Home Office Dashboard</title>
          </head>
          <body class="hud-office-body">
            <!-- Loading Overlay -->
            <div class="hud-loader" id="hudLoader">
              <div class="spinner-ring"></div>
              <p class="loader-text">INITIALIZING NEXUS OS...</p>
            </div>

            <!-- Header -->
            <header class="hud-header">
              <div class="hud-logo">
                <span class="logo-icon">◆</span>
                <span class="logo-text">NEXUS OS</span>
                <span class="logo-subtitle">Home Office</span>
              </div>
              <nav class="hud-nav">
                <a href="javascript:void(0)" class="nav-item active">Home</a>
                <a href="javascript:void(0)" class="nav-item">Projects</a>
                <a href="javascript:void(0)" class="nav-item">Analytics</a>
                <a href="javascript:void(0)" class="nav-item">Settings</a>
              </nav>
              <div class="hud-search">
                <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="Search..." class="search-input" />
              </div>
              <div class="hud-user">
                <div class="user-avatar">JD</div>
                <span class="user-status online"></span>
              </div>
            </header>

            <!-- Main Dashboard -->
            <main class="hud-main">
              <!-- Data Visualization Section -->
              <section class="hud-panel hud-data-viz">
                <h3 class="panel-title">
                  <span class="title-icon">📊</span>
                  Productivity Metrics
                </h3>
                <div class="viz-container">
                  <!-- Bar Chart -->
                  <div class="chart-bars">
                    <div class="chart-bar">
                      <div class="bar-fill" style="height: 85%" data-value="85"></div>
                      <span class="bar-label">Mon</span>
                    </div>
                    <div class="chart-bar">
                      <div class="bar-fill" style="height: 92%" data-value="92"></div>
                      <span class="bar-label">Tue</span>
                    </div>
                    <div class="chart-bar">
                      <div class="bar-fill" style="height: 78%" data-value="78"></div>
                      <span class="bar-label">Wed</span>
                    </div>
                    <div class="chart-bar">
                      <div class="bar-fill" style="height: 95%" data-value="95"></div>
                      <span class="bar-label">Thu</span>
                    </div>
                    <div class="chart-bar">
                      <div class="bar-fill" style="height: 88%" data-value="88"></div>
                      <span class="bar-label">Fri</span>
                    </div>
                  </div>
                  <div class="chart-legend">
                    <span class="legend-label">Weekly Work Hours</span>
                  </div>
                </div>
              </section>

              <!-- Timeline Section -->
              <section class="hud-panel hud-timeline">
                <h3 class="panel-title">
                  <span class="title-icon">📅</span>
                  Project Milestones
                </h3>
                <div class="timeline-container">
                  <div class="timeline-item completed">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <h4 class="timeline-title">Project Kickoff</h4>
                      <p class="timeline-date">Mar 1, 2025</p>
                      <div class="timeline-progress" style="width: 100%"></div>
                    </div>
                  </div>
                  <div class="timeline-item completed">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <h4 class="timeline-title">Design Phase</h4>
                      <p class="timeline-date">Mar 15, 2025</p>
                      <div class="timeline-progress" style="width: 100%"></div>
                    </div>
                  </div>
                  <div class="timeline-item active">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <h4 class="timeline-title">Development Sprint</h4>
                      <p class="timeline-date">Apr 1, 2025</p>
                      <div class="timeline-progress" style="width: 65%"></div>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <h4 class="timeline-title">Testing Phase</h4>
                      <p class="timeline-date">Apr 20, 2025</p>
                      <div class="timeline-progress" style="width: 0%"></div>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <h4 class="timeline-title">Launch</h4>
                      <p class="timeline-date">May 1, 2025</p>
                      <div class="timeline-progress" style="width: 0%"></div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Quick Stats Widgets -->
              <aside class="hud-panel hud-stats">
                <h3 class="panel-title">
                  <span class="title-icon">⚙️</span>
                  System Status
                </h3>
                <div class="stats-grid">
                  <div class="stat-widget">
                    <svg class="stat-circle" viewBox="0 0 100 100">
                      <circle class="stat-bg" cx="50" cy="50" r="45" />
                      <circle class="stat-fill" cx="50" cy="50" r="45" stroke-dasharray="282.7" stroke-dashoffset="56.54" />
                    </svg>
                    <div class="stat-label">
                      <span class="stat-value">80%</span>
                      <span class="stat-name">CPU</span>
                    </div>
                  </div>
                  <div class="stat-widget">
                    <svg class="stat-circle" viewBox="0 0 100 100">
                      <circle class="stat-bg" cx="50" cy="50" r="45" />
                      <circle class="stat-fill" cx="50" cy="50" r="45" stroke-dasharray="282.7" stroke-dashoffset="84.81" />
                    </svg>
                    <div class="stat-label">
                      <span class="stat-value">70%</span>
                      <span class="stat-name">Memory</span>
                    </div>
                  </div>
                  <div class="stat-widget">
                    <svg class="stat-circle" viewBox="0 0 100 100">
                      <circle class="stat-bg" cx="50" cy="50" r="45" />
                      <circle class="stat-fill" cx="50" cy="50" r="45" stroke-dasharray="282.7" stroke-dashoffset="141.35" />
                    </svg>
                    <div class="stat-label">
                      <span class="stat-value">50%</span>
                      <span class="stat-name">Storage</span>
                    </div>
                  </div>
                </div>
              </aside>

              <!-- Task List -->
              <section class="hud-panel hud-tasks">
                <h3 class="panel-title">
                  <span class="title-icon">✓</span>
                  Active Tasks
                </h3>
                <div class="task-list">
                  <label class="task-item completed">
                    <input type="checkbox" checked class="task-checkbox" />
                    <span class="task-text">Review pull requests</span>
                    <span class="task-badge priority-low">Low</span>
                  </label>
                  <label class="task-item">
                    <input type="checkbox" class="task-checkbox" />
                    <span class="task-text">Update documentation</span>
                    <span class="task-badge priority-medium">Medium</span>
                  </label>
                  <label class="task-item">
                    <input type="checkbox" class="task-checkbox" />
                    <span class="task-text">Fix critical bug #2847</span>
                    <span class="task-badge priority-high">High</span>
                  </label>
                  <label class="task-item completed">
                    <input type="checkbox" checked class="task-checkbox" />
                    <span class="task-text">Client meeting preparation</span>
                    <span class="task-badge priority-medium">Medium</span>
                  </label>
                  <label class="task-item">
                    <input type="checkbox" class="task-checkbox" />
                    <span class="task-text">Deploy v2.3.0 to staging</span>
                    <span class="task-badge priority-high">High</span>
                  </label>
                  <label class="task-item">
                    <input type="checkbox" class="task-checkbox" />
                    <span class="task-text">Optimize database queries</span>
                    <span class="task-badge priority-medium">Medium</span>
                  </label>
                </div>
              </section>

              <!-- Notifications -->
              <aside class="hud-panel hud-notifications">
                <h3 class="panel-title">
                  <span class="title-icon">🔔</span>
                  Alerts
                </h3>
                <div class="notification-list">
                  <div class="notification-item unread">
                    <div class="notification-icon">!</div>
                    <div class="notification-content">
                      <p class="notification-text">Build #487 completed</p>
                      <span class="notification-time">2 min ago</span>
                    </div>
                  </div>
                  <div class="notification-item">
                    <div class="notification-icon">✓</div>
                    <div class="notification-content">
                      <p class="notification-text">PR #132 approved</p>
                      <span class="notification-time">15 min ago</span>
                    </div>
                  </div>
                  <div class="notification-item unread">
                    <div class="notification-icon">⚠</div>
                    <div class="notification-content">
                      <p class="notification-text">Server latency spike detected</p>
                      <span class="notification-time">1 hour ago</span>
                    </div>
                  </div>
                  <div class="notification-item">
                    <div class="notification-icon">↑</div>
                    <div class="notification-content">
                      <p class="notification-text">Deployment to production</p>
                      <span class="notification-time">3 hours ago</span>
                    </div>
                  </div>
                </div>
              </aside>

              <!-- Control Panel -->
              <section class="hud-panel hud-controls">
                <h3 class="panel-title">
                  <span class="title-icon">🎛️</span>
                  Quick Actions
                </h3>
                <div class="controls-grid">
                  <button class="hud-btn" onclick="void(0)">
                    <span class="btn-icon">⟳</span>
                    <span class="btn-label">SYNC</span>
                  </button>
                  <button class="hud-btn" onclick="void(0)">
                    <span class="btn-icon">💾</span>
                    <span class="btn-label">BACKUP</span>
                  </button>
                  <button class="hud-btn" onclick="void(0)">
                    <span class="btn-icon">📈</span>
                    <span class="btn-label">ANALYZE</span>
                  </button>
                  <button class="hud-btn" onclick="void(0)">
                    <span class="btn-icon">↗</span>
                    <span class="btn-label">EXPORT</span>
                  </button>
                  <label class="hud-toggle">
                    <input type="checkbox" checked class="toggle-input" />
                    <span class="toggle-slider"></span>
                    <span class="toggle-label">Auto-Save</span>
                  </label>
                  <label class="hud-toggle">
                    <input type="checkbox" class="toggle-input" />
                    <span class="toggle-slider"></span>
                    <span class="toggle-label">Focus Mode</span>
                  </label>
                </div>
              </section>
            </main>

            <!-- Background Effects -->
            <div class="hud-scanline"></div>
            <div class="hud-grid-bg"></div>

            <script>
              // Hide loader after 3 seconds
              setTimeout(() => {
                const loader = document.getElementById('hudLoader');
                if (loader) {
                  loader.style.opacity = '0';
                  setTimeout(() => loader.style.display = 'none', 500);
                }
              }, 3000);

              // Update clock (placeholder - not used in this version)
              function updateClock() {
                const now = new Date();
                const time = now.toLocaleTimeString('en-US', { hour12: false });
                // Could be used for real-time updates
              }

              // Animate bars on load
              setTimeout(() => {
                document.querySelectorAll('.bar-fill').forEach(bar => {
                  bar.style.animation = 'bar-grow 1s ease-out forwards';
                });
              }, 100);
            </script>
          </body>
          </html>
        `,
        styles: `
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;600&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: #0a0e1a;
            color: #E0F2FE;
            overflow-x: hidden;
          }

          .hud-office-body {
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0e1a 0%, #1e293b 50%, #0f172a 100%);
            position: relative;
          }

          /* Loading Overlay */
          .hud-loader {
            position: fixed;
            inset: 0;
            background: rgba(10, 14, 26, 0.95);
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
          }

          .spinner-ring {
            width: 80px;
            height: 80px;
            border: 4px solid rgba(14, 165, 233, 0.1);
            border-top-color: #0EA5E9;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .loader-text {
            margin-top: 1.5rem;
            font-family: 'Orbitron', monospace;
            font-size: 0.875rem;
            color: #0EA5E9;
            letter-spacing: 0.2em;
            animation: pulse 1.5s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          /* Header */
          .hud-header {
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            align-items: center;
            gap: 2rem;
            padding: 1rem 2rem;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 2px solid #0EA5E9;
            box-shadow: 0 4px 20px rgba(14, 165, 233, 0.2);
          }

          .hud-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-family: 'Orbitron', monospace;
          }

          .logo-icon {
            font-size: 1.5rem;
            color: #0EA5E9;
            animation: glow-pulse 2s ease-in-out infinite;
          }

          @keyframes glow-pulse {
            0%, 100% { text-shadow: 0 0 10px #0EA5E9; }
            50% { text-shadow: 0 0 20px #0EA5E9, 0 0 30px #0EA5E9; }
          }

          .logo-text {
            font-size: 1.25rem;
            font-weight: 900;
            color: #E0F2FE;
            letter-spacing: 0.1em;
          }

          .logo-subtitle {
            font-size: 0.75rem;
            color: #94A3B8;
            font-weight: 400;
          }

          .hud-nav {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
          }

          .nav-item {
            padding: 0.5rem 1.25rem;
            font-size: 0.875rem;
            font-weight: 600;
            color: #94A3B8;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-item:hover {
            color: #E0F2FE;
            background: rgba(14, 165, 233, 0.1);
          }

          .nav-item.active {
            color: #0EA5E9;
            background: rgba(14, 165, 233, 0.15);
          }

          .nav-item.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: #0EA5E9;
          }

          .hud-search {
            position: relative;
            display: flex;
            align-items: center;
          }

          .search-icon {
            position: absolute;
            left: 0.75rem;
            color: #64748B;
            pointer-events: none;
          }

          .search-input {
            padding: 0.5rem 1rem 0.5rem 2.5rem;
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(14, 165, 233, 0.3);
            border-radius: 8px;
            color: #E0F2FE;
            font-size: 0.875rem;
            width: 200px;
            transition: all 0.3s ease;
          }

          .search-input:focus {
            outline: none;
            border-color: #0EA5E9;
            width: 300px;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
          }

          .search-input::placeholder {
            color: #64748B;
          }

          .hud-user {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
          }

          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0EA5E9, #38BDF8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.875rem;
            border: 2px solid rgba(14, 165, 233, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .user-avatar:hover {
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
            transform: scale(1.05);
          }

          .user-status {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid #0f172a;
          }

          .user-status.online {
            background: #34D399;
            animation: status-pulse 2s ease-in-out infinite;
          }

          @keyframes status-pulse {
            0%, 100% { box-shadow: 0 0 0 rgba(52, 211, 153, 0.4); }
            50% { box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.1); }
          }

          /* Main Dashboard */
          .hud-main {
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1.5rem;
            min-height: calc(100vh - 80px);
          }

          /* Panel Styles */
          .hud-panel {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(14, 165, 233, 0.3);
            border-radius: 12px;
            padding: 1.5rem;
            clip-path: polygon(
              0 12px, 12px 0,
              calc(100% - 12px) 0, 100% 12px,
              100% calc(100% - 12px), calc(100% - 12px) 100%,
              12px 100%, 0 calc(100% - 12px)
            );
            transition: all 0.3s ease;
          }

          .hud-panel:hover {
            border-color: #0EA5E9;
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.3);
          }

          .panel-title {
            font-family: 'Orbitron', monospace;
            font-size: 0.875rem;
            font-weight: 700;
            color: #0EA5E9;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .title-icon {
            font-size: 1.125rem;
          }

          /* Data Visualization */
          .hud-data-viz {
            grid-column: span 6;
          }

          .viz-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .chart-bars {
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            height: 200px;
            gap: 1rem;
            padding: 1rem 0;
          }

          .chart-bar {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .bar-fill {
            width: 100%;
            background: linear-gradient(180deg, #0EA5E9, #38BDF8);
            border-radius: 4px 4px 0 0;
            position: relative;
            transition: all 0.3s ease;
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.5);
          }

          @keyframes bar-grow {
            from { height: 0; opacity: 0; }
            to { opacity: 1; }
          }

          .bar-fill::before {
            content: attr(data-value) '%';
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.75rem;
            font-weight: 600;
            color: #E0F2FE;
          }

          .bar-label {
            font-size: 0.75rem;
            color: #94A3B8;
            font-weight: 500;
          }

          .chart-legend {
            text-align: center;
            padding-top: 1rem;
            border-top: 1px solid rgba(14, 165, 233, 0.2);
          }

          .legend-label {
            font-size: 0.875rem;
            color: #94A3B8;
          }

          /* Timeline */
          .hud-timeline {
            grid-column: span 6;
          }

          .timeline-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .timeline-item {
            position: relative;
            padding-left: 2rem;
          }

          .timeline-marker {
            position: absolute;
            left: 0;
            top: 0;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 3px solid #334155;
            background: #0f172a;
            transition: all 0.3s ease;
          }

          .timeline-item.completed .timeline-marker {
            border-color: #34D399;
            background: #34D399;
            box-shadow: 0 0 10px rgba(52, 211, 153, 0.5);
          }

          .timeline-item.active .timeline-marker {
            border-color: #0EA5E9;
            background: #0EA5E9;
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.7);
            animation: marker-pulse 2s ease-in-out infinite;
          }

          @keyframes marker-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          .timeline-item::before {
            content: '';
            position: absolute;
            left: 7px;
            top: 16px;
            bottom: -24px;
            width: 2px;
            background: rgba(51, 65, 85, 0.5);
          }

          .timeline-item:last-child::before {
            display: none;
          }

          .timeline-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .timeline-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: #E0F2FE;
          }

          .timeline-date {
            font-size: 0.75rem;
            color: #64748B;
          }

          .timeline-progress {
            height: 4px;
            background: linear-gradient(90deg, #0EA5E9, #38BDF8);
            border-radius: 2px;
            transition: width 0.5s ease;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
          }

          /* Quick Stats */
          .hud-stats {
            grid-column: span 4;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 1rem;
          }

          .stat-widget {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-circle {
            width: 100px;
            height: 100px;
          }

          .stat-bg {
            fill: none;
            stroke: rgba(14, 165, 233, 0.1);
            stroke-width: 8;
          }

          .stat-fill {
            fill: none;
            stroke: #0EA5E9;
            stroke-width: 8;
            stroke-linecap: round;
            transform: rotate(-90deg);
            transform-origin: center;
            transition: stroke-dashoffset 1s ease;
            filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.6));
          }

          .stat-label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .stat-value {
            display: block;
            font-size: 1.25rem;
            font-weight: 700;
            color: #E0F2FE;
          }

          .stat-name {
            display: block;
            font-size: 0.625rem;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          /* Task List */
          .hud-tasks {
            grid-column: span 8;
          }

          .task-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .task-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            background: rgba(15, 23, 42, 0.4);
            border: 1px solid rgba(14, 165, 233, 0.2);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .task-item:hover {
            background: rgba(15, 23, 42, 0.6);
            border-color: #0EA5E9;
          }

          .task-item.completed {
            opacity: 0.6;
          }

          .task-item.completed .task-text {
            text-decoration: line-through;
            color: #64748B;
          }

          .task-checkbox {
            width: 18px;
            height: 18px;
            border-radius: 4px;
            border: 2px solid #0EA5E9;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .task-checkbox:checked {
            background: #0EA5E9;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
          }

          .task-text {
            flex: 1;
            font-size: 0.875rem;
            color: #E0F2FE;
          }

          .task-badge {
            padding: 0.25rem 0.75rem;
            font-size: 0.625rem;
            font-weight: 600;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .priority-high {
            background: rgba(239, 68, 68, 0.2);
            color: #FCA5A5;
            border: 1px solid rgba(239, 68, 68, 0.3);
          }

          .priority-medium {
            background: rgba(251, 191, 36, 0.2);
            color: #FCD34D;
            border: 1px solid rgba(251, 191, 36, 0.3);
          }

          .priority-low {
            background: rgba(52, 211, 153, 0.2);
            color: #6EE7B7;
            border: 1px solid rgba(52, 211, 153, 0.3);
          }

          /* Notifications */
          .hud-notifications {
            grid-column: span 4;
          }

          .notification-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .notification-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem;
            background: rgba(15, 23, 42, 0.4);
            border: 1px solid rgba(14, 165, 233, 0.2);
            border-radius: 8px;
            transition: all 0.2s ease;
          }

          .notification-item.unread {
            border-color: #0EA5E9;
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.2);
          }

          .notification-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(14, 165, 233, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            flex-shrink: 0;
          }

          .notification-content {
            flex: 1;
          }

          .notification-text {
            font-size: 0.8125rem;
            color: #E0F2FE;
            margin-bottom: 0.25rem;
          }

          .notification-time {
            font-size: 0.6875rem;
            color: #64748B;
          }

          /* Controls */
          .hud-controls {
            grid-column: span 12;
          }

          .controls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }

          .hud-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.875rem 1.5rem;
            background: rgba(14, 165, 233, 0.1);
            border: 2px solid #0EA5E9;
            border-radius: 8px;
            color: #0EA5E9;
            font-family: 'Orbitron', monospace;
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .hud-btn:hover {
            background: rgba(14, 165, 233, 0.2);
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
            transform: translateY(-2px);
          }

          .hud-btn:active {
            transform: translateY(0);
          }

          .btn-icon {
            font-size: 1.125rem;
          }

          .hud-toggle {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.875rem 1.5rem;
            background: rgba(15, 23, 42, 0.4);
            border: 1px solid rgba(14, 165, 233, 0.3);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .hud-toggle:hover {
            background: rgba(15, 23, 42, 0.6);
            border-color: #0EA5E9;
          }

          .toggle-input {
            display: none;
          }

          .toggle-slider {
            position: relative;
            width: 44px;
            height: 24px;
            background: rgba(51, 65, 85, 0.8);
            border-radius: 12px;
            transition: all 0.3s ease;
          }

          .toggle-slider::before {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 18px;
            height: 18px;
            background: #E0F2FE;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .toggle-input:checked + .toggle-slider {
            background: #0EA5E9;
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.5);
          }

          .toggle-input:checked + .toggle-slider::before {
            transform: translateX(20px);
          }

          .toggle-label {
            font-size: 0.875rem;
            color: #94A3B8;
            font-weight: 500;
          }

          /* Background Effects */
          .hud-scanline {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg,
              transparent 0%,
              rgba(14, 165, 233, 0.5) 50%,
              transparent 100%
            );
            animation: scanline-move 3s linear infinite;
            pointer-events: none;
            z-index: 9998;
          }

          @keyframes scanline-move {
            0% { top: 0; }
            100% { top: 100%; }
          }

          .hud-grid-bg {
            position: fixed;
            inset: 0;
            background-image:
              linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
            z-index: 0;
          }

          /* Responsive Design */
          @media (max-width: 1200px) {
            .hud-main {
              grid-template-columns: repeat(8, 1fr);
            }

            .hud-data-viz,
            .hud-timeline,
            .hud-tasks {
              grid-column: span 8;
            }

            .hud-stats,
            .hud-notifications {
              grid-column: span 4;
            }
          }

          @media (max-width: 768px) {
            .hud-header {
              flex-wrap: wrap;
              gap: 1rem;
            }

            .hud-nav {
              order: 3;
              width: 100%;
              justify-content: space-around;
            }

            .search-input {
              width: 150px;
            }

            .search-input:focus {
              width: 200px;
            }

            .hud-main {
              grid-template-columns: 1fr;
              padding: 1rem;
            }

            .hud-data-viz,
            .hud-timeline,
            .hud-stats,
            .hud-tasks,
            .hud-notifications,
            .hud-controls {
              grid-column: span 1;
            }

            .stats-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `,
        colorScheme: {
          'zh-cn': '主色: 天蓝 (#0EA5E9)、次要: 冷白 (#E0F2FE)、强调: 浅蓝 (#38BDF8)、深色背景 (#0a0e1a)、面板背景: 半透明深蓝 (rgba(15, 23, 42, 0.6))、成功: 翠绿 (#34D399)、警告: 琥珀 (#FCD34D)、错误: 红色 (#FCA5A5)',
          'en-US': 'Primary: Sky Blue (#0EA5E9), Secondary: Cool White (#E0F2FE), Accent: Light Blue (#38BDF8), Dark Background (#0a0e1a), Panel Background: Semi-transparent Deep Blue (rgba(15, 23, 42, 0.6)), Success: Emerald (#34D399), Warning: Amber (#FCD34D), Error: Red (#FCA5A5)'
        }
      }
    ]
};
