(function() {

    'use strict';


    // ======================================
    //    Smooth scroll to top button
    // ======================================
    function init_smooth_scroll_top() {
      var ELEMENT_scrollBtn = document.querySelector('[data-scroll-top]');

      var CLASS_scrollBtnVisible = 'scroll__btn--visible;';

      window.addEventListener('scroll', function(){
        if (window.scrollTop() > 600) {
          ELEMENT_scrollBtn.classList.add(CLASS_scrollBtnVisible);
        } else {
          ELEMENT_scrollBtn.classList.remove(CLASS_scrollBtnVisible);
        }
      });

      ELEMENT_scrollBtn.addEventListener('click', function() {
        scrollTo(document.body, 0, 100);
      });

      function scrollTo(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 2;

        setTimeout(function() {
          element.scrollTop = element.scrollTop + perTick;
          scrollTo(element, to, duration - 2);
        }, 10);
      }
    }


    // ==============================================
    //    Active navigation links
    // ==============================================
    // function init_active_nav() {
    //   if(window.location.pathname == '/') {
    //     $('.nav__link--home').addClass('nav__link--active');
    //   }
    //   if(window.location.href.indexOf('my-work/') > -1) {
    //     $('.nav__link--work').addClass('nav__link--active');
    //   }
    //   if(window.location.pathname == '/about/') {
    //     $('.nav__link--about').addClass('nav__link--active');
    //   }
    //   if(window.location.href.indexOf('blog/') > -1) {
    //     $('.nav__link--blog').addClass('nav__link--active');
    //   }
    //   if(window.location.pathname == '/contact/') {
    //     $('.nav__link--contact').addClass('nav__link--active');
    //   }
    // }


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

    //if(window.location.pathname == '/my-work/') {
      //init_portfolio();
    //}

    if (window.outerWidth > 768) {
      init_smooth_scroll_top();
    }

})();
