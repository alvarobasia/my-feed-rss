import styled from 'styled-components'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { FiRss } from 'react-icons/fi'

export const Bar = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 40px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const BsPlusStyled = styled(BsPlus)`
  transition: all 500ms;
  border: none;
  outline: none;
  &:hover {
    transform: rotate(90deg) !important;
    filter: brightness(0.9);
  }
  &:focus {
    filter: brightness(0.8);
  }
`

export const BsSearchStyled = styled(BsSearch)`
  transition: all 500ms;
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.3) !important;
    filter: brightness(0.9);
  }
  &:focus {
    filter: brightness(0.8);
  }
`
export const FiRssStyled = styled(FiRss)`
  transition: all 500ms;
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.3) !important;
    filter: brightness(0.9);
  }
  &:focus {
    filter: brightness(0.8);
  }
`
