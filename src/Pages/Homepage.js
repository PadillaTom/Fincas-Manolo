import React from 'react';

// Components:
import {
  HeroNew,
  ServicesNew,
  PromoProducts,
  ProductsCategories,
  Articles,
  Reviews,
} from '../Components';
import { ProductsFeatured } from '../Components/Featured Products';

const Homepage = () => {
  return (
    <div className='section home-sect'>
      <HeroNew></HeroNew>
      <ProductsCategories></ProductsCategories>
      <PromoProducts></PromoProducts>
      <ProductsFeatured></ProductsFeatured>
      <ServicesNew></ServicesNew>
      <Articles></Articles>
      <Reviews></Reviews>
    </div>
  );
};

export default Homepage;
