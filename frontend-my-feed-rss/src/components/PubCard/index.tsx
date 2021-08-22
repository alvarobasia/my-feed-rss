import React, { useState } from 'react'
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
  callBackOpen: (id: string) => void
}
export default function PubCard({
  pub,
  callBackFollow,
  callBackUnFollow,
  callBackOpen
}: PubCardProps) {
  function handleFollow() {
    callBackFollow(pub.id)
  }

  function handleUnfollow() {
    callBackUnFollow(pub.id)
  }

  function handleModal() {
    callBackOpen(pub.id)
  }
  return (
    <UserCardStyle>
      {/* <Avatar>
        <img src={pub.avatarLink} width="100%" />
      </Avatar> */}
      <InfosDiv>
        <StyledName>{pub.name}</StyledName>
      </InfosDiv>
      {pub.follow && <SeeButton onClick={handleUnfollow}>Deixar de seguir</SeeButton>}
      {!pub.follow && <Follow onClick={handleFollow}>Seguir</Follow>}
      <Follow onClick={handleModal}>Ver publicações</Follow>
    </UserCardStyle>
  )
}
