import React from 'react';

import { Container } from './styles';
import logo from '../../assets/images/logo-header.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo header Nave.rs" />

      <button type="button">Sair</button>
    </Container>
  );
}
