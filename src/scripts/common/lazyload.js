module.exports = (function(entry) {

  const options = {
    selector: document.querySelectorAll('[data-lazy]'),
    rootMargin: '0px',
    threshold: 1
  }

  function lazyloadConfig() {
    window.lazySizesConfig.lazyClass = 'lazyload__image--lazy';
    window.lazySizesConfig.loadedClass = 'lazyload__image--loaded';
    window.lazySizesConfig.expand = 50;
  }

  function lazyloaded(image) {
    const element = image.currentTarget || image;
    const width = element.naturalWidth;
    const height = element.naturalHeight;
    const ratio = (Math.round(height) / Math.round(width) * 100).toFixed(2);

    element.parentNode.style.paddingTop = ratio.replace('.00', '') + '%';
  }

  function lazyBeforeUnveil({currentTarget}) {
    currentTarget.parentNode.classList.add('lazyload--image-loaded');
    currentTarget.removeEventListener('lazybeforeunveil', lazyBeforeUnveil);
  }

  function lazyLoadImagesOnResize() {
    options.selector.forEach(image => {
      const delayViewportResize = setTimeout(() => {
        lazyloaded(image);
        clearTimeout(delayViewportResize);
      }, 10);
    });
  }

  function lazyloadEventListeners(image) {
    image.addEventListener('lazyloaded', image => lazyloaded(image));
    image.addEventListener('lazybeforeunveil', image => lazyBeforeUnveil(image));
  }

  // Intersection Observer API
  function applyLazyLoadToEntry({intersectionRatio, currentTarget, target} = entry) {
    const ratio = intersectionRatio;
    const element = currentTarget || target;

    if (ratio === options.threshold) {
      lazyloaded(element);
    }
  }

  function callback(entries) {
    entries.forEach(applyLazyLoadToEntry);
  }

  function applyLazyLoad() {
    const images = options.selector;
    const observer = new IntersectionObserver(callback, options);

    images.forEach(image => observer.observe(image));
  }

  function init({selector} = options) {
    if (selector.length > 0) {
      lazyloadConfig();
      selector.forEach(image => lazyloadEventListeners(image));

      'IntersectionObserver' in window ?
      applyLazyLoad() : window.addEventListener('resize', lazyLoadImagesOnResize);
    }
  }

  return {
    init: init
  };
}());
