const mapMenu = document.querySelector('.map__office');
const mapMenuArrow = document.querySelector('.map__office-arrow');
const mapExtraMenu = document.querySelector('.map__extra-menu');
const menuList = document.querySelector('.map__menu-list');
const menuItems = document.querySelectorAll('.map__menu-item');
const imageMap = document.querySelector('.map__card-image');
const extraMenuTitles = document.querySelectorAll(
  '.map__extra-menu-submenu-title',
);
const extraMenuTitleArrows = document.querySelectorAll(
  '.map__extra-menu-submenu-arrow',
);

mapMenu.addEventListener('click', function () {
  mapMenu.classList.toggle('map__office_active');
  mapMenuArrow.classList.toggle('map__office-arrow_active');
  mapExtraMenu.classList.toggle('map__extra-menu_active');
});

menuList.addEventListener('click', function (event) {
  if (event.target.classList.contains('map__menu-item')) {
    menuItems.forEach(item =>
      item.classList.remove(
        'map__menu-item_active',
        'map__menu-item_underline',
      ),
    );

    event.target.classList.add(
      'map__menu-item_active',
      'map__menu-item_underline',
    );
    const imageSrc = event.target.getAttribute('data-image');
    imageMap.src = imageSrc;
  }
});

extraMenuTitles.forEach(function (extraMenuTitle, id) {
  extraMenuTitle.addEventListener('click', function () {
    extraMenuTitle.classList.toggle('map__extra-menu-submenu-title_active');
    extraMenuTitleArrows[id].classList.toggle(
      'map__extra-menu-submenu-arrow_active',
    );
    const closestList = extraMenuTitle.nextElementSibling;
    closestList.classList.toggle('map__extra-menu-submenu_active');
  });
});
