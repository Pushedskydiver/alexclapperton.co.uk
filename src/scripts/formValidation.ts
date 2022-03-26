function FormValidation(form: HTMLFormElement) {
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[data-input]');
  const textarea: HTMLTextAreaElement | any = document.querySelector('[data-textarea]');
  const submitButton: HTMLButtonElement | any = document.querySelector('[data-submit-button]');
  const errorMessage: HTMLElement | any = document.querySelector('[data-form-error]');
  const successMessage: HTMLElement | any = document.querySelector('[data-form-success]');

  let inputValidationErrorFound = false;

  function showSuccessMessage() {
    submitButton.setAttribute('aria-describedby', 'formSuccess');
    successMessage.removeAttribute('hidden');
  }

  function showErrorMessage() {
    submitButton.setAttribute('aria-describedby', 'formError');
    errorMessage.removeAttribute('hidden');
  }

  function setInvalidInputState(input: HTMLInputElement | HTMLTextAreaElement) {
    const inputId = input.id;

    input.setAttribute('aria-describedby', `${inputId}Describe`);
    input.classList.add('border-red-400');
    input.classList.remove('border-lime-400');
    input.nextElementSibling?.removeAttribute('hidden');
  }

  function setValidInputState(input: HTMLInputElement | HTMLTextAreaElement) {
    input.removeAttribute('aria-describedby');
    input.classList.remove('border-red-400');
    input.classList.add('border-lime-400');
    input.nextElementSibling?.setAttribute('hidden', 'true');
  }

  function submitForm() {
    const formData = new FormData(form).toString();
    const url: string | any = form.getAttribute('action');

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
      .then(showSuccessMessage)
      .catch(showErrorMessage);
  }

  function validateInput(input: HTMLInputElement | HTMLTextAreaElement) {
    const isEmail = input.getAttribute('type') === 'email';
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    const isValidInput = isEmail ? isValidEmail : input.value.length > 0;

    if (!isValidInput && !inputValidationErrorFound) {
      inputValidationErrorFound = true;
      input.focus();
    }

    if (!isValidInput) setInvalidInputState(input);

    if (isValidInput) {
      inputValidationErrorFound = false;
      setValidInputState(input);
    }

    return inputValidationErrorFound;
  }

  function handleFormSubmission(event: Event) {
    event.preventDefault();

    Array.from(inputs).forEach(validateInput);
    validateInput(textarea);

    if (!inputValidationErrorFound) {
      submitForm();
    }
  }

  function init() {
    if (form !== null) {
      form.addEventListener('submit', handleFormSubmission)
    }
  }

  return {
    init
  }
}

export default FormValidation;
