import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import {
  DivInfo,
  FormLogin,
  LoginDiv,
  Paper,
  StyledButton,
  StyledInputDiv,
  Error
} from './styles'
import { BsPersonFill, BsLockFill } from 'react-icons/bs'
import { AuthContext } from '../../contexts/AuthContext'

export default function loginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { singIn, error } = useContext(AuthContext)

  function onLogin() {
    singIn(email, password)
  }

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
          <input
            placeholder="Informe seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <input
            placeholder="Informe sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledInputDiv>
        {error && (
          <Error
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              duration: 0.4
            }}
          >
            Login Incorreto!
          </Error>
        )}
        <StyledButton
          onClick={onLogin}
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
          Não possui conta?{' '}
          <span>
            <Link href="/newuser">Se registre agora</Link>
          </span>
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
