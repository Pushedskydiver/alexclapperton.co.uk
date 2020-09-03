interface NavigationInterface {
  html: HTMLElement;
  body: HTMLElement;
  logo: HTMLLinkElement | any;
  nav: HTMLElement | any;
  navList: HTMLUListElement | any;
  navItems: Array<HTMLElement>;
  navTrigger: HTMLButtonElement | any;
  activeNavItem: HTMLSpanElement | any
}

const obj: NavigationInterface = {
  html: document.documentElement,
  body: document.body,
  logo: document.querySelector('[data-navigation-logo]'),
  nav: document.querySelector('[data-navigation]'),
  navList: document.querySelector('[data-navigation-list]'),
  navItems: Array.from(document.querySelectorAll('[data-nav-item]')),
  navTrigger: document.querySelector('[data-navigation-trigger]'),
  activeNavItem: document.querySelector('[data-nav-item-active]')
};

function handleActiveClassPerPage(item: any) {
  const pathname = window.location.pathname;
  const isCurrentpage = pathname.indexOf(item.getAttribute('href')) === 0;

  if (isCurrentpage && item.parentNode) {
    item.parentNode.classList.add('nav__item--active');
  }
}

obj.navItems.forEach(handleActiveClassPerPage);
obj.body.classList.add('js');

export default obj;
