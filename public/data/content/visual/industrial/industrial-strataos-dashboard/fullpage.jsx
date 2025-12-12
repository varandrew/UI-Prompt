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

    return h('button', { className: 'relative w-full h-12 flex items-center justify-between px-4 group overflow-hidden border ' + baseClass + ' transition-all' },
      h('div', { className: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none' }),
      h('div', { className: 'flex items-center gap-3 z-10' },
        h('span', { className: 'text-sm', dangerouslySetInnerHTML: { __html: icon } }),
        h('span', { className: 'text-xs font-bold tracking-widest uppercase font-mono hidden md:block' }, label)
      ),
      h('div', { className: 'w-1.5 h-1.5 ' + (active ? 'bg-amber-500 animate-pulse' : 'bg-zinc-800 group-hover:bg-zinc-600') })
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
          h(NavButton, { icon: '\u26A1', label: 'Dashboard', active: true }),
          h(NavButton, { icon: '\uD83D\uDDA5\uFE0F', label: 'Machines', active: false }),
          h(NavButton, { icon: '\u26A0\uFE0F', label: 'Protocol', active: false }),
          h(NavButton, { icon: '\uD83D\uDCE1', label: 'Network', active: false })
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
          h(NavButton, { icon: '\u2699\uFE0F', label: 'Settings', active: false })
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
                    h('span', null, '\u26A0\uFE0F'),
                    h('span', { className: 'text-xs font-bold tracking-widest uppercase font-mono' }, 'System Purge')
                  ),
                  h('button', { className: 'w-full h-12 flex items-center justify-center gap-3 border bg-zinc-900 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-all' },
                    h('span', null, '\uD83D\uDD12'),
                    h('span', { className: 'text-xs font-bold tracking-widest uppercase font-mono' }, 'Lockdown')
                  ),
                  h('div', { className: 'flex items-center gap-4 pt-2' },
                    h('div', { className: 'h-10 w-10 border border-zinc-700 bg-zinc-950 flex items-center justify-center' },
                      h('span', { className: 'text-red-600 animate-pulse' }, '\u26A0\uFE0F')
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
                      h('span', { className: 'text-amber-500' }, '\u2295'),
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
    h('style', null,
      '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } ' +
      '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } } ' +
      '@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } } ' +
      '.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; } ' +
      '.animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }'
    )
  );
}
