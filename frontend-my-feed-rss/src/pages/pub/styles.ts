import styled from 'styled-components'

export const PubCardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 92vh;
  overflow: auto;
`

type BackDropProps = {
  open: boolean
}

export const BackDrop = styled.div<BackDropProps>`
  position: absolute;
  top: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
  border-radius: 8px;
  box-shadow: 3px 3px 15px #888;
  background-color: #888a;
  width: 100vw;
  z-index: 80;
  height: 100vh;
`
export const Modal = styled.div`
  position: relative;
  top: 10vh;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 5px;
  justify-content: flex-start;
  left: 5vw;
  border-radius: 8px;
  box-shadow: 3px 3px 15px #888;
  background-color: #fff;
  width: 90vw;
  z-index: 90;
  height: 70vh;
  flex-direction: column;
`

export const Publica = styled.div`
  width: 90%;
  height: auto;
  border-radius: 8px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
`

export const BackButton = styled.button`
  position: absolute;
  width: 20%;
  height: 5vh;
  bottom: 15px;
  font-size: 25px;
  color: #fff;
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: red;
`
