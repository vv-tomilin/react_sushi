import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import {iSymbol, cartIconWhite} from '../../assets/logo and icons';

function ProductBlock({name, imageURL, price, ingridients, weight}) {
  return (
    <div className='product-block__wrapper'>
      <div className='product-block'>
        <img
          className='product-block__img' src={imageURL}
          width='300' height='170' />
        <a className='product-block__title' href='#'>{name}</a>
        <div className='product-block__short-description'>
          <p>
            {ingridients.length > 50 ?
            `${ingridients.slice(0, 50)}. . .` :
            `${ingridients}`}
          </p>
          <span>{weight} г.</span>
        </div>
        <div className='product-block__price-addcart'>
          <p className='product-block__price'>
            {price}₽
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

ProductBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  ingridients: PropTypes.string,
  weight: PropTypes.number,
};
