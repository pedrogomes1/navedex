import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 59.2rem;

  form {
    display: grid;
    grid-gap: 0 3.2rem;
    grid-template-columns: repeat(2, 1fr);

    button {
      grid-column: 2;
      margin-left: auto;
    }
  }

  @media (max-width: 540px) {
    form {
      display: flex;
      flex-direction: column;

      button {
        margin: 3.2rem auto;
      }
    }
  }
`;
