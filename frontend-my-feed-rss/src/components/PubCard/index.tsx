import React from 'react'
import { UserCardStyle, Avatar, StyledName, InfosDiv, Infos, SeeButton } from './styles'

export default function PubCard() {
  return (
    <UserCardStyle>
      <Avatar>
        <img
          src="https://miro.medium.com/fit/c/64/64/1*TyRLQdZO7NdPATwSeut8gg.png"
          width="100%"
        />
      </Avatar>
      <InfosDiv>
        <StyledName>Coding</StyledName>
        <Infos>
          <p>Seguidores: 0</p>
          <p>Membros: 0</p>
        </Infos>
      </InfosDiv>
      <SeeButton>Ver mais</SeeButton>
    </UserCardStyle>
  )
}
