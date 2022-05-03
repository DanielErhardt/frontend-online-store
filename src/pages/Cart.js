import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import getProducts from '../helpers/getProducts';
import saveProduct from '../helpers/saveProduct';
import removeProduct from '../helpers/removeProduct';
import overwriteProducts from '../helpers/overwriteProducts';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: getProducts() || [],
    };
  }

  removeAllSingleItem = (itemId) => {
    const cartItems = getProducts();
    const filteredItems = cartItems.filter((item) => item.id !== itemId);
    overwriteProducts(filteredItems);
    this.setState({
      cartItems: getProducts(),
    });
  }

  changeQuantity = (itemId, increase) => {
    const cartItems = getProducts();
    const itemWithId = cartItems.find((item) => item.id === itemId);

    if (increase) {
      saveProduct(itemWithId);
    } else {
      removeProduct(itemWithId);
    }

    this.setState({
      cartItems: getProducts(),
    });
  }

  // Pega quantas vezes o produto aparece em cartItems e retorna o número
  getItemQuantity = (itemId) => {
    const cartItems = getProducts();
    const quantity = cartItems.filter((item) => item.id === itemId).length;
    return quantity;
  }

  finalizarCompra = () => {
    const { history } = this.props;
    console.log('Entrou em finalizarCompra');
    history.push('/checkout');
  }

  render() {
    const { cartItems } = this.state;

    // Faz uma lista com os itens do carrinho sem elementos repetidos.
    // Não entendemos o que tá acontecendo. Tiramos o código do google.
    // Link: https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
    const uniqueItems = Array.from(new Set(cartItems.map((a) => a.id)))
      .map((id) => cartItems.find((a) => a.id === id));

    let totalPrice = 0;
    cartItems.forEach((item) => { totalPrice += item.price; });

    const isCartEmpty = !cartItems || cartItems.length === 0;
    return (
      <section>
        <Link to="/">Voltar</Link>
        <br />
        {isCartEmpty ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          uniqueItems.map((item) => (
            <CartItem
              key={ item.id }
              changeQuantity={ this.changeQuantity }
              removeAll={ this.removeAllSingleItem }
              quantity={ this.getItemQuantity(item.id) }
              { ...item }
            />
          ))
        )}
        <div>
          { `Total: R$${totalPrice}` }
        </div>
        <button
          type="button"
          onClick={ this.finalizarCompra }
          data-testid="checkout-products"
        >
          Finalizar Compra
        </button>
      </section>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape),
  history: PropTypes.shape,
  updateCartItems: PropTypes.func,
}.isRequired;
