import React from 'react';
import {Link} from 'react-router-dom';

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
        <li>
          <Link
            className='information__item'
            to='/promos-info-page'>
            <img
              className='information__icon'
              src={actionIcon} alt=''/>
            <div className='information__item-text-wrapper'>
              <span className='information__item-text'>Акции</span>
            </div>
            <img className='information__arrow-icon' src={arrowIco} alt=''/>
          </Link>
        </li>
        <li>
          <hr className='information__decor-line'/>
        </li>
        <li>
          <Link
            className='information__item'
            to='/how-pay-page'>
            <img className='information__icon' src={bonusIcon} alt=''/>
            <div className='information__item-text-wrapper'>
              <span className='information__item-text'>Способы оплаты</span>
            </div>
            <img className='information__arrow-icon' src={arrowIco} alt=''/>
          </Link>
        </li>
        <li>
          <hr className='information__decor-line'/>
        </li>
        <li>
          <Link
            className='information__item'
            to='/delivery-info-page'>
            <img className='information__icon' src={deliveryIcon} alt=''/>
            <div className='information__item-text-wrapper'>
              <span className='information__item-text'>Условия доставки</span>
            </div>
            <img className='information__arrow-icon' src={arrowIco} alt=''/>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Information;
