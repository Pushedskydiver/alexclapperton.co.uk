import nav from './navigation'

module.exports = (function() {

  function addActiveClass({target}) {
    nav.activeNavItem.style.left = `${target.offsetLeft}px`;
    nav.activeNavItem.style.width = `${target.clientWidth}px`;
  }

  function removeActiveClass() {
    const navItemActiveClass = nav.nav.querySelectorAll('.nav__item--active');

    if (navItemActiveClass.length > 0) {
      const navItemActive = navItemActiveClass[0];

      nav.activeNavItem.style.left = `${navItemActive.firstChild.offsetLeft}px`;
      nav.activeNavItem.style.width = `${navItemActive.firstChild.clientWidth}px`;
    } else {
      nav.activeNavItem.style.left = '0px';
      nav.activeNavItem.style.width = '0px';
    }
  }

  function toggleActiveClass() {
    if (window.innerWidth >= 768) {
      removeActiveClass();
      nav.navItem.forEach(item => {
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
    init: init
  };
}());
