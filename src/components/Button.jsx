import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({children, className}) {
  return (
    <button className={classNames('button', className)}>{children}</button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string.isRequired,
};
