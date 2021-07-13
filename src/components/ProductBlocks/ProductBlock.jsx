import React from 'react';

import Button from '../Button';

import rollFudzi from '../../assets/images/roll_fudzi.jpg';
import {iSymbol, cartIconWhite} from '../../assets/logo and icons';

function ProductBlock() {
  return (
    <div className='product-block__wrapper'>
      <div className='product-block'>
        <img className='product-block__img' src={rollFudzi} />
        <h3>Ролл Фудзи</h3>
        <div className='product-block__short-description'>
          <p>
              Лосось копченый, рис,<br/>
              свежий огурец, соус “лава”,<br/>
              зеленый лук, омлет, кунж...
          </p>
          <span>230 г.</span>
        </div>
        <div className='product-block__price-addcart'>
          <p className='product-block__price'>
            159₽
          </p>
          <Button className='button_ingridients-info'>
            <img src={iSymbol} alt=''/>
          </Button>
          <Button className='button_add'>
            <span> В корзину</span>
            <img src={cartIconWhite}/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;
