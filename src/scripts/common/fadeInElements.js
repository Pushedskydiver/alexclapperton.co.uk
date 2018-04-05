module.exports = (function(entry) {

  const options = {
    selector: document.querySelectorAll('[data-fade]'),
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

  function fadeIn() {
    options.selector.forEach(element => toggleFade(element));
  }

  function fadeInOnScroll() {
    const delayFade = setTimeout(() => {
      options.selector.forEach(element => toggleFade(element));
      clearTimeout(delayFade);
    }, 500);
  }

  // Intersection Observer API
  function applyFadeInToEntry({intersectionRatio, target} = entry) {
    if (intersectionRatio >= options.threshold) {
      addFadeClass(target);
    }
  }

  function callback(entries) {
    entries.forEach(applyFadeInToEntry);
  }

  function applyFadein() {
    const elements = options.selector;
    const observer = new IntersectionObserver(callback, options);

    elements.forEach(element => observer.observe(element));
  }

  function init() {
    if (options.selector.length > 0) {
      fadeIn();

      'IntersectionObserver' in window ?
      applyFadein() : window.addEventListener('scroll', fadeInOnScroll);
    }
  }

  return {
    init: init
  };
}());
