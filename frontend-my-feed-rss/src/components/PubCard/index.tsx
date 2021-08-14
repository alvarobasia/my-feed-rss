import React from 'react'
import { PubType } from '../../pages/pub'
import { UserCardStyle, Avatar, StyledName, InfosDiv, Infos, SeeButton } from './styles'
type PubCardProps = {
  pub: PubType
}
export default function PubCard({ pub }: PubCardProps) {
  return (
    <UserCardStyle>
      <Avatar>
        <img src={pub.avatarLink} width="100%" />
      </Avatar>
      <InfosDiv>
        <StyledName>{pub.name}</StyledName>
        <Infos>
          <p>Seguidores: {pub.followers.length}</p>
          <p>Membros: {pub.members.length}</p>
        </Infos>
      </InfosDiv>
      <SeeButton>Ver mais</SeeButton>
    </UserCardStyle>
  )
}
