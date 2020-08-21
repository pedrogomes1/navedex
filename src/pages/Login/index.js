import React, { useCallback } from 'react';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../hooks/auth';

import { Container, Wrapper } from './styles';

function Login() {
  const { signIn, loading } = useAuth();

  const handleSignIn = useCallback(
    ({ email, password }) => {
      signIn({ email, password });
    },
    [signIn]
  );

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo Nave.rs" />
        <Form onSubmit={handleSignIn}>
          <Input
            name="email"
            type="text"
            label="E-mail"
            placeholder="E-mail"
            required
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Senha"
            required
          />

          <button type="submit">{loading ? 'Aguarde...' : 'Entrar'}</button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
