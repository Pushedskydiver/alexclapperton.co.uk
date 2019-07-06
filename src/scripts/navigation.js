const obj = {
  html: document.documentElement,
  body: document.body,
  logo: document.querySelector('[data-navigation-logo]'),
  nav: document.querySelector('[data-navigation]'),
  navItem: document.querySelectorAll('[data-nav-item]'),
  navList: document.querySelector('[data-navigation-list]'),
  navTrigger: document.querySelector('[data-navigation-trigger]'),
  activeNavItem: document.querySelector('[data-nav-item-active]')
};

function handleActiveClassPerPage(item) {
  if (window.location.pathname.indexOf(item.getAttribute('href')) === 0) {
    item.parentNode.classList.add('nav__item--active');
  }
}

obj.navItem.forEach(item => handleActiveClassPerPage(item));
obj.body.classList.add('js');

export default obj;
