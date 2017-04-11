(function() {

    'use strict';


    // ======================================
    //    Smooth scroll to top button
    // ======================================
    function init_scroll_top() {
      var ELEMENT_scrollBtn = document.querySelector('[data-scroll-top]');

      var CLASS_scrollBtnVisible = 'scroll-top--visible';

      window.addEventListener('scroll', function(){
        if (window.pageYOffset > 600) {
          ELEMENT_scrollBtn.classList.add(CLASS_scrollBtnVisible);
          return;
        }
        ELEMENT_scrollBtn.classList.remove(CLASS_scrollBtnVisible);
      });
    }


    // ==============================================
    //    Active navigation links
    // ==============================================
    function init_active_nav() {
      var ELEMENT_navItemHome = document.querySelector('[data-item-home]'),
          ELEMENT_navItemAbout = document.querySelector('[data-item-about]'),
          ELEMENT_navItemPortfolio = document.querySelector('[data-item-portfolio]'),
          ELEMENT_navItemBlog = document.querySelector('[data-item-blog]'),
          ELEMENT_navItemContact = document.querySelector('[data-item-contact]');

      var CLASS_navItemActive = 'nav__item--active';

      if (window.location.pathname == '/') {
        ELEMENT_navItemHome.classList.add('nav__item--active');
      }
      if (window.location.href.indexOf('about-me/') > -1) {
        ELEMENT_navItemAbout.classList.add('nav__item--active');
      }
      if (window.location.pathname == '/my-work/') {
        ELEMENT_navItemPortfolio.classList.add('nav__item--active');
      }
      if (window.location.href.indexOf('blog/') > -1) {
        ELEMENT_navItemBlog.classList.add('nav__item--active');
      }
      if (window.location.pathname == '/contact/') {
        ELEMENT_navItemContact.classList.add('nav__item--active');
      }
    }


    // ==============================================
    //    Portfolio grid & filter
    // ==============================================
    function init_portfolio() {
      var ELEMENT_grid = document.querySelector('[data-portfolio]'),
          ELEMENT_item = document.querySelector('[data-portfolio-item]'),
          ELEMENT_filter = document.querySelector('[data-filter-block]');

      var SELECTOR_btn = document.querySelector('[data-filter-btn]'),
          SELECTOR_iso;

      var CLASS_filterBtnActive = 'filter__btn--active';

      imagesLoaded(ELEMENT_grid, function() {
        SELECTOR_iso = new Isotope(ELEMENT_grid, {
          itemSelector: ELEMENT_item,
          percentPosition: true,
          layoutMode: 'fitRows'
        });
        SELECTOR_btn.addEventListener('click', function() {
          SELECTOR_btn.classList.remove(CLASS_filterBtnActive);
          this.classList.add(CLASS_filterBtnActive);
          var SELECTOR_filter = this.getAttribute('data-filter');
          ELEMENT_grid.isotope({filter: SELECTOR_filter});
        });
      });
    }


    // ==============================================
    //    Initialise plugins
    // ==============================================
    init_active_nav();

    if (window.outerWidth > 768) {
      init_scroll_top();
    }

    //if(window.location.pathname == '/my-work/') {
      //init_portfolio();
    //}

})();
