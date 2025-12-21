import React, { useState, useEffect } from 'react';
import { ArrowRight, Armchair, Disc, Star, LayoutGrid, Clock, Heart, Menu, X } from 'lucide-react';

// Custom SVG Components for MCM flair

const Starburst = ({ className, color = "#d97642" }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ overflow: 'visible' }}>
    <path
      d="M50 0 L55 35 L90 20 L65 50 L90 80 L55 65 L50 100 L45 65 L10 80 L35 50 L10 20 L45 35 Z"
      fill={color}
    />
  </svg>
);

const KidneyShape = ({ className, color = "#d4a574" }) => (
  <svg viewBox="0 0 200 120" className={className} preserveAspectRatio="none">
    <path
      d="M40,10 C-10,30 -10,90 40,110 C90,130 140,80 180,90 C210,100 210,40 160,20 C110,0 90,-10 40,10 Z"
      fill={color}
    />
  </svg>
);

const Boomerang = ({ className, color = "#4a7c59" }) => (
  <svg viewBox="0 0 100 50" className={className}>
    <path
      d="M5,45 Q40,40 80,5 Q60,35 95,45 Q50,45 5,45 Z"
      fill={color}
    />
  </svg>
);

const AtomicOrbit = ({ className, color = "#2c2416" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="1.5">
    <ellipse cx="50" cy="50" rx="45" ry="12" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="12" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="12" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="4" fill={color} stroke="none" />
  </svg>
);

// Main Application Component

export default function AtomicHearth() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // MCM Color Palette Map
  const colors = {
    bg: '#f5e6d3', // Warm beige
    white: '#ffffff',
    text: '#2c2416', // Deep brown
    accentOrange: '#d97642',
    accentMustard: '#d4a574',
    accentOlive: '#4a7c59',
    woodWalnut: '#6b5d4f',
    woodTeak: '#8b7355',
    secondaryBlue: '#7d9ba8',
    secondaryPink: '#e57a77',
  };

  const NavItem = ({ section, label }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setMobileMenuOpen(false);
      }}
      className={`uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
        activeSection === section
          ? `text-[${colors.accentOrange}] border-b-2 border-[${colors.accentOrange}]`
          : `text-[${colors.text}] hover:text-[${colors.accentOlive}]`
      }`}
      style={{ color: activeSection === section ? colors.accentOrange : colors.text }}
    >
      {label}
    </button>
  );

  return (
    <div
      className="min-h-screen w-full font-sans transition-colors duration-500 overflow-x-hidden selection:bg-[#d97642] selection:text-white"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-[#f5e6d3]/90 backdrop-blur-sm border-b border-[#2c2416]/10">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveSection('home')}>
          <div className="relative w-8 h-8">
            <Starburst className="w-full h-full animate-spin-slow" color={colors.accentOrange} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tighter uppercase" style={{ color: colors.woodWalnut }}>
            Atomic<span style={{ color: colors.accentOrange }}>Hearth</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <NavItem section="home" label="Home" />
          <NavItem section="elements" label="Style Guide" />
          <NavItem section="collection" label="Collection" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f5e6d3] border-b border-[#2c2416]/20 p-6 flex flex-col gap-4 shadow-lg md:hidden">
            <NavItem section="home" label="Home" />
            <NavItem section="elements" label="Style Guide" />
            <NavItem section="collection" label="Collection" />
          </div>
        )}
      </header>

      {/* --- Main Content Switcher --- */}
      <main className="w-full">

        {/* --- HERO SECTION (Home) --- */}
        {activeSection === 'home' && (
          <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
            {/* Background Abstract Shapes */}
            <div className="absolute top-10 right-[-100px] w-[500px] h-[300px] opacity-80 z-0">
               <KidneyShape color={colors.secondaryBlue} />
            </div>
            <div className="absolute bottom-0 left-[-50px] w-[400px] h-[400px] opacity-20 z-0 rotate-12">
               <AtomicOrbit color={colors.woodTeak} />
            </div>
            <div className="absolute top-1/4 left-10 w-24 h-24 opacity-60 z-0 animate-pulse">
               <Starburst color={colors.accentMustard} />
            </div>

            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 border-2 border-[#2c2416] rounded-full uppercase text-xs font-bold tracking-[0.2em]">
                  Est. 1958
                </div>
                <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
                  Form <br/>
                  <span className="italic font-light text-[#d97642]">Meets</span> <br/>
                  Function
                </h2>
                <p className="text-xl md:text-2xl max-w-md leading-relaxed font-medium opacity-80" style={{ color: colors.woodWalnut }}>
                  Reimagining the optimism of the mid-century for the modern digital era.
                </p>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setActiveSection('collection')}
                    className="group relative px-8 py-4 bg-[#2c2416] text-[#f5e6d3] font-bold tracking-wider hover:bg-[#d97642] transition-colors duration-300 shadow-[-5px_5px_0px_0px_#8b7355] hover:shadow-[-2px_2px_0px_0px_#8b7355] hover:translate-x-[-3px] hover:translate-y-[3px]"
                  >
                    EXPLORE CATALOG
                  </button>
                  <button
                    onClick={() => setActiveSection('elements')}
                    className="flex items-center gap-2 px-8 py-4 border-2 border-[#2c2416] font-bold tracking-wider hover:bg-[#2c2416] hover:text-[#f5e6d3] transition-colors duration-300"
                  >
                    VIEW STYLE GUIDE <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Hero Image/Graphic Construction */}
              <div className="relative h-[500px] w-full hidden md:block">
                {/* A composed graphic approximating a poster */}
                <div className="absolute inset-0 bg-[#e57a77] rounded-tl-[100px] rounded-br-[100px] transform rotate-3 shadow-lg" />
                <div className="absolute inset-4 bg-[#fff] rounded-tl-[90px] rounded-br-[90px] overflow-hidden flex flex-col p-8 border-4 border-[#2c2416]">
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="w-48 h-48 bg-[#d97642] rounded-full mix-blend-multiply opacity-80 absolute top-10 left-10" />
                    <div className="w-48 h-48 bg-[#7d9ba8] rounded-full mix-blend-multiply opacity-80 absolute bottom-10 right-10" />
                    <Armchair size={120} strokeWidth={1} className="relative z-10 text-[#2c2416]" />
                  </div>
                  <div className="mt-auto border-t-2 border-[#2c2416] pt-4 flex justify-between uppercase text-xs font-bold tracking-widest">
                    <span>The Chair No. 42</span>
                    <span>Walnut / Tweed</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- STYLE GUIDE SECTION (Visual Elements) --- */}
        {activeSection === 'elements' && (
          <section className="w-full max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16 border-l-4 border-[#d97642] pl-6">
              <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">Visual Identity System</h2>
              <p className="text-lg opacity-70">A breakdown of the atomic-age aesthetic components used in this interface.</p>
            </div>

            {/* Color Palette */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
                <Disc className="text-[#d97642]" /> 01. Color Palette
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[
                  { name: "Warm Beige", hex: colors.bg, text: colors.text },
                  { name: "Deep Brown", hex: colors.text, text: "#fff" },
                  { name: "Atomic Orange", hex: colors.accentOrange, text: "#fff" },
                  { name: "Mustard", hex: colors.accentMustard, text: colors.text },
                  { name: "Olive Green", hex: colors.accentOlive, text: "#fff" },
                  { name: "Walnut", hex: colors.woodWalnut, text: "#fff" },
                  { name: "Teak", hex: colors.woodTeak, text: "#fff" },
                  { name: "Retro Blue", hex: colors.secondaryBlue, text: "#fff" },
                  { name: "Coral", hex: colors.secondaryPink, text: colors.text },
                  { name: "Soft White", hex: colors.white, text: colors.text },
                ].map((c) => (
                  <div key={c.name} className="group relative">
                    <div
                      className="h-32 rounded-3xl shadow-md transform transition-transform group-hover:-translate-y-2 border border-[#2c2416]/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="mt-3">
                      <p className="font-bold text-sm uppercase tracking-wider">{c.name}</p>
                      <p className="text-xs opacity-60 font-mono">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Shapes */}
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
                  <span className="text-3xl font-serif italic text-[#4a7c59]">Aa</span> 02. Typography
                </h3>
                <div className="bg-white p-8 rounded-tr-[80px] rounded-bl-[40px] shadow-lg border-2 border-[#f0f0f0]">
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs uppercase text-[#d97642] font-bold tracking-widest">Headline 1</span>
                      <h1 className="text-5xl font-bold leading-none mt-2">Atomic Living</h1>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-[#4a7c59] font-bold tracking-widest">Headline 2</span>
                      <h2 className="text-3xl font-bold mt-1">Simplicity & Function</h2>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-[#d4a574] font-bold tracking-widest">Body Text</span>
                      <p className="mt-2 text-lg leading-relaxed opacity-80">
                        The core of Mid-Century Modern style is the balance of simplicity, functionality, and organic aesthetics.
                        Clean lines meet warm textures.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-[#7d9ba8] font-bold tracking-widest">Label / Button</span>
                      <div className="mt-2 inline-block px-4 py-2 bg-[#2c2416] text-white uppercase text-sm font-bold tracking-widest">
                        Click Me
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
                  <LayoutGrid className="text-[#d97642]" /> 03. Shape & Pattern
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#fff] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-[#2c2416]/10 aspect-square">
                    <Starburst className="w-20 h-20" color={colors.accentOrange} />
                    <span className="text-xs uppercase font-bold tracking-widest">Starburst</span>
                  </div>
                  <div className="bg-[#fff] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-[#2c2416]/10 aspect-square">
                    <KidneyShape className="w-32 h-20" color={colors.secondaryBlue} />
                    <span className="text-xs uppercase font-bold tracking-widest">Kidney/Organic</span>
                  </div>
                  <div className="bg-[#fff] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-[#2c2416]/10 aspect-square">
                    <AtomicOrbit className="w-24 h-24" color={colors.woodWalnut} />
                    <span className="text-xs uppercase font-bold tracking-widest">Atomic Orbit</span>
                  </div>
                   <div className="bg-[#fff] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-[#2c2416]/10 aspect-square">
                    <div className="flex gap-2 items-end">
                      <div className="w-2 h-16 bg-[#2c2416] rounded-full transform -rotate-12"></div>
                      <div className="w-2 h-16 bg-[#2c2416] rounded-full transform rotate-12"></div>
                    </div>
                    <span className="text-xs uppercase font-bold tracking-widest">Tapered Legs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Principles */}
             <div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
                <LayoutGrid className="text-[#d97642]" /> 04. Modular Grid
              </h3>
              <div className="w-full h-64 border-4 border-[#2c2416] p-2 bg-white flex gap-2">
                 <div className="flex-[2] bg-[#f5e6d3] h-full flex items-center justify-center text-[#2c2416]/30 font-bold uppercase">60% Organic</div>
                 <div className="flex-1 flex flex-col gap-2 h-full">
                    <div className="flex-1 bg-[#d97642] flex items-center justify-center text-white/50 font-bold uppercase">Accent</div>
                    <div className="flex-[2] bg-[#4a7c59] flex items-center justify-center text-white/50 font-bold uppercase">Earth</div>
                 </div>
              </div>
            </div>

          </section>
        )}

        {/* --- COLLECTION SECTION (UI Application) --- */}
        {activeSection === 'collection' && (
          <section className="w-full max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">The Collection</h2>
              <div className="w-24 h-2 bg-[#d97642] mx-auto rounded-full mb-6"></div>
              <p className="text-xl max-w-2xl mx-auto opacity-80">
                Curated pieces that define the era. Notice the use of card layouts, negative space, and typographic hierarchy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "The Eames Lounge", price: "$4,200", tag: "Iconic", color: colors.woodWalnut, icon: <Armchair size={48} /> },
                { title: "Starburst Clock", price: "$450", tag: "Decor", color: colors.accentMustard, icon: <Clock size={48} /> },
                { title: "Noguchi Table", price: "$1,200", tag: "Organic", color: colors.woodTeak, icon: <Disc size={48} /> },
                { title: "Tulip Chair", price: "$850", tag: "Modern", color: colors.accentOrange, icon: <Heart size={48} /> },
                { title: "Sputnik Lamp", price: "$1,100", tag: "Lighting", color: colors.secondaryBlue, icon: <Star size={48} /> },
                { title: "Credenza No. 5", price: "$3,400", tag: "Storage", color: colors.accentOlive, icon: <LayoutGrid size={48} /> },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-tl-[40px] rounded-br-[40px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#2c2416]">
                  <div className="relative h-48 bg-[#f9f4ef] rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-[#2c2416] text-white text-xs font-bold uppercase tracking-widest rounded-full">{item.tag}</span>
                    </div>
                    {/* Abstract product representation */}
                    <div className="relative z-0 opacity-20 transform scale-150 group-hover:scale-110 transition-transform duration-700">
                      <Starburst color={item.color} className="w-64 h-64" />
                    </div>
                    <div className="relative z-10 text-[#2c2416]">
                      {item.icon}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <div className="flex justify-between items-center border-t border-[#2c2416]/10 pt-4 mt-4">
                      <span className="text-xl font-medium" style={{ color: item.color }}>{item.price}</span>
                      <button className="w-10 h-10 rounded-full border border-[#2c2416] flex items-center justify-center hover:bg-[#2c2416] hover:text-white transition-colors">
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Block */}
            <div className="mt-24 relative overflow-hidden rounded-3xl bg-[#4a7c59] text-[#f5e6d3] p-12 md:p-20 text-center">
              <div className="absolute top-[-50px] left-[-50px] opacity-20">
                <Starburst className="w-64 h-64" color="#fff" />
              </div>
              <div className="absolute bottom-[-50px] right-[-50px] opacity-20">
                <KidneyShape className="w-80 h-40" color="#fff" />
              </div>

              <div className="relative z-10 max-w-xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold">Join the Modernist Club</h2>
                <p className="text-lg opacity-90">Get the latest design catalog delivered to your atomic doorstep.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="flex-1 px-6 py-4 bg-[#f5e6d3] text-[#2c2416] font-bold placeholder-[#2c2416]/50 focus:outline-none focus:ring-4 focus:ring-[#d97642]"
                  />
                  <button className="px-8 py-4 bg-[#d97642] text-white font-bold uppercase tracking-widest hover:bg-[#c56636] transition-colors shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-[#2c2416] text-[#f5e6d3] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-[#f5e6d3]/10 pb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <Starburst className="w-8 h-8" color={colors.accentOrange} />
               <h2 className="text-2xl font-bold tracking-tighter uppercase">Atomic<span className="text-[#d97642]">Hearth</span></h2>
             </div>
             <p className="opacity-60 leading-relaxed text-sm">
               Designing a better tomorrow, today. Est. 1958.
             </p>
          </div>

          <div>
            <h4 className="text-[#d97642] uppercase font-bold tracking-widest mb-6 text-sm">Explore</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="hover:text-[#d97642] cursor-pointer">Living Room</li>
              <li className="hover:text-[#d97642] cursor-pointer">Kitchen & Dining</li>
              <li className="hover:text-[#d97642] cursor-pointer">Office</li>
              <li className="hover:text-[#d97642] cursor-pointer">Outdoor</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4a7c59] uppercase font-bold tracking-widest mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="hover:text-[#4a7c59] cursor-pointer">Our Story</li>
              <li className="hover:text-[#4a7c59] cursor-pointer">Designers</li>
              <li className="hover:text-[#4a7c59] cursor-pointer">Sustainability</li>
              <li className="hover:text-[#4a7c59] cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
             <h4 className="text-[#d4a574] uppercase font-bold tracking-widest mb-6 text-sm">Visit Us</h4>
             <p className="text-sm opacity-80 mb-2">1960 Orbit Way</p>
             <p className="text-sm opacity-80 mb-2">Palm Springs, CA 92262</p>
             <p className="text-sm opacity-80 mt-4 text-[#d4a574]">hello@atomichearth.com</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-bold uppercase tracking-widest">
          <p>© 2024 Atomic Hearth Interiors.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
