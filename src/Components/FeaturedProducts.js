import React from 'react';
import { ProductsCategory } from '.';
// Context:
import { useProductsContext } from '../Context/products_context';
// Gsap:
import { TweenMax } from 'gsap';

const FeaturedProducts = () => {
  // Context:
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    all_products: products,
  } = useProductsContext();
  // GSAP:
  TweenMax.from('.featured-products', 0.5, {
    delay: 2.5,
    y: '+50%',
    opacity: 0,
  });

  return (
    <section className='featured-products'>
      <div className='section-center'>
        <h2 className='section-title'>
          Top Featured <span>Productos</span>
        </h2>
      </div>
      <ProductsCategory></ProductsCategory>
      <div className='products-display'></div>
    </section>
  );
};

export default FeaturedProducts;
