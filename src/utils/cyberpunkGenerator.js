/**
 * Cyberpunk 页面漸進式生成器
 * 根据進度百分比生成對應階段的 HTML 內容
 */

// 基礎樣式 (總是包含)
const baseStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Courier New', monospace;
    overflow-x: hidden;
  }
`;

// 動画樣式 (从一開始就啟用,確保所有動画效果可見)
const animationStyles = `
  @keyframes cyber-scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes cyber-flow {
    0% { transform: translateY(-50%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(150%); opacity: 0; }
  }
  @keyframes cyber-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  @keyframes cyber-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes cyber-pulse-bar {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  @keyframes cyber-glitch {
    0%, 90%, 100% { transform: translate(0); }
    92% { transform: translate(-2px, 2px); }
    94% { transform: translate(2px, -2px); }
    96% { transform: translate(-2px, -2px); }
    98% { transform: translate(2px, 2px); }
  }
  @keyframes cyber-cursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

// Hover 樣式 (最後階段啟用)
const hoverStyles = `
  .cyber-nav-link:hover {
    border: 1px solid currentColor !important;
    box-shadow: 0 0 15px currentColor;
    background: rgba(0, 255, 65, 0.1);
  }
  .cyber-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  }
  button:hover {
    background: currentColor !important;
    color: #0a0a0a !important;
    transform: scale(1.05);
  }
`;

/**
 * 根据進度百分比返回對應的 HTML 內容
 * @param {number} progress - 進度百分比 (0-100)
 * @returns {string} - 生成的 HTML 內容
 */
export function generateProgressiveHTML(progress) {
  let html = '';
  // 動画樣式从一開始就啟用,確保所有元素都有動画效果
  let styles = baseStyles + animationStyles + hoverStyles;

  // ==================== 背景层 (0-8%) ====================
  // 階段 1: 0-2% - 背景色
  if (progress >= 0) {
    html += `
      <div class="cyberpunk-full-page min-h-screen" style="background: #0a0a0a; color: #00ff41; font-family: 'Courier New', monospace; position: relative; overflow-x: hidden;">
    `;
  }

  // 階段 2: 2-4% - 背景网格
  if (progress >= 2) {
    html += `
      <div class="cyber-grid" style="position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px); background-size: 50px 50px; perspective: 1000px; transform: rotateX(60deg) translateZ(-100px);"></div>
    `;
  }

  // 階段 3: 4-6% - 掃描线
  if (progress >= 4) {
    html += `
      <div class="cyber-scanline" style="position: fixed; inset: 0; pointer-events: none; z-index: 1; background: linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%); background-size: 100% 4px; animation: cyber-scan 8s linear infinite;"></div>
    `;
  }

  // 階段 4: 6-8% - 主容器
  if (progress >= 6) {
    html += `<div style="position: relative; z-index: 2;">`;
  }

  // ==================== 导航欄 (8-35%) ====================
  // 階段 5: 8-10% - 导航欄容器
  if (progress >= 8) {
    html += `
      <nav class="cyber-navbar" style="position: sticky; top: 0; z-index: 50; background: rgba(10, 10, 10, 0.95); border-bottom: 2px solid #00ff41; backdrop-filter: blur(10px); box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);">
        <div style="max-width: 1400px; margin: 0 auto; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between;">
    `;
  }

  // 階段 6: 10-12% - Logo 容器
  if (progress >= 10) {
    html += `<div style="display: flex; align-items: center; gap: 1rem;">`;
  }

  // 階段 7: 12-14% - Logo 圖标
  if (progress >= 12) {
    html += `
      <div style="width: 40px; height: 40px; background: #00ff41; border: 2px solid #00ffff; display: flex; align-items: center; justify-content: center; position: relative; animation: cyber-pulse 2s ease-in-out infinite;">
        <span style="font-size: 20px; font-weight: 900; color: #0a0a0a;">C</span>
        <div style="position: absolute; inset: -2px; border: 1px solid #00ff41; animation: cyber-rotate 3s linear infinite;"></div>
      </div>
    `;
  }

  // 階段 8: 14-16% - Logo 文字
  if (progress >= 14) {
    html += `
      <span style="font-size: 20px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41;">CYBER_TERMINAL</span>
    `;
  }

  // 关閉 Logo 容器
  if (progress >= 10) {
    html += `</div>`;
  }

  // 階段 9: 16-18% - 导航連結容器
  if (progress >= 16) {
    html += `<div style="display: flex; gap: 2rem; align-items: center;">`;
  }

  // 階段 10-13: 18-26% - 导航連結逐一生成
  if (progress >= 18) {
    html += `<a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #00ff41; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid transparent; transition: all 0.3s; text-shadow: 0 0 5px #00ff41;">MONITOR</a>`;
  }
  if (progress >= 20) {
    html += `<a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #00ffff; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid transparent; transition: all 0.3s;">TERMINAL</a>`;
  }
  if (progress >= 22) {
    html += `<a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #00ffff; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid transparent; transition: all 0.3s;">SYSTEMS</a>`;
  }
  if (progress >= 24) {
    html += `<a href="javascript:void(0)" class="cyber-nav-link" style="font-weight: 700; color: #00ffff; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid transparent; transition: all 0.3s;">CONFIG</a>`;
  }

  // 关閉导航連結容器
  if (progress >= 16) {
    html += `</div>`;
  }

  // 階段 14: 26-28% - 工具欄容器
  if (progress >= 26) {
    html += `<div style="display: flex; gap: 1rem; align-items: center;">`;
  }

  // 階段 15: 28-30% - 搜索框
  if (progress >= 28) {
    html += `
      <div style="position: relative;">
        <input type="text" placeholder="SEARCH..." style="padding: 0.5rem 1rem; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; color: #00ff41; font-family: 'Courier New', monospace; font-size: 14px; width: 180px; box-shadow: 0 0 10px rgba(0, 255, 65, 0.3); outline: none;">
        <span style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); color: #00ff41;">🔍</span>
      </div>
    `;
  }

  // 階段 16: 30-32% - 通知圖标
  if (progress >= 30) {
    html += `
      <div style="position: relative; cursor: pointer;">
        <div style="width: 36px; height: 36px; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; display: flex; align-items: center; justify-content: center; animation: cyber-pulse 2s ease-in-out infinite;">
          <span style="font-size: 16px;">🔔</span>
        </div>
        <span style="position: absolute; top: -6px; right: -6px; background: #00ff41; color: #0a0a0a; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900;">7</span>
      </div>
    `;
  }

  // 階段 17: 32-35% - 用戶頭像
  if (progress >= 32) {
    html += `
      <div style="width: 36px; height: 36px; background: rgba(0, 255, 255, 0.2); border: 2px solid #00ffff; display: flex; align-items: center; justify-content: center; color: #00ffff; font-weight: 900; font-size: 14px; box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);">
        H4X
      </div>
    `;
  }

  // 关閉工具欄容器
  if (progress >= 26) {
    html += `</div>`;
  }

  // 关閉导航欄
  if (progress >= 8) {
    html += `
          </div>
        </nav>
    `;
  }

  // ==================== Hero 区塊 (35-52%) ====================
  // 階段 18: 35-37% - Hero 背景容器
  if (progress >= 35) {
    html += `
      <section style="background: linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 255, 255, 0.05) 100%); padding: 4rem 2rem; border-bottom: 1px solid #00ff41; position: relative; overflow: hidden;">
        <div style="max-width: 1400px; margin: 0 auto; position: relative; z-index: 1;">
    `;
  }

  // 階段 19: 37-40% - Hero 主标題
  if (progress >= 37) {
    html += `
      <h1 class="cyber-glitch" style="font-size: 56px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; margin: 0; line-height: 1.2; position: relative;">
        SYSTEM_ACCESS_GRANTED
      </h1>
    `;
  }

  // 階段 20: 40-42% - Hero 副标題
  if (progress >= 40) {
    html += `
      <p style="font-size: 18px; font-weight: 400; color: #00ffff; margin-top: 1rem; max-width: 600px; text-shadow: 0 0 5px #00ffff;">
        // Welcome to the Matrix, Neo. Your monitoring dashboard is online.
      </p>
    `;
  }

  // 階段 21: 42-44% - 按鈕容器
  if (progress >= 42) {
    html += `<div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">`;
  }

  // 階段 22: 44-46% - INITIALIZE 按鈕
  if (progress >= 44) {
    html += `
      <button style="padding: 0.75rem 2rem; background: transparent; color: #00ff41; border: 2px solid #00ff41; font-weight: 900; font-size: 14px; cursor: pointer; box-shadow: 0 0 15px rgba(0, 255, 65, 0.3); transition: all 0.3s; font-family: 'Courier New', monospace;">
        [ INITIALIZE ]
      </button>
    `;
  }

  // 階段 23: 46-48% - CONNECT 按鈕
  if (progress >= 46) {
    html += `
      <button style="padding: 0.75rem 2rem; background: rgba(0, 255, 255, 0.1); color: #00ffff; border: 2px solid #00ffff; font-weight: 900; font-size: 14px; cursor: pointer; box-shadow: 0 0 15px rgba(0, 255, 255, 0.3); transition: all 0.3s; font-family: 'Courier New', monospace;">
        [ CONNECT ]
      </button>
    `;
  }

  // 关閉按鈕容器
  if (progress >= 42) {
    html += `</div>`;
  }

  // 階段 24: 48-50% - 数据流容器
  if (progress >= 48) {
    html += `
      </div>
      <div class="cyber-dataflow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.1; overflow: hidden;">
    `;
  }

  // 階段 25-29: 50-52% - 数据流逐一生成
  if (progress >= 50) {
    html += `<div style="position: absolute; top: -50%; left: 10%; font-size: 12px; animation: cyber-flow 15s linear infinite; animation-delay: 0s;">010101010101</div>`;
  }
  if (progress >= 50.5) {
    html += `<div style="position: absolute; top: -50%; left: 30%; font-size: 12px; animation: cyber-flow 20s linear infinite; animation-delay: 2s;">110110110110</div>`;
  }
  if (progress >= 51) {
    html += `<div style="position: absolute; top: -50%; left: 50%; font-size: 12px; animation: cyber-flow 18s linear infinite; animation-delay: 4s;">101010101010</div>`;
  }
  if (progress >= 51.5) {
    html += `<div style="position: absolute; top: -50%; left: 70%; font-size: 12px; animation: cyber-flow 22s linear infinite; animation-delay: 1s;">011011011011</div>`;
  }
  if (progress >= 52) {
    html += `<div style="position: absolute; top: -50%; left: 90%; font-size: 12px; animation: cyber-flow 16s linear infinite; animation-delay: 3s;">100100100100</div>`;
  }

  // 关閉数据流和 Hero 区塊
  if (progress >= 48) {
    html += `
      </div>
      </section>
    `;
  }

  // ==================== 監控面板 (52-78%) ====================
  // 階段 30: 52-54% - 監控面板标題和网格容器
  if (progress >= 52) {
    html += `
      <section style="max-width: 1400px; margin: 0 auto; padding: 3rem 2rem;">
        <h2 style="font-size: 24px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41; margin-bottom: 2rem; border-left: 4px solid #00ff41; padding-left: 1rem;">// SYSTEM_MONITOR</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
    `;
  }

  // ==================== CPU 卡片 (54-60%) ====================
  // 階段 31: 54-56% - CPU 卡片容器和背景
  if (progress >= 54) {
    html += `
      <div class="cyber-card" style="background: rgba(0, 255, 65, 0.05); border: 1px solid #00ff41; padding: 1.5rem; box-shadow: 0 0 20px rgba(0, 255, 65, 0.2); transition: all 0.3s; position: relative;">
        <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: radial-gradient(circle, rgba(0, 255, 65, 0.2), transparent); animation: cyber-pulse 2s ease-in-out infinite;"></div>
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
    `;
  }

  // 階段 32: 56-57% - CPU 圖标
  if (progress >= 56) {
    html += `<div style="width: 50px; height: 50px; background: rgba(0, 255, 65, 0.2); border: 2px solid #00ff41; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 1rem;">💻</div>`;
  }

  // 階段 33: 57-58% - CPU 标題
  if (progress >= 57) {
    html += `<h3 style="font-size: 12px; font-weight: 700; color: #00ffff; margin: 0; text-transform: uppercase; letter-spacing: 1px;">CPU_USAGE</h3>`;
  }

  // 階段 34: 58-59% - CPU 数据
  if (progress >= 58) {
    html += `
      <p style="font-size: 36px; font-weight: 900; color: #00ff41; margin: 0.5rem 0; text-shadow: 0 0 10px #00ff41;">78%</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #00ff41; font-weight: 900; font-size: 14px;">↑ OPTIMAL</span>
      </div>
    `;
  }

  // 階段 35: 59-60% - CPU 進度條
  if (progress >= 59) {
    html += `
      <div style="margin-top: 1rem; position: relative; width: 100%; height: 8px; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41;">
        <div style="position: absolute; top: 0; left: 0; width: 78%; height: 100%; background: #00ff41; box-shadow: 0 0 10px #00ff41; animation: cyber-pulse-bar 2s ease-in-out infinite;"></div>
      </div>
    `;
  }

  // 关閉 CPU 卡片
  if (progress >= 54) {
    html += `
          </div>
        </div>
      </div>
    `;
  }

  // ==================== GPU 卡片 (60-66%) ====================
  // 階段 36: 60-62% - GPU 卡片容器
  if (progress >= 60) {
    html += `
      <div class="cyber-card" style="background: rgba(0, 255, 255, 0.05); border: 1px solid #00ffff; padding: 1.5rem; box-shadow: 0 0 20px rgba(0, 255, 255, 0.2); transition: all 0.3s; position: relative;">
        <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent); animation: cyber-pulse 2s ease-in-out infinite 0.5s;"></div>
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
    `;
  }

  // 階段 37-40: 62-66% - GPU 內容逐步生成
  if (progress >= 62) {
    html += `<div style="width: 50px; height: 50px; background: rgba(0, 255, 255, 0.2); border: 2px solid #00ffff; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 1rem;">🎮</div>`;
  }
  if (progress >= 63) {
    html += `<h3 style="font-size: 12px; font-weight: 700; color: #00ffff; margin: 0; text-transform: uppercase; letter-spacing: 1px;">GPU_USAGE</h3>`;
  }
  if (progress >= 64) {
    html += `
      <p style="font-size: 36px; font-weight: 900; color: #00ffff; margin: 0.5rem 0; text-shadow: 0 0 10px #00ffff;">92%</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #00ffff; font-weight: 900; font-size: 14px;">↑ HIGH</span>
      </div>
    `;
  }
  if (progress >= 65) {
    html += `
      <div style="margin-top: 1rem; position: relative; width: 100%; height: 8px; background: rgba(0, 255, 255, 0.1); border: 1px solid #00ffff;">
        <div style="position: absolute; top: 0; left: 0; width: 92%; height: 100%; background: #00ffff; box-shadow: 0 0 10px #00ffff; animation: cyber-pulse-bar 2s ease-in-out infinite 0.3s;"></div>
      </div>
    `;
  }

  // 关閉 GPU 卡片
  if (progress >= 60) {
    html += `
          </div>
        </div>
      </div>
    `;
  }

  // ==================== Network 卡片 (66-72%) ====================
  if (progress >= 66) {
    html += `
      <div class="cyber-card" style="background: rgba(0, 255, 65, 0.05); border: 1px solid #00ff41; padding: 1.5rem; box-shadow: 0 0 20px rgba(0, 255, 65, 0.2); transition: all 0.3s; position: relative;">
        <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: radial-gradient(circle, rgba(0, 255, 65, 0.2), transparent); animation: cyber-pulse 2s ease-in-out infinite 1s;"></div>
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
    `;
  }

  if (progress >= 68) {
    html += `<div style="width: 50px; height: 50px; background: rgba(0, 255, 65, 0.2); border: 2px solid #00ff41; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 1rem;">🌐</div>`;
  }
  if (progress >= 69) {
    html += `<h3 style="font-size: 12px; font-weight: 700; color: #00ffff; margin: 0; text-transform: uppercase; letter-spacing: 1px;">NETWORK</h3>`;
  }
  if (progress >= 70) {
    html += `
      <p style="font-size: 36px; font-weight: 900; color: #00ff41; margin: 0.5rem 0; text-shadow: 0 0 10px #00ff41;">142</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #00ff41; font-weight: 900; font-size: 14px;">MB/s</span>
      </div>
    `;
  }
  if (progress >= 71) {
    html += `
      <div style="margin-top: 1rem; position: relative; width: 100%; height: 8px; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41;">
        <div style="position: absolute; top: 0; left: 0; width: 65%; height: 100%; background: #00ff41; box-shadow: 0 0 10px #00ff41; animation: cyber-pulse-bar 2s ease-in-out infinite 0.6s;"></div>
      </div>
    `;
  }

  if (progress >= 66) {
    html += `
          </div>
        </div>
      </div>
    `;
  }

  // ==================== Security 卡片 (72-78%) ====================
  if (progress >= 72) {
    html += `
      <div class="cyber-card" style="background: rgba(0, 255, 255, 0.05); border: 1px solid #00ffff; padding: 1.5rem; box-shadow: 0 0 20px rgba(0, 255, 255, 0.2); transition: all 0.3s; position: relative;">
        <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent); animation: cyber-pulse 2s ease-in-out infinite 1.5s;"></div>
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
    `;
  }

  if (progress >= 74) {
    html += `<div style="width: 50px; height: 50px; background: rgba(0, 255, 255, 0.2); border: 2px solid #00ffff; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 1rem;">🛡️</div>`;
  }
  if (progress >= 75) {
    html += `<h3 style="font-size: 12px; font-weight: 700; color: #00ffff; margin: 0; text-transform: uppercase; letter-spacing: 1px;">SECURITY</h3>`;
  }
  if (progress >= 76) {
    html += `
      <p style="font-size: 36px; font-weight: 900; color: #00ffff; margin: 0.5rem 0; text-shadow: 0 0 10px #00ffff;">0</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #00ffff; font-weight: 900; font-size: 14px;">THREATS</span>
      </div>
    `;
  }
  if (progress >= 77) {
    html += `
      <div style="margin-top: 1rem; position: relative; width: 100%; height: 8px; background: rgba(0, 255, 255, 0.1); border: 1px solid #00ffff;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #00ffff; box-shadow: 0 0 10px #00ffff;"></div>
      </div>
    `;
  }

  if (progress >= 72) {
    html += `
          </div>
        </div>
      </div>
    `;
  }

  // 关閉監控面板
  if (progress >= 52) {
    html += `
        </div>
      </section>
    `;
  }

  // ==================== 終端区塊 (78-90%) ====================
  // 階段 41: 78-80% - 終端容器和标題
  if (progress >= 78) {
    html += `
      <section style="max-width: 1400px; margin: 0 auto; padding: 3rem 2rem;">
        <h2 style="font-size: 24px; font-weight: 900; color: #00ffff; text-shadow: 0 0 10px #00ffff; margin-bottom: 2rem; border-left: 4px solid #00ffff; padding-left: 1rem;">// DATA_TERMINAL</h2>
        <div style="background: rgba(0, 0, 0, 0.8); border: 1px solid #00ff41; padding: 1.5rem; box-shadow: 0 0 20px rgba(0, 255, 65, 0.3); font-family: 'Courier New', monospace; position: relative; overflow: hidden;">
    `;
  }

  // 階段 42: 80-82% - 終端頭部
  if (progress >= 80) {
    html += `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid #00ff41; padding-bottom: 0.5rem;">
        <span style="color: #00ff41; font-size: 14px; font-weight: 700;">root@cyber-terminal:~#</span>
        <div style="display: flex; gap: 0.5rem;">
          <span style="width: 12px; height: 12px; background: #00ff41; border-radius: 50%;"></span>
          <span style="width: 12px; height: 12px; background: #00ffff; border-radius: 50%;"></span>
          <span style="width: 12px; height: 12px; background: rgba(255, 255, 255, 0.3); border-radius: 50%;"></span>
        </div>
      </div>
    `;
  }

  // 階段 43: 82-84% - 終端內容容器
  if (progress >= 82) {
    html += `<div style="color: #00ff41; font-size: 13px; line-height: 1.6; max-height: 200px; overflow-y: auto;">`;
  }

  // 階段 44-49: 84-89% - 終端日誌逐行生成
  if (progress >= 84) {
    html += `<div style="margin-bottom: 0.5rem;">[2077-11-05 23:42:01] System initialized...</div>`;
  }
  if (progress >= 85) {
    html += `<div style="margin-bottom: 0.5rem; color: #00ffff;">[2077-11-05 23:42:02] Network connection established</div>`;
  }
  if (progress >= 86) {
    html += `<div style="margin-bottom: 0.5rem;">[2077-11-05 23:42:03] Loading neural interface...</div>`;
  }
  if (progress >= 87) {
    html += `<div style="margin-bottom: 0.5rem; color: #00ffff;">[2077-11-05 23:42:04] Scanning for threats... <span style="color: #00ff41;">[OK]</span></div>`;
  }
  if (progress >= 88) {
    html += `<div style="margin-bottom: 0.5rem;">[2077-11-05 23:42:05] Memory optimization complete</div>`;
  }
  if (progress >= 89) {
    html += `<div style="margin-bottom: 0.5rem; color: #00ffff;">[2077-11-05 23:42:06] All systems operational</div>`;
  }

  // 階段 50: 89-90% - 終端游标
  if (progress >= 89.5) {
    html += `
      <div style="margin-top: 1rem; display: flex; align-items: center;">
        <span style="color: #00ff41;">root@cyber-terminal:~# </span>
        <span style="display: inline-block; width: 8px; height: 14px; background: #00ff41; margin-left: 4px; animation: cyber-cursor 1s infinite;"></span>
      </div>
    `;
  }

  // 关閉終端內容和終端区塊
  if (progress >= 82) {
    html += `</div>`;
  }
  if (progress >= 78) {
    html += `
        </div>
      </section>
    `;
  }

  // ==================== Footer (90-95%) ====================
  // 階段 51: 90-92% - Footer 容器
  if (progress >= 90) {
    html += `
      <footer style="background: rgba(10, 10, 10, 0.95); border-top: 2px solid #00ff41; padding: 2rem; margin-top: 4rem;">
        <div style="max-width: 1400px; margin: 0 auto; text-align: center;">
    `;
  }

  // 階段 52: 92-93% - Footer 版權信息
  if (progress >= 92) {
    html += `<p style="color: #00ff41; font-size: 14px; margin-bottom: 0.5rem; text-shadow: 0 0 5px #00ff41;">© 2077 CYBER TERMINAL - ALL RIGHTS RESERVED</p>`;
  }

  // 階段 53: 93-95% - Footer 連結
  if (progress >= 93) {
    html += `
      <div style="display: flex; gap: 2rem; justify-content: center; margin-top: 1rem;">
        <a href="javascript:void(0)" style="color: #00ffff; font-size: 12px; text-decoration: none; transition: all 0.3s;">PRIVACY</a>
        <a href="javascript:void(0)" style="color: #00ffff; font-size: 12px; text-decoration: none; transition: all 0.3s;">TERMS</a>
        <a href="javascript:void(0)" style="color: #00ffff; font-size: 12px; text-decoration: none; transition: all 0.3s;">CONTACT</a>
      </div>
    `;
  }

  // 关閉 Footer
  if (progress >= 90) {
    html += `
        </div>
      </footer>
    `;
  }

  // 关閉主容器和最外层 div
  if (progress >= 6) {
    html += `</div>`;
  }
  if (progress >= 0) {
    html += `</div>`;
  }

  return { html, styles };
}
