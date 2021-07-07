import React from 'react';

import bannerMob from '../assets/images/banner_mob.jpg';

function DiscountsBanners() {
  return (
    <section className='discounts-bunners'>
      <h2 className='visually-hidden'>Баннеры проходящих акций и скидок</h2>

      <ul>
        <li>
          <img className='discounts-bunners__bunner' src={bannerMob} alt=''/>
        </li>
      </ul>

      <div className='discounts-bunners__toggles-wrapper'>
        <ul className='discounts-bunners__toggles'>
          <li className='discounts-bunners__toggle'>
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
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DiscountsBanners;
