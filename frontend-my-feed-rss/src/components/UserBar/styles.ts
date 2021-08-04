import styled from 'styled-components'
import { BiLogOut } from 'react-icons/bi'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 15px;
  justify-content: space-between;
  flex-direction: row;
  span {
    font-size: 25px;
    color: #fff;
    font-family: Lato, sans-serif;
  }
`

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 45px;
  border-radius: 50%;
  box-shadow: 5px 5px 15px #555;
  background-color: green;
  overflow: hidden;
  border: 2px solid #fff;
`
export const FollowCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  h3 {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: Lato, sans-serif;
    font-size: 15px;
  }
  span {
    font-size: 32px;
    font-family: Roboto;
  }
`
export const LogOut = styled(BiLogOut)`
  color: #fff;
  font-size: 40px;
  margin-right: 15px;
`
