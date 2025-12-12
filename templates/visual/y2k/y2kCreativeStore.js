// Y2K Creative Store - E-Commerce Platform
// A vibrant Y2K-themed online store for digital products and creative services

export const y2kCreativeStoreFullPageHTML = `
<div class="y2k-store-page min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
  <!-- Animated Background Elements -->
  <div class="y2k-store-bubble" style="top: 5%; left: 5%; width: 150px; height: 150px;"></div>
  <div class="y2k-store-bubble" style="bottom: 10%; right: 8%; width: 120px; height: 120px; animation-delay: 1.5s;"></div>
  <div class="y2k-store-bubble" style="top: 50%; left: 10%; width: 80px; height: 80px; animation-delay: 3s;"></div>

  <!-- Header/Navigation -->
  <header class="y2k-store-header sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/40">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="y2k-store-logo-container">
          <div class="y2k-store-logo-dot"></div>
          <div class="y2k-store-logo-dot" style="animation-delay: 0.3s;"></div>
          <div class="y2k-store-logo-dot" style="animation-delay: 0.6s;"></div>
        </div>
        <span class="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">CreativeHub</span>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex gap-8">
        <a href="javascript:void(0)" class="y2k-store-nav-link">Shop</a>
        <a href="javascript:void(0)" class="y2k-store-nav-link">About</a>
        <a href="javascript:void(0)" class="y2k-store-nav-link">Gallery</a>
        <a href="javascript:void(0)" class="y2k-store-nav-link">Contact</a>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-4">
        <button class="y2k-store-search-icon">🔍</button>
        <button class="y2k-store-cart-icon">
          🛍️
          <span class="y2k-store-badge">3</span>
        </button>
        <button class="y2k-store-user-icon">👤</button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="y2k-store-hero relative overflow-hidden py-20 px-6">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="space-y-6">
          <div class="y2k-store-label">✨ Welcome to CreativeHub</div>
          <h1 class="text-5xl md:text-6xl font-black leading-tight">
            <span class="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Digital Creativity
            </span>
            <br />
            <span class="text-gray-800">Reimagined</span>
          </h1>
          <p class="text-lg text-gray-700 max-w-md leading-relaxed">
            Discover stunning digital products, design templates, and creative services for your next big project.
          </p>
          <div class="flex gap-4 flex-wrap">
            <button class="y2k-store-btn-primary">Browse Collection</button>
            <button class="y2k-store-btn-secondary">Learn More</button>
          </div>
        </div>

        <!-- Hero Image/Showcase -->
        <div class="relative h-96 rounded-3xl overflow-hidden">
          <div class="y2k-store-showcase-card">
            <div class="y2k-store-showcase-item bg-gradient-to-br from-pink-400 to-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Products Section -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="space-y-8">
      <div class="text-center space-y-3">
        <h2 class="text-4xl font-black text-gray-800">Trending Now</h2>
        <p class="text-lg text-gray-600">Handpicked products for creative professionals</p>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Product Card 1 -->
        <div class="y2k-store-product-card">
          <div class="y2k-store-product-image bg-gradient-to-br from-cyan-300 to-blue-400"></div>
          <div class="p-4 space-y-3">
            <span class="y2k-store-badge-small">UI Kit</span>
            <h3 class="font-bold text-gray-800">Modern UI Components</h3>
            <p class="text-sm text-gray-600">50+ ready-to-use React components</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-800">\$29</span>
              <div class="y2k-store-rating">⭐ 4.9</div>
            </div>
          </div>
        </div>

        <!-- Product Card 2 -->
        <div class="y2k-store-product-card">
          <div class="y2k-store-product-image bg-gradient-to-br from-purple-300 to-pink-400"></div>
          <div class="p-4 space-y-3">
            <span class="y2k-store-badge-small">Icons</span>
            <h3 class="font-bold text-gray-800">Icon Bundle Pro</h3>
            <p class="text-sm text-gray-600">1000+ customizable SVG icons</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-800">\$19</span>
              <div class="y2k-store-rating">⭐ 4.8</div>
            </div>
          </div>
        </div>

        <!-- Product Card 3 -->
        <div class="y2k-store-product-card">
          <div class="y2k-store-product-image bg-gradient-to-br from-teal-300 to-emerald-400"></div>
          <div class="p-4 space-y-3">
            <span class="y2k-store-badge-small">Fonts</span>
            <h3 class="font-bold text-gray-800">Typography Pack</h3>
            <p class="text-sm text-gray-600">20 premium web fonts collection</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-800">\$39</span>
              <div class="y2k-store-rating">⭐ 5.0</div>
            </div>
          </div>
        </div>

        <!-- Product Card 4 -->
        <div class="y2k-store-product-card">
          <div class="y2k-store-product-image bg-gradient-to-br from-orange-300 to-red-400"></div>
          <div class="p-4 space-y-3">
            <span class="y2k-store-badge-small">Template</span>
            <h3 class="font-bold text-gray-800">Landing Page Kit</h3>
            <p class="text-sm text-gray-600">10 conversion-optimized templates</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-800">\$49</span>
              <div class="y2k-store-rating">⭐ 4.7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Categories Section -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl font-black text-gray-800 mb-8">Shop by Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Category Card 1 -->
      <div class="y2k-store-category-card">
        <div class="y2k-store-category-icon">🎨</div>
        <h3 class="text-xl font-bold text-gray-800 mt-4">Design Assets</h3>
        <p class="text-gray-600 mt-2">UI kits, Icons, Illustrations & more</p>
        <a href="javascript:void(0)" class="y2k-store-link">Explore →</a>
      </div>

      <!-- Category Card 2 -->
      <div class="y2k-store-category-card">
        <div class="y2k-store-category-icon">💻</div>
        <h3 class="text-xl font-bold text-gray-800 mt-4">Code Templates</h3>
        <p class="text-gray-600 mt-2">React, Vue, Next.js components</p>
        <a href="javascript:void(0)" class="y2k-store-link">Explore →</a>
      </div>

      <!-- Category Card 3 -->
      <div class="y2k-store-category-card">
        <div class="y2k-store-category-icon">📚</div>
        <h3 class="text-xl font-bold text-gray-800 mt-4">Courses</h3>
        <p class="text-gray-600 mt-2">Design & development education</p>
        <a href="javascript:void(0)" class="y2k-store-link">Explore →</a>
      </div>
    </div>
  </section>

  <!-- Features/Why Choose Us -->
  <section class="y2k-store-features relative py-16 px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <h2 class="text-3xl font-black text-gray-800 mb-12 text-center">Why Choose CreativeHub</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Feature 1 -->
        <div class="y2k-store-feature-card">
          <div class="text-4xl mb-4">✨</div>
          <h3 class="font-bold text-gray-800 mb-2">Premium Quality</h3>
          <p class="text-sm text-gray-600">Curated products from top creators</p>
        </div>

        <!-- Feature 2 -->
        <div class="y2k-store-feature-card">
          <div class="text-4xl mb-4">🚀</div>
          <h3 class="font-bold text-gray-800 mb-2">Quick Delivery</h3>
          <p class="text-sm text-gray-600">Instant access to all digital products</p>
        </div>

        <!-- Feature 3 -->
        <div class="y2k-store-feature-card">
          <div class="text-4xl mb-4">💳</div>
          <h3 class="font-bold text-gray-800 mb-2">Secure Payment</h3>
          <p class="text-sm text-gray-600">Multiple payment options available</p>
        </div>

        <!-- Feature 4 -->
        <div class="y2k-store-feature-card">
          <div class="text-4xl mb-4">🎁</div>
          <h3 class="font-bold text-gray-800 mb-2">Regular Updates</h3>
          <p class="text-sm text-gray-600">Free updates and lifetime support</p>
        </div>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="y2k-store-bubble" style="top: 20%; right: 5%; width: 200px; height: 200px; opacity: 0.3; animation-delay: 2s;"></div>
  </section>

  <!-- Newsletter Section -->
  <section class="max-w-4xl mx-auto px-6 py-16">
    <div class="y2k-store-newsletter">
      <h2 class="text-3xl font-black text-white mb-4">Stay Updated</h2>
      <p class="text-white/90 mb-6">Get exclusive deals and new product updates delivered to your inbox</p>
      <form class="flex gap-3 flex-col sm:flex-row">
        <input type="email" placeholder="your@email.com" class="y2k-store-input-newsletter" />
        <button type="submit" class="y2k-store-btn-subscribe">Subscribe</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="y2k-store-footer">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Company</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">About Us</a></li>
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">Blog</a></li>
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Products</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">Shop</a></li>
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">New Arrivals</a></li>
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">Best Sellers</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Support</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">Help Center</a></li>
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">Contact</a></li>
            <li><a href="javascript:void(0)" class="y2k-store-footer-link">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Follow Us</h4>
          <div class="flex gap-3">
            <a href="javascript:void(0)" class="y2k-store-social">📘</a>
            <a href="javascript:void(0)" class="y2k-store-social">𝕏</a>
            <a href="javascript:void(0)" class="y2k-store-social">📷</a>
          </div>
        </div>
      </div>
      <div class="border-t border-white/20 pt-8 text-center text-gray-600">
        <p>&copy; 2025 CreativeHub. All rights reserved. | <a href="javascript:void(0)" class="underline hover:text-gray-800">Privacy</a> | <a href="javascript:void(0)" class="underline hover:text-gray-800">Terms</a></p>
      </div>
    </div>
  </footer>
</div>
`;

