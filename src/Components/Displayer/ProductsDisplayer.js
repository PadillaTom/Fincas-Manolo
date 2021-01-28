import React from 'react';

import { Loading, Error } from '../Shared';
import { ProductsCarousel } from '../Displayer';
import { useProductsContext } from '../../Context/products_context';

const ProductsDisplayer = ({ mainProd }) => {
  const { name, desc, imgUrl, peso, precio, category, slug } = mainProd;

  // Rest of the Products:
  const {
    all_products: products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();
  const theRest = products.filter((items) => {
    return items.slug !== slug;
  });

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <>
      <article className='displayerContainer'>
        <div className='displayer-left'>
          <img src={imgUrl} alt={name} className='main-img' />
        </div>
        <div className='displayer-right'>
          <div className='main-title'>
            <h2 className='main-name'>{name}</h2>
            <p className='main-category'>{category}</p>
          </div>
          <p className='main-desc'>{desc}</p>
          <div className='main-footer'>
            <div className='main-peso-price'>
              <p>{peso}</p>
              <span>{precio}</span>
            </div>
          </div>
        </div>
      </article>
      <h2 className='more-prods'>Más Variedades</h2>
      <div className='carouselSpace'>
        <ProductsCarousel theRest={theRest}></ProductsCarousel>
      </div>
    </>
  );
};

export default ProductsDisplayer;
