import React from 'react';
import PropTypes from 'prop-types';

function SocialNetworks({className}) {
  return (
    <section className={`${className}__social`}>
      <h2 className='visually-hidden'>Мы в социальных сетях</h2>
      <ul className={`${className}__social-list`}>
        <li>
          <a href='#'>Фейсбук</a>
        </li>
        <li>
          <a href='#'>Инстаграм</a>
        </li>
        <li>
          <a href='#'>Вконтакте</a>
        </li>
        <li>
          <a href='#'>Твиттер</a>
        </li>
        <li>
          <a href='#'>Одноклассники</a>
        </li>
      </ul>
    </section>
  );
}

export default SocialNetworks;

SocialNetworks.propTypes = {
  className: PropTypes.string,
};
