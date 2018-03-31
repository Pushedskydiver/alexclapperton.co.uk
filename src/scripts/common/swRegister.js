module.exports = (function() {

  const fabPushElement = document.querySelector('[data-push]');

  function changePushStatus(status) {
    fabPushElement.dataset.checked = status;
    fabPushElement.checked = status;

    if (status) {
      fabPushElement.classList.remove('button--primary');
      fabPushElement.classList.add('button--secondary');
      fabPushElement.textContent = 'Disable push notifications';
    } else {
      fabPushElement.classList.add('button--primary');
      fabPushElement.classList.remove('button--secondary');
      fabPushElement.textContent = 'Enable push notifications';
    }
  }

  function isPushSupported() {
    if (Notification.permission === 'denied') {
      return;
    }

    if (!('PushManager' in window)) {
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

      registration.pushManager
      .subscribe({
        userVisibleOnly: true
      })
      .then(subscription => {
        saveSubscriptionID(subscription);
        changePushStatus(true);
        return subscription;
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
          deleteSubscriptionID(subscription);
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

  function saveSubscriptionID(subscription) {
    const subscriptionId = subscription.endpoint.split('gcm/send/')[1];

    fetch('http://localhost:3001/api/users/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id : subscriptionId })
    });
  }

  function deleteSubscriptionID(subscription) {
    const subscriptionId = subscription.endpoint.split('gcm/send/')[1];

    fetch('http://localhost:3001/api/user/' + subscriptionId, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  function togglePush() {
    const isSubscribed = fabPushElement.dataset.checked === 'true';

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
      })
      .catch(error => {
        return error;
      });
    }
  }

  function init() {
    registerServiceWorker();
    isPushSupported();

    if (fabPushElement !== null) {
      fabPushElement.addEventListener('click', togglePush);
    }
  }

  return {
    init: init
  };
}());
