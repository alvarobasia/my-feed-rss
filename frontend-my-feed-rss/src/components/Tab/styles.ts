import styled from 'styled-components'

export const StyledTab = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const StyledButton = styled.button`
  width: 45%;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  border-radius: 8px;
  transition: all 500ms;
  font-family: Lato, sans-serif;
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  &:hover {
    transform: scale(1.1);
    background-color: #fff;
    color: ${(props) => props.theme.colors.primaryDark};
  }
`
