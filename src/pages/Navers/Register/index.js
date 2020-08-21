import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import FormData from '../Form';
import Modal from '../../../components/ModalSuccess';
import { ReactComponent as BackIcon } from '../../../assets/images/back.svg';
import api from '../../../services/api';
import { Container, HeaderForm } from './styles';

export default function RegisterNavers() {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = useCallback(async (data, { reset }) => {
    try {
      await api.post('navers', {
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

      reset();
    } catch (error) {
      alert('Erro ao cadastrar usuário');
    }
  }, []);

  return (
    <Container>
      <HeaderForm>
        <BackIcon onClick={() => history.push('/home')} />
        <h1>Adicionar Naver</h1>
      </HeaderForm>

      <FormData onSubmit={onSubmit} />
      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title="Naver criado"
          message="Naver criado com sucesso!"
        />
      )}
    </Container>
  );
}
