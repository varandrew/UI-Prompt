import React, { useState, useEffect } from 'react';
import { Zap, Star, MessageCircle, ArrowRight, Heart, Shield, BoomBox } from 'lucide-react';

// --- Components ---

const Panel = ({ children, className = "", title, variant = "white", rotate = 0, style }) => {
  const bgClass = {
    white: "bg-[#FFFEF0]",
    blue: "bg-[#1E90FF]",
    red: "bg-[#E23636]",
    yellow: "bg-[#FFD700]",
    dark: "bg-[#2C2C2C]"
  }[variant] || "bg-white";

  const textClass = variant === "dark" || variant === "blue" || variant === "red" ? "text-white" : "text-black";

  return (
    <div
      className={`relative border-4 border-black box-shadow-hard overflow-hidden group transition-transform duration-300 hover:z-10 hover:scale-[1.02] ${bgClass} ${textClass} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        ...style
      }}
    >
      <div className="absolute inset-0 bg-halftone pointer-events-none z-0 mix-blend-multiply"></div>

      {title && (
        <div className="absolute top-0 left-0 bg-[#FFD700] border-b-4 border-r-4 border-black px-3 py-1 z-20">
          <span className="font-comic-display text-black tracking-wider text-lg uppercase">{title}</span>
        </div>
      )}

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

const ComicButton = ({ children, variant = "primary", onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const colors = {
    primary: "bg-[#E23636] hover:bg-[#ff4d4d] text-white",
    secondary: "bg-[#1E90FF] hover:bg-[#3FA0FF] text-white",
    warning: "bg-[#FFD700] hover:bg-[#ffe44d] text-black"
  };

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if(onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${colors[variant]}
        font-comic-display text-xl tracking-wider uppercase px-8 py-3
        border-4 border-black box-shadow-hard
        transform transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
        ${isClicked ? 'animate-pow' : ''}
      `}
    >
      {children}
    </button>
  );
};

const SoundEffect = ({ text, style }) => (
  <div
    className="absolute z-50 font-comic-display font-bold italic text-[#FFD700] text-5xl md:text-7xl pointer-events-none select-none drop-shadow-[4px_4px_0_rgba(0,0,0,1)] stroke-black"
    style={{
      ...style,
      WebkitTextStroke: '2px black',
    }}
  >
    {text}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 relative text-center">
    <div className="absolute top-1/2 left-0 w-full h-2 bg-black -z-10 transform -translate-y-1/2"></div>
    <div className="inline-block bg-[#FFFEF0] border-4 border-black px-6 py-4 transform -rotate-2 box-shadow-hard">
      <h2 className="font-comic-display text-5xl md:text-6xl text-black text-3d uppercase">{title}</h2>
      {subtitle && <p className="font-comic-body font-bold text-xl mt-2 text-[#E23636] uppercase tracking-widest">{subtitle}</p>}
    </div>
  </div>
);

