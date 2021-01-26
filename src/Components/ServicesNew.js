import React, { useEffect, useState } from 'react';
// Data:
import { services } from '../Utils/constants';

const ServicesNew = () => {
  const [myServices, setMyServices] = useState([]);
  useEffect(() => {
    setMyServices(services);
  }, []);

  return (
    <section className='servicesContainer'>
      <div className='section-center'>
        <h2 className='section-title'>
          Ventajas <span>Servicios</span>
        </h2>
      </div>
      <div className='serviciosArtContainer'>
        {myServices.map((serv) => {
          const { id, name, desc, imgUrl } = serv;
          return (
            <article className='singleServ-container' key={id}>
              <div className='serv-izq'>
                <img src={imgUrl} alt={name} />
              </div>
              <div className='serv-der'>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesNew;
