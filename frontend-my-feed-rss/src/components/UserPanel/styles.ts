import styled from 'styled-components'

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 95vh;
  margin-top: 2vh;
  border-radius: 8px;
  box-shadow: 8px 8px 40px #999;
  overflow: hidden;
  position: relative;
`
export const Head = styled.div`
  width: 100%;
  height: 200px;
  background: url('./login.png');
  position: relative;
  span {
    position: absolute;
    bottom: 0;
    left: 180px;
    font-size: 47px;
    color: ${(props) => props.theme.colors.secondaryDark};
  }
`
export const Avatar = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 130px;
  left: 30px;
  border-radius: 50%;
  background-color: green;
  overflow: hidden;
`

export const ButtonStyle = styled.button`
  width: 120px;
  position: absolute;
  height: 40px;
  right: 35px;
  bottom: 15px;
  font-size: 24px;
  font-family: Lato, sans-serif;
  color: #fff;
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  border-radius: 8px;
`
export const Tip = styled.div`
  position: absolute;
  width: 150px;
  height: 22px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  left: 180px;
  color: #fff;
  border-radius: 8px;
  bottom: -35px;
  font-family: Lato, sans-serif;
`

export const LinksContainer = styled.div`
  width: 100%;
  height: calc(95vh - 300px);
  margin-top: 100px;
`
