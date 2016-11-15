(function(window) {

var hostname = window.location.hostname === 'localhost' ? null : window.location.hostname;

  /**
  * @function init
  * @memberOf notices
  */
  var init = function init() {
    hideNotices();
    bindEvents();
  };

  /**
  * @function hideNotices
  * @memberOf notices
  */
  var hideNotices = function hideNotices() {
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
  var bindEvents = function bindEvents() {
    var buttons = document.getElementsByClassName('js-close-notice');

    for (var i = 0; i < buttons.length; ++i) {
      buttons[i].addEventListener('click', closeNotice);
      buttons[i].addEventListener('click', setCookie);
    }
  };

  /**
  * @function closeNotice
  * @memberof notices
  */
  var closeNotice = function closeNotice(button) {
    var notice = button.target.parentNode;

    notice.style.display = 'none';
  };

  /**
  * @function setCookie
  * @memberof notices
  * @todo set cookie with docCookies
  */
  var setCookie = function setCookie(button) {
    var noticeName = button.target.parentNode.classList[1].replace('support-notice--', '');

    docCookies.setItem(noticeName + 'NoticeDismissed', true, 'Fri, 31 Dec 9999 23:59:59 GMT', '/', hostname);
  };

  init();
})(window);
