import React from 'react';
import { useParams } from 'react-router-dom';

import { productos } from '../Utils/constants';
import { ProductsDisplayer } from '../Components/Displayer';

const ProductsPage = () => {
  const { slug } = useParams();
  // Displayer Main:
  const mainProd = productos.find((prod) => prod.slug === slug);

  return (
    <section className='section'>
      <div className='section-center'>
        <h2 className='page-title'>Productos</h2>
      </div>
      <div className='displayer'>
        <ProductsDisplayer mainProd={mainProd}></ProductsDisplayer>
      </div>
    </section>
  );
};

export default ProductsPage;
