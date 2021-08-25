const imageContainer = document.querySelector('.slider__images-container');
const change = document.querySelector('.slider__handle');
const body = document.body;
const scale = document.querySelector('.slider__scale');
const ConditionBefore = document.querySelector('.slider__condition--before');
const ConditionAfter = document.querySelector('.slider__condition--after');
const mediaQuery = window.matchMedia('(min-width: 768px)')

if (!mediaQuery.matches) {
  scale.addEventListener('click', function () {
    if (change.style.transform === 'translateX(100%)') {
      change.style.transform = 'translateX(0)'
      imageContainer.style.setProperty('--curtain-position', '100%');
    } else {
      change.style.transform = 'translateX(100%)'
      imageContainer.style.setProperty('--curtain-position', '0%');
    }
  });
  ConditionBefore.addEventListener('click', function () {
    imageContainer.style.setProperty('--curtain-position', '100%');
    change.style.transform = 'translateX(0)'
  });
  ConditionAfter.addEventListener('click', function () {
    imageContainer.style.setProperty('--curtain-position', '0%');
    change.style.transform = 'translateX(100%)'
  });
} else {
  ConditionBefore.addEventListener('click', function () {
    imageContainer.style.setProperty('--curtain-position', '100%');
    change.style.left = '0';
  });

  ConditionAfter.addEventListener('click', function () {
    imageContainer.style.setProperty('--curtain-position', '0%');
    change.style.left = '100%';
  });

  let isActive = false;
  change.addEventListener('mousedown', function (event) {
    isActive = true;
  });

  window.addEventListener('mouseup', function () {
    isActive = false;
  });


  body.addEventListener('mouseleave', function () {
    isActive = true;
  });


  const beforeAfterSlider = function (x) {
    let shift = Math.max(0, Math.min(x, scale.offsetWidth));
    change.style.left = 100 * shift / scale.offsetWidth + '%';
    let width = 100 - 100 * shift / scale.offsetWidth + 0.01 + '%';
    imageContainer.style.setProperty('--curtain-position', width);
  };

  const pauseEvents = function (e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  body.addEventListener('mousemove', function (e) {
    if (!isActive) {
      return;
    }
    let x = e.pageX;
    x -= scale.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  });

  change.addEventListener('touchstart', function () {
    isActive = true;
    body.style.overflow = 'hidden';
  });

  window.addEventListener('touchend', function () {
    isActive = false;
    if (body.style.overflow === 'hidden') {
      body.style.overflow = '';
    };
  });

  body.addEventListener('touchcancel', function () {
    isActive = false;
  });

  body.addEventListener('touchmove', function (e) {
    if (!isActive) {
      return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= scale.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
  });
}


