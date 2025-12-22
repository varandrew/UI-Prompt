import React, { useState, useEffect, useRef, memo } from 'react';
import { Layers, Activity, Shield, Box, Zap, Globe, Cpu, ChevronRight, BarChart3, Lock, Hexagon, Database, ScanLine } from 'lucide-react';

// --- Utility Components ---

// OPTIMIZATION: Memoize static components to prevent unnecessary re-renders
const Cube3D = memo(({ size = 40, color = "cyan" }) => {
  const halfSize = size / 2;
  const colorHex = color === 'cyan' ? '#06b6d4' : '#a855f7';

  return (
    <div className="relative transform-gpu" style={{ width: size, height: size, transformStyle: 'preserve-3d', animation: 'spin 10s linear infinite', willChange: 'transform' }}>
       {/* Faces - OPTIMIZED: Reduced opacity calculations */}
       {[
         { transform: `rotateY(0deg) translateZ(${halfSize}px)` },
         { transform: `rotateY(180deg) translateZ(${halfSize}px)` },
         { transform: `rotateY(90deg) translateZ(${halfSize}px)` },
         { transform: `rotateY(-90deg) translateZ(${halfSize}px)` },
         { transform: `rotateX(90deg) translateZ(${halfSize}px)` },
         { transform: `rotateX(-90deg) translateZ(${halfSize}px)` },
       ].map((style, i) => (
         <div
            key={i}
            className="absolute inset-0 border border-white/20 flex items-center justify-center"
            style={{
              ...style,
              backgroundColor: `${colorHex}20`,
              boxShadow: `inset 0 0 20px ${colorHex}40`
            }}
         >
           <div className="w-2 h-2 rounded-full bg-white/40" />
         </div>
       ))}
    </div>
  );
});

// OPTIMIZATION: Simplified Bar3D
const Bar3D = memo(({ percentage = 70, color = "cyan" }) => {
  const colorClass = color === "cyan" ? "bg-cyan-500" : "bg-purple-500";

  return (
    <div className="h-4 w-full bg-slate-800/50 rounded-lg relative">
      <div
        className={`h-full ${colorClass} rounded-l-lg transition-all duration-1000 ease-out`}
        style={{
          width: `${percentage}%`,
          boxShadow: color === "cyan" ? '0 0 15px rgba(6,182,212,0.4)' : '0 0 15px rgba(168,85,247,0.4)'
        }}
      />
    </div>
  );
});

const NeonButton = memo(({ children, color = "cyan" }) => {
  const colorClasses = {
    cyan: "from-cyan-400 to-blue-500 shadow-cyan-500/20 hover:shadow-cyan-500/50 border-cyan-400/30",
    purple: "from-fuchsia-400 to-purple-600 shadow-purple-500/20 hover:shadow-purple-500/50 border-purple-400/30",
  };

  return (
    <button className={`
      relative px-6 py-3 rounded-xl font-bold text-white text-sm tracking-wide
      bg-gradient-to-r ${colorClasses[color]}
      shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0
      transition-all duration-300 border-t border-l group overflow-hidden
    `}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    </button>
  );
});

// OPTIMIZATION: Scanner isolated with slower update
const ScannerDisplay = memo(() => {
  const [scanned, setScanned] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanned(prev => (prev + 1) % 100);
    }, 80); // Slower update: 50ms → 80ms
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono text-xs text-purple-300">{scanned}% SCANNED</span>;
});

