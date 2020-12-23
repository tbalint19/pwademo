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
    fetch(event.request).catch(() => {
      return caches.match(event.request)
    })
  )
})
