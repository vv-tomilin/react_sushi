import React from 'react';
import PropTypes from 'prop-types';

import {useSelector} from 'react-redux';

import {cartIcon} from '../assets/logo and icons';

function CartButton({className}) {
  const {totalPrice, totalCount} = useSelector(({cart}) => cart);

  return (
    <div className={`${className}_mobile`}>
      <div className={className}>
        <div className={`${className}__link`}>
          <span className={`${className}__price`}>{totalPrice}₽</span>
          <img src={cartIcon} alt='cart_icon' />
          <div className={`${className}__count-wrapper`}>
            <span className={`${className}__count`}>{totalCount}</span>
          </div>
          <span className='visually-hidden'>Корзина</span>
        </div>
      </div>
    </div>
  );
}

export default CartButton;

CartButton.propTypes = {
  className: PropTypes.string,
};
