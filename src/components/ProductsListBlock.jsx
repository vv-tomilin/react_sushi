import React from 'react';
import PropTypes from 'prop-types';

import {ProductBlock, ProductLoadingBlock} from '../components';

function ProductsListBlock({items, isLoaded, onClickAddProduct}) {
  return (
    <section className='product-list-block'>
      <h2 className='visually-hidden'>
            Список товаров выбранной категории
      </h2>
      <div className='product-list-block__list-wrapper'>
        <ul className='product-list-block__list'>
          {isLoaded ?
            items.map((obj) => (
              <li key={obj.id} className='product-list-block__item'>
                <ProductBlock
                  id={obj.id}
                  name={obj.name}
                  imageURL={obj.imageURL}
                  price={obj.price}
                  quantity={obj.quantity}
                  ingridients={obj.ingridients}
                  weight={obj.weight}
                  onClickAddToCart={onClickAddProduct} />
              </li>
            )) :
            Array(8)
                .fill(0)
                .map((_, index) =>
                  <li
                    className='product-list-block__item'
                    key={index} >
                    <ProductLoadingBlock/>
                  </li>,
                )
          }
        </ul>
      </div>
    </section>
  );
}

export default ProductsListBlock;

ProductsListBlock.propTypes = {
  items: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  onClickAddProduct: PropTypes.func.isRequired,
};
