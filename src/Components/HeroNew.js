import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax, Power3 } from 'gsap';

const HeroNew = () => {
  const imgUrl =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/HeroOlive.png?alt=media&token=50ece4df-9f8b-45b3-97a9-73e35b58ffbf';
  // GSAP:
  useEffect(() => {
    const tl = new TimelineMax();

    tl.from('.hero-finc', 0.7, {
      delay: 1.1,
      x: '200%',
      opacity: 0,
    })
      .from('.hero-man', 0.6, {
        x: '-250%',
        opacity: 0,
      })
      .from('.heroOlive', 1, {
        delay: 0,
        y: '-120%',
        ease: Power3.easeInOut,
      })
      .from('.heroDesc', 1.2, {
        opacity: 0,
      });
  }, []);

  return (
    <div className='heroContainer'>
      <h1 className='heroTitle hero-finc'>Fincas</h1>
      <h1 className='heroTitle hero-man'>Manolo</h1>
      <img src={imgUrl} alt='Inicio' className='heroOlive' />
      <div className='heroDesc'>
        <h4>Elevada Altitud</h4>
        <p>Aceites y Vinos Premium</p>
        <Link to='/productos/aceite250'>
          <button className='heroCta'>Explorar</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroNew;
