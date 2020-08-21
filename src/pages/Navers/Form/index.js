import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Container } from './styles';

export default function FormData({ initialData, onSubmit }) {
  return (
    <>
      <Container>
        <Form initialData={initialData} onSubmit={onSubmit}>
          <Input name="name" type="text" placeholder="Nome" label="Nome" />
          <Input
            name="job_role"
            type="text"
            placeholder="Cargo"
            label="Cargo"
          />
          <Input
            name="birthdate"
            type="text"
            placeholder="Idade"
            label="Idade"
          />
          <Input
            name="admission_date"
            type="text"
            placeholder="Tempo de empresa"
            label="Tempo de empresa"
          />
          <Input
            name="project"
            type="text"
            placeholder="Projetos que participou"
            label="Projetos que participou"
          />
          <Input
            name="url"
            type="text"
            placeholder="URL da foto do Naver"
            label="URL da foto do Naver"
          />

          <Button type="submit">Salvar</Button>
        </Form>
      </Container>
    </>
  );
}

FormData.propTypes = {
  onSubmit: PropTypes.func,
  initialData: PropTypes.oneOfType([PropTypes.object]),
};
FormData.defaultProps = {
  onSubmit: () => {},
  initialData: {},
};
