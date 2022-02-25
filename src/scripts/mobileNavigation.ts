function MobileNavigation() {
  const { body } = document;
  const nav = document.querySelector('[data-navigation]');
  const navTrigger = document.querySelector('[data-navigation-trigger]');

  function toggleNavigation() {
    body.classList.toggle('overflow-hidden');

    if (!nav || !navTrigger) return;

    const isNavOpen = !nav.classList.contains('invisible');

    nav.classList.toggle('invisible');
    nav.classList.toggle('-translate-y-full');
    navTrigger.setAttribute('aria-expanded', `${isNavOpen}`);
  }

  function detectResize() {
    const delayResize = setTimeout(() => {
      if (window.innerWidth < 768 && navTrigger) {
        navTrigger.addEventListener('click', toggleNavigation);
      }
      clearTimeout(delayResize);
    }, 500);
  }

  function init() {
    window.addEventListener('resize', detectResize);

    if (window.innerWidth < 768 && navTrigger) {
      navTrigger.addEventListener('click', toggleNavigation);
    }
  }

  return {
    init
  }
}

export default MobileNavigation;
