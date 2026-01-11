import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { clearLoadersCache } from './data/components/loaders.js'

// Google Analytics 4 initialization (must be before Web Vitals)
import { initGA4 } from './utils/analytics.js'

// Web Vitals monitoring - tracks Core Web Vitals for SEO
import { initWebVitals } from './utils/webVitals.js'

if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.__clearLoadersCache = clearLoadersCache
}

// OPTIMIZATION: Defer GA4 and Web Vitals initialization to not block first paint
// Uses requestIdleCallback to run when browser is idle, improving LCP
const initAnalyticsDeferred = () => {
  initGA4()
  initWebVitals()
}

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    // Modern browsers: run when idle
    requestIdleCallback(initAnalyticsDeferred, { timeout: 2000 })
  } else {
    // Fallback: run after first paint via setTimeout
    setTimeout(initAnalyticsDeferred, 0)
  }
}

const rootEl = document.getElementById('root');

// OPTIMIZATION: Only use StrictMode in development
// StrictMode causes double-rendering which impacts production performance
const Wrapper = import.meta.env.DEV ? StrictMode : Fragment;

createRoot(rootEl).render(
  <Wrapper>
    <App />
  </Wrapper>
);
