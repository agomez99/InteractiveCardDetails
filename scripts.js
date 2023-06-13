const cardNameInput = document.querySelector('#cardname');
const cardNumberInput = document.querySelector('#cardnumber');
const expDateInput = document.querySelector('#expdate');
const expDateYInput = document.querySelector('#expdateYY');
const cvcInput = document.querySelector('#cvc');
const printName = document.querySelector('.print-name');
const printNumber = document.querySelector('.print-number');
const printDate = document.querySelector('.print-date');
const printCvc = document.querySelector('.print-cvc');

const maxLength = {
  cardNumber: 20,
  expDate: 2,
  expDateY: 2,
  cvc: 3
};

class InfoCard {
  constructor(name, number, dateM, dateY, cvc) {
    this.name = name;
    this.number = number;
    this.dateM = dateM;
    this.dateY = dateY;
    this.cvc = cvc;
  }

  printInfoCard() {
    let dateText = '';
    if (this.dateM || this.dateY) {
      dateText = `${this.dateM}/${this.dateY}`;
    }
    printName.innerHTML = `${this.name}`;
    printNumber.innerHTML = `${this.number}`;
    printDate.innerHTML = `${dateText}`;
    printCvc.innerHTML = `${this.cvc}`;
  }
}

function inputInfo() {
  const cardName = cardNameInput.value;
  const cardNumber = cardNumberInput.value;
  const expDate = expDateInput.value;
  const expDateY = expDateYInput.value;
  const cvc = cvcInput.value;
  
  const card = new InfoCard(cardName, cardNumber, expDate, expDateY, cvc);
  card.printInfoCard();
}

cardNameInput.addEventListener('input', inputInfo);

const inputs = [cardNumberInput, expDateInput, expDateYInput, cvcInput];
inputs.forEach((input) => {
  const inputType = input.getAttribute('id');
  input.addEventListener('input', () => {
    if (input.value.length > maxLength[inputType]) {
      input.value = input.value.slice(0, maxLength[inputType]);
    }
    inputInfo();
  });
});

// input card number mask
new Cleave(cardNumberInput, {
  blocks: [4, 4, 4, 4],
  delimiters: [' ', ' ', ' ']
});

// validate form and complete state mensagem 

(() => {
    'use strict';
  
    const forms = document.querySelectorAll('.needs-validation');
    let isFormVisible = true;
  
    const resetForm = () => {
      const form = document.querySelector('#form-content');
      const complete = document.querySelector('.complete');
      const invalidCardNumberFeedback = document.querySelector('#invalid-cardnumber');
       
      form.style.display = 'flex';
      complete.style.display = 'none';
      isFormVisible = true;
      form.classList.remove('was-validated');
      cardNameInput.value = '';
      cardNumberInput.value = '';
      expDateInput.value = '';
      expDateYInput.value = '';
      cvcInput.value = '';
      invalidCardNumberFeedback.textContent = '';
      printName.innerHTML = '';
      printNumber.innerHTML = '';
      printDate.innerHTML = ''; 
      printCvc.innerHTML = '';
      
    };
  
    const submitForm = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const form = event.currentTarget;
      const cardNumberInput = form.querySelector('#cardnumber');
      const invalidCardNumberFeedback = form.querySelector('#invalid-cardnumber');
  
      if (cardNumberInput.value.trim() === '') {
        invalidCardNumberFeedback.textContent = "Can't be blank";
      } else if (!/^[0-9 ]{19}$/.test(cardNumberInput.value)) {
        invalidCardNumberFeedback.textContent = 'Wrong format, numbers only';
      } else {
        invalidCardNumberFeedback.textContent = '';
        if (form.checkValidity()) {
          showOrHideForm();
        }
      }
  
      form.classList.add('was-validated');
    };
  
    const showOrHideForm = () => {
      const formContent = document.querySelector('#form-content');
      const complete = document.querySelector('.complete');
    
      if (isFormVisible) {
        formContent.style.display = 'none';
        complete.style.display = 'flex';
      } else {
        formContent.style.display = 'flex';
        complete.style.display = 'none';
      }
    
      isFormVisible = !isFormVisible;
    };
  
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', resetForm);
  
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', submitForm, false);
    });
  })();
  