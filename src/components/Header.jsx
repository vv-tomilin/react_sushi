import React from 'react';

import {
  logo,
  cityIcon,
  cartIcon,
} from '../assets/logo and icons';

function Header() {
  return (
    <div>
      <header className='page-header'>
        <img src={logo} alt='logo'/>
        <div>
          <img src={cityIcon} alt='location_ico' />
          <a href='#'>Пермь</a>
          <a href='#'>+7(342)000-00-00</a>
        </div>
        <ul>
          <li>
            <a href='#' >
              <img src={cartIcon} alt='cart_icon' />
              <p>Корзина</p>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
