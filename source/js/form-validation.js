let inputRequired = document.querySelectorAll('.select-form__required');
let btnSubmit = document.querySelector('.select-form__button');
let inputTel = document.querySelector('.select-form__input-contact--tel');
let patternTel = '\\+7\\s?[\\(]{1}[0-9]{3}[\\)]{1}\\s?\\d{3}[-]{1}\\d{2}[-]{1}\\d{2}';
console.log(patternTel)
inputTel.setAttribute('pattern', patternTel);


for (let i = 0; i < inputRequired.length; i++) {
  btnSubmit.addEventListener('click', function (e) {

    if (inputRequired[i].checkValidity() == false) {
      e.preventDefault();
      inputRequired[i].scrollIntoView({ block: 'center' });
      inputRequired[i].classList.add('select-form__required--alert');
    }
  })
  inputRequired[i].addEventListener('input', function () {
    inputRequired[i].classList.remove('select-form__required--alert');
  })
}
