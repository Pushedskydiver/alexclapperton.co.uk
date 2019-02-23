const options = {
  selector: document.querySelectorAll('[data-lazy]')
};

function lazyloadConfig() {
  window.lazySizesConfig.lazyClass = 'lazyload__image--lazy';
  window.lazySizesConfig.loadedClass = 'lazyload__image--loaded';
  window.lazySizesConfig.expand = 50;
}

function lazyBeforeUnveil({ currentTarget }) {
  console.log(currentTarget);
  console.log(currentTarget.parentNode);

  currentTarget.parentNode.classList.add('lazyload--image-loaded');
  currentTarget.removeEventListener('lazybeforeunveil', lazyBeforeUnveil);
}

function lazyloadEventListeners(image) {
  image.addEventListener('lazybeforeunveil', image => lazyBeforeUnveil(image));
}

function initLazyload({ selector } = options) {
  if (selector.length > 0) {
    lazyloadConfig();
    selector.forEach(image => lazyloadEventListeners(image));
  }
}

export default initLazyload;
