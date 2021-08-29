const imageContainer = document.querySelector('.slider__images-container');
const change = document.querySelector('.slider__handle');
const body = document.body;
const scale = document.querySelector('.slider__scale');
const ConditionBefore = document.querySelector('.slider__condition--before');
const ConditionAfter = document.querySelector('.slider__condition--after');
const mediaQuery = window.matchMedia('(min-width: 768px)');


/*let isActive = false;
function rezizeChecker() {

  if (mediaQuery.matches) {

    change.addEventListener('mousedown', () => {
      isActive = true;
    });

    scale.addEventListener('mousedown', () => {
      isActive = true;
    });

    window.addEventListener('mouseup', () => {
      isActive = false;
    });

    body.addEventListener('mouseleave', () => {
      isActive = false;
    });

    body.addEventListener('mousemove', (e) => {
      if (!isActive) {
        return;
      }
      let x = e.pageX;
      x -= scale.getBoundingClientRect().left;
      beforeAfterSlider(x);
      e.stopPropagation();
      e.preventDefault();
    });

    imageContainer.style.setProperty('--curtain-position', '');
    change.style.transform = '';

    const beforeAfterSlider = function (x) {
      let shift = Math.max(0, Math.min(x, scale.offsetWidth));
      change.style.left = 100 * shift / scale.offsetWidth + '%';
      let width = 100 - 100 * shift / scale.offsetWidth + 0.01 + '%';
      imageContainer.style.setProperty('--curtain-position', width);
    };

    change.addEventListener('touchstart', () => {
      isActive = true;
      body.style.overflow = 'hidden';
    });

    body.addEventListener('touchend', () => {
      isActive = false;
      if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
      };
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
      e.stopPropagation();
    });

    scale.addEventListener('click', (e) => {
      let x = e.pageX;
      x -= scale.getBoundingClientRect().left;
      beforeAfterSlider(x);
      e.stopPropagation();
      e.preventDefault();
    });

    ConditionBefore.addEventListener('click', () => {
      imageContainer.style.setProperty('--curtain-position', '100%');
      change.style.transform = '';
      change.style.left = '0%';
    });

    ConditionAfter.addEventListener('click', () => {
      imageContainer.style.setProperty('--curtain-position', '0%');
      change.style.transform = '';
      change.style.left = '100%';
    });

  } else {
    imageContainer.style.setProperty('--curtain-position', '');
    change.style.left = '';
    change.addEventListener('touchstart', () => {
      isActive = false;
    });

    change.addEventListener('mousedown', () => {
      isActive = false;
    });

    scale.addEventListener('click', () => {
      change.style.left = '';
      if (change.style.transform === 'translateX(100%)') {
        change.style.transform = '';
        imageContainer.style.setProperty('--curtain-position', '100%');
      } else {
        change.style.transform = 'translateX(100%)';
        imageContainer.style.setProperty('--curtain-position', '0%');
      }
    });
    ConditionBefore.addEventListener('click', () => {
      change.style.left = '';
      imageContainer.style.setProperty('--curtain-position', '100%');
      change.style.transform = '';
    });

    ConditionAfter.addEventListener('click', () => {
      change.style.left = '';
      imageContainer.style.setProperty('--curtain-position', '0%');
      change.style.transform = 'translateX(100%)';
    });
  }
}
rezizeChecker()
window.addEventListener('resize', () => {
  rezizeChecker()
})*/

function rezizeChecker() {
  let isActive = false;

  if (mediaQuery.matches) {
    imageContainer.style.setProperty('--curtain-position', '');
    change.style.transform = '';
  } else {
    imageContainer.style.setProperty('--curtain-position', '');
    change.style.left = '';
  }

  change.addEventListener('mousedown', () => {
    if (mediaQuery.matches) {
      isActive = true;
    } else {
      return
    }
  });

  scale.addEventListener('mousedown', () => {
    if (mediaQuery.matches) {
      isActive = true;
    } else {
      return
    }
  });

  window.addEventListener('mouseup', () => {
    isActive = false;
  });

  body.addEventListener('mouseleave', () => {
    isActive = false;
  });

  body.addEventListener('mousemove', (e) => {
    if (mediaQuery.matches) {
      if (!isActive) {
        return;
      }
      let x = e.pageX;
      x -= scale.getBoundingClientRect().left;
      beforeAfterSlider(x);
      e.stopPropagation();
      e.preventDefault();
    } else {
      return
    }
  });

  const beforeAfterSlider = function (x) {
    if (mediaQuery.matches) {
      let shift = Math.max(0, Math.min(x, scale.offsetWidth));
      change.style.left = 100 * shift / scale.offsetWidth + '%';
      let width = 100 - 100 * shift / scale.offsetWidth + 0.01 + '%';
      imageContainer.style.setProperty('--curtain-position', width);
    } else {
      return;
    }
  };

  change.addEventListener('touchstart', () => {
    if (mediaQuery.matches) {
      isActive = true;
      body.style.overflow = 'hidden';
    } else {
      return;
    }
  });

  body.addEventListener('touchend', () => {
    if (mediaQuery.matches) {
      isActive = false;
      if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
      };
    } else {
      return
    }
  });

  body.addEventListener('touchcancel', () => {
    isActive = false;
  });

  body.addEventListener('touchmove', (e) => {
    if (mediaQuery.matches) {
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
      e.stopPropagation();
      e.preventDefault();
    } else {
      return
    }
  }, { passive: false });

  scale.addEventListener('click', (e) => {
    if (mediaQuery.matches) {
      let x = e.pageX;
      x -= scale.getBoundingClientRect().left;
      beforeAfterSlider(x);
    } else {
      change.style.left = '';
      if (change.style.transform === 'translateX(100%)') {
        change.style.transform = '';
        imageContainer.style.setProperty('--curtain-position', '100%');
      } else {
        change.style.transform = 'translateX(100%)';
        imageContainer.style.setProperty('--curtain-position', '0%');
      }
    }
  });

  ConditionBefore.addEventListener('click', () => {
    if (mediaQuery.matches) {
      imageContainer.style.setProperty('--curtain-position', '100%');
      change.style.transform = '';
      change.style.left = '0%';
    } else {
      change.style.left = '';
      imageContainer.style.setProperty('--curtain-position', '100%');
      change.style.transform = '';
    }
  });

  ConditionAfter.addEventListener('click', () => {
    if (mediaQuery.matches) {
      imageContainer.style.setProperty('--curtain-position', '0%');
      change.style.transform = '';
      change.style.left = '100%';
    } else {
      change.style.left = '';
      imageContainer.style.setProperty('--curtain-position', '0%');
      change.style.transform = 'translateX(100%)';
    }
  });
}

window.addEventListener('resize', () => {
  rezizeChecker()
})
rezizeChecker()
