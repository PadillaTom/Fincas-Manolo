import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className='section errorContainer'>
        <div className='errorCenter'>
          <span>404</span>
          <h2>Página no encontrada.</h2>
          <Link to='/' className='errorCTA'>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
