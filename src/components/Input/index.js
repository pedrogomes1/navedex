import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ label, name, type, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...rest} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
