import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className='section'>
        <div className='section-center'>
          <div className='error-container'>
            <h1>Pagina No Encontrada</h1>
            <Link to='/'>
              <p className='error-cta'>
                Regresar al <span>Inicio</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
