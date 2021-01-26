import React from 'react';
import { useProductsContext } from '../Context/products_context';
// Components:
import { Loading, Error, ProductsCard } from '../Components';

const ProductsFeatured = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <section className='featuredContainer'>
      <div className='section-center'>
        <h2 className='section-title'>
          Mas Solicitados <span>Productos</span>
        </h2>
        <div className='productsCard-container'>
          {featured.map((prod) => {
            return <ProductsCard {...prod} key={prod.id}></ProductsCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsFeatured;
