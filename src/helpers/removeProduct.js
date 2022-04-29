// A função saveProducts deve salvar a lista de produtos no localStorage, em uma chave denominada cartItems.
const getProducts = require('./getProducts');

const removeProduct = (item) => {
  const cartItems = getProducts();
  const index = cartItems.indexOf(item);
  cartItems.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

if (typeof module !== 'undefined') {
  module.exports = removeProduct;
}
