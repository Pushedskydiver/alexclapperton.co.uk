module.exports = (function() {

  const inputs = document.querySelectorAll('[data-input]');
  // const textarea = document.querySelector('[data-textarea]');

  function validateOnBlur(input) {
    input = input.currentTarget;

    const validationMessage = input.nextElementSibling;

    if (input.value.length === 0) {
      input.classList.add('form__input--invalid');
      validationMessage.classList.add('form__validation-message--visible');
    } else {
      input.classList.remove('form__input--invalid');
      validationMessage.classList.remove('form__validation-message--visible');
    }
  }

  function init() {
    inputs.forEach(input => {
      input.addEventListener('blur', validateOnBlur);
    })
  }

  return {
    init: init
  };

}());
