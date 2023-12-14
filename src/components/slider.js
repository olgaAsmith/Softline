import Hammer from 'hammerjs';

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.gallery__slider');
  const prevButton = document.querySelector('.gallery__button_prev');
  const nextButton = document.querySelector('.gallery__button_next');
  const indicatorsContainer = document.querySelector('.gallery__indicators');

  const totalSlides = document.querySelectorAll(
    '.gallery__slider-image',
  ).length;
  let currentSlide = 1;

  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('gallery__indicator');
    indicatorsContainer.appendChild(indicator);
  }

  const indicators = document.querySelectorAll('.gallery__indicator');
  updateIndicators();

  prevButton.addEventListener('click', () => changeSlide(-1));
  nextButton.addEventListener('click', () => changeSlide(1));

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index + 1));
  });

  const hammer = new Hammer(slider);
  hammer.on('swiperight', () => changeSlide(-1));
  hammer.on('swipeleft', () => changeSlide(1));

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    } else if (currentSlide < 1) {
      currentSlide = totalSlides;
    }
    updateSlider();
    updateIndicators();
  }

  function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    updateSlider();
    updateIndicators();
  }

  function updateSlider() {
    const translateValue = (currentSlide - 1) * 100;
    slider.style.transform = `translateX(${-translateValue}%)`;
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle(
        'gallery__indicator_active',
        index + 1 === currentSlide,
      );
    });
  }
});
