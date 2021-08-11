import React from 'react';
import PropTypes from 'prop-types';

function ProductIngridientsPopup({
  ingridients, weight,
  energyValue,
  proteins,
  fats,
  carbohydrates,
  popupRef,
}) {
  return (
    <div
      className='product-ingridients-popup'
      ref={popupRef} >
      <div className='product-ingridients-popup__info-wrapper'>
        <p className='product-ingridients-popup__ingridients'>{ingridients}</p>
        <p className='product-ingridients-popup__weight'>Вес: {weight} г.</p>
        <p className='product-ingridients-popup__energy-value'>
          Ценность: {energyValue} ккал
        </p>
        <div className='product-ingridients-popup__nutrients-value'>
          <p className='product-ingridients-popup__nutrients-value-item'>
            Белки: {proteins} г.
          </p>
          <p className='product-ingridients-popup__nutrients-value-item'>
            Жиры: {fats} г.
          </p>
          <p className='product-ingridients-popup__nutrients-value-item'>
            Углеводы: {carbohydrates} г.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductIngridientsPopup;

ProductIngridientsPopup.propTypes = {
  ingridients: PropTypes.string,
  weight: PropTypes.number,
  energyValue: PropTypes.number,
  proteins: PropTypes.number,
  fats: PropTypes.number,
  carbohydrates: PropTypes.number,
  popupRef: PropTypes.any,
};
