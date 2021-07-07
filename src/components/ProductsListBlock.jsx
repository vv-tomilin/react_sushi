import React from 'react';

import {RollSushiBlock} from '../components';

function ProductsListBlock() {
  return (
    <section>
      <h2 className='visually-hidden'>
            Список товаров выбранной категории
      </h2>
      <ul>
        <li>
          <RollSushiBlock/>
        </li>
        <li>
          <RollSushiBlock/>
        </li>
      </ul>
    </section>
  );
}

export default ProductsListBlock;
