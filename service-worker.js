self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('wildfire-log-cache').then(function(cache) {
      return cache.addAll([
        '/wildfire-log/',
        '/wildfire-log/index.html',
        '/wildfire-log/main.js',
        '/wildfire-log/manifest.json'
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