(function(event) {

    'use strict';

    window.obj = {};


    // ==============================================
    //    Configuration
    // ==============================================
    obj.config = {
      elements: {
        body: 'body',
        logo: '[data-logo]',
        nav: '[data-navigation]',
        navList: '[data-navigation-list]',
        navItem: '[data-nav-item]',
        navItemActive: '[data-nav-item-active]',
        navTrigger: '[data-navigation-trigger]',
        fade: '[data-fade]',
        fadeDelay: 'data-fade-delay',
        image: '[data-lazy]',
        infoBlockPicture: '[data-info-block-picture]'
      },
      classes: {
        bodyNavOpen: 'body--nav-open',
        logoWhite: 'logo--white',
        navOpen: 'nav--open',
        navListUnload: 'nav__list--unload',
        navItemActive: 'nav__item--active',
        navTriggerActive: 'button--nav-active',
        hideElement: 'hide',
        fadeInElement: 'fade-in',
        lazyload: 'lazyload__image--lazy',
        lazyloaded: 'lazyload__image--loaded',
        imageLoaded: 'lazyload--image-loaded'
      }
    };


    // ==============================================
    //    Initialise
    // ==============================================
    obj.init = event => {
      obj.html = document.documentElement;
      obj.body = document.querySelector(obj.config.elements.body);
      obj.logo = document.querySelector(obj.config.elements.logo);
      obj.nav = document.querySelector(obj.config.elements.nav);
      obj.navItem = document.querySelectorAll(obj.config.elements.navItem);
      obj.navItemActive = document.querySelector(obj.config.elements.navItemActive);
      obj.navList = document.querySelector(obj.config.elements.navList);
      obj.mobileNavTrigger = document.querySelector(obj.config.elements.navTrigger);
      obj.fade = document.querySelectorAll(obj.config.elements.fade);
      obj.image = document.querySelectorAll(obj.config.elements.image);
      obj.infoBlockPicture = document.querySelector(obj.config.elements.infoBlockPicture);
      obj.attachMethods();
      obj.attachListeners();
    };


    // ==============================================
    //    Attach methods
    // ==============================================
    obj.attachMethods = () => {
      obj.lazyloadConfig();
      obj.fadeElementsOnScroll();
      obj.handleAciveNavItem();
      obj.activeMenuMouseLeave();
    };


    // ==============================================
    //    Attach event listeners
    // ==============================================
    obj.attachListeners = event => {
      window.addEventListener('scroll', obj.fadeElementsOnScroll);
      window.addEventListener('resize', obj.handleLazyImageSizes);

      Array.from(obj.image).map(el => {
        el.addEventListener('lazyloaded', el => obj.lazyLoadImages(el));
        el.addEventListener('lazybeforeunveil', el => obj.loadImages(el));
      });

      if (window.innerWidth < 768) {
        obj.mobileNavTrigger.addEventListener('click', obj.triggerMobileNav);
        obj.nav.addEventListener('touchmove', obj.preventMobileNavScroll);
      } else {
        Array.from(obj.navItem).map(el => {
          el.parentNode.addEventListener('mouseover', obj.activeMenuMouseOver);
          el.parentNode.addEventListener('mouseleave', obj.activeMenuMouseLeave);
          el.addEventListener('focus', obj.activeMenuFocus);
        });
      }
    };


    // ==============================================
    //    Lazy load configuration
    // ==============================================
    obj.lazyloadConfig = () => {
      window.lazySizesConfig.lazyClass = obj.config.classes.lazyload;
      window.lazySizesConfig.loadedClass = obj.config.classes.lazyloaded;
      window.lazySizesConfig.expand = 50;
    };


    // ==============================================
    //    Fade in elements when in viewport
    // ==============================================
    obj.fadeElementsOnScroll = () => {
      Array.from(obj.fade).map(el => {
        const objectPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (objectPosition - windowHeight <= 0) {
          el.classList.remove(obj.config.classes.hideElement);
          el.classList.add(obj.config.classes.fadeInElement);
          el.style.transitionDelay = el.getAttribute(obj.config.elements.fadeDelay);
        }
      });
    };


    // ==============================================
    //    Add active class to correct nav item
    // ==============================================
    obj.handleAciveNavItem = () => {
      Array.from(obj.navItem).map(el => {
        if (window.location.pathname.indexOf(el.getAttribute('href')) === 0) {
          el.classList.add(obj.config.classes.navLinkctive);
          el.parentNode.classList.add(obj.config.classes.navItemActive);
        }
      });
    };


    // ==============================================
    //    Mobile menu trigger
    // ==============================================
    obj.triggerMobileNav = () => {
      obj.triggerMobileNavAnimation();
      obj.body.classList.toggle(obj.config.classes.bodyNavOpen);
      obj.html.classList.toggle(obj.config.classes.bodyNavOpen);
      obj.nav.classList.add(obj.config.classes.navOpen);
      obj.mobileNavTrigger.classList.toggle(obj.config.classes.navTriggerActive);

      if (window.location.pathname === '/') {
        obj.logo.classList.toggle(obj.config.classes.logoWhite);
      }
    };

    obj.triggerMobileNavAnimation = () => {
      if (obj.nav.classList.contains(obj.config.classes.navOpen)) {
        obj.navList.classList.add(obj.config.classes.navListUnload);

        obj.navAnimationTimer = setTimeout(() => {
          obj.nav.classList.remove(obj.config.classes.navOpen);
          obj.navList.classList.remove(obj.config.classes.navListUnload);
          clearTimeout(obj.navAnimationTimer);
        }, 850);
      }
    };

    obj.preventMobileNavScroll = ev => {
      if (obj.nav.classList.contains(obj.config.classes.navOpen)) {
        ev.preventDefault();
      }
    };


    // ==============================================
    //    Desktop nav item on hover/focus
    // ==============================================
    obj.activeMenuMouseOver = el => {
      el = el.currentTarget;

      obj.navItemActive.style.left = `${el.firstChild.offsetLeft}px`;
      obj.navItemActive.style.width = `${el.firstChild.clientWidth}px`;
    };

    obj.activeMenuFocus = el => {
      el = el.currentTarget;

      obj.navItemActive.style.left = `${el.offsetLeft}px`;
      obj.navItemActive.style.width = `${el.clientWidth}px`;
    };

    obj.activeMenuMouseLeave = () => {
      const navItemActiveClass = document.querySelectorAll(`.${obj.config.classes.navItemActive}`);

      if (navItemActiveClass.length > 0) {
        const activeNavItem = navItemActiveClass[0];

        obj.navItemActive.style.left = `${activeNavItem.firstChild.offsetLeft}px`;
        obj.navItemActive.style.width = `${activeNavItem.firstChild.clientWidth}px`;
      } else {
        obj.navItemActive.style.left = '0px';
        obj.navItemActive.style.width = '0px';
      }
    };


    // ==============================================
    //    Resize lazy images on orientation
    // ==============================================
    obj.handleLazyImageSizes = () => {
      Array.from(obj.image).map(el => {
        obj.delayImageResize = setTimeout(() => {
          const width = el.naturalWidth;
          const height = el.naturalHeight;
          const ratio = (Math.round(height) / Math.round(width) * 100).toFixed(2);

          el.parentNode.style.paddingTop = ratio.replace('.00', '') + '%';

          if (window.innerWidth >= 992 && document.body.contains(obj.infoBlockPicture)) {
            obj.infoBlockPicture.style.paddingTop = '';
          }

          clearTimeout(obj.delayImageResize);
        }, 10);
      });
    }


    // ==============================================
    //    Lazy load images
    // ==============================================
    obj.lazyLoadImages = el => {
      el = el.currentTarget;

      const width = el.naturalWidth;
      const height = el.naturalHeight;
      const ratio = (Math.round(height) / Math.round(width) * 100).toFixed(2);

      el.parentNode.style.paddingTop = ratio.replace('.00', '') + '%';

      if (window.innerWidth >= 992 && document.body.contains(obj.infoBlockPicture)) {
        obj.infoBlockPicture.style.paddingTop = '';
      }
    };

    obj.loadImages = el => {
      el = el.currentTarget;

      el.parentNode.classList.add(obj.config.classes.imageLoaded);
      el.removeEventListener('lazybeforeunveil', obj.loadImages);
    };

    window.addEventListener('DOMContentLoaded', obj.init(event));
})();
