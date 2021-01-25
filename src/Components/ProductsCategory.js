import React, { useState, useEffect } from 'react';
// Data:
import { categories } from '../Utils/constants';

const ProductsCategory = () => {
  // Data:
  const [myCategories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setCategories(categories);
  }, []);

  return (
    <div className='filtros-icons'>
      {myCategories.map((cat, catIndex) => {
        const { imgUrl, id, name } = cat;
        return (
          <div
            key={id}
            className={`${isActive ? 'single-icon activeCat' : 'single-icon'}`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <img src={imgUrl} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCategory;
