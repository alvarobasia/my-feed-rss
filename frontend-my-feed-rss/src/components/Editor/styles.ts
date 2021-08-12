import styled from 'styled-components'
import {
  AiOutlineUnderline,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineLineHeight,
  AiOutlineCode,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList
} from 'react-icons/ai'
import { IoMdRemove } from 'react-icons/io'
export const EditorStyle = styled.div`
  width: 80vw;
  height: 70vh;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 0 0 8px 8px;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 5px;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ConfigContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  background-color: ${(props) => props.theme.colors.primary};
`
export const IconUnderLine = styled(AiOutlineUnderline)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const IconBold = styled(AiOutlineBold)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const IconItalic = styled(AiOutlineItalic)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const Strike = styled(AiOutlineStrikethrough)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const Line = styled(AiOutlineLineHeight)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const Code = styled(AiOutlineCode)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const LinkButton = styled(AiOutlineLink)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const OrderList = styled(AiOutlineOrderedList)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const UnorderedList = styled(AiOutlineUnorderedList)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const Remove = styled(IoMdRemove)`
  color: #fff;
  font-size: 22px;
  padding: 0;
  margin: 0;
`
export const EditorButtonStyle = styled.button`
  width: 50px;
  height: 40px;
  margin: 5px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 500ms;
  padding: 0;
  & :hover {
    transform: scale(1.1);
  }
`

export const SelectStyle = styled.select`
  width: 200px;
  height: 40px;
  margin: 5px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 500ms;
  color: #fff;
  padding: 0;
`

export const SelectInput = styled.input`
  width: 200px;
  height: 40px;
  margin: 5px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 500ms;
  padding: 3px;
  font-size: 18px;
  font-family: Lato, sans-serif;
`
type ButtonActionProps = {
  buttonType: string
}

export const ButtonAction = styled.button<ButtonActionProps>`
  width: 110px;
  height: 80%;
  margin: auto 15px;
  background-color: ${(props) =>
    props.buttonType === 'save' ? props.theme.colors.secondaryDark : '#f44336'};
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-family: Lato, sans-serif;
  border: none;
  transition: all 500ms;
  &:hover {
    background-color: ${(props) =>
      props.buttonType === 'save' ? props.theme.colors.secondary : '#ba000d'};
  }
`
