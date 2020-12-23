self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-static-cache').then(function(cache) {
      console.log("cache", cache);
      return cache.addAll(
        [
          '/js/calculate.js',
          '/index.html'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log("event", event);
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log("self", self);
});
