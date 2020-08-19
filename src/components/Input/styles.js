import styled from 'styled-components';

export const Container = styled.div`
  label {
    margin-top: 3.2rem;
    display: block;

    font-weight: 600;
    font-size: 1.4rem;
  }

  input {
    margin-top: 0.4rem;
    width: 100%;
    height: 4rem;

    padding: 0.8rem 0rem 0.8rem 0.8rem;

    border: 1px solid #424242;

    &::placeholder {
      font-size: 16px;
      color: #9e9e9e;
    }
  }
`;
