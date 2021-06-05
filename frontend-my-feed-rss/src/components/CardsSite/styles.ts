import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledDiv = styled(motion.div)`
  width: 80%;
  height: 18rem;
  margin: 2rem 0 2rem 3rem;
  /* background: #ff980022; */
  border-radius: 8px;
  /* box-shadow: 5px 5px 30px lightgray; */
  display: flex;
  flex-direction: row;
  overflow: hidden;
`
export const TextDiv = styled(motion.div)`
  width: 50%;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    padding: 1px;
    font-size: 28px;
    background: rgb(0, 112, 179);
    background: linear-gradient(
      61deg,
      rgba(0, 112, 179, 1) 33%,
      rgba(255, 152, 0, 0.8715861344537815) 64%,
      rgba(255, 152, 0, 0.8239670868347339) 91%
    );
    text-shadow: 1px 1px 20px lightgray;
    -webkit-background-clip: text;
    font-family: Lato, sans-serif;
    margin: 0 0 0 2rem;
    -webkit-text-fill-color: transparent;
  }
  p {
    margin-left: 2rem;
    margin-bottom: 10px;
    font-weight: 200;
    color: grey;
  }
`
export const ImageDiv = styled(motion.div)`
  width: 50%;
  position: relative;
  /* background-color: red; */
`

export const Content = styled(motion.div)`
  position: absolute;
  width: 60%;
  height: 50%;
  /* box-shadow: 5px 5px 30px lightgray; */
  background: rgb(0, 112, 179);
  background: linear-gradient(
    61deg,
    rgba(0, 112, 179, 1) 33%,
    rgba(255, 152, 0, 0.8715861344537815) 64%,
    rgba(255, 152, 0, 0.8239670868347339) 91%
  );
  z-index: 0;
  border-radius: 8px;
  right: 13%;
  bottom: 26%;
`
