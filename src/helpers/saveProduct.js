// A função saveProducts deve salvar a lista de produtos no localStorage, em uma chave denominada cartItems.
const getProducts = require('./getProducts');

const saveProduct = (item) => {
  if (getProducts() === null) {
    localStorage.setItem('cartItems', JSON.stringify([item]));
  } else {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([
        ...getProducts(),
        item,
      ]),
    );
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveProduct;
}
