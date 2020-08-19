import React from 'react';

import Input from '../../components/Input';
import logo from '../../assets/images/logo.svg';

import { Container, Wrapper, Form } from './styles';

function Login() {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo Nave.rs" />
        <Form>
          <Input
            name="e-mail"
            type="text"
            label="E-mail"
            placeholder="E-mail"
          />
          <Input
            name="password"
            type="text"
            label="Senha"
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
