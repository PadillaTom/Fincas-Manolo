import React, { useState, useEffect } from 'react';
// Data:
import { categories } from '../Utils/constants';
// Gsap:
import { TweenMax } from 'gsap';

const FeaturedProducts = () => {
  // Data:
  const [myCategories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categories);
  }, []);

  // GSAP:
  TweenMax.from('.featured-products', 0.5, {
    delay: 2.5,
    opacity: 0,
  });

  return (
    <section className='featured-products'>
      <div className='section-center'>
        <h2 className='section-title'>
          Categorías <span>Productos</span>
        </h2>
      </div>
      <div className='filtros-icons'>
        {myCategories.map((cat) => {
          const { imgUrl, id, name } = cat;
          return (
            <div key={id} className='single-icon'>
              <img src={imgUrl} alt={name} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
