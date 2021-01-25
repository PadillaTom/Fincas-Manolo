import React, { useEffect } from 'react';
import { TweenMax, Expo } from 'gsap';
// Components:
import {
  HeroNew,
  Services,
  PromoProducts,
  FeaturedProducts,
  Articles,
} from '../Components';

const Homepage = () => {
  // GSAP:
  useEffect(() => {
    TweenMax.from('.main-delay', 1, {
      delay: 2.5,
      ease: Expo.easeOut,
      opacity: 0,
    });
  }, []);
  return (
    <div className='section home-sect'>
      <div className='main-delay'>
        <HeroNew></HeroNew>
        <Services></Services>
        <PromoProducts></PromoProducts>
        <FeaturedProducts></FeaturedProducts>
        <Articles></Articles>
      </div>
    </div>
  );
};

export default Homepage;
