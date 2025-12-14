import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Layout,
  Smartphone,
  Code,
  Users,
  Globe,
  Award
} from 'lucide-react';

export default function MonochromePortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Agency', href: '#about' },
    { name: 'Insights', href: '#insights' },
  ];

  const services = [
    {
      title: 'Digital Product Design',
      description: 'End-to-end product design from discovery to final delivery, focusing on user-centric interfaces.',
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: 'Brand Identity',
      description: 'Crafting distinct visual systems that communicate core values across all touchpoints.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Development',
      description: 'Robust frontend and backend engineering using modern scalable technologies.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Mobile Experience',
      description: 'Native and cross-platform mobile applications designed for engagement and retention.',
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'SaaS Platform',
      image: 'bg-gray-200'
    },
    {
      title: 'Modern Architecture',
      category: 'Web Design',
      image: 'bg-gray-300'
    },
    {
      title: 'E-Commerce App',
      category: 'Mobile Application',
      image: 'bg-gray-400'
    },
    {
      title: 'Corporate Identity',
      category: 'Branding',
      image: 'bg-gray-500'
    },
    {
      title: 'Data Visualization',
      category: 'Analytics',
      image: 'bg-gray-600'
    },
    {
      title: 'Design System',
      category: 'UI/UX Kit',
      image: 'bg-gray-700'
    }
  ];

  const team = [
    { name: 'Alex Morgan', role: 'Design Director' },
    { name: 'Sarah Chen', role: 'Lead Developer' },
    { name: 'James Wilson', role: 'Product Strategist' },
    { name: 'Elena Rodriguez', role: 'UX Researcher' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
        `}
      </style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold tracking-tighter z-50 transition-colors ${mobileMenuOpen ? 'text-black' : (isScrolled ? 'text-black' : 'text-white')}`}>
            M/CHROME.
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-8 ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-black transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className={`px-5 py-2 text-sm font-medium transition-colors ${
              isScrolled
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-white text-black hover:bg-gray-100'
            }`}>
              Start a Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-black w-6 h-6" />
            ) : (
              <Menu className={`${isScrolled ? 'text-black' : 'text-white'} w-6 h-6`} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-light text-gray-900 hover:text-gray-500"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 px-8 py-3 bg-black text-white text-lg font-medium">
              Start a Project
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800 to-transparent opacity-20 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-gray-800 to-transparent opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left md:flex md:items-end md:justify-between w-full pb-20">
          <div className="md:w-2/3">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-8">
              Digital <span className="text-gray-500">Clarity</span> <br />
              Through Design.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed mb-10">
              We are a strategic design agency crafting minimalist digital experiences
              for forward-thinking brands. Less noise, more signal.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors">
                Our Capabilities
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-8 text-gray-500 text-sm font-mono border-l border-gray-800 pl-8 mb-2">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4" />
              <span>Based in San Francisco</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4" />
              <span>Working Globally</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4" />
              <span>Award Winning Studio</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50"></div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Selected Works</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h3>
            </div>
            <a href="#" className="hidden md:flex items-center text-sm font-semibold hover:text-gray-500 transition-colors gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`aspect-[4/3] ${project.image} mb-6 overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4 group-hover:border-gray-300 transition-colors">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h4>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <button className="px-6 py-3 border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Design Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              We don't just design pretty interfaces. We build robust design systems and
              digital products that solve real business problems and scale with your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-300 group">
                <div className="mb-6 p-3 bg-gray-50 inline-block rounded-none group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-wide border-b border-transparent group-hover:border-black transition-all pb-0.5">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Team Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">The Agency</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Design is intelligence made visible.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, M/CHROME is a collective of specialized designers and engineers.
              We believe in the power of subtraction—removing the unnecessary to reveal the essential.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <span className="block text-4xl font-bold text-black mb-1">50+</span>
                <span className="text-sm text-gray-500">Clients Served</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-black mb-1">12</span>
                <span className="text-sm text-gray-500">Design Awards</span>
              </div>
            </div>
            <a href="#" className="text-sm font-bold underline decoration-gray-300 underline-offset-4 hover:decoration-black transition-all">
              Read Our Story
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-300 overflow-hidden">
                    {/* Placeholder for avatar */}
                    <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-100"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-50 border-l-2 border-black">
              <blockquote className="text-lg font-medium text-gray-800 italic mb-4">
                "M/CHROME transformed our digital presence. Their attention to detail and minimalist approach gave us the competitive edge we needed."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-500 not-italic">
                — Marcus Thorne, CEO at TechVentures
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to elevate your brand?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            We are currently accepting new projects for Q4 2025. Let's build something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold hover:bg-gray-100 transition-colors">
              Start a Project
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="text-2xl font-bold tracking-tighter text-white block mb-6">
                M/CHROME.
              </a>
              <p className="text-gray-500 text-sm leading-relaxed">
                A digital design agency crafting minimal, functional, and timeless experiences for the modern web.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Sitemap</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agency</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Social</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-4">Design insights weekly.</p>
              <div className="flex border-b border-gray-700 pb-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 text-sm"
                />
                <button className="text-gray-400 hover:text-white uppercase text-xs font-bold">Join</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2025 M/Chrome Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
