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
    max-width: 50px;
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
type ButtonStyleProps = {
  right: number
}
export const ButtonStyle = styled.button<ButtonStyleProps>`
  width: 120px;
  position: absolute;
  height: 40px;
  right: ${(props) => props.right + 'px'};
  bottom: 15px;
  font-size: 24px;
  font-family: Lato, sans-serif;
  color: #fff;
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  border-radius: 8px;
`
export const Owner = styled.div`
  position: absolute;
  top: 220px;
  left: 180px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  padding: 5px;
  border-radius: 8px;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  p:first-of-type {
    color: #fff;

    font-family: Lato, sans-serif;
    font-size: 18px;
  }
`

export const LinksContainer = styled.div`
  width: 100%;
  height: calc(95vh - 300px);
  margin-top: 100px;
`
export const Content = styled.div`
  margin-top: 120px;
`
