import styled from 'styled-components'

export const RssInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  width: 60%;
  height: 5vh;
  border-radius: 8px;
  outline: none;
  padding: 20px 10px;
  font-size: 18px;
  font-family: Lato, sans-serif;
`
export const RssAdd = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  width: 80px;
  font-size: 1.2rem;
  height: 7vh;
  font-family: Lato, sans-serif;
  border-radius: 8px;
  margin-left: 10px;
  transition: all 500ms;
  &:hover {
    transform: scale(1.1);
  }
`
