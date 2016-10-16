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
      var $scrollTo = $('.skipLink--scrollTo');
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
      var $scrollTop = $('.btn_scrollTop');
      if ($scrollTop.length > 0) {
        $(window).on('scroll', function(){
          if ($(window).scrollTop() > 600) {
            $scrollTop.addClass('btn_scrollTop--isVisible');
          } else {
            $scrollTop.removeClass('btn_scrollTop--isVisible');
          }
        });
        $scrollTop.on('click', function(e){
          e.preventDefault();
          $('html').velocity("scroll", { offset: 0, duration: 1500, easing:'easeInOutCubic', mobileHA: false });
        });
      };
    }


    // ==============================================
    //    Contact form
    // ==============================================
    function init_contact_form() {
      //contact form button event
      $(".siteContact_btn").on('click',function (event) {
          var error = init_validate_form();
          var _this = $(this);
          if (error) {
              _this.next('.siteContact_loading').removeClass('siteContact_loading--displayNone');
              _this.prop('disabled', true);
              $.ajax({
                  type: "POST",
                  url: "/forms/mailer.php",
                  data: $(".siteContact_form").serialize(),
                  success: function (result) {
                      $('.siteContact_input, .siteContact_textarea').each(function () {
                          $(this).val('');
                      })
                      $(".siteContact_message").html(result);
                      $(".siteContact_message").fadeIn("slow").removeClass('siteContact_input--error').addClass('siteContact_message--success');
                      $('.siteContact_message').delay(4000).fadeOut("slow");
                      _this.next('.siteContact_loading').addClass('siteContact_loading--displayNone');
                      _this.prop('disabled', false);
                  },
                  error: function () {
                      _this.next('.siteContact_loading').addClass('siteContact_loading--displayNone');
                      _this.prop('disabled', false);
                  }
              });
          }
      });

      function init_validate_form() {
          var error = true;
          $('.siteContact_input').each(function (index) {
              if (index == 0) {
                  if ($(this).val() == null || $(this).val() == "") {
                      $(".siteContact_form").find(".siteContact_input:eq(" + index + ")").addClass("siteContact_input--error");
                      error = false;
                  }
                  else {
                      $(".siteContact_form").find(".siteContact_input:eq(" + index + ")").removeClass("siteContact_input--error");
                  }
              }
              else if (index == 1) {
                  if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                      $(".siteContact_form").find(".siteContact_input:eq(" + index + ")").addClass("siteContact_input--error");
                      error = false;
                  } else {
                      $(".siteContact_form").find(".siteContact_input:eq(" + index + ")").removeClass("siteContact_input--error");
                  }
              }
          });

          $('.siteContact_textarea').each(function() {
            if ($(this).val() == null || $(this).val() == "") {
                $(".siteContact_form").find(".siteContact_textarea").addClass("siteContact_input--error");
                error = false;
            }
            else {
                $(".siteContact_form").find(".siteContact_textarea").removeClass("siteContact_input--error");
            }
          });
          return error;
      }
    }


    // ==============================================
    //    Portfolio grid & filter
    // ==============================================
    function init_portfolio() {
      var $grid = $('.sitePortfolio_grid'),
          $grid_filter = $('.sitePortfolio_filter'),
          $grid_selectors = $('.sitePortfolio_filterBtn');

      imagesLoaded($grid, function(){
        $grid.isotope({
          itemSelector: '.sitePortfolio_item',
          layoutMode: 'fitRows'
        });
        $grid_selectors.on( 'click', function() {
          $grid_selectors.removeClass('sitePortfolio_filterBtn--active');
          $(this).addClass('sitePortfolio_filterBtn--active');
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
          return false;
        });
      });
    }


    // ==============================================
    //    Initialise plugins
    // ==============================================
    init_dummy_link();
    init_scroll_to();
    init_contact_form();
    init_portfolio();

    if (!$('body').hasClass('mobile')) {
      init_smooth_scroll_top();
    }

})(window.jQuery);