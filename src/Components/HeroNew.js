import React, { useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';

const HeroNew = () => {
  const imgUrl =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/HeroOlive.png?alt=media&token=50ece4df-9f8b-45b3-97a9-73e35b58ffbf';

  // GSAP:
  const tl = new TimelineMax();
  useEffect(() => {
    // Main Delay:
    tl.from('.heroContainer', 1, {
      delay: 1.7,
      ease: Expo.easeOut,
      opacity: 0,
    });
  }, []);
  return (
    <section className='heroContainer'>
      <h1 className='heroTitle hero-finc'>Fincas</h1>
      <h1 className='heroTitle hero-man'>Manolo</h1>
      <img src={imgUrl} alt='Inicio' className='heroOlive' />
      <button className='heroCta'>Explorar</button>
      <div className='heroDesc'>
        <h4>Elevada Altitud</h4>
        <p>Aceites y Vinos Premium</p>
      </div>
    </section>
  );
};

export default HeroNew;
