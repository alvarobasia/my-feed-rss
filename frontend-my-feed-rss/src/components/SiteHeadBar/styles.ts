import { motion } from 'framer-motion'
import styled from 'styled-components'
type HeaderStyleProps = {
  isOnTop: boolean
}

export const Header = styled.header<HeaderStyleProps>`
  padding: 15px 90px;
  background-color: ${(props) =>
    props.isOnTop ? props.theme.colors.secondaryT : 'transparent'};
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  z-index: 50;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 500ms;
`

export type ButtonProps = {
  main: boolean
}

export const Button = styled(motion.button)<ButtonProps>`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => (props.main ? '#fff' : 'transparent')};
  background-color: ${(props) =>
    props.main ? 'transparent' : props.theme.colors.primary};
  color: #fff;
  width: 50%;
  font-size: 1.2rem;
  height: 100%;
  font-family: Lato, sans-serif;
  border-radius: 8px;
  z-index: 50;
`
export const Buttons = styled.div`
  display: flex;
  gap: 5px;
  width: 200px;
  height: 80%;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  flex-direction: row;
`
