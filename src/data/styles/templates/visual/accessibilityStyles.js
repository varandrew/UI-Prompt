// 无障碍高对比风格数据 - Accessibility High Contrast Styles

export const accessibilityHighContrastFullPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility High Contrast - Enterprise Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="a11y-body bg-white text-black min-h-screen">

  <!-- Theme Switcher (Top Right) -->
  <div class="fixed top-4 right-4 z-50 flex gap-2">
    <button onclick="switchTheme('default')" class="a11y-theme-btn w-10 h-10 rounded-lg border-4 border-black bg-white focus-visible:ring-4 focus-visible:ring-blue-500" title="Black on White" aria-label="Switch to black on white theme">
      <span class="sr-only">Black on White</span>
    </button>
    <button onclick="switchTheme('yellow')" class="a11y-theme-btn w-10 h-10 rounded-lg border-4 border-black bg-yellow-400 focus-visible:ring-4 focus-visible:ring-blue-500" title="Black on Yellow" aria-label="Switch to black on yellow theme">
      <span class="sr-only">Black on Yellow</span>
    </button>
    <button onclick="switchTheme('cyan')" class="a11y-theme-btn w-10 h-10 rounded-lg border-4 border-black bg-cyan-400 focus-visible:ring-4 focus-visible:ring-blue-500" title="Black on Cyan" aria-label="Switch to black on cyan theme">
      <span class="sr-only">Cyan on Black</span>
    </button>
  </div>

  <!-- Accessibility Settings Panel -->
  <div class="a11y-settings-panel fixed top-20 right-4 z-40 bg-white border-4 border-black p-6 rounded-lg shadow-xl max-w-sm">
    <h2 class="text-xl font-bold mb-4 border-b-4 border-black pb-2">Accessibility Settings</h2>

    <!-- Font Size Control -->
    <div class="mb-6">
      <label class="block font-bold mb-3 text-lg" for="fontSize">Font Size</label>
      <div class="flex items-center gap-4">
        <button onclick="changeFontSize('decrease')" class="a11y-btn-secondary px-4 py-2 font-bold border-4 border-black rounded focus-visible:ring-4 focus-visible:ring-blue-500" aria-label="Decrease font size">A-</button>
        <span id="fontSizeDisplay" class="font-bold text-2xl">100%</span>
        <button onclick="changeFontSize('increase')" class="a11y-btn-secondary px-4 py-2 font-bold border-4 border-black rounded focus-visible:ring-4 focus-visible:ring-blue-500" aria-label="Increase font size">A+</button>
      </div>
    </div>

    <!-- Reduce Motion Toggle -->
    <div class="mb-6">
      <label class="flex items-center gap-4 cursor-pointer" for="reduceMotion">
        <input type="checkbox" id="reduceMotion" onchange="toggleReduceMotion()" class="a11y-checkbox w-7 h-7 border-4 border-black rounded focus-visible:ring-4 focus-visible:ring-blue-500">
        <span class="font-bold text-lg">Reduce Motion</span>
      </label>
    </div>

    <!-- High Contrast Toggle -->
    <div>
      <label class="flex items-center gap-4 cursor-pointer" for="highContrast">
        <input type="checkbox" id="highContrast" checked disabled class="a11y-checkbox w-7 h-7 border-4 border-black rounded">
        <span class="font-bold text-lg">High Contrast Mode</span>
      </label>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav class="a11y-nav bg-white border-b-4 border-black sticky top-0 z-30" role="navigation" aria-label="Main navigation">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-black">ENTERPRISE DASHBOARD</h1>
        <ul class="flex gap-6" role="menubar">
          <li role="none">
            <a href="javascript:void(0)" class="a11y-nav-link font-bold text-lg px-4 py-2 border-2 border-transparent hover:border-black focus-visible:ring-4 focus-visible:ring-blue-500 rounded" role="menuitem">Dashboard</a>
          </li>
          <li role="none">
            <a href="javascript:void(0)" class="a11y-nav-link font-bold text-lg px-4 py-2 border-2 border-transparent hover:border-black focus-visible:ring-4 focus-visible:ring-blue-500 rounded" role="menuitem">Reports</a>
          </li>
          <li role="none">
            <a href="javascript:void(0)" class="a11y-nav-link font-bold text-lg px-4 py-2 border-2 border-transparent hover:border-black focus-visible:ring-4 focus-visible:ring-blue-500 rounded" role="menuitem">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="container mx-auto px-6 py-12" role="main">

    <!-- Stats Grid -->
    <section aria-labelledby="stats-heading" class="mb-12">
      <h2 id="stats-heading" class="text-3xl font-black mb-8 pb-4 border-b-4 border-black">Key Metrics</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Stat Card 1 -->
        <article class="a11y-card bg-white border-4 border-black rounded-lg p-6 focus-within:ring-4 focus-within:ring-blue-500">
          <div class="flex items-start justify-between mb-4">
            <div>
              <p class="text-sm font-bold uppercase tracking-wider mb-2">Total Users</p>
              <p class="text-4xl font-black">24,891</p>
            </div>
            <div class="w-16 h-16 bg-black flex items-center justify-center rounded-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
          </div>
          <div class="flex items-center gap-2 text-base">
            <span class="font-black">↑ 12.5%</span>
            <span class="font-bold">from last month</span>
          </div>
        </article>

        <!-- Stat Card 2 -->
        <article class="a11y-card bg-white border-4 border-black rounded-lg p-6 focus-within:ring-4 focus-within:ring-blue-500">
          <div class="flex items-start justify-between mb-4">
            <div>
              <p class="text-sm font-bold uppercase tracking-wider mb-2">Revenue</p>
              <p class="text-4xl font-black">$48,392</p>
            </div>
            <div class="w-16 h-16 bg-black flex items-center justify-center rounded-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <div class="flex items-center gap-2 text-base">
            <span class="font-black">↑ 8.2%</span>
            <span class="font-bold">from last month</span>
          </div>
        </article>

        <!-- Stat Card 3 -->
        <article class="a11y-card bg-white border-4 border-black rounded-lg p-6 focus-within:ring-4 focus-within:ring-blue-500">
          <div class="flex items-start justify-between mb-4">
            <div>
              <p class="text-sm font-bold uppercase tracking-wider mb-2">Active Projects</p>
              <p class="text-4xl font-black">127</p>
            </div>
            <div class="w-16 h-16 bg-black flex items-center justify-center rounded-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
          </div>
          <div class="flex items-center gap-2 text-base">
            <span class="font-black">↓ 3.1%</span>
            <span class="font-bold">from last month</span>
          </div>
        </article>

      </div>
    </section>

    <!-- Data Visualization -->
    <section aria-labelledby="chart-heading" class="mb-12">
      <h2 id="chart-heading" class="text-3xl font-black mb-8 pb-4 border-b-4 border-black">Performance Overview</h2>
      <div class="a11y-card bg-white border-4 border-black rounded-lg p-8">
        <div class="space-y-6">

          <!-- Bar Chart Item 1 -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="font-bold text-xl">January</span>
              <span class="font-black text-2xl">92%</span>
            </div>
            <div class="w-full h-10 bg-gray-200 border-4 border-black rounded overflow-hidden" role="img" aria-label="January performance: 92%">
              <div class="h-full bg-black" style="width: 92%;"></div>
            </div>
          </div>

          <!-- Bar Chart Item 2 -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="font-bold text-xl">February</span>
              <span class="font-black text-2xl">85%</span>
            </div>
            <div class="w-full h-10 bg-gray-200 border-4 border-black rounded overflow-hidden" role="img" aria-label="February performance: 85%">
              <div class="h-full bg-black" style="width: 85%;"></div>
            </div>
          </div>

          <!-- Bar Chart Item 3 -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="font-bold text-xl">March</span>
              <span class="font-black text-2xl">78%</span>
            </div>
            <div class="w-full h-10 bg-gray-200 border-4 border-black rounded overflow-hidden" role="img" aria-label="March performance: 78%">
              <div class="h-full bg-black" style="width: 78%;"></div>
            </div>
          </div>

          <!-- Bar Chart Item 4 -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="font-bold text-xl">April</span>
              <span class="font-black text-2xl">96%</span>
            </div>
            <div class="w-full h-10 bg-gray-200 border-4 border-black rounded overflow-hidden" role="img" aria-label="April performance: 96%">
              <div class="h-full bg-black" style="width: 96%;"></div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section aria-labelledby="form-heading" class="mb-12">
      <h2 id="form-heading" class="text-3xl font-black mb-8 pb-4 border-b-4 border-black">Create New Task</h2>
      <form class="a11y-card bg-white border-4 border-black rounded-lg p-8">

        <!-- Task Name Input -->
        <div class="mb-8">
          <label for="taskName" class="block font-bold text-xl mb-3">Task Name<span class="text-red-600" aria-label="required">*</span></label>
          <input
            type="text"
            id="taskName"
            class="a11y-input w-full px-6 py-4 text-xl border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500 focus:outline-none"
            placeholder="Enter task name"
            required
            aria-required="true"
          >
        </div>

        <!-- Priority Select -->
        <div class="mb-8">
          <label for="priority" class="block font-bold text-xl mb-3">Priority<span class="text-red-600" aria-label="required">*</span></label>
          <select
            id="priority"
            class="a11y-input w-full px-6 py-4 text-xl border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500 focus:outline-none"
            required
            aria-required="true"
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <!-- Description Textarea -->
        <div class="mb-8">
          <label for="description" class="block font-bold text-xl mb-3">Description</label>
          <textarea
            id="description"
            rows="5"
            class="a11y-input w-full px-6 py-4 text-xl border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500 focus:outline-none"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <!-- Checkboxes -->
        <div class="mb-8 space-y-4">
          <label class="flex items-center gap-4 cursor-pointer">
            <input type="checkbox" class="a11y-checkbox w-7 h-7 border-4 border-black rounded focus-visible:ring-4 focus-visible:ring-blue-500">
            <span class="font-bold text-lg">Send email notification</span>
          </label>
          <label class="flex items-center gap-4 cursor-pointer">
            <input type="checkbox" class="a11y-checkbox w-7 h-7 border-4 border-black rounded focus-visible:ring-4 focus-visible:ring-blue-500">
            <span class="font-bold text-lg">Add to calendar</span>
          </label>
        </div>

        <!-- Submit Buttons -->
        <div class="flex gap-4 flex-wrap">
          <button type="submit" class="a11y-btn-primary px-8 py-4 text-xl font-black bg-black text-white border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500 hover:bg-gray-800">
            Create Task
          </button>
          <button type="button" class="a11y-btn-secondary px-8 py-4 text-xl font-black bg-white text-black border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500 hover:bg-gray-100">
            Cancel
          </button>
        </div>

      </form>
    </section>

    <!-- Interactive Elements Demo -->
    <section aria-labelledby="interactive-heading">
      <h2 id="interactive-heading" class="text-3xl font-black mb-8 pb-4 border-b-4 border-black">Interactive Elements</h2>
      <div class="a11y-card bg-white border-4 border-black rounded-lg p-8">

        <!-- Toggle Switches -->
        <div class="mb-8">
          <h3 class="font-bold text-2xl mb-6">Toggle Switches</h3>
          <div class="space-y-4">
            <label class="flex items-center gap-4 cursor-pointer">
              <div class="a11y-toggle relative w-20 h-10 border-4 border-black rounded-full focus-within:ring-4 focus-within:ring-blue-500">
                <input type="checkbox" class="sr-only peer" checked>
                <div class="absolute top-0 left-0 w-8 h-8 bg-black rounded-full transition-transform peer-checked:translate-x-10"></div>
              </div>
              <span class="font-bold text-lg">Enable notifications</span>
            </label>
            <label class="flex items-center gap-4 cursor-pointer">
              <div class="a11y-toggle relative w-20 h-10 border-4 border-black rounded-full focus-within:ring-4 focus-within:ring-blue-500">
                <input type="checkbox" class="sr-only peer">
                <div class="absolute top-0 left-0 w-8 h-8 bg-black rounded-full transition-transform peer-checked:translate-x-10"></div>
              </div>
              <span class="font-bold text-lg">Auto-save</span>
            </label>
          </div>
        </div>

        <!-- Button Group -->
        <div>
          <h3 class="font-bold text-2xl mb-6">Button Group</h3>
          <div class="flex gap-4 flex-wrap">
            <button class="a11y-btn-primary px-6 py-3 text-lg font-black bg-black text-white border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500">
              Primary
            </button>
            <button class="a11y-btn-secondary px-6 py-3 text-lg font-black bg-white text-black border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500">
              Secondary
            </button>
            <button class="a11y-btn-secondary px-6 py-3 text-lg font-black bg-gray-200 text-black border-4 border-black rounded-lg focus-visible:ring-4 focus-visible:ring-blue-500" disabled>
              Disabled
            </button>
          </div>
        </div>

      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="bg-white border-t-4 border-black mt-20 py-8" role="contentinfo">
    <div class="container mx-auto px-6 text-center">
      <p class="font-bold text-lg">Enterprise Dashboard © 2025 - WCAG AAA Compliant</p>
      <p class="font-bold mt-2">Contrast Ratio: 21:1 (AAA) | Keyboard Navigable | Screen Reader Friendly</p>
    </div>
  </footer>

  <script>
    // Theme Switcher
    function switchTheme(theme) {
      const body = document.querySelector('.a11y-body');
      const cards = document.querySelectorAll('.a11y-card');
      const nav = document.querySelector('.a11y-nav');
      const settingsPanel = document.querySelector('.a11y-settings-panel');

      // Remove all theme classes
      body.classList.remove('theme-default', 'theme-yellow', 'theme-cyan');

      if (theme === 'yellow') {
        body.classList.add('theme-yellow');
        body.style.backgroundColor = '#FFD700';
        body.style.color = '#000000';
        cards.forEach(card => {
          card.style.backgroundColor = '#FFD700';
          card.style.borderColor = '#000000';
        });
        if (nav) {
          nav.style.backgroundColor = '#FFD700';
          nav.style.borderColor = '#000000';
        }
        if (settingsPanel) {
          settingsPanel.style.backgroundColor = '#FFD700';
          settingsPanel.style.borderColor = '#000000';
        }
      } else if (theme === 'cyan') {
        body.classList.add('theme-cyan');
        body.style.backgroundColor = '#000000';
        body.style.color = '#00E5FF';
        cards.forEach(card => {
          card.style.backgroundColor = '#000000';
          card.style.color = '#00E5FF';
          card.style.borderColor = '#00E5FF';
        });
        if (nav) {
          nav.style.backgroundColor = '#000000';
          nav.style.color = '#00E5FF';
          nav.style.borderColor = '#00E5FF';
        }
        if (settingsPanel) {
          settingsPanel.style.backgroundColor = '#000000';
          settingsPanel.style.color = '#00E5FF';
          settingsPanel.style.borderColor = '#00E5FF';
        }

        // Update buttons for cyan theme
        document.querySelectorAll('.a11y-btn-primary').forEach(btn => {
          btn.style.backgroundColor = '#00E5FF';
          btn.style.color = '#000000';
          btn.style.borderColor = '#00E5FF';
        });
        document.querySelectorAll('.a11y-btn-secondary').forEach(btn => {
          btn.style.backgroundColor = '#000000';
          btn.style.color = '#00E5FF';
          btn.style.borderColor = '#00E5FF';
        });
      } else {
        // Default theme
        body.classList.add('theme-default');
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#000000';
        cards.forEach(card => {
          card.style.backgroundColor = '#FFFFFF';
          card.style.color = '#000000';
          card.style.borderColor = '#000000';
        });
        if (nav) {
          nav.style.backgroundColor = '#FFFFFF';
          nav.style.color = '#000000';
          nav.style.borderColor = '#000000';
        }
        if (settingsPanel) {
          settingsPanel.style.backgroundColor = '#FFFFFF';
          settingsPanel.style.color = '#000000';
          settingsPanel.style.borderColor = '#000000';
        }

        // Reset buttons
        document.querySelectorAll('.a11y-btn-primary').forEach(btn => {
          btn.style.backgroundColor = '#000000';
          btn.style.color = '#FFFFFF';
          btn.style.borderColor = '#000000';
        });
        document.querySelectorAll('.a11y-btn-secondary').forEach(btn => {
          btn.style.backgroundColor = '#FFFFFF';
          btn.style.color = '#000000';
          btn.style.borderColor = '#000000';
        });
      }
    }

    // Font Size Control
    let currentFontSize = 100;
    function changeFontSize(action) {
      if (action === 'increase' && currentFontSize < 150) {
        currentFontSize += 10;
      } else if (action === 'decrease' && currentFontSize > 80) {
        currentFontSize -= 10;
      }
      document.documentElement.style.fontSize = currentFontSize + '%';
      document.getElementById('fontSizeDisplay').textContent = currentFontSize + '%';
    }

    // Reduce Motion Toggle
    function toggleReduceMotion() {
      const isChecked = document.getElementById('reduceMotion').checked;
      if (isChecked) {
        document.body.style.setProperty('--animation-duration', '0.01s');
      } else {
        document.body.style.setProperty('--animation-duration', '0.3s');
      }
    }

    // Keyboard navigation enhancement
    document.addEventListener('DOMContentLoaded', function() {
      // Add visible focus indicators
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          document.body.classList.add('user-is-tabbing');
        }
      });

      document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
      });
    });
  </script>

