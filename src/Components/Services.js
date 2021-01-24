import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Loading } from '../Components';
// Data:
import { services } from '../Utils/constants';

const Services = () => {
  const [myServices, setMyServices] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetching Services:
  useEffect(() => {
    setMyServices(services);
  }, []);
  // Indexing for Scrolling:
  useEffect(() => {
    const lastIndex = myServices.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, myServices]);
  // Loading Component:
  if (myServices.lenght === 0) {
    return <Loading></Loading>;
  }

  return (
    <>
      <section className='services-home'>
        <div className='section-center'>
          <h2 className='services-title'>Ventajas</h2>
        </div>
        <div className='scrollContainer'>
          {myServices.map((service, scrollIndex) => {
            const { id, name, desc, imgUrl } = service;
            // Slider Stuff:
            let position = 'nextSlide';
            if (scrollIndex === index) {
              position = 'activeSlide';
            }
            if (
              scrollIndex === index - 1 ||
              (index === 0 && scrollIndex === myServices.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article key={id} className={`scrollItem ${position}`}>
                <div className='scroll-img-container'>
                  <img src={imgUrl} alt={name} />
                </div>
                <div className='scroll-desc-container'>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </article>
            );
          })}
          <button className='scroll-prev' onClick={() => setIndex(index - 1)}>
            <AiOutlineLeft></AiOutlineLeft>
          </button>
          <button className='scroll-next' onClick={() => setIndex(index + 1)}>
            <AiOutlineRight></AiOutlineRight>
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
