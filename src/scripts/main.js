import 'lazysizes';

const html = document.querySelector('html');

html.classList.remove('no-js');

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

import(/* webpackChunkName: "swRegister" */ 'Src/scripts/swRegister').then(initModule).catch(err => console.error(`Error in: swRegister - ${err}`));

import(/* webpackChunkName: "lazyload" */ 'Src/scripts/lazyload').then(initModule).catch(err => console.error(`Error in: lazyload - ${err}`));

import(/* webpackChunkName: "notices" */ 'Src/scripts/notices').then(initModule).catch(err => console.error(`Error in: notices - ${err}`));

import(/* webpackChunkName: "mobile-navigation" */ 'Src/scripts/mobileNavigation').then(initModule).catch(err => console.error(`Error in: mobileNavigation - ${err}`));

import(/* webpackChunkName: "desktop-navigation" */ 'Src/scripts/desktopNavigation').then(initModule).catch(err => console.error(`Error in: desktopNavigation - ${err}`));

/** *****
 *
 *  Non Critical - Only specific pages will need them
 *
 * ******* */

observe(element => {
  import(/* webpackChunkName: "fade-in-elements" */ 'Src/scripts/fadeInElements').then((module) => initModule(module, element)).catch(err => console.error(`Error in: fadeInElements - ${err}`));
}, document.querySelectorAll('[data-fade]'));

observe(() => {
  import(/* webpackChunkName: "form-validation" */ 'Src/scripts/formValidation').then(initModule).catch(err => console.error(`Error in: formValidation - ${err}`));
}, document.querySelectorAll('[data-form]'));

