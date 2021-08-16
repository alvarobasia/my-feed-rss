import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  height: 8vh;
`

export const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  height: 60px;
  font-size: 22px;
  font-family: Lato, sans-serif;
  border-radius: 8px;
  border: none;
  margin-top: 15px;
  color: #555;
`

export const SearchButton = styled.button`
  position: absolute;
  right: 22px;
  top: 15px;
  width: 50px;
  height: 50px;
  padding: 5px;
  font-size: 32px;
  font-family: Lato, sans-serif;
  border-radius: 8px;
  border: none;
  margin-top: 15px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px #555;
  transition: all 500ms;
  color: #fff;
  &:hover {
    color: red;
    box-shadow: none;
    border: 1px solid red;
    background-color: #fff;
  }
`

export const Back = styled.button`
  position: absolute;
  right: 100px;
  top: 15px;
  width: 50px;
  height: 50px;
  padding: 5px;
  font-size: 32px;
  font-family: Lato, sans-serif;
  border-radius: 8px;
  border: none;
  margin-top: 15px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px #555;
  transition: all 500ms;
  color: #fff;
  &:hover {
    color: ${(props) => props.theme.colors.secondaryDark};
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
    background-color: #fff;
  }
`

export const SearchIcon = styled(BsSearch)`
  color: inherit;
  font-size: 25px;
`
export const BackIcon = styled(BiArrowBack)`
  color: inherit;
  font-size: 25px;
`
export const UsersCardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 92vh;
  overflow: auto;
`
