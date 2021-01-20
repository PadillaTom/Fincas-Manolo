import React from 'react';
// Components:
import { Hero, Services, FeaturedProducts, Articles } from '../Components';

const Homepage = () => {
  return (
    <div className='section home-sect'>
      <Hero></Hero>
      <Services></Services>
      <FeaturedProducts></FeaturedProducts>
      <Articles></Articles>
    </div>
  );
};

export default Homepage;
