import React from 'react';

import {
  logo,
  cityIcon,
  cartIcon,
} from '../assets/logo and icons';

function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt='logo'/>
        <div>
          <img src={cityIcon} alt='location_ico' />
          <a href='#'>Пермь</a>
          <a href='#'>+7(342)000-00-00</a>
        </div>
        <nav>
          <ul>
            <li>Роллы и суши</li>
            <li>Сеты</li>
            <li>WOK</li>
            <li>Горячее и салаты</li>
            <li>Комбо</li>
            <li>Детское меню</li>
            <li>Фирменное меню</li>
          </ul>
        </nav>
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
