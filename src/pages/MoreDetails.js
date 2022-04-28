import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import AddToCart from '../components/AddToCart';

export default class MoreDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      produto: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const detailsProducts = await getProductDetails(id);
    this.setState({
      produto: detailsProducts,
    });
  }

  // marca, peso,

  render() {
    const { match: { params: { id } }, addToCart } = this.props;
    const { produto } = this.state;
    return (
      <section data-testid="product-detail-name">
        {produto.attributes && produto.attributes.map((item) => (
          <div key={ item.id }>
            <p>{item.name}</p>
            <p>{item.value_name}</p>
          </div>
        ))}
        <AddToCart
          addToCart={ addToCart }
          id={ id }
          testId="product-detail-add-to-cart"
        />
      </section>
    );
  }
}

MoreDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;
