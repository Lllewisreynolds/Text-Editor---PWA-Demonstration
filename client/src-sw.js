const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Initial offline safety net
precacheAndRoute(self.__WB_MANIFEST);
// 'CacheFirst' prioritises getting resources from the cache first before falling back on the network
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      // Only caches successful responses
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      // Setting maximum age for cached items to ensure perpetual content refresh
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});
// Pre-emptively fetches & caches our index.html & root (/) to expedite future visits when offline
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});
// Targets navigation requests - when user clicks - to reduce network dependency
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implements asset caching - targets requests for stylesheets, scripts and web workers
registerRoute(
  ({ request }) => ["style", "script", "worker"].includes(request.destination),
  /* 'Stale' refers to the serving of a potentially older version of the cache,
  before fetching newer version from the network in the background to update */
  new StaleWhileRevalidate({
    cacheName: "asset-cache",
    plugins: [
      // This plugin will cache responses with these headers to a maximum-age of 30 days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

