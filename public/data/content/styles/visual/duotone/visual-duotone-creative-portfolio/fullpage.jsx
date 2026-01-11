import React, { useState, useEffect } from 'react';
import { Zap, Palette, Code, Sparkles, ArrowRight, Menu, X } from 'lucide-react';

export default function DuotoneCreative() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const portfolioItems = [
    { title: "Neon Cyber", category: "Web Design", image: "/api/placeholder/600/400" },
    { title: "Acid Reflux", category: "Branding", image: "/api/placeholder/600/400" },
    { title: "Void Walker", category: "Development", image: "/api/placeholder/600/400" },
    { title: "Lime Echo", category: "Art Direction", image: "/api/placeholder/600/400" }
  ];

  const services = [
    { icon: <Palette className="w-8 h-8" />, title: "Digital Branding", desc: "Identity systems that break the noise." },
    { icon: <Code className="w-8 h-8" />, title: "Creative Dev", desc: "Performance-first web experiences." },
    { icon: <Zap className="w-8 h-8" />, title: "Motion Design", desc: "Adding life to static interfaces." }
  ];

  return (
    <div className="min-h-screen bg-[#10002b] text-[#ccff00] font-sans selection:bg-[#ccff00] selection:text-[#10002b] relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#10002b]/90 backdrop-blur-md py-4' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span>DUOTONE</span>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            {['Work', 'Services', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors uppercase tracking-widest text-sm">
                {item}
              </a>
            ))}
          </div>

          <button onClick={toggleMenu} className="md:hidden p-2 z-50">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#10002b] z-30 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-4xl font-bold uppercase tracking-tighter hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter uppercase">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-white">Alchemy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
              We fuse code and chaos to create memorable digital experiences for bold brands.
            </p>
            <button className="group flex items-center gap-4 text-lg font-bold uppercase tracking-widest hover:gap-6 transition-all border border-[#ccff00] px-8 py-4 hover:bg-[#ccff00] hover:text-[#10002b]">
              Start Project <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-[#ccff00] blur-[100px] opacity-20 animate-pulse"></div>
            <div className="relative border-2 border-[#ccff00] p-8 rotate-3 hover:rotate-0 transition-transform duration-500 bg-[#10002b]">
              <div className="aspect-square border border-[#ccff00]/30 flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full bg-[#ccff00]/10 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors duration-500">
                  <Zap className="w-32 h-32 group-hover:text-[#10002b] transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 border-t border-[#ccff00]/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 border border-[#ccff00]/20 hover:bg-[#ccff00] hover:text-[#10002b] transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="opacity-80 group-hover:opacity-100">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Selected<br/>Works</h2>
            <div className="hidden md:block w-32 h-1 bg-[#ccff00]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className={`group relative overflow-hidden border border-[#ccff00]/20 ${idx % 2 === 1 ? 'md:mt-16' : ''}`}>
                <div className="aspect-[4/3] bg-gray-900 relative">
                  <div className="absolute inset-0 bg-[#ccff00] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />

                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#10002b] to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-2 block">{item.category}</span>
                    <h3 className="text-3xl font-bold uppercase italic">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ccff00] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Let's Make<br />Some Noise
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to disrupt the industry? We are currently accepting new projects for Q4.
          </p>
          <button className="text-xl md:text-2xl font-bold uppercase tracking-widest border-b-2 border-[#ccff00] hover:bg-[#ccff00] hover:text-[#10002b] transition-all pb-2 px-4">
            hello@duotone.agency
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#ccff00]/20 bg-[#0a001a]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>© 2024 DUOTONE Creative</span>
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-white hover:opacity-100 transition-all">Insta</a>
            <a href="#" className="hover:text-white hover:opacity-100 transition-all">Twitter</a>
            <a href="#" className="hover:text-white hover:opacity-100 transition-all">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
