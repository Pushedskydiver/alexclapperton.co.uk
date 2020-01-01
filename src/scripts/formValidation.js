function formValidation() {
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
    const element = input.currentTarget || input;
    const isValid = getInputPattern(element);
    const validationMessage = element.nextElementSibling;

    if (isValid && element.value.length !== 0) {
      element.classList.remove('form__input--invalid');
      element.classList.add('form__input--valid');
      validationMessage.classList.remove('form__validation-message--visible');
      return;
    }

    element.classList.add('form__input--invalid');
    element.classList.remove('form__input--valid');
    validationMessage.classList.add('form__validation-message--visible');
  }

  function validateTextarea(input) {
    const element = input.currentTarget || input;
    const isNotEmpty = element.value.length !== 0;
    const validationMessage = element.nextElementSibling;

    if (isNotEmpty) {
      element.classList.remove('form__textarea--invalid');
      element.classList.add('form__textarea--valid');
      validationMessage.classList.remove('form__validation-message--visible');
      return;
    }

    element.classList.add('form__textarea--invalid');
    element.classList.remove('form__textarea--valid');
    validationMessage.classList.add('form__validation-message--visible');
  }

  function showSuccessMessage() {
    const formData = new FormData(form);

    fetch(testForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
      .then(response => {
        if (response) {
          console.log('Success');
        }
      });
  }

  function validateAllFields(event) {
    let firstErrorFound = false;

    event.preventDefault();

    inputs.forEach(input => {
      validateInput(input);

      if (input.classList.contains('form__input--invalid') && !firstErrorFound) {
        input.focus();
        firstErrorFound = true;
      }
    });

    validateTextarea(textarea);

    if (textarea.classList.contains('form__textarea--invalid') && !firstErrorFound) {
      textarea.focus();
      firstErrorFound = true;
    }

    if (!firstErrorFound) {
      showSuccessMessage();
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
    init
  }
}

export default formValidation();
