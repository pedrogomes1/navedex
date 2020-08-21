import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  margin-top: 7.25rem;

  h1 {
    font-size: 24px;
    margin-left: 2.25rem;
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 59.2rem;

  svg {
    cursor: pointer;
  }
`;
