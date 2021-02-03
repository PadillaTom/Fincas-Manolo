import React from 'react';

// Components:
import {
  HeroNew,
  ServicesNew,
  PromoProducts,
  ProductsCategories,
  Articles,
} from '../Components';
import { ProductsFeatured } from '../Components/Featured Products';

const Homepage = () => {
  return (
    <>
      <HeroNew></HeroNew>
      <div className='section home-sect'>
        <ProductsCategories></ProductsCategories>
        <PromoProducts></PromoProducts>
        <ProductsFeatured></ProductsFeatured>
        <ServicesNew></ServicesNew>
        <Articles></Articles>
      </div>
    </>
  );
};

export default Homepage;
