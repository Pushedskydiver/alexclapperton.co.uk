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
    elementsToFade.forEach(element => toggleFadeClass(element));
  }

  function init() {
    if (elementsToFade) {
      fadeIn();
      window.addEventListener('scroll', fadeIn);
    }
  }

  return {
    init: init
  };
}());
