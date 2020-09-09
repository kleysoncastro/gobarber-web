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

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff900f;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 16px;
      width: 100%;
      color: #312e38;
      width: 100%;
      font-weight: 500px;
      margin-top: 16px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff900f')};
      }
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
