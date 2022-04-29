import React from 'react';
import PropTypes from 'prop-types';
import saveProduct from '../helpers/saveProduct';

export default class AddToCart extends React.Component {
  render() {
    const { product, testId } = this.props;

    return (
      <div>
        <button
          type="button"
          onClick={ () => saveProduct(product) }
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
}.isRequired;
