import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './CSS/index.css';
// Context
import { ProductsProvider } from './Context/products_context';

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,

  document.getElementById('root')
);
