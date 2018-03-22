import nav from './navigation'

module.exports = (function() {

  function addActiveClass({target}) {
    nav.activeNavItem.style.left = `${target.offsetLeft}px`;
    nav.activeNavItem.style.width = `${target.clientWidth}px`;
  }

  function removeActiveClass() {
    const navItemActiveClass = document.querySelectorAll('.nav__item--active');

    if (navItemActiveClass.length > 0) {
      const navItemActive = navItemActiveClass[0];

      nav.activeNavItem.style.left = `${navItemActive.firstChild.offsetLeft}px`;
      nav.activeNavItem.style.width = `${navItemActive.firstChild.clientWidth}px`;
    } else {
      nav.activeNavItem.style.left = '0px';
      nav.activeNavItem.style.width = '0px';
    }
  }

  function detectResize() {
    const delayResize = setTimeout(() => {
      if (window.innerWidth >= 768) {
        removeActiveClass();
        nav.navItem.forEach(item => {
          item.parentNode.addEventListener('mouseover', addActiveClass);
          item.parentNode.addEventListener('mouseleave', removeActiveClass);
          item.addEventListener('focus', addActiveClass);
        });
      }
      clearTimeout(delayResize);
    }, 500);
  }

  function init() {
    window.addEventListener('resize', detectResize);

    if (window.innerWidth >= 768) {
      removeActiveClass();
      nav.nav.removeChild(nav.logo);
      nav.navItem.forEach(item => {
        item.parentNode.addEventListener('mouseover', addActiveClass);
        item.parentNode.addEventListener('mouseleave', removeActiveClass);
        item.addEventListener('focus', addActiveClass);
      });
    }
  }

  return {
    init: init
  };
}());
