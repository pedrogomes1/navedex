import styled from 'styled-components';
import Close from '../../assets/images/close.svg';

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
  position: absolute;
  background: #fff;
  width: 59.2rem;
  height: 16rem;
  transition: 400ms;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;

    padding-top: 3.2rem;
    padding-left: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    line-height: 3.6rem;

    padding-top: 2.4rem;
    padding-left: 3.2rem;
  }

  @media (max-width: 610px) {
    width: 45rem;
  }

  @media (max-width: 470px) {
    height: auto;
    width: 30rem;
  }
`;

export const CloseIcon = styled.div`
  background: url(${Close}) no-repeat center;

  height: 1.4rem;
  width: 1.4rem;

  top: 2.9rem;
  right: 2.9rem;

  position: absolute;
  cursor: pointer;
`;
