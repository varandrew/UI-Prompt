// Terminal CLI - Digital Retro Command Line
// 終端命令行 - 数位復古命令行

// Import Y2K Terminal variant
import {
  terminalCLIY2KFullPageHTML,
  terminalCLIY2KFullPageStyles
} from './terminalCLI-Y2K-FullPage';

export const terminalCLI = 
  {
    id: 'terminal-cli',
    title: 'styles.visual.terminal-cli.title',
    description: 'styles.visual.terminal-cli.description',
    demoHTML: `
      <div class="w-full h-full bg-black p-6 font-mono text-green-400 overflow-hidden">
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-cyan-400">user@system</span>
            <span class="text-white">~</span>
            <span class="text-yellow-400">$</span>
            <span class="animate-pulse">_</span>
          </div>
          <div class="text-sm opacity-80 space-y-1">
            <div><span class="text-purple-400">&gt;</span> npm run dev</div>
            <div class="text-green-300">✓ Server started</div>
            <div class="text-blue-400">→ Local: http://localhost:5173</div>
          </div>
        </div>
        <div class="border border-green-600 p-3 rounded">
          <div class="flex gap-2 items-center mb-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="text-xs space-y-1">
            <div><span class="text-blue-400">[INFO]</span> Building...</div>
            <div><span class="text-green-400">[SUCCESS]</span> Ready ✓</div>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    fullPageHTML: `
      <!-- Terminal CLI Interface - Professional Developer Tool Style -->
      <div class="terminal-fullpage min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center p-6">

        <!-- Terminal Window -->
        <div class="terminal-window w-full max-w-5xl mx-auto">

          <!-- Title Bar (macOS Style) -->
          <div class="terminal-titlebar flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div class="flex items-center gap-2">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
                <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
              </div>
              <span class="text-gray-400 text-sm font-medium ml-4">bash — 80×24</span>
            </div>
            <div class="flex items-center gap-3 text-gray-500">
              <button class="hover:text-gray-300 transition-colors">─</button>
              <button class="hover:text-gray-300 transition-colors">□</button>
              <button class="hover:text-gray-300 transition-colors">×</button>
            </div>
          </div>

          <!-- Terminal Content -->
          <div class="terminal-content bg-gray-900 p-6 font-mono text-sm overflow-y-auto" style="height: 600px; max-height: 80vh;">

            <!-- Welcome Section -->
            <div class="mb-6">
              <div class="text-gray-400 text-xs mb-4">Last login: Sun Nov 6 12:34:56 on ttys001</div>

              <!-- ASCII Art Banner -->
              <div class="text-cyan-400 mb-4 leading-tight">
                <pre style="font-size: 10px; line-height: 1.2;">
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃    TERMINAL INTERFACE DESIGN SYSTEM        ┃
┃    Professional CLI Development Style      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛</pre>
              </div>
            </div>

            <!-- Command History -->
            <div class="space-y-3 mb-6">
              <!-- Command 1 -->
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-green-400">user@macbook</span>
                  <span class="text-gray-500">:</span>
                  <span class="text-blue-400">~/projects</span>
                  <span class="text-white">$</span>
                  <span class="text-gray-300">npm run dev</span>
                </div>
                <div class="ml-4 text-gray-400 space-y-1">
                  <div><span class="text-purple-400">&gt;</span> Starting development server...</div>
                  <div><span class="text-green-400">✓</span> Server running at <span class="text-cyan-400 underline">http://localhost:3000</span></div>
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">⚡</span>
                    <div class="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div class="terminal-progress-bar h-full bg-gradient-to-r from-cyan-500 to-blue-500" style="width: 89%; transition: width 2s ease;"></div>
                    </div>
                    <span class="text-gray-500 text-xs">89%</span>
                  </div>
                </div>
              </div>

              <!-- Command 2 -->
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-green-400">user@macbook</span>
                  <span class="text-gray-500">:</span>
                  <span class="text-blue-400">~/projects</span>
                  <span class="text-white">$</span>
                  <span class="text-gray-300">git status</span>
                </div>
                <div class="ml-4 text-gray-400 space-y-1">
                  <div class="text-cyan-400">On branch <span class="text-white">main</span></div>
                  <div>Your branch is up to date with <span class="text-gray-500">'origin/main'</span></div>
                  <div class="text-green-400 mt-2">nothing to commit, working tree clean</div>
                </div>
              </div>

              <!-- Command 3 -->
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-green-400">user@macbook</span>
                  <span class="text-gray-500">:</span>
                  <span class="text-blue-400">~/projects</span>
                  <span class="text-white">$</span>
                  <span class="text-gray-300">cat system.log</span>
                </div>
                <div class="ml-4 text-xs space-y-1">
                  <div><span class="text-blue-400">[INFO]</span> <span class="text-gray-500">2025-11-06 12:34:01</span> Application started</div>
                  <div><span class="text-green-400">[SUCCESS]</span> <span class="text-gray-500">2025-11-06 12:34:05</span> Database connected</div>
                  <div><span class="text-cyan-400">[DEBUG]</span> <span class="text-gray-500">2025-11-06 12:34:08</span> Loading configurations...</div>
                </div>
              </div>
            </div>

            <!-- Interactive Command Panel -->
            <div class="mb-6">
              <div class="border border-cyan-500/30 bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span class="text-cyan-400 font-semibold">AVAILABLE COMMANDS</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <a href="javascript:void(0)" class="terminal-cmd-btn group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 rounded transition-all cursor-pointer">
                    <span class="text-cyan-500 group-hover:text-cyan-400">[1]</span>
                    <span class="text-gray-300 group-hover:text-white text-sm">Run Tests</span>
                  </a>
                  <a href="javascript:void(0)" class="terminal-cmd-btn group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-green-500/50 hover:border-green-400 hover:bg-green-500/10 rounded transition-all cursor-pointer">
                    <span class="text-green-500 group-hover:text-green-400">[2]</span>
                    <span class="text-gray-300 group-hover:text-white text-sm">Build Prod</span>
                  </a>
                  <a href="javascript:void(0)" class="terminal-cmd-btn group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/10 rounded transition-all cursor-pointer">
                    <span class="text-yellow-500 group-hover:text-yellow-400">[3]</span>
                    <span class="text-gray-300 group-hover:text-white text-sm">Deploy</span>
                  </a>
                  <a href="javascript:void(0)" class="terminal-cmd-btn group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 rounded transition-all cursor-pointer">
                    <span class="text-purple-500 group-hover:text-purple-400">[4]</span>
                    <span class="text-gray-300 group-hover:text-white text-sm">View Logs</span>
                  </a>
                  <a href="javascript:void(0)" class="terminal-cmd-btn group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 rounded transition-all cursor-pointer">
                    <span class="text-blue-500 group-hover:text-blue-400">[5]</span>
                    <span class="text-gray-300 group-hover:text-white text-sm">System Info</span>
                  </a>
                  <a href="javascript:void(0)" class="terminal-cmd-btn group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-red-500/50 hover:border-red-400 hover:bg-red-500/10 rounded transition-all cursor-pointer">
                    <span class="text-red-500 group-hover:text-red-400">[6]</span>
                    <span class="text-gray-300 group-hover:text-white text-sm">Clear</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Current Prompt with Blinking Cursor -->
            <div class="flex items-center gap-2">
              <span class="text-green-400">user@macbook</span>
              <span class="text-gray-500">:</span>
              <span class="text-blue-400">~/projects</span>
              <span class="text-white">$</span>
              <span class="terminal-cursor bg-cyan-500 inline-block w-2 h-4 ml-1"></span>
            </div>

          </div>

          <!-- Footer Status Bar -->
          <div class="terminal-footer flex items-center justify-between px-4 py-2 bg-gray-800 border-t border-gray-700 text-xs">
            <div class="flex items-center gap-4">
              <span class="text-green-400">● Online</span>
              <span class="text-gray-500">|</span>
              <span class="text-gray-400">zsh 5.9</span>
            </div>
            <div class="flex items-center gap-4 text-gray-500">
              <span>Ln 42, Col 8</span>
              <span>UTF-8</span>
              <span>100%</span>
            </div>
          </div>

        </div>

        <!-- Click Command Feedback (Hidden by default) -->
        <div id="terminal-feedback" class="fixed bottom-8 right-8 bg-cyan-500 text-black px-6 py-3 rounded-lg font-mono text-sm font-bold shadow-lg opacity-0 transition-opacity duration-300">
          Command executed!
        </div>

        <script>
          // Blinking Cursor Animation
          const cursor = document.querySelector('.terminal-cursor');
          setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
          }, 530);

          // Command Button Click Handlers
          const cmdButtons = document.querySelectorAll('.terminal-cmd-btn');
          const feedback = document.getElementById('terminal-feedback');
          const terminalContent = document.querySelector('.terminal-content');

          cmdButtons.forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
              e.preventDefault();

              // Command names
              const commands = ['npm test', 'npm run build', 'npm run deploy', 'tail -f logs/app.log', 'uname -a', 'clear'];
              const cmdName = commands[index];

              // Show feedback
              feedback.textContent = \`Executing: \${cmdName}\`;
              feedback.style.opacity = '1';
              setTimeout(() => {
                feedback.style.opacity = '0';
              }, 2000);

              // Add command to terminal
              const newCommand = document.createElement('div');
              newCommand.className = 'mt-4';
              newCommand.innerHTML = \`
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-green-400">user@macbook</span>
                  <span class="text-gray-500">:</span>
                  <span class="text-blue-400">~/projects</span>
                  <span class="text-white">$</span>
                  <span class="text-gray-300">\${cmdName}</span>
                </div>
                <div class="ml-4 text-gray-400">
                  <div class="text-green-400">✓ Command executed successfully</div>
                </div>
              \`;

              // Insert before cursor line
              const cursorLine = terminalContent.querySelector('.flex.items-center.gap-2:last-child');
              terminalContent.insertBefore(newCommand, cursorLine);

              // Scroll to bottom
              terminalContent.scrollTop = terminalContent.scrollHeight;
            });
          });

          // Typewriter Effect for Initial Load
          let typed = false;
          window.addEventListener('load', () => {
            if (!typed) {
              typed = true;
              // Initial animation can be added here
            }
          });
        </script>

      </div>
    `,
    // 模板級 customPrompt (简短 Prompt，100-300字)
    customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Terminal CLI 终端界面」示例风格高度接近的 UI。
