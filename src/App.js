import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './pages/Home';

export default class App extends React.Component {
  async componentDidMount() {
    api.getCategories();
    // const result = await api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos');
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}
