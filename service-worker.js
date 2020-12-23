self.addEventListener('install', function(event) {
    console.log("installed!!!!");
});

self.addEventListener('activate', function(event) {
  console.log("runs!!!!");
  setInterval(() => console.log("haho"))
});
