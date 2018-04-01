const cacheName = 'alexclapperton:0038';
const cacheFiles = [
  '/',
  '/about-me/',
  '/contact/',
  '/offline/',
  '/articles/how-to-use-grid-and-flexbox-together/',
  '/articles/working-with-grid-the-holy-grail-of-css-layout/',
  '/articles/from-https-to-css-what-i-have-changed-on-my-website/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
    .open(cacheName)
    .then((cache) => cache.addAll(cacheFiles))
  );
});

// Adding `fetch` event listener
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
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
  const cacheWhitelist = ['alexclapperton:0038'];

  event.waitUntil(
    caches.keys()
    .then((cacheNames) => {
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

// Adding `push` event listener
self.addEventListener('push', event => {
  const title = 'New article published';
  const body = {
    'body': 'Press to see the latest article',
    'icon': '/favicons/favicon-192x192.png',
    'badge': '/favicons/favicon-192x192.png'
  };

  event.waitUntil(self.registration.showNotification(title, body));
});

// Adding `notification` click event listener
self.addEventListener('notificationclick', event => {
  const page = '/articles/';
  const url = new URL(page, self.location.origin).href;

  event.notification.close();

  const promiseChain = clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  })
  .then((windowClients) => {
    let matchingClient = null;

    for (let i = 0; i < windowClients.length; i++) {
      const client = windowClients[i];

      if (client.url === url) {
        matchingClient = client;
        break;
      }
    }

    if (matchingClient) {
      return matchingClient.focus();
    } else {
      return clients.openWindow(url);
    }
  })
  .catch(error => {
    return error;
  })

  event.waitUntil(promiseChain);
});
