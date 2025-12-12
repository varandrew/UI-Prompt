export default function MonochromePortfolioDemo() {
  return (
    <div className="min-h-full bg-white text-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Portfolio Showcase</h2>
          <p className="text-lg text-gray-600">A minimalist design agency website with monochrome aesthetic</p>
        </div>

        <div className="space-y-8">
          {/* Featured Project Card */}
          <div className="bg-white border border-gray-200 hover:border-gray-300 transition-colors p-6">
            <div className="aspect-video bg-gray-300 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">FinTech Dashboard</h3>
            <p className="text-gray-600 mb-4">SaaS Platform</p>
            <p className="text-sm text-gray-500">Modern dashboard interface for financial data visualization</p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <h4 className="font-bold text-black mb-2">Digital Product</h4>
              <p className="text-xs text-gray-600">User-centric interfaces</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <h4 className="font-bold text-black mb-2">Brand Identity</h4>
              <p className="text-xs text-gray-600">Visual systems</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 text-white p-8 mt-12">
            <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
            <p className="text-gray-400 mb-4">Let's create something exceptional together.</p>
            <button className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
