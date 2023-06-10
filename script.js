const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const expiryMonth = document.getElementById('month');
const expiryYear = document.getElementById('year');
const cvv = document.getElementById('cvv');
const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');
const cvvError = document.getElementById('cvv-error');

function validateCardNumber() {
  if (cardNumber.value.length < 16 ) {
    numberError.textContent = 'Card number must be 16 digits'
    numberError.style.display = 'block';
    numberError.style.color = 'red';
    numberError.style.fontSize = '13px'

  } else {
    cardNumber.setCustomValidity('');
  }
}

function validateCardHolder() {
  if (cardHolder.value.length < 3) {
    nameError.textContent = 'Card holder must be at least 3 characters'
    nameError.style.display = 'block';
    nameError.style.color = 'red';
    nameError.style.fontSize = '13px'
  } else {
    cardHolder.setCustomValidity('');
  }

}

function validateExpiryMonth() {
  if (expiryMonth.value.length < 2 && expiryMonth.value.length > 0) {
    expiryMonth.setCustomValidity('Expiry month must be 2 digits');
    monthError.textContent = 'Expiry month must be 2 digits'
    monthError.style.display = 'block';
    monthError.style.color = 'red';
    monthError.style.fontSize = '12px'

  } 
  else if (expiryMonth.value.length === 0) { // use strict comparison operator
    expiryMonth.setCustomValidity('Expiry cannot be blank');
    monthError.textContent = 'Cant be blank'
    monthError.style.display = 'block';
    monthError.style.color = 'red';
    monthError.style.fontSize = '12px'
  }
  else {
    expiryMonth.setCustomValidity('');
  }
}

function validateExpiryYear() {
    // Check if the length of the value is less than 2 (or 1) and set error message
    if (expiryYear.value.length < 2 && expiryYear.value.length > 0) {
      expiryYear.setCustomValidity('Expiry year must be 2 digits');
      yearError.textContent = 'Expiry year must be 2 digits'
      yearError.style.display = 'block';
      yearError.style.color = 'red';
      yearError.style.fontSize = '12px'

    }
    // Check if the value is empty and set error message
    else if (expiryYear.value.length === 0) { // use strict comparison operator
      expiryYear.setCustomValidity('Expiry cannot be blank');
      yearError.textContent = 'Cant be blank'
      yearError.style.display = 'block';
      yearError.style.color = 'red';
      yearError.style.fontSize = '12px'
    }
    // If none of the conditions above are met, clear the error message
    else {
      expiryYear.setCustomValidity('');
    }
  }
  

function validateCvv() {
if (cvv.value.length < 3 && cvv.value.length > 0) {
    cvv.setCustomValidity('CVV must be 3 digits');
    cvvError.textContent = 'CVV must be 3 digits'
    cvvError.style.display = 'block';
    cvvError.style.color = 'red';
    cvvError.style.fontSize = '12px'

  }  

  else if (cvv.value.length === 0) { // use strict comparison operator
   cvv.setCustomValidity('Expiry cannot be blank');
   cvvError.textContent = 'Cant be blank'
   cvvError.style.display = 'block';
   cvvError.style.color = 'red';
   cvvError.style.fontSize = '12px'

  }
  else {
    cvv.setCustomValidity('');
  }
}

cardNumber.addEventListener('input', validateCardNumber);
cardHolder.addEventListener('input', validateCardHolder);
expiryMonth.addEventListener('input', validateExpiryMonth);
expiryYear.addEventListener('input', validateExpiryYear);
cvv.addEventListener('input', validateCvv);

function validateForm() {
  validateCardNumber();
  validateCardHolder();
  validateExpiryMonth();
  validateExpiryYear();
  validateCvv();







  
  if (cardNumber.checkValidity() && cardHolder.checkValidity() && expiryMonth.checkValidity() && expiryYear.checkValidity() && cvv.checkValidity()) {
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  if (validateForm()) {
    alert('Form submitted');
  } else {
    console.error('Form could not be submitted due to validation errors.');
  }
}

function resetForm() {
  document.getElementById('myform').reset();
}

document.getElementById('confirm-btn').addEventListener('click', submitForm);
