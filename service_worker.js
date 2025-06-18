self.addEventListener('install', function(e) {
  console.log('Service Worker Installed');
  e.waitUntil(
    caches.open('exercise-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/monday.html',
        '/tuesday.html',
        '/wednesday.html',
        '/thursday.html',
        '/friday.html',
        '/saturday.html',
        '/apple-touch-icon.png',
        '/playstore.png',
        
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
