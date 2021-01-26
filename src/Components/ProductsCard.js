import React from 'react';

const ProductsCard = ({ slug, desc, imgUrl, precio, shortName }) => {
  // Description to Array:
  let wordArrays = desc.split(' ');

  return (
    <article className='productCard'>
      <div className='cardImg-container'>
        <img src={imgUrl} alt={shortName} />
      </div>
      <div className='cardDesc-container'>
        <div className='desc-cont'>
          <h2>{shortName}</h2>
          <p>{wordArrays.slice(0, 10).join(' ')}... </p>
        </div>
        <div className='desc-cta'>
          <button type='button'>Detalles</button>
        </div>
      </div>
    </article>
  );
};

export default ProductsCard;
