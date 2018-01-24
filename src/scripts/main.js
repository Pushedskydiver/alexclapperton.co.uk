(function() {
  'use strict';

  require('./common/desktopNavigation.js').init();
  require('./common/mobileNavigation.js').init();
  require('./common/lazyload.js').init();
  require('./common/fadeInElements.js').init();
  require('./common/notices.js').init();

  if(window.location.pathname == '/contact/') {
    require('./common/formValidation.js').init();
  }

}());
