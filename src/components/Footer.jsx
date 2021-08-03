import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {OtherInformation, SocialNetworks, CartButton} from './';

function Footer({toggleFooterModal, refToggle, modalFlag}) {
  return (
    <div className='footer__wrapper'>
      <footer className='footer'>
        <div className='footer__mobile-block'>
          <div
            className={modalFlag ? 'footer_open' : 'footer_closed'}
            onClick={toggleFooterModal}
            ref={refToggle} ></div>
          <div className='footer__cart-button-wrapper'>
            <Link to='/cart'>
              <CartButton className='cart-button'/>
            </Link>
          </div>
        </div>
        <OtherInformation className='footer'/>
        <hr className='footer__line'/>
        <SocialNetworks className='footer'/>
      </footer>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  toggleFooterModal: PropTypes.func,
  refToggle: PropTypes.any,
  modalFlag: PropTypes.bool,
};
