// Preview 1: StrataOS Industrial Dashboard
// 工業控制系統儀表板 - 深色主題、琥珀色強調、圓形儀表、數據流

export const previewConfig = {
  id: 'industrial-strataos-dashboard',
  name: {
    'zh-CN': 'StrataOS 工业仪表板',
    'en-US': 'StrataOS Industrial Dashboard'
  },
  type: 'full',
  renderMode: 'jsx',
  description: {
    'zh-CN': '专业工业控制系统界面，包含圆形仪表盘、实时数据流、紧急控制面板和资源分配监控。深黑色背景搭配琥珀色强调，营造高科技工业氛围。',
    'en-US': 'Professional industrial control system interface featuring circular gauges, real-time data streams, emergency control panels, and resource allocation monitoring. Deep black background with amber accents creates a high-tech industrial atmosphere.'
  },
  features: [
    'circular-gauges',
    'real-time-data-stream',
    'emergency-controls',
    'resource-monitoring',
    'sidebar-navigation',
    'hazard-indicators'
  ],
  colorScheme: {
    'zh-CN': '主色琥珀色 (#d97706)、背景纯黑 (#000000)、面板深灰 (#09090b/#18181b)、文字浅灰 (#e4e4e7/#a1a1aa)',
    'en-US': 'Primary amber (#d97706), background pure black (#000000), panel dark gray (#09090b/#18181b), text light gray (#e4e4e7/#a1a1aa)'
  }
};

