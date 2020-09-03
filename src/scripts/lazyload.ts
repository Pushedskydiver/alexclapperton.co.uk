function lazyLoad() {
  const options = {
    selector: Array.from(document.querySelectorAll('[data-lazy]'))
  };

  function lazyBeforeUnveil({ currentTarget }: { currentTarget: any }) {
    currentTarget.parentNode.classList.add('lazyload--image-loaded');
    currentTarget.removeEventListener('lazybeforeunveil', lazyBeforeUnveil);
  }

  function lazyloadEventListeners(image: Element) {
    image.addEventListener('lazybeforeunveil', lazyBeforeUnveil);
  }

  function init() {
    const { selector } = options;

    if (selector.length > 0) {
      selector.forEach(lazyloadEventListeners);
    }
  }

  return {
    init
  }
}

export default lazyLoad();
