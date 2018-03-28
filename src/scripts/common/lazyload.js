module.exports = (function() {

  const lazyImages = document.querySelectorAll('[data-lazy]');

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
    lazyImages.forEach(image => {
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

  function init() {
    if (lazyImages.length > 0) {
      lazyloadConfig();
      lazyImages.forEach(image => lazyloadEventListeners(image));
      window.addEventListener('resize', lazyLoadImagesOnResize);
    }
  }

  return {
    init: init
  };
}());
