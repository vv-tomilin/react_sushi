import React from 'react';
import PropTypes from 'prop-types';

function DiscountsBanners({promoItems, onClickActivePromo, activeIndex}) {
  const promoImgArr = promoItems.map((obj) => obj.promoURL);
  const promoImg = promoImgArr[activeIndex];

  const onSelectActivePromo = (index) => {
    onClickActivePromo(index);
  };
  return (
    <section className='discounts-bunners'>
      <h2 className='visually-hidden'>Баннеры проходящих акций и скидок</h2>

      <ul>
        <li className='discounts-bunners__bunner-item'>
          <img
            className='discounts-bunners__bunner-mob'
            src={promoImg} alt=''/>
        </li>
        <li className='discounts-bunners__bunner-item'>
          <img
            className='discounts-bunners__bunner-desktop'
            src={promoImg} alt=''/>
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
                    className={
                      activeIndex === index ?
                      `discounts-bunners__toggle 
                      discounts-bunners__toggle_current` :
                      'discounts-bunners__toggle'
                    }
                    onClick={() => onSelectActivePromo(index)} >
                  </li>,
                )
          }
        </ul>
      </div>
    </section>
  );
}

export default DiscountsBanners;

DiscountsBanners.propTypes = {
  promoItems: PropTypes.array.isRequired,
  onClickActivePromo: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};
