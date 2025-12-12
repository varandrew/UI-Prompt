// Preview 2: Nexus_OS Industrial Control System
// 工業控制系統 - 深色主題、網格背景、服務器監控、實時日誌

export const previewConfig = {
  id: 'industrial-nexus-control',
  name: {
    'zh-CN': 'Nexus_OS 工业控制',
    'en-US': 'Nexus_OS Industrial Control'
  },
  type: 'full',
  renderMode: 'jsx',
  description: {
    'zh-CN': '专业工业控制系统界面，包含服务器集群监控、实时事件日志、手动控制面板和KPI统计。深色网格背景搭配橙色强调，营造高科技工业氛围。',
    'en-US': 'Professional industrial control system interface featuring server cluster monitoring, real-time event logs, manual control panels, and KPI statistics. Dark grid background with orange accents creates a high-tech industrial atmosphere.'
  },
  features: [
    'server-cluster-monitoring',
    'real-time-logs',
    'manual-controls',
    'kpi-statistics',
    'grid-background',
    'throughput-visualization'
  ],
  colorScheme: {
    'zh-CN': '主色橙色 (#ea580c)、背景深灰 (#09090b)、面板灰 (#18181b/#27272a)、文字浅灰 (#d4d4d8/#a1a1aa)',
    'en-US': 'Primary orange (#ea580c), background dark gray (#09090b), panel gray (#18181b/#27272a), text light gray (#d4d4d8/#a1a1aa)'
  }
};

