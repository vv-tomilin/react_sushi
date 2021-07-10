import React from 'react';

import {ProductBlock} from '../components';

function ProductsListBlock() {
  return (
    <section className='product-block'>
      <h2 className='visually-hidden'>
            Список товаров выбранной категории
      </h2>
      <ul>
        <li>
          <ProductBlock/>
        </li>
        <li>
          <ProductBlock/>
        </li>
      </ul>
    </section>
  );
}

export default ProductsListBlock;
