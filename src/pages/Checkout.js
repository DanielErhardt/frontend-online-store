// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import saveEvaluation from '../helpers/saveEvaluation';
// import getEvaluations from '../helpers/getEvaluations';
// import { getProductDetails } from '../services/api';

// export default class Checkout extends Component {
//   constructor() {
//     super();
//     this.state = {
//       nome: '',
//       email: '',
//       cpf: '',
//       phone: '',
//       cep: '',
//       address: '',
//       complemento: '',
//       numero: '',
//       cidade: '',
//       estado: '',
//     };
//   }

//   componentDidMount() {
//     // console.log('evaluations_salvos', localStorage);
//     // const { id } = this.props;
//     // console.log('id', id);
//     const hasEvaluation = getEvaluations() !== null;
//     // console.log('Entrou no else');
//     // console.log(getEvaluations());
//     this.setState({
//       hasEvaluation,
//       evaluations: hasEvaluation ? getEvaluations() : [],
//     });
//   }

//   onInputChange = ({ target }) => {
//     // console.log('Entrou em InputChange');
//     // console.log('target', target);
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   onClickBuy = async (event) => {
//     event.preventDefault();
//     const { } = this.state;
//     const { } = this.props;
//   }

//   render() {
//     const { } = this.state;
//     // console.log('evaluations', evaluations);
//     return (
//       <section>
//         <div>
//           <h3>Revise seus Produtos</h3>
//         </div>
//         <form>
//           <h3>Informações do Comprador</h3>
//           <input
//             data-testid="checkout-fullname"
//             type="text"
//             placeholder="Nome Completo"
//             name="nome"
//             value={ nome }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             data-testid="checkout-email"
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={ email }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             data-testid="checkout-cpf"
//             type="number"
//             placeholder="CPF"
//             name="cpf"
//             value={ cpf }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             data-testid="checkout-phone"
//             type="number"
//             placeholder="Telefone"
//             name="phone"
//             value={ phone }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             data-testid="checkout-cep"
//             type="number"
//             placeholder="CEP"
//             name="cep"
//             value={ cep }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             data-testid="checkout-address"
//             type="text"
//             placeholder="Endereço"
//             name="address"
//             value={ address }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             // data-testid="product-detail-email"
//             type="text"
//             placeholder="Complemento"
//             name="complemento"
//             value={ complemento }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             // data-testid="product-detail-email"
//             type="number"
//             placeholder="Número"
//             name="numero"
//             value={ numero }
//             onChange={ this.onInputChange }
//             required
//           />
//           <input
//             // data-testid="product-detail-evaluation"
//             type="text"
//             placeholder="Cidade"
//             name="cidade"
//             value={ cidade }
//             onChange={ this.onInputChange }
//           />
//           <select
//             placeholder="Estado"
//             name="estado"
//             value={ estado }
//             onChange={ this.onInputChange }
//           >
//             <option>AC</option>
//             <option>AL</option>
//             <option>AP</option>
//             <option>AM</option>
//             <option>BA</option>
//             <option>CE</option>
//             <option>DF</option>
//             <option>ES</option>
//             <option>GO</option>
//             <option>MA</option>
//             <option>MT</option>
//             <option>MS</option>
//             <option>MG</option>
//             <option>PA</option>
//             <option>PB</option>
//             <option>PR</option>
//             <option>PE</option>
//             <option>PI</option>
//             <option>RJ</option>
//             <option>RN</option>
//             <option>RS</option>
//             <option>RO</option>
//             <option>RR</option>
//             <option>SC</option>
//             <option>SP</option>
//             <option>SE</option>
//             <option>TO</option>
//           </select>
//         </form>
//         <div>
//           <h3>Método de Pagamento</h3>
//         </div>
//         <button
//           type="submit"
//           data-testid="submit-review-btn"
//           onClick={ this.onClickBuy }
//         >
//           Comprar
//         </button>
//       </section>
//     );
//   }
// }

// Checkout.propTypes = {
//   id: PropTypes.string,
// }.isRequired;
