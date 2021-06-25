import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledDiv = styled.div`
  /* background-color: ${(props) => props.theme.colors.primaryLight}; */
  width: 100%;
  height: 40rem;
  position: relative;
  z-index: 0;
  display: flex;
  overflow: hidden;
`
export const RightDiv = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  background: rgb(0, 112, 179);
  background: linear-gradient(
    0deg,
    rgba(0, 112, 179, 1) 16%,
    rgba(255, 152, 0, 0.4962359943977591) 35%,
    rgba(255, 152, 0, 0.3029586834733894) 54%
  );
  /* margin-top: 1rem; */
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledText = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 38px;
  font-weight: 300;
  max-width: 30rem;

  color: ${(props) => props.theme.colors.secondaryDark};
`
export const StyledSpan = styled.span`
  font-family: Lato, sans-serif !important;
  font-size: 38px;
  font-style: italic;
  font-weight: 900;
  color: ${(props) => props.theme.colors.secondaryDark};
`
export const StyledButton = styled(motion.button)`
  font-family: Lato, sans-serif !important;
  font-size: 38px;
  margin-bottom: 8rem;
  font-weight: 500;
  padding: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  outline: none;
  border-radius: 8px;
  color: #fff;
`

export const StyledImage = styled(motion.img)`
  position: absolute;
  bottom: 5rem;
  left: 0;
  opacity: 0.8;
  z-index: -1;
`

export const StyledImageMinor = styled(motion.img)`
  position: absolute;
  bottom: 10rem;
  right: 10rem;
  opacity: 0.8;
  z-index: -2;
`

export const StyledDivSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ff980022;
  min-height: 60rem;
`
export const StyledDivMinorCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #ff980022;
`
