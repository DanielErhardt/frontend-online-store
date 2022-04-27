import React from 'react';
import CardsProducts from '../components/CardsProduct';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from '../components/CartButton';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      products: [],
      produtosLista: [],
    };
  }

  // No DidMount chama faz a requisição das cartegorias na API
  // Começa o Requisito 6
  async componentDidMount() {
    console.log('entrou');
    const resposta = await getCategories();
    console.log('resposta', resposta);
    this.setState({
      produtosLista: resposta,
    });
  }

  // Código do Matheus
  getValueInput = ({ target }) => {
    this.setState({
      result: target.value,
    });
  }

  // Código do Matheus
  searchProducts = async (event) => {
    event.preventDefault();
    const { result } = this.state;
    const products = await getProductsFromCategoryAndQuery(`${result}`, `${result}`);
    console.log(products);
    this.setState({
      products: products.results,
    });
  }

  // Código do Samuel
  OnClickChange = () => {
    console.log('Xablau');
  }

  render() {
    const { produtosLista, products } = this.state;
    return (
      <section>
        {/* Código do Matheus */}
        <form>
          <label data-testid="home-initial-message" htmlFor="input-search">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              data-testid="query-input"
              id="input-search"
              type="text"
              onChange={ this.getValueInput }
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.searchProducts }
          >
            Pesquisar
          </button>
        </form>
        <div>
          {products.map((item) => (
            <CardsProducts
              key={ item.id }
              title={ item.title }
              price={ item.price }
              thumbnail={ item.thumbnail }
            />
          ))}
        </div>
        {/* Código do Daniel */}
        <CartButton />
        {/* Código do Samuel */}
        <div>
          {produtosLista.map((produto) => (
            <section key={ produto.id }>
              <label
                data-testid="category"
                htmlFor="produtos"
              >
                <div className="categorias">
                  <input
                    type="radio"
                    id="produtos"
                    name="produtos"
                    onClick={ this.OnClickChange }
                  />
                  { produto.name }
                </div>
              </label>
            </section>
          ))}
        </div>
      </section>
    );
  }
}
