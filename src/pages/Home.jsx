import React from 'react';

import {
  Header,
  Filters,
  SelectedCategory,
  DiscountsBanners,
  Information,
  ProductsListBlock,
  Categories,
  Footer,
} from '../components';

const Home = () => {
  return (
    <div>
      <Header/>

      <main>
        <h1 className='visually-hidden'>
          Интернет магазин японской кухни &laquo;SushiZen&raquo;
        </h1>

        <Categories/>
        <div className='home__filters-select-category-wrapper'>
          <div className='home__filters-wrapper'>
            <Filters/>
          </div>
          <div className='home__selected-category-wrapper'>
            <SelectedCategory/>
          </div>
        </div>
        <div className='home__banners-information-wrapper'>
          <div className='home__banners-wrapper'>
            <DiscountsBanners className='home__banner-img'/>
          </div>
          <div className='home__information-wrapper'>
            <Information/>
          </div>
        </div>
        <ProductsListBlock/>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
