import React from 'react';

// Components:
import {
  HeroNew,
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

      <Articles></Articles>
    </div>
  );
};

export default Homepage;
