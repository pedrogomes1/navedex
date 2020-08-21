import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import { Container, Card, ActionsButtons } from './styles';

export default function ModalConfirm({
  onClose,
  userId,
  open,
  title,
  message,
  handleSubmit,
}) {
  return (
    <Container>
      {open && (
        <Card>
          <h1>{title}</h1>
          <span>{message}</span>

          <ActionsButtons>
            <Button type="button" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="button" onClick={() => handleSubmit(userId)}>
              Excluir
            </Button>
          </ActionsButtons>
        </Card>
      )}
    </Container>
  );
}

ModalConfirm.propTypes = {
  onClose: PropTypes.func,
  userId: PropTypes.string,
  handleSubmit: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
};
ModalConfirm.defaultProps = {
  onClose: () => {},
  userId: '',
  handleSubmit: () => {},
  open: false,
  title: '',
  message: '',
};
