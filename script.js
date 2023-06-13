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
const success = document.getElementById('success');
const successImage = document.createElement('img');
successImage.src = './images/icon-complete.svg';

function validateCardNumber() {
  const errorMessage = 'Card number must be 16 digits';
  const numbersMessage = 'Wrong format, numbers only';
  const cardNumberValue = cardNumber.value;
  const errorStyles = {
    display: 'flex',
    color: 'red',
    fontSize: '13px',
    marginTop: '5px'
  }
  if (cardNumberValue.length !== 16 || isNaN(cardNumberValue)) {
    numberError.textContent = isNaN(cardNumberValue) ? numbersMessage : errorMessage;
    Object.assign(numberError.style, errorStyles);
  } else {
    numberError.textContent = '';
    cardNumber.setCustomValidity('');
  }
}


function validateCardHolder() {
  const errorMessage = 'Card holder must be at least 3 characters';
  const cardHolderValue = cardHolder.value;
  if (cardHolderValue.length < 3 ) {
    nameError.textContent = errorMessage;
    nameError.style.display = 'block';
    nameError.style.color = 'red';
    nameError.style.fontSize = '13px';
  } else {
    nameError.textContent = '';
    cardHolder.setCustomValidity('');
  }


}

function validateExpiryMonth() {
  const errorMessage = 'Expiry must be 2 digits';
  const numbersMonthMessage = 'Wrong format, numbers only';
  const expiryMonthValue = expiryMonth.value;
  const errorStyles = {
    display: 'flex',
    color: 'red',
    fontSize: '13px',
    marginTop: '5px'

  }
  if (expiryMonthValue.length < 2|| expiryMonthValue.length > 2 || isNaN(expiryMonthValue)) {
    monthError.textContent = isNaN(expiryMonthValue) ? numbersMonthMessage : errorMessage;
    Object.assign(monthError.style, errorStyles);
  }
  else {
    monthError.textContent = '';
    expiryMonth.setCustomValidity('');
  }
}

function validateExpiryYear() {
  const errorMessage = 'Expiry must be 2 digits';
  const numbersYearMessage = 'Wrong format, numbers only';
  const expiryYearValue = expiryYear.value;
  const errorStyles = {
    display: 'flex',
    color: 'red',
    fontSize: '13px',    
    marginTop: '5px'
  
    }

  if (expiryYearValue.length < 2 || expiryYearValue.length > 2 || isNaN(expiryYearValue)) {
    yearError.textContent = isNaN(expiryYearValue) ? numbersYearMessage : errorMessage;
    Object.assign(yearError.style, errorStyles);
  } 
  else {
    yearError.textContent = '';
    expiryYear.setCustomValidity('');
  }
}


function validateCvv() {
  const errorMessage = 'CVV must be 3 digits';
  const numbersCvvMessage = 'Wrong format, numbers only';
  const cvvValue = cvv.value;
  const errorStyles = {
    display: 'flex',
    color: 'red',
    fontSize: '13px',
    marginTop: '5px'

    }

  if (cvvValue.length < 3 || cvvValue.length > 3 || isNaN(cvvValue)) {
    cvvError.textContent = isNaN(cvvValue) ? numbersCvvMessage : errorMessage;
    Object.assign(cvvError.style, errorStyles);
  }
  else {
    cvvError.textContent = '';
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
const submitForm = (event) => {
  event.preventDefault();
  const validated = validateForm() === true && 
                    cardNumber.value.length === 16 && 
                    cardHolder.value.length >= 3 && 
                    expiryMonth.value.length === 2 && 
                    expiryYear.value.length === 2 && 
                    cvv.value.length === 3;
  if (validated) {
    handleSuccess();
    console.log('Form submitted successfully.');
    return true;
  } else {
    handleError();
    return false;
  }
};

const handleSuccess = () => {
  success.classList.add('success-message');
  success.style.display = 'flex';
  success.style.flexDirection = 'column';
  success.style.alignItems = 'center';
  success.style.justifyContent = 'center';

  const html = `
    <div class="success-message">
      <img src="/images/icon-complete.svg" alt="Success icon">
      <h1 class="success-message-title">THANK YOU!<h1>
      <p class="success-message-text">We've added your card details</p>
      <button class="reset-button">Continue</button>
    </div>
  `;
  success.innerHTML = html;
  const resetButton = success.querySelector('.reset-button');
  resetButton.addEventListener('click', resetForm);
};
 
const resetForm = () => {
  cardNumber.value = '';
  cardHolder.value = '';
  expiryMonth.value = '';
  expiryYear.value = '';
  cvv.value = '';
  success.textContent = '';
  success.style.display = 'none';
  location.reload();
};

const handleError = () => {
  console.error('Form could not be submitted due to validation errors.');
};

document.getElementById('confirm-btn').addEventListener('click', submitForm);
