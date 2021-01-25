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
      {/* <Services></Services> */}
      <PromoProducts></PromoProducts>
      <FeaturedProducts></FeaturedProducts>
      <Articles></Articles>
    </div>
  );
};

export default Homepage;
