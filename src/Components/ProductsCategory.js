import React, { useState, useEffect } from 'react';
// Data:
import { categories } from '../Utils/constants';

const ProductsCategory = () => {
  // Data:
  const [myCategories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categories);
  }, []);
  const [isActive, setIsActive] = useState(false);

  return (
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
  );
};

export default ProductsCategory;
