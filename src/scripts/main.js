'use strict';

const btnMenuHeader = document.getElementById('header__menu-toggler');
const menuHeader = document.getElementById('header__menu');

btnMenuHeader.addEventListener('click', () => {
  menuHeader.classList.toggle('header__menu--show');
  btnMenuHeader.classList.toggle('header__menu-toggler--cross');
});
