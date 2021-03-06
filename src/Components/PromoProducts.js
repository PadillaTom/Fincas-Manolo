import React from 'react';
import { Link } from 'react-router-dom';

const PromoProducts = () => {
  const olivaImage =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/OliveServices.jpg?alt=media&token=05cf2dda-3516-4599-b12f-c3af5e1a2a55';
  const wineImage =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/WineServices3.jpg?alt=media&token=e4afd8a5-972a-4647-9041-27ef62fb2504';

  return (
    <div className='promoContainer'>
      <div className='promo'>
        <img src={olivaImage} alt='Aceites Preimum' />
        <div className='promo-info'>
          <h2>Aceites Premium</h2>
          <p>
            Nuestro aceite de oliva Premium está compuesto de un blend de
            nuestras mejores variedades.
          </p>
          <Link to='/el-olivar'>
            <button type='button'>Ver Más</button>
          </Link>
        </div>
      </div>
      <div className='promo'>
        <img src={wineImage} alt='Vinos Preimum' />
        <div className='promo-info'>
          <h2>Vinos Premium</h2>
          <p>
            Producir vinos de calidad en las condiciones generadas por el clima
            extremo de la región es un verdadero desafío.
          </p>
          <Link to='/productos/vinos'>
            <button type='button'>Ver Más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoProducts;
