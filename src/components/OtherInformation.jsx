import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {footerLogo} from '../assets/logo and icons';

function OtherInformation({className}) {
  return (
    <section className={`${className}__other-info`}>
      <h2 className='visually-hidden'>Дополнительная информация</h2>
      <div className={`${className}__other-info-logo`}>
        <img className={`${className}__other-info-logo-img`} src={footerLogo} />
        <p
          className={`${className}__other-info-logo-text`}>
          2021 © ИП Иванов И. И.
        </p>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <ul className={`${className}__other-info-blocks-list`}>
          <li className={`${className}__other-info-blocks-item`}>
            <Link to='public-offer-page'>Публичная оферта</Link>
          </li>
          <li className={`${className}__other-info-blocks-item`}>
            <Link to='/privacy-policy-page'>Политика конфиденциальности</Link>
          </li>
        </ul>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <ul className={`${className}__other-info-blocks-list`}>
          <li className={`${className}__other-info-blocks-item`}>
            <Link to='/our-restaurants-page'>Наши рестораны</Link>
          </li>
          <li className={`${className}__other-info-blocks-item`}>
            <Link to='/job-openings-page'>Наши вакансии</Link>
          </li>
        </ul>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <p>Служба доставки</p>
        <a>+7(342)000-00-00</a>
      </div>

      <div className={`${className}__other-info-blocks`}>
        <div className={`${className}__other-info-about-site`}>
          <Link to='about-web-site-page'>О сайте</Link>
        </div>
      </div>
    </section>
  );
}

export default OtherInformation;

OtherInformation.propTypes = {
  className: PropTypes.string,
};
