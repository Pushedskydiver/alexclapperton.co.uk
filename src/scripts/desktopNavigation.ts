import obj from './navigation'

function desktopNavigation() {
  function addActiveClass(event: any) {
    if (event.target && event.target.nodeName === 'A') {
      obj.activeNavItem.style.left = `${event.target.offsetLeft}px`;
      obj.activeNavItem.style.width = `${event.target.clientWidth}px`;
    }
  }

  function removeActiveClass() {
    const { activeNavItem, nav } = obj;
    const navItemActiveClass = nav.querySelectorAll('.nav__item--active');

    if (navItemActiveClass.length > 0) {
      const navItemActive = navItemActiveClass[0];

      activeNavItem.style.left = `${navItemActive.firstChild.offsetLeft}px`;
      activeNavItem.style.width = `${navItemActive.firstChild.clientWidth}px`;
    } else {
      activeNavItem.style.left = '0px';
      activeNavItem.style.width = '0px';
    }
  }

  function toggleActiveClass() {
    if (window.innerWidth >= 768) {
      removeActiveClass();
      obj.navItems.forEach((item: any) => {
        item.parentNode.addEventListener('mouseover', addActiveClass);
        item.parentNode.addEventListener('mouseleave', removeActiveClass);
        item.addEventListener('focus', addActiveClass);
      });
    }
  }

  function detectResize() {
    const delayResize = setTimeout(() => {
      toggleActiveClass();
      clearTimeout(delayResize);
    }, 500);
  }

  function init() {
    toggleActiveClass();
    window.addEventListener('resize', detectResize);
  }

  return {
    init
  }
}

export default desktopNavigation();
