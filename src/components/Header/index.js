import React, { useCallback } from 'react';

import history from '../../services/history';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import { ReactComponent as Logo } from '../../assets/images/logo-header.svg';

export default function Header() {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);
  return (
    <Container>
      <Logo onClick={() => history.push('/home')} />

      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
