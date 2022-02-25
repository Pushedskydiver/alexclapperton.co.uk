function swRegister() {
  const applicationServerKey =
    'BBZfIKcG1E4t_KR-whw7Z6hRBiRi4vC216bdtN1mrXNdohzQ26XnYdZh8eaLOWmHagBLja5nuLSoLd_XPTEbYCM';
  const pushBanner = document.querySelector('[data-push-banner]');
  const pushButton = document.querySelector('[data-push-button]');

  function b64EncodeUnicode(str: string) {
    return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
      return String.fromCharCode(parseInt(p1, 16))
    }))
  }

  function urlB64ToUint8Array(base64String: string) {
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

  function changePushStatus(status: boolean) {
    if (!pushButton) return;

    pushButton.setAttribute('data-subscribed', `${status}`);

    if (status) {
      pushButton.textContent = 'Disable notifications';
    } else {
      pushButton.textContent = 'Enable notifications';
    }
  }

  function isPushSupported() {
    const pushInWindow = 'PushManager' in window
    const permissionDenied = Notification.permission === 'denied';

    if (permissionDenied || !pushInWindow || !pushBanner) return;

    pushBanner.classList.remove('hidden');

    navigator.serviceWorker.ready
      .then(registration => {
        registration.pushManager.getSubscription()
          .then(subscription => {
            subscription ? changePushStatus(true) : changePushStatus(false);
          })
          .catch(error => error);
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
            console.log(error, 'subscribePush');

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
            if (!subscription) {
              return;
            }

            subscription.unsubscribe()
              .then(() => {
                deleteSubscriptionID(subscription.endpoint);
                changePushStatus(false);
              })
              .catch(error => {
                console.log(error, 'unsubscribePush');

                changePushStatus(false);
                return error;
              });
          })
          .catch(error => error);
      })
  }

  function saveSubscriptionID(
    endpoint: string,
    key: ArrayBuffer | null,
    auth: ArrayBuffer | null
  ) {
    if (!key || !auth) return

    const unit8KeyStr = new TextDecoder().decode(new Uint8Array(key));
    const unit8AuthStr = new TextDecoder().decode(new Uint8Array(auth));
    const encodedKey = b64EncodeUnicode(unit8KeyStr);
    const encodedAuth = b64EncodeUnicode(unit8AuthStr);
    const subscription = endpoint.substring(endpoint.lastIndexOf('/') + 1, endpoint.length);

    fetch('/api/new-push-user', {
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

  function deleteSubscriptionID(endpoint: string) {
    const subscription = endpoint.substring(endpoint.lastIndexOf('/') + 1, endpoint.length);

    fetch(`/api/delete-push-user/${subscription}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  function togglePush() {
    if (!pushButton) return;

    const isSubscribed = pushButton.getAttribute('data-subscribed') === 'true';

    isSubscribed ? unsubscribePush() : subscribePush();
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => isPushSupported())
        .catch(error => error);
    }
  }

  function init() {
    registerServiceWorker();

    if (pushBanner && pushButton) {
      pushButton.addEventListener('click', togglePush);
    }
  }

  return {
    init
  }
}

export default swRegister;
