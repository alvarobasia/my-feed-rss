import React from 'react'
import { PubType } from '../../pages/pub'
import {
  UserCardStyle,
  Avatar,
  StyledName,
  InfosDiv,
  Infos,
  SeeButton,
  Follow
} from './styles'
type PubCardProps = {
  pub: PubType
  callBackFollow: (id: string) => void
  callBackUnFollow: (id: string) => void
}
export default function PubCard({ pub, callBackFollow, callBackUnFollow }: PubCardProps) {
  console.log(pub.follow)

  function handleFollow() {
    callBackFollow(pub.id)
  }

  function handleUnfollow() {
    callBackUnFollow(pub.id)
  }
  return (
    <UserCardStyle>
      <Avatar>
        <img src={pub.avatarLink} width="100%" />
      </Avatar>
      <InfosDiv>
        <StyledName>{pub.name}</StyledName>
        <Infos>
          <p>Seguidores: {pub.followers.length}</p>
          <p>Publicações: 0</p>
        </Infos>
      </InfosDiv>
      {pub.follow && <SeeButton onClick={handleUnfollow}>Deixar de seguir</SeeButton>}
      {!pub.follow && <Follow onClick={handleFollow}>Seguir</Follow>}
    </UserCardStyle>
  )
}
