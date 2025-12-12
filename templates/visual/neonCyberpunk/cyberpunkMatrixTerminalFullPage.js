// Cyberpunk Matrix Terminal - Complete Original Design from cyberpunk-preview.html
// 完整保留原始 HTML、CSS 和 JavaScript,不做任何修改

export const cyberpunkMatrixTerminalHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk UI Preview - Matrix Hacker Terminal</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen">
    <!-- Matrix数据流背景 -->
    <div class="matrix-bg" id="matrixBg"></div>
    <div class="scan-line"></div>

    <!-- 导航栏 -->
    <nav class="glass-morphism sticky top-0 z-50 px-6 py-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-6">
                <span class="text-2xl font-bold neon-glow glitch" data-text="[CYBER]">[CYBER]</span>
                <div class="hidden md:flex space-x-4">
                    <a href="#terminal" class="hover:text-cyan-400 transition-colors">TERMINAL</a>
                    <a href="#monitoring" class="hover:text-cyan-400 transition-colors">MONITORING</a>
                    <a href="#timeline" class="hover:text-cyan-400 transition-colors">TIMELINE</a>
                    <a href="#interface" class="hover:text-cyan-400 transition-colors">INTERFACE</a>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="led-indicator led-green"></div>
                <span class="text-xs">SYSTEM ONLINE</span>
                <div class="data-loader"></div>
            </div>
        </div>
    </nav>

    <!-- Hero区域 -->
    <section class="min-h-screen flex items-center justify-center px-6 py-20">
        <div class="text-center max-w-4xl">
            <h1 class="text-6xl md:text-8xl font-bold mb-6 neon-glow">
                MATRIX<br>
                <span class="neon-cyan-glow">TERMINAL</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 opacity-80">
                System Monitoring Interface v2.0.8
            </p>
            <div class="glass-morphism p-6 rounded-lg max-w-md mx-auto">
                <div class="text-left">
                    <div class="flex justify-between mb-2">
                        <span>SYSTEM STATUS:</span>
                        <span class="text-green-400">OPERATIONAL</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>UPTIME:</span>
                        <span id="uptime">24:17:03</span>
                    </div>
                    <div class="flex justify-between">
                        <span>CONNECTIONS:</span>
                        <span class="pulse">1,337</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 终端命令界面 -->
    <section id="terminal" class="py-20 px-6">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl font-bold mb-8 neon-glow text-center">TERMINAL INTERFACE</h2>
            <div class="glass-morphism rounded-lg p-6">
                <div class="flex items-center mb-4">
                    <div class="led-indicator led-cyan mr-2"></div>
                    <span class="text-sm">root@matrix:~$</span>
                </div>
                <div id="terminalContent" class="font-mono text-sm space-y-2">
                    <div>$ system monitor --status</div>
                    <div class="ml-4 text-cyan-400">Initializing system scan...</div>
                    <div class="ml-4">CPU: <span class="text-green-400">23%</span> | RAM: <span class="text-yellow-400">4.2GB/8GB</span></div>
                    <div class="ml-4">Network: <span class="text-green-400">Connected</span> | Security: <span class="text-green-400">Enabled</span></div>
                    <div class="ml-4 text-cyan-400">Scan complete. All systems operational.</div>
                    <div class="flex items-center">
                        <span>$ </span>
                        <span class="terminal-cursor ml-1"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 系统监控仪表板 -->
    <section id="monitoring" class="py-20 px-6">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl font-bold mb-8 neon-glow text-center">SYSTEM MONITORING</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <!-- CPU监控 -->
                <div class="glass-morphism rounded-lg p-6 holographic-card">
                    <h3 class="text-xl font-bold mb-4 neon-cyan-glow">CPU USAGE</h3>
                    <div class="text-4xl font-bold mb-4">23%</div>
                    <div class="progress-bar h-2 bg-gray-800 rounded-full mb-4">
                        <div class="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" style="width: 23%"></div>
                    </div>
                    <div class="text-xs opacity-70">
                        <div>Cores: 8 @ 3.2GHz</div>
                        <div>Temp: 42°C</div>
                    </div>
                </div>

                <!-- GPU监控 -->
                <div class="glass-morphism rounded-lg p-6 holographic-card">
                    <h3 class="text-xl font-bold mb-4 neon-cyan-glow">GPU USAGE</h3>
                    <div class="text-4xl font-bold mb-4">67%</div>
                    <div class="progress-bar h-2 bg-gray-800 rounded-full mb-4">
                        <div class="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" style="width: 67%"></div>
                    </div>
                    <div class="text-xs opacity-70">
                        <div>RTX 3080</div>
                        <div>VRAM: 8.2GB/10GB</div>
                    </div>
                </div>

                <!-- 网络监控 -->
                <div class="glass-morphism rounded-lg p-6 holographic-card">
                    <h3 class="text-xl font-bold mb-4 neon-cyan-glow">NETWORK</h3>
                    <div class="text-4xl font-bold mb-4">1.2GB/s</div>
                    <div class="progress-bar h-2 bg-gray-800 rounded-full mb-4">
                        <div class="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full" style="width: 45%"></div>
                    </div>
                    <div class="text-xs opacity-70">
                        <div>Download: 800MB/s</div>
                        <div>Upload: 400MB/s</div>
                    </div>
                </div>
            </div>

            <!-- 数据表格 -->
            <div class="glass-morphism rounded-lg p-6 mt-8">
                <h3 class="text-xl font-bold mb-4 neon-cyan-glow">ACTIVE PROCESSES</h3>
                <div class="overflow-x-auto">
                    <table class="w-full cyber-table">
                        <thead>
                            <tr class="border-b border-cyan-800">
                                <th class="text-left py-2">PID</th>
                                <th class="text-left py-2">PROCESS</th>
                                <th class="text-left py-2">CPU</th>
                                <th class="text-left py-2">MEMORY</th>
                                <th class="text-left py-2">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-800">
                                <td class="py-2">1337</td>
                                <td class="py-2">matrix-core</td>
                                <td class="py-2">12%</td>
                                <td class="py-2">2.1GB</td>
                                <td class="py-2"><span class="led-indicator led-green inline-block mr-2"></span>Active</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-2">2048</td>
                                <td class="py-2">neon-render</td>
                                <td class="py-2">8%</td>
                                <td class="py-2">1.5GB</td>
                                <td class="py-2"><span class="led-indicator led-green inline-block mr-2"></span>Active</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-2">4096</td>
                                <td class="py-2">data-sync</td>
                                <td class="py-2">3%</td>
                                <td class="py-2">512MB</td>
                                <td class="py-2"><span class="led-indicator led-cyan inline-block mr-2"></span>Idle</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <!-- 时间轴 -->
    <section id="timeline" class="py-20 px-6">
        <div class="container mx-auto max-w-4xl">
            <h2 class="text-4xl font-bold mb-8 neon-glow text-center">SYSTEM TIMELINE</h2>
            <div class="space-y-8">
                <div class="glass-morphism rounded-lg p-6 border-l-4 border-green-400">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-xl font-bold neon-cyan-glow">System Initialization</h3>
                            <p class="opacity-80">Core systems online and ready</p>
                        </div>
                        <span class="text-sm opacity-60">00:00:00</span>
                    </div>
                </div>
                <div class="glass-morphism rounded-lg p-6 border-l-4 border-cyan-400">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-xl font-bold neon-cyan-glow">Network Connection</h3>
                            <p class="opacity-80">Established secure connection to matrix</p>
                        </div>
                        <span class="text-sm opacity-60">00:00:15</span>
                    </div>
                </div>
                <div class="glass-morphism rounded-lg p-6 border-l-4 border-yellow-400">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-xl font-bold neon-cyan-glow">Security Scan</h3>
                            <p class="opacity-80">Running comprehensive security protocols</p>
                        </div>
                        <span class="text-sm opacity-60">00:01:30</span>
                    </div>
                </div>
                <div class="glass-morphism rounded-lg p-6 border-l-4 border-green-400">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-xl font-bold neon-cyan-glow">Ready State</h3>
                            <p class="opacity-80">All systems operational and monitoring active</p>
                        </div>
                        <span class="text-sm opacity-60">00:02:00</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 卡片网格 -->
    <section class="py-20 px-6">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl font-bold mb-8 neon-glow text-center">CORE MODULES</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="glass-morphism rounded-lg p-6 text-center holographic-card">
                    <div class="text-3xl mb-4">🔐</div>
                    <h3 class="font-bold mb-2 neon-cyan-glow">SECURITY</h3>
                    <p class="text-sm opacity-80">Advanced encryption protocols</p>
                </div>
                <div class="glass-morphism rounded-lg p-6 text-center holographic-card">
                    <div class="text-3xl mb-4">⚡</div>
                    <h3 class="font-bold mb-2 neon-cyan-glow">PERFORMANCE</h3>
                    <p class="text-sm opacity-80">Optimized processing speed</p>
                </div>
                <div class="glass-morphism rounded-lg p-6 text-center holographic-card">
                    <div class="text-3xl mb-4">🌐</div>
                    <h3 class="font-bold mb-2 neon-cyan-glow">NETWORK</h3>
                    <p class="text-sm opacity-80">Global connectivity</p>
                </div>
                <div class="glass-morphism rounded-lg p-6 text-center holographic-card">
                    <div class="text-3xl mb-4">📊</div>
                    <h3 class="font-bold mb-2 neon-cyan-glow">ANALYTICS</h3>
                    <p class="text-sm opacity-80">Real-time data processing</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 表单界面 -->
    <section id="interface" class="py-20 px-6">
        <div class="container mx-auto max-w-2xl">
            <h2 class="text-4xl font-bold mb-8 neon-glow text-center">CONTROL INTERFACE</h2>
            <div class="glass-morphism rounded-lg p-8">
                <form class="space-y-6">
                    <div>
                        <label class="block text-sm font-bold mb-2 neon-cyan-glow">SYSTEM COMMAND</label>
                        <input type="text" class="w-full px-4 py-2 bg-black/50 border border-cyan-800 rounded focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/20 transition-all" placeholder="Enter command...">
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-2 neon-cyan-glow">ACCESS LEVEL</label>
                        <select class="w-full px-4 py-2 bg-black/50 border border-cyan-800 rounded focus:border-cyan-400 focus:outline-none">
                            <option>Administrator</option>
                            <option>Operator</option>
                            <option>Viewer</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-2 neon-cyan-glow">PRIORITY</label>
                        <div class="flex space-x-4">
                            <label class="flex items-center">
                                <input type="radio" name="priority" class="mr-2" checked>
                                <span>Normal</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="priority" class="mr-2">
                                <span>High</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="priority" class="mr-2">
                                <span>Critical</span>
                            </label>
                        </div>
                    </div>
                    <button type="button" class="w-full py-3 bg-gradient-to-r from-green-600 to-cyan-600 rounded font-bold hover:from-green-500 hover:to-cyan-500 transition-all transform hover:scale-105 neon-glow">
                        EXECUTE COMMAND
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="glass-morphism py-8 px-6 mt-20">
        <div class="container mx-auto text-center">
            <div class="flex justify-center space-x-6 mb-4">
                <a href="javascript:void(0)" class="hover:text-cyan-400 transition-colors">DOCS</a>
                <a href="javascript:void(0)" class="hover:text-cyan-400 transition-colors">API</a>
                <a href="javascript:void(0)" class="hover:text-cyan-400 transition-colors">SUPPORT</a>
                <a href="javascript:void(0)" class="hover:text-cyan-400 transition-colors">GITHUB</a>
            </div>
            <div class="flex items-center justify-center space-x-2 text-sm opacity-60">
                <div class="led-indicator led-green"></div>
                <span>Matrix Terminal v2.0.8 | System Online</span>
            </div>
        </div>
    </footer>

    <script>
        // Matrix雨效果
        function createMatrixRain() {
            const matrixBg = document.getElementById('matrixBg');
            const characters = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';

            for (let i = 0; i < 50; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-rain';
                column.style.left = Math.random() * 100 + '%';
                column.style.animationDuration = Math.random() * 3 + 2 + 's';
                column.style.animationDelay = Math.random() * 2 + 's';

                let text = '';
                for (let j = 0; j < 100; j++) {
                    text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
                }
                column.innerHTML = text;

                matrixBg.appendChild(column);
            }
        }

        // 更新时间
        function updateTime() {
            const now = new Date();
            const uptime = document.getElementById('uptime');
            if (uptime) {
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                uptime.textContent = \`\${hours}:\${minutes}:\${seconds}\`;
            }
        }

        // 终端打字效果
        function typeTerminal() {
            const terminalContent = document.getElementById('terminalContent');
            const commands = [
                '$ system monitor --status',
                '$ scan network --deep',
                '$ check security protocols',
                '$ analyze system performance'
            ];

            let commandIndex = 0;

            setInterval(() => {
                const lastLine = terminalContent.lastElementChild;
                if (lastLine && lastLine.textContent.includes('$ ')) {
                    const newCommand = document.createElement('div');
                    newCommand.textContent = commands[commandIndex % commands.length];
                    terminalContent.insertBefore(newCommand, lastLine);
                    commandIndex++;
                }
            }, 5000);
        }

        // 初始化
        document.addEventListener('DOMContentLoaded', () => {
            createMatrixRain();
            setInterval(updateTime, 1000);
            typeTerminal();

            // 平滑滚动
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // 滚动动画观察器
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'all 0.6s ease-out';
                observer.observe(section);
            });
        });
    </script>
    </body>
    </html>
    
    ## 配色方案

    配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)

    
    主色深灰金属 (#2A2A2A)、金属渐变 (#404040, #1A1A1A)、强调色金色 (#D4AF37)、LED绿色 (#00FF41)、LED蓝色 (#00D9FF)、LED橙色 (#FFA500)、玻璃效果半透明白 (rgba(255,255,255,0.1-0.3))
    `;

export const cyberpunkMatrixTerminalStyles = `
/* 自定义CSS变量和赛博朋克样式 */
:root {
    --neon-green: #00FF41;
    --neon-cyan: #00FFFF;
    --dark-bg: #0A0A0A;
    --glass-bg: rgba(0, 255, 65, 0.1);
    --glass-border: rgba(0, 255, 255, 0.3);
}

body {
    background: var(--dark-bg);
    color: var(--neon-green);
    font-family: 'Courier New', monospace;
    overflow-x: hidden;
}

/* Matrix数据流背景 */
.matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(180deg, #000000 0%, #0a0f0a 100%);
}

.matrix-rain {
    position: absolute;
    top: -100%;
    color: var(--neon-green);
    font-size: 10px;
    line-height: 10px;
    animation: matrix-fall linear infinite;
    opacity: 0.7;
    text-shadow: 0 0 3px var(--neon-green);
}

@keyframes matrix-fall {
    to {
        transform: translateY(200vh);
    }
}

/* 霓虹发光效果 */
.neon-glow {
    text-shadow:
        0 0 5px var(--neon-green),
        0 0 10px var(--neon-green),
        0 0 20px var(--neon-green),
        0 0 40px var(--neon-green);
}

.neon-cyan-glow {
    text-shadow:
        0 0 5px var(--neon-cyan),
        0 0 10px var(--neon-cyan),
        0 0 20px var(--neon-cyan);
}

/* 玻璃态效果 */
.glass-morphism {
    background: rgba(0, 255, 65, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    box-shadow:
        0 8px 32px rgba(0, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 扫描线效果 */
.scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
        transparent,
        var(--neon-cyan),
        transparent);
    animation: scan 3s linear infinite;
}

@keyframes scan {
    0% { top: 0%; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
}

/* 故障文字效果 */
.glitch {
    position: relative;
    animation: glitch 2s infinite;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    animation: glitch-1 0.3s infinite;
    color: var(--neon-cyan);
    z-index: -1;
}

.glitch::after {
    animation: glitch-2 0.3s infinite;
    color: #ff00ff;
    z-index: -2;
}

@keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-1px, 1px); }
    40% { transform: translate(-1px, -1px); }
    60% { transform: translate(1px, 1px); }
    80% { transform: translate(1px, -1px); }
}

@keyframes glitch-1 {
    0%, 100% { clip-path: inset(0 0 0 0); }
    25% { clip-path: inset(0 0 100% 0); }
    50% { clip-path: inset(100% 0 0 0); }
    75% { clip-path: inset(0 0 0 100%); }
}

@keyframes glitch-2 {
    0%, 100% { clip-path: inset(0 0 0 0); }
    25% { clip-path: inset(0 100% 0 0); }
    50% { clip-path: inset(0 0 0 100%); }
    75% { clip-path: inset(100% 0 0 0); }
}

/* 脉冲动画 */
.pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* LED状态指示器 */
.led-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: led-blink 1s infinite;
}

.led-green {
    background: var(--neon-green);
    box-shadow: 0 0 10px var(--neon-green);
}

.led-cyan {
    background: var(--neon-cyan);
    box-shadow: 0 0 10px var(--neon-cyan);
}

.led-red {
    background: #ff0040;
    box-shadow: 0 0 10px #ff0040;
}

@keyframes led-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* 进度条扫描效果 */
.progress-bar {
    position: relative;
    overflow: hidden;
}

.progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(0, 255, 255, 0.3),
        transparent);
    animation: progress-scan 2s linear infinite;
}

@keyframes progress-scan {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* 数据加载动画 */
.data-loader {
    border: 2px solid var(--glass-border);
    border-top: 2px solid var(--neon-cyan);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* 全息卡片效果 */
.holographic-card {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.3s;
}

.holographic-card:hover {
    transform: rotateY(5deg) rotateX(-5deg);
}

/* 终端光标闪烁 */
.terminal-cursor {
    display: inline-block;
    width: 10px;
    height: 20px;
    background: var(--neon-green);
    animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* 表格悬停效果 */
.cyber-table tr:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateX(5px);
    transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .glass-morphism {
        backdrop-filter: blur(5px);
    }

    .neon-glow {
        text-shadow:
            0 0 3px var(--neon-green),
            0 0 6px var(--neon-green);
    }
}
`;