export const demoJSX = `
// StrataOS Industrial Dashboard Component
// 工業控制系統儀表板 - 使用 Preact

function DemoComponent() {
  const { useState, useEffect } = window.preact;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Circular Gauge Component
  const CircularGauge = ({ value, color, label, code }) => {
    const circumference = 220;
    const offset = circumference - (value / 100) * circumference;

    return h('div', { className: 'bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col relative overflow-hidden' },
      // Header
      h('div', { className: 'flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800' },
        h('div', { className: 'flex items-center gap-2' },
          h('div', { className: 'w-1.5 h-1.5 bg-amber-600' }),
          h('h3', { className: 'text-xs font-bold tracking-wider text-zinc-300 uppercase font-mono' }, label)
        ),
        h('span', { className: 'text-[10px] text-zinc-600 font-mono tracking-widest' }, code)
      ),
      // Content
      h('div', { className: 'relative p-4 flex-1' },
        h('div', { className: 'absolute inset-0 pointer-events-none opacity-50', style: { backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' } }),
        h('div', { className: 'flex flex-col items-center py-4' },
          // SVG Gauge
          h('div', { className: 'relative w-24 h-24 flex items-center justify-center' },
            h('svg', { className: 'transform -rotate-90 w-full h-full', viewBox: '0 0 96 96' },
              h('circle', { cx: '48', cy: '48', r: '35', stroke: '#27272a', strokeWidth: '8', fill: 'transparent' }),
              h('circle', { cx: '48', cy: '48', r: '35', stroke: color, strokeWidth: '8', fill: 'transparent', strokeDasharray: circumference, strokeDashoffset: offset, strokeLinecap: 'butt' })
            ),
            h('div', { className: 'absolute inset-0 flex items-center justify-center flex-col' },
              h('span', { className: 'text-xl font-bold font-mono text-zinc-200' }, value),
              h('span', { className: 'text-[10px] text-zinc-500 uppercase tracking-wider' }, '%')
            )
          )
        )
      ),
      // Corner screws
      h('div', { className: 'absolute bottom-1 right-1 w-3 h-3 rounded-full bg-zinc-700 shadow-inner border border-zinc-800 opacity-50' }),
      h('div', { className: 'absolute bottom-1 left-1 w-3 h-3 rounded-full bg-zinc-700 shadow-inner border border-zinc-800 opacity-50' })
    );
  };

  // Nav Button Component
  const NavButton = ({ icon, label, active }) => {
    const baseClass = active
      ? 'bg-zinc-800 border-amber-500 text-amber-500 shadow-lg'
      : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200';

    return h('button', { className: \`relative w-full h-12 flex items-center justify-between px-4 group overflow-hidden border \${baseClass} transition-all\` },
      h('div', { className: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none' }),
      h('div', { className: 'flex items-center gap-3 z-10' },
        h('span', { className: 'text-sm', dangerouslySetInnerHTML: { __html: icon } }),
        h('span', { className: 'text-xs font-bold tracking-widest uppercase font-mono hidden md:block' }, label)
      ),
      h('div', { className: \`w-1.5 h-1.5 \${active ? 'bg-amber-500 animate-pulse' : 'bg-zinc-800 group-hover:bg-zinc-600'}\` })
    );
  };

  // Progress Bar Component
  const ProgressBar = ({ label, value, total }) => (
    h('div', null,
      h('div', { className: 'flex justify-between text-xs font-mono text-zinc-400 mb-1' },
        h('span', null, label),
        h('span', null, total)
      ),
      h('div', { className: 'h-2 bg-zinc-950 border border-zinc-800 relative' },
        h('div', { className: 'h-full bg-zinc-500 relative overflow-hidden', style: { width: value } },
          h('div', { className: 'absolute inset-0', style: { backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.2) 5px, rgba(0,0,0,0.2) 10px)' } })
        )
      )
    )
  );

  return h('div', { className: 'min-h-screen bg-black text-zinc-300 overflow-hidden flex flex-col' },

    // Background
    h('div', { className: 'fixed inset-0 z-0 pointer-events-none bg-gradient-radial from-zinc-900 via-black to-black opacity-80' }),

    // Header
    h('header', { className: 'h-16 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm z-30 flex items-center justify-between px-6 shrink-0 shadow-lg' },
      h('div', { className: 'flex items-center gap-4' },
        // Logo
        h('div', { className: 'w-10 h-10 bg-amber-600 flex items-center justify-center border border-amber-500', style: { boxShadow: '0 0 10px rgba(217,119,6,0.3)' } },
          h('svg', { className: 'w-6 h-6 text-black', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', style: { animation: 'spin 8s linear infinite' } },
            h('circle', { cx: '12', cy: '12', r: '10', strokeWidth: '2', strokeDasharray: '4 2' }),
            h('circle', { cx: '12', cy: '12', r: '4', strokeWidth: '2' })
          )
        ),
        h('div', null,
          h('h1', { className: 'text-xl font-bold tracking-widest uppercase text-zinc-100' }, 'Strata', h('span', { className: 'text-amber-600' }, 'OS')),
          h('div', { className: 'text-[10px] text-zinc-500 font-mono tracking-widest flex items-center gap-2' },
            h('span', { className: 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse' }),
            'SYSTEM ONLINE :: V.9.2.1'
          )
        )
      ),
      h('div', { className: 'flex items-center gap-6' },
        h('div', { className: 'hidden md:flex flex-col items-end font-mono text-xs text-zinc-500' },
          h('span', null, time.toLocaleDateString()),
          h('span', { className: 'text-amber-600' }, time.toLocaleTimeString())
        ),
        h('div', { className: 'h-8 w-px bg-zinc-800 hidden md:block' }),
        h('button', { className: 'p-2 border border-zinc-700 hover:border-red-500 hover:text-red-500 transition-colors' },
          h('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' })
          )
        )
      )
    ),

    // Main Content
    h('div', { className: 'flex flex-1 overflow-hidden relative' },

      // Sidebar
      h('nav', { className: 'w-20 md:w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col z-20 shrink-0' },
        h('div', { className: 'p-4 space-y-2' },
          h('div', { className: 'text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-2 mb-2 hidden md:block' }, 'Modules'),
          h(NavButton, { icon: '⚡', label: 'Dashboard', active: true }),
          h(NavButton, { icon: '🖥️', label: 'Machines', active: false }),
          h(NavButton, { icon: '⚠️', label: 'Protocol', active: false }),
          h(NavButton, { icon: '📡', label: 'Network', active: false })
        ),
        // Bottom Section
        h('div', { className: 'mt-auto p-4 border-t border-zinc-800 bg-zinc-900/50' },
          h('div', { className: 'mb-4 bg-black border border-zinc-800 p-2 h-32 relative overflow-hidden' },
            h('div', { className: 'absolute top-0 left-0 bg-amber-600/20 text-[8px] px-1 text-amber-500 font-bold' }, 'LIVE LOG'),
            h('div', { className: 'font-mono text-[10px] text-zinc-500 space-y-0.5 pt-4 overflow-hidden select-none opacity-60' },
              h('div', { className: 'text-zinc-300' }, '0xA7F2C1 :: REQ_BLOCK [4521] >> SYNC'),
              h('div', { className: 'text-zinc-600' }, '0x3B8E9D :: REQ_BLOCK [3892] >> SYNC'),
              h('div', { className: 'text-zinc-600' }, '0xC4D5E6 :: REQ_BLOCK [7234] >> SYNC')
            )
          ),
          h(NavButton, { icon: '⚙️', label: 'Settings', active: false })
        )
      ),

      // Dashboard Canvas
      h('main', { className: 'flex-1 overflow-y-auto p-6 bg-zinc-950/50 relative' },

        // Header Marquee
        h('div', { className: 'flex items-center gap-4 mb-8' },
          h('div', { className: 'flex-1 h-px bg-zinc-800' }),
          h('div', { className: 'flex gap-1 text-[10px] font-mono text-zinc-600 tracking-widest' },
            h('span', null, 'SECTOR 7G'), ' // ', h('span', null, 'GRID A'), ' // ', h('span', null, 'UNIT 42')
          ),
          h('div', { className: 'flex-1 h-px bg-zinc-800' })
        ),

        h('div', { className: 'grid grid-cols-1 md:grid-cols-12 gap-6' },

          // KPI Gauges
          h('div', { className: 'col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6' },
            h(CircularGauge, { value: 55, color: '#d97706', label: 'Hydraulic Pressure', code: 'HYD-01' }),
            h(CircularGauge, { value: 62, color: '#10b981', label: 'Core Temperature', code: 'THM-99' }),
            h(CircularGauge, { value: 23, color: '#3b82f6', label: 'Power Load', code: 'PWR-AX' })
          ),

          // Right Column
          h('div', { className: 'col-span-12 lg:col-span-4 space-y-6' },

            // Emergency Controls
            h('div', { className: 'relative' },
              h('div', { className: 'h-2 w-full rounded-t-sm', style: { backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 10px, #d97706 10px, #d97706 20px)' } }),
              h('div', { className: 'bg-zinc-900 border border-zinc-800 border-t-0 flex flex-col relative overflow-hidden' },
                h('div', { className: 'flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800' },
                  h('div', { className: 'flex items-center gap-2' },
                    h('div', { className: 'w-1.5 h-1.5 bg-red-500 animate-pulse' }),
                    h('h3', { className: 'text-xs font-bold tracking-wider text-zinc-300 uppercase font-mono' }, 'Emergency Controls')
                  ),
                  h('span', { className: 'text-[10px] text-zinc-600 font-mono tracking-widest' }, 'EMG-00')
                ),
                h('div', { className: 'relative p-4 space-y-3' },
                  h('button', { className: 'w-full h-12 flex items-center justify-center gap-3 border bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-red-500 hover:text-red-500 transition-all' },
                    h('span', null, '⚠️'),
                    h('span', { className: 'text-xs font-bold tracking-widest uppercase font-mono' }, 'System Purge')
                  ),
                  h('button', { className: 'w-full h-12 flex items-center justify-center gap-3 border bg-zinc-900 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-all' },
                    h('span', null, '🔒'),
                    h('span', { className: 'text-xs font-bold tracking-widest uppercase font-mono' }, 'Lockdown')
                  ),
                  h('div', { className: 'flex items-center gap-4 pt-2' },
                    h('div', { className: 'h-10 w-10 border border-zinc-700 bg-zinc-950 flex items-center justify-center' },
                      h('span', { className: 'text-red-600 animate-pulse' }, '⚠️')
                    ),
                    h('div', { className: 'text-xs font-mono text-red-500 leading-relaxed' }, 'WARNING: AUTOMATED SAFETY PROTOCOLS ARE ENGAGED.')
                  )
                )
              )
            ),

            // Resource Allocation
            h('div', { className: 'bg-zinc-900 border border-zinc-800 flex flex-col relative overflow-hidden' },
              h('div', { className: 'flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800' },
                h('div', { className: 'flex items-center gap-2' },
                  h('div', { className: 'w-1.5 h-1.5 bg-amber-600' }),
                  h('h3', { className: 'text-xs font-bold tracking-wider text-zinc-300 uppercase font-mono' }, 'Resource Allocation')
                ),
                h('span', { className: 'text-[10px] text-zinc-600 font-mono tracking-widest' }, 'RES-04')
              ),
              h('div', { className: 'relative p-4 space-y-4' },
                h(ProgressBar, { label: 'CPU Cores', value: '75%', total: '12/16' }),
                h(ProgressBar, { label: 'Memory Bank', value: '45%', total: '64GB' }),
                h(ProgressBar, { label: 'Storage', value: '90%', total: '22TB' })
              )
            )
          ),

          // Process Visualization Map
          h('div', { className: 'col-span-12' },
            h('div', { className: 'bg-zinc-900 border border-zinc-800 flex flex-col relative overflow-hidden' },
              h('div', { className: 'flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800' },
                h('div', { className: 'flex items-center gap-2' },
                  h('div', { className: 'w-1.5 h-1.5 bg-amber-600' }),
                  h('h3', { className: 'text-xs font-bold tracking-wider text-zinc-300 uppercase font-mono' }, 'Process Visualization Map')
                ),
                h('span', { className: 'text-[10px] text-zinc-600 font-mono tracking-widest' }, 'VIS-MAP-09')
              ),
              h('div', { className: 'relative p-4' },
                h('div', { className: 'h-64 bg-zinc-950 border border-zinc-800 relative overflow-hidden flex items-center justify-center', style: { backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' } },
                  // Center Crosshair
                  h('div', { className: 'absolute inset-0 flex items-center justify-center pointer-events-none' },
                    h('div', { className: 'w-4/5 h-px bg-zinc-800' }),
                    h('div', { className: 'h-4/5 w-px bg-zinc-800 absolute' }),
                    h('div', { className: 'w-20 h-20 border border-amber-600/30 rounded-full flex items-center justify-center' },
                      h('div', { className: 'w-2 h-2 bg-amber-600 rounded-full animate-ping' })
                    )
                  ),
                  // Data Box
                  h('div', { className: 'absolute bottom-4 left-4 bg-black/80 border border-zinc-700 p-2 backdrop-blur-md' },
                    h('div', { className: 'flex items-center gap-2 mb-1' },
                      h('span', { className: 'text-amber-500' }, '⊕'),
                      h('span', { className: 'text-[10px] text-zinc-300 font-mono' }, 'TRACKING_OBJ_04')
                    ),
                    h('div', { className: 'text-[10px] font-mono text-zinc-500' }, 'X: 44.201 Y: 10.002 Z: 0.000')
                  ),
                  // Sector Label
                  h('div', { className: 'absolute top-1/3 left-1/3 text-[8px] font-mono text-zinc-600' }, 'SECTOR_A1')
                )
              )
            )
          )
        )
      )
    ),

    // CSS Keyframes
    h('style', null, \`
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
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

// Keep HTML version for backward compatibility if needed
export const previewHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StrataOS Industrial Dashboard</title>
  <script src="https://cdn.tailwindcss.com/3.4.0"></script>
</head>
<body class="min-h-screen bg-black text-zinc-300">
  <div class="flex items-center justify-center h-screen">
    <div class="text-center">
      <div class="text-amber-600 text-4xl mb-4">⚡</div>
      <h1 class="text-2xl font-bold tracking-widest uppercase">StrataOS</h1>
      <p class="text-zinc-500 text-sm mt-2">Industrial Dashboard - JSX Mode</p>
    </div>
  </div>
</body>
</html>
`;

