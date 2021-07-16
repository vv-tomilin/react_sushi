import React from 'react';
import PropTypes from 'prop-types';

import {
  fbIcon,
  instagramIcon,
  vkIcon,
  twIcon,
  okIcon,
} from '../assets/logo and icons/social-icons';

function SocialNetworks({className}) {
  return (
    <section className={`${className}__social`}>
      <h2 className='visually-hidden'>Мы в социальных сетях</h2>
      <ul className={`${className}__social-list`}>
        <li className={`${className}__social-item`}>
          <img src={fbIcon}/>
          <a className='visually-hidden' href='#'>Фейсбук</a>
        </li>
        <li className={`${className}__social-item`}>
          <img src={instagramIcon}/>
          <a className='visually-hidden' href='#'>Инстаграм</a>
        </li>
        <li className={`${className}__social-item`}>
          <img src={vkIcon}/>
          <a className='visually-hidden' href='#'>Вконтакте</a>
        </li>
        <li className={`${className}__social-item`}>
          <img src={twIcon}/>
          <a className='visually-hidden' href='#'>Твиттер</a>
        </li>
        <li className={`${className}__social-item`}>
          <img src={okIcon}/>
          <a className='visually-hidden' href='#'>Одноклассники</a>
        </li>
      </ul>
    </section>
  );
}

export default SocialNetworks;

SocialNetworks.propTypes = {
  className: PropTypes.string,
};
