function MobileNavigation() {
  const { body } = document;
  const nav = document.querySelector('[data-navigation]');
  const navTrigger = document.querySelector('[data-navigation-trigger]');

  function toggleNavigation() {
    body.classList.toggle('overflow-hidden');

    if (!nav || !navTrigger) return;

    const isNavOpen = navTrigger.getAttribute('aria-expanded') === 'true';
    const navHasOpacity = nav.classList.contains('opacity-0');

    if (navHasOpacity) nav.classList.remove('opacity-0');

    if (isNavOpen) {
      nav.classList.remove('translate-y-0');
      nav.classList.add('-translate-y-full');
    } else {
      nav.classList.add('translate-y-0');
      nav.classList.remove('-translate-y-full');
    }

    nav.classList.toggle('invisible');
    navTrigger.setAttribute('aria-expanded', `${!isNavOpen}`);
  }

  function resizeCallback(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.contentRect.width < 768 && navTrigger) {
        navTrigger.addEventListener('click', toggleNavigation);
      };
    });
  }

  function init() {
    const resizeObserver = new ResizeObserver(resizeCallback);

    resizeObserver.observe(body);
  }

  return {
    init
  }
}

export default MobileNavigation;
