import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { clearLoadersCache } from './data/components/loaders.js'

if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.__clearLoadersCache = clearLoadersCache
}

const rootEl = document.getElementById('root');

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
