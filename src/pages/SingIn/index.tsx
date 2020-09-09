import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Conteiner, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Conteiner>
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <form>
          <p>Faça seu login</p>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci a senha</a>
        </form>
        <a href="teste">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Conteiner>
  );
};

export default SignIn;
