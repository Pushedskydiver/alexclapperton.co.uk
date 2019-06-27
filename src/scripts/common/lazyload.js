function lazyLoad() {
  const options = {
    selector: document.querySelectorAll('[data-lazy]')
  };

  function lazyBeforeUnveil({ currentTarget }) {
    currentTarget.parentNode.classList.add('lazyload--image-loaded');
    currentTarget.removeEventListener('lazybeforeunveil', lazyBeforeUnveil);
  }

  function lazyloadEventListeners(image) {
    image.addEventListener('lazybeforeunveil', image => lazyBeforeUnveil(image));
  }

  function init() {
    const { selector } = options;

    if (selector.length > 0) {
      selector.forEach(image => lazyloadEventListeners(image));
    }
  }

  return {
    init
  }
}

export default lazyLoad();
