import React from 'react'
import { UserCardStyle, Avatar, StyledName, InfosDiv, Infos, SeeButton } from './styles'

export default function UserCard() {
  return (
    <UserCardStyle>
      <Avatar>
        <img src="https://avatars.githubusercontent.com/u/43068788?v=4" width="100%" />
      </Avatar>
      <InfosDiv>
        <StyledName>alvaro</StyledName>
        <Infos>
          <p>Seguindo: 0</p>
          <p>Seguidores: 0</p>
        </Infos>
      </InfosDiv>
      <SeeButton>Ver mais</SeeButton>
    </UserCardStyle>
  )
}
