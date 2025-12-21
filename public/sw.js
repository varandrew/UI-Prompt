/**
 * Service Worker for UI Style Prompt
 *
 * OPTIMIZATION Phase 3: Implements aggressive caching strategies
 * to improve performance and enable offline access.
 *
 * Cache Strategy:
 * - App shell: Cache-first (long-term cache)
 * - Data files: Network-first with fallback (stays fresh)
 * - Assets: Cache-first with versioning
 * - Preview content: Stale-while-revalidate (instant + fresh)
 */

const CACHE_VERSION = 'v2';
const CACHE_NAME = `ui-style-${CACHE_VERSION}`;

// Cache categories
const CACHE_SHELL = `${CACHE_NAME}-shell`;
const CACHE_DATA = `${CACHE_NAME}-data`;
const CACHE_ASSETS = `${CACHE_NAME}-assets`;
const CACHE_PREVIEW = `${CACHE_NAME}-preview`;
const CURRENT_CACHES = [CACHE_SHELL, CACHE_DATA, CACHE_ASSETS, CACHE_PREVIEW];

// URLs to cache immediately on install
const SHELL_URLS = [
  '/',
  '/index.html'
];

/**
 * Install event - cache app shell
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_SHELL)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('ui-style-') && !CURRENT_CACHES.includes(name))
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * Determine cache strategy based on request URL
 * @param {Request} request
 * @returns {string} Strategy name
 */
function getCacheStrategy(request) {
  const url = new URL(request.url);

  // App shell and HTML - Cache first
  if (url.pathname === '/' || url.pathname.endsWith('.html')) {
    return 'cache-first';
  }

  // Data files - Network first
  if (url.pathname.includes('/data/')) {
    return 'network-first';
  }

  // JS/CSS assets - Cache first with version check
  if (url.pathname.match(/\.(js|css|woff2?|ttf|eot)$/)) {
    return 'cache-first';
  }

  // Preview content - Stale while revalidate
  if (url.pathname.includes('/content/styles/')) {
    return 'stale-while-revalidate';
  }

  // Default: network first
  return 'network-first';
}

/**
 * Cache-first strategy
 * Best for: App shell, assets with versioned filenames
 */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

/**
 * Network-first strategy
 * Best for: Data files that change frequently
 */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    const fetchRequest = new Request(request, { cache: 'no-store' });
    const response = await fetch(fetchRequest, {
      // Add timeout to avoid long waits
      signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined
    });

    if (response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch {
    // Network failed, try cache
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }

    return new Response('Offline and not cached', { status: 503 });
  }
}

/**
 * Stale-while-revalidate strategy
 * Best for: Preview content - show cached version immediately, update in background
 */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  // Fetch in background and update cache
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  // Return cached immediately, or wait for network
  return cached || fetchPromise || new Response('Not available', { status: 503 });
}

/**
 * Fetch event - route to appropriate cache strategy
 */
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other protocols
  if (!event.request.url.startsWith('http')) {
    return;
  }

  const strategy = getCacheStrategy(event.request);
  let cacheName = CACHE_SHELL;

  // Determine cache bucket
  if (event.request.url.includes('/data/')) {
    cacheName = CACHE_DATA;
  } else if (event.request.url.includes('/content/styles/')) {
    cacheName = CACHE_PREVIEW;
  } else if (event.request.url.match(/\.(js|css|woff2?|ttf|eot)$/)) {
    cacheName = CACHE_ASSETS;
  }

  // Route to strategy
  if (strategy === 'cache-first') {
    event.respondWith(cacheFirst(event.request, cacheName));
  } else if (strategy === 'network-first') {
    event.respondWith(networkFirst(event.request, cacheName));
  } else if (strategy === 'stale-while-revalidate') {
    event.respondWith(staleWhileRevalidate(event.request, cacheName));
  }
});

/**
 * Message event - allow cache clearing from client
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('ui-style-'))
            .map((name) => caches.delete(name))
        );
      })
    );
  }
});
