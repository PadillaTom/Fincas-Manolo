import React from 'react';

// Components:
import {
  HeroNew,
  Services,
  ServicesNew,
  PromoProducts,
  FeaturedProducts,
  Articles,
} from '../Components';

const Homepage = () => {
  return (
    <div className='section home-sect'>
      <HeroNew></HeroNew>
      <FeaturedProducts></FeaturedProducts>
      <PromoProducts></PromoProducts>
      <ServicesNew></ServicesNew>
      {/* <Services></Services> */}
      <Articles></Articles>
    </div>
  );
};

export default Homepage;
