(function(window) {

const hostname = window.location.hostname === 'localhost' ? null : window.location.hostname;

  /**
  * @function init
  * @memberOf notices
  */
  const init = function init() {
    hideNotices();
    bindEvents();
  };

  /**
  * @function hideNotices
  * @memberOf notices
  */
  const hideNotices = function hideNotices() {
    if (!docCookies.hasItem('browserNoticeDismissed')) {
      document.body.className += ' browser-notice-active';
    }

    if (!docCookies.hasItem('cssNoticeDismissed')) {
      document.body.className += ' css-notice-active';
    }
  };

  /**
  * @function bindEvents
  * @memberOf notices
  */
  const bindEvents = function bindEvents() {
    const buttons = document.getElementsByClassName('js-close-notice');

    for (let i = 0; i < buttons.length; ++i) {
      buttons[i].addEventListener('click', closeNotice);
      buttons[i].addEventListener('click', setCookie);
    }
  };

  /**
  * @function closeNotice
  * @memberof notices
  */
  const closeNotice = function closeNotice(button) {
    const notice = button.target.parentNode;

    notice.style.display = 'none';
  };

  /**
  * @function setCookie
  * @memberof notices
  * @todo set cookie with docCookies
  */
  const setCookie = function setCookie(button) {
    const noticeName = button.target.parentNode.classList[1].replace('support-notice--', '');

    docCookies.setItem(noticeName + 'NoticeDismissed', true, 'Fri, 31 Dec 9999 23:59:59 GMT', '/', hostname);
  };

  init();
})(window);
