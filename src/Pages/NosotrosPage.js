import React from 'react';
import { Loading } from '../Components/Shared';
// Data:
import { nosotros } from '../Utils/constants';

const NosotrosPage = () => {
  const data1 = nosotros[0][0];
  const data2 = nosotros[1];
  const data3 = nosotros[2];
  const aboutImg =
    'https://firebasestorage.googleapis.com/v0/b/fincas-manolo-63f79.appspot.com/o/Sierras_de_Famatina_Chilecito.jpg?alt=media&token=01e36b93-5a64-454c-b44e-b849d2acd8c9';

  if ((data1 || data2 || data3).length === 0) {
    return <Loading></Loading>;
  }

  return (
    <section className='section aboutSect'>
      {/* Main */}
      <div className='section-center'>
        <h2 className='page-title'>{data1.title}</h2>
        <p className='main-desc'>{data1.text}</p>
      </div>
      {/* Sections */}
      <article className='about-data'>
        <img src={aboutImg} alt='Sierras' />
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
    </section>
  );
};

export default NosotrosPage;
