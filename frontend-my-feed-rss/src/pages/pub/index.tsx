import { Aside } from '../home/styles'
import {
  SearchInput,
  ContainerHead,
  SearchIcon,
  Container,
  Back,
  SearchButton,
  BackIcon
} from '../users/styles'
import { BackDrop, Modal, PubCardContainer, Publica, BackButton } from './styles'
import PubCard from '../../components/PubCard'
import PubPanel from '../../components/PubPanel'
import { AuthContext, User } from '../../contexts/AuthContext'
import React, { useContext, useEffect, useState } from 'react'
import { SEARCH_PUB } from '../../query/feed'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { FOLLOW_PUB, UNFOLLOW_PUB } from '../../mutations/publisher'
import { useRouter } from 'next/router'
import { GET_PUBLICATIONS } from '../../query/pub'

export type PubType = {
  name: string
  avatarLink: string
  owner: User | null
  followers: string[]
  id: string
  follow: boolean
}

export default function Pub() {
  const [search, setSearch] = useState('')
  const { push } = useRouter()
  const [pubs, setPubs] = useState<PubType[]>([])
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState([])
  const [see, { data: publi }] = useLazyQuery(GET_PUBLICATIONS)
  const { data, refetch } = useQuery(SEARCH_PUB, {
    variables: {
      pattern: search
    }
  })

  const [follow] = useMutation(FOLLOW_PUB, {
    onCompleted: () => {
      refetch()
    }
  })
  const [unfollow] = useMutation(UNFOLLOW_PUB, {
    onCompleted: () => {
      refetch()
    }
  })

  function back() {
    push('/home')
  }

  useEffect(() => {
    const content: PubType[] = []

    if (data) {
      data.searchPublisher.forEach((e: any) => {
        content.push({
          ...e,
          linkAvatar: e.link_avatar
        })
      })
      setPubs(content)
    }
  }, [data])

  function handleFollow(id: string) {
    follow({
      variables: {
        id
      }
    })
  }

  function handleUnfollow(id: string) {
    unfollow({
      variables: {
        id
      }
    })
  }

  useEffect(() => {
    if (publi) {
      setContent(publi.getPublications)
    }
  }, [publi])

  function handleSeePublications(id: string) {
    setOpen(true)
    see({
      variables: {
        id
      }
    })
  }
  return (
    <>
      <BackDrop open={open}>
        <Modal>
          {content.map(({ content }) => {
            return <Publica key={content} dangerouslySetInnerHTML={{ __html: content }} />
          })}
          <BackButton onClick={() => setOpen(false)}>Voltar</BackButton>
        </Modal>
      </BackDrop>

      <Container>
        <Aside>
          <ContainerHead>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Digite o nome da publicadora"
            ></SearchInput>
            <SearchButton onClick={back}>
              <BackIcon />
            </SearchButton>
          </ContainerHead>
          <PubCardContainer>
            {pubs &&
              pubs.map((p) => {
                console.log(p.follow)

                return (
                  <PubCard
                    callBackOpen={handleSeePublications}
                    callBackFollow={handleFollow}
                    callBackUnFollow={handleUnfollow}
                    key={p.id}
                    pub={{
                      avatarLink: p.avatarLink,
                      name: p.name,
                      owner: p.owner,
                      followers: [],
                      id: p.id,
                      follow: p.follow
                    }}
                  />
                )
              })}
          </PubCardContainer>
        </Aside>
        {/* <PubPanel /> */}
      </Container>
    </>
  )
}
