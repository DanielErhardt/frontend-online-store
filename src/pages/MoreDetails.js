import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';
import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';
import ReviewForm from '../components/ReviewForm';

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

  render() {
    const { produto } = this.state;
    const { quantityUpdate, quantity } = this.props;
    return (
      <section>
        <Link to="/">Voltar</Link>
        <CartButton quantity={ quantity } />
        <div data-testid="product-detail-name">
          {produto.attributes && produto.attributes.map((item) => (
            <div key={ item.id }>
              <p>{item.name}</p>
              <p>{item.value_name}</p>
            </div>
          ))}
          <AddToCart
            quantityUpdateCart={ quantityUpdate }
            product={ produto }
            testId="product-detail-add-to-cart"
          />
          <ReviewForm
            id={ produto.id }
          />
        </div>
      </section>
    );
  }
}

MoreDetails.propTypes = {
  id: PropTypes.string,
  quantityUpdate: PropTypes.func,
  quantity: PropTypes.number,
}.isRequired;
