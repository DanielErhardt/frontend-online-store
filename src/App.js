import React from 'react';
import './App.css';
import * as api from './services/api';

export default class App extends React.Component {
  async componentDidMount() {
    api.getCategories();
    // const result = await api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos');
  }

  render() {
    return (
      <div>
        <p>Teste</p>
      </div>
    );
  }
}
