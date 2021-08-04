import styled from 'styled-components'

export const HomeButtonStyle = styled.button`
  margin-top: 15px;
  width: 93%;
  border: none;
  height: 4vh;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 3px 3px 15px #555;
  color: #fff;
  font-size: 22px;
  font-family: Lato, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.secondaryDark};
  }
  span {
    font-size: 32px;
    padding: 0;
    margin: 0;
  }
`
