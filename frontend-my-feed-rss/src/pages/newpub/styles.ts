import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

export const ContainerInput = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  input {
    width: 25%;
    height: 25%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
  }
  textarea {
    height: auto;
    width: auto;
    resize: none;
    font-size: 12px;
    font-family: Lato, sans-serif;
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
  }
`
