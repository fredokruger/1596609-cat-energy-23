const imageContainer = document.querySelector('.slider__images-container');
const change = document.querySelector('.slider__handle');
const body = document.body;
const scale = document.querySelector('.slider__scale');

let isActive = false;

change.addEventListener('mousedown', () => {
  isActive = true;
});

window.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = true;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, scale.offsetWidth));
  change.style.left = 100 * shift / scale.offsetWidth + '%';
  let width = 100 - 100 * shift / scale.offsetWidth + '%';
  imageContainer.style.setProperty('--curtain-position', width);
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= scale.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

change.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
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
