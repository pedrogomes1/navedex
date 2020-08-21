import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Modal from '../../../components/ModalSuccess';
import FormData from '../Form';
import { ReactComponent as BackIcon } from '../../../assets/images/back.svg';
import api from '../../../services/api';
import { Container, HeaderForm } from './styles';

export default function EditNavers({ location }) {
  const history = useHistory();

  const [user] = useState(location.state.user);
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = useCallback(
    async (data) => {
      try {
        await api.put(`navers/${user.id}`, {
          job_role: data.job_role,
          admission_date: data.admission_date,
          birthdate: data.birthdate,
          project: data.project,
          name: data.name,
          url: data.url,
        });
        setOpenModal(true);

        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      } catch (error) {
        alert('Erro ao editar usuário');
      }
    },
    [user.id]
  );

  return (
    <Container>
      <HeaderForm>
        <BackIcon onClick={() => history.push('/home')} />
        <h1>Editar Naver</h1>
      </HeaderForm>

      <FormData initialData={user} onSubmit={onSubmit} />

      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title="Naver atualizado"
          message="Naver atualizado com sucesso!"
        />
      )}
    </Container>
  );
}
EditNavers.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
