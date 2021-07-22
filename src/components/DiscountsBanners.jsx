import React from 'react';
import PropTypes from 'prop-types';

import {promo3} from '../assets/promo-bunners/';

function DiscountsBanners({promoItems, onClickActivePromo}) {
  return (
    <section className='discounts-bunners'>
      <h2 className='visually-hidden'>Баннеры проходящих акций и скидок</h2>

      <ul>
        <li className='discounts-bunners__bunner-item'>
          <img
            className='discounts-bunners__bunner-mob'
            src={promo3} alt=''/>
        </li>
        <li className='discounts-bunners__bunner-item'>
          <img
            className='discounts-bunners__bunner-desktop'
            src={promo3} alt=''/>
        </li>
      </ul>

      <div className='discounts-bunners__toggles-wrapper'>
        <ul className='discounts-bunners__toggles'>
          {
            Array(promoItems.length)
                .fill(0)
                .map((_, index) =>
                  <li
                    key={index}
                    className='discounts-bunners__toggle'
                    onClick={() => onClickActivePromo(index)} >
                  </li>,
                )
          }
          {/* <li className='discounts-bunners__toggle'>
            <button className='visually-hidden'></button>
          </li>
          <li
            className='discounts-bunners__toggle
            discounts-bunners__toggle_current'>
            <button className='visually-hidden'></button>
          </li>
          <li className='discounts-bunners__toggle'>
            <button className='visually-hidden'></button>
          </li>
          <li className='discounts-bunners__toggle'>
            <button className='visually-hidden'></button>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default DiscountsBanners;

DiscountsBanners.propTypes = {
  promoItems: PropTypes.array.isRequired,
  onClickActivePromo: PropTypes.func.isRequired,
};
