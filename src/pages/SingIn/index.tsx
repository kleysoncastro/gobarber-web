import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Conteiner, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Conteiner>
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <form>
          <p>Faça seu login</p>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>
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
