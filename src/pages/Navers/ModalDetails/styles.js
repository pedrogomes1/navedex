import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/close.svg';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  background: #fff;

  width: 100%;
  max-width: 1000px;

  height: auto;

  transition: 400ms;

  display: flex;

  @media (max-width: 1005px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: 650px;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NaverInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-left: 3.2rem;

  height: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  span {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-top: 1rem;
  }

  strong {
    font-weight: 600;
    font-size: 1.6rem;
    margin-top: 2.4rem;
  }
`;

export const ActionsButtons = styled.div`
  display: flex;
  margin-bottom: 2.7rem;

  height: auto;

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
`;

export const AvatarUser = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  position: relative;

  height: 50rem;

  width: 100%;
  max-width: 50rem;

  @media (max-width: 1005px) {
    width: 50%;
  }

  @media (max-width: 650px) {
    width: 20rem;
    min-height: 30rem;
    height: auto;

    margin: 5rem auto 2rem;
  }
`;

export const CloseIcon = styled(Close)`
  position: relative;
  top: -22rem;
  right: 5rem;
  cursor: pointer;

  @media (max-width: 650px) {
    top: -28rem;
    right: 2rem;

    height: 1.8rem;
    width: 1.8rem;
  }
`;
