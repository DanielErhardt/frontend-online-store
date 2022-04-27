import React from 'react';
import CardsProducts from '../components/CardsProduct';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from '../components/CartButton';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      queryResult: '',
      products: [],
      categoriasLista: [],
      categoria: '',
    };
  }

  // No DidMount chama faz a requisição das cartegorias na API
  // Começa o Requisito 6
  async componentDidMount() {
    // console.log('entrou');
    const resposta = await getCategories();
    // console.log('resposta', resposta);
    this.setState({
      categoriasLista: resposta,
    });
  }

  // Código do Matheus
  getValueInput = ({ target }) => {
    console.log('valor digitado', target.value);
    this.setState({
      [target.name]: target.value,
    }, async () => {
      await this.searchProducts();
    });
  }

  // Código do Matheus
  searchProducts = async () => {
    const { queryResult, categoria } = this.state;
    const products = (
      await getProductsFromCategoryAndQuery(`${categoria}`, `${queryResult}`)
    );
    console.log('products', products.results);
    this.setState({
      products: products.results,
    });
  }

  // Código do Samuel
  // OnClickChange = async ({ target }) => {
  //   // console.log('Entrou em ClickChange');
  //   console.log(target.value);
  //   const categoria = target.value;
  //   const products = await getProductsFromCategoryAndQuery('', categoria);
  //   console.log('products', products);
  //   this.setState({
  //     products: products.results,
  //   });
  // }

  render() {
    const { categoriasLista, products, queryResult } = this.state;
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
              name="queryResult"
              value={ queryResult }
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
          {categoriasLista.map((categoria) => (
            <section key={ categoria.id }>
              <label
                data-testid="category"
                htmlFor={ categoria.id }
              >
                <div className="categorias">
                  <input
                    type="radio"
                    id={ categoria.id }
                    name="categoria"
                    value={ categoria.id }
                    onClick={ this.getValueInput }
                  />
                  { categoria.name }
                </div>
              </label>
            </section>
          ))}
        </div>
      </section>
    );
  }
}
