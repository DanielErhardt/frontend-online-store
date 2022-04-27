import React from 'react';
import PropTypes from 'prop-types';

export default class CardsProducts extends React.Component {
  render() {
    // Código do Matheus
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <p>
          { price }
          {' '}
        </p>
        <img src={ thumbnail } alt="" />
      </div>
    );
  }
}

CardsProducts.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
