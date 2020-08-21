import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6.4rem;

    h2 {
      font-size: 4rem;
    }

    button {
      margin: 0;
    }
  }

  @media (max-width: 875px) {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const WrapperCards = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 3.1rem;
  margin-top: 3.6rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;

  height: 42rem;
  flex: 1;

  strong {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }

  span {
    font-size: 1.6rem;
    margin-top: 0.4rem;
  }

  @media (max-width: 595px) {
    text-align: center;
  }
`;

export const ImageAvatar = styled.div`
  background-image: url(${(props) => props.src});
  max-width: 28rem;
  height: 28rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  transition: all 0.4s ease;

  &:hover {
    transform: translate3D(0, -1px, 0) scale(1.02);
  }

  @media (max-width: 595px) {
    display: block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
`;

export const ActionsButtons = styled.div`
  display: flex;

  button {
    border: 0;
    padding: 0;
    background: none;
    margin: 1.25rem 1.6rem 0 0.5rem;

    transition: all 0.4s ease;

    &:hover {
      transform: translate3D(0, -1px, 0) scale(1.1);
    }
  }

  svg {
    cursor: pointer;
  }

  svg + svg {
    margin-left: 0;
  }

  @media (max-width: 595px) {
    display: flex;
    justify-content: center;
  }
`;
