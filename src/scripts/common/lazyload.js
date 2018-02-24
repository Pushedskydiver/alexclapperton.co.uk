module.exports = (function() {

  const lazyImages = document.querySelectorAll('[data-lazy]');
  const infoBlockPicture = document.querySelector('[data-info-block-picture]');

  function lazyloadConfig() {
    window.lazySizesConfig.lazyClass = 'lazyload__image--lazy';
    window.lazySizesConfig.loadedClass = 'lazyload__image--loaded';
    window.lazySizesConfig.expand = 50;
  }

  function lazyloaded(image) {
    image = image.currentTarget || image;

    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const ratio = (Math.round(height) / Math.round(width) * 100).toFixed(2);

    image.parentNode.style.paddingTop = ratio.replace('.00', '') + '%';

    if (window.innerWidth >= 992 && document.body.contains(infoBlockPicture)) {
      infoBlockPicture.style.paddingTop = '';
    }
  }

  function lazyBeforeUnveil(image) {
    image = image.currentTarget;

    image.parentNode.classList.add('lazyload--image-loaded');
    image.removeEventListener('lazybeforeunveil', lazyBeforeUnveil);
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
