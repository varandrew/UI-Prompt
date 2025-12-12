/**
 * emptyStateTemplate - Empty State HTML Builder
 *
 * Builds a clean, professional empty state page when no preview content is available.
 * Features:
 * - Minimalist design with fade-in animations
 * - PostMessage communication with parent window
 * - "Get AI Prompt" button to open prompt drawer
 * - Fully responsive and accessible
 */

/**
 * Simple HTML escape to prevent XSS
 * Used instead of DOMPurify for lightweight sanitization in template strings
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeHTML(str) {
  const div = typeof document !== 'undefined'
    ? document.createElement('div')
    : { textContent: str, innerHTML: '' };
  div.textContent = str;
  return div.innerHTML || str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Build empty state HTML for preview page
 *
 * This template is shown when a style has no fullPageHTML or preview content.
 * It provides a professional "coming soon" message with an action to view the AI prompt.
 *
 * @param {Object} options - Build options
 * @param {string} options.displayTitle - The style title to display (will be sanitized)
 * @param {string} options.language - Current language ('zh-CN' or 'en-US')
 * @param {Function} options.t - Translation function from i18n
 * @returns {string} Complete HTML document string with embedded styles and scripts
 *
 * @example
 * const html = buildEmptyStateHTML({
 *   displayTitle: 'Glassmorphism',
 *   language: 'zh-CN',
 *   t: (key, params) => translate(key, params)
 * });
 */
export function buildEmptyStateHTML({ displayTitle, language, t }) {
  // Sanitize the title to prevent XSS
  const safeTitle = escapeHTML(displayTitle || '');

  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.title', { title: safeTitle })}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    /* Base settings for Minimalist Design */
    body {
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #171717; /* Neutral-900 */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Smooth, modest animations */
    .fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
      transform: translateY(10px);
    }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Minimalist Button Hover */
    .btn-minimal {
      transition: all 0.2s ease-out;
    }
    .btn-minimal:hover {
      background-color: #171717; /* Neutral-900 */
      color: #ffffff;
      border-color: #171717;
    }

    /* Focus states for accessibility */
    *:focus-visible {
      outline: 1px solid #171717;
      outline-offset: 4px;
    }

    /* Lucide icon styling */
    .lucide {
      width: 1rem;
      height: 1rem;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  </style>
</head>
<body class="h-screen w-full flex flex-col relative overflow-hidden">

  <!-- Subtle Navigation Context -->
  <nav class="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-10">
    <div class="text-sm font-medium tracking-wide text-neutral-900">${safeTitle}</div>
    <div class="text-sm text-neutral-400">${t('common.styles')}</div>
  </nav>

  <!-- Main Content Area -->
  <main class="flex-grow flex items-center justify-center px-6 sm:px-12">
    <div class="max-w-[480px] w-full flex flex-col items-center text-center">

      <!-- Icon: Lightbulb for "coming soon" -->
      <div class="fade-in-up mb-8 text-neutral-900 opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5a6 6 0 0 0-11 0c0 1.5.5 2.5 1.5 3.5 2.5 2.4 2.9 2.5 3 4"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      </div>

      <!-- Typography: Clean hierarchy -->
      <h1 class="fade-in-up delay-100 text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 mb-4">
        ${t('preview.noTemplateTitle')}
      </h1>

      <!-- Description -->
      <p class="fade-in-up delay-200 text-neutral-500 text-base leading-relaxed mb-10 max-w-sm">
        ${t('preview.noTemplateDescription')}
      </p>

      <!-- Action Button -->
      <div class="fade-in-up delay-300 w-full flex justify-center">
        <button onclick="notifyParent()" class="btn-minimal group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-neutral-900 bg-transparent border border-neutral-200 rounded-sm overflow-hidden">
          <span class="relative flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="lucide w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
            <span>${t('buttons.prompt')}</span>
          </span>
        </button>
      </div>

      <!-- Contextual Note -->
      <div class="fade-in-up delay-300 mt-6">
        <p class="text-xs text-neutral-400">
          ${t('preview.noTemplateHint')}
        </p>
      </div>

    </div>
  </main>

  <!-- Minimal Footer Divider -->
  <div class="absolute bottom-0 left-0 w-full h-px bg-neutral-100"></div>

  <script>
    // Notify parent window to open AI Prompt drawer
    function notifyParent() {
      // Try to trigger the prompt button in parent window
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ action: 'openPrompt' }, '*');
      }
    }
  </script>
</body>
</html>`;
}

// Export for testing
export { escapeHTML };

export default buildEmptyStateHTML;
