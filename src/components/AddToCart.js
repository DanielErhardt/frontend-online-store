import React from 'react';
import PropTypes from 'prop-types';
import saveProduct from '../helpers/saveProduct';

export default class AddToCart extends React.Component {
  onclickAddOnCart = (product) => {
    const { quantityUpdateCart } = this.props;
    saveProduct(product);
    quantityUpdateCart();
  }

  render() {
    const { product, testId } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => this.onclickAddOnCart(product) }
          data-testid={ testId }
        >
          Adcionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCart.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  quantityUpdateCart: PropTypes.func,
}.isRequired;
