let mainNav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.nav-toggle');
let burgerImage = document.querySelector('.nav-toggle__burger');

navToggle.addEventListener('click', function () {
  burgerImage.classList.toggle('nav-toggle__burger--active');
  setTimeout(function () {  //Задержка, чтобы свойство display успело очиститься
    if (mainNav.style.display == '') {
      mainNav.style.display = 'block';
      mainNav.classList.add('main-nav--visible');
      setTimeout(function () {
        mainNav.classList.remove('main-nav--visible');
      }, 200);
    } else {
      mainNav.classList.add('main-nav--hidden');
      setTimeout(function () { //Задержка, чтобы анимация ухода успела примениться
        mainNav.style.display = '';
        mainNav.classList.remove('main-nav--hidden');
      }, 200);
    }
  }, 200);
})
