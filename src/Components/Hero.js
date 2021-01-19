import React from 'react';

const Hero = () => {
  return (
    <article className='heroContainer'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/fincas-manolo.appspot.com/o/Aceites%20Hero.jpg?alt=media&token=d69e0531-189c-4e84-a993-2ffb140b14bb'
        alt='Sierras-Imagen'
        className='hero-bg-img'
      />
      <div className='hero-info-container'>
        <h2>Elevada Altitud</h2>
        <p>Aceites y Vinos Premium.</p>
        <button type='button' className='primary-cta'>
          Explorar
        </button>
      </div>
    </article>
  );
};

export default Hero;
