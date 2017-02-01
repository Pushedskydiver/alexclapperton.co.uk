(function($) {

    'use strict';

    var AC = function() {
        this.VERSION = "1.1.0";
        this.AUTHOR = "Alex Clapperton";
        this.SUPPORT = "hi@alexclapperton.co.uk";

        this.pageScrollElement = 'html, body';
        this.$body = $('body');

        this.setUserOS();
        this.setUserAgent();
    }

    // Set environment vars
    AC.prototype.setUserOS = function() {
        var OSName = "";
        if (navigator.appVersion.indexOf("Win") != -1) OSName = "windows";
        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "mac";
        if (navigator.appVersion.indexOf("X11") != -1) OSName = "unix";
        if (navigator.appVersion.indexOf("Linux") != -1) OSName = "linux";

        this.$body.addClass(OSName);
    }

    AC.prototype.setUserAgent = function() {
        if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
            this.$body.addClass('mobile');
        } else {
            this.$body.addClass('desktop');
            if (navigator.userAgent.match(/MSIE 9.0/)) {
                this.$body.addClass('ie9');
            }
        }
    }

    // AC util functions
    AC.prototype.getUserAgent = function() {
        return $('body').hasClass('mobile') ? "mobile" : "desktop";
    }

    $.AC = new AC();
    $.AC.Constructor = AC;

})(window.jQuery);


(function($) {

    'use strict';


    // ======================================
    //    Smooth Scroll to element
    // ======================================
  	function init_scroll_to() {
      var $scrollTo = $('.scroll-to');
    	$scrollTo.on('click', function(event){
    		var $elemOffsetTop = $(this).data('offset-top');
    		$('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1500, easing:'easeInOutCubic', mobileHA: false});
    		event.preventDefault();
    	});
  	}


    // ======================================
    //    Smooth scroll to top button
    // ======================================
    function init_smooth_scroll_top() {
      // Animated Scroll to Top Button
      var $scrollTop = $('.scroll-top');
      if ($scrollTop.length > 0) {
        $(window).on('scroll', function(){
          if ($(window).scrollTop() > 600) {
            $scrollTop.addClass('scroll-top--isVisible');
          } else {
            $scrollTop.removeClass('scroll-top--isVisible');
          }
        });
        $scrollTop.on('click', function(e){
          e.preventDefault();
          $('html').velocity("scroll", { offset: 0, duration: 1500, easing:'easeInOutCubic', mobileHA: false });
        });
      };
    }


    // ======================================
    //    Mobile navigation
    // ======================================
    function init_mobile_nav() {
      var $topMenu = $('.mobile-menu'),
          $bottomMenu = $('.mobile-bar__link--main'),
          $close = $('.nav__close');

      $topMenu.on('click', function() {
        $('.nav').addClass('nav--show');
      });

      $bottomMenu.on('click', function() {
        $('.nav').toggleClass('nav--show');
      });

      $close.on('click', function() {
        $('.nav').removeClass('nav--show');
      });
    }


    // ==============================================
    //    Active navigation links
    // ==============================================
    function init_active_nav() {
      if(window.location.pathname == '/') {
        $('.nav__link--home').addClass('nav__link--active');
      }
      if(window.location.href.indexOf('my-work/') > -1) {
        $('.nav__link--work').addClass('nav__link--active');
      }
      if(window.location.pathname == '/about/') {
        $('.nav__link--about').addClass('nav__link--active');
      }
      if(window.location.href.indexOf('blog/') > -1) {
        $('.nav__link--blog').addClass('nav__link--active');
      }
      if(window.location.pathname == '/contact/') {
        $('.nav__link--contact').addClass('nav__link--active');
      }
    }


    // ==============================================
    //    Interactive particles | Homepage banner
    // ==============================================
    function init_particles() {
      particlesJS.load('particles-js', 'particlesjs-config.json', function() {
      });
    }


    // ==============================================
    //    Typing animation | Homepage banner
    // ==============================================
    function init_ityped() {
      ityped.init('.type', {
        strings:['Alex Clapperton', 'a Front-end Web Developer', 'an Apple fanatic'],
        startDelay: 200,
        backDelay: 1000,
        loop: true
      });
    }


    // ==============================================
    //    Button line length
    // ==============================================
    function init_btn_line() {
      $(document).ready(function(){
        $(".btn__line").each(function(){
          $(this).css('width', $(this).parent().width() - $(this).parent().find('.btn').width() - 60);
        });
      });
    }


    // ==============================================
    //    Portfolio grid & filter
    // ==============================================
    function init_portfolio() {
      var $grid = $('.site-portfolio__grid'),
          $grid_filter = $('.site-portfolio__filter'),
          $grid_selectors = $('.btn-portfolio'),
          $grid_items = $('.site-portfolio__item');

      $grid_items.addClass('site-portfolio__item--isotope');

      $(window).load(function(){
        $grid.imagesLoaded( function(){
          $grid.isotope({
            itemSelector: '.site-portfolio__item',
            percentPosition: true,
            layoutMode: 'fitRows'
          });
          $grid_selectors.on( 'click', function() {
            $grid_selectors.removeClass('btn-portfolio--active');
            $(this).addClass('btn-portfolio--active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
          });
        });
      });
    }


    // ==============================================
    //    Initialise plugins
    // ==============================================
    init_scroll_to();
    init_mobile_nav();
    init_active_nav();
    init_ityped();
    init_btn_line();
    //init_contact_form();

    //if(window.location.pathname == '/my-work/') {
      //init_portfolio();
    //}

    if (!$('body').hasClass('mobile')) {
      init_particles();
      //init_smooth_scroll_top();
    }

})(window.jQuery);
