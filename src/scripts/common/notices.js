import cookies from 'cookies'

function notices() {
  const hostname = window.location.hostname === 'localhost' ? null : window.location.hostname;

  function hideNotices() {
    if (!cookies.docCookies.hasItem('browserNoticeDismissed')) {
      document.body.className += ' browser-notice-active';
    }

    if (!cookies.docCookies.hasItem('cssNoticeDismissed')) {
      document.body.className += ' css-notice-active';
    }
  }

  function bindEvents() {
    const buttons = document.getElementsByClassName('js-close-notice');

    for (let i = 0; i < buttons.length; ++i) {
      buttons[i].addEventListener('click', closeNotice);
      buttons[i].addEventListener('click', setCookie);
    }
  }

  function closeNotice(button) {
    const notice = button.target.parentNode;

    notice.style.display = 'none';
  }

  function setCookie(button) {
    const noticeName = button.target.parentNode.classList[1].replace('support-notice--', '');

    cookies.docCookies.setItem(noticeName + 'NoticeDismissed', true, 'Fri, 31 Dec 9999 23:59:59 GMT', '/', hostname);
  }

  function init() {
    hideNotices();
    bindEvents();
  }

  return {
    init
  }
}

export default notices();
