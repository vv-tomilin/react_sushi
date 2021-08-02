import React from 'react';
import PropTypes from 'prop-types';

function PlaceOrderModal({onClick, currentRef}) {
  return (
    <div
      ref={currentRef}
      className='place-order'>
      <div className='place-order__content-wrapper'>
        <p className='place-order__thanks'>Спасибо!</p>
        <p className='place-order__text'>Ваш заказ принят в обработку</p>
        <div className='place-order__smile'>&#128076;</div>
        <button
          className='place-order__btn'
          onClick={onClick} >
            Отлично !
        </button>
        <div className='place-order__close' onClick={onClick}></div>
      </div>
    </div>
  );
};

export default PlaceOrderModal;

PlaceOrderModal.propTypes = {
  onClick: PropTypes.func,
  currentRef: PropTypes.any,
};
