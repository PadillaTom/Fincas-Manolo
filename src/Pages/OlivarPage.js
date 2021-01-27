import React from 'react';

// Data
import { elOlivar } from '../Utils/constants';

const OlivarPage = () => {
  const data1 = elOlivar[0];
  const data2 = elOlivar[1];

  return (
    <section className='section'>
      {/* Main */}
      <div className='section-center'>
        <h2 className='page-title'>{data1.title}</h2>
        <p className='main-desc'>{data1.desc}</p>
      </div>
      {/* Sections */}
      <article>
        <h2>PRODUCTOS DE OLIVA</h2>
      </article>
      <article className='oliva-second'>
        <h2>{data2.title}</h2>
        <p>{data2.desc}</p>
      </article>
    </section>
  );
};

export default OlivarPage;
