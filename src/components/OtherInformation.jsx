import React from 'react';

import {footerLogo} from '../assets/logo and icons';

function OtherInformation() {
  return (
    <section>
      <h2>Дополнительная информация</h2>
      <div>
        <img src={footerLogo} />
        <p>2021 © ИП Иванов И. И.</p>
      </div>

      <div>
        <ul>
          <li>
            <a href='#'>Публичная оферта</a>
          </li>
          <li>
            <a href='#'>Политика конфиденциальности</a>
          </li>
          <li>
            <a href='#'>Полные реквизиты</a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a href='#'>Наши рестораны</a>
          </li>
          <li>
            <a href='#'>Карьера</a>
          </li>
        </ul>
      </div>

      <div>
        <a href='#'>Служба доставки</a>
        <a>+7(342)000-00-00</a>
      </div>
    </section>
  );
}

export default OtherInformation;
