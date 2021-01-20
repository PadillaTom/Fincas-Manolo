import React from 'react';
// Components:
import { Hero, Services, FeaturedProducts } from '../Components';

const Homepage = () => {
  return (
    <div className='section'>
      <Hero></Hero>
      <Services></Services>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default Homepage;
