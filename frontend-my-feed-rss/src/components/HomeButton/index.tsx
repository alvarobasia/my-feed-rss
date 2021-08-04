import { PropsWithChildren } from 'react'
import { HomeButtonStyle } from './styles'

type HomeButtonProps = {
  title: string
  path: string
}

export default function HomeButton({
  title,
  children
}: PropsWithChildren<HomeButtonProps>) {
  return (
    <HomeButtonStyle>
      {children}
      <span>{title}</span>
    </HomeButtonStyle>
  )
}
