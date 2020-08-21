import React, { useState, useCallback, useEffect } from 'react';

import history from '../../services/history';
import { ReactComponent as IconEdit } from '../../assets/images/editar.svg';
import { ReactComponent as IconDelete } from '../../assets/images/deletar.svg';
import ModalDetails from '../Navers/ModalDetails';
import ModalConfirm from '../../components/ModalConfirm';
import ModalSuccess from '../../components/ModalSuccess';
import api from '../../services/api';
import Button from '../../components/Button';

import {
  Container,
  Cards,
  WrapperCards,
  ActionsButtons,
  ImageAvatar,
} from './styles';

function Home() {
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('navers');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  const handleDeleteUser = useCallback(
    async (id) => {
      try {
        await api.delete(`navers/${id}`);

        setOpenModalConfirm(false);
        setOpenModalSuccess(true);

        setOpenModalDetails(false);

        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        alert('Erro ao deletar');
      }
    },
    [users]
  );
  return (
    <>
      <Container>
        <div>
          <h2>Navers</h2>
          <Button type="button" onClick={() => history.push('/register/naver')}>
            Adicionar Naver
          </Button>
        </div>
      </Container>

      <WrapperCards>
        {users.map((user) => (
          <Cards key={user.id}>
            <ImageAvatar
              src={user.url}
              alt={user.name}
              onClick={() => {
                setOpenModalDetails(true);
                setUserId(user.id);
              }}
            />
            <strong>{user.name}</strong>
            <span>{user.job_role}</span>

            <ActionsButtons>
              <button
                type="button"
                onClick={() => {
                  setOpenModalConfirm(true);
                  setUserId(user.id);
                }}
              >
                <IconDelete />
              </button>

              <button
                type="button"
                onClick={() =>
                  history.push({
                    pathname: '/edit/naver',
                    state: { user },
                  })
                }
              >
                <IconEdit />
              </button>
            </ActionsButtons>
          </Cards>
        ))}
      </WrapperCards>

      {openModalDetails && (
        <ModalDetails
          open={openModalDetails}
          onClose={() => setOpenModalDetails(false)}
          onConfirm={() => setOpenModalConfirm(true)}
          userId={userId}
        />
      )}

      {openModalConfirm && (
        <ModalConfirm
          open={openModalConfirm}
          onClose={() => setOpenModalConfirm(false)}
          userId={userId}
          handleSubmit={handleDeleteUser}
          title="Excluir Naver"
          message="Tem certeza que deseja excluir este Naver?"
        />
      )}

      {openModalSuccess && (
        <ModalSuccess
          open={ModalSuccess}
          onClose={() => setOpenModalSuccess(false)}
          title="Naver excluído"
          message="Naver excluído com sucesso!"
        />
      )}
    </>
  );
}

export default Home;
