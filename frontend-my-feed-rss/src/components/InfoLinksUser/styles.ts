import styled from 'styled-components'
import { BiMessageSquareAdd } from 'react-icons/bi'
export const InfoLinks = styled.div`
  width: 80%;
  height: 50px;
  margin: 15px auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  color: #fff;
  div {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  p:first-of-type {
    font-size: 24px;
    color: #fff;
  }
  p:last-of-type {
    font-size: 18px;
    color: ${(props) => props.theme.colors.primaryDark};
  }
`
export const AddStyle = styled(BiMessageSquareAdd)`
  font-size: 32px;
  color: ${(props) => props.theme.colors.secondaryDark};
`
