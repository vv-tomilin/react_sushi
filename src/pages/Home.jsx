import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {fetchProducts} from '../redux/actions/products';
import {setCategory} from '../redux/actions/category';

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

const categoriesNames = [
  'Роллы и суши',
  'Сеты',
  'WOK',
  'Горячее и салаты',
  'Детское меню',
  'Фирменное меню',
];

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({products}) => products.items);
  const {category} = useSelector(({category}) => category);
  const isLoaded = useSelector(({products}) => products.isLoaded);

  React.useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div>
      <Header/>

      <main>
        <h1 className='visually-hidden'>
          Интернет магазин японской кухни &laquo;SushiZen&raquo;
        </h1>

        <Categories
          activeCategory = {category}
          items={categoriesNames}
          onClickCategory={onSelectCategory}/>

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
        <ProductsListBlock
          items={items}
          isLoaded={isLoaded} />
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
