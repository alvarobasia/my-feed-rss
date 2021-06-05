import styled from 'styled-components'

export const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Lato, sans-serif;
`
