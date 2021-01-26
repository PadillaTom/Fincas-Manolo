import React from 'react';

// Components:
import {
  HeroNew,
  ServicesNew,
  PromoProducts,
  ProductsCategories,
  Articles,
  ProductsFeatured,
} from '../Components';

const Homepage = () => {
  return (
    <div className='section home-sect'>
      <HeroNew></HeroNew>
      <ProductsCategories></ProductsCategories>
      <PromoProducts></PromoProducts>
      <ServicesNew></ServicesNew>
      <ProductsFeatured></ProductsFeatured>
      <Articles></Articles>
    </div>
  );
};

export default Homepage;
