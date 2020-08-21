import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { differenceInYears } from 'date-fns';
import history from '../../../services/history';
import { ReactComponent as IconEdit } from '../../../assets/images/editar.svg';
import { ReactComponent as IconDelete } from '../../../assets/images/deletar.svg';
import api from '../../../services/api';

import {
  Container,
  Card,
  AvatarUser,
  NaverInformations,
  Content,
  ActionsButtons,
  CloseIcon,
} from './styles';

export default function ModalDetails({ onClose, open, onConfirm, userId }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get(`navers/${userId}`);

      const usersData = {
        ...data,
        newBirthDate: differenceInYears(new Date(), new Date(data.birthdate)),
        companyTime: differenceInYears(
          new Date(),
          new Date(data.admission_date)
        ),
      };
      setUser(usersData);
    }

    loadUsers();
  }, [userId]);

  return (
    open && (
      <Container>
        <Card>
          <AvatarUser src={user.url} alt={user.name} />

          <NaverInformations>
            <Content>
              <h1>Asdf</h1>
              <span>{user.job_role}</span>

              <strong>Idade</strong>
              <span>{user.newBirthDate} anos</span>

              <strong>Tempo de empresa</strong>
              <span>{user.companyTime} anos</span>

              <strong>Projetos que participou</strong>
              <span>{user.project}</span>
            </Content>

            <ActionsButtons>
              <button type="button" onClick={onConfirm}>
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
          </NaverInformations>
        </Card>
        <CloseIcon onClick={onClose} />
      </Container>
    )
  );
}

ModalDetails.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  open: PropTypes.bool,
  userId: PropTypes.number.isRequired,
};
ModalDetails.defaultProps = {
  onClose: () => {},
  onConfirm: () => {},
  open: false,
};
