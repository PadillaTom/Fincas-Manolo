import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ slug, desc, imgUrl, shortName }) => {
  // Description to Array:
  let wordArrays = desc.split(' ');

  return (
    <article className='productCard'>
      <div className='cardImg-container'>
        <img src={imgUrl} alt={shortName} />
      </div>
      <div className='cardDesc-container'>
        <h2>{shortName}</h2>
        <p>{wordArrays.slice(0, 7).join(' ')}... </p>
        <Link to={`/productos/${slug}`} className='desc-cta'>
          Detalles
        </Link>
      </div>
    </article>
  );
};

export default ProductsCard;
