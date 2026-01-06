import React, { useState, useEffect, useRef } from 'react';
import {
  Crosshair,
  Settings,
  Cpu,
  Activity,
  Database,
  Maximize,
  Minimize,
  AlertTriangle,
  Radio,
  Share2,
  Terminal,
  LayoutGrid
} from 'lucide-react';

// Alias for Grid icon (avoid "as" syntax which breaks JSX compiler)
const GridIcon = LayoutGrid;

// --- Utility Components & Styles ---

// The core color palette defined in the prompt
const colors = {
  bgDark: '#0a1628',
  bgNavy: '#1a365d',
  lineMain: 'rgba(255, 255, 255, 0.7)',
  lineAux: 'rgba(96, 165, 250, 0.3)',
  accent: '#22d3ee', // Cyan
  warning: '#f97316', // Orange
  text: '#e2e8f0'
};

function BlueprintGrid({ children }) {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden font-mono text-sm selection:bg-cyan-500 selection:text-black"
      style={{ backgroundColor: colors.bgDark }}
    >
      {/* Grid System Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(${colors.lineMain} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.lineMain} 1px, transparent 1px),
            linear-gradient(${colors.lineAux} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.lineAux} 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '-1px -1px',
          opacity: 0.15
        }}
      />
      {/* Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-radial-gradient from-transparent to-black opacity-40" />

      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}

// A technical container with corner markers
function TechPanel({ title, children, className = "", warning = false }) {
  return (
    <div className={`relative bg-[#1a365d]/40 backdrop-blur-sm border border-white/10 p-6 ${className} group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]`}>
      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/60" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/60" />

      {/* Title Label */}
      <div className="absolute -top-3 left-4 bg-[#0a1628] px-2 border border-white/20 text-xs text-cyan-400 tracking-widest uppercase flex items-center gap-2">
        {warning && <AlertTriangle size={10} className="text-orange-500" />}
        {title}
      </div>

      {children}
    </div>
  );
}

// Dimension Arrow Line
function DimensionLine({ width, label, vertical = false }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center h-full absolute -left-6 top-0 bottom-0 py-2">
        <div className="h-px w-2 bg-white/50" />
        <div className="flex-1 w-px bg-white/30 relative">
           <div className="absolute top-1/2 -left-2 -rotate-90 text-[10px] text-white/70 bg-[#0a1628] px-1 whitespace-nowrap origin-center">
            {label}
          </div>
        </div>
        <div className="h-px w-2 bg-white/50" />
      </div>
    );
  }
  return (
    <div className="flex items-center w-full absolute -bottom-6 left-0 right-0 px-2">
      <div className="h-2 w-px bg-white/50" />
      <div className="flex-1 h-px bg-white/30 relative flex justify-center">
        <span className="absolute -top-2.5 bg-[#0a1628] px-1 text-[10px] text-white/70">
          {label}
        </span>
      </div>
      <div className="h-2 w-px bg-white/50" />
    </div>
  );
}

// Interactive Schematic Component
function SchematicNode({ x, y, label, type, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`absolute cursor-pointer transition-all duration-300 group`}
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      {/* Node Graphic */}
      <div className={`
        relative w-16 h-16 flex items-center justify-center
        border-2 ${active ? 'border-cyan-400 bg-cyan-900/20' : 'border-white/30 bg-[#0a1628]/80'}
        ${type === 'circle' ? 'rounded-full' : 'rounded-none rotate-45'}
        transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]
      `}>
        <div className={`
          ${type === 'circle' ? '' : '-rotate-45'}
          text-white/80 group-hover:text-cyan-300
        `}>
          {type === 'circle' ? <Cpu size={24} /> : <Database size={24} />}
        </div>

        {/* Measurement Lines (Appear on Hover/Active) */}
        <div className={`opacity-0 group-hover:opacity-100 ${active ? 'opacity-100' : ''} transition-opacity duration-300`}>
           <div className="absolute top-1/2 right-full w-12 h-px bg-cyan-500/50 border-t border-dashed border-cyan-500/30" />
           <div className="absolute top-full left-1/2 h-8 w-px bg-cyan-500/50 border-l border-dashed border-cyan-500/30" />
           <span className="absolute top-1/2 right-[120%] text-[10px] text-cyan-400 font-mono">X:{x}0</span>
        </div>
      </div>

      {/* Label */}
      <div className={`
        absolute top-[120%] left-1/2 -translate-x-1/2 whitespace-nowrap
        text-[10px] tracking-widest uppercase font-bold
        ${active ? 'text-cyan-400' : 'text-white/50'}
      `}>
        {label}
      </div>
    </div>
  );
}

