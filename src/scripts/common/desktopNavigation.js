import obj from './navigation'

function addActiveClass({ target }) {
  obj.activeNavItem.style.left = `${target.offsetLeft}px`;
  obj.activeNavItem.style.width = `${target.clientWidth}px`;
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
    obj.navItem.forEach(item => {
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

function initDesktopNav() {
  toggleActiveClass();
  window.addEventListener('resize', detectResize);
}

export default initDesktopNav;
