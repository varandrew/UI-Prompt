

export const naturalDefaultFullPageHTML = `
      <!-- Naturalism / Grainy Minimal 閱讀學习平台 -->
      <div class="min-full-page bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20">

        <!-- SVG 噪點濾鏡定義 -->
        <svg style="width: 0; height: 0; position: absolute;">
          <defs>
            <filter id="grain-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 0 0 0 1"/>
              </feComponentTransfer>
              <feBlend mode="overlay" in2="SourceGraphic"/>
            </filter>
          </defs>
        </svg>

        <!-- Navigation Bar -->
        <nav class="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-stone-200/50 grain-overlay">
          <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-8">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 natural-shape flex items-center justify-center text-white font-bold text-sm">
                    📖
                  </div>
                  <span class="font-semibold text-stone-800 text-lg">ReadFlow</span>
                </div>
                <div class="hidden md:flex gap-6">
                  <a href="javascript:void(0)" class="text-stone-700 hover:text-amber-700 transition-colors font-medium">Library</a>
                  <a href="javascript:void(0)" class="text-stone-700 hover:text-amber-700 transition-colors font-medium">Progress</a>
                  <a href="javascript:void(0)" class="text-stone-700 hover:text-amber-700 transition-colors font-medium">Notes</a>
                  <a href="javascript:void(0)" class="text-stone-700 hover:text-amber-700 transition-colors font-medium">Settings</a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <input type="text" placeholder="Search books..." class="natural-input px-4 py-2 text-sm w-48 hidden lg:block">
                <div class="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 natural-avatar flex items-center justify-center text-white text-sm font-semibold">
                  TC
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="py-12">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-8">
              <h1 class="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Your Learning Journey</h1>
              <p class="text-lg text-stone-600 max-w-2xl mx-auto">
                Track your reading progress, take notes, and discover new knowledge
              </p>
            </div>
          </div>
        </section>

        <!-- Stats Cards -->
        <section class="py-8">
          <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="natural-card bg-gradient-to-br from-amber-100/80 to-orange-100/60 grain-overlay">
                <div class="flex items-center gap-4">
                  <div class="natural-icon-container bg-gradient-to-br from-amber-500 to-orange-600">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-3xl font-bold text-stone-800">32</div>
                    <div class="text-sm text-stone-600 mt-1">Books Completed</div>
                  </div>
                </div>
              </div>

              <div class="natural-card bg-gradient-to-br from-stone-100/80 to-neutral-100/60 grain-overlay">
                <div class="flex items-center gap-4">
                  <div class="natural-icon-container bg-gradient-to-br from-stone-600 to-neutral-700">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-3xl font-bold text-stone-800">124h</div>
                    <div class="text-sm text-stone-600 mt-1">Reading Hours</div>
                  </div>
                </div>
              </div>

              <div class="natural-card bg-gradient-to-br from-orange-100/80 to-yellow-100/60 grain-overlay">
                <div class="flex items-center gap-4">
                  <div class="natural-icon-container bg-gradient-to-br from-orange-500 to-yellow-600">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-3xl font-bold text-stone-800">156</div>
                    <div class="text-sm text-stone-600 mt-1">Notes Taken</div>
                  </div>
                </div>
              </div>

              <div class="natural-card bg-gradient-to-br from-emerald-100/80 to-teal-100/60 grain-overlay">
                <div class="flex items-center gap-4">
                  <div class="natural-icon-container bg-gradient-to-br from-emerald-500 to-teal-600">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-3xl font-bold text-stone-800">12</div>
                    <div class="text-sm text-stone-600 mt-1">Day Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Reading Timeline -->
        <section class="py-12">
          <div class="max-w-5xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-stone-800 mb-8">Reading Timeline</h2>
            <div class="space-y-8">
              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="natural-timeline-dot bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>
                <div class="flex-1">
                  <div class="natural-card bg-white/80 grain-overlay">
                    <div class="flex gap-4">
                      <div class="w-20 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 natural-book-cover flex-shrink-0"></div>
                      <div class="flex-1">
                        <div class="flex items-start justify-between mb-2">
                          <div>
                            <h3 class="font-semibold text-stone-800 text-lg">Atomic Habits</h3>
                            <p class="text-sm text-stone-600">by James Clear</p>
                          </div>
                          <span class="natural-chip bg-emerald-100 text-emerald-700 text-xs px-3 py-1">Completed</span>
                        </div>
                        <div class="mt-4">
                          <div class="flex justify-between text-sm text-stone-600 mb-2">
                            <span>Progress</span>
                            <span>100%</span>
                          </div>
                          <div class="natural-progress">
                            <div class="natural-progress-fill bg-gradient-to-r from-emerald-500 to-teal-600" style="width: 100%"></div>
                          </div>
                        </div>
                        <div class="mt-3 text-xs text-stone-500">Finished on Jan 15, 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="natural-timeline-dot bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 flex items-center justify-center text-white font-bold">
                    📖
                  </div>
                </div>
                <div class="flex-1">
                  <div class="natural-card bg-white/80 grain-overlay">
                    <div class="flex gap-4">
                      <div class="w-20 h-28 bg-gradient-to-br from-amber-400 to-orange-500 natural-book-cover flex-shrink-0"></div>
                      <div class="flex-1">
                        <div class="flex items-start justify-between mb-2">
                          <div>
                            <h3 class="font-semibold text-stone-800 text-lg">Deep Work</h3>
                            <p class="text-sm text-stone-600">by Cal Newport</p>
                          </div>
                          <span class="natural-chip bg-amber-100 text-amber-700 text-xs px-3 py-1">In Progress</span>
                        </div>
                        <div class="mt-4">
                          <div class="flex justify-between text-sm text-stone-600 mb-2">
                            <span>Progress</span>
                            <span>68%</span>
                          </div>
                          <div class="natural-progress">
                            <div class="natural-progress-fill bg-gradient-to-r from-amber-500 to-orange-600" style="width: 68%"></div>
                          </div>
                        </div>
                        <div class="mt-3 text-xs text-stone-500">Started on Jan 20, 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="natural-timeline-dot bg-gradient-to-br from-stone-400 to-neutral-500 w-16 h-16 flex items-center justify-center text-white font-bold opacity-60">
                    ⏱
                  </div>
                </div>
                <div class="flex-1">
                  <div class="natural-card bg-white/80 grain-overlay opacity-75">
                    <div class="flex gap-4">
                      <div class="w-20 h-28 bg-gradient-to-br from-stone-300 to-neutral-400 natural-book-cover flex-shrink-0"></div>
                      <div class="flex-1">
                        <div class="flex items-start justify-between mb-2">
                          <div>
                            <h3 class="font-semibold text-stone-800 text-lg">The Power of Now</h3>
                            <p class="text-sm text-stone-600">by Eckhart Tolle</p>
                          </div>
                          <span class="natural-chip bg-stone-100 text-stone-600 text-xs px-3 py-1">Planned</span>
                        </div>
                        <div class="mt-4">
                          <div class="flex justify-between text-sm text-stone-600 mb-2">
                            <span>Progress</span>
                            <span>0%</span>
                          </div>
                          <div class="natural-progress">
                            <div class="natural-progress-fill bg-gradient-to-r from-stone-400 to-neutral-500" style="width: 0%"></div>
                          </div>
                        </div>
                        <div class="mt-3 text-xs text-stone-500">Scheduled for Feb 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Book Cards Grid -->
        <section class="py-12 bg-gradient-to-br from-white/40 to-stone-50/60">
          <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-stone-800 mb-8">My Library</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="natural-card bg-white/80 grain-overlay hover-lift">
                <div class="w-full h-48 bg-gradient-to-br from-blue-400 to-indigo-500 natural-book-cover mb-4"></div>
                <h3 class="font-semibold text-stone-800 mb-1">Thinking, Fast and Slow</h3>
                <p class="text-sm text-stone-600 mb-3">Daniel Kahneman</p>
                <div class="flex items-center gap-1 mb-3">
                  <span class="text-amber-500">★★★★★</span>
                  <span class="text-xs text-stone-500 ml-2">5.0</span>
                </div>
                <div class="natural-progress mb-3">
                  <div class="natural-progress-fill bg-gradient-to-r from-blue-500 to-indigo-600" style="width: 42%"></div>
                </div>
                <button class="natural-btn-primary w-full py-2 text-white text-sm">Continue Reading</button>
              </div>

              <div class="natural-card bg-white/80 grain-overlay hover-lift">
                <div class="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-500 natural-book-cover mb-4"></div>
                <h3 class="font-semibold text-stone-800 mb-1">The Lean Startup</h3>
                <p class="text-sm text-stone-600 mb-3">Eric Ries</p>
                <div class="flex items-center gap-1 mb-3">
                  <span class="text-amber-500">★★★★☆</span>
                  <span class="text-xs text-stone-500 ml-2">4.5</span>
                </div>
                <div class="natural-progress mb-3">
                  <div class="natural-progress-fill bg-gradient-to-r from-purple-500 to-pink-600" style="width: 85%"></div>
                </div>
                <button class="natural-btn-primary w-full py-2 text-white text-sm">Continue Reading</button>
              </div>

              <div class="natural-card bg-white/80 grain-overlay hover-lift">
                <div class="w-full h-48 bg-gradient-to-br from-rose-400 to-red-500 natural-book-cover mb-4"></div>
                <h3 class="font-semibold text-stone-800 mb-1">Start with Why</h3>
                <p class="text-sm text-stone-600 mb-3">Simon Sinek</p>
                <div class="flex items-center gap-1 mb-3">
                  <span class="text-amber-500">★★★★★</span>
                  <span class="text-xs text-stone-500 ml-2">4.8</span>
                </div>
                <div class="natural-progress mb-3">
                  <div class="natural-progress-fill bg-gradient-to-r from-rose-500 to-red-600" style="width: 15%"></div>
                </div>
                <button class="natural-btn-primary w-full py-2 text-white text-sm">Continue Reading</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Notes Section -->
        <section class="py-12">
          <div class="max-w-5xl mx-auto px-6">
            <div class="natural-card bg-white/80 grain-overlay">
              <h2 class="text-2xl font-bold text-stone-800 mb-6">Recent Notes</h2>
              <div class="space-y-3">
                <div class="natural-list-item">
                  <input type="checkbox" checked class="natural-checkbox" />
                  <div class="flex-1">
                    <div class="font-medium text-stone-800">The compound effect of small habits</div>
                    <div class="text-sm text-stone-600 mt-1">1% improvement every day leads to 37x better in a year...</div>
                    <div class="flex gap-2 mt-2">
                      <span class="natural-chip bg-emerald-100 text-emerald-700 text-xs px-2 py-1">Habits</span>
                      <span class="natural-chip bg-blue-100 text-blue-700 text-xs px-2 py-1">Growth</span>
                    </div>
                  </div>
                  <span class="text-xs text-stone-500">2 days ago</span>
                </div>

                <div class="natural-list-item">
                  <input type="checkbox" class="natural-checkbox" />
                  <div class="flex-1">
                    <div class="font-medium text-stone-800">Four rules of focus work</div>
                    <div class="text-sm text-stone-600 mt-1">Work deeply, embrace boredom, quit social media, drain the shallows</div>
                    <div class="flex gap-2 mt-2">
                      <span class="natural-chip bg-purple-100 text-purple-700 text-xs px-2 py-1">Productivity</span>
                      <span class="natural-chip bg-amber-100 text-amber-700 text-xs px-2 py-1">Focus</span>
                    </div>
                  </div>
                  <span class="text-xs text-stone-500">5 days ago</span>
                </div>

                <div class="natural-list-item">
                  <input type="checkbox" class="natural-checkbox" />
                  <div class="flex-1">
                    <div class="font-medium text-stone-800">Being present is the key</div>
                    <div class="text-sm text-stone-600 mt-1">The past and future are illusions. Only now exists...</div>
                    <div class="flex gap-2 mt-2">
                      <span class="natural-chip bg-pink-100 text-pink-700 text-xs px-2 py-1">Mindfulness</span>
                    </div>
                  </div>
                  <span class="text-xs text-stone-500">1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Loading Animations -->
        <section class="py-12 bg-gradient-to-br from-stone-50 to-amber-50/40">
          <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-stone-800 mb-8 text-center">Loading States</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="natural-card bg-white/80 grain-overlay text-center">
                <div class="natural-spinner mx-auto mb-4"></div>
                <div class="text-sm text-stone-600">Grainy Spinner</div>
              </div>

              <div class="natural-card bg-white/80 grain-overlay text-center">
                <div class="flex gap-2 justify-center mb-4">
                  <div class="natural-pulse-dot bg-amber-500"></div>
                  <div class="natural-pulse-dot bg-orange-500" style="animation-delay: 0.2s"></div>
                  <div class="natural-pulse-dot bg-stone-500" style="animation-delay: 0.4s"></div>
                </div>
                <div class="text-sm text-stone-600">Pulse Loader</div>
              </div>

              <div class="natural-card bg-white/80 grain-overlay text-center">
                <div class="natural-book-flip mx-auto mb-4"></div>
                <div class="text-sm text-stone-600">Book Flip Animation</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Reading Analytics -->
        <section class="py-12">
          <div class="max-w-5xl mx-auto px-6">
            <div class="natural-card bg-white/80 grain-overlay">
              <h2 class="text-2xl font-bold text-stone-800 mb-6">Reading Analytics</h2>
              <div class="space-y-6">
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-700 font-medium">Fiction</span>
                    <span class="text-sm text-stone-600">12 books (38%)</span>
                  </div>
                  <div class="natural-progress">
                    <div class="natural-progress-fill bg-gradient-to-r from-blue-500 to-indigo-600" style="width: 38%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-700 font-medium">Business</span>
                    <span class="text-sm text-stone-600">10 books (31%)</span>
                  </div>
                  <div class="natural-progress">
                    <div class="natural-progress-fill bg-gradient-to-r from-amber-500 to-orange-600" style="width: 31%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-700 font-medium">Self-Help</span>
                    <span class="text-sm text-stone-600">6 books (19%)</span>
                  </div>
                  <div class="natural-progress">
                    <div class="natural-progress-fill bg-gradient-to-r from-emerald-500 to-teal-600" style="width: 19%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-700 font-medium">Science</span>
                    <span class="text-sm text-stone-600">4 books (12%)</span>
                  </div>
                  <div class="natural-progress">
                    <div class="natural-progress-fill bg-gradient-to-r from-purple-500 to-pink-600" style="width: 12%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="py-12 bg-gradient-to-br from-stone-100 to-amber-100/60 mt-12">
          <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 natural-shape flex items-center justify-center text-white font-bold">
                    📖
                  </div>
                  <span class="font-bold text-lg text-stone-800">ReadFlow</span>
                </div>
                <p class="text-stone-600 text-sm">Your companion for mindful reading and continuous learning</p>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-4">Quick Links</h4>
                <div class="space-y-2 text-sm">
                  <a href="javascript:void(0)" class="block text-stone-600 hover:text-amber-700 transition-colors">About</a>
                  <a href="javascript:void(0)" class="block text-stone-600 hover:text-amber-700 transition-colors">Features</a>
                  <a href="javascript:void(0)" class="block text-stone-600 hover:text-amber-700 transition-colors">Community</a>
                  <a href="javascript:void(0)" class="block text-stone-600 hover:text-amber-700 transition-colors">Support</a>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-4">Stay Updated</h4>
                <p class="text-stone-600 text-sm mb-3">Get reading tips and book recommendations</p>
                <div class="flex gap-2">
                  <input type="email" placeholder="Your email" class="natural-input flex-1 px-4 py-2 text-sm" />
                  <button class="natural-btn-primary px-4 py-2 text-white text-sm">Join</button>
                </div>
              </div>
            </div>
            <div class="border-t border-stone-300 pt-6 text-center text-sm text-stone-600">
              © 2025 ReadFlow. Crafted with natural aesthetics.
            </div>
          </div>
        </footer>
      </div>
`;

