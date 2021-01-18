import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className='section err-sect'>
        <div className='section-center'>
          <div className='error-container'>
            <span className='numbers'>404</span>
            <h1>Pagina No Encontrada</h1>
            <Link to='/'>
              <div className='error-cta'>
                <p>Volver al Inicio</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
