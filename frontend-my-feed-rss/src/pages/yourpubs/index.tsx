import { Aside } from '../home/styles'
import {
  SearchInput,
  ContainerHead,
  SearchIcon,
  Container,
  SearchButton,
  BackIcon
} from '../users/styles'
import { PubCardContainer, ContentInfo } from './styles'
import PubCard from '../../components/PubCard'
import PubPanel from '../../components/PubPanel'
import { AuthContext, User } from '../../contexts/AuthContext'
import React, { useContext, useEffect, useState } from 'react'
import { SEARCH_PUB } from '../../query/feed'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { FOLLOW_PUB, UNFOLLOW_PUB } from '../../mutations/publisher'
import { useRouter } from 'next/router'
import { GET_PUBLICATIONS, GET_PUBS } from '../../query/pub'
import PubInfo from '../../components/PubInfo'
import { PubContext } from '../../contexts/PubContext'
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
  const [content, setContent] = useState<any[]>([])
  const { data } = useQuery(GET_PUBS)
  const [publications, { data: publi, refetch }] = useLazyQuery(GET_PUBLICATIONS)
  const { setPub } = useContext(PubContext)

  useEffect(() => {
    if (refetch) {
      refetch()
    }
  }, [])
  function handleClick() {
    if (pubs) {
      setPub(pubs)
      push('/newpub')
    }
  }

  useEffect(() => {
    if (data) {
      setPubs(data.getPubs)
    }
  }, [data])

  useEffect(() => {
    if (pubs) {
      publications({
        variables: {
          id: pubs.id
        }
      })
    }
  }, [pubs])

  useEffect(() => {
    if (publi) {
      setContent(publi.getPublications)
    }
  }, [publi])
  return (
    <Container>
      <Aside>
        <ContainerHead>
          <h1>Suas publicadoras</h1>
        </ContainerHead>
        <PubCardContainer>
          {pubs && (
            <PubInfo
              writePublication={handleClick}
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
        <ContentInfo>
          {content.map(({ content }) => {
            return <div key={content} dangerouslySetInnerHTML={{ __html: content }} />
          })}
        </ContentInfo>
      </Aside>
    </Container>
  )
}
