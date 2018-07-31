import obj from './navigation'

function removeNavigationClasses() {
  obj.nav.classList.remove('nav--open');
  obj.navList.classList.remove('nav__list--unload');
}

function navigationAnimation() {
  if (obj.nav.classList.contains('nav--open')) {
    obj.navList.classList.add('nav__list--unload');

    const navAnimationTimer = setTimeout(() => {
      removeNavigationClasses();
      clearTimeout(navAnimationTimer);
    }, 850);
  }
}

function toggleNavigation() {
  navigationAnimation();

  obj.body.classList.toggle('body--nav-open');
  obj.html.classList.toggle('body--nav-open');
  obj.nav.classList.add('nav--open');
  obj.navTrigger.classList.toggle('button--nav-active');
}

function preventScrollWhenNavigationOpen(event) {
  if (obj.nav.classList.contains('nav--open')) {
    event.preventDefault();
  }
}

function detectResize() {
  const delayResize = setTimeout(() => {
    if (window.innerWidth < 768) {
      obj.navTrigger.addEventListener('click', toggleNavigation);
      obj.nav.addEventListener('touchmove', preventScrollWhenNavigationOpen, { passive: true });
    }
    clearTimeout(delayResize);
  }, 500);
}

function initMobileNav() {
  window.addEventListener('resize', detectResize);

  if (window.innerWidth < 768) {
    obj.navTrigger.addEventListener('click', toggleNavigation);
    obj.nav.addEventListener('touchmove', preventScrollWhenNavigationOpen, { passive: true });
  }
}

export default initMobileNav;
