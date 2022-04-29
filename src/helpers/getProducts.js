// A função getProducts é responsável por recuperar a lista de produtos salva no local.Storage
const getProducts = () => JSON.parse(localStorage.getItem('cartItems'));

if (typeof module !== 'undefined') {
  module.exports = getProducts;
}