// OPTIMIZATION: Simplified Card3D with reduced calculations
const Card3D = ({ children, className = "", depth = "md", glowColor = "blue", noPadding = false }) => {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const ROTATION_RANGE = 6; // Reduced from 8

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -ROTATION_RANGE;
      const rotateY = ((x - centerX) / centerX) * ROTATION_RANGE;

      cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const getGlowColorRGBA = () => {
    switch (glowColor) {
      case "purple": return "168, 85, 247";
      case "cyan": return "6, 182, 212";
      case "rose": return "244, 63, 94";
      case "emerald": return "16, 185, 129";
      default: return "59, 130, 246";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-500 ease-out group ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Simplified Glow */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
        style={{
          boxShadow: isHovered
            ? `0 15px 30px -5px rgba(${getGlowColorRGBA()}, 0.5)`
            : `0 10px 15px -5px rgba(${getGlowColorRGBA()}, 0.15)`
        }}
      />

      {/* Main Content */}
      <div
        className={`
          h-full w-full rounded-2xl border border-white/10
          bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95
          backdrop-blur-xl shadow-2xl relative overflow-hidden
          ${noPadding ? '' : 'p-6'}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Main Application ---

export default function NexusInterface() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  // OPTIMIZATION: Throttled mouse parallax
  useEffect(() => {
    let lastTime = 0;
    const throttleMs = 16; // ~60fps

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      if (!containerRef.current) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;

        containerRef.current.style.setProperty('--mouse-x', x);
        containerRef.current.style.setProperty('--mouse-y', y);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#030308] text-slate-200 overflow-hidden font-sans selection:bg-cyan-500/30"
      style={{ '--mouse-x': 0, '--mouse-y': 0 }}
    >

      {/* --- OPTIMIZED Environment --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* OPTIMIZED: Reduced stars 20 → 10 */}
        {[...Array(10)].map((_, i) => (
           <div
             key={i}
             className="absolute rounded-full bg-white/40 animate-pulse"
             style={{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               width: `${Math.random() * 3 + 1}px`,
               height: `${Math.random() * 3 + 1}px`,
               animationDelay: `${Math.random() * 5}s`
             }}
           />
        ))}

        {/* OPTIMIZED: Simplified grid with reduced blur */}
        <div
          className="absolute inset-[-50%] opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `perspective(1000px) rotateX(70deg) translateY(200px) translateX(calc(var(--mouse-x) * -20px))`,
            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
            transition: 'transform 0.1s linear'
          }}
        />

        {/* OPTIMIZED: Reduced blur 100px → 80px */}
        <div
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/5 blur-[80px]"
          style={{
            transform: `translate(calc(var(--mouse-x) * -30px), calc(var(--mouse-y) * -30px))`,
            transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/5 blur-[80px]"
          style={{
             transform: `translate(calc(var(--mouse-x) * 30px), calc(var(--mouse-y) * 30px))`,
             transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        />
      </div>

      {/* --- HUD Overlay --- */}
      <div className="fixed inset-4 border border-white/5 rounded-3xl pointer-events-none z-50 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start opacity-50">
             <div className="w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg" />
             <div className="w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg" />
          </div>

          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-cyan-500/50 rounded-full" style={{ opacity: 1 - (i * 0.1) }} />
            ))}
          </div>

          <div className="flex justify-between items-end opacity-50">
             <div className="w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg" />
             <div className="text-xs font-mono text-cyan-500/80">SYS.VER.4.0.2 // STABLE</div>
             <div className="w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-lg" />
          </div>
      </div>

      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 relative transition-transform duration-500 group-hover:rotate-180">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Box className="text-white" strokeWidth={3} size={28} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">NEXUS</span>
            <span className="text-[10px] tracking-[0.3em] text-cyan-400 uppercase">Spatial Interface</span>
          </div>
        </div>

        <div className="pointer-events-auto hidden md:flex items-center gap-6 bg-slate-900/40 backdrop-blur-md px-2 py-2 rounded-full border border-white/5 shadow-2xl">
          {['Dashboard', 'Neural Net', 'DeFi Assets', 'Protocol'].map((item, i) => (
            <a key={item} href="#" className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-300
              ${i === 0 ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}
            `}>
              {item}
            </a>
          ))}
        </div>

        <div className="pointer-events-auto flex gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="w-12 h-12 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center hover:scale-110 transition-transform">
              <Activity size={20} className="text-rose-400" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Main Stage --- */}
      <main className="relative z-10 pt-36 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                 <span className="w-1 h-3 bg-emerald-500 rounded-sm animate-pulse"></span>
                 <span className="w-1 h-3 bg-emerald-500 rounded-sm animate-pulse delay-75"></span>
                 <span className="w-1 h-3 bg-emerald-500 rounded-sm animate-pulse delay-150"></span>
              </div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">System Optimal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2" style={{ textShadow: '0 0 40px rgba(6,182,212,0.2)' }}>
              COMMAND<br/>CENTER
            </h1>
          </div>

          <div className="flex gap-6">
             <NeonButton color="purple"><Zap size={16} /> Quick Deploy</NeonButton>
             <NeonButton color="cyan"><Database size={16} /> Asset View</NeonButton>
          </div>
        </div>

        {/* 3D Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-20">

          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <Card3D className="min-h-[320px]" depth="lg" glowColor="cyan">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <Globe size={28} />
                </div>
                <div className="text-right">
                   <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Bandwidth</div>
                   <div className="font-mono text-cyan-400">842.5 TB/s</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-2 font-bold uppercase"><span>Upload</span> <span>82%</span></div>
                  <Bar3D percentage={82} color="cyan" />
                </div>
                <div>
                   <div className="flex justify-between text-xs text-slate-300 mb-2 font-bold uppercase"><span>Download</span> <span>45%</span></div>
                   <Bar3D percentage={45} color="purple" />
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                 <div className="scale-50 opacity-50"><Cube3D size={40} color="cyan" /></div>
              </div>
            </Card3D>

            <div className="grid grid-cols-2 gap-6 flex-1">
              <Card3D className="aspect-square flex flex-col items-center justify-center text-center gap-4" depth="sm" glowColor="rose">
                 <div className="absolute inset-0 bg-rose-500/5" />
                 <div className="relative w-16 h-16 flex items-center justify-center animate-bounce">
                    <Shield size={40} className="text-rose-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
                    <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full" />
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-white tracking-tighter">99.9%</div>
                   <div className="text-[10px] text-rose-300 uppercase tracking-widest mt-1">Security Level</div>
                 </div>
              </Card3D>

              <Card3D className="aspect-square flex flex-col items-center justify-center text-center" depth="sm" glowColor="emerald">
                 <div className="mb-4">
                    <Cube3D size={50} color="cyan" />
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-white">42 Nodes</div>
                   <div className="text-[10px] text-emerald-300 uppercase tracking-widest mt-1">Active Cluster</div>
                 </div>
              </Card3D>
            </div>
          </div>

          {/* Middle Column - OPTIMIZED Gyroscope */}
          <div className="md:col-span-5 relative z-20">
             <Card3D className="h-full min-h-[500px] flex flex-col" depth="xl" glowColor="purple" noPadding>
                <div className="p-6 relative z-20 border-b border-white/5 bg-slate-900/50 backdrop-blur-md flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                      <h2 className="font-bold text-white text-sm tracking-widest uppercase">Deep Core Analytics</h2>
                   </div>
                   <ScannerDisplay />
                </div>

                <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                   {/* OPTIMIZED: Simplified Gyroscope */}
                   <div className="relative w-64 h-64 animate-spin-slow">
                      <div className="absolute inset-0 rounded-full border border-purple-500/30 border-dashed animate-spin-reverse" style={{ transform: 'rotateX(60deg)' }}></div>
                      <div className="absolute inset-8 rounded-full border-2 border-cyan-500/40 animate-spin" style={{ transform: 'rotateY(60deg)' }}></div>
                      <div className="absolute inset-16 rounded-full border-4 border-slate-700/50 border-t-cyan-400 border-b-purple-500 animate-spin"></div>
                      <div className="absolute inset-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_50px_rgba(168,85,247,0.6)] flex items-center justify-center animate-pulse">
                         <Hexagon size={32} className="text-white animate-spin-slow" strokeWidth={3} />
                      </div>

                      {/* OPTIMIZED: Reduced points 8 → 6 */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                          style={{
                            top: '50%', left: '50%',
                            transform: `rotateY(${i * 60}deg) rotateX(45deg) translateZ(140px)`
                          }}
                        />
                      ))}
                   </div>

                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[10%] w-full top-1/2 animate-scan" />
                </div>

                <div className="p-6 relative z-20 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                   <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Flux', val: '98%' },
                        { label: 'Sync', val: '12ms' },
                        { label: 'Load', val: '45%' }
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-2 rounded bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                           <div className="text-[10px] text-slate-400 uppercase">{stat.label}</div>
                           <div className="text-lg font-bold text-white">{stat.val}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </Card3D>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <Card3D className="flex-1" depth="md">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
                   <Box size={14} className="text-cyan-400"/> Recent Blocks
                 </h3>
                 <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              </div>

              <div className="space-y-5 relative z-10">
                {[
                  { id: '0x8a...42f', type: 'Smart Contract', time: '2s ago', status: 'Valid', col: 'emerald' },
                  { id: '0x7b...99c', type: 'Token Transfer', time: '14s ago', status: 'Pending', col: 'amber' },
                  { id: '0x3c...11a', type: 'NFT Mint', time: '45s ago', status: 'Valid', col: 'purple' },
                  { id: '0x1d...22b', type: 'DeFi Swap', time: '1m ago', status: 'Valid', col: 'cyan' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group/item relative transition-all duration-300 hover:translate-x-2"
                  >
                    <div className={`
                      relative p-4 rounded-xl border border-white/10 overflow-hidden
                      bg-gradient-to-r from-slate-800 to-slate-800/50 backdrop-blur-md
                      shadow-lg group-hover/item:shadow-cyan-500/20
                    `}>
                       <div className="flex justify-between items-center mb-2">
                          <span className={`font-mono text-xs font-bold text-${item.col}-400 flex items-center gap-2`}>
                            <div className={`w-1.5 h-1.5 rounded-sm bg-${item.col}-400 rotate-45`} />
                            {item.id}
                          </span>
                       </div>
                       <div className="flex justify-between items-center text-xs text-slate-400">
                          <span className="font-medium text-slate-300">{item.type}</span>
                          <span>{item.time}</span>
                       </div>

                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700 ease-in-out" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer group/link p-2 rounded hover:bg-white/5">
                   <Lock size={12} className="text-emerald-400" />
                   <span>Encrypted Proxy 10.2</span>
                   <ChevronRight size={12} className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </div>
              </div>
            </Card3D>
          </div>

        </div>

        {/* Floating Dock */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
           <div className="flex items-end gap-3 p-4 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              {[Layers, Box, Globe, Shield, Activity].map((Icon, i) => (
                <button
                  key={i}
                  className={`
                    relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group
                    ${i === 0 ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 -translate-y-2 scale-110' : 'bg-slate-800/50 hover:bg-slate-700 hover:-translate-y-2 hover:scale-110'}
                  `}
                >
                   <Icon size={24} className={`${i === 0 ? 'text-white' : 'text-slate-400 group-hover:text-white'} transition-colors`} />

                   <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-lg border border-white/20 shadow-xl whitespace-nowrap pointer-events-none">
                     Module {i + 1}
                   </span>

                   <div className="absolute -bottom-4 left-2 right-2 h-1 bg-black/50 blur-md rounded-full group-hover:scale-x-75 transition-transform" />
                </button>
              ))}
           </div>
        </div>
      </main>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin 15s linear infinite reverse;
        }

        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }

        /* Hardware acceleration */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
