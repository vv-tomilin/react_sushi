import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({children, className, onClick}) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className)}>{children}</button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
