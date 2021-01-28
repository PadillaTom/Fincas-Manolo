import React from 'react';
import { Link } from 'react-router-dom';

// Data
import { elOlivar } from '../Utils/constants';

const OlivarPage = () => {
  const data1 = elOlivar[0];
  const data2 = elOlivar[1];
  const aceite2 =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/Aceite1.png?alt=media&token=d970fd81-83ed-47ce-b0ea-936e768aff47';
  const lapuerta =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/Aceite%20La%20Puerta.jpg?alt=media&token=6df9787b-097e-484a-aae6-0a504f230e35';
  return (
    <section className='section olivarSect'>
      {/* Absolute Imgs */}
      <img src={aceite2} alt='Aceites' className='olivarPng' />
      {/* Main */}
      <div className='section-center'>
        <h2 className='page-title'>{data1.title}</h2>
        <p className='main-desc'>{data1.desc}</p>
      </div>
      {/* Sections */}
      <Link to='/productos/aceite250'>
        <div className='olivarCTAContainer'>
          <h2>Nuestros Productos</h2>
        </div>
      </Link>
      {/* Premium */}
      <article className='oliva-second'>
        <img src={lapuerta} alt='La Puerta Aceite Premium' />
        <h2>{data2.title}</h2>
        <p>{data2.desc}</p>
      </article>
    </section>
  );
};

export default OlivarPage;
