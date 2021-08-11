import React from 'react';
import PropTypes from 'prop-types';

function PromoItem({imageURL, description}) {
  return (
    <div className='promo-item'>
      <img className='promo-item__img' src={imageURL} alt='' />
      <div>{
        description.map((item, index) => (
          <p
            key={index}
            className='promo-item__description-item' >
            &#9971; {item}
          </p>
        ))
      }</div>
    </div>
  );
}

export default PromoItem;

PromoItem.propTypes = {
  id: PropTypes.number,
  imageURL: PropTypes.string,
  description: PropTypes.any,
};
