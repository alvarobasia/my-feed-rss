import styled from 'styled-components'

export const PubCardContainer = styled.div`
  width: 100%;
  margin: 30px 0;
  height: 30vh;
  overflow: auto;
`

export const ContentInfo = styled.div`
  width: 80%;
  height: 100vh;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  div {
    background-color: ${(props) => props.theme.colors.secondary};
    width: 90%;
    height: auto;
    display: flex;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
