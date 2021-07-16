import React from 'react';
import PropTypes from 'prop-types';

import {cartIcon} from '../assets/logo and icons';

function CartButton({className}) {
  return (
    <div className={`${className}_mobile`}>
      <div className={className}>
        <a href='#' >
          <span className={`${className}__price`}>0₽</span>
          <img src={cartIcon} alt='cart_icon' />
          <div className={`${className}__count-wrapper`}>
            <span className={`${className}__count`}>0</span>
          </div>
          <span className='visually-hidden'>Корзина</span>
        </a>
      </div>
    </div>
  );
}

export default CartButton;

CartButton.propTypes = {
  className: PropTypes.string,
};
