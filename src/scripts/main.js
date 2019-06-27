import 'lazysizes';
import 'zenscroll';

function initModule(module, element = null) {
  module.default.init(element);
}

function observe(callback, elements) {
  const config = {
    rootMargin: '200px 0px',
    threshold: 0.01
  };

  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          // Stop watching and load the script
          observer.unobserve(entry.target);
          callback(entry.target);
        }
      });
    }, config);

    Array.from(elements).forEach(element => observer.observe(element));
  }
}

/** *****
 *
 *  Critical - All pages need them as fast as possible
 *
 * ******* */

import(/* webpackChunkName: "swRegister" */ 'Src/scripts/common/swRegister').then(initModule).catch(err => console.error(`Error in: swRegister - ${err}`));

import(/* webpackChunkName: "lazyload" */ 'Src/scripts/common/lazyload').then(initModule).catch(err => console.error(`Error in: lazyload - ${err}`));

import(/* webpackChunkName: "notices" */ 'Src/scripts/common/notices').then(initModule).catch(err => console.error(`Error in: notices - ${err}`));

import(/* webpackChunkName: "desktop-navigation" */ 'Src/scripts/common/desktopNavigation').then(initModule).catch(err => console.error(`Error in: desktopNavigation - ${err}`));

/** *****
 *
 *  Non Critical - Only specific pages will need them
 *
 * ******* */

observe(() => {
  import(/* webpackChunkName: "fade-in-elements" */ 'Src/scripts/common/fadeInElements').then(initModule).catch(err => console.error(`Error in: fadeInElements - ${err}`));
}, document.querySelectorAll('[data-fade]'));

observe(() => {
  import(/* webpackChunkName: "form-validation" */ 'Src/scripts/common/formValidation').then(initModule).catch(err => console.error(`Error in: formValidation - ${err}`));
}, document.querySelectorAll('[data-form]'));

