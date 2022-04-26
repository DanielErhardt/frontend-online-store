import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
// import { getCategories } from './services/api';
import * as api from './services/api';
/* commnet */
export default class App extends React.Component {
  componentDidMount() {
    api.getCategories('construcao').then((categories) => { console.log(categories); });
  }

  /*  showApi = async () => {
    console.log(await getCategories('computador'));
  } */

  render() {
    return (
      <div>
        <p>Teste</p>
      </div>
    );
  }
}
