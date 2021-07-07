import React from 'react';

import {
  Header,
  Filters,
  SelectedCategory,
  DiscountsBanners,
  Information,
  ProductsListBlock,
  OtherInformation,
  SocialNetworks,
  Categories,
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
        <Filters/>
        <SelectedCategory/>
        <DiscountsBanners/>
        <Information/>
        <ProductsListBlock/>
      </main>

      <footer>
        <OtherInformation/>
        <SocialNetworks/>
      </footer>
    </div>
  );
};

export default Home;
