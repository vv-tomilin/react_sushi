import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {fetchProducts} from '../redux/actions/products';
import {fetchPromo} from '../redux/actions/promo';
import {setCategory} from '../redux/actions/category';
import {setSortBY} from '../redux/actions/filters';
import {addproductToCart} from '../redux/actions/cart';

import {
  Filters,
  SelectedCategory,
  DiscountsBanners,
  Information,
  ProductsListBlock,
  Categories,
} from '../components';

const categoriesNames = [
  'Роллы и суши',
  'Сеты',
  'Фитнес меню',
  'Горячее и салаты',
  'Детское меню',
  'Фирменное меню',
];

const filterItems = [
  {name: 'по умолчанию', type: '', order: ''},
  {name: 'по цене', type: 'price', order: 'asc'},
  {name: 'по алфавиту', type: 'name', order: 'asc'},
];

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({products}) => products.items);
  const {category} = useSelector(({category}) => category);
  const isLoaded = useSelector(({products}) => products.isLoaded);
  const promoItems = useSelector(({promo}) => promo.promoItems);
  const activePromoIndex = useSelector(({promo}) => promo.activePromoIndex);
  const {sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchProducts(sortBy, category));
  }, [category, sortBy]);

  React.useEffect(() => {
    fetchPromo(dispatch);
  }, [activePromoIndex]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  const onSelectSortType = (type) => {
    dispatch(setSortBY(type));
  };

  const handleAddProductToCart = (obj) => {
    dispatch(addproductToCart(obj));
  };

  return (
    <div>
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
            <Filters
              activeSortType={sortBy.type}
              items={filterItems}
              onClickSortType={onSelectSortType} />
          </div>
          <div className='home__selected-category-wrapper'>
            <SelectedCategory
              items={categoriesNames}/>
          </div>
        </div>
        <div className='home__banners-information-wrapper'>
          <div className='home__banners-wrapper'>
            <DiscountsBanners
              promoItems={promoItems}
              className='home__banner-img'/>
          </div>
          <div className='home__information-wrapper'>
            <Information/>
          </div>
        </div>
        <ProductsListBlock
          items={items}
          isLoaded={isLoaded}
          onClickAddProduct={handleAddProductToCart} />
      </main>
    </div>
  );
};

export default Home;
