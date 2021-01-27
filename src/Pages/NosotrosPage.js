import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../Components';
// Data:
import { nosotros } from '../Utils/constants';

const NosotrosPage = () => {
  const [myNosotros, setMyNosotros] = useState();

  const getData = async () => {
    const data = await nosotros;
    setMyNosotros(data);
  };
  getData();

  if (myNosotros.length === 0) {
    return <Loading></Loading>;
  }
  const data1 = myNosotros[0][0];
  const data2 = myNosotros[1];
  const data3 = myNosotros[2];

  return (
    <div className='section aboutSect'>
      <div className='section-center'>
        <h2 className='page-title'>{data1.title}</h2>
      </div>
      <article className='about-text'>
        <p>{data1.text}</p>
      </article>
      <article className='about-data'>
        <div className='location'>
          {data2.map((data) => {
            const { title, text, id } = data;
            return (
              <div className='location-data' key={id}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </article>
      <article className='cifras'>
        {data3.map((data) => {
          const { id, cifra, title } = data;
          return (
            <div className='cifras-data' key={id}>
              <h2>{cifra}</h2>
              <p>{title}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default NosotrosPage;
