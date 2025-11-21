/**
 * DataVisualizationPreview Component
 * Advanced preview component for data visualization scenarios
 */

import React, { useState } from 'react';
import { dataVisualizationScenarios } from '../../data/components/dataVisualizationScenarios';
import { useLanguage } from '../../hooks/useLanguage';
import { injectAppStylesIntoIframe, stripTailwindCdn } from '../../utils/previewCss';

export function DataVisualizationPreview({
  isOpen,
  onClose,
  initialScenario = 'enterprise-dashboard'
}) {
  const { t, language } = useLanguage();

  // 語言取值助手：支援不同大小写/連字號鍵，並提供稳健後备
  const pickI18n = (obj) => {
    if (!obj || typeof obj !== 'object') return '';
    // 常見鍵位變体
    const candidates = [
      language,
      (language || '').toLowerCase(),
      'zh-cn', 'zh-CN', 'en-US', 'en-us'
    ];
    for (const key of candidates) {
      if (key && obj[key]) return String(obj[key]);
    }
    // 後备：第一個非空值
    const first = Object.values(obj).find(v => !!v);
    return String(first || '');
  };
  const [selectedScenario, setSelectedScenario] = useState(initialScenario);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  // Get current scenario data
  const currentScenario = dataVisualizationScenarios.find(
    scenario => scenario.id === selectedScenario
  ) || dataVisualizationScenarios[0];

  // Handle scenario change
  const handleScenarioChange = (scenarioId) => {
    setSelectedScenario(scenarioId);
    setIsLoading(true);
    setIframeKey(prev => prev + 1); // Force iframe reload
  };

  // Handle iframe load
  const handleIframeLoad = (e) => {
    try { injectAppStylesIntoIframe(e.currentTarget); } catch {
      // Ignore injection errors
    }
    setIsLoading(false);
  };

  // Enhanced HTML with dynamic data injection
  const getEnhancedHTML = (scenario) => {
    // 先移除 Tailwind CDN 以避免生产環境警告与外部依賴
    let html = stripTailwindCdn(scenario.html || '');

    // Add Chart.js for dynamic charts if needed
    if (html.includes('chart-js-placeholder')) {
      html = html.replace(
        '</head>',
        `
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
          // Dynamic chart initialization will be added here
        </script>
        </head>
        `
      );
    }

    // Add live data simulation script
    html = html.replace(
      '</body>',
      `
      <script>
        // Simulate real-time data updates
        function updateMetrics() {
          const elements = document.querySelectorAll('[data-metric]');
          elements.forEach(element => {
            const metricType = element.getAttribute('data-metric');
            if (metricType === 'cpu') {
              const value = Math.floor(Math.random() * 30) + 40;
              element.textContent = value + '%';
            } else if (metricType === 'memory') {
              const value = Math.floor(Math.random() * 20) + 60;
              element.textContent = value + '%';
            }
          });
        }

        // Simulate activity feed updates
        function updateActivity() {
          const activities = [
            'User from Tokyo visited /products',
            'Purchase completed - $249.99',
            'User from Berlin signed up',
            'Support ticket resolved',
            'API response time: 45ms'
          ];

          const activityContainer = document.querySelector('.activity-feed');
          if (activityContainer) {
            const activity = activities[Math.floor(Math.random() * activities.length)];
            const activityElement = document.createElement('div');
            activityElement.className = 'flex items-center space-x-3 animate-fade-in';
            activityElement.innerHTML = \`
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-sm text-gray-700">\${activity}</span>
            \`;

            activityContainer.insertBefore(activityElement, activityContainer.firstChild);

            // Remove old activities
            while (activityContainer.children.length > 5) {
              activityContainer.removeChild(activityContainer.lastChild);
            }
          }
        }

        // Start simulations
        if ('${scenario.id}' === 'realtime-monitoring') {
          setInterval(updateMetrics, 3000);
        }

        if ('${scenario.id}' === 'analytics-platform') {
          setInterval(updateActivity, 5000);
        }

        // Add smooth animations
        const style = document.createElement('style');
        style.textContent = \`
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .pulse-dot {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          .chart-animate {
            animation: chartGrow 1s ease-out;
          }

          @keyframes chartGrow {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
        \`;
        document.head.appendChild(style);

        // Add hover effects
        document.addEventListener('DOMContentLoaded', function() {
          const cards = document.querySelectorAll('.bg-white, .bg-gray-800');
          cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-2px)';
              this.style.transition = 'all 0.2s ease-in-out';
            });

            card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
            });
          });
        });
      </script>
      </body>
      `
    );

    return html;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white h-full w-full flex flex-col">
        {/* Header - matching standard PreviewModal */}
        <header className="border-b p-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-white gap-3 md:gap-2">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold">{t('preview.dataVisualization')}</h3>
            <div className="text-sm text-gray-500">
              {pickI18n(currentScenario.name)}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch md:items-center w-full md:w-auto">
            {/* Scenario Selector - using standard PreviewSelector styling */}
            <div className="w-full md:w-auto md:mr-2">
              {/* Desktop: Button Group */}
              <div className="hidden md:block">
                <nav className="inline-flex gap-1" role="tablist">
                  {dataVisualizationScenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => handleScenarioChange(scenario.id)}
                      className={`px-3 py-1.5 text-sm font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                        selectedScenario === scenario.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
                      }`}
                      role="tab"
                      aria-selected={selectedScenario === scenario.id}
                      title={pickI18n(scenario.name)}
                    >
                      {pickI18n(scenario.name)}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile: Dropdown */}
              <div className="md:hidden">
                <select
                  value={selectedScenario}
                  onChange={(e) => handleScenarioChange(e.target.value)}
                  className="preview-select w-full px-3 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors duration-200"
                  style={{ minHeight: '44px' }}
                >
                  {dataVisualizationScenarios.map((scenario) => (
                    <option key={scenario.id} value={scenario.id}>
                      {pickI18n(scenario.name)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 md:flex-none px-4 py-2 text-sm rounded border hover:bg-gray-100 transition-colors"
              >
                ✕ {t('buttons.close')}
              </button>
            </div>
          </div>
        </header>

        {/* Scenario Info Bar */}
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {pickI18n(currentScenario.description)}
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>📊 Interactive Dashboard</span>
              <span>🎨 Professional Design</span>
              <span>📱 Responsive Layout</span>
              {selectedScenario === 'realtime-monitoring' && (
                <span className="text-green-600">🔴 Live Simulation</span>
              )}
            </div>
          </div>
        </div>

        {/* Preview Content - matching standard structure */}
        <div className="flex-1 overflow-auto custom-scrollbar relative">
          {/* Loading Overlay - using standard minimalism loader */}
          {isLoading && (
            <div className="absolute inset-0 bg-white z-10 flex items-center justify-center">
              <div className="minimalism-loader">
                <div className="minimalism-loader-dot"></div>
                <div className="minimalism-loader-dot"></div>
                <div className="minimalism-loader-dot"></div>
              </div>
            </div>
          )}

          <iframe
            key={`iframe-${iframeKey}`}
            id="data-viz-iframe"
            srcDoc={getEnhancedHTML(currentScenario)}
            className="w-full min-h-[600px] border-0"
            onLoad={handleIframeLoad}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            title={`Data Visualization Preview - ${pickI18n(currentScenario.name)}`}
          />
        </div>

        {/* Optional: Simplified footer info */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-center">
          <div className="text-xs text-gray-500">
            <strong>{pickI18n(currentScenario.name)}</strong> • Professional Data Visualization •
            {selectedScenario === 'realtime-monitoring' && <span className="text-green-600 ml-1">Live Simulation Active</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

// Scenario Preview Card Component for StyleCard integration
export function ScenarioPreviewCard({ scenario, isSelected, onSelect, language }) {
  return (
    <div
      className={`p-3 rounded-lg border cursor-pointer transition-all ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
      onClick={() => onSelect(scenario.id)}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">
            {scenario.id === 'enterprise-dashboard' && '💼'}
            {scenario.id === 'financial-platform' && '📈'}
            {scenario.id === 'analytics-platform' && '📊'}
            {scenario.id === 'realtime-monitoring' && '⚡'}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 truncate">
            {pickI18n(scenario.name)}
          </div>
          <div className="text-sm text-gray-500 truncate">
            {pickI18n(scenario.description)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataVisualizationPreview;
