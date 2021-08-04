import styled from 'styled-components'
import { MdPublic } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3px;
  height: auto;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Aside = styled.div`
  width: 40%;
  position: relative;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  h2 {
    margin-top: 22px;
    padding: 0;
    font-size: 18px;
    font-family: Lato, sans-serif;
    color: #fff;
    font-weight: 500;
  }
`

export const StylePub = styled(MdPublic)`
  font-size: 30px;
`

export const StyleUser = styled(FaUserAlt)`
  font-size: 30px;
`
