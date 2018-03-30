module.exports = (function() {

  function init() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(() => {
          // Successfully registered the Service Worker
          //console.log('Service Worker registration successful with scope: ', registration.scope);
        }).catch(() => {
          // Failed to register the Service Worker
          //console.log('Service Worker registration failed: ', err);
        });
      });
    }
  }

  return {
    init: init
  };
}());
