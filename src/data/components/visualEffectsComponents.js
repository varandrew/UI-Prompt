// 視覺特效 - Visual Effects Components

export const visualEffectsComponents = [
  {
    id: 'confetti-effects',
    title: 'data.components.visualEffects.confetti-effects.title',
    description: 'data.components.visualEffects.confetti-effects.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.visualEffects.confetti-effects.variants.minimalism.name',
        description: 'data.components.visualEffects.confetti-effects.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 class="font-light text-2xl mb-2 text-gray-900">
                {{t:demo.confetti.minimalism.title}}
              </h3>
              <p class="text-gray-500 mb-8 text-sm font-light">{{t:demo.confetti.minimalism.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Black & White Confetti -->
                <button onclick="minimalistConfetti()" class="confetti-btn-min group block p-8 bg-white border-2 border-gray-900 rounded-lg text-center transition-all duration-300 hover:bg-gray-900 hover:text-white">
                  <svg class="w-8 h-8 mx-auto mb-2 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                  <p class="font-light text-sm">
                    {{t:demo.confetti.minimalism.simple}}
                  </p>
                </button>

                <!-- Geometric Shapes -->
                <button onclick="geometricConfetti()" class="confetti-btn-min group block p-8 bg-gray-50 border border-gray-200 rounded-lg text-center transition-all duration-300 hover:border-gray-900">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z M12 22L2 17L12 12L22 17L12 22Z"/>
                  </svg>
                  <p class="font-light text-sm text-gray-800">
                    {{t:demo.confetti.minimalism.geometric}}
                  </p>
                </button>

                <!-- Monochrome -->
                <button onclick="monochromeConfetti()" class="confetti-btn-min group block p-8 bg-gray-900 text-white rounded-lg text-center transition-all duration-300 hover:opacity-80">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <p class="font-light text-sm">
                    {{t:demo.confetti.minimalism.monochrome}}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
          <script>
            function minimalistConfetti() {
              confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#000000', '#FFFFFF', '#E5E5E5'],
                shapes: ['circle'],
                scalar: 0.8,
                gravity: 1.2
              });
            }

            function geometricConfetti() {
              confetti({
                particleCount: 40,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#000000', '#808080', '#C0C0C0'],
                shapes: ['square'],
                scalar: 1.0,
                gravity: 1.0
              });
            }

            function monochromeConfetti() {
              confetti({
                particleCount: 60,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#000000', '#333333', '#666666', '#999999'],
                shapes: ['circle', 'square'],
                scalar: 0.9
              });
            }
          </script>
        `,
        customStyles: `
          .confetti-btn-min {
            cursor: pointer;
          }
        `
      },
      {
        id: 'material-design',
        name: 'data.components.visualEffects.confetti-effects.variants.material-design.name',
        description: 'data.components.visualEffects.confetti-effects.variants.material-design.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="font-medium text-2xl mb-2 text-gray-900">
                {{t:demo.confetti.material.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.confetti.material.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Material Colors -->
                <button onclick="materialConfetti()" class="confetti-btn-material block p-8 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z M12 22L2 17L12 12L22 17L12 22Z"/>
                  </svg>
                  <p class="font-medium text-sm">
                    {{t:demo.confetti.material.primary}}
                  </p>
                </button>

                <!-- Success Celebration -->
                <button onclick="successConfetti()" class="confetti-btn-material block p-8 bg-green-600 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <p class="font-medium text-sm">
                    {{t:demo.confetti.material.success}}
                  </p>
                </button>

                <!-- Colorful -->
                <button onclick="colorfulConfetti()" class="confetti-btn-material block p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p class="font-medium text-sm">
                    {{t:demo.confetti.material.colorful}}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
          <script>
            function materialConfetti() {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#2196F3', '#03A9F4', '#00BCD4', '#0097A7'],
                shapes: ['circle', 'square'],
                scalar: 1.2,
                gravity: 1.0
              });
            }

            function successConfetti() {
              confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#4CAF50', '#8BC34A', '#CDDC39'],
                shapes: ['circle'],
                scalar: 1.0,
                gravity: 0.9
              });
            }

            function colorfulConfetti() {
              confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#9C27B0', '#E91E63', '#F44336', '#FF9800', '#FFEB3B'],
                shapes: ['circle', 'square'],
                scalar: 1.1,
                gravity: 0.8
              });
            }
          </script>
        `,
        customStyles: `
          .confetti-btn-material {
            cursor: pointer;
          }
        `
      },
      {
        id: 'neo-brutalism',
        name: 'data.components.visualEffects.confetti-effects.variants.neo-brutalism.name',
        description: 'data.components.visualEffects.confetti-effects.variants.neo-brutalism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-yellow-300 rounded-none border-4 border-black p-8 shadow-brutal">
              <h3 class="font-black text-2xl mb-2 text-black uppercase" style="text-shadow: 3px 3px 0 rgba(0,0,0,0.2)">
                {{t:demo.confetti.brutal.title}}
              </h3>
              <p class="text-black mb-8 text-sm font-bold">{{t:demo.confetti.brutal.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Bold Explosion -->
                <button onclick="brutalConfetti()" class="confetti-btn-brutal block p-8 bg-red-500 border-4 border-black rounded-none shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <svg class="w-8 h-8 mx-auto mb-2 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="square" stroke-linejoin="miter" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <p class="font-black text-sm text-black uppercase">
                    {{t:demo.confetti.brutal.explosion}}
                  </p>
                </button>

                <!-- Chaos Mode -->
                <button onclick="chaosConfetti()" class="confetti-btn-brutal block p-8 bg-blue-500 border-4 border-black rounded-none shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-black" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z M12 22L2 17L12 12L22 17L12 22Z"/>
                  </svg>
                  <p class="font-black text-sm text-black uppercase">
                    {{t:demo.confetti.brutal.chaos}}
                  </p>
                </button>

                <!-- Mega Burst -->
                <button onclick="megaBurst()" class="confetti-btn-brutal block p-8 bg-green-400 border-4 border-black rounded-none shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-black" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <p class="font-black text-sm text-black uppercase">
                    {{t:demo.confetti.brutal.mega}}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
          <script>
            function brutalConfetti() {
              confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#FF0000', '#FFFF00', '#0000FF', '#000000'],
                shapes: ['square'],
                scalar: 1.5,
                gravity: 1.2,
                ticks: 200
              });
            }

            function chaosConfetti() {
              const count = 200;
              const defaults = {
                origin: { y: 0.7 },
                colors: ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0000', '#00FF00'],
                shapes: ['square'],
                scalar: 1.3
              };

              function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                  particleCount: Math.floor(count * particleRatio)
                }));
              }

              fire(0.25, { spread: 26, startVelocity: 55 });
              fire(0.2, { spread: 60 });
              fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
              fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
              fire(0.1, { spread: 120, startVelocity: 45 });
            }

            function megaBurst() {
              confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 },
                colors: ['#00FF00', '#FFFF00', '#FF00FF', '#00FFFF', '#FF0000'],
                shapes: ['square', 'circle'],
                scalar: 2.0,
                gravity: 0.8,
                ticks: 300
              });
            }
          </script>
        `,
        customStyles: `
          .confetti-btn-brutal {
            cursor: pointer;
          }
          .shadow-brutal {
            box-shadow: 8px 8px 0 rgba(0, 0, 0, 1);
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.visualEffects.confetti-effects.variants.glassmorphism.name',
        description: 'data.components.visualEffects.confetti-effects.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="glass-card rounded-3xl p-8" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.25); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);">
              <h3 class="font-light text-2xl mb-2 text-white" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2)">
                {{t:demo.confetti.glass.title}}
              </h3>
              <p class="text-white/80 mb-8 text-sm font-light">{{t:demo.confetti.glass.subtitle}}</p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Translucent Confetti -->
                <button onclick="glassConfetti()" class="confetti-btn-glass group block p-8 rounded-2xl text-center transition-all duration-300" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">
                  <svg class="w-8 h-8 mx-auto mb-2 stroke-white" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                  <p class="font-light text-sm text-white">
                    {{t:demo.confetti.glass.soft}}
                  </p>
                </button>

                <!-- Pastel Frost -->
                <button onclick="frostConfetti()" class="confetti-btn-glass group block p-8 rounded-2xl text-center transition-all duration-300" style="background: rgba(200, 220, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z M12 22L2 17L12 12L22 17L12 22Z"/>
                  </svg>
                  <p class="font-light text-sm text-white">
                    {{t:demo.confetti.glass.pastel}}
                  </p>
                </button>

                <!-- Ethereal -->
                <button onclick="etherealConfetti()" class="confetti-btn-glass group block p-8 rounded-2xl text-center transition-all duration-300" style="background: rgba(255, 200, 255, 0.12); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">
                  <svg class="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <p class="font-light text-sm text-white">
                    {{t:demo.confetti.glass.ethereal}}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
          <script>
            function glassConfetti() {
              confetti({
                particleCount: 70,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA'],
                shapes: ['circle'],
                scalar: 1.0,
                gravity: 0.7,
                drift: 0.5
              });
            }

            function frostConfetti() {
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0'],
                shapes: ['circle', 'square'],
                scalar: 0.9,
                gravity: 0.6,
                drift: 1.0
              });
            }

            function etherealConfetti() {
              confetti({
                particleCount: 80,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC'],
                shapes: ['circle'],
                scalar: 1.1,
                gravity: 0.5,
                drift: 0.8,
                ticks: 300
              });
            }
          </script>
        `,
        customStyles: `
          .confetti-btn-glass {
            cursor: pointer;
          }
          .confetti-btn-glass:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          }
          .glass-card {
            background: linear-gradient(135deg, rgba(100, 100, 255, 0.3), rgba(200, 100, 255, 0.3));
          }
        `
      },
      {
        id: 'cyberpunk',
        name: 'data.components.visualEffects.confetti-effects.variants.cyberpunk.name',
        description: 'data.components.visualEffects.confetti-effects.variants.cyberpunk.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-black rounded-lg border-2 border-cyan-500 p-8 relative overflow-hidden" style="box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
              <div class="relative z-10">
                <h3 class="font-black text-2xl mb-2 text-cyan-400 uppercase" style="text-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.4);">
                  {{t:demo.confetti.cyberpunk.title}}
                </h3>
                <p class="text-purple-300 mb-8 text-sm font-bold">{{t:demo.confetti.cyberpunk.subtitle}}</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <!-- Neon Explosion -->
                  <button onclick="neonConfetti()" class="confetti-btn-cyber group block p-8 bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 rounded-lg transition-all duration-300 hover:scale-105" style="box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);">
                    <svg class="w-8 h-8 mx-auto mb-2 stroke-white stroke-[2]" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <p class="font-black text-sm text-white uppercase">
                      {{t:demo.confetti.cyberpunk.neon}}
                    </p>
                  </button>

                  <!-- Glitch Burst -->
                  <button onclick="glitchConfetti()" class="confetti-btn-cyber group block p-8 bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-purple-400 rounded-lg transition-all duration-300 hover:scale-105" style="box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);">
                    <svg class="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z M12 22L2 17L12 12L22 17L12 22Z"/>
                    </svg>
                    <p class="font-black text-sm text-white uppercase">
                      {{t:demo.confetti.cyberpunk.glitch}}
                    </p>
                  </button>

                  <!-- Matrix Rain -->
                  <button onclick="matrixConfetti()" class="confetti-btn-cyber group block p-8 bg-gradient-to-br from-green-500 to-emerald-700 border-2 border-green-400 rounded-lg transition-all duration-300 hover:scale-105" style="box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);">
                    <svg class="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <p class="font-black text-sm text-white uppercase">
                      {{t:demo.confetti.cyberpunk.matrix}}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
          <script>
            function neonConfetti() {
              confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00FFFF', '#0080FF', '#00BFFF', '#1E90FF', '#4169E1'],
                shapes: ['square', 'circle'],
                scalar: 1.3,
                gravity: 1.0,
                ticks: 250
              });
            }

            function glitchConfetti() {
              const count = 150;
              const defaults = {
                origin: { y: 0.7 },
                colors: ['#FF00FF', '#FF1493', '#FF69B4', '#DA70D6', '#BA55D3'],
                shapes: ['square']
              };

              function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                  particleCount: Math.floor(count * particleRatio)
                }));
              }

              fire(0.25, { spread: 26, startVelocity: 55 });
              fire(0.2, { spread: 60 });
              fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
              fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            }

            function matrixConfetti() {
              confetti({
                particleCount: 100,
                spread: 50,
                origin: { y: 0.6 },
                colors: ['#00FF00', '#00FF7F', '#32CD32', '#3CB371', '#2E8B57'],
                shapes: ['square'],
                scalar: 1.1,
                gravity: 1.3,
                ticks: 200
              });
            }
          </script>
        `,
        customStyles: `
          .confetti-btn-cyber {
            cursor: pointer;
          }
        `
      }
    ]
  }
];
