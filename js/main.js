//typewriter effect

var typed = new Typed('.txt1', {
    strings: ["My Name is Vincenzo Prestigiacomo <br> I'm a Web Developer"],
    typeSpeed: 100
})


//side nav open and close

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// Form Validation
// selector of each element in the form
const firstNameEl = document.querySelector('#fname');
const lastNameEl = document.querySelector('#lname');
const emailEl = document.querySelector('#email')
const subjectEl = document.querySelector('#subject');
const messageEl = document.querySelector('#message');

//main form selector
const form = document.querySelector('#contact');



//required field function
const isRequired = value => value === '' ? false : true;


// min and max length check function
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// checks if email is valid
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


// function that applies error styles and error message
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

// function that applies success styles and hides the error message
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

// function that validates the first name value based on min and max length and if it is blank or not
const checkFirstName = () => {

  let valid = false;
  const min = 1,
      max = 20;
  const firstName = firstNameEl.value.trim();

  if (!isRequired(firstName)) {
      showError(firstNameEl, 'First name cannot be blank.');
  } else if (!isBetween(firstName.length, min, max)) {
      showError(firstNameEl, `First name must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(firstNameEl);
      valid = true;
  }
  return valid;
}

// function that returns true if the subject is provided and valid
const checkSubject = () => {

  let valid = false;
  const min = 1,
      max = 200;
  const subject = subjectEl.value.trim();

  if (!isRequired(subject)) {
      showError(subjectEl, 'Subject cannot be blank.');
  } else if (!isBetween(subject.length, min, max)) {
      showError(subjectEl, `Subject must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(subjectEl);
      valid = true;
  }
  return valid;
}


// function that returns true if the email is provided and valid
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.')
  } else {
      showSuccess(emailEl);
      valid = true;
  }
  return valid;
}

// function that returns true if the message is provided and valid
const checkMessage = () => {

  let valid = false;
  const min = 10,
      max = 500;
  const message = messageEl.value.trim();

  if (!isRequired(message)) {
      showError(messageEl, 'Message cannot be blank.');
  } else if (!isBetween(message.length, min, max)) {
      showError(messageEl, `Message must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(messageEl);
      valid = true;
  }
  return valid;
}


// event listener which stops the submit button from submitting then calls the validation functions
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isFirstNameValid = checkFirstName(),
      isEmailValid = checkEmail(),
      isSubjectValid = checkSubject(),
      isMessageValid = checkMessage();

  let isFormValid = isFirstNameValid &&
      isEmailValid && isSubjectValid && isMessageValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  document.getElementById("form").submit();
  document.getElementById("form").reset();
  }
});

