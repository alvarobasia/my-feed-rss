import styled from 'styled-components'
import { IoMdRemoveCircle } from 'react-icons/io'
import { AiTwotoneEdit } from 'react-icons/ai'

export const Container = styled.div`
  width: 93%;
  height: 25vh;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 15px;
  border-radius: 8px;
  padding: 5px;
  box-shadow: inset 8px 8px 40px #666;
  overflow: auto;
`

type DivLinkProps = {
  editMode: boolean
}

export const DivLink = styled.div<DivLinkProps>`
  width: 92%;
  margin: 10px auto;
  height: ${(props) => (props.editMode ? '70px' : '35px')};
  transition: all 500ms;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 1px;
  border: 2px solid ${(props) => props.theme.colors.secondaryT};
  border-radius: 8px;
  box-shadow: 2px 2px 8px #666;
  overflow: hidden;
  div {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    div {
      width: auto;
    }
  }
  p {
    font-size: 16px;
    color: #fff;
    margin-left: 15px;
    margin: 0;
    padding: 2px;
  }
`
export const IconRemove = styled(IoMdRemoveCircle)`
  color: #e85877;
  margin: 5px;
  font-size: 25px;
`

export const EditIcon = styled(AiTwotoneEdit)`
  color: #fff;
  margin: 5px;
  font-size: 25px;
`
export const EditInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
  padding: 3px;
  font-size: 18px;
  width: 45%;
  margin: 0 15px;
  &::placeholder {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`

export const EditButton = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 5px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primaryLight};
  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
    background-color: ${(props) => props.theme.colors.secondaryDark};
  }
  font-weight: bold;
  transition: all 500ms;
  font-family: Lato, sans-serif;
  font-weight: 500;
`