export const demoJSX = `
// Nexus_OS Industrial Control System
// 工業控制系統 - 使用 Preact

function DemoComponent() {
  const { useState, useEffect, useRef } = window.preact;

  const [currentTime, setCurrentTime] = useState(new Date());
  const [servers, setServers] = useState([
    { id: 'SVR-01', load: 45, temp: 62, status: 'ONLINE' },
    { id: 'SVR-02', load: 78, temp: 81, status: 'WARNING' },
    { id: 'SVR-03', load: 23, temp: 55, status: 'ONLINE' },
    { id: 'SVR-04', load: 92, temp: 88, status: 'CRITICAL' },
  ]);
  const [logs, setLogs] = useState([
    { time: '14:20:01', type: 'INFO', msg: 'System initialized successfully' },
    { time: '14:20:05', type: 'INFO', msg: 'Network handshake established' },
    { time: '14:21:12', type: 'WARN', msg: 'Latency spike detected on Node-4' },
  ]);
  const [activeControls, setActiveControls] = useState({
    mainPower: true,
    firewall: true,
    backup: false,
    override: false
  });

  // Time update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Server load simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setServers(prev => prev.map(s => ({
        ...s,
        load: Math.min(100, Math.max(0, s.load + (Math.random() * 10 - 5))),
        temp: Math.min(100, Math.max(40, s.temp + (Math.random() * 4 - 2)))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Log simulation
  useEffect(() => {
    const messages = ['Packet verify: OK', 'Syncing db_shard_04...', 'Cooling system: ACTIVE', 'Auth token refreshed', 'Garbage collection started', 'Ping: 14ms'];
    const types = ['INFO', 'INFO', 'INFO', 'SUCCESS', 'WARN', 'INFO'];
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * messages.length);
      const newLog = {
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
        type: types[randomIdx],
        msg: messages[randomIdx]
      };
      setLogs(prev => [...prev.slice(-6), newLog]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggle = (key) => setActiveControls(prev => ({...prev, [key]: !prev[key]}));

  // Components
  const SectionHeader = ({ title, code }) => (
    h('div', { className: 'flex items-end justify-between border-b-2 border-zinc-800 pb-2 mb-4' },
      h('h2', { className: 'text-lg font-black uppercase tracking-widest text-zinc-100 flex items-center gap-2' },
        h('span', { className: 'w-2 h-5 bg-orange-600 inline-block mr-2' }),
        title
      ),
      h('span', { className: 'font-mono text-xs text-zinc-600 tracking-widest' }, code)
    )
  );

  const Card = ({ children, className = '' }) => (
    h('div', { className: 'bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm p-5 relative group transition-all duration-300 hover:border-zinc-600 ' + className },
      h('div', { className: 'absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-orange-600/50 group-hover:border-orange-500' }),
      h('div', { className: 'absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-zinc-600 group-hover:border-zinc-400' }),
      h('div', { className: 'absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-zinc-600 group-hover:border-zinc-400' }),
      h('div', { className: 'absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zinc-600 group-hover:border-zinc-400' }),
      children
    )
  );

  const ProgressBar = ({ value, color = 'bg-orange-600' }) => (
    h('div', { className: 'w-full h-3 bg-zinc-950 border border-zinc-800 p-[2px] relative' },
      h('div', { className: 'absolute inset-0 flex justify-between px-1 pointer-events-none' },
        [...Array(10)].map((_, i) => h('div', { key: i, className: 'w-[1px] h-full bg-zinc-900/50 z-20' }))
      ),
      h('div', { className: 'h-full transition-all duration-500 ease-out ' + color, style: { width: value + '%' } })
    )
  );

  const TechButton = ({ label, active, onClick, warning = false, icon }) => (
    h('button', {
      onClick: onClick,
      className: 'relative w-full uppercase font-bold tracking-wider text-xs py-2.5 px-3 flex items-center justify-between border-2 transition-all duration-150 ' +
        (active
          ? (warning ? 'bg-orange-600 border-orange-600 text-black' : 'bg-zinc-200 border-zinc-200 text-zinc-950')
          : 'bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 hover:bg-zinc-800')
    },
      h('div', { className: 'flex items-center gap-2' },
        h('span', null, icon),
        h('span', null, label)
      ),
      active && h('div', { className: 'w-2 h-2 bg-black animate-pulse' })
    )
  );

  const StatValue = ({ label, value, unit, trend }) => (
    h('div', { className: 'flex flex-col' },
      h('span', { className: 'text-xs uppercase font-bold text-zinc-500 tracking-wider mb-1' }, label),
      h('div', { className: 'flex items-baseline gap-2' },
        h('span', { className: 'text-2xl font-mono font-bold text-white' }, value),
        h('span', { className: 'text-xs font-mono text-orange-500' }, unit)
      ),
      trend !== undefined && h('span', { className: 'text-[10px] font-mono mt-1 text-zinc-400' }, 'TREND: ', trend > 0 ? '+' : '', trend, '%')
    )
  );

  return h('div', { className: 'min-h-screen bg-zinc-950 text-zinc-300 font-sans relative overflow-hidden' },
    // Grid Background
    h('div', { className: 'absolute inset-0 pointer-events-none opacity-10', style: { backgroundImage: 'linear-gradient(#52525b 1px, transparent 1px), linear-gradient(90deg, #52525b 1px, transparent 1px)', backgroundSize: '40px 40px' } }),
    // Noise Overlay
    h('div', { className: 'absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay', style: { backgroundImage: "url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\\")" } }),

    h('div', { className: 'relative z-10 h-full flex flex-col' },

      // Header
      h('header', { className: 'h-14 border-b border-zinc-800 bg-zinc-950/90 flex items-center justify-between px-5 sticky top-0 z-50 backdrop-blur-md' },
        h('div', { className: 'flex items-center gap-3' },
          h('div', { className: 'w-8 h-8 bg-zinc-100 flex items-center justify-center' },
            h('span', { className: 'text-black font-bold' }, '⚡')
          ),
          h('div', null,
            h('h1', { className: 'text-base font-black uppercase tracking-widest text-white leading-none' }, 'Nexus', h('span', { className: 'text-zinc-600' }, '_OS')),
            h('span', { className: 'text-[10px] font-mono text-orange-600 tracking-widest uppercase' }, 'Industrial Control V.4.0')
          )
        ),
        h('div', { className: 'flex items-center gap-6' },
          h('div', { className: 'hidden md:flex gap-4 text-xs font-bold tracking-widest text-zinc-500' },
            h('span', { className: 'flex items-center gap-1 hover:text-zinc-300 cursor-pointer transition-colors' }, '🖥️ NODES'),
            h('span', { className: 'flex items-center gap-1 hover:text-zinc-300 cursor-pointer transition-colors' }, '🛡️ SECURITY'),
            h('span', { className: 'flex items-center gap-1 text-orange-500 cursor-pointer' }, '⚙️ CONFIG')
          ),
          h('div', { className: 'text-right border-l border-zinc-800 pl-4' },
            h('div', { className: 'text-sm font-mono font-bold text-zinc-200' }, currentTime.toLocaleTimeString('en-GB', { hour12: false })),
            h('div', { className: 'text-[10px] font-mono text-zinc-600 uppercase' }, currentTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }))
          )
        )
      ),

      // Main Content
      h('main', { className: 'flex-1 p-4 md:p-6 overflow-y-auto' },
        h('div', { className: 'max-w-6xl mx-auto space-y-5' },

          // KPI Row
          h('div', { className: 'grid grid-cols-2 lg:grid-cols-4 gap-3' },
            h(Card, { className: 'flex flex-row items-center justify-between' },
              h(StatValue, { label: 'Uptime', value: '99.9', unit: '%', trend: 0.1 }),
              h('span', { className: 'text-zinc-700 text-2xl' }, '📈')
            ),
            h(Card, { className: 'flex flex-row items-center justify-between' },
              h(StatValue, { label: 'Network', value: '4.2', unit: 'TB/s', trend: 12 }),
              h('span', { className: 'text-zinc-700 text-2xl' }, '🖥️')
            ),
            h(Card, { className: 'flex flex-row items-center justify-between' },
              h(StatValue, { label: 'Threads', value: '8,902', unit: '#' }),
              h('span', { className: 'text-zinc-700 text-2xl' }, '⚙️')
            ),
            h(Card, { className: 'flex flex-row items-center justify-between border-orange-900/30 bg-orange-900/5' },
              h(StatValue, { label: 'Alerts', value: '3', unit: 'ACT' }),
              h('span', { className: 'text-orange-600 text-2xl' }, '⚠️')
            )
          ),

          // Main Grid
          h('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-5' },

            // Server Cluster
            h(Card, { className: 'lg:col-span-1' },
              h(SectionHeader, { title: 'Core Cluster', code: 'SEC-A1' }),
              h('div', { className: 'space-y-3' },
                servers.map((server, idx) =>
                  h('div', { key: idx, className: 'flex flex-col gap-2 p-2.5 bg-zinc-950/50 border border-zinc-800' },
                    h('div', { className: 'flex justify-between items-center' },
                      h('div', { className: 'flex items-center gap-2' },
                        h('div', { className: 'w-2 h-2 ' + (server.load > 90 ? 'bg-red-500 animate-ping' : server.load > 70 ? 'bg-orange-500' : 'bg-emerald-500') }),
                        h('span', { className: 'font-mono font-bold text-sm text-zinc-200' }, server.id)
                      ),
                      h('span', { className: 'font-mono text-xs text-zinc-500' }, server.temp.toFixed(1), '°C')
                    ),
                    h('div', { className: 'flex items-center gap-2' },
                      h('span', { className: 'text-[10px] w-8 font-mono text-zinc-500' }, 'LOAD'),
                      h(ProgressBar, { value: server.load, color: server.load > 85 ? 'bg-red-600' : 'bg-zinc-200' }),
                      h('span', { className: 'text-[10px] w-8 font-mono text-right text-zinc-400' }, Math.round(server.load), '%')
                    )
                  )
                )
              )
            ),

            // Middle Column: Throughput + Controls
            h('div', { className: 'lg:col-span-1 flex flex-col gap-5' },
              // Throughput Chart
              h(Card, null,
                h(SectionHeader, { title: 'Throughput', code: 'NET-01' }),
                h('div', { className: 'h-36 flex items-end justify-between gap-1 mt-4 border-b border-zinc-700 pb-2' },
                  [...Array(16)].map((_, i) => {
                    const height = Math.floor(Math.random() * 80) + 20;
                    return h('div', { key: i, className: 'w-full bg-zinc-800 relative group' },
                      h('div', { className: 'absolute bottom-0 w-full bg-zinc-400 group-hover:bg-orange-500 transition-colors duration-300', style: { height: height + '%' } })
                    );
                  })
                ),
                h('div', { className: 'flex justify-between mt-2 text-[10px] font-mono text-zinc-500 uppercase' },
                  h('span', null, '00:00'),
                  h('span', null, '12:00'),
                  h('span', null, '23:59')
                )
              ),
              // Control Panel
              h(Card, null,
                h(SectionHeader, { title: 'Manual Override', code: 'CTRL-X' }),
                h('div', { className: 'grid grid-cols-2 gap-3' },
                  h(TechButton, { label: 'Power', active: activeControls.mainPower, onClick: () => toggle('mainPower'), icon: '⚡' }),
                  h(TechButton, { label: 'Firewall', active: activeControls.firewall, onClick: () => toggle('firewall'), icon: '🛡️' }),
                  h(TechButton, { label: 'Backup', active: activeControls.backup, onClick: () => toggle('backup'), icon: '💾' }),
                  h(TechButton, { label: 'Lock', active: activeControls.override, onClick: () => toggle('override'), warning: true, icon: '🔒' })
                )
              )
            ),

            // Event Stream
            h(Card, { className: 'lg:col-span-1' },
              h(SectionHeader, { title: 'Event Stream', code: 'LOG-00' }),
              h('div', { className: 'bg-black border border-zinc-800 p-3 font-mono text-xs relative h-64 overflow-hidden' },
                h('div', { className: 'absolute top-0 right-0 p-1 bg-zinc-900 border-l border-b border-zinc-800 text-[10px] text-zinc-500' }, 'LIVE FEED'),
                h('div', { className: 'flex flex-col gap-1 h-full justify-end pt-4' },
                  logs.map((log, i) =>
                    h('div', { key: i, className: 'flex gap-2 border-b border-zinc-900/50 pb-1 last:border-0 opacity-80 hover:opacity-100' },
                      h('span', { className: 'text-zinc-600' }, '[', log.time, ']'),
                      h('span', { className: 'font-bold ' + (log.type === 'WARN' ? 'text-orange-500' : log.type === 'SUCCESS' ? 'text-emerald-500' : 'text-zinc-400') }, log.type),
                      h('span', { className: 'text-zinc-300 truncate' }, log.msg)
                    )
                  )
                )
              )
            )
          ),

          // Bottom Banner
          h('div', { className: 'border border-zinc-800 bg-zinc-900 p-4 flex flex-col md:flex-row items-center justify-between gap-4' },
            h('div', { className: 'flex items-center gap-4' },
              h('div', { className: 'w-10 h-10 bg-zinc-950 border border-zinc-700 flex items-center justify-center' },
                h('span', { className: 'text-zinc-400' }, '💻')
              ),
              h('div', null,
                h('h3', { className: 'text-sm font-bold uppercase text-zinc-200' }, 'System Maintenance Required'),
                h('p', { className: 'text-xs text-zinc-500 font-mono' }, 'Scheduled for: 2024-11-30 02:00 UTC')
              )
            ),
            h('button', { className: 'bg-zinc-100 hover:bg-white text-black text-xs font-bold uppercase tracking-wider py-2.5 px-5 transition-colors' }, 'View Schedule')
          )
        )
      )
    ),

    // CSS Keyframes
    h('style', null, \`
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
      .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      .animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
    \`)
  );
}
`;

