import React from 'react';
import PropTypes from 'prop-types';

export default class AddToCart extends React.Component {
  render() {
    const { addToCart, id, testId } = this.props;

    return (
      <div>
        <button
          type="button"
          onClick={ () => addToCart(id) }
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
  addToCart: PropTypes.func,
}.isRequired;
