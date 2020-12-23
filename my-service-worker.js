self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-static-cache').then(function(cache) {
      console.log("cache", cache);
      return cache.add(
          'index.html'
      ).then(r => caches.open('my-static-cache').then((c)=>console.log(c))).catch(e => console.log(e));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function(e) {
      console.log("error", e);
      console.log("event", event);
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log("self", self);
});
