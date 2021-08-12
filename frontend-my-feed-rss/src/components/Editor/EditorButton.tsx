import { IconType } from 'react-icons'
import { DefaultTheme, StyledComponent } from 'styled-components'
import { EditorButtonStyle } from './styles'

type EditorButtonProps = {
  Icon: StyledComponent<IconType, DefaultTheme, {}, never>
  callback: (command: string) => void
  command: string
  disable?: boolean
}
export const EditorButton = ({ Icon, callback, command, disable }: EditorButtonProps) => {
  return (
    <EditorButtonStyle disabled={disable} onClick={() => callback(command)}>
      {Icon}
    </EditorButtonStyle>
  )
}
