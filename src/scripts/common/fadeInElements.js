function fadeInElements() {
  const options = {
    rootMargin: '0px',
    threshold: 0.2
  }

  function addFadeClass(element) {
    element.classList.remove('hide');
    element.classList.add('fade-in');
    element.style.transitionDelay = element.getAttribute('data-fade-delay');
  }

  function toggleFade(element) {
    const objectPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (objectPosition - windowHeight <= 0) {
      addFadeClass(element);
    }
  }

  function fadeIn(element) {
    toggleFade(element)
  }

  function fadeInOnScroll(element) {
    const delayFade = setTimeout(() => {
      toggleFade(element)
      clearTimeout(delayFade);
    }, 500);
  }

  // Intersection Observer API
  function applyFadeInToEntry({ intersectionRatio, target }) {
    if (intersectionRatio >= options.threshold) {
      addFadeClass(target);
    }
  }

  function callback(entries) {
    entries.forEach(entry => applyFadeInToEntry(entry));
  }

  function applyFadein(element) {
    const observer = new IntersectionObserver(callback, options);

    observer.observe(element)
  }

  function init(element) {
    console.log('init');

    fadeIn(element);

    'IntersectionObserver' in window ?
      applyFadein(element) : window.addEventListener('scroll', () => fadeInOnScroll(element));
  }

  return {
    init
  }
}

export default fadeInElements();
