import React from 'react';
import PropTypes from 'prop-types';

import { Container, Card, CloseIcon } from './styles';

export default function ModalSuccess({ onClose, open, title, message }) {
  return (
    open && (
      <Container>
        <Card>
          <CloseIcon onClick={onClose} />
          <h1>{title}</h1>
          <span>{message}</span>
        </Card>
      </Container>
    )
  );
}

ModalSuccess.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  title: PropTypes.string,
  message: PropTypes.string,
};
ModalSuccess.defaultProps = {
  onClose: true,
  open: false,
  title: '',
  message: '',
};
