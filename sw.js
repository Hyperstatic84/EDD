// Service Worker minimal pour permettre l'installation PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Stratégie simple de passage pour le contenu
  event.respondWith(fetch(event.request));
});