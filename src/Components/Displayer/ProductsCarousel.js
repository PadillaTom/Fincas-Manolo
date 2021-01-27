import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCarousel = ({ theRest }) => {
  return (
    <div className='carouselContainer'>
      {theRest.map((prod) => {
        const { imgUrl, shortName, peso, precio, slug, id } = prod;
        return (
          <Link to={slug} className='carousel-card' key={id}>
            <div className='carcard-img'>
              <div className='carcard-overlay'></div>
              <img src={imgUrl} alt={shortName} />
            </div>
            <div className='carcard-desc'>
              <div className='desc-overlay'></div>
              <h2>{shortName}</h2>
              <p>{peso}</p>
              <span>{precio}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsCarousel;
