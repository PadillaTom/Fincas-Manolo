import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Data:
import { categories } from '../Utils/constants';
// Gsap:
import { TweenMax } from 'gsap';

const ProductsCategories = () => {
  // Data:
  const [myCategories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categories);
  }, []);

  // GSAP:
  TweenMax.from('.categories-products', 0.5, {
    delay: 2.8,
    opacity: 0,
  });

  return (
    <section className='categories-products'>
      <div className='section-center'>
        <h2 className='section-title'>
          Categorías <span>Productos</span>
        </h2>
      </div>
      <div className='filtros-icons'>
        {myCategories.map((cat) => {
          const { imgUrl, id, name, slug } = cat;
          return (
            <div className='single-icon' key={id}>
              <Link to={slug}>
                <img src={imgUrl} alt={name} />
                <p>{name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsCategories;
