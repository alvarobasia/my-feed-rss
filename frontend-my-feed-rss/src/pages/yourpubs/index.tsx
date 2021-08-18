import { Aside } from '../home/styles'
import {
  SearchInput,
  ContainerHead,
  SearchIcon,
  Container,
  SearchButton,
  BackIcon
} from '../users/styles'
import { PubCardContainer } from './styles'
import PubCard from '../../components/PubCard'
import PubPanel from '../../components/PubPanel'
import { AuthContext, User } from '../../contexts/AuthContext'
import React, { useContext, useEffect, useState } from 'react'
import { SEARCH_PUB } from '../../query/feed'
import { useMutation, useQuery } from '@apollo/client'
import { FOLLOW_PUB, UNFOLLOW_PUB } from '../../mutations/publisher'
import { useRouter } from 'next/router'
import { GET_PUBS } from '../../query/pub'

export type PubType = {
  name: string
  avatarLink: string
  owner: User | null
  followers: string[]
  id: string
  follow: boolean
}

export default function Pub() {
  const { push } = useRouter()
  const [pubs, setPubs] = useState<PubType | null>(null)
  const { data } = useQuery(GET_PUBS)

  function back() {
    push('/home')
  }

  useEffect(() => {
    if (data) {
      setPubs(data.getPubs)
    }
  }, [data])
  return (
    <Container>
      <Aside>
        <ContainerHead>
          <h1>Suas publicadoras</h1>
        </ContainerHead>
        <PubCardContainer>
          {pubs && (
            <PubCard
              callBackFollow={() => {}}
              callBackUnFollow={() => {}}
              key={pubs.id}
              pub={{
                avatarLink: pubs.avatarLink,
                name: pubs.name,
                owner: pubs.owner,
                followers: [],
                id: pubs.id,
                follow: pubs.follow
              }}
            />
          )}
        </PubCardContainer>
      </Aside>
    </Container>
  )
}
