'use strict';

const itemQty = document.querySelector('#product__qty');
const qtyMinus = itemQty.querySelector('#product__qty-minus');
const qtyPlus = itemQty.querySelector('#product__qty-plus');
const qtyField = itemQty.querySelector('#qty-field');

itemQty.addEventListener('click', (e) => {
  changeQty(e);
});

itemQty.addEventListener('keydown', (e) => {
  if (event.code === 'Space') {
    changeQty(e);
  }
});

const changeQty = (e) => {
  let qty = +qtyField.value;

  if (e.target === qtyMinus && qty > 1) {
    qty -= 1;
    qtyField.value = qty;
  }

  if (e.target === qtyPlus) {
    qty += 1;
    qtyField.value = qty;
  }
};
