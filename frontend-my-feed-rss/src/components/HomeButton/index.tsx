import { PropsWithChildren } from 'react'
import { HomeButtonStyle } from './styles'
import Link from 'next/link'
type HomeButtonProps = {
  title: string
  path: string
}

export default function HomeButton({
  title,
  children,
  path
}: PropsWithChildren<HomeButtonProps>) {
  return (
    <Link href={path}>
      <HomeButtonStyle>
        {children}
        <span>{title}</span>
      </HomeButtonStyle>
    </Link>
  )
}
