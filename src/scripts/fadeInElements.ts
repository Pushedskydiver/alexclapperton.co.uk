function fadeInElements() {
  const options = {
    rootMargin: '0px',
    threshold: 0.2
  }

  function addFadeClass(element: HTMLElement) {
    const style: any = element.style;

    element.classList.remove('hide');
    element.classList.add('fade-in');
    style.transitionDelay = element.getAttribute('data-fade-delay');
  }

  function toggleFade(element: HTMLElement) {
    const objectPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (objectPosition - windowHeight <= 0) {
      addFadeClass(element);
    }
  }

  function fadeIn(element: HTMLElement) {
    toggleFade(element)
  }

  function fadeInOnScroll(element: HTMLElement) {
    const delayFade = setTimeout(() => {
      toggleFade(element)
      clearTimeout(delayFade);
    }, 500);
  }

  // Intersection Observer API
  function applyFadeInToEntry({ intersectionRatio, target }: { intersectionRatio: number, target: HTMLElement }) {
    if (intersectionRatio >= options.threshold) {
      addFadeClass(target);
    }
  }

  function callback(entries: Array<any>) {
    entries.map(applyFadeInToEntry);
  }

  function applyFadein(element: HTMLElement) {
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);

    observer.observe(element);
  }

  function init(element: HTMLElement) {
    fadeIn(element);

    'IntersectionObserver' in window ?
      applyFadein(element) : window.addEventListener('scroll', () => fadeInOnScroll(element));
  }

  return {
    init
  }
}

export default fadeInElements();