export const naturalDefaultFullPageStyles = `
    /* Grainy Texture Overlay */
      .grain-overlay {
        position: relative;
      }

      .grain-overlay::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
        pointer-events: none;
        opacity: 0.5;
      }

      /* Natural Organic Shapes */
      .natural-shape {
        border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
        animation: morph-subtle 8s ease-in-out infinite;
      }

      .natural-avatar {
        border-radius: 40% 60% 55% 45% / 50% 60% 40% 50%;
        animation: morph-subtle 10s ease-in-out infinite;
      }

      .natural-book-cover {
        border-radius: 25% 75% 30% 70% / 70% 30% 70% 30%;
      }

      .natural-timeline-dot {
        border-radius: 45% 55% 52% 48% / 48% 60% 40% 52%;
        animation: morph-subtle 12s ease-in-out infinite;
      }

      @keyframes morph-subtle {
        0%, 100% {
          border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
        }
        25% {
          border-radius: 45% 55% 60% 40% / 50% 50% 50% 50%;
        }
        50% {
          border-radius: 50% 50% 45% 55% / 55% 45% 55% 45%;
        }
        75% {
          border-radius: 40% 60% 50% 50% / 60% 50% 40% 60%;
        }
      }

      /* Natural Cards */
      .natural-card {
        padding: 1.5rem;
        border-radius: 24px 26px 25px 27px;
        box-shadow: 0 4px 20px rgba(120, 80, 50, 0.08);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(8px);
      }

      .natural-card:hover {
        box-shadow: 0 8px 30px rgba(120, 80, 50, 0.12);
        transform: translateY(-2px);
      }

      .hover-lift:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(120, 80, 50, 0.15);
      }

      /* Icon Containers */
      .natural-icon-container {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 35% 65% 60% 40% / 50% 55% 45% 50%;
        animation: morph-subtle 10s ease-in-out infinite;
      }

      /* Buttons */
      .natural-btn-primary {
        background: linear-gradient(135deg, #f59e0b, #ea580c);
        border-radius: 45% 55% 50% 50% / 55% 55% 45% 45%;
        transition: all 0.3s ease;
        border: none;
        font-weight: 600;
      }

      .natural-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
        border-radius: 40% 60% 55% 45% / 50% 50% 50% 50%;
      }

      /* Chips */
      .natural-chip {
        border-radius: 35% 65% 50% 50% / 55% 45% 55% 45%;
        font-weight: 600;
        display: inline-block;
      }

      /* List Items */
      .natural-list-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: linear-gradient(135deg, rgba(255,255,255,0.6), rgba(250,245,240,0.4));
        border-radius: 20px 22px 21px 23px;
        transition: all 0.3s ease;
        position: relative;
      }

      .natural-list-item::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        border-radius: inherit;
        pointer-events: none;
      }

      .natural-list-item:hover {
        background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(250,245,240,0.6));
        transform: translateX(4px);
      }

      /* Checkbox */
      .natural-checkbox {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 25% 75% 70% 30% / 30% 70% 30% 70%;
        cursor: pointer;
        flex-shrink: 0;
        margin-top: 0.25rem;
      }

      /* Progress Bars */
      .natural-progress {
        height: 0.75rem;
        background: linear-gradient(135deg, #f5f5f4, #e7e5e4);
        border-radius: 35% 65% 50% 50% / 60% 40% 60% 40%;
        overflow: hidden;
        position: relative;
      }

      .natural-progress::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        pointer-events: none;
      }

      .natural-progress-fill {
        height: 100%;
        border-radius: inherit;
        transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        animation: progress-shimmer 2s ease-in-out infinite;
      }

      @keyframes progress-shimmer {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.85; }
      }

      /* Loading Animations */
      .natural-spinner {
        width: 4rem;
        height: 4rem;
        background: linear-gradient(135deg, #f59e0b, #ea580c);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        animation: spinner-morph 2s ease-in-out infinite;
        position: relative;
      }

      .natural-spinner::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
        border-radius: inherit;
      }

      @keyframes spinner-morph {
        0%, 100% {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          transform: rotate(0deg);
        }
        50% {
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          transform: rotate(180deg);
        }
      }

      .natural-pulse-dot {
        width: 1rem;
        height: 1rem;
        border-radius: 35% 65% 50% 50% / 60% 40% 60% 40%;
        animation: pulse-dot 1.5s ease-in-out infinite;
      }

      @keyframes pulse-dot {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.4);
          opacity: 0.6;
        }
      }

      .natural-book-flip {
        width: 4rem;
        height: 4rem;
        background: linear-gradient(135deg, #d4a574, #c69168);
        border-radius: 25% 75% 30% 70% / 70% 30% 70% 30%;
        animation: book-flip 2s ease-in-out infinite;
        position: relative;
      }

      .natural-book-flip::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E");
        border-radius: inherit;
      }

      @keyframes book-flip {
        0%, 100% {
          transform: perspective(400px) rotateY(0deg);
        }
        50% {
          transform: perspective(400px) rotateY(180deg);
        }
      }

      /* Input Fields */
      .natural-input {
        background: white;
        border: 2px solid #e7e5e4;
        border-radius: 20px 22px 21px 23px;
        transition: all 0.3s ease;
      }

      .natural-input:focus {
        outline: none;
        border-color: #f59e0b;
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
      }

      /* Page Container */
      .min-full-page {
        min-height: 100vh;
      }
`;