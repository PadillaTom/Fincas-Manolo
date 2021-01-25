import React from 'react';
// Context:
import { useProductsContext } from '../Context/products_context';

const FeaturedProducts = () => {
  // Context:
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    all_products: products,
  } = useProductsContext();

  return (
    <section className='featured-products'>
      <div className='section-center'>
        <h2 className='section-title'>
          Top Featured <span>Products</span>
        </h2>
      </div>
    </section>
  );
};

export default FeaturedProducts;