要求：保持黑色背景、磷光文字、等宽字体和命令行历史输出这些核心特征，只允许替换命令内容、提示符文案与辅助模块，不改变整体终端布局与配色逻辑。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 開發者工具、工程師個人页、技術部門介紹页的終端風格 Hero 区
- 展示後端服务、部署流程、CI/CD Pipeline 狀態的可視化終端面板
- 想要營造「专業工程、命令行、DevOps」氛圍的产品页

【整体布局结构】
1. 背景层
   - 使用純黑或近黑漸变背景（如 #000000、#020617），让終端視窗成為視覺焦點。
2. 主終端視窗
   - 顶部为标题栏，可使用 macOS 或 Linux 終端風格的三色窗口控制按鈕。
   - 下方為終端內容区：显示登入資訊、ASCII Banner、命令歷史与輸出結果。
   - 滾動区高度限制在一定範圍（如 400–600px），並允許垂直捲動。
3. 命令行与輸出
   - 以多段「user@host:~$ command」形式呈現歷史命令。
   - 每段命令下方對應輸出；可包含成功、错誤与提示信息。

【色彩与材质】
1. 終端配色
   - 背景: 純黑 (#000000) 或深灰 (#111827)。
   - 文字: 磷光綠 (#00ff41 或 #4EC9B0)、青色 (#00FFFF)、琥珀黃 (#FFA500)、错誤紅 (#f48771)。
   - 提示符、路徑、标籤颜色應遵循一次性定義的「語法高亮」色板，避免任意散色。
2. 质感
   - 整体保持扁平，不使用玻璃或立体阴影，只靠文字与少量边框表現层次。

【排版与細節】
1. 字体
   - 使用等寬字体（如 'Courier New', 'Fira Code', 'JetBrains Mono'），保證文字在行內對齊。
2. 行距与間距
   - 行距略緊（如 1.4 左右），多行日志看起來像真實終端輸出。
   - 各段命令之間使用固定垂直間距（例如 0.75rem–1rem），維持節奏感。
3. ASCII 藝術
   - 可在頂部插入 ASCII Banner 标題（产品名稱或系統名稱），居左或略偏左排列。

【交互与动效】
1. 光标
   - 在當前輸入行尾部显示閃爍光标（下劃线或方塊），週期約 1 秒，使用 steps() 或 opacity 動画。
2. Hover
   - 可對可點擊按鈕（如快捷命令、範例片段）提供輕微亮度提升或边框变化。
3. 動画
   - 若需要模擬輸出過程，可用逐行淡入或「打字機」效果呈現新命令与輸出。

【输出要求】
- 使用语义化 HTML（header / main / section）將标題欄、終端內容区与輔助操作区分開。
- 使用 TailwindCSS 风格原子类控制背景、排版和配色，並保留對等寬字体与暗色主題的支持。
- 生成的界面必須保留「黑色背景 + 等寬磷光文字 + 命令行歷史 + 閃爍光标」這些关鍵特徵，让人一眼看出是专業終端界面。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a terminal CLI style interface that looks very close to the current “Terminal CLI” demo.
Keep the black background, phosphor-style text, monospace fonts and command history output as core traits. You may change commands, prompts and auxiliary modules, but you should not change the overall terminal layout or color logic. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Terminal-themed hero sections for developer tools, engineer portfolios or technical team pages
- Dashboards that show backend services, deployment pipelines or CI/CD status in a CLI-like view
- Product pages that need to convey “professional engineering / DevOps / command-line” atmosphere

[Layout structure]
1. Background layer
   - Use pure black or near-black gradients (for example #000000, #020617) so the terminal window stands out.
2. Main terminal window
   - Title bar at the top, optionally macOS- or Linux-style with three traffic-light window buttons.
   - Below, a scrollable terminal content area containing login info, an ASCII banner, command history and outputs.
3. Commands and output
   - Display multiple \`user@host:~$ command\` prompts followed by their outputs.
   - Include successes, warnings and errors to show variety.

[Color and materials]
1. Terminal palette
   - Background: pure black (#000000) or deep grey (#111827).
   - Text: phosphor greens (#00ff41 or #4EC9B0), cyan (#00FFFF), amber (#FFA500), error red (#f48771).
   - Prompt, path and tags should use a consistent syntax-highlighting palette rather than arbitrary colors.
2. Rendering
   - Keep everything flat: no glass or heavy shadows, just text and minimal borders.

[Typography and details]
1. Fonts
   - Use monospace fonts such as 'Courier New', 'Fira Code' or 'JetBrains Mono' to ensure alignment.
2. Spacing
   - Use relatively tight line-height (around 1.4) so logs feel dense and terminal-like.
   - Maintain consistent vertical spacing (for example 0.75–1rem) between command groups.
3. ASCII art
   - Place an ASCII banner (product or system name) near the top, left-aligned or slightly indented.

[Interaction and motion]
1. Cursor
   - Show a blinking cursor (underscore or block) at the end of the current input line, with ~1s cycles using steps() or opacity.
2. Hover
   - Provide subtle brightness or border changes for any clickable command shortcuts or helper buttons.
3. Motion
   - When simulating command execution, reveal lines with a short fade or typewriter-like animation.

[Output requirements]
- Use semantic HTML (header / main / section) to separate title bar, terminal content and helper controls.
- Use Tailwind-style utilities for background, typography and colors, preserving the dark theme and monospace font styling.
- The generated UI must preserve “black background + monospace phosphor text + command history + blinking cursor” as key cues so it is instantly recognized as a professional terminal interface.`
  },

    // 模板級 stylePrompt (詳細 Prompt，1000-2000字)
    stylePrompt: {
      'zh-CN': `角色：你是专精於終端命令行界面（Terminal CLI）風格的 UI 设計師，专注於復古 CRT 显示器美學和专業開發工具界面。

場景定位：為開發者工具、系統管理界面或技術文档网站打造具有終端風格的界面，通過 CRT 掃描线和等寬字体傳達技術专業性。

核心设計語言：

1. **CRT 掃描线系統**：
   - 水平掃描线：
     \`\`\`css
     .terminal-scanlines::before {
       content: '';
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: repeating-linear-gradient(
         0deg,
         rgba(0, 0, 0, 0.15),
         rgba(0, 0, 0, 0.15) 1px,
         transparent 1px,
         transparent 2px
       );
       pointer-events: none;
       z-index: 1000;
       animation: scan-lines 8s linear infinite;
     }

     @keyframes scan-lines {
       0% { transform: translateY(0); }
       100% { transform: translateY(100%); }
     }
     \`\`\`

   - CRT 光暈效果：
     \`\`\`css
     .terminal-content {
       background: linear-gradient(180deg, #1e1e1e 0%, #252526 100%);
       text-shadow: 0 0 5px currentColor;
     }
     \`\`\`

2. **閃爍光标系統**：
   - 塊狀光标：
     \`\`\`css
     .terminal-cursor {
       display: inline-block;
       width: 8px;
       height: 16px;
       background: #33ff33;
       animation: cursor-blink 1.06s steps(1) infinite;
       box-shadow: 0 0 8px rgba(51, 255, 51, 0.8);
     }

     @keyframes cursor-blink {
       0%, 49% { opacity: 1; }
       50%, 100% { opacity: 0; }
     }
     \`\`\`

   - 下劃线光标：
     \`\`\`css
     .terminal-cursor-underline {
       display: inline-block;
       width: 8px;
       height: 2px;
       border-bottom: 2px solid #33ff33;
       animation: cursor-blink 1s infinite;
     }
     \`\`\`

配色方案：

主色調（經典終端配色）：
- 荧光綠：#33ff33 (經典綠色終端)
- 琥珀色：#ffb000 (琥珀色單色显示器)
- 純白：#ffffff (現代終端)
- 蘋果綠：#00ff00 (Apple II 風格)

語法高亮色（VS Code Dark+ 主題）：
- 用戶名/成功：#4EC9B0 (青綠色)
- 路徑/关鍵字：#569cd6 (藍色)
- 命令/字符串：#ce9178 (橙色)
- 警告：#dcdcaa (黃色)
- 变量：#c586c0 (紫色)
- 错誤：#f48771 (紅色)

背景色（暗色系）：
- 純黑：#000000
- VS Code 背景：#1e1e1e
- 深灰：#252526

3. **命令提示符设計**：
   \`\`\`css
   .terminal-prompt {
     display: flex;
     align-items: center;
     gap: 0.5rem;
     font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
     font-size: 14px;
   }

   .terminal-user { color: #4EC9B0; }      /* 綠色 */
   .terminal-separator { color: #6A9955; }  /* 暗綠 */
   .terminal-path { color: #569cd6; }       /* 藍色 */
   .terminal-symbol { color: #ffffff; }     /* 白色 */
   \`\`\`

4. **命令輸出樣式**：
   \`\`\`css
   .terminal-output {
     margin-left: 1rem;
     color: #cccccc;
   }

   .terminal-success { color: #4EC9B0; }
   .terminal-error { color: #f48771; }
   .terminal-info { color: #569cd6; }
   .terminal-warning { color: #dcdcaa; }
   \`\`\`

5. **互動按鈕设計**：
   \`\`\`css
   .terminal-cmd-btn {
     background: #1e1e1e;
     border: 1px solid #22d3ee;
     color: #22d3ee;
     padding: 0.5rem 1rem;
     font-family: monospace;
     cursor: pointer;
     transition: all 0.2s;
   }

   .terminal-cmd-btn:hover {
     background: rgba(34, 211, 238, 0.1);
     border-color: #06b6d4;
     box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
   }

   .terminal-cmd-btn:active {
     transform: scale(0.98);
   }
   \`\`\`

技術實現要點：

1. **等寬字体棧**：
   - font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', 'Courier New', monospace;

2. **滾動條樣式**（Webkit）：
   \`\`\`css
   .terminal-content::-webkit-scrollbar {
     width: 10px;
   }

   .terminal-content::-webkit-scrollbar-track {
     background: #1e1e1e;
   }

   .terminal-content::-webkit-scrollbar-thumb {
     background: #424242;
     border-radius: 5px;
   }
   \`\`\`

3. **macOS 風格窗口按鈕**：
   \`\`\`css
   .terminal-window-btn {
     width: 12px;
     height: 12px;
     border-radius: 50%;
   }

   .terminal-close { background: #ff5f56; }
   .terminal-minimize { background: #ffbd2e; }
   .terminal-maximize { background: #27c93f; }
   \`\`\`

4. **ASCII 藝術边框**：
   使用 <pre> 标籤和 Unicode 字符創建 ASCII 边框：
   ┏━━━━━━━━━━━━━┓
   ┃ TERMINAL    ┃
   ┗━━━━━━━━━━━━━┛

重要提示：
- 所有文本必須使用等寬字体，確保字符對齊
- 避免使用圖像，优先使用 CSS 和 Unicode 字符
- 保持高對比度（文字亮度 > 70%，背景暗度 > 80%）
- 光标閃爍頻率设置為 530ms（标準終端頻率）
- 使用 text-shadow: 0 0 5px currentColor 模擬 CRT 發光效果
- 為互動元素添加鍵盤快捷鍵提示（如 [1], [2], [Ctrl+C]）`,

      'en-US': `Role: You are a UI designer specializing in Terminal CLI style, focusing on retro CRT display aesthetics and professional developer tool interfaces.

Scenario: Create terminal-style interfaces for developer tools, system admin panels, or technical documentation sites, conveying technical professionalism through CRT scanlines and monospace fonts.

Core Design Language:

1. **CRT Scanline System**:
   - Horizontal scanlines:
     \`\`\`css
     .terminal-scanlines::before {
       content: '';
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: repeating-linear-gradient(
         0deg,
         rgba(0, 0, 0, 0.15),
         rgba(0, 0, 0, 0.15) 1px,
         transparent 1px,
         transparent 2px
       );
       pointer-events: none;
       z-index: 1000;
       animation: scan-lines 8s linear infinite;
     }

     @keyframes scan-lines {
       0% { transform: translateY(0); }
       100% { transform: translateY(100%); }
     }
     \`\`\`

   - CRT glow effect:
     \`\`\`css
     .terminal-content {
       background: linear-gradient(180deg, #1e1e1e 0%, #252526 100%);
       text-shadow: 0 0 5px currentColor;
     }
     \`\`\`

2. **Blinking Cursor System**:
   - Block cursor:
     \`\`\`css
     .terminal-cursor {
       display: inline-block;
       width: 8px;
       height: 16px;
       background: #33ff33;
       animation: cursor-blink 1.06s steps(1) infinite;
       box-shadow: 0 0 8px rgba(51, 255, 51, 0.8);
     }

     @keyframes cursor-blink {
       0%, 49% { opacity: 1; }
       50%, 100% { opacity: 0; }
     }
     \`\`\`

Color Scheme:

Primary (Classic Terminal Colors):
- Phosphor Green: #33ff33 (Classic green terminal)
- Amber: #ffb000 (Amber monochrome display)
- Pure White: #ffffff (Modern terminal)
- Apple Green: #00ff00 (Apple II style)

Syntax Highlighting (VS Code Dark+ Theme):
- Username/Success: #4EC9B0 (Cyan-green)
- Path/Keywords: #569cd6 (Blue)
- Commands/Strings: #ce9178 (Orange)
- Warnings: #dcdcaa (Yellow)
- Variables: #c586c0 (Purple)
- Errors: #f48771 (Red)

Background (Dark Theme):
- Pure Black: #000000
- VS Code Background: #1e1e1e
- Dark Gray: #252526

3. **Command Prompt Design**:
   \`\`\`css
   .terminal-prompt {
     display: flex;
     align-items: center;
     gap: 0.5rem;
     font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
     font-size: 14px;
   }

   .terminal-user { color: #4EC9B0; }      /* Green */
   .terminal-separator { color: #6A9955; }  /* Dark green */
   .terminal-path { color: #569cd6; }       /* Blue */
   .terminal-symbol { color: #ffffff; }     /* White */
   \`\`\`

Important Notes:
- All text must use monospace fonts for character alignment
- Avoid images, prefer CSS and Unicode characters
- Maintain high contrast (text brightness > 70%, background darkness > 80%)
- Set cursor blink rate to 530ms (standard terminal frequency)
- Use text-shadow: 0 0 5px currentColor to simulate CRT glow
- Add keyboard shortcut hints for interactive elements (e.g., [1], [2], [Ctrl+C])`
    },

    fullPageStyles: `
      /* Terminal Full Page Styles - VS Code Dark+ Theme Inspired */

      .terminal-fullpage {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', 'Courier New', monospace;
      }

      .terminal-window {
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        overflow: hidden;
        animation: terminal-fade-in 0.6s ease-out;
      }

      @keyframes terminal-fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .terminal-titlebar {
        -webkit-app-region: drag;
        user-select: none;
      }

      .terminal-content {
        background: linear-gradient(180deg, #1e1e1e 0%, #252526 100%);
        scrollbar-width: thin;
        scrollbar-color: #424242 #1e1e1e;
      }

      .terminal-content::-webkit-scrollbar {
        width: 10px;
      }

      .terminal-content::-webkit-scrollbar-track {
        background: #1e1e1e;
      }

      .terminal-content::-webkit-scrollbar-thumb {
        background: #424242;
        border-radius: 5px;
      }

      .terminal-content::-webkit-scrollbar-thumb:hover {
        background: #4e4e4e;
      }

      /* Blinking Cursor */
      .terminal-cursor {
        animation: terminal-blink 1.06s steps(1) infinite;
        box-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
      }

      @keyframes terminal-blink {
        0%, 49% {
          opacity: 1;
        }
        50%, 100% {
          opacity: 0;
        }
      }

      /* Command Button Hover Effects */
      .terminal-cmd-btn {
        position: relative;
        overflow: hidden;
      }

      .terminal-cmd-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(34, 211, 238, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.5s, height 0.5s;
      }

      .terminal-cmd-btn:hover::before {
        width: 300px;
        height: 300px;
      }

      .terminal-cmd-btn:active {
        transform: scale(0.98);
      }

      /* Progress Bar Animation */
      .terminal-progress-bar {
        animation: terminal-progress-glow 2s ease-in-out infinite;
      }

      @keyframes terminal-progress-glow {
        0%, 100% {
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
        }
      }

      /* Feedback Toast */
      #terminal-feedback {
        z-index: 1000;
        animation: terminal-slide-up 0.3s ease-out;
      }

      @keyframes terminal-slide-up {
        from {
          transform: translateY(20px);
        }
        to {
          transform: translateY(0);
        }
      }

      /* Syntax Highlighting Colors (VS Code Dark+ Theme) */
      .terminal-content .text-green-400 {
        color: #4EC9B0; /* User/success */
      }

      .terminal-content .text-blue-400 {
        color: #569cd6; /* Paths/keywords */
      }

      .terminal-content .text-cyan-400 {
        color: #4EC9B0; /* Strings/commands */
      }

      .terminal-content .text-yellow-400 {
        color: #dcdcaa; /* Warnings */
      }

      .terminal-content .text-purple-400 {
        color: #c586c0; /* Variables */
      }

      .terminal-content .text-red-500,
      .terminal-content .text-red-400 {
        color: #f48771; /* Errors */
      }

      .terminal-content .text-gray-400 {
        color: #cccccc; /* Comments */
      }

      .terminal-content .text-gray-500 {
        color: #6A9955; /* Darker comments */
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .terminal-window {
          max-width: 100%;
        }

        .terminal-content {
          height: 500px;
          font-size: 12px;
          padding: 1rem;
        }

        .terminal-titlebar span {
          font-size: 12px;
        }

        .terminal-cmd-btn {
          font-size: 11px;
          padding: 0.5rem;
        }

        .grid.grid-cols-3 {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* Accessibility */
      .terminal-cmd-btn:focus {
        outline: 2px solid #4EC9B0;
        outline-offset: 2px;
      }

      /* Print Styles */
      @media print {
        .terminal-fullpage {
          background: white;
          color: black;
        }

        .terminal-cursor {
          display: none;
        }
      }
    `,
    colorScheme: 'styles.visual.terminal-cli.colorScheme',

    // Preview variants
    previews: [
      {
        id: 'terminal-cli-y2k',
        name: 'styles.retro.digitalRetro.terminalCLI.previews.y2kRetroFuture',
        type: 'full',
        description: 'styles.retro.digitalRetro.terminalCLI.previews.y2kRetroFutureDesc',
        features: [
          'Y2K Glassmorphism Terminal Window',
          'Bubble Decorations with Gradient Animations',
          'CRT Scanline Effects + Phosphor Text',
          'Cyan/Amber Phosphor Color Scheme',
          'Retro Future Dashboard Cards',
          'Animated Progress Bars with Glow',
          'Glass-effect Navigation Bar',
          'Floating Action Button (FAB)',
          'ASCII Art Terminal Banner',
          'macOS-style Window Controls'
        ],
        colorScheme: {
          'zh-CN': '背景青藍漸变 (#ECFEFF, #EFF6FF, #CCFBF1)、主色青色 (#22D3EE)、翠綠磷光 (#10b981)、琥珀色磷光 (#ff9900)、玻璃效果半透明白 (rgba(255,255,255,0.7))',
          'en-US': 'Background cyan-blue gradient (#ECFEFF, #EFF6FF, #CCFBF1), primary cyan (#22D3EE), emerald phosphor (#10b981), amber phosphor (#ff9900), glass effect semi-transparent white (rgba(255,255,255,0.7))'
        },
        html: terminalCLIY2KFullPageHTML,
        styles: terminalCLIY2KFullPageStyles
      }
    ]
  }

