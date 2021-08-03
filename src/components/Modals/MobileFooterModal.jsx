import React from 'react';
import PropTypes from 'prop-types';

import {OtherInformation, SocialNetworks} from '..';

function MobileFooterModal({toggleFooterModal, refModal}) {
  return (
    <div
      className='mobile-footer-modal'
      ref={refModal} >
      <OtherInformation
        className='mobile-footer-modal'
        toggleFooterModal={toggleFooterModal} />
      <SocialNetworks className='mobile-footer-modal'/>
    </div>
  );
}

export default MobileFooterModal;

MobileFooterModal.propTypes = {
  toggleFooterModal: PropTypes.func,
  refModal: PropTypes.any,
};
