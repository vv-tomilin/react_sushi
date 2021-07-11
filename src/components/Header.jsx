import React from 'react';

import {CartButton} from './';

import {
  logo,
  phoneIcon,
} from '../assets/logo and icons';

function Header() {
  return (
    <header>
      <div className="header__wrapper">
        <div className='header'>
          <div className='header__logo-wrapper'>
            <img
              className='header__logo'
              src={logo} alt='logo'
              width='91' height='59' />
          </div>

          <div className='header__phone-wrapper'>
            <img src={phoneIcon} alt='phone_icon' width='28' height='28'/>
            <div className='header__phone-text-block'>
              <p className='header__phone-label'>Служба доставки</p>
              <p className='header__phone'>
              +7(999)000-99-99
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='header__cart-button'>
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;
