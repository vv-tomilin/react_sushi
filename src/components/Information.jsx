import React from 'react';

import {
  actionIcon,
  arrowIco,
  bonusIcon,
  deliveryIcon,
} from '../assets/logo and icons';

function Information() {
  return (
    <section className='information'>
      <h2 className='visually-hidden'>Информация</h2>
      <ul>
        <li className='information__item'>
          <img
            className='information__icon'
            src={actionIcon} alt=''/>
          <div className='information__item-text-wrapper'>
            <span className='information__item-text'>Акции</span>
          </div>
          <img className='information__arrow-icon' src={arrowIco} alt=''/>
        </li>
        <li>
          <hr className='information__decor-line'/>
        </li>
        <li className='information__item'>
          <img className='information__icon' src={bonusIcon} alt=''/>
          <div className='information__item-text-wrapper'>
            <span className='information__item-text'>Бонусы</span>
          </div>
          <img className='information__arrow-icon' src={arrowIco} alt=''/>
        </li>
        <li>
          <hr className='information__decor-line'/>
        </li>
        <li className='information__item'>
          <img className='information__icon' src={deliveryIcon} alt=''/>
          <div className='information__item-text-wrapper'>
            <span className='information__item-text'>Условия доставки</span>
          </div>
          <img className='information__arrow-icon' src={arrowIco} alt=''/>
        </li>
      </ul>
    </section>
  );
}

export default Information;
