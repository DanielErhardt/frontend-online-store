// A função overwriteProducts deve sobrescrever a lista de produtos no localStorage, em uma chave denominada cartItems.
const overwriteProducts = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

if (typeof module !== 'undefined') {
  module.exports = overwriteProducts;
}
