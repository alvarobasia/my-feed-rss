import styled from 'styled-components'

export const HeaderStyle = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  padding: 15px;
  font-size: 32px;
  font-family: Lato;
  color: #fff;
`

export const Container = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputStyle = styled.input`
  margin: 15px 0;
  width: 80%;
  border-radius: 8px;
  height: 5vh;
  padding: 8px;
  font-size: 18px;
  &::placeholder {
    font-family: Lato;
  }
`
export const Button = styled.button`
  width: 50%;
  font-size: 18px;
  height: 5vh;
  font-family: Lato;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  transition: all 500ms;
  &:hover {
    transform: scale(1.1);
  }
`
