import nav from './navigation'

module.exports = (function() {

  function removeNavigationClasses() {
    nav.nav.classList.remove('nav--open');
    nav.navList.classList.remove('nav__list--unload');
  }

  function navigationAnimation() {
    if (nav.nav.classList.contains('nav--open')) {
      nav.navList.classList.add('nav__list--unload');

      const navAnimationTimer = setTimeout(() => {
        removeNavigationClasses();
        clearTimeout(navAnimationTimer);
      }, 850);
    }
  }

  function toggleNavigation() {
    navigationAnimation();

    nav.body.classList.toggle('body--nav-open');
    nav.html.classList.toggle('body--nav-open');
    nav.nav.classList.add('nav--open');
    nav.navTrigger.classList.toggle('button--nav-active');

    if (window.location.pathname === '/') {
      nav.logo.classList.toggle('logo--white');
    }
  }

  function preventScrollWhenNavigationOpen(event) {
    if (nav.nav.classList.contains('nav--open')) {
      event.preventDefault();
    }
  }

  function init() {
    if (window.innerWidth < 768) {
      nav.navTrigger.addEventListener('click', toggleNavigation);
      nav.nav.addEventListener('touchmove', preventScrollWhenNavigationOpen);
    }
  }

  return {
    init: init
  };
}());
