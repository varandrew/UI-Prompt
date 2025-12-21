import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, Camera, Footprints, Cigarette, Mic, Eye, X } from 'lucide-react';

/**
 * Noir Theme Configuration & Global Styles
 * Incorporating:
 * - Film Grain
 * - Venetian Blinds
 * - High Contrast
 * - Typewriter animations
 */

export default function NoirLayout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('case-files');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom CSS for effects that are too complex for standard Tailwind
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');

    body {
      background-color: #0d0d0d;
      color: #f0f0f0;
      overflow-x: hidden;
    }

    .font-noir-heading { font-family: 'Playfair Display', serif; }
    .font-noir-body { font-family: 'Georgia', serif; }
    .font-noir-mono { font-family: 'Courier Prime', monospace; }

    /* Film Grain Animation */
    @keyframes grain {
      0%, 100% { transform: translate(0, 0); }
      10% { transform: translate(-5%, -10%); }
      20% { transform: translate(-15%, 5%); }
      30% { transform: translate(7%, -25%); }
      40% { transform: translate(-5%, 25%); }
      50% { transform: translate(-15%, 10%); }
      60% { transform: translate(15%, 0%); }
      70% { transform: translate(0%, 15%); }
      80% { transform: translate(3%, 35%); }
      90% { transform: translate(-10%, 10%); }
    }

    .film-grain {
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
      opacity: 0.15;
      animation: grain 8s steps(10) infinite;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: overlay;
    }

    /* Venetian Blinds Pattern */
    .venetian-blinds {
      background: repeating-linear-gradient(
        180deg,
        rgba(0,0,0,0.8) 0px,
        rgba(0,0,0,0.8) 40px,
        transparent 40px,
        transparent 80px
      );
      pointer-events: none;
    }

    /* Dramatic Spotlight */
    .spotlight-overlay {
      background: radial-gradient(
        circle 250px at var(--x) var(--y),
        transparent 0%,
        rgba(0,0,0,0.4) 40%,
        rgba(0,0,0,0.95) 100%
      );
    }
    
    /* Text Shadow Layers */
    .noir-text-shadow {
      text-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(255,255,255,0.1);
    }

    /* Flicker Animation */
    @keyframes flicker {
      0% { opacity: 0.95; }
      5% { opacity: 0.8; }
      10% { opacity: 0.95; }
      15% { opacity: 0.4; }
      20% { opacity: 0.95; }
      100% { opacity: 0.95; }
    }
    .neon-flicker {
      animation: flicker 4s infinite alternate;
    }
  `;

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-red-900 selection:text-white" 
         style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` }}>
      <style>{customStyles}</style>

      {/* Atmospheric Layers */}
      <div className="film-grain"></div>
      <div className="fixed inset-0 spotlight-overlay z-40 pointer-events-none mix-blend-multiply"></div>
      
      {/* Navigation - Sidebar Layout */}
      <div className="relative z-50 flex flex-col md:flex-row min-h-screen">
        
        {/* Sidebar */}
        <nav className="w-full md:w-64 bg-[#0a0a0a] border-r border-[#333] flex flex-col justify-between p-6 relative shadow-[10px_0_20px_rgba(0,0,0,0.8)]">
          <div>
            <div className="mb-12 pt-4">
              <h1 className="font-noir-heading text-4xl font-bold tracking-widest text-white noir-text-shadow mb-2">
                NOIR
              </h1>
              <p className="font-noir-mono text-xs text-gray-500 tracking-widest uppercase">
                Detective Agency
              </p>
              <div className="h-px w-12 bg-red-900 mt-4"></div>
            </div>

            <ul className="space-y-6">
              {[
                { id: 'case-files', label: 'Current Case', icon: FileText },
                { id: 'evidence', label: 'Visual Evidence', icon: Camera },
                { id: 'style-guide', label: 'System Protocol', icon: Eye },
                { id: 'contact', label: 'Contact', icon: Mic },
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActiveTab(item.id)}
                    className={`group flex items-center space-x-4 w-full text-left transition-all duration-500 ${activeTab === item.id ? 'text-white translate-x-2' : 'text-gray-600 hover:text-gray-300'}`}
                  >
                    <item.icon size={18} className={`transition-opacity ${activeTab === item.id ? 'opacity-100 text-red-900' : 'opacity-50'}`} />
                    <span className="font-noir-mono text-sm tracking-wider uppercase group-hover:tracking-widest transition-all">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 md:mt-0">
            <p className="font-noir-body italic text-gray-700 text-xs">
              "In a city of millions, <br/> everyone has a secret."
            </p>
            <div className="mt-4 text-[10px] font-noir-mono text-gray-800">
              EST. 1948 • LOS ANGELES
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 bg-[#121212] relative overflow-y-auto h-screen scrollbar-hide">
          {/* Top Venetian Blind Shadow Effect for Content */}
          <div className="absolute top-0 left-0 w-full h-64 venetian-blinds opacity-30 z-0 pointer-events-none"></div>

          <div className="p-8 md:p-16 max-w-5xl mx-auto relative z-10 pb-32">
            
            {/* Header Status */}
            <div className="flex justify-between items-end border-b border-gray-800 pb-4 mb-12">
              <div>
                <span className="font-noir-mono text-red-900 text-xs tracking-[0.3em] uppercase block mb-1">Status: Unsolved</span>
                <h2 className="font-noir-heading text-3xl md:text-5xl text-gray-200">
                  {activeTab === 'case-files' && "The Midnight Alibi"}
                  {activeTab === 'evidence' && "Exhibit A: Visuals"}
                  {activeTab === 'style-guide' && "Agency Design System"}
                  {activeTab === 'contact' && "Leave a Tip"}
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <div className="font-noir-mono text-gray-500 text-sm">CASE #402-B</div>
                <div className="font-noir-mono text-gray-600 text-xs">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</div>
              </div>
            </div>

            {/* CONTENT SWITCHER */}
            <div className="animate-in fade-in duration-1000 slide-in-from-bottom-4">
              
              {/* --- CASE FILES (Home) --- */}
              {activeTab === 'case-files' && (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-6">
                      <div className={`font-noir-mono text-lg leading-relaxed text-gray-300 border-l-2 border-gray-800 pl-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
                        <Typewriter text="It started like any other Tuesday. The rain was drumming a relentless rhythm against the office window, washing the grime off the city streets but leaving the sins untouched. She walked in wearing red—a color that screams danger in a monochrome world." speed={30} />
                      </div>
                      
                      <p className="font-noir-body text-gray-500 leading-loose">
                        The shadows in the corner of the room seemed to lengthen as she spoke. 
                        We specialize in the impossible, the lost causes, the shadows that move when no one is looking. 
                        Our methods are unconventional, our results... definitive.
                      </p>

                      <div className="flex gap-4 mt-8">
                        <Button variant="primary">Accept Case</Button>
                        <Button variant="outline">Review Dossier</Button>
                      </div>
                    </div>

                    <div className="md:col-span-4">
                      <div className="bg-[#050505] p-1 border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-[#1a1a1a] p-6 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 flex items-center justify-center">
                              <Search className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
                           </div>
                           <div className="w-full aspect-[3/4] bg-[#111] border border-gray-800 flex items-center justify-center relative">
                              <div className="absolute inset-0 venetian-blinds opacity-50"></div>
                              <Footprints className="text-gray-800 w-24 h-24" />
                           </div>
                           <div className="mt-4 text-center">
                              <p className="font-noir-mono text-xs text-red-900 uppercase tracking-widest">Suspect Unknown</p>
                              <p className="font-noir-heading text-xl mt-1">The Silhouette</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-800">
                    <FeatureCard 
                      icon={<Eye />} 
                      title="Surveillance" 
                      desc="We see what others miss in the dark corners of the city."
                    />
                    <FeatureCard 
                      icon={<Cigarette />} 
                      title="Interrogation" 
                      desc="Getting the truth, one way or another."
                    />
                    <FeatureCard 
                      icon={<FileText />} 
                      title="Cold Cases" 
                      desc="Dusting off the files the police forgot."
                    />
                  </div>
                </div>
              )}

              {/* --- STYLE GUIDE (System Protocol) --- */}
              {activeTab === 'style-guide' && (
                <div className="space-y-16">
                  <div className="prose prose-invert max-w-none">
                     <p className="font-noir-body text-xl text-gray-400 italic">
                       "Style isn't just about looking good. It's about survival. Here is the code we live by."
                     </p>
                  </div>

                  {/* 1. Typography System */}
                  <Section title="01. Typography System">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                       <div className="space-y-4">
                          <div className="border-b border-gray-800 pb-2">
                             <span className="font-noir-mono text-xs text-gray-500 block mb-2">HEADLINES (Playfair Display)</span>
                             <h1 className="font-noir-heading text-4xl text-white">The Big Sleep</h1>
                             <h2 className="font-noir-heading text-2xl text-gray-300 mt-2">Double Indemnity</h2>
                          </div>
                          <div className="border-b border-gray-800 pb-2">
                             <span className="font-noir-mono text-xs text-gray-500 block mb-2">BODY COPY (Georgia)</span>
                             <p className="font-noir-body text-gray-400">
                               The night was humid, clinging to the skin like a guilty conscience. 
                               Used for long-form narrative text.
                             </p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="bg-[#1a1a1a] p-6 border-l-4 border-red-900">
                             <span className="font-noir-mono text-xs text-red-900 block mb-2">DATA & EVIDENCE (Courier Prime)</span>
                             <p className="font-noir-mono text-sm text-gray-300">
                               CASE_ID: 8992<br/>
                               DATE: 12-04-1952<br/>
                               LOC: PORT OF LA<br/>
                               STATUS: <span className="text-red-900">COMPROMISED</span>
                             </p>
                          </div>
                       </div>
                    </div>
                  </Section>

                  {/* 2. Color Palette */}
                  <Section title="02. Color System">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <ColorSwatch color="#0d0d0d" name="Deep Black" hex="#0d0d0d" text="text-gray-500" />
                      <ColorSwatch color="#1a1a1a" name="Charcoal" hex="#1a1a1a" text="text-gray-400" />
                      <ColorSwatch color="#333333" name="Shadow" hex="#333333" text="text-gray-300" />
                      <ColorSwatch color="#f0f0f0" name="Silver White" hex="#f0f0f0" text="text-black" />
                      <ColorSwatch color="#8b0000" name="Fatal Red" hex="#8b0000" text="text-white" />
                    </div>
                  </Section>

                  {/* 3. Interactive Elements */}
                  <Section title="03. Interaction Components">
                    <div className="flex flex-wrap gap-8 items-center bg-[#080808] p-8 border border-gray-800">
                      <div className="space-y-2 text-center">
                        <Button variant="primary">Primary Action</Button>
                        <p className="font-noir-mono text-[10px] text-gray-600">HOVER FOR GLOW</p>
                      </div>
                      <div className="space-y-2 text-center">
                        <Button variant="secondary">Secondary</Button>
                        <p className="font-noir-mono text-[10px] text-gray-600">SUBTLE GRADIENT</p>
                      </div>
                      <div className="space-y-2 text-center">
                        <Button variant="outline">Ghost Button</Button>
                        <p className="font-noir-mono text-[10px] text-gray-600">BORDER ONLY</p>
                      </div>
                      
                      <div className="ml-auto flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-gray-700 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-lg">
                           <X size={20} className="text-gray-400" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center shadow-[0_0_15px_rgba(139,0,0,0.5)]">
                           <Cigarette size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </Section>
                </div>
              )}

              {/* --- EVIDENCE (Gallery) --- */}
              {activeTab === 'evidence' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1 md:col-span-2 mb-8">
                     <h3 className="font-noir-heading text-2xl mb-4 text-gray-300">Photographic Proof</h3>
                     <p className="font-noir-mono text-sm text-gray-500 max-w-xl">
                       Grainy photos taken from across the street. High contrast processing reveals hidden details in the shadows. 
                       Hover over images to inspect.
                     </p>
                  </div>
                  
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group relative aspect-video bg-black border border-gray-800 overflow-hidden cursor-crosshair">
                      <div className={`w-full h-full opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale contrast-125
                        ${i === 1 ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-900 to-black' : ''}
                        ${i === 2 ? 'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-100 via-gray-900 to-black' : ''}
                        ${i === 3 ? 'bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-black via-gray-800 to-white' : ''}
                        ${i === 4 ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-900 to-black' : ''}
                      `}></div>
                      
                      <div className="absolute inset-0 venetian-blinds opacity-40 mix-blend-multiply pointer-events-none"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-800">
                        <div className="flex justify-between items-center">
                          <span className="font-noir-mono text-xs text-white">EVIDENCE_#{100 + i}</span>
                          <span className="font-noir-mono text-[10px] text-red-500 uppercase tracking-widest">Confidential</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* --- CONTACT (Form) --- */}
              {activeTab === 'contact' && (
                <div className="max-w-2xl">
                   <div className="bg-[#161616] p-1 border border-gray-800 shadow-2xl">
                     <div className="border border-gray-700 p-8 md:p-12">
                        <div className="flex justify-between mb-8 border-b-2 border-dashed border-gray-700 pb-4">
                           <h3 className="font-noir-heading text-3xl text-gray-200">Incident Report</h3>
                           <div className="border-2 border-red-900 text-red-900 font-noir-mono text-xs px-2 py-1 transform -rotate-12 uppercase opacity-80">
                             Urgent
                           </div>
                        </div>

                        <form className="space-y-8">
                           <div className="space-y-2">
                              <label className="font-noir-mono text-xs uppercase tracking-widest text-gray-500">Informant Name</label>
                              <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-gray-600 text-gray-200 font-noir-mono focus:border-red-900 focus:outline-none py-2 transition-colors placeholder-gray-800"
                                placeholder="J. Doe"
                              />
                           </div>
                           
                           <div className="space-y-2">
                              <label className="font-noir-mono text-xs uppercase tracking-widest text-gray-500">Location of Incident</label>
                              <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-gray-600 text-gray-200 font-noir-mono focus:border-red-900 focus:outline-none py-2 transition-colors placeholder-gray-800"
                                placeholder="The docks, midnight..."
                              />
                           </div>

                           <div className="space-y-2">
                              <label className="font-noir-mono text-xs uppercase tracking-widest text-gray-500">Details</label>
                              <textarea 
                                rows={4}
                                className="w-full bg-[#0a0a0a] border border-gray-700 p-4 text-gray-300 font-noir-body focus:border-red-900 focus:outline-none transition-colors resize-none"
                                placeholder="Keep it brief. The walls have ears..."
                              />
                           </div>

                           <div className="pt-4 flex justify-end">
                              <Button variant="primary">Submit Report</Button>
                           </div>
                        </form>
                     </div>
                   </div>
                </div>
              )}

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* --- Sub Components --- */

function Button({ children, variant = 'primary', className = '' }) {
  const baseStyle = "font-noir-mono text-xs uppercase tracking-[0.2em] py-3 px-6 transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-b from-gray-800 to-black text-white border border-gray-700 hover:border-gray-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95",
    secondary: "bg-[#1a1a1a] text-gray-300 border border-transparent hover:border-gray-700 hover:bg-[#222]",
    outline: "bg-transparent text-gray-400 border border-gray-800 hover:border-red-900 hover:text-red-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      )}
    </button>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-500 bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div className="mb-4 text-gray-600 group-hover:text-red-900 transition-colors duration-500">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="font-noir-heading text-xl text-gray-200 mb-2 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
      <p className="font-noir-body text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{desc}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-t border-gray-800 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h2 className="font-noir-mono text-sm text-red-900 tracking-widest uppercase mb-8 flex items-center gap-4">
        {title}
        <span className="h-px flex-1 bg-gray-800"></span>
      </h2>
      {children}
    </div>
  );
}

function ColorSwatch({ color, name, hex, text }) {
  return (
    <div className="group">
      <div className="h-24 w-full border border-gray-800 shadow-lg relative overflow-hidden mb-3" style={{ backgroundColor: color }}>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white to-transparent opacity-5 rounded-bl-full"></div>
      </div>
      <div className="text-center">
        <p className={`font-noir-mono text-xs uppercase font-bold text-gray-300`}>{name}</p>
        <p className="font-noir-mono text-[10px] text-gray-600 mt-1">{hex}</p>
      </div>
    </div>
  );
}

function Typewriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse ml-1 text-red-900">|</span>
    </span>
  );
}