export const y2kCreativeStoreFullPageStyles = \`
/* Y2K Creative Store Styles */

.y2k-store-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Header */
.y2k-store-header {
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.08);
}

.y2k-store-logo-container {
  display: flex;
  gap: 6px;
  align-items: center;
}

.y2k-store-logo-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ec4899, #a855f7);
  border-radius: 50%;
  animation: y2k-store-float 2s ease-in-out infinite;
}

.y2k-store-nav-link {
  color: #475569;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
}

.y2k-store-nav-link:hover {
  color: #a855f7;
  transform: translateY(-2px);
}

.y2k-store-search-icon,
.y2k-store-user-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.y2k-store-search-icon:hover,
.y2k-store-user-icon:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.1);
}

.y2k-store-cart-icon {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.y2k-store-cart-icon:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.1);
}

.y2k-store-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #ec4899, #a855f7);
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Animated Bubbles */
.y2k-store-bubble {
  position: absolute;
  background: linear-gradient(135deg,
    rgba(236, 72, 153, 0.15) 0%,
    rgba(168, 85, 247, 0.1) 50%,
    rgba(59, 130, 246, 0.15) 100%);
  border-radius: 50%;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.4);
  animation: y2k-store-float 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes y2k-store-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

/* Hero Section */
.y2k-store-label {
  display: inline-block;
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.y2k-store-showcase-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.y2k-store-showcase-item {
  width: 80%;
  height: 80%;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
}

/* Buttons */
.y2k-store-btn-primary,
.y2k-store-btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 24px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.y2k-store-btn-primary {
  background: linear-gradient(135deg, #ec4899, #a855f7);
  color: white;
  box-shadow: 0 4px 16px rgba(168, 85, 247, 0.3);
}

.y2k-store-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.4);
}

.y2k-store-btn-secondary {
  background: rgba(255, 255, 255, 0.8);
  color: #a855f7;
  border: 2px solid rgba(168, 85, 247, 0.3);
}

.y2k-store-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}

/* Product Cards */
.y2k-store-product-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.y2k-store-product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(168, 85, 247, 0.15);
}

.y2k-store-product-image {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin: 12px;
}

.y2k-store-badge-small {
  display: inline-block;
  background: rgba(168, 85, 247, 0.15);
  color: #a855f7;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.y2k-store-rating {
  background: rgba(251, 191, 36, 0.15);
  color: #d97706;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Category Cards */
.y2k-store-category-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.y2k-store-category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(168, 85, 247, 0.15);
}

.y2k-store-category-icon {
  font-size: 3rem;
}

.y2k-store-link {
  display: inline-block;
  color: #a855f7;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.y2k-store-link:hover {
  transform: translateX(4px);
}

/* Features Section */
.y2k-store-features {
  background: linear-gradient(135deg,
    rgba(236, 72, 153, 0.05) 0%,
    rgba(168, 85, 247, 0.05) 50%,
    rgba(59, 130, 246, 0.05) 100%);
}

.y2k-store-feature-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.y2k-store-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.1);
}

/* Newsletter */
.y2k-store-newsletter {
  background: linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3);
}

.y2k-store-input-newsletter {
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 24px;
  outline: none;
  font-size: 1rem;
}

.y2k-store-btn-subscribe {
  padding: 0.75rem 2rem;
  background: white;
  color: #a855f7;
  font-weight: 600;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.y2k-store-btn-subscribe:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Footer */
.y2k-store-footer {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 4rem;
}

.y2k-store-footer-link {
  color: #64748b;
  transition: all 0.3s ease;
}

.y2k-store-footer-link:hover {
  color: #a855f7;
}

.y2k-store-social {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: rgba(168, 85, 247, 0.1);
  border-radius: 50%;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.y2k-store-social:hover {
  background: rgba(168, 85, 247, 0.2);
  transform: translateY(-2px);
}
\`;
