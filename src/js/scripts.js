(function($) {

    'use strict';

    var AC = function() {
        this.VERSION = "1.1.0";
        this.AUTHOR = "Alex Clapperton";
        this.SUPPORT = "alexclapperton@nuttersons.co.uk";

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
    //    Dummy link
    // ======================================
    function init_dummy_link() {
      // Disable default link behavior for dummy links that have href='#'
      var $emptyLink = $('a[href=#]');
      $emptyLink.on('click', function(e){
        e.preventDefault();
      });
    }


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
      var $scrollTop = $('.scroll-to-top-btn');
      if ($scrollTop.length > 0) {
        $(window).on('scroll', function(){
          if ($(window).scrollTop() > 600) {
            $scrollTop.addClass('visible');
          } else {
            $scrollTop.removeClass('visible');
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

      $('.menuBtn').on('click', function() {

      	if (!$(this).hasClass('menuBtn--openNav')) {
      		$(this).addClass('menuBtn--openNav');
      		toggleNav(true);
      	} else {
      		$(this).removeClass('menuBtn--openNav');
      		toggleNav(false);
      	}

      });

      function toggleNav(bool) {
      	if (bool === true) {
          $('.socialHeader').addClass('socialHeader--display');
          $('.siteNav').addClass('siteNav--display');
        }
      	else {
          $('.socialHeader').removeClass('socialHeader--display');
          $('.siteNav').removeClass('siteNav--display');
        }
      }
    }


    // ==============================================
    //    Contact form
    // ==============================================
    function init_contact_form() {
      //contact form button event
      $(".button_submit").on('click',function (event) {
          var error = init_validate_form();
          var _this = $(this);
          if (error) {
              _this.next('.loading').removeClass('display-none');
              _this.prop('disabled', true);
              $.ajax({
                  type: "POST",
                  url: "forms/contact.php",
                  data: $(".contactForm").serialize(),
                  success: function (result) {
                      $('input[type=text],textarea').each(function () {
                          $(this).val('');
                      })
                      $(".contactForm_message").html(result);
                      $(".contactForm_message").fadeIn("slow");
                      $('.contactForm_message').delay(4000).fadeOut("slow");
                      _this.next('.loading').addClass('display-none');
                      _this.prop('disabled', false);
                  },
                  error: function () {
                      _this.next('.loading').addClass('display-none');
                      _this.prop('disabled', false);
                  }
              });
          }
      });

      function init_validate_form() {
          var error = true;
          $('.contactForm input[type=text]').each(function (index) {
              if (index == 0) {
                  if ($(this).val() == null || $(this).val() == "") {
                      $(".contactForm").find("input:eq(" + index + ")").addClass("contactForm_message--error");
                      error = false;
                  }
                  else {
                      $(".contactForm").find("input:eq(" + index + ")").removeClass("contactForm_message--error");
                  }
              }
              else if (index == 1) {
                  if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                      $(".contactForm").find("input:eq(" + index + ")").addClass("contactForm_message--error");
                      error = false;
                  } else {
                      $(".contactForm").find("input:eq(" + index + ")").removeClass("contactForm_message--error");
                  }
              }

          });
          return error;
      }
    }


    // ==============================================
    //    Main slider
    // ==============================================
    function init_slider() {
      $(".siteBanner_slider").owlCarousel({
        items: 1,
        center: true,
        loop: false,
        smartSpeed: 1000,
        activeClass: 'siteBanner_slide--active',
        dotsContainer: '.siteBanner_sliderDots',
        dotClass: 'siteBanner_sliderDot',
        responsive: {
          0:{
              items: 1,
              nav: false,
              stagePadding: 0
          },
          768:{
              dots: true
          },
          992:{
              dots: false,
              stagePadding: 13
          }
        }
      });
    }


    // ==============================================
    //    Initialise plugins
    // ==============================================
    init_dummy_link();
    init_scroll_to();
    init_smooth_scroll_top();
    init_mobile_nav();
    init_contact_form();

    if( $(window).width() > 767) {
      init_slider();
    }

})(window.jQuery);
