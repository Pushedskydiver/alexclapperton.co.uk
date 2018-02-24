module.exports = (function() {

  const obj = {};

  obj.html = document.documentElement;
  obj.body = document.body;
  obj.logo = document.querySelector('[data-navigation-logo]');
  obj.nav = document.querySelector('[data-navigation]');
  obj.navItem = document.querySelectorAll('[data-nav-item]');
  obj.navList = document.querySelector('[data-navigation-list]');
  obj.navTrigger = document.querySelector('[data-navigation-trigger]');
  obj.activeNavItem = document.querySelector('[data-nav-item-active]');

  function handleActiveClassPerPage(item) {
    if (window.location.pathname.indexOf(item.getAttribute('href')) === 0) {
      item.parentNode.classList.add('nav__item--active');
    }
  }

  obj.navItem.forEach(item => handleActiveClassPerPage(item));

  return obj;
}());
