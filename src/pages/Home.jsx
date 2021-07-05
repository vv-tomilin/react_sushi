import React from 'react';

import {
  Header,
  Filters,
  SelectedCategory,
  DiscountsBanners,
  Information,
  RollSushiBlock,
  OtherInformation,
  SocialNetworks,
  Categories,
} from '../components';

const Home = () => {
  return (
    <div>
      <Header/>

      <main>
        <h1>Интернет магазин японской кухни &laquo;SushiZen&raquo;</h1>
        <Categories/>
        <Filters/>
        <SelectedCategory/>
        <DiscountsBanners/>
        <Information/>

        <section>
          <h2>Список товаров выбранной категории</h2>
          <ul>
            <li>
              <RollSushiBlock/>
            </li>
            <li>
              <RollSushiBlock/>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <OtherInformation/>
        <SocialNetworks/>
      </footer>
    </div>
  );
};

export default Home;
