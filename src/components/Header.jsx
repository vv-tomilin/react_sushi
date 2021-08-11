import React from 'react';
import {Link} from 'react-router-dom';

import {CartButton, InformationDesktop} from './';

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
            <Link to='/'>
              <img
                className='header__logo'
                src={logo} alt='logo'
                width='91' height='59' />
            </Link>
          </div>

          <a href='tel:89990009999'>
            <div className='header__phone-wrapper'>
              <img
                className='header__phone-icon'
                src={phoneIcon} alt='phone_icon'
                width='28' height='28'/>
              <div className='header__phone-text-block'>
                <p className='header__phone-label'>Служба доставки</p>
                <p className='header__phone'>
              +7(999)000-99-99
                </p>
              </div>
            </div>
          </a>

          <InformationDesktop/>

          <div className='header__cart-button-wrapper'>
            <Link to='/cart'>
              <CartButton className='cart-button'/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
