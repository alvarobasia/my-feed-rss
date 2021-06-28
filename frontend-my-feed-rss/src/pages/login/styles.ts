import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LoginDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

export const FormLogin = styled.div`
  width: 40vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 20px;
  padding-top: 50px;
  p {
    font-family: Lato, sans-serif;
    color: #bbb;
    max-width: 350px;
  }
`

export const Paper = styled.div`
  width: 60vw;
  height: 100vh;
  overflow: hidden;
  background: url('./login.png');
  filter: brightness(1.05);
`

export const StyledInputDiv = styled(motion.div)`
  width: 95%;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 2px solid #ddd;
  /* transition: all 300ms; */
  &:focus-within {
    border: 2px solid ${(props) => props.theme.colors.primaryDark};
  }

  div {
    width: 13%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 5px;
    font-family: Lato, sans-serif;
    &::placeholder {
      color: #aaa;
    }
  }
`
export const StyledButton = styled(motion.button)`
  outline: none;
  border: none;
  border-radius: 8px;
  width: 55%;
  height: 38px;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: all 500ms;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryDark};
    box-shadow: 3px 3px 8px ${(props) => props.theme.colors.secondaryDark};
  }
  font-family: Lato, sans-serif;
  font-size: 22px;
  color: #fff;
`
export const DivInfo = styled(motion.div)`
  margin-top: 25px;
  max-width: 80%;
  font-family: Lato, sans-serif;
  color: #888;
  span {
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
