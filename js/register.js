if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('my-service-worker.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
    registration.update()
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}
