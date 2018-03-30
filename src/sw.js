const cacheName = 'alexclapperton:0036';
const cacheFiles = [
  '/',
  '/about-me/',
  '/contact/',
  '/offline/',
  '/articles/how-to-use-grid-and-flexbox-together/',
  '/articles/working-with-grid-the-holy-grail-of-css-layout/',
  '/articles/from-https-to-css-what-i-have-changed-on-my-website/',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => cache.addAll(cacheFiles))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        // Grab the asset from SW cache.
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => caches.match('/offline/'))
  );
});

// Empty out any caches that don’t match the ones listed.
self.addEventListener('activate', event => {
  const cacheWhitelist = ['alexclapperton:0036'];

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

//Adding `push` event listener
self.addEventListener('push', event => {
  const title = 'Push notification demo';
  const body = {
    'body': 'click to return to application',
    'tag': 'demo',
    'icon': '/favicons/favicon-192x192.png',
    'badge': '/favicons/favicon-192x192.png'
  };

  event.waitUntil(self.registration.showNotification(title, body));
});

//Adding `notification` click event listener
self.addEventListener('notificationclick', event => {
  const url = 'http://localhost:3001';

  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then(clients => {
        for (let i = 0; i < clients.length; i++) {
          const client = clients[i];

          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }

        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
      .catch(error => {
        return error;
      })
  );
});
