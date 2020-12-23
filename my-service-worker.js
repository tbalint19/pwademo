let x = 5
let y
let z

const myF = () => console.log("declared myf!!!")

self.addEventListener('install', function(event) {
    console.log("installed!!!!");
    y = 6
});

self.addEventListener('activate', function(event) {
  console.log("runs!!!!");
  z = 7
  setInterval(() => console.log("haho"), 1000)
});
