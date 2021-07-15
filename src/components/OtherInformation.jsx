import React from 'react';
import PropTypes from 'prop-types';

import {footerLogo} from '../assets/logo and icons';

function OtherInformation({className}) {
  return (
    <section className={`${className}__other-info`}>
      <h2 className='visually-hidden'>Дополнительная информация</h2>
      <div className={`${className}__other-info-logo`}>
        <img src={footerLogo} />
        <p>2021 © ИП Иванов И. И.</p>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <ul className={`${className}__other-info-blocks-list`}>
          <li className={`${className}__other-info-blocks-item`}>
            <a href='#'>Публичная оферта</a>
          </li>
          <li className={`${className}__other-info-blocks-item`}>
            <a href='#'>Политика конфиденциальности</a>
          </li>
          <li className={`${className}__other-info-blocks-item`}>
            <a href='#'>Полные реквизиты</a>
          </li>
        </ul>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <ul className={`${className}__other-info-blocks-list`}>
          <li className={`${className}__other-info-blocks-item`}>
            <a href='#'>Наши рестораны</a>
          </li>
          <li className={`${className}__other-info-blocks-item`}>
            <a href='#'>Карьера</a>
          </li>
        </ul>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <p>Служба доставки</p>
        <a>+7(342)000-00-00</a>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <div className={`${className}__other-info-about-site`}>
          <a href='#'>О сайте</a>
        </div>
      </div>
    </section>
  );
}

export default OtherInformation;

OtherInformation.propTypes = {
  className: PropTypes.string,
};
