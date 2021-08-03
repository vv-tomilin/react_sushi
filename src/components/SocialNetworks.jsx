import React from 'react';
import PropTypes from 'prop-types';

import {
  fbIcon,
  instagramIcon,
  vkIcon,
  twIcon,
  okIcon,
} from '../assets/logo and icons/social-icons';

import {
  fbIconMob,
  instagramIconMob,
  vkIconMob,
  twIconMob,
  okIconMob,
} from '../assets/logo and icons/social-icons/mob';

function SocialNetworks({className}) {
  return (
    <section className={`${className}__social`}>
      <h2 className='visually-hidden'>Мы в социальных сетях</h2>
      <ul className={`${className}__social-list`}>
        <li className={`${className}__social-item`}>
          <span className='visually-hidden'>Фейсбук</span>
          <a href='https://www.fb.com'>
            <img className={`${className}__social-img`} src={fbIcon}/>
            <img className={`${className}__social-img-mob`} src={fbIconMob}/>
          </a>
        </li>
        <li className={`${className}__social-item`}>
          <span className='visually-hidden' href='#'>Инстаграм</span>
          <a href='https://www.instagram.com'>
            <img className={`${className}__social-img`} src={instagramIcon}/>
            <img
              className={`${className}__social-img-mob`}
              src={instagramIconMob}/>
          </a>
        </li>
        <li className={`${className}__social-item`}>
          <span className='visually-hidden' href='#'>Вконтакте</span>
          <a href='https://www.vk.com'>
            <img className={`${className}__social-img`} src={vkIcon}/>
            <img className={`${className}__social-img-mob`} src={vkIconMob}/>
          </a>
        </li>
        <li className={`${className}__social-item`}>
          <span className='visually-hidden' href='#'>Твиттер</span>
          <a href='https://www.twitter.com'>
            <img className={`${className}__social-img`} src={twIcon}/>
            <img className={`${className}__social-img-mob`} src={twIconMob}/>
          </a>
        </li>
        <li className={`${className}__social-item`}>
          <span className='visually-hidden' href='#'>Одноклассники</span>
          <a href='https://www.ok.ru'>
            <img className={`${className}__social-img`} src={okIcon}/>
            <img className={`${className}__social-img-mob`} src={okIconMob}/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialNetworks;

SocialNetworks.propTypes = {
  className: PropTypes.string,
};
