import React from 'react'
import { StyledDiv } from './styles'

export default function Footer() {
  const date = `${new Date().getFullYear()}`
  return <StyledDiv> &copy; MyFeedRSS {date} - Feito com ❤️ por Álvaro Basílio</StyledDiv>
}
