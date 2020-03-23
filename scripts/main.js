'use strict';

const btnMenuHeader = document.getElementById('header__menu-toggler');
const menuHeader = document.getElementById('header__menu');
const nav = document.getElementById('nav');

btnMenuHeader.addEventListener('click', () => {
  menuHeader.classList.toggle('header__menu--show');
  btnMenuHeader.classList.toggle('header__menu-toggler--cross');
  nav.classList.toggle('nav--show');
});

const techBlock = document.getElementById('technology__container');
const navSliderTech = document.getElementById('technology__slider-nav');
const prevSlideTech = document.getElementById('technology-slider--prev');
const nextSlideTech = document.getElementById('technology-slider--next');

navSliderTech.addEventListener('click', (e) => {
  event.preventDefault();

  if (e.target === prevSlideTech) {
    techBlock.classList.remove('technology__container--right');
  }

  if (e.target === nextSlideTech) {
    techBlock.classList.add('technology__container--right');
  }
});

const btnScroll = document.getElementById('button__scroll');

window.addEventListener('scroll', () => {
  if (pageYOffset > 300) {
    btnScroll.classList.add('button__scroll--show');
  } else {
    btnScroll.classList.remove('button__scroll--show');
  }
});
