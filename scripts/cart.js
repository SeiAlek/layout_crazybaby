'use strict';

const product = document.querySelector('#product');

const productList = document.querySelector('#product-list');
const btnDelete = productList.querySelectorAll('.product-list__item-delete');

const qtyProduct = product.querySelector('.quantity');
const qtyMinus = qtyProduct.querySelector('.quantity__button--minus');
const qtyPlus = qtyProduct.querySelector('.quantity__button--plus');
const qtyField = qtyProduct.querySelector('.form__field-qty');

qtyProduct.addEventListener('click', (e) => {
  changeQty(e);
});

qtyProduct.addEventListener('keydown', (e) => {
  if (event.code === 'Space') {
    changeQty(e);
  }
});

// btnAddProduct.addEventListener('click', () => {
//   const item = document.createElement('li');
//   const btnDelete = document.createElement('div');

//   item.classList.add('product-list__item');
//   btnDelete.classList.add('product-list__item-delete');
//   item.append('');
//   item.append(productQty);
//   item.append(btnDelete);

//   productList.append(item);
// });

productList.addEventListener('click', (e) => {
  btnDelete.forEach((item, i) => {
    if (e.target === item) {
      item.parentElement.remove();
    }
  });
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