export const previewCustomPrompt = {
  'zh-CN': `你现在是一名专精于工业控制系统界面设计的资深 UI 设计师兼前端工程师。请为一个全新页面生成一套与当前「StrataOS 工业仪表板」界面风格高度一致的 UI。

你的目标：在不复制现有页面内容的前提下，生成一个「一眼能看出是同一系列」的全新完整 HTML 页面。你需要严格延续当前工业风格的布局逻辑、配色体系、金属质感和精密仪表美学，只替换场景、文案和信息内容。

【使用场景（新的设定）】
- 这是一个「工业物联网设备监控中心」页面，面向工厂运维工程师、设备管理员、生产线主管。
- 用户会在这里监控设备状态、查看告警信息、分析生产数据、执行远程控制操作。
- 整体氛围像是置身于高科技控制室：深沉、专业、精密、可靠。

【整体布局结构要求】
1. 顶部导航栏（Header）
   - 左侧：品牌 Logo（方形图标 + 品牌名称），使用 amber-600 (#d97706) 强调色
   - 右侧：系统状态指示灯（绿色脉冲点）、时间显示（等宽字体）、电源/紧急按钮
   - 高度 64px，背景 zinc-950/90 + backdrop-blur，下边框 zinc-800
   - 字体：品牌名使用 tracking-[0.3em] 大写，版本号使用 10px 等宽字体

2. 侧边栏导航（Sidebar）
   - 宽度：移动端 80px（仅图标），桌面端 256px（图标 + 文字）
   - 背景 zinc-950，右边框 zinc-800
   - 导航按钮：12 高度、工业风格边框、hover 扫描动效
   - 活动状态：bg-zinc-800 border-amber-500 shadow-glow
   - 底部：实时日志面板（黑色背景、绿色等宽字体滚动数据流）+ 设置按钮

3. 主内容区域（Main Dashboard）
   - 顶部状态条：居中分隔线 + 位置/网格/单元编号（等宽字体）
   - 仪表盘卡片网格：3 列布局，每个包含圆形 SVG 仪表 + 状态指示
   - 右侧面板：紧急控制（带危险条纹）+ 资源分配进度条
   - 底部：可视化地图面板（网格背景、准星标记、坐标显示）

【色彩体系与金属质感】
1. 背景色阶
   - 最深背景：#000000（纯黑）
   - 面板背景：#09090b（zinc-950）、#18181b（zinc-900）
   - 卡片背景：渐变 from-zinc-900 to-zinc-950
   - 边框：#27272a（zinc-800）

2. 强调色
   - 主强调：#d97706（amber-600）— 用于 Logo、活动状态、状态灯
   - 警告红：#ef4444（red-500）— 用于紧急控制、警告指示
   - 成功绿：#10b981（emerald-500）— 用于系统在线、正常状态
   - 信息蓝：#3b82f6（blue-500）— 用于功率/信息类数据

3. 文字色
   - 主要文字：#e4e4e7（zinc-200）
   - 次要文字：#a1a1aa（zinc-400）
   - 禁用/提示：#71717a（zinc-500）、#52525b（zinc-600）

【工业纹理与图案】
1. 网格纹理
   - 使用 CSS 线性渐变创建 20px 网格
   - 线条颜色：rgba(255,255,255,0.03)

2. 危险条纹（Hazard Strip）
   - 使用 repeating-linear-gradient(-45deg, ...)
   - 黑色和 amber-600 交替，每段 10px

3. 进度条条纹
   - 使用 repeating-linear-gradient(45deg, ...)
   - 半透明黑色条纹叠加在进度条上

【圆形仪表组件】
1. SVG 结构
   - 外圆：stroke #27272a，strokeWidth 8
   - 进度弧：stroke 对应颜色，strokeWidth 8，stroke-linecap butt
   - 使用 stroke-dasharray 和 stroke-dashoffset 控制进度
   - transform: rotate(-90deg) 使弧线从顶部开始

2. 中心数值
   - 数字：text-xl font-bold font-mono text-zinc-200
   - 单位：text-[10px] text-zinc-500 uppercase tracking-wider

【输出技术要求】
- 使用语义化 HTML5 结构
- 使用 TailwindCSS 原子类进行样式控制
- 整个结果必须是完整的 HTML 文件
- 确保响应式：md: 和 lg: 断点适配
`,

  'en-US': `You are a senior UI designer and front-end engineer specializing in industrial control system interfaces. Your task is to generate a brand new HTML page that maintains high visual consistency with the current "StrataOS Industrial Dashboard" style.

Your goal: Create a complete new page that is immediately recognizable as part of the same design family, without copying the existing content.

[Scenario]
- This is an "Industrial IoT Device Monitoring Center" page for factory operations engineers, equipment managers, and production line supervisors.
- Users will monitor device status, view alerts, analyze production data, and execute remote control operations.
- The overall atmosphere should feel like being inside a high-tech control room: deep, professional, precise, and reliable.

[Overall Layout Requirements]
1. Top Navigation Bar (Header)
   - Left: Brand logo (square icon + brand name), using amber-600 (#d97706) accent
   - Right: System status indicator (green pulsing dot), time display (monospace), power/emergency button
   - Height 64px, background zinc-950/90 + backdrop-blur, bottom border zinc-800

2. Sidebar Navigation
   - Width: Mobile 80px (icons only), Desktop 256px (icons + text)
   - Background zinc-950, right border zinc-800
   - Nav buttons: h-12, industrial-style borders, hover scan effect
   - Active state: bg-zinc-800 border-amber-500 shadow-glow

3. Main Content Area (Dashboard)
   - Top status bar: Centered divider + location/grid/unit numbers (monospace)
   - Gauge card grid: 3-column layout, each with circular SVG gauge + status indicators
   - Right panel: Emergency controls (with hazard stripes) + resource allocation progress bars
   - Bottom: Visualization map panel (grid background, crosshair markers, coordinates)

[Color System]
1. Background Gradients
   - Deepest: #000000 (pure black)
   - Panel: #09090b (zinc-950), #18181b (zinc-900)
   - Borders: #27272a (zinc-800)

2. Accent Colors
   - Primary: #d97706 (amber-600)
   - Warning: #ef4444 (red-500)
   - Success: #10b981 (emerald-500)
   - Info: #3b82f6 (blue-500)

3. Text Colors
   - Primary: #e4e4e7 (zinc-200)
   - Secondary: #a1a1aa (zinc-400)

[Industrial Textures]
1. Grid Texture - CSS linear-gradient creating 20px grid
2. Hazard Strip - repeating-linear-gradient(-45deg, black, amber alternating 10px)
3. Progress Bar Stripes - repeating-linear-gradient(45deg, semi-transparent)

[Circular Gauge Component]
- SVG with outer circle stroke #27272a, strokeWidth 8
- Progress arc with stroke-dasharray and stroke-dashoffset
- Center: text-xl font-bold font-mono for value

[Output Requirements]
- Use semantic HTML5 structure
- Use TailwindCSS utility classes
- Complete HTML file with responsive breakpoints (md:, lg:)
`
};
