import obj from './navigation'

function mobileNavigation() {
  function toggleNavigation() {
    obj.body.classList.toggle('overflow-hidden');
    obj.nav.classList.toggle('invisible');
    obj.nav.classList.toggle('-translate-y-full');

    const isNavOpen = !obj.nav.classList.contains('invisible');

    obj.navTrigger.setAttribute('aria-expanded', isNavOpen);
  }

  function detectResize() {
    const delayResize = setTimeout(() => {
      if (window.innerWidth < 768) {
        obj.navTrigger.addEventListener('click', toggleNavigation);
      }
      clearTimeout(delayResize);
    }, 500);
  }

  function init() {
    window.addEventListener('resize', detectResize);

    if (window.innerWidth < 768) {
      obj.navTrigger.addEventListener('click', toggleNavigation);
    }
  }

  return {
    init
  }
}

export default mobileNavigation();
