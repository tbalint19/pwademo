self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('my-static').then(cache => {
      return cache.addAll([
        "./",
      ])
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  )
})
