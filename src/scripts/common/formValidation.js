module.exports = (function() {

  const form = document.querySelector('[data-form]');
  const inputs = document.querySelectorAll('[data-input]');
  const textarea = document.querySelector('[data-textarea]');
  const submitButton = document.querySelector('[data-submit-button]');

  function getInputPattern(input) {
    const pattern = input.getAttribute('pattern');
    const regex = RegExp(pattern);

    return new RegExp(regex, 'i').test(input.value);
  }

  function validateInput(input) {
    input = input.currentTarget || input;

    const isValid = getInputPattern(input);
    const isNotEmpty = input.value.length !== 0;
    const validationMessage = input.nextElementSibling;

    if (isValid && isNotEmpty) {
      input.classList.remove('form__input--invalid');
      input.classList.add('form__input--valid');
      validationMessage.classList.remove('form__validation-message--visible');
    } else {
      input.classList.add('form__input--invalid');
      input.classList.remove('form__input--valid');
      validationMessage.classList.add('form__validation-message--visible');
    }
  }

  function validateTextarea(input) {
    input = input.currentTarget || input;

    const isNotEmpty = input.value.length !== 0;
    const validationMessage = input.nextElementSibling;

    if (isNotEmpty) {
      input.classList.remove('form__textarea--invalid');
      input.classList.add('form__textarea--valid');
      validationMessage.classList.remove('form__validation-message--visible');
    } else {
      input.classList.add('form__textarea--invalid');
      input.classList.remove('form__textarea--valid');
      validationMessage.classList.add('form__validation-message--visible');
    }
  }

  function validateAllFields(event) {
    let firstErrorFound = false;

    inputs.forEach(input => {
      validateInput(input);

      if (input.classList.contains('form__input--invalid') && firstErrorFound === false) {
        input.focus();
        firstErrorFound = true;
      }
    });

    validateTextarea(textarea);

    if (textarea.classList.contains('form__textarea--invalid') && firstErrorFound === false) {
      textarea.focus();
      firstErrorFound = true;
    }

    if (firstErrorFound) {
      event.preventDefault();
    }
  }

  function init() {
    if (form !== null) {
      inputs.forEach(input => input.addEventListener('change', validateInput));
      textarea.addEventListener('change', validateTextarea);
      submitButton.addEventListener('click', validateAllFields);
    }
  }

  return {
    init: init
  };
}());
