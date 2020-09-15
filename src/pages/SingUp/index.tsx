import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidadeErrors from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.svg';
import { Conteiner, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Record<string, any>) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'senha com no minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const erros = getValidadeErrors(error);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Conteiner>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <p>Faça seu Cadastro</p>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Conteiner>
  );
};

export default SignUp;
