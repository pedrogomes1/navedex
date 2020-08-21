import React from 'react';
import PropTypes from 'prop-types';

import { Buttons } from './styles';

function Button({ type, children, ...rest }) {
  return (
    <Buttons type={type} {...rest}>
      {children}
    </Buttons>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
};

Button.defaultProps = {
  children: '',
};
