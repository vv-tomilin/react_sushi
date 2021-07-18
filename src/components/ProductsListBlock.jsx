import React from 'react';
import PropTypes from 'prop-types';

import {ProductBlock} from '../components';

function ProductsListBlock({items}) {
  return (
    <section className='product-list-block'>
      <h2 className='visually-hidden'>
            Список товаров выбранной категории
      </h2>
      <div className='product-list-block__list-wrapper'>
        <ul className='product-list-block__list'>
          {
            items.map((obj) => (
              <li key={obj.id} className='product-list-block__item'>
                <ProductBlock
                  id={obj.id}
                  name={obj.name}
                  imageURL={obj.imageURL}
                  price={obj.price}
                  quantity={obj.quantity}
                  ingridients={obj.ingridients}
                  weight={obj.weight} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default ProductsListBlock;

ProductsListBlock.propTypes = {
  items: PropTypes.array.isRequired,
};
