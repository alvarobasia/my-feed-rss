import { GetStaticProps } from 'next'
import React from 'react'
import {
  DivInfo,
  FormLogin,
  LoginDiv,
  Paper,
  StyledButton,
  StyledInputDiv
} from './styles'
import { BsPersonFill, BsLockFill } from 'react-icons/bs'

export default function loginPage() {
  return (
    <LoginDiv>
      <FormLogin>
        <img src="/l.svg" width="220" height="100" />
        <p>Bem vindo ao MyFeedRSS, preencha com seus dados abaixo</p>
        <StyledInputDiv
          whileHover={{ boxShadow: '3px 3px 8px #FF9800' }}
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 30,
            duration: 1
          }}
        >
          <div>
            <BsPersonFill size={30} color={'#FF9800'} />
          </div>
          <input placeholder="Informe seu e-mail" />
        </StyledInputDiv>
        <StyledInputDiv
          whileHover={{ boxShadow: '3px 3px 8px #FF9800' }}
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 30,
            duration: 1
          }}
        >
          <div>
            <BsLockFill size={30} color={'#FF9800'} />
          </div>
          <input placeholder="Informe sua senha" type="password" />
        </StyledInputDiv>
        <StyledButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            type: 'spring',
            stiffness: 20,
            duration: 1
          }}
        >
          Acessar o MyFeedRSS
        </StyledButton>
        <DivInfo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            type: 'spring',
            stiffness: 20,
            duration: 1
          }}
        >
          Não possui conta? <span>Se registre agora</span>
        </DivInfo>
      </FormLogin>
      <Paper />
    </LoginDiv>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
