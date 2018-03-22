module.exports = (function() {

  const elementsToFade = document.querySelectorAll('[data-fade]');

  function toggleFadeClass(element) {
    const objectPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (objectPosition - windowHeight <= 0) {
      element.classList.remove('hide');
      element.classList.add('fade-in');
      element.style.transitionDelay = element.getAttribute('data-fade-delay');
    }
  }

  function fadeIn() {
    const delayFade = setTimeout(() => {
      elementsToFade.forEach(element => toggleFadeClass(element));
      clearTimeout(delayFade);
    }, 500);
  }

  function init() {
    if (elementsToFade.length > 0) {
      fadeIn();
      window.addEventListener('scroll', fadeIn);
    }
  }

  return {
    init: init
  };
}());