</body>
</html>
`;

export const accessibilityHighContrastFullPageStyles = `
/* Accessibility High Contrast Styles */

/* Base Styles */
.a11y-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.6;
  font-size: 16px;
}

/* Focus Visible Ring */
*:focus-visible {
  outline: 4px solid #3B82F6 !important;
  outline-offset: 2px;
}

/* Cards */
.a11y-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.a11y-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Buttons */
.a11y-btn-primary,
.a11y-btn-secondary {
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 900;
}

.a11y-btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.a11y-btn-secondary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.a11y-btn-primary:active:not(:disabled),
.a11y-btn-secondary:active:not(:disabled) {
  transform: translateY(0);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Inputs */
.a11y-input {
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.a11y-input:hover {
  border-color: #374151;
}

/* Checkbox */
.a11y-checkbox {
  cursor: pointer;
  accent-color: #000000;
  transition: all 0.2s ease;
}

.a11y-checkbox:checked {
  background-color: #000000;
}

/* Navigation */
.a11y-nav-link {
  transition: all 0.2s ease;
}

.a11y-nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Theme Buttons */
.a11y-theme-btn {
  cursor: pointer;
  transition: all 0.2s ease;
}

.a11y-theme-btn:hover {
  transform: scale(1.1);
}

.a11y-theme-btn:active {
  transform: scale(0.95);
}

/* Toggle Switch */
.a11y-toggle input:checked + div {
  background-color: #000000;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* High Contrast Theme Adjustments */
.theme-yellow * {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.theme-cyan * {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Keyboard Navigation Indicator */
body.user-is-tabbing *:focus {
  outline: 4px solid #3B82F6 !important;
  outline-offset: 2px;
}
`;

export const accessibilityStyles = [
  {
    id: 'modern-accessibility-high-contrast',
    title: 'styles.accessibilityHighContrast.title',
    description: 'styles.accessibilityHighContrast.description',
    demoHTML: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>High Contrast Accessibility</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            background: #FFFFFF;
            color: #000000;
            line-height: 1.6;
            padding: 24px;
          }

          .hc-container {
            max-width: 600px;
            margin: 0 auto;
          }

          .hc-title {
            font-size: 24px;
            font-weight: 900;
            color: #000000;
            border-bottom: 4px solid #000000;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }

          /* Stat Card */
          .stat-card {
            border: 4px solid #000000;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
            background: #FFFFFF;
          }

          .stat-label {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 8px;
          }

          .stat-value {
            font-size: 32px;
            font-weight: 900;
            margin-bottom: 8px;
          }

          .stat-trend {
            font-size: 14px;
            font-weight: 700;
            color: #008000;
            margin-bottom: 0;
          }

          /* Form */
          .hc-form {
            margin-bottom: 24px;
          }

          .form-label {
            display: block;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
          }

          .required {
            color: #FF0000;
            margin-left: 4px;
          }

          .form-input {
            width: 100%;
            padding: 16px;
            font-size: 16px;
            font-weight: 700;
            color: #000000;
            background: #FFFFFF;
            border: 4px solid #000000;
            border-radius: 8px;
            margin-bottom: 24px;
          }

          .form-input:focus {
            outline: none;
            box-shadow: 0 0 0 4px #0000FF;
          }

          .form-input::placeholder {
            color: #666666;
            font-weight: 400;
          }

          /* Buttons */
          .button-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }

          button {
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 900;
            border: 4px solid #000000;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.15s ease;
            min-height: 48px;
            font-family: inherit;
          }

          .btn-primary {
            background: #000000;
            color: #FFFFFF;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
          }

          .btn-primary:focus {
            outline: none;
            box-shadow: 0 0 0 4px #0000FF;
          }

          .btn-secondary {
            background: #FFFFFF;
            color: #000000;
          }

          .btn-secondary:hover {
            background: #F0F0F0;
            transform: translateY(-2px);
          }

          .btn-secondary:focus {
            outline: none;
            box-shadow: 0 0 0 4px #0000FF;
          }

          .btn-disabled {
            background: #FFFFFF;
            color: #000000;
            opacity: 0.5;
            cursor: not-allowed;
          }

          .btn-disabled:hover {
            transform: none;
          }
        </style>
      </head>
      <body>
        <div class="hc-container">
          <h2 class="hc-title">Accessibility Dashboard</h2>

          <!-- Stat Card -->
          <article class="stat-card" role="region" aria-labelledby="stat-title">
            <p id="stat-title" class="stat-label">Total Users</p>
            <p class="stat-value">24,891</p>
            <p class="stat-trend">↑ 12% from last month</p>
          </article>

          <!-- Form -->
          <form class="hc-form">
            <label for="task-input" class="form-label">
              Task Name
              <span class="required" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="task-input"
              class="form-input"
              aria-required="true"
              placeholder="Enter task name"
            >
          </form>

          <!-- Button Group -->
          <div class="button-group" role="group" aria-label="Form actions">
            <button class="btn-primary" type="button">Submit</button>
            <button class="btn-secondary" type="button">Cancel</button>
            <button class="btn-disabled" type="button" disabled>Disabled</button>
          </div>
        </div>
      </body>
      </html>
    `,
    customStyles: '',
    fullPageHTML: accessibilityHighContrastFullPageHTML,
    fullPageStyles: accessibilityHighContrastFullPageStyles,
    // Accessibility High Contrast StylePrompt（較長版，貼近無障礙设計說明）
    stylePrompt: {
      'zh-CN': `角色：你是一位专注于无障碍与高对比设计的 UI 设计师，需要为企业仪表板提供一套满足 WCAG AA/AAA 标准的高对比主题。

场景定位：
此风格适用于需要在不同视觉能力和使用环境下保持可读性的后台系统、运营面板或报告仪表板。用户包括低视力用户、需要高对比度模式的专业人士以及在强光环境下工作的人员（例如医院、工厂或控制室）。界面必须在键盘操作、屏幕阅读器和高对比色彩三方面表现稳定可靠。

视觉设计理念：
Accessibility High Contrast 风格以「黑白强对比 + 粗边框 + 大字号」为核心视觉语言。背景与文字之间保持极高对比度（例如白底黑字、黑底亮色字），不依赖细腻渐变或轻微明度差别来表达层级。模块之间的分隔依靠 4px 实线边框和清晰的标题分区，所有重要信息都通过字体、尺寸和版面直接表达，而不是依靠色彩微妙变化。

材质与质感：
画面呈现的是一种类似打印报告或高对比纸面原型的视觉质感：几乎没有柔和阴影，也很少使用装饰性渐变。卡片、按钮、输入框等元素都有 4px 的黑色边框，给人「轮廓非常清晰」「区域一眼可辨」的感觉。背景多为纯白或高亮单色（如黄、青等）主题变体，但内容主区域仍维持高对比文本与边界。整体风格宁可略显「硬朗」，也不牺牲可读性与可预测性。

交互体验：
交互反馈必须明显且可通过视觉与键盘双重感知。所有互动元素都需要清晰的 hover 和 focus-visible 状态：悬停时可以通过背景轻微反转或边框加粗来提示，焦点状态则必须使用高对比的外描边（例如蓝色 4px 外框）以配合键盘导航。按钮的禁用状态通过降低不透明度与去除 hover 效果实现，但仍需确保文字在视觉上可识别。动效使用极少，避免对对运动敏感的用户造成负担。

氛围营造：
整体氛围是坚实、严肃、可依赖的工具界面，而非强调视觉美感的营销页面。粗线条、强对比和大字号一起构成「一切都清清楚楚写在你面前」的感受。虽然视觉上略显「硬朗」，但能让不同视觉条件下的用户都快速读懂内容并安全操作。此风格适合作为「高对比模式」的参考实现，也可以作为教学示例帮助团队理解无障碍设计的具体落地方式。`,
      'en-US': `Role: You are a UI designer focused on accessibility and high‑contrast themes, creating a dashboard style that meets WCAG AA/AAA requirements.

Scenario Positioning:
This style targets back‑office systems, operational dashboards, and reporting tools that must remain legible across a wide range of visual abilities and environments. Users include people with low vision, those who prefer high‑contrast mode, and professionals working under harsh lighting (hospitals, factories, control rooms). The interface must behave predictably for keyboard users and screen‑reader users while maintaining strong color contrast.

Visual Design Philosophy:
Accessibility High Contrast relies on “strong black‑and‑white contrast + thick borders + large type”. Background and text pairs use very high contrast (white on black or black on white/yellow/cyan); hierarchy is expressed with typography, spacing, and structural borders rather than subtle gradients. Sections are clearly separated with 4px solid borders and bold headings so users can quickly map the layout, even without relying on color nuances.

Materials & Textures:
The aesthetic resembles a printed high‑contrast report or a wireframe brought to life: minimal shadows, no decorative gradients, and highly explicit outlines. Cards, buttons, and inputs are enclosed by 4px black borders, giving them unmistakable edges. Backgrounds may switch between different high‑contrast themes (e.g., black on yellow, cyan on black), but the main content area always maintains clear contrast between text and surface. The style favors robustness and clarity over visual softness.

Interaction Experience:
Feedback must be unambiguous and perceivable both visually and via keyboard. Interactive elements require distinct hover and focus-visible states: hover can invert background tones or slightly increase border emphasis; focus should always add a strong high‑contrast outline (for example, a 4px blue ring with offset). Disabled states reduce opacity and remove hover effects while keeping labels recognizable. Motion is kept minimal to avoid issues for motion‑sensitive users; emphasis is placed on predictability and stability.

Atmosphere:
The resulting atmosphere is that of a serious, dependable tool rather than a marketing site. Thick lines, strong contrast, and large text communicate that clarity and safety are the priority. While it may feel visually “harder” than typical modern UIs, it allows a broader range of users to understand and operate the system quickly. This style can serve both as a practical high‑contrast theme and as an educational reference for teams learning to implement accessible design in real products.`
    },
    // 模板級 CustomPrompt（AI 生成用）
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个 **Accessibility High Contrast（高对比无障碍）** 风格的企业仪表板界面，重点保证对比度、可读性和键盘可访问性。

**核心设计要求**

1. **色彩与对比度**
   - 主配色为黑白高对比：白底黑字或黑底亮色文字。
   - 对比度需满足 WCAG AA 甚至 AAA（文本对背景 7:1 以上）。
   - 可以提供黑白 / 黑黄 / 黑青等主题按钮切换。

2. **粗边框与清晰分区**
   - 使用 4px 实线黑色边框勾勒卡片、按钮和输入框。
   - 区块标题下方加粗实线分隔（如 4px 黑线），使结构一眼可见。

3. **大字号与字重**
   - 标题：\`text-2xl~3xl font-black\`
   - 正文与标签：\`text-base~lg font-bold\`，避免过细字体。

4. **键盘导航与焦点样式**
   - 所有可点击元素必须有清晰的 \`:focus-visible\` 样式，例如：
     \`\`\`css
     *:focus-visible {
       outline: 4px solid #3B82F6;
       outline-offset: 2px;
     }
     \`\`\`
   - 布局需完全可通过键盘（Tab、Shift+Tab、Enter、Space）操作。

5. **布局与模块**
   - 典型布局包含：
     - 顶部导航（粗边框 + 大字号菜单）。
     - 关键指标卡片（Total Users 等）。
     - 条形图 / 进度条模块。
     - 大字号表单区（任务名称、优先级、描述）。
     - 按钮组展示主要 / 次要 / 禁用状态。

**重要提示**
- 不要仅用颜色传达状态，需搭配文字或图标。
- 悬停与聚焦状态必须明显可区分，且对低视力用户也易察觉。
- 动效应简洁，可提供「减少动效」选项以照顾对运动敏感用户。`,
      'en-US': `Create an **Accessibility High Contrast** enterprise dashboard using TailwindCSS, focusing on contrast, legibility, and keyboard accessibility.

**Core Design Requirements**

1. **Color and Contrast**
   - Primary scheme: black and white with very high contrast.
   - Aim for WCAG AA/AAA contrast (7:1+ for text vs background).
   - Provide theme toggles such as black-on-white, black-on-yellow, and cyan-on-black.

2. **Bold Borders and Clear Sections**
   - Use 4px solid black borders around cards, inputs, and buttons.
   - Emphasize section headers with thick bottom borders to clarify structure.

3. **Large Type and Strong Weight**
   - Titles: \`text-2xl–3xl font-black\`.
   - Body and labels: \`text-base–lg font-bold\` for easy scanning.

4. **Keyboard Navigation and Focus**
   - Every interactive element must have a visible \`:focus-visible\` ring (for example a 4px blue outline with offset).
   - Layout must be fully navigable with the keyboard only, without relying on pointer devices.

5. **Layout and Modules**
   - Include: main nav, key metric cards, performance bars, a large form section, and a button group.
   - Use solid black fills for progress bars to convey values clearly, without subtle gradients.

**Important Notes**
- Do not rely on color alone for status; pair colors with text or icons.
- Focus and hover states must be obvious and clearly distinct.
- Consider a “reduce motion” toggle for users sensitive to animation.`
    },
    previews: [
      {
        id: 'accessibility-high-contrast',
        name: 'styles.accessibilityHighContrast.preview.name',
        type: 'full',
        html: accessibilityHighContrastFullPageHTML,
        styles: accessibilityHighContrastFullPageStyles,
        description: 'styles.accessibilityHighContrast.preview.description',
        features: [],
        colorScheme: 'styles.accessibilityHighContrast.preview.colorScheme'
      }
    ]
  }
];
