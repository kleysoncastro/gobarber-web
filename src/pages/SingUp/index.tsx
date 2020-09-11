import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Conteiner, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Conteiner>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <form>
          <p>Faça seu Cadastro</p>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="/">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Conteiner>
  );
};

export default SignUp;