const ColorSwatch = ({ color, name, hex }) => (
  <div className="flex flex-col items-center">
    <div
      className="w-24 h-24 rounded-full border-4 border-black box-shadow-hard-sm mb-3 transition-transform hover:scale-110"
      style={{ backgroundColor: color }}
    ></div>
    <span className="font-comic-display text-xl">{name}</span>
    <span className="font-comic-body font-bold text-xs bg-black text-white px-2 py-1 rounded">{hex}</span>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [clickEffect, setClickEffect] = useState(null);

  const handleGlobalClick = (e) => {
    // Small chance to show a sound effect anywhere on screen
    if(Math.random() > 0.7) {
      const sounds = ["POW!", "ZAP!", "BAM!", "CRASH!"];
      const sound = sounds[Math.floor(Math.random() * sounds.length)];

      const effect = {
        id: Date.now(),
        text: sound,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 40 - 20
      };

      setClickEffect(effect);
      setTimeout(() => setClickEffect(null), 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#2C2C2C] pb-20" onClick={handleGlobalClick}>

      {/* Click FX Layer */}
      {clickEffect && (
        <div
          className="fixed z-[100] animate-pow"
          style={{
            left: clickEffect.x,
            top: clickEffect.y,
            transform: `translate(-50%, -50%) rotate(${clickEffect.rotation}deg)`
          }}
        >
          <div className="comic-burst absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-[#E23636] border-2 border-black"></div>
          <div className="comic-burst absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] border-2 border-black rotate-12"></div>
          <SoundEffect text={clickEffect.text} style={{ position: 'relative' }} />
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden bg-[#1E90FF] border-b-8 border-black">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-halftone-color opacity-20"></div>
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-[#FFD700] rounded-full border-4 border-black opacity-80 mix-blend-hard-light animate-pulse"></div>

        {/* Sunburst Lines */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-8 bg-black"
              style={{ transform: `rotate(${i * 30}deg)` }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white border-4 border-black p-8 box-shadow-hard transform -rotate-1 relative">
            <div className="absolute -top-6 -left-6 bg-[#E23636] text-white font-comic-display px-4 py-2 border-4 border-black transform -rotate-3 z-20">
              ISSUE #1
            </div>
            <h1 className="font-comic-display text-7xl md:text-9xl text-[#E23636] leading-[0.85] text-3d-lg drop-shadow-md mb-4">
              COMIC<br/><span className="text-[#FFD700] text-stroke-black">UI</span> KIT
            </h1>
            <p className="font-comic-body font-bold text-2xl mb-8 leading-tight">
              "DESIGNED FOR HEROES! MASTERING THE VISUAL LANGUAGE OF THE SILVER AGE!"
            </p>
            <div className="flex gap-4 flex-wrap">
              <ComicButton variant="primary">START READING</ComicButton>
              <ComicButton variant="warning">COLLECT ALL!</ComicButton>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] flex items-center justify-center">
             {/* Character/Mascot Placeholder built with CSS shapes */}
             <div className="relative w-80 h-80 animate-pow">
                <div className="absolute inset-0 bg-[#E23636] clip-jagged border-4 border-black transform rotate-12 scale-110"></div>
                <div className="absolute inset-0 bg-[#FFD700] clip-jagged border-4 border-black transform -rotate-6"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center transform rotate-6">
                  <span className="font-comic-display text-8xl text-white text-3d drop-shadow-xl block mb-2">WHAM!</span>
                  <span className="font-comic-body font-bold bg-white border-2 border-black px-2 text-xl transform -rotate-3">DYNAMIC LAYOUTS!</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Colors Section */}
        <SectionTitle title="The Color System" subtitle="Vibrant CMYK Palettes" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-white p-8 border-4 border-black box-shadow-hard relative">
          <div className="absolute -top-4 -right-4 bg-[#1E90FF] text-white font-comic-display px-4 py-1 border-4 border-black rotate-3">
             PIGMENT POWER!
          </div>
          <ColorSwatch color="#E23636" name="Comic Red" hex="#E23636" />
          <ColorSwatch color="#1E90FF" name="Hero Blue" hex="#1E90FF" />
          <ColorSwatch color="#FFD700" name="Warning" hex="#FFD700" />
          <ColorSwatch color="#FFFEF0" name="Paper" hex="#FFFEF0" />
        </div>

        {/* Panel Layouts Section */}
        <SectionTitle title="Panel Dynamics" subtitle="Breaking the Fourth Wall" />

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[800px] mb-20">

          {/* Panel 1: Tall */}
          <Panel className="md:row-span-2" title="The Origin" rotate={-1}>
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <div className="w-full h-48 bg-[#E23636] border-b-4 border-black mb-4 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-halftone-color opacity-30"></div>
                   <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] group-hover:scale-125 transition-transform duration-300" />
                </div>
                <p className="font-comic-body text-xl font-bold leading-snug">
                  "It started with a single line of code... A line that would change the web FOREVER!"
                </p>
              </div>
              <div className="speech-bubble p-4 mt-4 w-3/4 self-end transform rotate-2">
                <p className="font-comic-body font-bold text-sm text-center">I can feel the power of the grid!</p>
              </div>
            </div>
          </Panel>

          {/* Panel 2: Wide */}
          <Panel className="md:col-span-2 bg-speed-lines" variant="white" rotate={1} title="Action Lines">
             <div className="p-8 flex items-center justify-between h-full relative overflow-hidden">
                <div className="relative z-10 w-2/3">
                  <h3 className="font-comic-display text-5xl uppercase mb-2 text-[#1E90FF] text-3d">Speed & Motion!</h3>
                  <p className="font-comic-body font-bold text-lg bg-white inline-block px-2 border-2 border-black">
                    Use diagonals and irregular shapes to guide the user's eye across the screen at breakneck speeds.
                  </p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black transform skew-x-[-20deg] translate-x-10 border-l-4 border-white"></div>
                <ArrowRight className="w-32 h-32 text-white absolute right-10 z-20 animate-pulse" />
             </div>
          </Panel>

          {/* Panel 3: Standard */}
          <Panel variant="yellow" rotate={2} title="Emphasis">
             <div className="p-6 text-center flex flex-col items-center justify-center h-full">
               <Star className="w-20 h-20 mb-4 fill-current text-white stroke-black stroke-[3] hover-shake" />
               <h4 className="font-comic-display text-3xl mb-2">Highlight Key Elements!</h4>
               <p className="font-comic-body font-bold text-sm">Use bold yellow to scream for attention.</p>
             </div>
          </Panel>

          {/* Panel 4: Dark */}
          <Panel variant="dark" rotate={-2} title="The Villain">
             <div className="p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
                <h4 className="font-comic-display text-5xl text-[#E23636] mb-4 text-3d z-10">DARK MODE?</h4>
                <p className="font-comic-body text-gray-300 text-center z-10">
                  Even shadows have a place in the narrative. Use heavy blacks for contrast.
                </p>
                <div className="mt-6">
                  <ComicButton variant="primary">DEFEAT MODE</ComicButton>
                </div>
             </div>
          </Panel>
        </div>

        {/* UI Elements Section */}
        <SectionTitle title="Heroic Components" subtitle="Tools of the Trade" />

        <div className="grid md:grid-cols-2 gap-12">

           {/* Form Elements */}
           <div className="bg-white border-4 border-black p-8 box-shadow-hard transform rotate-1">
              <h3 className="font-comic-display text-3xl mb-6 border-b-4 border-black inline-block">Transmission Log</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-comic-display text-xl block mb-1">Codename</label>
                  <input type="text" className="w-full border-4 border-black p-3 font-comic-body font-bold text-xl bg-[#FFFEF0] focus:bg-[#FFF] focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0_0_#000] transition-all" placeholder="Enter Hero Name..." />
                </div>
                <div>
                  <label className="font-comic-display text-xl block mb-1">Mission Report</label>
                  <textarea className="w-full border-4 border-black p-3 font-comic-body font-bold text-xl bg-[#FFFEF0] h-32 resize-none focus:bg-[#FFF] focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0_0_#000] transition-all" placeholder="Describe the incident..."></textarea>
                </div>
                <div className="flex justify-end">
                   <ComicButton variant="secondary">SEND MESSAGE</ComicButton>
                </div>
              </form>
           </div>

           {/* Cards & Lists */}
           <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-[#E23636] p-1 border-4 border-black box-shadow-hard transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white border-2 border-black p-4 flex items-center gap-4">
                  <div className="bg-black text-white p-3 rounded-full border-2 border-black">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-comic-display text-2xl">Invulnerability</h4>
                    <p className="font-comic-body font-bold text-gray-600">Takes 0 damage from bad UX.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFD700] p-1 border-4 border-black box-shadow-hard transform rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white border-2 border-black p-4 flex items-center gap-4">
                  <div className="bg-black text-white p-3 rounded-full border-2 border-black">
                    <BoomBox className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-comic-display text-2xl">Sonic Blast</h4>
                    <p className="font-comic-body font-bold text-gray-600">Loud visual feedback.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1E90FF] p-1 border-4 border-black box-shadow-hard transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white border-2 border-black p-4 flex items-center gap-4">
                  <div className="bg-black text-white p-3 rounded-full border-2 border-black">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-comic-display text-2xl">Fan Favorite</h4>
                    <p className="font-comic-body font-bold text-gray-600">Loved by millions.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>

      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-20 bg-black border-t-8 border-[#FFD700] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-comic-display text-5xl text-white mb-6">TO BE CONTINUED...</h2>

          <div className="flex justify-center gap-6 mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#FFD700] hover:scale-110 transition-transform cursor-pointer">
              <MessageCircle className="w-6 h-6 text-black" />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#FFD700] hover:scale-110 transition-transform cursor-pointer">
              <Star className="w-6 h-6 text-black" />
            </div>
          </div>

          <p className="font-comic-body text-gray-400">
            © 2024 Comic UI Kit. Crafted with <Heart className="inline w-4 h-4 text-[#E23636]" /> in the Golden Age.
          </p>
        </div>
      </footer>
    </div>
  );
}
