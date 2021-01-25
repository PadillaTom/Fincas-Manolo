import React from 'react';

// Components:
import {
  HeroNew,
  Services,
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
      <Services></Services>
      <Articles></Articles>
    </div>
  );
};

export default Homepage;
