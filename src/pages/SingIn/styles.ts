import styled from 'styled-components';
import { shade } from 'polished';
import backgraoundImg from '../../assets/sign-in-background.png';

export const Conteiner = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  P {
    font-size: 24px;
    font-family: 'Roboto Slab';
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff900f;
    display: block;
    margin-top: 24px;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff900f')};
    }
    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgraoundImg}) no-repeat center;
  background-size: cover;
`;
