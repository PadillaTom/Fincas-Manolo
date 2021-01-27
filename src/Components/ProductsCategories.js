import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Data:
import { categories } from '../Utils/constants';
// Gsap:
import gsap, { TweenMax } from 'gsap';

const ProductsCategories = () => {
  // Data:
  const [myCategories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categories);
  }, []);

  // GSAP:
  gsap.config({ nullTargetWarn: false });
  TweenMax.from('.categoriesContainer', 0.5, {
    delay: 2.8,
    opacity: 0,
  });

  return (
    <section className='categoriesContainer'>
      <div className='section-center'>
        <h2 className='section-title'>
          Categorías <span>Productos</span>
        </h2>
      </div>
      <div className='filtros-icons'>
        {myCategories.map((cat) => {
          const { imgUrl, id, name, slug } = cat;
          return (
            <Link to={slug} className='single-icon' key={id}>
              <img src={imgUrl} alt={name} />
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsCategories;
