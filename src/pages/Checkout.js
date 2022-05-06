import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckoutCard from '../components/CheckoutCard';
import getProducts from '../helpers/getProducts';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: getProducts() || [],
      nome: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    };
  }

  // Pega quantas vezes o produto aparece em cartItems e retorna o número
  getItemQuantity = (itemId) => {
    const cartItems = getProducts();
    const quantity = cartItems.filter((item) => item.id === itemId).length;
    return quantity;
  }

  onInputChange = ({ target }) => {
    console.log('Entrou em InputChange');
    console.log('target', target);
    this.setState({
      [target.name]: target.value,
    });
  }

  onClickBuy = async (event) => {
    event.preventDefault();
    // const { } = this.state;
    // const { } = this.props;
    console.log('fim');
  }

  render() {
    const { nome, email, cpf, phone, cep, address, complemento, numero, cidade,
      estado, cartItems } = this.state;
    // console.log('evaluations', evaluations);

    // Faz uma lista com os itens do carrinho sem elementos repetidos.
    // Não entendemos o que tá acontecendo. Tiramos o código do google.
    // Link: https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
    const uniqueItems = Array.from(new Set(cartItems.map((a) => a.id)))
      .map((id) => cartItems.find((a) => a.id === id));

    console.log('uniqueItems', uniqueItems);

    let totalPrice = 0;
    cartItems.forEach((item) => { totalPrice += item.price; });

    return (
      <section>
        <Link to="/">Voltar</Link>
        <div>
          <h3>Revise seus Produtos</h3>
          {uniqueItems.map((item) => (
            <CheckoutCard
              key={ item.id }
              quantity={ this.getItemQuantity(item.id) }
              totalPrice={ totalPrice }
              { ...item }
            />
          ))}
        </div>
        <div>
          <p>
            { `Total: R$ ${totalPrice}`}
          </p>
        </div>
        <form>
          <h3>Informações do Comprador</h3>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
            name="nome"
            value={ nome }
            onChange={ this.onInputChange }
            required
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.onInputChange }
            required
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            name="cpf"
            value={ cpf }
            onChange={ this.onInputChange }
            required
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
            name="phone"
            value={ phone }
            onChange={ this.onInputChange }
            required
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            name="cep"
            value={ cep }
            onChange={ this.onInputChange }
            required
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
            name="address"
            value={ address }
            onChange={ this.onInputChange }
            required
          />
          <input
            // data-testid="product-detail-email"
            type="text"
            placeholder="Complemento"
            name="complemento"
            value={ complemento }
            onChange={ this.onInputChange }
            required
          />
          <input
            // data-testid="product-detail-email"
            type="number"
            placeholder="Número"
            name="numero"
            value={ numero }
            onChange={ this.onInputChange }
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            name="cidade"
            value={ cidade }
            onChange={ this.onInputChange }
          />
          <select
            placeholder="Estado"
            name="estado"
            value={ estado }
            onChange={ this.onInputChange }
          >
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
          </select>
        </form>
        <div>
          <h3>Método de Pagamento</h3>
        </div>
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ this.onClickBuy }
        >
          Comprar
        </button>
      </section>
    );
  }
}
