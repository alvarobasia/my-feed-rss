import React from 'react'
import { PubType } from '../../pages/pub'
import { UserCardStyle, Avatar, StyledName, InfosDiv, Infos, Follow } from './styles'

type PubCardProps = {
  pub: PubType
  writePublication: (id: string) => void
}

export default function PubInfo({ pub, writePublication }: PubCardProps) {
  return (
    <UserCardStyle>
      {/* <Avatar>
        <img src={pub.avatarLink} width="100%" />
      </Avatar> */}
      <InfosDiv>
        <StyledName>{pub.name}</StyledName>
      </InfosDiv>
      <Follow onClick={() => writePublication(pub.id)}>Escrever publicação</Follow>
    </UserCardStyle>
  )
}
