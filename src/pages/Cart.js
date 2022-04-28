import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

export default class Cart extends React.Component {
  removeAll = (itemId) => {
    const { updateCartItems, cartItems } = this.props;
    const filteredItems = cartItems.filter((item) => item.id !== itemId);

    updateCartItems(filteredItems);
  }

  changeQuantity = (itemId, increase) => {
    const { updateCartItems, cartItems } = this.props;
    const itemWithId = cartItems.find((item) => item.id === itemId);

    if (increase) {
      cartItems.push(itemWithId);
    } else {
      const index = cartItems.indexOf(itemWithId);
      cartItems.splice(index, 1);
    }

    updateCartItems(cartItems);
  }

  // Pega quantas vezes o produto aparece em cartItems e retorna o número
  getProductQuantity = (product) => {
    const { cartItems } = this.props;
    const quantity = cartItems.filter((item) => item.id === product.id).length;
    return quantity;
  }

  render() {
    const { cartItems } = this.props;

    // Faz uma lista com os itens do carrinho sem elementos repetidos.
    const uniqueItems = [...new Set(cartItems)];

    const isCartEmpty = cartItems && cartItems.length > 0;
    return (
      <section>
        {isCartEmpty ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          uniqueItems.map((item) => (
            <CartItem
              key={ item.id }
              quantity={ this.getProductQuantity(item) }
              { ...item }
            />
          ))
        )}
      </section>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape),
  updateCartItems: PropTypes.func,
}.isRequired;
