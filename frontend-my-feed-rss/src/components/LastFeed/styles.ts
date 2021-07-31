import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 15px 15px 30px #dcdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: Lato, sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme.colors.primary};
  }
`
export const Scroll = styled(motion.div)`
  width: 50%;
  height: 90%;
  overflow-y: auto;
`

export const CardStyle = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 5% 15px;
  height: 100px;
  box-shadow: 15px 15px 30px #dcdc;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  border-radius: 8px;
  div:first-of-type {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
      padding: 0;
      font-size: 24px;
      color: ${(props) => props.theme.colors.secondary};
      font-family: Lato, sans-serif;
    }
    p {
      margin: 0;
      padding: 0;
      color: #999;
      display: -webkit-box;
      height: 50px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.625;
    }
  }
`
