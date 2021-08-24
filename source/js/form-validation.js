let inputRequired = document.querySelectorAll('.select-form__required');
let btnSubmit = document.querySelector('.select-form__button');
for (let i = 0; i < inputRequired.length; i++) {
  btnSubmit.addEventListener('click', function (e) {

    if (inputRequired[i].checkValidity() == false) {
      e.preventDefault();
      inputRequired[i].scrollIntoView({ block: "center" });
      inputRequired[i].classList.add('select-form__required--alert');
    }
  })
  inputRequired[i].addEventListener('input', function () {
    inputRequired[i].classList.remove('select-form__required--alert');
  })
}
