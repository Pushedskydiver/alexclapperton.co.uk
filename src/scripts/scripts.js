(function() {

    'use strict';


    // ======================================
    //    Smooth scroll to top button
    // ======================================
    function init_scroll_top() {
      var ELEMENT_scrollBtn = document.querySelector('[data-scroll-top]');

      var CLASS_scrollBtnVisible = 'scroll-top--visible';

      window.addEventListener('scroll', function(){
        if (window.pageYOffset > 600) {
          ELEMENT_scrollBtn.classList.add(CLASS_scrollBtnVisible);
          return;
        }
        ELEMENT_scrollBtn.classList.remove(CLASS_scrollBtnVisible);
      });
    }


    // ==============================================
    //    Active navigation links
    // ==============================================
    function init_active_nav() {
      var ELEMENT_navItemHome = document.querySelector('[data-item-home]'),
          ELEMENT_navItemAbout = document.querySelector('[data-item-about]'),
          ELEMENT_navItemPortfolio = document.querySelector('[data-item-portfolio]'),
          ELEMENT_navItemBlog = document.querySelector('[data-item-blog]'),
          ELEMENT_navItemContact = document.querySelector('[data-item-contact]');

      var CLASS_navItemActive = 'nav__item--active';

      if (window.location.pathname == '/') {
        ELEMENT_navItemHome.classList.add(CLASS_navItemActive);
      }
      if (window.location.pathname == '/about-me/') {
        ELEMENT_navItemAbout.classList.add(CLASS_navItemActive);
      }
      if (window.location.href.indexOf('portfolio/') > -1) {
        ELEMENT_navItemPortfolio.classList.add(CLASS_navItemActive);
      }
      if (window.location.href.indexOf('blog/') > -1) {
        ELEMENT_navItemBlog.classList.add(CLASS_navItemActive);
      }
      if (window.location.pathname == '/contact/') {
        ELEMENT_navItemContact.classList.add(CLASS_navItemActive);
      }
    }


    // ==============================================
    //    Portfolio grid & filter
    // ==============================================
    function init_portfolio() {
      var ELEMENT_grid = document.querySelector('[data-portfolio]'),
          ELEMENT_item = document.querySelector('[data-portfolio-item]'),
          ELEMENT_filter = document.querySelector('[data-filter-block]');

      var SELECTOR_filter = document.querySelectorAll('[data-filter-block]'),
          SELECTOR_btn = document.querySelector('[data-filter-btn]'),
          SELECTOR_filterBtnActive = '.filter__btn--active',
          SELECTOR_iso;

      var CLASS_filterBtnActive = 'filter__btn--active',
          CLASS_portfolioPage = 'portfolio__page';

      document.body.classList.add(CLASS_portfolioPage);

      imagesLoaded(ELEMENT_grid, function() {
        // Initialise isotope
        SELECTOR_iso = new Isotope(ELEMENT_grid, {
          itemSelector: '.portfolio__item',
          percentPosition: true,
          layoutMode: 'fitRows'
        });

        // Bind filter button click
        ELEMENT_filter.addEventListener('click', function(event) {
          // Only work with buttons
          if (!matchesSelector(event.target, 'button')) {
            return;
          }
          var SELECTOR_filter = event.target.getAttribute('data-filter');
          SELECTOR_iso.arrange({filter: SELECTOR_filter});
        });

        // Change is-checked class on buttons
        for (var i=0, len = SELECTOR_filter.length; i < len; i++) {
          var SELECTOR_filterBtn = SELECTOR_filter[i];
          radioButtonGroup(SELECTOR_filterBtn);
        }
        function radioButtonGroup(SELECTOR_filterBtn) {
          SELECTOR_filterBtn.addEventListener('click', function(event) {
            // Only work with buttons
            if (!matchesSelector(event.target, 'button')) {
              return;
            }
            SELECTOR_filterBtn.querySelector(SELECTOR_filterBtnActive).classList.remove(CLASS_filterBtnActive);
            event.target.classList.add(CLASS_filterBtnActive);
          });
        }
      });
    }


    // ==============================================
    //    Form validation | Contact page
    // ==============================================
    function init_form_validation() {
      var ELEMENT_form = document.querySelector('[data-form]'),
          ELEMENT_formItem = document.querySelectorAll('[data-form-item]'),
          ELEMENT_inputField = document.querySelectorAll('[data-input-field]'),
          ELEMENT_textareaField = document.querySelector('[data-textarea-field]'),
          ELEMENT_formSubmit = document.querySelector('[data-form-submit]');

      var CLASS_formInputValid = 'form__input--valid',
          CLASS_formInputInvalid = 'form__input--invalid',
          CLASS_formTextareaValid = 'form__textarea--valid',
          CLASS_formTextareaInvalid = 'form__textarea--invalid',
          CLASS_formValidationInvalid = 'form__validation--invalid',
          CLASS_formValidationValid = 'form__validation--valid';

      var ATTR_pattern = 'pattern',
          ATTR_title = 'title',
          ATTR_required = 'required';

      var allInputsAreValid = true;

      function isInputValid(regex, inputValue) {
        if (regex === undefined) {
          return inputValue.length > 0;
        }

        return new RegExp(regex, 'i').test(inputValue);
      }

      function getCurrentInputInformation(ELEMENT_currentInput) {
        return {
          inputValue: ELEMENT_currentInput.value,
          regexString: ELEMENT_currentInput.getAttribute(ATTR_pattern),
          errorMessage: ELEMENT_currentInput.getAttribute(ATTR_title),
          isValid: true
        }
      }

      function setCurrentInputToValid(ELEMENT_currentInput) {
        var ELEMENT_currentValidation = ELEMENT_currentInput.nextElementSibling;
        ELEMENT_currentInput.classList.add(CLASS_formInputValid);
        ELEMENT_currentInput.classList.remove(CLASS_formInputInvalid);
        ELEMENT_currentValidation.classList.remove(CLASS_formValidationInvalid);
        ELEMENT_currentValidation.classList.add(CLASS_formValidationValid);
        ELEMENT_currentValidation.textContent = '';
      }

      function setCurrentInputToInvalid(ELEMENT_currentInput, errorMessage, isTyping) {
        var ELEMENT_currentValidation = ELEMENT_currentInput.nextElementSibling;
        ELEMENT_currentInput.classList.remove(CLASS_formInputValid);
        ELEMENT_currentInput.classList.add(CLASS_formInputInvalid);
        ELEMENT_currentValidation.classList.remove(CLASS_formValidationValid);
        ELEMENT_currentValidation.classList.add(CLASS_formValidationInvalid);
        ELEMENT_currentValidation.textContent = errorMessage;

        if (isTyping) {
          return;
        }
      }

      function setTextareaToValid() {
        var ELEMENT_currentValidation = ELEMENT_textareaField.nextElementSibling;
        ELEMENT_textareaField.classList.add(CLASS_formTextareaValid);
        ELEMENT_textareaField.classList.remove(CLASS_formTextareaInvalid);
        ELEMENT_currentValidation.classList.remove(CLASS_formValidationInvalid);
        ELEMENT_currentValidation.classList.add(CLASS_formValidationValid);
        ELEMENT_currentValidation.textContent = '';
      }

      function setTextareaToInvalid(errorMessage, isTyping) {
        var ELEMENT_currentValidation = ELEMENT_textareaField.nextElementSibling;
        ELEMENT_textareaField.classList.remove(CLASS_formTextareaValid);
        ELEMENT_textareaField.classList.add(CLASS_formTextareaInvalid);
        ELEMENT_currentValidation.classList.remove(CLASS_formValidationValid);
        ELEMENT_currentValidation.classList.add(CLASS_formValidationInvalid);
        ELEMENT_currentValidation.textContent = errorMessage;

        if (isTyping) {
          return;
        }
      }

      function checkIfCurrentInputIsValid(ELEMENT_currentInput, isTyping) {

        if (ELEMENT_currentInput.getAttribute(ATTR_required) === undefined) {
          return;
        }

        var currentInputObj = getCurrentInputInformation(ELEMENT_currentInput);
        currentInputObj.isValid = isInputValid(currentInputObj.regexString, currentInputObj.inputValue);

        if (currentInputObj.isValid) {
          setCurrentInputToValid(ELEMENT_currentInput)
        } else {
          setCurrentInputToInvalid(ELEMENT_currentInput, currentInputObj.errorMessage, isTyping)
        }
      }

      function CheckIfTextareaIsValid(isTyping) {
        var textareaObj = getCurrentInputInformation(ELEMENT_textareaField);
        textareaObj.isValid = textareaObj.inputValue;

        if (textareaObj.isValid) {
          setTextareaToValid()
        } else {
          setTextareaToInvalid(textareaObj.errorMessage, isTyping)
        }
      }

      function handleKeypressOnInput(event) {
        var ELEMENT_currentInputs = event.target;
        var isTyping = true;
        checkIfCurrentInputIsValid(ELEMENT_currentInputs, isTyping)
      }

      function handleKeypressOnTextarea(event) {
        var ELEMENT_currentInputs = event.target;
        var isTyping = true;
        CheckIfTextareaIsValid(isTyping)
      }

      function checkIfAllInputsAreValid(event) {

        var firstErrorFound = false;
        var isTyping = false;

        [].forEach.call(ELEMENT_inputField, function(ELEMENT_this) {
          checkIfCurrentInputIsValid(ELEMENT_this, isTyping);
          if (ELEMENT_this.classList.contains(CLASS_formInputInvalid) && firstErrorFound === false) {
            ELEMENT_this.focus();
            firstErrorFound = true;
          }
        });

        CheckIfTextareaIsValid(ELEMENT_textareaField, isTyping);

        if (ELEMENT_textareaField.classList.contains(CLASS_formTextareaInvalid) && firstErrorFound === false) {
          ELEMENT_textareaField.focus();
          firstErrorFound = true;
        }

        if (firstErrorFound) {
          event.preventDefault();
        }
      }

      function init() {
        [].forEach.call(ELEMENT_formItem, function(ELEMENT_this) {
          ELEMENT_this.addEventListener('keyup', handleKeypressOnInput);
        });
        ELEMENT_textareaField.addEventListener('keyup', handleKeypressOnTextarea);
        ELEMENT_formSubmit.addEventListener('click', checkIfAllInputsAreValid);
      }

      init();
    }


    // ==============================================
    //    Send form | Contact page
    // ==============================================
    function init_send_form() {
      var ELEMENT_form = document.querySelector(['[data-form]']),
          ELEMENT_formMessage = document.querySelector('[data-form-message]');

      var CLASS_formMessageSuccess = 'form__message--success',
          CLASS_formMessageError = 'form__message--error';

      ELEMENT_form.addEventListener('submit', function(event){

        var ELEMENT_this = event.target;

        var SELECTOR_data = new FormData(ELEMENT_this),
            SELECTOR_request = new XMLHttpRequest();

        event.preventDefault()

        SELECTOR_request.onreadystatechange = function(){
          if (SELECTOR_request.readyState == XMLHttpRequest.DONE ) {

            if (SELECTOR_request.status == 200) {
              ELEMENT_formMessage.classList.remove(CLASS_formMessageError);
              ELEMENT_formMessage.classList.add(CLASS_formMessageSuccess);
              ELEMENT_formMessage.textContent = SELECTOR_request.responseText;
              return;
            }

            if (SELECTOR_request.status == 400) {
              ELEMENT_formMessage.classList.remove(CLASS_formMessageSuccess);
              ELEMENT_formMessage.classList.add(CLASS_formMessageError);
              ELEMENT_formMessage.textContent = 'Oops! Something went wrong. Please submit the form again.';
              return;
            }

            ELEMENT_formMessage.classList.remove(CLASS_formMessageSuccess);
            ELEMENT_formMessage.classList.add(CLASS_formMessageError);
            ELEMENT_formMessage.textContent = 'Oops! Something went wrong. The form could not be sent.';
          }
        }

        SELECTOR_request.open(ELEMENT_this.method, ELEMENT_this.action)
        SELECTOR_request.send(SELECTOR_data)
      });
    }


    // ==============================================
    //    Initialise plugins
    // ==============================================
    init_active_nav();

    if (window.outerWidth > 768) {
      init_scroll_top();
    }

    if(window.location.pathname == '/portfolio/') {
      init_portfolio();
    }
    if(window.location.pathname == '/contact/') {
      init_form_validation();
      init_send_form();
    }

})();
