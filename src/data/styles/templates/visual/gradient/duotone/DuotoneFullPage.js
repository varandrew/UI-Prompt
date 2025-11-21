// Duotone Full Page Design
// 創意设計工作室网站 - Creative Design Studio Website
// 配色方案：黑色 (#000000) + 青色 (#00D9FF / Cyan-400)

export const duotoneFullPageHTML = `
<!-- Duotone Creative Studio Website -->
<div class="min-h-screen bg-black text-white overflow-x-hidden">

  <!-- 1. Top Navigation Bar - 頂部导航欄 -->
  <nav class="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-400/20 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-180 group-hover:scale-110">
            <svg class="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <span class="text-2xl font-black text-white tracking-tight">DUOTONE</span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-8">
          <a href="javascript:void(0)" class="text-sm font-semibold text-white hover:text-cyan-400 transition-colors relative group">
            Work
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="javascript:void(0)" class="text-sm font-semibold text-white hover:text-cyan-400 transition-colors relative group">
            Services
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="javascript:void(0)" class="text-sm font-semibold text-white hover:text-cyan-400 transition-colors relative group">
            About
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="javascript:void(0)" class="text-sm font-semibold text-white hover:text-cyan-400 transition-colors relative group">
            Contact
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <!-- CTA Button -->
        <button class="duotone-btn-primary px-6 py-3 bg-cyan-400 text-black font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
          Start Project
        </button>
      </div>
    </div>
  </nav>

  <!-- 2. Hero Section - 全屏英雄区 -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-cyan-400/5"></div>

    <!-- Glow Effect -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-6xl md:text-8xl font-black mb-6 leading-tight">
        <span class="bg-gradient-to-r from-white via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
          Creative Design
        </span>
        <br/>
        <span class="text-white">Studio</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        We craft stunning digital experiences with the power of duotone design.
        <span class="text-cyan-400 font-semibold">Bold. Minimal. Impactful.</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button class="px-8 py-4 bg-cyan-400 text-black font-black text-lg rounded-lg hover:shadow-2xl hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300">
          View Our Work
        </button>
        <button class="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
          Get Started
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="mt-20 flex flex-col items-center animate-bounce">
        <span class="text-sm text-gray-400 mb-2">Scroll Down</span>
        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>

  <!-- 3. Stats Bar - 統計数据條 -->
  <section class="py-16 bg-gradient-to-r from-black via-cyan-950/20 to-black border-y border-cyan-400/20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Stat 1 -->
        <div class="text-center transform hover:scale-110 transition-all duration-300">
          <div class="text-5xl font-black text-cyan-400 mb-2">150+</div>
          <div class="text-sm text-gray-400 font-semibold uppercase tracking-wider">Projects Completed</div>
        </div>

        <!-- Stat 2 -->
        <div class="text-center transform hover:scale-110 transition-all duration-300">
          <div class="text-5xl font-black text-cyan-400 mb-2">50+</div>
          <div class="text-sm text-gray-400 font-semibold uppercase tracking-wider">Happy Clients</div>
        </div>

        <!-- Stat 3 -->
        <div class="text-center transform hover:scale-110 transition-all duration-300">
          <div class="text-5xl font-black text-cyan-400 mb-2">15+</div>
          <div class="text-sm text-gray-400 font-semibold uppercase tracking-wider">Team Members</div>
        </div>

        <!-- Stat 4 -->
        <div class="text-center transform hover:scale-110 transition-all duration-300">
          <div class="text-5xl font-black text-cyan-400 mb-2">8+</div>
          <div class="text-sm text-gray-400 font-semibold uppercase tracking-wider">Years Experience</div>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. Services Grid - 服务卡片网格 -->
  <section class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">Our Services</h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">We offer comprehensive design solutions tailored to your needs</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Service 1: Branding -->
        <div class="duotone-card bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
          <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">Branding</h3>
          <p class="text-gray-400">Create memorable brand identities that stand out in the digital landscape</p>
        </div>

        <!-- Service 2: Web Design -->
        <div class="duotone-card bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
          <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">Web Design</h3>
          <p class="text-gray-400">Beautiful, responsive websites that convert visitors into customers</p>
        </div>

        <!-- Service 3: UI/UX -->
        <div class="duotone-card bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
          <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">UI/UX Design</h3>
          <p class="text-gray-400">Intuitive interfaces that delight users and drive engagement</p>
        </div>

        <!-- Service 4: Mobile Apps -->
        <div class="duotone-card bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
          <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">Mobile Apps</h3>
          <p class="text-gray-400">Native and cross-platform apps that users love to interact with</p>
        </div>

        <!-- Service 5: Illustration -->
        <div class="duotone-card bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
          <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">Illustration</h3>
          <p class="text-gray-400">Custom illustrations that bring your brand story to life</p>
        </div>

        <!-- Service 6: Motion Design -->
        <div class="duotone-card bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
          <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">Motion Design</h3>
          <p class="text-gray-400">Captivating animations that enhance user experience</p>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. Portfolio Showcase - 作品集展示 (Bento Grid) -->
  <section class="py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">Featured Work</h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">Explore our latest projects showcasing duotone excellence</p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Large Project 1 -->
        <div class="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer">
          <div class="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black/40"></div>
            <svg class="w-32 h-32 text-cyan-400/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z"/>
            </svg>
            <!-- Overlay -->
            <div class="duotone-overlay absolute inset-0 bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 class="text-3xl font-black text-black mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">E-Commerce Platform</h3>
              <p class="text-black font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Web Design • Branding</p>
              <button class="px-6 py-3 bg-black text-cyan-400 font-bold rounded-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-150">View Project</button>
            </div>
          </div>
        </div>

        <!-- Small Project 2 -->
        <div class="group relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer">
          <div class="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black/40"></div>
            <svg class="w-24 h-24 text-cyan-400/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
            </svg>
            <div class="duotone-overlay absolute inset-0 bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 class="text-xl font-black text-black mb-1">Mobile Banking</h3>
              <p class="text-sm text-black font-semibold mb-3">App Design</p>
              <button class="px-4 py-2 bg-black text-cyan-400 font-bold rounded-lg text-sm">View</button>
            </div>
          </div>
        </div>

        <!-- Small Project 3 -->
        <div class="group relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer">
          <div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black/40"></div>
            <svg class="w-24 h-24 text-cyan-400/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <div class="duotone-overlay absolute inset-0 bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 class="text-xl font-black text-black mb-1">Brand Identity</h3>
              <p class="text-sm text-black font-semibold mb-3">Branding</p>
              <button class="px-4 py-2 bg-black text-cyan-400 font-bold rounded-lg text-sm">View</button>
            </div>
          </div>
        </div>

        <!-- Medium Project 4 -->
        <div class="md:col-span-2 group relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer">
          <div class="aspect-[21/9] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black/40"></div>
            <svg class="w-32 h-32 text-cyan-400/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <div class="duotone-overlay absolute inset-0 bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 class="text-2xl font-black text-black mb-2">Motion Graphics Reel</h3>
              <p class="text-black font-semibold mb-4">Animation • Motion Design</p>
              <button class="px-6 py-3 bg-black text-cyan-400 font-bold rounded-lg">View Project</button>
            </div>
          </div>
        </div>

        <!-- Small Project 5 -->
        <div class="group relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer">
          <div class="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black/40"></div>
            <svg class="w-24 h-24 text-cyan-400/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            <div class="duotone-overlay absolute inset-0 bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 class="text-xl font-black text-black mb-1">Illustration Set</h3>
              <p class="text-sm text-black font-semibold mb-3">Illustration</p>
              <button class="px-4 py-2 bg-black text-cyan-400 font-bold rounded-lg text-sm">View</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 6. Team Section - 团隊成員 -->
  <section class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">Our Team</h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">Meet the creative minds behind our success</p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Team Member 1 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-full border-4 border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <svg class="w-24 h-24 text-cyan-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-black text-white mb-1">Sarah Chen</h3>
          <p class="text-cyan-400 font-semibold mb-3">Creative Director</p>
          <div class="flex gap-3 justify-center">
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">in</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">tw</span>
            </a>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border-4 border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <svg class="w-24 h-24 text-cyan-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-black text-white mb-1">Marcus Johnson</h3>
          <p class="text-cyan-400 font-semibold mb-3">Lead Designer</p>
          <div class="flex gap-3 justify-center">
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">in</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">tw</span>
            </a>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <svg class="w-24 h-24 text-cyan-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-black text-white mb-1">Emma Rodriguez</h3>
          <p class="text-cyan-400 font-semibold mb-3">UI/UX Designer</p>
          <div class="flex gap-3 justify-center">
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">in</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">tw</span>
            </a>
          </div>
        </div>

        <!-- Team Member 4 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border-4 border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <svg class="w-24 h-24 text-cyan-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-black text-white mb-1">David Park</h3>
          <p class="text-cyan-400 font-semibold mb-3">Motion Designer</p>
          <div class="flex gap-3 justify-center">
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">in</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-cyan-400">
              <span class="text-sm font-bold">tw</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 7. Testimonials - 客戶評價輪播 -->
  <section class="py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">Client Testimonials</h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">Hear what our clients say about working with us</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Testimonial 1 -->
        <div class="bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
          <div class="flex items-center gap-1 mb-4">
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <p class="text-gray-300 mb-6 italic">"The duotone approach transformed our brand. Clean, modern, and incredibly impactful. Highly recommend!"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
              <span class="text-black font-black">JD</span>
            </div>
            <div>
              <div class="text-white font-bold">Jessica Davis</div>
              <div class="text-sm text-cyan-400">CEO, TechStart Inc.</div>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
          <div class="flex items-center gap-1 mb-4">
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <p class="text-gray-300 mb-6 italic">"Outstanding work! The team delivered beyond expectations. Our users love the new interface."</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
              <span class="text-black font-black">MK</span>
            </div>
            <div>
              <div class="text-white font-bold">Michael Kim</div>
              <div class="text-sm text-cyan-400">Product Manager, FinTech Co.</div>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
          <div class="flex items-center gap-1 mb-4">
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <p class="text-gray-300 mb-6 italic">"Professional, creative, and efficient. They brought our vision to life with stunning results!"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
              <span class="text-black font-black">AL</span>
            </div>
            <div>
              <div class="text-white font-bold">Amanda Lee</div>
              <div class="text-sm text-cyan-400">Founder, Creative Studio</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 8. CTA Section with Form - CTA 信息区 ⭐ -->
  <section class="py-24 bg-gradient-to-br from-black via-cyan-950/30 to-black relative overflow-hidden">
    <!-- Glow Effects -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Left: Information -->
        <div>
          <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Start<br/>
            <span class="text-cyan-400">Your Project?</span>
          </h2>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-white mb-4">Why Choose Duotone Design?</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">Minimalist Aesthetics</div>
                  <div class="text-gray-400 text-sm">Two-color approach focuses on content, eliminating visual clutter for maximum impact</div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">High Contrast</div>
                  <div class="text-gray-400 text-sm">Bold color combinations create striking visual hierarchy and memorable brand presence</div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">Modern Tech Aesthetic</div>
                  <div class="text-gray-400 text-sm">Perfect for creative industries, tech startups, and brands seeking contemporary appeal</div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold mb-1">Versatile & Scalable</div>
                  <div class="text-gray-400 text-sm">Works seamlessly across all platforms: web, mobile, print, and digital media</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <div class="text-center">
              <div class="text-3xl font-black text-cyan-400 mb-1">98%</div>
              <div class="text-xs text-gray-400 uppercase">Client Satisfaction</div>
            </div>
            <div class="w-px h-12 bg-cyan-400/30"></div>
            <div class="text-center">
              <div class="text-3xl font-black text-cyan-400 mb-1">4.9</div>
              <div class="text-xs text-gray-400 uppercase">Average Rating</div>
            </div>
            <div class="w-px h-12 bg-cyan-400/30"></div>
            <div class="text-center">
              <div class="text-3xl font-black text-cyan-400 mb-1">24/7</div>
              <div class="text-xs text-gray-400 uppercase">Support</div>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="bg-gray-900 border-2 border-cyan-400/30 rounded-2xl p-8">
          <h3 class="text-2xl font-black text-white mb-6">Let's Work Together</h3>

          <form class="space-y-6">
            <!-- Name Input -->
            <div>
              <label class="block text-sm font-bold text-white mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                class="w-full px-4 py-3 bg-black border-2 border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <!-- Email Input -->
            <div>
              <label class="block text-sm font-bold text-white mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                class="w-full px-4 py-3 bg-black border-2 border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <!-- Project Type Select -->
            <div>
              <label class="block text-sm font-bold text-white mb-2">Project Type</label>
              <select class="w-full px-4 py-3 bg-black border-2 border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all">
                <option value="">Select a service</option>
                <option value="branding">Branding</option>
                <option value="web-design">Web Design</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="mobile-app">Mobile App</option>
                <option value="illustration">Illustration</option>
                <option value="motion">Motion Design</option>
              </select>
            </div>

            <!-- Message Textarea -->
            <div>
              <label class="block text-sm font-bold text-white mb-2">Project Details</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                class="w-full px-4 py-3 bg-black border-2 border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-black text-lg rounded-lg hover:shadow-2xl hover:shadow-cyan-400/60 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>

  <!-- 9. Footer - 页腳 -->
  <footer class="bg-black border-t border-cyan-400/20 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

        <!-- Logo & Description -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <span class="text-xl font-black text-white">DUOTONE</span>
          </div>
          <p class="text-gray-400 max-w-md mb-4">
            Crafting stunning digital experiences with the power of duotone design. Bold, minimal, and impactful.
          </p>
          <!-- Social Links -->
          <div class="flex gap-3">
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all text-cyan-400 hover:text-black">
              <span class="text-sm font-bold">fb</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all text-cyan-400 hover:text-black">
              <span class="text-sm font-bold">tw</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all text-cyan-400 hover:text-black">
              <span class="text-sm font-bold">in</span>
            </a>
            <a href="javascript:void(0)" class="w-10 h-10 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all text-cyan-400 hover:text-black">
              <span class="text-sm font-bold">ig</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Our Work</a></li>
            <li><a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
            <li><a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
            <li><a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-bold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              hello@duotone.studio
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +1 (555) 123-4567
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              San Francisco, CA
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-cyan-400/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-gray-400 text-sm">
          © 2025 Duotone Studio. All rights reserved.
        </div>
        <div class="flex gap-6 text-sm">
          <a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="javascript:void(0)" class="text-gray-400 hover:text-cyan-400 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

</div>
`;

export const duotoneFullPageStyles = `
/* Duotone Full Page Custom Styles */
/* 黑色 + 青色双色調设計系統 */

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection Color */
::selection {
  background-color: #00D9FF;
  color: #000000;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #00D9FF, #00A8CC);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00D9FF;
}

/* Duotone Glow Effect */
.duotone-glow {
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
}

/* Duotone Gradient */
.duotone-gradient {
  background: linear-gradient(135deg, #000000 0%, #00D9FF 100%);
}

/* Duotone Card */
.duotone-card {
  position: relative;
  overflow: hidden;
}

.duotone-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.duotone-card:hover::before {
  left: 100%;
}

/* Primary Button */
.duotone-btn-primary {
  position: relative;
  overflow: hidden;
}

.duotone-btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.duotone-btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

/* Duotone Overlay */
.duotone-overlay {
  backdrop-filter: blur(10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .duotone-card {
    padding: 1.5rem;
  }
}

/* Focus Styles for Accessibility */
*:focus {
  outline: 2px solid #00D9FF;
  outline-offset: 2px;
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .border-cyan-400\\/30 {
    border-color: #00D9FF;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
