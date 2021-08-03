import React from 'react';
import PropTypes from 'prop-types';

function ProductIngridientsPopup({ingridients, weight, popupRef}) {
  return (
    <div
      className='product-ingridients-popup'
      ref={popupRef} >
      <div className='product-ingridients-popup__info-wrapper'>
        <p className='product-ingridients-popup__ingridients'>{ingridients}</p>
        <p className='product-ingridients-popup__weight'>Вес: {weight} г.</p>
      </div>
    </div>
  );
}

export default ProductIngridientsPopup;

ProductIngridientsPopup.propTypes = {
  ingridients: PropTypes.string,
  weight: PropTypes.number,
  popupRef: PropTypes.any,
};
