// Visual Style Template: Neon Cyberpunk
// 霓虹賽博朋克 - Matrix 風格黑客終端

import {
  cyberpunkFullPageHTML,
  cyberpunkFullPageStyles
} from './cyberpunkFullPage';
import {
  cyberpunkGamingStoreHTML,
  cyberpunkGamingStoreStyles
} from './cyberpunkGamingStoreFullPage';
import {
  cyberpunkMatrixTerminalHTML,
  cyberpunkMatrixTerminalStyles
} from './cyberpunkMatrixTerminalFullPage';

export const visualNeonCyberpunk = {
  id: 'visual-neon-cyberpunk',
  title: 'styles.visual.neonCyberpunk.title',
  description: 'styles.visual.neonCyberpunk.description',

  // Demo HTML - Mini cyberpunk terminal
  demoHTML: `
    <div class="w-full h-full flex items-center justify-center p-4" style="background: #0a0a0a; position: relative; overflow: hidden;">
      <!-- 背景数据流 -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.15; pointer-events: none; font-family: 'Courier New', monospace; font-size: 10px; color: #00ff41; line-height: 1.2; overflow: hidden;">
        <div style="position: absolute; top: -20%; left: 5%; animation: cyber-mini-flow 8s linear infinite;">01010101<br>11001100<br>00110011</div>
        <div style="position: absolute; top: -20%; left: 25%; animation: cyber-mini-flow 10s linear infinite; animation-delay: 1s;">10101010<br>01100110<br>11001100</div>
        <div style="position: absolute; top: -20%; left: 45%; animation: cyber-mini-flow 9s linear infinite; animation-delay: 2s;">11110000<br>00001111<br>10011001</div>
        <div style="position: absolute; top: -20%; left: 65%; animation: cyber-mini-flow 11s linear infinite; animation-delay: 0.5s;">01011010<br>10100101<br>01010101</div>
        <div style="position: absolute; top: -20%; left: 85%; animation: cyber-mini-flow 7s linear infinite; animation-delay: 1.5s;">11001010<br>00110101<br>11100011</div>
      </div>

      <!-- 主控制面板 -->
      <div style="position: relative; z-index: 2; width: 95%; max-width: 280px;">
        <!-- 終端窗口 -->
        <div style="background: rgba(0, 0, 0, 0.9); border: 1px solid #00ff41; box-shadow: 0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.05);">
          <!-- 終端頭部 -->
          <div style="background: rgba(0, 255, 65, 0.1); border-bottom: 1px solid #00ff41; padding: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; gap: 0.3rem;">
              <span style="width: 8px; height: 8px; background: #00ff41; border-radius: 50%; box-shadow: 0 0 5px #00ff41;"></span>
              <span style="width: 8px; height: 8px; background: #00ffff; border-radius: 50%; box-shadow: 0 0 5px #00ffff;"></span>
              <span style="width: 8px; height: 8px; background: rgba(255, 255, 255, 0.3); border-radius: 50%;"></span>
            </div>
            <span style="font-family: 'Courier New', monospace; font-size: 9px; color: #00ff41; font-weight: 700;">MATRIX_TERMINAL</span>
          </div>

          <!-- 終端內容 -->
          <div style="padding: 0.75rem; font-family: 'Courier New', monospace; font-size: 11px; color: #00ff41; min-height: 120px;">
            <div style="margin-bottom: 0.3rem;">[SYSTEM] <span style="color: #00ffff;">Initializing...</span></div>
            <div style="margin-bottom: 0.3rem;">[ACCESS] <span style="color: #00ff41;">GRANTED</span></div>
            <div style="margin-bottom: 0.3rem;">[CPU] <span style="color: #00ffff;">78% Active</span></div>
            <div style="margin-bottom: 0.3rem;">[NET] <span style="color: #00ff41;">Connected</span></div>
            <div style="margin-bottom: 0.3rem;">[SEC] <span style="color: #00ffff;">No Threats</span></div>
            <div style="margin-top: 0.5rem; display: flex; align-items: center;">
              <span style="color: #00ff41;">root@cyber:~# </span>
              <span class="cyber-mini-cursor" style="display: inline-block; width: 6px; height: 12px; background: #00ff41; margin-left: 3px; box-shadow: 0 0 8px #00ff41;"></span>
            </div>
          </div>
        </div>

        <!-- 狀態指示器 -->
        <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; justify-content: center;">
          <div style="flex: 1; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; padding: 0.4rem; text-align: center;">
            <div style="font-family: 'Courier New', monospace; font-size: 16px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41;">78</div>
            <div style="font-family: 'Courier New', monospace; font-size: 8px; color: #00ffff; margin-top: 0.2rem;">CPU%</div>
          </div>
          <div style="flex: 1; background: rgba(0, 255, 255, 0.1); border: 1px solid #00ffff; padding: 0.4rem; text-align: center;">
            <div style="font-family: 'Courier New', monospace; font-size: 16px; font-weight: 900; color: #00ffff; text-shadow: 0 0 10px #00ffff;">92</div>
            <div style="font-family: 'Courier New', monospace; font-size: 8px; color: #00ff41; margin-top: 0.2rem;">GPU%</div>
          </div>
          <div style="flex: 1; background: rgba(0, 255, 65, 0.1); border: 1px solid #00ff41; padding: 0.4rem; text-align: center;">
            <div style="font-family: 'Courier New', monospace; font-size: 16px; font-weight: 900; color: #00ff41; text-shadow: 0 0 10px #00ff41;">OK</div>
            <div style="font-family: 'Courier New', monospace; font-size: 8px; color: #00ffff; margin-top: 0.2rem;">SEC</div>
          </div>
        </div>
      </div>

      <!-- 掃描线效果 -->
      <div style="position: absolute; inset: 0; pointer-events: none; background: linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%); background-size: 100% 4px; animation: cyber-mini-scan 6s linear infinite;"></div>
    </div>
  `,

  customStyles: `
    @keyframes cyber-mini-cursor {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes cyber-mini-flow {
      0% { transform: translateY(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(400px); opacity: 0; }
    }

    @keyframes cyber-mini-scan {
      0% { background-position: 0 0; }
      100% { background-position: 0 100%; }
    }

    .cyber-mini-cursor {
      animation: cyber-mini-cursor 1s infinite;
    }

    .neon-text {
      text-shadow:
        0 0 10px rgba(0, 255, 65, 0.8),
        0 0 20px rgba(0, 255, 65, 0.6),
        0 0 30px rgba(0, 255, 65, 0.4);
    }
  `,

  // Style Prompt（較長版敘事，用於說明 Neon Cyberpunk 視覺理念）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于赛博朋克终端视觉的 UI 设计师，需要为黑客控制台、开发者工具或系统监控仪表盘设计一套霓虹赛博朋克界面。

场景定位：
界面被置于一个虚构的赛博城市数据中心中，用户是高级工程师、黑客或运维人员，需要在黑暗环境下长时间盯着屏幕查看系统状态、资源占用与安全告警。整个 UI 要让人一眼联想到「Matrix 终端」「数据中心控制室」「赛博监控塔」，但同时保持结构清晰、信息易读，而不是仅仅炫技。

视觉设计理念：
整体以深黑背景承载高对比霓虹色，利用大量终端式文字、扫描线、数字雨与光晕营造强烈的数字噪声感。布局偏向仪表盘与控制台的组合：终端输出区 + 状态卡片 + 监控条形图 + 时间轴。版式要有强烈的技术感和秩序感，让所有霓虹效果都围绕「系统状态可视化」而服务，而不是随意堆砌特效。

材质与质感：
材质以「电子屏幕 + 霓虹灯管」为主：终端窗口是高对比的黑底矩形区域，边缘包裹着霓虹绿/霓虹青描边和内发光；状态卡片和数值面板有轻微玻璃感或金属框架感，通过细致的边线与发光边框强化科技感。背景可以叠加 Matrix 数字雨、随机二进制串、扫描线和微弱噪点，让界面像是被数位信号浸泡的虚拟空间。所有文字都使用等宽或接近终端风格的字体，以强调「命令行」「系统日志」的感觉。

交互体验：
交互反馈应呈现冷静、即时、略带紧张感的节奏。按钮与开关在悬停时变得更亮、更锐利，发光边框略微增强；点击时则稍微「压下去」，阴影收缩，像按下实体控制台按键。终端游标持续闪烁，进度条与扫描线缓慢移动，LED 指示灯以有节奏的呼吸灯效果呈现状态变化。所有动效时长控制在 0.3–1.5 秒之间，强调「系统有生命但不浮躁」的科技氛围。

氛围营造：
整体氛围应是深邃、冷冽、技术感极强的赛博空间：仿佛站在巨型数据中心前，身边是服务器机架、光纤电缆与霓虹城市的倒影。视线所及都是霓虹绿、青、紫在黑暗中勾勒出的线条与数据流，但信息结构清晰可读，不会因过度炫光而难以使用。用户在使用时应感到自己像一名操作核心系统的「控制台管理员」，而不是只是浏览一个装饰性的网页。`,
    'en-US': `Role: You are a UI designer specializing in cyberpunk terminal visuals, creating a Neon Cyberpunk interface for hacker consoles, developer tools, or system monitoring dashboards.

Scenario Positioning:
The interface lives inside a fictional cyber city data center. Users are senior engineers, hackers, or SREs staring at the screen for long periods in a dark environment, monitoring resource usage, system health, and security events. The UI should immediately evoke “Matrix terminal”, “operations control room”, or “cyber control deck”, while still keeping structure and information organization clear and usable.

Visual Design Philosophy:
The overall composition uses deep black backgrounds as the canvas for high‑contrast neon colors. Terminal text, scanlines, digital rain, and glow effects build up a dense digital noise atmosphere. The layout combines dashboard and console patterns: terminal output area plus status cards, monitoring bars, and event timeline. All neon effects should support the idea of “visualizing system state”, rather than being purely decorative.

Materials & Textures:
The main materials are electronic screens and neon tubes. Terminal windows are high‑contrast black rectangles wrapped in neon green/cyan borders with inner glow. Status cards and metric panels may feel slightly glassy or metallic, with fine outlines and glowing strokes to reinforce the sci‑fi look. The background can layer Matrix‑style digital rain, random binary strings, scanlines, and subtle noise, making the interface feel submerged in data. Typography leans toward monospace or terminal‑like fonts so everything reads like logs, commands, and system messages.

Interaction Experience:
Interactions should feel precise, immediate, and a bit tense. Buttons and toggles become brighter and sharper on hover, with stronger glow; on active state they “press down” slightly with reduced shadow, like physical console switches. The terminal cursor blinks continuously, progress bars and scanlines move slowly, and LED indicators breathe gently to show state changes. Motion durations generally stay within 0.3–1.5 seconds so the interface feels alive but not flashy.

Atmosphere:
The atmosphere should be deep, cool, and intensely technological: as if standing in front of a massive data cluster inside a neon‑lit cyber city. Everywhere you look, neon greens, cyans and purples carve shapes into darkness, but content remains readable and logically structured. Users should feel like operators at the core of a critical system rather than casual visitors on a marketing site.`
  },

  // Custom Prompt（模板級 AI 指令，供 Preview 使用）
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 **Neon Cyberpunk（霓虹赛博朋克）** 风格的界面，采用深色背景与高对比霓虹色，突出未来科技终端、数据流与系统监控仪表盘的氛围。

**核心设计要求**

1. **深色赛博城市背景**
   - 使用近乎纯黑的渐变背景：\`#000000 → #050810 → #0a0f0a\`
   - 可叠加轻微噪点与扫描线，提升数位终端质感
   - 示例：
     \`\`\`css
     .cyberpunk-bg {
       background:
         radial-gradient(circle at top, #101820 0%, #020308 45%, #000000 100%);
       color: #e5e7eb;
     }
     .cyberpunk-noise {
       position: relative;
     }
     .cyberpunk-noise::before {
       content: '';
       position: absolute;
       inset: 0;
       pointer-events: none;
       opacity: 0.12;
       background-image: url("data:image/svg+xml,..."); /* 噪点纹理 */
       mix-blend-mode: soft-light;
     }
     \`\`\`

2. **霓虹配色体系**
   - 主色：霓虹绿 \`#00FF41\`、霓虹青 \`#00FFFF\`
   - 辅色：霓虹紫 \`#B967FF\`、霓虹粉 \`#FF00FF\`
   - 背景与边框建议：
     - 文字：浅灰 \`#e5e7eb\` / \`#9ca3af\`
     - 边框：\`rgba(0,255,65,0.6)\`、\`rgba(0,255,255,0.4)\`
   - 示例：
     \`\`\`css
     .cyberpunk-neon-green {
       color: #00ff41;
       text-shadow:
         0 0 10px rgba(0, 255, 65, 0.8),
         0 0 20px rgba(0, 255, 65, 0.6);
     }
     .cyberpunk-neon-cyan {
       color: #00ffff;
       text-shadow:
         0 0 10px rgba(0, 255, 255, 0.8),
         0 0 20px rgba(0, 255, 255, 0.6);
     }
     .cyberpunk-border {
       border: 1px solid rgba(0, 255, 65, 0.6);
       box-shadow:
         0 0 16px rgba(0, 255, 65, 0.35),
         inset 0 0 16px rgba(0, 255, 65, 0.08);
     }
     \`\`\`

3. **終端視覺与佈局**
   - 整体佈局以「控制台儀表板」為核心：
     - 左側 / 上方：終端視窗（命令列 + 狀態輸出）
     - 中間：系統監控卡片（CPU / GPU / Network）
     - 右側 / 下方：事件時間軸、主控按鈕、狀態指示灯
   - 終端視窗建議：
     - 等寬字体：\`font-family: 'Courier New', monospace\`
     - 行高緊湊：\`line-height: 1.2\`
     - 边框：霓虹綠 / 青色外框 + 內發光
   - 示例：
     \`\`\`css
     .cyberpunk-terminal {
       background: rgba(0, 0, 0, 0.9);
       border: 1px solid #00ff41;
       box-shadow:
         0 0 20px rgba(0, 255, 65, 0.3),
         inset 0 0 20px rgba(0, 255, 65, 0.08);
       font-family: 'Courier New', monospace;
       font-size: 0.75rem;
       line-height: 1.35;
       color: #00ff41;
     }

     .cyberpunk-terminal-header {
       background: rgba(0, 255, 65, 0.1);
       border-bottom: 1px solid #00ff41;
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 0.5rem 0.75rem;
     }
     \`\`\`

4. **系統監控卡片与 LED 指示灯**
   - CPU / GPU / Network 使用獨立卡片，显示数值与标籤
   - 每個卡片使用霓虹边框 + 內發光阴影
   - LED 指示灯使用圓形 + 多层發光阴影，支援「正常 / 警告 / 危險」狀態
   - 示例：
     \`\`\`css
     .cyberpunk-stat-card {
       background: rgba(0, 0, 0, 0.85);
       border-radius: 0.5rem;
       border: 1px solid rgba(0, 255, 255, 0.6);
       box-shadow:
         0 0 18px rgba(0, 255, 255, 0.4),
         inset 0 0 12px rgba(0, 255, 255, 0.12);
       padding: 0.75rem 1rem;
       text-align: center;
     }

     .cyberpunk-led {
       width: 10px;
       height: 10px;
       border-radius: 9999px;
       background: #00ff41;
       box-shadow:
         0 0 8px rgba(0, 255, 65, 0.8),
         0 0 16px rgba(0, 255, 65, 0.6);
       animation: ledPulse 1.6s ease-in-out infinite;
     }

     @keyframes ledPulse {
       0%, 100% { opacity: 0.9; transform: scale(1); }
       50% { opacity: 0.4; transform: scale(0.85); }
     }
     \`\`\`

5. **掃描线、数据雨与指标動画**
   - 背景疊加 Matrix 風格数位雨：多列縱向字串，自上而下緩慢移動
   - 添加 1 條或多條掃描线（2px 高度），使用线性漸变从上到下循環
   - 終端游标使用閃爍動画（opacity 在 0–1 之間切換）
   - 示例：
     \`\`\`css
     .cyberpunk-scanline {
       position: absolute;
       inset: 0;
       pointer-events: none;
       background: linear-gradient(
         to bottom,
         transparent,
         rgba(0, 255, 65, 0.35),
         transparent
       );
       mix-blend-mode: screen;
       animation: cyberScan 6s linear infinite;
     }

     @keyframes cyberScan {
       0% { transform: translateY(-100%); }
       100% { transform: translateY(100%); }
     }

     .cyberpunk-cursor {
       display: inline-block;
       width: 0.4rem;
       height: 0.9rem;
       background: #00ff41;
       box-shadow: 0 0 10px #00ff41;
       animation: cursorBlink 1s steps(2, start) infinite;
     }

     @keyframes cursorBlink {
       0%, 100% { opacity: 1; }
       50% { opacity: 0; }
     }
     \`\`\`

**配色方案（Neon Cyberpunk）**

- 背景：\`#000000\`、\`#050810\`、\`#0a0f0a\`
- 主霓虹色：\`#00FF41\`（霓虹绿）、\`#00FFFF\`（霓虹青）
- 輔霓虹色：\`#B967FF\`（霓虹紫）、\`#FF00FF\`（霓虹粉）
- 文本颜色：\`#e5e7eb\`（主文本）、\`#9ca3af\`（次文本）

**重要提示**
- 所有主要元素應有明显霓虹發光（text-shadow / box-shadow）
- 背景必須保持極深色，避免破壞霓虹對比度
- 儀表盤数据与終端文字應使用等寬字体
- 動效可以多但節奏要一致（2–8 秒区間）
- 避免使用低對比的柔和色，保持高度「賽博朋克」辨識度`,

    'en-US': `Please create a **Neon Cyberpunk** style interface using TailwindCSS, with deep dark backgrounds and high-contrast neon colors that highlight futuristic terminals, data streams, and system monitoring dashboards.

**Core Design Requirements**

1. **Deep Cyber City Background**
   - Use near-black gradients: \`#000000 → #050810 → #0a0f0a\`
   - Optionally overlay subtle noise and scanlines for terminal feel
   - Example:
     \`\`\`css
     .cyberpunk-bg {
       background:
         radial-gradient(circle at top, #101820 0%, #020308 45%, #000000 100%);
       color: #e5e7eb;
     }

     .cyberpunk-noise::before {
       content: '';
       position: absolute;
       inset: 0;
       pointer-events: none;
       opacity: 0.12;
       background-image: url("data:image/svg+xml,..."); /* noise texture */
       mix-blend-mode: soft-light;
     }
     \`\`\`

2. **Neon Color System**
   - Primary neon: \`#00FF41\` (neon green), \`#00FFFF\` (neon cyan)
   - Accent neon: \`#B967FF\` (neon purple), \`#FF00FF\` (neon magenta)
   - Text and border suggestions:
     - Text: \`#e5e7eb\` / \`#9ca3af\`
     - Borders: \`rgba(0,255,65,0.6)\`, \`rgba(0,255,255,0.4)\`
   - Example:
     \`\`\`css
     .cyberpunk-neon-green {
       color: #00ff41;
       text-shadow:
         0 0 10px rgba(0, 255, 65, 0.8),
         0 0 20px rgba(0, 255, 65, 0.6);
     }

     .cyberpunk-neon-cyan {
       color: #00ffff;
       text-shadow:
         0 0 10px rgba(0, 255, 255, 0.8),
         0 0 20px rgba(0, 255, 255, 0.6);
     }

     .cyberpunk-border {
       border: 1px solid rgba(0, 255, 65, 0.6);
       box-shadow:
         0 0 16px rgba(0, 255, 65, 0.35),
         inset 0 0 16px rgba(0, 255, 65, 0.08);
     }
     \`\`\`

3. **Terminal Layout and Visual Language**
   - Overall layout should feel like a control deck:
     - Top / left: terminal window with command output
     - Center: status cards (CPU / GPU / Network)
     - Right / bottom: timeline, primary controls, LED indicators
   - Terminal window:
     - Monospace font: \`'Courier New', monospace\`
     - Tight line-height: \`line-height: 1.35\`
     - Neon border and inner glow
   - Example:
     \`\`\`css
     .cyberpunk-terminal {
       background: rgba(0, 0, 0, 0.9);
       border: 1px solid #00ff41;
       box-shadow:
         0 0 20px rgba(0, 255, 65, 0.3),
         inset 0 0 20px rgba(0, 255, 65, 0.08);
       font-family: 'Courier New', monospace;
       font-size: 0.75rem;
       line-height: 1.35;
       color: #00ff41;
     }

     .cyberpunk-terminal-header {
       background: rgba(0, 255, 65, 0.1);
       border-bottom: 1px solid #00ff41;
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 0.5rem 0.75rem;
     }
     \`\`\`

4. **Status Cards and LED Indicators**
   - Create CPU / GPU / Network cards with neon borders and soft inner glow
   - Use circular LED dots for status (normal / warning / danger)
   - Example:
     \`\`\`css
     .cyberpunk-stat-card {
       background: rgba(0, 0, 0, 0.85);
       border-radius: 0.5rem;
       border: 1px solid rgba(0, 255, 255, 0.6);
       box-shadow:
         0 0 18px rgba(0, 255, 255, 0.4),
         inset 0 0 12px rgba(0, 255, 255, 0.12);
       padding: 0.75rem 1rem;
       text-align: center;
     }

     .cyberpunk-led {
       width: 10px;
       height: 10px;
       border-radius: 9999px;
       background: #00ff41;
       box-shadow:
         0 0 8px rgba(0, 255, 65, 0.8),
         0 0 16px rgba(0, 255, 65, 0.6);
       animation: ledPulse 1.6s ease-in-out infinite;
     }
     \`\`\`

5. **Scanlines, Data Rain and Cursor Animation**
   - Overlay vertical Matrix-style data rain in the background
   - Add a single horizontal scanline that sweeps from top to bottom
   - Use a blinking block cursor for the terminal
   - Example:
     \`\`\`css
     .cyberpunk-scanline {
       position: absolute;
       inset: 0;
       pointer-events: none;
       background: linear-gradient(
         to bottom,
         transparent,
         rgba(0, 255, 65, 0.35),
         transparent
       );
       mix-blend-mode: screen;
       animation: cyberScan 6s linear infinite;
     }

     @keyframes cyberScan {
       0% { transform: translateY(-100%); }
       100% { transform: translateY(100%); }
     }

     .cyberpunk-cursor {
       display: inline-block;
       width: 0.4rem;
       height: 0.9rem;
       background: #00ff41;
       box-shadow: 0 0 10px #00ff41;
       animation: cursorBlink 1s steps(2, start) infinite;
     }

     @keyframes cursorBlink {
       0%, 100% { opacity: 1; }
       50% { opacity: 0; }
     }
     \`\`\`

**Color Scheme (Neon Cyberpunk)**

- Background: \`#000000\`, \`#050810\`, \`#0a0f0a\`
- Primary neon: \`#00FF41\` (neon green), \`#00FFFF\` (neon cyan)
- Accent neon: \`#B967FF\` (neon purple), \`#FF00FF\` (neon magenta)
- Text: \`#e5e7eb\` (primary), \`#9ca3af\` (secondary)

**Important Notes**
- Major elements should have clear neon glow using text-shadow / box-shadow
- Keep backgrounds very dark to preserve contrast
- Use monospace fonts for terminal and metrics
- Animations can be rich but should share similar timing (2–8 seconds)
- Avoid low-contrast pastel colors; keep the strong cyberpunk identity`
  },

  // Default preview (matrix-dashboard / cyberpunk)
  fullPagePreviewId: 'cyberpunk',
  fullPageHTML: cyberpunkFullPageHTML,
  fullPageStyles: cyberpunkFullPageStyles,

  // Color scheme
  colorScheme: {
    'zh-CN': '主色黑色 (#0A0A0A)、霓虹綠色 (#00FF41)、霓虹青色 (#00FFFF)、半透明霓虹綠 (rgba(0,255,65,0.1-0.5))、半透明霓虹青 (rgba(0,255,255,0.1-0.5))',
    'en-US': 'Primary black (#0A0A0A), neon green (#00FF41), neon cyan (#00FFFF), semi-transparent neon green (rgba(0,255,65,0.1-0.5)), semi-transparent neon cyan (rgba(0,255,255,0.1-0.5))'
  },

  // Multiple preview support
  previews: [
    {
      id: 'matrix-dashboard',
      name: 'styles.visual.neonCyberpunk.previews.matrixDashboard',
      type: 'full',
      previewId: 'cyberpunk',
      description: 'styles.visual.neonCyberpunk.previews.matrixDashboardDesc',
      features: [
        'Matrix data stream background',
        'Terminal command interface',
        'System resource monitors (CPU/GPU/Network)',
        'LED status indicators',
        'Holographic display cards',
        'Timeline activity log',
        'Loading animations (scanner, pulse, data stream)',
        'Progress bars with scan effects',
        'Data table with hover effects',
        'Glitch text effects'
      ],
      html: cyberpunkFullPageHTML,
      styles: cyberpunkFullPageStyles
    },
    {
      id: 'gaming-store',
      name: 'styles.visual.neonCyberpunk.previews.gamingStore',
      type: 'full',
      previewId: 'cyberpunk-gaming-store',
      description: 'styles.visual.neonCyberpunk.previews.gamingStoreDesc',
      features: [
        'Multi-neon color palette (Green/Cyan/Pink/Purple/Orange)',
        'Hero banner with countdown timer',
        '6 category quick access cards',
        'Product grid with discount badges',
        'Platform icons (PC/Console/VR)',
        'Star rating system with reviews',
        'User review cards with likes',
        'Membership pricing tiers',
        'Statistics dashboard with counters',
        'Search and filter functionality',
        'Shopping cart with badge',
        'Wishlist functionality',
        'Glitch effects and RGB split animations',
        'Floating particles and data streams',
        'Neon flicker animations',
        'Holographic card effects',
        'Social media integration',
        'Payment method badges',
        'Floating action button (FAB)'
      ],
      html: cyberpunkGamingStoreHTML,
      styles: cyberpunkGamingStoreStyles
    },
    {
      id: 'matrix-terminal-enhanced',
      name: 'styles.visual.neonCyberpunk.previews.matrixTerminalEnhanced',
      type: 'full',
      previewId: 'cyberpunk-matrix-terminal',
      description: 'styles.visual.neonCyberpunk.previews.matrixTerminalEnhancedDesc',
      backgroundDesign: {
        'zh-CN': '多层次动态背景系统：(1) 基础层：深黑色渐变背景 (#000000 → #0a0f0a) 营造深邃空间感；(2) Matrix 雨层：50 列动态下落的日文片假名和二进制码，随机速度 (2-5秒) 和延迟，opacity: 0.7，创造经典 Matrix 数字雨效果；(3) 扫描线层：2px 高度的水平扫描线，3 秒循环从上到下移动，使用青色霓虹渐变，模拟 CRT 显示器扫描效果；(4) 玻璃态元素：所有内容卡片使用 backdrop-filter: blur(10px) 和半透明霓虹边框，与背景层次互动产生景深；(5) 数据流动画：Hero 区块包含 5 列二进制数据流，不同动画时长 (15-22秒) 制造异步流动感',
        'en-US': 'Multi-layered dynamic background system: (1) Base layer: Deep black gradient background (#000000 → #0a0f0a) creates spatial depth; (2) Matrix rain layer: 50 columns of falling Japanese katakana and binary code with randomized speed (2-5s) and delay, opacity: 0.7, recreating the classic Matrix digital rain effect; (3) Scan line layer: 2px height horizontal scan line cycling top-to-bottom in 3s, using cyan neon gradient to simulate CRT monitor scan effect; (4) Glass-morphism elements: All content cards use backdrop-filter: blur(10px) with semi-transparent neon borders, interacting with background layers to create depth perception; (5) Data flow animations: Hero section contains 5 columns of binary data streams with different animation durations (15-22s) creating asynchronous flow sensation'
      },
      features: [
        'Matrix rain background with Japanese katakana characters',
        'Full-screen scan line animation overlay',
        'Neon glow navigation bar with search and notifications',
        'Hero section with glitch effects and data stream background',
        'System monitoring dashboard (CPU/GPU/Network with progress bars)',
        'Interactive terminal interface with typing cursor animation',
        'LED status indicators with blinking effects',
        'Holographic 3D card hover effects',
        'Color-coded timeline with event history',
        'Active processes data table with hover highlighting',
        'Core modules grid with status information',
        'Control interface form with radio buttons and dropdowns',
        'Loading animations (scanner, pulse, data stream)',
        'Multiple progress bar styles with scan effects',
        'Smooth scroll reveal animations',
        'Responsive design with mobile breakpoints',
        'Footer with system status indicator',
        'Complete JavaScript interactivity from original file'
      ],
      html: cyberpunkMatrixTerminalHTML,
      styles: cyberpunkMatrixTerminalStyles
    }
  ]
};
