module.exports = (function() {

  const applicationServerKey = 'BBZfIKcG1E4t_KR-whw7Z6hRBiRi4vC216bdtN1mrXNdohzQ26XnYdZh8eaLOWmHagBLja5nuLSoLd_XPTEbYCM';
  const pushBanner = document.querySelector('[data-push]');
  const pushButton = document.querySelector('[data-push-button]');

  function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function changePushStatus(status) {
    pushButton.dataset.checked = status;
    pushButton.checked = status;

    if (status) {
      pushButton.classList.remove('button--primary');
      pushButton.classList.add('button--secondary');
      pushButton.textContent = 'Disable notifications';
    } else {
      pushButton.classList.add('button--primary');
      pushButton.classList.remove('button--secondary');
      pushButton.textContent = 'Enable notifications';
    }
  }

  function isPushSupported() {
    if (Notification.permission === 'denied') {
      return;
    }

    if (!('PushManager' in window)) {
      pushBanner.classList.add('push-strip--hide');
      return;
    }

    navigator.serviceWorker.ready
    .then(registration => {
      registration.pushManager.getSubscription()
      .then(subscription => {
        subscription ? changePushStatus(true) : changePushStatus(false);
      })
      .catch(error => {
        return error;
      });
    });
  }

  function subscribePush() {
    navigator.serviceWorker.ready
    .then(registration => {
      if (!registration.pushManager) {
        return false;
      }

      registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(applicationServerKey)
      })
      .then(subscription => {
        const endpoint = subscription.endpoint;
        const key = subscription.getKey('p256dh');
        const auth = subscription.getKey('auth');

        saveSubscriptionID(endpoint, key, auth);
        changePushStatus(true);
      })
      .catch(error => {
        changePushStatus(false);
        return error;
      });

      return registration;
    });
  }

  function unsubscribePush() {
    navigator.serviceWorker.ready
    .then(registration => {
      registration.pushManager.getSubscription()
      .then(subscription => {
        if(!subscription) {
          return;
        }

        subscription.unsubscribe()
        .then(() => {
          deleteSubscriptionID(subscription.endpoint);
          changePushStatus(false);
        })
        .catch(error => {
          return error;
        });
      })
      .catch(error => {
        return error;
      });
    })
  }

  function saveSubscriptionID(endpoint, key, auth) {
    const subscription = endpoint.substring(endpoint.lastIndexOf('/') + 1, endpoint.length);
    const encodedKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
    const encodedAuth = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));

    fetch('http://localhost:3001/api/users/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: subscription,
        publicKey: encodedKey,
        auth: encodedAuth,
        notificationEndPoint: endpoint
      })
    });
  }

  function deleteSubscriptionID(endpoint) {
    const subscription = endpoint.substring(endpoint.lastIndexOf('/') + 1, endpoint.length);

    fetch('http://localhost:3001/api/user/' + subscription, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  function togglePush() {
    const isSubscribed = pushButton.dataset.checked === 'true';

    isSubscribed ? unsubscribePush() : subscribePush();
  }

  function checkForPageUpdate(registration) {
    registration.addEventListener('updatefound', () => {
      if (navigator.serviceWorker.controller) {
        const installingSW = registration.installing;

        installingSW.onstatechange = () => {
          switch(installingSW.state) {
            case 'installed':
              break;
            case 'redundant':
              throw new Error('The installing service worker became redundant.');
          }
        }
      }
    });
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(registration => {
        checkForPageUpdate(registration);
        isPushSupported();
      })
      .catch(error => {
        return error;
      });
    }
  }

  function init() {
    registerServiceWorker();

    if (pushBanner !== null) {
      pushButton.addEventListener('click', togglePush);
    }
  }

  return {
    init: init
  };
}());
