import React from 'react';

import {ProductBlock} from '../components';

function ProductsListBlock() {
  return (
    <section className='product-list-block'>
      <h2 className='visually-hidden'>
            Список товаров выбранной категории
      </h2>
      <div className='product-list-block__list-wrapper'>
        <ul className='product-list-block__list'>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
          <li className='product-list-block__item'>
            <ProductBlock/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsListBlock;
