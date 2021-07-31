import React from 'react';
import PropTypes from 'prop-types';

function CartItem({
  id,
  imageURL,
  name,
  weight,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <li
      className='cart__item'>
      <div className='cart__image-info-wrapper'>
        <div className='cart__image'>
          <img
            src={imageURL}
            width='150' height='90' />
        </div>
        <div className='cart__info-block'>
          <p className='cart__product-name'>
            {name}
          </p>
          <p className='cart__product-weight'>
            {weight} г.
          </p>
          <p className='cart__total-price'>{totalPrice} ₽</p>
        </div>
      </div>
      <div className='cart__buttons'>
        <button
          className='cart__buttons_delete'
          onClick={handleRemoveClick} >
          <svg enableBackground="new 0 0 40 40"
            id="Слой_1" version="1.1"
            viewBox="0 0 40 40" xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,
                0.4-1,1-1s1,0.4,1,1v18.1c0,
                2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16
                c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,
                28,40z"/>
            </g>
            <g>
              <path
                d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,
                2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,
                13h26.9c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z
                M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,
                19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,
                0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,
                34.5,11,33.3,11z"/>
            </g>
            <g>
              <path
                d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,
                1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/>
            </g>
            <g>
              <path
                d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,
                1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/>
            </g>
            <g>
              <path
                d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,
                1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/>
            </g>
          </svg>
        </button>
        <div className='cart__buttons_counter-buttons'>
          <button
            className='cart__counter-button'
            onClick={handleMinusItem} >-</button>
          <span className='cart__product-count'>
            {totalCount}
          </span>
          <button
            className='cart__counter-button'
            onClick={handlePlusItem} >+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.number,
  imageURL: PropTypes.string,
  name: PropTypes.string,
  weight: PropTypes.number,
  totalPrice: PropTypes.number,
  totalCount: PropTypes.number,
  onRemove: PropTypes.func,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
};
