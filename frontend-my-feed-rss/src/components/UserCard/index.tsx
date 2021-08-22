import React from 'react'
import {
  UserCardStyle,
  Avatar,
  StyledName,
  InfosDiv,
  Infos,
  SeeButton,
  Follow
} from './styles'
type UserCardProps = {
  url: string
  name: string
  follow: boolean
  id: string
  callBackFollow: (id: string) => void
  callBackUnFollow: (id: string) => void
}
export default function UserCard({
  name,
  url,
  follow,
  id,
  callBackFollow,
  callBackUnFollow
}: UserCardProps) {
  function handleFollow() {
    callBackFollow(id)
  }

  function handleUnfollow() {
    callBackUnFollow(id)
  }
  return (
    <UserCardStyle>
      <Avatar>
        <img src={url} width="100%" />
      </Avatar>
      <InfosDiv>
        <StyledName>{name}</StyledName>
        {/* <Infos>
          <p>Seguindo: 0</p>
          <p>Seguidores: 0</p>
        </Infos> */}
      </InfosDiv>
      {follow && <SeeButton onClick={handleUnfollow}>Deixar de seguir</SeeButton>}
      {!follow && <Follow onClick={handleFollow}>Seguir</Follow>}
    </UserCardStyle>
  )
}
