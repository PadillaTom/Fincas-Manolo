import React from 'react';

const ProductsCard = ({
  id,
  slug,
  name,
  desc,
  peso,
  imgUrl,
  precio,
  category,
}) => {
  // Description to Array:
  let wordArrays = desc.split(' ');

  return (
    <article className='productCard'>
      <div className='cardImg-contianer'>
        <img src={imgUrl} alt={name} />
      </div>
      <div className='cardDesc-container'>
        <div className='desc-row1'>
          <h2>{name}</h2>
          <p>{category}</p>
        </div>
        <div className='desc-row2'>
          <p>{wordArrays.slice(0, 20).join(' ')}... </p>
        </div>
        <div className='desc-row3'>
          <h4>{peso}</h4>
          <p>{precio}</p>
        </div>
        <div className='desc-cta'>
          <button type='button'>Detalles</button>
        </div>
      </div>
    </article>
  );
};

export default ProductsCard;
