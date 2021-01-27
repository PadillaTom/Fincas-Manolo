import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductsCarousel } from '../Components';
import { productos } from '../Utils/constants';

const ProductsPage = () => {
  const { slug } = useParams();

  const myProd = productos.find((prod) => prod.slug === slug);
  const { category, desc, imgUrl, name, peso, precio } = myProd;

  return (
    <section className='section'>
      <div className='section-center'>
        <h2 className='page-title'>Productos</h2>
      </div>
      {/* Display */}
      <article className='displayContainer'>
        <div className='display-left'>
          <img src={imgUrl} alt={name} />
        </div>
        <div className='display-right'>
          <h2>{name}</h2>
          <h3>{category}</h3>
          <p>{desc}</p>
          <p>{peso}</p>
          <p>{precio}</p>
        </div>
      </article>
      {/* Carrousel */}
      <article className='carouselContainer'>
        <ProductsCarousel></ProductsCarousel>
      </article>
    </section>
  );
};

export default ProductsPage;
