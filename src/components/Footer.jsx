import React from 'react';
import {Link} from 'react-router-dom';

import {OtherInformation, SocialNetworks, CartButton} from './';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__mobile-block'>
        <div className='footer_closed'></div>
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
  );
}

export default Footer;
