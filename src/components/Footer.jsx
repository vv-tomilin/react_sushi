import React from 'react';

import {OtherInformation, SocialNetworks, CartButton} from './';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__mobile-block'>
        <div className='footer_closed'></div>
        <div className='footer__cart-button-wrapper'>
          <CartButton className='cart-button'/>
        </div>
      </div>
      <OtherInformation className='footer'/>
      <hr className='footer__line'/>
      <SocialNetworks className='footer'/>
    </footer>
  );
}

export default Footer;
