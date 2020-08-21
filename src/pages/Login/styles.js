import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 50rem;
  height: 41rem;

  border: 1px solid #212121;

  img {
    margin-bottom: 0.8rem;
  }

  form {
    width: 100%;

    padding: 0rem 3.2rem;

    button {
      width: 100%;
      height: 4rem;
      background: #212121;
      color: #ffffff;

      margin-top: 3.2rem;
      font-size: 1.4rem;

      border: 0;
    }
  }
`;