export const previewStyles = `
/* Styles are defined inline in JSX */
`;

export const previewCustomPrompt = {
  'zh-CN': `你现在是一名专精于工业控制系统界面设计的资深 UI 设计师兼前端工程师。请为一个全新页面生成一套与当前「Nexus_OS 工业控制系统」界面风格高度一致的 UI。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新完整 HTML 页面。

【设计场景】
- 这是一个「数据中心监控系统」页面，面向系统管理员、DevOps 工程师、IT 运维人员。
- 用户会在这里监控服务器状态、查看系统日志、管理网络配置、执行紧急操作。
- 整体氛围像是置身于数据中心控制室：专业、精密、高效、可靠。

【整体布局结构】
1. 顶部导航栏（Header）
   - 左侧：品牌 Logo（方形图标 + 品牌名称），使用纯白背景
   - 右侧：导航菜单（NODES、SECURITY、CONFIG）+ 时间显示
   - 高度 56px，背景 zinc-950/90 + backdrop-blur，下边框 zinc-800
   - 品牌名使用下划线分隔风格（如 Nexus_OS）

2. KPI 统计行
   - 4 列网格布局
   - 每个 KPI 卡片包含：标签、数值、单位、趋势指示
   - 警告状态卡片使用橙色边框和背景

3. 主内容三栏布局
   - 左栏：服务器集群监控（带进度条的服务器列表）
   - 中栏：吞吐量图表 + 控制面板
   - 右栏：实时事件日志流

4. 底部横幅
   - 系统通知/维护提醒
   - 行动按钮

【卡片组件设计】
- 背景：bg-zinc-900/80 + backdrop-blur
- 边框：border-zinc-800，hover 时变为 border-zinc-600
- 四角装饰：2px 边角线，左上角使用 orange-600
- 内边距：p-5 或 p-6

【Section Header 组件】
- 标题左侧：2px 宽的橙色竖条
- 标题：大写字母、tracking-widest、font-black
- 右侧：等宽字体的代码编号（如 SEC-A1、LOG-00）
- 底部：2px 的 zinc-800 边框

【进度条设计】
- 外框：h-3、bg-zinc-950、border-zinc-800
- 内部网格线：10 条垂直分隔线
- 进度填充：默认 zinc-200，危险状态 red-600

【按钮样式】
- 激活状态：bg-zinc-200 text-zinc-950（白色系）
- 警告激活：bg-orange-600 text-black
- 非激活：border-zinc-700 text-zinc-400，hover 时背景变暗

【色彩体系】
1. 背景层次
   - 最深：#09090b（zinc-950）
   - 卡片：#18181b/80（zinc-900 半透明）
   - 边框：#27272a（zinc-800）

2. 强调色
   - 主强调：#ea580c（orange-600）
   - 成功：#10b981（emerald-500）
   - 警告：#f59e0b（amber-500）
   - 危险：#ef4444（red-500）

3. 文字
   - 主要：#e4e4e7（zinc-200）
   - 次要：#a1a1aa（zinc-400）
   - 禁用：#71717a（zinc-500）

【网格背景纹理】
- 使用 CSS linear-gradient 创建 40px 网格
- 线条颜色：#52525b（zinc-600）
- 透明度：10%

【输出要求】
- 使用语义化 HTML5 结构
- 使用 TailwindCSS 原子类
- 完整的 HTML 文件
- 响应式设计：md: 和 lg: 断点
`,

  'en-US': `You are a senior UI designer and front-end engineer specializing in industrial control system interfaces. Your task is to generate a brand new HTML page that maintains high visual consistency with the current "Nexus_OS Industrial Control System" style.

Your goal: Create a complete new page that is immediately recognizable as part of the same design family, without copying the existing content.

[Scenario]
- This is a "Data Center Monitoring System" page for system administrators, DevOps engineers, and IT operations staff.
- Users will monitor server status, view system logs, manage network configurations, and execute emergency operations.
- The overall atmosphere should feel like being inside a data center control room: professional, precise, efficient, and reliable.

[Overall Layout Structure]
1. Top Navigation Bar (Header)
   - Left: Brand logo (square icon + brand name), using white background
   - Right: Navigation menu (NODES, SECURITY, CONFIG) + time display
   - Height 56px, background zinc-950/90 + backdrop-blur, bottom border zinc-800
   - Brand name uses underscore separation style (e.g., Nexus_OS)

2. KPI Statistics Row
   - 4-column grid layout
   - Each KPI card contains: label, value, unit, trend indicator
   - Warning state cards use orange border and background

3. Main Content Three-Column Layout
   - Left column: Server cluster monitoring (server list with progress bars)
   - Middle column: Throughput chart + control panel
   - Right column: Real-time event log stream

4. Bottom Banner
   - System notifications/maintenance reminders
   - Action button

[Card Component Design]
- Background: bg-zinc-900/80 + backdrop-blur
- Border: border-zinc-800, changes to border-zinc-600 on hover
- Corner decorations: 2px corner lines, top-left uses orange-600
- Padding: p-5 or p-6

[Section Header Component]
- Left of title: 2px wide orange vertical bar
- Title: uppercase, tracking-widest, font-black
- Right side: monospace code number (e.g., SEC-A1, LOG-00)
- Bottom: 2px zinc-800 border

[Progress Bar Design]
- Outer frame: h-3, bg-zinc-950, border-zinc-800
- Internal grid lines: 10 vertical dividers
- Progress fill: default zinc-200, danger state red-600

[Button Styles]
- Active state: bg-zinc-200 text-zinc-950 (white-based)
- Warning active: bg-orange-600 text-black
- Inactive: border-zinc-700 text-zinc-400, background darkens on hover

[Color System]
1. Background Layers
   - Deepest: #09090b (zinc-950)
   - Card: #18181b/80 (zinc-900 semi-transparent)
   - Border: #27272a (zinc-800)

2. Accent Colors
   - Primary: #ea580c (orange-600)
   - Success: #10b981 (emerald-500)
   - Warning: #f59e0b (amber-500)
   - Danger: #ef4444 (red-500)

3. Text
   - Primary: #e4e4e7 (zinc-200)
   - Secondary: #a1a1aa (zinc-400)
   - Disabled: #71717a (zinc-500)

[Grid Background Texture]
- Use CSS linear-gradient to create 40px grid
- Line color: #52525b (zinc-600)
- Opacity: 10%

[Output Requirements]
- Use semantic HTML5 structure
- Use TailwindCSS utility classes
- Complete HTML file
- Responsive design: md: and lg: breakpoints
`
};