// --- Main Application ---

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(1);
  const [bootSequence, setBootSequence] = useState(true);
  const [time, setTime] = useState(new Date());

  // Mouse tracker for coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: Math.round(e.clientX),
        y: Math.round(e.clientY)
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Clock
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Fake boot sequence
    const bootTimer = setTimeout(() => setBootSequence(false), 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
      clearTimeout(bootTimer);
    };
  }, []);

  const systemNodes = [
    { id: 1, x: 20, y: 30, label: "Core Processing", type: "circle" },
    { id: 2, x: 50, y: 50, label: "Mainframe Link", type: "diamond" },
    { id: 3, x: 80, y: 30, label: "Network Bridge", type: "circle" },
    { id: 4, x: 35, y: 75, label: "Storage Array A", type: "circle" },
    { id: 5, x: 65, y: 75, label: "Storage Array B", type: "circle" },
  ];

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center font-mono text-cyan-500">
        <div className="w-64">
          <div className="text-xs mb-2 flex justify-between">
            <span>INIT_SYSTEM...</span>
            <span>OK</span>
          </div>
          <div className="text-xs mb-2 flex justify-between">
            <span>LOADING_GRID...</span>
            <span>OK</span>
          </div>
          <div className="text-xs mb-4 flex justify-between">
            <span>CALIBRATING_SENSORS...</span>
            <span className="animate-pulse">WAIT</span>
          </div>
          <div className="h-1 w-full bg-[#1a365d] relative overflow-hidden">
             <div className="absolute inset-y-0 left-0 bg-cyan-500 animate-[width_2s_ease-out_forwards] w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <BlueprintGrid>
      {/* Top Header / Coordinates Bar */}
      <header className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#0a1628]/90 backdrop-blur text-xs tracking-widest">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
            <GridIcon size={18} />
            <span>BLUEPRINT.OS</span>
          </div>
          <div className="hidden md:flex gap-4 text-white/40">
            <span>VER: 4.2.0</span>
            <span>BLD: 2024-X9</span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono">
          <div className="flex flex-col items-end">
             <span className="text-[10px] text-white/40">CURSOR_POS</span>
             <span className="text-cyan-400">X:{mousePos.x.toString().padStart(4, '0')} Y:{mousePos.y.toString().padStart(4, '0')}</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-white/70">ONLINE</span>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto">

        {/* Left Column: Controls */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <TechPanel title="DIAGNOSTICS" className="flex-1">
            <div className="space-y-6">
              {/* Stat Bars */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60">CPU_LOAD</span>
                  <span className="text-cyan-400">78%</span>
                </div>
                <div className="h-2 bg-[#0a1628] border border-white/10 p-[1px]">
                  <div className="h-full bg-cyan-500 w-[78%] shadow-[0_0_10px_cyan]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60">MEMORY_ALLOC</span>
                  <span className="text-orange-400">92%</span>
                </div>
                <div className="h-2 bg-[#0a1628] border border-white/10 p-[1px]">
                  <div className="h-full bg-orange-500 w-[92%] shadow-[0_0_10px_orange]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60">TEMP_CORE</span>
                  <span className="text-white/80">45°C</span>
                </div>
                <div className="h-2 bg-[#0a1628] border border-white/10 p-[1px]">
                  <div className="h-full bg-white/40 w-[45%]" />
                </div>
              </div>

              {/* Data List */}
              <div className="mt-8 border-t border-dashed border-white/10 pt-4">
                <table className="w-full text-xs text-left">
                  <thead className="text-white/30">
                    <tr><th className="pb-2">MODULE</th><th className="pb-2 text-right">STATUS</th></tr>
                  </thead>
                  <tbody className="text-white/70 font-mono">
                    <tr><td className="py-1">NAV_SYS</td><td className="text-right text-green-400">ACTIVE</td></tr>
                    <tr><td className="py-1">LIFE_SUP</td><td className="text-right text-green-400">ACTIVE</td></tr>
                    <tr><td className="py-1">SHIELD_GEN</td><td className="text-right text-orange-400">LOW_PWR</td></tr>
                    <tr><td className="py-1">HYPER_DRV</td><td className="text-right text-white/30">OFFLINE</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TechPanel>

          <TechPanel title="SYSTEM LOG" className="h-48 overflow-hidden">
             <div className="font-mono text-[10px] space-y-1 text-white/60">
               <p><span className="text-cyan-500">10:42:01</span> &gt; INITIALIZING GRAPHICS ENGINE</p>
               <p><span className="text-cyan-500">10:42:03</span> &gt; LOADING TEXTURES... OK</p>
               <p><span className="text-cyan-500">10:42:05</span> &gt; ESTABLISHING SECURE CONNECTION</p>
               <p><span className="text-orange-500">10:42:08</span> &gt; WARNING: LATENCY DETECTED</p>
               <p><span className="text-cyan-500">10:42:10</span> &gt; OPTIMIZING RENDER PIPELINE</p>
               <p><span className="text-cyan-500">10:42:15</span> &gt; SYSTEM READY FOR INPUT</p>
             </div>
          </TechPanel>
        </div>

        {/* Center Column: Visualization */}
        <div className="lg:col-span-6 flex flex-col">
          <TechPanel title="SCHEMATIC VIEW: SECTOR 7" className="flex-1 min-h-[500px] relative overflow-hidden bg-[#0a1628]">
            {/* Background Grid for this specific panel */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle, ${colors.lineMain} 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
            />

            {/* Connecting Lines between nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/20">
              <line x1="20%" y1="30%" x2="50%" y2="50%" strokeWidth="1" />
              <line x1="80%" y1="30%" x2="50%" y2="50%" strokeWidth="1" />
              <line x1="35%" y1="75%" x2="50%" y2="50%" strokeWidth="1" />
              <line x1="65%" y1="75%" x2="50%" y2="50%" strokeWidth="1" />
            </svg>

            {/* Interactive Nodes */}
            {systemNodes.map((node) => (
              <SchematicNode
                key={node.id}
                {...node}
                active={activeNode === node.id}
                onClick={() => setActiveNode(node.id)}
              />
            ))}

            {/* Dimensions Overlay */}
            <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-white/20 pointer-events-none">
              <div className="absolute top-0 right-0 p-2 text-[10px] text-white/40 text-right">
                ZOOM: 100%<br/>
                FOV: 90°
              </div>
            </div>

            {/* Scale Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="flex gap-4 text-white/30 text-[10px]">
                 <span className="flex items-center gap-1"><Radio size={12} /> SCANNING</span>
                 <span className="flex items-center gap-1"><Share2 size={12} /> BROADCAST</span>
              </div>
              <div className="w-48">
                 <div className="flex justify-between text-[8px] text-white/40 mb-1">
                    <span>0</span>
                    <span>50m</span>
                    <span>100m</span>
                 </div>
                 <div className="h-2 border border-white/30 flex">
                    <div className="w-1/4 bg-white/20 border-r border-white/30" />
                    <div className="w-1/4 border-r border-white/30" />
                    <div className="w-1/4 bg-white/20 border-r border-white/30" />
                 </div>
              </div>
            </div>

          </TechPanel>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <TechPanel title="OBJECT PROPERTIES">
            {activeNode ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center justify-center p-4 border border-dashed border-white/20 bg-[#0a1628]">
                  {systemNodes.find(n => n.id === activeNode)?.type === 'circle' ? <Cpu size={48} className="text-cyan-400" /> : <Database size={48} className="text-cyan-400" />}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-white/40">ID_REF</span>
                    <span className="text-white/90">NODE-0{activeNode}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-white/40">CLASS</span>
                    <span className="text-white/90">INFRA_STRUC</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-white/40">LATENCY</span>
                    <span className="text-cyan-400">12ms</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-white/40">UPTIME</span>
                    <span className="text-white/90">99.9%</span>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-[#0a1628] transition-colors uppercase text-xs tracking-wider font-bold">
                  Run Diagnostic
                </button>
              </div>
            ) : (
              <div className="text-center text-white/30 py-10">Select a node</div>
            )}
          </TechPanel>

          <TechPanel title="ENV_CONTROLS" warning={true}>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/5 cursor-pointer transition-colors group">
                  <Maximize size={20} className="text-white/50 group-hover:text-cyan-400" />
                  <span className="text-[10px] text-white/40">EXPAND</span>
               </div>
               <div className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/5 cursor-pointer transition-colors group">
                  <Minimize size={20} className="text-white/50 group-hover:text-cyan-400" />
                  <span className="text-[10px] text-white/40">COMPRESS</span>
               </div>
               <div className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/5 cursor-pointer transition-colors group">
                  <Terminal size={20} className="text-white/50 group-hover:text-cyan-400" />
                  <span className="text-[10px] text-white/40">SHELL</span>
               </div>
               <div className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-red-900/20 cursor-pointer transition-colors group border-orange-900/30">
                  <Activity size={20} className="text-orange-500/70 group-hover:text-orange-500" />
                  <span className="text-[10px] text-orange-500/70">PURGE</span>
               </div>
            </div>
          </TechPanel>
        </div>
      </main>

      {/* Footer / Title Block */}
      <footer className="border-t border-white/10 bg-[#0a1628] p-4">
        <div className="border-2 border-white/20 p-1">
          <div className="border border-white/10 p-2 flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="flex gap-8 text-[10px] text-white/50 uppercase tracking-widest">
              <div>
                <span className="block text-white/20">Project</span>
                SYSTEM_BLUEPRINT_UI
              </div>
              <div>
                <span className="block text-white/20">Designer</span>
                AI_ARCHITECT
              </div>
              <div>
                <span className="block text-white/20">Date</span>
                {time.toISOString().split('T')[0]}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs font-bold text-white/80">SHEET 1 OF 1</div>
                <div className="text-[10px] text-white/40">SCALE 1:1</div>
              </div>
              {/* Stamp */}
              <div className="h-10 w-24 border-2 border-cyan-500/50 text-cyan-500/50 flex items-center justify-center -rotate-2 font-black text-lg opacity-80 mix-blend-screen">
                APPROVED
              </div>
            </div>

          </div>
        </div>
      </footer>
    </BlueprintGrid>
  );
}
