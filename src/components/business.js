const businessItems = document.querySelectorAll('.business__item');

businessItems.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1280) {
      const insideElement = item.querySelector('.business__item-block-inside');
      const arrowElement = item.querySelector('.business__item-arrow');
      const textInside = item.querySelector(
        '.business__item-block-description',
      );

      insideElement.classList.add('business__item-block-inside_active');
      arrowElement.classList.add('business__item-arrow_active');
      textInside.classList.add('business__item-block-description_active');
    }
  });

  item.addEventListener('mouseleave', function () {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1280) {
      const insideElement = item.querySelector('.business__item-block-inside');
      const arrowElement = item.querySelector('.business__item-arrow');
      const textInside = item.querySelector(
        '.business__item-block-description',
      );

      insideElement.classList.remove('business__item-block-inside_active');
      arrowElement.classList.remove('business__item-arrow_active');
      textInside.classList.remove('business__item-block-description_active');
    }
  });

  item.addEventListener('click', function () {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1280) {
      const insideElement = item.querySelector('.business__item-block-inside');
      const arrowElement = item.querySelector('.business__item-arrow');
      const textInside = item.querySelector(
        '.business__item-block-description',
      );

      item.classList.toggle('business__item_active');
      insideElement.classList.toggle('business__item-block-inside_active');
      arrowElement.classList.toggle('business__item-arrow_active');
      textInside.classList.toggle('business__item-block-description_active');
      console.log(textInside);
    }
  });
});
