import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { clearLoadersCache } from './data/components/loaders.js'

if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.__clearLoadersCache = clearLoadersCache
}

const rootEl = document.getElementById('root');
const strictModeFlag = import.meta.env.VITE_STRICT_MODE;
const enableStrictMode =
  typeof strictModeFlag === 'string'
    ? strictModeFlag === 'true'
    : import.meta.env.DEV;

const RootApp = enableStrictMode ? (
  <StrictMode>
    <App />
  </StrictMode>
) : (
  <App />
);
createRoot(rootEl).render(RootApp)
